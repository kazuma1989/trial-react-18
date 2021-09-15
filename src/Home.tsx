import { css } from "@emotion/css"
import useSWR from "swr"
import { Link } from "wouter"
import { fakeAPI } from "./fakeAPI"

export function Home() {
  const { data } = useSWR("home", fakeAPI, { suspense: true })

  return (
    <div
      className={css`
        display: contents;
      `}
    >
      <h1>Home</h1>
      <p>data={data}</p>

      <p>
        <Link to="/page_1">
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
