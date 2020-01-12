class Abstract{constructor(){}get(e,t){throw new Error("Function get must be implemented")}set(e,t,r,s=null){throw new Error("Function set must be implemented")}delete(e,t){throw new Error("Function delete must be implemented")}list(e){throw new Error("Function list must be implemented")}when(e,t){throw new Error("Function when must be implemented")}clear(e){throw new Error("Function clear must be implemented")}start(e){throw new Error("Function start must be implemented")}_translate(e){let t=e.__encoder,r=e.__base;return{encoder:t,base:{setItem:(t,s)=>r._setItem.call(e,t,s),getItem:t=>r._getItem.call(e,t),removeItem:t=>r._removeItem.call(e,t),clear:()=>r._clear.call(e)}}}_parse(e){try{return JSON.parse(e)}catch(t){return e}}_len(e){return e.length}}class Development extends Abstract{constructor(){super()}get(e,t){const r=this._translate(t).base.getItem(`${consts.devkey}${e}`);return this._parse(r).val}set(e,t,r,s=null){const n=this._translate(r).base;t||(t=null),e=`${consts.devkey}${e}`,t={val:this._parse(t),timestamp:s||(new Date).getTime()},n.setItem(e,JSON.stringify(t))}delete(e,t){this._translate(t).base.removeItem(`${consts.devkey}${e}`)}list(e){return new Array(this._len(e)).fill(!1).map((e,t)=>t).map(t=>e.key(t)).map(e=>e=e.replace(consts.devkey,""))}when(e,t){const r=this._translate(t).base.getItem(`${consts.devkey}${e}`),s=this._parse(r);return new Date(s.timestamp)}clear(e){this._translate(e).base.clear()}start(e){const{encoder:t,base:r}=this._translate(e),s=new Array(this._len(e)).fill(!1).map((e,t)=>t).map(t=>e.key(t));for(let n of s)if(converter.isProd(n,r,t)){let s=converter.prodToDev(n,r,t);this.set(s.key,s.value,e,s.when)}else if(!converter.isDev(n,r)){let t=converter.defaultToDev(n,r);this.set(t.key,t.value,e)}}}class Encoder{constructor(e){this.av64x4=new AV64X4(e)}when(e){return this.av64x4.when(e)}hash(e){return encode64(e)}value(e){return decode64(e)}encode(e,t=null){return this.av64x4.encode(e,t)}decode(e){return this.av64x4.decode(e)}}class Production extends Abstract{constructor(){super()}get(e,t){const{encoder:r,base:s}=this._translate(t),n=s.getItem(r.hash(e)),a=r.decode(n);return this._parse(a)}set(e,t,r,s=null){const{encoder:n,base:a}=this._translate(r);t||(t="null"),"string"!=typeof t&&(t=JSON.stringify(t)),e=n.hash(e),t=n.encode(t,s),a.setItem(e,t)}delete(e,t){const{encoder:r,base:s}=this._translate(t);s.removeItem(r.hash(e))}list(e){const t=this._translate(e).encoder;return new Array(this._len(e)).fill(!1).map((e,t)=>t).map(r=>t.value(e.key(r)))}when(e,t){const{encoder:r,base:s}=this._translate(t),n=s.getItem(r.hash(e));return r.when(n)}clear(e){this._translate(e).base.clear()}start(e){const{encoder:t,base:r}=this._translate(e),s=new Array(this._len(e)).fill(!1).map((e,t)=>t).map(t=>e.key(t));for(let n of s)if(converter.isDev(n,r)){let t=converter.devToProd(n,r);this.set(t.key,t.value,e,t.when)}else if(!converter.isProd(n,r,t)){let t=converter.defaultToProd(n,r);this.set(t.key,t.value,e)}}}