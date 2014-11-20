(function() {

    var ui = {

        timeline: undefined,
        ticks: undefined,

        init: function() {
            ui.ticks = document.querySelectorAll('.bigTick');

            ui.addEventListeners();
        },

        addEventListeners: function() {
            for(var i = 0; i < ui.ticks.length; i++) {
                ui.ticks[i].addEventListener('mouseover', ui.events.toggleTooltip);
                ui.ticks[i].addEventListener('mouseout', ui.events.toggleTooltip);
            }
        },

        events: {
            toggleTooltip: function(e) {
                var tooltip = e.target.querySelector('.tooltip');

                if (tooltip) {
                    tooltip.style.display = tooltip.style.display === '' ? 'block' : '';
                }
            }
        }

    };

    window.onload = ui.init;
})();
