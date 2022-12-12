<template>
  <div class="home">
    <TopNav/>
    <SwpierTop/>
    <lconList/>
    <MusicList/>
  </div>
</template>

<script>
// @ is an alias to /src

import TopNav from '@/components/home/TopNav.vue'
import SwpierTop from '@/components/home/SwpierTop.vue'
import lconList from '@/components/home/lconList.vue'
import MusicList from '@/components/home/MusicList.vue'

export default {
  name: 'HomeView',
  components: {
    TopNav,
    SwpierTop,
    lconList,
    MusicList,
}
}
</script>

