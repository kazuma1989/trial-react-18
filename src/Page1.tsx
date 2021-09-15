import { css } from "@emotion/css"
import { Link } from "wouter"

export function Page1() {
  return (
    <div
      className={css`
        display: contents;
      `}
    >
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
    </div>
  )
}
