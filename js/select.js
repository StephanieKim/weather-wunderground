$(function(){
    "use strict";

    // change method goes through all of the selected lists
    $("#location").change(function(){
        // try to make this an object literal with sessionStorage
        var location_select = $(this).val();
        var base_url = "http://api.wunderground.com/api/51c27f40bbfecefc/conditions/q/";
        var j = ".json";

        $.ajax({
            url : base_url + location_select + j + "&cb=?",
            dataType : "jsonp",
            success : function(data) {
                var current = {
                    name_location: data.current_observation.display_location.city,
                    temp_f: data.current_observation.temp_f,
                    weather: data.current_observation.weather,
                    wind_mph: data.current_observation.wind_mph
                };
                console.log(data);
                var returned_data = $('#returned_data');
                returned_data.html("<h3>Results of " + current.name_location +
                "</h3>"  + "<p>Temperature: " + current.temp_f + "</p>" +
                "<p>Current Weather: " + current.weather + "</p>" + "<p>Wind Gusts: " +
                current.wind_mph + "mph</p>");
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
        
    });
});
