<script setup lang="ts">
import { defineModel, defineProps, type PropType } from 'vue'

const model = defineModel<string | null>()
const props = defineProps({
  id: { type: String, required: true },
  text: { type: String, required: true },
  placeholder : {type: String, required : true}
})
</script>

<template>
    <label for="props.id" class="form-label">
        {{ props.text }}
    </label>
    <input
      id="props.id"
      v-model="model"
      class="form-control"
      :placeholder="props.placeholder"
    />
</template>
