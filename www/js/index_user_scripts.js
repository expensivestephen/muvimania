/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Continue */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#movie_options"); 
    });
    
        /* tab  Home */
    $(document).on("click", ".uib_w_9", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_47_35"); 
    });
    
        /* button  Box Office */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#box_office"); 
    });
    
        /* button  Now Showing */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#now_showing"); 
    });
    
        /* button  Upcoming */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#upcoming"); 
    });
    
        /* button  In Theatres */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#in_theatres"); 
    });
    
        /* tab  About */
    $(document).on("click", ".uib_w_10", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#about"); 
    });
    
        /* tab  Contact */
    $(document).on("click", ".uib_w_11", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#contact"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
