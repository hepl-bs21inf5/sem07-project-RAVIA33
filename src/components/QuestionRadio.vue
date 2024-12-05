<script setup lang="ts">
import { ref, watch, type PropType } from 'vue'
import { QuestionState } from '@/utils/models'

const model = defineModel<QuestionState>()
/*Comme modèleest maintenant de type boolean, on pourra faire indiquer à chaque question si la réponse est correct ou non */
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String, required: true } /*answer contient la bonne réponse*/,
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
  },
})

const value = ref<string | null>(null) /*Stock la réponse de l'utilisateur*/

watch(
  value,
  (newValue) => {
    if (newValue === null) {
      model.value = QuestionState.Empty /*Si la valeur devient null, l'état devient Empty*/
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
  {{ props.text }}
  <div v-for="option in props.options" :key="option.value" class="form-check">
    <input
      :id="`${props.id}-${option.value}`"
      v-model="value"
      class="form-check-input"
      type="radio"
      :name="props.id"
      :value="option.value"
      :disabled="
      model === QuestionState.Submit || 
      model === QuestionState.Correct || 
      model === QuestionState.Wrong
    "
    />
    <label class="form-check-label" :for="`${props.id}-${option.value}`">
      {{ option.text }}
    </label>
  </div>
</template>
