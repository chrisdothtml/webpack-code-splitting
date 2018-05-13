import Component from '../../common/Component.js'
import './Box.css'

export default class Box extends Component {
  render () {
    const { body, title } = Object.assign({
      body: 'Default body text',
      title: 'Default title'
    }, this.state)

    this.element.innerHTML = `
      <div class="Box">
        <h2>${title}</h2>
        <p>${body}</p>
      </div>
    `
  }
}
