!function(){return function t(e,a,i){function n(r,l){if(!a[r]){if(!e[r]){var s="function"==typeof require&&require;if(!l&&s)return s(r,!0);if(o)return o(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var d=a[r]={exports:{}};e[r][0].call(d.exports,function(t){return n(e[r][1][t]||t)},d,d.exports,t,e,a,i)}return a[r].exports}for(var o="function"==typeof require&&require,r=0;r<i.length;r++)n(i[r]);return n}}()({1:[function(t,e,a){"use strict";function i(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.debug=!1,this.disabled=!1,this.fb=e}var e,a,n;return e=t,(a=[{key:"setPixelType",value:function(){if(!this.disabled){var t=void 0!==this.fb.pixel.name?this.fb.pixel.name:null;this.isDefined&&t&&(fbq("init","410270039520634"),fbq("trackSingle","410270039520634",this.fb.pixel.name))}}},{key:"isDefined",get:function(){return"undefined"!=typeof fbq}}])&&i(e.prototype,a),n&&i(e,n),t}();a.default=n},{}],2:[function(t,e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i,n=(i=t("./piano-module"))&&i.__esModule?i:{default:i};function o(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),window.dataLayer=window.dataLayer||[],this.debug=!1,this.disabled=!1,this.Piano=new n.default,this.metrics={paywall:{},fb:{pixel:{}}},this.paywallType()}var e,a,i;return e=t,(a=[{key:"paywallLoad",value:function(){if(this.Piano.isDefined){var t=this.Piano.content;"register"===t.typePaywall||"exclusivo"===t.typePaywall?(t.metricas.enviaEventosGA("Exibicao Register",t.metricas.montaRotuloGA()),t.cookies.set(t.variaveis.constante.cookie.RTIEX,!0,1)):t.metricas.enviaEventosGA("Barreira",t.metricas.montaRotuloGA())}}},{key:"trigger",value:function(t){if(!this.disabled){var e=t.dataset.gaResetutp||null,a=t.href||null,i=t.dataset.hrefTarget||!0,n="top"===t.dataset.gaImagePosition?t.dataset.gaLabel+this.metrics.paywall.label:t.dataset.gaLabel,o={event:"EventoGA",eventoGACategoria:this.metrics.paywall.name,eventoGAAcao:t.dataset.gaAction||action,eventoGARotulo:n,eventoGAValor:0,eventoGAInteracao:!1};e&&this.Piano.resetUtp(),this.setDatalayer(o),a&&setTimeout(function(){i?window.location.href=a:window.open(a)},300)}}},{key:"paywallType",value:function(){switch(this.Piano.isDefined?this.Piano.content.typePaywall:"paywall"){case"register":this.metrics.paywall.name="Register comum",this.metrics.paywall.label="Cadastre-se",this.metrics.fb.pixel.name="ViewRegisterWall";break;case"exclusivo":this.metrics.paywall.name="Register exclusivo",this.metrics.paywall.label="Assine agora",this.metrics.fb.pixel.name="ViewLoginExclusivo";break;case"paywall":this.metrics.paywall.name="paywall",this.metrics.paywall.label="Assine agora",this.metrics.fb.pixel.name="ViewPaywallExclusivo"}}},{key:"setDatalayer",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.keys(t).length&&dataLayer.push(t)}}])&&o(e.prototype,a),i&&o(e,i),t}();a.default=r},{"./piano-module":5}],3:[function(t,e,a){"use strict";var i,n=(i=t("./paywall-module"))&&i.__esModule?i:{default:i};try{new n.default}catch(t){throw new Error("Paywall can't loaded | "+t)}},{"./paywall-module":4}],4:[function(t,e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=l(t("./piano-module")),n=l(t("./ga-module")),o=l(t("./swg-module")),r=l(t("./fb-module"));function l(t){return t&&t.__esModule?t:{default:t}}function s(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.Piano=new i.default,this.GA=new n.default,this.SWG=new o.default,this.FB=new r.default(this.GA.metrics.fb),this.debug=!1,this.domain="prd"==window.ambienteUtilizadoPiano?"https://login.globo.com/":"https://login.qa.globoi.com/",this.init(),window.PaywallCpt=this}var e,a,l;return e=t,(a=[{key:"bodyAdjust",value:function(){this.elBody.style.setProperty("overflow","hidden","important"),this.elBody.style.setProperty("position","fixed","important"),this.elBody.style.setProperty("width","100%","important")}},{key:"setElWrapper",value:function(){this.elCpt=document.querySelector(".paywall-cpt")}},{key:"removeElements",value:function(){this.setElWrapper(),this.elCpt&&this.elCpt.remove(),document.querySelectorAll(".protected-content").forEach(function(t){t.remove()})}},{key:"createTemplate",value:function(){var t=this;this.elBody=document.body,this.bodyAdjust(),this.removeElements(),this.elBody.insertAdjacentHTML("beforeend",this.cssMinified),this.elBody.insertAdjacentHTML("beforeend",this.template),this.activeTemplateSettings(),window.matchMedia("(min-width: 1024px)").matches&&window.addEventListener("resize",function(){t.activeTemplateSettings()}),this.GA.paywallLoad()}},{key:"activeTemplateSettings",value:function(){var t=this;this.setElWrapper(),this.elCptWrap=this.elCpt.querySelector(".paywall-cpt-wrap"),setTimeout(function(){var e=window.innerHeight+4,a=t.elCptWrap.offsetHeight,i=window.matchMedia("(min-width: 1024px)").matches?Math.abs(e-a+a/3):Math.abs(e-a+a/2),n=e-a;t.elCpt.style.top="".concat(i,"px"),t.elCpt.style.opacity=1,t.elCpt.style.zIndex=9999999999,t.evtWheel(i,n),t.evtTouch(i,n),t.activeEvents(),t.FB.setPixelType()},1e3)}},{key:"activeEvents",value:function(){var t=this;this.elCptWrap.querySelectorAll("a").forEach(function(e){e.addEventListener("click",function(t){t.preventDefault(),this.SWG.callSubscribe(),this.GA.trigger(e)}.bind(t))})}},{key:"evtWheel",value:function(t,e){var a=t;window.addEventListener("wheel",function(i){var n=t/100;if(i.deltaY>=1){var o=a-20*n;a=o<e?e:o,this.elCpt.style.top="".concat(a,"px")}if(i.deltaY<=-1){var r=a+20*n;a=r>t?t:r,this.elCpt.style.top="".concat(a,"px")}}.bind(this))}},{key:"evtTouch",value:function(t,e){var a=t,i=0,n=0;window.addEventListener("touchstart",function(t){i=t.changedTouches[0].screenY}),window.addEventListener("touchmove",function(o){if((n=o.changedTouches[0].screenY)<i){var r=Math.abs(i)-Math.abs(n),l=a-r;a=l<e?e:l,this.elCpt.style.top="".concat(a,"px")}if(n>i){var s=a+(n-i);a=s>t?t:s,this.elCpt.style.top="".concat(a,"px")}}.bind(this))}},{key:"getUrlLoginRegister",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="prd"==window.ambienteUtilizadoPiano?"https://assinatura.oglobo.globo.com/ValidaUsuarioBarramento.html":"https://assinatura.globostg.globoi.com/ValidaUsuarioBarramento.html",a=location.href,i="",n="";return!this.debug&&this.Piano.isDefined&&(n=encodeURIComponent(e+"?codigoProduto="+this.Piano.content.variaveis.getCodigoProduto()+"&serviceId="+this.Piano.content.variaveis.getServicoId()+"&ambienteUtilizado="+window.ambienteUtilizadoPiano+"&nomeProduto="+this.Piano.content.variaveis.getNomeProduto()+"&urlRetorno="+a),i="register"===t?"".concat(this.domain,"cadastro/").concat(this.Piano.content.variaveis.getServicoId(),"?url=").concat(n):"".concat(this.domain,"login/").concat(this.Piano.content.variaveis.getServicoId(),"?url=").concat(n)),i}},{key:"init",value:function(){this.createTemplate()}},{key:"templateVars",get:function(){var t={},e="undefined"!=typeof img1mL?img1mL:null;return this.debug||!e?(t.title="Esse conteúdo é o título.",t.topMobi="https://via.placeholder.com/300x150",t.topDesk="https://via.placeholder.com/804x128",t.topLink="https://google.com?l1",t.leftMobi="https://via.placeholder.com/300x500",t.leftDesk="https://via.placeholder.com/402x515",t.leftLink="https://google.com?l2",t.rightMobi="https://via.placeholder.com/300x500",t.rightDesk="https://via.placeholder.com/402x515",t.rightLink="https://google.com?l3"):(t.title="undefined"!=typeof barreiraTituloContent?barreiraTituloContent:"",t.topMobi="undefined"!=typeof img1mL?img1mL:"",t.topDesk="undefined"!=typeof img1dL?img1dL:"",t.topLink="undefined"!=typeof img1lL?img1lL:"",t.leftMobi="undefined"!=typeof img2mL?img2mL:"",t.leftDesk="undefined"!=typeof img2dL?img2dL:"",t.leftLink="undefined"!=typeof img2lL?img2lL:"",t.rightMobi="undefined"!=typeof img3mL?img3mL:"",t.rightDesk="undefined"!=typeof img3dL?img3dL:"",t.rightLink="undefined"!=typeof img3lL?img3lL:""),t.targetBlank="undefined"==typeof paywallTargetImages||paywallTargetImages,"undefined"!=typeof barreiraTextoLoginContent?t.centerText=barreiraTextoLoginContent:t.centerText='Já possui cadastro? <a href="'.concat(this.getUrlLoginRegister(),'" data-ga-action="Clique em link" data-ga-label="Link 2 - Faça login" data-ga-resetUtp="false" data-href-target=" ').concat(t.targetBlank,' ">Faça login</a>'),t}},{key:"template",get:function(){return'\n\t  <div class="paywall-cpt"> \n\t\t<div class="paywall-cpt-wrap">\n\t\t<div class="paywall-cpt-wrap__text-head">\n\t\t\t'.concat(this.templateVars.title,'\n\t\t</div>\n\t\t  <div class="paywall-cpt-wrap__top">\n\t\t  \t<a href="').concat(this.templateVars.topLink,'" data-ga-image-position="top" data-ga-action="Clique em link" data-ga-label="Link 1 -" data-ga-resetUtp="true" data-href-target="').concat(this.templateVars.targetBlank,'">\n\t\t\t\t<picture>\n\t\t\t\t\t<source srcset="').concat(this.templateVars.topMobi,'" media="(max-width: 1023px)">\n\t\t\t\t\t<source srcset="').concat(this.templateVars.topDesk,'" media="(min-width: 1024px)">\n\t\t\t\t\t<img src="').concat(this.templateVars.topMobi,'" />\n\t\t\t\t</picture>\n\t\t\t</a>\n\t\t  </div>\n\t\t  <div class="paywall-cpt-wrap__text-center">\n\t\t  \t').concat(this.templateVars.centerText,'\n\t\t  </div>\n\t\t  <div class="paywall-cpt-wrap__left">\n\t\t  \t<a href="').concat(this.templateVars.leftLink,'" data-ga-action="Clique em link" data-ga-label="Link 4 - Banner oferta esquerda" data-ga-resetUtp="true" data-href-target="').concat(this.templateVars.targetBlank,'">\n\t\t\t\t<picture>\n\t\t\t\t\t<source srcset="').concat(this.templateVars.leftMobi,'" media="(max-width: 1023px)">\n\t\t\t\t\t<source srcset="').concat(this.templateVars.leftDesk,'" media="(min-width: 1024px)">\n\t\t\t\t\t<img src="').concat(this.templateVars.leftMobi,'" />\n\t\t\t\t</picture>\n\t\t\t</a>\n\t\t  </div>\n\t\t  <div class="paywall-cpt-wrap__right">\n\t\t  \t<a href="').concat(this.templateVars.rightLink,'"  data-ga-action="Clique em link" data-ga-label="Link 5 - Banner oferta direita" data-ga-resetUtp="true" data-href-target="').concat(this.templateVars.targetBlank,'">\n\t\t\t\t<picture>\n\t\t\t\t\t<source srcset="').concat(this.templateVars.rightMobi,'" media="(max-width: 1023px)">\n\t\t\t\t\t<source srcset="').concat(this.templateVars.rightDesk,'" media="(min-width: 1024px)">\n\t\t\t\t\t<img src="').concat(this.templateVars.rightMobi,'" />\n\t\t\t\t</picture>\n\t\t\t</a>\n\t\t  </div>\n\t\t</div>\n\t  </div>\n\t  ')}},{key:"cssMinified",get:function(){return"<style>\n      .paywall-cpt{opacity:0;position:fixed;bottom:0;left:0;width:100vw;overflow:hidden;background:#fff;-webkit-box-shadow:0 0 70px 0 rgba(0,0,0,.5);box-shadow:0 0 70px 0 rgba(0,0,0,.5);font-family:Arial,Helvetica,sans-serif;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .2s ease;transition:all .2s ease;z-index: 9;}.paywall-cpt *{-webkit-transition:all .2s ease;transition:all .2s ease;-webkit-box-sizing:border-box;box-sizing:border-box}.paywall-cpt a{color:#325e94;font-weight:700;text-decoration:none}.paywall-cpt a:hover{text-decoration:underline}.paywall-cpt-wrap{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:20px}@media screen and (min-width:1024px){.paywall-cpt-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.paywall-cpt-wrap img{display:block;max-width:100%;height:auto}.paywall-cpt-wrap__text-head{width:100%;text-align:center;padding:20px 0;font-size:20px;color:#325e94;font-weight:700}.paywall-cpt-wrap__text-center{width:100%;text-align:center;padding:20px 0;color:#767676}\n      </style>"}}])&&s(e.prototype,a),l&&s(e,l),t}();a.default=c},{"./fb-module":1,"./ga-module":2,"./piano-module":5,"./swg-module":6}],5:[function(t,e,a){"use strict";function i(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.debug=!1,this.content=null}var e,a,n;return e=t,(a=[{key:"resetUtp",value:function(){this.isDefined&&this.content.cookies.set(this.content.variaveis.constante.cookie.UTP,"",-1)}},{key:"isDefined",get:function(){return"undefined"!=typeof Piano&&(this.content=Piano,!0)}}])&&i(e.prototype,a),n&&i(e,n),t}();a.default=n},{}],6:[function(t,e,a){"use strict";function i(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.debug=!1,this.disabled=!1,this.content=null}var e,a,n;return e=t,(a=[{key:"callSubscribe",value:function(){if(!this.disabled){var t=void 0!==t?t:null,e="undefined"!=typeof utmCampanha?utmCampanha:null,a="undefined"!=typeof utmMidia?utmMidia:null,i="undefined"!=typeof utmOrigem?utmOrigem:null;this.isDefined&&(e&&t&&t.set("utm_campanha",utmCampanha),a&&t&&t.set("utm_midia",utmMidia),i&&t&&t.set("utm_origem",utmOrigem),this.content.subscribe("br.com.infoglobo.oglobo.swg.google"))}}},{key:"isDefined",get:function(){return"undefined"!=typeof swg&&(this.content=swg,!0)}}])&&i(e.prototype,a),n&&i(e,n),t}();a.default=n},{}]},{},[3]);