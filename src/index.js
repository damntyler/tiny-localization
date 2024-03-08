// tiny-localization.js

class Localization {
    constructor() {
      // Default language is English
      this.language = 'en';
      
      // Translations for different languages
      this.translations = {
        en: {
          welcome: 'Welcome!',
          goodbye: 'Goodbye!',
        },
        es: {
          welcome: '¡Bienvenido!',
          goodbye: '¡Adiós!',
        },
      };
    }
  
    setLanguage(language) {
      if (this.translations[language]) {
        this.language = language;
      } else {
        console.warn(`Unsupported language: ${language}. Keeping the current language.`);
      }
    }
  
    translate(key) {
      const translation = this.translations[this.language][key];
      
      if (translation) {
        return translation;
      } else {
        console.warn(`Translation not found for key: ${key}`);
        return key; // Return the key itself if translation is not found
      }
    }
  }
  
  // Singleton instance of Localization
  const localizationInstance = new Localization();
  
  // Export the singleton instance
  module.exports = localizationInstance;
  