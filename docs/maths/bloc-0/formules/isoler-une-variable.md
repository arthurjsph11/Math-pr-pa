---
title: Isoler une variable dans une formule
lecon:
  statut: brouillon
  niveau: Intermédiaire
  duree: 30
  bts: true
  prerequis:
    - texte: Résoudre une équation du premier degré
      lien: /maths/bloc-0/equations/equation-premier-degre
    - texte: Calculer avec les fractions
      lien: /maths/bloc-0/fractions/calculer-avec-les-fractions
    - texte: Racines carrées
      lien: /maths/bloc-0/calcul/racines-carrees
---

# Isoler une variable dans une formule

En électricité, tu connais $U = R \times I$. Mais souvent, c'est $R$ ou $I$ que tu
cherches. Plutôt que d'apprendre trois formules, tu vas apprendre à **retourner** une
formule toi-même. C'est exactement la même chose que résoudre une équation.

## Partie 1 : comprendre avec des chaussures

### L'image : s'habiller et se déshabiller

Le matin, tu mets d'abord tes **chaussettes**, puis tes **chaussures**. Le soir, pour
retrouver tes pieds nus, tu fais l'inverse **dans l'ordre inverse** : d'abord tu enlèves
les chaussures, ensuite les chaussettes. Personne n'enlève ses chaussettes en premier.

Une formule, c'est pareil. Dans $P = R \times I^2$, on part de $I$ et on l'« habille » :

1. on le met **au carré** (les chaussettes) ;
2. on **multiplie** par $R$ (les chaussures).

Pour retrouver $I$ tout seul, on déshabille dans l'ordre inverse :

1. on **divise** par $R$ : $\dfrac{P}{R} = I^2$ ;
2. on prend la **racine carrée** : $I = \sqrt{\dfrac{P}{R}}$.

::: memo
**Pour isoler une variable, on la déshabille : la dernière opération faite est la première défaite.**
:::

### Des chaussures aux maths

| En s'habillant | En maths |
|---|---|
| Les pieds nus | La variable qu'on cherche, toute seule |
| Chaque vêtement, mis dans l'ordre | Chaque opération appliquée à la variable, dans l'ordre des priorités |
| Le dernier vêtement mis | La dernière opération du calcul |
| Enlever un vêtement | Faire l'opération **inverse** des deux côtés |
| Retirer des chaussures | Diviser défait multiplier, soustraire défait ajouter |
| Retirer des chaussettes | La racine carrée défait le carré |

### Là où l'image s'arrête

Pour un vêtement, on ne se pose pas de question. En maths, il faut vérifier qu'on a le
droit de faire l'opération inverse : on ne divise jamais par 0, et on ne prend la racine
que d'un nombre positif.

::: source
Les opérations inverses sont les deux règles de résolution d'équation : [Yvan Monka, Maths et tiques, cours « Équations, inéquations » (PDF)](https://www.maths-et-tiques.fr/telech/19Equations_InequationsM.pdf).
:::

<FinPartie lecon="maths/bloc-0/formules/isoler-une-variable" :numero="1" :total="3" />

## Partie 2 : le cours

::: definition Formule, variable
Une **formule** est une égalité entre plusieurs grandeurs, comme $U = R \times I$.
**Isoler** une variable, c'est réécrire la formule pour que cette variable soit seule
d'un côté du signe égal, et qu'elle n'apparaisse pas de l'autre côté.
:::

::: propriete Les paires d'opérations inverses
| Opération faite sur la variable | On la défait par |
|---|---|
| ajouter $a$ | soustraire $a$ |
| soustraire $a$ | ajouter $a$ |
| multiplier par $a$ ($a \neq 0$) | diviser par $a$ |
| diviser par $a$ ($a \neq 0$) | multiplier par $a$ |
| mettre au carré (variable positive) | prendre la racine carrée |

On fait toujours l'opération inverse **des deux côtés** de l'égalité, comme pour une équation.
:::

::: essai
Dans $U = R \times I$, isole $I$.
:::

::: details Voir le corrigé
$I$ est multiplié par $R$. On divise les deux côtés par $R$ (une résistance n'est jamais nulle) :

$$
\begin{aligned}
U &= R \times I \\
\frac{U}{R} &= I && (\div R)
\end{aligned}
$$

**Résultat : $I = \dfrac{U}{R}$.**
:::

::: essai
Dans $v = \dfrac{d}{t}$ (vitesse = distance ÷ temps), isole $t$.
:::

::: details Voir le corrigé
$t$ est au dénominateur. On multiplie d'abord les deux côtés par $t$ pour le faire monter :

$$
\begin{aligned}
v &= \frac{d}{t} \\
v \times t &= d && (\times t) \\
t &= \frac{d}{v} && (\div v)
\end{aligned}
$$

**Résultat : $t = \dfrac{d}{v}$.**
:::

::: essai
Dans $P = R \times I^2$, isole $I$ (un courant positif).
:::

::: details Voir le corrigé
Ordre d'habillage de $I$ : au carré, puis × $R$. On déshabille à l'envers :

$$
\begin{aligned}
P &= R \times I^2 \\
\frac{P}{R} &= I^2 && (\div R) \\
I &= \sqrt{\frac{P}{R}} && (\sqrt{\ })
\end{aligned}
$$

**Résultat : $I = \sqrt{\dfrac{P}{R}}$.**
:::

<Video id="WoTpA2RyuVU" titre="LE COURS : Les équations - Troisième - Seconde" chaine="Yvan Monka" vedette />

### Le triangle magique, et pourquoi s'en méfier

Tu as peut-être appris le « triangle » U en haut, R et I en bas. Il marche pour $U = RI$,
mais pas pour $P = RI^2$ ni pour une formule avec une addition. La méthode des opérations
inverses marche **pour toutes les formules** : c'est elle qu'il faut retenir.

### Fiche méthode

::: methode Comment isoler une variable
1. **Entoure** la variable que tu cherches.
2. Écris dans l'ordre les opérations qu'elle subit (en suivant les priorités).
3. Défais-les **en commençant par la dernière**, en faisant l'opération inverse des deux côtés.
4. Écris le résultat sous la forme « variable = … ».
5. **Contrôle avec des nombres** : prends une situation que tu connais et vérifie que la nouvelle formule redonne la bonne valeur.
:::

### Les erreurs fréquentes

::: erreur Diviser seulement une partie de la formule
❌ $U = E - rI$ donc $I = \dfrac{U}{-r} + E$.

✅ $I$ est multiplié par $r$, puis soustrait de $E$. On défait d'abord la soustraction :
$rI = E - U$, puis la multiplication : $I = \dfrac{E - U}{r}$.
:::

::: erreur Inverser une fraction n'importe comment
❌ $v = \dfrac{d}{t}$ donc $t = \dfrac{v}{d}$.

✅ $t = \dfrac{d}{v}$. Contrôle : 100 km à 50 km/h, ça fait 2 h, et $\dfrac{100}{50} = 2$ ✓ alors que $\dfrac{50}{100} = 0{,}5$.
:::

::: erreur Oublier la racine carrée
❌ $P = RI^2$ donc $I = \dfrac{P}{R}$.

✅ Il reste $I^2 = \dfrac{P}{R}$ : il faut encore prendre la racine.
:::

::: source
Méthode : identique à la résolution d'équations, [Yvan Monka, Maths et tiques (PDF)](https://www.maths-et-tiques.fr/telech/19Equations_InequationsM.pdf).
Formules de physique ($U = RI$, $P = UI$, $P = RI^2$, $E = P\,t$, $v = \dfrac{d}{t}$) : programme de physique-chimie de Seconde et cours de BTS.
:::

<FinPartie lecon="maths/bloc-0/formules/isoler-une-variable" :numero="2" :total="3" />

## Partie 3 : s'en servir

### À quoi ça sert ?

::: application Choisir un disjoncteur (BTS)
Un radiateur électrique de puissance $P = 2\,000$ W est branché sur $U = 230$ V.
On veut le courant pour choisir la protection. Avec $P = U \times I$, on isole $I$ :

$$
I = \frac{P}{U} = \frac{2\,000}{230} \approx 8{,}7\ \text{A}
$$

Contrôle : $230 \times 8{,}7 \approx 2\,001$ W ✓. Le choix du disjoncteur dépend aussi de la
section des câbles et des normes (NF C 15-100) : ce calcul n'en est que la première étape.
:::

::: application Le temps de fonctionnement d'une batterie
Une batterie stocke $E = 120$ Wh et alimente un capteur de $P = 2$ W. Avec $E = P \times t$ :
$t = \dfrac{E}{P} = \dfrac{120}{2} = 60$ h.
:::

### Les vidéos

::: verifier À VÉRIFIER par Arthur
J'ai mis la vidéo de cours sur les équations (vérifiée), car isoler une variable utilise les mêmes règles.
Je n'ai pas encore de vidéo spécifique aux formules : je t'en proposerai une à la relecture.
:::

### Exercices

#### Niveau 1 : application

**Exercice 1.** Dans $U = R \times I$, isole $R$.

::: details Indice
$R$ est multiplié par $I$.
:::

::: details Corrigé
$R = \dfrac{U}{I}$.
:::

**Exercice 2.** Dans $E = P \times t$, isole $P$.

::: details Indice
On divise par $t$.
:::

::: details Corrigé
$P = \dfrac{E}{t}$.
:::

**Exercice 3.** Dans $y = x + 12$, isole $x$.

::: details Indice
On défait l'addition.
:::

::: details Corrigé
$x = y - 12$.
:::

#### Niveau 2 : entraînement

**Exercice 4.** Dans $U = E - rI$ (tension d'un générateur réel), isole $I$.

::: details Indice
D'abord ajoute $rI$ des deux côtés et enlève $U$, pour avoir $rI$ seul.
:::

::: details Corrigé
$rI = E - U$, donc $I = \dfrac{E - U}{r}$.
:::

**Exercice 5.** Dans $P = \dfrac{U^2}{R}$, isole $R$, puis isole $U$ (positive).

::: details Indice
Pour $R$ : fais monter $R$ en multipliant. Pour $U$ : multiplie par $R$, puis racine.
:::

::: details Corrigé
$R = \dfrac{U^2}{P}$ et $U = \sqrt{P \times R}$.
:::

**Exercice 6.** La température en degrés Fahrenheit est $F = 1{,}8\,C + 32$. Isole $C$.

::: details Indice
Ordre d'habillage de $C$ : × 1,8 puis + 32.
:::

::: details Corrigé
$C = \dfrac{F - 32}{1{,}8}$. Contrôle : $F = 212$ (eau bouillante) donne $C = \dfrac{180}{1{,}8} = 100$ ✓.
:::

#### Niveau 3 : approfondissement

**Exercice 7 (BTS).** Une résistance de 47 Ω dissipe une puissance de 0,47 W. Quel courant la traverse ?

::: details Indice
$P = R I^2$ : isole $I$, puis remplace.
:::

::: details Corrigé
$I = \sqrt{\dfrac{P}{R}} = \sqrt{\dfrac{0{,}47}{47}} = \sqrt{0{,}01} = 0{,}1$ A, soit 100 mA.
:::

**Exercice 8.** Pour deux résistances en parallèle, $\dfrac{1}{R} = \dfrac{1}{R_1} + \dfrac{1}{R_2}$.
Montre que $R = \dfrac{R_1 R_2}{R_1 + R_2}$.

::: details Indice
Mets les deux fractions de droite au même dénominateur $R_1 R_2$, puis retourne les deux côtés.
:::

::: details Corrigé
$\dfrac{1}{R} = \dfrac{R_2}{R_1 R_2} + \dfrac{R_1}{R_1 R_2} = \dfrac{R_1 + R_2}{R_1 R_2}$.
Si deux nombres non nuls sont égaux, leurs inverses aussi : $R = \dfrac{R_1 R_2}{R_1 + R_2}$.
Contrôle avec 30 Ω et 60 Ω : $\dfrac{1\,800}{90} = 20$ Ω ✓ (comme dans la leçon sur les fractions).
:::

<FinPartie lecon="maths/bloc-0/formules/isoler-une-variable" :numero="3" :total="3" />
