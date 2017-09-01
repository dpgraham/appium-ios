function(){return function(){var h=this;function k(a){return"string"==typeof a}function aa(a,b){a=a.split(".");var c=h;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ca(a){var b=ba(a);return"array"==b||"object"==b&&"number"==typeof a.length}function da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function ga(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ga=ea:ga=fa;return ga.apply(null,arguments)}
function ha(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var ia=Date.now||function(){return+new Date};function m(a,b){function c(){}c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.K=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function n(a,b){this.code=a;this.a=p[a]||ja;this.message=b||"";a=this.a.replace(/((?:^|\s+)[a-z])/g,function(a){return a.toUpperCase().replace(/^[\s\xa0]+/g,"")});b=a.length-5;if(0>b||a.indexOf("Error",b)!=b)a+="Error";this.name=a;a=Error(this.message);a.name=this.name;this.stack=a.stack||""}m(n,Error);var ja="unknown error",p={15:"element not selectable",11:"element not visible"};p[31]=ja;p[30]=ja;p[24]="invalid cookie domain";p[29]="invalid element coordinates";p[12]="invalid element state";
p[32]="invalid selector";p[51]="invalid selector";p[52]="invalid selector";p[17]="javascript error";p[405]="unsupported operation";p[34]="move target out of bounds";p[27]="no such alert";p[7]="no such element";p[8]="no such frame";p[23]="no such window";p[28]="script timeout";p[33]="session not created";p[10]="stale element reference";p[21]="timeout";p[25]="unable to set cookie";p[26]="unexpected alert open";p[13]=ja;p[9]="unknown command";n.prototype.toString=function(){return this.name+": "+this.message};var ka=window;var la=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ma(a){var b=0;a=la(String(a)).split(".");for(var c=la("3.5").split("."),d=Math.max(a.length,c.length),e=0;!b&&e<d;e++){var f=a[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;b=na(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||na(0==f[2].length,0==g[2].length)||na(f[2],g[2]);f=f[3];g=g[3]}while(!b)}return b}function na(a,b){return a<b?-1:a>b?1:0};function q(a,b){for(var c=a.length,d=k(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)}function oa(a,b){for(var c=a.length,d=[],e=0,f=k(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var l=f[g];b.call(void 0,l,g,a)&&(d[e++]=l)}return d}function pa(a,b){for(var c=a.length,d=Array(c),e=k(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d}function r(a,b,c){var d=c;q(a,function(c,f){d=b.call(void 0,d,c,f,a)});return d}
function qa(a,b){for(var c=a.length,d=k(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1}function ra(a,b){a:{for(var c=a.length,d=k(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:k(a)?a.charAt(b):a[b]}function sa(a){return Array.prototype.concat.apply([],arguments)}function ta(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};var t;a:{var ua=h.navigator;if(ua){var va=ua.userAgent;if(va){t=va;break a}}t=""}function u(a){return-1!=t.indexOf(a)};function wa(a,b){var c={},d;for(d in a)b.call(void 0,a[d],d,a)&&(c[d]=a[d]);return c}function xa(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function v(a,b){return null!==a&&b in a}function ya(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c};function za(){return(u("Chrome")||u("CriOS"))&&!u("Edge")};function Aa(){return u("iPhone")&&!u("iPod")&&!u("iPad")};var Ba=u("Opera"),w=u("Trident")||u("MSIE"),Ca=u("Edge"),Da=u("Gecko")&&!(-1!=t.toLowerCase().indexOf("webkit")&&!u("Edge"))&&!(u("Trident")||u("MSIE"))&&!u("Edge"),Ea=-1!=t.toLowerCase().indexOf("webkit")&&!u("Edge");function Fa(){var a=h.document;return a?a.documentMode:void 0}var Ga;
a:{var Ha="",Ia=function(){var a=t;if(Da)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ca)return/Edge\/([\d\.]+)/.exec(a);if(w)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ea)return/WebKit\/(\S+)/.exec(a);if(Ba)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ia&&(Ha=Ia?Ia[1]:"");if(w){var Ja=Fa();if(null!=Ja&&Ja>parseFloat(Ha)){Ga=String(Ja);break a}}Ga=Ha}var Ka={},La;var Ma=h.document;La=Ma&&w?Fa()||("CSS1Compat"==Ma.compatMode?parseInt(Ga,10):5):void 0;function Na(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Oa(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(w&&!(9<=Number(La))){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?Pa(a,b):!c&&Na(e,b)?-1*Qa(a,b):!d&&Na(f,a)?Qa(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?
a:a.ownerDocument||a.document;c=d.createRange();c.selectNode(a);c.collapse(!0);a=d.createRange();a.selectNode(b);a.collapse(!0);return c.compareBoundaryPoints(h.Range.START_TO_END,a)}function Qa(a,b){var c=a.parentNode;if(c==b)return-1;for(;b.parentNode!=c;)b=b.parentNode;return Pa(b,a)}function Pa(a,b){for(;b=b.previousSibling;)if(b==a)return-1;return 1};var Ra=u("Firefox"),Sa=Aa()||u("iPod"),Ta=u("iPad"),Ua=u("Android")&&!(za()||u("Firefox")||u("Opera")||u("Silk")),Va=za(),Wa=u("Safari")&&!(za()||u("Coast")||u("Opera")||u("Edge")||u("Silk")||u("Android"))&&!(Aa()||u("iPad")||u("iPod"));function x(a){return(a=a.exec(t))?a[1]:""}(function(){if(Ra)return x(/Firefox\/([0-9.]+)/);if(w||Ca||Ba)return Ga;if(Va)return Aa()||u("iPad")||u("iPod")?x(/CriOS\/([0-9.]+)/):x(/Chrome\/([0-9.]+)/);if(Wa&&!(Aa()||u("iPad")||u("iPod")))return x(/Version\/([0-9.]+)/);if(Sa||Ta){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(t);if(a)return a[1]+"."+a[2]}else if(Ua)return(a=x(/Android\s+([0-9.]+)/))?a:x(/Version\/([0-9.]+)/);return""})();var Xa,Ya,Za=function(){if(!Da)return!1;var a=h.Components;if(!a)return!1;try{if(!a.classes)return!1}catch(f){return!1}var b=a.classes,a=a.interfaces,c=b["@mozilla.org/xpcom/version-comparator;1"].getService(a.nsIVersionComparator),b=b["@mozilla.org/xre/app-info;1"].getService(a.nsIXULAppInfo),d=b.platformVersion,e=b.version;Xa=function(a){return 0<=c.compare(d,""+a)};Ya=function(a){c.compare(e,""+a)};return!0}();Ua&&Za&&Ya(2.3);Ua&&Za&&Ya(4);Wa&&Za&&Ya(6);function $a(a,b){b&&"string"!==typeof b&&(b=b.toString());return!!a&&1==a.nodeType&&(!b||a.tagName.toUpperCase()==b)};/*

 The MIT License

 Copyright (c) 2007 Cybozu Labs, Inc.
 Copyright (c) 2012 Google Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 IN THE SOFTWARE.
*/
function z(a,b,c){this.a=a;this.b=b||1;this.f=c||1};var A=w&&!(9<=Number(La)),ab=w&&!(8<=Number(La));function B(a,b,c,d){this.a=a;this.nodeName=c;this.nodeValue=d;this.nodeType=2;this.parentNode=this.ownerElement=b}function bb(a,b){var c=ab&&"href"==b.nodeName?a.getAttribute(b.nodeName,2):b.nodeValue;return new B(b,a,b.nodeName,c)};function cb(a){this.b=a;this.a=0}function db(a){a=a.match(eb);for(var b=0;b<a.length;b++)fb.test(a[b])&&a.splice(b,1);return new cb(a)}var eb=/\$?(?:(?![0-9-\.])(?:\*|[\w-\.]+):)?(?![0-9-\.])(?:\*|[\w-\.]+)|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|\s+|./g,fb=/^\s/;function C(a,b){return a.b[a.a+(b||0)]}function D(a){return a.b[a.a++]}function gb(a){return a.b.length<=a.a};function F(a){var b=null,c=a.nodeType;1==c&&(b=a.textContent,b=void 0==b||null==b?a.innerText:b,b=void 0==b||null==b?"":b);if("string"!=typeof b)if(A&&"title"==a.nodeName.toLowerCase()&&1==c)b=a.text;else if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),A&&"title"==a.nodeName.toLowerCase()&&(b+=a.text),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}
function G(a,b,c){if(null===b)return!0;try{if(!a.getAttribute)return!1}catch(d){return!1}ab&&"class"==b&&(b="className");return null==c?!!a.getAttribute(b):a.getAttribute(b,2)==c}function hb(a,b,c,d,e){return(A?ib:jb).call(null,a,b,k(c)?c:null,k(d)?d:null,e||new H)}
function ib(a,b,c,d,e){if(a instanceof I||8==a.b||c&&null===a.b){var f=b.all;if(!f)return e;var g=kb(a);if("*"!=g&&(f=b.getElementsByTagName(g),!f))return e;if(c){var l=[];for(a=0;b=f[a++];)G(b,c,d)&&l.push(b);f=l}for(a=0;b=f[a++];)"*"==g&&"!"==b.tagName||J(e,b);return e}lb(a,b,c,d,e);return e}
function jb(a,b,c,d,e){b.getElementsByName&&d&&"name"==c&&!w?(b=b.getElementsByName(d),q(b,function(b){a.a(b)&&J(e,b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),q(b,function(b){b.className==d&&a.a(b)&&J(e,b)})):a instanceof K?lb(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.f()),q(b,function(a){G(a,c,d)&&J(e,a)}));return e}
function mb(a,b,c,d,e){var f;if((a instanceof I||8==a.b||c&&null===a.b)&&(f=b.childNodes)){var g=kb(a);if("*"!=g&&(f=oa(f,function(a){return a.tagName&&a.tagName.toLowerCase()==g}),!f))return e;c&&(f=oa(f,function(a){return G(a,c,d)}));q(f,function(a){"*"==g&&("!"==a.tagName||"*"==g&&1!=a.nodeType)||J(e,a)});return e}return nb(a,b,c,d,e)}function nb(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)G(b,c,d)&&a.a(b)&&J(e,b);return e}
function lb(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)G(b,c,d)&&a.a(b)&&J(e,b),lb(a,b,c,d,e)}function kb(a){if(a instanceof K){if(8==a.b)return"!";if(null===a.b)return"*"}return a.f()};function H(){this.b=this.a=null;this.l=0}function ob(a){this.node=a;this.a=this.b=null}function pb(a,b){if(!a.a)return b;if(!b.a)return a;var c=a.a;b=b.a;for(var d=null,e,f=0;c&&b;){e=c.node;var g=b.node;e==g||e instanceof B&&g instanceof B&&e.a==g.a?(e=c,c=c.a,b=b.a):0<Oa(c.node,b.node)?(e=b,b=b.a):(e=c,c=c.a);(e.b=d)?d.a=e:a.a=e;d=e;f++}for(e=c||b;e;)e.b=d,d=d.a=e,f++,e=e.a;a.b=d;a.l=f;return a}function qb(a,b){b=new ob(b);b.a=a.a;a.b?a.a.b=b:a.a=a.b=b;a.a=b;a.l++}
function J(a,b){b=new ob(b);b.b=a.b;a.a?a.b.a=b:a.a=a.b=b;a.b=b;a.l++}function rb(a){return(a=a.a)?a.node:null}function sb(a){return(a=rb(a))?F(a):""}function L(a,b){return new tb(a,!!b)}function tb(a,b){this.f=a;this.b=(this.s=b)?a.b:a.a;this.a=null}function M(a){var b=a.b;if(b){var c=a.a=b;a.b=a.s?b.b:b.a;return c.node}return null};function N(a){this.i=a;this.b=this.g=!1;this.f=null}function O(a){return"\n  "+a.toString().split("\n").join("\n  ")}function ub(a,b){a.g=b}function vb(a,b){a.b=b}function P(a,b){a=a.a(b);return a instanceof H?+sb(a):+a}function Q(a,b){a=a.a(b);return a instanceof H?sb(a):""+a}function R(a,b){a=a.a(b);return a instanceof H?!!a.l:!!a};function wb(a,b,c){N.call(this,a.i);this.c=a;this.h=b;this.o=c;this.g=b.g||c.g;this.b=b.b||c.b;this.c==xb&&(c.b||c.g||4==c.i||0==c.i||!b.f?b.b||b.g||4==b.i||0==b.i||!c.f||(this.f={name:c.f.name,u:b}):this.f={name:b.f.name,u:c})}m(wb,N);
function S(a,b,c,d,e){b=b.a(d);c=c.a(d);var f;if(b instanceof H&&c instanceof H){b=L(b);for(d=M(b);d;d=M(b))for(e=L(c),f=M(e);f;f=M(e))if(a(F(d),F(f)))return!0;return!1}if(b instanceof H||c instanceof H){b instanceof H?(e=b,d=c):(e=c,d=b);f=L(e);for(var g=typeof d,l=M(f);l;l=M(f)){switch(g){case "number":l=+F(l);break;case "boolean":l=!!F(l);break;case "string":l=F(l);break;default:throw Error("Illegal primitive type for comparison.");}if(e==b&&a(l,d)||e==c&&a(d,l))return!0}return!1}return e?"boolean"==
typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}wb.prototype.a=function(a){return this.c.m(this.h,this.o,a)};wb.prototype.toString=function(){var a="Binary Expression: "+this.c,a=a+O(this.h);return a+=O(this.o)};function yb(a,b,c,d){this.I=a;this.D=b;this.i=c;this.m=d}yb.prototype.toString=function(){return this.I};var zb={};
function T(a,b,c,d){if(zb.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new yb(a,b,c,d);return zb[a.toString()]=a}T("div",6,1,function(a,b,c){return P(a,c)/P(b,c)});T("mod",6,1,function(a,b,c){return P(a,c)%P(b,c)});T("*",6,1,function(a,b,c){return P(a,c)*P(b,c)});T("+",5,1,function(a,b,c){return P(a,c)+P(b,c)});T("-",5,1,function(a,b,c){return P(a,c)-P(b,c)});T("<",4,2,function(a,b,c){return S(function(a,b){return a<b},a,b,c)});
T(">",4,2,function(a,b,c){return S(function(a,b){return a>b},a,b,c)});T("<=",4,2,function(a,b,c){return S(function(a,b){return a<=b},a,b,c)});T(">=",4,2,function(a,b,c){return S(function(a,b){return a>=b},a,b,c)});var xb=T("=",3,2,function(a,b,c){return S(function(a,b){return a==b},a,b,c,!0)});T("!=",3,2,function(a,b,c){return S(function(a,b){return a!=b},a,b,c,!0)});T("and",2,2,function(a,b,c){return R(a,c)&&R(b,c)});T("or",1,2,function(a,b,c){return R(a,c)||R(b,c)});function Ab(a,b){if(b.a.length&&4!=a.i)throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");N.call(this,a.i);this.c=a;this.h=b;this.g=a.g;this.b=a.b}m(Ab,N);Ab.prototype.a=function(a){a=this.c.a(a);return Bb(this.h,a)};Ab.prototype.toString=function(){var a="Filter:"+O(this.c);return a+=O(this.h)};function Cb(a,b){if(b.length<a.C)throw Error("Function "+a.j+" expects at least"+a.C+" arguments, "+b.length+" given");if(null!==a.A&&b.length>a.A)throw Error("Function "+a.j+" expects at most "+a.A+" arguments, "+b.length+" given");a.H&&q(b,function(b,d){if(4!=b.i)throw Error("Argument "+d+" to function "+a.j+" is not of type Nodeset: "+b);});N.call(this,a.i);this.v=a;this.c=b;ub(this,a.g||qa(b,function(a){return a.g}));vb(this,a.G&&!b.length||a.F&&!!b.length||qa(b,function(a){return a.b}))}
m(Cb,N);Cb.prototype.a=function(a){return this.v.m.apply(null,sa(a,this.c))};Cb.prototype.toString=function(){var a="Function: "+this.v;if(this.c.length)var b=r(this.c,function(a,b){return a+O(b)},"Arguments:"),a=a+O(b);return a};function Db(a,b,c,d,e,f,g,l,y){this.j=a;this.i=b;this.g=c;this.G=d;this.F=e;this.m=f;this.C=g;this.A=void 0!==l?l:g;this.H=!!y}Db.prototype.toString=function(){return this.j};var Eb={};
function U(a,b,c,d,e,f,g,l){if(Eb.hasOwnProperty(a))throw Error("Function already created: "+a+".");Eb[a]=new Db(a,b,c,d,!1,e,f,g,l)}U("boolean",2,!1,!1,function(a,b){return R(b,a)},1);U("ceiling",1,!1,!1,function(a,b){return Math.ceil(P(b,a))},1);U("concat",3,!1,!1,function(a,b){return r(ta(arguments,1),function(b,d){return b+Q(d,a)},"")},2,null);U("contains",2,!1,!1,function(a,b,c){b=Q(b,a);a=Q(c,a);return-1!=b.indexOf(a)},2);U("count",1,!1,!1,function(a,b){return b.a(a).l},1,1,!0);
U("false",2,!1,!1,function(){return!1},0);U("floor",1,!1,!1,function(a,b){return Math.floor(P(b,a))},1);
U("id",4,!1,!1,function(a,b){function c(a){if(A){var b=e.all[a];if(b){if(b.nodeType&&a==b.id)return b;if(b.length)return ra(b,function(b){return a==b.id})}return null}return e.getElementById(a)}var d=a.a,e=9==d.nodeType?d:d.ownerDocument;a=Q(b,a).split(/\s+/);var f=[];q(a,function(a){a=c(a);var b;if(!(b=!a)){a:if(k(f))b=k(a)&&1==a.length?f.indexOf(a,0):-1;else{for(b=0;b<f.length;b++)if(b in f&&f[b]===a)break a;b=-1}b=0<=b}b||f.push(a)});f.sort(Oa);var g=new H;q(f,function(a){J(g,a)});return g},1);
U("lang",2,!1,!1,function(){return!1},1);U("last",1,!0,!1,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.f},0);U("local-name",3,!1,!0,function(a,b){return(a=b?rb(b.a(a)):a.a)?a.localName||a.nodeName.toLowerCase():""},0,1,!0);U("name",3,!1,!0,function(a,b){return(a=b?rb(b.a(a)):a.a)?a.nodeName.toLowerCase():""},0,1,!0);U("namespace-uri",3,!0,!1,function(){return""},0,1,!0);
U("normalize-space",3,!1,!0,function(a,b){return(b?Q(b,a):F(a.a)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);U("not",2,!1,!1,function(a,b){return!R(b,a)},1);U("number",1,!1,!0,function(a,b){return b?P(b,a):+F(a.a)},0,1);U("position",1,!0,!1,function(a){return a.b},0);U("round",1,!1,!1,function(a,b){return Math.round(P(b,a))},1);U("starts-with",2,!1,!1,function(a,b,c){b=Q(b,a);a=Q(c,a);return!b.lastIndexOf(a,0)},2);U("string",3,!1,!0,function(a,b){return b?Q(b,a):F(a.a)},0,1);
U("string-length",1,!1,!0,function(a,b){return(b?Q(b,a):F(a.a)).length},0,1);U("substring",3,!1,!1,function(a,b,c,d){c=P(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?P(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=Q(b,a);return Infinity==d?a.substring(e):a.substring(e,c+Math.round(d))},2,3);U("substring-after",3,!1,!1,function(a,b,c){b=Q(b,a);a=Q(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
U("substring-before",3,!1,!1,function(a,b,c){b=Q(b,a);a=Q(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);U("sum",1,!1,!1,function(a,b){a=L(b.a(a));b=0;for(var c=M(a);c;c=M(a))b+=+F(c);return b},1,1,!0);U("translate",3,!1,!1,function(a,b,c,d){b=Q(b,a);c=Q(c,a);var e=Q(d,a);d={};for(var f=0;f<c.length;f++)a=c.charAt(f),a in d||(d[a]=e.charAt(f));c="";for(f=0;f<b.length;f++)a=b.charAt(f),c+=a in d?d[a]:a;return c},3);U("true",2,!1,!1,function(){return!0},0);function K(a,b){this.h=a;this.c=void 0!==b?b:null;this.b=null;switch(a){case "comment":this.b=8;break;case "text":this.b=3;break;case "processing-instruction":this.b=7;break;case "node":break;default:throw Error("Unexpected argument");}}function Fb(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}K.prototype.a=function(a){return null===this.b||this.b==a.nodeType};K.prototype.f=function(){return this.h};
K.prototype.toString=function(){var a="Kind Test: "+this.h;null===this.c||(a+=O(this.c));return a};function Gb(a){N.call(this,3);this.c=a.substring(1,a.length-1)}m(Gb,N);Gb.prototype.a=function(){return this.c};Gb.prototype.toString=function(){return"Literal: "+this.c};function I(a,b){this.j=a.toLowerCase();a="*"==this.j?"*":"http://www.w3.org/1999/xhtml";this.c=b?b.toLowerCase():a}I.prototype.a=function(a){var b=a.nodeType;if(1!=b&&2!=b)return!1;b=void 0!==a.localName?a.localName:a.nodeName;return"*"!=this.j&&this.j!=b.toLowerCase()?!1:"*"==this.c?!0:this.c==(a.namespaceURI?a.namespaceURI.toLowerCase():"http://www.w3.org/1999/xhtml")};I.prototype.f=function(){return this.j};
I.prototype.toString=function(){return"Name Test: "+("http://www.w3.org/1999/xhtml"==this.c?"":this.c+":")+this.j};function Hb(a){N.call(this,1);this.c=a}m(Hb,N);Hb.prototype.a=function(){return this.c};Hb.prototype.toString=function(){return"Number: "+this.c};function Ib(a,b){N.call(this,a.i);this.h=a;this.c=b;this.g=a.g;this.b=a.b;1==this.c.length&&(a=this.c[0],a.w||a.c!=Jb||(a=a.o,"*"!=a.f()&&(this.f={name:a.f(),u:null})))}m(Ib,N);function Kb(){N.call(this,4)}m(Kb,N);Kb.prototype.a=function(a){var b=new H;a=a.a;9==a.nodeType?J(b,a):J(b,a.ownerDocument);return b};Kb.prototype.toString=function(){return"Root Helper Expression"};function Lb(){N.call(this,4)}m(Lb,N);Lb.prototype.a=function(a){var b=new H;J(b,a.a);return b};Lb.prototype.toString=function(){return"Context Helper Expression"};
function Mb(a){return"/"==a||"//"==a}Ib.prototype.a=function(a){var b=this.h.a(a);if(!(b instanceof H))throw Error("Filter expression must evaluate to nodeset.");a=this.c;for(var c=0,d=a.length;c<d&&b.l;c++){var e=a[c],f=L(b,e.c.s);if(e.g||e.c!=Nb)if(e.g||e.c!=Ob){var g=M(f);for(b=e.a(new z(g));g=M(f);)g=e.a(new z(g)),b=pb(b,g)}else g=M(f),b=e.a(new z(g));else{for(g=M(f);(b=M(f))&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.a(new z(g))}}return b};
Ib.prototype.toString=function(){var a="Path Expression:"+O(this.h);if(this.c.length){var b=r(this.c,function(a,b){return a+O(b)},"Steps:");a+=O(b)}return a};function Pb(a,b){this.a=a;this.s=!!b}
function Bb(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=L(b),f=b.l,g,l=0;g=M(e);l++){var y=a.s?f-l:l+1;g=d.a(new z(g,y,f));if("number"==typeof g)y=y==g;else if("string"==typeof g||"boolean"==typeof g)y=!!g;else if(g instanceof H)y=0<g.l;else throw Error("Predicate.evaluate returned an unexpected type.");if(!y){y=e;g=y.f;var E=y.a;if(!E)throw Error("Next must be called at least once before remove.");var Z=E.b,E=E.a;Z?Z.a=E:g.a=E;E?E.b=Z:g.b=Z;g.l--;y.a=null}}return b}
Pb.prototype.toString=function(){return r(this.a,function(a,b){return a+O(b)},"Predicates:")};function V(a,b,c,d){N.call(this,4);this.c=a;this.o=b;this.h=c||new Pb([]);this.w=!!d;b=this.h;b=0<b.a.length?b.a[0].f:null;a.J&&b&&(a=b.name,a=A?a.toLowerCase():a,this.f={name:a,u:b.u});a:{a=this.h;for(b=0;b<a.a.length;b++)if(c=a.a[b],c.g||1==c.i||0==c.i){a=!0;break a}a=!1}this.g=a}m(V,N);
V.prototype.a=function(a){var b=a.a,c=this.f,d=null,e=null,f=0;c&&(d=c.name,e=c.u?Q(c.u,a):null,f=1);if(this.w)if(this.g||this.c!=Qb)if(b=L((new V(Rb,new K("node"))).a(a)),c=M(b))for(a=this.m(c,d,e,f);c=M(b);)a=pb(a,this.m(c,d,e,f));else a=new H;else a=hb(this.o,b,d,e),a=Bb(this.h,a,f);else a=this.m(a.a,d,e,f);return a};V.prototype.m=function(a,b,c,d){a=this.c.v(this.o,a,b,c);return a=Bb(this.h,a,d)};
V.prototype.toString=function(){var a="Step:"+O("Operator: "+(this.w?"//":"/"));this.c.j&&(a+=O("Axis: "+this.c));a+=O(this.o);if(this.h.a.length){var b=r(this.h.a,function(a,b){return a+O(b)},"Predicates:");a+=O(b)}return a};function Sb(a,b,c,d){this.j=a;this.v=b;this.s=c;this.J=d}Sb.prototype.toString=function(){return this.j};var Tb={};function W(a,b,c,d){if(Tb.hasOwnProperty(a))throw Error("Axis already created: "+a);b=new Sb(a,b,c,!!d);return Tb[a]=b}
W("ancestor",function(a,b){for(var c=new H;b=b.parentNode;)a.a(b)&&qb(c,b);return c},!0);W("ancestor-or-self",function(a,b){var c=new H;do a.a(b)&&qb(c,b);while(b=b.parentNode);return c},!0);
var Jb=W("attribute",function(a,b){var c=new H,d=a.f();if("style"==d&&A&&b.style)return J(c,new B(b.style,b,"style",b.style.cssText)),c;var e=b.attributes;if(e)if(a instanceof K&&null===a.b||"*"==d)for(d=0;a=e[d];d++)A?a.nodeValue&&J(c,bb(b,a)):J(c,a);else(a=e.getNamedItem(d))&&(A?a.nodeValue&&J(c,bb(b,a)):J(c,a));return c},!1),Qb=W("child",function(a,b,c,d,e){return(A?mb:nb).call(null,a,b,k(c)?c:null,k(d)?d:null,e||new H)},!1,!0);W("descendant",hb,!1,!0);
var Rb=W("descendant-or-self",function(a,b,c,d){var e=new H;G(b,c,d)&&a.a(b)&&J(e,b);return hb(a,b,c,d,e)},!1,!0),Nb=W("following",function(a,b,c,d){var e=new H;do for(var f=b;f=f.nextSibling;)G(f,c,d)&&a.a(f)&&J(e,f),e=hb(a,f,c,d,e);while(b=b.parentNode);return e},!1,!0);W("following-sibling",function(a,b){for(var c=new H;b=b.nextSibling;)a.a(b)&&J(c,b);return c},!1);W("namespace",function(){return new H},!1);
var Ub=W("parent",function(a,b){var c=new H;if(9==b.nodeType)return c;if(2==b.nodeType)return J(c,b.ownerElement),c;b=b.parentNode;a.a(b)&&J(c,b);return c},!1),Ob=W("preceding",function(a,b,c,d){var e=new H,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,l=f.length;g<l;g++){var y=[];for(b=f[g];b=b.previousSibling;)y.unshift(b);for(var E=0,Z=y.length;E<Z;E++)b=y[E],G(b,c,d)&&a.a(b)&&J(e,b),e=hb(a,b,c,d,e)}return e},!0,!0);
W("preceding-sibling",function(a,b){for(var c=new H;b=b.previousSibling;)a.a(b)&&qb(c,b);return c},!0);var Vb=W("self",function(a,b){var c=new H;a.a(b)&&J(c,b);return c},!1);function Wb(a){N.call(this,1);this.c=a;this.g=a.g;this.b=a.b}m(Wb,N);Wb.prototype.a=function(a){return-P(this.c,a)};Wb.prototype.toString=function(){return"Unary Expression: -"+O(this.c)};function Xb(a){N.call(this,4);this.c=a;ub(this,qa(this.c,function(a){return a.g}));vb(this,qa(this.c,function(a){return a.b}))}m(Xb,N);Xb.prototype.a=function(a){var b=new H;q(this.c,function(c){c=c.a(a);if(!(c instanceof H))throw Error("Path expression must evaluate to NodeSet.");b=pb(b,c)});return b};Xb.prototype.toString=function(){return r(this.c,function(a,b){return a+O(b)},"Union Expression:")};function Yb(a,b){this.a=a;this.b=b}function Zb(a){for(var b,c=[];;){X(a,"Missing right hand side of binary expression.");b=$b(a);var d=D(a.a);if(!d)break;var e=(d=zb[d]||null)&&d.D;if(!e){a.a.a--;break}for(;c.length&&e<=c[c.length-1].D;)b=new wb(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new wb(c.pop(),c.pop(),b);return b}function X(a,b){if(gb(a.a))throw Error(b);}function ac(a,b){a=D(a.a);if(a!=b)throw Error("Bad token, expected: "+b+" got: "+a);}
function bc(a){a=D(a.a);if(")"!=a)throw Error("Bad token: "+a);}function cc(a){a=D(a.a);if(2>a.length)throw Error("Unclosed literal string");return new Gb(a)}
function dc(a){var b=[];if(Mb(C(a.a))){var c=D(a.a);var d=C(a.a);if("/"==c&&(gb(a.a)||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new Kb;d=new Kb;X(a,"Missing next location step.");c=ec(a,c);b.push(c)}else{a:{c=C(a.a);d=c.charAt(0);switch(d){case "$":throw Error("Variable reference not allowed in HTML XPath");case "(":D(a.a);c=Zb(a);X(a,'unclosed "("');ac(a,")");break;case '"':case "'":c=cc(a);break;default:if(isNaN(+c))if(!Fb(c)&&/(?![0-9])[\w]/.test(d)&&"("==C(a.a,1)){c=D(a.a);
c=Eb[c]||null;D(a.a);for(d=[];")"!=C(a.a);){X(a,"Missing function argument list.");d.push(Zb(a));if(","!=C(a.a))break;D(a.a)}X(a,"Unclosed function argument list.");bc(a);c=new Cb(c,d)}else{c=null;break a}else c=new Hb(+D(a.a))}"["==C(a.a)&&(d=new Pb(fc(a)),c=new Ab(c,d))}if(c)if(Mb(C(a.a)))d=c;else return c;else c=ec(a,"/"),d=new Lb,b.push(c)}for(;Mb(C(a.a));)c=D(a.a),X(a,"Missing next location step."),c=ec(a,c),b.push(c);return new Ib(d,b)}
function ec(a,b){if("/"!=b&&"//"!=b)throw Error('Step op should be "/" or "//"');if("."==C(a.a)){var c=new V(Vb,new K("node"));D(a.a);return c}if(".."==C(a.a))return c=new V(Ub,new K("node")),D(a.a),c;if("@"==C(a.a)){var d=Jb;D(a.a);X(a,"Missing attribute name")}else if("::"==C(a.a,1)){if(!/(?![0-9])[\w]/.test(C(a.a).charAt(0)))throw Error("Bad token: "+D(a.a));var e=D(a.a);d=Tb[e]||null;if(!d)throw Error("No axis with name: "+e);D(a.a);X(a,"Missing node name")}else d=Qb;e=C(a.a);if(/(?![0-9])[\w\*]/.test(e.charAt(0)))if("("==
C(a.a,1)){if(!Fb(e))throw Error("Invalid node type: "+e);e=D(a.a);if(!Fb(e))throw Error("Invalid type name: "+e);ac(a,"(");X(a,"Bad nodetype");var f=C(a.a).charAt(0),g=null;if('"'==f||"'"==f)g=cc(a);X(a,"Bad nodetype");bc(a);e=new K(e,g)}else if(e=D(a.a),f=e.indexOf(":"),-1==f)e=new I(e);else{var g=e.substring(0,f);if("*"==g)var l="*";else if(l=a.b(g),!l)throw Error("Namespace prefix not declared: "+g);e=e.substr(f+1);e=new I(e,l)}else throw Error("Bad token: "+D(a.a));a=new Pb(fc(a),d.s);return c||
new V(d,e,a,"//"==b)}function fc(a){for(var b=[];"["==C(a.a);){D(a.a);X(a,"Missing predicate expression.");var c=Zb(a);b.push(c);X(a,"Unclosed predicate expression.");ac(a,"]")}return b}function $b(a){if("-"==C(a.a))return D(a.a),new Wb($b(a));var b=dc(a);if("|"!=C(a.a))a=b;else{for(b=[b];"|"==D(a.a);)X(a,"Missing next union location path."),b.push(dc(a));a.a.a--;a=new Xb(b)}return a};function gc(a){switch(a.nodeType){case 1:return ha(hc,a);case 9:return gc(a.documentElement);case 11:case 10:case 6:case 12:return ic;default:return a.parentNode?gc(a.parentNode):ic}}function ic(){return null}function hc(a,b){if(a.prefix==b)return a.namespaceURI||"http://www.w3.org/1999/xhtml";var c=a.getAttributeNode("xmlns:"+b);return c&&c.specified?c.value||null:a.parentNode&&9!=a.parentNode.nodeType?hc(a.parentNode,b):null};function jc(a,b){if(!a.length)throw Error("Empty XPath expression.");a=db(a);if(gb(a))throw Error("Invalid XPath expression.");b?"function"==ba(b)||(b=ga(b.lookupNamespaceURI,b)):b=function(){return null};var c=Zb(new Yb(a,b));if(!gb(a))throw Error("Bad token: "+D(a));this.evaluate=function(a,b){a=c.a(new z(a));return new Y(a,b)}}
function Y(a,b){if(!b)if(a instanceof H)b=4;else if("string"==typeof a)b=2;else if("number"==typeof a)b=1;else if("boolean"==typeof a)b=3;else throw Error("Unexpected evaluation result.");if(2!=b&&1!=b&&3!=b&&!(a instanceof H))throw Error("value could not be converted to the specified type");this.resultType=b;switch(b){case 2:this.stringValue=a instanceof H?sb(a):""+a;break;case 1:this.numberValue=a instanceof H?+sb(a):+a;break;case 3:this.booleanValue=a instanceof H?0<a.l:!!a;break;case 4:case 5:case 6:case 7:var c=
L(a);var d=[];for(var e=M(c);e;e=M(c))d.push(e instanceof B?e.a:e);this.snapshotLength=a.l;this.invalidIteratorState=!1;break;case 8:case 9:a=rb(a);this.singleNodeValue=a instanceof B?a.a:a;break;default:throw Error("Unknown XPathResult type.");}var f=0;this.iterateNext=function(){if(4!=b&&5!=b)throw Error("iterateNext called with wrong result type");return f>=d.length?null:d[f++]};this.snapshotItem=function(a){if(6!=b&&7!=b)throw Error("snapshotItem called with wrong result type");return a>=d.length||
0>a?null:d[a]}}Y.ANY_TYPE=0;Y.NUMBER_TYPE=1;Y.STRING_TYPE=2;Y.BOOLEAN_TYPE=3;Y.UNORDERED_NODE_ITERATOR_TYPE=4;Y.ORDERED_NODE_ITERATOR_TYPE=5;Y.UNORDERED_NODE_SNAPSHOT_TYPE=6;Y.ORDERED_NODE_SNAPSHOT_TYPE=7;Y.ANY_UNORDERED_NODE_TYPE=8;Y.FIRST_ORDERED_NODE_TYPE=9;function kc(a){this.lookupNamespaceURI=gc(a)}
aa("wgxpath.install",function(a,b){a=a||h;var c=a.Document&&a.Document.prototype||a.document;if(!c.evaluate||b)a.XPathResult=Y,c.evaluate=function(a,b,c,g){return(new jc(a,c)).evaluate(b,g)},c.createExpression=function(a,b){return new jc(a,b)},c.createNSResolver=function(a){return new kc(a)}});function lc(a){if($a(a,"FRAME")||$a(a,"IFRAME")){a:{try{var b;if(!(b=a.contentWindow)){if(a.contentDocument){var c=a.contentDocument;var d=c?c.parentWindow||c.defaultView:window}else d=null;b=d}var e=b;break a}catch(f){}e=null}return e}throw new n(8,"The given element isn't a frame or an iframe.");};function mc(){}
function nc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==ba(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),nc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),oc(d,c),c.push(":"),nc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":oc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var pc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},qc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function oc(a,b){b.push('"',a.replace(qc,function(a){var b=pc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),pc[a]=b);return b}),'"')};var rc;if(!(rc=Ea)){var sc;if(sc=Da)sc=Za?Xa(3.5):w?0<=ma(La):Object.prototype.hasOwnProperty.call(Ka,3.5)?Ka[3.5]:Ka[3.5]=0<=ma(Ga);rc=sc}rc||w&&Za&&Xa(8);function tc(a){function b(a,d){switch(ba(a)){case "string":case "number":case "boolean":return a;case "function":return a.toString();case "array":return pa(a,function(a){return b(a,d)});case "object":if(0<=d.indexOf(a))throw new n(13,"Recursive object cannot be transferred");if(v(a,"nodeType")&&(1==a.nodeType||9==a.nodeType)){var c={};c.ELEMENT=uc(a);return c}if(v(a,"document"))return c={},c.WINDOW=uc(a),c;d.push(a);if(ca(a))return pa(a,function(a){return b(a,d)});a=wa(a,function(a,b){return"number"==
typeof b||k(b)});return xa(a,function(a){return b(a,d)});default:return null}}return b(a,[])}function vc(a,b){return"array"==ba(a)?pa(a,function(a){return vc(a,b)}):da(a)?"function"==typeof a?a:v(a,"ELEMENT")?wc(a.ELEMENT,b):v(a,"WINDOW")?wc(a.WINDOW,b):xa(a,function(a){return vc(a,b)}):a}function xc(a){a=a||document;var b=a.$wdc_;b||(b=a.$wdc_={},b.B=ia());b.B||(b.B=ia());return b}function uc(a){var b=xc(a.ownerDocument),c=ya(b,function(b){return b==a});c||(c=":wdc:"+b.B++,b[c]=a);return c}
function wc(a,b){a=decodeURIComponent(a);b=b||document;var c=xc(b);if(!v(c,a))throw new n(10,"Element does not exist in cache");var d=c[a];if(v(d,"setInterval")){if(d.closed)throw delete c[a],new n(23,"Window has been closed.");return d}for(var e=d;e;){if(e==b.documentElement)return d;e=e.parentNode}delete c[a];throw new n(10,"Element is no longer attached to the DOM");};aa("_",function(a){a=[a];var b=lc,c=window||ka;try{a:{var d=b;if(k(d))try{b=new c.Function(d);break a}catch(g){if(w&&c.execScript){c.execScript(";");b=new c.Function(d);break a}throw g;}b=c==window?d:new c.Function("return ("+d+").apply(null,arguments);")}var e=vc(a,c.document);var f={status:0,value:tc(b.apply(null,e))}}catch(g){f={status:v(g,"code")?g.code:13,value:{message:g.message}}}e=[];nc(new mc,f,e);return e.join("")});; return this._.apply(null,arguments);}.apply({navigator:typeof window!='undefined'?window.navigator:null,document:typeof window!='undefined'?window.document:null}, arguments);}
