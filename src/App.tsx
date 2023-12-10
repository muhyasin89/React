import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'react-notifications-component/dist/theme.css'

import Login from './page/Login';

import { ReactNotifications } from 'react-notifications-component'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <ReactNotifications/>
      <Login />
    </>
  )
}

export default App
