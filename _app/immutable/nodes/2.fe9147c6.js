import{s as O,n as U,l as pe,o as ge,a as me}from"../chunks/scheduler.5b64a859.js";import{S as N,i as G,g as d,h,D as M,k as u,a as y,f,m as P,s as x,j as _,n as C,c as I,B as c,E as _e,r as Z,u as ee,v as te,d as se,t as re,w as ne}from"../chunks/index.7c0cf01e.js";function fe(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function ve(n){let e,s='<img src="art-card-nobg.png" alt="avatar-card" class="svelte-tmguve"/> <div class="inner-credit-msg svelte-tmguve"><p class="text-sm text-gray-700 dark:text-gray-300">▲ Art by <a href="https://www.pixiv.net/en/users/35653933" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-black dark:text-blue-300 dark:hover:text-white">wandu_mook</a></p></div>';return{c(){e=d("div"),e.innerHTML=s,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-dbh9yf"&&(e.innerHTML=s),this.h()},h(){u(e,"class","bio-card-container space-y-6 svelte-tmguve")},m(t,r){y(t,e,r)},p:U,i:U,o:U,d(t){t&&f(e)}}}function be(n){return[]}class ye extends N{constructor(e){super(),G(this,e,be,ve,O,{})}}function we(n){let e,s,t,r,l,v="Miguel Vasquez",p,m,i,a,g=`I am currently a studying at my <a class="magic-text svelte-1mpz8r2" href="https://fi.uba.ar" target="_blank" rel="noopener noreferrer">alma mater 🖤</a>, actively pursuing my passion for Computer Science. 
			<br/>
			I possess a deep affection for this fascinating field in its entirety, thus I acquire great satisfaction
			by constantly learning on it, and find great joy in imparting my knowledge to others.`;return{c(){e=d("div"),s=d("div"),t=d("h1"),r=P(`Hi, I'm
			`),l=d("span"),l.textContent=v,p=P("."),i=x(),a=d("h3"),a.innerHTML=g,this.h()},l(o){e=h(o,"DIV",{class:!0});var b=_(e);s=h(b,"DIV",{class:!0});var D=_(s);t=h(D,"H1",{class:!0});var T=_(t);r=C(T,`Hi, I'm
			`),l=h(T,"SPAN",{class:!0,"data-svelte-h":!0}),M(l)!=="svelte-1g6yk46"&&(l.textContent=v),p=C(T,"."),T.forEach(f),i=I(D),a=h(D,"H3",{class:!0,"data-svelte-h":!0}),M(a)!=="svelte-khv01d"&&(a.innerHTML=g),D.forEach(f),b.forEach(f),this.h()},h(){u(l,"class","magic-text svelte-1mpz8r2"),u(t,"class",m="h1 font-bold "+n[0]+" svelte-1mpz8r2"),u(a,"class","h3 svelte-1mpz8r2"),u(s,"class","bio-text-container space-y-6 svelte-1mpz8r2"),u(e,"class","bio-container svelte-1mpz8r2")},m(o,b){y(o,e,b),c(e,s),c(s,t),c(t,r),c(t,l),c(t,p),c(s,i),c(s,a)},p(o,[b]){b&1&&m!==(m="h1 font-bold "+o[0]+" svelte-1mpz8r2")&&u(t,"class",m)},i:U,o:U,d(o){o&&f(e)}}}function xe(n,e,s){let{titleFontSize:t="text-6xl"}=e;return n.$$set=r=>{"titleFontSize"in r&&s(0,t=r.titleFontSize)},[t]}class Ie extends N{constructor(e){super(),G(this,e,xe,we,O,{titleFontSize:0})}}function de(n,e,s){const t=n.slice();return t[2]=e[s],t[4]=s,t}function Ee(n){let e;function s(l,v){return l[0]?$e:ke}let t=s(n),r=t(n);return{c(){e=d("a"),r.c(),this.h()},l(l){e=h(l,"A",{href:!0,target:!0,rel:!0,class:!0});var v=_(e);r.l(v),v.forEach(f),this.h()},h(){u(e,"href",n[2].pageUrl),u(e,"target","_blank"),u(e,"rel","noopener noreferrer"),u(e,"class","inner-button btn variant-glass-primary svelte-yi6te3")},m(l,v){y(l,e,v),r.m(e,null)},p(l,v){t!==(t=s(l))&&(r.d(1),r=t(l),r&&(r.c(),r.m(e,null)))},d(l){l&&f(e),r.d()}}}function ke(n){let e,s;return{c(){e=P("View website   "),s=d("i"),this.h()},l(t){e=C(t,"View website   "),s=h(t,"I",{class:!0}),_(s).forEach(f),this.h()},h(){u(s,"class","fa-solid fa-external-link")},m(t,r){y(t,e,r),y(t,s,r)},d(t){t&&(f(e),f(s))}}}function $e(n){let e,s;return{c(){e=P("Website   "),s=d("i"),this.h()},l(t){e=C(t,"Website   "),s=h(t,"I",{class:!0}),_(s).forEach(f),this.h()},h(){u(s,"class","fa-solid fa-external-link")},m(t,r){y(t,e,r),y(t,s,r)},d(t){t&&(f(e),f(s))}}}function Re(n){let e,s;return{c(){e=P("View repository   "),s=d("i"),this.h()},l(t){e=C(t,"View repository   "),s=h(t,"I",{class:!0}),_(s).forEach(f),this.h()},h(){u(s,"class","fa-brands fa-github")},m(t,r){y(t,e,r),y(t,s,r)},d(t){t&&(f(e),f(s))}}}function je(n){let e,s;return{c(){e=P("Repo   "),s=d("i"),this.h()},l(t){e=C(t,"Repo   "),s=h(t,"I",{class:!0}),_(s).forEach(f),this.h()},h(){u(s,"class","fa-brands fa-github")},m(t,r){y(t,e,r),y(t,s,r)},d(t){t&&(f(e),f(s))}}}function he(n){let e,s,t,r,l,v,p,m,i=n[2].title+"",a,g,o,b,D=n[2].description+"",T,q,E,z,J,K,Q,S,X,k,Y,R=n[2].hasWebPage&&Ee(n);function ie(w,$){return w[0]?je:Re}let H=ie(n),j=H(n);return{c(){e=d("div"),s=d("div"),t=d("header"),r=d("img"),v=x(),p=d("div"),m=d("h3"),a=P(i),g=x(),o=d("article"),b=d("p"),T=P(D),q=x(),E=d("footer"),z=d("hr"),J=x(),K=d("br"),Q=x(),S=d("div"),R&&R.c(),X=x(),k=d("a"),j.c(),Y=x(),this.h()},l(w){e=h(w,"DIV",{class:!0});var $=_(e);s=h($,"DIV",{class:!0});var V=_(s);t=h(V,"HEADER",{});var le=_(t);r=h(le,"IMG",{src:!0,class:!0,alt:!0}),le.forEach(f),v=I(V),p=h(V,"DIV",{class:!0});var L=_(p);m=h(L,"H3",{class:!0,"data-toc-ignore":!0});var ae=_(m);a=C(ae,i),ae.forEach(f),g=I(L),o=h(L,"ARTICLE",{});var oe=_(o);b=h(oe,"P",{});var ce=_(b);T=C(ce,D),ce.forEach(f),oe.forEach(f),L.forEach(f),V.forEach(f),q=I($),E=h($,"FOOTER",{class:!0});var A=_(E);z=h(A,"HR",{class:!0}),J=I(A),K=h(A,"BR",{}),Q=I(A),S=h(A,"DIV",{class:!0});var F=_(S);R&&R.l(F),X=I(F),k=h(F,"A",{href:!0,target:!0,rel:!0,class:!0});var ue=_(k);j.l(ue),ue.forEach(f),F.forEach(f),A.forEach(f),Y=I($),$.forEach(f),this.h()},h(){pe(r.src,l=n[2].previewImgUrl)||u(r,"src",l),u(r,"class","bg-black/50"),u(r,"alt","Post"),u(m,"class","h3 text-2xl"),u(m,"data-toc-ignore",""),u(p,"class","p-4 space-y-4"),u(s,"class","main-card-content"),u(z,"class","opacity-100"),u(k,"href",n[2].repoUrl),u(k,"target","_blank"),u(k,"rel","noopener noreferrer"),u(k,"class","inner-button btn variant-glass-primary svelte-yi6te3"),u(S,"class","inner-card-buttons-container svelte-yi6te3"),u(E,"class","inner-card-footer p-4 space-x-4 svelte-yi6te3"),u(e,"class","project-card card variant-glass-primary custom-card-hover overflow-hidden svelte-yi6te3")},m(w,$){y(w,e,$),c(e,s),c(s,t),c(t,r),c(s,v),c(s,p),c(p,m),c(m,a),c(p,g),c(p,o),c(o,b),c(b,T),c(e,q),c(e,E),c(E,z),c(E,J),c(E,K),c(E,Q),c(E,S),R&&R.m(S,null),c(S,X),c(S,k),j.m(k,null),c(e,Y)},p(w,$){w[2].hasWebPage&&R.p(w,$),H!==(H=ie(w))&&(j.d(1),j=H(w),j&&(j.c(),j.m(k,null)))},d(w){w&&f(e),R&&R.d(),j.d()}}}function Te(n){let e,s,t,r,l="Projects",v,p,m=fe(n[1]),i=[];for(let a=0;a<m.length;a+=1)i[a]=he(de(n,m,a));return{c(){e=d("div"),s=d("hr"),t=x(),r=d("h2"),r.textContent=l,v=x(),p=d("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=h(a,"DIV",{class:!0});var g=_(e);s=h(g,"HR",{class:!0}),t=I(g),r=h(g,"H2",{class:!0,"data-svelte-h":!0}),M(r)!=="svelte-1lyob11"&&(r.textContent=l),v=I(g),p=h(g,"DIV",{class:!0});var o=_(p);for(let b=0;b<i.length;b+=1)i[b].l(o);o.forEach(f),g.forEach(f),this.h()},h(){u(s,"class","opacity-100"),u(r,"class","h2 font-semibold text-4xl flex justify-center items-center"),u(p,"class","inner-project-cards-container w-full text-token svelte-yi6te3"),u(e,"class","external-project-cards-container space-y-6")},m(a,g){y(a,e,g),c(e,s),c(e,t),c(e,r),c(e,v),c(e,p);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(p,null)},p(a,[g]){if(g&3){m=fe(a[1]);let o;for(o=0;o<m.length;o+=1){const b=de(a,m,o);i[o]?i[o].p(b,g):(i[o]=he(b),i[o].c(),i[o].m(p,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=m.length}},i:U,o:U,d(a){a&&f(e),_e(i,a)}}}const B="posts/",W="https://github.com/MiguelV5/",Se="https://miguelv5.github.io/";function Pe(n,e,s){let{triggerProjectButtonReductions:t=!1}=e;const r=[{title:"Polyrythmic Circles",description:"A relaxing static page featuring the polyrythmic effect, done simply with vanilla JS, HTML and CSS.",previewImgUrl:B+"polyrythmic_circles.png",repoUrl:W+"polyrythmic_circles",hasWebPage:!0,pageUrl:Se+"polyrythmic_circles"},{title:"Ferris Torrent",description:"A BitTorrent client supporting multiple concurrent peers, and a custom tracker server with a simple static web interface for basic stats of its peers. Both done in Rust while keeping external crate usage to a minimum (TLS, GTK, logging, json) for my Programming Workshop college subject.",previewImgUrl:B+"ferris_torrent.png",repoUrl:W+"Ferris-Torrent_taller1-fiuba",hasWebpage:!1},{title:"FileTransfer + RDT",description:"A CLI File Transfer app using a custom RDT protocol on top of UDP, handling packet loss within a simulated network via mininet. Written in python for my Computer Networking college subject. A custom wireshark dissector made in Lua is also provided.",previewImgUrl:B+"file_transfer.png",repoUrl:W+"7543_IntroSistDistribuidos/tree/main/tp1",hasWebpage:!1},{title:"Minimal Shell",description:"A minimal shell written in C for my Operating Systems college subject. It supports general commands, pipes, redirections, and background processes.",previewImgUrl:B+"shell.png",repoUrl:W+"7508_SisOp_labs/tree/master/lab-shell/shell",hasWebpage:!1},{title:"Properties' pricing analysis",description:"A data science project done with jupyter for my Data Science college subject. It consists of the data analysis and model training from a dataset with 2021's properties for sale in Buenos Aires, Argentina. It includes full data preprocessing, clustering, classification and regression; training multiple ML models.",previewImgUrl:B+"ds.png",repoUrl:W+"7506-Organizacion_de_datos",hasWebpage:!1}];return n.$$set=l=>{"triggerProjectButtonReductions"in l&&s(0,t=l.triggerProjectButtonReductions)},[t,r]}class Ce extends N{constructor(e){super(),G(this,e,Pe,Te,O,{triggerProjectButtonReductions:0})}}function De(n){let e,s,t,r,l,v,p,m;return t=new Ie({props:{titleFontSize:n[0]}}),l=new ye({}),p=new Ce({props:{triggerProjectButtonReductions:n[1]}}),{c(){e=d("div"),s=d("div"),Z(t.$$.fragment),r=x(),Z(l.$$.fragment),v=x(),Z(p.$$.fragment),this.h()},l(i){e=h(i,"DIV",{class:!0});var a=_(e);s=h(a,"DIV",{class:!0});var g=_(s);ee(t.$$.fragment,g),r=I(g),ee(l.$$.fragment,g),g.forEach(f),v=I(a),ee(p.$$.fragment,a),a.forEach(f),this.h()},h(){u(s,"class","flexible-pseudo-row-container svelte-nfb6pp"),u(e,"class","page-content-container h-full mx-auto svelte-nfb6pp")},m(i,a){y(i,e,a),c(e,s),te(t,s,null),c(s,r),te(l,s,null),c(e,v),te(p,e,null),m=!0},p(i,[a]){const g={};a&1&&(g.titleFontSize=i[0]),t.$set(g);const o={};a&2&&(o.triggerProjectButtonReductions=i[1]),p.$set(o)},i(i){m||(se(t.$$.fragment,i),se(l.$$.fragment,i),se(p.$$.fragment,i),m=!0)},o(i){re(t.$$.fragment,i),re(l.$$.fragment,i),re(p.$$.fragment,i),m=!1},d(i){i&&f(e),ne(t),ne(l),ne(p)}}}const Ue=768,Ae=500;function Be(n,e,s){let t="text-6xl",r=!1;const l=()=>{window.innerWidth<=Ue?s(0,t="text-4xl"):s(0,t="text-6xl"),window.innerWidth<=Ae?s(1,r=!0):s(1,r=!1)};return ge(()=>(window.addEventListener("resize",l),l(),()=>{window.removeEventListener("resize",l)})),me(l),[t,r]}class He extends N{constructor(e){super(),G(this,e,Be,De,O,{})}}export{He as component};