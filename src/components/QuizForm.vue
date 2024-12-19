<script setup lang="ts">
import { computed, ref } from 'vue'
import QuestionRadio from '@/components/QuestionRadio.vue'
import QuestionText from '@/components/QuestionText.vue'
import QuestionCheckbox from './QuestionCheckbox.vue'
import { QuestionState } from '@/utils/models'
import type { vModelCheckbox } from 'vue'

/*Variables d'états des questions et du score*/
const questionStates = ref<QuestionState[]>([])

const filled = computed<boolean>(() =>
  questionStates.value.every((state) => state === QuestionState.Fill),
)
const submitted = computed<boolean>(() =>
  questionStates.value.every(
    (state) => state === QuestionState.Correct || state === QuestionState.Wrong,
  ),
)
const score = computed<number>(
  () => questionStates.value.filter((state) => state === QuestionState.Correct).length,
)
const totalScore = computed<number>(() => questionStates.value.length)

/* Fonctions appliquées aux boutons "Terminer" et Réinitialiser : */
function submit(event: Event): void {
  event.preventDefault()
  questionStates.value = questionStates.value.map(() => QuestionState.Submit)
}
function reset(event: Event): void {
  event.preventDefault()
  questionStates.value = questionStates.value.map(() => QuestionState.Empty)
}
</script>

<!--Questions du quiz-->
<template>
  <form>
    <!-- Question 1 : Course de vélo -->

    <QuestionRadio
      id="course-velo"
      v-model="questionStates[0]"
      answer="deuxième"
      text="Lors d'une course de vélo, un cycliste double le deuxième. Quelle position occupe-t-il alors ?"
      :options="[
        { value: 'premier', text: 'Le premier' },
        { value: 'deuxième', text: 'Le deuxième' },
        { value: 'troisième', text: 'Le troisième' },
        { value: 'dernier', text: 'Le dernier' },
      ]"
      answer-detail="En dépassant le deuxième, il prend la position de celui-ci. "
    />

    <!-- Question 2 : Clavier numérique -->
    <QuestionText
      id="clavier"
      v-model="questionStates[1]"
      :answer="['zéro','0',  'Zéro']"
      text="Quel chiffre obtient-on en multipliant tous les chiffres d'un clavier ?"
      placeholder="Veuillez choisir une réponse"
      answer-detail="0 étant sur le clavier, nimporte quoi x  0 = 0."
    />
    

    <!-- Question 3 : Le père et son fils -->
    <QuestionText
      id="pere-fils"
      v-model="questionStates[2]"
      :answer="['trois','3', 'Trois']"
      text="Un père et son fils ont 36 ans à eux deux. Le père a 30 ans de plus que son fils. Quel âge a le fils ?"
      placeholder="Veuillez choisir une réponse"
      answer-detail="Le fils a 3 ans, son père donc 3 + 30 = 33. Nous avons bien 3 + 33 = 36"
    />
    

    <!-- Question 4 : Énigme -->
    <QuestionRadio
      id="etang-poissons"
      v-model="questionStates[3]"
      answer="6"
      text="Dans un étang, il y a dix poissons, trois qui sont parties nager au loin et quatre qui sont morts. Combien en reste-t-il ?"
      :options="[
        { value: '10', text: '10' },
        { value: '6', text: '6' },
        { value: '4', text: '4' },
        { value: '8', text: '8' },
      ]"
      answer-detail="Bien qu'il y en aient qui partent nager, ceux-ci restent dans l'étang. Seul ceux qui meurent ne sont plus."
    />
    

    <!-- Question 5 : Énigme -->
    <QuestionText
      id="souffle"
      v-model="questionStates[4]"
      :answer="['un sèche-cheveux','sèche-cheveux' ]"
      text="Je ne respire jamais mais j'ai beaucoup de souffle. Qui suis-je ?"
      placeholder="Veuillez choisir une réponse"
    />
    

    <!-- Question 6 : Énigme -->
    <QuestionText
      id="miroir"
      v-model="questionStates[5]"
      :answer="['un miroir', 'miroir']"
      text="Il nous voit vieillir sans rien dire car il est très poli. Qui est-il ?"
      placeholder="Veuillez choisir une réponse"
    />
    

    <!-- Question 7 : Énigme -->
    <QuestionText
      id="monnaie"
      v-model="questionStates[6]"
      :answer="['le sous-marin','sous-marin']"
      text="Quelle est la monnaie utilisée par les poissons ?"
      placeholder="Veuillez choisir une réponse"
      answer-detail="Car sous marins, 'sous utilisés dans les espaces marins'."
    />
    

    <!-- Question 8 : Énigme -->
    <QuestionText
      id="aujourdhui"
      v-model="questionStates[7]"
      :answer="['Aujourd\'hui']"
      text="Hier je fus, demain je serai. Qui suis-je ?"
      placeholder="Veuillez choisir une réponse"
    />
    

    <!-- Question 9 : Charade -->
    <QuestionText
      id="moulin"
      v-model="questionStates[8]"
      :answer="['un moulin','moulin']"
      text="J'ai des ailes mais je ne vole pas, qui suis-je ?"
      placeholder="Veuillez choisir une réponse"
      answer-detail="le moulin a des ailes qui tournent mais ne vole pas."
    />
    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit"></button>

    <!-- Question 10 : Charade -->
    <QuestionText
      id="montre"
      v-model="questionStates[9]"
      :answer="['une montre','montre']"
      text="Je marche en restant immobile et je peux m'arrêter sans avoir bougé. Qui suis-je ?"
      placeholder="Veuillez choisir une réponse"
    />
    

    <!-- Question 11 : Charade -->
    <QuestionText
      id="centre-gravite"
      v-model="questionStates[10]"
      :answer="['V']"
      text="Quel est le centre de gravité ?"
      placeholder="Veuillez choisir une réponse"
      answer-detail="Le centre du mot 'gravité' est la lettre V."
    />
   

    <!-- Question 12 : Énigme -->
    <QuestionText
      id="feu"
      v-model="questionStates[11]"
      :answer="['le feu', 'feu']"
      text="Je détruis tout sur mon passage mais boire de l'eau me tue, je n'ai pas de poumons mais manquer d'air me tue, qui suis-je ?"
      placeholder="Veuillez choisir une réponse"
    />
    <QuestionCheckbox
      id="'questioncheckbox'"
      v-model="questionStates[12]"
      text="Quel(s) fruit(s) aimez-vous ?'"
      :answer="['apple', 'banana']"
      :options="[
        { value: 'apple', text: 'Pomme' },
        { value: 'banana', text: 'Banane' },
        { value: 'cherry', text: 'Cerise' },
        { value: 'orange', text: 'Orange' },
      ]"
    />

    <!-- Boutons "Terminer" et "Réinitialiser" -->
    <button class="btn btn-primary" :class="{ disabled: !filled }" @click="submit">Terminer</button>
    <button
      class="btn btn-primary"
      :disabled="questionStates.some((state) => state === QuestionState.Empty)"
      @click="reset"
    >
      Réinitialiser
    </button>

    <!-- À utiliser pour vérifier que la logique d'état fonctionne : <div>Debug états : {{ questionStates }}</div>-->

    <!--Affichage du score-->
    <div v-if="submitted">Score : {{ score }} / {{ totalScore }}</div>
  </form>
</template>
<style scoped>
.btn btn-primary {
  color: gray !important;
}
</style>
