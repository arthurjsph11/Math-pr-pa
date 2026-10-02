---
title: Proportionnalité et pourcentages
lecon:
  statut: brouillon
  niveau: Bases
  duree: 30
  bts: true
  prerequis:
    - texte: Calculer avec les fractions
      lien: /maths/bloc-0/fractions/calculer-avec-les-fractions
    - texte: Isoler une variable dans une formule
      lien: /maths/bloc-0/formules/isoler-une-variable
---

# Proportionnalité et pourcentages

Les pourcentages sont partout : soldes, augmentations, taux de TVA, rendement d'un moteur.
Une seule idée suffit pour presque tout faire : **augmenter ou baisser d'un pourcentage,
c'est multiplier par un nombre**.

## Partie 1 : comprendre avec une forêt

### L'image : la forêt qui perd puis regagne 10 %

Une forêt compte **1 000 arbres**. Une tempête en abat **10 %**, soit 100 arbres : il en reste
**900**. Les années suivantes, la forêt repousse et gagne **10 %**. Est-ce qu'on revient à 1 000 ?

Non ! 10 % de 900, c'est seulement 90 arbres. La forêt a **990** arbres. Les 10 % perdus étaient
calculés sur 1 000, les 10 % regagnés sont calculés sur 900, qui est plus petit.

En maths, on va beaucoup plus vite avec des multiplications :

- perdre 10 %, c'est garder 90 %, donc **multiplier par 0,9** : $1\,000 \times 0{,}9 = 900$ ;
- gagner 10 %, c'est avoir 110 %, donc **multiplier par 1,1** : $900 \times 1{,}1 = 990$ ;
- les deux à la suite : $1\,000 \times 0{,}9 \times 1{,}1 = 1\,000 \times 0{,}99 = 990$.

::: memo
**−10 % puis +10 %, ce n'est pas zéro : la forêt ne repousse que sur ce qui reste.**
Augmenter de $t$ %, c'est multiplier par $1 + \dfrac{t}{100}$.
:::

### De la forêt aux maths

| Dans la forêt | En maths |
|---|---|
| Les 1 000 arbres de départ | La **valeur de départ** $V_D$ |
| Les arbres après la tempête | La **valeur d'arrivée** $V_A$ |
| « Garder 90 % » | Le **coefficient multiplicateur** $0{,}9$ |
| « Gagner 10 % » | Le coefficient $1{,}1$ |
| Tempête puis repousse | On **multiplie** les coefficients : $0{,}9 \times 1{,}1 = 0{,}99$ |
| Il manque 10 arbres sur 1 000 | Une baisse globale de 1 % |

### Là où l'image s'arrête

Une vraie forêt ne repousse pas d'un pourcentage exact : c'est un modèle simplifié. Les
règles sur les pourcentages, elles, sont exactes.

::: source
Information chiffrée, coefficients multiplicateurs, évolutions successives : [Yvan Monka, Maths et tiques, cours « Information chiffrée » de Seconde (PDF)](https://www.maths-et-tiques.fr/telech/19InformationChiffreeM.pdf).
:::

<FinPartie lecon="maths/bloc-0/proportionnalite/proportionnalite-pourcentages" :numero="1" :total="3" />

## Partie 2 : le cours

### La proportionnalité

::: definition Grandeurs proportionnelles
Deux grandeurs sont **proportionnelles** quand on passe de l'une à l'autre en multipliant
toujours par le **même nombre** $k$, le **coefficient de proportionnalité** : $y = k \times x$.
:::

Exemple : le prix de l'électricité (sans l'abonnement) est proportionnel à l'énergie consommée.
À 0,25 € le kWh, $\text{prix} = 0{,}25 \times E$.

::: propriete Le produit en croix
Si $\dfrac{a}{b} = \dfrac{c}{d}$ (avec $b$ et $d$ non nuls), alors $a \times d = b \times c$.
Pour trouver une quatrième proportionnelle : $d = \dfrac{b \times c}{a}$.
:::

### Les pourcentages

::: definition Pourcentage d'une quantité
Prendre $t$ % d'une quantité $Q$, c'est calculer $\dfrac{t}{100} \times Q$.
La **proportion** d'une partie dans un tout, c'est $\dfrac{\text{partie}}{\text{tout}}$, qu'on peut écrire en %.
:::

::: propriete Coefficient multiplicateur
- Augmenter de $t$ % revient à multiplier par $CM = 1 + \dfrac{t}{100}$.
- Diminuer de $t$ % revient à multiplier par $CM = 1 - \dfrac{t}{100}$.
- Des évolutions successives : on **multiplie** les coefficients.
- Le **taux d'évolution** entre $V_D$ et $V_A$ est $t = \dfrac{V_A - V_D}{V_D}$ (à multiplier par 100 pour l'avoir en %).
:::

::: demonstration Pourquoi augmenter de t %, c'est multiplier par 1 + t/100
Augmenter $V$ de $t$ %, c'est lui ajouter $\dfrac{t}{100} \times V$ :

$$
V + \frac{t}{100} \times V = V \times \left(1 + \frac{t}{100}\right)
$$

On a simplement **factorisé** par $V$.
:::

::: essai
Un radiateur coûte 240 €. Il est soldé à −25 %. Quel est son nouveau prix ?
:::

::: details Voir le corrigé
$CM = 1 - \dfrac{25}{100} = 0{,}75$. Nouveau prix : $240 \times 0{,}75 = 180$ €.

**Résultat : 180 €.**
:::

::: essai
Un prix passe de 80 € à 92 €. Quel est le taux d'évolution ?
:::

::: details Voir le corrigé
$t = \dfrac{92 - 80}{80} = \dfrac{12}{80} = 0{,}15$, soit **+15 %**.
:::

::: essai
Après une hausse de 20 %, un produit coûte 54 €. Quel était son prix avant ?
:::

::: details Voir le corrigé
Prix avant $\times 1{,}2 = 54$. On isole le prix avant : $54 \div 1{,}2 = 45$.

**Résultat : 45 €.** Attention : enlever 20 % à 54 € donne 43,20 €, ce qui est faux.
:::

<Video id="Y_gDKPidUQ0" titre="Information chiffrée (Seconde)" chaine="Yvan Monka" vedette />

### Fiche méthode

::: methode Comment calculer avec des pourcentages
1. Transforme le pourcentage en **coefficient multiplicateur** : +8 % → 1,08 ; −30 % → 0,70.
2. **Évolution** : valeur d'arrivée $=$ valeur de départ $\times CM$.
3. **Valeur de départ inconnue** : on divise la valeur d'arrivée par $CM$.
4. **Évolutions successives** : on multiplie les $CM$, puis on relit le résultat
   ($0{,}99$ = −1 % ; $1{,}32$ = +32 %).
:::

### Les erreurs fréquentes

::: erreur Additionner des pourcentages successifs
❌ +20 % puis +30 %, ça fait +50 %.

✅ $1{,}2 \times 1{,}3 = 1{,}56$ : c'est **+56 %**.
:::

::: erreur Croire que −10 % puis +10 % ramène au départ
❌ $1\,000 - 10\,\% + 10\,\% = 1\,000$.

✅ $1\,000 \times 0{,}9 \times 1{,}1 = 990$, comme la forêt.
:::

::: erreur Retrouver le prix de départ en enlevant le pourcentage
❌ Prix après +20 % : 54 €. Prix avant : $54 \times 0{,}8 = 43{,}20$ €.

✅ On **divise** par le coefficient : $54 \div 1{,}2 = 45$ €. Contrôle : $45 \times 1{,}2 = 54$ ✓.
:::

::: source
Méthodes et erreurs : [Yvan Monka, Maths et tiques (PDF)](https://www.maths-et-tiques.fr/telech/19InformationChiffreeM.pdf).
Tous les calculs ont été refaits à la main.
:::

<FinPartie lecon="maths/bloc-0/proportionnalite/proportionnalite-pourcentages" :numero="2" :total="3" />

## Partie 3 : s'en servir

### À quoi ça sert ?

::: application Le rendement d'un moteur (BTS)
Un moteur de volet roulant absorbe une puissance électrique $P_a = 150$ W et fournit une
puissance mécanique utile $P_u = 120$ W. Son **rendement** est

$$
\eta = \frac{P_u}{P_a} = \frac{120}{150} = 0{,}8 = 80\ \%
$$

Les 20 % restants (30 W) sont perdus, surtout en chaleur. Le rendement est toujours inférieur à 100 %.
:::

::: application Calculer un prix TTC
Un module domotique coûte 50 € HT. Avec une TVA à 20 %, le prix TTC est $50 \times 1{,}2 = 60$ €.
Et pour un prix TTC de 84 €, le prix HT est $84 \div 1{,}2 = 70$ €.
:::

::: source
Rendement $\eta = P_u / P_a$ : cours de BTS électrotechnique. Taux normal de TVA en France : 20 % (Code général des impôts, article 278).
:::

### Les vidéos

::: verifier À VÉRIFIER par Arthur
L'identifiant de la vidéo vient de la page de Seconde de Maths et tiques (« Information chiffrée »),
mais je n'ai pas pu vérifier son titre exact en ligne. Clique sur la miniature : si la vidéo ne parle
pas des pourcentages, dis-le moi et je la change.
:::

### Exercices

#### Niveau 1 : application

**Exercice 1.** Donne le coefficient multiplicateur de : +5 %, −15 %, +100 %.

::: details Indice
$1 + \dfrac{t}{100}$ pour une hausse, $1 - \dfrac{t}{100}$ pour une baisse.
:::

::: details Corrigé
1,05 ; 0,85 ; 2 (augmenter de 100 %, c'est doubler).
:::

**Exercice 2.** Calcule 15 % de 340.

::: details Indice
$\dfrac{15}{100} \times 340$.
:::

::: details Corrigé
$0{,}15 \times 340 = 51$.
:::

**Exercice 3.** Un lot de 25 ampoules contient 3 ampoules défectueuses. Quelle proportion, en %, est défectueuse ?

::: details Indice
$\dfrac{\text{partie}}{\text{tout}}$, puis × 100.
:::

::: details Corrigé
$\dfrac{3}{25} = 0{,}12$, soit **12 %**.
:::

#### Niveau 2 : entraînement

**Exercice 4.** Un loyer de 600 € augmente de 2 %, puis de 3 % l'année suivante. Quel est le nouveau loyer ? Quelle est la hausse globale en % ?

::: details Indice
Multiplie les deux coefficients.
:::

::: details Corrigé
$1{,}02 \times 1{,}03 = 1{,}0506$. Loyer : $600 \times 1{,}0506 = 630{,}36$ €. Hausse globale : **+5,06 %**.
:::

**Exercice 5.** Une facture passe de 125 € à 100 €. Quel est le taux d'évolution ?

::: details Indice
$\dfrac{V_A - V_D}{V_D}$.
:::

::: details Corrigé
$\dfrac{100 - 125}{125} = \dfrac{-25}{125} = -0{,}2$, soit **−20 %**.
:::

**Exercice 6.** Après une baisse de 40 %, un article coûte 36 €. Quel était son prix ?

::: details Indice
$CM = 0{,}6$. On divise.
:::

::: details Corrigé
$36 \div 0{,}6 = 60$ €. Contrôle : $60 \times 0{,}6 = 36$ ✓.
:::

#### Niveau 3 : approfondissement

**Exercice 7 (BTS).** Un transformateur a un rendement de 95 %. On veut une puissance utile de
380 W en sortie. Quelle puissance doit-il absorber ?

::: details Indice
$\eta = \dfrac{P_u}{P_a}$ : isole $P_a$.
:::

::: details Corrigé
$P_a = \dfrac{P_u}{\eta} = \dfrac{380}{0{,}95} = 400$ W.
:::

**Exercice 8.** Un prix baisse de 20 %. De quel pourcentage doit-il augmenter pour revenir à sa valeur de départ ?

::: details Indice
Cherche $CM$ tel que $0{,}8 \times CM = 1$.
:::

::: details Corrigé
$CM = \dfrac{1}{0{,}8} = 1{,}25$, soit une hausse de **25 %** (et pas 20 %).
:::

<FinPartie lecon="maths/bloc-0/proportionnalite/proportionnalite-pourcentages" :numero="3" :total="3" />
