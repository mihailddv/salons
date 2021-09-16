<template lang="pug">
div(:class='[$style.container, isError ? $style.error : ``]')
  label(:class='$style.label', :for='label') {{ label }}
  input(
    v-if='type === "text"',
    :class='$style.input',
    :id='label',
    :type='type',
    :value='value',
    @focus='onFocus',
    @input='onInput'
  )
  input(
    v-if='type === "phone"',
    :class='$style.input',
    :id='label',
    :type='type',
    placeholder='+7',
    v-maska='\'+7 (###) ###-##-##\'',
    @focus='onFocus',
    @input='onInput'
  )
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    type: {
      type: String,
      default: 'text',
    },
    isError: Boolean,
  },
  setup(_, { emit }) {
    const onInput = (event) => {
      emit('onInput', event.target.value);
    };

    const onFocus = () => {
      emit('onFocus');
    };

    return {
      onInput,
      onFocus,
    };
  },
};
</script>

<style lang="scss" module src="@Scss/components/Input.scss">
</style>