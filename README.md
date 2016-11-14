# Ember-intl-phraseapp

Enable PhraseApp In-Context editor for emberjs applications that use ember-intl

## Installation

* `git clone <repository-url>` this repository
* `cd ember-intl-phraseapp`
* `npm install`
* `bower install`

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
