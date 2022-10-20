<template>
  <TopBar />
  <router-view></router-view>
</template>

<script>
import TopBar from './components/TopBar.vue';
export default {
  name: 'App',
  components: {
    TopBar
  }
}
</script>

<style>
  body {
    margin: 0;
  }
</style>
