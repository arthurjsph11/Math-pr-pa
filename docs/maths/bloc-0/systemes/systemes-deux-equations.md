---
title: Systèmes de deux équations à deux inconnues
lecon:
  statut: brouillon
  niveau: Avancé
  duree: 30
  bts: true
  prerequis:
    - texte: Résoudre une équation du premier degré
      lien: /maths/bloc-0/equations/equation-premier-degre
    - texte: Isoler une variable dans une formule
      lien: /maths/bloc-0/formules/isoler-une-variable
---

# Systèmes de deux équations à deux inconnues

Parfois, il y a **deux** nombres inconnus. Une seule équation ne suffit pas pour les trouver,
mais **deux** équations, oui. On va voir les deux méthodes pour les résoudre, et toutes les
deux viennent d'un simple ticket de caisse.

## Partie 1 : comprendre avec deux tickets de caisse

### L'image : la boulangerie

Lundi, tu achètes **2 croissants et 1 café** : tu paies **4,30 €**.
Mardi, tu achètes **1 croissant et 1 café** : tu paies **3,10 €**.
Les prix n'ont pas changé. Combien coûte un croissant ?

Pose les deux tickets l'un sous l'autre. Lundi, tu as pris **exactement un croissant de plus**
que mardi, et c'est tout ce qui change. La différence de prix, $4{,}30 - 3{,}10 = 1{,}20$ €,
c'est donc le prix d'**un croissant**.

Ensuite, mardi : 1 croissant + 1 café = 3,10 €, donc le café coûte $3{,}10 - 1{,}20 = 1{,}90$ €.

::: memo
**Deux tickets de caisse, on les soustrait : ce qui est pareil disparaît, il reste ce qui change.**
:::

### Des tickets aux maths

Appelons $c$ le prix d'un croissant et $k$ le prix d'un café :

$$
\begin{cases}
2c + k = 4{,}30 \\
c + k = 3{,}10
\end{cases}
$$

| Avec les tickets | En maths |
|---|---|
| Les deux prix inconnus | Les deux **inconnues** $c$ et $k$ |
| Les deux tickets | Les deux **équations** du système |
| Poser un ticket sous l'autre et faire la différence | Soustraire les équations : la méthode par **combinaison** |
| Le café disparaît de la différence | L'inconnue $k$ est **éliminée** |
| Retrouver le café avec le ticket de mardi | Remplacer $c$ dans une équation : la **substitution** |

### Là où l'image s'arrête

Ici, on avait de la chance : il y avait le même nombre de cafés sur les deux tickets. Sinon,
on **multiplie** un ticket avant de soustraire (comme si on avait acheté deux fois la même
chose). C'est ce qu'on fait dans la partie 2.

::: source
Systèmes de deux équations : [Yvan Monka, Maths et tiques, cours « Systèmes d'équations et droites » de Seconde (PDF)](https://www.maths-et-tiques.fr/telech/19Droites_SystemesM.pdf).
:::

<FinPartie lecon="maths/bloc-0/systemes/systemes-deux-equations" :numero="1" :total="3" />

## Partie 2 : le cours

::: definition Système de deux équations
Un **système de deux équations du premier degré à deux inconnues** s'écrit

$$
\begin{cases}
ax + by = c \\
a'x + b'y = c'
\end{cases}
$$

Une **solution** est un couple $(x \,;\, y)$ qui vérifie **les deux équations à la fois**.
:::

### Méthode 1 : la substitution

On isole une inconnue dans une équation, puis on la **remplace** dans l'autre.

::: essai
Résous par substitution : $\begin{cases} x + 2y = 7 \\ 3x - y = 7 \end{cases}$
:::

::: details Voir le corrigé
Dans la première équation, on isole $x$ : $x = 7 - 2y$. On remplace dans la seconde :

$$
\begin{aligned}
3(7 - 2y) - y &= 7 \\
21 - 6y - y &= 7 \\
-7y &= -14 \\
y &= 2
\end{aligned}
$$

Puis $x = 7 - 2 \times 2 = 3$.

**Résultat : $x = 3$ et $y = 2$**, le couple $(3 \,;\, 2)$.
:::

::: details Vérifier mon résultat
Première équation : $3 + 2 \times 2 = 7$ ✓. Seconde : $3 \times 3 - 2 = 7$ ✓.
:::

### Méthode 2 : la combinaison

On multiplie les équations pour qu'une inconnue ait des coefficients **opposés** (ou égaux),
puis on additionne (ou soustrait) pour l'**éliminer**.

::: essai
Résous par combinaison : $\begin{cases} 2x + 3y = 12 \\ 5x - 2y = 11 \end{cases}$
:::

::: details Voir le corrigé
On veut éliminer $y$ : on multiplie la première équation par 2 et la seconde par 3,
pour avoir $+6y$ et $-6y$.

$$
\begin{cases}
4x + 6y = 24 \\
15x - 6y = 33
\end{cases}
$$

On additionne les deux : $19x = 57$, donc $x = 3$.

On remplace dans la première équation de départ : $2 \times 3 + 3y = 12$, donc $3y = 6$, donc $y = 2$.

**Résultat : $x = 3$ et $y = 2$.**
:::

::: details Vérifier mon résultat
$2 \times 3 + 3 \times 2 = 12$ ✓ et $5 \times 3 - 2 \times 2 = 11$ ✓.
:::

### Ce que ça veut dire sur un graphique

Chaque équation $ax + by = c$ (avec $b \neq 0$) peut s'écrire $y = \ldots$ : c'est une **droite**.
La solution du système est le **point d'intersection** des deux droites.

::: propriete Nombre de solutions
- Deux droites qui se coupent : **une seule solution**.
- Deux droites parallèles distinctes : **aucune solution**.
- Deux droites confondues (la même droite) : **une infinité de solutions**.
:::

<Video id="sWaHnxqUve0" titre="Systèmes d'équations (Seconde)" chaine="Yvan Monka" vedette />

### Fiche méthode

::: methode Comment résoudre un système
1. **Une inconnue a déjà un coefficient 1 ou −1 ?** Substitution : isole-la, remplace dans l'autre équation.
2. **Sinon**, combinaison : multiplie les équations pour avoir des coefficients opposés, puis additionne.
3. Trouve la première inconnue, jusqu'à « $x =$ valeur ».
4. Remplace dans une des équations de départ pour trouver la seconde.
5. **Vérifie dans les deux équations** : une solution qui ne marche que dans une seule est fausse.
:::

### Les erreurs fréquentes

::: erreur Ne vérifier qu'une équation
❌ « $(1 \,;\, 3)$ vérifie $x + 2y = 7$, c'est la solution de $\begin{cases} x + 2y = 7 \\ 3x - y = 7 \end{cases}$. »

✅ Il faut vérifier les **deux** : $3 \times 1 - 3 = 0 \neq 7$. Ce n'est pas la solution.
:::

::: erreur Ne multiplier qu'un côté de l'équation
❌ Multiplier $2x + 3y = 12$ par 2 donne $4x + 6y = 12$.

✅ On multiplie **les deux membres** : $4x + 6y = 24$.
:::

::: erreur Oublier de distribuer en substituant
❌ $3(7 - 2y) - y = 21 - 2y - y$.

✅ Le 3 multiplie tout : $21 - 6y - y$.
:::

::: source
Méthodes et erreurs : [Yvan Monka, Maths et tiques (PDF)](https://www.maths-et-tiques.fr/telech/19Droites_SystemesM.pdf).
Toutes les solutions ont été vérifiées dans les deux équations.
:::

<FinPartie lecon="maths/bloc-0/systemes/systemes-deux-equations" :numero="2" :total="3" />

## Partie 3 : s'en servir

### À quoi ça sert ?

::: application Deux courants en parallèle (BTS)
Deux résistances de 100 Ω et 50 Ω sont branchées en parallèle. Le courant total vaut 0,3 A.
Quels sont les courants $I_1$ et $I_2$ dans chaque résistance ?

- **Loi des nœuds** : $I_1 + I_2 = 0{,}3$.
- **Même tension** aux bornes des deux (elles sont en parallèle) : $100\,I_1 = 50\,I_2$, donc $I_2 = 2 I_1$.

On substitue : $I_1 + 2 I_1 = 0{,}3$, donc $3 I_1 = 0{,}3$, donc $I_1 = 0{,}1$ A et $I_2 = 0{,}2$ A.

Vérification : $0{,}1 + 0{,}2 = 0{,}3$ ✓ et $100 \times 0{,}1 = 10$ V $= 50 \times 0{,}2$ ✓.
Le courant passe plus facilement par la plus petite résistance.
:::

::: application Retrouver un tarif
Une facture d'électricité de 2 mois : janvier, 300 kWh pour 81 € ; février, 250 kWh pour 70 €.
Avec un abonnement $A$ et un prix $p$ par kWh : $300p + A = 81$ et $250p + A = 70$.
En soustrayant : $50p = 11$, donc $p = 0{,}22$ € et $A = 81 - 66 = 15$ €.
:::

::: source
Loi des nœuds et association en parallèle : cours de physique et de BTS électrotechnique.
:::

### Les vidéos

::: verifier À VÉRIFIER par Arthur
L'identifiant de la vidéo vient de la page de Seconde de Maths et tiques, mais je n'ai pas
pu vérifier son titre exact en ligne. Clique sur la miniature : si la vidéo ne parle pas
des systèmes, dis-le moi et je la change.
:::

### Exercices

#### Niveau 1 : application

**Exercice 1.** Le couple $(2 \,;\, -1)$ est-il solution de $\begin{cases} x + y = 1 \\ 2x - y = 5 \end{cases}$ ?

::: details Indice
Remplace dans **les deux** équations.
:::

::: details Corrigé
$2 + (-1) = 1$ ✓ et $4 - (-1) = 5$ ✓. **Oui**.
:::

**Exercice 2.** Résous $\begin{cases} x + y = 10 \\ x - y = 4 \end{cases}$.

::: details Indice
Additionne les deux équations : les $y$ disparaissent.
:::

::: details Corrigé
$2x = 14$, donc $x = 7$, puis $y = 3$. Vérification : $7 - 3 = 4$ ✓.
:::

**Exercice 3.** Résous $\begin{cases} y = 2x \\ x + y = 9 \end{cases}$.

::: details Indice
$y$ est déjà isolé : remplace-le dans la seconde.
:::

::: details Corrigé
$x + 2x = 9$, donc $x = 3$ et $y = 6$.
:::

#### Niveau 2 : entraînement

**Exercice 4.** Résous $\begin{cases} 3x + y = 11 \\ x - 2y = -1 \end{cases}$.

::: details Indice
Isole $y$ dans la première : $y = 11 - 3x$.
:::

::: details Corrigé
$x - 2(11 - 3x) = -1$, donc $7x - 22 = -1$, donc $x = 3$, puis $y = 2$.
Vérification : $3 - 4 = -1$ ✓.
:::

**Exercice 5.** Résous $\begin{cases} 4x + 3y = 10 \\ 3x + 2y = 7 \end{cases}$.

::: details Indice
Multiplie la première par 2 et la seconde par 3 pour avoir $6y$ dans les deux, puis soustrais.
:::

::: details Corrigé
$8x + 6y = 20$ et $9x + 6y = 21$. En soustrayant : $x = 1$. Puis $4 + 3y = 10$, donc $y = 2$.
Vérification : $3 + 4 = 7$ ✓.
:::

**Exercice 6.** Au cinéma, 3 places adultes et 2 places enfants coûtent 42 €, et 2 adultes et 3 enfants coûtent 38 €. Trouve les deux prix.

::: details Indice
$3a + 2e = 42$ et $2a + 3e = 38$. Combinaison.
:::

::: details Corrigé
×3 et ×2 : $9a + 6e = 126$ et $4a + 6e = 76$. On soustrait : $5a = 50$, donc $a = 10$ €. Puis $2e = 12$, $e = 6$ €.
Vérification : $20 + 18 = 38$ ✓.
:::

#### Niveau 3 : approfondissement

**Exercice 7 (BTS).** Deux résistances de 60 Ω et 30 Ω en parallèle sont traversées par un courant
total de 0,6 A. Calcule $I_1$ (dans 60 Ω) et $I_2$ (dans 30 Ω).

::: details Indice
$I_1 + I_2 = 0{,}6$ et $60 I_1 = 30 I_2$.
:::

::: details Corrigé
$I_2 = 2 I_1$, donc $3 I_1 = 0{,}6$, $I_1 = 0{,}2$ A et $I_2 = 0{,}4$ A.
Vérification : $60 \times 0{,}2 = 12$ V $= 30 \times 0{,}4$ ✓.
:::

**Exercice 8.** Que se passe-t-il avec $\begin{cases} x + 2y = 3 \\ 2x + 4y = 5 \end{cases}$ ?

::: details Indice
Multiplie la première par 2 et compare avec la seconde.
:::

::: details Corrigé
La première ×2 donne $2x + 4y = 6$. Le même calcul ne peut pas valoir 6 et 5 : **aucune solution**.
Sur un graphique, ce sont deux droites parallèles.
:::

<FinPartie lecon="maths/bloc-0/systemes/systemes-deux-equations" :numero="3" :total="3" />
