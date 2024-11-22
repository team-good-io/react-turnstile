export interface TurnstileWidgetProps {
  siteKey: string
  theme?: "auto" | "light" | "dark"
  tabIndex?: number
  size?: "normal" | "compact" | "flexible"
  language?: string
  appearance?: "always" | "execute" | "interaction-only"
  onVerify?(token: string, preClearanceObtained?: boolean): void
  onError?(error: string): void
  onBeforeInteractive?(): void
  onAfterInteractive?(): void
}
