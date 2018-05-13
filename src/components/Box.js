import Component from '../common/Component.js'

export default class Box extends Component {
  render () {
    const { body, title } = Object.assign({
      body: 'Default body text',
      title: 'Default title'
    }, this.state)

    this.element.innerHTML = `
      <h2>${title}</h2>
      <p>${body}</p>
    `
  }
}
