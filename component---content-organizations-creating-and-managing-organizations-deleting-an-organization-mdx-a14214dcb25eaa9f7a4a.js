(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),l=n("aOgs"),i=n("q1tI"),r=n.n(i),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),u=n("ReZb"),b=n("GCVy"),d=n("+6vE");var p=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return r.a.createElement("strong",null,t)},h=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),E=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function j(e){var t=e.items,n=e.depth;return r.a.createElement(E,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(j,{items:e.items,depth:n+1}):null)})))}j.defaultProps={depth:0};var k=j,w=n("MfeC");function x(e){var t=w.a.getPath(e.location.pathname),n=w.a.getVariantAndPage(e.root,t);if(!n)return null;var a=w.a.getVariantsForPage(e.root,n.page),l=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),l.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,i.variant.title),r.a.createElement(x.Menu,{direction:e.direction,width:e.menuWidth},l)))}x.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=x,z=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),_=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),N=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),C=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,E=i.title,j=i.description,x=i.status,F=i.source,H=i.additionalContributors,P=void 0===H?[]:H,D=w.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:u.a,Note:b.a,Prompt:p,PromptReply:g,Screenshot:h.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:E,description:j}),r.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(z,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),r.a.createElement(_,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(N,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},E),j))),null!=D?r.a.createElement(C,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:D,location:a})):null),n.tableOfContents.items?r.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(k,{items:n.tableOfContents.items})):null,r.a.createElement(I,null,x||F?r.a.createElement(o.k,{mb:3,alignItems:"center"},x?r.a.createElement(O.a,{status:x}):null,r.a.createElement(o.e,{mx:"auto"}),F?r.a.createElement(y.a,{href:F}):null):null,n.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:l.b,mr:2}):r.a.createElement(o.r,{icon:l.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(P.map((function(e){return{login:e}})))}))))))}},fQN9:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return d}));var a,o=n("zLVn"),l=n("q1tI"),i=n("7ljp"),r=n("O6H6"),c=n("4LHR"),m={},s=(a="Screenshot",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),u={_frontmatter:m},b=r.a;function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(b,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An organization administrator can delete the organization; packages in\nthe organization will also ",Object(i.b)("a",{parentName:"p",href:"/unpublishing-packages-from-the-registry"},"be deleted")," if they fulfill the\n",Object(i.b)("a",{parentName:"p",href:"/policies/unpublish"},"requirements to unpublish packages"),".  Packages that\ncannot be deleted can be\n",Object(i.b)("a",{parentName:"p",href:"/deprecating-and-undeprecating-packages-or-package-versions"},"deprecated"),"\ninstead."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)(l.Fragment,null,c.a["user-login"].text),Object(i.b)(l.Fragment,null,c.a["user-login"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)(l.Fragment,null,c.a["account-settings"].text),Object(i.b)(l.Fragment,null,c.a["account-settings"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the left sidebar, click the name of the organization that you want to delete."),Object(i.b)(s,{src:"/organizations/creating-and-managing-organizations/left-sidebar.png",alt:"Screenshot of left sidebar",mdxType:"Screenshot"})),Object(i.b)("li",{parentName:"ol"},Object(i.b)(l.Fragment,null,c.a["organization-billing-tab"].text),Object(i.b)(l.Fragment,null,c.a["organization-billing-tab"].image)),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'Under "delete organization", click ',Object(i.b)("strong",null,"Delete"),"."),Object(i.b)(s,{src:"/organizations/creating-and-managing-organizations/org-delete-button.png",alt:"Screenshot of org delete button",mdxType:"Screenshot"})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You will be given an overview of the packages in your organization and what will happen to them when your organization is deleted.  Packages that ",Object(i.b)("a",{parentName:"p",href:"/unpublishing-packages-from-the-registry"},"can be unpublished")," will be deleted."),Object(i.b)("p",{parentName:"li"},"If you are sure that you want to continue, enter your organization name and click ",Object(i.b)("strong",null,"Delete this organization"),"."),Object(i.b)(s,{src:"/organizations/creating-and-managing-organizations/org-delete-plan.png",alt:"Screenshot of org delete plan",mdxType:"Screenshot"}))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-organizations-creating-and-managing-organizations-deleting-an-organization-mdx-a14214dcb25eaa9f7a4a.js.map