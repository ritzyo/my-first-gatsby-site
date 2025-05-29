import * as React from "react"
import { Link } from "gatsby"
import "../styles/404.css"

const NotFoundPage = () => {
  return (
    <main className="main">
      <h1 className="page-title">Page not found</h1>
      <p className="paragraph">
        Sorry 😔, we couldn't find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code className="code-block">src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
      <h1 className="secondary-title">Another Title</h1>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>