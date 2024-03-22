<script setup lang="ts">
import logo from "../components/Page/Header/logo.vue";
</script>

<template>
  <section class="wrapper border-t-2 border-t-buttonTextDisable/60">
    <div
      class="w-[100%] py-[56px] flex items-center justify-between gap-x-14 px-[24px] font-gotham"
    >
      <div class="flex items-center gap-x-12">
        <logo></logo>
        <div class="ml-2">
          <span class="block text-[16px]/[20px] font-bold"
            ><a href="tel:88008419595">8 800 841-95-95</a></span
          >
          <span
            class="block text-textSupport font-[400] text-[12px]/[16px] mt-4"
            >Служба поддежки</span
          >
        </div>
        <div>
          <span class="block text-[16px]/[20px] font-bold"
            ><a href="mailto:support@sport.ru">support@sport.ru</a></span
          >
          <span
            class="block text-textSupport font-[400] text-[12px]/[16px] mt-4"
            >Служба поддежки</span
          >
        </div>
      </div>
      <div>
        <ul
          class="flex items-center gap-x-8 font-[700] text-[16px]/[20px] text-inputTextFilledColor"
        >
          <li class="cursor-pointer">Вакансии</li>
          <li class="cursor-pointer">Блог</li>
          <li class="cursor-pointer">Акции</li>
          <li
            class="cursor-pointer text-buttonBlue bg-heartColor px-[24px] py-[12px] rounded-[8px]"
          >
            Предложить идею
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
