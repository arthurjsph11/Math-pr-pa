---
title: Exercices sur les fractions
lecon:
  statut: brouillon
  niveau: Bases
  duree: 30
  bts: true
  prerequis:
    - texte: Les tables de multiplication
    - texte: Les priorités opératoires
    - texte: Résoudre une équation du premier degré (pour les exercices 9 et 11)
      lien: /maths/bloc-0/equations/equation-premier-degre
---

# Exercices sur les fractions

Trois niveaux, cinq exercices par niveau. Prends ton temps : il n'y a pas de chronomètre.

::: methode Comment ça marche
1. **Lis l'énoncé et cherche** sur ton brouillon (ou ta page blanche).
2. **Tape ta réponse** dans l'encadré. Sur ordinateur, avec ton clavier ; sur tablette, avec le
   **clavier maths** à l'écran. Sous l'encadré, « Je lis » montre ta réponse écrite comme dans un cahier :
   vérifie que c'est bien ce que tu voulais écrire. Puis **Vérifier ma réponse** (ou la touche Entrée).
3. **Bloqué ?** Indice 1, puis indice 2, puis la solution complète. Le site retient combien d'indices tu as utilisés.
4. **🎲 Nouvel exercice** : la même question avec d'autres nombres. Refais-la jusqu'à la réussir sans indice.
5. Chaque exercice raté va dans **[ton carnet d'erreurs](../../carnet-erreurs)**, pour le refaire plus tard.
:::

Une réponse juste écrite autrement est acceptée : $\frac{1}{2}$, $\frac{2}{4}$ et $0{,}5$, c'est pareil.
Sauf quand l'énoncé demande une **fraction irréductible** : là, il faut simplifier jusqu'au bout.
Pour une équation, écris ta réponse sous la forme **x = valeur**.

Pour écrire une fraction, utilise la barre `/` : `3/4`. Pour une fraction compliquée, mets des parenthèses : `(1+2)/3`.

## Niveau 1 : application

Une règle à la fois : simplifier, additionner, multiplier.

<Exercice id="fractions-simplifier" :numero="1" />

<Exercice id="fractions-addition-meme-denominateur" :numero="2" />

<Exercice id="fractions-multiplier" :numero="3" />

<Exercice id="fractions-fraction-quantite" :numero="4" />

<Exercice id="fractions-soustraction-simplifier" :numero="5" />

## Niveau 2 : entraînement

Dénominateurs différents, division, priorités, et une première équation.

<Exercice id="fractions-addition-denominateurs-differents" :numero="6" />

<Exercice id="fractions-soustraction-multiple" :numero="7" />

<Exercice id="fractions-diviser" :numero="8" />

<Exercice id="fractions-equation-produit" :numero="9" />

<Exercice id="fractions-priorites" :numero="10" />

## Niveau 3 : approfondissement

Plusieurs règles à enchaîner, et des problèmes concrets (électricité, domotique, maison).

<Exercice id="fractions-equation-deux-etapes" :numero="11" />

<Exercice id="fractions-expression-complete" :numero="12" />

<Exercice id="fractions-resistances-parallele" :numero="13" />

<Exercice id="fractions-batterie" :numero="14" />

<Exercice id="fractions-fraction-de-fraction" :numero="15" />

::: source
Règles de calcul sur les fractions (simplification, addition au même dénominateur, multiplication,
division par l'inverse) : [Sésamath, cours de 4<sup>e</sup> « Fractions » (PDF)](https://mathadoc.sesamath.net/Documents/college/4eme/4fract/c6fract.pdf) ;
[Yvan Monka, Maths et tiques, « Les fractions (partie 1) » (PDF)](https://maths-et-tiques.fr/telech/Fractions1.pdf).
Résistances en parallèle, $\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2}$ : loi d'association des
conducteurs ohmiques en dérivation (électricité, programme de BTS).
Tous les exercices sont vérifiés automatiquement : pour chaque exercice, 3 000 tirages au hasard
sont recalculés d'une autre façon (`npm run verifier`). Pour les équations, la solution est
remplacée dans l'équation de départ.
:::

::: verifier À VÉRIFIER par Arthur
Les problèmes concrets (exercices 13 à 15) utilisent des valeurs **inventées mais réalistes**
(résistances, batterie, part du chauffage). Les calculs sont justes ; dis-moi si une situation
te paraît bizarre par rapport à ce que tu vois en BTS.
:::
