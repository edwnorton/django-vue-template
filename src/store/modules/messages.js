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
        console.log(response.data)
        commit('addMessage', response.data)
          })
    })
  },
  deleteMessage( { commit }, msgId) {
    messageService.deleteMessage(msgId)
    commit('deleteMessage', msgId)
  }
}

const mutations = {
  setMessages (state, messages) {
    state.messages = messages
  },
  addMessage(state, message) {
    state.messages.push(message)
    console.log(state.messages)
  },
  deleteMessage(state, msgId) {
    state.messages = state.messages.filter(obj => obj.pk !== msgId)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}