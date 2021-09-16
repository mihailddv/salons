<template lang="pug">
div(:class='$style.container')
  div(:class='$style.picture')
    img(:src='image', :alt='name')

  div(:class='$style.content')
    slot
</template>

<script>
export default {
  props: {
    image: String,
    name: String,
  },
};
</script>

<style lang="scss" module>
.container {
  width: 100%;
  max-width: 500px;
  border-radius: 4px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

.picture {
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
}

.content {
  padding: 16px;
}
</style>