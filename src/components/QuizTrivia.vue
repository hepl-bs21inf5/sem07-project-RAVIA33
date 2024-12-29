<script setup lang="ts">
import QuestionRadio from '@/components/QuestionRadio.vue'
import { reactive, ref, computed, watch } from 'vue'
import { QuestionState } from '@/utils/models' /**/

const questions = ref<
  {
    question: string
    correct_answer: string
    incorrect_answers: string[]
  }[]
>([])

const questionStates = ref<QuestionState[]>([])

fetch('https://opentdb.com/api.php?amount=10&type=multiple')
  .then((response) => response.json())
  .then((data) => {
    questions.value = data.results.map((item: any) => ({
      question: item.question,
      correct_answer: item.correct_answer,
      incorrect_answers: item.incorrect_answers,
    }))
    // Initialiser les états des questions
    questionStates.value = new Array(questions.value.length).fill(QuestionState.Empty)
  })

const score = computed<number>(
  () => questionStates.value.filter((state) => state === QuestionState.Correct).length,
)
const totalScore = computed<number>(() => questionStates.value.length)

const filled = computed<boolean>(() =>
  questionStates.value.every((state) => state === QuestionState.Fill),
)

// Vérification si toutes les questions ont été soumises
const submitted = computed<boolean>(() =>
  questionStates.value.every(
    (state) => state === QuestionState.Correct || state === QuestionState.Wrong,
  ),
)

function submit(event: Event): void {
  event.preventDefault()
  questionStates.value = questionStates.value.map(() => QuestionState.Submit)
}

// Réinitialiser les réponses
function reset(event: Event): void {
  event.preventDefault()
  questionStates.value = questionStates.value.map(() => QuestionState.Empty)
}

// Watcher pour observer l'état des réponses et recalculer le score
watch(
  questionStates,
  (newStates) => {
    // Ici, tu peux recalculer le score ou effectuer d'autres actions
    console.log('Les états des questions ont changé:', newStates)
  },
  { immediate: true }, // Pour que ce watcher soit exécuté dès le début
)
</script>

<template>
  <form @submit="submit" class="container mt-5 p-4 border rounded shadow bg-roseclair">
    <h1 class="text-center text-rose mb-4">Trivia</h1>
    <div v-for="(question, index) in questions" :key="index">
      <QuestionRadio
        :id="index.toString()"
        v-model="questionStates[index]"
        :key="index"
        :answer="question.correct_answer"
        :text="question.question"
        :options="[
          { value: question.correct_answer, text: question.correct_answer },
          ...question.incorrect_answers.map((answer) => ({
            value: answer,
            text: answer,
          })),
        ]"
      />
    </div>
    <button
      class="btn btn-rose-pastel margin-right"
      :class="{ disabled: !filled }"
      @click="submit"
      :disabled="!filled"
    >
      Terminer
    </button>
    <button
      class="btn btn-rose-pastel"
      :disabled="questionStates.some((state) => state === QuestionState.Empty)"
      @click="reset"
    >
      Réinitialiser
    </button>

    <!-- Affichage du score -->
    <div v-if="submitted" class="mt-4 text-center p-3 rounded score-container">
      <strong>Score :</strong> {{ score }} / {{ totalScore }}
    </div>
  </form>
</template>

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
  background-color: #fdedec;
  color: #000;
  border: 1px solid #f9c4cb;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
}
.btn-rose-pastel:hover {
  background-color: #fadadd;
  border-color: #f9c4cb;
}
.btn-rose-pastel {
  transition:
    background-color 0.3s,
    border-color 0.3s;
}
.score-container {
  background-color: #fdedec;
  color: #000;
  border: 1px solid #f9c4cb;
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
