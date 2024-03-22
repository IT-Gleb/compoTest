<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(defineProps<{ className: string }>(), {
  className: "",
});

const thisClass = ref<string>(props.className);
</script>

<template>
  <button :class="thisClass">
    <slot></slot>
  </button>
</template>
