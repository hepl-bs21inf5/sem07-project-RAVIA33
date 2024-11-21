<script setup lang="ts">
import { watch } from 'vue';
import { ref } from 'vue';
import { defineModel, defineProps, type PropType } from 'vue'

const model = defineModel<boolean>()
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  placeholder: { type: String, required: true },
  answer: { type: String, required: true },
})

const value = ref<string | null>(null)

watch(
  value,
  (newValue) => {
    model.value = newValue === props.answer
  },
  { immediate:true},
)
</script>

<template>
  <label for="props.id" class="form-label">
    {{ props.text }}
  </label>
  <input id="props.id" v-model="value" class="form-control" :placeholder="props.placeholder" />
</template>
