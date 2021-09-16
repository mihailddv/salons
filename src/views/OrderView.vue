<template lang="pug">
div(:class='$style.container')
  form(
    v-if='!isFormSended',
    :class='$style.form',
    @submit.prevent='handleForm'
  )
    FormContent
      FormBlock
        AppInput(
          label='Имя',
          :value='name',
          :isError='isNameError',
          @onFocus='onFocusName',
          @onInput='handleName'
        )
      FormBlock
        AppInput(
          label='Телефон',
          type='phone',
          :value='phone',
          :isError='isPhoneError',
          @onFocus='onFocusPhone',
          @onInput='handlePhone'
        )

    AppButton(text='Отправить')

  div(v-else, :class='$style.success')
    h2 Заявка отправлена!
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

import AppInput from '@UI/Input';
import AppButton from '@UI/Button';
import FormBlock from '@UI/FormBlock';
import FormContent from '@UI/FormContent';

export default {
  components: {
    AppInput,
    AppButton,
    FormBlock,
    FormContent,
  },
  setup() {
    const { commit } = useStore();

    const name = ref(null);
    const phone = ref(null);
    const isNameError = ref(false);
    const isPhoneError = ref(false);
    const isFormSended = ref(false);

    const handleName = (value) => {
      name._value = value;
    };

    const onFocusName = () => {
      isNameError.value = false;
    };

    const onFocusPhone = () => {
      isPhoneError.value = false;
    };

    const handlePhone = (value) => {
      phone._value = value;
    };

    const handleForm = () => {
      let isValid = true;

      if (!name._value) {
        isNameError.value = true;
        isValid = false;
      }

      if (phone._value === null || phone._value?.length < 17) {
        isPhoneError.value = true;
        isValid = false;
      }

      if (isValid) {
        isFormSended.value = true;
        commit('setDefaultSteps');
      }
    };

    return {
      name,
      phone,
      isNameError,
      isPhoneError,
      handleForm,
      handleName,
      handlePhone,
      onFocusName,
      onFocusPhone,
      isFormSended,
    };
  },
};
</script>

<style lang="scss" module src="@Scss/pages/OrderView.scss">
</style>