(function() {

	var ui = {

		homeId: 'home',
		contactId: 'contact',
		resumeId: 'resume',
		experienceId: 'experience',
		shareId: 'share',
		laptopId: 'laptop',
		mainImgId: 'main-img',

		init: function() {

			// find elements
			ui.home = document.getElementById(ui.homeId);
			ui.contact = document.getElementById(ui.contactId);
			ui.resume = document.getElementById(ui.resumeId);
			ui.experience = document.getElementById(ui.experienceId);
			ui.share = document.getElementById(ui.shareId);
			ui.laptop = document.getElementById(ui.laptopId);
			ui.mainImg = document.getElementById(ui.mainImgId);

			ui.addEventListeners();
		},

		addEventListeners: function() {
			ui.contact.addEventListener('click', ui.clickContact);
			ui.home.addEventListener('click', ui.clickHome);
			ui.resume.addEventListener('click', ui.clickResume);
			ui.experience.addEventListener('click', ui.clickExperience);
			ui.share.addEventListener('click', ui.clickShare);
			ui.laptop.addEventListener('click', ui.clickLaptop);
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
		}
	};

	window.onload = function() {
		ui.init();
	};
})();