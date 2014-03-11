(function() {

	var ui = {

		// dom element ids
		// homeId: 'home',
		// contactId: 'contact',
		// resumeId: 'resume',
		// experienceId: 'experience',
		// shareId: 'share',
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

		skills: {
			'php': {

			},
			'js': {

			},
			'java':{

			},
			'mobile':{

			}
		},

		init: function() {

			// find and set dom elements
			// ui.home = document.getElementById(ui.homeId);
			// ui.contact = document.getElementById(ui.contactId);
			// ui.resume = document.getElementById(ui.resumeId);
			// ui.experience = document.getElementById(ui.experienceId);
			// ui.share = document.getElementById(ui.shareId);
			ui.laptop = document.getElementById(ui.laptopId);
			ui.title = document.getElementById(ui.titleDiv);
			ui.skills = document.querySelectorAll('#toolbelt li');
			ui.yOffset = window.scrollYOffset;

			ui.addEventListeners();
			smoothScroll.init();

			// start animation after 30 seconds
			setTimeout(function() {
				if(!ui.interval) {
					ui.typingAnimation();
				}
			}, 30000);
		},

		addEventListeners: function() {
			ui.laptop.addEventListener('click', ui.typingAnimation);

			var numSkills = ui.skills.length;
			for(var i = 0; i < numSkills; i+=1) {
				ui.skills[i].addEventListener('click', ui.clickSkill, false);
			}

			window.onscroll = function() {
				ui.scrollWindow();
			};
		},

		clickSkill: function(event) {
			// remove active from others
			var numSkills = ui.skills.length;
			for(var i = 0; i < numSkills; i+=1) {
				ui.skills[i].classList.remove('circle-active');
			}

			ui.toggle(this.classList, 'circle-active');
		},

		typingAnimation: function(event) {
			ui.laptop.removeEventListener('click', ui.clickLaptop, false);

			// fun stuff
			var home = $('#home-sec .center-con');
		
			var i = 0;
			var length = ui.code.length;
			ui.interval = setInterval(function() {
				
				var randomHeight = Math.floor(Math.random() * 500);
				var randomWidth = Math.floor(Math.random() * home.width());

				// console.log('height: ' + randomHeight + ' width: ' + randomWidth);

				var id = 'code-animate-' + i;
				home.append('<pre id="' + id + '" style="z-index: 0; color:#292929; position:absolute; top: ' + randomHeight  + 'px; left: ' + randomWidth/1.7 + 'px"></pre>');
			
				ui.typeCode(ui.code[i], id);

				i = ++i % (length - 1);
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
		},

		toggle: function(classes, className) {
			if(classes.contains(className)) {
				classes.remove(className);
			} else {
				classes.add(className);
			}
		}
	};

	window.onload = function() {
		ui.init();
	};
})();