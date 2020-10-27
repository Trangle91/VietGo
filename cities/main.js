//link the carousel to different html pages

function qs(key) {
    key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
    var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
    var slide = match && decodeURIComponent(match[1].replace(/\+/g, " "));
    if (Math.floor(slide) == slide && $.isNumeric(slide))
        return parseInt(slide);
    else
        return 0;
}
$('#myCarousel').carousel(qs('slide'));

//disable the submit button when nothing is selected
$(function(){
    $('#plannedTime').on('keyup change', function(){
        if($(this).val() == ''){
            $('#submitButton').prop('disabled', true);
        }
        else{
            $('#submitButton').prop('disabled', false);
        }
    });
});
