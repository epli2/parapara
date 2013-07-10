/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

require.config({
  baseUrl: '/js/lib',
  paths: {
    wallmaker: '../../wall-maker/js',
    collections: '../../wall-maker/js/collections',
    templates: '../../wall-maker/templates',
    views: '../../wall-maker/js/views',
    // Shims
    backbone: 'backbone-min',
    jquery: 'jquery-2.0.2.min',
    underscore: 'underscore-min',
    webL10n: 'l10n'
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery', 'json2'],
      exports: 'Backbone'
    },
    'webL10n': {
      exports: 'document.webL10n'
    }
  }
});

require(['wallmaker/wallmaker'], function (wallmaker) {
  wallmaker.initialize();
});