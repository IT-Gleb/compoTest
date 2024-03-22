<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "../../store/thisStore";
import { UCOUNT } from "../../lib";

const selected = ref<boolean>(false);
const store = useCounterStore();
const { setIncrement } = store;

const setSelected = () => {
  selected.value = !selected.value;
  if (selected.value) {
    setIncrement(UCOUNT);
  } else {
    setIncrement(1);
  }
};
</script>

<template>
  <button
    class="w-[48px] h-[32px] overflow-hidden rounded-[32px] p-[2px]"
    @click="setSelected"
  >
    <svg
      v-if="!selected"
      width="46"
      height="30"
      viewBox="0 0 49 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.354004"
        y="0.0244141"
        width="48"
        height="32"
        rx="16"
        fill="#828EAD"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.354 30.0244C24.086 30.0244 30.354 23.7564 30.354 16.0244C30.354 8.29243 24.086 2.02441 16.354 2.02441C8.62202 2.02441 2.354 8.29243 2.354 16.0244C2.354 23.7564 8.62202 30.0244 16.354 30.0244Z"
        fill="white"
      />
    </svg>
    <svg
      v-if="selected"
      width="46"
      height="30"
      viewBox="0 0 49 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.354004"
        y="0.0244141"
        width="48"
        height="32"
        rx="16"
        fill="#1551E5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.354 30.0244C40.086 30.0244 46.354 23.7564 46.354 16.0244C46.354 8.29243 40.086 2.02441 32.354 2.02441C24.622 2.02441 18.354 8.29243 18.354 16.0244C18.354 23.7564 24.622 30.0244 32.354 30.0244Z"
        fill="white"
      />
    </svg>
  </button>
</template>
