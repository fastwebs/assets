var t,n;t=this,n=function(){function t(){return(t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var n="undefined"!=typeof window,e=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=n&&"IntersectionObserver"in window,o=n&&"classList"in document.createElement("p"),r=n&&window.devicePixelRatio>1,a={elements_selector:".lazy",container:e||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(n){return t({},a,n)},s=function(t,n){var e,i="LazyLoad::Initialized",o=new t(n);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},l="loading",u="loaded",d="applied",f="error",_="native",g="data-",v="ll-status",p=function(t,n){return t.getAttribute(g+n)},b=function(t){return p(t,v)},h=function(t,n){return function(t,n,e){var i=g+n;null!==e?t.setAttribute(i,e):t.removeAttribute(i)}(t,v,n)},m=function(t){return h(t,null)},E=function(t){return null===b(t)},y=function(t){return b(t)===_},w=[l,u,d,f],L=function(t,n,e,i){t&&(void 0===i?void 0===e?t(n):t(n,e):t(n,e,i))},A=function(t,n){o?t.classList.add(n):t.className+=(t.className?" ":"")+n},I=function(t,n){o?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},k=function(t){return t.llTempImage},z=function(t,n){if(n){var e=n._observer;e&&e.unobserve(t)}},O=function(t,n){t&&(t.loadingCount+=n)},x=function(t,n){t&&(t.toLoadCount=n)},C=function(t){for(var n,e=[],i=0;n=t.children[i];i+=1)"SOURCE"===n.tagName&&e.push(n);return e},N=function(t,n,e){e&&t.setAttribute(n,e)},M=function(t,n){t.removeAttribute(n)},R=function(t){return!!t.llOriginalAttrs},G=function(t){if(!R(t)){var n={};n.src=t.getAttribute("src"),n.srcset=t.getAttribute("srcset"),n.sizes=t.getAttribute("sizes"),t.llOriginalAttrs=n}},T=function(t){if(R(t)){var n=t.llOriginalAttrs;N(t,"src",n.src),N(t,"srcset",n.srcset),N(t,"sizes",n.sizes)}},j=function(t,n){N(t,"sizes",p(t,n.data_sizes)),N(t,"srcset",p(t,n.data_srcset)),N(t,"src",p(t,n.data_src))},D=function(t){M(t,"src"),M(t,"srcset"),M(t,"sizes")},F=function(t,n){var e=t.parentNode;e&&"PICTURE"===e.tagName&&C(e).forEach(n)},P={IMG:function(t,n){F(t,(function(t){G(t),j(t,n)})),G(t),j(t,n)},IFRAME:function(t,n){N(t,"src",p(t,n.data_src))},VIDEO:function(t,n){!function(t,n){C(t).forEach(n)}(t,(function(t){N(t,"src",p(t,n.data_src))})),N(t,"poster",p(t,n.data_poster)),N(t,"src",p(t,n.data_src)),t.load()}},S=function(t,n){var e=P[t.tagName];e&&e(t,n)},V=function(t,n,e){A(t,n.class_applied),h(t,d),n.unobserve_completed&&z(t,n),L(n.callback_applied,t,e)},U=function(t,n,e){O(e,1),A(t,n.class_loading),h(t,l),L(n.callback_loading,t,e)},$=["IMG","IFRAME","VIDEO"],q=function(t,n){!n||function(t){return t.loadingCount>0}(n)||function(t){return t.toLoadCount>0}(n)||L(t.callback_finish,n)},H=function(t,n,e){t.addEventListener(n,e),t.llEvLisnrs[n]=e},B=function(t,n,e){t.removeEventListener(n,e)},J=function(t){return!!t.llEvLisnrs},K=function(t){if(J(t)){var n=t.llEvLisnrs;for(var e in n){var i=n[e];B(t,e,i)}delete t.llEvLisnrs}},Q=function(t,n,e){!function(t){delete t.llTempImage}(t),O(e,-1),function(t){t&&(t.toLoadCount-=1)}(e),I(t,n.class_loading),n.unobserve_completed&&z(t,e)},W=function(t,n,e){var i=k(t)||t;J(i)||function(t,n,e){J(t)||(t.llEvLisnrs={});var i="VIDEO"===t.tagName?"loadeddata":"load";H(t,i,n),H(t,"error",e)}(i,(function(o){!function(t,n,e,i){var o=y(n);Q(n,e,i),A(n,e.class_loaded),h(n,u),L(e.callback_loaded,n,i),o||q(e,i)}(0,t,n,e),K(i)}),(function(o){!function(t,n,e,i){var o=y(n);Q(n,e,i),A(n,e.class_error),h(n,f),L(e.callback_error,n,i),o||q(e,i)}(0,t,n,e),K(i)}))},X=function(t,n,e){!function(t){t.llTempImage=document.createElement("IMG")}(t),W(t,n,e),function(t,n,e){var i=p(t,n.data_bg),o=p(t,n.data_bg_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage='url("'.concat(a,'")'),k(t).setAttribute("src",a),U(t,n,e))}(t,n,e),function(t,n,e){var i=p(t,n.data_bg_multi),o=p(t,n.data_bg_multi_hidpi),a=r&&o?o:i;a&&(t.style.backgroundImage=a,V(t,n,e))}(t,n,e)},Y=function(t,n,e){!function(t){return $.indexOf(t.tagName)>-1}(t)?X(t,n,e):function(t,n,e){W(t,n,e),S(t,n),U(t,n,e)}(t,n,e)},Z=function(t,n,e,i){e.cancel_on_exit&&function(t){return b(t)===l}(t)&&"IMG"===t.tagName&&(K(t),function(t){F(t,(function(t){D(t)})),D(t)}(t),function(t){F(t,(function(t){T(t)})),T(t)}(t),I(t,e.class_loading),O(i,-1),m(t),L(e.callback_cancel,t,n,i))},tt=function(t,n,e,i){h(t,"entered"),A(t,e.class_entered),I(t,e.class_exited),function(t,n,e){n.unobserve_entered&&z(t,e)}(t,e,i),L(e.callback_enter,t,n,i),function(t){return w.indexOf(b(t))>=0}(t)||Y(t,e,i)},nt=["IMG","IFRAME"],et=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},it=function(t,n,e){t.forEach((function(t){-1!==nt.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),function(t,n,e){W(t,n,e),S(t,n),h(t,_)}(t,n,e))})),x(e,0)},ot=function(t,n,e){t.forEach((function(t){return function(t){return t.isIntersecting||t.intersectionRatio>0}(t)?tt(t.target,t,n,e):function(t,n,e,i){E(t)||(A(t,e.class_exited),Z(t,n,e,i),L(e.callback_exit,t,n,i))}(t.target,t,n,e)}))},rt=function(t,n){i&&!et(t)&&(n._observer=new IntersectionObserver((function(e){ot(e,t,n)}),function(t){return{root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}}(t)))},at=function(t){return Array.prototype.slice.call(t)},ct=function(t){return t.container.querySelectorAll(t.elements_selector)},st=function(t){return function(t){return b(t)===f}(t)},lt=function(t,n){return function(t){return at(t).filter(E)}(t||ct(n))},ut=function(t,n){var e;(e=ct(t),at(e).filter(st)).forEach((function(n){I(n,t.class_error),m(n)})),n.update()},dt=function(t,e){var i=c(t);this._settings=i,this.loadingCount=0,rt(i,this),function(t,e){n&&window.addEventListener("online",(function(){ut(t,e)}))}(i,this),this.update(e)};return dt.prototype={update:function(t){var n,o,r=this._settings,a=lt(t,r);x(this,a.length),!e&&i?et(r)?it(a,r,this):(n=this._observer,o=a,function(t){t.disconnect()}(n),function(t,n){n.forEach((function(n){t.observe(n)}))}(n,o)):this.loadAll(a)},destroy:function(){this._observer&&this._observer.disconnect(),ct(this._settings).forEach((function(t){delete t.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){var n=this,e=this._settings;lt(t,e).forEach((function(t){z(t,n),Y(t,e,n)}))}},dt.load=function(t,n){var e=c(n);Y(t,e)},dt.resetStatus=function(t){m(t)},n&&function(t,n){if(n)if(n.length)for(var e,i=0;e=n[i];i+=1)s(t,e);else s(t,n)}(dt,window.lazyLoadOptions),dt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).LazyLoad=n(),window.lzy=new LazyLoad({});