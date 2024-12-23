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


<template>
  <form class="container mt-5 p-4 border rounded shadow bg-roseclair">
    <h1 class="text-center text-rose mb-4">Questionnaire</h1>

    
    <QuestionRadio
      id="course-velo"
      v-model="questionStates[0]"
      answer="deuxième"
      text="1. Lors d'une course de vélo, un cycliste double le deuxième. Quelle position occupe-t-il alors ?"
      :options="[
        { value: 'premier', text: 'Premier' },
        { value: 'deuxième', text: 'Deuxième' },
        { value: 'troisième', text: 'Troisième' },
        { value: 'dernier', text: 'Dernier' },
      ]"
      answer-detail="En dépassant le deuxième, il prend la position de celui-ci. "
  
    />

    <QuestionText
      id="clavier"
      v-model="questionStates[1]"
      :answer="['zéro','0', 'le zéro', 'le 0']"
      text="2. Quel chiffre obtient-on en multipliant tous les chiffres d'un clavier ?"
      placeholder="Veuillez choisir une réponse"
      answer-detail="0 étant sur le clavier, nimporte quoi x  0 = 0."
    />

    <QuestionText
      id="pere-fils"
      v-model="questionStates[2]"
      :answer="['trois','3', 'Trois']"
      text="3. Un père et son fils ont 36 ans à eux deux. Le père a 30 ans de plus que son fils. Quel âge a le fils ?"
      placeholder="Veuillez choisir une réponse"
      answer-detail="Le fils a 3 ans, son père donc 3 + 30 = 33. Nous avons bien 3 + 33 = 36"
    />

    <QuestionRadio
      id="etang-poissons"
      v-model="questionStates[3]"
      answer="6"
      text="4. Dans un étang, il y a dix poissons, trois qui sont parties nager au loin et quatre qui sont morts. Combien en reste-t-il ?"
      :options="[
        { value: '10', text: '10' },
        { value: '6', text: '6' },
        { value: '4', text: '4' },
        { value: '8', text: '8' },
      ]"
      answer-detail="Bien qu'il y en aient qui partent nager, ceux-ci restent dans l'étang. Seul ceux qui meurent ne sont plus."
      :useSelect="true"
    />
   
    <QuestionText
      id="souffle"
      v-model="questionStates[4]"
      :answer="['un sèche-cheveux','sèche-cheveux' ]"
      text="5. Je ne respire jamais mais j'ai beaucoup de souffle. Qui suis-je ?"
      placeholder="Veuillez choisir une réponse"
    />
   
    <QuestionText
      id="miroir"
      v-model="questionStates[5]"
      :answer="['un miroir', 'miroir']"
      text="6. Il nous voit vieillir sans rien dire car il est très poli. Qui est-il ?"
      placeholder="Veuillez choisir une réponse"
    />
   
    <QuestionText
      id="monnaie"
      v-model="questionStates[6]"
      :answer="['le sous-marin','sous-marin']"
      text="7. Quelle est la monnaie utilisée par les poissons ?"
      placeholder="Veuillez choisir une réponse"
      answer-detail="Car sous marins, 'sous utilisés dans les espaces marins'."
    />
 
    <QuestionText
      id="aujourdhui"
      v-model="questionStates[7]"
      :answer="['Aujourd\'hui', 'Aujourd’hui', 'Aujourd`hui', 'Aujourd‘hui']"
      text="8. Hier je fus, demain je serai. Qui suis-je ?"
      placeholder="Veuillez choisir une réponse"
    />
    
  
    <QuestionText
      id="moulin"
      v-model="questionStates[8]"
      :answer="['un moulin','moulin']"
      text="9. J'ai des ailes mais je ne vole pas, qui suis-je ?"
      placeholder="Veuillez choisir une réponse"
      answer-detail="le moulin a des ailes qui tournent mais ne vole pas."
    />
   
    <QuestionText
      id="montre"
      v-model="questionStates[9]"
      :answer="['une montre','montre']"
      text="10. Je marche en restant immobile et je peux m'arrêter sans avoir bougé. Qui suis-je ?"
      placeholder="Veuillez choisir une réponse"
    />
   
    <QuestionText
      id="centre-gravite"
      v-model="questionStates[10]"
      :answer="['V']"
      text="11. Quel est le centre de gravité ?"
      placeholder="Veuillez choisir une réponse"
      answer-detail="Le centre du mot 'gravité' est la lettre V."
    />
   
    <QuestionText
      id="feu"
      v-model="questionStates[11]"
      :answer="['le feu', 'feu']"
      text="12. Je détruis tout sur mon passage mais boire de l'eau me tue, je n'ai pas de poumons mais manquer d'air me tue, qui suis-je ?"
      placeholder="Veuillez choisir une réponse"
    />
    <QuestionCheckbox
      id="'questioncheckbox'"
      v-model="questionStates[12]"
      text="13. Quels fruits sont premier et dernier dans l'ordre alphabétique ?'"
      :answer="['apple', 'banana']"
      :options="[
        { value: 'apple', text: 'Pomme' },
        { value: 'banana', text: 'Banane' },
        { value: 'cherry', text: 'Cerise' },
        { value: 'orange', text: 'Orange' },
      ]"
    />

    <!-- Boutons "Terminer" et "Réinitialiser" -->
    <button class="btn btn-rose-pastel margin-right"  :class="{ disabled: !filled }" @click="submit" >Terminer</button>
    <button
      class="btn btn-rose-pastel"
      :disabled="questionStates.some((state) => state === QuestionState.Empty)"
      @click="reset"
    >
      Réinitialiser
    </button>


    <!--Affichage du score-->
    <div v-if="submitted" class="mt-4 text-center p-3 rounded score-container">
      <strong>Score :</strong> {{ score }} / {{ totalScore }}</div>
  </form>
</template>

<!--Style-->
<style scoped>
.container {
  max-width: 800px; 
}
button.btn:hover {
  opacity: 0.9; 
}
.text-rose {
  color: black !important; 
}
.btn-rose-pastel {
  background-color: #FDEDEC; 
  color: #000; 
  border: 1px solid #F9C4CB; 
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
}
.btn-rose-pastel:hover {
  background-color: #FADADD; 
  border-color: #F9C4CB;
}

.btn-rose-pastel {
  transition: background-color 0.3s, border-color 0.3s;
}
.score-container {
  background-color: #FDEDEC; 
  color: #000; 
  border: 1px solid #F9C4CB; 
  border-radius: 0.25rem;
  padding: 1rem;
  text-align: center;
}
.margin-right {
  margin-right: 10px; 
}
.bg-roseclair {
  background-color: #efe7e897; 
}

</style>
