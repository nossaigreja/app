import Vue from 'vue'

export const event = {
  bus: null,

  init () {
    if (!this.bus) {
      this.bus = new Vue()
    }

    return this
  },

  emit (name, ...args) {
    this.bus.$emit(name, ...args)

    return this
  },

  on (...args) {
    if (args.length === 2) {
      this.bus.$on(...args)
    } else {
      Object.keys(args[0]).forEach(key => {
        this.bus.$on(key, args[0][key])
      })
    }

    return this
  }
}
