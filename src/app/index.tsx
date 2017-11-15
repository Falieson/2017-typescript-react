import * as React from 'react'

import Routes from './routes/'
import Template from './template'

// import ReduxRouter from '../redux/ReduxRouter'

const App = (
  <div className="app">
    <Template>
      <Routes />
    </Template>
  </div>
)

export default App

// import './App.css'

// interface IProps {}
// interface IState {}

// class App extends React.Component<IProps, IState> {
//   render() {
//     return (
//       <div className="app">
//         <ReduxRouter>
//           <Template>
//             <Routes />
//           </Template>
//         </ReduxRouter>
//       </div>
//     )
//   }
// }
