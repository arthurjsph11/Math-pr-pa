---
title: "Dérivées : mini-test de niveau"
lecon:
  statut: brouillon
  niveau: Intermédiaire
  duree: 10
  bts: true
  prerequis:
    - texte: Notion de fonction et fonctions affines
      lien: /maths/bloc-0/fonctions/fonctions-affines
    - texte: Puissances et écriture scientifique
      lien: /maths/bloc-0/calcul/puissances
---

# Dérivées : mini-test de niveau

Ce test **n'est pas noté**. Il sert à savoir par où commencer.

- Dure environ 10 minutes.
- Réponds **sur papier**, sans regarder les corrigés.
- Si tu bloques, écris ce que tu as essayé : c'est aussi utile qu'une bonne réponse.

## Les 5 questions

**Q1.** Dérive $f(x) = 3x^2 - 5x + 7$.

**Q2.** Dérive $g(x) = (3x - 2)^4$.

**Q3.** Dérive $h(x) = (2x + 1)\,e^{x}$.

**Q4.** Dérive $k(x) = \ln(x^2 + 1)$.

**Q5.** *(Thermique)* Un café refroidit selon la loi $T(t) = 20 + 60\,e^{-0{,}1\,t}$, avec $T$ en °C et $t$ en minutes.

- a) Calcule $T'(t)$.
- b) Calcule $T'(0)$ et dis ce que ce nombre représente, avec son unité.

## Les corrigés

Ouvre-les seulement quand tu as fini tes 5 réponses.

::: details Corrigé Q1
On dérive chaque terme : $f'(x) = 6x - 5$ (la constante 7 disparaît).
:::

::: details Corrigé Q2
C'est de la forme $u^4$ avec $u(x) = 3x - 2$, donc $u'(x) = 3$.
$g'(x) = 4 \times 3 \times (3x - 2)^3 = 12\,(3x - 2)^3$.
:::

::: details Corrigé Q3
Produit $uv$ avec $u = 2x + 1$ et $v = e^x$ : $h' = u'v + uv'$.
$h'(x) = 2e^x + (2x + 1)e^x = (2x + 3)\,e^x$.
:::

::: details Corrigé Q4
Forme $\ln(u)$ avec $u = x^2 + 1$ : $k' = \dfrac{u'}{u}$.
$k'(x) = \dfrac{2x}{x^2 + 1}$.
:::

::: details Corrigé Q5
a) La dérivée de $e^{-0{,}1t}$ est $-0{,}1\,e^{-0{,}1t}$, donc
$T'(t) = 60 \times (-0{,}1)\,e^{-0{,}1t} = -6\,e^{-0{,}1t}$.

b) $T'(0) = -6\,e^{0} = -6$.
À l'instant $t = 0$, le café perd **6 °C par minute** (le signe moins veut dire qu'il refroidit).
:::

## Et maintenant ?

| Tu as raté… | Ce qu'il faut travailler |
|---|---|
| Q1 | Dérivées de base : puissances, somme, constante → [séance 1](./seance-1) |
| Q2 | Dérivée d'une fonction composée $u^n$ |
| Q3 | Dérivée d'un produit |
| Q4, Q5 | Dérivées avec $\ln$ et $e^x$ |

Commence toujours par la **première** ligne où tu as eu un problème. Les séances 2 et suivantes
sont écrites quand tu as terminé la précédente.

::: verifier À VÉRIFIER par Arthur
Les corrigés ont été recalculés par une méthode numérique indépendante. Dis-moi si une
question te paraît mal posée ou trop difficile pour un test de départ.
:::

<FinPartie lecon="maths/seances/derivees/test-niveau" :numero="1" :total="1" />
