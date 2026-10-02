---
title: Les identités remarquables
lecon:
  statut: brouillon
  niveau: Intermédiaire
  duree: 30
  bts: false
  prerequis:
    - texte: Développer et factoriser
      lien: /maths/bloc-0/calcul-litteral/developper-factoriser
---

# Les identités remarquables

Trois formules qui reviennent tellement souvent qu'on les apprend par cœur. Mais
avant de les apprendre, on va les **voir** : elles se dessinent avec un simple carré.

## Partie 1 : comprendre avec un carrelage

### L'image : le carré qu'on agrandit

Tu as une terrasse carrée de côté $a$, carrelée. Tu veux l'agrandir de $b$ mètres
**dans les deux sens** pour garder un carré. La nouvelle terrasse a pour côté $a + b$,
donc pour aire $(a + b)^2$.

Combien de carrelage faut-il au total ? Regarde le dessin : le grand carré se découpe en
**quatre morceaux** :

- l'ancienne terrasse, un carré d'aire $a^2$ ;
- un petit carré dans le coin, d'aire $b^2$ ;
- **deux rectangles** identiques le long des bords, d'aire $a \times b$ chacun.

Donc $(a + b)^2 = a^2 + 2ab + b^2$. Beaucoup de gens pensent qu'il suffit d'ajouter le
petit carré ($a^2 + b^2$) : ils oublient les deux bandes sur les côtés.

::: memo
**Quand on agrandit un carré, il ne faut pas oublier les deux bandes sur les côtés.**
$(a + b)^2$, c'est $a^2$, $b^2$ **et** les deux rectangles $2ab$.
:::

### À toi de jouer

Bouge les curseurs : le grand carré vaut toujours $a^2 + 2ab + b^2$, jamais $a^2 + b^2$.

<CarreIdentite />

### Du carrelage aux maths

| Sur la terrasse | En maths |
|---|---|
| L'ancienne terrasse | $a^2$ |
| Le petit carré du coin | $b^2$ |
| Les deux bandes le long des bords | $2ab$, le **double produit** |
| La nouvelle terrasse entière | $(a + b)^2$ |
| Retirer une bande de $b$ dans les deux sens | $(a - b)^2 = a^2 - 2ab + b^2$ |

### Là où l'image s'arrête

Le dessin marche avec des longueurs positives. Les formules, elles, sont vraies pour
**tous** les nombres : on les démontre dans la partie 2 par le calcul.

::: source
Identités remarquables : [Yvan Monka, Maths et tiques, cours « Calcul algébrique » de Seconde (PDF)](https://www.maths-et-tiques.fr/telech/19Calc_algebriqueM.pdf).
La figure du carré découpé est la démonstration géométrique classique (déjà chez Euclide, *Éléments*, livre II).
:::

<FinPartie lecon="maths/bloc-0/calcul-litteral/identites-remarquables" :numero="1" :total="3" />

## Partie 2 : le cours

::: propriete Les trois identités remarquables
Pour tous nombres $a$ et $b$ :

$$
\begin{aligned}
(a + b)^2 &= a^2 + 2ab + b^2 \\
(a - b)^2 &= a^2 - 2ab + b^2 \\
(a + b)(a - b) &= a^2 - b^2
\end{aligned}
$$
:::

::: demonstration Par la double distributivité
$$
\begin{aligned}
(a + b)^2 &= (a + b)(a + b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2 \\
(a - b)^2 &= (a - b)(a - b) = a^2 - ab - ba + b^2 = a^2 - 2ab + b^2 \\
(a + b)(a - b) &= a^2 - ab + ba - b^2 = a^2 - b^2
\end{aligned}
$$

Dans la troisième, les deux termes $-ab$ et $+ab$ s'annulent : c'est pour ça qu'il ne reste que deux carrés.
:::

### Développer avec les identités

::: essai
Développe $(3x + 5)^2$.
:::

::: details Voir le corrigé
On utilise $(a + b)^2$ avec $a = 3x$ et $b = 5$ :

$$
(3x + 5)^2 = (3x)^2 + 2 \times 3x \times 5 + 5^2 = 9x^2 + 30x + 25
$$

**Résultat : $9x^2 + 30x + 25$.** Attention : $(3x)^2 = 9x^2$, pas $3x^2$.
:::

### Factoriser avec les identités

C'est dans ce sens qu'elles sont le plus utiles : reconnaître une forme développée et
la transformer en produit.

::: essai
Factorise $x^2 - 49$.
:::

::: details Voir le corrigé
$49 = 7^2$, donc on reconnaît $a^2 - b^2$ avec $a = x$ et $b = 7$ :

$$
x^2 - 49 = (x + 7)(x - 7)
$$

**Résultat : $(x + 7)(x - 7)$.**
:::

::: essai
Factorise $4x^2 - 12x + 9$.
:::

::: details Voir le corrigé
$4x^2 = (2x)^2$ et $9 = 3^2$. Le terme du milieu vaut-il $2 \times 2x \times 3 = 12x$ ? Oui, avec un signe moins :
c'est $(a - b)^2$ avec $a = 2x$ et $b = 3$.

$$
4x^2 - 12x + 9 = (2x - 3)^2
$$

**Résultat : $(2x - 3)^2$.**
:::

<Video id="gSa851JJn6c" titre="Développer une expression (Seconde)" chaine="Yvan Monka" vedette />

### Fiche méthode

::: methode Comment reconnaître une identité remarquable
1. **Deux termes qui sont des carrés séparés par un moins** ($x^2 - 25$, $9 - 4x^2$) :
   c'est $a^2 - b^2 = (a + b)(a - b)$.
2. **Trois termes, dont deux carrés** : calcule le double produit $2 \times a \times b$ et compare-le
   au terme du milieu. S'il correspond, c'est $(a + b)^2$ ou $(a - b)^2$ selon le signe.
3. **Contrôle** en redéveloppant.
:::

### Les erreurs fréquentes

::: erreur Oublier le double produit
❌ $(x + 3)^2 = x^2 + 9$.

✅ $(x + 3)^2 = x^2 + 6x + 9$. Contrôle avec $x = 1$ : $(1 + 3)^2 = 16$ et $1 + 6 + 9 = 16$ ✓, alors que $1 + 9 = 10$.
:::

::: erreur Oublier de mettre au carré le nombre devant x
❌ $(2x)^2 = 2x^2$.

✅ $(2x)^2 = 2x \times 2x = 4x^2$.
:::

::: erreur Se tromper de signe dans (a − b)²
❌ $(x - 4)^2 = x^2 - 8x - 16$.

✅ $(-4)^2 = +16$ : $(x - 4)^2 = x^2 - 8x + 16$.
:::

::: erreur Voir une identité dans une somme de carrés
❌ $x^2 + 9 = (x + 3)(x - 3)$.

✅ $(x + 3)(x - 3) = x^2 - 9$. Une **somme** de deux carrés $x^2 + 9$ ne se factorise pas ainsi.
:::

::: source
Méthodes et erreurs : [Yvan Monka, Maths et tiques (PDF)](https://www.maths-et-tiques.fr/telech/19Calc_algebriqueM.pdf).
Tous les calculs ont été contrôlés en remplaçant $x$ par une valeur.
:::

<FinPartie lecon="maths/bloc-0/calcul-litteral/identites-remarquables" :numero="2" :total="3" />

## Partie 3 : s'en servir

### À quoi ça sert ?

::: application Calculer de tête
$51^2 = (50 + 1)^2 = 2\,500 + 100 + 1 = 2\,601$.
$99 \times 101 = (100 - 1)(100 + 1) = 10\,000 - 1 = 9\,999$.
:::

::: application Préparer la suite (second degré)
En Première, pour résoudre $x^2 + 6x + 5 = 0$, on écrit $x^2 + 6x = (x + 3)^2 - 9$.
L'équation devient $(x + 3)^2 - 4 = 0$, puis $(x + 3 - 2)(x + 3 + 2) = 0$ avec $a^2 - b^2$.
Les identités remarquables sont la clé du chapitre sur le second degré.
:::

### Les vidéos

::: verifier À VÉRIFIER par Arthur
L'identifiant de la vidéo vient de la page de Seconde de Maths et tiques (partie « développer »),
mais je n'ai pas pu vérifier son titre exact. Je n'ai pas encore de vidéo spécifique aux identités
remarquables : je t'en proposerai une à la relecture.
:::

### Exercices

#### Niveau 1 : application

**Exercice 1.** Développe $(x + 4)^2$ et $(x - 1)^2$.

::: details Indice
$a^2 + 2ab + b^2$ et $a^2 - 2ab + b^2$.
:::

::: details Corrigé
$x^2 + 8x + 16$ et $x^2 - 2x + 1$.
:::

**Exercice 2.** Développe $(x + 6)(x - 6)$.

::: details Indice
Troisième identité.
:::

::: details Corrigé
$x^2 - 36$.
:::

**Exercice 3.** Factorise $x^2 - 100$.

::: details Indice
$100 = 10^2$.
:::

::: details Corrigé
$(x + 10)(x - 10)$.
:::

#### Niveau 2 : entraînement

**Exercice 4.** Développe $(2x - 5)^2$.

::: details Indice
$a = 2x$, $b = 5$ : $(2x)^2 - 2 \times 2x \times 5 + 5^2$.
:::

::: details Corrigé
$4x^2 - 20x + 25$.
:::

**Exercice 5.** Factorise $x^2 + 10x + 25$.

::: details Indice
$25 = 5^2$ et $2 \times x \times 5 = 10x$.
:::

::: details Corrigé
$(x + 5)^2$.
:::

**Exercice 6.** Factorise $9x^2 - 16$.

::: details Indice
$9x^2 = (3x)^2$ et $16 = 4^2$.
:::

::: details Corrigé
$(3x + 4)(3x - 4)$.
:::

#### Niveau 3 : approfondissement

**Exercice 7.** Calcule de tête $49^2$ et $102 \times 98$.

::: details Indice
$49 = 50 - 1$. Et $102 \times 98 = (100 + 2)(100 - 2)$.
:::

::: details Corrigé
$49^2 = 2\,500 - 100 + 1 = 2\,401$ et $102 \times 98 = 10\,000 - 4 = 9\,996$.
:::

**Exercice 8.** Factorise $(x + 1)^2 - 9$.

::: details Indice
C'est $A^2 - B^2$ avec $A = x + 1$ et $B = 3$.
:::

::: details Corrigé
$\big[(x + 1) + 3\big]\big[(x + 1) - 3\big] = (x + 4)(x - 2)$.
Contrôle avec $x = 0$ : $1 - 9 = -8$ et $4 \times (-2) = -8$ ✓.
:::

<FinPartie lecon="maths/bloc-0/calcul-litteral/identites-remarquables" :numero="3" :total="3" />
