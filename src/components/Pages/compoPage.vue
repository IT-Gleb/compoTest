<script setup lang="ts">
import headerLayout from "../../Layouts/headerLayout.vue";
import compoLayout from "../../Layouts/compoLayout.vue";
import compoPeople from "../../Layouts/compoPeople.vue";
import footerLayout from "../../Layouts/footerLayout.vue";
import compoGoodItem from "../../Layouts/compoGoodItem.vue";
</script>

<template>
  <!-- <section class="max-w-[800px] mx-auto p-2">
    <ComponentsCompo></ComponentsCompo>
  </section> -->
  <headerLayout></headerLayout>
  <main class="flex-auto">
    <compoGoodItem></compoGoodItem>
    <compoLayout></compoLayout>
    <compoPeople></compoPeople>
  </main>
  <footerLayout></footerLayout>
</template>
