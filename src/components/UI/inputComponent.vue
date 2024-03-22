<script setup lang="ts">
const props= withDefaults(defineProps<{isDisabled?:boolean; isError?:boolean, paramPlaceHolder?:string, rightIcon1?:boolean}>(),
{isDisabled:false, isError:false, paramPlaceHolder:"Placeholder", rightIcon1:false});

</script>

<template>
    <div class="xl:w-2/4 4xl:min-w-[732px] relative">
    <input 
    type="text" 
    :placeholder="props.paramPlaceHolder" 
    :disabled="props.isDisabled"
    class="w-[100%]  h-[100%] rounded-[8px] border-[1px] outline-none border-inputBorderColor pl-[12px] pr-[70px] py-[8px] text-[14px]/[16px] font-gothamPro"
    :class="props.isDisabled?' bg-inputDisabledColor text-inputDisabledTextColor': props.isError?'border-[2px] border-inputErrorColor text-inputErrorColor placeholder:text-inputErrorColor':'bg-white text-inputTextColor focus:text-inputTextFilledColor focus:border-[2px] focus:border-inputTextActiveColor hover:border-inputHoverColor hover:text-inputTextFilledColor hover:placeholder:text-inputTextFilledColor'">
     </input>
    <button v-if="props.rightIcon1" class="w-[24px] h-[24px] font-bold absolute top-0 right-[48px] translate-y-[50%]">
        <img class="block w-[24px] h-[24px]" src="/src/assets/images/page/header/cross.svg" alt="Delete" loading="lazy" />
    </button>
    <button v-if="props.rightIcon1" class="w-[24px] h-[24px] font-bold absolute top-0 right-[12px] translate-y-[50%]">
        <img class="block w-[24px] h-[24px]" src="/src/assets/images/page/header/glass.svg" alt="glass" loading="lazy" />
    </button>
</div>

</template>