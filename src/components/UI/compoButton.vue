<script setup lang="ts">
const props = withDefaults(defineProps<{ isDisable?: boolean }>(), {
  isDisable: false,
});
const theEmit = defineEmits(["back"]);

const clickThis = (event: Event) => {
  event.preventDefault();
  theEmit("back");
};
</script>

<template>
  <button
    class="h-[56px] 4xl:h-[48px] 4xl:w-[127px] rounded-[8px] py-[16px] 4xl:py-[8px] px-[24px] font-[500] text-[14px]/[16px] text-center overflow-hidden"
    :class="
      !props.isDisable
        ? ' bg-buttonBlue text-white hover:bg-buttonHoverBlue hover:shadow-[0_12px_16px_-7px_#1551e570] focus:bg-buttonBlue focus:shadow-none'
        : ' bg-buttonDisable text-buttonTextDisable'
    "
    :disabled="props.isDisable"
    @click="clickThis"
  >
    <slot></slot>
  </button>
</template>
