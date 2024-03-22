<script setup lang="ts">
import { ref } from "vue";
const selected = ref<boolean>(false);

const setSelected = () => {
  selected.value = !selected.value;
};
</script>

<template>
  <button
    class="w-[40px] h-[24px] overflow-hidden rounded-[32px] p-[2px]"
    @click="setSelected"
  >
    <svg
      v-if="!selected"
      width="38"
      height="22"
      viewBox="0 0 41 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.354004"
        y="0.0244141"
        width="40"
        height="24"
        rx="12"
        fill="#828EAD"
      />

      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.354 22.0244C17.8769 22.0244 22.354 17.5473 22.354 12.0244C22.354 6.50157 17.8769 2.02441 12.354 2.02441C6.83116 2.02441 2.354 6.50157 2.354 12.0244C2.354 17.5473 6.83116 22.0244 12.354 22.0244Z"
        fill="white"
      />
    </svg>
    <svg
      v-if="selected"
      width="38"
      height="22"
      viewBox="0 0 41 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.354004"
        y="0.0244141"
        width="40"
        height="24"
        rx="12"
        fill="#1551E5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.354 22.0244C33.8769 22.0244 38.354 17.5473 38.354 12.0244C38.354 6.50157 33.8769 2.02441 28.354 2.02441C22.8312 2.02441 18.354 6.50157 18.354 12.0244C18.354 17.5473 22.8312 22.0244 28.354 22.0244Z"
        fill="white"
      />
    </svg>
  </button>
</template>
