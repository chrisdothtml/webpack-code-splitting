/* this is only imported once, so it will be in the main bundle */
export function parseQuery (queryString) {
  return queryString
    .replace(/^\?/, '')
    .split('&')
    .reduce((result, query) => {
      const [ key, value ] = query.split('=')
      return { ...result, [key]: value || true }
    }, {})
}
