<template>
  <router-view />
  <FooterMusic/>
</template>
<script>
import FooterMusic from "@/components/Item/FooterMusic.vue";
export default {
  components: {
    FooterMusic
  }
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.icon {
  width: .5rem;
  height: .5rem;
}

a {
  color: black;
}
</style>
