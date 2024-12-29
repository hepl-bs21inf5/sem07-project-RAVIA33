<script setup lang="ts">
import { ref, computed, watch, type PropType } from 'vue'
import { QuestionState } from '../utils/models'

const model = defineModel<QuestionState>()

// Définition des propriétés du composant
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String, required: true },
  answerDetail: { type: String, default: '' },
  options: {
    type: Array as PropType<Array<{ value: string; text: string }>>,
    required: true,
  },
  useSelect: { type: Boolean, default: false },
})

// Valeur sélectionnée par l'utilisateur
const value = ref<string | null>(null)
const answerText = computed<string>(
  () => props.options.find((option) => option.value === props.answer)?.text ?? props.answer,
)

watch(
  value,
  (newValue) => {
    if (newValue === null) {
      model.value = QuestionState.Empty
    } else {
      model.value = QuestionState.Fill
    }
  },
  {
    immediate: true,
  },
)

watch(model, (newModel) => {
  if (newModel === QuestionState.Submit) {
    model.value = value.value === props.answer ? QuestionState.Correct : QuestionState.Wrong
  } else if (newModel === QuestionState.Empty) {
    value.value = null
  }
})
</script>

<template>
  <div class="mb-4 p-3 border rounded bg-white">
    <!-- Afficher le texte de la question -->
    <label>{{ props.text }}</label>
    <!-- Afficher un menu déroulant si useSelect est vrai -->
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
    <!-- Sinon, afficher des boutons radio pour les options -->
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
  <!-- Afficher les messages de validation après la soumission -->
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
  border-color: pink;
}
</style>
