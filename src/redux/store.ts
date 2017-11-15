// import { keaReducer, keaSaga } from 'kea'
// import { routerMiddleware as createRouterMiddleware, routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import logger from 'redux-logger'
// import createSagaMiddleware, { END } from 'redux-saga'

declare var window: {
  __REDUX_DEVTOOLS_EXTENSION__: {},
  __INITIAL_STATE__: {},
  devToolsExtension: any // tslint:disable-line no-any
}

import { RootReducer, } from './' // RouterHistory
const finalReducer = combineReducers({
  // router: routerReducer,
  // scenes: keaReducer('scenes'),
  ...RootReducer,
})

const isWindow = process.env.NODE_ENV === 'development' &&
  typeof window !== 'undefined' && Object.keys(window).length > 0 &&
  window.devToolsExtension !== 'undefined' 

function configureStore(initialState: any) { // tslint:disable-line no-any
  // const sagaMiddleware = createSagaMiddleware()
  // const routerMiddleware = createRouterMiddleware(RouterHistory)

  const enhancedStore = isWindow
    ? window.devToolsExtension()(createStore)
    : createStore
  const store = enhancedStore(
    finalReducer,
    initialState,
    compose(applyMiddleware(logger)) // sagaMiddleware, routerMiddleware
  )

  // store.runSaga = sagaMiddleware.run
  // store.close = () => store.dispatch(END)
  return store
}

const finalStore = configureStore(isWindow && window.__INITIAL_STATE__)
// finalStore.runSaga(keaSaga)

export default finalStore
