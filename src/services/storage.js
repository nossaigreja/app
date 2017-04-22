export default {
  get (key) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (e) { this.log(e) }
  },

  set (key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) { this.log(e) }
  },

  remove (key) {
    try {
      localStorage.removeItem(key)
    } catch (e) { this.log(e) }
  },

  clear () {
    try {
      localStorage.clear()
    } catch (e) { this.log(e) }
  },

  log (message) {
    console.warn('[storage]', message)
  }
}
