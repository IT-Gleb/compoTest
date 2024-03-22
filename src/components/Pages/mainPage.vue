<script setup lang="ts">
import { PAGE_URL } from "../../lib";
</script>

<template>
  <section
    class="mb-5 border-b-buttonDisable/50 border-b-2 p-8 w-[60%] mx-auto"
  >
    <p class="text-[16px]/[24px] font-bold tracking-tighter text-center">
      Верстка и программирование by Gleb Torgashin. March 2024.
    </p>
  </section>
  <section class="max-w-[80%] mx-auto px-[16px] py-[12px]">
    <h1>Привет, COMPO!</h1>
    <div class="text-right">
      <span
        class="w-fit bg-buttonBlue text-white px-[16px] py-[12px] rounded-[8px] text-center text-[16px]/[24px] hover:bg-buttonHoverBlue hover:shadow-[0_12px_16px_-7px_#1551e570]"
      >
        <RouterLink :to="PAGE_URL">Результат теста</RouterLink>
      </span>
    </div>
  </section>
  <section
    class="max-w-[80%] mx-auto mt-5 px-[16px] py-[12px] border-t-2 border-t-buttonDisable/50"
  >
    <dl class="mt-5">
      <dt class="font-bold text-[18px]/[22px]">Использовал:</dt>
      <dd class="mt-5">
        <ul>
          <li>Vue3, Composition API</li>
          <li>Pinia - state manager</li>
          <li>Vue-router</li>
          <li>Vite - сборка проекта</li>
          <li>TileWindCSS - CSS фреймворк</li>
          <li>Autoprefixer</li>
          <li>Адаптив- не делал</li>
        </ul>
      </dd>
    </dl>
  </section>
  <section
    class="max-w-[80%] mx-auto mt-5 px-[16px] py-[12px] border-t-2 border-t-buttonDisable/50"
  >
    <dl class="mt-5">
      <dt class="font-bold text-[24px]/[28px]">Условия теста</dt>
      <dd>
        <p class="indent-4 text-[16px]/[24px]">
          Необходимо заверстать страницу товара. Из функционала необходимо
          реализовать только каунтер добавления в корзину которым становится
          кнопка «купить».
        </p>
        <p class="indent-4 text-[16px]/[24px]">
          Макет разработан под разрешение 1680, при более крупных разрешениях
          шапка должна «тянутся», а основной контент статичен и центрирован.
        </p>
        <p class="indent-4 text-[16px]/[24px]">
          Макеты содержат все необходимое, в том числе DevMod.
        </p>
      </dd>
      <dt class="mt-[2%]">Ссылка на макет Figma</dt>
      <dd
        class="w-fit mt-2 bg-buttonBlue px-[12px] py-[8px] rounded-[8px] text-white text-[14px]/[16px] hover:bg-buttonHoverBlue hover:shadow-[0_12px_16px_-7px_#1551e570]"
      >
        <a
          href="https://www.figma.com/file/pcfz6X6368SGJaYpaHbt6Y/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5?type=design&node-id=0%3A1&mode=design&t=tEMdcNTmPxH59SJh-1"
          target="_blank"
          >COMPO Figma</a
        >
      </dd>
    </dl>
    <p class="mt-[5%]">
      <span
        class="w-fit bg-buttonBlue text-white px-[16px] py-[12px] rounded-[8px] text-center text-[16px]/[24px] hover:bg-buttonHoverBlue hover:shadow-[0_12px_16px_-7px_#1551e570]"
      >
        <RouterLink :to="PAGE_URL">Результат теста</RouterLink>
      </span>
    </p>
  </section>
  <section
    class="mt-5 border-t-buttonDisable/50 border-t-2 p-8 w-[60%] mx-auto"
  >
    <p class="text-[16px]/[24px] font-bold tracking-tighter text-center">
      Верстка и программирование by Gleb Torgashin. March 2024.
    </p>
  </section>
</template>

<style scoped>
ul > li {
  @apply text-[16px]/[24px] font-normal px-[16px] py-[10px] mb-1;
}
</style>
