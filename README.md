# Turnstile Widget for React

Turnstile Widget for React is a lightweight wrapper around Cloudflare's Turnstile widget. It simplifies the integration of the Turnstile CAPTCHA widget into your React applications.

## Features

Easy integration with React applications.
Supports all customization options provided by Cloudflare Turnstile.
Callback functions for various Turnstile events.
Fully typed with TypeScript for a seamless developer experience.

## Installation
Install the package via npm or yarn:

```bash
npm install @team-good-io/react-turnstile
```

```bash
yarn add @team-good-io/react-turnstile
```

## Usage

```ts
import TurnstileWidget from '@team-good-io/react-turnstile'

const App = () => {
  const handleVerify = (
    token: string,
    preClearanceObtained?: boolean
  ) => {
    console.log('Verification token:', token);
    if (preClearanceObtained) {
      console.log('Pre-clearance obtained');
    }
  };

  const handleError = (error: string) => {
    console.error('Turnstile error:', error);
  };

  return (
    <TurnstileWidget
      siteKey='your-site-key'
      onVerify={handleVerify}
      onError={handleError}
    />
  )
}

```

## Props

* `siteKey` - Cloudflare Turnstile sitekey
* `theme` - Theme
* `tabIndex` - For accessibility
* `size` - Widget size
* `language` - Widget language
* `appearance` - Widget appearance
* `onVerify` - Success callback (token, preClearanceObtained)
* `onError` - Error callback
* `onBeforeInteractive` - Interactive challenge (before)
* `onAfterInteractive` - Interactive challenge (after)

## Acknowledgments

* [Cloudflare Turnstile](https://www.cloudflare.com/application-services/products/turnstile/) for providing the CAPTCHA service.

Feel free to suggest improvements or report bugs via [issues](https://github.com/team-good-io/react-turnstile/issues).

## License

This package is licensed under the [MIT License](https://github.com/team-good-io/react-turnstile/blob/main/LICENSE.md).