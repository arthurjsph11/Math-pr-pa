---
title: Racines carrées
lecon:
  statut: brouillon
  niveau: Bases
  duree: 30
  bts: true
  prerequis:
    - texte: Puissances et écriture scientifique
      lien: /maths/bloc-0/calcul/puissances
    - texte: Calculer avec les fractions
      lien: /maths/bloc-0/fractions/calculer-avec-les-fractions
---

# Racines carrées

La racine carrée, c'est l'opération qui **défait** le carré. On en a besoin dès qu'on
connaît une aire et qu'on cherche une longueur, et en électricité pour passer de la
tension « affichée » (230 V) à la tension maximale réelle.

## Partie 1 : comprendre avec un potager

### L'image : le potager carré

Tu veux faire un potager **carré** de **49 m²**. Combien doit mesurer chaque côté ?
Il faut trouver le nombre qui, multiplié par lui-même, donne 49. C'est **7**, car
$7 \times 7 = 49$. On dit que 7 est la **racine carrée** de 49 : $\sqrt{49} = 7$.

Et pour un potager de **50 m²** ? Aucun nombre entier ne marche : $7^2 = 49$ et $8^2 = 64$.
Le côté mesure un peu plus de 7 m, environ 7,07 m. On l'écrit simplement $\sqrt{50}$.

::: memo
**La racine carrée, c'est le côté du carré dont on connaît l'aire.**
Aire → côté : $\sqrt{\ }$. Côté → aire : $^2$.
:::

### Du potager aux maths

| Sur le potager | En maths |
|---|---|
| L'aire du carré | Le nombre $a$ sous la racine |
| Le côté du carré | $\sqrt{a}$ |
| Calculer l'aire à partir du côté | Élever au carré : $7^2 = 49$ |
| Retrouver le côté à partir de l'aire | Prendre la racine : $\sqrt{49} = 7$ |
| Une longueur ne peut pas être négative | $\sqrt{a}$ est toujours **positive ou nulle** |
| Une aire négative n'existe pas | $\sqrt{a}$ n'existe que pour $a \geq 0$ |
| Coller 4 potagers carrés identiques pour faire un grand carré | Le grand côté double : $\sqrt{4a} = 2\sqrt{a}$ |

### Là où l'image s'arrête

Le potager montre bien que $\sqrt{a}$ est positif. Mais attention : l'équation
$x^2 = 49$ a **deux** solutions, $7$ et $-7$, car $(-7)^2 = 49$ aussi. La racine carrée
ne donne que la solution positive.

::: source
Définition et propriétés : [Yvan Monka, Maths et tiques, cours « Fractions, puissances, racines carrées » de Seconde (PDF)](https://www.maths-et-tiques.fr/telech/19RacPuissM.pdf).
:::

<FinPartie lecon="maths/bloc-0/calcul/racines-carrees" :numero="1" :total="3" />

## Partie 2 : le cours

::: definition Racine carrée
Pour un nombre $a \geq 0$, la **racine carrée** de $a$, notée $\sqrt{a}$, est le nombre
**positif** dont le carré vaut $a$ :

$$
\sqrt{a} \geq 0 \qquad \text{et} \qquad (\sqrt{a})^2 = a
$$
:::

Les carrés parfaits à connaître : $\sqrt{1} = 1$, $\sqrt{4} = 2$, $\sqrt{9} = 3$, $\sqrt{16} = 4$,
$\sqrt{25} = 5$, $\sqrt{36} = 6$, $\sqrt{49} = 7$, $\sqrt{64} = 8$, $\sqrt{81} = 9$, $\sqrt{100} = 10$,
$\sqrt{121} = 11$, $\sqrt{144} = 12$.

::: propriete Racine d'un carré
Pour tout nombre $a$ : $\sqrt{a^2} = a$ si $a \geq 0$, et $\sqrt{a^2} = -a$ si $a < 0$.
Exemple : $\sqrt{(-5)^2} = \sqrt{25} = 5$.
:::

::: propriete Produit et quotient
Pour $a \geq 0$ et $b \geq 0$ :

$$
\sqrt{a \times b} = \sqrt{a} \times \sqrt{b} \qquad \text{et, si } b > 0, \quad \sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}
$$
:::

::: demonstration Pourquoi la racine d'un produit est le produit des racines
Le nombre $\sqrt{a} \times \sqrt{b}$ est positif, et son carré vaut
$(\sqrt{a} \times \sqrt{b})^2 = (\sqrt{a})^2 \times (\sqrt{b})^2 = a \times b$.
C'est donc le nombre positif dont le carré est $a \times b$ : par définition, c'est $\sqrt{a \times b}$.
:::

::: erreur Il n'y a pas de règle pour la somme
$\sqrt{a + b} \neq \sqrt{a} + \sqrt{b}$ en général.
Contre-exemple : $\sqrt{9 + 16} = \sqrt{25} = 5$, alors que $\sqrt{9} + \sqrt{16} = 3 + 4 = 7$.
:::

### Simplifier une racine

On cherche dans le nombre sous la racine un **carré parfait** en facteur.

::: essai
Écris $\sqrt{50}$ sous la forme $a\sqrt{b}$ avec $b$ le plus petit possible.
:::

::: details Voir le corrigé
$50 = 25 \times 2$, et 25 est un carré parfait :

$$
\sqrt{50} = \sqrt{25 \times 2} = \sqrt{25} \times \sqrt{2} = 5\sqrt{2}
$$

**Résultat : $\sqrt{50} = 5\sqrt{2}$** (environ 7,07 : c'est bien le côté du potager de 50 m²).
:::

::: essai
Écris $\dfrac{6}{\sqrt{3}}$ sans racine au dénominateur.
:::

::: details Voir le corrigé
On multiplie en haut et en bas par $\sqrt{3}$ (ça ne change pas la valeur) :

$$
\frac{6}{\sqrt{3}} = \frac{6 \times \sqrt{3}}{\sqrt{3} \times \sqrt{3}} = \frac{6\sqrt{3}}{3} = 2\sqrt{3}
$$

**Résultat : $2\sqrt{3}$.**
:::

<Video id="8Atxa6iMVsw" titre="Les racines carrées (Seconde)" chaine="Yvan Monka" vedette />

### Fiche méthode

::: methode Comment simplifier une racine carrée
1. Décompose le nombre sous la racine en produit, avec **le plus grand carré parfait possible** : $72 = 36 \times 2$.
2. Sépare : $\sqrt{36 \times 2} = \sqrt{36} \times \sqrt{2}$.
3. Calcule la racine du carré parfait : $6\sqrt{2}$.
4. Pour additionner, il faut la **même racine** : $3\sqrt{2} + 5\sqrt{2} = 8\sqrt{2}$, comme $3$ pommes $+ 5$ pommes.
:::

### Les erreurs fréquentes

::: erreur Additionner sous la racine
❌ $\sqrt{9} + \sqrt{16} = \sqrt{25}$.

✅ $\sqrt{9} + \sqrt{16} = 3 + 4 = 7$, et $\sqrt{25} = 5$.
:::

::: erreur Oublier la solution négative de x² = a
❌ $x^2 = 16$ donc $x = 4$.

✅ $x^2 = 16$ a deux solutions : $x = 4$ ou $x = -4$.
:::

::: erreur Additionner des racines différentes
❌ $\sqrt{2} + \sqrt{3} = \sqrt{5}$.

✅ On ne peut pas simplifier $\sqrt{2} + \sqrt{3}$ (environ 3,15, alors que $\sqrt{5} \approx 2{,}24$).
:::

::: source
Propriétés et méthodes : [Yvan Monka, Maths et tiques (PDF)](https://www.maths-et-tiques.fr/telech/19RacPuissM.pdf).
Tous les calculs de cette partie ont été refaits à la main.
:::

<FinPartie lecon="maths/bloc-0/calcul/racines-carrees" :numero="2" :total="3" />

## Partie 3 : s'en servir

### À quoi ça sert ?

::: application Les 230 V de la prise (BTS)
La tension de la prise de courant est **alternative** : elle oscille sans arrêt entre une
valeur maximale positive et négative. Les « 230 V » sont la **valeur efficace**.
Pour une tension sinusoïdale, la valeur maximale vaut :

$$
U_{\max} = U_{\text{eff}} \times \sqrt{2} = 230 \times \sqrt{2} \approx 325\ \text{V}
$$

C'est pour ça qu'un condensateur branché sur le secteur doit supporter bien plus que 230 V.
:::

::: application La diagonale d'un écran
Pour un écran de 30 cm sur 40 cm, le théorème de Pythagore donne la diagonale :
$\sqrt{30^2 + 40^2} = \sqrt{900 + 1\,600} = \sqrt{2\,500} = 50$ cm.
:::

::: source
Valeur efficace d'une tension sinusoïdale ($U_{\max} = U_{\text{eff}}\sqrt{2}$) : programme de
physique-chimie et cours de BTS électrotechnique. Tension nominale du réseau français : 230 V, 50 Hz.
:::

### Les vidéos

::: verifier À VÉRIFIER par Arthur
L'identifiant de la vidéo vient de la page de Seconde de Maths et tiques, mais je n'ai pas
pu vérifier son titre exact en ligne. Clique sur la miniature : si la vidéo ne parle pas
des racines carrées, dis-le moi et je la change.
:::

### Exercices

#### Niveau 1 : application

**Exercice 1.** Calcule $\sqrt{81}$, $\sqrt{0{,}25}$ et $(\sqrt{7})^2$.

::: details Indice
Quel nombre au carré donne 0,25 ? Pense à $0{,}5 \times 0{,}5$.
:::

::: details Corrigé
$\sqrt{81} = 9$ ; $\sqrt{0{,}25} = 0{,}5$ ; $(\sqrt{7})^2 = 7$.
:::

**Exercice 2.** Simplifie $\sqrt{12}$ et $\sqrt{45}$.

::: details Indice
$12 = 4 \times 3$ et $45 = 9 \times 5$.
:::

::: details Corrigé
$\sqrt{12} = 2\sqrt{3}$ et $\sqrt{45} = 3\sqrt{5}$.
:::

**Exercice 3.** Calcule $3\sqrt{5} + 4\sqrt{5} - \sqrt{5}$.

::: details Indice
Compte les « $\sqrt{5}$ » comme des pommes.
:::

::: details Corrigé
$(3 + 4 - 1)\sqrt{5} = 6\sqrt{5}$.
:::

#### Niveau 2 : entraînement

**Exercice 4.** Écris $A = \sqrt{18} + \sqrt{50}$ sous la forme $a\sqrt{2}$.

::: details Indice
Simplifie chaque racine pour faire apparaître $\sqrt{2}$.
:::

::: details Corrigé
$\sqrt{18} = 3\sqrt{2}$ et $\sqrt{50} = 5\sqrt{2}$, donc $A = 8\sqrt{2}$.
:::

**Exercice 5.** Calcule $B = \sqrt{3} \times \sqrt{12}$.

::: details Indice
$\sqrt{a} \times \sqrt{b} = \sqrt{a \times b}$.
:::

::: details Corrigé
$B = \sqrt{36} = 6$.
:::

**Exercice 6.** Résous $x^2 = 20$.

::: details Indice
Il y a deux solutions. Simplifie $\sqrt{20}$.
:::

::: details Corrigé
$x = \sqrt{20} = 2\sqrt{5}$ ou $x = -2\sqrt{5}$.
:::

#### Niveau 3 : approfondissement

**Exercice 7 (BTS).** Un multimètre mesure une tension sinusoïdale efficace de 12 V
aux bornes d'un transformateur. Quelle est la tension maximale ? Donne la valeur exacte puis arrondie au dixième.

::: details Indice
$U_{\max} = U_{\text{eff}} \times \sqrt{2}$.
:::

::: details Corrigé
$U_{\max} = 12\sqrt{2} \approx 17{,}0$ V.
:::

**Exercice 8.** Écris $\dfrac{10}{\sqrt{5}}$ sans racine au dénominateur, puis simplifie.

::: details Indice
Multiplie en haut et en bas par $\sqrt{5}$.
:::

::: details Corrigé
$\dfrac{10\sqrt{5}}{5} = 2\sqrt{5}$.
:::

<FinPartie lecon="maths/bloc-0/calcul/racines-carrees" :numero="3" :total="3" />
