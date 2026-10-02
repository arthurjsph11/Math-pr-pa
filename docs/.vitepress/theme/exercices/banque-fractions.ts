// Exercices sur les fractions : 3 niveaux, 5 exercices par niveau.
// Chaque fonction « creer » tire de nouveaux nombres, choisis pour que le résultat reste propre.
// Tous les résultats sont recalculés et vérifiés par le script : node scripts/verifier-exercices.mjs

import { frac, plus, moins, fois, divise, egal, pgcd, tex, texBrut as F, type Frac } from './calcul'
import { hasard, auHasard, type ModeleExo, type Exo } from './types'

// Fraction irréductible a/b tirée au hasard, avec 1 ≤ a < b (fraction plus petite que 1)
function fractionPropre(bMin: number, bMax: number): Frac {
  for (;;) {
    const b = hasard(bMin, bMax), a = hasard(1, b - 1)
    if (pgcd(a, b) === 1) return frac(a, b)
  }
}
const Ft = (f: Frac) => F(f.n, f.d) // fraction a/b écrite telle quelle
// « = résultat simplifié » seulement si la simplification change quelque chose
const puisSimplifie = (n: number, d: number) => {
  const s = frac(n, d)
  return s.n === n && s.d === d ? '' : ` = ${tex(s)}`
}
const valeursDistinctes = (fs: Frac[]) => fs.every((f, i) => fs.findIndex((g) => egal(f, g)) === i)

export const exercicesFractions: ModeleExo[] = [
  // ---------------- Niveau 1 : application ----------------
  {
    id: 'fractions-simplifier',
    theme: 'fractions',
    niveau: 1,
    titre: 'Simplifier une fraction',
    creer(): Exo {
      const r = fractionPropre(2, 9), k = hasard(2, 6)
      const n = r.n * k, d = r.d * k
      return {
        enonce: `Simplifie $${F(n, d)}$. Donne une **fraction irréductible**.`,
        attendu: r,
        forme: 'irreductible',
        bonne: tex(r),
        indices: [
          `Cherche un nombre qui divise à la fois le numérateur ${n} et le dénominateur ${d}.`,
          `${n} et ${d} sont tous les deux dans la table de ${k} : $${n} = ${r.n} \\times ${k}$ et $${d} = ${r.d} \\times ${k}$.`
        ],
        solution:
          `On divise le numérateur et le dénominateur par le même nombre, ${k} :\n` +
          `$$${F(n, d)} = \\frac{${r.n} \\times ${k}}{${r.d} \\times ${k}} = ${tex(r)}$$\n` +
          `${r.n} et ${r.d} n'ont plus aucun diviseur commun à part 1 : la fraction est irréductible.`
      }
    }
  },
  {
    id: 'fractions-addition-meme-denominateur',
    theme: 'fractions',
    niveau: 1,
    titre: 'Additionner deux fractions de même dénominateur (QCM)',
    creer(): Exo {
      let a: number, b: number, d: number
      do {
        d = hasard(3, 9); a = hasard(1, d - 1); b = hasard(1, d - 1)
      } while (!valeursDistinctes([frac(a + b, d), frac(a + b, 2 * d), frac(a + b, d * d), frac(a * b, d)]))
      return {
        enonce: `Combien vaut $${F(a, d)} + ${F(b, d)}$ ?`,
        choix: [
          { tex: F(a + b, d), juste: true, explication: 'Les parts ont la même taille : on additionne le nombre de parts, et la taille des parts (le dénominateur) ne change pas.' },
          { tex: F(a + b, 2 * d), explication: `Tu as additionné aussi les dénominateurs (${d} + ${d}). Le dénominateur donne la taille des parts : en ajoutant des parts de même taille, cette taille ne change pas. On additionne seulement les numérateurs.` },
          { tex: F(a + b, d * d), explication: `Tu as multiplié les dénominateurs (${d} × ${d}). Ça, c'est la règle de la multiplication de deux fractions, pas de l'addition.` },
          { tex: F(a * b, d), explication: `Tu as multiplié les numérateurs (${a} × ${b}) au lieu de les additionner.` }
        ],
        bonne: F(a + b, d),
        indices: [
          `Les deux fractions ont le même dénominateur, ${d} : ce sont des parts de même taille (l'unité est coupée en ${d}).`,
          `${a} parts plus ${b} parts, ça fait combien de parts ? Et la taille des parts change-t-elle ?`
        ],
        solution: `$$${F(a, d)} + ${F(b, d)} = \\frac{${a} + ${b}}{${d}} = ${F(a + b, d)}${puisSimplifie(a + b, d)}$$\nOn additionne les numérateurs et on garde le dénominateur.`
      }
    }
  },
  {
    id: 'fractions-multiplier',
    theme: 'fractions',
    niveau: 1,
    titre: 'Multiplier deux fractions',
    creer(): Exo {
      let p: Frac, q: Frac, r: Frac
      do {
        p = frac(hasard(1, 6), hasard(2, 7)); q = frac(hasard(1, 6), hasard(2, 7)); r = fois(p, q)
      } while (r.d > 30 || p.d === 1 || q.d === 1)
      return {
        enonce: `Calcule $${tex(p)} \\times ${tex(q)}$.\n\nToute écriture juste est acceptée (simplifiée ou non).`,
        attendu: r,
        forme: 'libre',
        bonne: tex(r),
        indices: [
          'Pour multiplier deux fractions, pas besoin de les mettre au même dénominateur.',
          'On multiplie les numérateurs entre eux, et les dénominateurs entre eux.'
        ],
        solution: `$$${tex(p)} \\times ${tex(q)} = \\frac{${p.n} \\times ${q.n}}{${p.d} \\times ${q.d}} = ${F(p.n * q.n, p.d * q.d)}${puisSimplifie(p.n * q.n, p.d * q.d)}$$`
      }
    }
  },
  {
    id: 'fractions-fraction-quantite',
    theme: 'fractions',
    niveau: 1,
    titre: "Prendre une fraction d'une quantité",
    creer(): Exo {
      const r = fractionPropre(2, 6), m = hasard(2, 8)
      const total = r.d * m, res = r.n * m
      return {
        enonce: `Un rouleau contient ${total} m de câble électrique. Pour une installation, on en utilise les $${tex(r)}$.\n\nCombien de mètres de câble utilise-t-on ?`,
        attendu: frac(res),
        forme: 'libre',
        unite: 'm',
        bonne: `${res}\\ \\text{m}`,
        indices: [
          `Prendre les $${tex(r)}$ de ${total}, c'est partager ${total} en ${r.d} parts égales, puis en prendre ${r.n}.`,
          `Une part : $${total} \\div ${r.d} = ${m}$. Il reste à en prendre ${r.n}.`
        ],
        solution:
          `$$${tex(r)} \\times ${total} = \\frac{${r.n} \\times ${total}}{${r.d}} = \\frac{${r.n * total}}{${r.d}} = ${res}$$\n` +
          `Ou bien : une part fait $${total} \\div ${r.d} = ${m}$ m, et ${r.n} parts font $${r.n} \\times ${m} = ${res}$ m.\n\nOn utilise **${res} m** de câble.`
      }
    }
  },
  {
    id: 'fractions-soustraction-simplifier',
    theme: 'fractions',
    niveau: 1,
    titre: 'Soustraire puis simplifier',
    creer(): Exo {
      let a: number, b: number, d: number
      do {
        d = auHasard([4, 6, 8, 9, 10, 12]); a = hasard(2, d - 1); b = hasard(1, a - 1)
      } while (pgcd(a - b, d) === 1 || pgcd(a, d) !== 1 || pgcd(b, d) !== 1)
      const r = frac(a - b, d), g = pgcd(a - b, d)
      return {
        enonce: `Calcule $${F(a, d)} - ${F(b, d)}$. Donne une **fraction irréductible**.`,
        attendu: r,
        forme: 'irreductible',
        bonne: tex(r),
        indices: [
          'Même dénominateur : on soustrait les numérateurs et on garde le dénominateur.',
          `Tu trouves $${F(a - b, d)}$. ${a - b} et ${d} ont un diviseur commun : ${g}. Simplifie.`
        ],
        solution: `$$${F(a, d)} - ${F(b, d)} = ${F(a - b, d)} = \\frac{${r.n} \\times ${g}}{${r.d} \\times ${g}} = ${tex(r)}$$`
      }
    }
  },

  // ---------------- Niveau 2 : entraînement ----------------
  {
    id: 'fractions-addition-denominateurs-differents',
    theme: 'fractions',
    niveau: 2,
    titre: 'Additionner deux fractions de dénominateurs différents (QCM)',
    creer(): Exo {
      let a: number, b: number, c: number, d: number
      do {
        b = hasard(2, 7); d = hasard(2, 7); a = hasard(1, 5); c = hasard(1, 5)
      } while (
        b === d || pgcd(b, d) !== 1 || pgcd(a, b) !== 1 || pgcd(c, d) !== 1 ||
        !valeursDistinctes([frac(a * d + c * b, b * d), frac(a + c, b + d), frac(a + c, b * d), frac(a * c, b * d)])
      )
      const n = a * d + c * b
      return {
        enonce: `Combien vaut $${F(a, b)} + ${F(c, d)}$ ?`,
        choix: [
          { tex: F(n, b * d), juste: true, explication: 'On a mis les deux fractions au même dénominateur avant d’additionner.' },
          { tex: F(a + c, b + d), explication: `Tu as additionné les numérateurs entre eux et les dénominateurs entre eux. C'est l'erreur la plus fréquente ! Contre-exemple : $\\frac{1}{2} + \\frac{1}{2}$ donnerait $\\frac{2}{4} = \\frac{1}{2}$, alors que deux moitiés font 1. Il faut d'abord le même dénominateur.` },
          { tex: F(a + c, b * d), explication: `Bonne idée de prendre ${b * d} comme dénominateur commun, mais tu as oublié de multiplier les numérateurs : $${F(a, b)}$ devient $\\frac{${a} \\times ${d}}{${b} \\times ${d}}$, pas $\\frac{${a}}{${b * d}}$.` },
          { tex: F(a * c, b * d), explication: 'Tu as multiplié les deux fractions au lieu de les additionner.' }
        ],
        bonne: F(n, b * d),
        indices: [
          `On ne peut additionner que des parts de même taille : il faut d'abord un dénominateur commun. ${b * d} marche (c'est ${b} × ${d}).`,
          `$${F(a, b)} = \\frac{${a} \\times ${d}}{${b} \\times ${d}} = ${F(a * d, b * d)}$ et $${F(c, d)} = \\frac{${c} \\times ${b}}{${d} \\times ${b}} = ${F(c * b, b * d)}$.`
        ],
        solution: `$$${F(a, b)} + ${F(c, d)} = ${F(a * d, b * d)} + ${F(c * b, b * d)} = ${F(n, b * d)}${puisSimplifie(n, b * d)}$$`
      }
    }
  },
  {
    id: 'fractions-soustraction-multiple',
    theme: 'fractions',
    niveau: 2,
    titre: 'Soustraire deux fractions de dénominateurs différents',
    creer(): Exo {
      let a: number, b: number, c: number, k: number, d: number
      do {
        b = hasard(2, 5); k = hasard(2, 4); d = b * k; a = hasard(1, b - 1); c = hasard(1, d - 1)
      } while (pgcd(a, b) !== 1 || pgcd(c, d) !== 1 || a * k <= c)
      const r = frac(a * k - c, d)
      return {
        enonce: `Calcule $${F(a, b)} - ${F(c, d)}$. Donne une **fraction irréductible**.`,
        attendu: r,
        forme: 'irreductible',
        bonne: tex(r),
        indices: [
          `${d} est dans la table de ${b} : on peut tout écrire avec le dénominateur ${d}.`,
          `$${F(a, b)} = \\frac{${a} \\times ${k}}{${b} \\times ${k}} = ${F(a * k, d)}$.`
        ],
        solution: `$$${F(a, b)} - ${F(c, d)} = ${F(a * k, d)} - ${F(c, d)} = ${F(a * k - c, d)}${puisSimplifie(a * k - c, d)}$$`
      }
    }
  },
  {
    id: 'fractions-diviser',
    theme: 'fractions',
    niveau: 2,
    titre: 'Diviser par une fraction',
    creer(): Exo {
      let p: Frac, q: Frac
      do {
        p = frac(hasard(1, 6), hasard(2, 7)); q = frac(hasard(1, 6), hasard(2, 7))
      } while (p.d === 1 || q.d === 1 || egal(p, q) || divise(p, q).d > 30 || divise(p, q).n > 30)
      const r = divise(p, q)
      return {
        enonce: `Calcule $${tex(p)} \\div ${tex(q)}$. Donne une **fraction irréductible** (ou un entier).`,
        attendu: r,
        forme: 'irreductible',
        bonne: tex(r),
        indices: [
          "Diviser par une fraction, c'est multiplier par son inverse.",
          `L'inverse de $${tex(q)}$ est $${tex(frac(q.d, q.n))}$ : on retourne la fraction.`
        ],
        solution: `$$${tex(p)} \\div ${tex(q)} = ${tex(p)} \\times ${tex(frac(q.d, q.n))} = \\frac{${p.n} \\times ${q.d}}{${p.d} \\times ${q.n}} = ${F(p.n * q.d, p.d * q.n)}${puisSimplifie(p.n * q.d, p.d * q.n)}$$`
      }
    }
  },
  {
    id: 'fractions-equation-produit',
    theme: 'fractions',
    niveau: 2,
    titre: 'Résoudre une équation avec des fractions',
    creer(): Exo {
      let p: Frac, q: Frac, x: Frac
      do {
        p = fractionPropre(2, 7); q = fractionPropre(2, 9); x = divise(q, p)
      } while (x.d > 12 || x.n > 20)
      const brutN = q.n * p.d, brutD = q.d * p.n
      return {
        enonce: `Résous l'équation $${tex(p)}\\,x = ${tex(q)}$.\n\nÉcris ta réponse sous la forme **x = valeur**, avec une fraction irréductible.`,
        attendu: x,
        forme: 'equation',
        bonne: `x = ${tex(x)}`,
        indices: [
          `$${tex(p)}\\,x$ veut dire $${tex(p)} \\times x$. Pour isoler $x$, on divise les deux membres par $${tex(p)}$.`,
          `Diviser par $${tex(p)}$, c'est multiplier par son inverse $${tex(frac(p.d, p.n))}$.`
        ],
        solution:
          `$$\\begin{aligned} ${tex(p)}\\,x &= ${tex(q)} \\\\ x &= ${tex(q)} \\times ${tex(frac(p.d, p.n))} && (\\times ${tex(frac(p.d, p.n))}) \\\\ x &= ${F(brutN, brutD)}${puisSimplifie(brutN, brutD)} \\end{aligned}$$\n` +
          `$$\\boxed{x = ${tex(x)}}$$`,
        verification: `$$${tex(p)} \\times ${tex(x)} = ${tex(fois(p, x))}$$ C'est bien le membre de droite ✓`
      }
    }
  },
  {
    id: 'fractions-priorites',
    theme: 'fractions',
    niveau: 2,
    titre: 'Priorités opératoires avec des fractions (QCM)',
    creer(): Exo {
      let a: number, b: number, n: number, q: Frac
      let juste: Frac, gaucheDroite: Frac, retournee: Frac
      do {
        n = hasard(2, 5); a = hasard(1, 5); b = hasard(1, 5); q = fractionPropre(2, 5)
        juste = plus(frac(a, n), fois(frac(b, n), q))
        gaucheDroite = fois(plus(frac(a, n), frac(b, n)), q)
        retournee = plus(frac(a, n), fois(frac(b, n), frac(q.d, q.n)))
      } while (pgcd(a, n) !== 1 || pgcd(b, n) !== 1 || juste.d > 30 || !valeursDistinctes([juste, gaucheDroite, retournee]))
      const produit = fois(frac(b, n), q)
      return {
        enonce: `Combien vaut $${F(a, n)} + ${F(b, n)} \\times ${tex(q)}$ ?`,
        choix: [
          { tex: tex(juste), juste: true, explication: 'La multiplication passe avant l’addition.' },
          { tex: tex(gaucheDroite), explication: `Tu as calculé de gauche à droite : l'addition d'abord. Mais la multiplication est prioritaire : on calcule d'abord $${F(b, n)} \\times ${tex(q)}$.` },
          { tex: tex(retournee), explication: `Tu as retourné $${tex(q)}$. On retourne la fraction seulement pour une division ; pour une multiplication, on multiplie les numérateurs entre eux et les dénominateurs entre eux.` }
        ],
        bonne: tex(juste),
        indices: [
          'Comme avec les nombres entiers : la multiplication se calcule avant l’addition.',
          `Commence par $${F(b, n)} \\times ${tex(q)} = ${tex(produit)}$, puis ajoute $${F(a, n)}$.`
        ],
        solution: `$$${F(a, n)} + ${F(b, n)} \\times ${tex(q)} = ${F(a, n)} + ${tex(produit)} = ${tex(juste)}$$\nPour l'addition, on met au même dénominateur.`
      }
    }
  },

  // ---------------- Niveau 3 : approfondissement ----------------
  {
    id: 'fractions-equation-deux-etapes',
    theme: 'fractions',
    niveau: 3,
    titre: 'Équation en deux étapes avec des fractions',
    creer(): Exo {
      let a: number, p: Frac, q: Frac, diff: Frac, x: Frac
      do {
        a = hasard(2, 5); p = fractionPropre(2, 6); q = fractionPropre(2, 6)
        diff = moins(q, p); x = fois(diff, frac(a))
      } while (egal(p, q) || diff.n <= 0 || x.d > 12 || x.n > 30)
      return {
        enonce: `Résous l'équation $\\dfrac{x}{${a}} + ${tex(p)} = ${tex(q)}$.\n\nÉcris ta réponse sous la forme **x = valeur**, avec une fraction irréductible (ou un entier).`,
        attendu: x,
        forme: 'equation',
        bonne: `x = ${tex(x)}`,
        indices: [
          `Comme dans la leçon sur les équations : d'abord enlever $${tex(p)}$ des deux côtés.`,
          `Tu obtiens $\\dfrac{x}{${a}} = ${tex(diff)}$. Pour enlever « divisé par ${a} », on multiplie les deux membres par ${a}.`
        ],
        solution:
          `$$\\begin{aligned} \\frac{x}{${a}} + ${tex(p)} &= ${tex(q)} \\\\ \\frac{x}{${a}} &= ${tex(q)} - ${tex(p)} && (-${tex(p)}) \\\\ \\frac{x}{${a}} &= ${tex(diff)} \\\\ x &= ${tex(diff)} \\times ${a} && (\\times ${a}) \\end{aligned}$$\n` +
          `Calcul de la soustraction, au même dénominateur ${q.d * p.d} : $${tex(q)} - ${tex(p)} = ${F(q.n * p.d, q.d * p.d)} - ${F(p.n * q.d, q.d * p.d)} = ${F(q.n * p.d - p.n * q.d, q.d * p.d)}${puisSimplifie(q.n * p.d - p.n * q.d, q.d * p.d)}$.\n` +
          `$$\\boxed{x = ${tex(x)}}$$`,
        verification: `$$\\frac{${tex(x)}}{${a}} + ${tex(p)} = ${tex(divise(x, frac(a)))} + ${tex(p)} = ${tex(plus(divise(x, frac(a)), p))}$$ C'est bien le membre de droite ✓`
      }
    }
  },
  {
    id: 'fractions-expression-complete',
    theme: 'fractions',
    niveau: 3,
    titre: 'Calcul complet : somme puis division',
    creer(): Exo {
      let p: Frac, q: Frac, s: Frac, r: Frac, t: Frac
      do {
        p = fractionPropre(2, 6); q = fractionPropre(2, 6); s = plus(p, q); r = fractionPropre(2, 5); t = divise(s, r)
      } while (p.d === q.d || t.d > 20 || t.n > 40)
      return {
        enonce: `Calcule $\\left(${tex(p)} + ${tex(q)}\\right) \\div ${tex(r)}$. Donne une **fraction irréductible** (ou un entier).`,
        attendu: t,
        forme: 'irreductible',
        bonne: tex(t),
        indices: [
          'Les parenthèses d’abord : calcule la somme en mettant au même dénominateur.',
          `La somme vaut $${tex(s)}$. Ensuite, diviser par $${tex(r)}$, c'est multiplier par $${tex(frac(r.d, r.n))}$.`
        ],
        solution:
          `**1. La parenthèse** : $${tex(p)} + ${tex(q)} = ${F(p.n * q.d, p.d * q.d)} + ${F(q.n * p.d, p.d * q.d)} = ${F(p.n * q.d + q.n * p.d, p.d * q.d)}${puisSimplifie(p.n * q.d + q.n * p.d, p.d * q.d)}$\n\n` +
          `**2. La division** : $$${tex(s)} \\div ${tex(r)} = ${tex(s)} \\times ${tex(frac(r.d, r.n))} = ${F(s.n * r.d, s.d * r.n)}${puisSimplifie(s.n * r.d, s.d * r.n)}$$`
      }
    }
  },
  {
    id: 'fractions-resistances-parallele',
    theme: 'fractions',
    niveau: 3,
    titre: 'Problème BTS : deux résistances en parallèle',
    creer(): Exo {
      const [r1, r2] = auHasard([[6, 3], [12, 6], [20, 30], [10, 15], [60, 30], [12, 4], [30, 15], [40, 10], [24, 12], [18, 9], [100, 25], [150, 300]])
      const inv = plus(frac(1, r1), frac(1, r2)), r = divise(frac(1), inv)
      return {
        enonce:
          `Sur une carte de commande domotique, deux résistances $R_1 = ${r1}\\ \\Omega$ et $R_2 = ${r2}\\ \\Omega$ sont branchées **en parallèle**. ` +
          `La résistance équivalente $R$ vérifie :\n$$\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}$$\nCalcule $R$ en ohms.`,
        attendu: r,
        forme: 'libre',
        unite: 'Ω',
        bonne: `${tex(r)}\\ \\Omega`,
        indices: [
          `Calcule d'abord $\\frac{1}{${r1}} + \\frac{1}{${r2}}$ en mettant au même dénominateur.`,
          `Tu trouves $\\frac{1}{R} = ${tex(inv)}$. Si deux fractions sont égales, leurs inverses aussi : retourne la fraction pour avoir $R$.`
        ],
        solution:
          `$$\\frac{1}{R} = \\frac{1}{${r1}} + \\frac{1}{${r2}} = ${F(r2, r1 * r2)} + ${F(r1, r1 * r2)} = ${F(r1 + r2, r1 * r2)}${puisSimplifie(r1 + r2, r1 * r2)}$$\n` +
          `On retourne la fraction : $R = ${F(inv.d, inv.n)}${inv.n === 1 ? '' : ` = ${tex(r)}`}$, donc **R = ${tex(r)} Ω**.\n\n` +
          `Remarque : $R$ est plus petite que $R_1$ et que $R_2$. C'est toujours le cas en parallèle : le courant a deux chemins au lieu d'un.`
      }
    }
  },
  {
    id: 'fractions-batterie',
    theme: 'fractions',
    niveau: 3,
    titre: 'Problème : la batterie de secours',
    creer(): Exo {
      let p: Frac, q: Frac, r: Frac
      do {
        p = frac(hasard(1, 9), auHasard([2, 3, 4, 5, 6, 8, 10])); q = frac(hasard(1, 5), auHasard([3, 4, 5, 6, 8, 10]))
        r = moins(p, q)
      } while (p.d === 1 || q.d === 1 || p.n >= p.d || q.n >= q.d || p.d === q.d || r.n <= 0 || r.d > 24)
      const d = p.d * q.d
      return {
        enonce:
          `La batterie de secours d'une box domotique est chargée aux $${tex(p)}$ de sa capacité. ` +
          `Pendant une coupure de courant, la box consomme $${tex(q)}$ de la capacité totale de la batterie.\n\n` +
          `Quelle fraction de sa capacité reste-t-il dans la batterie ? Donne une **fraction irréductible**.`,
        attendu: r,
        forme: 'irreductible',
        bonne: tex(r),
        indices: [
          `Il restait $${tex(p)}$ et on enlève $${tex(q)}$ : c'est une soustraction.`,
          `Pour soustraire, mets les deux fractions au même dénominateur (${d} marche, c'est ${p.d} × ${q.d}).`
        ],
        solution:
          `$$${tex(p)} - ${tex(q)} = ${F(p.n * q.d, d)} - ${F(q.n * p.d, d)} = ${F(p.n * q.d - q.n * p.d, d)}${puisSimplifie(p.n * q.d - q.n * p.d, d)}$$\n` +
          `Il reste les **$${tex(r)}$** de la capacité.`
      }
    }
  },
  {
    id: 'fractions-fraction-de-fraction',
    theme: 'fractions',
    niveau: 3,
    titre: "Problème : une fraction d'une fraction (QCM)",
    creer(): Exo {
      let p: Frac, q: Frac
      do {
        p = auHasard([frac(2, 3), frac(3, 5), frac(1, 2), frac(3, 4), frac(2, 5), frac(5, 8)])
        q = auHasard([frac(1, 3), frac(1, 4), frac(2, 5), frac(3, 8), frac(1, 2), frac(2, 3)])
      } while (!valeursDistinctes([fois(p, q), plus(p, q), q, frac(p.n + q.n, p.d + q.d)]) || plus(p, q).n >= plus(p, q).d * 2)
      const r = fois(p, q)
      return {
        enonce:
          `Dans une maison chauffée à l'électricité, le chauffage représente les $${tex(p)}$ de la consommation d'électricité de l'année. ` +
          `Un capteur domotique montre que les $${tex(q)}$ de la consommation du chauffage ont lieu la nuit.\n\n` +
          `Quelle fraction de la consommation **totale** représente le chauffage la nuit ? (Valeurs inventées pour l'exercice.)`,
        choix: [
          { tex: tex(r), juste: true, explication: `« Les $${tex(q)}$ de $${tex(p)}$ » se traduit par une multiplication.` },
          { tex: tex(plus(p, q)), explication: `Tu as additionné les deux fractions. Mais « les $${tex(q)}$ de la consommation du chauffage » veut dire $${tex(q)} \\times ${tex(p)}$ : le mot « de » placé après une fraction se traduit par une multiplication.` },
          { tex: tex(q), explication: `$${tex(q)}$, c'est la part de la nuit **dans le chauffage** seulement. La question demande la part dans la consommation **totale** : il faut prendre les $${tex(q)}$ de $${tex(p)}$.` },
          { tex: F(p.n + q.n, p.d + q.d), explication: 'Tu as additionné les numérateurs entre eux et les dénominateurs entre eux : ce n’est jamais la bonne façon d’additionner, et ici il ne fallait pas additionner mais multiplier.' }
        ],
        bonne: tex(r),
        indices: [
          `Prendre les $${tex(q)}$ d'une quantité, c'est la multiplier par $${tex(q)}$. Ici, la quantité est la part du chauffage, $${tex(p)}$.`,
          `Calcule $${tex(q)} \\times ${tex(p)}$.`
        ],
        solution:
          `$$${tex(q)} \\times ${tex(p)} = \\frac{${q.n} \\times ${p.n}}{${q.d} \\times ${p.d}} = ${F(q.n * p.n, q.d * p.d)}${puisSimplifie(q.n * p.n, q.d * p.d)}$$\n` +
          `Le chauffage de nuit représente les **$${tex(r)}$** de la consommation totale.`
      }
    }
  }
]
