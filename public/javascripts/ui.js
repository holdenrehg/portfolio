(function() {

    var ui = {

        // dom element ids
        laptopId: 'laptop',
        titleDiv: 'title-con',
        leftDiv: 'left-arrow',
        rightDiv: 'right-arrow',
        workDiv: 'slider-display',
        workTitleDiv: 'display-title',
        workInfoDiv: 'display-info',
        workTimeDiv: 'display-time',
        workImagesDiv: 'display-images',

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
                skill: null,
                iter: 0
            },
            // job experience and work
            edu: [{
                title: 'Iowa State Universty',
                info: '<p>I am pursuing an undergraduate degree in Software Engineering at Iowa State University primarily focusing on Java and object oriented programming. I studied UI design, object oriented design and principles, data structures, algorithms, and project management. I also experimented with Swing, JDBC, and Android.'
            }],
            work: [{
                title: 'LinkedIn Web Developer Intern',
                time: 'Summer 2014',
                info: 'This past summer, I was a LinkedIn web development intern primarily focusing on front end web development. After some training with JSP, <a target="_blank" href="http://akdubya.github.io/dustjs/">Dust.js</a>, <a target="_blank" href="http://sass-lang.com">SASS</a>, <a target="_blank" href="https://github.com/linkedin/archetype">Archetype</a>, and <a target="_blank" href="http://www.venusjs.org/">Venus.js</a>, I gathered requirements from designers and marketers for an internal redesign of Adobe CQ. I also introduced our platform to Grunt and setup task runners for eslint and jsdoc.'
            }, {
                title: 'Blue Stingray Web Developer Intern',
                time: 'Summer 2013',
                info: 'I collaborated with two other employees to create Streatfeast, a mobile friendly web application. It was created to allow food truck owners to communicate their schedule and locations with their customers instead of relying on social media. I learned HTML5, JS, CSS, and PHP, while integrating with the Twitter API, Facebook API, and Google Maps API. The entire internship was a large learning experience with web development. Unfortunately, the resulting product was incomplete at the end of the internship so was not released.'
            }, {
                title: 'Iowa State University Student Web Developer',
                time: 'October 2013 - Current',
                info: 'When school is in session, I work at Iowa State University Web Development. It is a division of IT on the Iowa State campus which acts as an internal agency to other departments. I work on small teams of 3-5 developers who meet with clients, gather requirements and then design, implement, and maintain various web applications. I help maintain sites such as <a target="_blank" href="http://it.iastate.edu">Iastate IT</a> which was written using Zend 1, and also am currently integrating an internal tool with Jira using the Jira REST API, <a target="_blank" href="http://framework.zend.com/">Zend 2</a>, <a target="_blank" href="http://www.doctrine-project.org/">Doctrine</a>, and <a target="_blank" href="https://getcomposer.org/">Composer</a>.'
            }, {
                title: 'Computer Science Teaching Assistant',
                time: 'August 2013',
                info: 'The job consisted of explaining object oriented fundamentals such as encapsulation, inheritence, polymorphism, and recursion using Java to students taking the course. I graded and helped create assignments, taught a weekly lab session, and proctored exams. I also answered a lot of questions.'
            }],
            proj: [{
                title: 'Portfolio',
                info: 'I have a small amount of experience experimenting with Express Node.js framework building this portfolio site.<br><a href="https://github.com/holdenrehg/portfolio" target="_blank">See the source.</a>'
            }, {
                title: 'Polo App',
                info: 'I\'m currently developing a mock web application for the United States polo. I am developing it in Laravel 4 to experience another web MVC framework and comparing it to frameworks I already know. The app\'s purpose is to allow polo team managers to keep track of current polo players, games, and fields across the country. <a target="_blank" href="https://github.com/holdenrehg/polo">See the source.</a>.',
                wide: true,
                images: [
                    'proj/uspa/uspa_home.png',
                    'proj/uspa/uspa_dash.png'
                ]
            }, {
                title: 'SoCal',
                info: 'This project was a social calendar Android application. It provides users with a social network, calendar system, and location based reminders, and was built to support version 4.0.2 and up.',
                images: [
                    'proj/socal/home.png',
                    'proj/socal/event.png',
                    'proj/socal/settings.png',
                    'proj/socal/calendars.png'
                ]
            }, {
                title: 'Spark',
                time: 'Summer 2014',
                info: 'This smart parking application built in 24 hours during AngelHack 2014 Silicon Valley and placed within the top 10. Spark wanted to make paid parking easier by using existing security cameras to tag pictures of cars license plates pulling in and out of lots. The pictures would be sent to our server for processing and notify a user of the fee for parking online. The web client provided users with the ability to create accounts attached to their license plate numbers and pay their fees directly from the page. I built the web side using Express, Backbone, jQuery, Underscore, and Handlebars.</p><p><a href="http://github.com/holdenrehg/SparkWeb" target="_blank">See the source.</a>',
                wide: true,
                images: [
                    'proj/spark/spark_home.png',
                    'proj/spark/spark_charges.png',
                    'proj/spark/spark_profile.png'
                ]
            }]
        },

        /**
         * Initialize the ui for the single page portfolio site
         */
        init: function() {

            ui.yOffset = window.scrollYOffset;

            // find and set dom elements
            ui.laptop = document.getElementById(ui.laptopId);
            ui.title = document.getElementById(ui.titleDiv);
            ui.skills = document.querySelectorAll('#toolbelt li');
            ui.left = document.getElementById(ui.leftDiv);
            ui.right = document.getElementById(ui.rightDiv);
            ui.work = document.getElementById(ui.workDiv);
            ui.workTitle = document.getElementById(ui.workTitleDiv);
            ui.workInfo = document.getElementById(ui.workInfoDiv);
            ui.workTime = document.getElementById(ui.workTimeDiv);
            ui.workImages = document.getElementById(ui.workImagesDiv);
            ui.mobile = ui.isMobile();

            ui.addEventListeners();
            smoothScroll.init();
            // choose the first skill to display
            ui.skills[1].click();

            // start animation after 2 seconds on desktop
            if (!ui.mobile) {
                setTimeout(function() {
                    if (!ui.interval) {
                        ui.typingAnimation();
                    }
                }, 2000);
            } else {
                // remove hover elements
                document.getElementById('hover').setAttribute('id', '');
            }
        },

        /**
         * Add all event listeners for the entire page
         */
        addEventListeners: function() {
            if (!ui.mobile) {
                ui.laptop.addEventListener('click', ui.typingAnimation);
            }

            ui.left.addEventListener('click', ui.clickLeft);
            ui.right.addEventListener('click', ui.clickRight);

            var numSkills = ui.skills.length;
            for (var i = 0; i < numSkills; i += 1) {
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
            if (!this.classList.contains('circle-active')) {

                // remove active from others
                var numSkills = ui.skills.length;
                for (var i = 0; i < numSkills; i += 1) {
                    ui.skills[i].classList.remove('circle-active');
                }

                ui.toggle(this.classList, 'circle-active');

                // update current info
                ui.skillsInfo.current.skill = this.id;
                ui.skillsInfo.current.iter = 0;
                ui.updateWork();
            }
        },

        /**
         * Event Listener
         *
         * Fires when the left array next to the work section is clicked,
         * which changes the work information to the previous example in the
         * array of work for the current skill
         */
        clickLeft: function(event) {
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
            var skill = ui.skillsInfo.current.skill;
            var iter = (ui.skillsInfo.current.iter + 1) % ui.skillsInfo[skill].length;

            ui.skillsInfo.current.iter = iter;
            ui.updateWork();
        },

        /**
         * Event Listener
         *
         * Fires when the modal window is clicked. Closes the modal.
         */
        closeModal: function(event) {
            var target = $('#modal');
            target.fadeOut(function() {
                target.remove();
                $('body').css('overflowY', 'scroll');
            });
        },

        /**
         * Event Listener
         *
         * Fires when an image is clicked. Created a modal window on top of the screen
         * displaying a full sized image.
         */
        clickImage: function(event) {
            var overlay = document.createElement('div'),
                img = document.createElement('img');

            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.background = '#eee';
            overlay.style.opacity = '.985';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.padding = '80px 20px 20px 20px';
            overlay.style.textAlign = 'center';
            overlay.style.overflowY = 'scroll';
            overlay.id = 'modal';

            img.addEventListener('click', ui.closeModal);
            img.src = event.target.src;
            if(event.target.classList.contains('wide')) {
            	img.style.width = '75%';
            } else {
            	img.style.width = '25%';
            }
            img.style.display = 'none';
            img.id = 'modal-image';

            overlay.appendChild(img);

            var body = $('body');
            $('body').append(overlay);
            $('#modal-image').fadeIn();

            // temporarily disable scroll on body
            body.css('overflowY', 'hidden');
        },

        /**
         * Helper method to update the work example info to the current skill and example,
         * determined the skillInfo object
         */
        updateWork: function() {
            var workObj = ui.skillsInfo[ui.skillsInfo.current.skill][ui.skillsInfo.current.iter];

            // update div info
            ui.workTitle.innerHTML = workObj.title;
            ui.workTime.innerHTML = workObj.time ? workObj.time : '';
            ui.workInfo.innerHTML = workObj.info;
            ui.workImages.innerHTML = '';
            if (workObj.hasOwnProperty('images')) {
            	var wide = workObj.hasOwnProperty('wide');
                var ids = [];
                for (var i = 0; i < workObj.images.length; i += 1) {
                    var img = document.createElement('img');
                    img.src = window.location.origin + '/images/' + workObj.images[i];
                    img.style.width = '60px';
                    img.style.margin = '30px 5px 0px 5px';
                    img.style.display = 'none';
                    if(wide) { img.classList.add('wide'); }
                    img.id = 'image' + i;
                    ids.push('image' + i);
                    img.addEventListener('click', ui.clickImage);
                    ui.workImages.appendChild(img);
                }
                for (i = 0; i < ids.length; i += 1) {
                    $('#' + ids[i]).fadeIn();
                }
            }
        },

        /**
         * Event Listener
         *
         * Fires when either the laptop icon is clicked on the home view,
         * or after 30 seconds have passed. The animation will run infinetly after
         * it has begun.
         */
        typingAnimation: function(event) {

            ui.laptop.removeEventListener('click', ui.clickLaptop, false);

            var i = 0;
            var length = ui.code.length;
            ui.interval = setInterval(function() {

                var home = $('#home-sec');
                var randomHeight = Math.floor(Math.random() * (home.height() - 50));
                var randomWidth = Math.floor(Math.random() * home.width());

                var id = 'code-animate-' + i;
                home.append('<pre id="' + id + '" style="z-index: 0; opacity: .8; color:#333333; position:absolute; top: ' + randomHeight + 'px; left: ' + randomWidth / 1.7 + 'px"></pre>');

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
            if (ui.title.style.opacity === "") {
                ui.title.style.opacity = 1;
            }

            var offset = window.pageYOffset;
            if (offset > ui.yOffset && offset > 50) {
                // scrolling down
                ui.title.style.opacity = Math.max(1 - (offset / 300), 0);
            } else if (offset < 300) {
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
                if (j === codeLength) {
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
            if (classes.contains(className)) {
                classes.remove(className);
            } else {
                classes.add(className);
            }
        },

        /**
         * Script from detectmobilebrowser.com to detect if the user is on mobile
         */
        isMobile: function() {
            var a = navigator.userAgent || navigator.vendor || window.opera;
            var b = 'http://detectmobilebrowser.com/mobile';
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                return true;
            }
        }
    };

    window.onload = ui.init;
})();
