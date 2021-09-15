import { css } from "@emotion/css"
import { Link } from "wouter"

export function Home() {
  return (
    <div
      className={css`
        display: contents;
      `}
    >
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
    </div>
  )
}
