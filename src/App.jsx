import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Api from './pages/Api'


// import { useSelector } from 'react-redux'

const App = () => {
  // const searchData = useSelector((state) => state.search.data)

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        {/* <Route exact path='/:id' element={<RouteCheck />} /> */}
        <Route exact path={`/:id`} element={<Api />} />
      </Routes>
    </>
  )
}

export default App