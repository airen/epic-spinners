<template>
  <div id="app">
    <div>
      <loaders-gallery />
    </div>
  </div>
</template>

<script>
import LoadersGallery from './components/LoadersGallery.vue'

export default {
  name: 'app',
  components: {
    LoadersGallery
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
