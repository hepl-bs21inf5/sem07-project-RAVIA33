<script setup lang="ts">
import { watch } from 'vue'
import { ref } from 'vue'
import { defineModel, defineProps, type PropType } from 'vue'
import { QuestionState } from '@/utils/models'

/* Définition du modèle, de la proposition et de la valeur*/
const model = defineModel<QuestionState>()
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  placeholder: { type: String, required: true },
  answer: { type: Array as PropType<string[]>, required: true },
  answerDetail: { type: String, default: "" },
})
const value = ref<string | null>(null)

/* Changement des états en fonction de value */
watch(
  value,
  (newValue) => {
    if (newValue === null) {
      model.value = QuestionState.Empty
    } else {
      model.value = QuestionState.Fill
    }
  },
  { immediate: true },
)

watch(model, (newModel) => {
  if (newModel === QuestionState.Submit) {
    // Normalisation des réponses de l'utilisateur et des bonnes réponses
    const normalizedValue = (value.value?.trim().toLowerCase() || '')
    const normalizedAnswers = props.answer.map((ans) => ans.toLowerCase())

    if (normalizedAnswers.includes(normalizedValue)) {
      model.value = QuestionState.Correct
    } else {
      model.value = QuestionState.Wrong
    }
  } else if (newModel === QuestionState.Empty) {
    value.value = null
  }
})


</script>

<!--Logique des questionText avec placeholder-->
<template>
  <label for="props.id" class="form-label">
    {{ props.text }}
  </label>
  <input id="props.id" v-model="value" class="form-control" :placeholder="props.placeholder"
  :disabled="
      model === QuestionState.Submit || 
      model === QuestionState.Correct || 
      model === QuestionState.Wrong
    " />
    <div
    v-if="model === QuestionState.Correct || model === QuestionState.Wrong"
  >
    <p v-if="model === QuestionState.Correct" class="text-success">Juste !</p>
    <p v-else class="text-danger">
      Faux ! La réponse était : {{ props.answer[0] }}
    </p>
    <p v-if="props.answerDetail" class="blockquote-footer">{{ props.answerDetail }}</p>
  </div>
</template>
<style scoped>
  .text-danger {
    color: purple !important;
  }
  .text-success {
    color : turquoise !important ;
  }
  .form-check {
    color : grey !important;
  }
</style>
