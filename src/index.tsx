import { StrictMode } from "react"
import { createRoot } from "react-dom"
import { SWRConfig } from "swr"
import { Router } from "wouter"
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
      <Router base={import.meta.env.BASE_URL.replace(/\/+$/, "")}>
        <DoublePane>
          <AppSync />

          <AppConcurrent />
        </DoublePane>
      </Router>
    </SWRConfig>
  </StrictMode>
)
