import axios from './config'
import { FILMOGRAPHY } from './urls'

export default {
  async insert(params) {
    try {
      return await axios.post(FILMOGRAPHY.UPSERT, params)
    } catch (e) {
      return 'INSERT ERROR'
    }
  },

  async getOne(id) {
    try {
      return await axios.get(FILMOGRAPHY.GET_OR_DELETE + id)
    } catch (e) {
      return {}
    }
  },

  /**
   * Request category list
   * @param {Object} params : Search conditions
   * @returns {Array}
   */
  async getList(params) {
    try {
      return await axios.get(FILMOGRAPHY.GET_LIST, { params })
    } catch (e) {
      return []
    }
  },

  async update(params) {
    try {
      return await axios.put(FILMOGRAPHY.UPSERT, params)
    } catch (e) {
      return 'UPDATE ERROR'
    }
  },

  async delete(id) {
    try {
      return await axios.delete(FILMOGRAPHY.GET_OR_DELETE + id)
    } catch (e) {
      return 'DELETE ERROR'
    }
  },
}
