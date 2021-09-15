import { css } from "@emotion/css"

export function DoublePane({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={css`
        display: grid;
        grid: ". ." auto / 1fr 1fr;
        gap: 8px;
        padding: 8px;
        background-color: gray;
        height: 100%;
      `}
    >
      {children}
    </div>
  )
}
