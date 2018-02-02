
const requireAuth = (nextState, replaceState) => {
    replaceState(null, "/content/page1")
}
export default {
    path: 'content',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../components/content').default)
        }, 'content')
    },
    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./page1').default,
                require('./page2').default
            ])
        })
    },
    onEnter:requireAuth
}