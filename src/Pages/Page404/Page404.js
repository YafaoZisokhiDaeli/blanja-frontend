import React from 'react'
import './page.css'
import { Link } from "react-router-dom";
function Page404() {
  return (
    <div>
      <h1><b>404 : Page Not Found</b></h1>
      <div className="link-container">
        <Link to="/home" className="btn btn-primary">
          Back Home
        </Link>
      </div>
    </div>
  )
}

export default Page404