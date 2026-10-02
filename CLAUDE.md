# CLAUDE.md — Site d'apprentissage des maths d'Arthur

> À relire au début de CHAQUE séance. Le cahier des charges ci-dessous est la référence.
> Arthur est débutant en code : Claude code, Arthur teste et valide.
> Expliquer simplement chaque choix et chaque commande. Ne jamais passer à l'étape
> suivante du plan sans la validation d'Arthur.

## État d'avancement

| Étape | Statut |
|---|---|
| 1. Préparer (comptes GitHub/Supabase, dépôt) | Fait : Git installé, comptes GitHub + Supabase créés et liés, dépôt `arthurjsph11/Math-pr-pa` |
| 2. Squelette | Validé par Arthur (PC). En ligne. Téléphone et tablette à tester plus tard |
| 3. Leçon modèle | Validée par Arthur le 2026-10-02 (avec 7 retours, voir ci-dessous). Bloc 0 : 13 leçons en brouillon |
| 4. Exercices | Construits sur les fractions (page `docs/maths/bloc-0/fractions/exercices-fractions.md`), en attente des tests d'Arthur |
| 5 à 10 | Pas commencées |

## Modèle de leçon (étape 3) : à copier pour chaque nouvelle leçon

Leçon de référence : `docs/maths/bloc-0/equations/equation-premier-degre.md`
(+ son résumé imprimable `…-resume.md`).

- **Frontmatter** `lecon:` → `statut` (`brouillon` | `relue-arthur` | `relue-prof`), `niveau`
  (Bases | Intermédiaire | Avancé | Niveau bac), `duree`, `bts: true/false`,
  `prerequis` (liste de `texte` + `lien` facultatif). L'en-tête s'affiche tout seul (`EnTeteLecon.vue`).
- **3 parties d'environ 10 min**, chacune terminée par
  `<FinPartie lecon="chemin/sans/extension" :numero="n" :total="3" />` (progression enregistrée).
  1. Comprendre : image forte + mémo (`::: memo`), tableau image ↔ maths, schéma interactif, limites de l'image.
  2. Le cours : `::: definition`, `::: propriete`, `::: demonstration`, exemple corrigé, `::: methode`, `::: erreur`.
  3. S'en servir : `::: application` (BTS / domotique), `<Video … vedette />` + 2 autres, exercices
     sur 3 niveaux (indice puis corrigé dans `::: details`), lien vers le résumé.
- **`::: source`** sous chaque contenu repris. **`::: verifier`** pour tout ce qui n'est pas sûr à 100 %.
- Vidéos : vérifier titre et chaîne (oEmbed YouTube) avant de les mettre ; dire à Arthur
  que Claude ne peut pas les regarder.
- Chaque solution d'exercice est vérifiée en la remplaçant dans l'équation.
- Calculs alignés : commentaires courts, par ex. `&& (-2x)`, pour tenir sur téléphone.
- Composants interactifs : `docs/.vitepress/theme/*.vue`, enregistrés dans `theme/index.ts`.
- Ajouter la leçon dans `sidebar` (config.mts), dans la page du bloc, et dans `progression.ts`.
- **Retours d'Arthur (2026-10-02), valables pour toutes les leçons :**
  1. garder un tableau « image ↔ maths » (ex. balance ↔ fraction) ;
  2. vidéos en miniature cliquable (`<Video id titre chaine />`), placées au fil du cours, pas à la fin ;
  3. exemples corrigés en `::: essai` (énoncé d'abord) + `::: details Voir le corrigé` ;
  4. garder une partie exercices ; encadré de réponse pour chaque exercice (composants de l'étape 4) ;
  5. équations : toujours finir par « $x = $ résultat » ;
  6. résumés imprimables avec une mise en page soignée type LibreOffice.
- Vidéo non vérifiée (titre, chaîne) : la laisser avec un `::: verifier` pour Arthur.
- KaTeX : garder la même version que celle de `@vscode/markdown-it-katex` (0.16.x), sinon symboles cassés.

## Exercices (étape 4) : comment en ajouter

- Un exercice = un « modèle » qui tire de nouveaux nombres à chaque fois : `docs/.vitepress/theme/exercices/banque-<theme>.ts`
  (voir `banque-fractions.ts`), listé dans `exercices/index.ts`, thème déclaré dans `THEMES` (`exercices/types.ts`).
- Dans une page : `<Exercice id="fractions-simplifier" :numero="1" />`.
- Réponse tapée : `attendu` (fraction exacte) + `forme` : `libre` (1/2 = 2/4 = 0,5), `irreductible`
  (« Juste, mais simplifie encore »), `equation` (réponse « x = valeur », corrigé terminé par `\boxed{x = …}`,
  vérification dans `verification`, affichée repliée « Vérifier mon résultat »).
- QCM : `choix`, chaque mauvaise réponse = une erreur fréquente réelle + son `explication`.
- Toujours 2 indices puis la solution. 3 niveaux (1 application, 2 entraînement, 3 approfondissement), au moins 5 par niveau,
  au moins un problème concret (BTS, domotique, vie courante) au niveau 3.
- Moteur de correction : `exercices/calcul.ts` (fractions exactes). Clavier maths : `ReponseMath.vue`.
- Carnet d'erreurs (`/maths/carnet-erreurs`, `CarnetErreurs.vue`) et suivi des indices : `exercices/memoire.ts`,
  dans le navigateur (localStorage) en attendant Supabase (étape 5).
- **Avant chaque envoi : `npm run verifier`** (recalcule 3 000 tirages par exercice d'une autre façon,
  remplace les solutions dans les équations, teste la correction automatique). Ajouter un calcul indépendant
  pour chaque nouvel exercice dans `scripts/verifier-exercices.mjs`.
- Il n'existe pas encore de leçon de cours sur les fractions dans le dépôt : seulement la page d'exercices.

## Décisions techniques (et pourquoi)

- **VitePress** (générateur de site à partir de Markdown, basé sur Node.js) :
  sommaire latéral, recherche, mode clair/sombre et affichage mobile inclus d'origine ;
  les leçons sont de simples fichiers `.md` ; on peut ajouter des composants interactifs
  (Vue) dans une leçon pour les schémas, exercices et le tableau de bord. Activement maintenu.
- **KaTeX** via le plugin `@vscode/markdown-it-katex` (maintenu par Microsoft).
  Syntaxe : `$...$` dans le texte, `$$...$$` pour une formule centrée.
- **Encadrés colorés** : conteneurs Markdown `::: definition`, `::: propriete`,
  `::: demonstration`, `::: methode`, `::: erreur`, `::: application`, `::: memo`
  (définis dans `docs/.vitepress/config.mts`, styles dans `docs/.vitepress/theme/custom.css`).
- **Hébergement** : GitHub Pages, déployé automatiquement par GitHub Actions (étape 1/8).
- **Compte et synchronisation** : Supabase, gratuit (étape 5).
- Structure : `docs/maths/<bloc>/<lecon>.md` et `docs/physique/...`.
- Commandes : `npm install` (une fois), `npm run dev` (site local),
  `npm run dev:reseau` (site visible par la tablette et le téléphone sur le même Wi-Fi),
  `npm run build` (fabrique le site final), `npm run verifier` (vérifie tous les exercices).

## Points à vérifier / en attente

- Site en ligne : https://arthurjsph11.github.io/Math-pr-pa/ (publié par `.github/workflows/deploy.yml`).
- Page d'accueil (voulue par Arthur) : titre « Mes révisions prépa / Arthur » + récap « Où j'en suis »
  (Maths, Physique, Chimie : chapitre en cours + avancement). Données dans `docs/.vitepress/progression.ts`,
  mises à jour à la main pour l'instant ; à brancher sur la vraie progression à l'étape 5.
  La carte des notions (étape 9) viendra en plus, sous le récap.
- La page `docs/maths/demo-formules.md` est une page de test du squelette : à supprimer à l'étape 3.

---

# Cahier des charges

## Qui je suis
Arthur, étudiant en BTS FED option domotique. Je prépare une entrée en prépa ATS pour aller en école d'ingénieur. J'apprends seul.

## Objectif
Un outil personnel pour atteindre un niveau bac solide en maths avant la prépa ATS, et pour réviser le BTS FED. Le site doit d'abord m'aider à COMPRENDRE, pas seulement à m'entraîner. Je travaille 4 à 6 h par semaine et je veux éviter la pression du temps.

## Règle absolue : la fiabilité
- Tout le contenu doit être exact et vérifié par plusieurs sources fiables (Eduscol, sujets de bac officiels, Maths et tiques, Lumni, Khan Academy).
- Cite la source sous chaque contenu repris.
- Si tu n'es pas sûr à 100 %, ne devine jamais : marque le passage « À VÉRIFIER » et dis-le moi.
- Chaque leçon a un statut visible : brouillon, relue par Arthur, relue par le prof.

## Progression
- Bloc 0 : bases de Seconde (calcul, manipulation de formules, résolution d'équations).
- Puis les blocs 1 à 8 du programme de rattrapage (spécialité maths de Première et Terminale), dans l'ordre. Je te donnerai la liste des chapitres de chaque bloc au moment voulu.
- Plus tard : un niveau « Prépa ATS ».
- Chaque thème a 4 niveaux (Bases, Intermédiaire, Avancé, Niveau bac), et chaque niveau est découpé en notions.
- Je fais tout dans l'ordre, sans test de positionnement. Chaque leçon affiche ses prérequis avec un lien.
- Les notions utiles au BTS FED portent un repère « BTS » et forment un parcours « Révisions BTS ».
- Page d'accueil : une carte des notions qui montre les liens entre chapitres.

## Structure d'une leçon (environ 30 min, en parties de 10 min, progression enregistrée à chaque partie)
1. Une image FORTE tirée de la nature ou de la vie courante, avec un mémo marquant, qui raconte le cheminement de pensée jusqu'à la formule. Les formules et les concepts doivent être liés à cette image. L'exemple doit être scientifiquement exact.
2. Un schéma interactif ou une animation pour l'intuition.
3. Le cours : définitions et propriétés dans des encadrés de couleur, démonstrations visibles.
4. Un exemple corrigé, une fiche méthode « comment faire pour… », les erreurs fréquentes.
5. Un encadré « À quoi ça sert » : application en électricité, en domotique ou dans la vie professionnelle.
6. 2 ou 3 vidéos YouTube (Yvan Monka, Hans Amble, Les Bons Profs, 3Blue1Brown…), la meilleure mise en avant.
7. Des exercices, puis un résumé d'une page imprimable en PDF.
Ton : simple et direct, comme un prof qui parle.

## Fonctions
- Schémas interactifs : courbes à curseurs, tangente, aire sous la courbe, suites, cercle trigonométrique, repères 3D, simulations de probabilités. Ils expliquent d'abord, puis posent des questions. GeoGebra, Desmos ou code sur mesure selon le besoin.
- Calculatrice graphique accessible sur toutes les pages.
- Exercices : QCM, réponses tapées avec un clavier mathématique et correction automatique, sujets de bac. Indices progressifs avant le corrigé, nombres tirés au hasard, 3 niveaux (application, entraînement, approfondissement).
- Validation d'un chapitre : 80 % au contrôle final, sans chronomètre. Le chronomètre sert uniquement dans les examens blancs (type bac et type entrée ATS).
- Carnet d'erreurs par thème : les exercices ratés reviennent plus tard.
- Révisions espacées : 10 min maximum par séance, avec un bouton pause. Flashcards exportables vers Quizlet. Révision du jour.
- Formulaire général classé par importance (à comprendre ou à connaître par cœur) et par difficulté pour moi.
- Bloc-notes par leçon.
- Page blanche en fenêtre pop-up pour dessiner au stylet sur ma tablette (pression, gomme, couleurs, quadrillage ou repère en fond). Les dessins sont rangés avec leur leçon.
- Bouton « Envoyer à Claude » qui copie mes notes ou mon dessin pour que je les colle dans mon projet Claude, qui les corrige.
- Tableau de bord : avancement par thème, maîtrise par notion, points faibles, badges, objectif de la semaine. Pas de planning imposé.
- Rappels si je n'ai pas travaillé depuis 2 jours, avec mes propres messages (je te les donnerai).
- Recherche dans les notions, les formules et les exemples concrets.

## Design
Sobre mais visuel : surlignages, polices de couleur, encadrés colorés, courbes soignées. Mode clair et sombre. Sommaire latéral. Confortable sur ordinateur, sur tablette avec stylet et sur téléphone (grands boutons tactiles).

## Technique
- Leçons en fichiers Markdown : un dossier par thème, un fichier par leçon.
- Formules affichées avec KaTeX.
- Site hébergé gratuitement sur GitHub Pages.
- Compte et sauvegarde (progression, notes, dessins) synchronisés sur mes 3 appareils avec Supabase (version gratuite).
- Installable comme une application et utilisable hors ligne si ce n'est pas trop compliqué.
- Structure prête pour la physique-chimie, avec des liens dans les deux sens entre cours de maths et modèles de physique.
- Choisis les outils les plus simples et les plus fiables pour un débutant, et explique-moi pourquoi.

## Plan de construction (on ne passe à l'étape suivante que quand j'ai validé la précédente)
1. Préparer : vérifier avec moi mes comptes GitHub et Supabase, créer le dépôt du site.
2. Squelette : site vide mais navigable (sommaire latéral, mode clair et sombre, recherche, formules propres, espaces Maths et Physique-chimie). Je le teste sur ordinateur, tablette et téléphone.
3. Leçon modèle : une seule leçon du Bloc 0 (résoudre une équation du premier degré) avec tous les éléments de la structure. Tout le site sera copié sur ce modèle.
4. Exercices : QCM, clavier mathématique, correction automatique, nombres aléatoires, indices, 3 niveaux, carnet d'erreurs.
5. Compte et suivi : connexion, synchronisation sur mes 3 appareils, bloc-notes, tableau de bord, badges, objectif de la semaine.
6. Page blanche et outils : dessin au stylet, bouton « Envoyer à Claude », calculatrice graphique.
7. Mémorisation : flashcards et export Quizlet, révisions espacées, révision du jour, formulaire, rappels.
8. Bloc 0 complet, relu par moi puis par mon prof de maths. Mise en ligne et mode hors ligne.
9. Blocs 1 à 8, un à la fois, avec la carte des notions, les repères BTS et les examens blancs.
10. Physique-chimie, sur le même modèle.
