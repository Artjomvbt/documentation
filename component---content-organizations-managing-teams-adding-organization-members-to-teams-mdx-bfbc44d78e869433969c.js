(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),r=n("aOgs"),l=n("q1tI"),i=n.n(l),m=n("7ljp"),c=n("pD55"),b=n("8Aig"),s=n("ReZb"),u=n("GCVy"),d=n("+6vE");var p=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return i.a.createElement("strong",null,t)},f=n("gnlW"),h=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,n=e.depth;return i.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var x=E,v=n("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),r=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),r.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,l.variant.title),i.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},r)))}w.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=w,N=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),z=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),C=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,j=l.title,E=l.description,w=l.status,F=l.source,M=l.additionalContributors,T=void 0===M?[]:M,A=v.a.getVariantRoot(a.pathname);return i.a.createElement(m.a,{components:{Index:s.a,Note:u.a,Prompt:p,PromptReply:g,Screenshot:f.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(c.a,{title:j,description:E}),i.a.createElement(b.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(N,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(h.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),i.a.createElement(z,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(C,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},j),E))),null!=A?i.a.createElement(_,null,i.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:A,location:a})):null),n.tableOfContents.items?i.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(x,{items:n.tableOfContents.items})):null,i.a.createElement(S,null,w||F?i.a.createElement(o.k,{mb:3,alignItems:"center"},w?i.a.createElement(O.a,{status:w}):null,i.a.createElement(o.e,{mx:"auto"}),F?i.a.createElement(y.a,{href:F}):null):null,n.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:r.b,mr:2}):i.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(x,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(T.map((function(e){return{login:e}})))}))))))}},Rpz8:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),o=n("q1tI"),r=n("7ljp"),l=n("O6H6"),i=n("4LHR"),m={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},b=c("Note"),s=c("Screenshot"),u={_frontmatter:m},d=l.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(d,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As an organization owner or team admin, you can add organization members to teams to give them access to a specific set of packages governed by the organization."),Object(r.b)(b,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:"),' An npm user must be a member of your organization before you can add them to a team. To add a member to your organization, see "',Object(r.b)("a",{parentName:"p",href:"adding-members-to-your-organization"},"Adding members to your organization"),'".')),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,i.a["user-login"].text),Object(r.b)(o.Fragment,null,i.a["user-login"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,i.a["profile-settings"].text),Object(r.b)(o.Fragment,null,i.a["profile-settings"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,i.a["organization-selection"].text),Object(r.b)(o.Fragment,null,i.a["organization-selection"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,i.a["organization-teams-tab"].text),Object(r.b)(o.Fragment,null,i.a["organization-teams-tab"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Beside the team you want to add members to, click ",Object(r.b)("strong",{parentName:"p"},"Members"),"."),Object(r.b)(s,{src:"/organizations/managing-teams/team-members.png",alt:"Screenshot of the team members button",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'In the "Username" field, type the npm username of the organization member you would like to add to your team.'),Object(r.b)(s,{src:"/organizations/managing-teams/team-member-select.png",alt:"Screenshot of the team member selection",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"+ Add User"),"."),Object(r.b)(s,{src:"/organizations/managing-teams/team-member-add-button.png",alt:"Screenshot of the team member add button",mdxType:"Screenshot"}))),Object(r.b)(b,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," organization members are not notified when they are added to a team. We recommend telling the organization member you have added them to a team.")),Object(r.b)("h2",null,"Managing teams from the CLI"),Object(r.b)("p",null,"If you would like to manage the membership of your team from\nthe command line interface (CLI), you can use:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"npm team\n")),Object(r.b)("p",null,"For more information, see the ",Object(r.b)("a",{parentName:"p",href:"/cli/team"},"CLI documentation on teams"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-organizations-managing-teams-adding-organization-members-to-teams-mdx-bfbc44d78e869433969c.js.map