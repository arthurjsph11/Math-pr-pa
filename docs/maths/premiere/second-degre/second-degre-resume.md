---
title: Résumé · Le second degré
aside: false
prev: false
next: false
---

<div class="resume">

# Résumé : le second degré

<p class="pas-imprime"><BoutonImprimer /> <a href="./second-degre">← Retour à la leçon</a></p>

::: memo L'image à retenir
**Le jet d'eau monte, s'arrête au sommet, redescend : c'est une parabole.**
Le sommet dit jusqu'où ça monte. $\Delta$ dit combien de fois ça touche le sol : 2, 1 ou 0.
:::

::: definition
$f(x) = ax^2 + bx + c$ avec **$a \neq 0$** : sa courbe est une parabole.
$a > 0$ : en U (minimum). $a < 0$ : bras vers le bas (maximum).
:::

| Forme | Écriture | Donne |
|---|---|---|
| Développée | $ax^2 + bx + c$ | $f(0) = c$ |
| Canonique | $a(x - \alpha)^2 + \beta$, $\ \alpha = -\dfrac{b}{2a}$, $\ \beta = f(\alpha)$ | sommet $S(\alpha \,;\, \beta)$, variations |
| Factorisée | $a(x - x_1)(x - x_2)$ | racines, signe |

::: propriete Résoudre $ax^2 + bx + c = 0$ : $\ \Delta = b^2 - 4ac$
- $\Delta < 0$ : aucune solution, pas de forme factorisée.
- $\Delta = 0$ : une solution $x_0 = -\dfrac{b}{2a}$, et $f(x) = a(x - x_0)^2$.
- $\Delta > 0$ : $x_{1,2} = \dfrac{-b \mp \sqrt{\Delta}}{2a}$, et $f(x) = a(x - x_1)(x - x_2)$.

**Signe** : celui de $a$, sauf **entre** les racines (signe contraire).
**Somme et produit** : $x_1 + x_2 = -\dfrac{b}{a}$, $\ x_1 x_2 = \dfrac{c}{a}$.
:::

::: methode Méthode
Tout d'un côté → raccourci ? (pas de $c$ : facteur $x$ ; pas de $b$ : $x^2 = k$ ; racine évidente) →
sinon $\Delta$ → formules → **vérifier** en remplaçant → conclure par « $x = $ … ».
:::

**Exemple** : $2x^2 - x - 6 = 0$. $\Delta = 1 + 48 = 49$, donc $x = \dfrac{1 - 7}{4} = -\dfrac{3}{2}$ ou $x = \dfrac{1 + 7}{4} = 2$.

::: erreur Les pièges
- $(-3)^2 = 9$, pas $-9$. Et $-4 \times 2 \times (-6) = +48$.
- La barre de fraction est sous **tout** $-b \pm \sqrt{\Delta}$.
- Ne pas oublier le $a$ devant la forme factorisée.
:::

::: application À quoi ça sert
Source réelle : $P(I) = EI - rI^2$, maximum en $I = \dfrac{E}{2r}$ : $P_{\max} = \dfrac{E^2}{4r}$ (adaptation de charge).
:::

</div>
