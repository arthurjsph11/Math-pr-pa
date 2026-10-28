---
title: "Géométrie dans l'espace : mini-test de niveau"
lecon:
  statut: brouillon
  niveau: Intermédiaire
  duree: 10
  bts: true
  prerequis:
    - texte: Racines carrées
      lien: /maths/bloc-0/calcul/racines-carrees
    - texte: Calculer avec les fractions
      lien: /maths/bloc-0/fractions/calculer-avec-les-fractions
---

# Géométrie dans l'espace : mini-test de niveau

Dans l'espace, un point a **trois coordonnées** $(x\,;\,y\,;\,z)$.

Ce test **n'est pas noté**. Si tu n'as jamais vu ça, écris « je ne sais pas » : c'est normal.

- Dure environ 10 minutes.
- Réponds **sur papier**, sans regarder les corrigés.

## Les 5 questions

**Q1.** Soit $A(1\,;\,1\,;\,1)$ et $B(3\,;\,0\,;\,4)$. Calcule les coordonnées du vecteur $\overrightarrow{AB}$, puis sa norme.

**Q2.** Soit $A(2\,;\,0\,;\,-4)$ et $B(6\,;\,4\,;\,2)$. Donne les coordonnées du milieu de $[AB]$.

**Q3.** Les vecteurs $\vec u(1\,;\,2\,;\,3)$ et $\vec v(2\,;\,-1\,;\,0)$ sont-ils orthogonaux ?

**Q4.** Donne une équation du plan qui passe par $A(1\,;\,0\,;\,0)$ et dont un vecteur normal est $\vec n(2\,;\,-1\,;\,3)$.

**Q5.** *(Domotique)* Dans une pièce, un capteur est en $A(0\,;\,0\,;\,2{,}5)$ et le boîtier de commande en $B(4\,;\,3\,;\,0{,}5)$ (en mètres).
Quelle est la distance entre les deux ? Un câble de 5 m suffit-il, en ligne droite ?

## Les corrigés

Ouvre-les seulement quand tu as fini tes 5 réponses.

::: details Corrigé Q1
$\overrightarrow{AB}(3 - 1\,;\,0 - 1\,;\,4 - 1) = (2\,;\,-1\,;\,3)$.
$\|\overrightarrow{AB}\| = \sqrt{4 + 1 + 9} = \sqrt{14} \approx 3{,}74$.
:::

::: details Corrigé Q2
Le milieu a pour coordonnées la moyenne de celles des deux points :
$\left(\dfrac{2 + 6}{2}\,;\,\dfrac{0 + 4}{2}\,;\,\dfrac{-4 + 2}{2}\right) = (4\,;\,2\,;\,-1)$.
:::

::: details Corrigé Q3
Produit scalaire : $\vec u \cdot \vec v = 1 \times 2 + 2 \times (-1) + 3 \times 0 = 0$.
Il est nul : les vecteurs sont **orthogonaux**.
:::

::: details Corrigé Q4
Un plan de vecteur normal $(a\,;\,b\,;\,c)$ a une équation $ax + by + cz + d = 0$. Ici : $2x - y + 3z + d = 0$.
Comme $A(1\,;\,0\,;\,0)$ est dans le plan : $2 + d = 0$, donc $d = -2$.
Équation : $2x - y + 3z - 2 = 0$.
:::

::: details Corrigé Q5
$\overrightarrow{AB}(4\,;\,3\,;\,-2)$, donc $AB = \sqrt{16 + 9 + 4} = \sqrt{29} \approx 5{,}39$ m.
**Non** : un câble de 5 m est trop court, même en ligne droite.
:::

## Et maintenant ?

| Tu as raté… | Ce qu'il faut travailler |
|---|---|
| Q1, Q2, Q5 | Coordonnées, vecteurs et distance → [séance 1](./seance-1) |
| Q3 | Produit scalaire et orthogonalité (séance à venir) |
| Q4 | Plans et vecteurs normaux (séance à venir) |

::: verifier À VÉRIFIER par Arthur
Les corrigés ont été recalculés numériquement. Dis-moi si le test est trop dur.
:::

<FinPartie lecon="maths/seances/geometrie-espace/test-niveau" :numero="1" :total="1" />
