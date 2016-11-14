# Ember-intl-phraseapp

Enable PhraseApp In-Context editor for emberjs applications that use ember-intl

## Installation

```
  "dependencies": {
    "ember-intl": "2.15.1",
    "ember-intl-phraseapp": "git+https://github.com/alienspaces/ember-intl-phraseapp.git#master"
  }
```

## Configuration

```
 intl-messageformat-parser barfs if return string contains { } characters
 so include something like the following in your PHRASEAPP_CONFIG

 window.PHRASEAPP_CONFIG = {
   projectId: '',
   prefix: '[[__',
   suffix: "__]]"
 };
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
