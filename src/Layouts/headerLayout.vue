<script setup lang="ts">
import logo from "../components/Page/Header/logo.vue";
import compoButton from "../components/UI/compoButton.vue";
import inputComponent from "../components/UI/inputComponent.vue";
import smallButtons from "../components/UI/smallButtons.vue";
import cartButton from "../components/UI/cartButton.vue";
import managerSelect from "../components/UI/managerSelect.vue";
import headerMenu from "../components/UI/headerMenu.vue";
import { useCounterStore } from "../store/thisStore";
import { storeToRefs } from "pinia";
import { watchEffect, ref } from "vue";
import { formatCurrency } from "../lib";
import { useRouter } from "vue-router";

const navigate = useRouter();

const textCartAll = ref<string>("0");

const store = useCounterStore();
const { getAllPrice } = storeToRefs(store);

const goBack = () => {
  navigate.go(-1);
};

watchEffect(() => {
  let allPrice: number = getAllPrice.value;
  textCartAll.value = formatCurrency(allPrice);
  // allPrice + "₽";
});
</script>

<template>
  <header
    class="w-[100%] h-[136px] bg-white shadow-[0px_4px_8px_-16px_#F0F3FC] flex flex-col"
  >
    <div
      class="w-[100%] flex items-center gap-x-3 justify-between px-[24px] py-4"
    >
      <logo></logo>
      <compoButton @back="goBack">
        <div class="flex items-center gap-x-[12px] justify-center">
          <img
            src="/src/assets/images/page/header/list.svg"
            alt="list"
            loading="lazy"
          />
          <span class="block font-gothamPro text-[14px]/[16px] text-white"
            >Меню</span
          >
        </div>
      </compoButton>

      <inputComponent
        class="w-[640px] h-[48px]"
        param-place-holder="Название запроса"
        :right-icon1="true"
      ></inputComponent>
      <smallButtons class="h-[48px]"></smallButtons>
      <cartButton>
        <div
          class="flex gap-x-1 items-center justify-center rounded-[8px] overflow-hidden"
        >
          <img
            class="w-[16px] h-[16px]"
            src="/src/assets/images/page/header/cart.svg"
            alt="cart"
            loading="lazy"
          />
          <span
            class="block whitespace-nowrap text-[14px]/[16px] tracking-[-0.085em] font-gothamPro font-bold"
          >
            {{ textCartAll }}</span
          >
        </div>
      </cartButton>
      <managerSelect></managerSelect>
    </div>
    <headerMenu></headerMenu>
  </header>
</template>

<!-- 144 235₽ -->
