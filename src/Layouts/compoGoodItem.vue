<script setup lang="ts">
import bigToggle from "../components/UI/bigToggle.vue";
import counterButton from "../components/UI/counterButton.vue";
import heartBtn from "../components/UI/heartBtn.vue";
import { formatCurrency } from "../lib";
import { useCounterStore } from "../store/thisStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useCounterStore();
const { getPrice_ForOne } = storeToRefs(store);
const priceOne = ref<string>(formatCurrency(getPrice_ForOne.value));
</script>

<template>
  <!-- Крошки-->
  <section class="wrapper mt-[32px]">
    <div
      class="flex items-center gap-x-1 font-gotham text-[12px]/[16px] text-inputHoverColor"
    >
      <span><a href="#">Каталог</a></span>
      <span>/</span>
      <span><a href="#">Обувь</a></span>
      <span>/</span>
      <span><a href="#">Кроссовки</a></span>
      <span>/</span>
      <span><a href="#">Беговые</a></span>
    </div>
  </section>
  <section class="wrapper mt-[24px]">
    <h1
      class="font-gotham text-[32px]/[32px] font-extrabold text-[#071435] uppercase"
    >
      Кроссовки мужские Skechers Sunny Dale
    </h1>
  </section>

  <section class="wrapper mt-[32px]">
    <div class="w-[100%] flex items-start gap-x-[48px] justify-center">
      <!-- Картинка товара -->
      <div class="w-1/4 flex flex-col gap-y-[24px]">
        <img
          class="w-[400px] h-[400px]"
          src="/src/assets/images/page/good/img.png"
          alt="good"
          loading="lazy"
        />
        <img
          class="w-[400px]"
          src="/src/assets/images/page/good/lenta_goods.png"
          alt="lenta"
          loading="lazy"
        />
      </div>
      <!-- ----------------------------- -->
      <!-- Описание товара -->
      <div class="w-3/5">
        <div class="flex items-center">
          <section class="w-2/4 border-r-[1px] border-r-[#E2E4F0] pr-12">
            <h3 class="font-bold text-[14px]/[16px] text-[#FF3D71] pt-[12px]">
              166 534,00 цена без скидки
            </h3>
            <div class="flex items-center gap-x-4 pt-[12px]">
              <!-- <h1>122 566₽</h1> -->
              <h1>{{ priceOne }}</h1>
              <span
                class="bg-[#FF3D71] text-white text-[15px]/[24px] font-bold px-[8px] py-[2px] rounded-[4px]"
                >-15%</span
              >
            </div>
            <div
              class="mt-[12px] flex items-center gap-x-6 pb-[32px] border-b-[1px] border-b-[#E2E4F0]"
            >
              <span
                class="bg-[#F2F5F9] rounded-[8px] p-2 text-[14px]/[16px] text-[#828EAD] font-extrabold"
                >12 штук в уп.</span
              >
              <div class="flex items-center gap-x-3">
                <bigToggle></bigToggle>
                <span class="text-[14px]/[16px] font-[500] text-[#071435]"
                  >Заказ упаковкой</span
                >
              </div>
            </div>
            <div>
              <div class="grid grid-cols-3 mt-[24px]">
                <ul>
                  <li class="text-[14px]/[16px] text-[#071435] font-extrabold">
                    Завтра
                  </li>
                  <li class="text-[12px]/[16px] text-[#828EAD] mt-1">
                    Доставка
                  </li>
                </ul>
                <ul>
                  <li class="text-[14px]/[16px] text-[#071435] font-extrabold">
                    7шт.
                  </li>
                  <li class="text-[12px]/[16px] text-[#828EAD] mt-1">
                    Тарасовка
                  </li>
                </ul>
                <ul>
                  <li class="text-[14px]/[16px] text-[#071435] font-extrabold">
                    7шт.
                  </li>
                  <li class="text-[12px]/[16px] text-[#828EAD] mt-1">
                    Тарасовка
                  </li>
                </ul>
              </div>
              <div class="grid grid-cols-[285px_56px] gap-x-4 mt-[32px]">
                <counterButton></counterButton>
                <heartBtn :is-filled="false"></heartBtn>
              </div>
            </div>
          </section>
          <section class="w-2/4 pl-[48px]">
            <h2 class="text-[20px]/[20px] text-[#071435] font-[500]">
              Характеристики
            </h2>
            <div class="grid grid-cols-2 mt-[32px] gap-y-[24px]">
              <ul>
                <li class="font-[700] text-[14px]/[16px] text-[#071435]">
                  ELC00696
                </li>
                <li
                  class="font-[400] text-[12px]/[16px] text-[#828EAD] mt-[8px]"
                >
                  Код поставщика
                </li>
              </ul>
              <ul>
                <li class="font-[700] text-[14px]/[16px] text-[#071435]">
                  ELC0200000696
                </li>
                <li
                  class="font-[400] text-[12px]/[16px] text-[#828EAD] mt-[8px]"
                >
                  Артикул
                </li>
              </ul>
              <ul>
                <li class="font-[700] text-[14px]/[16px] text-[#071435]">
                  ELC00696
                </li>
                <li
                  class="font-[400] text-[12px]/[16px] text-[#828EAD] mt-[8px]"
                >
                  Код РАЭК
                </li>
              </ul>
              <ul>
                <li class="font-[700] text-[14px]/[16px] text-[#071435]">
                  ELC00696
                </li>
                <li
                  class="font-[400] text-[12px]/[16px] text-[#828EAD] mt-[8px]"
                >
                  Код ЕТМ
                </li>
              </ul>
              <ul>
                <li class="font-[700] text-[14px]/[16px] text-[#071435]">
                  Electric used
                </li>
                <li
                  class="font-[400] text-[12px]/[16px] text-[#828EAD] mt-[8px]"
                >
                  Бренд
                </li>
              </ul>
              <ul>
                <li class="font-[700] text-[14px]/[16px] text-[#071435]">
                  ELC00696
                </li>
                <li
                  class="font-[400] text-[12px]/[16px] text-[#828EAD] mt-[8px]"
                >
                  Серия
                </li>
              </ul>
              <ul>
                <li class="font-[700] text-[14px]/[16px] text-[#071435]">
                  ELC0200000696
                </li>
                <li
                  class="font-[400] text-[12px]/[16px] text-[#828EAD] mt-[8px]"
                >
                  Код производителя
                </li>
              </ul>
            </div>
          </section>
        </div>
        <h2 class="font-bold text-[24px]/[28px] text-[#071435] mt-[48px]">
          Описание товара
        </h2>
        <p class="mt-[24px] mb-[32px] text-[18px]/[28px] text-[#071435]">
          Создание приверженного покупателя специфицирует неопровержимый
          комплексный анализ ситуации. CTR существенно индуцирует из ряда вон
          выходящий SWOT-анализ. Воздействие на потребителя определяет
          возрастающий интеграл по поверхности, что известно даже школьникам.
          Отсюда естественно следует, что коммуникация уравновешивает косвенный
          фактор коммуникации. Поле направлений естественно допускает
          экспериментальный скачок функции, таким образом сбылась мечта идиота -
          утверждение полностью доказано. Арифметическая прогрессия притягивает
          линейно зависимый пул лояльных изданий.
        </p>
      </div>
    </div>
  </section>
</template>
