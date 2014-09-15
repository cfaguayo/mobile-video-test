var pWidth;
var hidePos;
var panel;
var show;
var img; 
var src = "./img/btns/";
var open = "open.png";
var close = "close.png";

$.noConflict();
jQuery.mobile.loading().hide();

jQuery(document).on("pagecreate",function(event){
  jQuery(window).on("orientationchange",function(event){
    adjustOrientation();
  });                     
});

jQuery(document).ready(
    function()
    {
        panel = jQuery(".side-panel");
        pWidth = panel.css("width");
        hidePos = "-" + pWidth;
        panel.css("right", hidePos);
        show = true;
        img = jQuery("#side-btn-img");
    });

/*
jQuery('body').vmouseup( function(e)
    {
        if(!show)
        {
            if(!panel.is(e.target) && panel.has(e.target).length === 0)
            {
                show = true;
                panel.animate({  right:hidePos }, "500");
            }
        }
       
    }); 
*/

jQuery(document).on("swipeleft", '.panel-btn',
    function()
    {
        if(show)
        {
            show = false;
            panel.animate({  right:'0px' }, "500");
            img.attr("src", src + close);
        }       
    });

jQuery(document).on("swiperight", '.panel-btn',
    function()
    {   
        if(show == false)
        {
            show = true;
            panel.animate({  right:hidePos }, "500");
            img.attr("src", src + open);
        }
    });

jQuery(document).on("click", '.panel-btn',
    function()
    {   
        if(show == false)
        {
            show = true;
            panel.animate({  right:hidePos }, "500");
            img.attr("src", src + open);
        }
    });

function adjustOrientation()
{
    pWidth = panel.css("width");
    hidePos = "-" + pWidth;

    if(show)
    {
        panel.css("right", hidePos);
    }
    else
    {
        panel.css("right", '0px');
    }
}