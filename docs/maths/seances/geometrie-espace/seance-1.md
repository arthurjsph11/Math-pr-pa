---
title: "Séance 1 : coordonnées, vecteurs et distance"
lecon:
  statut: brouillon
  niveau: Bases
  duree: 25
  bts: true
  prerequis:
    - texte: Racines carrées
      lien: /maths/bloc-0/calcul/racines-carrees
    - texte: Calculer avec les fractions
      lien: /maths/bloc-0/fractions/calculer-avec-les-fractions
---

# Séance 1 : coordonnées, vecteurs et distance

**Objectif :** calculer les coordonnées d'un vecteur dans l'espace, puis la distance entre deux points.

**Chronomètre :** 5 min de rappel, 15 min d'exercices, 3 min de correction, 2 min de bilan.

## 1. Rappel (5 min)

Dans l'espace, on repère un point par **trois nombres** : $A(x_A\,;\,y_A\,;\,z_A)$. Pour une pièce : $x$ et $y$ sur le sol, $z$ la hauteur.

::: propriete La formule clé
Pour $A(x_A\,;\,y_A\,;\,z_A)$ et $B(x_B\,;\,y_B\,;\,z_B)$ :

$$\overrightarrow{AB}\,(x_B - x_A\,;\,y_B - y_A\,;\,z_B - z_A)$$

$$AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$$

On fait toujours **arrivée moins départ**.
:::

C'est le théorème de Pythagore, en 3 dimensions.

::: essai Exemple résolu
Soit $A(1\,;\,2\,;\,0)$ et $B(3\,;\,5\,;\,6)$. Calculer $\overrightarrow{AB}$ puis la distance $AB$.
:::

::: details Voir le corrigé
$\overrightarrow{AB}(3 - 1\,;\,5 - 2\,;\,6 - 0) = (2\,;\,3\,;\,6)$.

$AB = \sqrt{2^2 + 3^2 + 6^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7$.
:::

::: erreur Inverser départ et arrivée
❌ $\overrightarrow{AB}(x_A - x_B\,;\,\dots)$.

✅ $\overrightarrow{AB}(x_B - x_A\,;\,\dots)$ : **arrivée moins départ**. La distance ne change pas (le carré supprime le signe), mais le vecteur serait l'opposé.
:::

## 2. Les 3 exercices (15 min)

Cherche **sur papier**. Ne regarde ni l'indice ni le corrigé avant d'avoir écrit une réponse.

**Exercice 1 (facile).** Soit $A(1\,;\,2\,;\,3)$ et $B(4\,;\,6\,;\,3)$. Calculer $\overrightarrow{AB}$ et la distance $AB$.

**Exercice 2 (moyen).** Soit $A(2\,;\,-1\,;\,0)$ et $B(5\,;\,1\,;\,6)$. Calculer $\overrightarrow{AB}$ et la distance $AB$.

**Exercice 3 (un peu plus dur, domotique).** Dans un salon (en mètres), une prise est en $P(0\,;\,0\,;\,0{,}3)$
et un détecteur de mouvement est fixé au plafond en $D(3\,;\,4\,;\,2{,}8)$.

- a) Calculer la distance $PD$ en ligne droite.
- b) Un câble doit longer le mur : il fait **la somme** des trois déplacements ($x$, puis $y$, puis $z$).
  Quelle longueur de câble faut-il ? Compare avec la ligne droite.

## 3. Correction (3 min)

Pour chaque exercice : **indice d'abord**, corrigé ensuite, seulement si tu bloques encore.

::: details Indice exercice 1
Arrivée moins départ pour chaque coordonnée. Une des coordonnées donne $0$.
:::

::: details Corrigé exercice 1
$\overrightarrow{AB}(3\,;\,4\,;\,0)$ et $AB = \sqrt{9 + 16 + 0} = \sqrt{25} = 5$.
:::

::: details Indice exercice 2
Attention au signe : $1 - (-1) = 1 + 1$.
:::

::: details Corrigé exercice 2
$\overrightarrow{AB}(3\,;\,2\,;\,6)$ et $AB = \sqrt{9 + 4 + 36} = \sqrt{49} = 7$.
:::

::: details Indice exercice 3
a) Même formule que l'exercice 2. b) Additionne les valeurs absolues des trois différences.
:::

::: details Corrigé exercice 3
$\overrightarrow{PD}(3\,;\,4\,;\,2{,}5)$.

a) $PD = \sqrt{9 + 16 + 6{,}25} = \sqrt{31{,}25} \approx 5{,}59$ m.

b) Câble le long des murs : $3 + 4 + 2{,}5 = 9{,}5$ m, soit beaucoup plus que la ligne droite ($5{,}59$ m).
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
Coordonnées d'un vecteur et distance dans un repère orthonormé de l'espace : programme de mathématiques du lycée
(géométrie vectorielle dans l'espace, Terminale).
:::

::: verifier À VÉRIFIER par Arthur
Les corrigés ont été recalculés numériquement. La référence exacte du programme officiel est à vérifier.
Je n'ai pas ajouté de vidéo : je ne peux pas les regarder.
:::

<FinPartie lecon="maths/seances/geometrie-espace/seance-1" :numero="1" :total="1" />
