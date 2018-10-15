<template>
  <div class="notes">
    <h1>Notes</h1>
    <div class="list-options">
      <note-page v-bind:note="note" />
    </div>
    <ul>
      <li v-for="note in notes">
        <div class="note">
          <div class="title">{{ note.title }} <i v-on:click="edit(note)">edit</i></div>
          <div class="body">{{ note.body }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import NotePage from './NotePage.vue'
export default {
  name: 'NotesList',
  data () {
    return {
      note : { title : 'test', body : ''},
      notes : [
        { title : 'Step 1', body : 'Create a placeholder for all the notes' },
        { title : 'Step 2', body : 'Create two placeholders for all the notes' },
        { title : 'Step 3', body : 'Create 3 placeholders for all the notes' }
      ]
    }
  },
  methods : {
    add(){

    },
    edit(_note){
      this.note = _note;
    }
  },
  components : {
    'note-page': NotePage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.note {
  background-color: #D7F0F2;
  -webkit-box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.5);
  box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.5);

  .title {
    background-color: #A2E0E7;
    padding: 5px;
  }
  .body {
    padding: 10px;
  }
}
</style>
