<script setup lang="ts">
import { computed, ref } from 'vue'
import QuestionRadio from '@/components/QuestionRadio.vue'
import QuestionText from '@/components/QuestionText.vue'
import { QuestionState } from '@/utils/models'


const cheval = ref<string | null>(null)
const patte = ref<string | null>(null)
const capitale = ref<string | null>(null)
const questionStates = ref<QuestionState[]>([])
const filled = computed<boolean>(() => cheval.value !== null && capitale.value !== null)
  const score = computed<number>(
  () =>
    questionStates.value
      .filter(state => state === QuestionState.Correct)
      .length,
)
const totalScore = computed<number>(() => questionStates.value.length)


/*function submit(event: Event): void {
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
  }*/


function renitialiser(): void {
  cheval.value = null
  patte.value = null
  capitale.value = null
}
</script>

<template>
  <form>
    <QuestionRadio
      id="cheval"
      v-model="questionStates[0]"
      answer = "blanc"
      text="De quelle couleur est le cheval blanc de Napoléon ?"
      :options="[
        { value: 'blanc', text: 'Blanc' },
        { value: 'brun', text: 'Brun' },
        { value: 'noir', text: 'Noir' },
        { value: 'rose', text: 'Rose' },
      ]"
    />
    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit"></button>
    <QuestionText
      id="patte"
      v-model="questionStates[1]"
      answer ="4"
      text="Combien de pattes a un chat ?"
      placeholder="Veuillez choisir un nombre"
    />
    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit"></button>
   
    <QuestionRadio
      id="capitale"
      v-model="questionStates[2]"
      answer = "berne"
      text="Quelle est la capitale de la Suisse ?"
      :options="[
        { value: 'lausanne', text: 'Lausanne' },
        { value: 'berne', text: 'Berne' },
        { value: 'geneve', text: 'Genève' },
        { value: 'zurich', text: 'Zürich' },
      ]"
    />

    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit">Terminer</button>

    <button class="btn btn-primary" @click="renitialiser">Rénitialiser</button>
    <div>Debug états : {{ questionStates }}</div>
    <div>Score : {{ score }} / {{ totalScore }}</div>
  </form>
</template>
