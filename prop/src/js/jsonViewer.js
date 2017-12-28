APP.JV = (function(context) {

	function initJsonViewer(obj, str) {
		str += '<span class="accordion-trigger">[-]</span><ul>';		
		str += formatJson(obj, str);
		str += '</ul>';
		return str;
	}

	function formatJson(obj, str) {
		var value = obj['key'];
		var childrens = obj.childrens;
		
		str += getListTemplate(value);
	  str += childrens ?'<span class="accordion-trigger">[-]</span><ul>':'';

		if(childrens && childrens.length!==0) {
			var length = childrens.length;
			for(var i=0;i<length;i++) {
				str += '<li>';
				str += formatJson(childrens[i], '');
				str += '</li>'
			}
		}
	  str += '</ul>';
	  return str;
	}

	function getListTemplate(val) {
	  return `<li><span>${val}</span></li>`;
	}

	function accordion(rootContainer){

		rootContainer.addEventListener('click', function(event) {
			var className = event.target.className;
			if(className.search('accordion-trigger') === -1) {
				return;
			}
			if (className.search('hidden') === -1) {
				event.target.className = className + ' hidden';
				event.target.innerHTML = '[+]';
			} else {
				event.target.className = className.replace('hidden', '');
				event.target.innerHTML = '[-]';
			}
		});
	}

	context.createJsonViewer = function(obj, rootContainer) {
		var template = initJsonViewer(obj, '');
	  rootContainer.innerHTML = template;
		accordion(rootContainer);
	}

	return context;
})({});