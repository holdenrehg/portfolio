(function() {

    var ui = {

        timeline: undefined,
        ticks: undefined,
        selectedTick: undefined,
        timelineAnimation: undefined,
        timelineLeft: undefined,
        timelineRight: undefined,
        timelineIndex: -1,

        init: function() {
            ui.ticks = document.querySelectorAll('.dot');
            ui.timelineLeft = document.querySelector('#left');
            ui.timelineRight = document.querySelector('#right');

            ui.addEventListeners();
            ui.startTimelineAnimation();
        },

        addEventListeners: function() {
            ui.timelineLeft.addEventListener('click', ui.events.moveTimelineBackwards);
            ui.timelineRight.addEventListener('click', ui.events.moveTimelineForwards);
            for (var i = 0; i < ui.ticks.length; i++) {
                ui.ticks[i].addEventListener('mouseover', ui.events.toggleTooltip);
                ui.ticks[i].addEventListener('mouseout', ui.events.toggleTooltip);
                ui.ticks[i].addEventListener('click', ui.events.swapView);
            }
        },

        /**
         * Start rotating animation for timeline ticks
         */
        startTimelineAnimation: function() {
            ui.timelineAnimation = setTimeout(function() {
                requestAnimationFrame(ui.startTimelineAnimation);
                var ticks = document.querySelectorAll('.tick');

                var processTick = function(iter, className) {
                    var tick = ticks[iter++];
                    tick.className = className;
                    setTimeout(function() {
                        if (iter < ticks.length) {
                            processTick(iter, className);
                        }
                    }, 20);
                };

                processTick(0, 'tick grow');
                setTimeout(function() {
                    processTick(0, 'tick');
                }, 300);

            }, 8000);
        },

        /**
         * Turn off rotating animation for timeline ticks
         */
        stopTimelineAnimation: function() {
            clearInterval(ui.timelineAnimation);
            ui.timelineAnimation = undefined;
        },

        events: {

            /**
             * Hover listener
             */
            toggleTooltip: function(e) {
                var tooltip = e.target.querySelector('.tooltip');

                if (tooltip) {
                    tooltip.style.display = tooltip.style.display === '' ? 'block' : '';
                }
            },

            /**
             * Click listener
             */
            swapView: function(e) {
                var tick = e.target,
                    viewName = e.target.dataset.view,
                    promise = $.get('../views/' + viewName + '.hjs'),
                    view = document.querySelector('#view'),
                    viewContainer = document.querySelector('#viewContainer');

                promise.done(function(res) {

                    // fade container out
                    viewContainer.className = 'fadeOut';

                    // load new view and fade container in
                    setTimeout(function() {
                        view.innerHTML = res;
                        view.className = viewName + 'View';
                        viewContainer.className = 'fadeIn';

                        // set index of view
                        ui.timelineIndex = ui.ticks.toArray().indexOf(tick);
                    }, 400);
                });

                // remove old highlight
                if (ui.selectedTick) {
                    ui.selectedTick.className = 'dot';
                }

                // highlight tick
                tick.className = 'dot current';
                ui.selectedTick = tick;
            },

            moveTimelineBackwards: function(e) {
                ui.timelineIndex = (ui.timelineIndex + ui.ticks.length - 1) % ui.ticks.length;
                ui.ticks[ui.timelineIndex].click();
            },

            moveTimelineForwards: function(e) {
                ui.timelineIndex = (ui.timelineIndex + 1) % ui.ticks.length;
                ui.ticks[ui.timelineIndex].click();
            }
        }

    };

    window.onload = ui.init;
})();
