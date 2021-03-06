function showMobileNav()
{
    
    // Rotate the + to an x
    // look up how I did it on avcreativestudio
    
    // Make the header 100% height
    var cacheHeight = $('header').height();
    if ($('header').hasClass('active')){
        AnimateRotate(45, 0);
        $('nav').fadeOut(250, function(){
            $('header').animate({height:'82px'},250);
            $('header').removeClass('active');
        });
    } else {
        AnimateRotate(0, 45);
        $('header').animate({height:'100%'}, 250, function(){
            $('nav').fadeIn(250);
            $('header').addClass('active');
        });
    }
}

function AnimateRotate(s, e){
    var elem = $("#mobileNavLink");

    $({deg: s}).animate({deg: e}, {
        duration: 250,
        step: function(now){
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}


// Content Rotator

function rotatorInit(){
    // Initialize and set the first items
    $('#rotator-images li:first-child, .rotator-captions li:first-child, .rotator-dots li:first-child').addClass('current');
    timer = setTimeout(function(){
        rotate();
    }, 5000);
}

function rotateContent(group){
    // Variables
    var $currImage = $('#rotator-images li.current');
    var $newImage = $('#rotator-images li[data-group="'+group+'"]');
    
    var $currCap = $('.rotator-captions li.current');
    var $newCap = $('.rotator-captions li[data-group="'+group+'"]');
    
    var $currDot = $('.rotator-dots li.current');
    var $newDot = $('.rotator-dots li[data-selector="'+group+'"]');
    
    // Change the image
    if ($currImage.data('group') != $newImage.data('group'))
    {
        $currImage.fadeOut(200, function(){
            $newImage.addClass('current').siblings().removeClass('current');
        });
        $newImage.fadeIn(200);
    }
    
    // Change the captions
    $currCap.fadeOut(0, function(){
        $newCap.addClass('current').siblings().removeClass('current');
        $('.rotator-captions li.current').fadeIn(0);
    });
    
    // Change the dot
    $newDot.addClass('current').siblings().removeClass('current');
    
    timer = setTimeout(function(){
        rotate();
    }, 5000);
}

function rotate(){
    var $nextGroup = $('.rotator-dots li.current').next().data('selector');
    
    if($nextGroup == undefined){
        $first = $('.rotator-dots li:first-child').data('selector');

        rotateContent($first);
    } else {
        rotateContent($nextGroup);
    }
}

function setNav(){
    
    var pathname = window.location.pathname;
    var pathname = pathname.split('/');
    var pathname = pathname[1];
    
    var $navEl = $('nav a');

    $navEl.each(function(){
        var $href = $(this).attr('href');
        var $href = $href.split('/');
        var $href = $href[1];
        
        if(pathname == $href)
        {
            $(this).addClass('current');
        }
        if(pathname == 'project'){
            $('a[href="/projects"]').addClass('current');
        }
        if(pathname == 'update'){
            $('a[href="/updates"]').addClass('current');
        }
    });
    
}

function fullheight(e){
        var bodyheight = $(window).height();
        jQuery('.'+e).height(bodyheight);
    }

/* SVG Magic */
!function($){$.fn.svgmagic=function(givenoptions){var defaultoptions={preloader:!1,testmode:!1,secure:!1,callback:!1,backgroundimage:!1,dumpcache:!1},options=$.extend(defaultoptions,givenoptions),preloaderTimer=[];if(options.testmode||!document.createElement("svg").getAttributeNS){"undefined"==typeof JSON&&("object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,o,n,a,s,i=gap,u=t[e];switch(u&&"object"==typeof u&&"function"==typeof u.toJSON&&(u=u.toJSON(e)),"function"==typeof rep&&(u=rep.call(t,e,u)),typeof u){case"string":return quote(u);case"number":return isFinite(u)?String(u):"null";case"boolean":case"null":return String(u);case"object":if(!u)return"null";if(gap+=indent,s=[],"[object Array]"===Object.prototype.toString.apply(u)){for(a=u.length,r=0;a>r;r+=1)s[r]=str(r,u)||"null";return n=0===s.length?"[]":gap?"[\n"+gap+s.join(",\n"+gap)+"\n"+i+"]":"["+s.join(",")+"]",gap=i,n}if(rep&&"object"==typeof rep)for(a=rep.length,r=0;a>r;r+=1)"string"==typeof rep[r]&&(o=rep[r],n=str(o,u),n&&s.push(quote(o)+(gap?": ":":")+n));else for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(n=str(o,u),n&&s.push(quote(o)+(gap?": ":":")+n));return n=0===s.length?"{}":gap?"{\n"+gap+s.join(",\n"+gap)+"\n"+i+"}":"{"+s.join(",")+"}",gap=i,n}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,r){var o;if(gap="",indent="","number"==typeof r)for(o=0;r>o;o+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var r,o,n=e[t];if(n&&"object"==typeof n)for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(o=walk(n,r),void 0!==o?n[r]=o:delete n[r]);return reviver.call(e,t,n)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}());var obj=this,images=[],domimages=[],cssimages=[];obj.each(function(){if(void 0!=$(this).attr("src")&&("svg"==$(this).attr("src").split(".").pop()||"data:image/svg+xml"==$(this).attr("src").substr(0,18))){$obj=$(this);var e=new Image;e.src=$(this).attr("src"),images.push(e.src),domimages.push($obj),0!=options.preloader&&preloaderTimer.push(setTimeout(function(){$obj.attr("src",options.preloader)},500))}}),options.backgroundimage&&obj.each(function(){if("none"!=$(this).css("background-image")&&void 0!=$(this).css("background-image")){var e=$(this).css("background-image").replace(/^url\(["']?/,"").replace(/["']?\)$/,"");if("svg"==e.split(".").pop()){var t=new Image;t.src=e,images.push(t.src),cssimages.push($(this))}}});var data={svgsources:images,secure:options.secure,dumpcache:options.dumpcache};if(images.length>0){var i=0;$.ajax({dataType:"json",method:"POST",url:"http://svgmagic.bitlabs.nl/converter.php",data:data,success:function(e){var t;for(t=0;t<domimages.length;t++)clearTimeout(preloaderTimer[t]),domimages[t].attr("src",e.results[t].url);if(options.backgroundimage)for(t;t<domimages.length+cssimages.length;t++){var r=t-domimages.length;cssimages[r].css("background-image",'url("'+e.results[t].url+'")')}options.callback&&options.callback()}})}}}}(jQuery);