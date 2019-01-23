<template>
  <div id="app">
    <Menu></Menu>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/menu.vue';

export default {
  name: 'App',
  components: { Menu }
};
</script>

<style lang="scss">
@import './style/main.scss';
</style>
