module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=7)}([function(t,e){t.exports=flarum.core.compat["forum/app"]},,function(t,e){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"]},function(t,e){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"]},function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["common/utils/string"]},function(t,e,o){"use strict";var n=o(2),r=o.n(n);function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var i=o(3),u=o.n(i),a=o(0),c=o.n(a),f=o(4),l=o.n(f),p=o(5),d=function(t){var e,o;function n(){return t.apply(this,arguments)||this}o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,s(e,o);var r=n.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!0},r.oncreate=function(t){var e=this,o=c.a.forum.attribute("justoverclock-last-users-posts.postLimit")||10;c.a.store.find("posts",{isApproved:!0,sort:"-createdAt",page:{limit:o}}).then((function(t){e.post=t,e.loading=!1,m.redraw()}))},r.className=function(){return"lastposts-widget"},r.icon=function(){return"fas fa-edit"},r.title=function(){return c.a.translator.trans("justoverclock-last-users-posts.forum.widget-title")},r.content=function(){if(this.loading)return m(l.a,null);var t=c.a.forum.attribute("justoverclock-last-users-posts.CharLength")||80;return m("div",{className:"last-posts-content"},m("ul",{className:"lastpostwidget fa-ul"},this.post.map((function(e){return m("p",{class:"lastpostwdg"},m("i",{class:"fas fa-user-edit postwdgicon"}),Object(p.truncate)(e.content(),t,0))}))))},n}(u.a);e.a=function(t){(new r.a).add({key:"LastPostWidget",component:d,isDisabled:!1,isUnique:!0,placement:"end",position:1}).extend(t,"justoverclock-last-users-posts")}},function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),s=o(6);r.a.initializers.add("justoverclock/last-users-posts",(function(){Object(s.a)(r.a)}))}]);
//# sourceMappingURL=forum.js.map