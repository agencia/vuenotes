<template>
  <div class="notes">
    <h1>Notes</h1>
    <div class="list-options">
      <button v-show="!showForm" v-on:click="toggleForm">Add note</button>
      <note-page v-show="showForm" v-bind:note.sync="note" v-on:saveNote="save"/>
    </div>
    <ul>
      <li v-for="note in this.$store.state.notes">
        <div class="note">
          <div class="title">{{ note.title }}</div>
          <div class="body">{{ note.body }}</div>
          <div class="footer">
            <a class="opt" v-on:click="edit(note)">edit</a>
            <a class="opt" v-on:click="remove(note.id)">delete</a>
          </div>
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
    remove(id){
      this.$store.commit('removenote',id);
    },
    save (_note) {
      if(_note.title != '' && _note.body != ''){
        if(_note.id == null) {
          _note.id = this.$store.state.nextid;
          this.$store.commit('increment');
          this.$store.commit('addnote',_note);
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
    .footer {
      .opt {
        margin: 5px;
        font-size: 12px;
      }
    }
  }
</style>
