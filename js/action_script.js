// JavaScript Document

$(function() {
    
	$( "#accordion, #sideaccordion" ).accordion({
	    collapsible: true,
        heightStyle: 'content'
    });

	$(".seatmap .detailview dl.seatview dd b:not(.co_user, .not_avail)").click(function () {
	    
	        $(".seatmap .detailview dl.seatview dd b:not(.co_user, .not_avail)").removeAttr("class");	        
	        $(this).addClass("user");	    	    
	});

	//$(".seatmap .detailview dl.seatview dd b.co_user, .seatmap .detailview dl.seatview dd b.not_avail").click(function () {
	//    alert('Cannot select');
    //});

	$("dl.selectuser dt input[type='radio']").click(function () {
	    $(this).closest("dt").siblings().each(function () {	        
	        $(this).removeClass("active");
	    });
	    $(this).closest("dt").addClass("active");
	});
  });