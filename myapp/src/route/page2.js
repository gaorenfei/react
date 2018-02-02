export default {
  path: '/content/page2',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/page2').default)
    }, 'page2')
  }
}