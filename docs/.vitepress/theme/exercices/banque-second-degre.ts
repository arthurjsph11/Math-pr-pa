// Exercices sur le second degré (1re spé) : 3 niveaux, au moins 5 exercices par niveau.
// Exercices écrits pour ce site. Ils couvrent les mêmes notions que les 24 exercices de ParaMaths
// (liens sur la page d'exercices), sans en recopier les énoncés ni les corrigés.
// Chaque fonction « creer » tire de nouveaux nombres, choisis pour que les racines restent simples.
// Tous les résultats sont recalculés et vérifiés par le script : node scripts/verifier-exercices.mjs

import { frac, plus, fois, pgcd, tex, type Frac } from './calcul'
import { hasard, auHasard, type ModeleExo, type Exo } from './types'

const T = 'second-degre'

// Nombre entre parenthèses s'il est négatif : (-3)
const par = (n: number) => (n < 0 ? `(${n})` : String(n))
const parF = (f: Frac) => (f.n < 0 || f.d !== 1 ? `\\left(${tex(f)}\\right)` : tex(f))

// Écriture LaTeX de a v² + b v + c (sans les termes nuls, sans « 1x »)
export function poly(a: number, b: number, c: number, v = 'x'): string {
  const termes: string[] = []
  const ajouter = (k: number, lettre: string) => {
    if (k === 0) return
    const signe = k < 0 ? '-' : termes.length ? '+' : ''
    const n = Math.abs(k)
    const nombre = lettre && n === 1 ? '' : String(n)
    termes.push(`${termes.length ? ` ${signe} ` : signe}${nombre}${lettre}`)
  }
  ajouter(a, `${v}^2`); ajouter(b, v); ajouter(c, '')
  return termes.join('') || '0'
}
// (x - r) écrit proprement : (x - 3), (x + 2), x
const facteur = (r: number) => (r === 0 ? 'x' : `(x ${r > 0 ? '-' : '+'} ${Math.abs(r)})`)
const devant = (a: number) => (a === 1 ? '' : a === -1 ? '-' : String(a))

// Remplace x par une valeur dans a x² + b x + c, étape par étape (bloc « Vérifier mon résultat »)
function remplacer(a: number, b: number, c: number, x: Frac): string {
  const t1 = fois(frac(a), fois(x, x)), t2 = fois(frac(b), x), total = plus(plus(t1, t2), frac(c))
  const morceaux = [tex(t1), tex(t2), ...(c ? [String(c)] : [])].map((m, i) => (i ? (m.startsWith('-') ? `- ${m.slice(1)}` : `+ ${m}`) : m)).join(' ')
  const gauche = `${par(a)} \\times ${parF(x)}^2 + ${par(b)} \\times ${parF(x)}${c ? ` + ${par(c)}` : ''}`
  return `$$${gauche} = ${morceaux} = ${tex(total)}$$ On trouve bien 0 ✓`
}

// Calcul du discriminant écrit en entier
const calculDelta = (a: number, b: number, c: number) =>
  `\\Delta = b^2 - 4ac = ${par(b)}^2 - 4 \\times ${par(a)} \\times ${par(c)} = ${b * b - 4 * a * c}`

// Les deux racines par les formules, quand Δ est un carré parfait
function racinesFormules(a: number, b: number, D: number): { x1: Frac; x2: Frac; tex: string } {
  const s = Math.round(Math.sqrt(D))
  const x1 = frac(-b - s, 2 * a), x2 = frac(-b + s, 2 * a)
  return {
    x1, x2,
    tex:
      `$$x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{${-b} - ${s}}{${2 * a}} = ${tex(x1)}$$\n` +
      `$$x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{${-b} + ${s}}{${2 * a}} = ${tex(x2)}$$`
  }
}

const nonNul = (min: number, max: number) => { let n; do n = hasard(min, max); while (n === 0); return n }

// Ensembles solutions d'une inéquation (racines r1 < r2)
const entre = (r1: number, r2: number, ouvert: boolean) =>
  ouvert ? `\\left]${r1} \\,;\\, ${r2}\\right[` : `\\left[${r1} \\,;\\, ${r2}\\right]`
const dehors = (r1: number, r2: number, ouvert: boolean) =>
  ouvert
    ? `\\left]-\\infty \\,;\\, ${r1}\\right[ \\cup \\left]${r2} \\,;\\, +\\infty\\right[`
    : `\\left]-\\infty \\,;\\, ${r1}\\right] \\cup \\left[${r2} \\,;\\, +\\infty\\right[`
const SIGNES = ['>', '<', '\\geq', '\\leq'] as const

function choixInequation(a: number, r1: number, r2: number, signe: (typeof SIGNES)[number]) {
  const strict = signe === '>' || signe === '<'
  const veutPositif = signe === '>' || signe === '\\geq'
  const dedans = veutPositif === (a < 0) // entre les racines, le trinôme a le signe contraire de a
  const crochets = strict
    ? "L'inégalité est stricte : les racines (où le trinôme vaut 0) ne sont pas solutions, les crochets sont tournés vers l'extérieur."
    : "L'inégalité est large (≥ ou ≤) : les racines, où le trinôme vaut 0, sont solutions. Il faut les crochets fermés de leur côté."
  const zone = `Le trinôme a le signe de $a$ à l'extérieur des racines et le signe contraire entre elles. Ici $a = ${a}$ est ${a > 0 ? 'positif' : 'négatif'}.`
  const choix = [
    { tex: entre(r1, r2, strict), juste: dedans, explication: dedans ? '' : zone },
    { tex: entre(r1, r2, !strict), explication: dedans ? crochets : zone },
    { tex: dehors(r1, r2, strict), juste: !dedans, explication: !dedans ? '' : zone },
    { tex: dehors(r1, r2, !strict), explication: !dedans ? crochets : zone }
  ].map((ch) => (ch.juste ? ch : { tex: ch.tex, explication: ch.explication }))
  const bonne = dedans ? entre(r1, r2, strict) : dehors(r1, r2, strict)
  return { choix, bonne, dedans, strict, veutPositif }
}

function tableauSigne(a: number, r1: number, r2: number) {
  const s = a > 0 ? ['+', '-', '+'] : ['-', '+', '-']
  return `$$\\begin{array}{c|ccccccc} x & -\\infty & & ${r1} & & ${r2} & & +\\infty \\\\ \\hline \\text{signe} & & ${s[0]} & 0 & ${s[1]} & 0 & ${s[2]} & \\end{array}$$`
}

// Nombre de solutions : les trois cas, avec une explication pour chaque mauvaise réponse
function choixNombre(D: number) {
  const n = D < 0 ? 0 : D === 0 ? 1 : 2
  const texte: Record<number, string> = {
    0: 'Aucune solution seulement si $\\Delta < 0$.',
    1: 'Une seule solution seulement si $\\Delta = 0$ (le sommet est posé sur l\'axe).',
    2: 'Deux solutions seulement si $\\Delta > 0$.'
  }
  return {
    n,
    choix: [0, 1, 2].map((k) => (k === n
      ? { tex: String(k), juste: true, explication: '' }
      : { tex: String(k), explication: `${texte[k]} Ici $\\Delta = ${D}$. Vérifie le calcul : attention à $b^2$ (toujours positif) et au signe de $-4ac$.` }))
  }
}

export const exercicesSecondDegre: ModeleExo[] = [
  // ---------------- Niveau 1 : application ----------------
  {
    id: 'sd-coefficients',
    theme: T,
    niveau: 1,
    titre: 'Lire a, b et c',
    creer(): Exo {
      const a = nonNul(-5, 5), b = nonNul(-9, 9), c = nonNul(-9, 9)
      const termes = [
        { t: poly(a, 0, 0), k: a }, { t: poly(0, b, 0), k: b }, { t: poly(0, 0, c), k: c }
      ]
      const ordre = auHasard([[2, 1, 0], [1, 0, 2], [2, 0, 1], [0, 2, 1]])
      const ecrit = ordre.map((i, j) => {
        const m = termes[i].t
        return j === 0 ? m : m.startsWith('-') ? ` - ${m.slice(1)}` : ` + ${m}`
      }).join('')
      const lettre = auHasard(['a', 'b', 'c'] as const)
      const val = { a, b, c }[lettre]
      return {
        enonce: `On considère $f(x) = ${ecrit}$.\n\nC'est une fonction du second degré $f(x) = ax^2 + bx + c$. Quelle est la valeur de **${lettre}** ?`,
        attendu: frac(val),
        forme: 'libre',
        bonne: `${lettre} = ${val}`,
        indices: [
          "Range d'abord les termes dans l'ordre : le terme en $x^2$, puis le terme en $x$, puis le nombre seul.",
          'Chaque coefficient garde **le signe écrit devant lui**. Un $x^2$ seul veut dire $1x^2$, et $-x$ veut dire $-1x$.'
        ],
        solution: `On range dans l'ordre : $$f(x) = ${poly(a, b, c)}$$ Donc $a = ${a}$, $b = ${b}$ et $c = ${c}$.\n\n$$${lettre} = ${val}$$`
      }
    }
  },
  {
    id: 'sd-discriminant',
    theme: T,
    niveau: 1,
    titre: 'Calculer le discriminant',
    creer(): Exo {
      const a = nonNul(-4, 4), b = nonNul(-8, 8), c = nonNul(-8, 8)
      const D = b * b - 4 * a * c
      return {
        enonce: `Calcule le discriminant $\\Delta$ du trinôme $${poly(a, b, c)}$.`,
        attendu: frac(D),
        forme: 'libre',
        bonne: `\\Delta = ${D}`,
        indices: [
          `La formule : $\\Delta = b^2 - 4ac$. Ici $a = ${a}$, $b = ${b}$, $c = ${c}$.`,
          `Attention aux signes : $${par(b)}^2 = ${b * b}$ (un carré est toujours positif), et $-4 \\times ${par(a)} \\times ${par(c)} = ${-4 * a * c}$.`
        ],
        solution: `$a = ${a}$, $b = ${b}$, $c = ${c}$.\n$$${calculDelta(a, b, c)}$$`
      }
    }
  },
  {
    id: 'sd-nombre-solutions',
    theme: T,
    niveau: 1,
    titre: 'Combien de solutions ? (QCM)',
    creer(): Exo {
      const cas = auHasard([0, 1, 2])
      let a: number, b: number, c: number
      if (cas === 1) {
        const r = nonNul(-4, 4); a = auHasard([1, -1, 2, 3, -2]); b = -2 * a * r; c = a * r * r // a(x - r)²
      } else {
        do { a = nonNul(-3, 3); b = hasard(-6, 6); c = nonNul(-6, 6) } while (Math.sign(b * b - 4 * a * c) !== (cas === 0 ? -1 : 1))
      }
      const D = b * b - 4 * a * c
      const { n, choix } = choixNombre(D)
      return {
        enonce: `Combien de solutions réelles a l'équation $${poly(a, b, c)} = 0$ ?`,
        choix,
        bonne: String(n),
        indices: [
          'Le nombre de solutions dépend du signe du discriminant $\\Delta = b^2 - 4ac$.',
          `Ici $a = ${a}$, $b = ${b}$, $c = ${c}$. Calcule $\\Delta$, puis regarde s'il est négatif, nul ou positif.`
        ],
        solution: `$$${calculDelta(a, b, c)}$$\n` +
          (D < 0 ? '$\\Delta < 0$ : **aucune solution**. La parabole ne touche pas l\'axe des $x$.'
            : D === 0 ? '$\\Delta = 0$ : **une seule solution**. Le sommet de la parabole est posé sur l\'axe des $x$.'
            : '$\\Delta > 0$ : **deux solutions**. La parabole coupe l\'axe des $x$ en deux points.')
      }
    }
  },
  {
    id: 'sd-sommet',
    theme: T,
    niveau: 1,
    titre: "L'abscisse du sommet",
    creer(): Exo {
      const a = auHasard([1, -1, 2, -2, 3, -3]), al = nonNul(-5, 5), be = hasard(-6, 6)
      const b = -2 * a * al, c = a * al * al + be
      return {
        enonce: `La parabole d'équation $y = ${poly(a, b, c)}$ a pour sommet $S(\\alpha \\,;\\, \\beta)$.\n\nCalcule $\\alpha$, l'abscisse du sommet.`,
        attendu: frac(al),
        forme: 'libre',
        bonne: `\\alpha = ${al}`,
        indices: [
          "L'abscisse du sommet est donnée par la formule $\\alpha = -\\dfrac{b}{2a}$.",
          `Ici $a = ${a}$ et $b = ${b}$ : $\\alpha = -\\dfrac{${b}}{2 \\times ${par(a)}}$. Attention au double signe moins.`
        ],
        solution: `$$\\alpha = -\\frac{b}{2a} = -\\frac{${b}}{2 \\times ${par(a)}} = -\\frac{${b}}{${2 * a}} = ${al}$$\n` +
          `Bonus : l'ordonnée du sommet est $\\beta = f(${par(al)}) = ${be}$. Ce sommet est un **${a > 0 ? 'minimum' : 'maximum'}** car $a ${a > 0 ? '> 0' : '< 0'}$.`
      }
    }
  },
  {
    id: 'sd-sans-c',
    theme: T,
    niveau: 1,
    titre: 'Résoudre sans discriminant',
    creer(): Exo {
      let a: number, b: number
      do { a = nonNul(-5, 5); b = nonNul(-12, 12) } while (Math.abs(a) === 1 && Math.abs(b) === 1)
      const x = frac(-b, a)
      return {
        enonce: `L'équation $${poly(a, b, 0)} = 0$ a deux solutions. L'une est $x = 0$.\n\nTrouve **l'autre**, sans calculer $\\Delta$. Écris ta réponse sous la forme **x = valeur**.`,
        attendu: x,
        forme: 'equation',
        bonne: `x = ${tex(x)}`,
        indices: [
          'Il n\'y a pas de nombre seul (pas de $c$) : tu peux mettre $x$ en facteur.',
          `$${poly(a, b, 0)} = x(${poly(0, a, b)})$. Un produit est nul si l'un des facteurs est nul.`
        ],
        solution:
          `On factorise par $x$ : $$x(${poly(0, a, b)}) = 0$$ Produit nul : $x = 0$ ou $${poly(0, a, b)} = 0$.\n` +
          `$$\\begin{aligned} ${poly(0, a, 0)} &= ${-b} \\\\ x &= ${tex(x)} \\end{aligned}$$\n$$\\boxed{x = ${tex(x)}}$$`,
        verification: remplacer(a, b, 0, x)
      }
    }
  },

  // ---------------- Niveau 2 : entraînement ----------------
  {
    id: 'sd-resoudre-delta',
    theme: T,
    niveau: 2,
    titre: 'Résoudre avec le discriminant',
    creer(): Exo {
      let a: number, p: number, q: number
      do { a = auHasard([1, 1, 2, 3, -1, -2]); p = nonNul(-9, 9); q = nonNul(-6, 6) } while (p === a * q)
      // (a x - p)(x - q) = a x² - (aq + p) x + pq ; racines p/a et q
      const b = -(a * q + p), c = p * q, D = b * b - 4 * a * c
      const r = racinesFormules(a, b, D)
      const petite = r.x1.n / r.x1.d < r.x2.n / r.x2.d ? r.x1 : r.x2
      return {
        enonce: `Résous l'équation $${poly(a, b, c)} = 0$.\n\nElle a deux solutions. Donne **la plus petite**, sous la forme **x = valeur**.`,
        attendu: petite,
        forme: 'equation',
        bonne: `x = ${tex(petite)}`,
        indices: [
          `Lis $a = ${a}$, $b = ${b}$, $c = ${c}$ (avec leurs signes), puis calcule $\\Delta = b^2 - 4ac$.`,
          `Tu dois trouver $\\Delta = ${D}$, donc $\\sqrt{\\Delta} = ${Math.round(Math.sqrt(D))}$. Applique $x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$.`
        ],
        solution:
          `$a = ${a}$, $b = ${b}$, $c = ${c}$.\n$$${calculDelta(a, b, c)}$$\n$\\Delta > 0$ : deux solutions.\n${r.tex}\n` +
          `Les solutions sont $${tex(r.x1)}$ et $${tex(r.x2)}$. La plus petite :\n$$\\boxed{x = ${tex(petite)}}$$`,
        verification: remplacer(a, b, c, petite)
      }
    }
  },
  {
    id: 'sd-forme-canonique',
    theme: T,
    niveau: 2,
    titre: 'Forme canonique : compléter le carré',
    creer(): Exo {
      const k = nonNul(-6, 6), c = hasard(-10, 12)
      const b = 2 * k, be = c - k * k // x² + 2kx + c = (x + k)² + c - k²
      return {
        enonce: `On veut écrire $f(x) = ${poly(1, b, c)}$ sous la forme $(x - \\alpha)^2 + \\beta$.\n\nQue vaut $\\beta$ ?`,
        attendu: frac(be),
        forme: 'libre',
        bonne: `\\beta = ${be}`,
        indices: [
          `$x^2 ${b > 0 ? '+' : '-'} ${Math.abs(b)}x$ est le début du carré $${facteur(-k)}^2 = x^2 ${b > 0 ? '+' : '-'} ${Math.abs(b)}x + ${k * k}$.`,
          `Ajoute ${k * k} pour compléter le carré, et retire-le aussitôt pour ne rien changer.`
        ],
        solution:
          `$$\\begin{aligned} f(x) &= (${poly(1, b, k * k)}) - ${k * k} ${c >= 0 ? '+' : '-'} ${Math.abs(c)} \\\\ &= ${facteur(-k)}^2 ${be >= 0 ? '+' : '-'} ${Math.abs(be)} \\end{aligned}$$\n` +
          `Donc $\\alpha = ${-k}$ et $$\\beta = ${be}$$ Vérification : $\\beta = f(\\alpha) = f(${par(-k)}) = ${k * k} ${-2 * k * k >= 0 ? '+' : '-'} ${Math.abs(2 * k * k)} ${c >= 0 ? '+' : '-'} ${Math.abs(c)} = ${be}$ ✓`
      }
    }
  },
  {
    id: 'sd-autre-racine',
    theme: T,
    niveau: 2,
    titre: 'Une racine connue, trouver l\'autre',
    creer(): Exo {
      let a: number, r: number, p: number
      do { a = auHasard([1, 2, 3, -2, 4, 5]); r = auHasard([1, -1, 2]); p = nonNul(-9, 9) } while (p === a * r)
      // a(x - r)(x - p/a) = a x² - (ar + p) x + rp
      const b = -(a * r + p), c = r * p
      const s = frac(p, a), produit = frac(c, a)
      return {
        enonce: `On considère l'équation $${poly(a, b, c)} = 0$.\n\nVérifie que $x = ${r}$ est une solution. Puis trouve **l'autre solution** sans calculer $\\Delta$, sous la forme **x = valeur**.`,
        attendu: s,
        forme: 'equation',
        bonne: `x = ${tex(s)}`,
        indices: [
          'Le produit des deux racines vaut $\\dfrac{c}{a}$.',
          `Ici $\\dfrac{c}{a} = \\dfrac{${c}}{${a}}$. Donc $${r} \\times x_2 = \\dfrac{${c}}{${a}}$.`
        ],
        solution:
          `$x = ${r}$ est solution : $${par(a)} \\times ${par(r)}^2 + ${par(b)} \\times ${par(r)} + ${par(c)} = 0$ ✓\n\n` +
          `Le produit des racines vaut $\\dfrac{c}{a}$ : $$${par(r)} \\times x_2 = \\frac{${c}}{${a}}${pgcd(c, a) === 1 && a > 0 ? '' : ` = ${tex(produit)}`}$$\n` +
          `$$x_2 = ${r === 1 ? tex(produit) : `${tex(produit)} \\div ${par(r)}`} = ${tex(s)}$$\n$$\\boxed{x = ${tex(s)}}$$`,
        verification: remplacer(a, b, c, s)
      }
    }
  },
  {
    id: 'sd-signe-factorise',
    theme: T,
    niveau: 2,
    titre: 'Signe d\'un trinôme factorisé (QCM)',
    creer(): Exo {
      const a = auHasard([1, -1, 2, -2, 3, -3])
      let r1: number, r2: number
      do { r1 = hasard(-6, 5); r2 = hasard(-5, 6) } while (r1 >= r2)
      const signe = auHasard([...SIGNES])
      const q = choixInequation(a, r1, r2, signe)
      return {
        enonce: `Soit $f(x) = ${devant(a)}${facteur(r1)}${facteur(r2)}$.\n\nQuel est l'ensemble des solutions de l'inéquation $f(x) ${signe} 0$ ?`,
        choix: q.choix,
        bonne: q.bonne,
        indices: [
          `Les racines se lisent directement : $${r1}$ et $${r2}$. Et $a = ${a}$.`,
          `Le trinôme a le signe de $a$ à l'extérieur des racines, le signe contraire entre elles. Puis regarde si l'inégalité est stricte (crochets ouverts) ou large (crochets fermés).`
        ],
        solution:
          `Racines : $${r1}$ et $${r2}$. $a = ${a}$ est ${a > 0 ? 'positif' : 'négatif'}, donc :\n${tableauSigne(a, r1, r2)}\n` +
          `On cherche où $f(x)$ est ${q.veutPositif ? 'positif' : 'négatif'} : c'est ${q.dedans ? 'entre' : 'à l\'extérieur des'} racines. ` +
          `L'inégalité est ${q.strict ? 'stricte : racines exclues' : 'large : racines incluses'}.\n$$S = ${q.bonne}$$`
      }
    }
  },
  {
    id: 'sd-inequation',
    theme: T,
    niveau: 2,
    titre: 'Inéquation du second degré (QCM)',
    creer(): Exo {
      const a = auHasard([1, -1, 2, -1])
      let r1: number, r2: number
      do { r1 = hasard(-6, 5); r2 = hasard(-5, 6) } while (r1 >= r2)
      const b = -a * (r1 + r2), c = a * r1 * r2, D = b * b - 4 * a * c
      const signe = auHasard([...SIGNES])
      const q = choixInequation(a, r1, r2, signe)
      const r = racinesFormules(a, b, D)
      return {
        enonce: `Résous l'inéquation $${poly(a, b, c)} ${signe} 0$.`,
        choix: q.choix,
        bonne: q.bonne,
        indices: [
          'Commence par trouver les racines du trinôme avec $\\Delta$.',
          `Tu dois trouver $\\Delta = ${D}$ et les racines $${r1}$ et $${r2}$. Ensuite : signe de $a$ à l'extérieur, signe contraire entre les racines.`
        ],
        solution:
          `$$${calculDelta(a, b, c)}$$\n${r.tex}\n` +
          `$a = ${a}$ est ${a > 0 ? 'positif' : 'négatif'} :\n${tableauSigne(a, r1, r2)}\n` +
          `On veut ${q.veutPositif ? 'positif' : 'négatif'}${q.strict ? ' strictement' : ' ou nul'} :\n$$S = ${q.bonne}$$`
      }
    }
  },

  // ---------------- Niveau 3 : approfondissement ----------------
  {
    id: 'sd-potager',
    theme: T,
    niveau: 3,
    titre: 'Le potager contre le mur',
    creer(): Exo {
      const k = hasard(3, 12), P = 4 * k, aire = 2 * k * k
      return {
        enonce:
          `Tu as ${P} m de grillage pour clôturer un potager rectangulaire **contre un mur** : le mur fait un des côtés, ` +
          `le grillage fait les trois autres. On note $x$ la largeur (les deux côtés perpendiculaires au mur), en mètres.\n\n` +
          `Quelle est l'**aire maximale** du potager ?`,
        attendu: frac(aire),
        forme: 'libre',
        unite: 'm²',
        bonne: `${aire}\\ \\text{m}^2`,
        indices: [
          `Les deux largeurs utilisent $2x$ mètres de grillage. Il reste $${P} - 2x$ pour la longueur. L'aire est $A(x) = x(${P} - 2x)$.`,
          `$A(x) = ${poly(-2, P, 0)}$ : c'est un trinôme avec $a = -2 < 0$, son maximum est au sommet, en $x = -\\dfrac{b}{2a}$.`
        ],
        solution:
          `Longueur : $${P} - 2x$. Aire : $$A(x) = x(${P} - 2x) = ${poly(-2, P, 0)}$$\n` +
          `$a = -2 < 0$ : la parabole est « bras vers le bas », le sommet est un maximum.\n` +
          `$$\\alpha = -\\frac{b}{2a} = -\\frac{${P}}{2 \\times (-2)} = ${k}$$\n` +
          `Largeur ${k} m, longueur $${P} - ${2 * k} = ${2 * k}$ m.\n$$A_{\\max} = ${k} \\times ${2 * k} = ${aire}$$ L'aire maximale est **${aire} m²**.`
      }
    }
  },
  {
    id: 'sd-puissance-source',
    theme: T,
    niveau: 3,
    titre: 'BTS : la puissance maximale d\'une source',
    creer(): Exo {
      let E: number, r: Frac
      do { E = auHasard([6, 9, 12, 24, 48]); r = auHasard([frac(1, 2), frac(1), frac(3, 2), frac(2), frac(3), frac(4)]) } while (frac(E * E * r.d, 4 * r.n).d > 2)
      const Pm = frac(E * E * r.d, 4 * r.n), I = frac(E * r.d, 2 * r.n)
      const rTex = r.d === 1 ? String(r.n) : `${Math.floor(r.n / r.d)}{,}5`
      const dec = Pm.d === 1 ? '' : ` (soit ${(Pm.n / Pm.d).toLocaleString('fr-FR')} W)`
      return {
        enonce:
          `Une batterie a une force électromotrice $E = ${E}$ V et une résistance interne $r = ${rTex}\\ \\Omega$. ` +
          `Quand elle débite un courant $I$ (en A), elle fournit au circuit la puissance $P(I) = EI - rI^2$ (en W).\n\n` +
          `Quelle est la **puissance maximale** qu'elle peut fournir ?`,
        attendu: Pm,
        forme: 'libre',
        unite: 'W',
        bonne: `${tex(Pm)}\\ \\text{W}`,
        indices: [
          `$P(I) = ${E}I - ${rTex}I^2$ est un trinôme en $I$ avec $a = -${rTex} < 0$ : il a un maximum, au sommet.`,
          `Le sommet est en $I = -\\dfrac{b}{2a} = \\dfrac{E}{2r}$. Calcule ce courant, puis remplace-le dans $P(I)$.`
        ],
        solution:
          `$a = -${rTex}$, $b = ${E}$ : $$I = -\\frac{b}{2a} = \\frac{${E}}{2 \\times ${rTex}} = ${tex(I)}$$\n` +
          `$$P_{\\max} = ${E} \\times ${parF(I)} - ${rTex} \\times ${parF(I)}^2 = ${tex(Pm)}$$\n` +
          `La puissance maximale est **$${tex(Pm)}$ W**${dec}. On retrouve la formule $P_{\\max} = \\dfrac{E^2}{4r}$.`
      }
    }
  },
  {
    id: 'sd-feu-artifice',
    theme: T,
    niveau: 3,
    titre: 'La hauteur maximale d\'une fusée',
    creer(): Exo {
      const k = hasard(1, 5), v = 10 * k, h0 = hasard(0, 20), H = h0 + 5 * k * k
      return {
        enonce:
          `Une fusée de feu d'artifice est lancée verticalement. Sa hauteur (en m) au bout de $t$ secondes est ` +
          `$h(t) = ${poly(-5, v, h0, 't')}$ (on a pris l'intensité de la pesanteur $g \\approx 10$ m/s²).\n\nQuelle est sa **hauteur maximale** ?`,
        attendu: frac(H),
        forme: 'libre',
        unite: 'm',
        bonne: `${H}\\ \\text{m}`,
        indices: [
          '$a = -5 < 0$ : la hauteur est maximale au sommet de la parabole.',
          `Le sommet est atteint à $t = -\\dfrac{b}{2a} = -\\dfrac{${v}}{2 \\times (-5)}$. Remplace ensuite dans $h(t)$.`
        ],
        solution:
          `$$t = -\\frac{b}{2a} = -\\frac{${v}}{2 \\times (-5)} = ${k}$$\n` +
          `$$h(${k}) = -5 \\times ${k * k} + ${v} \\times ${k}${h0 ? ` + ${h0}` : ''} = ${H}$$\n` +
          `La fusée monte à **${H} m**, atteints au bout de ${k} s.`
      }
    }
  },
  {
    id: 'sd-parametre',
    theme: T,
    niveau: 3,
    titre: 'Un paramètre dans l\'équation',
    creer(): Exo {
      const p = auHasard([1, 2, 3]), q = hasard(1, 6), a = p * p, c = q * q, m = 2 * p * q
      return {
        enonce: `Pour quelle valeur **positive** du nombre $m$ l'équation $${a === 1 ? '' : a}x^2 + mx + ${c} = 0$ a-t-elle **une seule** solution ?`,
        attendu: frac(m),
        forme: 'libre',
        bonne: `m = ${m}`,
        indices: [
          'Une seule solution, c\'est quand $\\Delta = 0$.',
          `$\\Delta = m^2 - 4 \\times ${a} \\times ${c} = m^2 - ${4 * a * c}$. Résous $m^2 = ${4 * a * c}$.`
        ],
        solution:
          `$$\\Delta = m^2 - 4 \\times ${a} \\times ${c} = m^2 - ${4 * a * c}$$\n` +
          `Une seule solution quand $\\Delta = 0$ : $m^2 = ${4 * a * c}$, donc $m = ${m}$ ou $m = -${m}$.\n` +
          `La valeur positive : $$m = ${m}$$ Vérification : avec $m = ${m}$, on a $${poly(a, m, c)} = (${p === 1 ? '' : p}x + ${q})^2$, qui ne s'annule qu'en un point ✓`
      }
    }
  },
  {
    id: 'sd-parabole-droite',
    theme: T,
    niveau: 3,
    titre: 'Parabole et droite : combien de points communs ? (QCM)',
    creer(): Exo {
      const cas = auHasard([0, 1, 2])
      let B: number, C: number
      if (cas === 1) { const h = nonNul(-4, 4); B = 2 * h; C = h * h }
      else do { B = hasard(-6, 6); C = hasard(-8, 8) } while (Math.sign(B * B - 4 * C) !== (cas === 0 ? -1 : 1))
      const p = nonNul(-4, 4), qq = hasard(-5, 5), b = B + p, c = C + qq
      const D = B * B - 4 * C
      const { n, choix } = choixNombre(D)
      const droite = poly(0, p, qq)
      return {
        enonce: `Combien de points communs ont la parabole $y = ${poly(1, b, c)}$ et la droite $y = ${droite}$ ?`,
        choix,
        bonne: String(n),
        indices: [
          'Un point commun a la même ordonnée sur les deux courbes : écris l\'équation « parabole = droite ».',
          `Passe tout du même côté : tu obtiens $${poly(1, B, C)} = 0$. Le nombre de solutions dépend de $\\Delta$.`
        ],
        solution:
          `$$${poly(1, b, c)} = ${droite} \\iff ${poly(1, B, C)} = 0$$\n$$${calculDelta(1, B, C)}$$\n` +
          (D < 0 ? '$\\Delta < 0$ : **aucun point commun**, la droite passe sous la parabole.'
            : D === 0 ? '$\\Delta = 0$ : **un seul point commun**, la droite est tangente à la parabole.'
            : '$\\Delta > 0$ : **deux points communs**, la droite coupe la parabole.')
      }
    }
  },
  {
    id: 'sd-rectangle',
    theme: T,
    niveau: 3,
    titre: 'Retrouver un rectangle (somme et produit)',
    creer(): Exo {
      let L: number, l: number
      do { L = hasard(3, 15); l = hasard(2, 12) } while (l >= L)
      const S = L + l, A = L * l
      return {
        enonce:
          `Une pièce rectangulaire a un périmètre de ${2 * S} m et une surface de ${A} m².\n\n` +
          `Quelle est sa **longueur** (le plus grand côté) ?`,
        attendu: frac(L),
        forme: 'libre',
        unite: 'm',
        bonne: `${L}\\ \\text{m}`,
        indices: [
          `Si $x$ est un côté, l'autre côté vaut $${S} - x$ (le demi-périmètre est ${S} m). L'aire donne $x(${S} - x) = ${A}$.`,
          `Développe et passe tout du même côté : $x^2 - ${S}x + ${A} = 0$. Résous avec $\\Delta$.`
        ],
        solution:
          `Demi-périmètre : ${S} m. Si un côté vaut $x$, l'autre vaut $${S} - x$ :\n` +
          `$$x(${S} - x) = ${A} \\iff ${poly(1, -S, A)} = 0$$\n$$${calculDelta(1, -S, A)}$$\n` +
          `$$x_1 = \\frac{${S} - ${L - l}}{2} = ${l} \\qquad x_2 = \\frac{${S} + ${L - l}}{2} = ${L}$$\n` +
          `Les deux côtés sont ${l} m et ${L} m (les deux racines sont les deux côtés : leur somme est ${S}, leur produit ${A}).\n$$L = ${L}$$ La longueur est **${L} m**.`
      }
    }
  }
]
