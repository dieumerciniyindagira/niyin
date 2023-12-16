// accessibility.js

$(document).ready(function() {
    // Function to handle text size toggle
    function toggleTextSize() {
        // Toggle switch state
        var toggleSwitch = $('#textSizeToggle');
        
        // Event handler for toggle switch change
        toggleSwitch.on('change', function() {
            // Check if toggle switch is in the 'On' position
            if (toggleSwitch.prop('checked')) {
                // Increase text size by 20%
                $('p').css('font-size', '+=20%');
            } else {
                // Decrease text size back to the original size
                $('p').css('font-size', '');
            }
        });
    }

    // Call the function to set up text size toggle
    toggleTextSize();
});
