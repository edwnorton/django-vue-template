import messageService from '../../services/messageService'
import api from '@/services/api'

const state = {
  messages: [],
}

const getters = {
  messages: state => {
    return state.messages
  },
}

const actions = {
  getMessages ({ commit }) {
    messageService.fetchMessages()
    .then(messages => {
      commit('setMessages', messages)
    })
  },
  addMessage({ commit }, message) {
    return new Promise((resolve, reject) => {
      api.post(`messages/`, message)
      .then(response  => {
        resolve(response);
        commit('addMessage', response.data)
          })
    })
  },
  deleteMessage( { commit }, msgId) {
    messageService.deleteMessage(msgId)
    commit('deleteMessage', msgId)
  },
  muldelete( { commit }, msglist) {
    for(var i = 0; i< msglist.length; i++){
      let delitem = msglist[i].pk;
      messageService.deleteMessage(delitem)
      commit('setqueryMessages', delitem)
      }
  },
  searchMessages( { commit }, item) {
    messageService.queryMessages(item)
    .then(messages => {
      commit('setMessages', messages)
    })
  }
}

const mutations = {
  setMessages (state, messages) {
    state.messages = messages
  },
  addMessage(state, message) {
    state.messages.push(message)
  },
  deleteMessage(state, msgId) {
    state.messages = state.messages.filter(obj => obj.pk !== msgId)
  },
  setqueryMessages (state, delitem) {
    state.messages = state.messages.filter(obj => obj.pk !== delitem)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}