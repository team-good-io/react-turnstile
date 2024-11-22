import { useEffect, useRef } from "react"

declare global {
  interface Window {
    turnstile?: Turnstile.Turnstile;
  }
}

export interface TurnstileWidgetProps {
  siteKey: string
  theme?: "auto" | "light" | "dark"
  tabIndex?: number
  size?: "normal" | "compact" | "flexible"
  language?: string
  appearance?: "always" | "execute" | "interaction-only"
  onVerify?(token: string, preClearanceObtained?: boolean): void
  onError?(error: string): void
}

const TurnstileWidget = (props: Readonly<TurnstileWidgetProps>) => {
  const turnstileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadScript = () => {
      if (!document.getElementById('turnstile-script')) {
        const script = document.createElement('script')
        script.id = 'turnstile-script'
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
        script.async = true
        document.body.appendChild(script)
      }
    }

    loadScript()

    const initTurnstile = () => {
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: props.siteKey,
          theme: props.theme,
          tabindex: props.tabIndex,
          size: props.size,
          language: props.language,
          appearance: props.appearance,
          callback: props.onVerify,
          "error-callback": props.onError,
        })
      }
    }

    const scriptLoadInterval = setInterval(() => {
      if (window.turnstile) {
        initTurnstile()
        clearInterval(scriptLoadInterval)
      }
    }, 500)

    return () => {
      clearInterval(scriptLoadInterval)
      if (turnstileRef.current) {
        turnstileRef.current.innerHTML = ''
      }
    }
  }, [props])

  return (
    <div ref={turnstileRef} />
  )
}

export default TurnstileWidget
