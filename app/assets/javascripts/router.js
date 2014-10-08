// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  // this.resource('posts');
  this.resource('leads', { path: '/'}, function(){
  	this.route('new');

   
  	this.resource('lead', {path: '/leads/:id'}, function() {
  		this.route('edit')
  	});
  })
  // location: 'auto',
  // rootURL: '/'
})
