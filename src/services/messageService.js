import api from '@/services/api'

export default {
  fetchMessages() {
    return api.get(`messages/`)
              .then(response => response.data)
  },
  postMessage(payload) {
    return api.post(`messages/`, payload)
              .then(response => response.data)
  },
  deleteMessage(msgId) {
    return api.delete(`messages/${msgId}/`)
              .then(response => response.data)
  },
  queryMessages(item) {
    return api.get(`messages/?search=${item}`)
              .then(response => response.data)
  },
  fetchGroup() {
    return api.get(`groups/`)
              .then(response => response.data)
  },
  postGroup(payload) {
    return api.post(`groups/`, payload)
              .then(response => response.data)
  },
  deleteGroup(msgId) {
    return api.delete(`groups/${msgId}/`)
              .then(response => response.data)
  },
  queryGroup(item) {
    return api.get(`groups/?search=${item}`)
              .then(response => response.data)
  },
  updateGroup(msgId, payload) {
    return api.put(`groups/${msgId}/edit/`, payload)
              .then(response => response.data)
  },
}