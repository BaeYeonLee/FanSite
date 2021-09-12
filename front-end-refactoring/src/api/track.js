import axios from './config'
import { TRACK } from './urls'

export default {
  async insert(params) {
    try {
      return await axios.post(TRACK.UPSERT, params)
    } catch (e) {
      return 'INSERT ERROR'
    }
  },

  async getOne(trackId) {
    try {
      return await axios.get(TRACK.GET_OR_DELETE + trackId)
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
      return await axios.get(TRACK.GET_LIST, { params })
    } catch (e) {
      return []
    }
  },

  async update(params) {
    try {
      return await axios.put(TRACK.UPSERT, params)
    } catch (e) {
      return 'UPDATE ERROR'
    }
  },

  async delete(trackId) {
    try {
      return await axios.delete(TRACK.GET_OR_DELETE + trackId)
    } catch (e) {
      return 'DELETE ERROR'
    }
  },
}
