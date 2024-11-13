<script setup lang="ts">
import { computed, ref } from 'vue'

const cheval = ref<string | null>(null)
const patte = ref<string | null>(null)
const capitale = ref<string | null>(null)
const filled = computed<boolean>(
  () => cheval.value !== null && patte.value !== null && capitale.value !== null,
)

function submit(event: Event): void {
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
  }
}

function renitialiser(): void {
  cheval.value = null
  patte.value = null
  capitale.value = null
}
</script>

<template>
  <form @submit="submit">
    De quelle couleur est le cheval blanc de Napoléon ?
    <div class="form-check">
      <input
        id="chevalBlanc"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="blanc"
      />
      <label class="form-check-label" for="chevalBlanc">Blanc</label>
    </div>
    <div class="form-check">
      <input
        id="chevalBrun"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="brun"
      />
      <label class="form-check-label" for="chevalBrun">Brun</label>
    </div>
    <div class="form-check">
      <input
        id="chevalNoir"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="noir"
      />
      <label class="form-check-label" for="chevalNoir">Noir</label>
    </div>
    <div class="form-check">
      <input
        id="chevalRose"
        v-model="cheval"
        class="form-check-input"
        type="radio"
        name="cheval"
        value="rose"
      />
      <label class="form-check-label" for="chevalRose">Rose</label>
    </div>
    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit"></button>

    Combien de pattes a un chat ?
    <div class="form-check">
      <input
        id="patte1"
        v-model="patte"
        class="form-check-input"
        type="radio"
        name="patte"
        value="1"
      />
      <label class="form-check-label" for="patte1">1</label>
    </div>
    <div class="form-check">
      <input
        id="patte2"
        v-model="patte"
        class="form-check-input"
        type="radio"
        name="patte"
        value="2"
      />
      <label class="form-check-label" for="patte2">2</label>
    </div>
    <div class="form-check">
      <input
        id="patte3"
        v-model="patte"
        class="form-check-input"
        type="radio"
        name="patte"
        value="3"
      />
      <label class="form-check-label" for="patte3">3</label>
    </div>
    <div class="form-check">
      <input
        id="patte4"
        v-model="patte"
        class="form-check-input"
        type="radio"
        name="patte"
        value="4"
      />
      <label class="form-check-label" for="patte4">4</label>
    </div>
    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit"></button>

    Quelle est la capitale de la Suisse ?
    <div class="form-check">
      <input
        id="capitaleGeneve"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="geneve"
      />
      <label class="form-check-label" for="capitaleGeneve">Genève</label>
    </div>
    <div class="form-check">
      <input
        id="capitaleBern"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="berne"
      />
      <label class="form-check-label" for="capitaleBern">Berne</label>
    </div>
    <div class="form-check">
      <input
        id="capitaleZurich"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="zurich"
      />
      <label class="form-check-label" for="capitaleZurich">Zürich</label>
    </div>
    <div class="form-check">
      <input
        id="capitaleLausanne"
        v-model="capitale"
        class="form-check-input"
        type="radio"
        name="capitale"
        value="lausanne"
      />
      <label class="form-check-label" for="capitaleLausanne">Lausanne</label>
    </div>
    <button class="btn btn-primary" :class="{ disabled: !filled }" type="submit">Terminer</button>

    <button class="btn btn-primary" @click="renitialiser">
      Rénitialiser
    </button>
  </form>
</template>
