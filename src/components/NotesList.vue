<template>
  <div class="notes">
    <h1>Notes</h1>
    <div class="list-options">
      <button v-show="!showForm" v-on:click="toggleForm">Add note</button>
      <note-page v-show="showForm" v-bind:note.sync="note" v-on:saveNote="save"/>
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
      showForm : false,
      note : { id: null, title : '', body : ''},
      nextid : 4,
      notes : [
        { id : 1, title : 'Step 1', body : 'Create a placeholder for all the notes' },
        { id : 2, title : 'Step 2', body : 'Create two placeholders for all the notes' },
        { id : 3, title : 'Step 3', body : 'Create 3 placeholders for all the notes' }
      ]
    }
  },
  methods : {
    add(){
      this.note = { title : '', body : ''};
    },
    edit(_note){
      this.openForm();
      this.note = _note;
    },
    save (_note) {
      if(_note.title != '' && _note.body != ''){
        if(_note.id == null) {
          _note.id = this.nextid;
          this.nextid += 1;
          this.notes.push(_note);
        }
      }
      this.toggleForm();
    },
    openForm(){
      this.showForm = true;
    },
    toggleForm (){
      this.showForm = !this.showForm;
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
