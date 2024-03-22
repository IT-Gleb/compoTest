import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counterStore", () => {
  const count = ref(0);
  const incrementCount = ref(1);
  const priceGood = ref<number>(122566);

  const getCount = computed(() => {
    return count.value;
  });

  const getPrice_ForOne = computed(() => {
    return priceGood.value;
  });

  const getAllPrice = computed(() => {
    return count.value * priceGood.value;
  });

  function addCount() {
    count.value += incrementCount.value;
  }
  function delCount() {
    if (count.value > 0) count.value -= incrementCount.value;
    if (count.value < 1) count.value = 0;
  }

  function setIncrement(param: number) {
    incrementCount.value = param;
  }

  return {
    getCount,
    getPrice_ForOne,
    getAllPrice,
    addCount,
    delCount,
    setIncrement,
  };
});
