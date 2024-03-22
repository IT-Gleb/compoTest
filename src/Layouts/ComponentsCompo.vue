<script setup lang="ts">
import compoButton from "../components/UI/compoButton.vue";
import heartBtn from "../components/UI/heartBtn.vue";
import inputComponent from "../components/UI/inputComponent.vue";
import bigToggle from "../components/UI/bigToggle.vue";
import smallToggle from "../components/UI/smallToggle.vue";
</script>

<template>
  <section class="mt-10">
    <div class="w-fit mx-auto my-3">
      <h1
        class="block p-2 font-gotham font-[700] text-[88px]/[48px] tracking-[0.01em] pb-6 text-black"
      >
        Компоненты
      </h1>
      <!-- <h2 class="mh2">Компоненты</h2> -->
    </div>
    <ul class="flex flex-wrap gap-5 items-start justify-between">
      <li class="flex flex-col gap-y-4">
        <compoButton :is-disable="false">Placeholder</compoButton>

        <compoButton :is-disable="true">Placeholder</compoButton>
      </li>

      <li>
        <heartBtn :is-filled="false"></heartBtn>
      </li>
      <li class="flex flex-col gap-y-4">
        <inputComponent :is-disabled="false"></inputComponent>

        <inputComponent :is-disabled="true"></inputComponent>

        <inputComponent :is-disabled="false" :is-error="true"></inputComponent>
      </li>

      <li class="flex flex-col gap-y-4">
        <bigToggle></bigToggle>
        <smallToggle></smallToggle>
      </li>
    </ul>
  </section>
</template>

<!-- <style scoped>
.mh2 {
  font-family: Gotham;
  font-size: 88px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0.01em;
  text-align: center;
}
</style> -->
