App.LeadsNewController = Ember.Controller.extend({

	actions: {
		createLead: function() {
			var self = this;
			var fields = this.get('fields')
			if (App.Lead.valid(fields)) {
				console.log(fields)
				var lead = this.store.createRecord('lead', this.get('fields'));
				lead.save().then(function(){
					self.transitionToRoute('lead', lead);
				});
			} else {
				this.set('showError', true)
			}
		}
	}
});