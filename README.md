# React Turnstile Widget

The Turnstile Widget for React.

## Installation

```bash
npm install @team-good-io/react-turnstile
```

## Usage

```
import TurnstileWidget from '@team-good-io/react-turnstile'

const App = () => {
  return (
    <TurnstileWidget
      siteKey='SITE_KEY'
      onVerify={(token, cookieObtained) => console.log(token, cookieObtained)}
      onError={(error) => console.log(error)}
    />
  )
}
```

## Props

* `siteKey` - Cloudflare Turnstile sitekey
* `theme` - (Optional) Theme
* `tabIndex` - For accessibility
* `size` - Widget size
* `language` - Widget language
* `appearance` - Widget appearance
* `onVerify` - Success callback (token, preClearanceObtained)
* `onError` - Error callback
* `onBeforeInteractive` - Interactive challenge (before)
* `onAfterInteractive` - Interactive challenge (after)