# Ember-intl-phraseapp

Provide support for the PhraseApp 'In-Context Editor' for emberjs applications that use ember-intl

## Installation

```
  "dependencies": {
    "ember-intl": "2.15.1",
    "ember-intl-phraseapp": "git+https://github.com/alienspaces/ember-intl-phraseapp.git#master"
  }
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
