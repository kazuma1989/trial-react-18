import { css } from "@emotion/css"
import { Link } from "wouter"

export function NotFound() {
  return (
    <div
      className={css`
        display: contents;
      `}
    >
      <h1>Not Found</h1>

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
    </div>
  )
}
