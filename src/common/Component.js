/* this is imported by two modules, so it will be extracted into the common bundle */
export default class Component {
  constructor (element, state) {
    this.state = state
    this.element = element

    if (this.render) {
      this.render()
    }
  }
}
