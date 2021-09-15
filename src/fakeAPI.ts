export function fakeAPI(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Date().toString())
    }, 1_000)
  })
}
