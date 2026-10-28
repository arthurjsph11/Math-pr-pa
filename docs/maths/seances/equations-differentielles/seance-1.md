---
title: "Séance 1 : l'équation y' = ay + b"
lecon:
  statut: brouillon
  niveau: Bases
  duree: 25
  bts: true
  prerequis:
    - texte: Dérivées, séance 1
      lien: /maths/seances/derivees/seance-1
    - texte: Résoudre une équation du premier degré
      lien: /maths/bloc-0/equations/equation-premier-degre
---

# Séance 1 : l'équation $y' = ay + b$

**Objectif :** résoudre une équation différentielle du premier ordre, avec ou sans condition initiale.

**Chronomètre :** 5 min de rappel, 15 min d'exercices, 3 min de correction, 2 min de bilan.

## 1. Rappel (5 min)

Une équation comme $y' = 3y$ demande : « quelle fonction a pour dérivée **trois fois elle-même** ? ».
La réponse fait intervenir l'exponentielle, car $(e^{3x})' = 3e^{3x}$.

::: propriete La formule clé
Soit $a \neq 0$ et $b$ deux réels. Les solutions de

$$y' = a\,y + b$$

sont les fonctions

$$y(x) = C\,e^{ax} - \frac{b}{a} \qquad (C \text{ réel quelconque})$$

Le nombre $-\dfrac{b}{a}$ est la **solution constante** : c'est la valeur $k$ pour laquelle $0 = ak + b$.
:::

Une **condition initiale** (par exemple $y(0) = 5$) permet de trouver la valeur de $C$.

::: essai Exemple résolu
Résoudre $y' = 2y - 6$ avec $y(0) = 1$.
:::

::: details Voir le corrigé
Ici $a = 2$ et $b = -6$. La solution constante est $-\dfrac{b}{a} = -\dfrac{-6}{2} = 3$.

Les solutions sont $y(x) = C\,e^{2x} + 3$.

Condition initiale : $y(0) = C + 3 = 1$, donc $C = -2$.

$y(x) = -2\,e^{2x} + 3$.
:::

::: erreur Oublier la constante C
❌ « La solution de $y' = 3y$ est $y = e^{3x}$. »

✅ $y = e^{3x}$ est **une** solution, mais $y = 5e^{3x}$ en est une aussi. Toutes les solutions sont $y = C\,e^{3x}$.
:::

## 2. Les 3 exercices (15 min)

Cherche **sur papier**. Ne regarde ni l'indice ni le corrigé avant d'avoir écrit une réponse.

**Exercice 1 (facile).** Résoudre $y' = 3y$ avec $y(0) = 2$.

**Exercice 2 (moyen).** Résoudre $y' = -2y + 6$ avec $y(0) = 1$.

**Exercice 3 (un peu plus dur, électricité).** On charge un condensateur à travers une résistance. La tension $u$ à ses bornes (en V)
vérifie, avec $\tau = RC = 1$ s et une alimentation de $E = 5$ V :

$$u' = -u + 5, \qquad u(0) = 0$$

- a) Résoudre cette équation.
- b) Calculer la tension à $t = 1$ s, puis à $t = 5$ s (arrondir au centième).

## 3. Correction (3 min)

Pour chaque exercice : **indice d'abord**, corrigé ensuite, seulement si tu bloques encore.

::: details Indice exercice 1
Ici $b = 0$ : la solution est $y = C\,e^{3x}$. Utilise $y(0) = 2$ pour trouver $C$.
:::

::: details Corrigé exercice 1
$y(x) = C\,e^{3x}$ et $y(0) = C = 2$. Donc $y(x) = 2\,e^{3x}$.
:::

::: details Indice exercice 2
Repère $a$ et $b$, calcule $-\dfrac{b}{a}$, puis trouve $C$.
:::

::: details Corrigé exercice 2
$a = -2$ et $b = 6$ : la solution constante est $-\dfrac{6}{-2} = 3$.
Donc $y(x) = C\,e^{-2x} + 3$.

$y(0) = C + 3 = 1$, donc $C = -2$. Donc $y(x) = -2\,e^{-2x} + 3$.
:::

::: details Indice exercice 3
$a = -1$ et $b = 5$. La solution constante est la tension finale du condensateur.
:::

::: details Corrigé exercice 3
a) Solution constante : $-\dfrac{5}{-1} = 5$. Donc $u(t) = C\,e^{-t} + 5$.
$u(0) = C + 5 = 0$, donc $C = -5$ et $u(t) = 5 - 5\,e^{-t} = 5\,(1 - e^{-t})$.

b) $u(1) = 5\,(1 - e^{-1}) \approx 3{,}16$ V.
$u(5) = 5\,(1 - e^{-5}) \approx 4{,}97$ V : après $5\tau$, le condensateur est presque chargé à $5$ V.
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
Solutions de $y' = ay + b$ : programme de spécialité mathématiques de Terminale et programme de mathématiques du BTS.
Charge d'un condensateur : $u(t) = E\,(1 - e^{-t/\tau})$ avec $\tau = RC$.
:::

::: verifier À VÉRIFIER par Arthur
Les solutions ont été vérifiées en les remplaçant dans les équations. Les références exactes des programmes
officiels sont à vérifier. Je n'ai pas ajouté de vidéo : je ne peux pas les regarder.
:::

<FinPartie lecon="maths/seances/equations-differentielles/seance-1" :numero="1" :total="1" />
