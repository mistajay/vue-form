!function(e){function t(t){for(var n,l,s=t[0],o=t[1],u=t[2],d=0,c=[];d<s.length;d++)l=s[d],i[l]&&c.push(i[l][0]),i[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(h&&h(t);c.length;)c.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var o=a[s];0!==i[o]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},i={0:0},r=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var h=o;r.push([215,1]),a()}({212:function(e,t,a){"use strict";var n=a(36);a.n(n).a},213:function(e,t,a){"use strict";var n=a(37);a.n(n).a},215:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(1),r=a(2),l=a.n(r),s=a(0),o=a.n(s),u=a(10),h=a.n(u),d={SECRET_VUE_FORM_METHOD:"REGISTER_VUE_FORM_CONTROL"};function c(e){for(var t=e.$parent,a=null;t;){var n=t[d.SECRET_VUE_FORM_METHOD];if(!h()(n)){a=n;break}t=t.$parent}return a}var p,f={props:{name:{type:String,required:!0},value:[String,Number,Boolean],disabled:Boolean,border:Boolean,size:String,validate:{type:Function,default:o.a},handleFocus:{type:Function,default:o.a},handleBlur:{type:Function,default:o.a},handleChange:{type:Function,default:o.a}},data:function(){return c(this)(this.name,this.value,this.validate)},destroyed:function(){this.cleanFormValue()},render:function(){var e=arguments[0],t=this.useState(),a=l()(t,2),n=a[0],r=a[1];return e(i.Radio,{class:this.class,attrs:{name:this.name,value:n,label:this.value,disabled:this.disabled,border:this.border,size:this.size},on:{input:r,focus:this.handleFocus,blur:this.handleBlur,change:this.handleChange}},[this.$slots.default])}},m={props:{name:{type:String,required:!0},value:{type:Boolean,default:function(){return!1}},label:String,trueLabel:String,falseLabel:String,disabled:Boolean,border:Boolean,size:String,checked:String,indeterminate:String,validate:{type:Function,default:o.a},handleFocus:{type:Function,default:o.a},handleBlur:{type:Function,default:o.a},handleChange:{type:Function,default:o.a}},data:function(){return c(this)(this.name,this.value,this.validate)},destroyed:function(){this.cleanFormValue()},render:function(){var e=arguments[0],t=this.useState(),a=l()(t,2),n=a[0],r=a[1];return e(i.Checkbox,{class:this.class,attrs:{name:this.name,value:n,label:this.label,"true-label":this.trueLabel,"false-label":this.falseLabel,disabled:this.disabled,border:this.border,size:this.size,checked:this.checked,indeterminate:this.indeterminate},on:{input:r,focus:this.handleFocus,blur:this.handleBlur,change:this.handleChange}},[this.$slots.default])}},b={props:{name:{type:String,required:!0},type:String,value:[String,Number],maxlength:Number,minLength:Number,placeholder:String,clearable:Boolean,disabled:Boolean,size:String,prefixIcon:String,suffixIcon:String,rows:Number,autosize:Boolean,autocomplete:String,readonly:Boolean,max:Number,min:Number,step:Number,resize:String,autofocus:Boolean,form:String,label:String,tabindex:Number,validate:{type:Function,default:o.a},handleFocus:{type:Function,default:o.a},handleBlur:{type:Function,default:o.a},handleChange:{type:Function,default:o.a}},data:function(){return c(this)(this.name,this.value,this.validate)},destroyed:function(){this.cleanFormValue()},render:function(){var e=arguments[0],t=this.useState(),a=l()(t,2),n=a[0],r=a[1];return e(i.Input,{class:this.class,attrs:{name:this.name,type:this.type,value:n,maxlength:this.maxlength,minLength:this.minLength,placeholder:this.placeholder,clearable:this.clearable,disabled:this.disabled,size:this.size,"prefix-icon":this.prefixIcon,"suffix-icon":this.suffixIcon,rows:this.rows,autosize:this.autosize,autocomplete:this.autocomplete||"nope",readonly:this.readonly,max:this.max,min:this.min,step:this.step,resize:this.resize,autofocus:this.autofocus,form:this.form,label:this.label,tabindex:this.tabindex},on:{input:r,focus:this.handleFocus,blur:this.handleBlur,change:this.handleChange}},[Boolean(this.append)&&e("template",{slot:"append"},[this.append]),Boolean(this.prepend)&&e("template",{slot:"prepend"},[this.prepend])])}},g={props:{name:{type:String,required:!0},value:{type:Number,default:function(){return 0}},label:String,min:Number,max:Number,step:Number,precision:Number,size:String,disabled:Boolean,controls:Boolean,controlsPosition:String,validate:{type:Function,default:o.a},handleFocus:{type:Function,default:o.a},handleBlur:{type:Function,default:o.a},handleChange:{type:Function,default:o.a}},data:function(){return c(this)(this.name,this.value,this.validate)},destroyed:function(){this.cleanFormValue()},render:function(){var e=arguments[0],t=this.useState(),a=l()(t,2),n=a[0],r=a[1];return e(i.InputNumber,{class:this.class,attrs:{name:this.name,value:n,min:this.min,max:this.max,step:this.step,precision:this.precision,size:this.size,disabled:this.disabled,controls:this.controls,"controls-position":this.controlsPosition,label:this.label},on:{input:r,focus:this.handleFocus,blur:this.handleBlur,change:this.handleChange}})}},v=a(91),y=a.n(v),S={props:{name:{type:String,required:!0},options:{type:Array,required:!0},value:[Number,String,Array],valueKey:{type:String,default:function(){return"id"}},labelKey:{type:String,default:function(){return"name"}},multiple:{type:Boolean,default:function(){return!1}},autocomplete:{type:String,default:function(){return"nope"}},disabled:Boolean,size:String,clearable:Boolean,collapseTags:Boolean,multipleLimit:Number,placeholder:String,filterable:Boolean,allowCreate:Boolean,filterMethod:Function,remote:Boolean,remoteMethod:Function,loading:Boolean,loadingText:String,noMatchText:String,noDataText:String,reserveKeyword:String,defaultFirstOption:[String,Number],popperAppendToBody:Boolean,automaticDropdown:Boolean,validate:{type:Function,default:o.a},handleFocus:{type:Function,default:o.a},handleBlur:{type:Function,default:o.a},handleChange:{type:Function,default:o.a}},methods:{generateOptions:function(e){var t=this.$createElement,a=e[this.valueKey],n=e[this.labelKey];return h()(n)&&(a=e,n=e),t(i.Option,{key:a,attrs:{label:n,value:a}})}},data:function(){var e=c(this),t=this.value;return this.multiple&&(h()(t)?t=[]:Array.isArray(t)||(t=y()(t))),e(this.name,t,this.validate)},destroyed:function(){this.cleanFormValue()},render:function(){var e=arguments[0],t=this.useState(),a=l()(t,2),n=a[0],r=a[1];return e(i.Select,{class:this.class,attrs:{name:this.name,value:n,multiple:this.multiple,disabled:this.disabled,"value-key":this.valueKey,size:this.size,clearable:this.clearable,"collapse-tags":this.collapseTags,"multiple-limit":this.multipleLimit,autocomplete:this.autocomplete,placeholder:this.placeholder,filterable:this.filterable,"allow-create":this.allowCreate,"filter-method":this.filterMethod,remote:this.remote,"remote-method":this.remoteMethod,loading:this.loading,"loading-text":this.loadingText,"no-match-text":this.noMatchText,"no-data-text":this.noDataText,"reserve-keyword":this.reserveKeyword,"default-first-option":this.defaultFirstOption,"popper-append-to-body":this.popperAppendToBody,"automatic-dropdown":this.automaticDropdown},on:{input:r,focus:this.handleFocus,blur:this.handleBlur,change:this.handleChange}},[this.options.map(this.generateOptions)])}},F={props:{name:{type:String,required:!0},value:{type:Boolean,default:function(){return!1}},disabled:Boolean,width:String,activeIconClass:String,inactiveIconClass:String,activeText:String,inactiveText:String,activeValue:[String,Number],inactiveValue:[String,Number],activeColor:String,inactiveColor:String,validate:{type:Function,default:o.a},handleFocus:{type:Function,default:o.a},handleBlur:{type:Function,default:o.a},handleChange:{type:Function,default:o.a}},data:function(){return c(this)(this.name,this.value,this.validate)},destroyed:function(){this.cleanFormValue()},render:function(){var e=arguments[0],t=this.useState(),a=l()(t,2),n=a[0],r=a[1];return e(i.Switch,{class:this.class,attrs:{name:this.name,value:n,disabled:this.disabled,width:this.width,"active-icon-class":this.activeIconClass,"inactive-icon-class":this.inactiveIconClass,"active-text":this.activeText,"inactive-text":this.inactiveText,"active-value":this.activeValue,"inactive-value":this.inactiveValue,"active-color":this.activeColor,"inactive-color":this.inactiveColor},on:{input:r,focus:this.handleFocus,blur:this.handleBlur,change:this.handleChange}})}},B={props:{name:{type:String,required:!0},value:Number,step:Number,min:Number,max:Number,showStops:Boolean,showInput:Boolean,validate:{type:Function,default:o.a},handleFocus:{type:Function,default:o.a},handleBlur:{type:Function,default:o.a},handleChange:{type:Function,default:o.a}},data:function(){return c(this)(this.name,this.value,this.validate)},destroyed:function(){this.cleanFormValue()},render:function(){var e=arguments[0],t=this.useState(),a=l()(t,2),n=a[0],r=a[1];return e(i.Slider,{class:this.class,attrs:{name:this.name,value:n,step:this.step,min:this.min,max:this.max,"show-stops":this.showStops,"show-input":this.showInput},on:{input:r,focus:this.handleFocus,blur:this.handleBlur,change:this.handleChange}})}},x={props:{name:{type:String,required:!0},value:[Date,String,Number],readonly:Boolean,disabled:Boolean,editable:Boolean,clearable:Boolean,size:String,placeholder:String,startPlaceholder:String,endPlaceholder:String,isRange:Boolean,arrowControl:Boolean,align:String,popperClass:String,pickerOptions:Array,rangeSeparator:String,defaultValue:[Date,String,Number],valueFormat:String,prefixIcon:String,clearIcon:String,validate:{type:Function,default:o.a},handleFocus:{type:Function,default:o.a},handleBlur:{type:Function,default:o.a},handleChange:{type:Function,default:o.a}},data:function(){return c(this)(this.name,this.value,this.validate)},destroyed:function(){this.cleanFormValue()},render:function(){var e=arguments[0],t=this.useState(),a=l()(t,2),n=a[0],r=a[1];return e(i.TimeSelect,{class:this.class,attrs:{name:this.name,value:n,readonly:this.readonly,disabled:this.disabled,editable:this.editable,clearable:this.clearable,size:this.size,placeholder:this.placeholder,"start-placeholder":this.startPlaceholder,"end-placeholder":this.endPlaceholder,"is-range":this.isRange,"arrow-control":this.arrowControl,align:this.align,"popper-class":this.popperClass,"picker-options":this.pickerOptions,"range-separator":this.rangeSeparator,"default-value":this.defaultValue,"value-format":this.valueFormat,"prefix-icon":this.prefixIcon,"clear-icon":this.clearIcon},on:{input:r,focus:this.handleFocus,blur:this.handleBlur,change:this.handleChange}})}},w={props:{name:{type:String,required:!0},value:[Date,String,Number],readonly:Boolean,disabled:Boolean,size:String,editable:Boolean,clearable:Boolean,placeholder:String,startPlaceholder:String,endPlaceholder:String,type:String,format:{type:String,default:function(){return"MM/dd/yyyy"}},align:String,popperClass:String,pickerOptions:Array,rangeSeparator:String,defaultValue:[Date,String,Number],defaultTime:String,valueFormat:{type:String,default:function(){return"MM/dd/yyyy"}},unlinkPanels:Boolean,prefixIcon:String,clearIcon:String,validate:{type:Function,default:o.a},handleFocus:{type:Function,default:o.a},handleBlur:{type:Function,default:o.a},handleChange:{type:Function,default:o.a}},data:function(){return c(this)(this.name,this.value,this.validate)},destroyed:function(){this.cleanFormValue()},render:function(){var e=arguments[0],t=this.useState(),a=l()(t,2),n=a[0],r=a[1];return e(i.DatePicker,{class:this.class,attrs:{name:this.name,value:n,readonly:this.readonly,disabled:this.disabled,size:this.size,editable:this.editable,clearable:this.clearable,placeholder:this.placeholder,"start-placeholder":this.startPlaceholder,"end-placeholder":this.endPlaceholder,type:this.type,format:this.format,align:this.align,"popper-class":this.popperClass,"picker-options":this.pickerOptions,"range-separator":this.rangeSeparator,"default-value":this.defaultValue,"default-time":this.defaultTime,"value-format":this.valueFormat,"unlink-panels":this.unlinkPanels,"prefix-icon":this.prefixIcon,"clear-icon":this.clearIcon},on:{input:r,focus:this.handleFocus,blur:this.handleBlur,change:this.handleChange}})}},C=a(20),O=a.n(C),T=a(63),N=a.n(T),V=a(92),z=a.n(V),M=a(93),P=a.n(M),k={props:{labelWidth:String,labelSuffix:String,labelPosition:String,initialValues:{type:Object,default:function(){return{}}},handleModelChange:Function,handleSubmit:{type:Function,required:!0},handleDisabled:Function,handleReset:Function},data:function(){return{state:{},errors:{},form:{}}},methods:(p={},O()(p,d.SECRET_VUE_FORM_METHOD,function(e,t,a){var n=this,i=this,r=i.initialValues[e],l=h()(r)?t:r,s=function(t){var r=a(t);r&&i.$set(n.errors,e,r)},o=function(t){i.$set(n.state,e,t),s(t)};z()(this.state,e)||o(l);return this.handleModelChange&&this.handleModelChange(N()({},this.state,O()({},e,l))),{cleanFormValue:function(){i.$delete(n.state,e),i.$delete(n.errors,e)},setError:s,useState:function(){return[n.state[e],o]}}}),O()(p,"nativeOnSubmit",function(e){return e.preventDefault(),this.handleDisabled&&Object.values(this.errors).some(function(e){return!P()(e)})?this.handleDisabled(this.errors):this.handleSubmit(N()({},this.initialValues,this.state))}),O()(p,"nativeOnReset",function(e){var t=this;e.preventDefault();var a=this;Object.entries(this.state).forEach(function(e){var n=l()(e,2),i=n[0],r=n[1],s=t.initialValues[i];a.$set(t.state,i,s||Array.isArray(r)?[]:""),a.$set(t.errors,i,null)}),this.handleReset&&this.handleReset(this.initialValues)}),p),render:function(){return(0,arguments[0])(i.Form,{class:this.class,attrs:{"label-width":this.labelWidth,"label-suffix":this.labelSuffix,"label-position":this.labelPosition},nativeOn:{submit:this.nativeOnSubmit,reset:this.nativeOnReset}},[this.$slots.default])}},_={data:function(){return{formValues:{},heroesOptions:["The Wasp","Ant-Man","Ghost","Hulk","Thor","Star-lord","Doctor Strange","Ebony Maw"]}},methods:{handleSubmit:function(e){this.formValues=e}},render:function(){var e=arguments[0];return e("div",[e("h1",["Basic Form"]),e("div",{class:"wrapper"},[e("div",{class:"form"},[e(k,{attrs:{handleSubmit:this.handleSubmit}},[e(b,{attrs:{name:"username",placeholder:"Username"}}),e("br"),e("br"),e(b,{attrs:{name:"password",type:"password",placeholder:"Password"}}),e("br"),e("br"),e(m,{attrs:{name:"savePassword"}},["Save password on this computer"]),e("br"),e("br"),e(g,{attrs:{controls:!0,name:"age",value:26}}),e("br"),e("br"),e("div",[e(f,{attrs:{name:"word",value:"A"}},["A"]),e(f,{attrs:{name:"word",value:"B"}},["B"])]),e("br"),e(S,{attrs:{name:"superhero",options:this.heroesOptions,placeholder:"Select a Superhero"}}),e("br"),e("br"),e("div",["How many cups of coffee do you drink during a day?"]),e(B,{attrs:{name:"coffee",min:0,max:10}}),e("br"),e(F,{attrs:{name:"ligths",activeText:"Lights ON",inactiveText:"Lights OFF"}}),e("br"),e("br"),e(x,{attrs:{name:"time",placeholder:"Select Time"}}),e("br"),e("br"),e(w,{attrs:{name:"date",placeholder:"Select Date"}}),e("br"),e("br"),e(i.Button,{attrs:{nativeType:"reset"}},["Reset"]),e(i.Button,{attrs:{nativeType:"submit",type:"primary"}},["Save"])])]),e("div",{class:"values"},[e("strong",["Form Values"]),e("br"),e("br"),e("div",[e("pre",[JSON.stringify(this.formValues,null,2)])])])])])}},I=(a(212),a(38)),D=Object(I.a)(_,void 0,void 0,!1,null,"3ad6904c",null);D.options.__file="BasicForm.vue";var E=D.exports,R={render:function(){var e=arguments[0];return e("div",{class:"forms"},[e(E)])}},A=(a(213),Object(I.a)(R,void 0,void 0,!1,null,"71e3d4df",null));A.options.__file="App.vue";var j=A.exports;n.default.config.productionTip=!1,new n.default({el:"#app",template:"<App/>",components:{App:j}})},36:function(e,t,a){},37:function(e,t,a){}});