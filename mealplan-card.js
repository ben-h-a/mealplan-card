const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=/* @__PURE__ */Symbol(),r=/* @__PURE__ */new WeakMap;let s=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=r.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(i,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const r=1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new s(r,e,i)},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:o,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:c,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,m=u.trustedTypes,f=m?m.emptyScript:"",g=u.reactiveElementPolyfillSupport,y=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(r){i=null}}return i}},b=(e,t)=>!o(e,t),_={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=/* @__PURE__ */Symbol("metadata"),u.litPropertyMetadata??=/* @__PURE__ */new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=/* @__PURE__ */Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&l(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const n=r?.call(this);s?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...c(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=/* @__PURE__ */new Map;for(const[t,i]of this.elementProperties){const e=this._$Eu(t,i);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=/* @__PURE__ */new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{if(t)i.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of r){const r=document.createElement("style"),s=e.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=r;const n=s.fromAttribute(t,e.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(e,t,i,r=!1,s){if(void 0!==e){const n=this.constructor;if(!1===r&&(s=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??b)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},n){i&&!(this._$Ej??=/* @__PURE__ */new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==s||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=/* @__PURE__ */new Map,$[y("finalized")]=/* @__PURE__ */new Map,g?.({ReactiveElement:$}),(u.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,A=e=>e,x=w.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+T,k=`<${M}>`,O=document,P=()=>O.createComment(""),C=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,N="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,j=/>/g,H=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,z=(Y=1,(e,...t)=>({_$litType$:Y,strings:e,values:t})),q=/* @__PURE__ */Symbol.for("lit-noChange"),F=/* @__PURE__ */Symbol.for("lit-nothing"),V=/* @__PURE__ */new WeakMap,W=O.createTreeWalker(O,129);var Y;function Q(e,t){if(!D(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}class J{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,n=0;const a=e.length-1,o=this.parts,[l,d]=((e,t)=>{const i=e.length-1,r=[];let s,n=2===t?"<svg>":3===t?"<math>":"",a=I;for(let o=0;o<i;o++){const t=e[o];let i,l,d=-1,c=0;for(;c<t.length&&(a.lastIndex=c,l=a.exec(t),null!==l);)c=a.lastIndex,a===I?"!--"===l[1]?a=U:void 0!==l[1]?a=j:void 0!==l[2]?(B.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=H):void 0!==l[3]&&(a=H):a===H?">"===l[0]?(a=s??I,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,i=l[1],a=void 0===l[3]?H:'"'===l[3]?L:R):a===L||a===R?a=H:a===U||a===j?a=I:(a=H,s=void 0);const h=a===H&&e[o+1].startsWith("/>")?" ":"";n+=a===I?t+k:d>=0?(r.push(i),t.slice(0,d)+S+t.slice(d)+T+h):t+T+(-2===d?o:h)}return[Q(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]})(e,t);if(this.el=J.createElement(l,i),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=W.nextNode())&&o.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(S)){const t=d[n++],i=r.getAttribute(e).split(T),a=/([.?@])?(.*)/.exec(t);o.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?ee:"?"===a[1]?te:"@"===a[1]?ie:Z}),r.removeAttribute(e)}else e.startsWith(T)&&(o.push({type:6,index:s}),r.removeAttribute(e));if(B.test(r.tagName)){const e=r.textContent.split(T),t=e.length-1;if(t>0){r.textContent=x?x.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],P()),W.nextNode(),o.push({type:2,index:++s});r.append(e[t],P())}}}else if(8===r.nodeType)if(r.data===M)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=r.data.indexOf(T,e+1));)o.push({type:7,index:s}),e+=T.length-1}s++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function G(e,t,i=e,r){if(t===q)return t;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const n=C(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(e),s._$AT(e,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(t=G(e,s._$AS(e,t.values),s,r)),t}class K{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??O).importNode(t,!0);W.currentNode=r;let s=W.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let t;2===o.type?t=new X(s,s.nextSibling,this,e):1===o.type?t=new o.ctor(s,o.name,o.strings,this,e):6===o.type&&(t=new re(s,this,e)),this._$AV.push(t),o=i[++a]}n!==o?.index&&(s=W.nextNode(),n++)}return W.currentNode=O,r}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),C(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&C(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=J.createElement(Q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new K(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new J(e)),t}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new X(this.O(P()),this.O(P()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(e,t=this,i,r){const s=this.strings;let n=!1;if(void 0===s)e=G(this,e,t,0),n=!C(e)||e!==this._$AH&&e!==q,n&&(this._$AH=e);else{const r=e;let a,o;for(e=s[0],a=0;a<s.length-1;a++)o=G(this,r[i+a],t,a),o===q&&(o=this._$AH[a]),n||=!C(o)||o!==this._$AH[a],o===F?e=F:e!==F&&(e+=(o??"")+s[a+1]),this._$AH[a]=o}n&&!r&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class te extends Z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class ie extends Z{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??F)===q)return;const i=this._$AH,r=e===F&&i!==F||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==F&&(i===F||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const se=w.litHtmlPolyfillSupport;se?.(J,X),(w.litHtmlVersions??=[]).push("3.3.2");const ne=globalThis;let ae=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const r=i?.renderBefore??t;let s=r._$litPart$;if(void 0===s){const e=i?.renderBefore??null;r._$litPart$=s=new X(t.insertBefore(P(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};ae._$litElement$=!0,ae.finalized=!0,ne.litElementHydrateSupport?.({LitElement:ae});const oe=ne.litElementPolyfillSupport;oe?.({LitElement:ae}),(ne.litElementVersions??=[]).push("4.2.2");const le=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},ce=(e=de,t,i)=>{const{kind:r,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=/* @__PURE__ */new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===r){const{name:r}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,s,e,!0,i)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=i;return function(i){const s=this[r];t.call(this,i),this.requestUpdate(r,s,e,!0,i)}}throw Error("Unsupported decorator location: "+r)};function he(e){return(t,i)=>"object"==typeof i?ce(e,t,i):((e,t,i)=>{const r=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),r?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function pe(e){return he({...e,state:!0,attribute:!1})}const ue={en:{common:{back:"Back",cancel:"Cancel",save:"Save",delete:"Delete",close:"Close",portion:"Portion",time:"Time",days:"Days",enabled:"Enabled",disabled:"Disabled",every_day:"Every day",no_days:"No days",add_meal:"Add Meal"},days:{short:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],full:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},main:{manage_schedules:"Manage Schedules",configuration_required:"Configuration required",configuration_instructions:"Please configure a sensor and manufacturer in the card settings."},schedule_view:{manage_schedules:"Manage Schedules",edit_feeding_time:"Edit Feeding Time",no_meals_scheduled:"No meals scheduled",click_add_meal_to_get_started:"Click 'Add Meal' below to create your first feeding schedule",sensor_unavailable:"Entity Unavailable",sensor_unavailable_message:"The selected sensor is not available. You cannot save changes until the device is accessible."},meal_card:{edit_meal:"Edit Meal",confirm_delete:"Are you sure you want to delete this meal?"},config:{portion_label:"Portion size",portion_helper:"Grams per portion",sensor_label:"Meal Plan Sensor",sensor_helper:"Select the sensor or text entity containing meal plan data",manufacturer_label:"Feeder Profile",manufacturer_helper:"Select your feeder manufacturer and model",title_label:"Title",helper_label:"Helper Entity (Optional)",helper_helper:"This input_text helper acts as a backup storage for your meal plan schedule. When the sensor is unavailable, the card will restore the schedule from this helper to prevent data loss.",transport_label:"Transport Type",transport_helper:"How to write data: Sensor (via set_value service) or MQTT (publish to zigbee2mqtt topic)"},overview:{schedules:"Schedules",active:"Active",today:"Today",avg_week:"Avg/Week"}},sv:{common:{back:"Tillbaka",cancel:"Avbryt",save:"Spara",delete:"Ta bort",close:"Stäng",portion:"Portion",time:"Tid",days:"Dagar",enabled:"Aktiverad",disabled:"Inaktiverad",every_day:"Varje dag",no_days:"Inga dagar",add_meal:"Lägg till måltid"},days:{short:["Mån","Tis","Ons","Tor","Fre","Lör","Sön"],full:["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"]},main:{manage_schedules:"Hantera scheman",configuration_required:"Konfiguration krävs",configuration_instructions:"Vänligen konfigurera en sensor och tillverkare i kortets inställningar."},schedule_view:{manage_schedules:"Hantera scheman",edit_feeding_time:"Redigera matningstid",no_meals_scheduled:"Inga måltider schemalagda",click_add_meal_to_get_started:"Klicka på 'Lägg till måltid' nedan för att skapa ditt första matningsschema",sensor_unavailable:"Entiteten otillgänglig",sensor_unavailable_message:"Den valda entitete är inte tillgänglig. Du kan inte spara ändringar förrän enheten är åtkomlig."},meal_card:{edit_meal:"Redigera måltid",confirm_delete:"Är du säker på att du vill ta bort denna måltid?"},config:{portion_label:"Portionsstorlek",portion_helper:"Gram per portion",sensor_label:"Meal Plan-sensor",sensor_helper:"Välj sensorn eller textentiteten som innehåller matplanens data",manufacturer_label:"Matarprofil",manufacturer_helper:"Välj din tillverkares modell",title_label:"Titel",helper_label:"Hjälparentitet (valfritt)",helper_helper:"Denna input_text fungerar som backup för ditt schema. När sensorn är otillgänglig återställer kortet schemat från hjälparen för att undvika dataförlust.",transport_label:"Transporttyp",transport_helper:"Hur data skrivs: Sensor (via set_value) eller MQTT (publish till zigbee2mqtt topic)"},overview:{schedules:"Scheman",active:"Aktiva",today:"Idag",avg_week:"Snitt/vecka"}},ru:{common:{back:"Назад",cancel:"Отмена",save:"Сохранить",delete:"Удалить",close:"Закрыть",portion:"Порция",time:"Время",days:"Дни",enabled:"Включено",disabled:"Выключено",every_day:"Каждый день",no_days:"Нет дней",add_meal:"Добавить питание"},days:{short:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],full:["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"]},main:{manage_schedules:"Управлять расписанием",configuration_required:"Требуется настройка",configuration_instructions:"Пожалуйста укажите сенсор и производителя в настройках карточки."},schedule_view:{manage_schedules:"Управление расписанием",edit_feeding_time:"Редактировать время кормления",no_meals_scheduled:"Не запланировано кормления",click_add_meal_to_get_started:"Нажмите 'Add Meal' для создания первого плана кормежки",sensor_unavailable:"Сущность недоступна",sensor_unavailable_message:"Выбранный сенсор недоступен. Вы не можете сохранить изменения, пока устройство не станет доступно."},meal_card:{edit_meal:"Редактировать кормежку",confirm_delete:"Вы действительно хотите удалить кормежку?"},config:{portion_label:"Размер порции",portion_helper:"Грамм в порции",sensor_label:"Сенсор расписания кормушки",sensor_helper:"Выберите сенсор содержащий данные кормушки",manufacturer_label:"Профиль кормушки",manufacturer_helper:"Выберите производителя и модель кормушки",title_label:"Название",helper_label:"Сущность помощника (не обязательно)",helper_helper:"Этот input_text помощник Работает как экстренное хранилище данных вашего плана. Когда  сенсор не доступен, карточка будет брать данные из этого помощника чтобы не потерять данные.",transport_label:"Тип транспорта",transport_helper:"Как записать данные: Сенсор (через set_value сервис) или MQTT (опубликовать топик в zigbee2mqtt)"},overview:{schedules:"Расписаний",active:"Активно",today:"Сегодня",avg_week:"Среднее/нед."}},es:{common:{back:"Atrás",cancel:"Cancelar",save:"Guardar",delete:"Eliminar",close:"Cerrar",portion:"Porción",time:"Hora",days:"Días",enabled:"Activado",disabled:"Desactivado",every_day:"Todos los días",no_days:"Sin días",add_meal:"Añadir comida"},days:{short:["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"],full:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]},main:{manage_schedules:"Gestionar horarios",configuration_required:"Se requiere configuración",configuration_instructions:"Configura un sensor y el fabricante en los ajustes de la tarjeta."},schedule_view:{manage_schedules:"Gestionar horarios",edit_feeding_time:"Editar hora de comida",no_meals_scheduled:"No hay comidas programadas",click_add_meal_to_get_started:"Pulsa 'Añadir comida' abajo para crear tu primer horario",sensor_unavailable:"Entidad no disponible",sensor_unavailable_message:"La entidad seleccionada no está disponible. No puedes guardar cambios hasta que el dispositivo esté accesible."},meal_card:{edit_meal:"Editar comida",confirm_delete:"¿Seguro que quieres eliminar esta comida?"},config:{portion_label:"Tamaño de porción",portion_helper:"Gramos por porción",sensor_label:"Entidad del plan de comidas",sensor_helper:"Selecciona la entidad (sensor o texto) que contiene el plan de comidas",manufacturer_label:"Perfil del comedero",manufacturer_helper:"Selecciona el fabricante y modelo de tu comedero",title_label:"Título",helper_label:"Entidad auxiliar (opcional)",helper_helper:"Este input_text actúa como copia de seguridad del horario. Si el sensor no está disponible, la tarjeta restaurará el horario desde aquí para evitar pérdida de datos.",transport_label:"Tipo de transporte",transport_helper:"Cómo escribir datos: Sensor (vía servicio set_value) o MQTT (publicar en el topic zigbee2mqtt)"},overview:{schedules:"Horarios",active:"Activos",today:"Hoy",avg_week:"Media/semana"}}};let me="en";function fe(e){if(!e)return;const t=e.toLowerCase(),i=t.split("-")[0];t in ue?me=t:i in ue&&(me=i)}function ge(e,t){return t.split(".").reduce((e,t)=>{if(e&&"object"==typeof e)return e[t]},e)}function ye(e){const t=ge(ue[me],e)??ge(ue.en,e)??e;return"string"==typeof t?t:e}var ve=/* @__PURE__ */(e=>(e.TIME="time",e.PORTION="portion",e.SIZE="size",e.DAYS="days",e.ENABLED="enabled",e.EDIT="edit",e.DELETE="delete",e.ADD="add",e))(ve||{}),be=/* @__PURE__ */(e=>(e.SENSOR="sensor",e.MQTT="mqtt",e))(be||{});const _e=/\{([A-Z_]+)(?:\[(\d+)\])?\:(\d+)\}/g;var $e=/* @__PURE__ */(e=>(e.DAYS="DAYS",e.HOUR="HOUR",e.MINUTE="MINUTE",e.PORTION="PORTION",e.ENABLED="ENABLED",e.FILL="FILL",e))($e||{});const we=/* @__PURE__ */new Set(["DAYS"]),Ae=(e,t)=>`{${e}:${t}}`;var xe=/* @__PURE__ */(e=>(e.BASE64="base64",e.HEX="hex",e.DICT="dict",e))(xe||{});class Ee{constructor(e,t){if(!e)throw new Error("Template is required");this.tokens=Ee.parseTemplate(e),this.profile=t,this.chunkLen=Ee.calculateChunkLength(this.tokens)}static parseTemplate(e){if(!e||"string"!=typeof e)throw new Error("Invalid template");const t=[];_e.lastIndex=0;let i,r=0;for(;null!==(i=_e.exec(e));){if(i.index!==r)throw new Error("Invalid template: unexpected characters between tokens");const e=i[1],s=i[2],n=i[3];if(!e||!n)throw new Error("Invalid token format in template");const a=void 0!==s?parseInt(s,10):void 0;if(void 0!==a&&(!Number.isInteger(a)||a<0))throw new Error("Invalid token index");const o=parseInt(n,10);if(!Number.isInteger(o)||o<=0)throw new Error("Invalid token length");t.push({name:e,index:a,length:o}),r=_e.lastIndex}if(r!==e.length)throw new Error("Invalid template: tokens must exactly cover template");return t}static calculateChunkLength(e){return e.reduce((e,t)=>e+t.length,0)}encode(e){return e.map(e=>this.serializeEntry(e)).join("")}decode(e){if(e.length%this.chunkLen!==0)throw new Error("Invalid templated meal plan length");const t=[];for(let i=0;i<e.length;i+=this.chunkLen){const r=e.slice(i,i+this.chunkLen);t.push(this.parseEntry(r))}return t}serializeEntry(e){const t=this.profile.encode?this.profile.encode(e):e;return this.tokens.map(e=>{if(e.name===$e.FILL)return"0".repeat(e.length);const i=e.name.toLowerCase(),r=this.getFieldValue(t,i,e.index);return null==r?"".padStart(e.length,"0"):this.formatField(e.name,r,e.length)}).join("")}parseEntry(e){let t=0;const i={};for(const r of this.tokens){const s=e.slice(t,t+r.length);if(t+=r.length,r.name===$e.FILL)continue;const n=r.name.toLowerCase(),a=this.parseField(r.name,s);null!=a&&this.assignFieldValue(i,n,r.index,a)}if(this.profile.decode){return this.profile.decode(i)}return i}formatField(e,t,i){return this.shouldUseHex(e)?t.toString(16).padStart(i,"0"):t.toString(10).padStart(i,"0")}parseField(e,t){return this.shouldUseHex(e)?parseInt(t,16)||0:parseInt(t,10)||0}getFieldValue(e,t,i){if("portion"===t){const t=e.portions;return Array.isArray(t)?t[i??0]:void 0}if(void 0===i)return e[t];const r=e[t];return Array.isArray(r)?r[i]:void 0}assignFieldValue(e,t,i,r){if("portion"===t){const t=Array.isArray(e.portions)?e.portions:[];return t[i??0]=r,void(e.portions=t)}if(void 0===i)return void(e[t]=r);const s=Array.isArray(e[t])?e[t]:[];s[i]=r,e[t]=s}shouldUseHex(e){const t=e.split("[")[0];return!this.profile.encodingType||this.profile.encodingType===xe.BASE64||we.has(t)}}class Se{constructor(e){if(!e)throw new Error("Invalid device profile for encoding/decoding");this.profile=e}}const Te={[xe.BASE64]:class extends Se{hexToBase64(e){const t=[];for(let i=0;i<e.length;i+=2)t.push(parseInt(e.slice(i,i+2),16));return btoa(String.fromCharCode(...t))}base64ToHex(e){let t;try{t=atob(e)}catch{throw new Error("Invalid base64")}const i=new Uint8Array([...t].map(e=>e.charCodeAt(0)));return Array.from(i).map(e=>e.toString(16).padStart(2,"0")).join("")}encode(e){const t=this.profile.encodingTemplate;if(!t)throw new Error("encodingTemplate is required for Base64Encoder");const i=new Ee(t,this.profile).encode(e);return this.hexToBase64(i)}decode(e){if(!e||"unknown"===e)return[];const t=this.profile.encodingTemplate;if(!t)throw new Error("encodingTemplate is required for Base64Encoder");const i=this.base64ToHex(e);return new Ee(t,this.profile).decode(i)}},[xe.HEX]:class extends Se{encode(e){const t=this.profile.encodingTemplate;if(!t)throw new Error("encodingTemplate is required for TemplateBasedEncoder");return new Ee(t,this.profile).encode(e)}decode(e){const t=this.profile.encodingTemplate;if(!t)throw new Error("encodingTemplate is required for TemplateBasedEncoder");return new Ee(t,this.profile).decode(e)}},[xe.DICT]:class extends Se{encode(e){const t=this.profile.encode?this.profile.encode(e):e;return JSON.stringify(t)}decode(e){if(!e||"unknown"===e)return[];try{const t=JSON.parse(e),i=this.profile.decode?this.profile.decode(t):t;return Array.isArray(i)?i:[]}catch{throw new Error("Invalid JSON data for DICT encoding")}}}};const Me=(e=>{const t=t=>(...i)=>t(e,...i);return{debug:t(console.debug),info:t(console.info),warn:t(console.warn),error:t(console.error)}})("[MealPlanCard]");function ke(e,t){const i=t??0;return`${(e??0).toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`}function Oe(e,t){return 60*(e??0)+(t??0)}function Pe(e){return void 0===e.enabled||1===e.enabled}function Ce(e,t){return e?.fields.includes(t)??!1}function De(e){if(void 0!==e?.portionCount)return e.portionCount;const t=e?.encodingTemplate;if(t){const e=/PORTION\[(\d+)\]/g;let i,r=-1;for(;null!==(i=e.exec(t));){const e=parseInt(i[1],10);Number.isNaN(e)||(r=Math.max(r,e))}if(r>=0)return r+1}return 1}function Ne(e,t){return JSON.stringify(e)===JSON.stringify(t)}class Ie{constructor(e,t,i,r){this.host=e,this._meals=[],this.subscribers=/* @__PURE__ */new Set,this.host.addController(this),this.profile=t,this.hass=i,this.config=r,this.encoder=function(e){if(!e)throw new Error("Device profile is required for encoder initialization");return new(0,Te[e.encodingType])(e)}(t),this.writeValue={[be.SENSOR]:e=>this.setSensorValue(e),[be.MQTT]:e=>this.publishMQTT(e)}[this.config.transport_type],this.hass?this.updateFromHass().catch(e=>{Me.error("Failed to load initial data:",e)}):Me.warn("Initialized without hass object. Data loading will be skipped.")}get meals(){return this._meals}set meals(e){this._meals=e,Me.debug("Notify subscribers of meals set to:",e),this.notifySubscribers()}hostConnected(){}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.host.requestUpdate(),this.subscribers.forEach(e=>e())}normalizeMeals(e){const t=this.profile.fields.includes(ve.PORTION)?this.profile.portionCount??1:0;return e.map(e=>{const i={...e},r=Array.isArray(e.portions)?[...e.portions]:[];return t>0&&r.length<t&&(r.length=t),t>0&&(i.portions=r),i})}isValidState(e){return"string"==typeof e&&"unknown"!==e&&"unavailable"!==e&&""!==e.trim()}getEntityValue(e){const t=this.hass.states?.[e],i=t?.state;return this.isValidState(i)?i:(Me.debug("Ignoring invalid state value:",i,"for entity:",e),null)}async setEntityValue(e,t){if(!e)return void Me.debug("No entity ID provided for setting value.");const i=e.split(".")[0];i?(Me.debug("Setting entity",e,"to value:",t),await this.hass.callService(i,"set_value",{entity_id:e,value:t})):Me.debug("Domain could not be determined from entity ID:",e)}async updateFromHass(e=!0){const t=this.getEntityValue(this.config.sensor),i=this.config.helper?this.getEntityValue(this.config.helper):null;let r=null;if(t?r=this.encoder.decode(t):i&&(r=this.encoder.decode(i)),e){const e=r?this.normalizeMeals([...r]):[];if(Ne(e,this.meals))Me.debug("Skipping update - meals unchanged",this.meals);else{this.meals=e;const r=(t?"sensor":i&&"helper")||"none";Me.debug("Meals updated from HA",{source:r,count:e.length,meals:e})}}}async saveMeals(e){Me.debug("Saving meals:",e),this.meals=[...e],await this.writeValue(this.encoder.encode(e))}async setSensorValue(e){await this.setEntityValue(this.config.sensor,e),this.config.helper&&await this.setEntityValue(this.config.helper,e)}async publishMQTT(e){const t=this.config.sensor.split("."),i=`zigbee2mqtt/${t[1]?.split("_")[0]||t[1]}/set`;Me.debug("Publishing MQTT to topic",i,"with value:",e),await this.hass.callService("mqtt","publish",{topic:i,payload:e})}}const Ue=e=>{const t=t=>{if(void 0===t.days)return t;let i=0;return e.forEach(([e,r])=>{t.days&1<<e&&(i|=1<<r)}),{...t,days:127&i}},i=t=>{const i=t;if(void 0===i.days)return t;let r=0;const s=127&i.days;return e.forEach(([e,t])=>{s&1<<t&&(r|=1<<e)}),{...i,days:r}};return{encode:e=>Array.isArray(e)?e.map(t):t(e),decode:e=>Array.isArray(e)?e.map(i):i(e)}};const je=`${Ae($e.DAYS,2)}${Ae($e.HOUR,2)}${Ae($e.MINUTE,2)}${Ae($e.PORTION,2)}${Ae($e.ENABLED,2)}`,He=`${Ae($e.HOUR,2)}${Ae($e.MINUTE,2)}${Ae($e.PORTION,2)}${Ae($e.ENABLED,2)}`,Re=[ve.TIME,ve.PORTION,ve.DAYS,ve.ENABLED,ve.EDIT,ve.DELETE,ve.ADD],Le=[ve.TIME,ve.PORTION,ve.ENABLED,ve.EDIT],Be=[{manufacturer:"Cleverio",models:["PF100"],encodingType:xe.BASE64,encodingTemplate:je,fields:Re},{manufacturer:"HoneyGuardian",models:["S56"],encodingType:xe.BASE64,encodingTemplate:He,fields:Le},{manufacturer:"Fukumaru-W",models:["f1y6wo"],encodingType:xe.BASE64,encodingTemplate:je,fields:Re},{manufacturer:"Yuposl",models:["enyxp8"],encodingType:xe.BASE64,encodingTemplate:je,fields:Re},{manufacturer:"Arlec",models:["PF002HA"],encodingType:xe.BASE64,encodingTemplate:je,fields:Re},{manufacturer:"PetLibro",models:["000004ajdj"],encodingType:xe.BASE64,encodingTemplate:je,fields:Re},{manufacturer:"MolyPet",models:["F02W"],encodingType:xe.BASE64,encodingTemplate:je,fields:Re},{manufacturer:"PetNest",models:[],encodingType:xe.HEX,encodingTemplate:`${Ae($e.DAYS,2)}${Ae($e.HOUR,2)}${Ae($e.MINUTE,2)}${Ae($e.PORTION,2)}${Ae($e.ENABLED,1)}${Ae($e.FILL,6)}`,fields:Re},{manufacturer:"Petrust",models:[],encodingType:xe.BASE64,encodingTemplate:je,fields:Re},{manufacturer:"Meowmatic",models:[],encodingType:xe.BASE64,encodingTemplate:je,fields:Re},{manufacturer:"Puppy Kitty",models:[],encodingType:xe.HEX,encodingTemplate:`${Ae($e.DAYS,2)}${Ae($e.HOUR,2)}${Ae($e.MINUTE,2)}${Ae($e.PORTION,1)}${Ae($e.ENABLED,1)}`,fields:Re,...Ue([[5,0],[4,1],[3,2],[2,3],[0,4],[1,5],[6,6]])},{manufacturer:"Aqara",models:["C1"],encodingType:xe.DICT,fields:[ve.TIME,ve.PORTION,ve.SIZE,ve.DAYS,ve.EDIT,ve.DELETE,ve.ADD],portionCount:1,...function(e,t,i){const r=i?Object.fromEntries(Object.entries(i).map(([e,t])=>[t,e])):void 0,s=(e,t)=>{const i={},r=e=>{const t=e.match(/^([^\[]+)\[(\d+)\]$/);if(!t)return null;const i=t[1],r=t[2];if(!r)return null;const s=parseInt(r,10);return!i||Number.isNaN(s)?null:{base:i,index:s}},s=t=>{const i=r(t);if(!i)return e[t];const s=e[i.base];return Array.isArray(s)?s[i.index]:void 0},n=(e,t)=>{const s=r(e);if(!s)return void(i[e]=t);const n=Array.isArray(i[s.base])?i[s.base]:[];n[s.index]=t,i[s.base]=n},a=/* @__PURE__ */new Set;if(t)for(const[o,l]of Object.entries(t)){const e=s(o);null!=e&&n(l,e);const t=r(o);t&&a.add(t.base)}for(const[o,l]of Object.entries(e))null!==l&&(t?.[o]||a.has(o)||(i[o]=l));return i};return{encode:r=>{const n=Array.isArray(r)?r:[r];return{[e]:n.map(e=>{const r=t?.encode?t.encode(e):e;return s(r,i)})}},decode:i=>{const n=i,a=Array.isArray(n)?n:n[e];return Array.isArray(a)?a.map(e=>{const i=s(e,r);return t?.decode?t.decode(i):i}):[]}}}("schedule",(e=>{const t={};return Object.entries(e).forEach(([e,i])=>{t[i]=parseInt(e,10)}),{encode:t=>{if(void 0===t.days)return t;const i=void 0!==e[t.days]?e[t.days]:t.days;return{...t,days:i}},decode:e=>{if(void 0===e.days)return e;const i="string"==typeof e.days&&void 0!==t[e.days]?t[e.days]:e.days;return{...e,days:i}}}})({127:"everyday",31:"workdays",96:"weekend",1:"mon",2:"tue",4:"wed",8:"thu",16:"fri",32:"sat",64:"sun",85:"mon-wed-fri-sun",42:"tue-thu-sat"}),{"portions[0]":"size"})},{manufacturer:"Wuipet",models:["du4l-wc-01"],encodingType:xe.BASE64,encodingTemplate:je,fields:Re},{manufacturer:"Xtuoes",models:["2&PFA0004"],encodingType:xe.BASE64,encodingTemplate:`${Ae($e.DAYS,2)}${Ae($e.HOUR,2)}${Ae($e.MINUTE,2)}{PORTION[0]:2}{PORTION[1]:2}${Ae($e.ENABLED,2)}`,fields:Re,portionCount:2,...Ue([[0,6],[1,5],[2,4],[3,3],[4,2],[5,1],[6,0]])}],ze=Be;function qe(e){const t=Be.find(t=>t.manufacturer===e);if(!t)return;if(t.encode||t.decode||!t.fields.includes(ve.DAYS))return t;const i=Ue([[0,6],[1,5],[2,4],[3,3],[4,2],[5,1],[6,0]]);return{...t,...i}}var Fe=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,We=(e,t,i,r)=>{for(var s,n=r>1?void 0:r?Ve(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r?s(t,i,n):s(n))||n);return r&&n&&Fe(t,i,n),n};let Ye=class extends ae{constructor(){super(...arguments),this.meals=[],this.portions=6}render(){const e=this.meals.filter(Pe),t=function(e,t){let i=0;return e.forEach(e=>{if("number"!=typeof e.days)return;const r=(Array.isArray(e.portions)?e.portions:[]).reduce((e,t)=>e+("number"==typeof t?t:0),0);r<=0||e.days&1<<t&&(i+=r)}),i}(e,/* @__PURE__ */(new Date).getDay())*this.portions,i=function(e){let t=0;return e.forEach(e=>{if("number"!=typeof e.days)return;const i=(Array.isArray(e.portions)?e.portions:[]).reduce((e,t)=>e+("number"==typeof t?t:0),0);if(!(i<=0))for(let r=0;r<7;r++)e.days&1<<r&&(t+=i)}),t/7}(e)*this.portions;return z`
      <div class="overview-row">
        <ha-chip class="overview-schedules">
          <ha-icon icon="mdi:calendar-clock"></ha-icon>
          ${ye("overview.schedules")}:
          <span style="white-space:nowrap;">${this.meals.length}</span>
        </ha-chip>
        <ha-chip class="overview-active">
          <ha-icon icon="mdi:check-circle-outline"></ha-icon>
          ${ye("overview.active")}:
          <span style="white-space:nowrap;">${e.length}</span>
        </ha-chip>
        <ha-chip class="overview-grams">
          <ha-icon icon="mdi:food-drumstick"></ha-icon>
          ${ye("overview.today")}:
          <span style="white-space:nowrap;">${t}g</span>
        </ha-chip>
        <ha-chip class="overview-average">
          <ha-icon icon="mdi:scale-balance"></ha-icon>
          ${ye("overview.avg_week")}:
          <span style="white-space:nowrap;">${i.toFixed(1)}g</span>
        </ha-chip>
      </div>
    `}};Ye.styles=n`
    .overview-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      margin: 0 16px 8px 16px;
      box-sizing: border-box;
      padding-right: 8px;
    }
    @media (max-width: 600px) {
      .overview-row {
        flex-direction: column;
        gap: 4px;
        margin: 0 4px 8px 4px;
      }
    }
  `,We([he({type:Array})],Ye.prototype,"meals",2),We([he({type:Number})],Ye.prototype,"portions",2),Ye=We([le("meal-overview")],Ye);class Qe extends CustomEvent{constructor(e){super("save",{detail:e,bubbles:!0,composed:!0})}}class Je extends CustomEvent{constructor(){super("schedule-closed",{detail:void 0,bubbles:!0,composed:!0})}}const Ge=n`
  .days-row {
    display: flex;
    gap: 1px;
    flex-wrap: wrap;
    align-items: center;
  }
  .day-cell {
    width: 1.7em;
    height: 1.7em;
    line-height: 1.7em;
    text-align: center;
    border-radius: 6px;
    background: var(--card-background-color, #f0f0f0);
    color: #8a8a8a;
    font-weight: 600;
    font-size: 0.95em;
    margin: 0 1px;
    transition:
      background 0.2s,
      color 0.2s;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .edit-mode .days-row {
    justify-content: center;
    margin: 0 auto;
    gap: 8px;
  }
  .edit-mode .day-cell {
    width: 2.6em;
    height: 2.6em;
    line-height: 2.6em;
    font-size: 1.25em;
    margin: 0 4px;
  }
  .day-cell.selected {
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
  }
  .day-cell.readonly {
    cursor: default;
  }
`;function Ke({days:e=0,editable:t=!1,dayLabels:i,onDaysChanged:r}){const s=i&&7===i.length?i:["M","T","W","T","F","S","S"];return z`
    <style>
      ${Ge}
    </style>
    <div class="days-row${t?" edit-mode":""}">
      ${s.map((i,s)=>z`
          <span
            class="day-cell${e&1<<s?" selected":""}${t?"":" readonly"}"
            @click=${t?()=>(i=>{if(!t||!r)return;r(e^1<<i)})(s):void 0}
            >${i}</span
          >
        `)}
    </div>
  `}var Xe=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,et=(e,t,i,r)=>{for(var s,n=r>1?void 0:r?Ze(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r?s(t,i,n):s(n))||n);return r&&n&&Xe(t,i,n),n};function tt(e,t){return"number"==typeof e&&!isNaN(e)&&"number"==typeof t&&!isNaN(t)&&e>=0&&e<=23&&t>=0&&t<=59}const it=["06:00","08:00","12:00","18:00","21:00"];let rt=class extends ae{constructor(){super(...arguments),this.open=!1,this.formData={}}updated(e){if((e.has("meal")||e.has("profile"))&&this.meal){const e={...this.meal};if(Ce(this.profile,ve.PORTION)){const t=De(this.profile),i=this.normalizePortions(e,t);for(let e=0;e<t;e++)void 0===i[e]&&(i[e]=1);e.portions=i}this.formData=e}}handleUpdate(e){this.formData={...this.formData,...e}}handleTimeInput(e){const t=e.target.value,[i,r]=t.split(":").map(Number);this.handleUpdate({hour:i,minute:r})}handlePortionInput(e,t){const i=parseInt(t.target.value,10),r=Array.isArray(this.formData.portions)?[...this.formData.portions]:[];r[e]=i,this.handleUpdate({portions:r})}handlePredefinedTime(e){const[t,i]=e.split(":").map(Number);this.handleUpdate({hour:t,minute:i})}handleSave(){this.validate(this.formData)&&this.dispatchEvent(new Qe({meal:this.formData,index:this.index}))}validate(e){if(!tt(e.hour,e.minute))return console.warn("Invalid time:",e.hour,e.minute),!1;if(Ce(this.profile,ve.PORTION)){const t=De(this.profile),i=this.normalizePortions(e,t);for(let e=0;e<t;e++){const t=i[e];if(!t||t<1)return console.warn("Invalid portion:",t),!1}}return!0}normalizePortions(e,t){const i=Array.isArray(e.portions)?[...e.portions]:[];return i.length<t&&(i.length=t),i}renderDaysField(){return Ce(this.profile,ve.DAYS)?Ke({days:this.formData?.days??0,editable:!0,onDaysChanged:e=>this.handleUpdate({days:e})}):""}renderPortionFields(){if(!Ce(this.profile,ve.PORTION))return"";const e=De(this.profile),t=ye("common.portion"),i=e>1;return z`
      ${Array.from({length:e},(e,r)=>{const s=Array.isArray(this.formData.portions)?this.formData.portions[r]:void 0;return z`
          <div class="edit-form-group">
            <label for="edit-portion-${r}">
              ${i?`${t} ${r+1}`:t}
            </label>
            <input
              id="edit-portion-${r}"
              type="number"
              min="1"
              .value=${String(s??1)}
              @input=${e=>this.handlePortionInput(r,e)}
            />
          </div>
        `})}
    `}renderPredefinedTimes(){return z`
      <div class="edit-predefined-times">
        ${it.map(e=>z`
            <ha-button
              type="button"
              @click=${()=>this.handlePredefinedTime(e)}
            >
              ${e}
            </ha-button>
          `)}
      </div>
    `}render(){return this.open&&this.profile?z`
      <form class="edit-form" @submit=${e=>e.preventDefault()}>
        ${this.renderDaysField()}
        <div class="edit-form-group">
          <label for="edit-time">${ye("common.time")}</label>
          <input
            id="edit-time"
            class="edit-time"
            type="time"
            .value=${e=this.formData.hour,t=this.formData.minute,tt(e,t)?ke(e,t):"--:--"}
            @input=${this.handleTimeInput}
          />
        </div>
        ${this.renderPortionFields()} ${this.renderPredefinedTimes()}
      </form>
    `:z``;var e,t}};rt.styles=n`
    .edit-form {
      display: flex;
      flex-direction: column;
      gap: 0.75em;
      width: 100%;
      box-sizing: border-box;
    }
    .edit-form-group {
      display: flex;
      flex-direction: column;
      gap: 0.4em;
    }
    .edit-predefined-times {
      display: flex;
      gap: 0.4em;
      flex-wrap: wrap;
    }
    .edit-predefined-times ha-button {
      flex: 1 1 auto;
      min-width: 60px;
      max-width: calc(25% - 0.3em);
    }
    @media (max-width: 768px) {
      .edit-predefined-times ha-button {
        flex: 1 1 auto;
        min-width: 50px;
        max-width: calc(33.333% - 0.3em);
        font-size: 0.85em;
        --ha-button-height: 28px;
      }
    }
    label {
      font-weight: 500;
      font-size: 0.95em;
    }
    input[type='time'],
    input[type='number'] {
      padding: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      font-size: 1em;
      width: 100%;
      box-sizing: border-box;
    }
    .edit-mode .days-row {
      justify-content: center;
      margin: 0 auto;
      gap: 6px;
    }
    .edit-mode .day-cell {
      width: 2.4em;
      height: 2.4em;
      line-height: 2.4em;
      font-size: 1.15em;
      margin: 0 2px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,et([he({type:Object})],rt.prototype,"meal",2),et([he({type:Number})],rt.prototype,"index",2),et([he({type:Object})],rt.prototype,"profile",2),et([he({type:Boolean})],rt.prototype,"open",2),et([pe()],rt.prototype,"formData",2),rt=et([le("meal-edit-dialog")],rt);var st=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,at=(e,t,i,r)=>{for(var s,n=r>1?void 0:r?nt(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r?s(t,i,n):s(n))||n);return r&&n&&st(t,i,n),n};let ot=class extends ae{constructor(){super(...arguments),this.index=0,this.expanded=!1}toggleExpand(){const e=this.expanded;if(this.expanded=!this.expanded,this.expanded&&!e){const e=this.parentElement;e&&e.querySelectorAll("meal-card").forEach(e=>{e!==this&&e.expanded&&(e.expanded=!1)}),this.updateComplete.then(()=>{this.scrollIntoView({behavior:"smooth",block:"nearest"})})}}getSummary(){const e=[],t=ye("common.portion"),i=De(this.profile),r=i>1,s=Array.isArray(this.meal.portions)?this.meal.portions:[];for(let n=0;n<i;n++){const i=s[n];"number"==typeof i&&e.push(`${r?`${t} ${n+1}`:t}: ${i}`)}return e.join(" • ")}handleMealUpdate(e){const t=e.target.checked,i={...this.meal,enabled:t?1:0};this.onMealAction&&this.onMealAction("update",this.index,i)}render(){const e=ke(this.meal.hour,this.meal.minute);return z`
      <div class="meal-card">
        <div class="meal-card-header" @click=${this.toggleExpand}>
          <div class="meal-card-number">${this.index+1}</div>
          <div class="meal-card-summary">
            <div class="meal-card-time">${e}</div>
            <div class="meal-card-info">${this.getSummary()}</div>
          </div>
          <div class="meal-card-days">${this.renderDaysInline()}</div>
          ${this.renderEnabledToggle()}
          <ha-icon
            class="meal-card-expand-icon ${this.expanded?"expanded":""}"
            icon="mdi:chevron-down"
          ></ha-icon>
        </div>
        ${this.expanded?this.renderDetails():""}
      </div>
    `}renderDetails(){return z`
      <div class="meal-card-details">${this.renderActionButtons()}</div>
    `}renderDaysInline(){return Ce(this.profile,ve.DAYS)&&void 0!==this.meal.days?Ke({days:this.meal.days,editable:!1}):""}renderEnabledToggle(){return Ce(this.profile,ve.ENABLED)?z`
      <ha-switch
        .checked=${!!this.meal.enabled}
        @change=${e=>{this.handleMealUpdate(e)}}
        @click=${e=>{e.stopPropagation()}}
        title="${this.meal.enabled?ye("common.enabled"):ye("common.disabled")}"
      ></ha-switch>
    `:""}renderActionButtons(){return Ce(this.profile,ve.DELETE)?z`
      <div class="meal-card-actions-section">
        <ha-button
          @click=${()=>{this.onMealAction&&this.onMealAction("edit",this.index,this.meal)}}
        >
          <ha-icon icon="mdi:pencil" slot="icon"></ha-icon>
          ${ye("meal_card.edit_meal")}
        </ha-button>
        <ha-button
          class="delete-button"
          @click=${()=>{confirm(ye("meal_card.confirm_delete"))&&this.onMealAction&&this.onMealAction("delete",this.index,this.meal)}}
        >
          <ha-icon icon="mdi:delete" slot="icon"></ha-icon>
          ${ye("common.delete")}
        </ha-button>
      </div>
    `:""}};ot.styles=n`
    .meal-card {
      background: var(--card-background-color, #fff);
      border-radius: 6px;
      margin-bottom: 6px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }
    .meal-card-header {
      display: flex;
      align-items: center;
      padding: 8px 4px 8px 10px;
      cursor: pointer;
    }
    .meal-card-header:hover {
      background: var(--secondary-background-color, #f5f5f5);
    }
    .meal-card-header ha-switch,
    .meal-card-header ha-icon {
      pointer-events: auto;
    }
    .meal-card-number {
      font-size: 0.75em;
      font-weight: 600;
      color: var(--primary-color);
      background: var(--primary-color-light, rgba(3, 169, 244, 0.1));
      padding: 2px 6px;
      border-radius: 10px;
      margin-right: 8px;
      min-width: 20px;
      text-align: center;
    }
    .meal-card-summary {
      flex: 1;
      min-width: 0;
    }
    .meal-card-time {
      font-weight: 600;
      font-size: 1em;
      line-height: 1.4;
    }
    .meal-card-info {
      font-size: 0.8em;
      color: var(--secondary-text-color);
      line-height: 1.2;
    }
    .meal-card-days {
      margin-right: 8px;
    }
    .meal-card-days .days-row {
      margin: 0;
    }
    .meal-card-days .day-cell {
      width: 1.6em;
      height: 1.6em;
      font-size: 0.85em;
    }
    ha-switch {
      margin-left: auto;
    }
    @media (max-width: 500px) {
      .meal-card-header {
        flex-wrap: wrap;
      }
      .meal-card-summary {
        order: 1;
      }
      ha-switch {
        order: 2;
      }
      .meal-card-expand-icon {
        order: 3;
      }
      .meal-card-days {
        order: 10;
        width: 100%;
        margin: 4px 0 2px 36px;
      }
      .meal-card-days .days-row {
        gap: 3px;
        row-gap: 2px;
      }
    }
    .meal-card-expand-icon {
      transition: transform 0.2s;
      margin-left: 4px;
      --mdc-icon-size: 24px;
      color: var(--primary-color);
      cursor: pointer;
    }
    .meal-card-expand-icon:hover {
      color: var(--primary-color-dark, var(--primary-color));
    }
    .meal-card-expand-icon.expanded {
      transform: rotate(180deg);
    }
    .meal-card-details {
      padding: 0 10px 8px 10px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
      background: var(--secondary-background-color, #f5f5f5);
    }
    .meal-card-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4px 0;
    }
    .meal-card-label {
      font-weight: 500;
      color: var(--secondary-text-color);
      font-size: 0.85em;
    }
    .meal-card-value {
      font-size: 0.9em;
    }
    .meal-card-actions-section {
      margin-top: 8px;
      padding-top: 8px;
      display: flex;
      gap: 8px;
    }
    .meal-card-actions-section ha-button {
      flex: 1;
      --ha-button-height: 32px;
    }
    .meal-card-actions-section .delete-button {
      --mdc-theme-primary: var(--error-color, #db4437);
    }
  `,at([he({type:Object})],ot.prototype,"meal",2),at([he({type:Number})],ot.prototype,"index",2),at([he({type:Object})],ot.prototype,"profile",2),at([he({type:Boolean})],ot.prototype,"expanded",2),at([he({attribute:!1})],ot.prototype,"onMealAction",2),ot=at([le("meal-card")],ot);const lt=1;class dt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const ct=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends dt{constructor(e){if(super(e),e.type!==lt||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=/* @__PURE__ */new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const r of this.st)r in t||(i.remove(r),this.st.delete(r));for(const r in t){const e=!!t[r];e===this.st.has(r)||this.nt?.has(r)||(e?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return q}});var ht=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,ut=(e,t,i,r)=>{for(var s,n=r>1?void 0:r?pt(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r?s(t,i,n):s(n))||n);return r&&n&&ht(t,i,n),n};let mt=class extends ae{constructor(){super(...arguments),this.type="info",this.title="",this.message="",this.icon=""}getIcon(){if(this.icon)return this.icon;switch(this.type){case"warning":return"mdi:alert";case"error":return"mdi:alert-circle";case"success":return"mdi:check-circle";default:return"mdi:information"}}render(){return z`
      <div
        class=${ct({banner:!0,[this.type]:!0})}
        role="alert"
        aria-live="polite"
      >
        <ha-icon .icon=${this.getIcon()}></ha-icon>
        <div class="content">
          ${this.title?z`<div class="title">${this.title}</div>`:""}
          <div class="text">${this.message}</div>
        </div>
      </div>
    `}};mt.styles=n`
    .banner {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 16px;
      border-radius: 8px;
      background: var(--card-background-color);
      border-left: 4px solid var(--divider-color);
      margin: 8px 0 16px;
    }
    /* Emphasize type via border color + subtle background tint */
    .banner.warning {
      border-left-color: var(--warning-color);
      background-color: var(--warning-bg-color, rgba(255, 152, 0, 0.12));
    }
    .banner.info {
      border-left-color: var(--info-color);
      background-color: var(--info-bg-color, rgba(0, 123, 255, 0.1));
    }
    .banner.error {
      border-left-color: var(--error-color);
      background-color: var(--error-bg-color, rgba(244, 67, 54, 0.12));
    }
    .banner.success {
      border-left-color: var(--success-color);
      background-color: var(--success-bg-color, rgba(76, 175, 80, 0.12));
    }
    .content {
      flex: 1;
    }
    .title {
      font-weight: 600;
      margin-bottom: 4px;
      /* inherit text color from theme */
    }
    .text {
      font-size: 0.95em;
      /* inherit secondary text color from theme */
    }
    ha-icon {
      --mdc-icon-size: 24px;
      margin-top: 2px;
      flex-shrink: 0;
    }
  `,ut([he({type:String})],mt.prototype,"type",2),ut([he({type:String})],mt.prototype,"title",2),ut([he({type:String})],mt.prototype,"message",2),ut([he({type:String})],mt.prototype,"icon",2),mt=ut([le("message-banner")],mt);var ft=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,yt=(e,t,i,r)=>{for(var s,n=r>1?void 0:r?gt(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r?s(t,i,n):s(n))||n);return r&&n&&ft(t,i,n),n};let vt=class extends ae{constructor(){super(...arguments),this.draftMeals=[],this.editMeal=null,this.heading=ye("schedule_view.manage_schedules")}connectedCallback(){super.connectedCallback(),this.draftMeals=this.sortMealsByTime([...this.mealState.meals]),this.unsubscribe=this.mealState.subscribe(()=>{this.resetDraft()})}sortMealsByTime(e){return[...e].sort((e,t)=>Oe(e.hour,e.minute)-Oe(t.hour,t.minute))}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}resetDraft(){this.draftMeals=this.sortMealsByTime([...this.mealState.meals])}updateMeal(e,t){this.draftMeals=this.sortMealsByTime(this.draftMeals.map((i,r)=>r===e?t:i))}handleMealAction(e,t,i){"update"===e?this.draftMeals=this.draftMeals.map((e,r)=>r===t?i:e):"delete"===e?this.draftMeals=this.draftMeals.filter((e,i)=>i!==t):"edit"===e&&(this.heading=ye("schedule_view.edit_feeding_time"),this.editMeal={meal:i,index:t})}addMeal(e){this.draftMeals=this.sortMealsByTime([...this.draftMeals,e])}handleOpenAdd(){this.heading=ye("common.add_meal");const e=De(this.mealState.profile),t={hour:12,minute:0,portions:Array(e).fill(1),days:127,enabled:1};this.editMeal={meal:t}}async handleCancel(){this.resetDraft(),this.dispatchEvent(new Je)}async handleSave(){await this.mealState.saveMeals(this.draftMeals),this.dispatchEvent(new Je)}handleEditSave(e){const{meal:t,index:i}=e.detail;void 0!==i&&i>=0?this.updateMeal(i,t):this.addMeal(t),this.closeEditForm()}closeEditForm(){this.heading=ye("schedule_view.manage_schedules"),this.editMeal=null}hasPendingChanges(){return!Ne(this.draftMeals,this.mealState.meals)}isSensorAvailable(){const e=this.hass?.states?.[this.mealState.config.sensor];if(!e)return!1;const t=e.state;return"unknown"!==t&&"unavailable"!==t}renderMealForm(){return null===this.editMeal?"":z`
      <div>
        <meal-edit-dialog
          .meal=${this.editMeal.meal}
          .index=${this.editMeal.index}
          .profile=${this.mealState.profile}
          .open=${!0}
          @save=${this.handleEditSave}
          @cancel=${this.closeEditForm}
        ></meal-edit-dialog>
      </div>
      <ha-button slot="secondaryAction" @click=${this.closeEditForm}>
        ${ye("common.back")}
      </ha-button>
      <ha-button
        slot="primaryAction"
        class="ha-primary"
        @click=${()=>{const e=this.shadowRoot?.querySelector("meal-edit-dialog");e?.handleSave()}}
      >
        ${ye("common.save")}
      </ha-button>
    `}renderEmptyState(){return z`
      <div class="empty-state">
        <ha-icon icon="mdi:calendar-blank"></ha-icon>
        <div class="empty-state-title">
          ${ye("schedule_view.no_meals_scheduled")}
        </div>
        <div class="empty-state-subtitle">
          ${ye("schedule_view.click_add_meal_to_get_started")}
        </div>
      </div>
    `}renderAddButton(){return Ce(this.mealState.profile,ve.ADD)?z`
      <ha-button slot="secondaryAction" @click=${this.handleOpenAdd}>
        ${ye("common.add_meal")}
      </ha-button>
    `:""}renderCardView(){if(null!==this.editMeal)return"";if(!this.mealState.profile)return"";const e=this.isSensorAvailable();return z`
      <message-banner
        .type=${"warning"}
        .title=${ye("schedule_view.sensor_unavailable")}
        .message=${ye("schedule_view.sensor_unavailable_message")}
        ?hidden=${e}
      ></message-banner>
      <div class="schedule-cards">
        ${0===this.draftMeals.length?this.renderEmptyState():this.draftMeals.map((e,t)=>z`
                <meal-card
                  .meal=${e}
                  .index=${t}
                  .profile=${this.mealState.profile}
                  .onMealAction=${this.handleMealAction.bind(this)}
                >
                </meal-card>
              `)}
      </div>
      ${this.renderAddButton()}
      <ha-button slot="secondaryAction" @click=${this.handleCancel}>
        ${ye("common.cancel")}
      </ha-button>
      <ha-button
        slot="primaryAction"
        class="ha-primary"
        @click=${this.handleSave}
        ?disabled=${!this.hasPendingChanges()||!e}
      >
        ${ye("common.save")}
      </ha-button>
    `}render(){return z`
      <ha-dialog open scrimClickAction heading=${this.heading}>
        <meal-message-display></meal-message-display>
        ${this.renderCardView()} ${this.renderMealForm()}
      </ha-dialog>
    `}};vt.styles=n`
    .schedule-cards {
      display: block;
      max-height: 330px;
      overflow-y: auto;
      padding: 8px 0;
    }
    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: var(--secondary-text-color);
    }
    .empty-state ha-icon {
      --mdc-icon-size: 48px;
      color: var(--disabled-text-color);
      margin-bottom: 16px;
    }
    .empty-state-title {
      font-size: 1.1em;
      font-weight: 500;
      margin-bottom: 8px;
    }
    .empty-state-subtitle {
      font-size: 0.9em;
    }
    ha-dialog {
      --mdc-dialog-min-width: min(480px, 90vw);
      --mdc-dialog-max-width: 480px;
    }
    @media (max-width: 768px) {
      ha-dialog {
        --mdc-dialog-min-width: 95vw;
        --mdc-dialog-max-width: 95vw;
      }
    }
  `,yt([he({type:Object})],vt.prototype,"mealState",2),yt([he({type:Object})],vt.prototype,"hass",2),yt([pe()],vt.prototype,"draftMeals",2),yt([pe()],vt.prototype,"editMeal",2),yt([pe()],vt.prototype,"heading",2),vt=yt([le("schedule-view")],vt);var bt=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,$t=(e,t,i,r)=>{for(var s,n=r>1?void 0:r?_t(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r?s(t,i,n):s(n))||n);return r&&n&&bt(t,i,n),n};let wt=class extends ae{constructor(){super(...arguments),this._dialogOpen=!1}static get styles(){return n`
      :host,
      ha-card {
        display: block;
        height: 100%;
        overflow: hidden;
      }
    `}setConfig(e){if(this.config=e,this.hass&&this.config.sensor&&this.config.manufacturer){const e=qe(this.config.manufacturer);e&&(this.mealState=new Ie(this,e,this.hass,this.config))}}async connectedCallback(){if(super.connectedCallback(),await fe(this.hass?.language),this.config?.sensor&&this.config.manufacturer){const e=qe(this.config.manufacturer);e&&(this.mealState=new Ie(this,e,this.hass,this.config))}}updated(e){super.updated(e),e.has("hass")&&this.mealState&&(fe(this.hass?.language),this.mealState.hass=this.hass,this.mealState.updateFromHass())}render(){return z`
      <ha-card header="${this.config.title}">
        ${this.renderContent()} ${this.renderScheduleDialog()}
      </ha-card>
    `}renderContent(){return this.mealState?z`
      <meal-overview
        .meals=${this.mealState.meals}
        .portions=${this.config?.portions}
      ></meal-overview>
      <div class="card-actions">
        <ha-button @click=${()=>this._dialogOpen=!0}>
          <ha-icon icon="mdi:table-edit"></ha-icon>
          ${ye("main.manage_schedules")}
        </ha-button>
      </div>
    `:this.renderConfigurationRequired()}renderConfigurationRequired(){return z`
      <div class="card-content">
        <ha-icon icon="mdi:cog"></ha-icon>
        <p>${ye("main.configuration_required")}</p>
        <p>${ye("main.configuration_instructions")}</p>
      </div>
    `}renderScheduleDialog(){return this._dialogOpen&&this.mealState?z`
      <schedule-view
        .mealState=${this.mealState}
        .hass=${this.hass}
        @schedule-closed=${()=>{this._dialogOpen=!1}}
      ></schedule-view>
    `:""}static getConfigForm(){return{schema:[{name:"sensor",required:!0,selector:{entity:{filter:[{domain:["sensor","text","input_text"]}]}}},{name:"manufacturer",required:!0,selector:{select:{options:ze.map(e=>({value:e.manufacturer,label:e.manufacturer})).map(e=>({value:e.value,label:e.label})),mode:"dropdown"}}},{type:"grid",name:"",flatten:!0,column_min_width:"200px",schema:[{name:"title",selector:{text:{}}},{name:"portions",selector:{number:{min:1,max:10,mode:"box",unit_of_measurement:"g"}}}]},{name:"helper",selector:{entity:{filter:[{domain:"input_text"}]}}},{name:"transport_type",selector:{select:{options:[{value:"sensor",label:"Sensor (default)"},{value:"mqtt",label:"MQTT"}],mode:"dropdown"}}}],computeLabel:e=>{switch(e.name){case"sensor":return ye("config.sensor_label");case"manufacturer":return ye("config.manufacturer_label");case"title":return ye("config.title_label");case"portions":return ye("config.portion_label");case"helper":return ye("config.helper_label");case"transport_type":return ye("config.transport_label");default:return}},computeHelper:e=>{switch(e.name){case"sensor":return ye("config.sensor_helper");case"manufacturer":return ye("config.manufacturer_helper");case"helper":return ye("config.helper_helper");case"portions":return ye("config.portion_helper");case"transport_type":return ye("config.transport_helper");default:return}}}}static getStubConfig(){return{sensor:"",title:"MealPlan Card",helper:"",portions:6,manufacturer:"",model:"",transport_type:be.SENSOR}}static getGridOptions(){return{columns:6,rows:4,min_columns:6,min_rows:4}}};$t([he({type:Object})],wt.prototype,"hass",2),$t([he({type:Object})],wt.prototype,"config",2),$t([pe()],wt.prototype,"mealState",2),$t([pe()],wt.prototype,"_dialogOpen",2),wt=$t([le("mealplan-card")],wt),window.customCards=window.customCards||[],window.customCards.push({type:"mealplan-card",name:"Mealplan Card",preview:!1,description:"Mealplan card to decode/encode base64 meal_plan"});export{wt as MealPlanCard};
