import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import UserData from './pages/UserData'

const App = () => {

  return (
    <>
      <Routes>

        <Route exact path='/'>
          <Route index element={<Landing />} />
          <Route exact path={':id'} element={<UserData />} />
        </Route>

      </Routes>
    </>
  )
}

export default App