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

## ember-cli-mirage

If you are using [ember-cli-mirage](http://www.ember-cli-mirage.com/) in your application you will need to add the following configuration to `tests/dummy/mirage/config.js`:

```
this.passthrough('https://api.phraseapp.com/v2/**');
this.passthrough('https://*.cloudfront.net');
```

## PhraseApp In-Context Editor

https://phraseapp.com/docs/guides/in-context-editor/

## Ember CLI

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
