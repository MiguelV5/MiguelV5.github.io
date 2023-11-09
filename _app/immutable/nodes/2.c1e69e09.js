import{s as M,n as C,l as pe,o as me}from"../chunks/scheduler.5b64a859.js";import{S as O,i as N,g as d,h,y as F,k as f,a as y,f as u,m as j,s as I,j as v,n as z,c as x,x as c,E as ge,r as Z,u as ee,v as te,d as re,t as se,w as ne}from"../chunks/index.d2077c8c.js";function fe(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function ve(n){let e,r='<img src="art-card-nobg.png" alt="avatar-card" class="svelte-tmguve"/> <div class="inner-credit-msg svelte-tmguve"><p class="text-sm text-gray-700 dark:text-gray-300">▲ Art by <a href="https://www.pixiv.net/en/users/35653933" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-black dark:text-blue-300 dark:hover:text-white">wandu_mook</a></p></div>';return{c(){e=d("div"),e.innerHTML=r,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-dbh9yf"&&(e.innerHTML=r),this.h()},h(){f(e,"class","bio-card-container space-y-6 svelte-tmguve")},m(t,s){y(t,e,s)},p:C,i:C,o:C,d(t){t&&u(e)}}}class _e extends O{constructor(e){super(),N(this,e,null,ve,M,{})}}function be(n){let e,r,t,s,a,_="Miguel Vasquez",p,g,l,i,m=`I am currently a studying at my <a class="magic-text svelte-1mpz8r2" href="https://fi.uba.ar" target="_blank" rel="noopener noreferrer">alma mater 🖤</a>, actively pursuing my passion for Computer Science. 
			<br/>
			I possess a deep affection for this fascinating field in its entirety, thus I acquire great satisfaction
			by constantly learning on it, and find great joy in imparting my knowledge to others.`;return{c(){e=d("div"),r=d("div"),t=d("h1"),s=j(`Hi, I'm
			`),a=d("span"),a.textContent=_,p=j("."),l=I(),i=d("h3"),i.innerHTML=m,this.h()},l(o){e=h(o,"DIV",{class:!0});var b=v(e);r=h(b,"DIV",{class:!0});var U=v(r);t=h(U,"H1",{class:!0});var S=v(t);s=z(S,`Hi, I'm
			`),a=h(S,"SPAN",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-1g6yk46"&&(a.textContent=_),p=z(S,"."),S.forEach(u),l=x(U),i=h(U,"H3",{class:!0,"data-svelte-h":!0}),F(i)!=="svelte-khv01d"&&(i.innerHTML=m),U.forEach(u),b.forEach(u),this.h()},h(){f(a,"class","magic-text svelte-1mpz8r2"),f(t,"class",g="h1 font-bold "+n[0]+" svelte-1mpz8r2"),f(i,"class","h3 svelte-1mpz8r2"),f(r,"class","bio-text-container space-y-6 svelte-1mpz8r2"),f(e,"class","bio-container svelte-1mpz8r2")},m(o,b){y(o,e,b),c(e,r),c(r,t),c(t,s),c(t,a),c(t,p),c(r,l),c(r,i)},p(o,[b]){b&1&&g!==(g="h1 font-bold "+o[0]+" svelte-1mpz8r2")&&f(t,"class",g)},i:C,o:C,d(o){o&&u(e)}}}function ye(n,e,r){let{titleFontSize:t="text-6xl"}=e;return n.$$set=s=>{"titleFontSize"in s&&r(0,t=s.titleFontSize)},[t]}class we extends O{constructor(e){super(),N(this,e,ye,be,M,{titleFontSize:0})}}function de(n,e,r){const t=n.slice();return t[2]=e[r],t[4]=r,t}function Ie(n){let e;function r(a,_){return a[0]?Ee:xe}let t=r(n),s=t(n);return{c(){e=d("a"),s.c(),this.h()},l(a){e=h(a,"A",{href:!0,target:!0,rel:!0,class:!0});var _=v(e);s.l(_),_.forEach(u),this.h()},h(){f(e,"href",n[2].pageUrl),f(e,"target","_blank"),f(e,"rel","noopener noreferrer"),f(e,"class","inner-button btn variant-glass-primary svelte-1u3ykz1")},m(a,_){y(a,e,_),s.m(e,null)},p(a,_){t!==(t=r(a))&&(s.d(1),s=t(a),s&&(s.c(),s.m(e,null)))},d(a){a&&u(e),s.d()}}}function xe(n){let e,r;return{c(){e=j("View website   "),r=d("i"),this.h()},l(t){e=z(t,"View website   "),r=h(t,"I",{class:!0}),v(r).forEach(u),this.h()},h(){f(r,"class","fa-solid fa-external-link")},m(t,s){y(t,e,s),y(t,r,s)},d(t){t&&(u(e),u(r))}}}function Ee(n){let e,r;return{c(){e=j("Website   "),r=d("i"),this.h()},l(t){e=z(t,"Website   "),r=h(t,"I",{class:!0}),v(r).forEach(u),this.h()},h(){f(r,"class","fa-solid fa-external-link")},m(t,s){y(t,e,s),y(t,r,s)},d(t){t&&(u(e),u(r))}}}function ke(n){let e,r;return{c(){e=j("View repository   "),r=d("i"),this.h()},l(t){e=z(t,"View repository   "),r=h(t,"I",{class:!0}),v(r).forEach(u),this.h()},h(){f(r,"class","fa-solid fa-code")},m(t,s){y(t,e,s),y(t,r,s)},d(t){t&&(u(e),u(r))}}}function Re(n){let e,r;return{c(){e=j("Repo   "),r=d("i"),this.h()},l(t){e=z(t,"Repo   "),r=h(t,"I",{class:!0}),v(r).forEach(u),this.h()},h(){f(r,"class","fa-solid fa-code")},m(t,s){y(t,e,s),y(t,r,s)},d(t){t&&(u(e),u(r))}}}function he(n){let e,r,t,s,a,_,p,g,l=n[2].title+"",i,m,o,b,U=n[2].description+"",S,G,E,q,J,K,Q,T,X,k,Y,$=n[2].hasWebPage&&Ie(n);function le(w,R){return w[0]?Re:ke}let L=le(n),P=L(n);return{c(){e=d("div"),r=d("div"),t=d("header"),s=d("img"),_=I(),p=d("div"),g=d("h3"),i=j(l),m=I(),o=d("article"),b=d("p"),S=j(U),G=I(),E=d("footer"),q=d("hr"),J=I(),K=d("br"),Q=I(),T=d("div"),$&&$.c(),X=I(),k=d("a"),P.c(),Y=I(),this.h()},l(w){e=h(w,"DIV",{class:!0});var R=v(e);r=h(R,"DIV",{class:!0});var W=v(r);t=h(W,"HEADER",{});var ie=v(t);s=h(ie,"IMG",{src:!0,class:!0,alt:!0}),ie.forEach(u),_=x(W),p=h(W,"DIV",{class:!0});var A=v(p);g=h(A,"H3",{class:!0,"data-toc-ignore":!0});var ae=v(g);i=z(ae,l),ae.forEach(u),m=x(A),o=h(A,"ARTICLE",{});var oe=v(o);b=h(oe,"P",{});var ce=v(b);S=z(ce,U),ce.forEach(u),oe.forEach(u),A.forEach(u),W.forEach(u),G=x(R),E=h(R,"FOOTER",{class:!0});var D=v(E);q=h(D,"HR",{}),J=x(D),K=h(D,"BR",{}),Q=x(D),T=h(D,"DIV",{class:!0});var V=v(T);$&&$.l(V),X=x(V),k=h(V,"A",{href:!0,target:!0,rel:!0,class:!0});var ue=v(k);P.l(ue),ue.forEach(u),V.forEach(u),D.forEach(u),Y=x(R),R.forEach(u),this.h()},h(){pe(s.src,a=n[2].previewImgUrl)||f(s,"src",a),f(s,"class","bg-black/50"),f(s,"alt","Post"),f(g,"class","h3 text-2xl"),f(g,"data-toc-ignore",""),f(p,"class","p-4 space-y-4"),f(r,"class","main-card-content"),f(k,"href",n[2].repoUrl),f(k,"target","_blank"),f(k,"rel","noopener noreferrer"),f(k,"class","inner-button btn variant-glass-primary svelte-1u3ykz1"),f(T,"class","inner-card-buttons-container svelte-1u3ykz1"),f(E,"class","inner-card-footer p-4 space-x-4 svelte-1u3ykz1"),f(e,"class","project-card card variant-glass-primary custom-card-hover overflow-hidden svelte-1u3ykz1")},m(w,R){y(w,e,R),c(e,r),c(r,t),c(t,s),c(r,_),c(r,p),c(p,g),c(g,i),c(p,m),c(p,o),c(o,b),c(b,S),c(e,G),c(e,E),c(E,q),c(E,J),c(E,K),c(E,Q),c(E,T),$&&$.m(T,null),c(T,X),c(T,k),P.m(k,null),c(e,Y)},p(w,R){w[2].hasWebPage&&$.p(w,R),L!==(L=le(w))&&(P.d(1),P=L(w),P&&(P.c(),P.m(k,null)))},d(w){w&&u(e),$&&$.d(),P.d()}}}function $e(n){let e,r,t,s,a="Projects",_,p,g=fe(n[1]),l=[];for(let i=0;i<g.length;i+=1)l[i]=he(de(n,g,i));return{c(){e=d("div"),r=d("hr"),t=I(),s=d("h2"),s.textContent=a,_=I(),p=d("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=h(i,"DIV",{class:!0});var m=v(e);r=h(m,"HR",{}),t=x(m),s=h(m,"H2",{class:!0,"data-svelte-h":!0}),F(s)!=="svelte-1lyob11"&&(s.textContent=a),_=x(m),p=h(m,"DIV",{class:!0});var o=v(p);for(let b=0;b<l.length;b+=1)l[b].l(o);o.forEach(u),m.forEach(u),this.h()},h(){f(s,"class","h2 font-semibold text-4xl flex justify-center items-center"),f(p,"class","inner-project-cards-container w-full text-token svelte-1u3ykz1"),f(e,"class","external-project-cards-container space-y-6")},m(i,m){y(i,e,m),c(e,r),c(e,t),c(e,s),c(e,_),c(e,p);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(p,null)},p(i,[m]){if(m&3){g=fe(i[1]);let o;for(o=0;o<g.length;o+=1){const b=de(i,g,o);l[o]?l[o].p(b,m):(l[o]=he(b),l[o].c(),l[o].m(p,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=g.length}},i:C,o:C,d(i){i&&u(e),ge(l,i)}}}const B="posts/",H="https://github.com/MiguelV5/",Pe="https://gitlab.com/MiguelV5/",Se="https://miguelv5.github.io/";function Te(n,e,r){let{triggerProjectButtonReductions:t=!1}=e;const s=[{title:"Polyrythmic Circles",description:"A relaxing static page featuring the polyrythmic effect, done simply with vanilla JS, HTML and CSS.",previewImgUrl:B+"polyrythmic_circles.png",repoUrl:H+"polyrythmic_circles",hasWebPage:!0,pageUrl:Se+"polyrythmic_circles"},{title:"Ferris Torrent",description:"A BitTorrent client supporting multiple concurrent peers, and a custom tracker server with a simple static web interface for basic stats of its peers. Both done in Rust while keeping external crate usage to a minimum (TLS, GTK, logging, json) for my Programming Workshop college subject.",previewImgUrl:B+"ferris_torrent.png",repoUrl:H+"Ferris-Torrent_taller1-fiuba",hasWebPage:!1},{title:"FileTransfer + RDT",description:"A CLI File Transfer app using a custom RDT protocol on top of UDP, handling packet loss within a simulated network via mininet. Written in python for my Computer Networking college subject. A custom wireshark dissector made in Lua is also provided.",previewImgUrl:B+"file_transfer.png",repoUrl:H+"7543_IntroSistDistribuidos/tree/main/tp1",hasWebPage:!1},{title:"Low level OS Utilities",description:"Implementation of multiple low level system utilities in C for my Operating Systems college subject. Includes a shell, a memory allocation library, a process scheduler for the JOS kernel, and a FUSE filesystem.",previewImgUrl:B+"shell.png",repoUrl:Pe+"sisop",hasWebPage:!1},{title:"Properties' pricing analysis",description:"A data science project done with jupyter for my Data Science college subject. It consists of the data analysis and model training from a dataset with 2021's properties for sale in Buenos Aires, Argentina. It includes full data preprocessing, clustering, classification and regression; training multiple ML models.",previewImgUrl:B+"ds.png",repoUrl:H+"7506-Organizacion_de_datos",hasWebPage:!1}];return n.$$set=a=>{"triggerProjectButtonReductions"in a&&r(0,t=a.triggerProjectButtonReductions)},[t,s]}class je extends O{constructor(e){super(),N(this,e,Te,$e,M,{triggerProjectButtonReductions:0})}}function ze(n){let e,r,t,s,a,_,p,g;return t=new we({props:{titleFontSize:n[0]}}),a=new _e({}),p=new je({props:{triggerProjectButtonReductions:n[1]}}),{c(){e=d("div"),r=d("div"),Z(t.$$.fragment),s=I(),Z(a.$$.fragment),_=I(),Z(p.$$.fragment),this.h()},l(l){e=h(l,"DIV",{class:!0});var i=v(e);r=h(i,"DIV",{class:!0});var m=v(r);ee(t.$$.fragment,m),s=x(m),ee(a.$$.fragment,m),m.forEach(u),_=x(i),ee(p.$$.fragment,i),i.forEach(u),this.h()},h(){f(r,"class","flexible-pseudo-row-container svelte-nfb6pp"),f(e,"class","page-content-container h-full mx-auto svelte-nfb6pp")},m(l,i){y(l,e,i),c(e,r),te(t,r,null),c(r,s),te(a,r,null),c(e,_),te(p,e,null),g=!0},p(l,[i]){const m={};i&1&&(m.titleFontSize=l[0]),t.$set(m);const o={};i&2&&(o.triggerProjectButtonReductions=l[1]),p.$set(o)},i(l){g||(re(t.$$.fragment,l),re(a.$$.fragment,l),re(p.$$.fragment,l),g=!0)},o(l){se(t.$$.fragment,l),se(a.$$.fragment,l),se(p.$$.fragment,l),g=!1},d(l){l&&u(e),ne(t),ne(a),ne(p)}}}const Ue=768,Ce=500;function De(n,e,r){let t="text-6xl",s=!1;const a=()=>{window.innerWidth<=Ue?r(0,t="text-4xl"):r(0,t="text-6xl"),window.innerWidth<=Ce?r(1,s=!0):r(1,s=!1)};return me(()=>(window.addEventListener("resize",a),a(),()=>{window.removeEventListener("resize",a)})),[t,s]}class We extends O{constructor(e){super(),N(this,e,De,ze,M,{})}}export{We as component};
