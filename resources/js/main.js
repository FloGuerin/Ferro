jQuery(function($){

var FERRO = window.FERRO || {};

/* ==================================================
   Drop Menu
================================================== */

FERRO.subMenu = function(){
	$('#menu-nav').supersubs({
		minWidth: 12,
		maxWidth: 27,
		extraWidth: 0 // set to 1 if lines turn over
	}).superfish({
		delay: 0,
		animation: {opacity:'show'},
		speed: 'fast',
		autoArrows: false,
		dropShadows: false
	});	
}

/* ==================================================
   Mobile Navigation
================================================== */
/* Clone Menu for use later */
var mobileMenuClone = $('#menu').clone().attr('id', 'navigation-mobile');

FERRO.mobileNav = function(){
	var windowWidth = $(window).width();
	
	// Show Menu or Hide the Menu
	if( windowWidth <= 979 ) {
		if( $('#mobile-nav').length > 0 ) {
			mobileMenuClone.insertAfter('header');
			$('#navigation-mobile #menu-nav').attr('id', 'menu-nav-mobile').wrap('<div class="container"><div class="row"><div class="span12" />');
		}
	} else {
		$('#navigation-mobile').css('display', 'none');
		if ($('#mobile-nav').hasClass('open')) {
			$('#mobile-nav').removeClass('open');	
		}
	}
}

// Call the Event for Menu 
FERRO.listenerMenu = function(){
	$('#mobile-nav').on('click', function(e){
		$(this).toggleClass('open');
		
		$('#navigation-mobile').stop().slideToggle(350, 'easeOutExpo');
		
		e.preventDefault();
	});
}

/* ==================================================
   Slider Settings
================================================== */

FERRO.slider = function(){
	var tpj=jQuery;
	tpj.noConflict();

	tpj(document).ready(function() {

	if (tpj.fn.cssOriginal!=undefined)
		tpj.fn.css = tpj.fn.cssOriginal;

		// Full Screen Slider
		tpj('.fullwidthbanner').revolution(
			{
				delay:7000,
				startwidth:1200,
				startheight:700,

				onHoverStop:"off",						// Stop Banner Timet at Hover on Slide on/off

				thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
				thumbHeight:50,
				thumbAmount:3,

				hideThumbs:0,
				navigationType:"bullet",				// bullet, thumb, none
				navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none

				navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


				navigationHAlign:"center",				// Vertical Align top,center,bottom
				navigationVAlign:"bottom",				// Horizontal Align left,center,right
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				touchenabled:"on",						// Enable Swipe Function : on/off



				stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
				stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

				hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
				hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
				hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value


				fullWidth:"on",

				shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

			});
			
			// Simple Slider
			tpj('.sliderbanner').revolution(
			{
				delay:9000,
				startwidth:1170,
				startheight:600,

				onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off

				thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
				thumbHeight:50,
				thumbAmount:3,

				hideThumbs:0,
				navigationType:"bullet",				// bullet, thumb, none
				navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none

				navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


				navigationHAlign:"center",				// Vertical Align top,center,bottom
				navigationVAlign:"bottom",				// Horizontal Align left,center,right
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				touchenabled:"on",						// Enable Swipe Function : on/off



				stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
				stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

				hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
				hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
				hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value


				fullWidth:"on",

				shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

			});
	});
}

/* ==================================================
   Hover for Touch Devices
================================================== */

// Fix Hover on Touch Devices
FERRO.utils = function(){
	
	$('.work-item-thumbs, .box, .post-thumb, .single-people, .item-project, .lightbox').bind('touchstart', function(){
		$(".tapped").removeClass("tapped");
      	$(this).addClass('tapped');
    });
	
}

/* ==================================================
   Filter Portfolio
================================================== */

FERRO.portfolio = function (){
	if($('#portfolio-projects').length > 0){		
		var $container = $('#portfolio-projects');
		
		$container.imagesLoaded(function() {
			$container.isotope({
			  // options
			  animationEngine: 'best-available',
			  itemSelector : '.item-project',
			  layoutMode : 'fitRows'
			});
		});
	
		
		// filter items when filter link is clicked
		var $optionSets = $('#portfolio-filter .option-set'),
			$optionLinks = $optionSets.find('a');
	
		  $optionLinks.click(function(){
			var $this = $(this);
			// don't proceed if already selected
			if ( $this.hasClass('selected') ) {
			  return false;
			}
			var $optionSet = $this.parents('.option-set');
			$optionSet.find('.selected').removeClass('selected');
			$this.addClass('selected');
	  
			// make option object dynamically, i.e. { filter: '.my-filter-class' }
			var options = {},
				key = $optionSet.attr('data-option-key'),
				value = $this.attr('data-option-value');
			// parse 'false' as false boolean
			value = value === 'false' ? false : value;
			options[ key ] = value;
			if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
			  // changes in layout modes need extra logic
			  changeLayoutMode( $this, options )
			} else {
			  // otherwise, apply new options
			  $container.isotope( options );
			}
			
			return false;
		});
	}
}


/* ==================================================
   DropDown 
================================================== */

FERRO.dropDown = function(){
	$('.dropmenu').on('click', function(e){
		$(this).toggleClass('open');
		
		$('.dropmenu-active').stop().slideToggle(350, 'easeOutExpo');
		
		e.preventDefault();
	});
	
	$('.dropmenu-active a').on('click', function(e){
		var dropdown = $(this).parents('.dropdown');
		var selected = dropdown.find('.dropmenu .selected');
		var newSelect = $(this).html();
		
		$('.dropmenu').removeClass('open');
		$('.dropmenu-active').slideUp(350, 'easeOutExpo');
		
		selected.html(newSelect);
		
		e.preventDefault();
	});
}


/* ==================================================
   FancyBox
================================================== */

FERRO.fancyBox = function(){
	if($('.fancybox').length > 0 || $('.fancybox-media').length > 0 || $('.fancybox-various').length > 0){
		
		$(".fancybox").fancybox({				
			padding : 0,
			helpers : {
				title : { type: 'inside' },
			}
		});
			
		$('.fancybox-media').fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
		});
		
		$(".fancybox-various").fancybox({
			maxWidth	: 800,
			maxHeight	: 600,
			fitToView	: false,
			width		: '70%',
			height		: '70%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});
	}
}



/* ==================================================
   Map
================================================== */

FERRO.map = function(){
	if($('.map').length > 0)
	{

		$('.map').each(function(i,e){

			$map = $(e);
			$map_id = $map.attr('id');
			$map_lat = $map.attr('data-mapLat');
			$map_lon = $map.attr('data-mapLon');
			$map_zoom = parseInt($map.attr('data-mapZoom'));
			$map_title = $map.attr('data-mapTitle');
			
			
			
			var latlng = new google.maps.LatLng($map_lat, $map_lon);
                        var center= new google.maps.LatLng('48.793', '2.331');
			var options = { 
				scrollwheel: true,
				draggable: true, 
				zoomControl: true,
				disableDoubleClickZoom: false,
				disableDefaultUI: true,
				zoom: $map_zoom,
				center: center,
                                mapTypeControl: true,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			
			var styles = [ 
							{
								// Insert Here Your Custom Style if you Want Colorize the Map
							}
						];
			
			var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
			
			var map = new google.maps.Map(document.getElementById($map_id), options);
                        
			var image = 'resources/img/map-marker.png';
			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				title: $map_title,
				icon: image,
                                animation: google.maps.Animation.DROP,
                                
			});
			
			map.mapTypes.set('map_style', styledMap);
  			map.setMapTypeId('map_style');
			
			var contentString = '<p><strong>Ferro SAS</strong><br>Bât. A3 -93, Avenue de Bourgogne <br/>94581 Rungis Cedex – Fruleg CP60573</p>';
       
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});
			
                        
                        
			google.maps.event.addListener(marker, 'click', function() {
      			infowindow.open(map,marker);
    		});
                        
                        /*option traffic*/
                        var controlDiv1 = document.createElement('DIV');
                        $(controlDiv1).addClass('gmap-control-container1')
                                     .addClass('gmnoprint1');

                        var controlUI1 = document.createElement('DIV');
                        $(controlUI1).addClass('gmap-control1');
                        $(controlUI1).text('Trafic');
                        $(controlDiv1).append(controlUI1);

                        var legend = '<ul>'
                                   + '<li><span style="background-color: #30ac3e">&nbsp;&nbsp;</span><span style="color: #30ac3e"> &gt; 80 km/h</span></li>'
                                   + '<li><span style="background-color: #ffcf00">&nbsp;&nbsp;</span><span style="color: #ffcf00"> 40 - 80 km/h</span></li>'
                                   + '<li><span style="background-color: #ff0000">&nbsp;&nbsp;</span><span style="color: #ff0000"> &lt; 40 km/h</span></li>'
                                   + '<li><span style="background-color: #c0c0c0">&nbsp;&nbsp;</span><span style="color: #c0c0c0"> Pas de données disponibles</span></li>'
                                   + '</ul>';

                        var controlLegend1 = document.createElement('DIV');
                        $(controlLegend1).addClass('gmap-control-legend1');
                        $(controlLegend1).html(legend);
                        $(controlLegend1).hide();
                        $(controlDiv1).append(controlLegend1);

                        // Set hover toggle event
                        $(controlUI1)
                            .mouseenter(function() {
                                $(controlLegend1).show();
                            })
                            .mouseleave(function() {
                                $(controlLegend1).hide();
                            });

                        var trafficLayer = new google.maps.TrafficLayer();

                        google.maps.event.addDomListener(controlUI1, 'click', function() {
                            if (typeof trafficLayer.getMap() == 'undefined' || trafficLayer.getMap() === null) {
                                $(controlUI1).addClass('gmap-control-active1');
                                trafficLayer.setMap(map);
                            } else {
                                trafficLayer.setMap(null);
                                $(controlUI1).removeClass('gmap-control-active1');
                            }
                        });

                        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlDiv1);
                        
                        /*option transport en commun*/
                        var controlDiv2 = document.createElement('DIV');
                        $(controlDiv2).addClass('gmap-control-container2')
                                     .addClass('gmnoprint2');

                        var controlUI2 = document.createElement('DIV');
                        $(controlUI2).addClass('gmap-control2');
                        $(controlUI2).text('Metro/RER');
                        $(controlDiv2).append(controlUI2);

                        var transitLayer = new google.maps.TransitLayer();

                        google.maps.event.addDomListener(controlUI2, 'click', function() {
                            if (typeof transitLayer.getMap() == 'undefined' || transitLayer.getMap() === null) {
                                $(controlUI2).addClass('gmap-control-active2');
                                transitLayer.setMap(map);
                            } else {
                                transitLayer.setMap(null);
                                $(controlUI2).removeClass('gmap-control-active2');
                            }
                        });

                        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlDiv2);
		});
	}	
}



/* ==================================================
   Accordion
================================================== */

FERRO.accordion = function(){
	var accordion_trigger = $('.accordion-heading.accordionize');
	
	accordion_trigger.delegate('.accordion-toggle','click', function(e){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		   	$(this).addClass('inactive');
		}
		else{
		  	accordion_trigger.find('.active').addClass('inactive');          
		  	accordion_trigger.find('.active').removeClass('active');   
		  	$(this).removeClass('inactive');
		  	$(this).addClass('active');
	 	}
		e.preventDefault();
	});
}

/* ==================================================
   Toggle
================================================== */

FERRO.toggle = function(){
	var accordion_trigger_toggle = $('.accordion-heading.togglize');
	
	accordion_trigger_toggle.delegate('.accordion-toggle','click', function(e){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		   	$(this).addClass('inactive');
		}
		else{
		  	$(this).removeClass('inactive');
		  	$(this).addClass('active');
	 	}
		e.preventDefault();
	});
}


/* ==================================================
   Tooltip
================================================== */

FERRO.toolTip = function(){ 
    $('a[data-toggle=tooltip]').tooltip();
}


/* ==================================================
	Scroll to Top
================================================== */

FERRO.scrollToTop = function(){
	var didScroll = false;

	var $arrow = $('#back-to-top');

	$arrow.click(function(e) {
		$('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
		e.preventDefault();
	})

	$(window).scroll(function() {
		didScroll = true;
	});

	setInterval(function() {
		if( didScroll ) {
			didScroll = false;

			if( $(window).scrollTop() > 1000 ) {
				$arrow.css('display', 'block');
			} else {
				$arrow.css('display', 'none');
			}
		}
	}, 250);
}


/* ==================================================
	Center Images
================================================== */

FERRO.getSize = function(){
	
	if($('#image-static .fullimage-container').length > 0){
		$('#image-static .fullimage-container').each(function() {
			
			var img = $(this).find('img');	
			
			// Get on screen image
			var screenImage = img;
	
			// Create new offscreen image to test
			var theImage = new Image();
			theImage.src = screenImage.attr("src");
	
			// Get accurate measurements from that.
			var imageWidth = theImage.width;
			var imageHeight = theImage.height;
			
			screenImage.attr('width', imageWidth);
			screenImage.attr('height', imageHeight);
		});
	}
	
}

FERRO.centerImg = function(){
	if($('#image-static .fullimage-container').length > 0){
		$('#image-static .fullimage-container').each(function(){
			var img = $(this).find('img'),
				vpWidth = $(window).width(),
				vpHeight,
				imgHeight = img.attr('height'),
				imgWidth = img.attr('width'),
				imgAspectRatio = imgWidth / imgHeight,
				vpAspectRatio,
				newImgWidth,
				newImgHeight = vpWidth / imgAspectRatio;
		
			if( vpWidth <= 660 ) {
				vpHeight = 400;
				newImgWidth = imgWidth * vpHeight / imgHeight;
			} else if( vpWidth > 660 && vpWidth <= 1024 ) {
				vpHeight = 500;
				newImgWidth = imgWidth * vpHeight / imgHeight;
			} else {
				vpHeight = 700;
				newImgWidth = imgWidth * vpHeight / imgHeight;
			}
			
			vpAspectRatio = vpWidth / vpHeight;
									
			if( vpAspectRatio <= imgAspectRatio ) {
				img.css({
					'margin-top': 0,
					'width': newImgWidth,
					'height': '100%',
					'margin-left': (vpWidth - newImgWidth)/2
				});
			} else {
				img.css({
					'width': '100%',
					'height': newImgHeight,
					'margin-left': 'auto',
					'margin-top': (vpHeight - newImgHeight)/2
				});
			}
		});
	}
}

/* ==================================================
   Opacity Slider Elements on Scroll
================================================== */

FERRO.changeOpacity = function(){
	var arrows = $('.fullwidthbanner-container .tparrows, .fullwidthbanner-container .tp-bullets');
	
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		arrows.css({ 'opacity' : (1 - st/600) });
	});
}


/* ==================================================
	Init
================================================== */

FERRO.slider();

$(document).ready(function(){
	// Call placeholder.js to enable Placeholder Property for IE9
	Modernizr.load([
	{
		test: Modernizr.input.placeholder,
		nope: 'resources/js/placeholder.js', 
		complete : function() {
				if (!Modernizr.input.placeholder) {
						Placeholders.init({
						live: true,
						hideOnFocus: false,
						className: "yourClass",
						textColor: "#999"
						});    
				}
		}
	}
	]);
	
	FERRO.utils();
	
	FERRO.getSize();
	FERRO.centerImg();
	
	FERRO.mobileNav();
	FERRO.listenerMenu();
	FERRO.subMenu();
	FERRO.dropDown();
	FERRO.portfolio();
	FERRO.accordion();
	FERRO.toggle();
	FERRO.toolTip();
	FERRO.fancyBox();
	FERRO.map();
	FERRO.scrollToTop();
	FERRO.changeOpacity();
});

$(window).resize(function(){
	FERRO.centerImg();
	FERRO.mobileNav();
});

});
