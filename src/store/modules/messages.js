import messageService from '../../services/messageService'
import api from '@/services/api'

const state = {
  messages: [],
  groups: [],
}

const getters = {
  messages: state => {
    return state.messages
  },
  groups: state => {
    return state.groups
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
  searchMessage( { commit }, item) {
    messageService.queryMessages(item)
    .then(messages => {
      commit('setMessages', messages)
    })
  },

  getGroups ({ commit }) {
    messageService.fetchGroup()
    .then(groups => {
      commit('setGroups', groups)
    })
  },
  addGroups({ commit }, message) {
    return new Promise((resolve, reject) => {
      api.post(`groups/`, message)
      .then(response  => {
        resolve(response);
        commit('addGroup', response.data)
          })
    })
  },
  deleteGroups( { commit }, msgId) {
    messageService.deleteGroup(msgId)
    commit('deleteGroup', msgId)
  },
  mulGroupsdelete( { commit }, msglist) {
    for(var i = 0; i< msglist.length; i++){
      let delitem = msglist[i].pk;
      messageService.deleteGroup(delitem)
      commit('setqueryGroups', delitem)
      }
  },
  searchGroups( { commit }, item) {
    messageService.queryGroup(item)
    .then(groups => {
      commit('setGroups', groups)
    })
  },

  updateGroups({ commit }, message) {
    return new Promise((resolve, reject) => {
      //console.log(message)
      api.put(`groups/${message.index}/edit/`, message.updatedate)
      .then(response  => {
        resolve(response);
        //console.log(response.data)
        commit('updateGroup', response.data)
          })
    })
  },
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

  setGroups (state, messages) {
    state.groups = messages
  },
  addGroup(state, message) {
    state.groups.push(message)
  },
  deleteGroup(state, msgId) {
    state.groups = state.groups.filter(obj => obj.pk !== msgId)
  },
  setqueryGroups (state, delitem) {
    state.groups = state.groups.filter(obj => obj.pk !== delitem)
  },
  updateGroup (state, updateitem) {
    console.log(updateitem['number'])
    state.groups.filter(obj => obj.pk == updateitem.pk)[0].number = updateitem['number']
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}