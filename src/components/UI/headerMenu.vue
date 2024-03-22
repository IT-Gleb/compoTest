<script setup lang="ts"></script>

<template>
  <div
    class="w-[100%] h-[56px] border-y-2 border-y-buttonDisable/70 flex items-center justify-between px-[24px]"
  >
    <ul
      class="flex gap-x-6 items-center font-gothamPro font-extrabold tracking-[-0.025em] text-[14px]/[16px] text-inputTextFilledColor"
    >
      <li class="cursor-pointer">Мои заказы</li>
      <li class="cursor-pointer">Сотрудники</li>
      <li class="cursor-pointer">Шаблоны заказов</li>
      <li class="cursor-pointer">Обращения</li>
    </ul>
    <ul
      class="flex gap-x-6 items-center font-gothamPro font-extrabold text-buttonBlue text-[14px]/[16px]"
    >
      <li
        class="rounded-[8px] bg-heartColor flex items-center gap-x-2 justify-center px-[12px] py-[8px] cursor-pointer"
      >
        <img
          class="w-[16px] h-[16px]"
          src="/src/assets/images/page/header/small_tooltip.svg"
          alt="tooltip"
          loading="lazy"
        />
        Ваш менеджер
      </li>
      <li class="flex gap-x-2 items-center cursor-pointer">
        <img
          class="w-[16px] h-[16px]"
          src="/src/assets/images/page/header/percent.svg"
          alt="percent"
          loading="lazy"
        />
        Акции
      </li>
      <li class="cursor-pointer">Блог</li>
    </ul>
  </div>
</template>
