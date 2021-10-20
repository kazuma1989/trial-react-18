import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom"
import { SWRConfig } from "swr"
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
      <Suspense fallback={<p>全体読み込み中</p>}>
        <App />
      </Suspense>
    </SWRConfig>
  </StrictMode>
)

function App() {
  return <div>App</div>
}
