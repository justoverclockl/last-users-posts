module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=9)}([function(t,e){t.exports=flarum.core.compat["forum/app"]},function(t,e){t.exports=flarum.core.compat["admin/app"]},function(t,e){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/extend/Widgets"]},function(t,e){t.exports=flarum.core.compat["extensions/afrux-forum-widgets-core/common/components/Widget"]},function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["common/utils/string"]},function(t,e){t.exports=flarum.core.compat["common/components/Separator"]},function(t,e,o){"use strict";var r=o(2),n=o.n(r);function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var a=o(3),i=o.n(a),c=o(0),u=o.n(c),l=o(4),p=o.n(l),f=o(5),d=o(6),g=o.n(d),v=function(t){var e,o;function r(){return t.apply(this,arguments)||this}o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,s(e,o);var n=r.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!0},n.oncreate=function(t){var e=this,o=u.a.forum.attribute("justoverclock-last-users-posts.postLimit")||10;u.a.store.find("posts",{isApproved:!0,exists:!0,sort:"-createdAt",page:{limit:o},filter:{type:"comment"}}).then((function(t){e.post=t,e.loading=!1,m.redraw()}))},n.className=function(){return"lastposts-widget"},n.icon=function(){return"fas fa-edit"},n.title=function(){return u.a.translator.trans("justoverclock-last-users-posts.forum.widget-title")},n.content=function(){if(this.loading)return m(p.a,null);var t=u.a.forum.attribute("justoverclock-last-users-posts.CharLength")||80;return m("div",{className:"last-posts-content"},m("ul",{className:"lastpostwidget fa-ul"},this.post.map((function(e){return m("li",{class:"lastpostwdg"},m("i",{class:"fas fa-user-edit postwdgicon"}),m("a",{href:u.a.route.post(e),class:"postlinkwg"},Object(f.truncate)(e.contentHtml().replace(/<\/?[^>]+(>|$)/g,""),t,0)),g.a.component())}))))},r}(i.a);e.a=function(t){(new n.a).add({key:"LastPostWidget",component:v,isDisabled:!1,isUnique:!0,placement:"end",position:1}).extend(t,"justoverclock-last-users-posts")}},,function(t,e,o){"use strict";o.r(e);var r=o(1),n=o.n(r),s=o(7);n.a.initializers.add("justoverclock/last-users-posts",(function(){Object(s.a)(n.a),n.a.extensionData.for("justoverclock-last-users-posts").registerSetting({setting:"justoverclock-last-users-posts.postLimit",name:"justoverclock-last-users-posts.postLimit",type:"number",label:n.a.translator.trans("justoverclock-last-users-posts.admin.limit"),help:n.a.translator.trans("justoverclock-last-users-posts.admin.limit-help")}).registerSetting({setting:"justoverclock-last-users-posts.CharLength",name:"justoverclock-last-users-posts.CharLength",type:"number",label:n.a.translator.trans("justoverclock-last-users-posts.admin.charlength"),help:n.a.translator.trans("justoverclock-last-users-posts.admin.charlength-help")})}))}]);
//# sourceMappingURL=admin.js.map