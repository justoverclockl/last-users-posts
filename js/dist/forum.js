module.exports=function(t){var o={};function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)e.d(n,r,function(o){return t[o]}.bind(null,r));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=10)}([function(t,o){t.exports=flarum.core.compat["forum/app"]},,function(t,o){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"]},function(t,o){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"]},function(t,o){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,o){t.exports=flarum.core.compat["common/utils/string"]},function(t,o){t.exports=flarum.core.compat["common/components/Link"]},function(t,o){t.exports=flarum.core.compat["common/helpers/avatar"]},function(t,o){t.exports=flarum.core.compat["common/components/Tooltip"]},function(t,o,e){"use strict";var n=e(2),r=e.n(n);function s(t,o){return(s=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}var c=e(3),a=e.n(c),i=e(0),u=e.n(i),l=e(4),p=e.n(l),f=e(5),d=e(6),g=e.n(d),v=e(7),y=e.n(v),x=e(8),b=e.n(x),j=function(t){var o,e;function n(){return t.apply(this,arguments)||this}e=t,(o=n).prototype=Object.create(e.prototype),o.prototype.constructor=o,s(o,e);var r=n.prototype;return r.oninit=function(o){t.prototype.oninit.call(this,o),this.loading=!0},r.oncreate=function(t){var o=this,e=u.a.forum.attribute("justoverclock-last-users-posts.postLimit")||10;u.a.store.find("posts",{sort:"-createdAt",include:"discussion,user",page:{limit:e},filter:{type:"comment"}}).then((function(t){o.post=t,o.loading=!1,m.redraw()}))},r.className=function(){return"lastposts-widget"},r.icon=function(){return"fas fa-edit"},r.title=function(){return u.a.translator.trans("justoverclock-last-users-posts.forum.widget-title")},r.content=function(){if(this.loading)return m(p.a,null);var t=u.a.forum.attribute("justoverclock-last-users-posts.CharLength")||80;return m("div",{className:"last-posts-content"},m("ul",{className:"lastpostwidget fa-ul"},this.post.map((function(o){return m("li",{class:"lastpostwdg"},console.log(o),m("div",{class:"postAvatarWdg"},m(b.a,{text:o.user().displayName()},y()(o.user()))),m(g.a,{href:u.a.route.post(o),className:"postlinkwg"},Object(f.truncate)(o.contentHtml().slice(3).replace(/(<\/?[^>]+(>|$))+/g,"💻"),t,0)))}))))},n}(a.a);o.a=function(t){(new r.a).add({key:"LastPostWidget",component:j,isDisabled:!1,isUnique:!0,placement:"end",position:1}).extend(t,"justoverclock-last-users-posts")}},function(t,o,e){"use strict";e.r(o);var n=e(0),r=e.n(n),s=e(9);r.a.initializers.add("justoverclock/last-users-posts",(function(){Object(s.a)(r.a)}))}]);
//# sourceMappingURL=forum.js.map