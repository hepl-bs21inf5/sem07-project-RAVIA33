# Projet semaine : 1

[Schmidt Ravia]

## Temps passé

| **Tâche** | **Temps estimé** | **Temps passé** |
| --------- | ---------------- | --------------- |
| Vue.js    | 15min            | 20              |
| Bootstrap | 15 min           | 30              |
| Quiz      | 1h30             | 2h30            |
| Rapport   | 30 min           | 10 min          |
|           |                  |                 |

| **Tâche** : | **Remarque**                                                        |
| ----------- | ------------------------------------------------------------------- |
| Bootstrap : | il est plus facile de modifier les couleurs en inspectant l'élément |

## Difficultés rencontrées et solutions

| **Tâches** | **Difficultés rencontrées**                                                                        | **Solutions trouvées**                           |
| ---------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Vue.js     | Attentions Dossiers "invisibles" cachés dans quizz                                                 | option+shift+"." pour les afficher               |
| Quiz       | Problème de compréhension au niveau de la structure script- Template Ecrit 2 script au début Aïe ! | Poser des questions, tester faire des recherches |
|            | Ecrit 2 script au début Aïe !                                                                      | faire des recherches                             |

# Explications et réflexions sur le code

## Le rôle des fichiers suivants :

**Main.ts**

Le fichier main.ts a pour rôle d'initialiser l'application, en important Vue, Bootstrap, et les routes, à savoir, les différentes pages que l'utilisateur peut visiter.
Il crée une instance de l'application Vue, lui fait utiliser les routeurs définits et la rattache à un élément html "#app

**Main.css**

A pour rôle de personnaliser l'apparence de l'application, comme la couleur, ou d'autres éléments visuels

**App.vue**

Le fichier App.vue est le composant racine de l'application Vue, il inclut la structure de base de l'application, plus précisément
la barre de naviguation. Et il utilise les routes définies pour afficher le contenue de chaque page (ex : HomeView.vue, AboutView

**Router/index.ts**

Il configure les routes, définit quelles vues sont associées avec quelle vue sont associées à quelle URL, ici en particulier pour les pages HomeView et AboutView
(pages "quiz" et "à propos" sur le site)

**AboutView.vue**

Représente la page "A propos" de l'application. Ce genre de page à pour but de transmettre des informations, par exemple sur le projet, ou l'équipe

**HomeView.vue**

Représente la page d'acceuil de l'application, et renvoi grâce à un lien, au quiz

**QuizForm.vue**

Ce composant contient la forme du quizz, , à savoir les questions, les options de réponses, la sélection des réponses, le calcul du score,
et l'affichage des résultats. Il inclue aussi les boutons "Terminer" et "Rénitialiser et gère logiquement les états du quizz."

## Dans le fichier Quizform.vue

## **Quelles sont les similarités et les différences entre ref et computed**

ref et computed sont tout deux des fonctionnalités de Vue destinées à gérer des données réactives, lorsque les valeur de ref ou computed changent,
les parties dépendantes de ces valeurs se mettent automatiquement à jour dans l'interface. La différence est que ref crée des variables réactives
qui peuvent être modifiée instantanément, on l'utilise donc plus pour des valeurs qui vont beaucoup changer, comme par exemple une réponse
sélectionnée par l'utilisateur. Computed est plutôt utilisé pour définir des valeurs basées sur d'autres variables réactives, ces valeurs
sont recalculées automatiquement lorsque les variables sources changent.

## **Que se passe-t-il lorsqu'on clique sur le bouton "Terminer"**

Les réponses données par l'utilisateur sont vérifiées et comparées avec les bonnes réponses, le score est calculé en fonction de ces comparaisons
le score est afficher sous forme de message.

## **A quoi sert v-model ?**

C'est une fonctionalité de liaison bidirectionelle en Vue, qui lie une valeur entre un élément en HTML et une donnée dans le composant Vue. Ici
on l'utilise pour lier les réponses selectionées aux données du composant, pour que la variable qui y correspond dans le composant soit
mis a jour automatiquement.

## **A quoi sert le :class"{disabled:!filled}"**

Cette syntaxe est une Liaison conditionnelle en Vue qui empêche l'utilisateur de cliquer sur "Terminer" Tant que toutes les réponses n'ont pas été
répondues. Le bouton est "disabled" donc inactif lorsque !filled est vrai, c'est à dire lorsque tout n'est pas entièrement rempli
https://github.com/hepl-bs21inf5/sem06-javascript-RAVIA33

## **Suite du projet**

On pourrait ajouter de nouvelles fonctionnalités, comme des catégories pour les questions, des niveaux selon la difficulté, un timer afin
de rendre le jeu plus stimulant. Commme améliorations on pourrait donner des feedbacks visuels, par exemple rouge sur les questions incorrectes
et vers si correctes, on pourrait fournir des explications aux réponses, on pourrait adapter le design afin qu'ils soit compatible avec téléphone
et tablettes, ou ajouter des thèmes personnalisables, par exemple mode sombre/clair

# Projet semaine : 2

[Schmidt Ravia]

## Temps passé

| **Tâche**        | **Temps estimé** | **Temps passé** | **Remarque**                                                                                                            |
| ---------------- | ---------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| QuestionRadio    | 1h               | 1h05            |                                                                                                                         |
| Questiontext     | 30 min           | 4h              | Enormément de mal à comprendre comment correctement lier mes variables, difficultés à répondre a la question également. |
| QuestionCheckbox | 1h               | 1h              | Bon, finalement optionelle, je ne l'avais pas vu                                                                        |
| API              | 1h               | 1h30            |                                                                                                                         |
|                  |                  |                 |                                                                                                                         |
|                  |                  |                 |                                                                                                                         |

## Difficultés rencontrées et solutions

| **Tâches**    | **Difficultés rencontrées**                                                                              | **Solutions trouvées**                                                             |
| ------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| QuestionRadio | Pas sûre au début de comment modifier le code dans Quizform                                              | Tester selon modèl et voir si ça fonctionne                                        |
| marche        |
| Questiontext  | Pourquoi le placeholder ne s'affiche pas ?                                                               |                                                                                    |
|               | Une fois afficher, lorsque rempli, impossible de cliquer sur terminer                                    | modifier correctement les propriétés et conditions                                 |
|               | Comment savoir quel v-model choisir ?                                                                    | tout tester, voir ce qui marche...                                                 |
|               | comme placeholder optionnelle, required-false ne marche pas vraiment car on ne peut cliquer sur terminer | Optionnelle oui, mais pas de valeure, donc pas de possibilité de mettre terminer : |
|               |                                                                                                          | mettre une valeur par défaut, comment ? Vue.js nous donne le mot clé "Default"     |
|               | complications pour rendre optionnelle                                                                    | revenir en arrière et se concentrer sur consts filles                              |
|               | Est-ce que c'est normal que je puisse modifier les reponses après avoir cliqué sur terminé ?             | oui pour l'instant                                                                 |
| API           | Après avoir suivi à la lettre les instructions, le code ne marche pas                                    | problème dans router, attention à l'othographe                                     |

## Explications et réflexions sur le code

**Quelle est la différence entre un prop et un modèle (v-model) ?**
Un prop est unidirectionnelle, c'est une donnée que le composant parent transmet à un composant enfant. Un v-model est bidirectonnelle, il se transmet du parent à l'enfant et inversément

**Comment rendre la fonction placeholder optionelle**
La variable filled, s'assurant que les réponses transmises ne sont pas nul doit être modifié. On retire tout simplement le code
vérifiant que patte.value n'est pas nulle

## **Suite du projet**

# Projet semaine : 3

[Schmidt Ravia]

## Temps passé

| **Tâche**             | **Temps estimé** | **Temps passé** | **Remarque**                                          |
| --------------------- | ---------------- | --------------- | ----------------------------------------------------- |
| Réponse               | 2h               | 1h30            | Les boutons ne fonctionnent plus, mais pas très grave |
| Réponse aux questions | 30 min           |                 |                                                       |
| Score                 | 1h30             | 1h30            |                                                       |
| Réponse aux questions | 1h               |                 |                                                       |
|                       |                  |                 |                                                       |
|                       |                  |                 |                                                       |

## Difficultés rencontrées et solutions

| **Tâches** | **Difficultés rencontrées**  | **Solutions trouvées**             |
| ---------- | ---------------------------- | ---------------------------------- |
| Reponse    | ref et watch ne marchent pas | Bien les importer en début de code |

## Explications et réflexions sur le code

**À quoi sert l'option immediate: true dans le watch ? Que se passe-t-il si on l'enlève ou si on met immediate: false ?**
immediate: true fait en sorte de forcer l'exécution de l'observateur watch, si on met immediate:false, l'affichage des trus/false selon les questions
s'affiche sous forme de liste vide, c'est à dire que tant que l'utilisateur ne saisit pas une réponse, le watcher ne ns'execute pas, l'execution
n'est donc plus immédiate au début du quizz, mais se met en marque au fur et a mesur qu'une question est répondue

**Proposer une autre manière de calculer le score et comparer les deux méthodes**

    def function submit(event: Event): void {
        event.preventDefault()
        let points = 0
        if (cheval.value === 'blanc') {
            points++
            }
        if (patte.value === '4') {
            points++
        }
        if (capitale.value === 'berne') {
        points++
        }
        if (filled.value) {
            if (points == 3) {
                alert(`Félicitation !! Vous avez fait tout juste !`)
            } else {
                alert(`Vous avez fait ${points} point sur 3 !`)
                }
    }

## **Suite du projet**

option.shift.f

# Projet semmaine : 4 - 5

[Schmidt Rava]

# Temps passé

| **Tâches**         | **Temps estimé** | **Temps passé** |
| ------------------ | ---------------- | --------------- |
| États              | 1h30             | 1h15            |
| Question Rapport 1 | 30 min           | 15 min          |
| Question Rapport 2 | 30 min           |                 |
| Boutons            | 1h30             | 1h05            |
| Réponses immuables | 1h               | 5 min           |
|                    |                  |                 |

**Remarques**

- QuestionState : contient les états possibles pour une question
- Fonction watch : Si la valeur est null, l'état est Empty, Sinon l'état devient Fill,
- Dans submit : map() parcoursl les valeurs de questionStates et leur donne la valeur Submit

| **Tâches**         | **Difficultés rencontrées**                                  | **Solutions trouvées** |
| ------------------ | ------------------------------------------------------------ | ---------------------- |
| Etats              | "from '@/utils/models'" souligné en rouge dans questionRadio |                        |
|                    |                                                              |                        |
| Question Rapport 1 |                                                              |                        |
| Question rapport 2 |                                                              |                        |
| Boutons            |                                                              |                        |
| Réponses immuables |                                                              |                        |
|                    |                                                              |                        |

## Explications et réflexions sur le code

**Comment pourrait-on réécrire la ligne suivante sans l'opérateur ternaire (avec des if et else) ?**

model.value =
value.value === props.answer ? QuestionState.Correct : QuestionState.Wrong;

Remplacé par :
if (value.value === props.answer) {
model.value = QuestionState.Correct;
} else {
model.value = QuestionState.Wrong;
}

**Comment pourrait-on réécrire autrement la logique du watch sur value ?**
une chose qu'on peut modifier dans watch

Comme modèle est maintenant de type boolean, on pourra faire indiquer à chaque question si la réponse est correct ou non

## Projet semaine 6

| **Tâches**                                  | **Temps estimé** | **Temps passé** | **Remarques** |
| ------------------------------------------- | ---------------- | --------------- | ------------- |
| Ajouter des questions et les personnalisées | 30 min           | 1h              |               |
| Réponses détaillées                         | 1h               | 2h              |               |
| Question rapport 1                          | 15 min           | 30 min          |               |
| Question Rapport 2                          | 15min            | 15 min          |               |
| Style                                       | 30min            | 30 min          |               |

| **Tâches**          | **Difficultés rencontrées** | **Solutions Trouvées**                                                              |
| ------------------- | --------------------------- | ----------------------------------------------------------------------------------- |
| Réponses détaillées | computed() non reconnue     | l'ajouter dans l'import "import { ref, computed, watch, type PropType } from 'vue'" |
|                     |                             |                                                                                     |
|                     |                             |                                                                                     |
|                     |                             |                                                                                     |

# Questions rapport :

Ajouter ce computed dans QuestionRadio.vue :

    const answerText = computed<string>(
    () =>
        props.options.find((option) => option.value === props.answer)?.text ??
        props.answer,
    );

Remplacer {{ props.answer }} par {{ answerText }} dans le template.

**Expliquer pourquoi on a fait ce changement ainsi que le code du computed.** :
Texte computed : Dans props.opions on cherche à l'aide de find() une valeur qui correspond à la réponse props.answer. Si on trouve une telle valeur, son text est récupéré pour représenter answerText. Sinon on utilise la valeur props.answer pour answertext.

On le fait car souvent, il y a un décalage entre les value, qui sont souvent des mots clés, courts, et les mêmes peu importe les langues, et leur texte, qui représente l'affichage réel que l'utilisateur voit. Donc on préfère prendre {{ answerText }} dans le template, puisque il représente vraiment la manière dont la valeur est affichée (donc différente par exemple selon les langues), et c'est comme cela qu'on aimerait la réafficher dans notre commentaire : faux ! la réponse était ...

**Que se passe-t-il lorsqu'on ne met pas de valeur à answer-detail ? Est-ce satisfaisant ? Si ce n'est pas le cas, proposer une amélioration**

Un petit trait, caractéristique lorsque une explication, s'affiche. Ce n'est pas satisfaisant car l'on n'aimerait pas qu'il s'affiche, lorsque l'on ne met pas de texte explicatif pour une question.

Dans la baslise <p un élément de class="blockquote-footer" afifiche le petit trait. on doit ajoujer une condition qui fait qu'il s'affiche seulement si answerDetail n'est pas une chaîne vide

    <p class="blockquote-footer">{{ props.answerDetail }}</p> #devient :
    <p v-if="props.answerDetail" class="blockquote-footer">{{ props.answerDetail }}</p>

### Semaine 7

| **Tâche**                  | **Temps estimé** | **Temps passé** |
| -------------------------- | ---------------- | --------------- | --- |
| QuestionCheckbox           | 2h               | 2h10            |
| Amelioration question Text | 1h30             | 1h              |
| Style                      | 30               | 25              |
| Déploiement                | 30               |                 |     |


https://hepl-bs21inf5.github.io/sem07-project-RAVIA33/
