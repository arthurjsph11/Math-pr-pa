---
title: Résoudre une équation du premier degré
lecon:
  statut: brouillon
  niveau: Bases
  duree: 30
  bts: true
  prerequis:
    - texte: Calculer avec les nombres relatifs (règle des signes)
    - texte: Les priorités opératoires
    - texte: Développer avec la distributivité, k(a + b) = ka + kb
---

# Résoudre une équation du premier degré

Une équation, c'est une question : « quel nombre rend cette égalité vraie ? ».
Dans cette leçon, tu vas voir qu'on y répond avec **deux règles seulement**, et
qu'on les comprend avec un objet que tout le monde connaît : une balance.

## Partie 1 : comprendre avec une balance

### L'image : la balance à deux plateaux

Pense à une vieille balance de marché, avec deux plateaux. On pose des objets à
gauche, des poids à droite. Quand le fléau (la barre du haut) est bien horizontal,
c'est que **les deux plateaux portent exactement la même masse**.

Maintenant, imagine qu'à gauche on a posé **3 sacs de farine identiques** et
**2 poids de 1 kg**. À droite, il faut **14 poids de 1 kg** pour équilibrer.
Combien pèse un sac ?

Tu ne peux pas ouvrir les sacs. Mais tu peux toucher à la balance, à une condition :
**ne jamais casser l'équilibre**.

1. On enlève 1 kg à gauche **et** 1 kg à droite. Deux fois. L'équilibre tient
   toujours, puisqu'on a enlevé la même masse des deux côtés.
   Il reste : 3 sacs à gauche, 12 kg à droite.
2. 3 sacs identiques pèsent autant que 12 kg. On partage chaque plateau en
   3 parts égales et on garde une part de chaque côté : 1 sac à gauche, 4 kg à droite.
   L'équilibre tient encore.
3. Conclusion : **un sac pèse 4 kg**.

::: memo
**Une équation, c'est une balance en équilibre.
Ce que je fais à un plateau, je le fais à l'autre.**
:::

### De la balance aux maths

Si on appelle $x$ la masse d'un sac (en kg), la balance de départ s'écrit :

$$
3x + 2 = 14
$$

Chaque geste sur la balance a son équivalent en maths :

| Sur la balance | En maths |
|---|---|
| Le plateau de gauche, le plateau de droite | Le **membre de gauche**, le **membre de droite** |
| Le fléau horizontal (équilibre) | Le signe $=$ |
| La masse inconnue d'un sac | L'**inconnue** $x$ |
| Enlever 2 kg de chaque côté | Soustraire 2 aux deux membres : $3x = 12$ |
| Partager chaque plateau en 3 | Diviser les deux membres par 3 : $x = 4$ |
| Remettre 4 kg à la place de chaque sac et voir que ça s'équilibre | **Vérifier** : $3 \times 4 + 2 = 14$ ✓ |

Résoudre une équation, c'est donc faire des gestes qui **gardent l'équilibre**
jusqu'à ce que $x$ se retrouve **tout seul** d'un côté.

### À toi de jouer

Essaie les boutons. Commence par **« Enlever 1 kg à gauche seulement »** pour voir
ce qui se passe quand on ne respecte pas la règle, puis « Recommencer » et résous
la balance correctement. « Nouvelle balance » tire des nombres au hasard.

<Balance />

### Là où l'image s'arrête

La balance est parfaite pour comprendre, mais elle a une limite : une vraie balance
ne connaît pas les masses négatives, et on ne peut pas y poser « −3 kg ».
En maths, les deux règles marchent **avec tous les nombres**, y compris les négatifs
et les fractions. C'est ce qu'on démontre dans la partie 2.

::: source
Principe des deux règles (ajouter, soustraire, multiplier ou diviser les deux membres
par un même nombre) : [Yvan Monka, Maths et tiques, cours « Équations, inéquations » (PDF)](https://www.maths-et-tiques.fr/telech/19Equations_InequationsM.pdf) ;
[Khan Academy, « Une équation dans laquelle l'inconnue est dans les deux membres »](https://fr.khanacademy.org/math/cycle-4-v2/xd933de08ca5f2cb4:nombres-et-calculs-les-equations-du-premier-degre-a-une-inconnue/xd933de08ca5f2cb4:equations-ou-l-inconnue-est-dans-les-deux-membres/v/why-we-do-the-same-thing-to-both-sides-multi-step-equations).
Fonctionnement de la balance : une balance à bras égaux est en équilibre quand les
masses des deux plateaux sont égales.
:::

<FinPartie lecon="maths/bloc-0/equations/equation-premier-degre" :numero="1" :total="3" />

## Partie 2 : le cours

### Les mots à connaître

::: definition Équation, solution
Une **équation d'inconnue $x$** est une égalité dans laquelle apparaît un nombre
inconnu, noté $x$.

Une **solution** de l'équation est une valeur de $x$ qui rend l'égalité vraie.

**Résoudre** l'équation, c'est trouver **toutes** ses solutions.
:::

Exemple : pour l'équation $2x + 1 = 7$,

- $x = 3$ est une solution, car $2 \times 3 + 1 = 7$ ✓ ;
- $x = 2$ n'est pas une solution, car $2 \times 2 + 1 = 5$ et $5 \neq 7$.

::: definition Équation du premier degré
Une équation est **du premier degré** quand on peut l'écrire sous la forme

$$
ax + b = 0
$$

où $a$ et $b$ sont des nombres réels, avec $a \neq 0$.

Autrement dit : $x$ apparaît seulement « tout seul », jamais au carré ($x^2$),
jamais au dénominateur ($\frac{1}{x}$).
:::

Par exemple $3x + 2 = 14$ est du premier degré : elle s'écrit $3x - 12 = 0$
(on a enlevé 14 des deux côtés), avec $a = 3$ et $b = -12$.

### Les deux règles

::: propriete Règle 1 : ajouter ou soustraire
On peut **ajouter** ou **soustraire** un même nombre aux deux membres d'une équation.
On obtient une équation qui a **exactement les mêmes solutions**.
:::

::: propriete Règle 2 : multiplier ou diviser
On peut **multiplier** ou **diviser** les deux membres d'une équation par un même
nombre **non nul**. On obtient une équation qui a **exactement les mêmes solutions**.
:::

::: demonstration Pourquoi la règle 1 marche
Appelons $A$ le membre de gauche et $B$ celui de droite, et prenons un nombre $c$.

- Si un nombre $x$ rend vraie l'égalité $A = B$, alors $A$ et $B$ sont le même
  nombre. En leur ajoutant $c$ à tous les deux, on obtient encore le même nombre :
  $A + c = B + c$. Donc $x$ est aussi solution de la nouvelle équation.
- Inversement, si $A + c = B + c$, on soustrait $c$ des deux côtés et on retrouve $A = B$.

Les deux équations ont donc **les mêmes solutions** : on n'en perd aucune et on n'en
ajoute aucune. Soustraire $c$, c'est ajouter $-c$ : la règle marche aussi pour la
soustraction.
:::

::: demonstration Pourquoi la règle 2 marche, et pourquoi « non nul »
Même raisonnement avec un nombre $k \neq 0$ : si $A = B$ alors $kA = kB$ ;
et inversement, si $kA = kB$, on divise par $k$ et on retrouve $A = B$.

Pour revenir en arrière, il faut **diviser par $k$**, ce qui est impossible si $k = 0$.
Et multiplier par 0 casse tout. Exemple : l'équation $x + 1 = 3$ a une seule
solution, $x = 2$. Si on multiplie les deux membres par 0, on obtient $0 = 0$,
qui est vrai **pour tous les $x$**. On a fabriqué de fausses solutions.
:::

### La formule

::: propriete Solution de ax + b = 0
Si $a \neq 0$, l'équation $ax + b = 0$ a **une seule solution** :

$$
x = -\frac{b}{a}
$$
:::

::: demonstration
$$
\begin{aligned}
ax + b &= 0 \\
ax &= -b && \text{(règle 1 : } -b \text{)} \\
x &= -\frac{b}{a} && \text{(règle 2 : } \div a \text{)}
\end{aligned}
$$

On a le droit de diviser par $a$ parce que $a \neq 0$. Chaque étape garde exactement
les mêmes solutions, donc la seule solution est $-\frac{b}{a}$.
:::

Et si $a = 0$ ? Alors l'équation devient $b = 0$, sans $x$. Ce n'est plus une équation
du premier degré. Deux cas :

- si $b = 0$, l'égalité $0 = 0$ est toujours vraie : **tous les nombres** sont solutions ;
- si $b \neq 0$, l'égalité est toujours fausse (par exemple $5 = 0$) : **aucune solution**.

::: source
Définitions, règles et formule : [Yvan Monka, Maths et tiques, cours « Équations, inéquations » (PDF)](https://www.maths-et-tiques.fr/telech/19Equations_InequationsM.pdf).
Place dans le programme : résolution des équations du premier degré,
[programme de mathématiques de Seconde, BO spécial n°1 du 22 janvier 2019](https://www.education.gouv.fr/pid285/bulletin_officiel.html?pid_bo=38502).
:::

### Exemple corrigé

::: essai
Résous $5x - 3 = 2x + 9$.
:::

::: details Voir le corrigé
$$
\begin{aligned}
5x - 3 &= 2x + 9 \\
5x - 3 - 2x &= 2x + 9 - 2x && (-2x) \\
3x - 3 &= 9 \\
3x - 3 + 3 &= 9 + 3 && (+3) \\
3x &= 12 \\
x &= \frac{12}{3} = 4 && (\div 3)
\end{aligned}
$$

**Résultat : $x = 4$.** On écrit aussi $S = \{4\}$.
:::

::: details Vérifier mon résultat
À gauche $5 \times 4 - 3 = 17$, à droite $2 \times 4 + 9 = 17$. ✓
:::

<Video id="WoTpA2RyuVU" titre="LE COURS : Les équations - Troisième - Seconde" chaine="Yvan Monka" vedette />

### Fiche méthode

::: methode Comment faire pour résoudre une équation du premier degré
1. **Développer et réduire** chaque membre s'il y a des parenthèses.
2. **Regrouper les $x$ d'un côté** : on soustrait (ou on ajoute) le même terme en $x$ aux deux membres.
3. **Regrouper les nombres de l'autre côté**, avec la même règle.
4. **Diviser** les deux membres par le nombre devant $x$.
5. **Conclure** par un résultat bien visible : $x = \ldots$
6. Si tu veux être sûr : **vérifier** en remplaçant $x$ par la valeur trouvée dans l'équation de départ.
:::

Tu entendras souvent « on fait **passer** le 3 de l'autre côté en changeant le signe ».
C'est un raccourci de la règle 1, et il ne marche que pour un **terme ajouté ou soustrait**.
Un nombre qui **multiplie** $x$ ne « passe » pas en changeant de signe : on **divise** par lui.

### Les erreurs fréquentes

::: erreur Soustraire au lieu de diviser
❌ $3x = 12$ donc $x = 12 - 3 = 9$.

✅ $3x$ veut dire $3 \times x$ : on **divise** par 3, donc $x = \frac{12}{3} = 4$.
La vérification l'aurait montré : $3 \times 9 = 27 \neq 12$.
:::

::: erreur Perdre le signe moins
❌ $-2x = 6$ donc $x = \frac{6}{2} = 3$.

✅ On divise par $-2$ (avec son signe) : $x = \frac{6}{-2} = -3$.
Vérification : $-2 \times (-3) = 6$ ✓.
:::

::: erreur Diviser un seul terme
❌ $2x + 4 = 10$ donc $x + 4 = 5$.

✅ On divise **tous** les termes : $x + 2 = 5$, donc $x = 3$.
Ou plus simple : on enlève 4 d'abord ($2x = 6$), puis on divise ($x = 3$).
:::

::: erreur Oublier la distributivité
❌ $2(x + 3) = 2x + 3$.

✅ Le 2 multiplie **tout** ce qu'il y a dans la parenthèse : $2(x + 3) = 2x + 6$.
:::

::: erreur Changer de côté sans changer le signe
❌ $x + 5 = 8$ donc $x = 8 + 5 = 13$.

✅ On enlève 5 des deux côtés : $x = 8 - 5 = 3$.
:::

::: source
Méthode et erreurs fréquentes : [Yvan Monka, Maths et tiques (PDF)](https://www.maths-et-tiques.fr/telech/19Equations_InequationsM.pdf).
Tous les calculs de cette partie ont été vérifiés en remplaçant la solution dans l'équation.
:::

<FinPartie lecon="maths/bloc-0/equations/equation-premier-degre" :numero="2" :total="3" />

## Partie 3 : s'en servir

### À quoi ça sert ?

::: application Choisir la résistance d'un voyant LED (BTS)
En domotique, on ajoute souvent un voyant LED sur un module alimenté en 5 V. Une LED
ne se branche jamais seule : on met une **résistance en série** pour limiter le courant.

Prenons une LED rouge dont la fiche technique donne **2 V** à ses bornes pour un
courant de **20 mA**, soit $0{,}020$ A. Ces valeurs sont typiques, mais il faut
toujours lire la fiche technique de la LED utilisée.

- **Loi des mailles** : la tension d'alimentation se partage entre la LED et la résistance,
  donc $5 = 2 + U_R$.
- **Loi d'Ohm** : $U_R = R \times I$.

On obtient une équation du premier degré d'inconnue $R$ :

$$
\begin{aligned}
5 &= 2 + 0{,}020\,R \\
3 &= 0{,}020\,R && (-2) \\
R &= \frac{3}{0{,}020} = 150\ \Omega && (\div 0{,}020)
\end{aligned}
$$

Vérification : $2 + 0{,}020 \times 150 = 2 + 3 = 5$ ✓. Il faut une résistance de 150 Ω.
:::

::: application Lire sa facture d'électricité
Un fournisseur facture un abonnement de 15 € par mois, plus 0,25 € par kWh consommé
(prix inventés pour l'exemple). Ce mois-ci, la facture est de 60 €.
Combien de kWh as-tu consommés ? Si $E$ est l'énergie en kWh :

$$
\begin{aligned}
0{,}25\,E + 15 &= 60 \\
0{,}25\,E &= 45 && (-15) \\
E &= \frac{45}{0{,}25} = 180\ \text{kWh} && (\div 0{,}25)
\end{aligned}
$$

Vérification : $0{,}25 \times 180 + 15 = 45 + 15 = 60$ ✓.
C'est le genre de calcul qu'un tableau de bord domotique fait pour suivre la consommation.
:::

::: source
Loi d'Ohm et loi des mailles : programme de physique-chimie de Seconde,
[BO spécial n°1 du 22 janvier 2019](https://www.education.gouv.fr/pid285/bulletin_officiel.html?pid_bo=38502).
Valeurs de la LED : ordres de grandeur typiques d'une LED rouge, à remplacer par ceux de la fiche technique.
:::

### Les vidéos

La vidéo du cours est placée plus haut, juste après l'exemple corrigé. Deux autres pour voir d'autres façons d'expliquer :

<Video id="quzC5C3a9jM" titre="Résoudre une équation (1) - Troisième" chaine="Yvan Monka" />

<Video id="AG6K2_JNk9U" titre="Équation du premier degré : comment les résoudre et ce qu'il faut savoir" chaine="jaicompris Maths" />

::: verifier À VÉRIFIER par Arthur
J'ai vérifié que ces trois vidéos existent, ainsi que leur titre et leur chaîne.
Je ne peux pas les regarder moi-même : dis-moi si l'une d'elles ne correspond pas à la leçon.
:::

### Exercices

Les exercices interactifs (correction automatique, nombres au hasard, carnet d'erreurs)
arrivent à l'étape 4. En attendant, ouvre l'**indice** avant le **corrigé**.

#### Niveau 1 : application

**Exercice 1.** Résoudre $x + 7 = 12$.

::: details Indice
Quel nombre faut-il enlever des deux côtés pour que $x$ soit tout seul ?
:::

::: details Corrigé
On enlève 7 des deux côtés : $x = 12 - 7 = 5$. Vérification : $5 + 7 = 12$ ✓.
:::

**Exercice 2.** Résoudre $4x = 28$.

::: details Indice
$4x$ veut dire $4 \times x$. On ne soustrait pas 4 : on…
:::

::: details Corrigé
On divise par 4 des deux côtés : $x = \frac{28}{4} = 7$. Vérification : $4 \times 7 = 28$ ✓.
:::

**Exercice 3.** Résoudre $3x - 5 = 10$.

::: details Indice
D'abord les nombres (on ajoute 5), ensuite la division.
:::

::: details Corrigé
$3x = 15$ (on ajoute 5), puis $x = \frac{15}{3} = 5$. Vérification : $3 \times 5 - 5 = 10$ ✓.
:::

#### Niveau 2 : entraînement

**Exercice 4.** Résoudre $7x + 2 = 3x - 10$.

::: details Indice
Enlève $3x$ des deux côtés pour regrouper les $x$ à gauche.
:::

::: details Corrigé
$4x + 2 = -10$, puis $4x = -12$, donc $x = \frac{-12}{4} = -3$.
Vérification : à gauche $7 \times (-3) + 2 = -19$, à droite $3 \times (-3) - 10 = -19$ ✓.
:::

**Exercice 5.** Résoudre $2(x - 4) = 5x + 1$.

::: details Indice
Commence par développer : $2(x - 4) = 2x - 8$.
:::

::: details Corrigé
$2x - 8 = 5x + 1$. On enlève $5x$ : $-3x - 8 = 1$. On ajoute 8 : $-3x = 9$.
On divise par $-3$ : $x = -3$.
Vérification : à gauche $2 \times (-3 - 4) = -14$, à droite $5 \times (-3) + 1 = -14$ ✓.
:::

**Exercice 6.** Résoudre $\dfrac{x}{3} + 2 = 6$.

::: details Indice
$\dfrac{x}{3}$ c'est « $x$ divisé par 3 ». Pour s'en débarrasser, on multiplie par 3.
:::

::: details Corrigé
$\dfrac{x}{3} = 4$ (on enlève 2), puis $x = 4 \times 3 = 12$ (on multiplie par 3).
Vérification : $\dfrac{12}{3} + 2 = 4 + 2 = 6$ ✓.
:::

#### Niveau 3 : approfondissement

**Exercice 7 (BTS).** Une LED doit être alimentée en 9 V. Sa fiche technique indique
2,1 V à ses bornes pour un courant de 15 mA. Quelle résistance mettre en série ?

::: details Indice
Même raisonnement que dans « À quoi ça sert ? » : $9 = 2{,}1 + R \times 0{,}015$.
:::

::: details Corrigé
$0{,}015\,R = 9 - 2{,}1 = 6{,}9$, donc $R = \dfrac{6{,}9}{0{,}015} = 460\ \Omega$.
Vérification : $2{,}1 + 0{,}015 \times 460 = 2{,}1 + 6{,}9 = 9$ ✓.

En pratique, on prend la valeur normalisée juste au-dessus, **470 Ω** : le courant est
alors un peu plus faible ($\frac{6{,}9}{470} \approx 0{,}0147$ A, soit environ 14,7 mA),
ce qui protège la LED.
:::

**Exercice 8.** Résoudre $3(x + 2) = 3x + 5$, puis $2(x + 3) = 2x + 6$. Que remarques-tu ?

::: details Indice
Développe, puis enlève $3x$ (ou $2x$) des deux côtés. Que reste-t-il ?
:::

::: details Corrigé
- $3x + 6 = 3x + 5$ donne $6 = 5$ : c'est faux quel que soit $x$. **Aucune solution.**
- $2x + 6 = 2x + 6$ donne $6 = 6$ : c'est vrai quel que soit $x$. **Tous les nombres sont solutions.**

Dans les deux cas, les $x$ disparaissent : ce ne sont pas de vraies équations du
premier degré (c'est le cas $a = 0$ vu dans le cours).
:::

### Le résumé

Une page à imprimer ou à garder en PDF : **[voir le résumé imprimable](./equation-premier-degre-resume)**.

<FinPartie lecon="maths/bloc-0/equations/equation-premier-degre" :numero="3" :total="3" />
