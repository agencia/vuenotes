<template>
  <div class="note">
    <input type="text" v-model="note.title">
  </div>
</template>

<script>
export default {
  name: 'NotePage',
  props : ['note'],
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
