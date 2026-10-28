---
title: "Séance 1 : dériver une fonction polynôme"
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

# Séance 1 : dériver une fonction polynôme

**Objectif :** savoir dériver une somme de termes comme $4x^3 - 6x^2 + 5x - 7$.

**Chronomètre :** 5 min de rappel, 15 min d'exercices, 3 min de correction, 2 min de bilan.

## 1. Rappel (5 min)

La dérivée $f'(x)$ donne **la vitesse à laquelle $f$ change** au point $x$ :
si $f'(x) > 0$ la fonction monte, si $f'(x) < 0$ elle descend.

::: propriete La formule clé
Pour tout entier $n \geq 1$ :

$$(x^n)' = n\,x^{n-1}$$

On « descend » l'exposant devant, puis on le **diminue de 1**.
:::

Trois règles complètent la formule :

| Fonction | Dérivée |
|---|---|
| un nombre seul, $c$ | $0$ |
| $x$ | $1$ |
| $k \times f(x)$ ($k$ un nombre) | $k \times f'(x)$ |
| $f(x) + g(x)$ | $f'(x) + g'(x)$ |

::: essai Exemple résolu
Dériver $f(x) = 4x^3 - 6x^2 + 5x - 7$.
:::

::: details Voir le corrigé
On dérive **terme par terme** :

- $(4x^3)' = 4 \times 3x^2 = 12x^2$
- $(-6x^2)' = -6 \times 2x = -12x$
- $(5x)' = 5$
- $(-7)' = 0$

Donc $f'(x) = 12x^2 - 12x + 5$.
:::

::: erreur Oublier de diminuer l'exposant
❌ $(x^3)' = 3x^3$.

✅ $(x^3)' = 3x^{2}$ : l'exposant **diminue** de 1.
:::

## 2. Les 3 exercices (15 min)

Cherche **sur papier**. Ne regarde ni l'indice ni le corrigé avant d'avoir écrit une réponse.

**Exercice 1 (facile).** Dériver $f(x) = 5x^2 - 3x + 8$.

**Exercice 2 (moyen).** Dériver $g(x) = 2x^4 - \dfrac{1}{3}x^3 + 7x - 1$.

**Exercice 3 (un peu plus dur, électricité).** Un générateur de force électromotrice $E = 12$ V
et de résistance interne $r = 0{,}5\ \Omega$ fournit au circuit extérieur la puissance

$$P(I) = 12\,I - 0{,}5\,I^2 \quad (\text{en W, avec } I \text{ en A, } 0 \leq I \leq 24)$$

- a) Calculer $P'(I)$.
- b) Résoudre $P'(I) = 0$.
- c) En déduire l'intensité pour laquelle la puissance est maximale, et cette puissance maximale.

## 3. Correction (3 min)

Pour chaque exercice : **indice d'abord**, corrigé ensuite, seulement si tu bloques encore.

::: details Indice exercice 1
Dérive chaque terme séparément. Le nombre 8 tout seul a pour dérivée 0.
:::

::: details Corrigé exercice 1
$f'(x) = 5 \times 2x - 3 + 0 = 10x - 3$.
:::

::: details Indice exercice 2
Le terme $\dfrac{1}{3}x^3$ est « $\dfrac{1}{3}$ fois $x^3$ » : on garde le coefficient $\dfrac{1}{3}$ et on dérive $x^3$.
:::

::: details Corrigé exercice 2
- $(2x^4)' = 8x^3$
- $\left(-\dfrac{1}{3}x^3\right)' = -\dfrac{1}{3} \times 3x^2 = -x^2$
- $(7x)' = 7$
- $(-1)' = 0$

Donc $g'(x) = 8x^3 - x^2 + 7$.
:::

::: details Indice exercice 3
a) $0{,}5\,I^2$ se dérive comme $5x^2$ dans l'exercice 1.
b) C'est une équation du premier degré en $I$.
c) Regarde le signe de $P'(I)$ avant et après la valeur trouvée : la fonction monte puis descend ?
:::

::: details Corrigé exercice 3
a) $P'(I) = 12 - 0{,}5 \times 2I = 12 - I$.

b) $12 - I = 0 \iff I = 12$.

c) $P'(I) > 0$ pour $I < 12$ (la puissance augmente) et $P'(I) < 0$ pour $I > 12$ (elle diminue).
La puissance est donc **maximale pour $I = 12$ A**, et

$$P(12) = 12 \times 12 - 0{,}5 \times 12^2 = 144 - 72 = 72\ \text{W}.$$

Vérification : on retrouve la valeur connue $I = \dfrac{E}{2r} = \dfrac{12}{1} = 12$ A.
:::

## 4. Bilan (2 min)

Écris deux lignes sur papier :

- **Je maîtrise :** …
- **À revoir :** …

| Exercices réussis (sans le corrigé) | Quoi faire |
|---|---|
| 3 sur 3 ou 2 sur 3 | Bien joué : on passe à la séance 2 |
| 0 ou 1 sur 3 | Refais la séance demain, en commençant par l'exercice que tu as raté |

::: source
Formule de dérivation de $x^n$ et règles de somme et de produit par un nombre : programme de
spécialité mathématiques de Première, BO spécial n°1 du 22 janvier 2019. Puissance maximale d'un
générateur : $I = \dfrac{E}{2r}$ (adaptation d'impédance).
:::

::: verifier À VÉRIFIER par Arthur
Les corrigés ont été recalculés par une méthode numérique indépendante. Je n'ai pas ajouté de
vidéo : je ne peux pas les regarder, dis-moi si tu en veux une.
:::

<FinPartie lecon="maths/seances/derivees/seance-1" :numero="1" :total="1" />
