<script setup lang="ts">
import { watch, computed, defineModel, defineProps, ref, type PropType } from 'vue'
import { QuestionState } from '../utils/models'

const model = defineModel<QuestionState>()
const checkedRespsonse = ref([])
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: {
    type: Array as PropType<Array<String>>,
    required: true,
  } /*answer contient la bonne réponse*/,
  answerDetail: { type: String, default: '' },
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
  },
})
const value = ref<string | null>(null) /*Stock la réponse de l'utilisateur*/

const isCorrect = computed<boolean>(() => {
  // Convertir toutes les valeurs en chaînes et les normaliser
  const normalizedChecked = checkedRespsonse.value.map((val) => String(val).toLowerCase())
  const normalizedAnswers = props.answer.map((ans) => String(ans).toLowerCase())

  return (
    normalizedChecked.length === normalizedAnswers.length &&
    normalizedChecked.every((val) => normalizedAnswers.includes(val))
  )
})

watch(
  checkedRespsonse,
  (newChecked) => {
    if (newChecked.length === 0) {
      model.value = QuestionState.Empty
    } else {
      model.value = QuestionState.Fill
    }
  },
  { immediate: true },
)

const answerTexts = computed(() => {
  // Filtrer les options pour récupérer les textes correspondant aux valeurs des réponses
  return props.answer
    .map((value) => {
      const option = props.options.find((option) => option.value === value)
      return option ? option.text : ''
    })
    .join(', ') // Joindre les textes des réponses, séparés par une virgule
})

// Réagit aux changements de l'état (model)
watch(model, (newModel) => {
  if (newModel === QuestionState.Submit) {
    model.value = isCorrect.value ? QuestionState.Correct : QuestionState.Wrong
  } else if (newModel === QuestionState.Empty) {
    checkedRespsonse.value = [] // Réinitialise les cases cochées
  }
})
</script>
<template>
  <div class="mb-4 p-3 border rounded bg-white">
    <div>{{ props.text }}</div>
    <div v-for="option in props.options" :key="option.value" class="form-check">
      <input
        :id="`${props.id}-${option.value}`"
        v-model="checkedRespsonse"
        class="form-check-input"
        type="checkbox"
        :value="option.value"
        :disabled="model === QuestionState.Correct || model === QuestionState.Wrong"
      />
      <label class="form-check-label" :for="`${props.id}-${option.value}`">
        {{ option.text }}
      </label>
    </div>
  </div>
  <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
    <p v-if="model === QuestionState.Correct" class="text-success">Juste !</p>
    <p v-else class="text-danger">Faux ! La réponse était : {{ answerTexts }}</p>
    <p v-if="props.answerDetail" class="blockquote-footer">{{ props.answerDetail }}</p>
  </div>
  <div class="spacer"></div>
</template>
<style scoped>
.spacer {
  margin: 20px 0;
}
.form-check-input:checked {
  background-color: pink; /* Change la couleur de fond du rond */
  border-color: pink; /* Change la couleur de la bordure */
}
.text-danger {
  color: #975774 !important;
}
.text-success {
  color: #e0a6ae !important ;
}
</style>
