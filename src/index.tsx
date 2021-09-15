import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom"
import { SWRConfig } from "swr"
import { AppConcurrent } from "./AppConcurrent"
import { AppSync } from "./AppSync"
import "./color.css"
import { DoublePane } from "./DoublePane"
import "./global.css"

createRoot(globalThis.document.getElementById("root")!).render(
  <StrictMode>
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
        dedupingInterval: 86400_000,
        suspense: true,
      }}
    >
      <DoublePane>
        <Suspense fallback={<p>全体読み込み中</p>}>
          <AppSync />
        </Suspense>

        <Suspense fallback={<p>全体読み込み中</p>}>
          <AppConcurrent />
        </Suspense>
      </DoublePane>
    </SWRConfig>
  </StrictMode>
)
