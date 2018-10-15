<template>
  <div class="note">
    <input type="text" placeholder="Title of the note" v-model="formNote.title">
    <textarea rows="5" v-model="formNote.body" placeholder="Body of the note"></textarea>
    <div><button v-on:click="save">Save</button><button v-on:click="cancel">Cancel</button></div>
  </div>
</template>

<script>
export default {
  name: 'NotePage',
  props : ['note'],
  data () {
    return {
      formNote : this.note
    }
  },
  methods : {
    save(){
      this.$emit('saveNote',Object.assign({}, this.formNote));
      this.formNote = { title : '', body : ''};
    },
    cancel(){
      this.formNote = { title : '', body : ''};
      this.save();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .note {
    margin: 20px;
    padding: 10px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;

    input {
      padding: 10px;
      font-size: 18px;
      width: 350px;
    }
    textarea {
      padding: 10px;
      font-size: 18px;
      width: 350px;
      display: block;
      margin: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
