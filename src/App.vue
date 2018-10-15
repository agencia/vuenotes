<template>
  <div id="app">
    <NotesList/>
  </div>
</template>

<script>
import NotesList from './components/NotesList.vue'

export default {
  name: 'app',
  components: {
    NotesList
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
