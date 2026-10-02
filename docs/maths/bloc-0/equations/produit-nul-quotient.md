---
title: Équations produit nul et équations avec des fractions
lecon:
  statut: brouillon
  niveau: Intermédiaire
  duree: 30
  bts: false
  prerequis:
    - texte: Résoudre une équation du premier degré
      lien: /maths/bloc-0/equations/equation-premier-degre
    - texte: Développer et factoriser
      lien: /maths/bloc-0/calcul-litteral/developper-factoriser
    - texte: Les identités remarquables
      lien: /maths/bloc-0/calcul-litteral/identites-remarquables
---

# Équations produit nul et équations avec des fractions

Avec la balance, on sait résoudre les équations où $x$ apparaît « tout seul ». Mais
comment résoudre $x^2 = 3x$ ou $\dfrac{2x - 6}{x + 1} = 0$ ? Il faut un nouvel outil,
très simple : **un produit est nul quand l'un de ses facteurs est nul**.

## Partie 1 : comprendre avec des interrupteurs

### L'image : deux interrupteurs en série

Dans un couloir, une lampe est branchée derrière **deux interrupteurs en série** :
un à l'entrée, un au fond. Le courant traverse le premier, puis le second, puis la lampe.

- Les deux sont fermés : la lampe s'allume.
- **Un seul** est ouvert, n'importe lequel : le circuit est coupé, la lampe est **éteinte**.
- Les deux sont ouverts : la lampe est éteinte aussi.

Pour que la lampe soit éteinte, il suffit qu'**au moins un** interrupteur soit ouvert.
Et inversement, si la lampe est éteinte (et que le reste du circuit marche), c'est
qu'au moins un interrupteur est ouvert.

::: memo
**Il suffit d'un interrupteur ouvert pour éteindre la lampe.**
Il suffit d'un facteur nul pour que le produit soit nul.
:::

### Des interrupteurs aux maths

| Dans le couloir | En maths |
|---|---|
| Chaque interrupteur | Chaque **facteur** du produit $A \times B$ |
| Un interrupteur ouvert | Un facteur **égal à 0** |
| La lampe éteinte | Le produit $A \times B = 0$ |
| « Au moins un des deux est ouvert » | « $A = 0$ **ou** $B = 0$ » |
| Chercher toutes les façons d'éteindre la lampe | Chercher **toutes** les solutions |

### Là où l'image s'arrête

Un interrupteur est ouvert ou fermé, il n'y a que deux états. Un facteur peut valoir
n'importe quel nombre. Mais la règle tient toujours : un produit de nombres vaut 0
**si et seulement si** au moins un des nombres vaut 0.

::: source
Équation produit nul : [Yvan Monka, Maths et tiques, cours « Équations, inéquations » de Seconde (PDF)](https://www.maths-et-tiques.fr/telech/19Equations_InequationsM.pdf).
Circuit à deux interrupteurs en série : c'est la fonction logique ET, étudiée en domotique.
:::

<FinPartie lecon="maths/bloc-0/equations/produit-nul-quotient" :numero="1" :total="3" />

## Partie 2 : le cours

### L'équation produit nul

::: propriete Produit nul
Un produit de facteurs est nul **si et seulement si** l'un au moins des facteurs est nul :

$$
A \times B = 0 \iff A = 0 \ \text{ou} \ B = 0
$$
:::

::: demonstration Pourquoi c'est vrai
- Si $A = 0$ ou $B = 0$, alors $A \times B = 0$ (tout nombre multiplié par 0 donne 0).
- Inversement, supposons $A \times B = 0$ avec $A \neq 0$. On peut diviser par $A$ :
  $B = \dfrac{0}{A} = 0$. Donc si $A$ n'est pas nul, c'est forcément $B$ qui l'est.
:::

::: essai
Résous $(x - 3)(2x + 5) = 0$.
:::

::: details Voir le corrigé
C'est un produit nul, donc un des facteurs est nul :

$$
\begin{aligned}
x - 3 &= 0 & &\text{ou} & 2x + 5 &= 0 \\
x &= 3 & &\text{ou} & 2x &= -5 \\
& & & & x &= -\frac{5}{2}
\end{aligned}
$$

**Résultat : $x = 3$ ou $x = -\dfrac{5}{2}$.** On écrit aussi $S = \left\{-\dfrac{5}{2} \,;\, 3\right\}$.
:::

::: details Vérifier mon résultat
$x = 3$ : $(3 - 3)(6 + 5) = 0 \times 11 = 0$ ✓.
$x = -\dfrac{5}{2}$ : $2x + 5 = -5 + 5 = 0$, donc le produit vaut 0 ✓.
:::

### Se ramener à un produit nul

Souvent, l'équation n'est pas encore un produit. On **met tout du même côté**, puis on **factorise**.

::: essai
Résous $x^2 = 3x$.
:::

::: details Voir le corrigé
On met tout à gauche, puis on factorise par $x$ :

$$
\begin{aligned}
x^2 - 3x &= 0 \\
x(x - 3) &= 0 \\
x = 0 \quad &\text{ou} \quad x - 3 = 0
\end{aligned}
$$

**Résultat : $x = 0$ ou $x = 3$.**
Piège : si on avait divisé par $x$ au départ, on aurait perdu la solution $x = 0$.
:::

::: essai
Résous $x^2 - 16 = 0$.
:::

::: details Voir le corrigé
On reconnaît $a^2 - b^2 = (a + b)(a - b)$ :

$$
\begin{aligned}
(x + 4)(x - 4) &= 0 \\
x = -4 \quad &\text{ou} \quad x = 4
\end{aligned}
$$

**Résultat : $x = -4$ ou $x = 4$.**
:::

### Les équations quotient

::: propriete Quotient nul
Une fraction est nulle **si et seulement si** son numérateur est nul et son dénominateur
ne l'est pas :

$$
\frac{A}{B} = 0 \iff A = 0 \ \text{et} \ B \neq 0
$$
:::

Avant tout, on cherche la **valeur interdite** : celle qui annule le dénominateur.

::: essai
Résous $\dfrac{2x - 6}{x + 1} = 0$.
:::

::: details Voir le corrigé
**Valeur interdite** : $x + 1 = 0$ donne $x = -1$. On ne peut pas prendre $x = -1$.

**Numérateur nul** : $2x - 6 = 0$, donc $2x = 6$, donc $x = 3$.

3 n'est pas la valeur interdite : **résultat, $x = 3$.**
:::

<Video id="WoTpA2RyuVU" titre="LE COURS : Les équations - Troisième - Seconde" chaine="Yvan Monka" vedette />

### Fiche méthode

::: methode Comment résoudre une équation qui n'est pas du premier degré
1. **Valeur interdite** : s'il y a un $x$ au dénominateur, cherche quand il s'annule et écarte cette valeur.
2. **Tout d'un côté** : ramène l'équation à « … $= 0$ ».
3. **Factorise** : facteur commun ou identité remarquable.
4. **Produit nul** : écris « facteur 1 $= 0$ ou facteur 2 $= 0$ » et résous chaque morceau jusqu'à « $x =$ valeur ».
5. **Conclus** avec toutes les solutions, sans la valeur interdite.
:::

### Les erreurs fréquentes

::: erreur Diviser par x
❌ $x^2 = 5x$, je divise par $x$ : $x = 5$.

✅ On perd la solution $x = 0$. On factorise : $x(x - 5) = 0$, donc $x = 0$ ou $x = 5$.
:::

::: erreur Utiliser la règle avec autre chose que 0
❌ $(x - 1)(x + 2) = 6$ donc $x - 1 = 6$ ou $x + 2 = 6$.

✅ La règle ne marche **que** pour un produit égal à **0** ($2 \times 3 = 6$ alors qu'aucun facteur ne vaut 6).
On développe : $x^2 + x - 2 = 6$, donc $x^2 + x - 8 = 0$, qui se résout avec le second degré (Première).
:::

::: erreur Oublier la valeur interdite
❌ $\dfrac{x^2 - 1}{x - 1} = 0$ donc $x = 1$ ou $x = -1$.

✅ $x = 1$ annule le dénominateur : c'est interdit. La seule solution est $x = -1$.
:::

::: source
Méthodes et erreurs : [Yvan Monka, Maths et tiques (PDF)](https://www.maths-et-tiques.fr/telech/19Equations_InequationsM.pdf).
Toutes les solutions de cette page ont été vérifiées en les remplaçant dans l'équation.
:::

<FinPartie lecon="maths/bloc-0/equations/produit-nul-quotient" :numero="2" :total="3" />

## Partie 3 : s'en servir

### À quoi ça sert ?

::: application Quand un objet lancé retombe-t-il ?
Une balle lancée vers le haut à 10 m/s a une hauteur $h(t) = 10t - 5t^2$ (en mètres, $t$ en secondes,
en prenant la pesanteur environ égale à 10 m/s²). Quand est-elle au sol ?

$$
10t - 5t^2 = 0 \iff 5t(2 - t) = 0 \iff t = 0 \ \text{ou} \ t = 2
$$

Elle part du sol à $t = 0$ et retombe à **$t = 2$ s**.
:::

::: application La logique des automatismes (domotique)
L'image des interrupteurs n'est pas qu'une image : en domotique, une condition « ET »
(par exemple : allumer la lumière si quelqu'un est là **et** s'il fait nuit) se comporte
exactement comme un produit de 0 et de 1. Il suffit d'un 0 pour que le résultat soit 0.
:::

::: source
Mouvement de chute libre ($h = v_0 t - \frac{1}{2} g t^2$, avec $g \approx 9{,}8$ m/s², arrondi à 10 ici) : programme de physique de Première.
:::

### Les vidéos

::: verifier À VÉRIFIER par Arthur
J'ai mis la vidéo de cours sur les équations (vérifiée). Je n'ai pas encore de vidéo
spécifique aux équations produit nul : je t'en proposerai une à la relecture.
:::

### Exercices

#### Niveau 1 : application

**Exercice 1.** Résous $(x + 7)(x - 2) = 0$.

::: details Indice
Un des deux facteurs vaut 0.
:::

::: details Corrigé
$x = -7$ ou $x = 2$.
:::

**Exercice 2.** Résous $3x(x + 5) = 0$.

::: details Indice
Il y a deux facteurs : $3x$ et $(x + 5)$.
:::

::: details Corrigé
$3x = 0$ donne $x = 0$ ; $x + 5 = 0$ donne $x = -5$. Donc $x = 0$ ou $x = -5$.
:::

**Exercice 3.** Résous $\dfrac{x - 4}{x + 2} = 0$.

::: details Indice
Valeur interdite d'abord, puis numérateur nul.
:::

::: details Corrigé
Valeur interdite : $x = -2$. Numérateur nul : $x = 4$. Donc $x = 4$.
:::

#### Niveau 2 : entraînement

**Exercice 4.** Résous $x^2 = 7x$.

::: details Indice
Ne divise pas par $x$ ! Mets tout à gauche et factorise.
:::

::: details Corrigé
$x(x - 7) = 0$, donc $x = 0$ ou $x = 7$.
:::

**Exercice 5.** Résous $4x^2 - 9 = 0$.

::: details Indice
$4x^2 - 9 = (2x)^2 - 3^2$.
:::

::: details Corrigé
$(2x + 3)(2x - 3) = 0$, donc $x = -\dfrac{3}{2}$ ou $x = \dfrac{3}{2}$.
:::

**Exercice 6.** Résous $(x + 1)(x - 3) + (x + 1)(2x + 9) = 0$.

::: details Indice
Factorise par $(x + 1)$.
:::

::: details Corrigé
$(x + 1)(3x + 6) = 0$, donc $x = -1$ ou $3x = -6$, soit $x = -2$.
:::

#### Niveau 3 : approfondissement

**Exercice 7.** Une balle lancée à 15 m/s a une hauteur $h(t) = 15t - 5t^2$. Au bout de combien de temps retombe-t-elle ?

::: details Indice
Résous $15t - 5t^2 = 0$ en factorisant par $5t$.
:::

::: details Corrigé
$5t(3 - t) = 0$, donc $t = 0$ (départ) ou $t = 3$. **Elle retombe au bout de 3 s.**
:::

**Exercice 8.** Résous $\dfrac{x^2 - 9}{x - 3} = 0$.

::: details Indice
Attention à la valeur interdite.
:::

::: details Corrigé
Valeur interdite : $x = 3$. Numérateur : $(x + 3)(x - 3) = 0$ donne $x = -3$ ou $x = 3$.
On écarte 3, donc **$x = -3$**.
:::

<FinPartie lecon="maths/bloc-0/equations/produit-nul-quotient" :numero="3" :total="3" />
