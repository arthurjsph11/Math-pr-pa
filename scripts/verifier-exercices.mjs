// Vérifie automatiquement tous les exercices tirés au hasard.
// Commande : npm run verifier
// Pour chaque exercice, on tire 3000 versions et on vérifie, avec un calcul indépendant (nombres décimaux),
// que la réponse attendue est juste, que les mauvaises réponses des QCM sont bien fausses,
// que toutes les formules s'affichent, et que la correction automatique accepte la bonne réponse.

import { build } from 'esbuild'
import katex from 'katex'

const sortie = await build({
  stdin: {
    contents: `export * from './calcul'; export { tousLesExercices } from './index'`,
    resolveDir: new URL('../docs/.vitepress/theme/exercices', import.meta.url).pathname,
    loader: 'ts'
  },
  bundle: true, format: 'esm', write: false, platform: 'node'
})
const m = await import('data:text/javascript;base64,' + Buffer.from(sortie.outputFiles[0].text).toString('base64'))
const { corriger, texte, tousLesExercices } = m

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


// ---------- Second degré : calculs indépendants (on relit le trinôme écrit dans l'énoncé) ----------
// « 2x^2 - x - 6 » → [a, b, c]
function coeffs(t, v = 'x') {
  const k = [0, 0, 0]
  for (const terme of t.replace(/\s/g, '').match(/[+-]?[^+-]+/g)) {
    let deg = 0, nb = terme
    if (terme.endsWith(v + '^2')) { deg = 2; nb = terme.slice(0, -(v.length + 2)) }
    else if (terme.endsWith(v)) { deg = 1; nb = terme.slice(0, -v.length) }
    k[2 - deg] += nb === '' || nb === '+' ? 1 : nb === '-' ? -1 : Number(nb)
  }
  if (k.some(Number.isNaN)) throw new Error('trinôme illisible : ' + t)
  return k
}
const membre = (f) => { const [g, d] = f.split('='); return d === undefined ? g : /x|t/.test(d) ? d : g }
const trinome = (f, v) => coeffs(membre(f), v)
const valeurPoly = ([a, b, c], x) => a * x * x + b * x + c
const delta = ([a, b, c]) => b * b - 4 * a * c
const racines = (k) => { const [a, b] = k, D = delta(k); return D < 0 ? [] : [(-b - Math.sqrt(D)) / (2 * a), (-b + Math.sqrt(D)) / (2 * a)].sort((p, q) => p - q) }
const nbSolutions = (k) => { const D = delta(k); return Math.abs(D) < 1e-9 ? 1 : D < 0 ? 0 : 2 }
const sommetY = ([a, b, c]) => c - (b * b) / (4 * a)
const decimal = (t) => Number(t.replace('{,}', '.'))
// Ensemble solution attendu, avec les mêmes conventions d'écriture que la banque
function ensemble(a, r1, r2, signe) {
  const strict = signe === '>' || signe === '<', positif = signe === '>' || signe === '\\geq'
  const dedans = positif ? a < 0 : a > 0
  if (dedans) return strict ? `\\left]${r1} \\,;\\, ${r2}\\right[` : `\\left[${r1} \\,;\\, ${r2}\\right]`
  return strict
    ? `\\left]-\\infty \\,;\\, ${r1}\\right[ \\cup \\left]${r2} \\,;\\, +\\infty\\right[`
    : `\\left]-\\infty \\,;\\, ${r1}\\right] \\cup \\left[${r2} \\,;\\, +\\infty\\right[`
}
const signeDe = (f) => f.match(/(\\geq|\\leq|>|<)/)[1]
Object.assign(independant, {
  'sd-coefficients': (e) => { const k = trinome(premiere(e.enonce)); return k['abc'.indexOf(e.enonce.match(/valeur de \*\*([abc])\*\*/)[1])] },
  'sd-discriminant': (e) => delta(coeffs(formules(e.enonce)[1])),
  'sd-nombre-solutions': (e) => nbSolutions(trinome(premiere(e.enonce))),
  'sd-sommet': (e) => { const [a, b] = trinome(premiere(e.enonce)); return -b / (2 * a) },
  'sd-sans-c': (e, x) => { const k = trinome(premiere(e.enonce)); return k[2] === 0 && x !== 0 && proche(valeurPoly(k, x), 0) ? x : NaN },
  'sd-resoudre-delta': (e) => racines(trinome(premiere(e.enonce)))[0],
  'sd-forme-canonique': (e) => sommetY(trinome(premiere(e.enonce))),
  'sd-autre-racine': (e, x) => { const k = trinome(premiere(e.enonce)), r = nombres(formules(e.enonce)[1])[0] * (formules(e.enonce)[1].includes('-') ? -1 : 1); return proche(valeurPoly(k, r), 0) && !proche(x, r) && proche(valeurPoly(k, x), 0) ? x : NaN },
  'sd-potager': (e) => { const P = nombres(e.enonce)[0]; let best = 0; for (let x = 0; x <= P / 2; x += 0.25) best = Math.max(best, x * (P - 2 * x)); return best },
  'sd-puissance-source': (e) => { const [E, r] = formules(e.enonce).slice(0, 2).map((f) => decimal(f.split('=')[1].replace(/\\ \\Omega/, '').trim())); let best = 0; for (let I = 0; I <= E / r; I += 0.0625) best = Math.max(best, E * I - r * I * I); return best },
  'sd-feu-artifice': (e) => sommetY(trinome(formules(e.enonce).find((f) => f.includes('h(t)')), 't')),
  'sd-parametre': (e) => { const [, a, c] = formules(e.enonce).find((f) => f.includes('x^2')).replace(/\s/g, '').match(/^(\d*)x\^2\+mx\+(\d+)=0$/); return 2 * Math.sqrt((Number(a) || 1) * Number(c)) },
  'sd-parabole-droite': (e) => { const [p, d] = formules(e.enonce).map((f) => coeffs(f.split('=')[1])); return nbSolutions([p[0] - d[0], p[1] - d[1], p[2] - d[2]]) },
  'sd-rectangle': (e) => { const [per, A] = nombres(e.enonce); const S = per / 2; return (S + Math.sqrt(S * S - 4 * A)) / 2 }
})
// QCM dont les réponses sont des ensembles (pas des nombres) : on recalcule la bonne réponse écrite
const independantTexte = {
  'sd-signe-factorise': (e) => {
    const [f, ineq] = formules(e.enonce)
    const m = f.replace(/\s/g, '').match(/^f\(x\)=(-?\d*)(.*)$/)
    const a = m[1] === '' ? 1 : m[1] === '-' ? -1 : Number(m[1])
    const rs = [...m[2].matchAll(/\(x([+-])(\d+)\)|x/g)].map((t) => (t[0] === 'x' ? 0 : (t[1] === '-' ? 1 : -1) * Number(t[2])))
    const k = [a, -a * (rs[0] + rs[1]), a * rs[0] * rs[1]]
    const [r1, r2] = racines(k).map(Math.round)
    return ensemble(a, r1, r2, signeDe(ineq))
  },
  'sd-inequation': (e) => {
    const f = premiere(e.enonce), s = signeDe(f), k = coeffs(f.split(s)[0])
    const [r1, r2] = racines(k).map(Math.round)
    return ensemble(k[0], r1, r2, s)
  }
}
// QCM « combien de solutions » : le corrigé conclut en mots, pas par une égalité
const conclusionEnMots = new Set(['sd-nombre-solutions', 'sd-parabole-droite', 'sd-signe-factorise', 'sd-inequation'])

for (const modele of tousLesExercices) {
  if (!independant[modele.id] && !independantTexte[modele.id]) echec(`${modele.id} : pas de calcul indépendant`)
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
    } else if (independantTexte[modele.id]) {
      const justes = e.choix.filter((c) => c.juste)
      if (justes.length !== 1) echec(`${modele.id} : ${justes.length} bonnes réponses dans le QCM`)
      if (new Set(e.choix.map((c) => c.tex)).size !== e.choix.length) echec(`${modele.id} : deux choix identiques`)
      const attendu = independantTexte[modele.id](e)
      if (justes[0]?.tex !== attendu) echec(`${modele.id} : bonne réponse ${justes[0]?.tex}, calcul indépendant ${attendu} — ${e.enonce}`)
      if (e.bonne !== attendu) echec(`${modele.id} : « bonne » ne correspond pas`)
      continue
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
    if (!conclusionEnMots.has(modele.id) && !fin.some((f) => { try { return proche(valeurTex(f), valeur) } catch { return false } })) {
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
