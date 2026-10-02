---
title: Puissances et écriture scientifique
lecon:
  statut: brouillon
  niveau: Bases
  duree: 30
  bts: true
  prerequis:
    - texte: Priorités de calcul et nombres relatifs
      lien: /maths/bloc-0/calcul/priorites-relatifs
    - texte: Calculer avec les fractions
      lien: /maths/bloc-0/fractions/calculer-avec-les-fractions
---

# Puissances et écriture scientifique

Une puissance, c'est une **multiplication répétée**. C'est l'outil qui permet d'écrire
des nombres immenses ou minuscules sans aligner des dizaines de zéros, et c'est
partout en électricité : kilowatts, milliampères, mégohms…

## Partie 1 : comprendre avec des bactéries

### L'image : la bactérie qui se coupe en deux

Une bactérie comme *E. coli*, dans de très bonnes conditions (chaleur, nourriture),
se divise en deux environ toutes les 20 minutes. Partons d'une seule bactérie :

| Temps | Nombre de bactéries | Écriture |
|---|---|---|
| Départ | 1 | $2^0$ |
| 20 min | 2 | $2^1$ |
| 40 min | 4 | $2 \times 2 = 2^2$ |
| 1 h | 8 | $2 \times 2 \times 2 = 2^3$ |
| 2 h | 64 | $2^6$ |
| 10 h | plus d'un milliard | $2^{30} = 1\,073\,741\,824$ |

Chaque division **multiplie par 2**. Après $n$ divisions, il y a $2^n$ bactéries.
L'exposant compte **le nombre de fois où on a multiplié**.

::: memo
**L'exposant, c'est le compteur de multiplications.**
$2^5$ : « j'ai doublé 5 fois ».
:::

### Des bactéries aux maths

| Chez les bactéries | En maths |
|---|---|
| Ce qui se répète à chaque division (× 2) | La **base** : 2 |
| Le nombre de divisions | L'**exposant** : $n$ |
| Le nombre de bactéries après $n$ divisions | La **puissance** $2^n$ |
| Laisser passer 3 divisions, puis encore 2 | $2^3 \times 2^2 = 2^5$ : on **ajoute** les exposants |
| La bactérie de départ, avant toute division | $2^0 = 1$ |
| Remonter le temps d'une division (la population est divisée par 2) | $2^{-1} = \dfrac{1}{2}$ |

### Là où l'image s'arrête

Dans la réalité, les bactéries finissent par manquer de nourriture et la croissance
s'arrête : le modèle « × 2 toutes les 20 minutes » ne marche qu'au début. Les puissances,
elles, marchent toujours : ce sont des règles de calcul.

::: source
Temps de division d'*E. coli* d'environ 20 minutes en conditions optimales de laboratoire :
donnée de microbiologie classique (manuels de SVT et de biologie). Il est plus long dans la
nature.
Règles sur les puissances : [Yvan Monka, Maths et tiques, cours « Fractions, puissances, racines carrées » de Seconde (PDF)](https://www.maths-et-tiques.fr/telech/19RacPuissM.pdf).
:::

<FinPartie lecon="maths/bloc-0/calcul/puissances" :numero="1" :total="3" />

## Partie 2 : le cours

### Définitions

::: definition Puissance d'un nombre
Pour un nombre $a$ et un entier $n \geq 1$ :

$$
a^n = \underbrace{a \times a \times \cdots \times a}_{n \text{ facteurs}}
$$

Par convention, $a^0 = 1$ (pour $a \neq 0$). Pour $a \neq 0$, $a^{-n} = \dfrac{1}{a^n}$.
:::

Exemples : $3^4 = 3 \times 3 \times 3 \times 3 = 81$ ; $5^{-2} = \dfrac{1}{5^2} = \dfrac{1}{25}$ ; $(-2)^3 = -8$.

### Les règles de calcul

::: propriete Les quatre règles
Pour $a$ et $b$ non nuls et des entiers $m$ et $n$ :

$$
a^m \times a^n = a^{m+n} \qquad \frac{a^m}{a^n} = a^{m-n} \qquad (a^m)^n = a^{m \times n} \qquad (a \times b)^n = a^n \times b^n
$$
:::

::: demonstration Pourquoi on ajoute les exposants
$a^3 \times a^2 = (a \times a \times a) \times (a \times a)$ : il y a $3 + 2 = 5$ facteurs $a$,
donc c'est $a^5$.

Pour la division : $\dfrac{a^5}{a^2} = \dfrac{a \times a \times a \times a \times a}{a \times a}$.
On simplifie 2 facteurs en haut et en bas, il en reste $5 - 2 = 3$ : c'est $a^3$.

C'est aussi ce qui explique les conventions : $\dfrac{a^2}{a^2} = 1$ et la règle donne $a^{2-2} = a^0$,
donc $a^0 = 1$. Et $\dfrac{a^2}{a^5} = \dfrac{1}{a^3}$ alors que la règle donne $a^{-3}$.
:::

::: essai
Écris sous la forme d'une seule puissance : $A = \dfrac{10^7 \times 10^{-2}}{10^3}$.
:::

::: details Voir le corrigé
$$
\begin{aligned}
A &= \frac{10^{7 + (-2)}}{10^3} = \frac{10^5}{10^3} && \text{(on ajoute en haut)} \\
&= 10^{5 - 3} = 10^2 && \text{(on soustrait)}
\end{aligned}
$$

**Résultat : $A = 10^2 = 100$.**
:::

### Les puissances de 10 et l'écriture scientifique

$10^n$ s'écrit avec un 1 suivi de $n$ zéros : $10^3 = 1\,000$. Et $10^{-n}$ a son 1 à la
$n$-ième place après la virgule : $10^{-3} = 0{,}001$.

::: definition Écriture scientifique
Tout nombre positif s'écrit de façon unique sous la forme

$$
a \times 10^n \qquad \text{avec } 1 \leq a < 10 \text{ et } n \text{ entier}
$$

Exemples : $45\,000 = 4{,}5 \times 10^4$ et $0{,}0032 = 3{,}2 \times 10^{-3}$.
:::

::: propriete Les préfixes des unités
| Préfixe | Symbole | Puissance de 10 | Exemple |
|---|---|---|---|
| giga | G | $10^9$ | 1 GHz (processeur) |
| méga | M | $10^6$ | 1 MΩ |
| kilo | k | $10^3$ | 3 kW (plaque de cuisson) |
| milli | m | $10^{-3}$ | 20 mA (LED) |
| micro | µ | $10^{-6}$ | 100 µF (condensateur) |
| nano | n | $10^{-9}$ | 470 nF |
:::

::: essai
Une LED consomme 20 mA. Écris ce courant en ampères, en écriture scientifique.
:::

::: details Voir le corrigé
$20\ \text{mA} = 20 \times 10^{-3}\ \text{A} = 2 \times 10^1 \times 10^{-3}\ \text{A} = 2 \times 10^{-2}\ \text{A}$.

**Résultat : $I = 2 \times 10^{-2}$ A**, soit $0{,}02$ A.
:::

<Video id="XA-JkXirNz4" titre="Les puissances (Seconde)" chaine="Yvan Monka" vedette />

### Fiche méthode

::: methode Comment simplifier un calcul avec des puissances
1. Regroupe les nombres d'un côté et les puissances de 10 de l'autre.
2. Applique les règles : produit → on **ajoute** les exposants, quotient → on **soustrait**.
3. Pour l'écriture scientifique, ajuste le nombre devant pour qu'il soit entre 1 et 10
   (si tu le divises par 10, ajoute 1 à l'exposant).
:::

### Les erreurs fréquentes

::: erreur Multiplier la base par l'exposant
❌ $3^4 = 3 \times 4 = 12$.

✅ $3^4 = 3 \times 3 \times 3 \times 3 = 81$.
:::

::: erreur Additionner des puissances comme on les multiplie
❌ $2^3 + 2^2 = 2^5$.

✅ La règle n'existe que pour le **produit**. $2^3 + 2^2 = 8 + 4 = 12$, alors que $2^5 = 32$.
:::

::: erreur Croire qu'une puissance négative donne un nombre négatif
❌ $10^{-2} = -100$.

✅ $10^{-2} = \dfrac{1}{100} = 0{,}01$ : c'est un **petit** nombre positif.
:::

::: erreur Oublier les parenthèses avec un nombre négatif
❌ $-3^2 = 9$.

✅ $-3^2 = -9$, mais $(-3)^2 = 9$.
:::

::: source
Règles et écriture scientifique : [Yvan Monka, Maths et tiques (PDF)](https://www.maths-et-tiques.fr/telech/19RacPuissM.pdf).
Préfixes du Système international : [Bureau international des poids et mesures, « Les préfixes SI »](https://www.bipm.org/fr/measurement-units/si-prefixes).
:::

<FinPartie lecon="maths/bloc-0/calcul/puissances" :numero="2" :total="3" />

## Partie 3 : s'en servir

### À quoi ça sert ?

::: application Calculer une puissance électrique (BTS)
Un module domotique alimenté en $U = 230$ V consomme un courant $I = 5$ mA.
Sa puissance est $P = U \times I$ :

$$
P = 230 \times 5 \times 10^{-3} = 1\,150 \times 10^{-3} = 1{,}15\ \text{W}
$$

En veille toute l'année ($8\,760$ h), il consomme $1{,}15 \times 8\,760 \approx 10\,074$ Wh,
soit environ $10$ kWh. Les puissances de 10 permettent de passer d'une unité à l'autre sans erreur.
:::

::: application Les bits et les octets
Un octet contient 8 bits, et un bit vaut 0 ou 1. Avec 8 bits, on code $2^8 = 256$ valeurs
différentes : c'est pour ça qu'une adresse IPv4 a des nombres de 0 à 255.
:::

### Les vidéos

::: verifier À VÉRIFIER par Arthur
L'identifiant de la vidéo vient de la page de Seconde de Maths et tiques, mais je n'ai pas
pu vérifier son titre exact en ligne. Clique sur la miniature : si la vidéo ne parle pas
des puissances, dis-le moi et je la change.
:::

### Exercices

#### Niveau 1 : application

**Exercice 1.** Calcule $2^5$, $10^{-3}$ et $(-1)^{7}$.

::: details Indice
$2^5$ : double 5 fois en partant de 1. Pour $(-1)^7$ : 7 signes moins, pair ou impair ?
:::

::: details Corrigé
$2^5 = 32$ ; $10^{-3} = 0{,}001$ ; $(-1)^7 = -1$.
:::

**Exercice 2.** Écris en écriture scientifique : $520\,000$ et $0{,}00071$.

::: details Indice
Place la virgule pour avoir un nombre entre 1 et 10, puis compte de combien de rangs tu l'as déplacée.
:::

::: details Corrigé
$520\,000 = 5{,}2 \times 10^5$ et $0{,}00071 = 7{,}1 \times 10^{-4}$.
:::

**Exercice 3.** Écris sous la forme $a^n$ : $5^3 \times 5^4$ et $\dfrac{7^9}{7^2}$.

::: details Indice
Produit : on ajoute. Quotient : on soustrait.
:::

::: details Corrigé
$5^7$ et $7^7$.
:::

#### Niveau 2 : entraînement

**Exercice 4.** Calcule $B = \dfrac{3 \times 10^5 \times 4 \times 10^{-2}}{6 \times 10^2}$ et donne le résultat en écriture scientifique.

::: details Indice
Nombres d'un côté : $\dfrac{3 \times 4}{6}$. Puissances de 10 de l'autre : $\dfrac{10^5 \times 10^{-2}}{10^2}$.
:::

::: details Corrigé
$\dfrac{12}{6} = 2$ et $10^{5 - 2 - 2} = 10^1$. **$B = 2 \times 10^1 = 20$.**
:::

**Exercice 5.** Simplifie $(2^3)^2$ et $(3 \times 10^2)^2$.

::: details Indice
$(a^m)^n = a^{m \times n}$ et $(a \times b)^n = a^n \times b^n$.
:::

::: details Corrigé
$(2^3)^2 = 2^6 = 64$ et $(3 \times 10^2)^2 = 9 \times 10^4 = 90\,000$.
:::

**Exercice 6.** Convertis $4{,}7$ kΩ en ohms et $2\,200$ µF en farads, en écriture scientifique.

::: details Indice
k = $10^3$ et µ = $10^{-6}$.
:::

::: details Corrigé
$4{,}7\ \text{k}\Omega = 4{,}7 \times 10^3\ \Omega$ et $2\,200\ \mu\text{F} = 2{,}2 \times 10^3 \times 10^{-6} = 2{,}2 \times 10^{-3}$ F.
:::

#### Niveau 3 : approfondissement

**Exercice 7 (BTS).** Une résistance de $4{,}7$ kΩ est traversée par un courant de $2$ mA.
Calcule la tension à ses bornes ($U = R \times I$).

::: details Indice
Mets tout en unités de base : $R = 4{,}7 \times 10^3$ Ω et $I = 2 \times 10^{-3}$ A.
:::

::: details Corrigé
$U = 4{,}7 \times 10^3 \times 2 \times 10^{-3} = 9{,}4 \times 10^0 = 9{,}4$ V.
:::

**Exercice 8.** Une population de bactéries double toutes les 20 minutes. Au bout de combien
de temps passe-t-on de 1 bactérie à plus de 1 000 ?

::: details Indice
Cherche la plus petite puissance de 2 qui dépasse 1 000.
:::

::: details Corrigé
$2^9 = 512$ et $2^{10} = 1\,024$. Il faut 10 divisions, soit $10 \times 20 = 200$ minutes,
**3 h 20 min**.
:::

<FinPartie lecon="maths/bloc-0/calcul/puissances" :numero="3" :total="3" />
