---
title: "Équations différentielles : mini-test de niveau"
lecon:
  statut: brouillon
  niveau: Intermédiaire
  duree: 10
  bts: true
  prerequis:
    - texte: Dérivées, séance 1
      lien: /maths/seances/derivees/seance-1
    - texte: Résoudre une équation du premier degré
      lien: /maths/bloc-0/equations/equation-premier-degre
---

# Équations différentielles : mini-test de niveau

Une **équation différentielle** est une équation dont l'inconnue est une **fonction** : elle relie la fonction à sa dérivée.

Ce test **n'est pas noté**. Si tu n'as jamais vu ça, écris « je ne sais pas » : c'est le plus utile pour moi.

- Dure environ 10 minutes.
- Réponds **sur papier**, sans regarder les corrigés.

## Les 5 questions

**Q1.** Vérifie que $y(x) = e^{3x}$ est solution de $y' = 3y$.

**Q2.** Donne toutes les solutions de $y' = 2y$.

**Q3.** Donne toutes les solutions de $y' + 4y = 8$.

**Q4.** *(Thermique)* La température d'un café vérifie $T' = -0{,}1\,(T - 20)$ avec $T(0) = 80$.
Donne $T(t)$. *(Indice : développe, puis ramène à la forme $T' = aT + b$.)*

**Q5.** *(2e ordre)* Donne toutes les solutions de $y'' + 9y = 0$.

## Les corrigés

Ouvre-les seulement quand tu as fini tes 5 réponses.

::: details Corrigé Q1
$y' = 3e^{3x}$ et $3y = 3e^{3x}$ : les deux côtés sont égaux. ✓
:::

::: details Corrigé Q2
Les solutions de $y' = ay$ sont $y(x) = C\,e^{ax}$. Ici $a = 2$ : $y(x) = C\,e^{2x}$, avec $C$ un réel quelconque.
:::

::: details Corrigé Q3
On écrit $y' = -4y + 8$. Une solution constante $y = k$ vérifie $0 = -4k + 8$, donc $k = 2$.
Les solutions sont $y(x) = C\,e^{-4x} + 2$.
:::

::: details Corrigé Q4
$T' = -0{,}1\,T + 2$. La solution constante est $T = 20$ (car $-0{,}1 \times 20 + 2 = 0$).
Donc $T(t) = C\,e^{-0{,}1t} + 20$. Avec $T(0) = 80$ : $C + 20 = 80$, donc $C = 60$.
$T(t) = 20 + 60\,e^{-0{,}1t}$.
:::

::: details Corrigé Q5
L'équation $y'' + \omega^2 y = 0$ (ici $\omega = 3$) a pour solutions
$y(x) = A\cos(3x) + B\sin(3x)$, avec $A$ et $B$ des réels quelconques.
:::

## Et maintenant ?

| Tu as raté… | Ce qu'il faut travailler |
|---|---|
| Q1, Q2, Q3, Q4 | Équations du 1er ordre $y' = ay + b$ → [séance 1](./seance-1) |
| Q5 | Équations du 2e ordre (séance à venir) |

::: verifier À VÉRIFIER par Arthur
Les corrigés ont été vérifiés en remplaçant les solutions dans les équations. Dis-moi si le test est trop dur.
:::

<FinPartie lecon="maths/seances/equations-differentielles/test-niveau" :numero="1" :total="1" />
