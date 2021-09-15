import { css } from "@emotion/css"
import useSWR from "swr"
import { Link } from "wouter"
import { fakeAPI } from "./fakeAPI"

export function Page1() {
  const { data } = useSWR("page_1", fakeAPI, { suspense: true })

  return (
    <div
      className={css`
        display: contents;
      `}
    >
      <h1>Page 1</h1>
      <p>data={data}</p>

      <p>
        <Link to="/page_2">
          <a
            className={css`
              color: blue;
              text-decoration: underline;
            `}
          >
            to Page 2
          </a>
        </Link>
      </p>
    </div>
  )
}
