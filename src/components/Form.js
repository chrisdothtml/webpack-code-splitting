import Component from '../common/Component.js'

export default class Form extends Component {
  render () {
    const { fields, title } = Object.assign({
      fields: [],
      title: 'Default title'
    }, this.state)

    this.element.innerHTML = `
      <h2>${title}</h2>
      <form action="#" onsubmit="return false">
        ${fields
          .map(field => {
            const { label, name, placeholder } = field

            return `
              <label>
                <span>${label}</span>
                <input type="text" name="${name}" placeholder="${placeholder}" />
              </label>
            `
          })
          .join('')}
        <button>Send</button>
      </form>
    `
  }
}
