/**
 * Avanti Comunicação <contato@penseavanti.com.br>
 * almeidajunior
 * @date Wed Mar 10 2021 13:51:59 GMT-0300 (GMT-03:00)
 */

"use strict";!function(){try{var e={init:function(){e.applyConfigInSearchField(),e.returnPreviousPage(),e.mobileSearchFieldToggle()},mobileSearchFieldToggle:function(){var t=$(".header__link--search"),o=$(".search__close");$(".header__search-field");t.on("click",function(e){e.preventDefault(),$(".search__form").slideDown("fast"),$(".search__target").empty(),$(window).width()<992&&(t.hide("fast"),o.show("fast"))}),o.on("click",function(e){e.preventDefault(),$(".search__form").slideUp("fast"),$(".search__target").empty(),$(window).width()<992&&(o.hide("fast"),t.show("fast"))})},applyConfigInSearchField:function(){var t=$(".search__input");t.on("click",function(){$(this).val(" ")}),$(document).click(function(e){$(e.target).is(".search__input")||t.val("")})},returnPreviousPage:function(){localStorage.AJP_prevUrl&&localStorage.AJP_prevUrl.length?($("#return-to-prev-page").attr("href",localStorage.getItem("AJP_prevUrl")),localStorage.setItem("AJP_currentUrl",window.location.href),$(window).unload(function(){localStorage.setItem("AJP_prevUrl",window.location.href)})):(console.log("[ELSE]"),window.localStorage.setItem("AJP_prevUrl",window.location.href),window.localStorage.setItem("AJP_currentUrl",window.location.href))}};$(document).ready(e.init)}catch(e){console.log("Erro na instancia [Common]: ",e)}}();