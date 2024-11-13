# Projet semaine :

[Schmidt Ravia]

## Temps passé

| **Tâche** | **Temps estimé** | **Temps passé** | **Remarque**                                                             |
| --------- | ---------------- | --------------- | ------------------------------------------------------------------------ |
| Vue.js    | 15min            | 20              | Attention dossiers cachés dans quizz "option+shift+"." pour les afficher |
| Bootstrap | 15 min           | 30              |
| Quiz      | 1h30             | 2h30            | Plus facile de modifier icone et couleur en inspectant élément           |
| Rapport   | 30 min           | 10 min          |
|           |                  | -               |
|           |                  |                 |

## Difficultés rencontrées et solutions

| **Tâches** | **Difficultés rencontrées**                                          | **Solutions trouvées**             |
| ---------- | -------------------------------------------------------------------- | ---------------------------------- |
| Vue.js     | Attentions Dossiers "invisibles" cachés dans quizz                   | option+shift+"." pour les afficher |
| Bootstrap  | Rien de particulier                                                  |                                    |
| Quiz       | Problème de compréhension au niveau de la structure script- Template | Poser des questions, tester        |
|            | Ecrit 2 script au début Aïe !                                        | faire des recherches               |
| Rapport    |                                                                      |                                    |
|            |                                                                      |                                    |

## Explications et réflexions sur le code 

## Expliquez le rôle des fichiers suivants

## |**Main.ts**|
|Le fichier main.ts a pour rôle d'initialiser l'application, en important Vue, bootstrap, et les routes, à savoir, les différentes pages que l'utilisateur peut visiter.|
|Il crée une instance de l'application Vue, lui fait utiliser les routeurs définits|
|et la rattache à un élément html "#app|

## |**Main.css**|
A pour rôle de personnaliser l'apparence de l'application, comme la couleur,  ou d'autres éléments visuels

## |**App.vue**|
Le fichier App.vue est le composant racine de l'application Vue, il inclut la structure de base de l'application, plus précisément
la barre de naviguation. Et il utilise les routes définies pour afficher le contenue de chaque page (ex : HomeView.vue, AboutView,)
## |**Router/index.ts**|
Il configure les routes, définit quelles vues sont associées avec quelle vue sont associées à quelle URL, ici en particulier pour les pages HomeView et AboutView 
(pages "quiz" et "à propos" sur le site)

## |**AboutView.vue**|
Représente la page "A propos" de l'application. Ce genre de page à pour but de transmettre des informations, par exemple sur le projet, ou l'équipe

## |**HomeView.vue**|
Représente la page d'acceuil de l'application, et renvoi grâce à un lien, au quiz

## |**QuizForm.vue**|
Ce composant contient la forme du quizz, , à savoir les questions, les options de réponses, la sélection des réponses, le calcul du score,
et l'affichage des résultats. Il inclue aussi les boutons "Terminer" et "Rénitialiser et gère logiquement les états du quizz."

## Dans le fichier Quizform.vue

## |**Quelles sont les similarités et les différences entre ref et computed**|
ref et computed sont tout deux des fonctionnalités de Vue destinées à gérer des données réactives, lorsque les valeur de ref ou computed changent,
les parties dépendantes de ces valeurs se mettent automatiquement à jour dans l'interface. La différence est que ref crée des variables réactives 
qui peuvent être modifiée instantanément, on l'utilise donc plus pour des valeurs qui vont beaucoup changer, comme par exemple une réponse 
sélectionnée par l'utilisateur. Computed est plûtot utilisé pour définir des valeurs basées sur d'autres variables réactives, ces valeurs
sont recalculées automatiquement lorsque les variables sources changent. 

## |**Que se passe-t-il lorsqu'on clique sur le bouton "Terminer"**|
Les réponses données par l'utilisateur sont vérifiées et comparées avec les bonnes réponses, le score est calculé en fonction de ces comparaisons
le score est afficher sous forme de message. 
## |**A quoi sert v-model ?**|
C'est une fonctionalité de liaison bidirectionelle en Vue, qui lie une valeur entre un élément en HTML et une donnée dans le composant Vue. Ici 
on l'utilise pour lier les réponses selectionées aux données du composant, pour que la variable qui y correspond dans le composant soit 
mis a jour automatiquement. 

## |**A quoi sert le :class"{disabled:!filled}"**|
Cette syntaxe est une Liaison conditionnelle en Vue qui empêche  l'utilisateur de cliquer sur "Terminer" Tant que toutes les réponses n'ont pas été
répondues. Le bouton est "disabled" donc inactif lorsque !filled est vrai, c'est à dire lorsque tout n'est pas entièrement rempli
https://github.com/hepl-bs21inf5/sem06-javascript-RAVIA33

## | **Suite du projet** |
On pourrait ajouter de nouvelles fonctionnalités, comme des catégories pour les questions, des niveaux selon la difficulté, un timer afin 
de rendre le jeu plus stimulant. Commme améliorations on pourrait donner des feedbacks visuels, par exemple rouge sur les questions incorrectes
et vers si correctes, on pourrait fournir des explications aux réponses, on pourrait adapter le design afin qu'ils soit compatible avec téléphone
et tablettes, ou ajouter des thèmes personnalisables, par exemple mode sombre/clair

option.shift.f
