"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{2334:(t,e,s)=>{s.r(e),s.d(e,{MasonryLayout:()=>h});let o="--_masonry-layout-col-count",i="--_masonry-layout-gap",n=new Map;function l(t,e,s){let o=parseFloat(t.getAttribute(e)||"");return isNaN(o)?s:o}function r(t,e,s){return isNaN(e)?Math.max(1,Math.ceil(t/s)):e}let a=document.createElement("template");a.innerHTML=`
  <style>
    :host {
      display: flex;
      align-items: flex-start;
      justify-content: stretch;
    }

    .column {
	  max-width: calc((100% / var(${o}, 1) - ((var(${i}, 24px) * (var(${o}, 1) - 1) / var(${o}, 1)))));
	  width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .column:not(:last-child) {
      margin-inline-end: var(${i}, 24px);
    }

    .column ::slotted(*) {
      margin-block-end: var(${i}, 24px);
      box-sizing: border-box;
      width: 100%;
    }

    /* Hide the items that has not yet found the correct slot */
    #unset-items {
      opacity: 0;
      position: absolute;
      pointer-events: none;
    }
  </style>
  <div id="unset-items">
    <slot></slot>
  </div>
`;class h extends HTMLElement{static get observedAttributes(){return["maxcolwidth","gap","cols"]}set maxColWidth(t){this.setAttribute("maxcolwidth",t.toString())}get maxColWidth(){return l(this,"maxcolwidth",500)}set cols(t){this.setAttribute("cols",t.toString())}get cols(){return l(this,"cols","auto")}set gap(t){this.setAttribute("gap",t.toString())}get gap(){return l(this,"gap",24)}set debounce(t){this.setAttribute("debounce",t.toString())}get debounce(){return l(this,"debounce",300)}get $columns(){return Array.from(this.shadowRoot.querySelectorAll(".column"))}constructor(){super(),this.debounceId=`layout_${Math.random()}`,this.ro=void 0,this.currentRequestAnimationFrameCallback=void 0,this.attachShadow({mode:"open"}).appendChild(a.content.cloneNode(!0)),this.onSlotChange=this.onSlotChange.bind(this),this.onResize=this.onResize.bind(this),this.layout=this.layout.bind(this),this.$unsetElementsSlot=this.shadowRoot.querySelector("#unset-items > slot")}connectedCallback(){this.$unsetElementsSlot.addEventListener("slotchange",this.onSlotChange),"ResizeObserver"in window?(this.ro=new ResizeObserver(this.onResize),this.ro.observe(this)):window.addEventListener("resize",this.onResize)}disconnectedCallback(){this.$unsetElementsSlot.removeEventListener("slotchange",this.onSlotChange),window.removeEventListener("resize",this.onResize),null!=this.ro&&this.ro.unobserve(this)}attributeChangedCallback(t){"gap"===t&&this.style.setProperty(i,`${this.gap}px`),this.scheduleLayout()}onSlotChange(){(this.$unsetElementsSlot.assignedNodes()||[]).filter(t=>1===t.nodeType).length>0&&this.layout()}onResize(t){let{width:e}=null!=t&&Array.isArray(t)&&t.length>0?t[0].contentRect:{width:this.offsetWidth};r(e,this.cols,this.maxColWidth)!==this.$columns.length&&this.scheduleLayout()}renderCols(t){let e=this.$columns;if(e.length!==t){for(let t of e)t.parentNode&&t.parentNode.removeChild(t);for(let e=0;e<t;e++){let t=document.createElement("div");t.classList.add("column"),t.setAttribute("part",`column column-${e}`);let s=document.createElement("slot");s.setAttribute("name",e.toString()),t.appendChild(s),this.shadowRoot.appendChild(t)}this.style.setProperty(o,t.toString())}}scheduleLayout(t=this.debounce){!function(t,e,s){let o=n.get(s);null!=o&&window.clearTimeout(o),n.set(s,window.setTimeout(t,e))}(this.layout,t,this.debounceId)}layout(){null!=this.currentRequestAnimationFrameCallback&&window.cancelAnimationFrame(this.currentRequestAnimationFrameCallback),this.currentRequestAnimationFrameCallback=requestAnimationFrame(()=>{let t=this.gap,e=Array.from(this.children).filter(t=>1===t.nodeType),s=r(this.offsetWidth,this.cols,this.maxColWidth),o=Array(s).fill(0),i=[];for(let s of e){let e=s.getBoundingClientRect().height,n=function(t){let e=0,s=1/0;return t.forEach((t,o)=>{t<s&&(s=t,e=o)}),e}(o);o[n]+=e+t;let l=n.toString();s.slot!==l&&i.push(()=>s.slot=l)}for(let t of i)t();this.renderCols(s)})}}customElements.define("masonry-layout",h)}}]);