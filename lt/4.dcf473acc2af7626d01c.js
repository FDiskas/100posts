(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{XxUk:function(t,c,e){"use strict";e.r(c),e.d(c,"PostsModule",(function(){return k}));var n=e("ofXK"),o=e("Wp6s"),s=e("zkoq"),i=e("STbY"),a=e("tyNb"),r=e("mrSG"),b=e("lJxs"),l=e("0MNC"),p=e("R0Ic"),d=e("fXoL"),g=e("tk/3"),u=e("L7HW");let f=(()=>{class t{constructor(t,c){this.http=t,this.configService=c}getData(){return this.http.get(this.configService.postsApiUrl)}}return t.\u0275fac=function(c){return new(c||t)(d.Ub(g.b),d.Ub(u.a))},t.\u0275prov=d.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function O(t,c){if(1&t){const t=d.Qb();d.Pb(0,"mat-card",8),d.Xb("click",(function(){d.jc(t);const c=d.bc().$implicit;return d.bc().toggleId(c.id)})),d.Pb(1,"mat-card-title-group",9),d.Pb(2,"mat-card-subtitle"),d.Tb(3,10),d.Ob(),d.Ob(),d.Pb(4,"mat-card-content",11),d.Pb(5,"h1",12),d.sc(6),d.Ob(),d.Ob(),d.Ob()}if(2&t){const t=d.bc().$implicit;d.gc("@inOutAnimation",void 0),d.zb(6),d.tc(t.id)}}function h(t,c){if(1&t){const t=d.Qb();d.Pb(0,"mat-card",13),d.Xb("click",(function(){d.jc(t);const c=d.bc().$implicit;return d.bc().toggleId(c.id)})),d.Pb(1,"mat-card-title-group",9),d.Pb(2,"mat-card-subtitle"),d.Tb(3,14),d.Ob(),d.Ob(),d.Pb(4,"mat-card-content",11),d.Pb(5,"h1",12),d.sc(6),d.Ob(),d.Ob(),d.Ob()}if(2&t){const t=d.bc().$implicit;d.gc("@inOutAnimation",void 0),d.zb(6),d.tc(t.userId)}}function m(t,c){if(1&t&&(d.Pb(0,"mat-grid-tile",5),d.rc(1,O,7,2,"mat-card",6),d.rc(2,h,7,2,"mat-card",7),d.Ob()),2&t){const t=c.$implicit,e=d.bc();d.gc("colspan",t.cols)("rowspan",t.rows),d.zb(1),d.gc("ngIf",!e.showUserID[t.id]),d.zb(1),d.gc("ngIf",e.showUserID[t.id])}}const P=[{path:"",component:(()=>{class t{constructor(t,c){this.breakpointObserver=t,this.posts=c,this.showUserID={},this.setData=t=>{this.postsData=this.breakpointObserver.observe([l.b.XSmall,l.b.Small]).pipe(Object(b.a)(({matches:c})=>t.map(c?t=>Object.assign(Object.assign({},t),{cols:10,rows:1}):t=>Object.assign(Object.assign({},t),{cols:1,rows:1}))))},this.getData=()=>Object(r.a)(this,void 0,void 0,(function*(){return this.postsData})),this.toggleId=t=>{this.showUserID[t]=!this.showUserID[t]},this.posts.getData().subscribe(t=>{this.setData(t)})}}return t.\u0275fac=function(c){return new(c||t)(d.Kb(l.a),d.Kb(f))},t.\u0275cmp=d.Eb({type:t,selectors:[["app-posts"]],decls:6,vars:3,consts:function(){return[[1,"grid-container"],[1,"mat-h1"],"Posts",["cols","10","rowHeight","150px"],[3,"colspan","rowspan",4,"ngFor","ngForOf"],[3,"colspan","rowspan"],["class","card",3,"click",4,"ngIf"],["class","card back",3,"click",4,"ngIf"],[1,"card",3,"click"],[1,"card-title"],"Straipsnio ID",[1,"card-content"],[1,"mat-display-1"],[1,"card","back",3,"click"],"Vartotojo ID"]},template:function(t,c){1&t&&(d.Pb(0,"div",0),d.Pb(1,"h1",1),d.Tb(2,2),d.Ob(),d.Pb(3,"mat-grid-list",3),d.rc(4,m,3,4,"mat-grid-tile",4),d.cc(5,"async"),d.Ob(),d.Ob()),2&t&&(d.zb(4),d.gc("ngForOf",d.dc(5,1,c.postsData)))},directives:[s.a,n.j,s.c,n.k,o.a,o.e,o.d,o.b],pipes:[n.b],styles:["[_nghost-%COMP%]   .grid-container[_ngcontent-%COMP%]{margin:20px}[_nghost-%COMP%]   .card[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;user-select:none;position:absolute;top:15px;left:15px;right:15px;bottom:15px;display:flex;flex-direction:column}[_nghost-%COMP%]   .card.back[_ngcontent-%COMP%]{background-color:silver}[_nghost-%COMP%]   .card-title[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}[_nghost-%COMP%]   .more-button[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px}[_nghost-%COMP%]   .card-content[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;align-self:center}"],data:{animation:[Object(p.m)("inOutAnimation",[Object(p.l)(":enter",[Object(p.k)({opacity:0}),Object(p.e)("0.3s ease-out",Object(p.k)({opacity:1}))]),Object(p.l)(":leave",[Object(p.k)({opacity:1}),Object(p.e)("0.3s ease-in",Object(p.k)({opacity:0}))])])]}}),t})()}];let w=(()=>{class t{}return t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({factory:function(c){return new(c||t)},imports:[[a.c.forChild(P)],a.c]}),t})(),k=(()=>{class t{}return t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({factory:function(c){return new(c||t)},providers:[],imports:[[n.c,w,s.b,o.c,i.b]]}),t})()}}]);