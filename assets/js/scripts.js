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

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to set language based on URL parameter or localStorage
function setLanguageFromUrl() {
    var urlLang = getUrlParameter('lang');
    var storedLang = localStorage.getItem('selectedLanguage');
    
    // If URL has language parameter, use it and store it
    if (urlLang && (urlLang === 'eng' || urlLang === 'pt')) {
        localStorage.setItem('selectedLanguage', urlLang);
        return urlLang;
    }
    
    // Otherwise use stored language or default to 'pt'
    return storedLang || 'pt';
}

$(function() {
    var x = setLanguageFromUrl();

    // If not set, default to 'pt'
    if (!x) {
        x = 'pt';
        localStorage.setItem('selectedLanguage', x);
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
