<script setup lang="ts">
import { ref, computed, watch, type PropType } from 'vue'
import { QuestionState } from '../utils/models'

/* Définition du modèle, de la proposition et de la valeur*/
const model = defineModel<QuestionState>()
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String, required: true } /*answer contient la bonne réponse*/,
  answerDetail: { type: String, default: '' },
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
  },
  useSelect: { type: Boolean, default: false },
})
const value = ref<string | null>(null) /*Stock la réponse de l'utilisateur*/
const answerText = computed<string>(
  () => props.options.find((option) => option.value === props.answer)?.text ?? props.answer,
)



/* Changement des états en fonction de value */
watch(
  value,
  (newValue) => {
    if (newValue === null) {
      model.value = QuestionState.Empty
    } else {
      model.value = QuestionState.Fill /*Sinon, l'état devient Fill*/
    }
  },
  {
    immediate: true,
  } /*Quand value change, watch s'execute : met en paramètre la nouvelle valeur etla compare avec la valeure correct 
    pour mettre a jour la valeure booléenne, on oublie pas de modifier le v-model dans le template pour le lier à value */,
)

watch(model, (newModel) => {
  if (newModel === QuestionState.Submit) {
    model.value = value.value === props.answer ? QuestionState.Correct : QuestionState.Wrong
    /*Si l'état est Submit, il deviendra Correct si la réponse est juste et Wrong sinon*/
  } else if (newModel === QuestionState.Empty) {
    value.value = null
  }
})




</script>

<template>
  <div class="mb-4 p-3 border rounded bg-white">
    <label>{{ props.text }}</label>
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
        <label class="form-check-label" :for="`${props.id}-${option.value}`">
          {{ option.text }}
        </label>
      </div>
    </div>
  </div>
  <div v-if="model === QuestionState.Correct || model === QuestionState.Wrong">
    <p v-if="model === QuestionState.Correct" class="text-success">Juste !</p>
    <p v-else class="text-danger">Faux ! La réponse était : {{ answerText }}</p>
    <p v-if="props.answerDetail" class="blockquote-footer">{{ props.answerDetail }}</p>
  </div>
  <div class="spacer"></div>
</template>
<style scoped>
.text-danger {
  color: #975774 !important;
}
.text-success {
  color: #e0a6ae !important ;
}
.form-check-input {
  color: gray !important;
}
.spacer {
  margin: 20px 0;
}
.form-check-input:checked {
  background-color: pink; /* Change la couleur de fond du rond */
  border-color: pink; /* Change la couleur de la bordure */
}
</style>
