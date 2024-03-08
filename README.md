```
# Localization Package

A simple JavaScript package for handling localization in your applications.

## Installation

Install the package using npm:

```bash
npm install /path/to/localization-package
```

## Usage

```javascript
// Import the localization package
const localization = require('localization-package');

// Set the language (e.g., 'es' for Spanish)
localization.setLanguage('es');

// Translate messages
console.log(localization.translate('welcome')); // Output: ¡Bienvenido!
console.log(localization.translate('goodbye')); // Output: ¡Adiós!
```

## API

### `setLanguage(language: string): void`

Set the current language for localization.

- `language`: The language code (e.g., 'en' for English, 'es' for Spanish).

### `translate(key: string): string`

Translate a message based on the current language.

- `key`: The key of the message to be translated.

## Contributing

Feel free to open issues or submit pull requests to contribute to the development of this package.

## License

This package is licensed under the [MIT License](LICENSE).
```
