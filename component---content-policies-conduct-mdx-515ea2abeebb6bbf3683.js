(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),i=n("aOgs"),r=n("q1tI"),l=n.n(r),s=n("7ljp"),c=n("pD55"),p=n("8Aig"),u=n("ReZb"),m=n("GCVy"),d=n("+6vE");var b=function(e){var t=e.children;return l.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},l.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return l.a.createElement("strong",null,t)},f=n("gnlW"),y=n("mwnC"),g=n("/Rw0"),v=n("dVM4"),j=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function O(e){var t=e.items,n=e.depth;return l.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},l.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(O,{items:e.items,depth:n+1}):null)})))}O.defaultProps={depth:0};var w=O,k=n("MfeC");function E(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),i=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),i.push(l.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),l.a.createElement(o.i,{overlay:e.overlay},l.a.createElement(o.i.Button,null,r.variant.title),l.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},i)))}E.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=E,x=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),N=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),_=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),A=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,j=r.title,O=r.description,E=r.status,P=r.source,T=r.additionalContributors,W=void 0===T?[]:T,z=k.a.getVariantRoot(a.pathname);return l.a.createElement(s.a,{components:{Index:u.a,Note:m.a,Prompt:b,PromptReply:h,Screenshot:f.a}},l.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(c.a,{title:j,description:O}),l.a.createElement(p.b,{location:a,isSearchEnabled:n.isSearchEnabled}),l.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(o.e,{display:["none",null,null,"block"]},l.a.createElement(y.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),l.a.createElement(N,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(I,null,l.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(o.e,null,l.a.createElement(o.e,null,l.a.createElement(o.m,{as:"h1"},j),O))),null!=z?l.a.createElement(S,null,l.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:a})):null),n.tableOfContents.items?l.a.createElement(_,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},l.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(w,{items:n.tableOfContents.items})):null,l.a.createElement(A,null,E||P?l.a.createElement(o.k,{mb:3,alignItems:"center"},E?l.a.createElement(v.a,{status:E}):null,l.a.createElement(o.e,{mx:"auto"}),P?l.a.createElement(g.a,{href:P}):null):null,n.tableOfContents.items?l.a.createElement(o.e,{display:["block",null,"none"],mb:3},l.a.createElement(o.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?l.a.createElement(o.r,{icon:i.b,mr:2}):l.a.createElement(o.r,{icon:i.c,mr:2}),"Table of contents"),l.a.createElement(o.e,{pt:1},l.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,l.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},"fR/i":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("O6H6"),r={},l={_frontmatter:r},s=i.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(s,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"npm exists to facilitate sharing code, by making it easy for\nJavaScript module developers to publish and distribute packages."),Object(o.b)("p",null,"npm is a piece of technology, but more importantly, it is a community."),Object(o.b)("p",null,"We believe that our mission is best served in an environment that is\nfriendly, safe, and accepting; free from intimidation or harassment."),Object(o.b)("p",null,"Towards this end, certain behaviors and practices will not be\ntolerated."),Object(o.b)("h2",null,"tl;dr"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Be respectful."),Object(o.b)("li",{parentName:"ul"},"We're here to help"),Object(o.b)("li",{parentName:"ul"},"Abusive behavior is never tolerated."),Object(o.b)("li",{parentName:"ul"},"Data published to npm is hosted at the discretion of the service\nadministrators, and may be removed."),Object(o.b)("li",{parentName:"ul"},"Violations of this code may result in swift and permanent expulsion\nfrom the npm community.")),Object(o.b)("h2",null,"Scope"),Object(o.b)("p",null,"We expect all members of the npm community, including paid and unpaid\nagents, administrators, users, and customers of npm, Inc., to abide by\nthis Code of Conduct at all times in all npm community venues, online\nand in person, and in one-on-one communications pertaining to npm\naffairs."),Object(o.b)("p",null,'This policy covers the usage of the npm registry, as well as the npm\nwebsite, npm related events, and any other services offered by or on\nbehalf of npm, Inc. (collectively, the "Service").  It also applies to\nbehavior in the context of the npm Open Source project communities,\nincluding but not limited to public GitHub repositories, IRC channels,\nsocial media, mailing lists, and public events.'),Object(o.b)("p",null,"This Code of Conduct is in addition to, and does not in any way\nnullify or invalidate, any other terms or conditions related to use of\nthe Service."),Object(o.b)("p",null,'The definitions of various subjective terms such as "discriminatory",\n"hateful", or "confusing" will be decided at the sole discretion of\nthe npm abuse team.'),Object(o.b)("h2",null,"Friendly Harassment-Free Space"),Object(o.b)("p",null,"We are committed to providing a friendly, safe and welcoming\nenvironment for all, regardless of gender identity, sexual\norientation, ability, ethnicity, religion, age, physical\nappearance, body size, race, or similar personal characteristics."),Object(o.b)("p",null,"We ask that you please respect that people have differences of opinion\nregarding technical choices, and that every design or implementation\nchoice carries a trade-off and numerous costs.  There is seldom a\nsingle right answer.  A difference of technology preferences is not a\nlicense to be rude."),Object(o.b)("p",null,"Disputes over package rights must be handled respectfully, according\nto the terms described in the ",Object(o.b)("a",{parentName:"p",href:"/policies/disputes"},"Disputes Policy"),".\nThere is never a good reason to be rude over package name disputes."),Object(o.b)("p",null,"Any spamming, trolling, flaming, baiting, or other attention-stealing\nbehavior is not welcome, and will not be tolerated."),Object(o.b)("p",null,"Harassing other users of the Service is never tolerated, whether via\npublic or private media."),Object(o.b)("p",null,"Avoid using offensive or harassing package names, nicknames, or other\nidentifiers that might detract from a friendly, safe, and welcoming\nenvironment for all."),Object(o.b)("p",null,"Harassment includes, but is not limited to: harmful or prejudicial\nverbal or written comments related to gender identity, sexual\norientation, ability, ethnicity, religion, age, physical\nappearance, body size, race, or similar personal characteristics;\ninappropriate use of nudity, sexual images, and/or sexually explicit\nlanguage in public spaces; threats of physical or non-physical harm;\ndeliberate intimidation, stalking or following; harassing photography\nor recording; sustained disruption of talks or other events;\ninappropriate physical contact; and unwelcome sexual attention."),Object(o.b)("h2",null,"Acceptable Use"),Object(o.b)("p",null,"The Service administrators reserve the right to make judgment calls\nabout what is and isn't appropriate in published packages, package names,\nuser and organization names, and other public content. Package that\nviolates the npm Service's\n",Object(o.b)("a",{parentName:"p",href:"/policies/open-source-terms#acceptable-use"},"Acceptable Use"),"\nrules including its\n",Object(o.b)("a",{parentName:"p",href:"/policies/open-source-terms#acceptable-content"},"Acceptable Content"),"\nrules will be deleted, at the discretion of npm."),Object(o.b)("h2",null,"Reporting Violations of this Code of Conduct"),Object(o.b)("p",null,"Please select the method of contact you think is most appropriate for\nthe form of violation:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For urgent security issues, please open a ticket at ",Object(o.b)("a",{parentName:"p",href:"https://npmjs.com/support"},"https://npmjs.com/support"),".\nRequests to un-publish packages are not usually considered urgent security\nissues, as it is possible to ",Object(o.b)("a",{parentName:"p",href:"/policies/unpublish"},"un-publish a package"),"\nwithin 24 hours of its first publish. Any publicly published package\nis ",Object(o.b)("a",{parentName:"p",href:"http://blog.npmjs.org/post/101934969510/oh-no-i-accidentally-published-private-data-to"},"immediately replicated to thousands of third-party mirrors"),",\nso any confidential information contained in a package should be considered\nimmediately compromised.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you believe someone is harassing you or is demonstrating\nsome other form of malicious or inappropriate behavior, open a support\nticket at ",Object(o.b)("a",{parentName:"p",href:"https://npmjs.com/support"},"https://npmjs.com/support"),". If this is the initial report of a problem,\nplease include as much detail as possible. It is easiest for us\nto address issues when we have more context.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you have concerns about a potential copyright violation,\nplease refer to our ",Object(o.b)("a",{parentName:"p",href:"/policies/dmca"},"Copyright Policy"),"\nand take action as recommended by that policy.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'If you think a package or other content is "squatting" on a name,\nfollow the process described in the\n',Object(o.b)("a",{parentName:"p",href:"/policies/disputes"},"Disputes Policy"),"."))),Object(o.b)("p",null,"For any other issues, or if in doubt, ",Object(o.b)("a",{parentName:"p",href:"https://npmjs.com/support"},"contact support"),"."),Object(o.b)("h2",null,"Consequences"),Object(o.b)("p",null,"All content published to the Service, including user account\ncredentials, is hosted at the sole discretion of the npm\nadministrators."),Object(o.b)("p",null,"Unacceptable behavior from any community member, including sponsors,\nemployees, customers, or others with decision-making authority, will\nnot be tolerated."),Object(o.b)("p",null,"Anyone asked to stop unacceptable behavior is expected to comply\nimmediately."),Object(o.b)("p",null,"If a community member engages in unacceptable behavior, the npm\nadministrators may take any action they deem appropriate, up to and\nincluding a temporary ban or permanent expulsion from the community\nwithout warning (and without refund in the case of a paid event or\nservice)."),Object(o.b)("h2",null,"Addressing Grievances"),Object(o.b)("p",null,"If you feel you have been falsely or unfairly accused of violating\nthis Code of Conduct, you should notify npm, Inc.  We will do our best\nto ensure that your grievance is handled appropriately."),Object(o.b)("p",null,"In general, we will choose the course of action that we judge as being\nmost in the interest of fostering a safe and friendly community."),Object(o.b)("h2",null,"Contact Info"),Object(o.b)("p",null,"Please open a support ticket at ",Object(o.b)("a",{parentName:"p",href:"https://npmjs.com/support"},"https://npmjs.com/support")," if you need to\nreport a problem or address a grievance related to an abuse report."),Object(o.b)("p",null,'You are also encouraged to contact us if you are curious about\nsomething that might be "on the line" between appropriate and\ninappropriate content.  We are happy to provide guidance to help you\nbe a successful part of our community.'),Object(o.b)("h2",null,"Changes"),Object(o.b)("p",null,"This is a living document and may be updated from time to time.\nPlease refer to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/npm/documentation/blob/main/content/policies/conduct.mdx"},"git history for this\ndocument"),"\nto view the changes."),Object(o.b)("h2",null,"Credit and License"),Object(o.b)("p",null,"This Code of Conduct borrows heavily from the Stumptown Syndicate\n",Object(o.b)("a",{parentName:"p",href:"http://citizencodeofconduct.org/"},"Citizen's Code of Conduct"),", and the\n",Object(o.b)("a",{parentName:"p",href:"https://www.rust-lang.org/conduct.html"},"Rust Project Code of\nConduct"),"."),Object(o.b)("p",null,"This document may be reused under a ",Object(o.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-sa/4.0/"},"Creative Commons\nAttribution-ShareAlike\nLicense"),"."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-policies-conduct-mdx-515ea2abeebb6bbf3683.js.map