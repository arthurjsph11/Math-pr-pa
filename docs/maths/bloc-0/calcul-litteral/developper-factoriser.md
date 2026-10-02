---
title: Développer et factoriser
lecon:
  statut: brouillon
  niveau: Bases
  duree: 30
  bts: true
  prerequis:
    - texte: Priorités de calcul et nombres relatifs
      lien: /maths/bloc-0/calcul/priorites-relatifs
---

# Développer et factoriser

Développer et factoriser, ce sont deux façons d'écrire **la même chose**, dans un sens
ou dans l'autre. On s'en sert pour simplifier une expression avant de résoudre une
équation, et pour lire une formule de physique.

## Partie 1 : comprendre avec un terrain

### L'image : le terrain rectangulaire coupé en deux

Un terrain rectangulaire a une largeur de **3 m**. Sa longueur est faite de deux
morceaux : une pelouse de **5 m** et une terrasse de **2 m**.

Pour calculer l'aire totale, il y a deux façons :

- **en un bloc** : largeur × longueur totale $= 3 \times (5 + 2) = 3 \times 7 = 21$ m² ;
- **morceau par morceau** : pelouse + terrasse $= 3 \times 5 + 3 \times 2 = 15 + 6 = 21$ m².

Les deux donnent 21 m², forcément : c'est le même terrain. Si la pelouse mesure $x$
mètres (on ne sait pas encore combien), on a : $3 \times (x + 2) = 3x + 6$.

::: memo
**Le facteur distribue le courrier à chaque maison de la rue.**
Dans $3(x + 2)$, le 3 est le facteur : il va chez $x$ **et** chez $2$.
**Développer**, c'est faire la tournée. **Factoriser**, c'est retrouver le facteur commun.
:::

### Du terrain aux maths

| Sur le terrain | En maths |
|---|---|
| La largeur commune aux deux morceaux | Le **facteur commun** $k$ |
| Les deux longueurs | Les **termes** $a$ et $b$ |
| L'aire calculée en un bloc | La forme **factorisée** : $k(a + b)$ |
| L'aire calculée morceau par morceau | La forme **développée** : $ka + kb$ |
| Passer du bloc aux morceaux | **Développer** |
| Retrouver la largeur commune | **Factoriser** |
| Un terrain de $(a + b)$ sur $(c + d)$, coupé en 4 rectangles | La double distributivité : $ac + ad + bc + bd$ |

### Là où l'image s'arrête

Un terrain n'a pas de longueur négative. Mais la règle marche avec **tous** les nombres,
y compris négatifs : $-2(x - 4) = -2x + 8$. C'est là qu'il faut faire attention aux signes.

::: source
Distributivité et calcul littéral : [Yvan Monka, Maths et tiques, cours « Calcul algébrique » de Seconde (PDF)](https://www.maths-et-tiques.fr/telech/19Calc_algebriqueM.pdf).
:::

<FinPartie lecon="maths/bloc-0/calcul-litteral/developper-factoriser" :numero="1" :total="3" />

## Partie 2 : le cours

### Développer

::: definition Développer, factoriser
**Développer** une expression, c'est transformer un **produit** en **somme**.
**Factoriser**, c'est transformer une **somme** en **produit**.
:::

::: propriete Simple distributivité
Pour tous nombres $k$, $a$ et $b$ :

$$
k(a + b) = ka + kb \qquad \text{et} \qquad k(a - b) = ka - kb
$$
:::

::: propriete Double distributivité
$$
(a + b)(c + d) = ac + ad + bc + bd
$$

Chaque terme de la première parenthèse multiplie chaque terme de la deuxième : 4 produits.
:::

::: demonstration Pourquoi la double distributivité marche
On pose $k = a + b$ et on utilise la simple distributivité deux fois :

$$
\begin{aligned}
(a + b)(c + d) &= (a + b) \times c + (a + b) \times d \\
&= ac + bc + ad + bd
\end{aligned}
$$

Sur le terrain : un rectangle de $(a + b)$ sur $(c + d)$ se coupe en 4 petits rectangles
d'aires $ac$, $ad$, $bc$ et $bd$.
:::

::: essai
Développe et réduis $A = (2x - 3)(x + 4)$.
:::

::: details Voir le corrigé
$$
\begin{aligned}
A &= 2x \times x + 2x \times 4 - 3 \times x - 3 \times 4 \\
&= 2x^2 + 8x - 3x - 12 \\
&= 2x^2 + 5x - 12
\end{aligned}
$$

**Résultat : $A = 2x^2 + 5x - 12$.**
Contrôle avec $x = 1$ : $(2 - 3)(1 + 4) = -5$ et $2 + 5 - 12 = -5$ ✓.
:::

### Factoriser

Pour factoriser, on cherche ce qui est **commun à tous les termes** (le facteur), on le
sort, et on écrit ce qui reste entre parenthèses.

::: essai
Factorise $B = 6x^2 + 9x$.
:::

::: details Voir le corrigé
$6x^2 = 3x \times 2x$ et $9x = 3x \times 3$. Le facteur commun est $3x$ :

$$
B = 3x(2x + 3)
$$

**Résultat : $B = 3x(2x + 3)$.** Contrôle en redéveloppant : $3x \times 2x + 3x \times 3 = 6x^2 + 9x$ ✓.
:::

::: essai
Factorise $C = (x + 1)(x - 5) + (x + 1)(2x + 3)$.
:::

::: details Voir le corrigé
Le facteur commun est toute la parenthèse $(x + 1)$ :

$$
\begin{aligned}
C &= (x + 1)\big[(x - 5) + (2x + 3)\big] \\
&= (x + 1)(3x - 2)
\end{aligned}
$$

**Résultat : $C = (x + 1)(3x - 2)$.**
:::

<Video id="gSa851JJn6c" titre="Développer une expression (Seconde)" chaine="Yvan Monka" vedette />

<Video id="kQGWtMOHbrA" titre="Factoriser une expression (Seconde)" chaine="Yvan Monka" />

### Fiche méthode

::: methode Comment développer
1. Repère le type : $k(a + b)$ ou $(a + b)(c + d)$.
2. Fais **tous** les produits, en gardant les signes (écris-les, même les évidents).
3. **Réduis** : regroupe les $x^2$ ensemble, les $x$ ensemble, les nombres ensemble.
4. **Contrôle** : remplace $x$ par 1 dans l'expression de départ et dans le résultat.
:::

::: methode Comment factoriser
1. Cherche le **facteur commun** à tous les termes : un nombre, $x$, ou une parenthèse entière.
2. Écris-le devant, puis entre crochets ce qui reste de chaque terme.
3. Réduis l'intérieur.
4. **Contrôle** en redéveloppant.
:::

### Les erreurs fréquentes

::: erreur Ne distribuer qu'au premier terme
❌ $3(x + 2) = 3x + 2$.

✅ Le facteur passe dans **toutes** les maisons : $3(x + 2) = 3x + 6$.
:::

::: erreur Perdre le signe moins devant une parenthèse
❌ $5 - (x - 3) = 5 - x - 3$.

✅ Le moins change **tous** les signes de la parenthèse : $5 - (x - 3) = 5 - x + 3 = 8 - x$.
:::

::: erreur Oublier des produits dans la double distributivité
❌ $(x + 2)(x + 3) = x^2 + 6$.

✅ Il y a 4 produits : $x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.
:::

::: erreur Confondre 2x et x²
❌ $x \times x = 2x$.

✅ $x \times x = x^2$, alors que $x + x = 2x$.
:::

::: source
Méthodes et erreurs : [Yvan Monka, Maths et tiques (PDF)](https://www.maths-et-tiques.fr/telech/19Calc_algebriqueM.pdf).
Tous les calculs de cette partie ont été contrôlés en remplaçant $x$ par une valeur.
:::

<FinPartie lecon="maths/bloc-0/calcul-litteral/developper-factoriser" :numero="2" :total="3" />

## Partie 3 : s'en servir

### À quoi ça sert ?

::: application Deux résistances en série (BTS)
Deux résistances $R_1$ et $R_2$ en série sont traversées par le même courant $I$.
La tension totale est $U = R_1 I + R_2 I$. En **factorisant** par $I$ :

$$
U = (R_1 + R_2)\,I
$$

On lit tout de suite que deux résistances en série se comportent comme une seule
résistance $R_1 + R_2$. Factoriser, ici, c'est **comprendre** la formule.
:::

::: application Le prix d'une installation
Un électricien facture 45 € de déplacement, puis 40 € de l'heure. Pour un chantier
de 3 heures avec 2 ouvriers : $2(45 + 40 \times 3) = 2 \times 165 = 330$ €.
:::

### Les vidéos

::: verifier À VÉRIFIER par Arthur
Les identifiants des deux vidéos viennent de la page de Seconde de Maths et tiques, mais je
n'ai pas pu vérifier leurs titres exacts en ligne. Clique sur les miniatures : si une vidéo
ne parle pas du bon sujet, dis-le moi et je la change.
:::

### Exercices

#### Niveau 1 : application

**Exercice 1.** Développe $4(x - 5)$ et $-2(3x + 1)$.

::: details Indice
Le facteur va chez tout le monde, avec son signe.
:::

::: details Corrigé
$4x - 20$ et $-6x - 2$.
:::

**Exercice 2.** Factorise $5x + 15$ et $x^2 - 7x$.

::: details Indice
Facteur commun : 5 pour la première, $x$ pour la deuxième.
:::

::: details Corrigé
$5(x + 3)$ et $x(x - 7)$.
:::

**Exercice 3.** Développe $(x + 1)(x + 6)$.

::: details Indice
4 produits : $x \times x$, $x \times 6$, $1 \times x$, $1 \times 6$.
:::

::: details Corrigé
$x^2 + 6x + x + 6 = x^2 + 7x + 6$.
:::

#### Niveau 2 : entraînement

**Exercice 4.** Développe et réduis $D = (3x - 2)(2x - 5)$.

::: details Indice
Attention aux signes : $-2 \times (-5) = +10$.
:::

::: details Corrigé
$6x^2 - 15x - 4x + 10 = 6x^2 - 19x + 10$.
Contrôle avec $x = 1$ : $(1)(-3) = -3$ et $6 - 19 + 10 = -3$ ✓.
:::

**Exercice 5.** Développe et réduis $E = 2(x + 3) - (x - 4)$.

::: details Indice
Le moins devant la deuxième parenthèse change tous ses signes.
:::

::: details Corrigé
$2x + 6 - x + 4 = x + 10$.
:::

**Exercice 6.** Factorise $F = (2x + 1)(x - 3) - (2x + 1)(4x + 2)$.

::: details Indice
Le facteur commun est $(2x + 1)$. Attention au moins devant le deuxième morceau.
:::

::: details Corrigé
$F = (2x + 1)\big[(x - 3) - (4x + 2)\big] = (2x + 1)(x - 3 - 4x - 2) = (2x + 1)(-3x - 5)$.
:::

#### Niveau 3 : approfondissement

**Exercice 7 (BTS).** Trois lampes de résistances $R_1 = 100$ Ω, $R_2 = 220$ Ω et
$R_3 = 330$ Ω sont en série, traversées par $I = 0{,}02$ A. Écris la tension totale sous
forme factorisée, puis calcule-la.

::: details Indice
$U = R_1 I + R_2 I + R_3 I$ : quel est le facteur commun ?
:::

::: details Corrigé
$U = (R_1 + R_2 + R_3)\,I = 650 \times 0{,}02 = 13$ V.
:::

**Exercice 8.** Montre que pour tout nombre $x$ : $(x + 2)(x + 3) - x(x + 5) = 6$.

::: details Indice
Développe chaque morceau, puis réduis.
:::

::: details Corrigé
$(x^2 + 5x + 6) - (x^2 + 5x) = x^2 + 5x + 6 - x^2 - 5x = 6$ ✓, quel que soit $x$.
:::

<FinPartie lecon="maths/bloc-0/calcul-litteral/developper-factoriser" :numero="3" :total="3" />
