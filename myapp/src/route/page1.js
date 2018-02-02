export default {
  path: '/content/page1',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/page1').default)
    }, 'page1')
  }
}