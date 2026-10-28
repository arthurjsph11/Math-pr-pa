---
title: "Nombres complexes : mini-test de niveau"
lecon:
  statut: brouillon
  niveau: Intermédiaire
  duree: 10
  bts: true
  prerequis:
    - texte: Développer et factoriser
      lien: /maths/bloc-0/calcul-litteral/developper-factoriser
    - texte: Racines carrées
      lien: /maths/bloc-0/calcul/racines-carrees
---

# Nombres complexes : mini-test de niveau

Un nombre complexe s'écrit $z = a + ib$ avec $i^2 = -1$ (en électricité, on note souvent $j$ au lieu de $i$).

Ce test **n'est pas noté**. Si tu n'as jamais vu les complexes, écris « je ne sais pas » : c'est normal.

- Dure environ 10 minutes.
- Réponds **sur papier**, sans regarder les corrigés.

## Les 5 questions

**Q1.** Calcule $(2 + 3i)(1 - i)$ et donne le résultat sous la forme $a + ib$.

**Q2.** Calcule le module $|3 + 4i|$.

**Q3.** Écris $\dfrac{1 + 2i}{1 - i}$ sous la forme $a + ib$.

**Q4.** Écris $1 + i$ sous forme exponentielle $r\,e^{i\theta}$.

**Q5.** *(Électricité)* Une bobine réelle a pour impédance $Z = 30 + 40j$ (en $\Omega$).
Calcule $|Z|$ et l'angle $\varphi$ (argument de $Z$), arrondi au degré.

## Les corrigés

Ouvre-les seulement quand tu as fini tes 5 réponses.

::: details Corrigé Q1
$(2 + 3i)(1 - i) = 2 - 2i + 3i - 3i^2 = 2 + i + 3 = 5 + i$ (car $i^2 = -1$).
:::

::: details Corrigé Q2
$|a + ib| = \sqrt{a^2 + b^2}$, donc $|3 + 4i| = \sqrt{9 + 16} = 5$.
:::

::: details Corrigé Q3
On multiplie en haut et en bas par le **conjugué** du dénominateur, $1 + i$ :

$$\frac{(1 + 2i)(1 + i)}{(1 - i)(1 + i)} = \frac{1 + i + 2i + 2i^2}{1 + 1} = \frac{-1 + 3i}{2} = -\frac{1}{2} + \frac{3}{2}i$$
:::

::: details Corrigé Q4
$|1 + i| = \sqrt{2}$ et l'angle $\theta$ vérifie $\cos\theta = \sin\theta = \dfrac{1}{\sqrt{2}}$, donc $\theta = \dfrac{\pi}{4}$.
$1 + i = \sqrt{2}\,e^{i\pi/4}$.
:::

::: details Corrigé Q5
$|Z| = \sqrt{30^2 + 40^2} = \sqrt{2500} = 50\ \Omega$.
$\tan\varphi = \dfrac{40}{30}$, donc $\varphi = \arctan\dfrac{4}{3} \approx 53°$.
:::

## Et maintenant ?

| Tu as raté… | Ce qu'il faut travailler |
|---|---|
| Q1, Q2, Q5 (module) | Calculer avec $i$, conjugué et module → [séance 1](./seance-1) |
| Q3 | Quotient de complexes (séance à venir) |
| Q4, Q5 (angle) | Forme exponentielle et argument (séance à venir) |

::: verifier À VÉRIFIER par Arthur
Les corrigés ont été recalculés numériquement. Dis-moi si le test est trop dur.
:::

<FinPartie lecon="maths/seances/complexes/test-niveau" :numero="1" :total="1" />
