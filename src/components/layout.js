import * as React from "react"

import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {"◃"}
        <span style={{ margin: "0 5px" }} />
        {title}
      </Link>
    )
  }

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
          crossOrigin="anonymous"
        />
      </Helmet>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by
          <a href="https://github.com/shaoruu" style={{ marginLeft: 5 }}>
            @shaoruu
          </a>
          {/* <a
            href="https://www.buymeacoffee.com/?via=iantheearl"
            target="_blank"
            style={{
              marginLeft: 12,
            }}
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
              alt="Buy Me A Coffee"
              style={{
                height: "41px !important",
                width: "174px !important",
                borderRadius: 8,
              }}
            />
          </a> */}
        </footer>
      </div>
    </>
  )
}

export default Layout
