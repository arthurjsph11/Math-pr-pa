---
title: Calculer avec les fractions
lecon:
  statut: brouillon
  niveau: Bases
  duree: 30
  bts: true
  prerequis:
    - texte: Priorités de calcul et nombres relatifs
      lien: /maths/bloc-0/calcul/priorites-relatifs
    - texte: Les tables de multiplication
---

# Calculer avec les fractions

Une fraction, c'est un **partage**. Si tu comprends ce qu'on partage et en combien de
parts, toutes les règles de calcul deviennent logiques. On va les retrouver avec une
pizza.

## Partie 1 : comprendre avec une pizza

### L'image : la pizza découpée

Une pizza est coupée en **8 parts égales**. Tu en manges **3**. Tu as mangé
$\dfrac{3}{8}$ de la pizza :

- le nombre du bas (**8**) dit **en combien de parts égales** on a coupé ;
- le nombre du haut (**3**) dit **combien de parts on prend**.

Ton ami a une pizza identique, coupée en **4**. Il en mange **2**, soit $\dfrac{2}{4}$.
Qui a mangé le plus ? Impossible de comparer 3 parts et 2 parts : **elles n'ont pas la
même taille**. Mais si on recoupe chaque part de ton ami en deux, sa pizza a 8 parts et
il en a mangé 4. Donc $\dfrac{2}{4} = \dfrac{4}{8}$, et il a mangé plus que toi.

::: memo
**On n'additionne que des parts de la même taille.**
Avant d'ajouter des fractions, on recoupe les pizzas pour avoir le même nombre de parts.
:::

### De la pizza aux maths

| Sur la pizza | En maths |
|---|---|
| Le nombre de parts égales de la pizza | Le **dénominateur** (en bas) |
| Le nombre de parts qu'on prend | Le **numérateur** (en haut) |
| La pizza entière | Le nombre $1$, par exemple $\dfrac{8}{8} = 1$ |
| Recouper chaque part en 2 | Multiplier le haut **et** le bas par 2 : $\dfrac{2}{4} = \dfrac{4}{8}$ |
| Regrouper les parts 2 par 2 | Diviser le haut et le bas par 2 : **simplifier** |
| Mettre ensemble des parts de même taille | Additionner les numérateurs : $\dfrac{3}{8} + \dfrac{4}{8} = \dfrac{7}{8}$ |
| Prendre la moitié de ce qu'il reste | Multiplier : $\dfrac{1}{2} \times \dfrac{5}{8} = \dfrac{5}{16}$ |

### Là où l'image s'arrête

Une pizza ne peut pas être coupée en « −3 parts », et on ne mange pas $\dfrac{11}{8}$
d'une seule pizza (il en faudrait deux). En maths, une fraction est un **nombre**,
qui peut être négatif ou plus grand que 1 : $\dfrac{11}{8} = 1{,}375$.

::: source
Définitions et règles de calcul : [Yvan Monka, Maths et tiques, cours « Fractions, puissances, racines carrées » de Seconde (PDF)](https://www.maths-et-tiques.fr/telech/19RacPuissM.pdf).
:::

<FinPartie lecon="maths/bloc-0/fractions/calculer-avec-les-fractions" :numero="1" :total="3" />

## Partie 2 : le cours

### Écrire et simplifier

::: definition Fraction
Pour deux nombres entiers $a$ et $b$ avec $b \neq 0$, la fraction $\dfrac{a}{b}$ est le
nombre qui, multiplié par $b$, donne $a$. C'est le résultat de la division $a \div b$.

$a$ est le **numérateur**, $b$ le **dénominateur**. On ne divise jamais par 0.
:::

::: propriete Fractions égales
On ne change pas la valeur d'une fraction en multipliant (ou en divisant) son
numérateur **et** son dénominateur par un même nombre non nul :

$$
\frac{a}{b} = \frac{a \times k}{b \times k} \qquad (k \neq 0)
$$
:::

**Simplifier**, c'est diviser le haut et le bas par un même nombre. Une fraction est
**irréductible** quand on ne peut plus la simplifier.
Exemple : $\dfrac{18}{24} = \dfrac{18 \div 6}{24 \div 6} = \dfrac{3}{4}$.

::: essai
Simplifie $\dfrac{45}{60}$ jusqu'à obtenir une fraction irréductible.
:::

::: details Voir le corrigé
45 et 60 sont tous les deux dans la table de 15 : $45 = 3 \times 15$ et $60 = 4 \times 15$.

$$
\frac{45}{60} = \frac{3 \times 15}{4 \times 15} = \frac{3}{4}
$$

On peut aussi y aller par étapes : $\dfrac{45}{60} = \dfrac{9}{12}$ (÷ 5), puis $\dfrac{3}{4}$ (÷ 3).
**Résultat : $\dfrac{3}{4}$.**
:::

### Les signes

::: propriete Fraction et signe moins
$$
\frac{-a}{b} = \frac{a}{-b} = -\frac{a}{b} \qquad \text{et} \qquad \frac{-a}{-b} = \frac{a}{b}
$$

C'est la règle des signes de la division : on place en général le signe moins devant la fraction.
:::

### Additionner et soustraire

::: propriete Même dénominateur
$$
\frac{a}{c} + \frac{b}{c} = \frac{a + b}{c} \qquad \frac{a}{c} - \frac{b}{c} = \frac{a - b}{c}
$$

On garde le dénominateur (la taille des parts) et on additionne les numérateurs (le nombre de parts).
:::

Si les dénominateurs sont différents, on **les rend égaux d'abord** (on recoupe les pizzas).

::: essai
Calcule $\dfrac{2}{3} + \dfrac{1}{4}$.
:::

::: details Voir le corrigé
On cherche un dénominateur commun : 12 est dans la table de 3 et dans la table de 4.

$$
\begin{aligned}
\frac{2}{3} + \frac{1}{4} &= \frac{2 \times 4}{3 \times 4} + \frac{1 \times 3}{4 \times 3} \\
&= \frac{8}{12} + \frac{3}{12} \\
&= \frac{11}{12}
\end{aligned}
$$

**Résultat : $\dfrac{11}{12}$** (11 et 12 n'ont aucun diviseur commun : c'est irréductible).
:::

### Multiplier et diviser

::: propriete Produit
$$
\frac{a}{b} \times \frac{c}{d} = \frac{a \times c}{b \times d}
$$

On multiplie les numérateurs entre eux et les dénominateurs entre eux. Pas besoin de dénominateur commun.
:::

::: demonstration Pourquoi on multiplie « en haut et en bas »
Prendre $\dfrac{1}{2}$ de $\dfrac{3}{4}$ de pizza : on recoupe chacune des 3 parts en 2.
La pizza a maintenant $4 \times 2 = 8$ parts, et on en garde $3 \times 1 = 3$.
Donc $\dfrac{1}{2} \times \dfrac{3}{4} = \dfrac{1 \times 3}{2 \times 4} = \dfrac{3}{8}$.

En général : $\dfrac{a}{b} \times \dfrac{c}{d}$ est le nombre qui, multiplié par $b \times d$,
donne $a \times c$, car $\dfrac{a}{b} \times b = a$ et $\dfrac{c}{d} \times d = c$.
:::

::: definition Inverse
L'**inverse** d'un nombre $x \neq 0$ est le nombre $\dfrac{1}{x}$ : leur produit vaut 1.
L'inverse de $\dfrac{a}{b}$ est $\dfrac{b}{a}$ (on retourne la fraction).
:::

::: propriete Quotient
Diviser par une fraction, c'est **multiplier par son inverse** :

$$
\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}
$$
:::

::: essai
Calcule $\dfrac{3}{5} \div \dfrac{9}{10}$ et donne le résultat simplifié.
:::

::: details Voir le corrigé
$$
\begin{aligned}
\frac{3}{5} \div \frac{9}{10} &= \frac{3}{5} \times \frac{10}{9} && \text{(on multiplie par l'inverse)} \\
&= \frac{3 \times 10}{5 \times 9} \\
&= \frac{30}{45} \\
&= \frac{2}{3} && (\div 15)
\end{aligned}
$$

**Résultat : $\dfrac{2}{3}$.**
:::

<Video id="a0Qb812W75c" titre="LE COURS : Les fractions - Quatrième - Troisième" chaine="Yvan Monka" vedette />

### Fiche méthode

::: methode Comment calculer avec des fractions
1. **Addition ou soustraction** : même dénominateur ? On ajoute les numérateurs.
   Sinon, on cherche un dénominateur commun, on transforme chaque fraction, puis on ajoute.
2. **Multiplication** : en haut par en haut, en bas par en bas. On simplifie **avant**
   de multiplier quand c'est possible, les nombres restent petits.
3. **Division** : on multiplie par l'inverse de la deuxième fraction.
4. **On simplifie toujours** le résultat final.
5. On respecte les **priorités** : multiplications et divisions avant additions.
:::

### Les erreurs fréquentes

::: erreur Additionner les numérateurs et les dénominateurs
❌ $\dfrac{1}{2} + \dfrac{1}{3} = \dfrac{2}{5}$.

✅ Les parts n'ont pas la même taille. $\dfrac{1}{2} + \dfrac{1}{3} = \dfrac{3}{6} + \dfrac{2}{6} = \dfrac{5}{6}$.
Contrôle de bon sens : une demi-pizza plus un tiers, c'est plus qu'une demi-pizza, et $\dfrac{2}{5}$ est plus petit que $\dfrac{1}{2}$.
:::

::: erreur Chercher un dénominateur commun pour multiplier
❌ $\dfrac{2}{3} \times \dfrac{1}{4} = \dfrac{8}{12} \times \dfrac{3}{12} = \dfrac{24}{12}$.

✅ Pour multiplier, pas besoin : $\dfrac{2}{3} \times \dfrac{1}{4} = \dfrac{2}{12} = \dfrac{1}{6}$.
:::

::: erreur Simplifier une somme
❌ $\dfrac{3 + 5}{3} = 5$, en « barrant » les 3.

✅ On ne simplifie que des **facteurs** (des multiplications), jamais des termes d'une somme.
$\dfrac{3 + 5}{3} = \dfrac{8}{3}$.
:::

::: erreur Retourner la mauvaise fraction
❌ $\dfrac{3}{5} \div \dfrac{9}{10} = \dfrac{5}{3} \times \dfrac{9}{10}$.

✅ On retourne **celle par laquelle on divise** (la deuxième) : $\dfrac{3}{5} \times \dfrac{10}{9}$.
:::

::: source
Règles et méthodes : [Yvan Monka, Maths et tiques, cours « Fractions, puissances, racines carrées » de Seconde (PDF)](https://www.maths-et-tiques.fr/telech/19RacPuissM.pdf).
Tous les calculs de cette partie ont été refaits à la main.
:::

<FinPartie lecon="maths/bloc-0/fractions/calculer-avec-les-fractions" :numero="2" :total="3" />

## Partie 3 : s'en servir

### À quoi ça sert ?

::: application Deux résistances en parallèle (BTS)
Quand on branche deux résistances $R_1$ et $R_2$ **en parallèle**, la résistance
équivalente $R$ vérifie :

$$
\frac{1}{R} = \frac{1}{R_1} + \frac{1}{R_2}
$$

Avec $R_1 = 30\ \Omega$ et $R_2 = 60\ \Omega$ :

$$
\begin{aligned}
\frac{1}{R} &= \frac{1}{30} + \frac{1}{60} = \frac{2}{60} + \frac{1}{60} = \frac{3}{60} = \frac{1}{20} \\
R &= 20\ \Omega
\end{aligned}
$$

La résistance équivalente (20 Ω) est plus petite que chacune des deux : le courant a deux chemins.
:::

::: application Une recette pour moins de personnes
Une recette pour 6 personnes demande $\dfrac{3}{4}$ de litre de lait. Pour 4 personnes,
on prend $\dfrac{4}{6} = \dfrac{2}{3}$ de la recette : $\dfrac{2}{3} \times \dfrac{3}{4} = \dfrac{6}{12} = \dfrac{1}{2}$ litre.
:::

::: source
Résistances en parallèle : loi d'association des conducteurs ohmiques, enseignée en BTS électrotechnique et domotique.
:::

### Les vidéos

La vidéo du cours est placée plus haut, juste après les règles de calcul.

::: verifier À VÉRIFIER par Arthur
J'ai vérifié que la vidéo « LE COURS : Les fractions - Quatrième - Troisième » d'Yvan Monka existe.
Je ne peux pas la regarder : dis-moi si elle ne correspond pas à la leçon.
:::

### Exercices

::: tip Exercices interactifs
Pour t'entraîner avec la correction automatique, des nombres tirés au hasard et le carnet
d'erreurs : **[exercices sur les fractions](./exercices-fractions)**. Les exercices ci-dessous
restent là pour travailler sur papier.
:::

#### Niveau 1 : application

**Exercice 1.** Simplifie $\dfrac{12}{18}$ et $\dfrac{35}{49}$.

::: details Indice
Cherche un nombre qui divise à la fois le haut et le bas : 6 pour la première, 7 pour la seconde.
:::

::: details Corrigé
$\dfrac{12}{18} = \dfrac{2}{3}$ (÷ 6) et $\dfrac{35}{49} = \dfrac{5}{7}$ (÷ 7).
:::

**Exercice 2.** Calcule $\dfrac{5}{9} + \dfrac{2}{9}$ et $\dfrac{7}{8} - \dfrac{3}{8}$.

::: details Indice
Même dénominateur : on garde le bas et on calcule en haut. Pense à simplifier.
:::

::: details Corrigé
$\dfrac{5}{9} + \dfrac{2}{9} = \dfrac{7}{9}$ et $\dfrac{7}{8} - \dfrac{3}{8} = \dfrac{4}{8} = \dfrac{1}{2}$.
:::

**Exercice 3.** Calcule $\dfrac{2}{5} \times \dfrac{3}{7}$.

::: details Indice
En haut par en haut, en bas par en bas.
:::

::: details Corrigé
$\dfrac{2 \times 3}{5 \times 7} = \dfrac{6}{35}$.
:::

#### Niveau 2 : entraînement

**Exercice 4.** Calcule $\dfrac{5}{6} - \dfrac{3}{4}$.

::: details Indice
12 est dans la table de 6 et dans celle de 4.
:::

::: details Corrigé
$\dfrac{10}{12} - \dfrac{9}{12} = \dfrac{1}{12}$.
:::

**Exercice 5.** Calcule $\dfrac{4}{9} \div \dfrac{2}{3}$.

::: details Indice
On multiplie par l'inverse de $\dfrac{2}{3}$.
:::

::: details Corrigé
$\dfrac{4}{9} \times \dfrac{3}{2} = \dfrac{12}{18} = \dfrac{2}{3}$.
:::

**Exercice 6.** Calcule $A = \dfrac{1}{2} + \dfrac{3}{2} \times \dfrac{1}{3}$.

::: details Indice
Priorités : la multiplication avant l'addition.
:::

::: details Corrigé
$\dfrac{3}{2} \times \dfrac{1}{3} = \dfrac{3}{6} = \dfrac{1}{2}$, donc $A = \dfrac{1}{2} + \dfrac{1}{2} = 1$.
:::

#### Niveau 3 : approfondissement

**Exercice 7 (BTS).** Deux résistances de 40 Ω et 10 Ω sont branchées en parallèle.
Calcule la résistance équivalente $R$.

::: details Indice
$\dfrac{1}{R} = \dfrac{1}{40} + \dfrac{1}{10}$. Le dénominateur commun est 40.
:::

::: details Corrigé
$\dfrac{1}{R} = \dfrac{1}{40} + \dfrac{4}{40} = \dfrac{5}{40} = \dfrac{1}{8}$, donc **$R = 8\ \Omega$**.
:::

**Exercice 8.** Calcule $B = \dfrac{\dfrac{2}{3} - \dfrac{1}{2}}{\dfrac{1}{4}}$.

::: details Indice
Calcule d'abord le haut ($\dfrac{2}{3} - \dfrac{1}{2}$), puis divise par $\dfrac{1}{4}$, c'est-à-dire multiplie par 4.
:::

::: details Corrigé
En haut : $\dfrac{4}{6} - \dfrac{3}{6} = \dfrac{1}{6}$. Puis $\dfrac{1}{6} \div \dfrac{1}{4} = \dfrac{1}{6} \times 4 = \dfrac{4}{6} = \dfrac{2}{3}$.

**Résultat : $B = \dfrac{2}{3}$.**
:::

<FinPartie lecon="maths/bloc-0/fractions/calculer-avec-les-fractions" :numero="3" :total="3" />
