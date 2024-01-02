/** @license
 * DHTML Snowstorm! JavaScript-based snow for web pages
 * Making it snow on the internets since 2003. You're welcome.
 * -----------------------------------------------------------
 * Version 1.44.20131208 (Previous rev: 1.44.20131125)
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License
 * http://schillmania.com/projects/snowstorm/license.txt
 */function N(){this.autoStart=!0,this.flakesMax=300,this.flakesMaxActive=150,this.animationInterval=33,this.useGPU=!0,this.className=null,this.excludeMobile=!1,this.flakeBottom=null,this.followMouse=!0,this.snowColor="white",this.snowCharacter="&bull;",this.snowStick=!1,this.targetElement="snowDiv",this.useMeltEffect=!1,this.useTwinkleEffect=!1,this.usePositionFixed=!1,this.usePixelPosition=!1,this.freezeOnBlur=!0,this.flakeLeftOffset=0,this.flakeRightOffset=0,this.flakeWidth=10,this.flakeHeight=10,this.vMaxX=3,this.vMaxY=2,this.zIndex=5;var e=this,p,d=navigator.userAgent.match(/msie/i),X=navigator.userAgent.match(/msie 6/i),B=navigator.userAgent.match(/mobile|opera m(ob|in)/i),W=d&&document.compatMode==="BackCompat",y=W||X,l=null,h=null,f=null,w=null,g=null,b=null,H=null,x=1,F=2,Y=6,k=!1,E=!1,z=function(){try{document.createElement("div").style.opacity="0.5"}catch{return!1}return!0}(),M=!1,I=document.createDocumentFragment();p=function(){var i;function n(c){window.setTimeout(c,1e3/(e.animationInterval||20))}var s=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||n;i=s?function(){return s.apply(window,arguments)}:null;var t;t=document.createElement("div");function a(c){var m=t.style[c];return m!==void 0?c:null}var o={transform:{ie:a("-ms-transform"),moz:a("MozTransform"),opera:a("OTransform"),webkit:a("webkitTransform"),w3:a("transform"),prop:null},getAnimationFrame:i};return o.transform.prop=o.transform.w3||o.transform.moz||o.transform.webkit||o.transform.ie||o.transform.opera,t=null,o}(),this.timer=null,this.flakes=[],this.disabled=!1,this.active=!1,this.meltFrameCount=20,this.meltFrames=[],this.setXY=function(i,n,s){if(!i)return!1;e.usePixelPosition||E?(i.style.left=n-e.flakeWidth+"px",i.style.top=s-e.flakeHeight+"px"):y||e.flakeBottom?(i.style.right=100-n/l*100+"%",i.style.top=Math.min(s,g-e.flakeHeight)+"px"):(i.style.right=100-n/l*100+"%",i.style.bottom=100-s/f*100+"%")},this.events=function(){var i=!window.addEventListener&&window.attachEvent,n=Array.prototype.slice,s={add:i?"attachEvent":"addEventListener",remove:i?"detachEvent":"removeEventListener"};function t(m){var u=n.call(m),v=u.length;return i?(u[1]="on"+u[1],v>3&&u.pop()):v===3&&u.push(!1),u}function a(m,u){var v=m.shift(),C=[s[u]];i?v[C](m[0],m[1]):v[C].apply(v,m)}function o(){a(t(arguments),"add")}function c(){a(t(arguments),"remove")}return{add:o,remove:c}}();function r(i,n){return isNaN(n)&&(n=0),Math.random()*i+n}function O(i){return parseInt(r(2),10)===1?i*-1:i}this.randomizeWind=function(){var i;if(b=O(r(e.vMaxX,.2)),H=r(e.vMaxY,.2),this.flakes)for(i=0;i<this.flakes.length;i++)this.flakes[i].active&&this.flakes[i].setVelocities()},this.scrollHandler=function(){var i;if(w=e.flakeBottom?0:parseInt(window.scrollY||document.documentElement.scrollTop||(y?document.body.scrollTop:0),10),isNaN(w)&&(w=0),!k&&!e.flakeBottom&&e.flakes)for(i=0;i<e.flakes.length;i++)e.flakes[i].active===0&&e.flakes[i].stick()},this.resizeHandler=function(){window.innerWidth||window.innerHeight?(l=window.innerWidth-16-e.flakeRightOffset,f=e.flakeBottom||window.innerHeight):(l=(document.documentElement.clientWidth||document.body.clientWidth||document.body.scrollWidth)-(d?0:8)-e.flakeRightOffset,f=e.flakeBottom||document.documentElement.clientHeight||document.body.clientHeight||document.body.scrollHeight),g=document.body.offsetHeight,h=parseInt(l/2,10)},this.resizeHandlerAlt=function(){l=e.targetElement.offsetWidth-e.flakeRightOffset,f=e.flakeBottom||e.targetElement.offsetHeight,h=parseInt(l/2,10),g=document.body.offsetHeight},this.freeze=function(){if(!e.disabled)e.disabled=1;else return!1;e.timer=null},this.resume=function(){if(e.disabled)e.disabled=0;else return!1;e.timerInit()},this.toggleSnow=function(){e.flakes.length?(e.active=!e.active,e.active?(e.show(),e.resume()):(e.stop(),e.freeze())):e.start()},this.stop=function(){var i;for(this.freeze(),i=0;i<this.flakes.length;i++)this.flakes[i].o.style.display="none";e.events.remove(window,"scroll",e.scrollHandler),e.events.remove(window,"resize",e.resizeHandler),e.freezeOnBlur&&(d?(e.events.remove(document,"focusout",e.freeze),e.events.remove(document,"focusin",e.resume)):(e.events.remove(window,"blur",e.freeze),e.events.remove(window,"focus",e.resume)))},this.show=function(){var i;for(i=0;i<this.flakes.length;i++)this.flakes[i].o.style.display="block"},this.SnowFlake=function(i,n,s){var t=this;this.type=i,this.x=n||parseInt(r(l-20),10),this.y=isNaN(s)?-r(f)-12:s,this.vX=null,this.vY=null,this.vAmpTypes=[1,1.2,1.4,1.6,1.8],this.vAmp=this.vAmpTypes[this.type]||1,this.melting=!1,this.meltFrameCount=e.meltFrameCount,this.meltFrames=e.meltFrames,this.meltFrame=0,this.twinkleFrame=0,this.active=1,this.fontSize=10+this.type/5*10,this.o=document.createElement("div"),this.o.innerHTML=e.snowCharacter,e.className&&this.o.setAttribute("class",e.className),this.o.style.color=e.snowColor,this.o.style.position=k?"fixed":"absolute",e.useGPU&&p.transform.prop&&(this.o.style[p.transform.prop]="translate3d(0px, 0px, 0px)"),this.o.style.width=e.flakeWidth+"px",this.o.style.height=e.flakeHeight+"px",this.o.style.fontFamily="arial,verdana",this.o.style.cursor="default",this.o.style.overflow="hidden",this.o.style.fontWeight="normal",this.o.style.zIndex=e.zIndex,I.appendChild(this.o),this.refresh=function(){if(isNaN(t.x)||isNaN(t.y))return!1;e.setXY(t.o,t.x,t.y)},this.stick=function(){y||e.targetElement!==document.documentElement&&e.targetElement!==document.body?t.o.style.top=f+w-e.flakeHeight+"px":e.flakeBottom?t.o.style.top=e.flakeBottom+"px":(t.o.style.display="none",t.o.style.bottom="0%",t.o.style.position="fixed",t.o.style.display="block")},this.vCheck=function(){t.vX>=0&&t.vX<.2?t.vX=.2:t.vX<0&&t.vX>-.2&&(t.vX=-.2),t.vY>=0&&t.vY<.2&&(t.vY=.2)},this.move=function(){var a=t.vX*x,o;t.x+=a,t.y+=t.vY*t.vAmp,t.x>=l||l-t.x<e.flakeWidth?t.x=0:a<0&&t.x-e.flakeLeftOffset<-e.flakeWidth&&(t.x=l-e.flakeWidth-1),t.refresh(),o=f+w-t.y+e.flakeHeight,o<e.flakeHeight?(t.active=0,e.snowStick?t.stick():t.recycle()):(e.useMeltEffect&&t.active&&t.type<3&&!t.melting&&Math.random()>.998&&(t.melting=!0,t.melt()),e.useTwinkleEffect&&(t.twinkleFrame<0?Math.random()>.97&&(t.twinkleFrame=parseInt(Math.random()*8,10)):(t.twinkleFrame--,z?t.o.style.opacity=t.twinkleFrame&&t.twinkleFrame%2===0?0:1:t.o.style.visibility=t.twinkleFrame&&t.twinkleFrame%2===0?"hidden":"visible")))},this.animate=function(){t.move()},this.setVelocities=function(){t.vX=b+r(e.vMaxX*.12,.1),t.vY=H+r(e.vMaxY*.12,.1)},this.setOpacity=function(a,o){if(!z)return!1;a.style.opacity=o},this.melt=function(){!e.useMeltEffect||!t.melting?t.recycle():t.meltFrame<t.meltFrameCount?(t.setOpacity(t.o,t.meltFrames[t.meltFrame]),t.o.style.fontSize=t.fontSize-t.fontSize*(t.meltFrame/t.meltFrameCount)+"px",t.o.style.lineHeight=e.flakeHeight+2+e.flakeHeight*.75*(t.meltFrame/t.meltFrameCount)+"px",t.meltFrame++):t.recycle()},this.recycle=function(){t.o.style.display="none",t.o.style.position=k?"fixed":"absolute",t.o.style.bottom="auto",t.setVelocities(),t.vCheck(),t.meltFrame=0,t.melting=!1,t.setOpacity(t.o,1),t.o.style.padding="0px",t.o.style.margin="0px",t.o.style.fontSize=t.fontSize+"px",t.o.style.lineHeight=e.flakeHeight+2+"px",t.o.style.textAlign="center",t.o.style.verticalAlign="baseline",t.x=parseInt(r(l-e.flakeWidth-20),10),t.y=parseInt(r(f)*-1,10)-e.flakeHeight,t.refresh(),t.o.style.display="block",t.active=1},this.recycle(),this.refresh()},this.snow=function(){var i=0,n=null,s,t;for(s=0,t=e.flakes.length;s<t;s++)e.flakes[s].active===1&&(e.flakes[s].move(),i++),e.flakes[s].melting&&e.flakes[s].melt();i<e.flakesMaxActive&&(n=e.flakes[parseInt(r(e.flakes.length),10)],n.active===0&&(n.melting=!0)),e.timer&&p.getAnimationFrame(e.snow)},this.mouseMove=function(i){if(!e.followMouse)return!0;var n=parseInt(i.clientX,10);n<h?x=-F+n/h*F:(n-=h,x=n/h*F)},this.createSnow=function(i,n){var s;for(s=0;s<i;s++)e.flakes[e.flakes.length]=new e.SnowFlake(parseInt(r(Y),10)),(n||s>e.flakesMaxActive)&&(e.flakes[e.flakes.length-1].active=-1);e.targetElement.appendChild(I)},this.timerInit=function(){e.timer=!0,e.snow()},this.init=function(){var i;for(i=0;i<e.meltFrameCount;i++)e.meltFrames.push(1-i/e.meltFrameCount);e.randomizeWind(),e.createSnow(e.flakesMax),e.events.add(window,"resize",e.resizeHandler),e.events.add(window,"scroll",e.scrollHandler),e.freezeOnBlur&&(d?(e.events.add(document,"focusout",e.freeze),e.events.add(document,"focusin",e.resume)):(e.events.add(window,"blur",e.freeze),e.events.add(window,"focus",e.resume))),e.resizeHandler(),e.scrollHandler(),e.followMouse&&e.events.add(d?document:window,"mousemove",e.mouseMove),e.animationInterval=Math.max(20,e.animationInterval),e.timerInit()},this.start=function(i){if(!M)M=!0;else if(i)return!0;if(console.log(e),typeof e.targetElement=="string"){var n=e.targetElement;if(e.targetElement=document.getElementById(n),!e.targetElement)throw new Error('Snowstorm: Unable to get targetElement "'+n+'"')}if(e.targetElement||(e.targetElement=document.body||document.documentElement),e.targetElement!==document.documentElement&&e.targetElement!==document.body&&(e.resizeHandler=e.resizeHandlerAlt,e.usePixelPosition=!0),e.resizeHandler(),e.usePositionFixed=e.usePositionFixed&&!y&&!e.flakeBottom,window.getComputedStyle){console.log(window.getComputedStyle);try{E=window.getComputedStyle(e.targetElement,null).getPropertyValue("position")==="relative"}catch{console.log("failed"),E=!1}}k=e.usePositionFixed,l&&f&&!e.disabled&&(e.init(),e.active=!0)};function A(){window.setTimeout(function(){e.start(!0)},20),e.events.remove(d?document:window,"mousemove",A)}function S(){(!e.excludeMobile||!B)&&A(),e.events.remove(window,"load",S)}return e.autoStart&&e.events.add(window,"load",S,!1),this}export{N as startSnow};
