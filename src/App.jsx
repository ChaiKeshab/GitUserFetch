import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
// import Api from './pages/Api'
import UserData from './pages/UserData'


// import { useSelector } from 'react-redux'

const App = () => {
  // const searchData = useSelector((state) => state.search.data)

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