# Ember-intl-phraseapp

Provide support for the PhraseApp 'In-Context Editor' for emberjs applications that use ember-intl

## Installation

```
npm install ember-intl-phraseapp --save-dev
```

## Configuration

Add the following to your `config/environment.js`:

```
   phraseApp: {
      enabled: true,
      projectId :  'yourphraseappprojectid',
      prefix: '[[__',
      suffix: '__]]'
    }
 ```

## Ember CLI

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
