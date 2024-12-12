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
  answer: { type: String, required: true },
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
    model.value = value.value === props.answer ? QuestionState.Correct : QuestionState.Wrong
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
      Faux ! La réponse était : {{ props.answer }}
    </p>
    <p v-if="props.answerDetail" class="blockquote-footer">{{ props.answerDetail }}</p>
  </div>
</template>
