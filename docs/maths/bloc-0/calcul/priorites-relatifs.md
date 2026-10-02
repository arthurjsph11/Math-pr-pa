---
title: Priorités de calcul et nombres relatifs
lecon:
  statut: brouillon
  niveau: Bases
  duree: 30
  bts: true
  prerequis:
    - texte: Les quatre opérations sur les nombres positifs
---

# Priorités de calcul et nombres relatifs

Tout le reste du site repose sur deux choses : savoir dans quel **ordre** faire un
calcul, et savoir calculer avec des nombres **négatifs**. Ce sont les fondations :
si elles sont solides, la suite devient beaucoup plus simple.

## Partie 1 : comprendre avec la mer et la montagne

### L'image : l'altitude, du fond de la mer au sommet

Imagine une grande règle verticale plantée au bord de la mer. Le **niveau de la mer**,
c'est le zéro. Un oiseau qui vole à 30 m est à l'altitude $+30$. Un plongeur à 12 m
sous l'eau est à l'altitude $-12$.

- **Ajouter**, c'est **monter**. **Soustraire**, c'est **descendre**.
- Le plongeur à $-12$ remonte de 5 m : il arrive à $-12 + 5 = -7$.
- L'oiseau à $+30$ plonge de 40 m pour attraper un poisson : $30 - 40 = -10$.

Et « enlever une descente » ? Si on **annule** une descente de 8 m, on se retrouve
8 m plus haut. C'est pour ça que **soustraire un négatif revient à ajouter** :
$5 - (-8) = 5 + 8 = 13$.

::: memo
**Les signes de la multiplication, c'est comme les amis :**
l'ami de mon ami est mon ami ($+ \times + = +$),
l'ennemi de mon ennemi est mon ami ($- \times - = +$),
l'ami de mon ennemi est mon ennemi ($+ \times - = -$).
:::

### De l'altitude aux maths

| Sur la règle d'altitude | En maths |
|---|---|
| Le niveau de la mer | Le nombre $0$ |
| Au-dessus de la mer | Un nombre **positif** ($+30$) |
| Sous la mer | Un nombre **négatif** ($-12$) |
| La distance au niveau de la mer, sans dire si on est dessus ou dessous | La **distance à zéro** : 12 pour $-12$ |
| Monter de 5 m | Ajouter 5 |
| Descendre de 40 m | Soustraire 40 |
| Annuler une descente de 8 m | Soustraire $-8$, c'est ajouter 8 |
| Deux points à la même distance de la mer, un dessus, un dessous | Deux nombres **opposés** : $7$ et $-7$ |

### Là où l'image s'arrête

L'altitude explique très bien l'addition et la soustraction. Pour la multiplication
de deux négatifs, l'image ne suffit plus : on la justifie par le calcul dans la
partie 2 (c'est la seule règle qui garde la distributivité vraie).

::: source
Règles de calcul sur les nombres relatifs : [Yvan Monka, Maths et tiques](https://www.maths-et-tiques.fr/index.php/cours-maths) (cours de 5e et 4e) ;
programme du cycle 4, [BO n°31 du 30 juillet 2020](https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm).
:::

<FinPartie lecon="maths/bloc-0/calcul/priorites-relatifs" :numero="1" :total="3" />

## Partie 2 : le cours

### Les nombres relatifs

::: definition Nombre relatif, opposé, distance à zéro
Un **nombre relatif** est un nombre avec un signe : positif ($+5$, qu'on écrit
souvent $5$) ou négatif ($-5$). Zéro est à la fois positif et négatif.

Deux nombres sont **opposés** s'ils ont la même distance à zéro et des signes
contraires : $7$ et $-7$. La somme de deux opposés vaut $0$.
:::

::: propriete Additionner deux relatifs
- **Même signe** : on ajoute les distances à zéro et on garde le signe.
  $(-4) + (-6) = -10$.
- **Signes contraires** : on soustrait la plus petite distance à zéro de la plus
  grande, et on prend le signe de celui qui a la plus grande distance.
  $(-9) + 4 = -5$.
:::

::: propriete Soustraire un relatif
Soustraire un nombre, c'est **ajouter son opposé** :
$a - b = a + (-b)$.

Exemples : $3 - 8 = 3 + (-8) = -5$ et $5 - (-8) = 5 + 8 = 13$.
:::

::: propriete Multiplier ou diviser deux relatifs
On multiplie (ou on divise) les distances à zéro, puis on applique la règle des signes :

| | $+$ | $-$ |
|---|---|---|
| $+$ | $+$ | $-$ |
| $-$ | $-$ | $+$ |

Exemples : $(-3) \times (-4) = 12$ ; $(-20) \div 5 = -4$ ; $6 \times (-2) = -12$.

Pour un produit de plusieurs facteurs : **un nombre pair de signes moins donne un
résultat positif, un nombre impair donne un résultat négatif**.
:::

::: demonstration Pourquoi moins par moins donne plus
On sait que $(-3) \times 4 = -12$ (c'est $-3$ ajouté 4 fois).
Calculons $(-3) \times (4 + (-4))$ de deux façons.

- D'un côté, $4 + (-4) = 0$, donc le produit vaut $(-3) \times 0 = 0$.
- De l'autre, avec la distributivité : $(-3) \times 4 + (-3) \times (-4) = -12 + (-3) \times (-4)$.

Les deux résultats sont égaux, donc $-12 + (-3) \times (-4) = 0$.
Le nombre $(-3) \times (-4)$ est donc l'opposé de $-12$ : il vaut $+12$.
:::

### Les priorités de calcul

::: propriete L'ordre des opérations
Dans un calcul, on effectue dans cet ordre :

1. ce qui est **entre parenthèses** (en commençant par les plus intérieures) ;
2. les **puissances** ;
3. les **multiplications et divisions**, de gauche à droite ;
4. les **additions et soustractions**, de gauche à droite.
:::

Une barre de fraction joue le rôle de parenthèses : dans $\dfrac{4 + 6}{2}$, on calcule
d'abord $4 + 6$.

::: essai
Calcule $A = 7 - 3 \times (2 - 5)$.
:::

::: details Voir le corrigé
$$
\begin{aligned}
A &= 7 - 3 \times (2 - 5) \\
&= 7 - 3 \times (-3) && \text{(parenthèses)} \\
&= 7 - (-9) && \text{(multiplication)} \\
&= 7 + 9 \\
&= 16
\end{aligned}
$$

**Résultat : $A = 16$.**
:::

::: essai
Calcule $B = -2^2 + (-2)^2$.
:::

::: details Voir le corrigé
Attention, piège classique :

- $-2^2$ veut dire $-(2^2)$ : la puissance passe avant le signe moins. Donc $-2^2 = -4$.
- $(-2)^2 = (-2) \times (-2) = 4$.

**Résultat : $B = -4 + 4 = 0$.**
:::

### Fiche méthode

::: methode Comment faire un calcul sans se tromper
1. Repère les **parenthèses** et calcule-les en premier.
2. Calcule les **puissances**.
3. Fais les **multiplications et divisions** de gauche à droite.
4. Termine par les **additions et soustractions** de gauche à droite.
5. Écris **une seule opération par ligne** : c'est plus lent, mais on ne perd plus de signe.
:::

### Les erreurs fréquentes

::: erreur Faire les opérations dans l'ordre de lecture
❌ $2 + 3 \times 4 = 5 \times 4 = 20$.

✅ La multiplication passe avant : $2 + 3 \times 4 = 2 + 12 = 14$.
:::

::: erreur Oublier que soustraire un négatif revient à ajouter
❌ $5 - (-3) = 2$.

✅ $5 - (-3) = 5 + 3 = 8$. Sur la règle d'altitude : on annule une descente de 3 m.
:::

::: erreur Confondre −3² et (−3)²
❌ $-3^2 = 9$.

✅ $-3^2 = -(3 \times 3) = -9$, alors que $(-3)^2 = (-3) \times (-3) = 9$.
:::

::: erreur Appliquer la règle des signes à l'addition
❌ $(-4) + (-6) = +10$, « parce que moins et moins donnent plus ».

✅ La règle des signes est pour la **multiplication** et la **division**.
Pour l'addition : on descend de 4, puis encore de 6, donc $-10$.
:::

::: source
Priorités opératoires et règle des signes : [Yvan Monka, Maths et tiques](https://www.maths-et-tiques.fr/index.php/cours-maths) ;
[Khan Academy, « Ordre des opérations »](https://fr.khanacademy.org/math/arithmetic).
Tous les calculs de cette partie ont été refaits à la main.
:::

<FinPartie lecon="maths/bloc-0/calcul/priorites-relatifs" :numero="2" :total="3" />

## Partie 3 : s'en servir

### À quoi ça sert ?

::: application Le chauffage d'une maison connectée (BTS)
Un capteur domotique mesure **−6 °C** dehors à 7 h et **4 °C** à 13 h.
L'écart de température est $4 - (-6) = 4 + 6 = 10$ °C : il a fait 10 degrés de plus.

Le thermostat calcule chaque heure l'écart entre la consigne (19 °C) et la
température d'une pièce. Pour une pièce à 21 °C : $19 - 21 = -2$. Le signe moins
lui dit « trop chaud, je coupe le chauffage ». Pour une pièce à 17 °C : $19 - 17 = 2$,
« trop froid, je chauffe ». Toute la régulation repose sur ce signe.
:::

::: application Le courant et la tension en électricité
En électricité, une tension ou un courant peut être **négatif** : cela veut dire
qu'il va dans le sens opposé au sens choisi sur le schéma. En BTS, tu verras des
tensions alternatives qui passent sans arrêt du positif au négatif.
:::

### Les vidéos

::: verifier À VÉRIFIER par Arthur
Je n'ai pas encore choisi de vidéo pour cette leçon : je dois d'abord vérifier
qu'elle existe et qu'elle correspond bien. Je l'ajouterai à la prochaine relecture.
:::

### Exercices

#### Niveau 1 : application

**Exercice 1.** Calcule $(-7) + 3$, $(-2) + (-9)$ et $4 - 10$.

::: details Indice
Sur la règle d'altitude : pars de $-7$ et monte de 3. Pour $4 - 10$ : pars de 4 et descends de 10.
:::

::: details Corrigé
$(-7) + 3 = -4$ ; $(-2) + (-9) = -11$ ; $4 - 10 = -6$.
:::

**Exercice 2.** Calcule $(-5) \times 6$, $(-8) \times (-3)$ et $(-36) \div (-4)$.

::: details Indice
Multiplie les nombres sans signe, puis applique la règle des signes (les amis).
:::

::: details Corrigé
$(-5) \times 6 = -30$ ; $(-8) \times (-3) = 24$ ; $(-36) \div (-4) = 9$.
:::

**Exercice 3.** Calcule $C = 10 - 2 \times 3$.

::: details Indice
Qu'est-ce qui passe en premier, la soustraction ou la multiplication ?
:::

::: details Corrigé
$C = 10 - 6 = 4$.
:::

#### Niveau 2 : entraînement

**Exercice 4.** Calcule $D = (3 - 8) \times (-2) + 5$.

::: details Indice
Parenthèses d'abord : $3 - 8 = ?$
:::

::: details Corrigé
$D = (-5) \times (-2) + 5 = 10 + 5 = 15$.
:::

**Exercice 5.** Calcule $E = \dfrac{-6 - 4}{2} - 3^2$.

::: details Indice
La barre de fraction joue le rôle de parenthèses. Et $3^2$ se calcule avant la soustraction.
:::

::: details Corrigé
$E = \dfrac{-10}{2} - 9 = -5 - 9 = -14$.
:::

**Exercice 6.** Calcule $F = (-1) \times (-1) \times (-1) \times (-1) \times (-1)$.

::: details Indice
Compte les signes moins : pair ou impair ?
:::

::: details Corrigé
Il y a 5 signes moins (nombre impair), donc $F = -1$.
:::

#### Niveau 3 : approfondissement

**Exercice 7 (BTS).** Un relevé de température dans un local technique donne, sur
5 jours : $-3$ °C, $2$ °C, $-1$ °C, $4$ °C et $-7$ °C. Calcule la température moyenne.

::: details Indice
Moyenne = somme des valeurs divisée par le nombre de valeurs. Additionne d'abord les positifs ensemble, puis les négatifs ensemble.
:::

::: details Corrigé
Positifs : $2 + 4 = 6$. Négatifs : $(-3) + (-1) + (-7) = -11$.
Somme : $6 + (-11) = -5$. Moyenne : $\dfrac{-5}{5} = -1$.

**La température moyenne est de −1 °C.**
:::

**Exercice 8.** Place des parenthèses dans $2 + 4 \times 5 - 1$ pour obtenir 29, puis pour obtenir 24.

::: details Indice
Sans parenthèses, on trouve $2 + 20 - 1 = 21$. Pour changer le résultat, il faut forcer une addition ou une soustraction à passer avant la multiplication.
:::

::: details Corrigé
- $(2 + 4) \times 5 - 1 = 6 \times 5 - 1 = 30 - 1 = 29$.
- $(2 + 4) \times (5 - 1) = 6 \times 4 = 24$.

Les parenthèses changent complètement le résultat : c'est pour ça qu'on ne les oublie jamais.
:::

<FinPartie lecon="maths/bloc-0/calcul/priorites-relatifs" :numero="3" :total="3" />
