// import React from 'react'
import { useParams } from 'react-router-dom'


const RouteCheck = () => {
  const { id } = useParams()
  console.log(id)

  return (
    <div>Route</div>
  )
}

export default RouteCheck