import { parseQuery } from './common/utils.js'

const QUERIES = parseQuery(window.location.search)
const COMPONENT_INSTANCES = {}
const COMPONENT_CONFIGS = {
  Box: {
    title: 'My awesome box',
    body: `It's a pretty great box`
  },
  Form: {
    title: 'Fill out this form maybe',
    fields: [
      {
        name: 'fullname',
        label: 'Full name',
        placeholder: 'John Doe'
      },
      {
        name: 'nickname',
        label: 'Nickname',
        placeholder: 'Johnny Bravo'
      }
    ]
  }
}

function initComponents () {
  const componentList = Object.keys(COMPONENT_CONFIGS)

  return Promise.all(
    componentList.map(async (name) => {
      if (QUERIES[`show${name}`] && !COMPONENT_INSTANCES[name]) {
        const Component = await import(`./components/${name}.js`)

        COMPONENT_INSTANCES[name] = new Component.default(
          document.getElementById(name.toLowerCase()),
          COMPONENT_CONFIGS[name]
        )
      }
    })
  )
}

initComponents()
  .catch(error => console.error(error))
