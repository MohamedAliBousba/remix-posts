import React from "react";
import { Outlet, LiveReload, Link } from "remix";

const root = () => {
  return (
    <Document>
      <Header />
      <Outlet />
    </Document>
  );
};

const Document = ({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <title>Remix Posts</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        ></link>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default root;
