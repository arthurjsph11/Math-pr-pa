---
title: "Limites, ln et exp : mini-test de niveau"
lecon:
  statut: brouillon
  niveau: Intermédiaire
  duree: 10
  bts: true
  prerequis:
    - texte: Puissances et écriture scientifique
      lien: /maths/bloc-0/calcul/puissances
    - texte: Dérivées, séance 1
      lien: /maths/seances/derivees/seance-1
---

# Limites, ln et exp : mini-test de niveau

Ce test **n'est pas noté**. Il sert à savoir par où commencer.

- Dure environ 10 minutes.
- Réponds **sur papier**, sans regarder les corrigés.
- Si tu bloques, écris ce que tu as essayé.

## Les 5 questions

**Q1.** Calcule $\displaystyle\lim_{x \to +\infty} \dfrac{3x^2 - 5x + 1}{x^2 + 2}$.

**Q2.** Calcule $\displaystyle\lim_{x \to 3^+} \dfrac{1}{x - 3}$ (x tend vers 3 en restant **plus grand** que 3).

**Q3.** Écris $\ln 12 - \ln 3$ sous la forme $\ln$ d'un seul nombre, puis simplifie.

**Q4.** Résous l'équation $e^{2x} = 5$.

**Q5.** *(Thermique)* Un café refroidit selon $T(t) = 20 + 60\,e^{-0{,}1\,t}$ ($T$ en °C, $t$ en minutes).

- a) Quelle est la limite de $T(t)$ quand $t \to +\infty$ ? Que représente-t-elle ?
- b) Au bout de combien de temps le café atteint-il 30 °C ?

## Les corrigés

Ouvre-les seulement quand tu as fini tes 5 réponses.

::: details Corrigé Q1
On garde les termes de plus haut degré : $\dfrac{3x^2}{x^2} = 3$.
La limite vaut **3**.
:::

::: details Corrigé Q2
Quand $x$ est un peu plus grand que 3, $x - 3$ est un **petit nombre positif**, donc $\dfrac{1}{x-3}$ est très grand et positif.
La limite vaut $+\infty$.
:::

::: details Corrigé Q3
$\ln a - \ln b = \ln\dfrac{a}{b}$, donc $\ln 12 - \ln 3 = \ln 4 = 2\ln 2$.
:::

::: details Corrigé Q4
On prend le logarithme népérien des deux côtés : $2x = \ln 5$, donc $x = \dfrac{\ln 5}{2} \approx 0{,}80$.
:::

::: details Corrigé Q5
a) Quand $t \to +\infty$, $e^{-0{,}1t} \to 0$, donc $T(t) \to 20$.
Le café tend vers **20 °C**, la température de la pièce.

b) $20 + 60\,e^{-0{,}1t} = 30 \iff e^{-0{,}1t} = \dfrac{1}{6} \iff -0{,}1\,t = -\ln 6 \iff t = 10\ln 6 \approx 17{,}9$ min.
:::

## Et maintenant ?

| Tu as raté… | Ce qu'il faut travailler |
|---|---|
| Q1, Q2 | Limites de fonctions → [séance 1](./seance-1) |
| Q3, Q4 | Propriétés de $\ln$ et $e^x$ (séance à venir) |
| Q5 | Limites avec $e^{-at}$ et résolution d'équations (séance à venir) |

::: verifier À VÉRIFIER par Arthur
Les corrigés ont été recalculés numériquement. Dis-moi si le test est trop dur ou trop facile.
:::

<FinPartie lecon="maths/seances/limites-ln-exp/test-niveau" :numero="1" :total="1" />
