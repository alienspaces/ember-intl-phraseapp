import Ember from 'ember';
import IntlService from 'ember-intl/services/intl';
import config from 'ember-get-config';

const { makeArray, get } = Ember;  // jshint ignore:line

export function initialize( applicationInstance ) {

  const { phraseApp } = config;

  if (!phraseApp) {
      console.log('phraseApp missing configuration, wont initialize phraseApp in-context-editor');
      return;
  }

  if (phraseApp.enabled !== true) {
      console.log('phraseApp not enabled, wont initialize phraseApp in-context-editor');
      return;
  }

  //
  // intl-messageformat-parser barfs if return string contains { } characters
  // so we'll use square brackets by default
  //
  var phraseAppPrefix = phraseApp.prefix || '[[__';
  var phraseAppSuffix = phraseApp.suffix || '__]]';

  // console.log('Using phraseAppSuffix ' + phraseAppSuffix + ' phraseAppPrefix ' + phraseAppPrefix);

  window.PHRASEAPP_CONFIG = {
       projectId: phraseApp.projectId,
        prefix: phraseAppPrefix,
        suffix: phraseAppSuffix
  };

  (function() {
    var phraseapp = document.createElement('script');
    phraseapp.type = 'text/javascript';
    phraseapp.async = true;
    phraseapp.src = ['https://', 'phraseapp.com/assets/in-context-editor/2.0/app.js?', new Date().getTime()].join('');
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(phraseapp, s);
  })();

  IntlService.reopen({
    findTranslationByKey(key, locales) {  // jshint ignore:line

      if (window.PHRASEAPP_CONFIG) {
        var retString = window.PHRASEAPP_CONFIG.prefix + "phrase_" + key + window.PHRASEAPP_CONFIG.suffix;
        return retString;
      }
      return this._super(...arguments);
    }
  });

  return;
}

export default {
  name: 'ember-intl-phraseapp',
  before: 'ember-intl',
  initialize
};
