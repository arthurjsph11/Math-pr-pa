---
title: "Intégrales : mini-test de niveau"
lecon:
  statut: brouillon
  niveau: Intermédiaire
  duree: 10
  bts: true
  prerequis:
    - texte: Dérivées, séance 1
      lien: /maths/seances/derivees/seance-1
---

# Intégrales : mini-test de niveau

Ce test **n'est pas noté**. Si tu n'as jamais vu les intégrales, c'est normal : écris « je ne sais pas »,
ça me dit exactement par où commencer.

- Dure environ 10 minutes.
- Réponds **sur papier**, sans regarder les corrigés.

## Les 5 questions

**Q1.** Trouve **une primitive** de $f(x) = 3x^2 - 4x + 1$.

**Q2.** Calcule $\displaystyle\int_0^2 3x^2\,dx$.

**Q3.** Calcule $\displaystyle\int_1^{e} \dfrac{1}{x}\,dx$.

**Q4.** Calcule $\displaystyle\int_0^1 e^{2x}\,dx$.

**Q5.** *(Énergie)* Une machine absorbe une puissance $P(t) = 2t$ (en W, avec $t$ en s) pendant 10 secondes.
Calcule l'énergie consommée $E = \displaystyle\int_0^{10} P(t)\,dt$ en joules.

## Les corrigés

Ouvre-les seulement quand tu as fini tes 5 réponses.

::: details Corrigé Q1
Une primitive $F$ est une fonction dont la dérivée est $f$. On « remonte » chaque terme :
$F(x) = x^3 - 2x^2 + x$ (on peut ajouter n'importe quelle constante).
Vérification : $F'(x) = 3x^2 - 4x + 1$ ✓.
:::

::: details Corrigé Q2
Une primitive de $3x^2$ est $x^3$. Donc $\displaystyle\int_0^2 3x^2\,dx = \big[x^3\big]_0^2 = 2^3 - 0^3 = 8$.
:::

::: details Corrigé Q3
Une primitive de $\dfrac{1}{x}$ est $\ln x$. Donc $\displaystyle\int_1^{e} \dfrac{1}{x}\,dx = \big[\ln x\big]_1^{e} = \ln e - \ln 1 = 1 - 0 = 1$.
:::

::: details Corrigé Q4
Une primitive de $e^{2x}$ est $\dfrac{1}{2}e^{2x}$. Donc
$\displaystyle\int_0^1 e^{2x}\,dx = \left[\dfrac{1}{2}e^{2x}\right]_0^1 = \dfrac{e^2 - 1}{2} \approx 3{,}19$.
:::

::: details Corrigé Q5
Une primitive de $2t$ est $t^2$. Donc $E = \big[t^2\big]_0^{10} = 100 - 0 = 100$ J.
:::

## Et maintenant ?

| Tu as raté… | Ce qu'il faut travailler |
|---|---|
| Q1, Q2, Q5 | Primitives et intégrale d'un polynôme → [séance 1](./seance-1) |
| Q3, Q4 | Primitives de $\dfrac{1}{x}$ et $e^{ax}$ (séance à venir) |

::: verifier À VÉRIFIER par Arthur
Les corrigés ont été recalculés numériquement. Dis-moi si le test est trop dur : si tu n'as jamais vu
les intégrales, c'est normal, on commence par la séance 1.
:::

<FinPartie lecon="maths/seances/integrales/test-niveau" :numero="1" :total="1" />
