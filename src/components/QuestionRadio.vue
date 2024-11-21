<script setup lang="ts">
  import { ref, watch, type PropType } from "vue";

  const model = defineModel<boolean>(); 
  /*Comme modèleest maintenant de type boolean, on pourra faire indiquer à chaque question si la réponse est correct ou non */
  const props = defineProps({
    id: { type: String, required: true },
    text: { type: String, required: true },
    answer: { type: String, required: true }, /*answer contient la bonne réponse*/
    options: {
      type: Array as PropType<Array<{ value: string; text: string }>>,
      required: true,
    },
  });

  const value = ref<string | null>(null); /*Stock la réponse de l'utilisateur*/ 

  watch(
    value,
    (newValue) => {
      model.value = newValue === props.answer;
    },
    { immediate: true }, /*Quand value change, watch s'execute : met en paramètre la nouvelle valeur etla compare avec la valeure correct 
    pour mettre a jour la valeure booléenne, on oublie pas de modifier le v-model dans le template pour le lier à value */
  );
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
    />
    <label class="form-check-label" :for="`${props.id}-${option.value}`">
      {{ option.text }}
    </label>
  </div>
</template>




