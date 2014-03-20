(function() {

	var ui = {

		// dom element ids
		laptopId: 'laptop',
		titleDiv: 'title-con',
		leftDiv: 'left-arrow',
		rightDiv: 'right-arrow',
		workDiv: 'work',
		workTitleDiv: 'work-title',
		workInfoDiv: 'work-info',

		/**
		 * Static code snippets for typing animation
		 */
		code: [
			'for(int iter = 0; iter < name.length; iter+=1){}',
			'(function() { Object.create(Map.prototype) })()',
			'ui.button.addEventListener(\'click\', authentication())',
			'function Shape() { this.x = 10; this.y = 20 }',
			'nums.forEach(f => { nums.push(5) })',
			'class Square extends Shape { constructor() { super(x, y); } getX() {return this.x;} }',
			'let y = "variable"',
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

		/**
		 * Object to keep track of skills display state, and the static content
		 * for each skill
		 */
		skillsInfo: {
			current: {
				skill: '',
				iter: 0
			},
			// job experience and work
			jobs: [
				{
					title: 'Linkedin Web Developer Intern',
					info: '<i>Summer 2014</i><br/>Not there yet.'
				},
				{
					title: 'Blue Stingray Web Developer Intern',
					info: '<i>Summer 2014</i><br/>Collaborated with two other employees to create Streatfeast, a mobile friendly web application used to allow food truck owners to communicate their schedule and locations with their customers. Experienced HTML5, JS, CSS, PHP, Twitter API, Facebook API, and Google Maps API.'
				},
				{
					title: 'Iowa State University Student Web Developer',
					info: '<i>October 2013 - Current</i><br/>'
				},
				{
					title: 'Computer Science Teaching Assistant',
					info: '<i>August 2013 - December 2013</i><br/>Explained object oriented fundamentals using Java. Graded and helped create assignments, taught a weekly lab session, and proctored exams. Answered a lot of questions.'
				}
			],
			php: [
				{
					title: 'Zend Framework 2',
					info: 'Professional experience at Iowa State University as a student web developer. Developed APIs, internal tools, and web applications for university clients in Zend.'
				},
				{
					title: 'Laravel 4',
					info: 'Personal experience developing a web application for the USPA polo club. Developed in Laravel 4 to compare to get experience in another web MVC framework.<a href="#">Polo App</a>'
				}
			],
			js: [
				{
					title: 'Backbone.js',
					info: 'Personal experience developing a web application for the USPA polo club.<br/><a href="#">Polo App</a>'
				},
				{
					title: 'Require JS',
					info: 'Personal experience developing a web application for the USPA polo club.<br/><a href="#">Polo App</a>'
				},
				{
					title: 'Express',
					info: 'A small amount of experience experimenting with Express Node.js framework building this portfolio site.<br><a href="https://github.com/holdenrehg/portfolio" target="_blank">See the source</a>'
				}
			],
			// java is a reserved word?
			javaL:[
				{
					title: 'Iowa State Universty',
					info: 'Undergraduate degree in Software Engineering at Iowa State University primarily focused on Java and object oriented programming. Studied UI design, object oriented design and principles, data structures, and algorithms. Experimented with Swing, JDBC, and Android.'
				},
				{
					title: 'Play Framework',
					info: 'Developed an Android application in a university setting, that communicated to a server api running Play Framework. Communicated with a MySQL DB and Mongo DB.'
				}
			],
			mobile:[
				{
					title: 'Android',
					info: 'Experience with developing a mobile application for Android 4.0.2 and greater.<br><a href="#">SoCal</a>'
				},
				{
					title: 'SoCal',
					info: 'A social calendar Android application. Provides users with a social network, calendar system, and location based reminders. Built to support version 4.0.2 and up.<br><a href="#">Check it out</a>'
				},
				{
					title: 'Phonegap',
					info: 'Personal experiments with porting already built web applications and building Backbone.js applications specifically for Phonegap.<br/><a href="#">Examples</a>'
				}
			]
		},

		/**
		 * Initialize the ui for the single page portfolio site
		 */ 
		init: function() {

			ui.yOffset 		= window.scrollYOffset;

			// find and set dom elements
			ui.laptop 		= document.getElementById(ui.laptopId);
			ui.title 		= document.getElementById(ui.titleDiv);
			ui.skills 		= document.querySelectorAll('#toolbelt li');
			ui.left 		= document.getElementById(ui.leftDiv);
			ui.right 		= document.getElementById(ui.rightDiv);
			ui.work 		= document.getElementById(ui.workDiv);
			ui.workTitle 	= document.getElementById(ui.workTitleDiv);
			ui.workInfo 	= document.getElementById(ui.workInfoDiv);

			ui.addEventListeners();
			smoothScroll.init();
			// choose the firt skill to display
			ui.skills[0].click();

			// start animation after 30 seconds
			setTimeout(function() {
				if(!ui.interval) {
					ui.typingAnimation();
				}
			}, 30000);
		},

		/**
		 * Add all event listeners for the entire page
		 */
		addEventListeners: function() {
			ui.laptop.addEventListener('click', ui.typingAnimation);
			ui.left.addEventListener('click', ui.clickLeft);
			ui.right.addEventListener('click', ui.clickRight);

			var numSkills = ui.skills.length;
			for(var i = 0; i < numSkills; i+=1) {
				ui.skills[i].addEventListener('click', ui.clickSkill, false);
			}

			window.onscroll = ui.scrollWindow;
		},

		/**
		 * Event Listener
		 *
		 * Fires when the skill bubble is clicked, updating the work
		 * information to reflect the clicked skill
		 */
		clickSkill: function(event) {
			// remove active from others
			var numSkills = ui.skills.length;
			for(var i = 0; i < numSkills; i+=1) {
				ui.skills[i].classList.remove('circle-active');
			}

			ui.toggle(this.classList, 'circle-active');

			// update current info
			ui.skillsInfo.current.skill = this.id;
			ui.skillsInfo.current.iter = 0;
			ui.updateWork();
		},

		/**
		 * Event Listener
		 *
		 * Fires when the left array next to the work section is clicked,
		 * which changes the work information to the previous example in the
		 * array of work for the current skill
		 */
		clickLeft: function(event) {
			console.log('click left');
			var skill = ui.skillsInfo.current.skill;
			var iter = ui.skillsInfo.current.iter - 1 < 0 ? ui.skillsInfo[skill].length - 1 : ui.skillsInfo.current.iter - 1;

			ui.skillsInfo.current.iter = iter;
			ui.updateWork();
		},

		/**
		 * Event Listener
		 *
		 * Fires when the right array next to the work section is clicked,
		 * which changes the work information to the next example in the
		 * array of work for the current skill
		 */
		clickRight: function(event) {
			console.log('click right');
			var skill = ui.skillsInfo.current.skill;
			var iter = (ui.skillsInfo.current.iter + 1) % ui.skillsInfo[skill].length;

			ui.skillsInfo.current.iter = iter;
			ui.updateWork();
		},

		/**
		 * Helper method to update the work example info to the current skill and example,
		 * determined the skillInfo object
		 */
		updateWork: function() {
			var workObj = ui.skillsInfo[ui.skillsInfo.current.skill][ui.skillsInfo.current.iter];

			// update div info
			ui.workTitle.innerHTML = workObj.title;
			ui.workInfo.innerHTML = workObj.info;
		},

		/**
		 * Event Listener
		 *
		 * Fires when either the laptop icon is clicked on the home view,
		 * or after 30 seconds have passed. The animation will run infinetly after
		 * it has begun.
		 */
		typingAnimation: function(event) {
			// remove the click listener on the laptop icon
			ui.laptop.removeEventListener('click', ui.clickLaptop, false);

			// fun stuff
			var home = $('#home-sec .center-con');
		
			var i = 0;
			var length = ui.code.length;
			ui.interval = setInterval(function() {
				
				var randomHeight = Math.floor(Math.random() * 500);
				var randomWidth = Math.floor(Math.random() * home.width());

				var id = 'code-animate-' + i;
				home.append('<pre id="' + id + '" style="z-index: 0; color:#292929; position:absolute; top: ' + randomHeight  + 'px; left: ' + randomWidth/1.7 + 'px"></pre>');
			
				ui.typeCode(ui.code[i], id);

				i = ++i % (length - 1);
			}, 500);
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

		/**
		 * Helper method to print a snippet of code to the screen, one
		 * character at a time
		 *
		 * @param code, the snippet of code
		 * @param id, the div id to print the snippet inside of
		 */
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

		/**
		 * Helper method to erase code that was already printed to the screen
		 *
		 * @param id, the div id to erase
		 */
		eradeCode: function(id) {
			var pTag = $('#' + id);
			pTag.fadeOut('slow', function() {
				pTag.remove();
			});
		},

		/**
		 * Helper method to toggle a specific class on or off
		 * from a given list of class name. Will be added to the class
		 * list if the dom element does not already contain the class,
		 * or removed if it does contain the class.
		 *
		 * @param classes, a classList object from an element
		 * @param className, the name to be toggled on or off
		 */
		toggle: function(classes, className) {
			if(classes.contains(className)) {
				classes.remove(className);
			} else {
				classes.add(className);
			}
		}
	};

	window.onload = ui.init;
})();