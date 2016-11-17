/*
    Title: Notification Creator (NC)
    URL: https://github.com/lilpug/jquery-notification-creator
    Version: 1.0
    Author: David Whitehead
    Copyright (c) David Whitehead
    Copyright license: MIT
    Description: a notification generator plugin                 
    Requires: jquery 1.7+, bootstrap 3, fontawesome 4+
*/
(function ($) {

		
	/*----------------------------------------------*/
	/* Notification Creator initialisation function */
	/*----------------------------------------------*/
	
	$.NCInit = function () 
	{
		//This function registers the on click removal event for dismissal notifications
		$(document).on('click', '.notification-container .close', function () {
		   $(this).closest('.row').fadeOut('slow', function(){ $(this).remove(); }); 		   
		});   
    };	
	
	
	/*-----------------------------------------*/
	/* Main notification html builder function */
	/*-----------------------------------------*/

	//This function builds the html for the notification message box					
	function HtmlBuild(messageType, message, isDismissible)
	{
        //Deals with deciding which icon we should be using
	    var iconHtml = "";
	    if (messageType == "success")
	    {
	        iconHtml = '<i class="fa fa-check" aria-hidden="true"></i>';
	    }
	    else if (messageType == "danger")
	    {
	        iconHtml = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>';
	    }
	    else if (messageType == "info")
	    {
	        iconHtml = '<i class="fa fa-info-circle" aria-hidden="true"></i>';
	    }

		//Builds the html notification message
	    var htmlNotification = '<div class="row" style="display:none;">' +
									'<div class="spacing col-sm-12">' +
										'<div class="notification-container notification-' + messageType + ' alert">' +
											(
                                            (isDismissible != undefined && isDismissible != null && isDismissible == true)
											?
												'<button type="button" class="close">' +
													'<span aria-hidden="true">×</span><span class="sr-only">Close</span>' +
												'</button>'
											:
												''
											) +
											'<div class="alert-labeled-row">' +
												'<span class="alert-label alert-label-left alert-labelled-cell">' +
													iconHtml +
												'</span>' +
												'<p class="alert-body alert-body-right alert-labelled-cell">' +
													message +
												'</p>' +
											'</div>' +
										'</div>' +
									'</div>' +
								'</div>';
		//Returns it					
		return htmlNotification;
	}

	
	/*-----------------------------*/
	/* Main notification functions */
	/*-----------------------------*/

	//Used to store setTimeout triggers
	var triggerObjects = {};
	
    $.fn.SuccessNC = function (message, isDismissible, theDelay) 
    {
        //Gets the selector we are using
        var elementLocation = this.selector;

		//Checks if we need to clear the current setTimeout as we are about to wipe the html with a new version
		if(triggerObjects[elementLocation] != undefined && triggerObjects[elementLocation] != null)
		{			
			clearTimeout(triggerObjects[elementLocation]);
			triggerObjects[elementLocation] = null;
		}
		
		//Gets the notification html
		var html = HtmlBuild('success', message, isDismissible);
		
		//Determines if we need to set the timer to remove the notification
		if(theDelay != undefined && theDelay != null)
		{
			//Adds the html to the element specified
			$(elementLocation).html(html);
			$(elementLocation + " .row").fadeIn('slow');
			
			//Sets the new trigger in the object array
			triggerObjects[elementLocation] = setTimeout(function () 
			{ 
				//Fades the container out
				$(elementLocation + " .row").fadeOut('slow', function(){ $(elementLocation + " .row").remove(); }); 
				
				//Removes the trigger element from the object array
				triggerObjects[elementLocation] = null;
			}, theDelay);			
		}
		else
		{
			//Adds the html to the element specified
			$(elementLocation).html(html);
			$(elementLocation + " .row").fadeIn('slow');
		}
    };

    $.fn.InfoNC = function (message, isDismissible, theDelay)
    {
        //Gets the selector we are using
        var elementLocation = this.selector;

        //Checks if we need to clear the current setTimeout as we are about to wipe the html with a new version
        if (triggerObjects[elementLocation] != undefined && triggerObjects[elementLocation] != null) {
            clearTimeout(triggerObjects[elementLocation]);
            triggerObjects[elementLocation] = null;
        }

        //Gets the notification html
        var html = HtmlBuild('info', message, isDismissible);

        //Determines if we need to set the timer to remove the notification
        if (theDelay != undefined && theDelay != null) {
            //Adds the html to the element specified
            $(elementLocation).html(html);
            $(elementLocation + " .row").fadeIn('slow');

            //Sets the new trigger in the object array
            triggerObjects[elementLocation] = setTimeout(function () {
                //Fades the container out
                $(elementLocation + " .row").fadeOut('slow', function () { $(elementLocation + " .row").remove(); });

                //Removes the trigger element from the object array
                triggerObjects[elementLocation] = null;
            }, theDelay);
        }
        else {
            //Adds the html to the element specified
            $(elementLocation).html(html);
            $(elementLocation + " .row").fadeIn('slow');
        }
    };

    $.fn.DangerNC = function (message, isDismissible, theDelay)
    {
        //Gets the selector we are using
        var elementLocation = this.selector;

        //Checks if we need to clear the current setTimeout as we are about to wipe the html with a new version
        if (triggerObjects[elementLocation] != undefined && triggerObjects[elementLocation] != null) {
            clearTimeout(triggerObjects[elementLocation]);
            triggerObjects[elementLocation] = null;
        }

        //Gets the notification html
        var html = HtmlBuild('danger', message, isDismissible);

        //Determines if we need to set the timer to remove the notification
        if (theDelay != undefined && theDelay != null) {
            //Adds the html to the element specified
            $(elementLocation).html(html);
            $(elementLocation + " .row").fadeIn('slow');

            //Sets the new trigger in the object array
            triggerObjects[elementLocation] = setTimeout(function () {
                //Fades the container out
                $(elementLocation + " .row").fadeOut('slow', function () { $(elementLocation + " .row").remove(); });

                //Removes the trigger element from the object array
                triggerObjects[elementLocation] = null;
            }, theDelay);
        }
        else {
            //Adds the html to the element specified
            $(elementLocation).html(html);
            $(elementLocation + " .row").fadeIn('slow');
        }
    };
	
}(jQuery));
