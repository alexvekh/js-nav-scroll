class Nav {
  static #HOME_PAGE = 'https://google.com'

  static #back = () => {
    return history.back()
  }

  static #forward = () => {
    return history.forward()
  }

  static #reload = () => {
    return location.reload()
  }

  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }

  static #start = () => {
    try {
      const url = new URL(window.input.value)
      return this.#changePage(url.href)
    } catch (error) {
      alert('Enter correct url')
      console.log(error)
    }
  }

  static #changePage = (href) => {
    return location.assign(href)
  }

  static init = () => {
    window.back.onclick = this.#back.bind(this)
    window.forward.onclick = this.#forward.bind(this)
    window.reload.onclick = this.#reload.bind(this)
    window.home.onclick = this.#home.bind(this)
    window.start.onclick = this.#start.bind(this)

    window.input.value = location.href
  }
}

Nav.init()
