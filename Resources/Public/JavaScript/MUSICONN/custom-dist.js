$(".trigger").click((function(){$(this).toggleClass("open"),$("#mainnav").animate({height:"toggle"}),$(".logo").toggleClass("open")})),$(window).scroll((function(){$(this).scrollTop()>100?$("#totop").fadeIn():$("#totop").fadeOut()})),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click((function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3,(function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()})))}})),function(){for(var e,t,o=3,n=document.createElement("div"),i=n.getElementsByTagName("i");n.innerHTML="\x3c!--[if gt IE "+ ++o+"]><i></i><![endif]--\x3e",i[0];);if(o=o>4?o:document.documentMode){e=" ie";for(var a=5;a<12;a++)o<a?e+=" lte-ie"+a:o>a?e+=" gte-ie"+a:o==a&&(e+=" ie"+a);t={version:o}}else e=" not-ie",t=!1;document.documentElement.className+=e,window.ie=t}(),$((function(){$(".datetimepicker").datepicker({dateFormat:"dd.mm.yy",monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]})})),$(".accordion").accordion({active:!1,collapsible:!0,heightStyle:"content"}),$((function(){$('.form-group input[type="text"], .form-group textarea').each((function(){""!==$(this).val()&&$(this).parent().addClass("got-input")})).on("focusout",(function(){$(this).parent().toggleClass("got-input",""!==$(this).val())}))}));