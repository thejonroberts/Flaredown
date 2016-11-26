import Ember from 'ember';

export default Ember.Mixin.create({

  searchByTerm(resource, term) {
    return this._search({
      resource: resource,
      query: {
        name: term
      }
    });
  },

  randomSearch(resource) {
    return this._search({
      resource: resource,
      scope: 'random'
    });
  },

  createAndSave(resource, term) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      let record = this.store.createRecord(resource, { name: term });
      record.save().then(function(saved) {
        resolve(saved);
      }, function() {
        reject(...arguments);
      });
    });
  },

  actions: {
    shouldShowCreateOption(term, options) {
      let foundOption = options.find(function(item) {
        return Ember.isEqual(term.toLowerCase(), item.get('name').toLowerCase());
      });
      return !Ember.isPresent(foundOption);
    }
  },


  // Private Functions

  _search(params) {
    return this.store.queryRecord('search', params).then((searchRecord) => {
      return searchRecord.get('searchables');
    });
  }

});
