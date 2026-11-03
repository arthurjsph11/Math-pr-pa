---
title: Le second degré
lecon:
  statut: brouillon
  niveau: Intermédiaire
  duree: 30
  bts: true
  prerequis:
    - texte: Développer et factoriser
      lien: /maths/bloc-0/calcul-litteral/developper-factoriser
    - texte: Les identités remarquables
      lien: /maths/bloc-0/calcul-litteral/identites-remarquables
    - texte: Équations produit nul
      lien: /maths/bloc-0/equations/produit-nul-quotient
    - texte: Les racines carrées
      lien: /maths/bloc-0/calcul/racines-carrees
---

# Le second degré

En Seconde, tu sais résoudre $x^2 = 3x$ ou $(x - 1)(x + 4) = 0$. Mais pas $x^2 - 4x + 3 = 0$ :
le $x$ apparaît deux fois, avec un carré, et on ne voit pas tout de suite comment factoriser.
Ce chapitre donne **une méthode qui marche à tous les coups**, le discriminant, et surtout
une image pour comprendre ce qu'elle calcule : **un jet d'eau**.

## Partie 1 : comprendre avec un jet d'eau

### L'image : le jet d'une fontaine

Regarde le jet d'un tuyau d'arrosage ou d'une fontaine. L'eau sort de la buse, **monte en
ralentissant**, atteint **un point le plus haut**, puis **redescend en accélérant**. Et le jet est
**symétrique** : la montée et la descente ont la même forme.

Cette courbe a un nom : c'est une **parabole**. Ce n'est pas une ressemblance : si on néglige
la résistance de l'air, chaque goutte suit exactement une parabole, et la hauteur d'une goutte
s'écrit avec un $x^2$.

Par exemple, pour un petit jet qui part du sol, la hauteur (en mètres) à la distance $x$
de la buse pourrait être

$$
h(x) = -0{,}5x^2 + 2x
$$

- Le jet monte jusqu'à **2 m**, atteints à **2 m** de la buse : $h(2) = -2 + 4 = 2$.
- Il retombe au sol à **4 m** : $h(4) = -8 + 8 = 0$.

Maintenant, on pose un muret devant la fontaine. **Le jet passe-t-il au-dessus ?**
Tout dépend de la hauteur du muret :

- muret de 1,5 m : le jet le passe (il le croise deux fois, en montant puis en descendant) ;
- muret de 2 m : le jet l'effleure en un seul point, son sommet ;
- muret de 2,5 m : le jet ne l'atteint jamais.

**Deux points, un point, aucun point** : c'est exactement ce que dit le discriminant $\Delta$.

::: memo
**Le jet monte, s'arrête au sommet, redescend : c'est une parabole.**
Le sommet dit **jusqu'où** ça monte. Le discriminant $\Delta$ dit **combien de fois** ça touche :
$\Delta > 0$ deux fois, $\Delta = 0$ une fois, $\Delta < 0$ jamais.
:::

### Du jet d'eau aux maths

| Le jet d'eau | En maths |
|---|---|
| La forme du jet | La **parabole**, courbe de $f(x) = ax^2 + bx + c$ |
| Le jet monte puis redescend (« bras vers le bas ») | $a < 0$. Si $a > 0$, la parabole est « en U », bras vers le haut |
| Le point le plus haut | Le **sommet** $S(\alpha \,;\, \beta)$ : $\beta$ est le **maximum** |
| Le jet est symétrique | L'**axe de symétrie** : la droite verticale $x = \alpha$ |
| Les endroits où l'eau touche le sol | Les **racines** : les solutions de $f(x) = 0$ |
| Deux, un ou aucun point de contact avec le muret | Le signe du **discriminant** $\Delta = b^2 - 4ac$ |

### Joue avec la parabole

Bouge les curseurs. Regarde le sommet (point orange), les racines (points rouges) et la valeur de $\Delta$.

<Parabole />

::: essai
Avec les curseurs, trouve une parabole **en U** (bras vers le haut) qui ne touche **jamais** l'axe des $x$.
Que vaut alors $\Delta$ ? Et une parabole qui le touche en **un seul** point ?
:::

::: details Voir une réponse
Par exemple $a = 1$, $b = 0$, $c = 2$ : $y = x^2 + 2$. La courbe reste au-dessus de l'axe, et
$\Delta = 0^2 - 4 \times 1 \times 2 = -8 < 0$.

Pour un seul point : $a = 1$, $b = 2$, $c = 1$, soit $y = x^2 + 2x + 1 = (x + 1)^2$.
$\Delta = 4 - 4 = 0$, et le sommet est posé sur l'axe en $x = -1$.
:::

### Là où l'image s'arrête

- Un vrai jet d'eau est toujours « bras vers le bas » ($a < 0$), à cause de la pesanteur. En maths,
  $a$ peut aussi être positif : la parabole est alors en U, et le sommet est un **minimum**.
- Le jet s'arrête au sol. La parabole, elle, continue des deux côtés, à l'infini.
- Avec la résistance de l'air, le vrai jet retombe un peu plus court et plus raide : ce n'est plus
  exactement une parabole. Pour un jet lent et court, l'écart est faible.

::: source
Trajectoire parabolique d'un projectile sans frottements : programme de physique-chimie de Première (mouvement dans un champ de pesanteur uniforme).
Notions de la leçon : [Yvan Monka, Maths et tiques, « Second degré » partie 1 (PDF)](https://www.maths-et-tiques.fr/telech/19SecdegP1M.pdf).
Découpage du chapitre inspiré de [ParaMaths, Second degré (1re spé)](https://paramaths.fr/ressources/premiere-spe-maths/second-degre) (contenu réécrit, rien n'est recopié).
:::

<FinPartie lecon="maths/premiere/second-degre/second-degre" :numero="1" :total="3" />

## Partie 2 : le cours

### Les mots à connaître

::: definition Fonction polynôme du second degré (ou trinôme)
C'est une fonction qui peut s'écrire

$$
f(x) = ax^2 + bx + c
$$

avec $a$, $b$, $c$ des nombres réels et **$a \neq 0$**. C'est la **forme développée**.
Sa courbe est une **parabole**.
:::

- $f(x) = 3x^2 - 5x + 1$ : oui, $a = 3$, $b = -5$, $c = 1$.
- $f(x) = 4 - x^2$ : oui, attention à l'ordre ! $a = -1$, $b = 0$, $c = 4$.
- $f(x) = (x - 1)(2x + 3)$ : oui, en développant on trouve $2x^2 + x - 3$.
- $f(x) = 5x + 2$ : non, $a = 0$ (c'est une fonction affine).
- $f(x) = x^3 + x^2$ : non, il y a un $x^3$.

### Les trois formes d'un trinôme

Un même trinôme peut s'écrire de trois façons. Chacune répond à une question différente.

| Forme | Écriture | Elle donne tout de suite… |
|---|---|---|
| Développée | $ax^2 + bx + c$ | $f(0) = c$, le point où la courbe coupe l'axe vertical |
| Canonique | $a(x - \alpha)^2 + \beta$ | le **sommet** $S(\alpha \,;\, \beta)$, les variations |
| Factorisée | $a(x - x_1)(x - x_2)$ | les **racines** $x_1$ et $x_2$, le signe |

Exemple : $x^2 - 4x + 3 = (x - 2)^2 - 1 = (x - 1)(x - 3)$. Développe les deux dernières pour vérifier.

### La forme canonique

::: propriete Forme canonique
Tout trinôme $f(x) = ax^2 + bx + c$ (avec $a \neq 0$) peut s'écrire

$$
f(x) = a(x - \alpha)^2 + \beta \qquad \text{avec} \quad \alpha = -\frac{b}{2a} \quad \text{et} \quad \beta = f(\alpha)
$$

Le sommet de la parabole est $S(\alpha \,;\, \beta)$, et la droite $x = \alpha$ est son axe de symétrie.
:::

::: demonstration On « complète le carré »
On met $a$ en facteur dans les deux premiers termes, puis on fait apparaître le début d'une
identité remarquable $(x + k)^2 = x^2 + 2kx + k^2$ avec $k = \dfrac{b}{2a}$ :

$$
\begin{aligned}
ax^2 + bx + c &= a\left(x^2 + \frac{b}{a}x\right) + c \\
&= a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2}\right] + c && \text{(on retire le } k^2 \text{ ajouté)} \\
&= a\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a} + c
\end{aligned}
$$

C'est bien $a(x - \alpha)^2 + \beta$ avec $\alpha = -\dfrac{b}{2a}$, et $\beta = c - \dfrac{b^2}{4a}$.
En remplaçant $x$ par $\alpha$, le carré vaut 0 : on obtient $f(\alpha) = \beta$.
:::

::: essai
Écris $f(x) = x^2 - 6x + 5$ sous forme canonique. Quel est le sommet de la parabole ?
:::

::: details Voir le corrigé
$x^2 - 6x$ est le début de $(x - 3)^2 = x^2 - 6x + 9$. On ajoute 9 et on le retire :

$$
\begin{aligned}
x^2 - 6x + 5 &= (x^2 - 6x + 9) - 9 + 5 \\
&= (x - 3)^2 - 4
\end{aligned}
$$

**Résultat : $f(x) = (x - 3)^2 - 4$, sommet $S(3 \,;\, -4)$.**
Vérification avec la formule : $\alpha = -\dfrac{-6}{2 \times 1} = 3$ et $f(3) = 9 - 18 + 5 = -4$ ✓.
:::

### Variations et extremum

::: propriete Variations
- Si $a > 0$ (parabole en U) : $f$ est **décroissante** puis **croissante**. Elle atteint son
  **minimum** $\beta$ en $x = \alpha$.
- Si $a < 0$ (comme le jet d'eau) : $f$ est **croissante** puis **décroissante**. Elle atteint son
  **maximum** $\beta$ en $x = \alpha$.
:::

Pourquoi ? Dans $a(x - \alpha)^2 + \beta$, le carré est toujours positif ou nul, et il vaut 0
seulement en $x = \alpha$. Si $a > 0$, on ajoute donc toujours quelque chose de positif à $\beta$ :
$f(x) \geq \beta$. Si $a < 0$, on retire quelque chose : $f(x) \leq \beta$.

### Le discriminant : combien de solutions ?

::: definition Discriminant
Le **discriminant** du trinôme $ax^2 + bx + c$ est le nombre

$$
\Delta = b^2 - 4ac
$$
:::

::: propriete Solutions de $ax^2 + bx + c = 0$
- Si **$\Delta < 0$** : aucune solution réelle.
- Si **$\Delta = 0$** : une seule solution, $x_0 = -\dfrac{b}{2a}$.
- Si **$\Delta > 0$** : deux solutions,

$$
x_1 = \frac{-b - \sqrt{\Delta}}{2a} \qquad \text{et} \qquad x_2 = \frac{-b + \sqrt{\Delta}}{2a}
$$

Les solutions s'appellent aussi les **racines** du trinôme.
:::

::: demonstration D'où vient le discriminant ?
On repart de la forme canonique et on met $a$ en facteur. Comme $\beta = -\dfrac{b^2 - 4ac}{4a} = -\dfrac{\Delta}{4a}$ :

$$
ax^2 + bx + c = a\left[(x - \alpha)^2 - \frac{\Delta}{4a^2}\right]
$$

Comme $a \neq 0$, l'équation revient à $(x - \alpha)^2 = \dfrac{\Delta}{4a^2}$. Le dénominateur $4a^2$ est positif, donc :

- si $\Delta < 0$, un carré devrait être négatif : impossible, **aucune solution** ;
- si $\Delta = 0$, $(x - \alpha)^2 = 0$, donc $x = \alpha = -\dfrac{b}{2a}$ : **une solution** ;
- si $\Delta > 0$, $x - \alpha = \pm\dfrac{\sqrt{\Delta}}{2a}$, donc $x = -\dfrac{b}{2a} \pm \dfrac{\sqrt{\Delta}}{2a} = \dfrac{-b \pm \sqrt{\Delta}}{2a}$ : **deux solutions**.
:::

<Video id="tc9wvbYuZts" titre="Second degré, chapitre 2 : tout le cours en vidéo" chaine="Yvan Monka" vedette />

### Exemple corrigé

::: essai
Résous $2x^2 - x - 6 = 0$.
:::

::: details Voir le corrigé
On lit $a = 2$, $b = -1$, $c = -6$.

$$
\begin{aligned}
\Delta &= b^2 - 4ac \\
&= (-1)^2 - 4 \times 2 \times (-6) \\
&= 1 + 48 = 49
\end{aligned}
$$

$\Delta > 0$ : deux solutions. $\sqrt{49} = 7$.

$$
x_1 = \frac{-(-1) - 7}{2 \times 2} = \frac{-6}{4} = -\frac{3}{2}
\qquad
x_2 = \frac{-(-1) + 7}{2 \times 2} = \frac{8}{4} = 2
$$

**Résultat : $x = -\dfrac{3}{2}$ ou $x = 2$.**
:::

::: details Vérifier mon résultat
$x = 2$ : $2 \times 4 - 2 - 6 = 0$ ✓.
$x = -\dfrac{3}{2}$ : $2 \times \dfrac{9}{4} + \dfrac{3}{2} - 6 = \dfrac{9}{2} + \dfrac{3}{2} - 6 = 6 - 6 = 0$ ✓.
:::

::: essai Retour au muret
Le jet $h(x) = -0{,}5x^2 + 2x$ passe-t-il au-dessus d'un muret de 1,5 m ? Et de 2,5 m ?
:::

::: details Voir le corrigé
**Muret de 1,5 m** : on cherche où $h(x) = 1{,}5$, soit $-0{,}5x^2 + 2x - 1{,}5 = 0$.
On multiplie par $-2$ pour avoir des nombres plus simples : $x^2 - 4x + 3 = 0$.
$\Delta = 16 - 12 = 4 > 0$, $\sqrt{4} = 2$ :

$$
x_1 = \frac{4 - 2}{2} = 1 \qquad x_2 = \frac{4 + 2}{2} = 3
$$

**Résultat : $x = 1$ ou $x = 3$.** Le jet est à 1,5 m de haut à 1 m (en montant) et à 3 m (en descendant) :
entre les deux, il est plus haut. Il passe donc si le muret est placé entre 1 m et 3 m de la buse.

**Muret de 2,5 m** : $-0{,}5x^2 + 2x - 2{,}5 = 0$, soit $x^2 - 4x + 5 = 0$. $\Delta = 16 - 20 = -4 < 0$ :
aucune solution, le jet n'atteint jamais 2,5 m (il plafonne à 2 m).
:::

### Factoriser un trinôme

::: propriete Forme factorisée
- Si $\Delta > 0$ : $ax^2 + bx + c = a(x - x_1)(x - x_2)$.
- Si $\Delta = 0$ : $ax^2 + bx + c = a(x - x_0)^2$.
- Si $\Delta < 0$ : on ne peut pas factoriser (en produit de facteurs du premier degré).
:::

Exemple : $2x^2 - x - 6 = 2\left(x + \dfrac{3}{2}\right)(x - 2) = (2x + 3)(x - 2)$. N'oublie pas le $a$ devant !

<Video id="eKrZK1Iisc8" titre="Factoriser un trinôme" chaine="Yvan Monka" />

### Le signe d'un trinôme

::: propriete Signe de $ax^2 + bx + c$
Le trinôme est **du signe de $a$**, sauf **entre les racines** (quand il y en a deux), où il est du signe contraire.

| | Signe |
|---|---|
| $\Delta < 0$ | signe de $a$ partout |
| $\Delta = 0$ | signe de $a$ partout, et 0 en $x_0$ |
| $\Delta > 0$ | signe de $a$ à l'extérieur de $[x_1 \,;\, x_2]$, signe contraire entre $x_1$ et $x_2$ |
:::

Avec le jet d'eau ($a < 0$) : la hauteur est **positive entre** les deux points où l'eau touche le sol,
et elle serait négative à l'extérieur (sous le sol). Signe contraire de $a$ entre les racines : ça colle.

::: essai
Résous l'inéquation $-x^2 + x + 6 > 0$.
:::

::: details Voir le corrigé
$a = -1$, $b = 1$, $c = 6$. $\Delta = 1 - 4 \times (-1) \times 6 = 1 + 24 = 25$, $\sqrt{25} = 5$.

$$
x_1 = \frac{-1 - 5}{2 \times (-1)} = \frac{-6}{-2} = 3 \qquad x_2 = \frac{-1 + 5}{-2} = -2
$$

$a = -1 < 0$ : le trinôme est **négatif à l'extérieur** des racines, **positif entre** $-2$ et $3$.

| $x$ | $-\infty$ | | $-2$ | | $3$ | | $+\infty$ |
|---|---|---|---|---|---|---|---|
| $-x^2 + x + 6$ | | $-$ | $0$ | $+$ | $0$ | $-$ | |

**Résultat : $S = \left]-2 \,;\, 3\right[$** (crochets ouverts, car on veut $> 0$ strictement).
Vérification avec $x = 0$, qui est entre les racines : $0 + 0 + 6 = 6 > 0$ ✓.
:::

<Video id="AEL4qKKNvp8" titre="Résoudre une inéquation du second degré" chaine="Yvan Monka" />

### Somme et produit des racines

::: propriete Somme et produit
Si le trinôme a deux racines $x_1$ et $x_2$ :

$$
x_1 + x_2 = -\frac{b}{a} \qquad \text{et} \qquad x_1 \times x_2 = \frac{c}{a}
$$
:::

::: demonstration
$a(x - x_1)(x - x_2) = ax^2 - a(x_1 + x_2)x + a\,x_1x_2$. On identifie avec $ax^2 + bx + c$ :
$b = -a(x_1 + x_2)$ et $c = a\,x_1 x_2$. On divise par $a$.
:::

C'est très pratique quand on connaît **une racine évidente** (souvent 1 ou $-1$) : le produit donne l'autre
sans calculer $\Delta$. Exemple : $3x^2 - 5x + 2 = 0$. On essaie $x = 1$ : $3 - 5 + 2 = 0$ ✓.
Le produit vaut $\dfrac{c}{a} = \dfrac{2}{3}$, donc l'autre racine est $x = \dfrac{2}{3}$.

### Fiche méthode

::: methode Comment résoudre $ax^2 + bx + c = 0$ vite et sans erreur
1. **Tout d'un côté** : ramène l'équation à « … $= 0$ », développée et réduite.
2. **Regarde avant de calculer** : il y a un raccourci quand…
   - il n'y a pas de $c$ ($x^2 - 5x = 0$) : factorise par $x$, produit nul ;
   - il n'y a pas de $b$ ($x^2 = 9$) : $x = 3$ ou $x = -3$ ;
   - tu reconnais une identité remarquable, ou une racine évidente (1, $-1$, 2…).
3. **Sinon, le discriminant** : écris $a$, $b$, $c$ **avec leurs signes**, calcule $\Delta = b^2 - 4ac$.
4. **Conclus selon le signe de $\Delta$**, avec les formules, jusqu'à « $x = $ valeur ».
5. **Vérifie** une solution en la remplaçant dans l'équation.
:::

::: methode Quelle forme pour quelle question ?
- Le sommet, le maximum, le minimum, les variations → **forme canonique**.
- Les racines, le signe, une inéquation → **forme factorisée** (ou $\Delta$ pour l'obtenir).
- L'image de 0, la dérivée (chapitre suivant) → **forme développée**.
:::

### Les erreurs fréquentes

::: erreur Le carré d'un nombre négatif
❌ $b = -3$, donc $b^2 = -9$.

✅ $b^2 = (-3)^2 = 9$. Un carré n'est jamais négatif. Sur la calculatrice, tape bien les parenthèses : `(-3)²`.
:::

::: erreur Le signe de $-4ac$
❌ $a = 2$, $c = -6$ : $\Delta = 1 - 48$.

✅ $-4 \times 2 \times (-6) = +48$, donc $\Delta = 1 + 48 = 49$. Quand $a$ et $c$ sont de signes contraires, $\Delta$ est forcément positif.
:::

::: erreur Oublier le « 2a » en entier
❌ $x = -b \pm \dfrac{\sqrt{\Delta}}{2a}$.

✅ La barre de fraction est sous **tout** le numérateur : $x = \dfrac{-b \pm \sqrt{\Delta}}{2a}$.
:::

::: erreur Oublier le $a$ dans la forme factorisée
❌ $2x^2 - x - 6 = \left(x + \dfrac{3}{2}\right)(x - 2)$.

✅ Développe pour voir : on trouve $x^2 - \dfrac{x}{2} - 3$, la moitié. Il faut $2\left(x + \dfrac{3}{2}\right)(x - 2)$.
:::

::: erreur Le signe d'un trinôme sans regarder $a$
❌ « Un trinôme est toujours positif entre ses racines. »

✅ Ça dépend de $a$. $x^2 - 1$ ($a > 0$) est **négatif** entre $-1$ et $1$ ; $-x^2 + 1$ ($a < 0$) y est **positif**.
:::

::: source
Définitions, propriétés et démonstrations : [Yvan Monka, Maths et tiques, « Second degré » partie 2 (PDF)](https://www.maths-et-tiques.fr/telech/19SecdegP2M.pdf), conformes au programme de spécialité maths de Première.
Toutes les solutions de cette page ont été vérifiées en les remplaçant dans l'équation.
:::

<FinPartie lecon="maths/premiere/second-degre/second-degre" :numero="2" :total="3" />

## Partie 3 : s'en servir

### À quoi ça sert ?

::: application BTS : la puissance maximale d'une source (adaptation de charge)
Une source réelle (pile, batterie) a une force électromotrice $E$
et une résistance interne $r$. Quand elle débite un courant $I$, la tension à ses bornes est $U = E - rI$,
donc la puissance qu'elle fournit au circuit est

$$
P(I) = U \times I = EI - rI^2
$$

C'est un trinôme en $I$, avec $a = -r < 0$ : un **maximum**, comme le jet d'eau. Il est atteint en
$I = -\dfrac{E}{2 \times (-r)} = \dfrac{E}{2r}$, et vaut $P_{\max} = \dfrac{E^2}{4r}$.

Avec $E = 12$ V et $r = 2\ \Omega$ : $I = 3$ A et $P_{\max} = 36 - 18 = 18$ W.
C'est l'**adaptation de charge** : la source donne le plus de puissance quand la charge vaut $R = r$
(ici $U = 12 - 6 = 6$ V et $R = \dfrac{U}{I} = 2\ \Omega$).
:::

::: application Domotique : la chute de tension dans un câble
Une source de tension $U_0$ alimente un appareil à travers une ligne de résistance $R_\ell$. Le courant $I$ provoque
une chute de tension $R_\ell I$, et la puissance reçue par l'appareil est $P = (U_0 - R_\ell I)\,I = U_0 I - R_\ell I^2$ :
encore un trinôme en $I$. Savoir si l'appareil peut recevoir une puissance donnée revient à résoudre
$U_0 I - R_\ell I^2 = P$ : si $\Delta < 0$, c'est impossible avec ce câble, il faut une section plus grosse.
:::

::: application La suite du programme
Le second degré revient partout : la dérivée d'un polynôme de degré 3 est un trinôme (on étudie son signe
pour trouver les variations), et les équations différentielles du second ordre (prépa ATS, circuits RLC)
se résolvent avec une « équation caractéristique » du second degré.
:::

::: source
Modèle de la source réelle ($U = E - rI$) et puissance $P = UI$ : programme de physique-chimie de Première (énergie électrique) et cours d'électricité de BTS.
Équation caractéristique d'une équation différentielle d'ordre 2 : programme de prépa ATS.
:::

### Les vidéos

<Video id="WVYWdN13kPE" titre="Second degré, chapitre 1 : forme canonique et parabole, tout le cours" chaine="Yvan Monka" />

<Video id="youUIZ-wsYk" titre="Résoudre une équation du second degré" chaine="Yvan Monka" />

::: verifier À VÉRIFIER par Arthur
Ces 5 vidéos viennent des liens donnés par Yvan Monka dans ses cours PDF (Maths et tiques). Je n'ai pas
pu vérifier leur titre exact sur YouTube : les titres affichés ici sont les miens. Ouvre-les une fois pour
vérifier que ce sont bien les bonnes. Je ne peux pas regarder les vidéos.
:::

### Exercices

Les exercices interactifs (nombres tirés au hasard, encadré de réponse, indices puis corrigé) sont sur
une page à part : **[exercices sur le second degré](./exercices-second-degre)**. Tu y trouveras aussi
les liens vers les 24 exercices corrigés de ParaMaths, rangés par notion.

### Le résumé

Une page à imprimer ou à garder en PDF : **[voir le résumé imprimable](./second-degre-resume)**.

<FinPartie lecon="maths/premiere/second-degre/second-degre" :numero="3" :total="3" />
