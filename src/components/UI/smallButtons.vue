<script setup lang="ts">
import colocolButton from "./colocolButton.vue";
import heartButton from "./heartButton.vue";
</script>

<template>
  <div class="w-fit flex items-center gap-x-[24px]">
    <colocolButton></colocolButton>
    <div
      class="h-[100%] w-[1px] border-l-[1px] border-l-inputBorderColor"
    ></div>
    <heartButton></heartButton>
  </div>
</template>
