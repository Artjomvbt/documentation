(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{O6H6:function(e,n,t){"use strict";var a=t("vOnD"),l=t("u9kb"),i=t("aOgs"),o=t("q1tI"),p=t.n(o),r=t("7ljp"),b=t("pD55"),c=t("8Aig"),s=t("ReZb"),d=t("GCVy"),m=t("+6vE");var u=function(e){var n=e.children;return p.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},p.a.createElement(l.s,{fontFamily:"mono",fontSize:1},n))};var j=function(e){var n=e.children;return p.a.createElement("strong",null,n)},O=t("gnlW"),h=t("mwnC"),f=t("/Rw0"),N=t("dVM4"),g=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function C(e){var n=e.items,t=e.depth;return p.a.createElement(g,{key:n,as:"ul",m:0,p:0},n.map((function(e){return p.a.createElement(l.e,{as:"li",key:e.url,pl:t>0?3:0},p.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?p.a.createElement(C,{items:e.items,depth:t+1}):null)})))}C.defaultProps={depth:0};var y=C,w=t("MfeC");function k(e){var n=w.a.getPath(e.location.pathname),t=w.a.getVariantAndPage(e.root,n);if(!t)return null;var a=w.a.getVariantsForPage(e.root,t.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(o=e),i.push(p.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),p.a.createElement(l.i,{overlay:e.overlay},p.a.createElement(l.i.Button,null,o.variant.title),p.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},i)))}k.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=k,E=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),_=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),D=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,o=t.frontmatter,g=o.title,C=o.description,k=o.status,S=o.source,B=o.additionalContributors,W=void 0===B?[]:B,z=w.a.getVariantRoot(a.pathname);return p.a.createElement(r.a,{components:{Index:s.a,Note:d.a,Prompt:u,PromptReply:j,Screenshot:O.a}},p.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},p.a.createElement(b.a,{title:g,description:C}),p.a.createElement(c.b,{location:a,isSearchEnabled:t.isSearchEnabled}),p.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},p.a.createElement(l.e,{display:["none",null,null,"block"]},p.a.createElement(h.a,{editOnGitHub:t.themeOptions.showSidebarEditLink&&t.themeOptions.editOnGitHub,location:a})),p.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},p.a.createElement(T,null,p.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},p.a.createElement(l.e,null,p.a.createElement(l.e,null,p.a.createElement(l.m,{as:"h1"},g),C))),null!=z?p.a.createElement(I,null,p.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:a})):null),t.tableOfContents.items?p.a.createElement(_,{display:["none",null,"block"],position:"sticky",top:c.a+24,mt:"6px",maxHeight:"calc(100vh - "+c.a+"px - 24px)"},p.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),p.a.createElement(y,{items:t.tableOfContents.items})):null,p.a.createElement(D,null,k||S?p.a.createElement(l.k,{mb:3,alignItems:"center"},k?p.a.createElement(N.a,{status:k}):null,p.a.createElement(l.e,{mx:"auto"}),S?p.a.createElement(f.a,{href:S}):null):null,t.tableOfContents.items?p.a.createElement(l.e,{display:["block",null,"none"],mb:3},p.a.createElement(l.h,null,(function(e){var n=e.open;return p.a.createElement(p.a.Fragment,null,p.a.createElement(l.s,{as:"summary",fontWeight:"bold"},n?p.a.createElement(l.r,{icon:i.b,mr:2}):p.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),p.a.createElement(l.e,{pt:1},p.a.createElement(y,{items:t.tableOfContents.items})))}))):null,n,p.a.createElement(m.a,{editOnGitHub:t.themeOptions.editOnGitHub,editUrl:t.editUrl,contributors:t.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},ZTFU:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return b}));var a=t("zLVn"),l=(t("q1tI"),t("7ljp")),i=t("O6H6"),o={},p={_frontmatter:o},r=i.a;function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(r,Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm update [<pkg>...]\n\naliases: up, upgrade, udpate\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This command will update all the packages listed to the latest version\n(specified by the ",Object(l.b)("inlineCode",{parentName:"p"},"tag")," config), respecting the semver constraints of\nboth your package and its dependencies (if they also require the same\npackage)."),Object(l.b)("p",null,"It will also install missing packages."),Object(l.b)("p",null,"If the ",Object(l.b)("inlineCode",{parentName:"p"},"-g")," flag is specified, this command will update globally installed\npackages."),Object(l.b)("p",null,"If no package name is specified, all packages in the specified location (global\nor local) will be updated."),Object(l.b)("p",null,"Note that by default ",Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will not update the semver values of direct\ndependencies in your project ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),", if you want to also update\nvalues in ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," you can run: ",Object(l.b)("inlineCode",{parentName:"p"},"npm update --save")," (or add the\n",Object(l.b)("inlineCode",{parentName:"p"},"save=true")," option to a ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/configuring-npm/npmrc"},"configuration file"),"\nto make that the default behavior)."),Object(l.b)("h3",null,"Example"),Object(l.b)("p",null,"For the examples below, assume that the current package is ",Object(l.b)("inlineCode",{parentName:"p"},"app")," and it depends\non dependencies, ",Object(l.b)("inlineCode",{parentName:"p"},"dep1")," (",Object(l.b)("inlineCode",{parentName:"p"},"dep2"),", .. etc.).  The published versions of ",Object(l.b)("inlineCode",{parentName:"p"},"dep1"),"\nare:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "dist-tags": { "latest": "1.2.2" },\n  "versions": [\n    "1.2.2",\n    "1.2.1",\n    "1.2.0",\n    "1.1.2",\n    "1.1.1",\n    "1.0.0",\n    "0.4.1",\n    "0.4.0",\n    "0.2.0"\n  ]\n}\n')),Object(l.b)("h4",null,"Caret Dependencies"),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"app"),"'s ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," contains:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "dep1": "^1.1.1"\n}\n')),Object(l.b)("p",null,"Then ",Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will install ",Object(l.b)("inlineCode",{parentName:"p"},"dep1@1.2.2"),", because ",Object(l.b)("inlineCode",{parentName:"p"},"1.2.2")," is ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," and\n",Object(l.b)("inlineCode",{parentName:"p"},"1.2.2")," satisfies ",Object(l.b)("inlineCode",{parentName:"p"},"^1.1.1"),"."),Object(l.b)("h4",null,"Tilde Dependencies"),Object(l.b)("p",null,"However, if ",Object(l.b)("inlineCode",{parentName:"p"},"app"),"'s ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," contains:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "dep1": "~1.1.1"\n}\n')),Object(l.b)("p",null,"In this case, running ",Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will install ",Object(l.b)("inlineCode",{parentName:"p"},"dep1@1.1.2"),".  Even though the\n",Object(l.b)("inlineCode",{parentName:"p"},"latest")," tag points to ",Object(l.b)("inlineCode",{parentName:"p"},"1.2.2"),", this version do not satisfy ",Object(l.b)("inlineCode",{parentName:"p"},"~1.1.1"),", which is\nequivalent to ",Object(l.b)("inlineCode",{parentName:"p"},">=1.1.1 <1.2.0"),".  So the highest-sorting version that satisfies\n",Object(l.b)("inlineCode",{parentName:"p"},"~1.1.1")," is used, which is ",Object(l.b)("inlineCode",{parentName:"p"},"1.1.2"),"."),Object(l.b)("h4",null,"Caret Dependencies below 1.0.0"),Object(l.b)("p",null,"Suppose ",Object(l.b)("inlineCode",{parentName:"p"},"app")," has a caret dependency on a version below ",Object(l.b)("inlineCode",{parentName:"p"},"1.0.0"),", for example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "dep1": "^0.2.0"\n}\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will install ",Object(l.b)("inlineCode",{parentName:"p"},"dep1@0.2.0"),", because there are no other\nversions which satisfy ",Object(l.b)("inlineCode",{parentName:"p"},"^0.2.0"),"."),Object(l.b)("p",null,"If the dependence were on ",Object(l.b)("inlineCode",{parentName:"p"},"^0.4.0"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "dep1": "^0.4.0"\n}\n')),Object(l.b)("p",null,"Then ",Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will install ",Object(l.b)("inlineCode",{parentName:"p"},"dep1@0.4.1"),", because that is the highest-sorting\nversion that satisfies ",Object(l.b)("inlineCode",{parentName:"p"},"^0.4.0")," (",Object(l.b)("inlineCode",{parentName:"p"},">= 0.4.0 <0.5.0"),")"),Object(l.b)("h4",null,"Subdependencies"),Object(l.b)("p",null,"Suppose your app now also has a dependency on ",Object(l.b)("inlineCode",{parentName:"p"},"dep2")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-app",\n  "dependencies": {\n      "dep1": "^1.0.0",\n      "dep2": "1.0.0"\n  }\n}\n')),Object(l.b)("p",null,"and ",Object(l.b)("inlineCode",{parentName:"p"},"dep2")," itself depends on this limited range of ",Object(l.b)("inlineCode",{parentName:"p"},"dep1")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n"name": "dep2",\n  "dependencies": {\n    "dep1": "~1.1.1"\n  }\n}\n')),Object(l.b)("p",null,"Then ",Object(l.b)("inlineCode",{parentName:"p"},"npm update")," will install ",Object(l.b)("inlineCode",{parentName:"p"},"dep1@1.1.2")," because that is the highest\nversion that ",Object(l.b)("inlineCode",{parentName:"p"},"dep2")," allows.  npm will prioritize having a single version\nof ",Object(l.b)("inlineCode",{parentName:"p"},"dep1")," in your tree rather than two when that single version can\nsatisfy the semver requirements of multiple dependencies in your tree.\nIn this case if you really did need your package to use a newer version\nyou would need to use ",Object(l.b)("inlineCode",{parentName:"p"},"npm install"),"."),Object(l.b)("h4",null,"Updating Globally-Installed Packages"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npm update -g")," will apply the ",Object(l.b)("inlineCode",{parentName:"p"},"update")," action to each globally installed\npackage that is ",Object(l.b)("inlineCode",{parentName:"p"},"outdated")," -- that is, has a version that is different from\n",Object(l.b)("inlineCode",{parentName:"p"},"wanted"),"."),Object(l.b)("p",null,"Note: Globally installed packages are treated as if they are installed with a\ncaret semver range specified. So if you require to update to ",Object(l.b)("inlineCode",{parentName:"p"},"latest")," you may\nneed to run ",Object(l.b)("inlineCode",{parentName:"p"},"npm install -g [<pkg>...]")),Object(l.b)("p",null,"NOTE: If a package has been upgraded to a version newer than ",Object(l.b)("inlineCode",{parentName:"p"},"latest"),", it will\nbe ",Object(l.b)("em",{parentName:"p"},"downgraded"),"."),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"save")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true")," unless when using ",Object(l.b)("inlineCode",{parentName:"li"},"npm update")," where it defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"false")),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Save installed packages to a ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file as dependencies."),Object(l.b)("p",null,"When used with the ",Object(l.b)("inlineCode",{parentName:"p"},"npm rm")," command, removes the dependency from\n",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(l.b)("p",null,"Will also prevent writing to ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," if set to ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"global")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'Operates in "global" mode, so that packages are installed into the ',Object(l.b)("inlineCode",{parentName:"p"},"prefix"),"\nfolder instead of the current working directory. See\n",Object(l.b)("a",{parentName:"p",href:"/cli/v8/configuring-npm/folders"},"folders")," for more on the differences in behavior."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"packages are installed into the ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/lib/node_modules")," folder, instead\nof the current working directory."),Object(l.b)("li",{parentName:"ul"},"bin files are linked to ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/bin")),Object(l.b)("li",{parentName:"ul"},"man pages are linked to ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/share/man"))),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"global-style")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Causes npm to install the package into your local ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder with\nthe same layout it uses with the global ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder. Only your\ndirect dependencies will show in ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," and everything they depend\non will be flattened in their ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folders. This obviously will\neliminate some deduping. If used with ",Object(l.b)("inlineCode",{parentName:"p"},"legacy-bundling"),", ",Object(l.b)("inlineCode",{parentName:"p"},"legacy-bundling"),"\nwill be preferred."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"legacy-bundling")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Causes npm to install the package such that versions of npm prior to 1.4,\nsuch as the one included with node 0.8, can install the package. This\neliminates all automatic deduping. If used with ",Object(l.b)("inlineCode",{parentName:"p"},"global-style")," this option\nwill be preferred."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"omit")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: 'dev' if the ",Object(l.b)("inlineCode",{parentName:"li"},"NODE_ENV")," environment variable is set to\n'production', otherwise empty."),Object(l.b)("li",{parentName:"ul"},'Type: "dev", "optional", or "peer" (can be set multiple times)')),Object(l.b)("p",null,"Dependency types to omit from the installation tree on disk."),Object(l.b)("p",null,"Note that these dependencies ",Object(l.b)("em",{parentName:"p"},"are")," still resolved and added to the\n",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json")," file. They are just not\nphysically installed on disk."),Object(l.b)("p",null,"If a package type appears in both the ",Object(l.b)("inlineCode",{parentName:"p"},"--include")," and ",Object(l.b)("inlineCode",{parentName:"p"},"--omit")," lists, then\nit will be included."),Object(l.b)("p",null,"If the resulting omit list includes ",Object(l.b)("inlineCode",{parentName:"p"},"'dev'"),", then the ",Object(l.b)("inlineCode",{parentName:"p"},"NODE_ENV")," environment\nvariable will be set to ",Object(l.b)("inlineCode",{parentName:"p"},"'production'")," for all lifecycle scripts."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"strict-peer-deps")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If set to ",Object(l.b)("inlineCode",{parentName:"p"},"true"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"--legacy-peer-deps")," is not set, then ",Object(l.b)("em",{parentName:"p"},"any"),"\nconflicting ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," will be treated as an install failure, even\nif npm could reasonably guess the appropriate resolution based on non-peer\ndependency relationships."),Object(l.b)("p",null,"By default, conflicting ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," deep in the dependency graph will\nbe resolved using the nearest non-peer dependency specification, even if\ndoing so will result in some packages receiving a peer dependency outside\nthe range set in their package's ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," object."),Object(l.b)("p",null,"When such and override is performed, a warning is printed, explaining the\nconflict and the packages involved. If ",Object(l.b)("inlineCode",{parentName:"p"},"--strict-peer-deps")," is set, then\nthis warning is treated as a failure."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"package-lock")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If set to false, then ignore ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," files when installing. This\nwill also prevent ",Object(l.b)("em",{parentName:"p"},"writing")," ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," if ",Object(l.b)("inlineCode",{parentName:"p"},"save")," is true."),Object(l.b)("p",null,"When package package-locks are disabled, automatic pruning of extraneous\nmodules will also be disabled. To remove extraneous modules with\npackage-locks disabled use ",Object(l.b)("inlineCode",{parentName:"p"},"npm prune"),"."),Object(l.b)("p",null,"This configuration does not affect ",Object(l.b)("inlineCode",{parentName:"p"},"npm ci"),"."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"foreground-scripts")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Run all build scripts (ie, ",Object(l.b)("inlineCode",{parentName:"p"},"preinstall"),", ",Object(l.b)("inlineCode",{parentName:"p"},"install"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"postinstall"),")\nscripts for installed packages in the foreground process, sharing standard\ninput, output, and error with the main npm process."),Object(l.b)("p",null,"Note that this will generally make installs run slower, and be much noisier,\nbut can be useful for debugging."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"ignore-scripts")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If true, npm does not run scripts specified in package.json files."),Object(l.b)("p",null,"Note that commands explicitly intended to run a particular script, such as\n",Object(l.b)("inlineCode",{parentName:"p"},"npm start"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm stop"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm restart"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm test"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"npm run-script"),"\nwill still run their intended script if ",Object(l.b)("inlineCode",{parentName:"p"},"ignore-scripts")," is set, but they\nwill ",Object(l.b)("em",{parentName:"p"},"not")," run any pre- or post-scripts."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"audit")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'When "true" submit audit reports alongside the current npm command to the\ndefault registry and all registries configured for scopes. See the\ndocumentation for ',Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-audit"},Object(l.b)("inlineCode",{parentName:"a"},"npm audit"))," for details on what is\nsubmitted."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"bin-links")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Tells npm to create symlinks (or ",Object(l.b)("inlineCode",{parentName:"p"},".cmd")," shims on Windows) for package\nexecutables."),Object(l.b)("p",null,"Set to false to have it not do this. This can be used to work around the\nfact that some file systems don't support symlinks, even on ostensibly Unix\nsystems."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"fund")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'When "true" displays the message at the end of each ',Object(l.b)("inlineCode",{parentName:"p"},"npm install"),"\nacknowledging the number of dependencies looking for funding. See ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-fund"},Object(l.b)("inlineCode",{parentName:"a"},"npm\nfund"))," for details."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"dry-run")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Indicates that you don't want npm to make any changes and that it should\nonly report what it would have done. This can be passed into any of the\ncommands that modify your local installation, eg, ",Object(l.b)("inlineCode",{parentName:"p"},"install"),", ",Object(l.b)("inlineCode",{parentName:"p"},"update"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"dedupe"),", ",Object(l.b)("inlineCode",{parentName:"p"},"uninstall"),", as well as ",Object(l.b)("inlineCode",{parentName:"p"},"pack")," and ",Object(l.b)("inlineCode",{parentName:"p"},"publish"),"."),Object(l.b)("p",null,"Note: This is NOT honored by other network related commands, eg ",Object(l.b)("inlineCode",{parentName:"p"},"dist-tags"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"owner"),", etc."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result in selecting all\nworkspaces within that folder)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(l.b)("p",null,"Set to true to run the command in the context of ",Object(l.b)("strong",{parentName:"p"},"all")," configured\nworkspaces."),Object(l.b)("p",null,"Explicitly setting this to false will cause commands like ",Object(l.b)("inlineCode",{parentName:"p"},"install")," to\nignore workspaces altogether. When not set explicitly:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Commands that operate on the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," tree (install, update, etc.)\nwill link workspaces into the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder. - Commands that do\nother things (test, exec, publish, etc.) will operate on the root project,\n",Object(l.b)("em",{parentName:"li"},"unless")," one or more workspaces are specified in the ",Object(l.b)("inlineCode",{parentName:"li"},"workspace")," config.")),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"include-workspace-root")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Include the workspace root when workspaces are enabled for a command."),Object(l.b)("p",null,"When false, specifying individual workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config, or\nall workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspaces")," flag, will cause npm to operate only on\nthe specified workspaces, and not on the root project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-install"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-outdated"},"npm outdated")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-shrinkwrap"},"npm shrinkwrap")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/registry"},"npm registry")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/folders"},"npm folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-ls"},"npm ls"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-update-md-179fad598effcddb7821.js.map