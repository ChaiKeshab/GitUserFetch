import { useState } from "react"
// import { useSelector } from "react-redux"
import LoadingBar from 'react-top-loading-bar'


const Api = () => {

  // const navigate = useNavigate()
  // const error = useSelector((state) => state.gitApi.error)
  // const searchData = useSelector((state) => state.search.data)
  // const result = useSelector((state) => state.gitApi.data)

  //top-loading-bar
  const [progress, setProgress] = useState(0)

  return (
    <div className="api-container">
      <LoadingBar
        color='#DE5A21'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height='4px'
      />

    </div>
  )
}

export default Api

