/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

define([ 'jquery',
         'underscore',
         'backbone',
         'collections/characters',
         'models/base-model' ],
function($, _, Backbone, Characters, BaseModel) {
  return BaseModel.extend({
    idAttribute: 'sessionId',
    initialize: function() {
      // Sessions has some funny URL handling where it uses a different API for
      // fetching to saving. Unfortunately, backbone doesn't allow you to just
      // override the URL so simply--if you do, it will end up applying that URL
      // to the models if fetches as well (it just blindly sets options
      // everywhere).
      //
      // So at this point, this.url may actually point to the API
      // endpoint for the collection so we need to manuallly restore it.
      this.url = function() {
        return _.result(this.collection, 'url') +
               (this.isNew() ? "" : "/" + this.id);
      }

      // Transform characters attribute into a collection
      this.characters = new Characters(this.get("characters"));
      this.listenTo(this, "change:characters", function() {
        this.characters.set(this.get("characters"), { silent: true });
      });

      // Bubble change-like events from characters collection
      this.listenTo(this.characters, "add remove reset sort destroy change",
        function() {
          // Keep attributes in sync
          this.attributes.characters = this.characters.models;
          // Fire 'change'
          var args = Array.prototype.slice.call(arguments);
          args.unshift('change');
          this.trigger.apply(this, args);
        }
      );
    }
  });
});
