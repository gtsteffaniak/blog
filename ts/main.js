(()=>{var p=class e{galleryUID;items=[];constructor(t,i=1){if(window.PhotoSwipe==null||window.PhotoSwipeUI_Default==null){console.error("PhotoSwipe lib not loaded.");return}this.galleryUID=i,e.createGallery(t),this.loadItems(t),this.bindClick()}loadItems(t){this.items=[];let i=t.querySelectorAll("figure.gallery-image");for(let r of i){let n=r.querySelector("figcaption"),o=r.querySelector("img"),s={w:parseInt(o.getAttribute("width")),h:parseInt(o.getAttribute("height")),src:o.src,msrc:o.getAttribute("data-thumb")||o.src,el:r};n&&(s.title=n.innerHTML),this.items.push(s)}}static createGallery(t){let i=t.querySelectorAll("img.gallery-image");for(let o of Array.from(i)){let s=o.closest("p");if(!s||!t.contains(s)||(s.textContent.trim()==""&&s.classList.add("no-text"),!s.classList.contains("no-text")))continue;let d=o.parentElement.tagName=="A",m=o,a=document.createElement("figure");if(a.style.setProperty("flex-grow",o.getAttribute("data-flex-grow")||"1"),a.style.setProperty("flex-basis",o.getAttribute("data-flex-basis")||"0"),d&&(m=o.parentElement),m.parentElement.insertBefore(a,m),a.appendChild(m),o.hasAttribute("alt")){let l=document.createElement("figcaption");l.innerText=o.getAttribute("alt"),a.appendChild(l)}if(!d){a.className="gallery-image";let l=document.createElement("a");l.href=o.src,l.setAttribute("target","_blank"),o.parentNode.insertBefore(l,o),l.appendChild(o)}}let r=t.querySelectorAll("figure.gallery-image"),n=[];for(let o of r)n.length?o.previousElementSibling===n[n.length-1]?n.push(o):n.length&&(e.wrap(n),n=[o]):n=[o];n.length>0&&e.wrap(n)}static wrap(t){let i=document.createElement("div");i.className="gallery";let r=t[0].parentNode,n=t[0];r.insertBefore(i,n);for(let o of t)i.appendChild(o)}open(t){let i=document.querySelector(".pswp");new window.PhotoSwipe(i,window.PhotoSwipeUI_Default,this.items,{index:t,galleryUID:this.galleryUID,getThumbBoundsFn:n=>{let o=this.items[n].el.getElementsByTagName("img")[0],s=window.pageYOffset||document.documentElement.scrollTop,c=o.getBoundingClientRect();return{x:c.left,y:c.top+s,w:c.width}}}).init()}bindClick(){for(let[t,i]of this.items.entries())i.el.querySelector("a").addEventListener("click",n=>{n.preventDefault(),this.open(t)})}},g=p;var h={};if(localStorage.hasOwnProperty("StackColorsCache"))try{h=JSON.parse(localStorage.getItem("StackColorsCache"))}catch{h={}}async function S(e,t,i){if(!e)return await Vibrant.from(i).getPalette();if(!h.hasOwnProperty(e)||h[e].hash!==t){let r=await Vibrant.from(i).getPalette();h[e]={hash:t,Vibrant:{hex:r.Vibrant.hex,rgb:r.Vibrant.rgb,bodyTextColor:r.Vibrant.bodyTextColor},DarkMuted:{hex:r.DarkMuted.hex,rgb:r.DarkMuted.rgb,bodyTextColor:r.DarkMuted.bodyTextColor}},localStorage.setItem("StackColorsCache",JSON.stringify(h))}return h[e]}var A=(e,t=500)=>{e.classList.add("transiting"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",window.setTimeout(()=>{e.classList.remove("show"),e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},q=(e,t=500)=>{e.classList.add("transiting"),e.style.removeProperty("display"),e.classList.add("show");let i=e.offsetHeight;e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=i+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},B=(e,t=500)=>window.getComputedStyle(e).display==="none"?q(e,t):A(e,t);function w(){let e=document.getElementById("toggle-menu");e&&e.addEventListener("click",()=>{document.getElementById("main-menu").classList.contains("transiting")||(document.body.classList.toggle("show-menu"),B(document.getElementById("main-menu"),300),e.classList.toggle("is-active"))})}function D(e,t,i){var r=document.createElement(e);for(let n in t)if(n&&t.hasOwnProperty(n)){let o=t[n];n=="dangerouslySetInnerHTML"?r.innerHTML=o.__html:o===!0?r.setAttribute(n,n):o!==!1&&o!=null&&r.setAttribute(n,o.toString())}for(let n=2;n<arguments.length;n++){let o=arguments[n];o&&r.appendChild(o.nodeType==null?document.createTextNode(o.toString()):o)}return r}var v=D;var y=class{localStorageKey="StackColorScheme";currentScheme;systemPreferScheme;constructor(t){this.bindMatchMedia(),this.currentScheme=this.getSavedScheme(),this.dispatchEvent(document.documentElement.dataset.scheme),t&&this.bindClick(t),document.body.style.transition==""&&document.body.style.setProperty("transition","background-color .3s ease")}saveScheme(){localStorage.setItem(this.localStorageKey,this.currentScheme)}bindClick(t){t.addEventListener("click",i=>{this.isDark()?this.currentScheme="light":this.currentScheme="dark",this.setBodyClass(),this.currentScheme==this.systemPreferScheme&&(this.currentScheme="auto"),this.saveScheme()})}isDark(){return this.currentScheme=="dark"||this.currentScheme=="auto"&&this.systemPreferScheme=="dark"}dispatchEvent(t){let i=new CustomEvent("onColorSchemeChange",{detail:t});window.dispatchEvent(i)}setBodyClass(){this.isDark()?document.documentElement.dataset.scheme="dark":document.documentElement.dataset.scheme="light",this.dispatchEvent(document.documentElement.dataset.scheme)}getSavedScheme(){let t=localStorage.getItem(this.localStorageKey);return t=="light"||t=="dark"||t=="auto"?t:"auto"}bindMatchMedia(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?this.systemPreferScheme="dark":this.systemPreferScheme="light",this.setBodyClass()})}},b=y;function f(e){let t;return()=>{t&&window.cancelAnimationFrame(t),t=window.requestAnimationFrame(()=>e())}}var N=".article-content h1[id], .article-content h2[id], .article-content h3[id], .article-content h4[id], .article-content h5[id], .article-content h6[id]",E="#TableOfContents",T="#TableOfContents li",L="active-class";function O(e,t){let i=e.querySelector("a").offsetHeight,r=e.offsetTop-t.offsetHeight/2+i/2-t.offsetTop;r<0&&(r=0),t.scrollTo({top:r,behavior:"smooth"})}function U(e){let t={};return e.forEach(i=>{let n=i.querySelector("a").getAttribute("href");n.startsWith("#")&&(t[n.slice(1)]=i)}),t}function k(e){let t=[];return e.forEach(i=>{t.push({id:i.id,offset:i.offsetTop})}),t.sort((i,r)=>i.offset-r.offset),t}function C(){let e=document.querySelectorAll(N);if(!e){console.warn("No header matched query",e);return}let t=document.querySelector(E);if(!t){console.warn("No toc matched query",E);return}let i=document.querySelectorAll(T);if(!i){console.warn("No navigation matched query",T);return}let r=k(e),n=!1;t.addEventListener("mouseenter",f(()=>n=!0)),t.addEventListener("mouseleave",f(()=>n=!1));let o,s=U(i);function c(){let m=document.documentElement.scrollTop||document.body.scrollTop,a;r.forEach(u=>{m>=u.offset-20&&(a=document.getElementById(u.id))});let l;a&&(l=s[a.id]),a&&!l?console.debug("No link found for section",a):l!==o&&(o&&o.classList.remove(L),l&&(l.classList.add(L),n||O(l,t)),o=l)}window.addEventListener("scroll",f(c));function d(){r=k(e),c()}window.addEventListener("resize",f(d))}var V="a[href]";function P(){document.querySelectorAll(V).forEach(e=>{e.getAttribute("href").startsWith("#")&&e.addEventListener("click",i=>{i.preventDefault();let r=decodeURI(e.getAttribute("href").substring(1));window.history.pushState({},"",`#${r}`),document.getElementById(r).scrollIntoView({behavior:"smooth"})})})}function x(e){window.history.pushState(null,null,`#${e}`),document.getElementById(e).scrollIntoView({behavior:"smooth"})}var M={init:()=>{w();let e=document.querySelector(".article-content");e&&(new g(e),P(),C(),e.querySelectorAll("h3").forEach(c=>{c.addEventListener("click",function(){x(c.id)})}),e.querySelectorAll("h2").forEach(c=>{c.addEventListener("click",function(){x(c.id)})}));let t=document.querySelector(".article-list--tile");t&&new IntersectionObserver(async(s,c)=>{s.forEach(d=>{if(!d.isIntersecting)return;c.unobserve(d.target),d.target.querySelectorAll("article.has-image").forEach(async a=>{let l=a.querySelector("img"),u=l.src,I=l.getAttribute("data-key"),H=l.getAttribute("data-hash"),F=a.querySelector(".article-details"),Q=await S(I,H,u)})})}).observe(t);let i=document.querySelectorAll(".article-content div.highlight"),r="Copy",n="Copied!";i.forEach(o=>{let s=document.createElement("button");s.innerHTML=r,s.classList.add("copyCodeButton"),o.appendChild(s);let c=o.querySelector("code[data-lang]");c&&s.addEventListener("click",()=>{navigator.clipboard.writeText(c.textContent).then(()=>{s.textContent=n,setTimeout(()=>{s.textContent=r},1e3)}).catch(d=>{alert(d),console.log("Something went wrong",d)})})}),new b(document.getElementById("dark-mode-toggle"))}};window.addEventListener("load",()=>{setTimeout(function(){M.init()},0)});window.Stack=M;window.createElement=v;})();
/*!
*   Hugo Theme Stack
*
*   @author: Jimmy Cai
*   @website: https://jimmycai.com
*   @link: https://github.com/CaiJimmy/hugo-theme-stack
*/
