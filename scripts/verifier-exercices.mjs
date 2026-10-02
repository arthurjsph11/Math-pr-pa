// Vérifie automatiquement tous les exercices tirés au hasard.
// Commande : npm run verifier
// Pour chaque exercice, on tire 3000 versions et on vérifie, avec un calcul indépendant (nombres décimaux),
// que la réponse attendue est juste, que les mauvaises réponses des QCM sont bien fausses,
// que toutes les formules s'affichent, et que la correction automatique accepte la bonne réponse.

import { build } from 'esbuild'
import katex from 'katex'

const sortie = await build({
  stdin: {
    contents: `export * from './calcul'; export { exercicesFractions } from './banque-fractions'`,
    resolveDir: new URL('../docs/.vitepress/theme/exercices', import.meta.url).pathname,
    loader: 'ts'
  },
  bundle: true, format: 'esm', write: false, platform: 'node'
})
const m = await import('data:text/javascript;base64,' + Buffer.from(sortie.outputFiles[0].text).toString('base64'))
const { corriger, texte, exercicesFractions } = m

let erreurs = 0
const echec = (msg) => { erreurs++; if (erreurs < 30) console.log('✗', msg) }
const proche = (a, b) => Math.abs(a - b) < 1e-9

// LaTeX simple → expression JavaScript (pour un calcul indépendant)
function versJs(t) {
  let s = t.replace(/\\left|\\right|\\,|\\ |\\displaystyle/g, '').replace(/\\[dt]?frac/g, '\\frac')
  for (let i = 0; i < 10; i++) s = s.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '(($1)/($2))')
  return s.replace(/\\times/g, '*').replace(/\\div/g, '/').replace(/−/g, '-')
}
const valeurTex = (t) => Function(`return (${versJs(t)})`)()
const formules = (s) => [...s.matchAll(/\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g)].map((x) => x[1] ?? x[2])
const premiere = (s) => formules(s)[0]

// Calcul indépendant de la bonne réponse, exercice par exercice
const nombres = (s) => (s.match(/\d+/g) || []).map(Number)
const independant = {
  'fractions-simplifier': (e) => valeurTex(premiere(e.enonce)),
  'fractions-addition-meme-denominateur': (e) => valeurTex(premiere(e.enonce)),
  'fractions-multiplier': (e) => valeurTex(premiere(e.enonce)),
  'fractions-fraction-quantite': (e) => { const total = nombres(e.enonce)[0]; return total * valeurTex(formules(e.enonce)[0]) },
  'fractions-soustraction-simplifier': (e) => valeurTex(premiere(e.enonce)),
  'fractions-addition-denominateurs-differents': (e) => valeurTex(premiere(e.enonce)),
  'fractions-soustraction-multiple': (e) => valeurTex(premiere(e.enonce)),
  'fractions-diviser': (e) => valeurTex(premiere(e.enonce)),
  'fractions-priorites': (e) => valeurTex(premiere(e.enonce)),
  'fractions-expression-complete': (e) => valeurTex(premiere(e.enonce)),
  // équations : on vérifie en remplaçant x par la solution
  'fractions-equation-produit': (e, x) => { const [g, d] = premiere(e.enonce).split('='); return proche(valeurTex(g.replace('x', `*(${x})`)), valeurTex(d)) ? x : NaN },
  'fractions-equation-deux-etapes': (e, x) => { const [g, d] = premiere(e.enonce).split('='); return proche(valeurTex(g.replace('{x}', `{${x}}`)), valeurTex(d)) ? x : NaN },
  'fractions-resistances-parallele': (e) => { const [r1, r2] = formules(e.enonce).slice(0, 2).map((f) => nombres(f)[1]); return 1 / (1 / r1 + 1 / r2) },
  'fractions-batterie': (e) => { const [p, q] = formules(e.enonce).map(valeurTex); return p - q },
  'fractions-fraction-de-fraction': (e) => { const [p, q] = formules(e.enonce).map(valeurTex); return p * q }
}

for (const modele of exercicesFractions) {
  if (!independant[modele.id]) echec(`${modele.id} : pas de calcul indépendant`)
  let plusGrandDenominateur = 0
  for (let i = 0; i < 3000; i++) {
    const e = modele.creer()
    const textes = [e.enonce, e.solution, ...e.indices, e.verification ?? '', ...(e.choix ?? []).flatMap((c) => [c.tex, c.explication])]
    for (const t of textes) for (const f of formules(t)) {
      try { katex.renderToString(f, { throwOnError: true }) } catch (err) { echec(`${modele.id} : formule cassée « ${f} »`) }
    }
    for (const c of e.choix ?? []) try { katex.renderToString(c.tex, { throwOnError: true }) } catch { echec(`${modele.id} : choix cassé ${c.tex}`) }

    let valeur
    if (e.attendu) {
      valeur = e.attendu.n / e.attendu.d
      plusGrandDenominateur = Math.max(plusGrandDenominateur, e.attendu.d)
      const reponse = (e.forme === 'equation' ? 'x = ' : '') + texte(e.attendu)
      const v = corriger(reponse, e.attendu, e.forme)
      if (v.etat !== 'juste') echec(`${modele.id} : la bonne réponse ${reponse} est refusée (${v.message})`)
    } else {
      const justes = e.choix.filter((c) => c.juste)
      if (justes.length !== 1) echec(`${modele.id} : ${justes.length} bonnes réponses dans le QCM`)
      valeur = valeurTex(justes[0].tex)
      for (const c of e.choix) if (!c.juste && proche(valeurTex(c.tex), valeur)) echec(`${modele.id} : la mauvaise réponse ${c.tex} vaut la bonne`)
      if (new Set(e.choix.map((c) => c.tex)).size !== e.choix.length) echec(`${modele.id} : deux choix identiques`)
    }
    const calcul = independant[modele.id]?.(e, valeur)
    if (!proche(calcul, valeur)) echec(`${modele.id} : attendu ${valeur}, calcul indépendant ${calcul} — ${e.enonce}`)
    // la dernière égalité du corrigé doit donner la bonne réponse
    const fin = formules(e.solution).map((f) => f.replace(/\\boxed\{(.*)\}/, '$1').split('=').pop().replace(/\\end\{aligned\}|\\ \\Omega/g, ''))
    if (!fin.some((f) => { try { return proche(valeurTex(f), valeur) } catch { return false } })) {
      if (!/\*\*R = /.test(e.solution)) echec(`${modele.id} : le corrigé n'aboutit pas au résultat — ${e.solution}`)
    }
  }
  console.log(`✓ ${modele.id} (niveau ${modele.niveau}) : plus grand dénominateur du résultat = ${plusGrandDenominateur || '—'}`)
}

// Correction automatique : cas demandés par Arthur
const f = m.frac
const cas = [
  ['1/2', f(1, 2), 'libre', 'juste'], ['2/4', f(1, 2), 'libre', 'juste'], ['0,5', f(1, 2), 'libre', 'juste'], ['0.5', f(1, 2), 'libre', 'juste'],
  ['2/4', f(1, 2), 'irreductible', 'presque'], ['0,5', f(1, 2), 'irreductible', 'presque'], ['1/2', f(1, 2), 'irreductible', 'juste'],
  ['6/2', f(3), 'irreductible', 'presque'], ['3/1', f(3), 'irreductible', 'presque'], ['3', f(3), 'irreductible', 'juste'],
  ['-3/4', f(-3, 4), 'irreductible', 'juste'], ['−3/4', f(-3, 4), 'irreductible', 'juste'],
  ['x = 5/3', f(5, 3), 'equation', 'juste'], ['x=5/3', f(5, 3), 'equation', 'juste'], ['5/3 = x', f(5, 3), 'equation', 'juste'],
  ['5/3', f(5, 3), 'equation', 'presque'], ['x = 10/6', f(5, 3), 'equation', 'presque'], ['x = 4/3', f(5, 3), 'equation', 'faux'],
  ['1/2+1/2', f(1), 'libre', 'presque'], ['2/5', f(1, 2), 'libre', 'faux'], ['0,33', f(1, 3), 'libre', 'faux'],
  ['3/', f(1), 'libre', 'illisible'], ['(1/2', f(1, 2), 'libre', 'illisible'], ['1/0', f(1), 'libre', 'illisible'],
  ['√(4)', f(2), 'libre', 'presque'], ['2^3', f(8), 'libre', 'presque'], ['3 × 1/2', f(3, 2), 'libre', 'presque'], ['12', f(12), 'libre', 'juste']
]
for (const [saisie, attendu, forme, etat] of cas) {
  const v = corriger(saisie, attendu, forme)
  if (v.etat !== etat) echec(`correction : « ${saisie} » (${forme}) donne ${v.etat} au lieu de ${etat} : ${v.message}`)
}
console.log(`✓ ${cas.length} cas de correction automatique testés`)
console.log('Aperçu de « (1+2)/3 » :', m.apercu('(1+2)/3').tex, '| « x = -2/3 » :', m.apercu('x = -2/3').tex, '| « 2^(1/2) » :', m.apercu('2^(1/2)').tex)

if (erreurs) { console.log(`\n${erreurs} problème(s) trouvé(s).`); process.exit(1) }
console.log('\nTout est juste.')
