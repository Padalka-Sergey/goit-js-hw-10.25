import{a as i}from"./assets/vendor-BafiVLTW.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();i.defaults.baseURL="https://api.thecatapi.com/v1";i.defaults.headers.common["x-api-key"]="live_dQuAF2pHJj23iJ2FMfklaGTDoTtwEarWY1Oy4DhSrDVaK6BwG3daRESWIuzSfuis";i.defaults.headers.post["Content-Type"]="application/json";function u(r){const{makeMarkupSelect:o,showSelect:c,removeLoader:n,showError:e}=r;i.get("/breeds").then(({data:t})=>{o(t),c(),n()}).catch(t=>{e(),n(),console.log(t)})}function f(r){const{selectedValue:o,makeMarkupCat:c,removeLoader:n,showError:e}=r;i.get(`images/search?breed_ids=${o}`).then(({data:t})=>{c(t),n()}).catch(t=>{e(),n(),console.log(t)})}const s={select:document.querySelector(".breed-select"),catInfo:document.querySelector(".cat-info"),textLoader:document.querySelector(".loader"),textError:document.querySelector(".error")};u({makeMarkupSelect:m,showSelect:L,removeLoader:d,showError:l});s.select.addEventListener("change",p);function m(r){const o=r.map(c=>`<option value=${c.id}>${c.name}</option>`).join("");s.select.insertAdjacentHTML("beforeend",o)}function p(r){const o=r.currentTarget.value;f({selectedValue:o,makeMarkupCat:h,removeLoader:d,showError:l}),s.catInfo.innerHTML="",v()}function h(r){const o=`<img src=${r[0].url} alt=${r[0].breeds[0].name}
width="350"/><div class="text-info"><h1>${r[0].breeds[0].name}</h1><p>${r[0].breeds[0].description}</p><p><b>Temperament:</b> ${r[0].breeds[0].temperament}</p></div>`;s.catInfo.insertAdjacentHTML("beforeend",o)}function L(){s.select.classList.remove("is-notActive-select")}function d(){s.textLoader.classList.add("is-notActive-loader")}function v(){s.textLoader.classList.remove("is-notActive-loader")}function l(){s.textError.classList.remove("is-notActive-error")}
//# sourceMappingURL=index.js.map
