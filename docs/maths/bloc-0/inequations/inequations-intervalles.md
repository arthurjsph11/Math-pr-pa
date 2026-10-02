---
title: Inéquations et intervalles
lecon:
  statut: brouillon
  niveau: Intermédiaire
  duree: 30
  bts: false
  prerequis:
    - texte: Résoudre une équation du premier degré
      lien: /maths/bloc-0/equations/equation-premier-degre
    - texte: Priorités de calcul et nombres relatifs
      lien: /maths/bloc-0/calcul/priorites-relatifs
---

# Inéquations et intervalles

Une équation demande « **quel** nombre ? ». Une inéquation demande « **quels** nombres ? » :
souvent, il y en a une infinité. On les résout presque comme des équations, avec **un seul
piège** à connaître.

## Partie 1 : comprendre avec un ascenseur

### L'image : la charge maximale de l'ascenseur

Dans un ascenseur, une plaque indique : **630 kg maximum**. Tu montes avec un chariot de
150 kg de matériel. Combien de kilos de personnes peuvent encore monter ?

Si $x$ est la masse des personnes, il faut $x + 150 \leq 630$. On enlève 150 des deux côtés,
comme sur la balance : $x \leq 480$. Toutes les masses de 0 à 480 kg conviennent : il n'y a
pas **une** réponse, il y en a une infinité.

Maintenant, le piège. Sur un thermomètre, $-3$ est plus froid que $2$ : $-3 < 2$. Prenons les
**opposés** : $3$ et $-2$. Cette fois, c'est $3$ le plus grand : $3 > -2$. Multiplier par $-1$,
c'est comme **retourner le thermomètre** la tête en bas : ce qui était en haut passe en bas.

::: memo
**Multiplier ou diviser par un nombre négatif, c'est retourner le thermomètre :
le sens de l'inégalité s'inverse.**
:::

### De l'ascenseur aux maths

| Dans l'ascenseur | En maths |
|---|---|
| La charge maximale | La borne de l'inégalité |
| « Au maximum 480 kg » | $x \leq 480$ |
| Enlever le chariot des deux côtés | Soustraire 150 aux deux membres : le sens ne change pas |
| Toutes les masses possibles, de 0 à 480 | L'**intervalle** $[0 \,;\, 480]$ |
| Retourner le thermomètre | Multiplier par un négatif : $<$ devient $>$ |

### Là où l'image s'arrête

Une masse ne peut pas être négative, donc dans l'ascenseur on s'arrête à 0. En maths,
$x \leq 480$ contient aussi tous les nombres négatifs : l'ensemble des solutions est
$]-\infty \,;\, 480]$.

::: source
Inéquations et intervalles : [Yvan Monka, Maths et tiques, cours « Inéquations » de Seconde (PDF)](https://www.maths-et-tiques.fr/telech/19Equations_InequationsM2.pdf) et
[« Nombres réels, intervalles » (PDF)](https://www.maths-et-tiques.fr/telech/19NombresReels2M.pdf).
:::

<FinPartie lecon="maths/bloc-0/inequations/inequations-intervalles" :numero="1" :total="3" />

## Partie 2 : le cours

### Les intervalles

::: definition Intervalles
Un **intervalle** est l'ensemble de tous les nombres compris entre deux bornes.

| Inégalité | Intervalle | Se lit |
|---|---|---|
| $2 \leq x \leq 5$ | $[2 \,;\, 5]$ | de 2 à 5, bornes comprises |
| $2 < x < 5$ | $]2 \,;\, 5[$ | de 2 à 5, bornes exclues |
| $2 \leq x < 5$ | $[2 \,;\, 5[$ | 2 compris, 5 exclu |
| $x \geq 2$ | $[2 \,;\, +\infty[$ | 2 ou plus |
| $x < 5$ | $]-\infty \,;\, 5[$ | strictement moins que 5 |

Le crochet **tourné vers le nombre** l'inclut, le crochet **tourné vers l'extérieur** l'exclut.
Du côté de $\pm\infty$, le crochet est **toujours ouvert** : l'infini n'est pas un nombre.
:::

### Les règles

::: propriete Règles des inégalités
1. On peut **ajouter ou soustraire** un même nombre aux deux membres : le sens **ne change pas**.
2. On peut **multiplier ou diviser** par un même nombre **positif** : le sens **ne change pas**.
3. Si on **multiplie ou divise** par un même nombre **négatif**, le sens **change** :
   $<$ devient $>$, $\leq$ devient $\geq$.
:::

::: demonstration Pourquoi le sens change avec un négatif
Si $a < b$, alors $b - a$ est positif. Multiplions par $-1$ : $-(b - a) = a - b$ est négatif.
Donc $-b - (-a) = a - b < 0$, c'est-à-dire $-b < -a$, autrement dit $-a > -b$.
Multiplier par $-1$ a inversé l'ordre. Pour un autre nombre négatif $-k$ (avec $k > 0$),
on multiplie par $k$ (règle 2) puis par $-1$.
:::

::: essai
Résous $3x - 7 > 5$ et donne les solutions sous forme d'intervalle.
:::

::: details Voir le corrigé
$$
\begin{aligned}
3x - 7 &> 5 \\
3x &> 12 && (+7) \\
x &> 4 && (\div 3, \text{ positif : le sens reste})
\end{aligned}
$$

**Résultat : $x > 4$, soit $S = \,]4 \,;\, +\infty[$.**
:::

::: essai
Résous $5 - 2x \geq 11$.
:::

::: details Voir le corrigé
$$
\begin{aligned}
5 - 2x &\geq 11 \\
-2x &\geq 6 && (-5) \\
x &\leq -3 && (\div (-2), \text{ négatif : le sens change})
\end{aligned}
$$

**Résultat : $x \leq -3$, soit $S = \,]-\infty \,;\, -3]$.**
:::

::: details Vérifier mon résultat
Prends une valeur dans la solution, $x = -4$ : $5 - 2 \times (-4) = 13 \geq 11$ ✓.
Et une valeur en dehors, $x = 0$ : $5 \geq 11$ est faux ✓.
:::

<Video id="kbTWwWQ9tYo" titre="Les inéquations (Seconde)" chaine="Yvan Monka" vedette />

<Video id="mvJy4LVCmRI" titre="Les intervalles (Seconde)" chaine="Yvan Monka" />

### Fiche méthode

::: methode Comment résoudre une inéquation du premier degré
1. Comme une équation : développe, regroupe les $x$ d'un côté et les nombres de l'autre.
2. Au moment de diviser par le nombre devant $x$, **regarde son signe** :
   positif, le sens reste ; négatif, **le sens change**.
3. Écris la solution sous forme d'**intervalle** et fais un petit dessin sur une droite graduée.
4. **Contrôle** avec une valeur dedans et une valeur dehors.
:::

### Les erreurs fréquentes

::: erreur Oublier de changer le sens
❌ $-2x < 8$ donc $x < -4$.

✅ On divise par $-2$ : $x > -4$. Contrôle avec $x = 0$ : $-2 \times 0 = 0 < 8$ ✓, et 0 est bien plus grand que $-4$.
:::

::: erreur Changer le sens quand on soustrait un nombre négatif
❌ $x + 3 < 1$ donc $x > -2$.

✅ Ajouter ou soustraire ne change **jamais** le sens : $x < -2$.
:::

::: erreur Fermer le crochet sur l'infini
❌ $[3 \,;\, +\infty]$.

✅ $[3 \,;\, +\infty[$ : le crochet est toujours ouvert du côté de l'infini.
:::

::: source
Méthodes et erreurs : [Yvan Monka, Maths et tiques (PDF)](https://www.maths-et-tiques.fr/telech/19Equations_InequationsM2.pdf).
Chaque solution a été contrôlée avec une valeur dedans et une valeur dehors.
:::

<FinPartie lecon="maths/bloc-0/inequations/inequations-intervalles" :numero="2" :total="3" />

## Partie 3 : s'en servir

### À quoi ça sert ?

::: application Ne pas dépasser la puissance de l'abonnement (BTS)
Un abonnement électrique de 6 kVA permet d'appeler environ 6 000 W en même temps (en
première approximation). Le four (2 500 W) et le lave-linge (2 000 W) tournent déjà.
Combien de radiateurs de 750 W peut-on encore allumer sans faire disjoncter ?

$$
\begin{aligned}
2\,500 + 2\,000 + 750\,n &\leq 6\,000 \\
750\,n &\leq 1\,500 \\
n &\leq 2
\end{aligned}
$$

**Au plus 2 radiateurs.** Un gestionnaire d'énergie domotique fait exactement ce calcul pour
délester (couper) les appareils les moins prioritaires.
:::

::: application Une plage de tolérance
Une résistance de 100 Ω à ± 5 % a une valeur réelle $R$ telle que $95 \leq R \leq 105$,
c'est-à-dire $R \in [95 \,;\, 105]$.
:::

::: source
Tolérance des résistances (séries E12 à 5 %, E24, etc.) : norme CEI 60063.
La correspondance kVA ↔ W suppose un facteur de puissance égal à 1 : c'est une simplification.
:::

### Les vidéos

::: verifier À VÉRIFIER par Arthur
Les identifiants des deux vidéos viennent de la page de Seconde de Maths et tiques, mais je
n'ai pas pu vérifier leurs titres exacts en ligne. Clique sur les miniatures : si une vidéo
ne parle pas du bon sujet, dis-le moi et je la change.
:::

### Exercices

#### Niveau 1 : application

**Exercice 1.** Écris sous forme d'intervalle : $-1 \leq x < 4$, $x > 7$ et $x \leq 0$.

::: details Indice
Crochet vers le nombre s'il est compris, vers l'extérieur sinon.
:::

::: details Corrigé
$[-1 \,;\, 4[$ ; $]7 \,;\, +\infty[$ ; $]-\infty \,;\, 0]$.
:::

**Exercice 2.** Résous $x + 8 \leq 3$.

::: details Indice
On enlève 8 des deux côtés. Le sens ne change pas.
:::

::: details Corrigé
$x \leq -5$, soit $]-\infty \,;\, -5]$.
:::

**Exercice 3.** Résous $4x > 20$.

::: details Indice
On divise par 4, positif.
:::

::: details Corrigé
$x > 5$, soit $]5 \,;\, +\infty[$.
:::

#### Niveau 2 : entraînement

**Exercice 4.** Résous $-3x + 2 < 14$.

::: details Indice
Après avoir enlevé 2, tu divises par $-3$ : attention au sens.
:::

::: details Corrigé
$-3x < 12$, donc $x > -4$ : $]-4 \,;\, +\infty[$.
:::

**Exercice 5.** Résous $2(x - 1) \geq 5x + 4$.

::: details Indice
Développe, puis regroupe les $x$ à gauche.
:::

::: details Corrigé
$2x - 2 \geq 5x + 4$, donc $-3x \geq 6$, donc $x \leq -2$ : $]-\infty \,;\, -2]$.
Contrôle avec $x = -3$ : $2 \times (-4) = -8 \geq -11$ ✓.
:::

**Exercice 6.** Trouve les nombres qui vérifient à la fois $x \geq -2$ et $x < 3$.

::: details Indice
Dessine les deux sur une droite graduée : où se superposent-ils ?
:::

::: details Corrigé
$[-2 \,;\, 3[$.
:::

#### Niveau 3 : approfondissement

**Exercice 7 (BTS).** Un abonnement de 9 kVA (environ 9 000 W). Une plaque de cuisson de
4 600 W est allumée. Combien de radiateurs de 1 000 W peut-on allumer en plus, au maximum ?

::: details Indice
$4\,600 + 1\,000\,n \leq 9\,000$, et $n$ est un nombre entier.
:::

::: details Corrigé
$1\,000\,n \leq 4\,400$, donc $n \leq 4{,}4$. Comme $n$ est entier : **au plus 4 radiateurs**.
:::

**Exercice 8.** Résous $\dfrac{x}{-2} + 1 > 3$.

::: details Indice
Enlève 1, puis multiplie par $-2$ : le sens change.
:::

::: details Corrigé
$\dfrac{x}{-2} > 2$, puis $x < -4$ : $]-\infty \,;\, -4[$.
Contrôle avec $x = -6$ : $3 + 1 = 4 > 3$ ✓.
:::

<FinPartie lecon="maths/bloc-0/inequations/inequations-intervalles" :numero="3" :total="3" />
