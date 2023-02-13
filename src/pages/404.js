import * as React from "react"
import { Link } from "gatsby"
import { errorMain } from "../css/404.module.css"

const NotFoundPage = () => {
  return (
    <main className={errorMain}>
      <h1>404 – Page not found</h1>
      <p>
        There is nothing here.
        <br></br>
        <br></br>
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
