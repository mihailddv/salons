<template lang="pug">
div(:class='$style.container')
  slot
</template>

<style lang="scss" module>
.container + .container {
  margin-top: 12px;
}
</style>