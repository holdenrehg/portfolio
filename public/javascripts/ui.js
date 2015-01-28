(function() {

    var ui = {

        timeline: undefined,
        ticks: undefined,
        dataViews: undefined,
        selectedTick: undefined,
        timelineAnimation: undefined,
        timelineLeft: undefined,
        timelineRight: undefined,
        timelineIndex: -1,

        /**
         *
         */
        init: function() {
            ui.ticks = document.querySelectorAll('.dot');
            ui.timelineLeft = document.querySelector('#left');
            ui.timelineRight = document.querySelector('#right');

            ui.addEventListeners();
            ui.startTimelineAnimation();

            // load in default landing view
            if(location.hash) {
              ui.swapView(location.hash.substr(1));
            } else {
              document.querySelector('.dot[data-view="landing"]').click();
            }
        },

        /**
         *
         */
        addEventListeners: function() {
            window.addEventListener("hashchange", ui.events.onHash, false);
            ui.timelineLeft.addEventListener('click', ui.events.moveTimelineBackwards);
            ui.timelineRight.addEventListener('click', ui.events.moveTimelineForwards);
            for (var i = 0; i < ui.ticks.length; i++) {
                ui.ticks[i].addEventListener('mouseover', ui.events.toggleTooltip);
                ui.ticks[i].addEventListener('mouseout', ui.events.toggleTooltip);
                ui.ticks[i].addEventListener('click', ui.events.clickTick);
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
         * @param viewName
         */
        swapView: function(viewName) {
          var promise = $.get('../views/' + viewName + '.hbs'),
              view = document.querySelector('#view'),
              viewContainer = document.querySelector('#viewContainer'),
              tick = document.querySelector('.dot[data-view="' + viewName + '"]');

              promise
                .done(function(res) {

                  // fade container out
                  viewContainer.className = 'fadeOut';

                  // load new view and fade container in
                  setTimeout(function() {
                      view.innerHTML = res;
                      view.className = viewName + 'View';
                      viewContainer.className = 'fadeIn';

                      if(tick) {
                        ui.setTick(tick);
                      }

                      ui.timelineIndex = ui.ticks.toArray().indexOf(ui.selectedTick);
                  }, 400);
              })
              .fail(function() {
                location.hash = '#404';
              });

        },

        /**
         * @param tick
         */
        setTick: function(tick) {
          // remove old highlight
          if (ui.selectedTick) {
            ui.selectedTick.className = 'dot';
          }

          // highlight tick
          tick.className = 'dot current';
          ui.selectedTick = tick;
        },

        events: {

            /**
             * @param e
             */
            onHash: function(e) {
              var viewName = location.hash.substr(1);
              ui.swapView(viewName);
            },

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
            clickTick: function(e) {
              var tick = e.target;
              if(tick.className.indexOf('dot') === -1) {
                tick = $(tick).parent('.dot')[0];
              }

              ui.setTick(tick);
              location.hash = '#' + tick.dataset.view;
            },

            /**
             * @param e
             */
            moveTimelineBackwards: function(e) {
                ui.timelineIndex = (ui.timelineIndex + ui.ticks.length - 1) % ui.ticks.length;
                ui.ticks[ui.timelineIndex].click();
            },

            /**
             * @param e
             */
            moveTimelineForwards: function(e) {
                ui.timelineIndex = (ui.timelineIndex + 1) % ui.ticks.length;
                ui.ticks[ui.timelineIndex].click();
            }

        }

    };

    window.onload = ui.init;
})();
