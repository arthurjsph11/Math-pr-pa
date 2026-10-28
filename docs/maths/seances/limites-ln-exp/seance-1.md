---
title: "Séance 1 : limites en l'infini"
lecon:
  statut: brouillon
  niveau: Bases
  duree: 25
  bts: true
  prerequis:
    - texte: Puissances et écriture scientifique
      lien: /maths/bloc-0/calcul/puissances
    - texte: Notion de fonction et fonctions affines
      lien: /maths/bloc-0/fonctions/fonctions-affines
---

# Séance 1 : limites en l'infini

**Objectif :** calculer la limite en $+\infty$ d'une fraction de polynômes comme $\dfrac{3x^2 - 5x + 1}{x^2 + 2}$.

**Chronomètre :** 5 min de rappel, 15 min d'exercices, 3 min de correction, 2 min de bilan.

## 1. Rappel (5 min)

Une limite répond à la question : « vers quoi se rapproche $f(x)$ quand $x$ devient **très grand** ? ».

::: propriete Les deux limites à connaître
Pour tout entier $n \geq 1$ :

$$\lim_{x \to +\infty} x^n = +\infty \qquad \lim_{x \to +\infty} \frac{1}{x^n} = 0$$
:::

::: propriete Fraction de polynômes
Quand $x \to +\infty$, une fraction de polynômes a la même limite que le **rapport de ses termes de plus haut degré**.

- même degré en haut et en bas : la limite est le rapport des coefficients ;
- degré du haut plus **petit** : la limite est $0$ ;
- degré du haut plus **grand** : la limite est $+\infty$ ou $-\infty$ (on regarde le signe du rapport).
:::

::: essai Exemple résolu
Calculer $\displaystyle\lim_{x \to +\infty} \dfrac{3x^2 - 5x + 1}{x^2 + 2}$.
:::

::: details Voir le corrigé
Le plus haut degré est 2, en haut comme en bas. On le met en facteur :

$$\frac{3x^2 - 5x + 1}{x^2 + 2} = \frac{x^2\left(3 - \frac{5}{x} + \frac{1}{x^2}\right)}{x^2\left(1 + \frac{2}{x^2}\right)} = \frac{3 - \frac{5}{x} + \frac{1}{x^2}}{1 + \frac{2}{x^2}}$$

Quand $x \to +\infty$, $\dfrac{5}{x}$, $\dfrac{1}{x^2}$ et $\dfrac{2}{x^2}$ tendent vers $0$. La limite vaut donc $\dfrac{3}{1} = 3$.
:::

::: erreur Dire « $\infty$ sur $\infty$ égale 1 »
❌ Le haut et le bas tendent vers $+\infty$, donc la fraction vaut $1$.

✅ $\dfrac{+\infty}{+\infty}$ est une **forme indéterminée** : on ne peut pas conclure directement. Il faut mettre le plus haut degré en facteur, comme dans l'exemple.
:::

## 2. Les 3 exercices (15 min)

Cherche **sur papier**. Ne regarde ni l'indice ni le corrigé avant d'avoir écrit une réponse.

**Exercice 1 (facile).** Calculer les limites en $+\infty$ de :

- a) $2x^2 + 5$
- b) $7 + \dfrac{3}{x^2}$
- c) $-x^3$

**Exercice 2 (moyen).** Calculer les limites en $+\infty$ de :

- a) $\dfrac{2x^2 - 3x + 1}{5x^2 + 4}$
- b) $\dfrac{3x + 1}{x^2 + 2}$
- c) $\dfrac{x^2 - 4x + 7}{3x - 1}$

**Exercice 3 (un peu plus dur, électricité).** Une résistance fixe $R_1 = 10\ \Omega$ est branchée en parallèle avec une résistance variable $R_2 = x$ (en $\Omega$). La résistance équivalente est

$$R_{eq}(x) = \frac{10\,x}{x + 10}$$

- a) Calculer $\displaystyle\lim_{x \to +\infty} R_{eq}(x)$.
- b) Que se passe-t-il physiquement quand $R_2$ devient immense ?

## 3. Correction (3 min)

Pour chaque exercice : **indice d'abord**, corrigé ensuite, seulement si tu bloques encore.

::: details Indice exercice 1
Reprends les deux limites du rappel. Pour c) : le signe moins reste devant.
:::

::: details Corrigé exercice 1
a) $2x^2 + 5 \to +\infty$.

b) $\dfrac{3}{x^2} \to 0$, donc la limite vaut $7$.

c) $x^3 \to +\infty$, donc $-x^3 \to -\infty$.
:::

::: details Indice exercice 2
Compare le **degré du haut** et le **degré du bas**, puis applique la règle du rappel.
:::

::: details Corrigé exercice 2
a) Même degré (2) : le rapport des coefficients est $\dfrac{2}{5}$. La limite vaut $\dfrac{2}{5}$.

b) Degré 1 en haut, degré 2 en bas : la limite vaut $0$.

c) Degré 2 en haut, degré 1 en bas : on regarde $\dfrac{x^2}{3x} = \dfrac{x}{3} \to +\infty$. La limite vaut $+\infty$.
:::

::: details Indice exercice 3
Même degré en haut et en bas : regarde le rapport des termes en $x$.
:::

::: details Corrigé exercice 3
a) Les termes de plus haut degré sont $10x$ en haut et $x$ en bas, donc la limite vaut $\dfrac{10}{1} = 10$.
$R_{eq}(x) \to 10\ \Omega$.

b) Quand $R_2$ est immense, presque aucun courant ne passe dans cette branche : tout passe par $R_1$.
La résistance équivalente se rapproche de $R_1 = 10\ \Omega$.
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
Limites de $x^n$ et de $\dfrac{1}{x^n}$, limite d'une fonction rationnelle en l'infini : programme de
spécialité mathématiques de Terminale, BO spécial n°8 du 25 juillet 2019. Résistances en parallèle :
$R_{eq} = \dfrac{R_1 R_2}{R_1 + R_2}$.
:::

::: verifier À VÉRIFIER par Arthur
Les corrigés ont été recalculés numériquement. Le numéro exact du Bulletin officiel cité en source est à
vérifier. Je n'ai pas ajouté de vidéo : je ne peux pas les regarder.
:::

<FinPartie lecon="maths/seances/limites-ln-exp/seance-1" :numero="1" :total="1" />
