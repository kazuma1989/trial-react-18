import { css } from "@emotion/css"
import { Route, Switch, useLocation } from "wouter"
import { Home } from "./Home"
import { NotFound } from "./NotFound"
import { Page1 } from "./Page1"

export function AppSync() {
  const [_location] = useLocation()
  const location = _location
  const pending = location !== _location

  return (
    <div
      className={css`
        background-color: white;
        padding: 16px;
        display: flex;
        flex-flow: column;
        gap: 8px;
      `}
    >
      <h1>Sync</h1>

      {pending && <p>読み込み中</p>}

      <Switch location={location}>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/page-1">
          <Page1 />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}
