---
title: Notion de fonction et fonctions affines
lecon:
  statut: brouillon
  niveau: Intermédiaire
  duree: 30
  bts: true
  prerequis:
    - texte: Résoudre une équation du premier degré
      lien: /maths/bloc-0/equations/equation-premier-degre
    - texte: Proportionnalité et pourcentages
      lien: /maths/bloc-0/proportionnalite/proportionnalite-pourcentages
---

# Notion de fonction et fonctions affines

Une fonction, c'est une **machine** : on lui donne un nombre, elle en rend un autre.
Les fonctions affines sont les plus simples, et leur courbe est une **droite**. Elles font
le pont vers le Bloc 1 : tout le reste du programme parle de fonctions.

## Partie 1 : comprendre avec un taxi

### L'image : le compteur du taxi

Tu montes dans un taxi. Avant même de partir, le compteur affiche **4 €** : c'est la
**prise en charge**. Ensuite, chaque kilomètre ajoute **2 €**.

| Distance | Prix |
|---|---|
| 0 km | 4 € |
| 1 km | 6 € |
| 2 km | 8 € |
| 10 km | 24 € |

Pour $x$ km, le prix est $2x + 4$. Le compteur est une machine : tu lui donnes une distance,
il te rend un prix. Si on trace les points (distance, prix), ils sont **alignés** : on avance
d'1 km, le prix monte de 2 €, toujours pareil.

::: memo
**b, c'est la prise en charge (le départ). a, c'est le prix de chaque pas.**
$f(x) = ax + b$ : on part de $b$, et chaque pas de 1 ajoute $a$.
:::

### Du taxi aux maths

| Dans le taxi | En maths |
|---|---|
| Le compteur | La **fonction** $f$ |
| La distance parcourue | La variable $x$ (l'**antécédent**) |
| Le prix affiché | $f(x)$, l'**image** de $x$ |
| La prise en charge, avant de rouler | L'**ordonnée à l'origine** $b = f(0)$ |
| Le prix de chaque kilomètre | Le **coefficient directeur** (la pente) $a$ |
| Les points alignés | La courbe est une **droite** |
| « Pour 24 €, combien de km ? » | Résoudre $f(x) = 24$ : trouver un **antécédent** |

### À toi de jouer

Bouge les curseurs. Que se passe-t-il quand $a$ devient négatif ? Et quand $a = 0$ ?

<DroiteAffine />

### Là où l'image s'arrête

Un taxi ne roule pas sur des distances négatives, et un prix ne descend pas. En maths, $x$
peut être n'importe quel nombre, et $a$ peut être négatif : la droite **descend**. Exemple
naturel : une bougie de 20 cm qui fond de 2 cm par heure a une hauteur $h(t) = -2t + 20$.

::: source
Notion de fonction et fonctions affines : [Yvan Monka, Maths et tiques, cours « Notion de fonction » (PDF)](https://www.maths-et-tiques.fr/telech/19FonctionNotionM.pdf) et
[« Fonctions de référence » (PDF)](https://www.maths-et-tiques.fr/telech/19FonctionsReferenceM.pdf) de Seconde.
:::

<FinPartie lecon="maths/bloc-0/fonctions/fonctions-affines" :numero="1" :total="3" />

## Partie 2 : le cours

### Fonction, image, antécédent

::: definition Fonction
Une **fonction** $f$ associe à chaque nombre $x$ d'un ensemble (son **ensemble de définition**)
**un seul** nombre, noté $f(x)$.

- $f(x)$ est l'**image** de $x$.
- Si $f(x) = y$, on dit que $x$ est **un antécédent** de $y$. Un nombre peut avoir plusieurs antécédents, ou aucun.
- La **courbe représentative** de $f$ est l'ensemble des points de coordonnées $(x \,;\, f(x))$.
:::

::: essai
Pour $f(x) = 3x - 5$, calcule l'image de 4, puis cherche l'antécédent de 10.
:::

::: details Voir le corrigé
**Image de 4** : $f(4) = 3 \times 4 - 5 = 7$.

**Antécédent de 10** : on résout $f(x) = 10$.

$$
\begin{aligned}
3x - 5 &= 10 \\
3x &= 15 && (+5) \\
x &= 5 && (\div 3)
\end{aligned}
$$

**Résultat : $f(4) = 7$, et l'antécédent de 10 est $x = 5$.**
:::

### Les fonctions affines

::: definition Fonction affine
Une fonction **affine** s'écrit $f(x) = ax + b$, avec $a$ et $b$ deux nombres fixés.

- Si $b = 0$, $f(x) = ax$ est une fonction **linéaire** : c'est la proportionnalité.
- Si $a = 0$, $f(x) = b$ est une fonction **constante**.
:::

::: propriete Courbe d'une fonction affine
La courbe de $f(x) = ax + b$ est une **droite**.

- $b$ est l'**ordonnée à l'origine** : la droite coupe l'axe vertical au point $(0 \,;\, b)$.
- $a$ est le **coefficient directeur** : quand $x$ augmente de 1, $f(x)$ augmente de $a$.
- Si $a > 0$ la droite **monte** (fonction croissante), si $a < 0$ elle **descend** (décroissante), si $a = 0$ elle est horizontale.
:::

::: propriete Calculer a à partir de deux points
Si la droite passe par $A(x_A \,;\, y_A)$ et $B(x_B \,;\, y_B)$ avec $x_A \neq x_B$ :

$$
a = \frac{y_B - y_A}{x_B - x_A}
$$
:::

::: demonstration Pourquoi cette formule
$y_A = a x_A + b$ et $y_B = a x_B + b$. En soustrayant : $y_B - y_A = a x_B - a x_A = a(x_B - x_A)$.
On divise par $x_B - x_A$, qui n'est pas nul : $a = \dfrac{y_B - y_A}{x_B - x_A}$.
C'est « de combien on monte » divisé par « de combien on avance ».
:::

::: essai
Trouve la fonction affine $f$ telle que $f(1) = 5$ et $f(3) = 11$.
:::

::: details Voir le corrigé
**Pente** : $a = \dfrac{11 - 5}{3 - 1} = \dfrac{6}{2} = 3$.

**Ordonnée à l'origine** : $f(1) = 3 \times 1 + b = 5$, donc $b = 2$.

**Résultat : $f(x) = 3x + 2$.** Contrôle : $f(3) = 9 + 2 = 11$ ✓.
:::

<Video id="E4SY8_L-DTA" titre="Notion de fonction (Seconde)" chaine="Yvan Monka" vedette />

<Video id="n5_pRx4ozIg" titre="Fonctions affines (Seconde)" chaine="Yvan Monka" />

### Fiche méthode

::: methode Comment tracer la droite de f(x) = ax + b
1. Place le point $(0 \,;\, b)$ sur l'axe vertical.
2. À partir de ce point, avance de 1 vers la droite et monte de $a$ (ou descends si $a < 0$).
3. Pour plus de précision, calcule un point plus loin, par exemple $f(4)$.
4. Trace la droite à la règle par ces points.
:::

::: methode Comment lire a et b sur un graphique
1. $b$ : la hauteur où la droite coupe l'axe vertical.
2. $a$ : prends deux points de la droite bien placés sur le quadrillage, et calcule
   $\dfrac{\text{montée}}{\text{avancée}}$.
:::

### Les erreurs fréquentes

::: erreur Confondre image et antécédent
❌ « L'antécédent de 10 par $f(x) = 3x - 5$, c'est $f(10) = 25$. »

✅ L'image, c'est ce qui **sort** de la machine. Chercher un antécédent, c'est résoudre $f(x) = 10$ : $x = 5$.
:::

::: erreur Inverser a et b
❌ Pour $f(x) = 2x + 4$, la droite coupe l'axe vertical en 2.

✅ Elle le coupe en $b = 4$ (la prise en charge). La pente est 2.
:::

::: erreur Diviser dans le mauvais sens pour la pente
❌ $a = \dfrac{x_B - x_A}{y_B - y_A}$.

✅ C'est la **montée** (les $y$) divisée par l'**avancée** (les $x$) : $a = \dfrac{y_B - y_A}{x_B - x_A}$.
:::

::: source
Méthodes et erreurs : [Yvan Monka, Maths et tiques (PDF)](https://www.maths-et-tiques.fr/telech/19FonctionsReferenceM.pdf).
Tous les calculs ont été contrôlés.
:::

<FinPartie lecon="maths/bloc-0/fonctions/fonctions-affines" :numero="2" :total="3" />

## Partie 3 : s'en servir

### À quoi ça sert ?

::: application Comparer deux offres d'électricité (BTS)
Offre A : abonnement 12 € par mois et 0,22 € le kWh. Offre B : abonnement 18 € et 0,19 € le kWh
(prix inventés pour l'exemple). Pour une consommation de $x$ kWh :
$A(x) = 0{,}22x + 12$ et $B(x) = 0{,}19x + 18$.

Quand coûtent-elles la même chose ?

$$
\begin{aligned}
0{,}22x + 12 &= 0{,}19x + 18 \\
0{,}03x &= 6 \\
x &= 200
\end{aligned}
$$

Au-delà de **200 kWh par mois**, l'offre B devient moins chère. Sur le graphique, c'est le point
où les deux droites se croisent.
:::

::: application La caractéristique d'une résistance
Pour une résistance, $U = R \times I$ : la tension est une fonction **linéaire** du courant.
En TP, on trace $U$ en fonction de $I$ : on obtient une droite qui passe par l'origine, et sa pente est $R$.
:::

### Les vidéos

::: verifier À VÉRIFIER par Arthur
Les identifiants des deux vidéos viennent de la page de Seconde de Maths et tiques, mais je
n'ai pas pu vérifier leurs titres exacts en ligne. Clique sur les miniatures : si une vidéo
ne parle pas du bon sujet, dis-le moi et je la change.
:::

### Exercices

#### Niveau 1 : application

**Exercice 1.** Pour $f(x) = -2x + 7$, calcule $f(0)$, $f(3)$ et $f(-1)$.

::: details Indice
Remplace $x$ par chaque nombre, avec des parenthèses pour les négatifs.
:::

::: details Corrigé
$f(0) = 7$ ; $f(3) = 1$ ; $f(-1) = 9$.
:::

**Exercice 2.** Donne $a$ et $b$ pour $g(x) = 5 - 4x$. La droite monte-t-elle ou descend-elle ?

::: details Indice
Réécris dans l'ordre $ax + b$.
:::

::: details Corrigé
$g(x) = -4x + 5$ : $a = -4$, $b = 5$. Comme $a < 0$, la droite **descend**.
:::

**Exercice 3.** Pour $f(x) = 2x + 1$, cherche l'antécédent de 9.

::: details Indice
Résous $2x + 1 = 9$.
:::

::: details Corrigé
$2x = 8$, donc $x = 4$.
:::

#### Niveau 2 : entraînement

**Exercice 4.** Trouve la fonction affine telle que $f(0) = -3$ et $f(2) = 5$.

::: details Indice
$b = f(0)$. Puis la pente entre les deux points.
:::

::: details Corrigé
$b = -3$, $a = \dfrac{5 - (-3)}{2 - 0} = 4$. Donc $f(x) = 4x - 3$.
:::

**Exercice 5.** La droite passe par $A(-1 \,;\, 6)$ et $B(3 \,;\, -2)$. Trouve son équation.

::: details Indice
$a = \dfrac{-2 - 6}{3 - (-1)}$, puis utilise $A$ pour trouver $b$.
:::

::: details Corrigé
$a = \dfrac{-8}{4} = -2$. Avec $A$ : $-2 \times (-1) + b = 6$, donc $b = 4$. **$y = -2x + 4$.**
Contrôle avec $B$ : $-6 + 4 = -2$ ✓.
:::

**Exercice 6.** Une bougie de 24 cm fond de 1,5 cm par heure. Écris sa hauteur $h(t)$, puis dis quand elle sera entièrement fondue.

::: details Indice
On part de 24, et chaque heure enlève 1,5. Puis résous $h(t) = 0$.
:::

::: details Corrigé
$h(t) = -1{,}5t + 24$. $h(t) = 0$ donne $1{,}5t = 24$, donc $t = 16$ h.
:::

#### Niveau 3 : approfondissement

**Exercice 7 (BTS).** En TP, une résistance donne $U = 3$ V pour $I = 0{,}02$ A et $U = 7{,}5$ V
pour $I = 0{,}05$ A. Calcule la pente de la droite $U = f(I)$. Que représente-t-elle ?

::: details Indice
$a = \dfrac{U_B - U_A}{I_B - I_A}$.
:::

::: details Corrigé
$a = \dfrac{7{,}5 - 3}{0{,}05 - 0{,}02} = \dfrac{4{,}5}{0{,}03} = 150$. C'est la résistance : **$R = 150\ \Omega$**.
Contrôle : $150 \times 0{,}02 = 3$ ✓.
:::

**Exercice 8.** Deux taxis : le premier prend 4 € puis 2 € par km, le second 7 € puis 1,50 € par km.
À partir de quelle distance le second est-il moins cher ?

::: details Indice
Résous $1{,}5x + 7 < 2x + 4$.
:::

::: details Corrigé
$7 - 4 < 2x - 1{,}5x$, donc $3 < 0{,}5x$, donc $x > 6$. **Au-delà de 6 km**, le second taxi est moins cher.
:::

<FinPartie lecon="maths/bloc-0/fonctions/fonctions-affines" :numero="3" :total="3" />
