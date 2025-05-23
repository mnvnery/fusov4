$(document).ready(function(){
	$('#close-icon').click(function(){
		$(this).toggleClass('open');
        $('.pages-nav').toggleClass('pages-nav-open');
	});
});


$(document).on('click',function(e){
    if(!(($(e.target).closest(".pages-nav").length > 0 ) || ($(e.target).closest("#close-icon").length > 0))){
        $(".pages-nav").removeClass('pages-nav-open');
        $('#close-icon').removeClass('open');
    }
});

/*
$('.fuso-insular-banner').mouseover(function(){
    $('.index-container').addClass('bg-red');
});

$('.fuso-insular-banner').mouseout(function(){
    $('.index-container').removeClass('bg-red');
});
*/

$('.fuso-insular-banner').mouseover(function() {
    var color = $(this).data('color'); // Retrieve the color from the data attribute
    $('.index-container').css('background-color', color); // Apply the color
});

$('.fuso-insular-banner').mouseout(function() {
    $('.index-container').css('background-color', ''); // Reset the background color
});


$('.language').on( "click", function() {
    let language = $(this).text();
    localStorage.setItem('selectedLanguage', language);
    var x = localStorage.getItem("selectedLanguage");
    $(this).addClass('active').siblings().removeClass('active');
    if (x == 'pt') {
        $('.pt').show();
        $('.eng').hide();
    } 
    else {
        $('.eng').show();
        $('.pt').hide();
    }
});


$(function() {
    var x = localStorage.getItem("selectedLanguage");

    // If not set, default to 'pt'
    if (!x) {
        selectedLanguage = 'pt';
        localStorage.setItem('selectedLanguage', selectedLanguage);
    }
    console.log(x)
    if (x == 'pt') {
        $('.pt').show();
        $('.eng').hide();
        $('.pt-selector').addClass('active');
        $('.eng-selector').removeClass('active');
    } 
    else {
        $('.eng').show();
        $('.pt').hide();
        $('.eng-selector').addClass('active');
        $('.pt-selector').removeClass('active');
    }
});