<script setup lang="ts">
import { ref, watchEffect } from "vue";
import minusButton from "./minusButton.vue";
import plusButton from "./plusButton.vue";
import { useCounterStore } from "../../store/thisStore.ts";
import { storeToRefs } from "pinia";
import { getNameCount } from "../../lib";

const store = useCounterStore();

const { addCount, delCount } = store;
const { getCount } = storeToRefs(store);

const isClicked = ref<boolean>(false);
const textCount = ref<string>("");

//const goodCount = ref<number>(getCount.value);

const thisClick = () => {
  isClicked.value = !isClicked.value;
};
watchEffect(() => {
  textCount.value = getNameCount(getCount.value);
});
</script>

<template>
  <div
    v-if="!isClicked"
    class="h-[56px] w-[284px] bg-buttonBlue cursor-pointer rounded-[8px] px-[24px] py-[16px] text-white active:bg-buttonBlue active:shadow-none hover:bg-[#316CFF] hover:shadow-[0px_12px_16px_-7px_#1551E570]"
    @click="thisClick"
  >
    <div class="flex items-center justify-center gap-x-3 pt-1">
      <img
        class="w-[16px]"
        src="/src/assets/images/page/header/cart2.svg"
        alt="cart"
        loading="lazy"
      />
      <span class="block whitespace-nowrap font-bold text-[14px]/[16px]"
        >В корзину</span
      >
    </div>
  </div>
  <div
    v-else="isClicked"
    @click="thisClick"
    class="h-[56px] w-[284px] relative bg-white cursor-pointer rounded-[8px] py-[8px] pl-[12px] pr-[16px] text-[16px]/[24px] text-[#071435] text-center font-[500] border-[2px] border-buttonBlue shadow-[0px_0px_6px_0px_#BAC4E0];"
  >
    <div class="absolute left-4 top-[14px]">
      <minusButton @work="delCount"></minusButton>
    </div>
    <span class="block pt-[6px]">{{ textCount }} </span>
    <div class="absolute top-[14px] right-4">
      <plusButton @work="addCount"></plusButton>
    </div>
  </div>
</template>
