# PROJET DE CERTIFICATION - BS21INF5

---

## [Schmidt Ravia - P58564]

### https://hepl-bs21inf5.github.io/sem07-project-RAVIA33/

# Projet semaine : 1

---

## Rapport horaire

| **Tâche** | **Temps estimé** | **Temps passé** | **Remarque**                                                                                                                                                                                                                      |
| --------- | ---------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vue.js    | 15 min           | 20 min          | Etape initiale qui permet de bien démarrer le projet et d'avoir une structure solide pour que le reste du développement                                                                                                           |
| Bootstrap | 15 min           | 30 min          | L'intégration de Bootstrap permet de rendre l'application responsive, c'est-à-dire qu'elle s'adapte aux différents appareils, tout en facilitant son développement et son apparence.                                              |
| Quiz      | 1h 30 min        | 2h 30 min       | Création des questions-réponses. La fonction submit utilise event.preventDefault(); pour empêcher le rechargement de la page lors de l’envoi des réponses. "@click" pour appeler la fonction reset lors d'un clique sur le bouton |
| Rapport   | 30 min           | 10 min          |                                                                                                                                                                                                                                   |
|           |                  |                 |                                                                                                                                                                                                                                   |

## Difficultés rencontrées et solutions

| **Tâches** | **Difficultés rencontrées**                                                                      | **Solutions trouvées**                              |
| ---------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| Vue.js     | Dossiers "invisibles" cachés dans le dossier quizz                                               | option+shift+"." pour les afficher                  |
| Quiz       | Problème de compréhension au niveau de la structure script- Template, écrit 2 script au début... | Poser des questions, tester et faire des recherches |

## Explications et réflexions sur le code

## Le rôle des fichiers suivants :

### Main.ts

Le fichier main.ts a pour rôle d'initialiser l'application, en important Vue, Bootstrap, et les routes, à savoir, les différentes pages que l'utilisateur peut visiter.
Il crée une instance de l'application Vue, lui fait utiliser les routeurs définits et la rattache à un élément html "#app

---

### Main.css

Main.ccss a pour rôle de personnaliser l'apparence de l'application, comme la couleur, ou d'autres éléments visuels

---

### App.vue

Le fichier App.vue est le composant racine de l'application Vue, il inclut la structure de base de l'application, plus précisément
la barre de naviguation. Et il utilise les routes définies pour afficher le contenue de chaque page (ex : HomeView.vue, AboutView

---

### Router/index.ts

Il configure les routes, définit quelles vues sont associées avec quelle vue sont associées à quelle URL, ici en particulier pour les pages HomeView et AboutView
(pages "quiz" et "à propos" sur le site)

---

### AboutView.vue

Représente la page "A propos" de l'application. Ce genre de page à pour but de transmettre des informations, par exemple sur le projet, ou l'équipe

---

### HomeView.vue

Représente la page d'acceuil de l'application, et renvoi grâce à un lien, au quiz

---

### QuizForm.vue

Ce composant contient la forme du quizz, , à savoir les questions, les options de réponses, la sélection des réponses, le calcul du score,
et l'affichage des résultats. Il inclue aussi les boutons "Terminer" et "Rénitialiser et gère logiquement les états du quizz."

---

### Dans le fichier Quizform.vue

**Quelles sont les similarités et les différences entre ref et computed** :
Ref et computed sont tout deux des fonctionnalités de Vue destinées à gérer des données réactives. Lorsque les valeur de ref ou computed changent,
les parties dépendantes de ces valeurs se mettent automatiquement à jour dans l'interface. La différence est que ref crée des variables réactives
qui peuvent être modifiée instantanément, on l'utilise donc plus pour des valeurs qui vont beaucoup changer, comme par exemple une réponse
sélectionnée par l'utilisateur. Computed est plutôt utilisé pour définir des valeurs basées sur d'autres variables réactives, ces valeurs
sont recalculées automatiquement lorsque les variables sources changent.

---

**Que se passe-t-il lorsqu'on clique sur le bouton "Terminer" :**
Les réponses données par l'utilisateur sont vérifiées et comparées avec les bonnes réponses, le score est calculé en fonction de ces comparaisons
le score est afficher sous forme de message.

---

**A quoi sert v-model ? :**
C'est une fonctionalité de liaison bidirectionelle en Vue, qui lie une valeur entre un élément en HTML et une donnée dans le composant Vue. Ici
on l'utilise pour lier les réponses selectionées aux données du composant, pour que la variable qui y correspond dans le composant soit
mis a jour automatiquement.

---

**A quoi sert le :class"{disabled:!filled}" :**
Cette syntaxe est une Liaison conditionnelle en Vue qui empêche l'utilisateur de cliquer sur "Terminer" Tant que toutes les réponses n'ont pas été
répondues. Le bouton est "disabled" donc inactif lorsque !filled est vrai, c'est à dire lorsque tout n'est pas entièrement rempli

---

**Suite du projet** :
+ On pourrait ajouter de nouvelles fonctionnalités, comme des catégories pour les questions, des niveaux selon la difficulté. On pourrait adapter le design afin qu'ils soit compatible avec téléphone
et tablettes, ou ajouter des thèmes personnalisables, par exemple mode sombre/clair

# Projet semaine 2

## Rapport horaire

| **Tâche**        | **Temps estimé** | **Temps passé** | **Remarque**                                                                                                                     |
| ---------------- | ---------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| QuestionRadio    | 1h               | 1h05            | QuestionRadio : Représente un composant réutilisable pour afficher une question avec des boutons radio.                          |
|                  |                  |                 | v-model="..." : Liaison bi-directionnelle entre la réponse choisie et une variable dans le parent (...)                          |
|                  |                  |                 | ":options" : Liste des options de réponse avec leurs valeurs (value) et textes affichés (text                                    |
|                  |                  |                 | defineProps : Spécifie les données que le composant reçoit (id, text, optio...)                                                  |
|                  |                  |                 |                                                                                                                                  |
| Questiontext     | 30 min           | 4h              | QuestionText : Nouveau composant pour les questions à réponse ouverte.                                                           |
|                  |                  |                 | text : La question affichée                                                                                                      |
|                  |                  |                 | v-model="model" : L'attribut v-model relie la valeur du champ d'entrée dans la balise input) à une variable nommée model.        |
|                  |                  |                 | Le placeholder est un attribut HTML qui affiche un texte d'indication dans un champ, visible tant qu'aucune valeur n'est saisie. |
|                  |                  |                 | Enormément de mal à comprendre comment correctement lier mes variables, difficultés à répondre a la question également.          |
|                  |                  |                 |                                                                                                                                  |
| QuestionCheckbox | 1h               | 1h              | Multisélection : Les checkboxes permettent de sélectionner plusieurs réponses, ajoutant de la flexibilité au quiz.               |
|                  |                  |                 | Comme optionelle, à finir plus tard                                                                                              |
|                  |                  |                 |                                                                                                                                  |
| API              | 1h               | 1h30            | RouterLink class="nav-link" to="/trivia" : lien dans la bare de navigation, vers la vue TriviaView                               |
|                  |                  |                 | a href="https://opentdb.com/" target="\_blank">Open Trivia Database</a : lien vers la source de questions                        |
|                  |                  |                 | fetch : Effectue une requête HTTP GET pour obtenir 10 questions à choix multiples.                                               |
|                  |                  |                 | On réutilise le composant QuestionEadio                                                                                          |
|                  |

## Difficultés rencontrées et solutions

| **Tâches**    | **Difficultés rencontrées**                                                                  | **Solutions trouvées**                                               |
| ------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| QuestionRadio | Pas sûre au début de comment modifier le code dans Quizform                                  | Tester selon le modèle donné et voir si ça fonctionne, puis ajuster  |
| Questiontext  | Placeholder qui ne s'affichait pas                                                           | Attribu mal écrit                                                    |
|               | Une fois afficher, lorsque rempli, impossible de cliquer sur terminer                        | Problème dans l'événement du bouton : adapter la fonction submit     |
|               | complications pour rendre le placeholder optionnelle                                         | Mettre une valeur par défaut. Vue.js nous donne le mot clé "Default" |
|               | Est-ce que c'est normal que je puisse modifier les reponses après avoir cliqué sur terminé ? | oui pour l'instant                                                   |
| API           | Après avoir suivi à la lettre les instructions, le code ne marche pas                        | problème dans router, attention à l'othographe                       |

## Explications et réflexions sur le code

**Quelle est la différence entre un prop et un modèle (v-model) ? :**
+ Un prop est unidirectionnelle, c'est une donnée que le composant parent transmet à un composant enfant. Un v-model est bidirectonnelle, il se transmet du parent à l'enfant et inversément

---

**Comment rendre la fonction placeholder optionelle :**
+ La variable filled, s'assurant que les réponses transmises ne sont pas nul doit être modifié. On retire tout simplement le code
vérifiant que patte.value n'est pas nulle

## **Suite du projet**
+ On pourrait personnalisé nos questions et  on pourrait donner des feedbacks visuels, par exemple rouge sur les questions incorrectes
et vers si correctes, on pourrait fournir des explications aux réponses,

# Projet semaine 3

## Rapport horaire

| **Tâche**       | **Temps estimé** | **Temps passé** | **Remarque**                                                                                                                                                                     |
| --------------- | ---------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Réponse         | 2h               | 1h30            | Dans le watch, la logique de vérification compare la réponse correcte (fournie dans props.answer) avec la saisie utilisateur (value) pour déterminer si la réponse est correcte. |
|                 |                  |                 | immediate : garantit que le système fonctionne dès le départ, sans attendre une interaction.                                                                                     |
|                 |                  |                 | Chaque composant question valide immédiatement la réponse donnée par l'utilisateur en temps réel.                                                                                |
|                 |                  |                 |                                                                                                                                                                                  |
| Réponse rapport | 30 min           | 45 min          |                                                                                                                                                                                  |
|                 |                  |                 |                                                                                                                                                                                  |
| Score           | 1h30             | 1h30            | Méthode alternative pour le score : le score est calculé en filtrant les états des questions (questionStates) qui sont marqués comme Correct                                     |
|                 |                  |                 | totalScore : Le total des questions est obtenu en comptant le nombre total d'états dans questionStates.                                                                          |
|                 |                  |                 |                                                                                                                                                                                  |
| Réponse rapport | 1h               | 50 min          |                                                                                                                                                                                  |
|                 |

## Difficultés rencontrées et solutions

| **Tâches** | **Difficultés rencontrées**      | **Solutions trouvées**                           |
| ---------- | -------------------------------- | ------------------------------------------------ |
| Reponse    | ref et watch ne fonctionnent pas | Bien les importer en début de code               |
|            | Les boutons ne fonctionnent plus | Pas grave pour le moment, nous verrons plus tard |

## Explications et réflexions sur le code

**À quoi sert l'option immediate: true dans le watch ? Que se passe-t-il si on l'enlève ou si on met immediate: false ?**

---

+ immediate: true fait en sorte de forcer l'exécution de l'observateur watch, si on met immediate:false, l'affichage des trus/false selon les questions
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

**Comparaison:**

- Cette méthode repose sur des conditions simples qui conduisent à un comptage manuel. Elle est simple à implémenter et à comprendre. Et est très directe
- La méthode utilisant des questionStates est plus flexible et evolutive car elle repose sur un tableau d'état questionState qui peut évoluer selon le nombre de questions. Sa modularité est avantageuse, on peut facilement ajouter ou modifier des questions sans avoir à réécrire de logique conditionnelle. Il suffit d'ajouter ou de modifier les éléments dans questionStates. Elle permet aussi de suivre l'évolution de chaque question de manière détaillée (remplie, correcte, incorrecte. Son inconvéniant et qu'elle est un peu plus compliquée à comprendre au départ.

## **Suite du projet** 
+ Nous pourrions donner des explications aux questions, pour que l'utilisateur apprenne bien

# Projet semmaine 4 - 5

## Rapport horaire

| **Tâches**         | **Temps estimé** | **Temps passé** | **Remarques**                                                                                                                      |
| ------------------ | ---------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| États              | 1h30             | 1h15            | enum : Les états disponibles sont Empty, Fill, Submit, Correct, et Wrong. Chaque question peut évoluer dans un cycle logique       |
|                    |                  |                 | Le tableau questionStates contient l'état de chaque question, initialisé avec Empty                                                |
|                    |                  |                 | Le score est calculé en comptant le nombre d'états Correct dans questionStates                                                     |
|                    |                  |                 | Les watchers permettent de réagir automatiquement aux changements de réponse ou d'état                                             |
|                    |                  |                 | Si la valeur est null, l'état est Empty, Sinon l'état devient Fill                                                                 |
|                    |                  |                 |                                                                                                                                    |
| Question Rapport 1 | 30 min           | 15 min          |                                                                                                                                    |
| Question Rapport 2 | 30 min           |                 |                                                                                                                                    |
|                    |                  |                 |                                                                                                                                    |
| Boutons            | 1h30             | 1h05            | Dans submit : map() parcours les valeurs de questionStates et leur donne la valeur Submit                                          |
|                    |                  |                 | Le bouton "Réinitialiser" remet toutes les questions à l'état initial (Empty) et leur contenu à vide                               |
|                    |                  |                 | Dans filled : "every" Vérifie que toutes les questions sont dans l'état Fill (l'utilisateur a répondu à toutes les questions)      |
|                    |                  |                 | submitted : Retourne true uniquement si toutes les questions ont été corrigées.                                                    |
| Réponses immuables | 1h               | 5 min           | Une fois qu'un utilisateur soumet une réponse, celle-ci ne doit plus être modifiable, on préserve l'intégrité des données soumises |
|                    |                  |                 | La propriété :disabled dans Vue est utilisée pour conditionner l'état actif ou inactif d'un champ de saisie                        |

| **Tâches** | **Difficultés rencontrées**                                  | **Solutions trouvées**                         |
| ---------- | ------------------------------------------------------------ | ---------------------------------------------- |
| Etats      | "from '@/utils/models'" souligné en rouge dans questionRadio | ../utils/models ne pas oublier les deux points |

## Explications et réflexions sur le code

**Comment pourrait-on réécrire la ligne suivante sans l'opérateur ternaire (avec des if et else) ?**

```
model.value =
value.value === props.answer ? QuestionState.Correct : QuestionState.Wrong;
```

Remplacé par :

```
if (value.value === props.answer) {
model.value = QuestionState.Correct;
} else {
model.value = QuestionState.Wrong;
}
```

**Comment pourrait-on réécrire autrement la logique du watch sur value ?**

```
watch(
  value,
  (newValue) => {
    model.value = props.answer === newValue; // true si la réponse est correcte, false sinon
  },
  {
    immediate: true, // Exécute le watch immédiatement à l'initialisation
  }
);
```

Au lieu de gérer plusieurs états comme Empty ou Fill, on change le modèle (model.value) en un booléen.
Il est défini comme true si la réponse de l'utilisateur correspond à la bonne réponse (props.answer), et false sinon

## **Suite du projet** 
+ Et si on rajoutait un timer ? un temps imparti pour répondre aux questions, après lequel nos réponses serait soumises

# Projet semaine 6

## Rapport horaire

| **Tâches**                                 | **Temps estimé** | **Temps passé** | **Remarques**                                                                                                                                                                                                                                |
| ------------------------------------------ | ---------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ajouter des questions et les personnaliser | 30 min           | 1h              | En s'inspirant des modèles présents.                                                                                                                                                                                                         |
| Réponses détaillées                        | 1h               | 2h              | Pour offrir aux utilisateurs une explication claire et pédagogique de la réponse correcte après la correction.                                                                                                                               |
|                                            |                  |                 | on ajoute dans props laa propriété answerDetail qui fourni des explications supplémentaires après la correction. Une chaîne de charactère vide, par défaut                                                                                   |
|                                            |                  |                 | Affichage des détails dans le template : Juste/Faux conditionnellement affiché selon si la réponse est correcte ou non. (v-if), answerDetail est oujours affiché en tant que texte explicatif, quel que soit l'état de la réponse            |
|                                            |                  |                 | Dans questionRadio : on remplace answerDetail dans le v-else par un computed answerText, car la a réponse correcte (props.answer) peut être une valeur technique (value des options) qui ne correspond pas au texte affiché à l'utilisateur. |
|                                            |                  |                 |                                                                                                                                                                                                                                              |
| Question rapport 1                         | 15 min           | 30 min          |                                                                                                                                                                                                                                              |
|                                            |                  |                 |                                                                                                                                                                                                                                              |
| Question Rapport 2                         | 15min            | 15 min          |                                                                                                                                                                                                                                              |
| Style                                      | 30min            | 30 min          | La balise "scoped" limite les styles au composant où ils sont définis. Cela empêche les styles de déborder dans d'autres parties de l'application                                                                                            |

| **Tâches**          | **Difficultés rencontrées** | **Solutions Trouvées**                                                              |
| ------------------- | --------------------------- | ----------------------------------------------------------------------------------- |
| Réponses détaillées | computed() non reconnue     | l'ajouter dans l'import "import { ref, computed, watch, type PropType } from 'vue'" |

---

## Réflexions et explications sur le code :

On a ajouté ce computed dans QuestionRadio.vue :

    const answerText = computed<string>(
    () =>
        props.options.find((option) => option.value === props.answer)?.text ??
        props.answer,
    );

Et remplacé {{ props.answer }} par {{ answerText }} dans le template.

**Expliquer pourquoi on a fait ce changement ainsi que le code du computed :**
+ Comprenons d'abord ce qu'il se passe : dans props.opions on cherche à l'aide de find() une valeur qui correspond à la réponse props.answer. Si on trouve une telle valeur, son text est récupéré pour représenter answerText. Sinon on utilise la valeur props.answer pour answertext.
+ On fait un changement ici car souvent, il y a un décalage entre les value, qui sont souvent des mots clés, courts, et les mêmes peu importe les langues, et leur texte, qui représente l'affichage réel que l'utilisateur voit. Donc on préfère prendre {{ answerText }} dans le template, puisque il représente vraiment la manière dont la valeur est affichée (donc différente par exemple selon les langues), et c'est comme cela qu'on aimerait la réafficher dans notre commentaire : faux ! la réponse était ...

**Que se passe-t-il lorsqu'on ne met pas de valeur à answer-detail ? Est-ce satisfaisant ? Si ce n'est pas le cas, proposer une amélioration :**
+ Un petit trait s'affiche. Ce n'est pas satisfaisant car l'on n'aimerait pas qu'il s'affiche, lorsque l'on ne met pas de texte explicatif pour une question.

Dans la baslise "p" un élément de class="blockquote-footer" afifiche le petit trait. on doit ajouter une condition qui fait qu'il s'affiche seulement si answerDetail n'est pas une chaîne vide

    <p class="blockquote-footer">{{ props.answerDetail }}</p> #devient :
    <p v-if="props.answerDetail" class="blockquote-footer">{{ props.answerDetail }}</p>

## **Suite du projet** 
On pourrait créer d'autres pages de quizz, selon les thèmes ou la difficulté choisie. 

# Projet semaine 7

| **Tâche**                                    | **Temps estimé** | **Temps passé** | **Remarques**                                                                                                                                                                                                                         |
| -------------------------------------------- | ---------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| QuestionCheckbox                             | 2h               | 2h10            | checkedNames est une référence (ref) de type tableau qui garde les réponses sélectionnées par l'utilisateur. Initialisé comme un tableau vide, il se remplit avec les valeurs des cases cochées.                                      |
|                                              |                  |                 | v-model lie bidirectionnellement les cases à cocher au tableau checkedNames, mettant à jour ce dernier chaque fois qu'une case est cochée ou décochée.                                                                                |
| Amelioration QuestionText                    | 1h30             | 1h              |                                                                                                                                                                                                                                       |
| Déploiement                                  | 30               | 20              | Le déploiement sur GitHub Pages est essentiel pour rendre un projet web accessible en ligne, en automatisant la construction et la publication via GitHub Actions, ce qui simplifie le processus de partage et de mise à jour du site |
|                                              |                  |                 | Mises à jour automatiques : À chaque push sur la branche main, GitHub Actions reconstruit et redéploie automatiquement le site, garantissant sa mise à jour sans effort manuel.                                                       |
| style personnalisé                           | 1h               | 50 min          | couleurs rose pastelle, bouton score, espacement boutons, style des questions avec bootstrap                                                                                                                                          |
| Personalisation aboutView                    | 15 min           | 10              | Gérer avec l'IA, car bonnes idées et créatif avec bootstrap : utilisation de card, symboles etc..                                                                                                                                     |
|                                              |                  |                 | Les cartes (éléments .card) sont utilisées pour organiser l'information de manière visuellement attrayante,                                                                                                                           |
|                                              |                  |                 | Les classes container, row et col proviennent du système de grille de Bootstrap, qui est utilisé pour créer des mises en page flexibles et réactives                                                                                  |
| Menu déroulant                               | 30               | 1h              |                                                                                                                                                                                                                                       |
| Ordre aléatoire des choix dans CheckBox      |                  |                 |                                                                                                                                                                                                                                       |
| Amelioration Trivia                          | 1h               | 4h              | bugs, problèmes de liens avec questionRadio, je l'a abandonné plusieurs fois                                                                                                                                                                                                                                  |
| Nettoyage et vérifications                   | 10 min           | 15              |                                                                                                                                                                                                                                       |
| Complétion du rapport pour les améliorations | 1h30             | 2h30            |                                                                                                                                                                                                                                       |
| Complétion du rapport pour le rendu jour-j   | 3h               | 4h30            |                                                                                                                                                                                                                                       |

---

# Explications des démarche pour les améliorations choisies :

## Accepter plusieurs réponses possibles pour QuestionText.vue (par exemple, "2" ou "deux").

**Pourquoi cette amélioration** :
+ Pour apporter accorder à l'utilisateur une certaine flexibilité dan sa manière de répondre. En effet, celui-ci devrait pouvoir se permettre d'écrire avec des majuscules, ou non, ou avec diversed représentations de la bonne réponse, comme "0" pour dire "zéro". Les compter comme correct est plus juste que de compter faux alors que l'idée est la bonne

**Implémentation :**

- La réponse est désormais une liste, qui peut contenir plusieurs représentation d'une réponse

```
:answer="['zéro', '0]"
```

**Normalisation des réponses: on convertit les réponses de l'utilisateur et les réponses attendues en minuscules pour les comparer de manière uniforme : **

- Normalisation des réponses de l'utilisateur : on crée une liste de réponses normalisées où l'on supprime les espaces avant/après la réponse de l'utilisateur (trim), convertit les réponses en minuscules (toLowerCase), et si aucune réponse n'est saisie (value.value est null ou undefined), elle retourne une chaîne vide (|| '')
- Normalisation des réponses attendues : on crée une liste de réponses correct normalisée en parcourant props.answer avec .map ( qui permet des itérations sur un tableau) et en utilisant la méthode .toLowerCase())

```typescript
const normalizedValue = value.value?.trim().toLowerCase() || ''
const normalizedAnswers = props.answer.map((ans) => ans.toLowerCase())
```

- Adaptation de la logique de comparaison : ce sont maintenant les réponses normalisées qui sont comparées.

```
if (normalizedAnswers.includes(normalizedValue)) {
  model.value = QuestionState.Correct
} else {
  model.value = QuestionState.Wrong
}
```

**Problèmes rencontrés :**
+ Au début j'avais commencé à apporter cette modification en mettant dans la liste de réponses, toutes les variantes possibles avec des majuscules, mais c'était trop long. Je ne connaissais .toLowerCase et n'avais pas eu au départ de normaliser les réponses

**Autres améliorations :**
+ On pourrait faire en sorte que peut importe le déterminant, la réponse soit juste, en disant que si un mot de la réponse de l'utilisateur, est contenue dans la réponse correct, alors le point est donné.

## Selection de plusieurs réponses pour les questionCheckbox :

**Pourquoi cette amélioration** : 
+ cela permet d'élargir le spectre des questions que l'on peut poser aux utilisateurs, d'apporter de la variété, à savoir, ici, des questions qui admettent plusieurs réponses.

**Implémentation :**

- Création de checkedResponse : un tableau qui permet le stockage de plusieurs réponses, non plus une valeure unique.

```
const checkedRespsonse = ref([])
```

- Changement du v-model dans QuestionCheckbox : "v-model="checkedRespsonse" grâce à cette liaison quand l'utilisateur coche des cases, plusieurs valeures s'ajoutent au tableau.

```
v-model="checkedRespsonse"
```

- Changement du format de props.answer : qui devient une liste contenant plusieurs réponses.

```
:answer="['apple', 'banana']"
```

- Gestion de la logique de correction avec la variable isCorrect : On effectue d'abord une normalisation, comme dans l'amélioration des QuestionText (transformation de la réponse selectionnée en chaîne de caractère minuscule). On Vérifie si le nombre de réponses sélectionnées correspond à celui des réponses correctes. Puis on érifie si chaque réponse sélectionnée figure parmi les réponses correctes.

```
const isCorrect = computed<boolean>(() => {
  const normalizedChecked = checkedRespsonse.value.map((val) => String(val).toLowerCase())
  const normalizedAnswers = props.answer.map((ans) => String(ans).toLowerCase())

  return (
    normalizedChecked.length === normalizedAnswers.length &&
    normalizedChecked.every((val) => normalizedAnswers.includes(val))
  )
})
```

**Problèmes rencontrés :**
+ Problèmes d'importations : comme des watch, des computed, ref, QuestionState. Ne pas oublier de les importer sinon rien ne fonctionne

**Autres améliorations :**
+On pourrait créer un type de questions proche du QuestionCheckbox, pour lesquels lorsqu'au moins une des propositions de l'utilisateurs est dans la liste des réponses correctes, la réponse à la question est comptée comme juste.

## Sélectionner une réponse dans une liste déroulante.

**Pourquoi cette amélioration :** 
+ Apporter de la variété dans la manière de sélectionner ses réponses

**Implémentation :**

- Ajout de la propriété useSelect : on la définie dans les props pour indiquer si le composant doit utiliser un menu déroulant, par défaut, on ne l'utilise pas.

```
useSelect: { type: Boolean, default: false },
```

- Modification du template pour inclure un menu déroulant : Dans le template , une condition est ajoutée pour vérifier si props.useSelect est vrai. Si c'est le cas, un menu déroulant est utilisé au lieu des boutons radio. Sinon, c'est comme avant

```
<div v-if="props.useSelect">
      <select
        v-model="value"
        :id="props.id"
        class="form-select"
        aria-label="Sélectionner une réponse"
      >
        <option disabled value="">Veuillez choisir une réponse</option>
        <option v-for="option in props.options" :key="option.value" class="form-check">
          {{ option.text }}
        </option>
      </select>
    </div>
    <div v-else>
      <div v-for="option in props.options" :key="option.value" class="form-check">
        <input
          :id="`${props.id}-${option.value}`"
          v-model="value"
          class="form-check-input"
          type="radio"
          :name="props.id"
          :value="option.value"
        />
```

- Dans quizForm applique la propriété pour les questions souhaitées en mettant une valeur "true" à :useSelect

```
<QuestionRadio
  id="etang-poissons"
  v-model="questionStates[3]"
  answer="6"
  text="4. Dans un étang, il y a dix poissons, trois qui sont partis nager au loin et quatre qui sont morts. Combien en reste-t-il ?"
  :options="[
    { value: '10', text: '10' },
    { value: '6', text: '6' },
    { value: '4', text: '4' },
    { value: '8', text: '8' }
  ]"
  :useSelect="true"
  answer-detail="Bien qu'il y en ait qui partent nager, ceux-ci restent dans l'étang. Seuls ceux qui meurent ne sont plus."
/>
```

## Amélioration pour avoir un Trivia fonctionnel

**Pourquoi cette amélioration** : apporte de la variété dans le choix des questions, qui sont générées depuis une base de données

**Implémentation :** très basées sur les codes fait dans questionState et QuestionRadio. Tout ce qui permet de calculer le score, d'avoir des boutons fonctionnels, est utilisé.
+ Ajout des états des questions (questionStates) comme dans Quizform
+ Ajout des logique de submit et de reset
+ ajout de variables nécessaires : filled, submitted, score, totalScore
+ Ajout de l'initialisation des états dans fetch : Chaque question est associée à un état initial Empty, indiquant qu'aucune réponse n'a encore été donnée
+ Ajout d'un watch : pour suivre en direct les changements des états des questions (questionStates).

**Problèmes rencontrés :**
+ Trop de questions importées : double boucle qui a fait générer un surplus
+ Au départ, ma logique de score ne fonctionnait pas. J'avais toujours 0 et les boutons non plus ne fonctionnaient pas. J'ai donc tout recommencer en m'inspirant plus fortement du code de Quizform
+ Malheureusement. un trait bloque-footer s'affiche dans Trivia, alors que, dans questionRadio ce problème était régler avec un v-if = "Answerdetail", mais là rien n'y fait. 

**Autres améliorations :**
+ Importer plus de questions, et de différents niveaux (facile, moyen, dur) ou de type autre que QuestionRadio, comme  Questiontext ou encore QuestionCheckbox
