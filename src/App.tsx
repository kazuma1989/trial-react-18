import { css } from "@emotion/css"
import { Link, Route, Switch } from "wouter"

export function App() {
  return (
    <div
      className={css`
        padding: 16px;
        display: flex;
        flex-flow: column;
        gap: 8px;
      `}
    >
      <Switch>
        <Route path="/">
          <h1>Home</h1>
          <p>
            <Link to="/page-1">
              <a
                className={css`
                  color: blue;
                  text-decoration: underline;
                `}
              >
                to Page 1
              </a>
            </Link>
          </p>
        </Route>

        <Route path="/page-1">
          <h1>Page 1</h1>
          <p>
            <Link to="/">
              <a
                className={css`
                  color: blue;
                  text-decoration: underline;
                `}
              >
                to Home
              </a>
            </Link>
          </p>
        </Route>
      </Switch>
    </div>
  )
}
