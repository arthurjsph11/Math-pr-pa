// Moteur de calcul des exercices : fractions exactes, lecture des réponses tapées,
// et correction automatique (réponse juste écrite autrement, fraction irréductible, « x = valeur »).

// ---------- Fractions exactes ----------

export interface Frac { n: number; d: number } // toujours simplifiée, d > 0

export const pgcd = (a: number, b: number): number => {
  a = Math.abs(a); b = Math.abs(b)
  while (b) [a, b] = [b, a % b]
  return a
}

export function frac(n: number, d = 1): Frac {
  if (d === 0) throw new Error('division par zéro')
  if (d < 0) { n = -n; d = -d }
  const g = pgcd(n, d) || 1
  return { n: n / g, d: d / g }
}

export const plus = (a: Frac, b: Frac) => frac(a.n * b.d + b.n * a.d, a.d * b.d)
export const moins = (a: Frac, b: Frac) => frac(a.n * b.d - b.n * a.d, a.d * b.d)
export const fois = (a: Frac, b: Frac) => frac(a.n * b.n, a.d * b.d)
export const divise = (a: Frac, b: Frac) => frac(a.n * b.d, a.d * b.n)
export const egal = (a: Frac, b: Frac) => a.n === b.n && a.d === b.d

// Écriture LaTeX d'une fraction simplifiée : 3, -2, \frac{3}{4}, -\frac{3}{4}
export function tex(f: Frac): string {
  if (f.d === 1) return String(f.n)
  return (f.n < 0 ? '-' : '') + `\\frac{${Math.abs(f.n)}}{${f.d}}`
}
// Fraction non simplifiée écrite telle quelle (pour les étapes des corrigés)
export const texBrut = (n: number, d: number) => (n < 0 ? '-' : '') + `\\frac{${Math.abs(n)}}{${d}}`
// Écriture « tapable » : 3/4
export const texte = (f: Frac) => (f.d === 1 ? String(f.n) : `${f.n}/${f.d}`)

// ---------- Lecture d'une réponse tapée ----------
// Accepte : 3/4  0,75  -2  (1/2+1/3)*2  2^3  √(9)  2x  x = 5/3  ×  ÷  −

type Noeud =
  | { t: 'nb'; v: Frac; ecrit: string; decimal: boolean }
  | { t: 'x' }
  | { t: 'par'; e: Noeud }
  | { t: 'neg'; e: Noeud }
  | { t: 'op'; op: '+' | '-' | '*' | '/' | '^'; g: Noeud; d: Noeud; implicite?: boolean }
  | { t: 'rac'; e: Noeud }

export class ErreurLecture extends Error {}

function decouper(s: string): string[] {
  const propre = s
    .replace(/[−–]/g, '-')
    .replace(/[×·]/g, '*')
    .replace(/÷/g, '/')
    .replace(/X/g, 'x')
    .replace(/\s+/g, '')
  const jetons: string[] = []
  let i = 0
  while (i < propre.length) {
    const c = propre[i]
    if (/[0-9]/.test(c)) {
      let j = i
      while (j < propre.length && /[0-9]/.test(propre[j])) j++
      if (propre[j] === ',' || propre[j] === '.') {
        j++
        if (!/[0-9]/.test(propre[j] ?? '')) throw new ErreurLecture('Un chiffre manque après la virgule.')
        while (j < propre.length && /[0-9]/.test(propre[j])) j++
      }
      jetons.push(propre.slice(i, j))
      i = j
    } else if ('+-*/^()x√='.includes(c)) {
      jetons.push(c)
      i++
    } else {
      throw new ErreurLecture(`Je ne comprends pas le caractère « ${c} ».`)
    }
  }
  return jetons
}

function lireExpression(jetons: string[]): Noeud {
  let pos = 0
  const voir = () => jetons[pos]
  const prendre = () => jetons[pos++]

  // somme := produit (('+'|'-') produit)*
  function somme(): Noeud {
    let g = produit()
    while (voir() === '+' || voir() === '-') {
      const op = prendre() as '+' | '-'
      g = { t: 'op', op, g, d: produit() }
    }
    return g
  }
  // produit := signe (('*'|'/') signe | facteur collé)*   ex. 2x, 3(1+2), 2√(4)
  function produit(): Noeud {
    let g = signe()
    for (;;) {
      if (voir() === '*' || voir() === '/') {
        const op = prendre() as '*' | '/'
        g = { t: 'op', op, g, d: signe() }
      } else if (voir() === 'x' || voir() === '(' || voir() === '√' || (voir() !== undefined && /^[0-9]/.test(voir()) && g.t !== 'nb')) {
        g = { t: 'op', op: '*', g, d: puissance(), implicite: true }
      } else return g
    }
  }
  function signe(): Noeud {
    if (voir() === '-') { prendre(); return { t: 'neg', e: signe() } }
    if (voir() === '+') { prendre(); return signe() }
    return puissance()
  }
  function puissance(): Noeud {
    const base = atome()
    if (voir() === '^') { prendre(); return { t: 'op', op: '^', g: base, d: signe() } }
    return base
  }
  function atome(): Noeud {
    const j = prendre()
    if (j === undefined) throw new ErreurLecture('Ta réponse est incomplète.')
    if (/^[0-9]/.test(j)) {
      const [ent, dec = ''] = j.replace(',', '.').split('.')
      return { t: 'nb', v: frac(Number(ent + dec), 10 ** dec.length), ecrit: j, decimal: dec.length > 0 }
    }
    if (j === 'x') return { t: 'x' }
    if (j === '√') return { t: 'rac', e: atome() }
    if (j === '(') {
      const e = somme()
      if (prendre() !== ')') throw new ErreurLecture('Il manque une parenthèse fermante « ) ».')
      return { t: 'par', e }
    }
    if (j === ')') throw new ErreurLecture('Il y a une parenthèse « ) » en trop.')
    throw new ErreurLecture(`« ${j} » est mal placé.`)
  }

  const e = somme()
  if (pos < jetons.length) {
    throw new ErreurLecture(jetons[pos] === ')' ? 'Il y a une parenthèse « ) » en trop.' : `« ${jetons[pos]} » est mal placé.`)
  }
  return e
}

// Valeur exacte d'une expression (sans x). Une racine non exacte donne une valeur approchée.
interface Valeur { f?: Frac; approx: number }

function evaluer(e: Noeud): Valeur {
  const exacte = (f: Frac): Valeur => ({ f, approx: f.n / f.d })
  switch (e.t) {
    case 'nb': return exacte(e.v)
    case 'x': throw new ErreurLecture('Ta réponse ne doit pas contenir x ici.')
    case 'par': return evaluer(e.e)
    case 'neg': { const v = evaluer(e.e); return v.f ? exacte(frac(-v.f.n, v.f.d)) : { approx: -v.approx } }
    case 'rac': {
      const v = evaluer(e.e)
      if (v.approx < 0) throw new ErreurLecture("On ne peut pas prendre la racine d'un nombre négatif.")
      if (v.f) {
        const rn = Math.round(Math.sqrt(v.f.n)), rd = Math.round(Math.sqrt(v.f.d))
        if (rn * rn === v.f.n && rd * rd === v.f.d) return exacte(frac(rn, rd))
      }
      return { approx: Math.sqrt(v.approx) }
    }
    case 'op': {
      const a = evaluer(e.g), b = evaluer(e.d)
      if ((e.op === '/') && b.approx === 0) throw new ErreurLecture('On ne peut pas diviser par 0.')
      if (a.f && b.f) {
        if (e.op === '+') return exacte(plus(a.f, b.f))
        if (e.op === '-') return exacte(moins(a.f, b.f))
        if (e.op === '*') return exacte(fois(a.f, b.f))
        if (e.op === '/') return exacte(divise(a.f, b.f))
        if (e.op === '^' && b.f.d === 1 && Math.abs(b.f.n) <= 12) {
          let r = frac(1)
          for (let k = 0; k < Math.abs(b.f.n); k++) r = fois(r, a.f)
          if (b.f.n < 0) r = divise(frac(1), r)
          return exacte(r)
        }
      }
      const x = a.approx, y = b.approx
      const r = e.op === '+' ? x + y : e.op === '-' ? x - y : e.op === '*' ? x * y : e.op === '/' ? x / y : x ** y
      return { approx: r }
    }
  }
}

// ---------- Affichage de ce qui est tapé (aperçu en LaTeX) ----------

function enTex(e: Noeud): string {
  switch (e.t) {
    case 'nb': return e.ecrit.replace('.', ',').replace(',', '{,}')
    case 'x': return 'x'
    case 'par': return `\\left(${enTex(e.e)}\\right)`
    case 'neg': return `-${enTex(e.e)}`
    case 'rac': return `\\sqrt{${enTex(e.e.t === 'par' ? e.e.e : e.e)}}`
    case 'op': {
      const sansPar = (n: Noeud) => enTex(n.t === 'par' ? n.e : n)
      if (e.op === '/') return `\\dfrac{${sansPar(e.g)}}{${sansPar(e.d)}}`
      if (e.op === '^') return `{${enTex(e.g)}}^{${sansPar(e.d)}}`
      if (e.op === '*') return e.implicite ? `${enTex(e.g)}${enTex(e.d)}` : `${enTex(e.g)} \\times ${enTex(e.d)}`
      return `${enTex(e.g)} ${e.op} ${enTex(e.d)}`
    }
  }
}

export function apercu(saisie: string): { tex?: string; erreur?: string } {
  if (!saisie.trim()) return {}
  try {
    const morceaux = saisie.split('=')
    if (morceaux.length > 2) return { erreur: 'Un seul signe = suffit.' }
    const parties = morceaux.map((m) => (m.trim() ? enTex(lireExpression(decouper(m))) : ''))
    return { tex: parties.join(' = ') }
  } catch (err) {
    return { erreur: err instanceof ErreurLecture ? err.message : 'Ta réponse est incomplète.' }
  }
}

// ---------- Correction automatique ----------

// libre        : toute écriture finie et juste est acceptée (1/2, 2/4, 0,5)
// irreductible : il faut une fraction irréductible (ou un entier)
// equation     : il faut écrire « x = valeur » ; valeur en fraction irréductible
export type Forme = 'libre' | 'irreductible' | 'equation'

export type Verdict =
  | { etat: 'juste'; message: string }
  | { etat: 'presque'; message: string } // juste mais mal écrit : pas compté comme une erreur
  | { etat: 'faux'; message: string }
  | { etat: 'illisible'; message: string }

// Est-ce un nombre « fini » : entier, décimal, ou a/b (avec éventuellement un signe moins) ?
function formeSimple(e: Noeud): { fraction?: { n: number; d: number; entier: boolean }; decimal: boolean } | null {
  let neg = false
  if (e.t === 'neg') { neg = true; e = e.e }
  if (e.t === 'nb') {
    if (e.decimal) return { decimal: true }
    return { fraction: { n: (neg ? -1 : 1) * e.v.n, d: 1, entier: true }, decimal: false }
  }
  if (e.t === 'op' && e.op === '/' && e.g.t === 'nb' && e.d.t === 'nb' && !e.g.decimal && !e.d.decimal) {
    return { fraction: { n: (neg ? -1 : 1) * e.g.v.n, d: e.d.v.n, entier: false }, decimal: false }
  }
  if (e.t === 'op' && e.op === '/' && e.g.t === 'neg' && e.g.e.t === 'nb' && e.d.t === 'nb' && !e.g.e.decimal && !e.d.decimal && !neg) {
    return { fraction: { n: -e.g.e.v.n, d: e.d.v.n, entier: false }, decimal: false }
  }
  return null
}

export function corriger(saisie: string, attendu: Frac, forme: Forme): Verdict {
  let brut = saisie.trim()
  if (!brut) return { etat: 'illisible', message: "Écris ta réponse dans l'encadré." }

  let ecritAvecX = false
  if (brut.includes('=')) {
    const [g, d, ...reste] = brut.split('=')
    if (reste.length) return { etat: 'illisible', message: 'Un seul signe = suffit.' }
    const gx = g.replace(/\s/g, '').toLowerCase(), dx = d.replace(/\s/g, '').toLowerCase()
    if (gx === 'x') brut = d
    else if (dx === 'x') brut = g
    else return { etat: 'illisible', message: 'Écris ta réponse sous la forme x = valeur.' }
    ecritAvecX = true
  }

  let arbre: Noeud
  let valeur: Valeur
  try {
    arbre = lireExpression(decouper(brut))
    valeur = evaluer(arbre)
  } catch (err) {
    return { etat: 'illisible', message: err instanceof ErreurLecture ? err.message : 'Ta réponse est incomplète.' }
  }

  const cible = attendu.n / attendu.d
  const juste = valeur.f ? egal(valeur.f, attendu) : Math.abs(valeur.approx - cible) < 1e-9
  if (!juste) {
    const proche = Math.abs(valeur.approx - cible) < 0.01 * Math.max(1, Math.abs(cible))
    if (proche && (!valeur.f || simpleDecimal(arbre))) {
      return { etat: 'faux', message: "Presque : c'est une valeur arrondie. Donne la valeur exacte, sous forme de fraction." }
    }
    return { etat: 'faux', message: "Ce n'est pas le bon résultat." }
  }

  const simple = formeSimple(arbre)
  if (!simple) return { etat: 'presque', message: 'Juste, mais termine le calcul : donne un seul nombre.' }

  if (forme === 'irreductible' || forme === 'equation') {
    if (simple.decimal) return { etat: 'presque', message: 'Juste, mais donne le résultat sous forme de fraction irréductible.' }
    const { n, d, entier } = simple.fraction!
    if (!entier && (d === 1 || pgcd(n, d) !== 1)) return { etat: 'presque', message: 'Juste, mais simplifie encore.' }
  }

  if (forme === 'equation' && !ecritAvecX) {
    return { etat: 'presque', message: 'Juste, mais écris ta réponse sous la forme x = valeur.' }
  }
  return { etat: 'juste', message: 'Juste ! Bravo.' }
}

function simpleDecimal(e: Noeud): boolean {
  if (e.t === 'neg') e = e.e
  return e.t === 'nb' && e.decimal
}
