import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nextid : 1,
    notes : []
  },
  mutations: {
    increment: state => state.nextid++,
    addnote : (state,_note) => state.notes.push(_note),
    removenote : (state,id) => {
      state.notes = state.notes.filter( _note => {
        return _note.id != id;
      })
    },
    initialiseStore(state) {
			if(localStorage.getItem('store')) {
        this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		}
  },
  actions: {

  }
})
