(function() {

	var ui = {

		// dom element ids
		homeId: 'home',
		contactId: 'contact',
		resumeId: 'resume',
		experienceId: 'experience',
		shareId: 'share',
		laptopId: 'laptop',
		titleDiv: 'title-con',

		// config settings

		// code snippets for animation
		code: [
			'for(int iter = 0; iter < name.length; iter+=1){}',
			'(function() { Object.create(Map.prototype) })()',
			'ui.button.addEventListener(\'click\', authentication())',
			'function Shape() { this.x = 10; this.y = 20 }',
			'nums.forEach(f => { nums.push(5) })',
			'class Square extends Shape { constructor() { super(x, y); } getX() {return this.x;} }',
			'let y = "holden"',
			'const x = 40',
			'for(var string of strings) { if(string === "break") break; print(string); }',
			'"[}$*@[%].match(/./g).length === 1"',
			'export function(n) { return n % 4 }',
			'var set = new Set(); set.add("yes").add("no").add("yes"); set.length === 2;',
			'for(int iter = 0; iter < name.length; iter+=1){}',
			'(function() { Object.create(Map.prototype) })()',
			'ui.button.addEventListener(\'click\', authentication())',
			'function Shape() { this.x = 10; this.y = 20 }',
			'nums.forEach(f => { nums.push(5) })',
			'class Square extends Shape { constructor() { super(x, y); } getY() {return this.y}}',
			'let y = "holden"',
			'const x = 40',
			'for(var string of strings) { if(string === "break") break; print(string); }',
			'"[}$*@[%].match(/./g).length === 1"',
			'export function(n) { return n % 4 }',
			'var set = new Set(); set.add("yes").add("no").add("yes"); set.length === 2;',
			'for(int iter = 0; iter < name.length; iter+=1){}',
			'(function() { Object.create(Map.prototype) })()',
			'ui.button.addEventListener(\'click\', authentication())',
			'function Shape() { this.x = 10; this.y = 20 }',
			'nums.forEach(f => { nums.push(5) })',
			'class Square extends Shape { constructor() { super(x, y); } getY() {return this.y}}',
			'let y = "holden"',
			'const x = 40',
			'for(var string of strings) { if(string === "break") break; print(string); }',
			'"[}$*@[%].match(/./g).length === 1"',
			'export function(n) { return n % 4 }',
			'var set = new Set(); set.add("yes").add("no").add("yes"); set.length === 2;',
			'for(int iter = 0; iter < name.length; iter+=1){}',
			'(function() { Object.create(Map.prototype) })()',
			'ui.button.addEventListener(\'click\', authentication())',
			'function Shape() { this.x = 10; this.y = 20 }',
			'nums.forEach(f => { nums.push(5) })',
			'class Square extends Shape { constructor() { super(x, y); } getY() {return this.y}}',
			'let y = "holden"',
			'const x = 40',
			'for(var string of strings) { if(string === "break") break; print(string); }',
			'"[}$*@[%].match(/./g).length === 1"',
			'export function(n) { return n % 4 }',
			'var set = new Set(); set.add("yes").add("no").add("yes"); set.length === 2;'
		],

		init: function() {

			// find and set dom elements
			ui.home = document.getElementById(ui.homeId);
			ui.contact = document.getElementById(ui.contactId);
			ui.resume = document.getElementById(ui.resumeId);
			ui.experience = document.getElementById(ui.experienceId);
			ui.share = document.getElementById(ui.shareId);
			ui.laptop = document.getElementById(ui.laptopId);
			ui.title = document.getElementById(ui.titleDiv);
			ui.yOffset = window.scrollYOffset;

			ui.addEventListeners();
			smoothScroll.init();
		},

		addEventListeners: function() {
			ui.contact.addEventListener('click', ui.clickContact);
			ui.home.addEventListener('click', ui.clickHome);
			ui.resume.addEventListener('click', ui.clickResume);
			ui.experience.addEventListener('click', ui.clickExperience);
			ui.share.addEventListener('click', ui.clickShare);
			ui.laptop.addEventListener('click', ui.clickLaptop);

			window.onscroll = function() {
				ui.scrollWindow();
			};
		},

		clickContact: function(event) { 
			console.log('clicked contact button');
		},

		clickHome: function(event) {
			console.log('clicked home button');
		},

		clickResume: function(event) {
			console.log('clicked resume button');
		},

		clickExperience: function(event) {
			console.log('clicked experience button');
		},

		clickShare: function(event) {
			console.log('clicked share button');
		},

		clickLaptop: function(event) {
			console.log('clicked laptop button');
			ui.laptop.removeEventListener('click', ui.clickLaptop, false);

			// fun stuff
			var home = $('#home-sec .center-con');
		
			var i = 0;
			var length = ui.code.length;
			var interval = setInterval(function() {
				if(i === length - 1) {
					clearInterval(interval);
					ui.laptop.addEventListener('click', ui.clickLaptop);
				}
				console.log('iter : ' + i);

				var randomHeight = Math.floor(Math.random() * home.height());
				var randomWidth = Math.floor(Math.random() * home.width());

				console.log('height: ' + randomHeight + ' width: ' + randomWidth);

				var id = 'code-animate-' + i;
				home.append('<pre id="' + id + '" style="opacity:.08; position:absolute; top: ' + randomHeight  + 'px; left: ' + randomWidth/2.1 + 'px"></pre>');
			
				ui.typeCode(ui.code[i], id);

				i++;
			}, 500);

			// can only use it once
		},

		/**
		 * Handles event for when the window is scrolled.
		 * 
		 * Fades the title div out and in between the range of 
		 * window offet 50 and 160
		 */
		scrollWindow: function() {
			if(ui.title.style.opacity === "") {
				ui.title.style.opacity = 1;
			}

			var offset = window.pageYOffset;
			console.log(offset);
			if(offset > ui.yOffset && offset > 50) {
				// scrolling down
				ui.title.style.opacity = Math.max(1 - (offset / 300), 0);
			} else if(offset < 300){
				// scrolling up
				ui.title.style.opacity = Math.min(1 - (offset / 300), 1);		
			}

			ui.yOffset = offset;
		},

		typeCode: function(code, id) {
			var codeLength = code.length;
			var pTag = $('#' + id);
			var j = 0;

			var interval = setInterval(function() {
				if(j === codeLength) {
					clearInterval(interval);
					ui.eradeCode(id);
				}

				pTag.html(pTag.html() + code.charAt(j++));
				
			}, Math.floor(Math.random() * 100) + 50);
		},

		eradeCode: function(id, callback) {
			var pTag = $('#' + id);
			pTag.fadeOut('slow', function() {
				pTag.remove();
			});
		}
	};

	window.onload = function() {
		ui.init();
	};
})();