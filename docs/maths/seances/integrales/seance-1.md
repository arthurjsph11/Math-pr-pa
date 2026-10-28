---
title: "Séance 1 : primitives et intégrale d'un polynôme"
lecon:
  statut: brouillon
  niveau: Bases
  duree: 25
  bts: true
  prerequis:
    - texte: Dérivées, séance 1
      lien: /maths/seances/derivees/seance-1
---

# Séance 1 : primitives et intégrale d'un polynôme

**Objectif :** trouver une primitive d'un polynôme, puis calculer une intégrale comme $\displaystyle\int_1^2 (3x^2 - 4x + 5)\,dx$.

**Chronomètre :** 5 min de rappel, 15 min d'exercices, 3 min de correction, 2 min de bilan.

## 1. Rappel (5 min)

Une **primitive** de $f$, c'est une fonction $F$ dont la dérivée est $f$ : on **remonte** la dérivation.

Une **intégrale** $\displaystyle\int_a^b f(x)\,dx$ mesure l'**aire** entre la courbe de $f$ et l'axe des abscisses, de $x = a$ à $x = b$
(à condition que $f$ soit positive).

::: propriete La formule clé
Pour $n \neq -1$, une primitive de $x^n$ est

$$\frac{x^{n+1}}{n+1}$$

On **augmente** l'exposant de 1, puis on **divise** par le nouvel exposant.
:::

::: propriete Calculer une intégrale
Si $F$ est une primitive de $f$ :

$$\int_a^b f(x)\,dx = F(b) - F(a) = \big[F(x)\big]_a^b$$

La constante d'intégration n'a pas besoin d'être écrite : elle disparaît dans la soustraction.
:::

::: essai Exemple résolu
Calculer $\displaystyle\int_0^3 (x^2 + 4)\,dx$.
:::

::: details Voir le corrigé
Une primitive de $x^2$ est $\dfrac{x^3}{3}$, une primitive de $4$ est $4x$. Donc $F(x) = \dfrac{x^3}{3} + 4x$.

$$\int_0^3 (x^2 + 4)\,dx = F(3) - F(0) = \left(\frac{27}{3} + 12\right) - 0 = 21$$
:::

::: erreur Oublier de diviser
❌ Une primitive de $x^2$ est $x^3$.

✅ Une primitive de $x^2$ est $\dfrac{x^3}{3}$. Vérification : la dérivée de $\dfrac{x^3}{3}$ est bien $\dfrac{3x^2}{3} = x^2$. **Dérive toujours ta primitive pour vérifier.**
:::

## 2. Les 3 exercices (15 min)

Cherche **sur papier**. Ne regarde ni l'indice ni le corrigé avant d'avoir écrit une réponse.

**Exercice 1 (facile).** Calculer $\displaystyle\int_0^3 (2x + 1)\,dx$.

**Exercice 2 (moyen).** Calculer $\displaystyle\int_1^2 (3x^2 - 4x + 5)\,dx$.

**Exercice 3 (un peu plus dur, électricité).** Le courant qui charge un condensateur varie selon
$i(t) = 0{,}2 + 0{,}1\,t$ (en A, avec $t$ en s). La charge transportée entre $t = 0$ et $t = 4$ s est

$$Q = \int_0^4 i(t)\,dt$$

Calculer $Q$ en coulombs.

## 3. Correction (3 min)

Pour chaque exercice : **indice d'abord**, corrigé ensuite, seulement si tu bloques encore.

::: details Indice exercice 1
Une primitive de $2x$ est $x^2$. Une primitive de $1$ est $x$.
:::

::: details Corrigé exercice 1
$F(x) = x^2 + x$, donc $\displaystyle\int_0^3 (2x + 1)\,dx = F(3) - F(0) = (9 + 3) - 0 = 12$.
:::

::: details Indice exercice 2
Une primitive de $3x^2$ est $x^3$. Pour $-4x$ : augmente l'exposant, divise par 2.
:::

::: details Corrigé exercice 2
$F(x) = x^3 - 2x^2 + 5x$.

$F(2) = 8 - 8 + 10 = 10$ et $F(1) = 1 - 2 + 5 = 4$.

Donc l'intégrale vaut $10 - 4 = 6$.
:::

::: details Indice exercice 3
Une primitive de $0{,}1\,t$ est $0{,}1 \times \dfrac{t^2}{2} = 0{,}05\,t^2$.
:::

::: details Corrigé exercice 3
$F(t) = 0{,}2\,t + 0{,}05\,t^2$.

$Q = F(4) - F(0) = (0{,}8 + 0{,}8) - 0 = 1{,}6$ C.
:::

## 4. Bilan (2 min)

Écris deux lignes sur papier :

- **Je maîtrise :** …
- **À revoir :** …

| Exercices réussis (sans le corrigé) | Quoi faire |
|---|---|
| 3 sur 3 ou 2 sur 3 | Bien joué : on passe à la séance suivante du chapitre |
| 0 ou 1 sur 3 | Refais la séance demain, en commençant par l'exercice que tu as raté |

::: source
Primitives de $x^n$ et calcul d'une intégrale avec une primitive : programme de spécialité
mathématiques de Terminale. Charge d'un condensateur : $Q = \displaystyle\int i\,dt$.
:::

::: verifier À VÉRIFIER par Arthur
Les corrigés ont été recalculés numériquement. La référence exacte du programme officiel est à vérifier.
Je n'ai pas ajouté de vidéo : je ne peux pas les regarder.
:::

<FinPartie lecon="maths/seances/integrales/seance-1" :numero="1" :total="1" />
