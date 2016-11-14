import Ember from 'ember';
import IntlService from 'ember-intl/services/intl';

const { makeArray, get } = Ember;  // jshint ignore:line

var phraseApp = true;

export function initialize(/* applicationInstance */) {
  console.log('ember-intl-init is :' + IntlService);

  IntlService.reopen({
    findTranslationByKey(key, locales) {  // jshint ignore:line

      if (phraseApp === true) {
        //
        // intl-messageformat-parser barfs if return string contains { } characters
        // so include something like the following in your PHRASEAPP_CONFIG
        //
        // window.PHRASEAPP_CONFIG = {
        //   projectId: '',
        //   prefix: '[[__',
        //   suffix: "__]]"
        // };
        // var retString = "[[__phrase_" + key + "__]]";
        var retString = window.PHRASEAPP_CONFIG.prefix + "phrase_" + key + window.PHRASEAPP_CONFIG.suffix;
        console.log('Returning :' + retString);
        return retString;
      }
      return this._super(...arguments);
    }
  });
}

export default {
  name: 'ember-intl-phraseapp',
  before: 'ember-intl',
  initialize
};