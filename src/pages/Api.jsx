import { useState } from "react"
import { useSelector } from "react-redux"
import UserData from './UserData'
import LoadingBar from 'react-top-loading-bar'
import formatDate from '../utils/formatDate'
import formatFollow from '../utils/formatFollow'
import formatUrlText from '../utils/formatUrlText'
import formatUrlTwitter from '../utils/formatUrlTwitter'

const Api = () => {

  const result = useSelector((state) => state.gitApi.data)

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

      <div className="container-main">
        {/* {console.log(result)} */}

        <div>
          {result ?
            <UserData
              avatar={result.avatar_url}
              name={result.name}
              email={result.email}
              location={result.location}
              company={result.company}
              twitter={result.twitter_username}
              blog={result.blog}

              blogText={formatUrlText(result.blog)}
              twitterLink={formatUrlTwitter(result.twitter_username)}

              bio={result.bio}

              followers={formatFollow(result.followers)}
              following={formatFollow(result.following)}

              repoCount={result.public_repos}
              createdDate={formatDate(result.created_at)}

              hireable={result.hireable}
              html_url={result.html_url}
            />
            : <div></div>}
        </div>

      </div>
    </div>
  )
}

export default Api