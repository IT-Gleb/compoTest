<script setup lang="ts"></script>

<template>
  <footer class="w-[100%]">
    <section
      class="wrapper pt-12 font-gotham border-t-2 border-t-buttonDisable"
    >
      <ul
        class="w-fit mx-auto flex items-center gap-x-[28px] text-[12px]/[16px] text-inputTextColor font-bold"
      >
        <li class="flex items-center gap-x-2 cursor-pointer">
          <img
            class="w-[16px] h-[16px]"
            src="/src/assets/images/page/footer/doc.svg"
            alt="doc"
            loading="lazy"
          />
          PDF презентация
        </li>
        <li class="flex items-center gap-x-2 cursor-pointer">
          <img
            class="w-[16px] h-[16px]"
            src="/src/assets/images/page/footer/camera.svg"
            alt="camera"
            loading="lazy"
          />
          Видео инструкция
        </li>
        <li class="flex items-center gap-x-2 cursor-pointer">
          <img
            class="w-[16px] h-[16px]"
            src="/src/assets/images/page/footer/info.svg"
            alt="info"
            loading="lazy"
          />
          FAQ
        </li>
        <li class="text-buttonBlue flex items-center gap-x-2 cursor-pointer">
          <img
            class="w-[16px] h-[16px]"
            src="/src/assets/images/page/footer/youtub.svg"
            alt="youtub"
            loading="lazy"
          />
          Мы на YouTube
        </li>
        <li class="cursor-pointer">Политика конфиденциальности</li>
        <li class="cursor-pointer">Лицензионное соглашение</li>
      </ul>
      <p class="mt-[56px] text-center text-[12px]/[16px] text-inputTextColor">
        Настоящая Политика обработки персональных данных разработана в
        соответствии с Конституцией Российской Федерации, Трудовым кодексом
        Российской Федерации, Гражданским кодексом Российской Федерации,
        Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации,
        информационных технологиях и о защите информации",
      </p>
      <div
        class="mt-[40px] mb-[48px] flex items-center gap-x-[24px] w-fit mx-auto"
      >
        <img
          class="w-[124px] h-[24px]"
          src="/src/assets/images/page/footer/logo_grey.png"
          alt="logo"
          loading="lazy"
        />
        <span
          class="block text-[14px]/[16px] font-bold text-footerTextColor cursor-pointer"
          >Разработка платформы</span
        >
      </div>
      <div
        class="w-[90%] mx-auto text-center text-[14px]/[16px] font-bold text-footerTextColor py-10"
      >
        Верстка и программирование by Gleb Torgashin. March 2024.
      </div>
    </section>
  </footer>
</template>
