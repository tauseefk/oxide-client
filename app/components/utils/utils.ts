import { useCallback, useEffect, useRef } from "react"

type FN = (...args: any[]) => any

export function awaitableThrottle(fn: FN, ms: number) {
  let busy: boolean

  return (...args: any[]): Promise<any> =>
    new Promise(resolve => {
      if (busy) return

      busy = true

      window.setTimeout(function () {
        resolve(fn.call(null, ...args))
        busy = false
      }, ms)
    })
}

export function useThrottle<F extends FN>(fn: F, delay: number, deps: any[] = []) {
  return useCallback(awaitableThrottle(fn, delay), deps)
}

export function useInterval(callback: FN, delay: number) {
  const savedCallback = useRef<FN>()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}