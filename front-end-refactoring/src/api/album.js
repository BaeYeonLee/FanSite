import axios from './config'
import { ALBUM } from './urls'

export default {
  async insert(params) {
    try {
      return await axios.post(ALBUM.UPSERT, params)
    } catch (e) {
      return 'INSERT ERROR'
    }
  },

  async getOne(albumId) {
    try {
      return await axios.get(ALBUM.GET_OR_DELETE + albumId)
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
      return await axios.get(ALBUM.GET_LIST, { params })
    } catch (e) {
      return []
    }
  },

  async update(params) {
    try {
      return await axios.put(ALBUM.UPSERT, params)
    } catch (e) {
      return 'UPDATE ERROR'
    }
  },

  async delete(albumId) {
    try {
      return await axios.delete(ALBUM.GET_OR_DELETE + albumId)
    } catch (e) {
      return 'DELETE ERROR'
    }
  },
}
