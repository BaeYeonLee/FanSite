import axios from './config'
import { API } from './urls'

export default {
  async insertUser(params) {
    try {
      return await axios.post(API.ACTION.UPSERT, params)
    } catch (e) {
      return 'INSERT ERROR'
    }
  },

  async getUser(userId) {
    try {
      return await axios.get(API.USER.GET_OR_DELETE + userId)
    } catch (e) {
      return {}
    }
  },

  async getUserList() {
    console.log(`API.USER.GET_LIST : ${API.USER.GET_LIST}`)
    try {
      return await axios.get(API.USER.GET_LIST)
    } catch (e) {
      return []
    }
  },

  async updateUser(params) {
    try {
      return await axios.put(API.ACTION.UPSERT, params)
    } catch (e) {
      return 'UPDATE ERROR'
    }
  },

  async deleteUser(userId) {
    try {
      return await axios.delete(API.ACTION.GET_OR_DELETE + userId)
    } catch (e) {
      return 'DELETE ERROR'
    }
  },
}
