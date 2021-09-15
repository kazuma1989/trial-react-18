import { css } from "@emotion/css"
import useSWR from "swr"
import { Link } from "wouter"
import { fakeAPI } from "./fakeAPI"

export function Page2() {
  const { data } = useSWR("page_2", fakeAPI, { suspense: true })

  return (
    <div
      className={css`
        display: contents;
      `}
    >
      <h1>Page 2</h1>
      <p>data={data}</p>

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
