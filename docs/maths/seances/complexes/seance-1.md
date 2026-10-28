---
title: "Séance 1 : calculer avec i"
lecon:
  statut: brouillon
  niveau: Bases
  duree: 25
  bts: true
  prerequis:
    - texte: Développer et factoriser
      lien: /maths/bloc-0/calcul-litteral/developper-factoriser
    - texte: Racines carrées
      lien: /maths/bloc-0/calcul/racines-carrees
---

# Séance 1 : calculer avec $i$

**Objectif :** additionner et multiplier des nombres complexes, puis calculer un module.

**Chronomètre :** 5 min de rappel, 15 min d'exercices, 3 min de correction, 2 min de bilan.

## 1. Rappel (5 min)

On ajoute au monde des nombres un nombre $i$ tel que $i^2 = -1$. Un **nombre complexe** s'écrit

$$z = a + ib \qquad (a \text{ et } b \text{ réels})$$

$a$ est la **partie réelle**, $b$ la **partie imaginaire**.

::: propriete Les règles de calcul
- **Addition :** on additionne les parties réelles entre elles et les parties imaginaires entre elles.
- **Multiplication :** on développe comme d'habitude, puis on remplace $i^2$ par $-1$.
- **Module :** $|a + ib| = \sqrt{a^2 + b^2}$ (c'est la longueur du nombre, vu comme un point du plan).
:::

::: essai Exemple résolu
Calculer $(1 + 2i)(3 - i)$ puis le module du résultat.
:::

::: details Voir le corrigé
On développe : $(1 + 2i)(3 - i) = 3 - i + 6i - 2i^2 = 3 + 5i + 2 = 5 + 5i$.

Module : $|5 + 5i| = \sqrt{25 + 25} = \sqrt{50} = 5\sqrt{2}$.
:::

::: erreur Se tromper sur le signe de $i^2$
❌ « $i^2 = 1$ », donc $(2 + i)(2 - i) = 4 - i^2 = 4 - 1 = 3$.

✅ $i^2 = -1$, donc $-i^2 = +1$ et $(2 + i)(2 - i) = 4 - i^2 = 4 + 1 = 5$.
:::

## 2. Les 3 exercices (15 min)

Cherche **sur papier**. Ne regarde ni l'indice ni le corrigé avant d'avoir écrit une réponse.

**Exercice 1 (facile).** Soit $z_1 = 3 + 2i$ et $z_2 = 1 - 5i$. Calculer $z_1 + z_2$ et $z_1 - z_2$.

**Exercice 2 (moyen).** Calculer $(2 + 3i)(4 - i)$ et donner le résultat sous la forme $a + ib$.

**Exercice 3 (un peu plus dur, électricité).** Une bobine en série avec une résistance a pour impédance
$Z = 12 + 16j$ (en $\Omega$).

- a) Calculer le module $|Z|$.
- b) Sous une tension efficace $U = 220$ V, l'intensité efficace est $I = \dfrac{U}{|Z|}$. Calculer $I$.

## 3. Correction (3 min)

Pour chaque exercice : **indice d'abord**, corrigé ensuite, seulement si tu bloques encore.

::: details Indice exercice 1
Additionne d'abord les parties réelles, puis les parties imaginaires. Pour la soustraction, attention au signe de $-(-5i)$.
:::

::: details Corrigé exercice 1
$z_1 + z_2 = (3 + 1) + (2 - 5)i = 4 - 3i$.

$z_1 - z_2 = (3 - 1) + (2 - (-5))i = 2 + 7i$.
:::

::: details Indice exercice 2
Développe comme $(a + b)(c + d)$ : quatre produits. N'oublie pas $i \times i = i^2 = -1$.
:::

::: details Corrigé exercice 2
$(2 + 3i)(4 - i) = 8 - 2i + 12i - 3i^2 = 8 + 10i + 3 = 11 + 10i$.
:::

::: details Indice exercice 3
$|a + bj| = \sqrt{a^2 + b^2}$. Ici $a = 12$ et $b = 16$.
:::

::: details Corrigé exercice 3
a) $|Z| = \sqrt{12^2 + 16^2} = \sqrt{144 + 256} = \sqrt{400} = 20\ \Omega$.

b) $I = \dfrac{220}{20} = 11$ A.
:::

## 4. Bilan (2 min)

Écris deux lignes sur papier :

- **Je maîtrise :** …
- **À revoir :** …

| Exercices réussis (sans le corrigé) | Quoi faire |
|---|---|
| 3 sur 3 ou 2 sur 3 | Bien joué : on passe à la séance suivante du chapitre |
| 0 ou 1 sur 3 | Refais la séance demain, en commençant par l'exercice que tu as raté |

::: source
Opérations sur les nombres complexes et module : programme de mathématiques du BTS et programme de
mathématiques expertes de Terminale. Impédance d'une bobine : $Z = R + jL\omega$.
:::

::: verifier À VÉRIFIER par Arthur
Les corrigés ont été recalculés numériquement. Les références exactes des programmes officiels sont à vérifier.
Je n'ai pas ajouté de vidéo : je ne peux pas les regarder.
:::

<FinPartie lecon="maths/seances/complexes/seance-1" :numero="1" :total="1" />
