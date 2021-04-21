import React from 'react'
import { Link } from 'react-router-dom'



const Error = () => {


  let style = { marginTop: "50px" }
  let styleText = {
    marginTop: "30px",
    textTransform: "none"
  }

  return (
    <section className="error-page section">
      <div className="error-container" >
        <h1 > Ой такой страницы не существует </h1>
        <Link to="/" className="btn btn-primary" style={style}  > Back to Home </Link>
      </div>
    </section>
  )
}

export default Error





