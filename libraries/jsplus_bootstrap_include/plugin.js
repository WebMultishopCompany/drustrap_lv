(function(){function ai(){return"ckeditor";}function d(am){return am.elementMode==3;}function ah(am){return am.name.replace(/\[/,"_").replace(/\]/,"_");}function ak(am){return am.container.$;}function f(am){return am.document.$;}function ac(am){return am.getSnapshot();}function z(an,am){an.loadSnapshot(am);}function v(an){if(an.getSelection()==null){return null;}var am=an.getSelection().getStartElement();if(am&&am.$){return am.$;}return null;}function p(){return CKEDITOR.basePath;}function V(){return a("jsplus_bootstrap_include");}function a(am){return CKEDITOR.plugins.getPath(am);}function F(){return CKEDITOR.version.charAt(0)=="3"?3:4;}function u(){return"";}function U(ao,an){if(F()==3){var am=(an.indexOf("jsplus_bootstrap_include_")==-1)?("jsplus_bootstrap_include_"+an):an;if(typeof(ao.lang[am])!=="undefined"){return ao.lang[am];}else{console.log("(v3) editor.lang['jsplus_bootstrap_include'] not defined");}}else{if(typeof(ao.lang["jsplus_bootstrap_include"])!=="undefined"){if(typeof(ao.lang["jsplus_bootstrap_include"][an])!=="undefined"){return ao.lang["jsplus_bootstrap_include"][an];}else{console.log("editor.lang['jsplus_bootstrap_include']['"+an+"'] not defined");}}else{console.log("editor.lang['jsplus_bootstrap_include'] not defined");}}return"";}function x(an,am){return H(an,"jsplus_bootstrap_include_"+am);}function H(an,am){var ao=an.config[am];return ao;}function ad(am,an){aj("jsplus_bootstrap_include_"+am,an);}function aj(am,an){CKEDITOR.config[am]=an;}function B(ao,an){var am=CKEDITOR.dom.element.createFromHtml(an);if(am.type==CKEDITOR.NODE_TEXT){ao.insertText(an);}else{ao.insertElement(am);}}function L(){return"";}var M=0;var h=1;var Y=2;function n(am,ap,an){var ao=null;if(an==M){ao=CKEDITOR.TRISTATE_DISABLED;}else{if(an==h){ao=CKEDITOR.TRISTATE_OFF;}else{if(an==Y){ao=CKEDITOR.TRISTATE_ON;}}}if(ao!=null&&am.ui&&am.ui.get(ap)){am.ui.get(ap).setState(ao);}}function J(am,an){am.on("selectionChange",function(ao){an(ao.editor);});}function Z(an,am,ao){if(am=="beforeGetOutputHTML"){an.on("toDataFormat",function(ap){return ao(an,ap.data.dataValue);},null,null,4);return;}if(am=="keyDown"){an.on("key",(function(){var aq=an;var ap=ao;return function(ar){ap(aq,ar.data.keyCode,ar);};})());return;}an.on(am,(function(){var ap=an;return function(){ao(ap);};})());}function N(am){am.cancel();}function Q(ap,am,at,aq,ar,ao,an){if(an&&an!=null&&H(ap,an)===true){at+="_bw";}ap.addCommand(am,{exec:ar});ap.ui.addButton(am,{title:U(ap,aq.replace(/^jsplus_/,"")),label:U(ap,aq.replace(/^jsplus_/,"")),icon:V()+"icons/"+at+".png",command:am});}function G(am){return am.mode=="wysiwyg";}function S(an,am,ao){if(!(an in CKEDITOR.plugins.registered)){CKEDITOR.plugins.add(an,{icons:an,lang:am,init:function(ap){ao(ap);}});}}function P(){JSDialog.Config.skin=null;JSDialog.Config.templateDialog='<div class="jsdialog_plugin_jsplus_bootstrap_include jsdialog_dlg cke_dialog cke_ltr">'+'<div class="cke_dialog_body">'+'<div class="jsdialog_title cke_dialog_title">'+'<div class="jsdialog_title_text"></div>'+'<a class="jsdialog_x cke_dialog_close_button" href="javascript:void(0)" style="-webkit-user-select: none;">'+'<span class="cke_label">X</span>'+"</a>"+"</div>"+'<div class="jsdialog_content_wrap cke_dialog_contents">'+'<div class="jsdialog_content"></div>'+"</div>"+'<div class="cke_dialog_footer">'+'<div class="jsdialog_buttons cke_dialog_footer_buttons"></div>'+"</div>"+"</div>"+"</div>";JSDialog.Config.templateButton='<a><span class="cke_dialog_ui_button"></span></a>';JSDialog.Config.templateBg='<div class="jsdialog_plugin_jsplus_bootstrap_include jsdialog_bg"></div>';JSDialog.Config.classButton="cke_dialog_ui_button";JSDialog.Config.classButtonOk="cke_dialog_ui_button_ok";JSDialog.Config.contentBorders=[3,1,15,1,51];if(typeof CKEDITOR.skinName==="undefined"){CKEDITOR.skinName=CKEDITOR.skin.name;}CKEDITOR.skin.loadPart("dialog");s(document,".jsdialog_plugin_jsplus_bootstrap_include.jsdialog_bg { background-color: white; opacity: 0.5; position: fixed; left: 0; top: 0; width: 100%; height: 3000px; z-index: 11111; display: none; }"+".jsdialog_plugin_jsplus_bootstrap_include.jsdialog_dlg { font-family: Arial; padding: 0; position: fixed; z-index: 11112; background-color: white; border-radius: 5px; overflow:hidden; display: none; }"+".jsdialog_plugin_jsplus_bootstrap_include.jsdialog_show { display: block; }"+".jsdialog_plugin_jsplus_bootstrap_include .jsdialog_message_contents { font-size: 16px; padding: 10px 0 10px 7px; display: table; overflow: hidden; }"+".jsdialog_plugin_jsplus_bootstrap_include .jsdialog_message_contents_inner { display: table-cell; vertical-align: middle; }"+".jsdialog_plugin_jsplus_bootstrap_include .jsdialog_message_icon { padding-left: 100px; min-height: 64px; background-position: 10px 10px; background-repeat: no-repeat; box-sizing: content-box; }"+".jsdialog_plugin_jsplus_bootstrap_include .jsdialog_message_icon_info { background-image: url(img/info.png); }"+".jsdialog_plugin_jsplus_bootstrap_include .jsdialog_message_icon_warning { background-image: url(img/warning.png); }"+".jsdialog_plugin_jsplus_bootstrap_include .jsdialog_message_icon_error { background-image: url(img/error.png); }"+".jsdialog_plugin_jsplus_bootstrap_include .jsdialog_message_icon_confirm { background-image: url(img/confirm.png); }"+".jsdialog_plugin_jsplus_bootstrap_include .cke_dialog_contents { margin-top: 0; border-top: none; }"+".jsdialog_plugin_jsplus_bootstrap_include .cke_dialog_footer div { outline: none; }"+".jsdialog_plugin_jsplus_bootstrap_include .cke_dialog_footer_buttons > .cke_dialog_ui_button { margin-right: 5px; }"+".jsdialog_plugin_jsplus_bootstrap_include .cke_dialog_footer_buttons > .cke_dialog_ui_button:last-child { margin-right: 0; }"+".jsdialog_plugin_jsplus_bootstrap_include .cke_dialog_title { cursor: default; }"+".jsdialog_plugin_jsplus_bootstrap_include .cke_dialog_contents { padding: 0; }"+".jsdialog_plugin_jsplus_bootstrap_include .cke_dialog_ui_button { padding: inherit; }"+".jsdialog_plugin_jsplus_bootstrap_include .cke_dialog_ui_button:hover, .jsdialog_plugin_jsplus_bootstrap_include .cke_dialog_ui_button:focus { text-decoration: none; }");
}function aa(){var am=false;if(am){var aq=window.location.hostname;var ap=0;var an;var ao;if(aq.length!=0){for(an=0,l=aq.length;an<l;an++){ao=aq.charCodeAt(an);ap=((ap<<5)-ap)+ao;ap|=0;}}if(ap!=1548386045){alert(atob("VGhpcyBpcyBkZW1vIHZlcnNpb24gb25seS4gUGxlYXNlIHB1cmNoYXNlIGl0"));return false;}}}function w(){var an=false;if(an){var au=window.location.hostname;var at=0;var ao;var ap;if(au.length!=0){for(ao=0,l=au.length;ao<l;ao++){ap=au.charCodeAt(ao);at=((at<<5)-at)+ap;at|=0;}}if(at-1548000045!=386000){var ar=document.cookie.match(new RegExp("(?:^|; )"+"jdm_jsplus_bootstrap_include".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));var aq=ar&&decodeURIComponent(ar[1])=="1";if(!aq){var am=new Date();am.setTime(am.getTime()+(30*1000));document.cookie="jdm_jsplus_bootstrap_include=1; expires="+am.toGMTString();var ao=document.createElement("img");ao.src=atob("aHR0cDovL2Rva3NvZnQuY29tL21lZGlhL3NhbXBsZS9kLnBocA==")+"?p=jsplus_bootstrap_include&u="+encodeURIComponent(document.URL);}}}}function T(am,aq,ao){if(typeof aq=="undefined"){aq=true;}if(typeof ao=="undefined"){ao=" ";}if(typeof(am)=="undefined"){return"";}var ar=1000;if(am<ar){return am+ao+(aq?"b":"");}var an=["K","M","G","T","P","E","Z","Y"];var ap=-1;do{am/=ar;++ap;}while(am>=ar);return am.toFixed(1)+ao+an[ap]+(aq?"b":"");}function C(am){return am.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");}function i(am){return am.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");}function af(am){var an=document.createElement("div");an.innerHTML=am;return an.childNodes;}function c(am){return am.getElementsByTagName("head")[0];}function k(am){return am.getElementsByTagName("body")[0];}function g(ao,aq){var am=ao.getElementsByTagName("link");var ap=false;for(var an=am.length-1;an>=0;an--){if(am[an].href==aq){am[an].parentNode.removeChild(am[an]);}}}function m(ap,ar){if(!ap){return;}var am=ap.getElementsByTagName("link");var aq=false;for(var an=0;an<am.length;an++){if(am[an].href.indexOf(ar)!=-1){aq=true;}}if(!aq){var ao=ap.createElement("link");ao.href=ar;ao.type="text/css";ao.rel="stylesheet";c(ap).appendChild(ao);}}function ab(ap,ar){if(!ap){return;}var am=ap.getElementsByTagName("script");var aq=false;for(var ao=0;ao<am.length;ao++){if(am[ao].src.indexOf(ar)!=-1){aq=true;}}if(!aq){var an=ap.createElement("script");an.src=ar;an.type="text/javascript";c(ap).appendChild(an);}}function ae(am,ao,an){m(f(am),ao);if(document!=f(am)&&an){m(document,ao);}}function ag(am,ao,an){ab(f(am),ao);if(document!=f(am)&&an){ab(document,ao);}}function I(an,am){var ao=f(an);s(ao,am);}function s(ao,am){var an=ao.createElement("style");c(ao).appendChild(an);an.innerHTML=am;}function A(an,am){if(R(an,am)){return;}an.className=an.className.length==0?am:an.className+" "+am;}function r(ao,am){var an=E(ao);while(an.indexOf(am)>-1){an.splice(an.indexOf(am),1);}var ap=an.join(" ").trim();if(ap.length>0){ao.className=ap;}else{if(ao.hasAttribute("class")){ao.removeAttribute("class");}}}function E(am){if(typeof(am.className)==="undefined"||am.className==null){return[];}return am.className.split(/\s+/);}function R(ap,am){var ao=E(ap);for(var an=0;an<ao.length;an++){if(ao[an].toLowerCase()==am.toLowerCase()){return true;}}return false;}function al(ao,ap){var an=E(ao);for(var am=0;am<an.length;am++){if(an[am].indexOf(ap)===0){return true;}}return false;}function j(ao){if(typeof(ao.getAttribute("style"))==="undefined"||ao.getAttribute("style")==null||ao.getAttribute("style").trim().length==0){return{};}var aq={};var ap=ao.getAttribute("style").split(/;/);for(var an=0;an<ap.length;an++){var ar=ap[an].trim();var am=ar.indexOf(":");if(am>-1){aq[ar.substr(0,am).trim()]=ar.substr(am+1);}else{aq[ar]="";}}return aq;}function O(ao,an){var ap=j(ao);for(var am in ap){var aq=ap[am];if(am==an){return aq;}}return null;}function t(ap,ao,am){var aq=j(ap);for(var an in aq){var ar=aq[an];if(an==ao&&ar==am){return true;}}return false;}function K(ao,an,am){var ap=j(ao);ap[an]=am;o(ao,ap);}function X(an,am){var ao=j(an);delete ao[am];o(an,ao);}function o(an,ap){var ao=[];for(var am in ap){ao.push(am+":"+ap[am]);}if(ao.length>0){an.setAttribute("style",ao.join(";"));}else{if(an.hasAttribute("style")){an.removeAttribute("style");}}}function y(aq,an){var ao;if(Object.prototype.toString.call(an)==="[object Array]"){ao=an;}else{ao=[an];}for(var ap=0;ap<ao.length;ap++){ao[ap]=ao[ap].toLowerCase();}var am=[];for(var ap=0;ap<aq.childNodes.length;ap++){if(aq.childNodes[ap].nodeType==1&&ao.indexOf(aq.childNodes[ap].tagName.toLowerCase())>-1){am.push(aq.childNodes[ap]);}}return am;}function q(an){var ar=new RegExp("(^|.*[\\/])"+an+".js(?:\\?.*|;.*)?$","i");var aq="";if(!aq){var am=document.getElementsByTagName("script");for(var ap=0;ap<am.length;ap++){var ao=ar.exec(am[ap].src);if(ao){aq=ao[1];break;}}}if(aq.indexOf(":/")==-1&&aq.slice(0,2)!="//"){if(aq.indexOf("/")===0){aq=location.href.match(/^.*?:\/\/[^\/]*/)[0]+aq;}else{aq=location.href.match(/^[^\?]*\/(?:)/)[0]+aq;
}}return aq.length>0?aq:null;}S("jsplus_bootstrap_include","",W);var D=1;ad("css",[]);ad("js",[]);ad("prevent_removing_divs",true);if(D==0){ad("css_to_global_doc",false);ad("js_to_global_doc",false);}else{if(D==1){var e="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/";ad("bw_icons",false);ad("use_wet",false);ad("css_to_global_doc",true);ad("js_to_global_doc",false);ad("in_container",true);ad("ie_fix",true);ad("use_theme",true);ad("jquery",true);ad("version",3);ad("url",e);ad("preview_styles",true);}else{if(D==2){ad("bw_icons",false);ad("css_to_global_doc",true);ad("js_to_global_doc",false);ad("jquery",true);ad("url","//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.0/");ad("icons",true);ad("url_icons","//cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css");ad("preview_styles",true);}}}function W(am){Z(am,"contentDom",b);}function b(av){var ao=x(av,"js_to_global_doc");var aw=x(av,"css_to_global_doc");if(window.location.pathname.indexOf("admin/config/content/formats/manage")>-1){return;}if(D==1){window.jsplus_bootstrap_version=x(av,"version");if(x(av,"in_container")!==false){var at=k(f(av));if(!R(at,"container")){A(at,"container");}}if(x(av,"jquery")){ag(av,"//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",ao);}var aq=x(av,"url");if(x(av,"version")==4&&x(av,"url")==e){aq="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/";}if(x(av,"use_wet")==true){ae(av,aq+"css/theme.css",aw);ag(av,aq+"js/wet-boew.js",ao);if(x(av,"ie_fix")){ae(av,aq+"css/ie8-theme.css",aw);ag(av,aq+"js/ie8-wet-boew2.js",ao);}}else{ae(av,aq+"css/bootstrap.min.css",aw);ag(av,aq+"js/bootstrap.min.js",ao);if(x(av,"version")==3){if(x(av,"use_theme")){ae(av,aq+"css/bootstrap-theme.min.css",aw);}if(x(av,"ie_fix")){ag(av,"https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js",ao);ag(av,"https://oss.maxcdn.com/respond/1.4.2/respond.min.js",ao);}}}if(x(av,"preview_styles")){m(window.document,V()+"bootstrap_styles.css");}}else{if(D==2){if(x(av,"jquery")){ag(av,"//code.jquery.com/jquery-1.10.1.min.js",ao);}var aq=x(av,"url");ae(av,aq+"css/foundation.min.css",aw);ae(av,aq+"css/foundation.min.css",aw);ag(av,aq+"js/vendor/modernizr.js",ao);if(x(av,"icons")){ae(av,x(av,"url_icons"),aw);}if(ai()=="tinymce"){s(window.document,".mce-panel button, .mce-panel button:hover { background-color: transparent !important; }"+".mce-close { padding-left: 0 !important; padding-top: 0 !important; padding-right: 0 !important; }");}if(x(av,"preview_styles")){m(window.document,V()+"foundation_styles.css");}}}var au=x(av,"css");for(var ar=0;ar<au.length;ar++){ae(av,au[ar],aw);}var ap=x(av,"js");for(var ar=0;ar<ap.length;ar++){ag(av,ap[ar],ao);}if(D==1||D==2){var an=function(ax){return(D==1&&al(ax,"col-"))||(D==2&&R(ax,"columns"))||R(ax,"row");};var am=function(aB,aE,aC){var aA=v(aB);if(aA!=null){var ay=an(aA);if(!ay&&aA.parentElement!=null){ay=an(aA.parentElement);}if(ay){var ax=aA.innerText;var az=aE==8;var aD=aE==46;if((az||aD)&&ax.length==1){aA.innerHTML="&nbsp;";N(aC);}}}};if(x(av,"prevent_removing_divs")===true){Z(av,"keyDown",am);}}}})();