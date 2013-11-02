var ModalView = Backbone.View.extend(
	{
		tagName: 'div',
		className: 'modal',
		events: {
			'click .close': 'close',
			'click .background': 'close'
		},
		initialize: function(view){
			this.view = view;
		},
		
		render: function(){
			//var template = $('#modal-template').text();
			this.$el.html(this.template());
			return this;
		},
		
		close: function(){
			this.remove();
		},
		
		template: function(){
			var template = '<div class="background"></div>';
			template += '<div class="container">';
			//template += '<div class="close">X</div>';
			template += this.view.view.context.outerHTML;
			template += '</div>';
			return template;
		}
		
	}
);