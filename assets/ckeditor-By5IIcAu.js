import{yt as e}from"./vue.runtime.esm-bundler-iquX2EGf.js";import{o as t}from"./index-BM9MmkPA.js";var n=e(((e,n)=>{(function(r,i){typeof e==`object`&&typeof n==`object`?n.exports=i(t()):typeof define==`function`&&define.amd?define([`vue`],i):typeof e==`object`?e.CKEditor=i(t()):r.CKEditor=i(r.Vue)})(window,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){typeof Symbol<`u`&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:`Module`}),Object.defineProperty(e,`__esModule`,{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t||4&t&&typeof e==`object`&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,`default`,{enumerable:!0,value:e}),2&t&&typeof e!=`string`)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,`a`,t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=``,n(n.s=3)}([function(t,n){t.exports=e},function(e,t,n){(function(e){t.a=typeof e==`object`&&e&&e.Object===Object&&e}).call(this,n(2))},function(e,t){var n=function(){return this}();try{n||=Function(`return this`)()}catch{typeof window==`object`&&(n=window)}e.exports=n},function(e,t,n){n.r(t);var r=n(0),i=n.n(r),a=function(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)},o=n(1),s=typeof self==`object`&&self&&self.Object===Object&&self,c=o.a||s||Function(`return this`)(),l=function(){return c.Date.now()},u=/\s/,d=function(e){for(var t=e.length;t--&&u.test(e.charAt(t)););return t},f=/^\s+/,p=function(e){return e&&e.slice(0,d(e)+1).replace(f,``)},m=c.Symbol,h=Object.prototype,g=h.hasOwnProperty,_=h.toString,v=m?m.toStringTag:void 0,ee=function(e){var t=g.call(e,v),n=e[v];try{e[v]=void 0;var r=!0}catch{}var i=_.call(e);return r&&(t?e[v]=n:delete e[v]),i},te=Object.prototype.toString,y=function(e){return te.call(e)},b=m?m.toStringTag:void 0,ne=function(e){return e==null?e===void 0?`[object Undefined]`:`[object Null]`:b&&b in Object(e)?ee(e):y(e)},re=function(e){return typeof e==`object`&&!!e},ie=function(e){return typeof e==`symbol`||re(e)&&ne(e)==`[object Symbol]`},ae=/^[-+]0x[0-9a-f]+$/i,oe=/^0b[01]+$/i,se=/^0o[0-7]+$/i,ce=parseInt,le=function(e){if(typeof e==`number`)return e;if(ie(e))return NaN;if(a(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=a(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=p(e);var n=oe.test(e);return n||se.test(e)?ce(e.slice(2),n?2:8):ae.test(e)?NaN:+e},x=Math.max,ue=Math.min,de=function(e,t,n){var r,i,o,s,c,u,d=0,f=!1,p=!1,m=!0;if(typeof e!=`function`)throw TypeError(`Expected a function`);function h(t){var n=r,a=i;return r=i=void 0,d=t,s=e.apply(a,n)}function g(e){return d=e,c=setTimeout(v,t),f?h(e):s}function _(e){var n=e-u;return u===void 0||n>=t||n<0||p&&e-d>=o}function v(){var e=l();if(_(e))return ee(e);c=setTimeout(v,function(e){var n=t-(e-u);return p?ue(n,o-(e-d)):n}(e))}function ee(e){return c=void 0,m&&r?h(e):(r=i=void 0,s)}function te(){var e=l(),n=_(e);if(r=arguments,i=this,u=e,n){if(c===void 0)return g(u);if(p)return clearTimeout(c),c=setTimeout(v,t),h(u)}return c===void 0&&(c=setTimeout(v,t)),s}return t=le(t)||0,a(n)&&(f=!!n.leading,o=(p=`maxWait`in n)?x(le(n.maxWait)||0,t):o,m=`trailing`in n?!!n.trailing:m),te.cancel=function(){c!==void 0&&clearTimeout(c),d=0,r=u=i=c=void 0},te.flush=function(){return c===void 0?s:ee(l())},te},fe={name:`ckeditor`,created(){let{CKEDITOR_VERSION:e}=window;if(e){let[t]=e.split(`.`).map(Number);t<34&&console.warn(`The <CKEditor> component requires using CKEditor 5 in version 34 or higher.`)}else console.warn(`Cannot find the "CKEDITOR_VERSION" in the "window" scope.`)},render(){return(0,r.h)(this.tagName)},model:{prop:`modelValue`,event:`update:modelValue`},props:{editor:{type:Function,default:null},modelValue:{type:String,default:``},config:{type:Object,default:()=>({})},tagName:{type:String,default:`div`},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:``}}),mounted(){let e=Object.assign({},this.config);this.modelValue&&(e.initialData=this.modelValue),this.editor.create(this.$el,e).then(t=>{this.instance=(0,r.markRaw)(t),this.setUpEditorEvents(),this.modelValue!==e.initialData&&t.setData(this.modelValue),this.disabled&&t.enableReadOnlyMode(`Integration Sample`),this.$emit(`ready`,t)}).catch(e=>{console.error(e)})},beforeUnmount(){this.instance&&=(this.instance.destroy(),null),this.$emit(`destroy`,this.instance)},watch:{modelValue(e){this.instance&&e!==this.lastEditorData&&this.instance.setData(e)},disabled(e){e?this.instance.enableReadOnlyMode(`Integration Sample`):this.instance.disableReadOnlyMode(`Integration Sample`)}},methods:{setUpEditorEvents(){let e=this.instance,t=de(t=>{let n=this.lastEditorData=e.getData();this.$emit(`update:modelValue`,n,t,e),this.$emit(`input`,n,t,e)},300,{leading:!0});e.model.document.on(`change:data`,t),e.editing.view.document.on(`focus`,t=>{this.$emit(`focus`,t,e)}),e.editing.view.document.on(`blur`,t=>{this.$emit(`blur`,t,e)})}}};let[pe]=(i.a?i.a.version:r.version).split(`.`).map(e=>parseInt(e,10));if(pe<3)throw Error(`The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html`);t.default={install(e){e.component(`ckeditor`,fe)},component:fe}}]).default}))})),r=e(((e,t)=>{(function(e){let t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"%0 of %1":`%0 of %1`,Aquamarine:`Aquamarine`,Black:`Black`,"Block quote":`Block quote`,Blue:`Blue`,Bold:`Bold`,"Break text":`Break text`,"Bulleted List":`Bulleted List`,Cancel:`Cancel`,"Cannot determine a category for the uploaded file.":`Cannot determine a category for the uploaded file.`,"Cannot upload file:":`Cannot upload file:`,"Caption for image: %0":`Caption for image: %0`,"Caption for the image":`Caption for the image`,"Centered image":`Centered image`,"Change image text alternative":`Change image text alternative`,"Choose heading":`Choose heading`,Column:`Column`,"Could not insert image at the current position.":`Could not insert image at the current position.`,"Could not obtain resized image URL.":`Could not obtain resized image URL.`,"Decrease indent":`Decrease indent`,"Delete column":`Delete column`,"Delete row":`Delete row`,"Dim grey":`Dim grey`,Downloadable:`Downloadable`,"Dropdown toolbar":`Dropdown toolbar`,"Edit block":`Edit block`,"Edit link":`Edit link`,"Editor block content toolbar":`Editor block content toolbar`,"Editor contextual toolbar":`Editor contextual toolbar`,"Editor editing area: %0":`Editor editing area: %0`,"Editor toolbar":`Editor toolbar`,"Enter image caption":`Enter image caption`,"Full size image":`Full size image`,Green:`Green`,Grey:`Grey`,"Header column":`Header column`,"Header row":`Header row`,Heading:`Heading`,"Heading 1":`Heading 1`,"Heading 2":`Heading 2`,"Heading 3":`Heading 3`,"Heading 4":`Heading 4`,"Heading 5":`Heading 5`,"Heading 6":`Heading 6`,"Image toolbar":`Image toolbar`,"image widget":`image widget`,"In line":`In line`,"Increase indent":`Increase indent`,"Insert column left":`Insert column left`,"Insert column right":`Insert column right`,"Insert image":`Insert image`,"Insert image or file":`Insert image or file`,"Insert media":`Insert media`,"Insert paragraph after block":`Insert paragraph after block`,"Insert paragraph before block":`Insert paragraph before block`,"Insert row above":`Insert row above`,"Insert row below":`Insert row below`,"Insert table":`Insert table`,"Inserting image failed":`Inserting image failed`,Italic:`Italic`,"Left aligned image":`Left aligned image`,"Light blue":`Light blue`,"Light green":`Light green`,"Light grey":`Light grey`,Link:`Link`,"Link URL":`Link URL`,"Media URL":`Media URL`,"media widget":`media widget`,"Merge cell down":`Merge cell down`,"Merge cell left":`Merge cell left`,"Merge cell right":`Merge cell right`,"Merge cell up":`Merge cell up`,"Merge cells":`Merge cells`,Next:`Next`,"Numbered List":`Numbered List`,"Open file manager":`Open file manager`,"Open in a new tab":`Open in a new tab`,"Open link in new tab":`Open link in new tab`,"Open media in new tab":`Open media in new tab`,Orange:`Orange`,Paragraph:`Paragraph`,"Paste the media URL in the input.":`Paste the media URL in the input.`,"Press Enter to type after or press Shift + Enter to type before the widget":`Press Enter to type after or press Shift + Enter to type before the widget`,Previous:`Previous`,Purple:`Purple`,Red:`Red`,Redo:`Redo`,"Rich Text Editor":`Rich Text Editor`,"Right aligned image":`Right aligned image`,Row:`Row`,Save:`Save`,"Select all":`Select all`,"Select column":`Select column`,"Select row":`Select row`,"Selecting resized image failed":`Selecting resized image failed`,"Show more items":`Show more items`,"Side image":`Side image`,"Split cell horizontally":`Split cell horizontally`,"Split cell vertically":`Split cell vertically`,"Table toolbar":`Table toolbar`,"Text alternative":`Text alternative`,"The URL must not be empty.":`The URL must not be empty.`,"This link has no URL":`This link has no URL`,"This media URL is not supported.":`This media URL is not supported.`,"Tip: Paste the URL into the content to embed faster.":`Tip: Paste the URL into the content to embed faster.`,"Toggle caption off":`Toggle caption off`,"Toggle caption on":`Toggle caption on`,Turquoise:`Turquoise`,Undo:`Undo`,Unlink:`Unlink`,"Upload failed":`Upload failed`,"Upload in progress":`Upload in progress`,White:`White`,"Widget toolbar":`Widget toolbar`,"Wrap text":`Wrap text`,Yellow:`Yellow`})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(n,r){typeof e==`object`&&typeof t==`object`?t.exports=r():typeof define==`function`&&define.amd?define([],r):typeof e==`object`?e.ClassicEditor=r():n.ClassicEditor=r()}(self,(()=>(()=>{var n={3062:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}`,``,{version:3,sources:[`webpack://./../ckeditor5-block-quote/theme/blockquote.css`],names:[],mappings:`AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:``}]);let s=o},903:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}`,``,{version:3,sources:[`webpack://./../ckeditor5-clipboard/theme/clipboard.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css`],names:[],mappings:`AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:``}]);let s=o},3143:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}`,``,{version:3,sources:[`webpack://./../ckeditor5-editor-classic/theme/classiceditor.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css`],names:[],mappings:`AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:``}]);let s=o},4717:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}`,``,{version:3,sources:[`webpack://./../ckeditor5-engine/theme/placeholder.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css`],names:[],mappings:`AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:``}]);let s=o},9315:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}`,``,{version:3,sources:[`webpack://./../ckeditor5-engine/theme/renderer.css`],names:[],mappings:`AAMA,qDACC,YACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:``}]);let s=o},8733:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}`,``,{version:3,sources:[`webpack://./../ckeditor5-heading/theme/heading.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css`],names:[],mappings:`AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:``}]);let s=o},3508:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}`,``,{version:3,sources:[`webpack://./../ckeditor5-image/theme/image.css`],names:[],mappings:`AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:``}]);let s=o},2640:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`:root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}`,``,{version:3,sources:[`webpack://./../ckeditor5-image/theme/imagecaption.css`],names:[],mappings:`AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:``}]);let s=o},5083:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`:root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}`,``,{version:3,sources:[`webpack://./../ckeditor5-image/theme/imagestyle.css`],names:[],mappings:`AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:``}]);let s=o},4036:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}`,``,{version:3,sources:[`webpack://./../ckeditor5-image/theme/imageuploadicon.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css`],names:[],mappings:`AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:``}]);let s=o},3773:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}`,``,{version:3,sources:[`webpack://./../ckeditor5-image/theme/imageuploadloader.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css`],names:[],mappings:`AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:``}]);let s=o},3689:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}`,``,{version:3,sources:[`webpack://./../ckeditor5-image/theme/imageuploadprogress.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css`],names:[],mappings:`AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:``}]);let s=o},1905:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}`,``,{version:3,sources:[`webpack://./../ckeditor5-image/theme/textalternativeform.css`,`webpack://./../ckeditor5-ui/theme/mixins/_rwd.css`],names:[],mappings:`AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:``}]);let s=o},9773:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}`,``,{version:3,sources:[`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css`],names:[],mappings:`AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:``}]);let s=o},2347:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}`,``,{version:3,sources:[`webpack://./../ckeditor5-link/theme/linkactions.css`,`webpack://./../ckeditor5-ui/theme/mixins/_rwd.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css`],names:[],mappings:`AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:``}]);let s=o},7754:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}`,``,{version:3,sources:[`webpack://./../ckeditor5-link/theme/linkform.css`,`webpack://./../ckeditor5-ui/theme/mixins/_rwd.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css`],names:[],mappings:`AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:``}]);let s=o},4564:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}`,``,{version:3,sources:[`webpack://./../ckeditor5-list/theme/list.css`],names:[],mappings:`AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:``}]);let s=o},4652:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}`,``,{version:3,sources:[`webpack://./../ckeditor5-media-embed/theme/mediaembed.css`],names:[],mappings:`AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:``}]);let s=o},7442:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}`,``,{version:3,sources:[`webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css`],names:[],mappings:`AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:``}]);let s=o},9292:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}`,``,{version:3,sources:[`webpack://./../ckeditor5-media-embed/theme/mediaform.css`,`webpack://./../ckeditor5-ui/theme/mixins/_rwd.css`],names:[],mappings:`AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:``}]);let s=o},1613:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}`,``,{version:3,sources:[`webpack://./../ckeditor5-table/theme/inserttable.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css`],names:[],mappings:`AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:``}]);let s=o},6306:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}`,``,{version:3,sources:[`webpack://./../ckeditor5-table/theme/table.css`],names:[],mappings:`AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:``}]);let s=o},3881:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`:root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}`,``,{version:3,sources:[`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css`],names:[],mappings:`AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:``}]);let s=o},6945:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`:root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}`,``,{version:3,sources:[`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css`],names:[],mappings:`AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:``}]);let s=o},4906:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/button/button.css`,`webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css`],names:[],mappings:`AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:``}]);let s=o},5332:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css`],names:[],mappings:`AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:``}]);let s=o},6781:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css`],names:[],mappings:`AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:``}]);let s=o},5485:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`:root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css`],names:[],mappings:`AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:``}]);let s=o},3949:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}`,``,{version:3,sources:[`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css`],names:[],mappings:`AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:``}]);let s=o},7686:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css`],names:[],mappings:`AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:``}]);let s=o},7339:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`:root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css`],names:[],mappings:`AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:``}]);let s=o},9688:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`:root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}`,``,{version:3,sources:[`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css`],names:[],mappings:`AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:``}]);let s=o},8847:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css`],names:[],mappings:`AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:``}]);let s=o},6574:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/icon/icon.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css`],names:[],mappings:`AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:``}]);let s=o},4879:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`:root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}`,``,{version:3,sources:[`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css`],names:[],mappings:`AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:``}]);let s=o},3662:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/label/label.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css`],names:[],mappings:`AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:``}]);let s=o},2577:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css`],names:[],mappings:`AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:``}]);let s=o},1046:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/list/list.css`,`webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css`],names:[],mappings:`AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:``}]);let s=o},8793:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`:root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css`],names:[],mappings:`AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:``}]);let s=o},4650:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css`],names:[],mappings:`AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:``}]);let s=o},7676:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css`],names:[],mappings:`AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:``}]);let s=o},5868:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css`],names:[],mappings:`AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:``}]);let s=o},6764:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css`,`webpack://./../ckeditor5-ui/theme/mixins/_rwd.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css`],names:[],mappings:`AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:``}]);let s=o},9695:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css`],names:[],mappings:`AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:``}]);let s=o},5542:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css`,`webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css`],names:[],mappings:`AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:``}]);let s=o},3332:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css`],names:[],mappings:`AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:``}]);let s=o},4793:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}`,``,{version:3,sources:[`webpack://./../ckeditor5-ui/theme/globals/_hidden.css`,`webpack://./../ckeditor5-ui/theme/globals/_reset.css`,`webpack://./../ckeditor5-ui/theme/globals/_zindex.css`,`webpack://./../ckeditor5-ui/theme/globals/_transition.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css`],names:[],mappings:`AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:``}]);let s=o},3488:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`:root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}`,``,{version:3,sources:[`webpack://./../ckeditor5-widget/theme/widget.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css`,`webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css`],names:[],mappings:`AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:``}]);let s=o},8506:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}`,``,{version:3,sources:[`webpack://./../ckeditor5-widget/theme/widgetresize.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css`],names:[],mappings:`AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:``}]);let s=o},4921:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(1799),i=n.n(r),a=n(2609),o=n.n(a)()(i());o.push([e.id,`.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}`,``,{version:3,sources:[`webpack://./../ckeditor5-widget/theme/widgettypearound.css`,`webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css`],names:[],mappings:`AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD`,sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:``}]);let s=o},2609:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?`@media ${t[2]} {${n}}`:n})).join(``)},t.i=function(e,n,r){typeof e==`string`&&(e=[[null,e,``]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];o!=null&&(i[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(n&&(c[2]?c[2]=`${n} and ${c[2]}`:c[2]=n),t.push(c))}},t}},1799:e=>{function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&(typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`]);if(n!=null){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||n.return==null||n.return()}finally{if(s)throw i}}return a}}(e,t)||function(e,t){if(e){if(typeof e==`string`)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r===`Object`&&e.constructor&&(r=e.constructor.name),r===`Map`||r===`Set`)return Array.from(e);if(r===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}}(e,t)||function(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function n(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n=t(e,4),r=n[1],i=n[3];if(!i)return r;if(typeof btoa==`function`){var a=`/*# ${`sourceMappingURL=data:application/json;charset=utf-8;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(i))))}`} */`,o=i.sources.map((function(e){return`/*# sourceURL=${i.sourceRoot||``}${e} */`}));return[r].concat(o,[a]).join(`
`)}return[r].join(`
`)}},6062:(e,t,n)=>{var r,i=function(){return r===void 0&&(r=!!(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(e[t]===void 0){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch{n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var a=e[i],c=t.base?a[0]+t.base:a[0],l=n[c]||0,u=`${c} ${l}`;n[c]=l+1;var d=s(u),f={css:a[1],media:a[2],sourceMap:a[3]};d===-1?o.push({identifier:u,updater:g(f,t),references:1}):(o[d].references++,o[d].updater(f)),r.push(u)}return r}function l(e){var t=document.createElement(`style`),r=e.attributes||{};if(r.nonce===void 0){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),typeof e.insert==`function`)e.insert(t);else{var o=a(e.insert||`head`);if(!o)throw Error(`Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.`);o.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join(`
`)});function f(e,t,n,r){var i=n?``:r.media?`@media ${r.media} {${r.css}}`:r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute(`media`,i):e.removeAttribute(`media`),a&&typeof btoa<`u`&&(r+=`
/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(a))))} */`),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function g(e,t){var n,r,i;if(t.singleton){var a=h++;n=m||=l(t),r=f.bind(null,n,a,!1),i=f.bind(null,n,a,!0)}else n=l(t),r=p.bind(null,n,t),i=function(){(function(e){if(e.parentNode===null)return!1;e.parentNode.removeChild(e)})(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t||={}).singleton||typeof t.singleton==`boolean`||(t.singleton=i());var n=c(e||=[],t);return function(e){if(e||=[],Object.prototype.toString.call(e)===`[object Array]`){for(var r=0;r<n.length;r++){var i=s(n[r]);o[i].references--}for(var a=c(e,t),l=0;l<n.length;l++){var u=s(n[l]);o[u].references===0&&(o[u].updater(),o.splice(u,1))}n=a}}}}},r={};function i(e){var t=r[e];if(t!==void 0)return t.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if(typeof globalThis==`object`)return globalThis;try{return this||Function(`return this`)()}catch{if(typeof window==`object`)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.nc=void 0;var a={};return(()=>{function n({emitter:e,activator:t,callback:n,contextElements:r}){e.listenTo(document,`mousedown`,((e,i)=>{if(!t())return;let a=typeof i.composedPath==`function`?i.composedPath():[],o=typeof r==`function`?r():r;for(let e of o)if(e.contains(i.target)||a.includes(e))return;n()}))}function r(e){let t=e;t.set(`_isCssTransitionsDisabled`,!1),t.disableCssTransitions=()=>{t._isCssTransitionsDisabled=!0},t.enableCssTransitions=()=>{t._isCssTransitionsDisabled=!1},t.extendTemplate({attributes:{class:[t.bindTemplate.if(`_isCssTransitionsDisabled`,`ck-transitions-disabled`)]}})}function o({view:e}){e.listenTo(e.element,`submit`,((t,n)=>{n.preventDefault(),e.fire(`submit`)}),{useCapture:!0})}i.d(a,{default:()=>jS});let s=function(){try{return navigator.userAgent.toLowerCase()}catch{return``}}(),c={isMac:l(s),isWindows:function(e){return e.indexOf(`windows`)>-1}(s),isGecko:function(e){return!!e.match(/gecko\/\d+/)}(s),isSafari:function(e){return e.indexOf(` applewebkit/`)>-1&&e.indexOf(`chrome`)===-1}(s),isiOS:function(e){return!!e.match(/iphone|ipad/i)||l(e)&&navigator.maxTouchPoints>0}(s),isAndroid:function(e){return e.indexOf(`android`)>-1}(s),isBlink:function(e){return e.indexOf(`chrome/`)>-1&&e.indexOf(`edge/`)<0}(s),features:{isRegExpUnicodePropertySupported:function(){let e=!1;try{e=`ć`.search(RegExp(`[\\p{L}]`,`u`))===0}catch{}return e}()}};function l(e){return e.indexOf(`macintosh`)>-1}function u(e,t,n,r){n||=function(e,t){return e===t};let i=Array.isArray(e)?e:Array.prototype.slice.call(e),a=Array.isArray(t)?t:Array.prototype.slice.call(t),o=function(e,t,n){let r=d(e,t,n);if(r===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};let i=d(f(e,r),f(t,r),n);return{firstIndex:r,lastIndexOld:e.length-i,lastIndexNew:t.length-i}}(i,a,n);return r?function(e,t){let{firstIndex:n,lastIndexOld:r,lastIndexNew:i}=e;if(n===-1)return Array(t).fill(`equal`);let a=[];return n>0&&(a=a.concat(Array(n).fill(`equal`))),i-n>0&&(a=a.concat(Array(i-n).fill(`insert`))),r-n>0&&(a=a.concat(Array(r-n).fill(`delete`))),i<t&&(a=a.concat(Array(t-i).fill(`equal`))),a}(o,a.length):function(e,t){let n=[],{firstIndex:r,lastIndexOld:i,lastIndexNew:a}=t;return a-r>0&&n.push({index:r,type:`insert`,values:e.slice(r,a)}),i-r>0&&n.push({index:r+(a-r),type:`delete`,howMany:i-r}),n}(a,o)}function d(e,t,n){for(let r=0;r<Math.max(e.length,t.length);r++)if(e[r]===void 0||t[r]===void 0||!n(e[r],t[r]))return r;return-1}function f(e,t){return e.slice(t).reverse()}function p(e,t,n){n||=function(e,t){return e===t};let r=e.length,i=t.length;if(r>200||i>200||r+i>300)return p.fastDiff(e,t,n,!0);let a,o;if(i<r){let n=e;e=t,t=n,a=`delete`,o=`insert`}else a=`insert`,o=`delete`;let s=e.length,c=t.length,l=c-s,u={},d={};function f(r){let i=(d[r-1]===void 0?-1:d[r-1])+1,l=d[r+1]===void 0?-1:d[r+1],f=i>l?-1:1;u[r+f]&&(u[r]=u[r+f].slice(0)),u[r]||(u[r]=[]),u[r].push(i>l?a:o);let p=Math.max(i,l),m=p-r;for(;m<s&&p<c&&n(e[m],t[p]);)m++,p++,u[r].push(`equal`);return p}let m,h=0;do{for(m=-h;m<l;m++)d[m]=f(m);for(m=l+h;m>l;m--)d[m]=f(m);d[l]=f(l),h++}while(d[l]!==c);return u[l].slice(1)}function m(e,...t){t.forEach((t=>{let n=Object.getOwnPropertyNames(t),r=Object.getOwnPropertySymbols(t);n.concat(r).forEach((n=>{if(n in e.prototype||typeof t==`function`&&(n==`length`||n==`name`||n==`prototype`))return;let r=Object.getOwnPropertyDescriptor(t,n);r.enumerable=!1,Object.defineProperty(e.prototype,n,r)}))}))}p.fastDiff=u;let h=function(){return function e(){e.called=!0}};class g{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=h(),this.off=h()}}let _=Array(256).fill(``).map(((e,t)=>(`0`+t.toString(16)).slice(-2)));function v(){let e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0;return`e`+_[e>>0&255]+_[e>>8&255]+_[e>>16&255]+_[e>>24&255]+_[t>>0&255]+_[t>>8&255]+_[t>>16&255]+_[t>>24&255]+_[n>>0&255]+_[n>>8&255]+_[n>>16&255]+_[n>>24&255]+_[r>>0&255]+_[r>>8&255]+_[r>>16&255]+_[r>>24&255]}let ee={get(e=`normal`){return typeof e==`number`?e:this[e]||this.normal},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function te(e,t){let n=ee.get(t.priority);for(let r=0;r<e.length;r++)if(ee.get(e[r].priority)<n)return void e.splice(r,0,t);e.push(t)}class y extends Error{constructor(e,t,n){super(function(e,t){let n=new WeakSet,r=t?` ${JSON.stringify(t,(e,t)=>{if(typeof t==`object`&&t){if(n.has(t))return`[object ${t.constructor.name}]`;n.add(t)}return t})}`:``,i=re(e);return e+r+i}(e,n)),this.name=`CKEditorError`,this.context=t,this.data=n}is(e){return e===`CKEditorError`}static rethrowUnexpectedError(e,t){if(e.is&&e.is(`CKEditorError`))throw e;let n=new y(e.message,t);throw n.stack=e.stack,n}}function b(e,t){console.warn(...ie(e,t))}function ne(e,t){console.error(...ie(e,t))}function re(e){return`\nRead more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${e}`}function ie(e,t){let n=re(e);return t?[e,t,n]:[e,n]}let ae=typeof window==`object`?window:i.g;if(ae.CKEDITOR_VERSION)throw new y(`ckeditor-duplicated-modules`,null);ae.CKEDITOR_VERSION=`36.0.1`;let oe=Symbol(`listeningTo`),se=Symbol(`emitterId`),ce=Symbol(`delegations`),le=x(Object);function x(e){return e?class extends e{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let r=!1;this.listenTo(this,e,((e,...n)=>{r||(r=!0,e.off(),t.call(this,e,...n))}),n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,r={}){let i,a;this[oe]||(this[oe]={});let o=this[oe];de(e)||ue(e);let s=de(e);(i=o[s])||(i=o[s]={emitter:e,callbacks:{}}),(a=i.callbacks[t])||(a=i.callbacks[t]=[]),a.push(n),function(e,t,n,r,i){t._addEventListener?t._addEventListener(n,r,i):e._addEventListener.call(t,n,r,i)}(this,e,t,n,r)}stopListening(e,t,n){let r=this[oe],i=e&&de(e),a=r&&i?r[i]:void 0,o=a&&t?a.callbacks[t]:void 0;if(!(!r||e&&!a||t&&!o))if(n)ge(this,e,t,n),o.indexOf(n)!==-1&&(o.length===1?delete a.callbacks[t]:ge(this,e,t,n));else if(o){for(;n=o.pop();)ge(this,e,t,n);delete a.callbacks[t]}else if(a){for(t in a.callbacks)this.stopListening(e,t);delete r[i]}else{for(i in r)this.stopListening(r[i].emitter);delete this[oe]}}fire(e,...t){try{let n=e instanceof g?e:new g(this,e),r=n.name,i=me(this,r);if(n.path.push(this),i){let e=[n,...t];i=Array.from(i);for(let t=0;t<i.length&&(i[t].callback.apply(this,e),n.off.called&&(delete n.off.called,this._removeEventListener(r,i[t].callback)),!n.stop.called);t++);}let a=this[ce];if(a){let e=a.get(r),i=a.get(`*`);e&&he(e,n,t),i&&he(i,n,t)}return n.return}catch(e){y.rethrowUnexpectedError(e,this)}}delegate(...e){return{to:(t,n)=>{this[ce]||(this[ce]=new Map),e.forEach((e=>{let r=this[ce].get(e);r?r.set(t,n):this[ce].set(e,new Map([[t,n]]))}))}}}stopDelegating(e,t){if(this[ce])if(e)if(t){let n=this[ce].get(e);n&&n.delete(t)}else this[ce].delete(e);else this[ce].clear()}_addEventListener(e,t,n){(function(e,t){let n=fe(e);if(n[t])return;let r=t,i=null,a=[];for(;r!==``&&!n[r];)n[r]={callbacks:[],childEvents:[]},a.push(n[r]),i&&n[r].childEvents.push(i),i=r,r=r.substr(0,r.lastIndexOf(`:`));if(r!==``){for(let e of a)e.callbacks=n[r].callbacks.slice();n[r].childEvents.push(i)}})(this,e);let r=pe(this,e),i={callback:t,priority:ee.get(n.priority)};for(let e of r)te(e,i)}_removeEventListener(e,t){let n=pe(this,e);for(let e of n)for(let n=0;n<e.length;n++)e[n].callback==t&&(e.splice(n,1),n--)}}:le}function ue(e,t){e[se]||(e[se]=t||v())}function de(e){return e[se]}function fe(e){return e._events||Object.defineProperty(e,`_events`,{value:{}}),e._events}function pe(e,t){let n=fe(e)[t];if(!n)return[];let r=[n.callbacks];for(let t=0;t<n.childEvents.length;t++){let i=pe(e,n.childEvents[t]);r=r.concat(i)}return r}function me(e,t){let n;return e._events&&(n=e._events[t])&&n.callbacks.length?n.callbacks:t.indexOf(`:`)>-1?me(e,t.substr(0,t.lastIndexOf(`:`))):null}function he(e,t,n){for(let[r,i]of e){i?typeof i==`function`&&(i=i(t.name)):i=t.name;let e=new g(t.source,i);e.path=[...t.path],r.fire(e,...n)}}function ge(e,t,n,r){t._removeEventListener?t._removeEventListener(n,r):e._removeEventListener.call(t,n,r)}[`on`,`once`,`off`,`listenTo`,`stopListening`,`fire`,`delegate`,`stopDelegating`,`_addEventListener`,`_removeEventListener`].forEach((e=>{x[e]=le.prototype[e]}));let S=function(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)},_e=Symbol(`observableProperties`),ve=Symbol(`boundObservables`),ye=Symbol(`boundProperties`),be=Symbol(`decoratedMethods`),xe=Symbol(`decoratedOriginal`),Se=C(x());function C(e){return e?class extends e{set(e,t){if(S(e))return void Object.keys(e).forEach((t=>{this.set(t,e[t])}),this);Ce(this);let n=this[_e];if(e in this&&!n.has(e))throw new y(`observable-set-cannot-override`,this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(t){let r=n.get(e),i=this.fire(`set:${e}`,e,t,r);i===void 0&&(i=t),r===i&&n.has(e)||(n.set(e,i),this.fire(`change:${e}`,e,i,r))}}),this[e]=t}bind(...e){if(!e.length||!Ee(e))throw new y(`observable-bind-wrong-properties`,this);if(new Set(e).size!==e.length)throw new y(`observable-bind-duplicate-properties`,this);Ce(this);let t=this[ye];e.forEach((e=>{if(t.has(e))throw new y(`observable-bind-rebind`,this)}));let n=new Map;return e.forEach((e=>{let r={property:e,to:[]};t.set(e,r),n.set(e,r)})),{to:we,toMany:Te,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[_e])return;let t=this[ye],n=this[ve];if(e.length){if(!Ee(e))throw new y(`observable-unbind-wrong-properties`,this);e.forEach((e=>{let r=t.get(e);r&&(r.to.forEach((([e,t])=>{let i=n.get(e),a=i[t];a.delete(r),a.size||delete i[t],Object.keys(i).length||(n.delete(e),this.stopListening(e,`change`))})),t.delete(e))}))}else n.forEach(((e,t)=>{this.stopListening(t,`change`)})),n.clear(),t.clear()}decorate(e){Ce(this);let t=this[e];if(!t)throw new y(`observablemixin-cannot-decorate-undefined`,this,{object:this,methodName:e});this.on(e,((e,n)=>{e.return=t.apply(this,n)})),this[e]=function(...t){return this.fire(e,t)},this[e][xe]=t,this[be]||(this[be]=[]),this[be].push(e)}stopListening(e,t,n){if(!e&&this[be]){for(let e of this[be])this[e]=this[e][xe];delete this[be]}super.stopListening(e,t,n)}}:Se}function Ce(e){e[_e]||(Object.defineProperty(e,_e,{value:new Map}),Object.defineProperty(e,ve,{value:new Map}),Object.defineProperty(e,ye,{value:new Map}))}function we(...e){let t=function(...e){if(!e.length)throw new y(`observable-bind-to-parse-error`,null);let t={to:[]},n;return typeof e[e.length-1]==`function`&&(t.callback=e.pop()),e.forEach((e=>{if(typeof e==`string`)n.properties.push(e);else{if(typeof e!=`object`)throw new y(`observable-bind-to-parse-error`,null);n={observable:e,properties:[]},t.to.push(n)}})),t}(...e),n=Array.from(this._bindings.keys()),r=n.length;if(!t.callback&&t.to.length>1)throw new y(`observable-bind-to-no-callback`,this);if(r>1&&t.callback)throw new y(`observable-bind-to-extra-callback`,this);var i;t.to.forEach((e=>{if(e.properties.length&&e.properties.length!==r)throw new y(`observable-bind-to-properties-length`,this);e.properties.length||(e.properties=this._bindProperties)})),this._to=t.to,t.callback&&(this._bindings.get(n[0]).callback=t.callback),i=this._observable,this._to.forEach((e=>{let t=i[ve],n;t.get(e.observable)||i.listenTo(e.observable,`change`,((r,a)=>{n=t.get(e.observable)[a],n&&n.forEach((e=>{De(i,e.property)}))}))})),function(e){let t;e._bindings.forEach(((n,r)=>{e._to.forEach((i=>{t=i.properties[n.callback?0:e._bindProperties.indexOf(r)],n.to.push([i.observable,t]),function(e,t,n,r){let i=e[ve],a=i.get(n),o=a||{};o[r]||(o[r]=new Set),o[r].add(t),a||i.set(n,o)}(e._observable,n,i.observable,t)}))}))}(this),this._bindProperties.forEach((e=>{De(this._observable,e)}))}function Te(e,t,n){if(this._bindings.size>1)throw new y(`observable-bind-to-many-not-one-binding`,this);this.to(...function(e,t){let n=e.map((e=>[e,t]));return Array.prototype.concat.apply([],n)}(e,t),n)}function Ee(e){return e.every((e=>typeof e==`string`))}function De(e,t){let n=e[ye].get(t),r;n.callback?r=n.callback.apply(e,n.to.map((e=>e[0][e[1]]))):(r=n.to[0],r=r[0][r[1]]),Object.prototype.hasOwnProperty.call(e,t)?e[t]=r:e.set(t,r)}[`set`,`bind`,`unbind`,`decorate`,`on`,`once`,`off`,`listenTo`,`stopListening`,`fire`,`delegate`,`stopDelegating`,`_addEventListener`,`_removeEventListener`].forEach((e=>{C[e]=Se.prototype[e]}));class Oe{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display=`none`,t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach((({element:e,newElement:t})=>{e.style.display=``,t&&t.remove()})),this._replacedElements=[]}}function ke(e){let t=0;for(let n of e)t++;return t}function Ae(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++)if(e[r]!=t[r])return r;return e.length==t.length?`same`:e.length<t.length?`prefix`:`extension`}function je(e){return!(!e||!e[Symbol.iterator])}let Me=typeof global==`object`&&global&&global.Object===Object&&global;var Ne=typeof self==`object`&&self&&self.Object===Object&&self;let Pe=Me||Ne||Function(`return this`)(),Fe=Pe.Symbol;var Ie=Object.prototype,Le=Ie.hasOwnProperty,Re=Ie.toString,ze=Fe?Fe.toStringTag:void 0;let Be=function(e){var t=Le.call(e,ze),n=e[ze];try{e[ze]=void 0;var r=!0}catch{}var i=Re.call(e);return r&&(t?e[ze]=n:delete e[ze]),i};var Ve=Object.prototype.toString;let He=function(e){return Ve.call(e)};var Ue=`[object Null]`,We=`[object Undefined]`,Ge=Fe?Fe.toStringTag:void 0;let Ke=function(e){return e==null?e===void 0?We:Ue:Ge&&Ge in Object(e)?Be(e):He(e)},qe=Array.isArray,Je=function(e){return typeof e==`object`&&!!e};var Ye=`[object String]`;let Xe=function(e){return typeof e==`string`||!qe(e)&&Je(e)&&Ke(e)==Ye};function Ze(e,t,n={},r=[]){let i=n&&n.xmlns,a=i?e.createElementNS(i,t):e.createElement(t);for(let e in n)a.setAttribute(e,n[e]);!Xe(r)&&je(r)||(r=[r]);for(let t of r)Xe(t)&&(t=e.createTextNode(t)),a.appendChild(t);return a}let Qe=function(e,t){return function(n){return e(t(n))}},$e=Qe(Object.getPrototypeOf,Object);var et=`[object Object]`,tt=Function.prototype,nt=Object.prototype,rt=tt.toString,it=nt.hasOwnProperty,at=rt.call(Object);let ot=function(e){if(!Je(e)||Ke(e)!=et)return!1;var t=$e(e);if(t===null)return!0;var n=it.call(t,`constructor`)&&t.constructor;return typeof n==`function`&&n instanceof n&&rt.call(n)==at},st=function(){this.__data__=[],this.size=0},ct=function(e,t){return e===t||e!=e&&t!=t},lt=function(e,t){for(var n=e.length;n--;)if(ct(e[n][0],t))return n;return-1};var ut=Array.prototype.splice;let dt=function(e){var t=this.__data__,n=lt(t,e);return!(n<0)&&(n==t.length-1?t.pop():ut.call(t,n,1),--this.size,!0)},ft=function(e){var t=this.__data__,n=lt(t,e);return n<0?void 0:t[n][1]},pt=function(e){return lt(this.__data__,e)>-1},mt=function(e,t){var n=this.__data__,r=lt(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ht(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ht.prototype.clear=st,ht.prototype.delete=dt,ht.prototype.get=ft,ht.prototype.has=pt,ht.prototype.set=mt;let gt=ht,_t=function(){this.__data__=new gt,this.size=0},vt=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},yt=function(e){return this.__data__.get(e)},bt=function(e){return this.__data__.has(e)};var xt=`[object AsyncFunction]`,St=`[object Function]`,Ct=`[object GeneratorFunction]`,wt=`[object Proxy]`;let Tt=function(e){if(!S(e))return!1;var t=Ke(e);return t==St||t==Ct||t==xt||t==wt},Et=Pe[`__core-js_shared__`];var Dt=function(){var e=/[^.]+$/.exec(Et&&Et.keys&&Et.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}();let Ot=function(e){return!!Dt&&Dt in e};var kt=Function.prototype.toString;let At=function(e){if(e!=null){try{return kt.call(e)}catch{}try{return e+``}catch{}}return``};var jt=/^\[object .+?Constructor\]$/,Mt=Function.prototype,Nt=Object.prototype,Pt=Mt.toString,Ft=Nt.hasOwnProperty,It=RegExp(`^`+Pt.call(Ft).replace(/[\\^$.*+?()[\]{}|]/g,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`);let Lt=function(e){return!(!S(e)||Ot(e))&&(Tt(e)?It:jt).test(At(e))},Rt=function(e,t){return e?.[t]},zt=function(e,t){var n=Rt(e,t);return Lt(n)?n:void 0},Bt=zt(Pe,`Map`),Vt=zt(Object,`create`),Ht=function(){this.__data__=Vt?Vt(null):{},this.size=0},Ut=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t};var Wt=`__lodash_hash_undefined__`,Gt=Object.prototype.hasOwnProperty;let Kt=function(e){var t=this.__data__;if(Vt){var n=t[e];return n===Wt?void 0:n}return Gt.call(t,e)?t[e]:void 0};var qt=Object.prototype.hasOwnProperty;let Jt=function(e){var t=this.__data__;return Vt?t[e]!==void 0:qt.call(t,e)};var Yt=`__lodash_hash_undefined__`;let Xt=function(e,t){var n=this.__data__;return this.size+=+!this.has(e),n[e]=Vt&&t===void 0?Yt:t,this};function Zt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Zt.prototype.clear=Ht,Zt.prototype.delete=Ut,Zt.prototype.get=Kt,Zt.prototype.has=Jt,Zt.prototype.set=Xt;let Qt=Zt,$t=function(){this.size=0,this.__data__={hash:new Qt,map:new(Bt||gt),string:new Qt}},en=function(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null},tn=function(e,t){var n=e.__data__;return en(t)?n[typeof t==`string`?`string`:`hash`]:n.map},nn=function(e){var t=tn(this,e).delete(e);return this.size-=+!!t,t},rn=function(e){return tn(this,e).get(e)},an=function(e){return tn(this,e).has(e)},on=function(e,t){var n=tn(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function sn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}sn.prototype.clear=$t,sn.prototype.delete=nn,sn.prototype.get=rn,sn.prototype.has=an,sn.prototype.set=on;let cn=sn;var ln=200;let un=function(e,t){var n=this.__data__;if(n instanceof gt){var r=n.__data__;if(!Bt||r.length<ln-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new cn(r)}return n.set(e,t),this.size=n.size,this};function dn(e){var t=this.__data__=new gt(e);this.size=t.size}dn.prototype.clear=_t,dn.prototype.delete=vt,dn.prototype.get=yt,dn.prototype.has=bt,dn.prototype.set=un;let fn=dn,pn=function(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&!1!==t(e[n],n,e););return e},mn=function(){try{var e=zt(Object,`defineProperty`);return e({},``,{}),e}catch{}}(),hn=function(e,t,n){t==`__proto__`&&mn?mn(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n};var gn=Object.prototype.hasOwnProperty;let _n=function(e,t,n){var r=e[t];gn.call(e,t)&&ct(r,n)&&(n!==void 0||t in e)||hn(e,t,n)},vn=function(e,t,n,r){var i=!n;n||={};for(var a=-1,o=t.length;++a<o;){var s=t[a],c=r?r(n[s],e[s],s,n,e):void 0;c===void 0&&(c=e[s]),i?hn(n,s,c):_n(n,s,c)}return n},yn=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var bn=`[object Arguments]`;let xn=function(e){return Je(e)&&Ke(e)==bn};var Sn=Object.prototype,Cn=Sn.hasOwnProperty,wn=Sn.propertyIsEnumerable;let Tn=xn(function(){return arguments}())?xn:function(e){return Je(e)&&Cn.call(e,`callee`)&&!wn.call(e,`callee`)},En=function(){return!1};var Dn=typeof e==`object`&&e&&!e.nodeType&&e,On=Dn&&typeof t==`object`&&t&&!t.nodeType&&t,kn=On&&On.exports===Dn?Pe.Buffer:void 0;let An=(kn?kn.isBuffer:void 0)||En;var jn=9007199254740991,Mn=/^(?:0|[1-9]\d*)$/;let Nn=function(e,t){var n=typeof e;return!!(t??=jn)&&(n==`number`||n!=`symbol`&&Mn.test(e))&&e>-1&&e%1==0&&e<t};var Pn=9007199254740991;let Fn=function(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=Pn};var w={};w[`[object Float32Array]`]=w[`[object Float64Array]`]=w[`[object Int8Array]`]=w[`[object Int16Array]`]=w[`[object Int32Array]`]=w[`[object Uint8Array]`]=w[`[object Uint8ClampedArray]`]=w[`[object Uint16Array]`]=w[`[object Uint32Array]`]=!0,w[`[object Arguments]`]=w[`[object Array]`]=w[`[object ArrayBuffer]`]=w[`[object Boolean]`]=w[`[object DataView]`]=w[`[object Date]`]=w[`[object Error]`]=w[`[object Function]`]=w[`[object Map]`]=w[`[object Number]`]=w[`[object Object]`]=w[`[object RegExp]`]=w[`[object Set]`]=w[`[object String]`]=w[`[object WeakMap]`]=!1;let In=function(e){return Je(e)&&Fn(e.length)&&!!w[Ke(e)]},Ln=function(e){return function(t){return e(t)}};var Rn=typeof e==`object`&&e&&!e.nodeType&&e,zn=Rn&&typeof t==`object`&&t&&!t.nodeType&&t,Bn=zn&&zn.exports===Rn&&Me.process;let Vn=function(){try{return zn&&zn.require&&zn.require(`util`).types||Bn&&Bn.binding&&Bn.binding(`util`)}catch{}}();var Hn=Vn&&Vn.isTypedArray;let Un=Hn?Ln(Hn):In;var Wn=Object.prototype.hasOwnProperty;let Gn=function(e,t){var n=qe(e),r=!n&&Tn(e),i=!n&&!r&&An(e),a=!n&&!r&&!i&&Un(e),o=n||r||i||a,s=o?yn(e.length,String):[],c=s.length;for(var l in e)!t&&!Wn.call(e,l)||o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||Nn(l,c))||s.push(l);return s};var Kn=Object.prototype;let qn=function(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||Kn)},Jn=Qe(Object.keys,Object);var Yn=Object.prototype.hasOwnProperty;let Xn=function(e){if(!qn(e))return Jn(e);var t=[];for(var n in Object(e))Yn.call(e,n)&&n!=`constructor`&&t.push(n);return t},Zn=function(e){return e!=null&&Fn(e.length)&&!Tt(e)},Qn=function(e){return Zn(e)?Gn(e):Xn(e)},$n=function(e,t){return e&&vn(t,Qn(t),e)},er=function(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t};var tr=Object.prototype.hasOwnProperty;let nr=function(e){if(!S(e))return er(e);var t=qn(e),n=[];for(var r in e)(r!=`constructor`||!t&&tr.call(e,r))&&n.push(r);return n},rr=function(e){return Zn(e)?Gn(e,!0):nr(e)},ir=function(e,t){return e&&vn(t,rr(t),e)};var ar=typeof e==`object`&&e&&!e.nodeType&&e,or=ar&&typeof t==`object`&&t&&!t.nodeType&&t,sr=or&&or.exports===ar?Pe.Buffer:void 0,cr=sr?sr.allocUnsafe:void 0;let lr=function(e,t){if(t)return e.slice();var n=e.length,r=cr?cr(n):new e.constructor(n);return e.copy(r),r},ur=function(e,t){var n=-1,r=e.length;for(t||=Array(r);++n<r;)t[n]=e[n];return t},dr=function(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a},fr=function(){return[]};var pr=Object.prototype.propertyIsEnumerable,mr=Object.getOwnPropertySymbols;let hr=mr?function(e){return e==null?[]:(e=Object(e),dr(mr(e),(function(t){return pr.call(e,t)})))}:fr,gr=function(e,t){return vn(e,hr(e),t)},_r=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},vr=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)_r(t,hr(e)),e=$e(e);return t}:fr,yr=function(e,t){return vn(e,vr(e),t)},br=function(e,t,n){var r=t(e);return qe(e)?r:_r(r,n(e))},xr=function(e){return br(e,Qn,hr)},Sr=function(e){return br(e,rr,vr)},Cr=zt(Pe,`DataView`),wr=zt(Pe,`Promise`),Tr=zt(Pe,`Set`),Er=zt(Pe,`WeakMap`);var Dr=`[object Map]`,Or=`[object Promise]`,kr=`[object Set]`,Ar=`[object WeakMap]`,jr=`[object DataView]`,Mr=At(Cr),Nr=At(Bt),Pr=At(wr),Fr=At(Tr),Ir=At(Er),Lr=Ke;(Cr&&Lr(new Cr(new ArrayBuffer(1)))!=jr||Bt&&Lr(new Bt)!=Dr||wr&&Lr(wr.resolve())!=Or||Tr&&Lr(new Tr)!=kr||Er&&Lr(new Er)!=Ar)&&(Lr=function(e){var t=Ke(e),n=t==`[object Object]`?e.constructor:void 0,r=n?At(n):``;if(r)switch(r){case Mr:return jr;case Nr:return Dr;case Pr:return Or;case Fr:return kr;case Ir:return Ar}return t});let Rr=Lr;var zr=Object.prototype.hasOwnProperty;let Br=function(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&zr.call(e,`index`)&&(n.index=e.index,n.input=e.input),n},Vr=Pe.Uint8Array,Hr=function(e){var t=new e.constructor(e.byteLength);return new Vr(t).set(new Vr(e)),t},Ur=function(e,t){var n=t?Hr(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)};var Wr=/\w*$/;let Gr=function(e){var t=new e.constructor(e.source,Wr.exec(e));return t.lastIndex=e.lastIndex,t};var Kr=Fe?Fe.prototype:void 0,qr=Kr?Kr.valueOf:void 0;let Jr=function(e){return qr?Object(qr.call(e)):{}},Yr=function(e,t){var n=t?Hr(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)};var Xr=`[object Boolean]`,Zr=`[object Date]`,Qr=`[object Map]`,$r=`[object Number]`,ei=`[object RegExp]`,ti=`[object Set]`,ni=`[object String]`,ri=`[object Symbol]`,ii=`[object ArrayBuffer]`,ai=`[object DataView]`,oi=`[object Float32Array]`,si=`[object Float64Array]`,ci=`[object Int8Array]`,li=`[object Int16Array]`,ui=`[object Int32Array]`,di=`[object Uint8Array]`,fi=`[object Uint8ClampedArray]`,pi=`[object Uint16Array]`,mi=`[object Uint32Array]`;let hi=function(e,t,n){var r=e.constructor;switch(t){case ii:return Hr(e);case Xr:case Zr:return new r(+e);case ai:return Ur(e,n);case oi:case si:case ci:case li:case ui:case di:case fi:case pi:case mi:return Yr(e,n);case Qr:return new r;case $r:case ni:return new r(e);case ei:return Gr(e);case ti:return new r;case ri:return Jr(e)}};var gi=Object.create;let _i=function(){function e(){}return function(t){if(!S(t))return{};if(gi)return gi(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),vi=function(e){return typeof e.constructor!=`function`||qn(e)?{}:_i($e(e))};var yi=`[object Map]`;let bi=function(e){return Je(e)&&Rr(e)==yi};var xi=Vn&&Vn.isMap;let Si=xi?Ln(xi):bi;var Ci=`[object Set]`;let wi=function(e){return Je(e)&&Rr(e)==Ci};var Ti=Vn&&Vn.isSet;let Ei=Ti?Ln(Ti):wi;var Di=1,Oi=2,ki=4,Ai=`[object Arguments]`,ji=`[object Function]`,Mi=`[object GeneratorFunction]`,Ni=`[object Object]`,T={};T[Ai]=T[`[object Array]`]=T[`[object ArrayBuffer]`]=T[`[object DataView]`]=T[`[object Boolean]`]=T[`[object Date]`]=T[`[object Float32Array]`]=T[`[object Float64Array]`]=T[`[object Int8Array]`]=T[`[object Int16Array]`]=T[`[object Int32Array]`]=T[`[object Map]`]=T[`[object Number]`]=T[Ni]=T[`[object RegExp]`]=T[`[object Set]`]=T[`[object String]`]=T[`[object Symbol]`]=T[`[object Uint8Array]`]=T[`[object Uint8ClampedArray]`]=T[`[object Uint16Array]`]=T[`[object Uint32Array]`]=!0,T[`[object Error]`]=T[ji]=T[`[object WeakMap]`]=!1;let Pi=function e(t,n,r,i,a,o){var s,c=n&Di,l=n&Oi,u=n&ki;if(r&&(s=a?r(t,i,a,o):r(t)),s!==void 0)return s;if(!S(t))return t;var d=qe(t);if(d){if(s=Br(t),!c)return ur(t,s)}else{var f=Rr(t),p=f==ji||f==Mi;if(An(t))return lr(t,c);if(f==Ni||f==Ai||p&&!a){if(s=l||p?{}:vi(t),!c)return l?yr(t,ir(s,t)):gr(t,$n(s,t))}else{if(!T[f])return a?t:{};s=hi(t,f,c)}}o||=new fn;var m=o.get(t);if(m)return m;o.set(t,s),Ei(t)?t.forEach((function(i){s.add(e(i,n,r,i,t,o))})):Si(t)&&t.forEach((function(i,a){s.set(a,e(i,n,r,a,t,o))}));var h=d?void 0:(u?l?Sr:xr:l?rr:Qn)(t);return pn(h||t,(function(i,a){h&&(i=t[a=i]),_n(s,a,e(i,n,r,a,t,o))})),s};var Fi=1,Ii=4;let Li=function(e,t){return Pi(e,Fi|Ii,t=typeof t==`function`?t:void 0)},Ri=function(e){return Je(e)&&e.nodeType===1&&!ot(e)};class zi{constructor(e,t){this._config={},t&&this.define(Bi(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(let e of Object.keys(this._config))yield e}_setToTarget(e,t,n,r=!1){if(ot(t))return void this._setObjectToTarget(e,t,r);let i=t.split(`.`);t=i.pop();for(let t of i)ot(e[t])||(e[t]={}),e=e[t];if(ot(n))return ot(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,r);r&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){let n=t.split(`.`);t=n.pop();for(let t of n){if(!ot(e[t])){e=null;break}e=e[t]}return e?Bi(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach((r=>{this._setToTarget(e,r,t[r],n)}))}}function Bi(e){return Li(e,Vi)}function Vi(e){return Ri(e)?e:void 0}function Hi(e){if(e){if(e.defaultView)return e instanceof e.defaultView.Document;if(e.ownerDocument&&e.ownerDocument.defaultView)return e instanceof e.ownerDocument.defaultView.Node}return!1}function Ui(e){let t=Object.prototype.toString.apply(e);return t==`[object Window]`||t==`[object global]`}let Wi=Gi(x());function Gi(e){return e?class extends e{listenTo(e,t,n,r={}){if(Hi(e)||Ui(e)){let i={capture:!!r.useCapture,passive:!!r.usePassive},a=this._getProxyEmitter(e,i)||new Ki(e,i);this.listenTo(a,t,n,r)}else super.listenTo(e,t,n,r)}stopListening(e,t,n){if(Hi(e)||Ui(e)){let r=this._getAllProxyEmitters(e);for(let e of r)this.stopListening(e,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(e,t){let n=e[oe];return n&&n[t]?n[t].emitter:null}(this,qi(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map((t=>this._getProxyEmitter(e,t))).filter((e=>!!e))}}:Wi}[`_getProxyEmitter`,`_getAllProxyEmitters`,`on`,`once`,`off`,`listenTo`,`stopListening`,`fire`,`delegate`,`stopDelegating`,`_addEventListener`,`_removeEventListener`].forEach((e=>{Gi[e]=Wi.prototype[e]}));class Ki extends x(){constructor(e,t){super(),ue(this,qi(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;let t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||={},this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),x().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){x().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){let t=t=>{this.fire(e,t)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function qi(e,t){let n=function(e){return e[`data-ck-expando`]||=v()}(e);for(let e of Object.keys(t).sort())t[e]&&(n+=`-`+e);return n}let Ji;try{Ji={window,document}}catch{Ji={window:{},document:{}}}let E=Ji;function Yi(e){let t=[],n=e;for(;n&&n.nodeType!=Node.DOCUMENT_NODE;)t.unshift(n),n=n.parentNode;return t}function D(e){return Object.prototype.toString.call(e)==`[object Text]`}function Xi(e){return Object.prototype.toString.apply(e)==`[object Range]`}function Zi(e){let t=e.ownerDocument.defaultView.getComputedStyle(e);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}let Qi=[`top`,`right`,`bottom`,`left`,`width`,`height`];class O{constructor(e){let t=Xi(e);if(Object.defineProperty(this,`_source`,{value:e._source||e,writable:!0,enumerable:!1}),ta(e)||t)if(t){let t=O.getDomRangeRects(e);$i(this,O.getBoundingRect(t))}else $i(this,e.getBoundingClientRect());else if(Ui(e)){let{innerWidth:t,innerHeight:n}=e;$i(this,{top:0,right:t,bottom:n,left:0,width:t,height:n})}else $i(this,e)}clone(){return new O(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){let t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new O(t)}getIntersectionArea(e){let t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){let e=this._source,t=this.clone();if(!ea(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!ea(n);){let e=new O(n),r=t.getIntersection(e);if(!r)return null;r.getArea()<t.getArea()&&(t=r),n=n.parentNode}}return t}isEqual(e){for(let t of Qi)if(this[t]!==e[t])return!1;return!0}contains(e){let t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){let e=this._source,t,n,r;if(Ui(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,r=e.getComputedStyle(e.document.documentElement).direction;else{let i=Zi(e);t=e.offsetWidth-e.clientWidth-i.left-i.right,n=e.offsetHeight-e.clientHeight-i.top-i.bottom,r=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=i.left,this.top+=i.top,this.right-=i.right,this.bottom-=i.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,r===`ltr`?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){let t=[],n=Array.from(e.getClientRects());if(n.length)for(let e of n)t.push(new O(e));else{let n=e.startContainer;D(n)&&(n=n.parentNode);let r=new O(n.getBoundingClientRect());r.right=r.left,r.width=0,t.push(r)}return t}static getBoundingRect(e){let t={left:1/0,top:1/0,right:-1/0,bottom:-1/0,width:0,height:0},n=0;for(let r of e)n++,t.left=Math.min(t.left,r.left),t.top=Math.min(t.top,r.top),t.right=Math.max(t.right,r.right),t.bottom=Math.max(t.bottom,r.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new O(t))}}function $i(e,t){for(let n of Qi)e[n]=t[n]}function ea(e){return!!ta(e)&&e===e.ownerDocument.body}function ta(e){return typeof e==`object`&&!!e&&e.nodeType===1&&typeof e.getBoundingClientRect==`function`}class k{constructor(e,t){k._observerInstance||k._createObserver(),this._element=e,this._callback=t,k._addElementCallback(e,t),k._observerInstance.observe(e)}destroy(){k._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){k._elementCallbacks||=new Map;let n=k._elementCallbacks.get(e);n||(n=new Set,k._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){let n=k._getElementCallbacks(e);n&&(n.delete(t),n.size||(k._elementCallbacks.delete(e),k._observerInstance.unobserve(e))),k._elementCallbacks&&!k._elementCallbacks.size&&(k._observerInstance=null,k._elementCallbacks=null)}static _getElementCallbacks(e){return k._elementCallbacks?k._elementCallbacks.get(e):null}static _createObserver(){k._observerInstance=new E.window.ResizeObserver((e=>{for(let t of e){let e=k._getElementCallbacks(t.target);if(e)for(let n of e)n(t)}}))}}function na(e,t){e instanceof HTMLTextAreaElement&&(e.value=t),e.innerHTML=t}function ra(e){return t=>t+e}function ia(e){let t=0;for(;e.previousSibling;)e=e.previousSibling,t++;return t}function aa(e,t,n){e.insertBefore(n,e.childNodes[t]||null)}function oa(e){return e&&e.nodeType===Node.COMMENT_NODE}function sa(e){return!!(e&&e.getClientRects&&e.getClientRects().length)}function ca({element:e,target:t,positions:n,limiter:r,fitInViewport:i,viewportOffsetConfig:a}){Tt(t)&&(t=t()),Tt(r)&&(r=r());let o=function(e){return e&&e.parentNode?e.offsetParent===E.document.body?null:e.offsetParent:null}(e),s=new O(e),c=new O(t),l,u=i&&function(e){e=Object.assign({top:0,bottom:0,left:0,right:0},e);let t=new O(E.window);return t.top+=e.top,t.height-=e.top,t.bottom-=e.bottom,t.height-=e.bottom,t}(a)||null,d={targetRect:c,elementRect:s,positionedElementAncestor:o,viewportRect:u};if(r||i){let e=r&&new O(r).getVisible();Object.assign(d,{limiterRect:e,viewportRect:u}),l=function(e,t){let{elementRect:n}=t,r=n.getArea(),i=e.map((e=>new ua(e,t))).filter((e=>!!e.name)),a=0,o=null;for(let e of i){let{limiterIntersectionArea:t,viewportIntersectionArea:n}=e;if(t===r)return e;let i=n**2+t**2;i>a&&(a=i,o=e)}return o}(n,d)||new ua(n[0],d)}else l=new ua(n[0],d);return l}function la(e){let{scrollX:t,scrollY:n}=E.window;return e.clone().moveBy(t,n)}k._observerInstance=null,k._elementCallbacks=null;class ua{constructor(e,t){let n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;let{left:r,top:i,name:a,config:o}=n;this.name=a,this.config=o,this._positioningFunctionCorrdinates={left:r,top:i},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){let e=this._options.limiterRect;if(e){let t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{let n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){let e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=la(this._rect),this._options.positionedElementAncestor&&function(e,t){let n=la(new O(t)),r=Zi(t),i=0,a=0;i-=n.left,a-=n.top,i+=t.scrollLeft,a+=t.scrollTop,i-=r.left,a-=r.top,e.moveBy(i,a)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function da(e){let t=e.parentNode;t&&t.removeChild(e)}function fa(e,t,n){let r=t.clone().moveBy(0,n),i=t.clone().moveBy(0,-n),a=new O(e).excludeScrollbarsAndBorders();if(![i,r].every((e=>a.contains(e)))){let{scrollX:o,scrollY:s}=e;ha(i,a)?s-=a.top-t.top+n:ma(r,a)&&(s+=t.bottom-a.bottom+n),ga(t,a)?o-=a.left-t.left+n:_a(t,a)&&(o+=t.right-a.right+n),e.scrollTo(o,s)}}function pa(e,t){let n=va(e),r,i;for(;e!=n.document.body;)i=t(),r=new O(e).excludeScrollbarsAndBorders(),r.contains(i)||(ha(i,r)?e.scrollTop-=r.top-i.top:ma(i,r)&&(e.scrollTop+=i.bottom-r.bottom),ga(i,r)?e.scrollLeft-=r.left-i.left:_a(i,r)&&(e.scrollLeft+=i.right-r.right)),e=e.parentNode}function ma(e,t){return e.bottom>t.bottom}function ha(e,t){return e.top<t.top}function ga(e,t){return e.left<t.left}function _a(e,t){return e.right>t.right}function va(e){return Xi(e)?e.startContainer.ownerDocument.defaultView:e.ownerDocument.defaultView}function ya(e){if(Xi(e)){let t=e.commonAncestorContainer;return D(t)&&(t=t.parentNode),t}return e.parentNode}function ba(e,t){let n=va(e),r=new O(e);if(n===t)return r;{let e=n;for(;e!=t;){let t=e.frameElement,n=new O(t).excludeScrollbarsAndBorders();r.moveBy(n.left,n.top),e=e.parent}}return r}let xa={ctrl:`⌃`,cmd:`⌘`,alt:`⌥`,shift:`⇧`},Sa={ctrl:`Ctrl+`,alt:`Alt+`,shift:`Shift+`},A=function(){let e={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++)e[String.fromCharCode(t).toLowerCase()]=t;for(let t=48;t<=57;t++)e[t-48]=t;for(let t=112;t<=123;t++)e[`f`+(t-111)]=t;for(let t of"`-=[];',./\\")e[t]=t.charCodeAt(0);return e}(),Ca=Object.fromEntries(Object.entries(A).map((([e,t])=>[t,e.charAt(0).toUpperCase()+e.slice(1)])));function wa(e){let t;if(typeof e==`string`){if(t=A[e.toLowerCase()],!t)throw new y(`keyboard-unknown-key`,null,{key:e})}else t=e.keyCode+(e.altKey?A.alt:0)+(e.ctrlKey?A.ctrl:0)+(e.shiftKey?A.shift:0)+(e.metaKey?A.cmd:0);return t}function Ta(e){return typeof e==`string`&&(e=function(e){return e.split(`+`).map((e=>e.trim()))}(e)),e.map((e=>typeof e==`string`?function(e){if(e.endsWith(`!`))return wa(e.slice(0,-1));let t=wa(e);return c.isMac&&t==A.ctrl?A.cmd:t}(e):e)).reduce(((e,t)=>t+e),0)}function Ea(e){let t=Ta(e);return Object.entries(c.isMac?xa:Sa).reduce(((e,[n,r])=>((t&A[n])!=0&&(t&=~A[n],e+=r),e)),``)+(t?Ca[t]:``)}function Da(e,t){let n=t===`ltr`;switch(e){case A.arrowleft:return n?`left`:`right`;case A.arrowright:return n?`right`:`left`;case A.arrowup:return`up`;case A.arrowdown:return`down`}}function j(e){return Array.isArray(e)?e:[e]}function Oa(e,t,n=1){if(typeof n!=`number`)throw new y(`translation-service-quantity-not-a-number`,null,{quantity:n});let r=Object.keys(E.window.CKEDITOR_TRANSLATIONS).length;r===1&&(e=Object.keys(E.window.CKEDITOR_TRANSLATIONS)[0]);let i=t.id||t.string;if(r===0||!function(e,t){return!!E.window.CKEDITOR_TRANSLATIONS[e]&&!!E.window.CKEDITOR_TRANSLATIONS[e].dictionary[t]}(e,i))return n===1?t.string:t.plural;let a=E.window.CKEDITOR_TRANSLATIONS[e].dictionary,o=E.window.CKEDITOR_TRANSLATIONS[e].getPluralForm||(e=>e===1?0:1),s=a[i];return typeof s==`string`?s:s[Number(o(n))]}E.window.CKEDITOR_TRANSLATIONS||(E.window.CKEDITOR_TRANSLATIONS={});let ka=[`ar`,`ara`,`fa`,`per`,`fas`,`he`,`heb`,`ku`,`kur`,`ug`,`uig`];function Aa(e){return ka.includes(e)?`rtl`:`ltr`}class ja{constructor({uiLanguage:e=`en`,contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=Aa(this.uiLanguage),this.contentLanguageDirection=Aa(this.contentLanguage),this.t=(e,t)=>this._t(e,t)}get language(){return console.warn(`locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead.`),this.uiLanguage}_t(e,t=[]){t=j(t),typeof e==`string`&&(e={string:e});let n=e.plural?t[0]:1;return function(e,t){return e.replace(/%(\d+)/g,((e,n)=>n<t.length?t[n]:e))}(Oa(this.uiLanguage,e,n),t)}}class Ma extends x(){constructor(e={},t={}){super();let n=je(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||`id`,this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(let t of e)this._items.push(t),this._itemMap.set(this._getItemIdBeforeAdding(t),t)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new y(`collection-add-item-invalid-index`,this);let n=0;for(let r of e){let e=this._getItemIdBeforeAdding(r),i=t+n;this._items.splice(i,0,r),this._itemMap.set(e,r),this.fire(`add`,r,i),n++}return this.fire(`change`,{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e==`string`)t=this._itemMap.get(e);else{if(typeof e!=`number`)throw new y(`collection-get-invalid-arg`,this);t=this._items[e]}return t||null}has(e){if(typeof e==`string`)return this._itemMap.has(e);{let t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e==`string`?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){let[t,n]=this._remove(e);return this.fire(`change`,{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&=(this.stopListening(this._bindToCollection),null);let e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire(`change`,{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new y(`collection-bind-to-rebind`,this);return this._bindToCollection=e,{as:e=>{this._setUpBindToBinding((t=>new e(t)))},using:e=>{typeof e==`function`?this._setUpBindToBinding(e):this._setUpBindToBinding((t=>t[e]))}}}_setUpBindToBinding(e){let t=this._bindToCollection,n=(n,r,i)=>{let a=t._bindToCollection==this,o=t._bindToInternalToExternalMap.get(r);if(a&&o)this._bindToExternalToInternalMap.set(r,o),this._bindToInternalToExternalMap.set(o,r);else{let n=e(r);if(!n)return void this._skippedIndexesFromExternal.push(i);let a=i;for(let e of this._skippedIndexesFromExternal)i>e&&a--;for(let e of t._skippedIndexesFromExternal)a>=e&&a++;this._bindToExternalToInternalMap.set(r,n),this._bindToInternalToExternalMap.set(n,r),this.add(n,a);for(let e=0;e<t._skippedIndexesFromExternal.length;e++)a<=t._skippedIndexesFromExternal[e]&&t._skippedIndexesFromExternal[e]++}};for(let e of t)n(0,e,t.getIndex(e));this.listenTo(t,`add`,n),this.listenTo(t,`remove`,((e,t,n)=>{let r=this._bindToExternalToInternalMap.get(t);r&&this.remove(r),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce(((e,t)=>(n<t&&e.push(t-1),n>t&&e.push(t),e)),[])}))}_getItemIdBeforeAdding(e){let t=this._idProperty,n;if(t in e){if(n=e[t],typeof n!=`string`)throw new y(`collection-add-invalid-id`,this);if(this.get(n))throw new y(`collection-add-item-already-exists`,this)}else e[t]=n=v();return n}_remove(e){let t,n,r,i=!1,a=this._idProperty;if(typeof e==`string`?(n=e,r=this._itemMap.get(n),i=!r,r&&(t=this._items.indexOf(r))):typeof e==`number`?(t=e,r=this._items[t],i=!r,r&&(n=r[a])):(r=e,n=r[a],t=this._items.indexOf(r),i=t==-1||!this._itemMap.get(n)),i)throw new y(`collection-remove-404`,this);this._items.splice(t,1),this._itemMap.delete(n);let o=this._bindToInternalToExternalMap.get(r);return this._bindToInternalToExternalMap.delete(r),this._bindToExternalToInternalMap.delete(o),this.fire(`remove`,r,t),[r,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function M(e){let t=e.next();return t.done?null:t.value}class Na extends Gi(C()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set(`isFocused`,!1),this.set(`focusedElement`,null)}add(e){if(this._elements.has(e))throw new y(`focustracker-add-element-already-exist`,this);this.listenTo(e,`focus`,(()=>this._focus(e)),{useCapture:!0}),this.listenTo(e,`blur`,(()=>this._blur()),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout((()=>{this.focusedElement=null,this.isFocused=!1}),0)}}class Pa{constructor(){this._listener=new(Gi())}listenTo(e){this._listener.listenTo(e,`keydown`,((e,t)=>{this._listener.fire(`_keydown:`+wa(t),t)}))}set(e,t,n={}){let r=Ta(e),i=n.priority;this._listener.listenTo(this._listener,`_keydown:`+r,((e,n)=>{t(n,(()=>{n.preventDefault(),n.stopPropagation(),e.stop()})),e.return=!0}),{priority:i})}press(e){return!!this._listener.fire(`_keydown:`+wa(e),e)}destroy(){this._listener.stopListening()}}function Fa(e){return je(e)?new Map(e):function(e){let t=new Map;for(let n in e)t.set(n,e[n]);return t}(e)}function Ia(e,t){return!!(n=e.charAt(t-1))&&n.length==1&&/[\ud800-\udbff]/.test(n)&&function(e){return!!e&&e.length==1&&/[\udc00-\udfff]/.test(e)}(e.charAt(t));var n}function La(e,t){return!!(n=e.charAt(t))&&n.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(n);var n}let Ra=function(){let e=/\p{Regional_Indicator}{2}/u.source,t=`(?:`+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map((e=>e.source)).join(`|`)+`)`;return RegExp(`${e}|${t}(?:‍${t})*`,`ug`)}();function za(e,t){let n=String(e).matchAll(Ra);return Array.from(n).some((e=>e.index<t&&t<e.index+e[0].length))}class Ba extends Ma{constructor(e=[]){super(e,{idProperty:`viewUid`}),this.on(`add`,((e,t,n)=>{this._renderViewIntoCollectionParent(t,n)})),this.on(`remove`,((e,t)=>{t.element&&this._parentElement&&t.element.remove()})),this._parentElement=null}destroy(){this.map((e=>e.destroy()))}setParent(e){this._parentElement=e;for(let e of this)this._renderViewIntoCollectionParent(e)}delegate(...e){if(!e.length||!e.every((e=>typeof e==`string`)))throw new y(`ui-viewcollection-delegate-wrong-events`,this);return{to:t=>{for(let n of this)for(let r of e)n.delegate(r).to(t);this.on(`add`,((n,r)=>{for(let n of e)r.delegate(n).to(t)})),this.on(`remove`,((n,r)=>{for(let n of e)r.stopDelegating(n,t)}))}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}var Va=i(6062),N=i.n(Va),Ha=i(4793);N()(Ha.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Ha.Z.locals;class P extends Gi(C()){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new Ma,this._unboundChildren=this.createCollection(),this._viewCollections.on(`add`,((t,n)=>{n.locale=e,n.t=e&&e.t})),this.decorate(`render`)}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Ua.bind(this,this)}createCollection(e){let t=new Ba(e);return this._viewCollections.add(t),t}registerChild(e){je(e)||(e=[e]);for(let t of e)this._unboundChildren.add(t)}deregisterChild(e){je(e)||(e=[e]);for(let t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Ua(e)}extendTemplate(e){Ua.extend(this.template,e)}render(){if(this.isRendered)throw new y(`ui-view-render-already-rendered`,this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map((e=>e.destroy())),this.template&&this.template._revertData&&this.template.revert(this.element)}}class Ua extends x(){constructor(e){super(),Object.assign(this,$a(Qa(e))),this._isRendered=!1,this._revertData=null}render(){let e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new y(`ui-template-revert-not-applied`,[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(let n of t.children)ao(n)?yield n:oo(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,r)=>new Ga({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:r}),if:(n,r,i)=>new Ka({observable:e,emitter:t,attribute:n,valueIfTrue:r,callback:i})}}static extend(e,t){if(e._isRendered)throw new y(`template-extend-render`,[this,e]);ro(e,$a(Qa(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new y(`ui-template-wrong-syntax`,this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||=e.node=document.createElementNS(this.ns||`http://www.w3.org/1999/xhtml`,this.tag),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(``),qa(this.text)?this._bindToObservable({schema:this.text,updater:Ya(t),data:e}):t.textContent=this.text.join(``),t}_renderAttributes(e){if(!this.attributes)return;let t=e.node,n=e.revertData;for(let r in this.attributes){let i=t.getAttribute(r),a=this.attributes[r];n&&(n.attributes[r]=i);let o=co(a)?a[0].ns:null;if(qa(a)){let s=co(a)?a[0].value:a;n&&lo(r)&&s.unshift(i),this._bindToObservable({schema:s,updater:Xa(t,r,o),data:e})}else if(r==`style`&&typeof a[0]!=`string`)this._renderStyleAttribute(a[0],e);else{n&&i&&lo(r)&&a.unshift(i);let e=a.map((e=>e&&e.value||e)).reduce(((e,t)=>e.concat(t)),[]).reduce(to,``);io(e)||t.setAttributeNS(o,r,e)}}}_renderStyleAttribute(e,t){let n=t.node;for(let r in e){let i=e[r];qa(i)?this._bindToObservable({schema:[i],updater:Za(n,r),data:t}):n.style[r]=i}}_renderElementChildren(e){let t=e.node,n=e.intoFragment?document.createDocumentFragment():t,r=e.isApplying,i=0;for(let a of this.children)if(so(a)){if(!r){a.setParent(t);for(let e of a)n.appendChild(e.element)}}else if(ao(a))r||(a.isRendered||a.render(),n.appendChild(a.element));else if(Hi(a))n.appendChild(a);else if(r){let t={children:[],bindings:[],attributes:{}};e.revertData.children.push(t),a._renderNode({intoFragment:!1,node:n.childNodes[i++],isApplying:!0,revertData:t})}else n.appendChild(a.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(let t in this.eventListeners){let n=this.eventListeners[t].map((n=>{let[r,i]=t.split(`@`);return n.activateDomEventListener(r,i,e)}));e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){let r=n.revertData;Ja(e,t,n);let i=e.filter((e=>!io(e))).filter((e=>e.observable)).map((r=>r.activateAttributeListener(e,t,n)));r&&r.bindings.push(i)}_revertTemplateFromNode(e,t){for(let e of t.bindings)for(let t of e)t();if(t.text)return void(e.textContent=t.text);let n=e;for(let e in t.attributes){let r=t.attributes[e];r===null?n.removeAttribute(e):n.setAttribute(e,r)}for(let e=0;e<t.children.length;++e)this._revertTemplateFromNode(n.childNodes[e],t.children[e])}}class Wa{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){let t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){let r=()=>Ja(e,t,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,r),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,r)}}}class Ga extends Wa{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,n){let r=(e,n)=>{t&&!n.target.matches(t)||(typeof this.eventNameOrFunction==`function`?this.eventNameOrFunction(n):this.observable.fire(this.eventNameOrFunction,n))};return this.emitter.listenTo(n.node,e,r),()=>{this.emitter.stopListening(n.node,e,r)}}}class Ka extends Wa{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){return!io(super.getValue(e))&&(this.valueIfTrue||!0)}}function qa(e){return!!e&&(e.value&&(e=e.value),Array.isArray(e)?e.some(qa):e instanceof Wa)}function Ja(e,t,{node:n}){let r=function(e,t){return e.map((e=>e instanceof Wa?e.getValue(t):e))}(e,n),i;i=e.length==1&&e[0]instanceof Ka?r[0]:r.reduce(to,``),io(i)?t.remove():t.set(i)}function Ya(e){return{set(t){e.textContent=t},remove(){e.textContent=``}}}function Xa(e,t,n){return{set(r){e.setAttributeNS(n,t,r)},remove(){e.removeAttributeNS(n,t)}}}function Za(e,t){return{set(n){e.style[t]=n},remove(){e.style[t]=null}}}function Qa(e){return Li(e,(e=>{if(e&&(e instanceof Wa||oo(e)||ao(e)||so(e)))return e}))}function $a(e){if(typeof e==`string`?e=function(e){return{text:[e]}}(e):e.text&&function(e){e.text=j(e.text)}(e),e.on&&(e.eventListeners=function(e){for(let t in e)eo(e,t);return e}(e.on),delete e.on),!e.text){e.attributes&&function(e){for(let t in e)e[t].value&&(e[t].value=j(e[t].value)),eo(e,t)}(e.attributes);let t=[];if(e.children)if(so(e.children))t.push(e.children);else for(let n of e.children)oo(n)||ao(n)||Hi(n)?t.push(n):t.push(new Ua(n));e.children=t}return e}function eo(e,t){e[t]=j(e[t])}function to(e,t){return io(t)?e:io(e)?t:`${e} ${t}`}function no(e,t){for(let n in t)e[n]?e[n].push(...t[n]):e[n]=t[n]}function ro(e,t){if(t.attributes&&(e.attributes||={},no(e.attributes,t.attributes)),t.eventListeners&&(e.eventListeners||={},no(e.eventListeners,t.eventListeners)),t.text&&e.text.push(...t.text),t.children&&t.children.length){if(e.children.length!=t.children.length)throw new y(`ui-template-extend-children-mismatch`,e);let n=0;for(let r of t.children)ro(e.children[n++],r)}}function io(e){return!e&&e!==0}function ao(e){return e instanceof P}function oo(e){return e instanceof Ua}function so(e){return e instanceof Ba}function co(e){return S(e[0])&&e[0].ns}function lo(e){return e==`class`||e==`style`}class uo extends Ba{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new Ua({tag:`div`,attributes:{class:[`ck`,`ck-reset_all`,`ck-body`,`ck-rounded-corners`],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(`.ck-body-wrapper`);e||(e=Ze(document,`div`,{class:`ck-body-wrapper`}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();let e=document.querySelector(`.ck-body-wrapper`);e&&e.childElementCount==0&&e.remove()}}var fo=i(6574);N()(fo.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),fo.Z.locals;class po extends P{constructor(){super();let e=this.bindTemplate;this.set(`content`,``),this.set(`viewBox`,`0 0 20 20`),this.set(`fillColor`,``),this.set(`isColorInherited`,!0),this.setTemplate({tag:`svg`,ns:`http://www.w3.org/2000/svg`,attributes:{class:[`ck`,`ck-icon`,`ck-reset_all-excluded`,e.if(`isColorInherited`,`ck-icon_inherit-color`)],viewBox:e.to(`viewBox`)}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on(`change:content`,(()=>{this._updateXMLContent(),this._colorFillPaths()})),this.on(`change:fillColor`,(()=>{this._colorFillPaths()}))}_updateXMLContent(){if(this.content){let e=new DOMParser().parseFromString(this.content.trim(),`image/svg+xml`).querySelector(`svg`),t=e.getAttribute(`viewBox`);t&&(this.viewBox=t);for(let{name:t,value:n}of Array.from(e.attributes))po.presentationalAttributeNames.includes(t)&&this.element.setAttribute(t,n);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(`.ck-icon__fill`).forEach((e=>{e.style.fill=this.fillColor}))}}po.presentationalAttributeNames=`alignment-baseline.baseline-shift.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-rendering.cursor.direction.display.dominant-baseline.fill.fill-opacity.fill-rule.filter.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.image-rendering.letter-spacing.lighting-color.marker-end.marker-mid.marker-start.mask.opacity.overflow.paint-order.pointer-events.shape-rendering.stop-color.stop-opacity.stroke.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke-width.text-anchor.text-decoration.text-overflow.text-rendering.transform.unicode-bidi.vector-effect.visibility.white-space.word-spacing.writing-mode`.split(`.`);var mo=i(4906);N()(mo.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),mo.Z.locals;class F extends P{constructor(e){super(e);let t=this.bindTemplate,n=v();this.set(`class`,void 0),this.set(`labelStyle`,void 0),this.set(`icon`,void 0),this.set(`isEnabled`,!0),this.set(`isOn`,!1),this.set(`isVisible`,!0),this.set(`isToggleable`,!1),this.set(`keystroke`,void 0),this.set(`label`,void 0),this.set(`tabindex`,-1),this.set(`tooltip`,!1),this.set(`tooltipPosition`,`s`),this.set(`type`,`button`),this.set(`withText`,!1),this.set(`withKeystroke`,!1),this.children=this.createCollection(),this.labelView=this._createLabelView(n),this.iconView=new po,this.iconView.extendTemplate({attributes:{class:`ck-button__icon`}}),this.keystrokeView=this._createKeystrokeView(),this.bind(`_tooltipString`).to(this,`tooltip`,this,`label`,this,`keystroke`,this._getTooltipString.bind(this));let r={tag:`button`,attributes:{class:[`ck`,`ck-button`,t.to(`class`),t.if(`isEnabled`,`ck-disabled`,(e=>!e)),t.if(`isVisible`,`ck-hidden`,(e=>!e)),t.to(`isOn`,(e=>e?`ck-on`:`ck-off`)),t.if(`withText`,`ck-button_with-text`),t.if(`withKeystroke`,`ck-button_with-keystroke`)],type:t.to(`type`,(e=>e||`button`)),tabindex:t.to(`tabindex`),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":t.if(`isEnabled`,!0,(e=>!e)),"aria-pressed":t.to(`isOn`,(e=>!!this.isToggleable&&String(!!e))),"data-cke-tooltip-text":t.to(`_tooltipString`),"data-cke-tooltip-position":t.to(`tooltipPosition`)},children:this.children,on:{click:t.to((e=>{this.isEnabled?this.fire(`execute`):e.preventDefault()}))}};c.isSafari&&(r.on.mousedown=t.to((e=>{this.focus(),e.preventDefault()}))),this.setTemplate(r)}render(){super.render(),this.icon&&(this.iconView.bind(`content`).to(this,`icon`),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createLabelView(e){let t=new P,n=this.bindTemplate;return t.setTemplate({tag:`span`,attributes:{class:[`ck`,`ck-button__label`],style:n.to(`labelStyle`),id:`ck-editor__aria-label_${e}`},children:[{text:this.bindTemplate.to(`label`)}]}),t}_createKeystrokeView(){let e=new P;return e.setTemplate({tag:`span`,attributes:{class:[`ck`,`ck-button__keystroke`]},children:[{text:this.bindTemplate.to(`keystroke`,(e=>Ea(e)))}]}),e}_getTooltipString(e,t,n){return e?typeof e==`string`?e:(n&&=Ea(n),e instanceof Function?e(t,n):`${t}${n?` (${n})`:``}`):``}}var ho=i(5332);N()(ho.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),ho.Z.locals;class go extends F{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:`ck-switchbutton`}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){let e=new P;return e.setTemplate({tag:`span`,attributes:{class:[`ck`,`ck-button__toggle`]},children:[{tag:`span`,attributes:{class:[`ck`,`ck-button__toggle__inner`]}}]}),e}}var _o=i(6781);N()(_o.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),_o.Z.locals;class vo{constructor(e){this.editor=e,this._components=new Map}*names(){for(let e of this._components.values())yield e.originalName}add(e,t){this._components.set(yo(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new y(`componentfactory-item-missing`,this,{name:e});return this._components.get(yo(e)).callback(this.editor.locale)}has(e){return this._components.has(yo(e))}}function yo(e){return String(e).toLowerCase()}var bo=i(5485);N()(bo.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),bo.Z.locals;class xo extends P{constructor(e,t,n){super(e);let r=this.bindTemplate;this.buttonView=t,this.panelView=n,this.set(`isOpen`,!1),this.set(`isEnabled`,!0),this.set(`class`,void 0),this.set(`id`,void 0),this.set(`panelPosition`,`auto`),this.keystrokes=new Pa,this.focusTracker=new Na,this.setTemplate({tag:`div`,attributes:{class:[`ck`,`ck-dropdown`,r.to(`class`),r.if(`isEnabled`,`ck-disabled`,(e=>!e))],id:r.to(`id`),"aria-describedby":r.to(`ariaDescribedById`)},children:[t,n]}),t.extendTemplate({attributes:{class:[`ck-dropdown__button`],"data-cke-tooltip-disabled":r.to(`isOpen`)}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,`open`,(()=>{this.isOpen=!this.isOpen})),this.panelView.bind(`isVisible`).to(this,`isOpen`),this.on(`change:isOpen`,((e,t,n)=>{n&&(this.panelPosition===`auto`?this.panelView.position=xo._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)})),this.keystrokes.listenTo(this.element);let e=(e,t)=>{this.isOpen&&(this.isOpen=!1,t())};this.keystrokes.set(`arrowdown`,((e,t)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,t())})),this.keystrokes.set(`arrowright`,((e,t)=>{this.isOpen&&t()})),this.keystrokes.set(`arrowleft`,e),this.keystrokes.set(`esc`,e)}focus(){this.buttonView.focus()}get _panelPositions(){let{south:e,north:t,southEast:n,southWest:r,northEast:i,northWest:a,southMiddleEast:o,southMiddleWest:s,northMiddleEast:c,northMiddleWest:l}=xo.defaultPanelPositions;return this.locale.uiLanguageDirection===`rtl`?[r,n,s,o,e,a,i,l,c,t]:[n,r,o,s,e,i,a,c,l,t]}}xo.defaultPanelPositions={south:(e,t)=>({top:e.bottom,left:e.left-(t.width-e.width)/2,name:`s`}),southEast:e=>({top:e.bottom,left:e.left,name:`se`}),southWest:(e,t)=>({top:e.bottom,left:e.left-t.width+e.width,name:`sw`}),southMiddleEast:(e,t)=>({top:e.bottom,left:e.left-(t.width-e.width)/4,name:`sme`}),southMiddleWest:(e,t)=>({top:e.bottom,left:e.left-3*(t.width-e.width)/4,name:`smw`}),north:(e,t)=>({top:e.top-t.height,left:e.left-(t.width-e.width)/2,name:`n`}),northEast:(e,t)=>({top:e.top-t.height,left:e.left,name:`ne`}),northWest:(e,t)=>({top:e.top-t.height,left:e.left-t.width+e.width,name:`nw`}),northMiddleEast:(e,t)=>({top:e.top-t.height,left:e.left-(t.width-e.width)/4,name:`nme`}),northMiddleWest:(e,t)=>({top:e.top-t.height,left:e.left-3*(t.width-e.width)/4,name:`nmw`})},xo._getOptimalPosition=ca;let So=`<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>`;class Co extends F{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to(`isOn`,(e=>String(e)))}}),this.delegate(`execute`).to(this,`open`)}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){let e=new po;return e.content=So,e.extendTemplate({attributes:{class:`ck-dropdown__arrow`}}),e}}var wo=i(7686);N()(wo.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),wo.Z.locals;class To extends P{constructor(e){super(e);let t=this.bindTemplate;this.set(`class`,void 0),this.set(`labelStyle`,void 0),this.set(`icon`,void 0),this.set(`isEnabled`,!0),this.set(`isOn`,!1),this.set(`isToggleable`,!1),this.set(`isVisible`,!0),this.set(`keystroke`,void 0),this.set(`withKeystroke`,!1),this.set(`label`,void 0),this.set(`tabindex`,-1),this.set(`tooltip`,!1),this.set(`tooltipPosition`,`s`),this.set(`type`,`button`),this.set(`withText`,!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new Pa,this.focusTracker=new Na,this.setTemplate({tag:`div`,attributes:{class:[`ck`,`ck-splitbutton`,t.to(`class`),t.if(`isVisible`,`ck-hidden`,(e=>!e)),this.arrowView.bindTemplate.if(`isOn`,`ck-splitbutton_open`)]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set(`arrowright`,((e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())})),this.keystrokes.set(`arrowleft`,((e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())}))}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){let e=new F;return e.bind(`icon`,`isEnabled`,`isOn`,`isToggleable`,`keystroke`,`label`,`tabindex`,`tooltip`,`tooltipPosition`,`type`,`withText`).to(this),e.extendTemplate({attributes:{class:`ck-splitbutton__action`}}),e.delegate(`execute`).to(this),e}_createArrowView(){let e=new F,t=e.bindTemplate;return e.icon=So,e.extendTemplate({attributes:{class:[`ck-splitbutton__arrow`],"data-cke-tooltip-disabled":t.to(`isOn`),"aria-haspopup":!0,"aria-expanded":t.to(`isOn`,(e=>String(e)))}}),e.bind(`isEnabled`).to(this),e.bind(`label`).to(this),e.bind(`tooltip`).to(this),e.delegate(`execute`).to(this,`open`),e}}class Eo extends P{constructor(e){super(e);let t=this.bindTemplate;this.set(`isVisible`,!1),this.set(`position`,`se`),this.children=this.createCollection(),this.setTemplate({tag:`div`,attributes:{class:[`ck`,`ck-reset`,`ck-dropdown__panel`,t.to(`position`,(e=>`ck-dropdown__panel_${e}`)),t.if(`isVisible`,`ck-dropdown__panel-visible`)]},children:this.children,on:{selectstart:t.to((e=>e.preventDefault()))}})}focus(){if(this.children.length){let e=this.children.first;typeof e.focus==`function`?e.focus():b(`ui-dropdown-panel-focus-child-missing-focus`,{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){let e=this.children.last;typeof e.focusLast==`function`?e.focusLast():e.focus()}}}class Do{constructor(e){if(this.focusables=e.focusables,this.focusTracker=e.focusTracker,this.keystrokeHandler=e.keystrokeHandler,this.actions=e.actions,e.actions&&e.keystrokeHandler)for(let t in e.actions){let n=e.actions[t];typeof n==`string`&&(n=[n]);for(let r of n)e.keystrokeHandler.set(r,((e,n)=>{this[t](),n()}))}}get first(){return this.focusables.find(Oo)||null}get last(){return this.focusables.filter(Oo).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find(((t,n)=>{let r=t.element===this.focusTracker.focusedElement;return r&&(e=n),r})),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){let t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?`first`:`last`];let r=(t+n+e)%n;do{let t=this.focusables.get(r);if(Oo(t))return t;r=(r+n+e)%n}while(r!==t);return null}}function Oo(e){return!(!e.focus||!sa(e.element))}class ko extends P{constructor(e){super(e),this.setTemplate({tag:`span`,attributes:{class:[`ck`,`ck-toolbar__separator`]}})}}class Ao extends P{constructor(e){super(e),this.setTemplate({tag:`span`,attributes:{class:[`ck`,`ck-toolbar__line-break`]}})}}function jo(e){return Array.isArray(e)?{items:e,removeItems:[]}:e?Object.assign({items:[],removeItems:[]},e):{items:[],removeItems:[]}}class I extends C(){constructor(e){super(),this.editor=e,this.set(`isEnabled`,!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on(`set:isEnabled`,Mo,{priority:`highest`}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off(`set:isEnabled`,Mo),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Mo(e){e.return=!1,e.stop()}class L extends C(){constructor(e){super(),this.editor=e,this.set(`value`,void 0),this.set(`isEnabled`,!1),this._affectsData=!0,this._disableStack=new Set,this.decorate(`execute`),this.listenTo(this.editor.model.document,`change`,(()=>{this.refresh()})),this.on(`execute`,(e=>{this.isEnabled||e.stop()}),{priority:`high`}),this.listenTo(e,`change:isReadOnly`,((e,t,n)=>{n&&this.affectsData?this.forceDisabled(`readOnlyMode`):this.clearForceDisabled(`readOnlyMode`)}))}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on(`set:isEnabled`,No,{priority:`highest`}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off(`set:isEnabled`,No),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function No(e){e.return=!1,e.stop()}class Po extends L{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){let t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){te(this._childCommandsDefinitions,{command:e,priority:t.priority||`normal`}),e.on(`change:isEnabled`,(()=>this._checkEnabled())),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){let e=this._childCommandsDefinitions.find((({command:e})=>e.isEnabled));return e&&e.command}}class Fo extends x(){constructor(e,t=[],n=[]){super(),this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(let e of t)e.pluginName&&this._availablePlugins.set(e.pluginName,e);this._contextPlugins=new Map;for(let[e,t]of n)this._contextPlugins.set(e,t),this._contextPlugins.set(t,e),e.pluginName&&this._availablePlugins.set(e.pluginName,e)}*[Symbol.iterator](){for(let e of this._plugins)typeof e[0]==`function`&&(yield e)}get(e){let t=this._plugins.get(e);if(!t){let t=e;throw typeof e==`function`&&(t=e.pluginName||e.name),new y(`plugincollection-plugin-not-loaded`,this._context,{plugin:t})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){let r=this,i=this._context;(function e(t,n=new Set){t.forEach((t=>{s(t)&&(n.has(t)||(n.add(t),t.pluginName&&!r._availablePlugins.has(t.pluginName)&&r._availablePlugins.set(t.pluginName,t),t.requires&&e(t.requires,n)))}))})(e),d(e);let a=[...function e(t,n=new Set){return t.map((e=>s(e)?e:r._availablePlugins.get(e))).reduce(((t,r)=>n.has(r)?t:(n.add(r),r.requires&&(d(r.requires,r),e(r.requires,n).forEach((e=>t.add(e)))),t.add(r))),new Set)}(e.filter((e=>!l(e,t))))];(function(e,t){for(let n of t){if(typeof n!=`function`)throw new y(`plugincollection-replace-plugin-invalid-type`,null,{pluginItem:n});let t=n.pluginName;if(!t)throw new y(`plugincollection-replace-plugin-missing-name`,null,{pluginItem:n});if(n.requires&&n.requires.length)throw new y(`plugincollection-plugin-for-replacing-cannot-have-dependencies`,null,{pluginName:t});let i=r._availablePlugins.get(t);if(!i)throw new y(`plugincollection-plugin-for-replacing-not-exist`,null,{pluginName:t});let a=e.indexOf(i);if(a===-1){if(r._contextPlugins.has(i))return;throw new y(`plugincollection-plugin-for-replacing-not-loaded`,null,{pluginName:t})}if(i.requires&&i.requires.length)throw new y(`plugincollection-replaced-plugin-cannot-have-dependencies`,null,{pluginName:t});e.splice(a,1,n),r._availablePlugins.set(t,n)}})(a,n);let o=function(e){return e.map((e=>{let t=r._contextPlugins.get(e);return t||=new e(i),r._add(e,t),t}))}(a);return f(o,`init`).then((()=>f(o,`afterInit`))).then((()=>o));function s(e){return typeof e==`function`}function c(e){return s(e)&&e.isContextPlugin}function l(e,t){return t.some((t=>t===e||u(e)===t||u(t)===e))}function u(e){return s(e)?e.pluginName||e.name:e}function d(e,n=null){e.map((e=>s(e)?e:r._availablePlugins.get(e)||e)).forEach((e=>{(function(e,t){if(!s(e))throw t?new y(`plugincollection-soft-required`,i,{missingPlugin:e,requiredBy:u(t)}):new y(`plugincollection-plugin-not-found`,i,{plugin:e})})(e,n),function(e,t){if(c(t)&&!c(e))throw new y(`plugincollection-context-required`,i,{plugin:u(e),requiredBy:u(t)})}(e,n),function(e,n){if(n&&l(e,t))throw new y(`plugincollection-required`,i,{plugin:u(e),requiredBy:u(n)})}(e,n)}))}function f(e,t){return e.reduce(((e,n)=>n[t]?r._contextPlugins.has(n)?e:e.then(n[t].bind(n)):e),Promise.resolve())}}destroy(){let e=[];for(let[,t]of this)typeof t.destroy!=`function`||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);let n=e.pluginName;if(n){if(this._plugins.has(n))throw new y(`plugincollection-plugin-name-conflict`,null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}class Io{constructor(e){this.config=new zi(e,this.constructor.defaultConfig);let t=this.constructor.builtinPlugins;this.config.define(`plugins`,t),this.plugins=new Fo(this,t);let n=this.config.get(`language`)||{};this.locale=new ja({uiLanguage:typeof n==`string`?n:n.ui,contentLanguage:this.config.get(`language.content`)}),this.t=this.locale.t,this.editors=new Ma,this._contextOwner=null}initPlugins(){let e=this.config.get(`plugins`)||[],t=this.config.get(`substitutePlugins`)||[];for(let n of e.concat(t)){if(typeof n!=`function`)throw new y(`context-initplugins-constructor-only`,null,{Plugin:n});if(!0!==n.isContextPlugin)throw new y(`context-initplugins-invalid-plugin`,null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,(e=>e.destroy()))).then((()=>this.plugins.destroy()))}_addEditor(e,t){if(this._contextOwner)throw new y(`context-addeditor-private-context`);this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){let e={};for(let t of this.config.names())[`plugins`,`removePlugins`,`extraPlugins`].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise((t=>{let n=new this(e);t(n.initPlugins().then((()=>n)))}))}}class Lo extends C(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}var Ro=i(4717);N()(Ro.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Ro.Z.locals;let zo=new WeakMap;function Bo(e){let{view:t,element:n,text:r,isDirectHost:i=!0,keepOnFocus:a=!1}=e,o=t.document;zo.has(o)||(zo.set(o,new Map),o.registerPostFixer((e=>Ho(o,e))),o.on(`change:isComposing`,(()=>{t.change((e=>Ho(o,e)))}),{priority:`high`})),zo.get(o).set(n,{text:r,isDirectHost:i,keepOnFocus:a,hostElement:i?n:null}),t.change((e=>Ho(o,e)))}function Vo(e,t){return!!t.hasClass(`ck-placeholder`)&&(e.removeClass(`ck-placeholder`,t),!0)}function Ho(e,t){let n=zo.get(e),r=[],i=!1;for(let[e,a]of n)a.isDirectHost&&(r.push(e),Uo(t,e,a)&&(i=!0));for(let[e,a]of n){if(a.isDirectHost)continue;let n=Wo(e);n&&(r.includes(n)||(a.hostElement=n,Uo(t,e,a)&&(i=!0)))}return i}function Uo(e,t,n){let{text:r,isDirectHost:i,hostElement:a}=n,o=!1;return a.getAttribute(`data-placeholder`)!==r&&(e.setAttribute(`data-placeholder`,r,a),o=!0),(i||t.childCount==1)&&function(e,t){if(!e.isAttached()||Array.from(e.getChildren()).some((e=>!e.is(`uiElement`))))return!1;let n=e.document,r=n.selection.anchor;return!(n.isComposing&&r&&r.parent===e||!t&&n.isFocused&&(!r||r.parent===e))}(a,n.keepOnFocus)?function(e,t){return!t.hasClass(`ck-placeholder`)&&(e.addClass(`ck-placeholder`,t),!0)}(e,a)&&(o=!0):Vo(e,a)&&(o=!0),o}function Wo(e){if(e.childCount){let t=e.getChild(0);if(t.is(`element`)&&!t.is(`uiElement`)&&!t.is(`attributeElement`))return t}return null}class Go{is(){throw Error(`is() method is abstract`)}}var Ko=4;let qo=function(e){return Pi(e,Ko)};class Jo extends x(Go){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new y(`view-node-not-found-in-parent`,this);return e}get nextSibling(){let e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){let e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is(`rootElement`)}getPath(){let e=[],t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){let t=[],n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?`push`:`unshift`](n),n=n.parent;return t}getCommonAncestor(e,t={}){let n=this.getAncestors(t),r=e.getAncestors(t),i=0;for(;n[i]==r[i]&&n[i];)i++;return i===0?null:n[i-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;let t=this.getPath(),n=e.getPath(),r=Ae(t,n);switch(r){case`prefix`:return!0;case`extension`:return!1;default:return t[r]<n[r]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){let e=qo(this);return delete e.parent,e}}Jo.prototype.is=function(e){return e===`node`||e===`view:node`};class R extends Jo{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange(`text`,this),this._textData=e}isSimilar(e){return e instanceof R&&(this===e||this.data===e.data)}_clone(){return new R(this.document,this.data)}}R.prototype.is=function(e){return e===`$text`||e===`view:$text`||e===`text`||e===`view:text`||e===`node`||e===`view:node`};class Yo extends Go{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new y(`view-textproxy-wrong-offsetintext`,this);if(n<0||t+n>e.data.length)throw new y(`view-textproxy-wrong-length`,this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){let t=[],n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?`push`:`unshift`](n),n=n.parent;return t}}Yo.prototype.is=function(e){return e===`$textProxy`||e===`view:$textProxy`||e===`textProxy`||e===`view:textProxy`};class Xo{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t==`string`||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(let t of e)for(let e of this._patterns){let n=Zo(t,e);if(n)return{element:t,pattern:e,match:n}}return null}matchAll(...e){let t=[];for(let n of e)for(let e of this._patterns){let r=Zo(n,e);r&&t.push({element:n,pattern:e,match:r})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;let e=this._patterns[0],t=e.name;return typeof e==`function`||!t||t instanceof RegExp?null:t}}function Zo(e,t){if(typeof t==`function`)return t(e);let n={};return t.name&&(n.name=function(e,t){return e instanceof RegExp?!!t.match(e):e===t}(t.name,e.name),!n.name)||t.attributes&&(n.attributes=function(e,t){let n=new Set(t.getAttributeKeys());return ot(e)?(e.style!==void 0&&b(`matcher-pattern-deprecated-attributes-style-key`,e),e.class!==void 0&&b(`matcher-pattern-deprecated-attributes-class-key`,e)):(n.delete(`style`),n.delete(`class`)),Qo(e,n,(e=>t.getAttribute(e)))}(t.attributes,e),!n.attributes)||t.classes&&(n.classes=function(e,t){return Qo(e,t.getClassNames(),(()=>{}))}(t.classes,e),!n.classes)||t.styles&&(n.styles=function(e,t){return Qo(e,t.getStyleNames(!0),(e=>t.getStyle(e)))}(t.styles,e),!n.styles)?null:n}function Qo(e,t,n){let r=function(e){return Array.isArray(e)?e.map((e=>ot(e)?(e.key!==void 0&&e.value!==void 0||b(`matcher-pattern-missing-key-or-value`,e),[e.key,e.value]):[e,!0])):ot(e)?Object.entries(e):[[e,!0]]}(e),i=Array.from(t),a=[];if(r.forEach((([e,t])=>{i.forEach((r=>{(function(e,t){return!0===e||e===t||e instanceof RegExp&&t.match(e)})(e,r)&&function(e,t,n){if(!0===e)return!0;let r=n(t);return e===r||e instanceof RegExp&&!!String(r).match(e)}(t,r,n)&&a.push(r)}))})),r.length&&!(a.length<r.length))return a}var $o=`[object Symbol]`;let es=function(e){return typeof e==`symbol`||Je(e)&&Ke(e)==$o};var ts=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ns=/^\w*$/;let rs=function(e,t){if(qe(e))return!1;var n=typeof e;return!(n!=`number`&&n!=`symbol`&&n!=`boolean`&&e!=null&&!es(e))||ns.test(e)||!ts.test(e)||t!=null&&e in Object(t)};var is=`Expected a function`;function as(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw TypeError(is);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(as.Cache||cn),n}as.Cache=cn;let os=as;var ss=500,cs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ls=/\\(\\)?/g;let us=function(e){var t=os(e,(function(e){return n.size===ss&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(cs,(function(e,n,r,i){t.push(r?i.replace(ls,`$1`):n||e)})),t})),ds=function(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i};var fs=1/0,ps=Fe?Fe.prototype:void 0,ms=ps?ps.toString:void 0;let hs=function e(t){if(typeof t==`string`)return t;if(qe(t))return ds(t,e)+``;if(es(t))return ms?ms.call(t):``;var n=t+``;return n==`0`&&1/t==-fs?`-0`:n},gs=function(e){return e==null?``:hs(e)},_s=function(e,t){return qe(e)?e:rs(e,t)?[e]:us(gs(e))},vs=function(e){var t=e==null?0:e.length;return t?e[t-1]:void 0};var ys=1/0;let bs=function(e){if(typeof e==`string`||es(e))return e;var t=e+``;return t==`0`&&1/e==-ys?`-0`:t},xs=function(e,t){for(var n=0,r=(t=_s(t,e)).length;e!=null&&n<r;)e=e[bs(t[n++])];return n&&n==r?e:void 0},Ss=function(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++r<i;)a[r]=e[r+t];return a},Cs=function(e,t){return t.length<2?e:xs(e,Ss(t,0,-1))},ws=function(e,t){return t=_s(t,e),(e=Cs(e,t))==null||delete e[bs(vs(t))]},Ts=function(e,t){return e==null||ws(e,t)},Es=function(e,t,n){var r=e==null?void 0:xs(e,t);return r===void 0?n:r},Ds=function(e,t,n){(n!==void 0&&!ct(e[t],n)||n===void 0&&!(t in e))&&hn(e,t,n)},Os=function(e){return function(t,n,r){for(var i=-1,a=Object(t),o=r(t),s=o.length;s--;){var c=o[e?s:++i];if(!1===n(a[c],c,a))break}return t}}(),ks=function(e){return Je(e)&&Zn(e)},As=function(e,t){if((t!==`constructor`||typeof e[t]!=`function`)&&t!=`__proto__`)return e[t]},js=function(e){return vn(e,rr(e))},Ms=function(e,t,n,r,i,a,o){var s=As(e,n),c=As(t,n),l=o.get(c);if(l)Ds(e,n,l);else{var u=a?a(s,c,n+``,e,t,o):void 0,d=u===void 0;if(d){var f=qe(c),p=!f&&An(c),m=!f&&!p&&Un(c);u=c,f||p||m?qe(s)?u=s:ks(s)?u=ur(s):p?(d=!1,u=lr(c,!0)):m?(d=!1,u=Yr(c,!0)):u=[]:ot(c)||Tn(c)?(u=s,Tn(s)?u=js(s):S(s)&&!Tt(s)||(u=vi(c))):d=!1}d&&(o.set(c,u),i(u,c,r,a,o),o.delete(c)),Ds(e,n,u)}},Ns=function e(t,n,r,i,a){t!==n&&Os(n,(function(o,s){if(a||=new fn,S(o))Ms(t,n,s,r,e,i,a);else{var c=i?i(As(t,s),o,s+``,t,n,a):void 0;c===void 0&&(c=o),Ds(t,s,c)}}),rr)},Ps=function(e){return e},Fs=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)};var Is=Math.max;let Ls=function(e,t,n){return t=Is(t===void 0?e.length-1:t,0),function(){for(var r=arguments,i=-1,a=Is(r.length-t,0),o=Array(a);++i<a;)o[i]=r[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=r[i];return s[t]=n(o),Fs(e,this,s)}},Rs=function(e){return function(){return e}},zs=mn?function(e,t){return mn(e,`toString`,{configurable:!0,enumerable:!1,value:Rs(t),writable:!0})}:Ps;var Bs=800,Vs=16,Hs=Date.now;let Us=function(e){var t=0,n=0;return function(){var r=Hs(),i=Vs-(r-n);if(n=r,i>0){if(++t>=Bs)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(zs),Ws=function(e,t){return Us(Ls(e,t,Ps),e+``)},Gs=function(e,t,n){if(!S(n))return!1;var r=typeof t;return!!(r==`number`?Zn(n)&&Nn(t,n.length):r==`string`&&t in n)&&ct(n[t],e)},Ks=function(e){return Ws((function(t,n){var r=-1,i=n.length,a=i>1?n[i-1]:void 0,o=i>2?n[2]:void 0;for(a=e.length>3&&typeof a==`function`?(i--,a):void 0,o&&Gs(n[0],n[1],o)&&(a=i<3?void 0:a,i=1),t=Object(t);++r<i;){var s=n[r];s&&e(t,s,r,a)}return t}))},qs=Ks((function(e,t,n){Ns(e,t,n)})),Js=function(e,t,n,r){if(!S(e))return e;for(var i=-1,a=(t=_s(t,e)).length,o=a-1,s=e;s!=null&&++i<a;){var c=bs(t[i]),l=n;if(c===`__proto__`||c===`constructor`||c===`prototype`)return e;if(i!=o){var u=s[c];(l=r?r(u,c,s):void 0)===void 0&&(l=S(u)?u:Nn(t[i+1])?[]:{})}_n(s,c,l),s=s[c]}return e},Ys=function(e,t,n){return e==null?e:Js(e,t,n)};class Xs{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){let e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();let t=Array.from(function(e){let t=null,n=0,r=0,i=null,a=new Map;if(e===``)return a;e.charAt(e.length-1)!=`;`&&(e+=`;`);for(let o=0;o<e.length;o++){let s=e.charAt(o);if(t===null)switch(s){case`:`:i||(i=e.substr(n,o-n),r=o+1);break;case`"`:case`'`:t=s;break;case`;`:{let t=e.substr(r,o-r);i&&a.set(i.trim(),t.trim()),i=null,n=o+1;break}}else s===t&&(t=null)}return a}(e).entries());for(let[e,n]of t)this._styleProcessor.toNormalizedForm(e,n,this._styles)}has(e){if(this.isEmpty)return!1;let t=this._styleProcessor.getReducedForm(e,this._styles).find((([t])=>t===e));return Array.isArray(t)}set(e,t){if(S(e))for(let[t,n]of Object.entries(e))this._styleProcessor.toNormalizedForm(t,n,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){let t=Qs(e);Ts(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?``:this._getStylesEntries().map((e=>e.join(`:`))).sort().join(`;`)+`;`}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!S(this._styles[e]))return this._styles[e];let t=this._styleProcessor.getReducedForm(e,this._styles).find((([t])=>t===e));return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map((([e])=>e))}clear(){this._styles={}}_getStylesEntries(){let e=[],t=Object.keys(this._styles);for(let n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){let t=e.split(`.`);if(!(t.length>1))return;let n=t.splice(0,t.length-1).join(`.`),r=Es(this._styles,n);r&&!Array.from(Object.keys(r)).length&&this.remove(n)}}class Zs{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(S(t))$s(n,Qs(e),t);else if(this._normalizers.has(e)){let{path:r,value:i}=this._normalizers.get(e)(t);$s(n,r,i)}else $s(n,e,t)}getNormalized(e,t){if(!e)return qs({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){let n=this._extractors.get(e);if(typeof n==`string`)return Es(t,n);let r=n(e,t);if(r)return r}return Es(t,Qs(e))}getReducedForm(e,t){let n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){let t=Array.from(this._consumables.keys()).filter((t=>{let n=this.getNormalized(t,e);return n&&typeof n==`object`?Object.keys(n).length:n})),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(let n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Qs(e){return e.replace(`-`,`.`)}function $s(e,t,n){let r=n;S(n)&&(r=qs({},Es(e,t),n)),Ys(e,t,r)}class ec extends Jo{constructor(e,t,n,r){if(super(e),this.name=t,this._attrs=function(e){let t=Fa(e);for(let[e,n]of t)n===null?t.delete(e):typeof n!=`string`&&t.set(e,String(n));return t}(n),this._children=[],r&&this._insertChild(0,r),this._classes=new Set,this._attrs.has(`class`)){let e=this._attrs.get(`class`);tc(this._classes,e),this._attrs.delete(`class`)}this._styles=new Xs(this.document.stylesProcessor),this._attrs.has(`style`)&&(this._styles.setTo(this._attrs.get(`style`)),this._attrs.delete(`style`)),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield`class`),this._styles.isEmpty||(yield`style`),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield[`class`,this.getAttribute(`class`)]),this._styles.isEmpty||(yield[`style`,this.getAttribute(`style`)])}getAttribute(e){if(e==`class`)return this._classes.size>0?[...this._classes].join(` `):void 0;if(e==`style`){let e=this._styles.toString();return e==``?void 0:e}return this._attrs.get(e)}hasAttribute(e){return e==`class`?this._classes.size>0:e==`style`?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof ec))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(let[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(let t of this._classes)if(!e._classes.has(t))return!1;for(let t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(let t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(let t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){let t=new Xo(...e),n=this.parent;for(;n&&!n.is(`documentFragment`);){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){let e=Array.from(this._classes).sort().join(`,`),t=this._styles.toString(),n=Array.from(this._attrs).map((e=>`${e[0]}="${e[1]}"`)).sort().join(` `);return this.name+(e==``?``:` class="${e}"`)+(t?` style="${t}"`:``)+(n==``?``:` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){let t=[];if(e)for(let n of this.getChildren())t.push(n._clone(e));let n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange(`children`,this);let n=0,r=function(e,t){return typeof t==`string`?[new R(e,t)]:(je(t)||(t=[t]),Array.from(t).map((t=>typeof t==`string`?new R(e,t):t instanceof Yo?new R(e,t.data):t)))}(this.document,t);for(let t of r)t.parent!==null&&t._remove(),t.parent=this,t.document=this.document,this._children.splice(e,0,t),e++,n++;return n}_removeChildren(e,t=1){this._fireChange(`children`,this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){let n=String(t);this._fireChange(`attributes`,this),e==`class`?tc(this._classes,n):e==`style`?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange(`attributes`,this),e==`class`?this._classes.size>0&&(this._classes.clear(),!0):e==`style`?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange(`attributes`,this);for(let t of j(e))this._classes.add(t)}_removeClass(e){this._fireChange(`attributes`,this);for(let t of j(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange(`attributes`,this),ot(e)?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange(`attributes`,this);for(let t of j(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function tc(e,t){let n=t.split(/\s+/);e.clear(),n.forEach((t=>e.add(t)))}ec.prototype.is=function(e,t){return t?t===this.name&&(e===`element`||e===`view:element`):e===`element`||e===`view:element`||e===`node`||e===`view:node`};class nc extends ec{constructor(...e){super(...e),this.getFillerOffset=rc}}function rc(){let e=[...this.getChildren()],t=e[this.childCount-1];if(t&&t.is(`element`,`br`))return this.childCount;for(let t of e)if(!t.is(`uiElement`))return null;return this.childCount}nc.prototype.is=function(e,t){return t?t===this.name&&(e===`containerElement`||e===`view:containerElement`||e===`element`||e===`view:element`):e===`containerElement`||e===`view:containerElement`||e===`element`||e===`view:element`||e===`node`||e===`view:node`};class ic extends C(nc){constructor(...e){super(...e);let t=e[0];this.set(`isReadOnly`,!1),this.set(`isFocused`,!1),this.bind(`isReadOnly`).to(t),this.bind(`isFocused`).to(t,`isFocused`,(e=>e&&t.selection.editableElement==this)),this.listenTo(t.selection,`change`,(()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this}))}destroy(){this.stopListening()}}ic.prototype.is=function(e,t){return t?t===this.name&&(e===`editableElement`||e===`view:editableElement`||e===`containerElement`||e===`view:containerElement`||e===`element`||e===`view:element`):e===`editableElement`||e===`view:editableElement`||e===`containerElement`||e===`view:containerElement`||e===`element`||e===`view:element`||e===`node`||e===`view:node`};let ac=Symbol(`rootName`);class oc extends ic{constructor(e,t){super(e,t),this.rootName=`main`}get rootName(){return this.getCustomProperty(ac)}set rootName(e){this._setCustomProperty(ac,e)}set _name(e){this.name=e}}oc.prototype.is=function(e,t){return t?t===this.name&&(e===`rootElement`||e===`view:rootElement`||e===`editableElement`||e===`view:editableElement`||e===`containerElement`||e===`view:containerElement`||e===`element`||e===`view:element`):e===`rootElement`||e===`view:rootElement`||e===`editableElement`||e===`view:editableElement`||e===`containerElement`||e===`view:containerElement`||e===`element`||e===`view:element`||e===`node`||e===`view:node`};class sc{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new y(`view-tree-walker-no-start-position`,null);if(e.direction&&e.direction!=`forward`&&e.direction!=`backward`)throw new y(`view-tree-walker-unknown-direction`,e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=z._createAt(e.startPosition):this.position=z._createAt(e.boundaries[e.direction==`backward`?`end`:`start`]),this.direction=e.direction||`forward`,this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,r;do r=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=r)}next(){return this.direction==`forward`?this._next():this._previous()}_next(){let e=this.position.clone(),t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount||n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let r;if(n instanceof R){if(e.isAtEnd)return this.position=z._createAfter(n),this._next();r=n.data[e.offset]}else r=n.getChild(e.offset);if(r instanceof ec)return this.shallow?e.offset++:e=new z(r,0),this.position=e,this._formatReturnValue(`elementStart`,r,t,e,1);if(r instanceof R){if(this.singleCharacters)return e=new z(r,0),this.position=e,this._next();{let n,i=r.data.length;return r==this._boundaryEndParent?(i=this.boundaries.end.offset,n=new Yo(r,0,i),e=z._createAfter(n)):(n=new Yo(r,0,r.data.length),e.offset++),this.position=e,this._formatReturnValue(`text`,n,t,e,i)}}if(typeof r==`string`){let r;r=this.singleCharacters?1:(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;let i=new Yo(n,e.offset,r);return e.offset+=r,this.position=e,this._formatReturnValue(`text`,i,t,e,r)}return e=z._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue(`elementEnd`,n,t,e)}_previous(){let e=this.position.clone(),t=this.position,n=e.parent;if(n.parent===null&&e.offset===0||n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let r;if(n instanceof R){if(e.isAtStart)return this.position=z._createBefore(n),this._previous();r=n.data[e.offset-1]}else r=n.getChild(e.offset-1);if(r instanceof ec)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue(`elementStart`,r,t,e,1)):(e=new z(r,r.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue(`elementEnd`,r,t,e));if(r instanceof R){if(this.singleCharacters)return e=new z(r,r.data.length),this.position=e,this._previous();{let n,i=r.data.length;if(r==this._boundaryStartParent){let t=this.boundaries.start.offset;n=new Yo(r,t,r.data.length-t),i=n.data.length,e=z._createBefore(n)}else n=new Yo(r,0,r.data.length),e.offset--;return this.position=e,this._formatReturnValue(`text`,n,t,e,i)}}if(typeof r==`string`){let r;if(this.singleCharacters)r=1;else{let t=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=e.offset-t}e.offset-=r;let i=new Yo(n,e.offset,r);return this.position=e,this._formatReturnValue(`text`,i,t,e,r)}return e=z._createBefore(n),this.position=e,this._formatReturnValue(`elementStart`,n,t,e,1)}_formatReturnValue(e,t,n,r,i){return t instanceof Yo&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!=`forward`||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=z._createAfter(t.textNode):(r=z._createAfter(t.textNode),this.position=r)),t.offsetInText===0&&(this.direction!=`backward`||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=z._createBefore(t.textNode):(r=z._createBefore(t.textNode),this.position=r))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:r,length:i}}}}class z extends Go{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is(`$text`)?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is(`$text`)?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){let e=this.parent.is(`$text`)?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof ic);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){let t=z._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;let n=new sc(t);return n.skip(e),n.position}getAncestors(){return this.parent.is(`documentFragment`)?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){let t=this.getAncestors(),n=e.getAncestors(),r=0;for(;t[r]==n[r]&&t[r];)r++;return r===0?null:t[r-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)==`before`}isAfter(e){return this.compareWith(e)==`after`}compareWith(e){if(this.root!==e.root)return`different`;if(this.isEqual(e))return`same`;let t=this.parent.is(`node`)?this.parent.getPath():[],n=e.parent.is(`node`)?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);let r=Ae(t,n);switch(r){case`prefix`:return`before`;case`extension`:return`after`;default:return t[r]<n[r]?`before`:`after`}}getWalker(e={}){return e.startPosition=this,new sc(e)}clone(){return new z(this.parent,this.offset)}static _createAt(e,t){if(e instanceof z)return new this(e.parent,e.offset);{let n=e;if(t==`end`)t=n.is(`$text`)?n.data.length:n.childCount;else{if(t==`before`)return this._createBefore(n);if(t==`after`)return this._createAfter(n);if(t!==0&&!t)throw new y(`view-createpositionat-offset-required`,n)}return new z(n,t)}}static _createAfter(e){if(e.is(`$textProxy`))return new z(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new y(`view-position-after-root`,e,{root:e});return new z(e.parent,e.index+1)}static _createBefore(e){if(e.is(`$textProxy`))return new z(e.textNode,e.offsetInText);if(!e.parent)throw new y(`view-position-before-root`,e,{root:e});return new z(e.parent,e.index)}}z.prototype.is=function(e){return e===`position`||e===`view:position`};class B extends Go{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new sc({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(cc,{direction:`backward`}),t=this.end.getLastMatchingPosition(cc);return e.parent.is(`$text`)&&e.isAtStart&&(e=z._createBefore(e.parent)),t.parent.is(`$text`)&&t.isAtEnd&&(t=z._createAfter(t.parent)),new B(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(cc);if(e.isAfter(this.end)||e.isEqual(this.end))return new B(e,e);let t=this.end.getLastMatchingPosition(cc,{direction:`backward`}),n=e.nodeAfter,r=t.nodeBefore;return n&&n.is(`$text`)&&(e=new z(n,0)),r&&r.is(`$text`)&&(t=new z(r,r.data.length)),new B(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);let n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),r=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&r}getDifference(e){let t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new B(this.start,e.start)),this.containsPosition(e.end)&&t.push(new B(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new B(t,n)}return null}getWalker(e={}){return e.boundaries=this,new sc(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is(`$text`)&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is(`$text`)&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is(`element`)&&e===t?e:null}clone(){return new B(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;let t=new sc(e);for(let e of t)yield e.item}*getPositions(e={}){e.boundaries=this;let t=new sc(e);yield t.position;for(let e of t)yield e.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,r){return new this(new z(e,t),new z(n,r))}static _createFromPositionAndShift(e,t){let n=e,r=e.getShiftedBy(t);return t>0?new this(n,r):new this(r,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){let t=e.is(`$textProxy`)?e.offsetSize:1;return this._createFromPositionAndShift(z._createBefore(e),t)}}function cc(e){return!(!e.item.is(`attributeElement`)&&!e.item.is(`uiElement`))}B.prototype.is=function(e){return e===`range`||e===`view:range`};class lc extends x(Go){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel=``,e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;let e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;let e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(let e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(let t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(let t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){let e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){let e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(let t of this._ranges){let n=!1;for(let r of e._ranges)if(t.isEqual(r)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;let t=ke(this.getRanges());if(t!=ke(e.getRanges()))return!1;if(t==0)return!0;for(let t of this.getRanges()){t=t.getTrimmed();let n=!1;for(let r of e.getRanges())if(r=r.getTrimmed(),t.start.isEqual(r.start)&&t.end.isEqual(r.end)){n=!0;break}if(!n)return!1}return!0}getSelectedElement(){return this.rangeCount===1?this.getFirstRange().getContainedElement():null}setTo(...e){let[t,n,r]=e;if(typeof n==`object`&&(r=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(r);else if(t instanceof lc||t instanceof uc)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof B)this._setRanges([t],r&&r.backward),this._setFakeOptions(r);else if(t instanceof z)this._setRanges([new B(t)]),this._setFakeOptions(r);else if(t instanceof Jo){let e=!!r&&!!r.backward,i;if(n===void 0)throw new y(`view-selection-setto-required-second-parameter`,this);i=n==`in`?B._createIn(t):n==`on`?B._createOn(t):new B(z._createAt(t,n)),this._setRanges([i],e),this._setFakeOptions(r)}else{if(!je(t))throw new y(`view-selection-setto-not-selectable`,this);this._setRanges(t,r&&r.backward),this._setFakeOptions(r)}this.fire(`change`)}setFocus(e,t){if(this.anchor===null)throw new y(`view-selection-setfocus-no-ranges`,this);let n=z._createAt(e,t);if(n.compareWith(this.focus)==`same`)return;let r=this.anchor;this._ranges.pop(),n.compareWith(r)==`before`?this._addRange(new B(n,r),!0):this._addRange(new B(r,n)),this.fire(`change`)}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(let t of e)this._addRange(t);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||``}_addRange(e,t=!1){if(!(e instanceof B))throw new y(`view-selection-add-range-not-range`,this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(let t of this._ranges)if(e.isIntersecting(t))throw new y(`view-selection-range-intersects`,this,{addedRange:e,intersectingRange:t});this._ranges.push(new B(e.start,e.end))}}lc.prototype.is=function(e){return e===`selection`||e===`view:selection`};class uc extends x(Go){constructor(...e){super(),this._selection=new lc,this._selection.delegate(`change`).to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}uc.prototype.is=function(e){return e===`selection`||e==`documentSelection`||e==`view:selection`||e==`view:documentSelection`};class dc extends g{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase=`none`,this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}let fc=Symbol(`bubbling contexts`);function pc(e){return class extends e{fire(e,...t){try{let n=e instanceof g?e:new g(this,e),r=_c(this);if(!r.size)return;if(mc(n,`capturing`,this),hc(r,`$capture`,n,...t))return n.return;let i=n.startRange||this.selection.getFirstRange(),a=i?i.getContainedElement():null,o=!!a&&!!gc(r,a),s=a||function(e){if(!e)return null;let t=e.start.parent,n=e.end.parent,r=t.getPath(),i=n.getPath();return r.length>i.length?t:n}(i);if(mc(n,`atTarget`,s),!o){if(hc(r,`$text`,n,...t))return n.return;mc(n,`bubbling`,s)}for(;s;){if(s.is(`rootElement`)){if(hc(r,`$root`,n,...t))return n.return}else if(s.is(`element`)&&hc(r,s.name,n,...t))return n.return;if(hc(r,s,n,...t))return n.return;s=s.parent,mc(n,`bubbling`,s)}return mc(n,`bubbling`,this),hc(r,`$document`,n,...t),n.return}catch(e){y.rethrowUnexpectedError(e,this)}}_addEventListener(e,t,n){let r=j(n.context||`$document`),i=_c(this);for(let a of r){let r=i.get(a);r||(r=new(x()),i.set(a,r)),this.listenTo(r,e,t,n)}}_removeEventListener(e,t){let n=_c(this);for(let r of n.values())this.stopListening(r,e,t)}}}{let e=pc(Object);[`fire`,`_addEventListener`,`_removeEventListener`].forEach((t=>{pc[t]=e.prototype[t]}))}function mc(e,t,n){e instanceof dc&&(e._eventPhase=t,e._currentTarget=n)}function hc(e,t,n,...r){let i=typeof t==`string`?e.get(t):gc(e,t);return!!i&&(i.fire(n,...r),n.stop.called)}function gc(e,t){for(let[n,r]of e)if(typeof n==`function`&&n(t))return r;return null}function _c(e){return e[fc]||(e[fc]=new Map),e[fc]}class vc extends pc(C()){constructor(e){super(),this.selection=new uc,this.roots=new Ma({idProperty:`rootName`}),this.stylesProcessor=e,this.set(`isReadOnly`,!1),this.set(`isFocused`,!1),this.set(`isSelecting`,!1),this.set(`isComposing`,!1),this._postFixers=new Set}getRoot(e=`main`){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map((e=>e.destroy())),this.stopListening()}_callPostFixers(e){let t=!1;do for(let n of this._postFixers)if(t=n(e),t)break;while(t)}}class yc extends ec{constructor(...e){super(...e),this.getFillerOffset=bc,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new y(`attribute-element-get-elements-with-same-id-no-id`,this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){let t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function bc(){if(xc(this))return null;let e=this.parent;for(;e&&e.is(`attributeElement`);){if(xc(e)>1)return null;e=e.parent}return!e||xc(e)>1?null:this.childCount}function xc(e){return Array.from(e.getChildren()).filter((e=>!e.is(`uiElement`))).length}yc.DEFAULT_PRIORITY=10,yc.prototype.is=function(e,t){return t?t===this.name&&(e===`attributeElement`||e===`view:attributeElement`||e===`element`||e===`view:element`):e===`attributeElement`||e===`view:attributeElement`||e===`element`||e===`view:element`||e===`node`||e===`view:node`};class Sc extends ec{constructor(e,t,n,r){super(e,t,n,r),this.getFillerOffset=Cc}_insertChild(e,t){if(t&&(t instanceof Jo||Array.from(t).length>0))throw new y(`view-emptyelement-cannot-add`,[this,t]);return 0}}function Cc(){return null}Sc.prototype.is=function(e,t){return t?t===this.name&&(e===`emptyElement`||e===`view:emptyElement`||e===`element`||e===`view:element`):e===`emptyElement`||e===`view:emptyElement`||e===`element`||e===`view:element`||e===`node`||e===`view:node`};class wc extends ec{constructor(...e){super(...e),this.getFillerOffset=Ec}_insertChild(e,t){if(t&&(t instanceof Jo||Array.from(t).length>0))throw new y(`view-uielement-cannot-add`,[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){let t=e.createElement(this.name);for(let e of this.getAttributeKeys())t.setAttribute(e,this.getAttribute(e));return t}}function Tc(e){e.document.on(`arrowKey`,((t,n)=>function(e,t,n){if(t.keyCode==A.arrowright){let e=t.domTarget.ownerDocument.defaultView.getSelection(),r=e.rangeCount==1&&e.getRangeAt(0).collapsed;if(r||t.shiftKey){let t=e.focusNode,i=e.focusOffset,a=n.domPositionToView(t,i);if(a===null)return;let o=!1,s=a.getLastMatchingPosition((e=>(e.item.is(`uiElement`)&&(o=!0),!(!e.item.is(`uiElement`)&&!e.item.is(`attributeElement`)))));if(o){let t=n.viewPositionToDom(s);r?e.collapse(t.parent,t.offset):e.extend(t.parent,t.offset)}}}}(0,n,e.domConverter)),{priority:`low`})}function Ec(){return null}wc.prototype.is=function(e,t){return t?t===this.name&&(e===`uiElement`||e===`view:uiElement`||e===`element`||e===`view:element`):e===`uiElement`||e===`view:uiElement`||e===`element`||e===`view:element`||e===`node`||e===`view:node`};class Dc extends ec{constructor(...e){super(...e),this.getFillerOffset=Oc}_insertChild(e,t){if(t&&(t instanceof Jo||Array.from(t).length>0))throw new y(`view-rawelement-cannot-add`,[this,t]);return 0}render(){}}function Oc(){return null}Dc.prototype.is=function(e,t){return t?t===this.name&&(e===`rawElement`||e===`view:rawElement`||e===`element`||e===`view:element`):e===`rawElement`||e===`view:rawElement`||e===this.name||e===`view:`+this.name||e===`element`||e===`view:element`||e===`node`||e===`view:node`};class kc extends x(Go){constructor(e,t){super(),this.document=e,this._children=[],t&&this._insertChild(0,t),this._customProperties=new Map}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange(`children`,this);let n=0,r=function(e,t){return typeof t==`string`?[new R(e,t)]:(je(t)||(t=[t]),Array.from(t).map((t=>typeof t==`string`?new R(e,t):t instanceof Yo?new R(e,t.data):t)))}(this.document,t);for(let t of r)t.parent!==null&&t._remove(),t.parent=this,this._children.splice(e,0,t),e++,n++;return n}_removeChildren(e,t=1){this._fireChange(`children`,this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire(`change:`+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}kc.prototype.is=function(e){return e===`documentFragment`||e===`view:documentFragment`};class Ac{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(...e){this.document.selection._setFocus(...e)}createDocumentFragment(e){return new kc(this.document,e)}createText(e){return new R(this.document,e)}createAttributeElement(e,t,n={}){let r=new yc(this.document,e,t);return typeof n.priority==`number`&&(r._priority=n.priority),n.id&&(r._id=n.id),n.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),r}createContainerElement(e,t,n={},r={}){let i=null;ot(n)?r=n:i=n;let a=new nc(this.document,e,t,i);return r.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...r.renderUnsafeAttributes),a}createEditableElement(e,t,n={}){let r=new ic(this.document,e,t);return n.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),r}createEmptyElement(e,t,n={}){let r=new Sc(this.document,e,t);return n.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),r}createUIElement(e,t,n){let r=new wc(this.document,e,t);return n&&(r.render=n),r}createRawElement(e,t,n,r={}){let i=new Dc(this.document,e,t);return n&&(i.render=n),r.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...r.renderUnsafeAttributes),i}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){ot(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof z?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){let t=e.parent;if(!t.is(`containerElement`))throw new y(`view-writer-break-non-container-element`,this.document);if(!t.parent)throw new y(`view-writer-break-root`,this.document);if(e.isAtStart)return z._createBefore(t);if(!e.isAtEnd){let n=t._clone(!1);this.insert(z._createAfter(t),n);let r=new B(e,z._createAt(t,`end`)),i=new z(n,0);this.move(r,i)}return z._createAfter(t)}mergeAttributes(e){let t=e.offset,n=e.parent;if(n.is(`$text`))return e;if(n.is(`attributeElement`)&&n.childCount===0){let e=n.parent,t=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new z(e,t))}let r=n.getChild(t-1),i=n.getChild(t);if(!r||!i)return e;if(r.is(`$text`)&&i.is(`$text`))return Fc(r,i);if(r.is(`attributeElement`)&&i.is(`attributeElement`)&&r.isSimilar(i)){let e=r.childCount;return r._appendChild(i.getChildren()),i._remove(),this._removeFromClonedElementsGroup(i),this.mergeAttributes(new z(r,e))}return e}mergeContainers(e){let t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is(`containerElement`)&&n.is(`containerElement`)))throw new y(`view-writer-merge-containers-invalid-position`,this.document);let r=t.getChild(t.childCount-1),i=r instanceof R?z._createAt(r,`end`):z._createAt(t,`end`);return this.move(B._createIn(n),z._createAt(t,`end`)),this.remove(B._createOn(n)),i}insert(e,t){Lc(t=je(t)?[...t]:[t],this.document);let n=t.reduce(((e,t)=>{let n=e[e.length-1],r=!t.is(`uiElement`);return n&&n.breakAttributes==r?n.nodes.push(t):e.push({breakAttributes:r,nodes:[t]}),e}),[]),r=null,i=e;for(let{nodes:e,breakAttributes:t}of n){let n=this._insertNodes(i,e,t);r||=n.start,i=n.end}return r?new B(r,i):new B(e)}remove(e){let t=e instanceof B?e:B._createOn(e);if(zc(t,this.document),t.isCollapsed)return new kc(this.document);let{start:n,end:r}=this._breakAttributesRange(t,!0),i=n.parent,a=r.offset-n.offset,o=i._removeChildren(n.offset,a);for(let e of o)this._removeFromClonedElementsGroup(e);let s=this.mergeAttributes(n);return t.start=s,t.end=s.clone(),new kc(this.document,o)}clear(e,t){zc(e,this.document);let n=e.getWalker({direction:`backward`,ignoreElementEnd:!0});for(let r of n){let n=r.item,i;if(n.is(`element`)&&t.isSimilar(n))i=B._createOn(n);else if(!r.nextPosition.isAfter(e.start)&&n.is(`$textProxy`)){let e=n.getAncestors().find((e=>e.is(`element`)&&t.isSimilar(e)));e&&(i=B._createIn(e))}i&&(i.end.isAfter(e.end)&&(i.end=e.end),i.start.isBefore(e.start)&&(i.start=e.start),this.remove(i))}}move(e,t){let n;if(t.isAfter(e.end)){let r=(t=this._breakAttributes(t,!0)).parent,i=r.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=r.childCount-i}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof yc))throw new y(`view-writer-wrap-invalid-attribute`,this.document);if(zc(e,this.document),e.isCollapsed){let r=e.start;r.parent.is(`element`)&&(n=r.parent,!Array.from(n.getChildren()).some((e=>!e.is(`uiElement`))))&&(r=r.getLastMatchingPosition((e=>e.item.is(`uiElement`)))),r=this._wrapPosition(r,t);let i=this.document.selection;return i.isCollapsed&&i.getFirstPosition().isEqual(e.start)&&this.setSelection(r),new B(r)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof yc))throw new y(`view-writer-unwrap-invalid-attribute`,this.document);if(zc(e,this.document),e.isCollapsed)return e;let{start:n,end:r}=this._breakAttributesRange(e,!0),i=n.parent,a=this._unwrapChildren(i,n.offset,r.offset,t),o=this.mergeAttributes(a.start);return o.isEqual(a.start)||a.end.offset--,new B(o,this.mergeAttributes(a.end))}rename(e,t){let n=new nc(this.document,e,t.getAttributes());return this.insert(z._createAfter(t),n),this.move(B._createIn(t),z._createAt(n,0)),this.remove(B._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return z._createAt(e,t)}createPositionAfter(e){return z._createAfter(e)}createPositionBefore(e){return z._createBefore(e)}createRange(...e){return new B(...e)}createRangeOn(e){return B._createOn(e)}createRangeIn(e){return B._createIn(e)}createSelection(...e){return new lc(...e)}createSlot(e){if(!this._slotFactory)throw new y(`view-writer-invalid-create-slot-context`,this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let r,i;if(r=n?jc(e):e.parent.is(`$text`)?e.parent.parent:e.parent,!r)throw new y(`view-writer-invalid-position-container`,this.document);i=n?this._breakAttributes(e,!0):e.parent.is(`$text`)?Pc(e):e;let a=r._insertChild(i.offset,t);for(let e of t)this._addToClonedElementsGroup(e);let o=i.getShiftedBy(a),s=this.mergeAttributes(i);return s.isEqual(i)||o.offset--,new B(s,this.mergeAttributes(o))}_wrapChildren(e,t,n,r){let i=t,a=[];for(;i<n;){let t=e.getChild(i),n=t.is(`$text`),o=t.is(`attributeElement`);if(o&&this._wrapAttributeElement(r,t))a.push(new z(e,i));else if(n||!o||Mc(r,t)){let n=r._clone();t._remove(),n._appendChild(t),e._insertChild(i,n),this._addToClonedElementsGroup(n),a.push(new z(e,i))}else this._wrapChildren(t,0,t.childCount,r);i++}let o=0;for(let e of a)e.offset-=o,e.offset!=t&&(this.mergeAttributes(e).isEqual(e)||(o++,n--));return B._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,r){let i=t,a=[];for(;i<n;){let t=e.getChild(i);if(t.is(`attributeElement`))if(t.isSimilar(r)){let r=t.getChildren(),o=t.childCount;t._remove(),e._insertChild(i,r),this._removeFromClonedElementsGroup(t),a.push(new z(e,i),new z(e,i+o)),i+=o,n+=o-1}else this._unwrapAttributeElement(r,t)?(a.push(new z(e,i),new z(e,i+1)),i++):(this._unwrapChildren(t,0,t.childCount,r),i++);else i++}let o=0;for(let e of a)e.offset-=o,!(e.offset==t||e.offset==n)&&(this.mergeAttributes(e).isEqual(e)||(o++,n--));return B._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){let{start:n,end:r}=this._breakAttributesRange(e,!0),i=n.parent,a=this._wrapChildren(i,n.offset,r.offset,t),o=this.mergeAttributes(a.start);return o.isEqual(a.start)||a.end.offset--,new B(o,this.mergeAttributes(a.end))}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Nc(e.clone());e.parent.is(`$text`)&&(e=Pc(e));let n=this.createAttributeElement(`_wrapPosition-fake-element`);n._priority=1/0,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);let r=new B(e,e.getShiftedBy(1));this.wrap(r,t);let i=new z(n.parent,n.index);n._remove();let a=i.nodeBefore,o=i.nodeAfter;return a instanceof R&&o instanceof R?Fc(a,o):Nc(i)}_wrapAttributeElement(e,t){if(!Bc(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(let n of e.getAttributeKeys())if(n!==`class`&&n!==`style`&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(let n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(let n of e.getAttributeKeys())n!==`class`&&n!==`style`&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(let n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(let n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Bc(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(let n of e.getAttributeKeys())if(n!==`class`&&n!==`style`&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(let n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(let n of e.getAttributeKeys())n!==`class`&&n!==`style`&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){let n=e.start,r=e.end;if(zc(e,this.document),e.isCollapsed){let n=this._breakAttributes(e.start,t);return new B(n,n)}let i=this._breakAttributes(r,t),a=i.parent.childCount,o=this._breakAttributes(n,t);return i.offset+=i.parent.childCount-a,new B(o,i)}_breakAttributes(e,t=!1){let n=e.offset,r=e.parent;if(e.parent.is(`emptyElement`))throw new y(`view-writer-cannot-break-empty-element`,this.document);if(e.parent.is(`uiElement`))throw new y(`view-writer-cannot-break-ui-element`,this.document);if(e.parent.is(`rawElement`))throw new y(`view-writer-cannot-break-raw-element`,this.document);if(!t&&r.is(`$text`)&&Rc(r.parent)||Rc(r))return e.clone();if(r.is(`$text`))return this._breakAttributes(Pc(e),t);if(n==r.childCount){let e=new z(r.parent,r.index+1);return this._breakAttributes(e,t)}if(n===0){let e=new z(r.parent,r.index);return this._breakAttributes(e,t)}{let e=r.index+1,i=r._clone();r.parent._insertChild(e,i),this._addToClonedElementsGroup(i);let a=r.childCount-n,o=r._removeChildren(n,a);i._appendChild(o);let s=new z(r.parent,e);return this._breakAttributes(s,t)}}_addToClonedElementsGroup(e){if(!e.root.is(`rootElement`))return;if(e.is(`element`))for(let t of e.getChildren())this._addToClonedElementsGroup(t);let t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is(`element`))for(let t of e.getChildren())this._removeFromClonedElementsGroup(t);let t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n&&n.delete(e)}}function jc(e){let t=e.parent;for(;!Rc(t);){if(!t)return;t=t.parent}return t}function Mc(e,t){return e.priority<t.priority||!(e.priority>t.priority)&&e.getIdentity()<t.getIdentity()}function Nc(e){let t=e.nodeBefore;if(t&&t.is(`$text`))return new z(t,t.data.length);let n=e.nodeAfter;return n&&n.is(`$text`)?new z(n,0):e}function Pc(e){if(e.offset==e.parent.data.length)return new z(e.parent.parent,e.parent.index+1);if(e.offset===0)return new z(e.parent.parent,e.parent.index);let t=e.parent.data.slice(e.offset);return e.parent._data=e.parent.data.slice(0,e.offset),e.parent.parent._insertChild(e.parent.index+1,new R(e.root.document,t)),new z(e.parent.parent,e.parent.index+1)}function Fc(e,t){let n=e.data.length;return e._data+=t.data,t._remove(),new z(e,n)}let Ic=[R,yc,nc,Sc,Dc,wc];function Lc(e,t){for(let n of e){if(!Ic.some((e=>n instanceof e)))throw new y(`view-writer-insert-invalid-node-type`,t);n.is(`$text`)||Lc(n.getChildren(),t)}}function Rc(e){return e&&(e.is(`containerElement`)||e.is(`documentFragment`))}function zc(e,t){let n=jc(e.start),r=jc(e.end);if(!n||!r||n!==r)throw new y(`view-writer-invalid-range-container`,t)}function Bc(e,t){return e.id===null&&t.id===null}let Vc=e=>e.createTextNode(`\xA0`),Hc=e=>{let t=e.createElement(`span`);return t.dataset.ckeFiller=`true`,t.innerText=`\xA0`,t},Uc=e=>{let t=e.createElement(`br`);return t.dataset.ckeFiller=`true`,t},Wc=`⁠`.repeat(7);function Gc(e){return D(e)&&e.data.substr(0,7)===Wc}function Kc(e){return e.data.length==7&&Gc(e)}function qc(e){return Gc(e)?e.data.slice(7):e.data}function Jc(e,t){if(t.keyCode==A.arrowleft){let e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){let t=e.getRangeAt(0).startContainer,n=e.getRangeAt(0).startOffset;Gc(t)&&n<=7&&e.collapse(t,0)}}}var Yc=i(9315);N()(Yc.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Yc.Z.locals;class Xc extends C(){constructor(e,t){super(),this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set(`isFocused`,!1),this.set(`isSelecting`,!1),c.isBlink&&!c.isAndroid&&this.on(`change:isSelecting`,(()=>{this.isSelecting||this.render()})),this.set(`isComposing`,!1),this.on(`change:isComposing`,(()=>{this.isComposing||this.render()})),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e===`text`)this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e===`attributes`)this.markedAttributes.add(t);else{if(e!==`children`)throw new y(`view-renderer-unknown-type`,this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!c.isAndroid)return;let e=null,t=!(c.isBlink&&!c.isAndroid)||!this.isSelecting;for(let e of this.markedChildren)this._updateChildrenMappings(e);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is(`$text`)&&(e=z._createBefore(e.parent)));for(let e of this.markedAttributes)this._updateAttrs(e);for(let t of this.markedChildren)this._updateChildren(t,{inlineFillerPosition:e});for(let t of this.markedTexts)!this.markedChildren.has(t.parent)&&this.domConverter.mapViewToDom(t.parent)&&this._updateText(t,{inlineFillerPosition:e});if(t)if(e){let t=this.domConverter.viewPositionToDom(e),n=t.parent.ownerDocument;Gc(t.parent)?this._inlineFiller=t.parent:this._inlineFiller=Zc(n,t.parent,t.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;let t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),r=this._diffNodeLists(t,n),i=this._findReplaceActions(r,t,n);if(i.indexOf(`replace`)!==-1){let r={equal:0,insert:0,delete:0};for(let a of i)if(a===`replace`){let i=r.equal+r.insert,a=r.equal+r.delete,o=e.getChild(i);!o||o.is(`uiElement`)||o.is(`rawElement`)||this._updateElementMappings(o,t[a]),da(n[i]),r.equal++}else r[a]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){let e=this.selection.getFirstPosition();return e.parent.is(`$text`)?z._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;let e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&D(t.parent)&&Gc(t.parent))}_removeInlineFiller(){let e=this._inlineFiller;if(!Gc(e))throw new y(`view-renderer-filler-was-lost`,this);Kc(e)?e.remove():e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;let e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is(`element`)||!function(e){if(e.getAttribute(`contenteditable`)==`false`)return!1;let t=e.findAncestor((e=>e.hasAttribute(`contenteditable`)));return!t||t.getAttribute(`contenteditable`)==`true`}(t)||n===t.getFillerOffset())return!1;let r=e.nodeBefore,i=e.nodeAfter;return!(r instanceof R||i instanceof R)&&(!c.isAndroid||!r&&!i)}_updateText(e,t){let n=this.domConverter.findCorrespondingDomText(e),r=this.domConverter.viewToDom(e).data,i=t.inlineFillerPosition;i&&i.parent==e.parent&&i.offset==e.index&&(r=Wc+r),tl(n,r)}_updateAttrs(e){let t=this.domConverter.mapViewToDom(e);if(!t)return;let n=Array.from(t.attributes).map((e=>e.name)),r=e.getAttributeKeys();for(let n of r)this.domConverter.setDomElementAttribute(t,n,e.getAttribute(n),e);for(let r of n)e.hasAttribute(r)||this.domConverter.removeDomElementAttribute(t,r)}_updateChildren(e,t){let n=this.domConverter.mapViewToDom(e);if(!n)return;if(c.isAndroid){let e=null;for(let t of Array.from(n.childNodes)){if(e&&D(e)&&D(t)){n.normalize();break}e=t}}let r=t.inlineFillerPosition,i=n.childNodes,a=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));r&&r.parent===e&&Zc(n.ownerDocument,a,r.offset);let o=this._diffNodeLists(i,a),s=c.isAndroid?this._findReplaceActions(o,i,a,{replaceText:!0}):o,l=0,u=new Set;for(let e of s)e===`delete`?(u.add(i[l]),da(i[l])):e!==`equal`&&e!==`replace`||l++;l=0;for(let e of s)e===`insert`?(aa(n,l,a[l]),l++):e===`replace`?(tl(i[l],a[l].data),l++):e===`equal`&&(this._markDescendantTextToSync(this.domConverter.domToView(a[l])),l++);for(let e of u)e.parentNode||this.domConverter.unbindDomElement(e)}_diffNodeLists(e,t){return e=function(e,t){let n=Array.from(e);return n.length==0||!t||n[n.length-1]==t&&n.pop(),n}(e,this._fakeSelectionContainer),p(e,t,el.bind(null,this.domConverter))}_findReplaceActions(e,t,n,r={}){if(e.indexOf(`insert`)===-1||e.indexOf(`delete`)===-1)return e;let i=[],a=[],o=[],s={equal:0,insert:0,delete:0};for(let c of e)c===`insert`?o.push(n[s.equal+s.insert]):c===`delete`?a.push(t[s.equal+s.delete]):(i=i.concat(p(a,o,r.replaceText?$c:Qc).map((e=>e===`equal`?`replace`:e))),i.push(`equal`),a=[],o=[]),s[c]++;return i.concat(p(a,o,r.replaceText?$c:Qc).map((e=>e===`equal`?`replace`:e)))}_markDescendantTextToSync(e){if(e){if(e.is(`$text`))this.markedTexts.add(e);else if(e.is(`element`))for(let t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(c.isBlink&&!c.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();let e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&c.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){let t=e.ownerDocument;this._fakeSelectionContainer||=function(e){let t=e.createElement(`div`);return t.className=`ck-fake-selection-container`,Object.assign(t.style,{position:`fixed`,top:0,left:`-9999px`,width:`42px`}),t.textContent=`\xA0`,t}(t);let n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||`\xA0`;let r=t.getSelection(),i=t.createRange();r.removeAllRanges(),i.selectNodeContents(n),r.addRange(i)}_updateDomSelection(e){let t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;let n=this.domConverter.viewPositionToDom(this.selection.anchor),r=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(r.parent,r.offset),c.isGecko&&function(e,t){let n=e.parent;if(n.nodeType!=Node.ELEMENT_NODE||e.offset!=n.childNodes.length-1)return;let r=n.childNodes[e.offset];r&&r.tagName==`BR`&&t.addRange(t.getRangeAt(0))}(r,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;let t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){let t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(let e of this.domDocuments){let t=e.getSelection();if(t.rangeCount){let n=e.activeElement,r=this.domConverter.mapDomToView(n);n&&r&&t.removeAllRanges()}}}_removeFakeSelection(){let e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){let e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Zc(e,t,n){let r=t instanceof Array?t:t.childNodes,i=r[n];if(D(i))return i.data=Wc+i.data,i;{let i=e.createTextNode(Wc);return Array.isArray(t)?r.splice(n,0,i):aa(t,n,i),i}}function Qc(e,t){return Hi(e)&&Hi(t)&&!D(e)&&!D(t)&&!oa(e)&&!oa(t)&&e.tagName.toLowerCase()===t.tagName.toLowerCase()}function $c(e,t){return Hi(e)&&Hi(t)&&D(e)&&D(t)}function el(e,t,n){return t===n||(D(t)&&D(n)?t.data===n.data:!(!e.isBlockFiller(t)||!e.isBlockFiller(n)))}function tl(e,t){let n=e.data;if(n==t)return;let r=u(n,t);for(let t of r)t.type===`insert`?e.insertData(t.index,t.values.join(``)):e.deleteData(t.index,t.howMany)}let nl=Uc(E.document),rl=Vc(E.document),il=Hc(E.document),al=`data-ck-unsafe-attribute-`,ol=`data-ck-unsafe-element`;class sl{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||`editing`,this.blockFillerMode=t.blockFillerMode||(this.renderingMode===`editing`?`br`:`nbsp`),this.preElements=[`pre`],this.blockElements=`address.article.aside.blockquote.caption.center.dd.details.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.legend.li.main.menu.nav.ol.p.pre.section.summary.table.tbody.td.tfoot.th.thead.tr.ul`.split(`.`),this.inlineObjectElements=[`object`,`iframe`,`input`,`button`,`textarea`,`select`,`option`,`video`,`embed`,`audio`,`img`,`canvas`],this.unsafeElements=[`script`,`style`],this._domDocument=this.renderingMode===`editing`?E.document:E.document.implementation.createHTMLDocument(``),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Xo,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new lc(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){let t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(let t of Array.from(e.children))this.unbindDomElement(t)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode===`data`||!(e=e.toLowerCase()).startsWith(`on`)&&(e!==`srcdoc`||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n===`img`&&(e===`src`||e===`srcset`)||n===`source`&&e===`srcset`||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode===`data`)return void(e.innerHTML=t);let n=new DOMParser().parseFromString(t,`text/html`),r=n.createDocumentFragment(),i=n.body.childNodes;for(;i.length>0;)r.appendChild(i[0]);let a=n.createTreeWalker(r,NodeFilter.SHOW_ELEMENT),o=[],s;for(;s=a.nextNode();)o.push(s);for(let e of o){for(let t of e.getAttributeNames())this.setDomElementAttribute(e,t,e.getAttribute(t));let t=e.tagName.toLowerCase();this._shouldRenameElement(t)&&(ul(t),e.replaceWith(this._createReplacementDomElement(t,e)))}for(;e.firstChild;)e.firstChild.remove();e.append(r)}viewToDom(e,t={}){if(e.is(`$text`)){let t=this._processDataFromViewText(e);return this._domDocument.createTextNode(t)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is(`documentFragment`))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is(`uiElement`))return n=e.name===`$comment`?this._domDocument.createComment(e.getCustomProperty(`$rawContent`)):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(ul(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute(`xmlns`)?this._domDocument.createElementNS(e.getAttribute(`xmlns`),e.name):this._domDocument.createElement(e.name),e.is(`rawElement`)&&e.render(n,this),t.bind&&this.bindElements(n,e);for(let t of e.getAttributeKeys())this.setDomElementAttribute(n,t,e.getAttribute(t),e)}if(!1!==t.withChildren)for(let r of this.viewChildrenToDom(e,t))n.appendChild(r);return n}}setDomElementAttribute(e,t,n,r){let i=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||r&&r.shouldRenderUnsafeAttribute(t);i||b(`domconverter-unsafe-attribute-detected`,{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!i?e.removeAttribute(t):e.hasAttribute(al+t)&&i&&e.removeAttribute(al+t),e.setAttribute(i?t:al+t,n)}removeDomElementAttribute(e,t){t!=ol&&(e.removeAttribute(t),e.removeAttribute(al+t))}*viewChildrenToDom(e,t={}){let n=e.getFillerOffset&&e.getFillerOffset(),r=0;for(let i of e.getChildren()){n===r&&(yield this._getBlockFiller());let e=i.is(`element`)&&!!i.getCustomProperty(`dataPipeline:transparentRendering`)&&!M(i.getAttributes());e&&this.renderingMode==`data`?yield*this.viewChildrenToDom(i,t):(e&&b(`domconverter-transparent-rendering-unsupported-in-editing-pipeline`,{viewElement:i}),yield this.viewToDom(i,t)),r++}n===r&&(yield this._getBlockFiller())}viewRangeToDom(e){let t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),r=this._domDocument.createRange();return r.setStart(t.parent,t.offset),r.setEnd(n.parent,n.offset),r}viewPositionToDom(e){let t=e.parent;if(t.is(`$text`)){let n=this.findCorrespondingDomText(t);if(!n)return null;let r=e.offset;return Gc(n)&&(r+=7),{parent:n,offset:r}}{let n,r,i;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;i=n.childNodes[0]}else{let t=e.nodeBefore;if(r=t.is(`$text`)?this.findCorrespondingDomText(t):this.mapViewToDom(t),!r)return null;n=r.parentNode,i=r.nextSibling}return D(i)&&Gc(i)?{parent:i,offset:7}:{parent:n,offset:r?ia(r)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;let n=this.getHostViewElement(e);if(n)return n;if(oa(e)&&t.skipComments)return null;if(D(e)){if(Kc(e))return null;{let t=this._processDataFromDomText(e);return t===``?null:new R(this.document,t)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let n;if(this.isDocumentFragment(e))n=new kc(this.document),t.bind&&this.bindDocumentFragments(e,n);else{n=this._createViewElement(e,t),t.bind&&this.bindElements(e,n);let r=e.attributes;if(r)for(let e=r.length,t=0;t<e;t++)n._setAttribute(r[t].name,r[t].value);if(this._isViewElementWithRawContent(n,t)||oa(e)){let t=oa(e)?e.data:e.innerHTML;return n._setCustomProperty(`$rawContent`,t),this._encounteredRawContentDomNodes.add(e),n}}if(!1!==t.withChildren)for(let r of this.domChildrenToView(e,t))n._appendChild(r);return n}}*domChildrenToView(e,t){for(let n=0;n<e.childNodes.length;n++){let r=e.childNodes[n],i=this.domToView(r,t);i!==null&&(yield i)}}domSelectionToView(e){if(e.rangeCount===1){let t=e.getRangeAt(0).startContainer;D(t)&&(t=t.parentNode);let n=this.fakeSelectionToView(t);if(n)return n}let t=this.isDomSelectionBackward(e),n=[];for(let t=0;t<e.rangeCount;t++){let r=e.getRangeAt(t),i=this.domRangeToView(r);i&&n.push(i)}return new lc(n,{backward:t})}domRangeToView(e){let t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new B(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,ia(e));let n=this.mapDomToView(e);if(n&&(n.is(`uiElement`)||n.is(`rawElement`)))return z._createBefore(n);if(D(e)){if(Kc(e))return this.domPositionToView(e.parentNode,ia(e));let n=this.findCorrespondingViewText(e),r=t;return n?(Gc(e)&&(r-=7,r=r<0?0:r),new z(n,r)):null}if(t===0){let t=this.mapDomToView(e);if(t)return new z(t,0)}else{let n=e.childNodes[t-1];if(D(n)&&Kc(n))return this.domPositionToView(n.parentNode,ia(n));let r=D(n)?this.findCorrespondingViewText(n):this.mapDomToView(n);if(r&&r.parent)return new z(r.parent,r.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Kc(e))return null;let t=this.getHostViewElement(e);if(t)return t;let n=e.previousSibling;if(n){if(!this.isElement(n))return null;let e=this.mapDomToView(n);if(e){let t=e.nextSibling;return t instanceof R?t:null}}else{let t=this.mapDomToView(e.parentNode);if(t){let e=t.getChild(0);return e instanceof R?e:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){let t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){let t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){let{scrollX:e,scrollY:n}=E.window,r=[];cl(t,(e=>{let{scrollLeft:t,scrollTop:n}=e;r.push([t,n])})),t.focus(),cl(t,(e=>{let[t,n]=r.shift();e.scrollLeft=t,e.scrollTop=n})),E.window.scrollTo(e,n)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode==`br`?e.isEqualNode(nl):!(e.tagName!==`BR`||!ll(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(il)||function(e,t){return e.isEqualNode(rl)&&ll(e,t)&&e.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;let t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}let n=t.collapsed;return t.detach(),n}getHostViewElement(e){let t=Yi(e);for(t.pop();t.length;){let e=t.pop(),n=this._domToViewMapping.get(e);if(n&&(n.is(`uiElement`)||n.is(`rawElement`)))return n}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case`nbsp`:return Vc(this._domDocument);case`markedNbsp`:return Hc(this._domDocument);case`br`:return Uc(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(D(e)&&Gc(e)&&t<7||this.isElement(e)&&Gc(e.childNodes[t]))return!1;let n=this.mapDomToView(e);return!n||!n.is(`uiElement`)&&!n.is(`rawElement`)}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some((e=>this.preElements.includes(e.name))))return t;if(t.charAt(0)==` `){let n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is(`$textProxy`)&&this._nodeEndsWithSpace(n))&&n||(t=`\xA0`+t.substr(1))}if(t.charAt(t.length-1)==` `){let n=this._getTouchingInlineViewNode(e,!0),r=n&&n.is(`$textProxy`)&&n.data.charAt(0)==` `;t.charAt(t.length-2)!=` `&&n&&!r||(t=t.substr(0,t.length-1)+`\xA0`)}return t.replace(/ {2}/g,` \xA0`)}_nodeEndsWithSpace(e){if(e.getAncestors().some((e=>this.preElements.includes(e.name))))return!1;let t=this._processDataFromViewText(e);return t.charAt(t.length-1)==` `}_processDataFromDomText(e){let t=e.data;if(function(e,t){return Yi(e).some((e=>e.tagName&&t.includes(e.tagName.toLowerCase())))}(e,this.preElements))return qc(e);t=t.replace(/[ \n\t\r]{1,}/g,` `);let n=this._getTouchingInlineDomNode(e,!1),r=this._getTouchingInlineDomNode(e,!0),i=this._checkShouldLeftTrimDomText(e,n),a=this._checkShouldRightTrimDomText(e,r);i&&(t=t.replace(/^ /,``)),a&&(t=t.replace(/ $/,``)),t=qc(new Text(t)),t=t.replace(/ \u00A0/g,`  `);let o=r&&this.isElement(r)&&r.tagName!=`BR`,s=r&&D(r)&&r.data.charAt(0)==` `;return(/( |\u00A0)\u00A0$/.test(t)||!r||o||s)&&(t=t.replace(/\u00A0$/,` `)),(i||n&&this.isElement(n)&&n.tagName!=`BR`)&&(t=t.replace(/^\u00A0/,` `)),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName===`BR`:!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!Gc(e)}_getTouchingInlineViewNode(e,t){let n=new sc({startPosition:t?z._createAfter(e):z._createBefore(e),direction:t?`forward`:`backward`});for(let e of n){if(e.item.is(`element`)&&this.inlineObjectElements.includes(e.item.name))return e.item;if(e.item.is(`containerElement`)||e.item.is(`element`,`br`))return null;if(e.item.is(`$textProxy`))return e.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;let n=t?`firstChild`:`lastChild`,r=t?`nextSibling`:`previousSibling`,i=!0,a=e;do if(!i&&a[n]?a=a[n]:a[r]?(a=a[r],i=!1):(a=a.parentNode,i=!0),!a||this._isBlockElement(a))return null;while(!D(a)&&a.tagName!=`BR`&&!this._isInlineObjectElement(a));return a}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(oa(e))return new wc(this.document,`$comment`);let n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new ec(this.document,n)}_isViewElementWithRawContent(e,t){return!1!==t.withChildren&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){let t=e.toLowerCase();return this.renderingMode===`editing`&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){let n=this._domDocument.createElement(`span`);if(n.setAttribute(ol,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(let e of t.getAttributeNames())n.setAttribute(e,t.getAttribute(e))}return n}}function cl(e,t){let n=e;for(;n;)t(n),n=n.parentElement}function ll(e,t){let n=e.parentNode;return!!n&&!!n.tagName&&t.includes(n.tagName.toLowerCase())}function ul(e){e===`script`&&b(`domconverter-unsafe-script-element-detected`),e===`style`&&b(`domconverter-unsafe-style-element-detected`)}class dl extends Gi(){constructor(e){super(),this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches(`[data-cke-ignore-events], [data-cke-ignore-events] *`)}}let fl=Ks((function(e,t){vn(t,rr(t),e)}));class pl{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,fl(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class ml extends dl{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType==`string`?[this.domEventType]:this.domEventType).forEach((t=>{this.listenTo(e,t,((e,t)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(t.target)&&this.onDomEvent(t)}),{useCapture:this.useCapture})}))}fire(e,t,n){this.isEnabled&&this.document.fire(e,new pl(this.view,t,n))}}class hl extends ml{constructor(e){super(e),this.domEventType=[`keydown`,`keyup`]}onDomEvent(e){let t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return wa(this)}};this.fire(e.type,e,t)}}let gl=function(){return Pe.Date.now()};var _l=/\s/;let vl=function(e){for(var t=e.length;t--&&_l.test(e.charAt(t)););return t};var yl=/^\s+/;let bl=function(e){return e&&e.slice(0,vl(e)+1).replace(yl,``)};var xl=NaN,Sl=/^[-+]0x[0-9a-f]+$/i,Cl=/^0b[01]+$/i,wl=/^0o[0-7]+$/i,Tl=parseInt;let El=function(e){if(typeof e==`number`)return e;if(es(e))return xl;if(S(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=S(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=bl(e);var n=Cl.test(e);return n||wl.test(e)?Tl(e.slice(2),n?2:8):Sl.test(e)?xl:+e};var Dl=`Expected a function`,Ol=Math.max,kl=Math.min;let Al=function(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(Dl);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n)}function m(e){var n=e-c;return c===void 0||n>=t||n<0||d&&e-l>=a}function h(){var e=gl();if(m(e))return g(e);s=setTimeout(h,function(e){var n=t-(e-c);return d?kl(n,a-(e-l)):n}(e))}function g(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function _(){var e=gl(),n=m(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return function(e){return l=e,s=setTimeout(h,t),u?p(e):o}(c);if(d)return clearTimeout(s),s=setTimeout(h,t),p(c)}return s===void 0&&(s=setTimeout(h,t)),o}return t=El(t)||0,S(n)&&(u=!!n.leading,a=(d=`maxWait`in n)?Ol(El(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f),_.cancel=function(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0},_.flush=function(){return s===void 0?o:g(gl())},_};class jl extends dl{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=Al((e=>{this.document.fire(`selectionChangeDone`,e)}),200)}observe(){let e=this.document;e.on(`arrowKey`,((t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()}),{context:`$capture`}),e.on(`arrowKey`,((t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)}),{priority:`lowest`})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){let t=this.document.selection,n=new lc(t.getRanges(),{backward:t.isBackward,fake:!1});e!=A.arrowleft&&e!=A.arrowup||n.setTo(n.getFirstPosition()),e!=A.arrowright&&e!=A.arrowdown||n.setTo(n.getLastPosition());let r={oldSelection:t,newSelection:n,domSelection:null};this.document.fire(`selectionChange`,r),this._fireSelectionChangeDoneDebounced(r)}}var Ml=`__lodash_hash_undefined__`;let Nl=function(e){return this.__data__.set(e,Ml),this},Pl=function(e){return this.__data__.has(e)};function Fl(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new cn;++t<n;)this.add(e[t])}Fl.prototype.add=Fl.prototype.push=Nl,Fl.prototype.has=Pl;let Il=Fl,Ll=function(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},Rl=function(e,t){return e.has(t)};var zl=1,Bl=2;let Vl=function(e,t,n,r,i,a){var o=n&zl,s=e.length,c=t.length;if(s!=c&&!(o&&c>s))return!1;var l=a.get(e),u=a.get(t);if(l&&u)return l==t&&u==e;var d=-1,f=!0,p=n&Bl?new Il:void 0;for(a.set(e,t),a.set(t,e);++d<s;){var m=e[d],h=t[d];if(r)var g=o?r(h,m,d,t,e,a):r(m,h,d,e,t,a);if(g!==void 0){if(g)continue;f=!1;break}if(p){if(!Ll(t,(function(e,t){if(!Rl(p,t)&&(m===e||i(m,e,n,r,a)))return p.push(t)}))){f=!1;break}}else if(m!==h&&!i(m,h,n,r,a)){f=!1;break}}return a.delete(e),a.delete(t),f},Hl=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Ul=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n};var Wl=1,Gl=2,Kl=`[object Boolean]`,ql=`[object Date]`,Jl=`[object Error]`,Yl=`[object Map]`,Xl=`[object Number]`,Zl=`[object RegExp]`,Ql=`[object Set]`,$l=`[object String]`,eu=`[object Symbol]`,tu=`[object ArrayBuffer]`,nu=`[object DataView]`,ru=Fe?Fe.prototype:void 0,iu=ru?ru.valueOf:void 0;let au=function(e,t,n,r,i,a,o){switch(n){case nu:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case tu:return!(e.byteLength!=t.byteLength||!a(new Vr(e),new Vr(t)));case Kl:case ql:case Xl:return ct(+e,+t);case Jl:return e.name==t.name&&e.message==t.message;case Zl:case $l:return e==t+``;case Yl:var s=Hl;case Ql:var c=r&Wl;if(s||=Ul,e.size!=t.size&&!c)return!1;var l=o.get(e);if(l)return l==t;r|=Gl,o.set(e,t);var u=Vl(s(e),s(t),r,i,a,o);return o.delete(e),u;case eu:if(iu)return iu.call(e)==iu.call(t)}return!1};var ou=1,su=Object.prototype.hasOwnProperty;let cu=function(e,t,n,r,i,a){var o=n&ou,s=xr(e),c=s.length;if(c!=xr(t).length&&!o)return!1;for(var l=c;l--;){var u=s[l];if(!(o?u in t:su.call(t,u)))return!1}var d=a.get(e),f=a.get(t);if(d&&f)return d==t&&f==e;var p=!0;a.set(e,t),a.set(t,e);for(var m=o;++l<c;){var h=e[u=s[l]],g=t[u];if(r)var _=o?r(g,h,u,t,e,a):r(h,g,u,e,t,a);if(!(_===void 0?h===g||i(h,g,n,r,a):_)){p=!1;break}m||=u==`constructor`}if(p&&!m){var v=e.constructor,ee=t.constructor;v==ee||!(`constructor`in e)||!(`constructor`in t)||typeof v==`function`&&v instanceof v&&typeof ee==`function`&&ee instanceof ee||(p=!1)}return a.delete(e),a.delete(t),p};var lu=1,uu=`[object Arguments]`,du=`[object Array]`,fu=`[object Object]`,pu=Object.prototype.hasOwnProperty;let mu=function(e,t,n,r,i,a){var o=qe(e),s=qe(t),c=o?du:Rr(e),l=s?du:Rr(t),u=(c=c==uu?fu:c)==fu,d=(l=l==uu?fu:l)==fu,f=c==l;if(f&&An(e)){if(!An(t))return!1;o=!0,u=!1}if(f&&!u)return a||=new fn,o||Un(e)?Vl(e,t,n,r,i,a):au(e,t,c,n,r,i,a);if(!(n&lu)){var p=u&&pu.call(e,`__wrapped__`),m=d&&pu.call(t,`__wrapped__`);if(p||m){var h=p?e.value():e,g=m?t.value():t;return a||=new fn,i(h,g,n,r,a)}}return!!f&&(a||=new fn,cu(e,t,n,r,i,a))},hu=function e(t,n,r,i,a){return t===n||(t==null||n==null||!Je(t)&&!Je(n)?t!=t&&n!=n:mu(t,n,r,i,e,a))},gu=function(e,t,n){var r=(n=typeof n==`function`?n:void 0)?n(e,t):void 0;return r===void 0?hu(e,t,void 0,n):!!r};class _u extends dl{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(let e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;let t=this.domConverter,n=new Set,r=new Set;for(let n of e){let e=t.mapDomToView(n.target);e&&(e.is(`uiElement`)||e.is(`rawElement`)||n.type!==`childList`||this._isBogusBrMutation(n)||r.add(e))}for(let i of e){let e=t.mapDomToView(i.target);if((!e||!e.is(`uiElement`)&&!e.is(`rawElement`))&&i.type===`characterData`){let e=t.findCorrespondingViewText(i.target);e&&!r.has(e.parent)?n.add(e):!e&&Gc(i.target)&&r.add(t.mapDomToView(i.target.parentNode))}}let i=!1;for(let e of n)i=!0,this.renderer.markToSync(`text`,e);for(let e of r){let n=t.mapViewToDom(e);gu(Array.from(e.getChildren()),Array.from(t.domChildrenToView(n,{withChildren:!1})),vu)||(i=!0,this.renderer.markToSync(`children`,e))}i&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is(`element`,`br`)}}function vu(e,t){if(!Array.isArray(e))return e===t||!(!e.is(`$text`)||!t.is(`$text`))&&e.data===t.data}class yu extends ml{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=[`focus`,`blur`],this.useCapture=!0;let t=this.document;t.on(`focus`,(()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout((()=>{this.flush(),e.change((()=>{}))}),50)})),t.on(`blur`,((n,r)=>{let i=t.selection.editableElement;i!==null&&i!==r.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change((()=>{})))}))}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class bu extends dl{constructor(e){super(e),this.mutationObserver=e.getObserver(_u),this.focusObserver=e.getObserver(yu),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Al((e=>{this.document.fire(`selectionChangeDone`,e)}),200),this._clearInfiniteLoopInterval=setInterval((()=>this._clearInfiniteLoop()),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Al((()=>this.document.isSelecting=!1),5e3),this._loopbackCounter=0}observe(e){let t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,`selectstart`,(()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()}),{priority:`highest`}),this.listenTo(e,`keydown`,n,{priority:`highest`,useCapture:!0}),this.listenTo(e,`keyup`,n,{priority:`highest`,useCapture:!0}),this._documents.has(t)||(this.listenTo(t,`mouseup`,n,{priority:`highest`,useCapture:!0}),this.listenTo(t,`selectionchange`,((e,n)=>{this.document.isComposing&&!c.isAndroid||(this._handleSelectionChange(n,t),this._documentIsSelectingInactivityTimeoutDebounced())})),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;let n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();let r=this.domConverter.domSelectionToView(n);if(r.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(r)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.focusObserver.flush(),this.selection.isSimilar(r))this.view.forceRender();else{let e={oldSelection:this.selection,newSelection:r,domSelection:n};this.document.fire(`selectionChange`,e),this._fireSelectionChangeDoneDebounced(e)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class xu extends ml{constructor(e){super(e),this.domEventType=[`compositionstart`,`compositionupdate`,`compositionend`];let t=this.document;t.on(`compositionstart`,(()=>{t.isComposing=!0}),{priority:`low`}),t.on(`compositionend`,(()=>{t.isComposing=!1}),{priority:`low`})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class Su{constructor(e,t={}){this._files=t.cacheFiles?Cu(e):null,this._native=e}get files(){return this._files||=Cu(this._native),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect==`none`||!!this._native.mozUserCancelled}}function Cu(e){let t=Array.from(e.files||[]),n=Array.from(e.items||[]);return t.length?t:n.filter((e=>e.kind===`file`)).map((e=>e.getAsFile()))}class wu extends ml{constructor(e){super(e),this.domEventType=[`beforeinput`]}onDomEvent(e){let t=e.getTargetRanges(),n=this.view,r=n.document,i=null,a=null,o=[];if(e.dataTransfer&&(i=new Su(e.dataTransfer)),e.data===null?i&&(a=i.getData(`text/plain`)):a=e.data,r.selection.isFake)o=Array.from(r.selection.getRanges());else if(t.length)o=t.map((e=>n.domConverter.domRangeToView(e)));else if(c.isAndroid){let t=e.target.ownerDocument.defaultView.getSelection();o=Array.from(n.domConverter.domSelectionToView(t).getRanges())}if(c.isAndroid&&e.inputType==`insertCompositionText`&&a&&a.endsWith(`
`))this.fire(e.type,e,{inputType:`insertParagraph`,targetRanges:[n.createRange(o[0].end)]});else if(e.inputType==`insertText`&&a&&a.includes(`
`)){let t=a.split(/\n{1,2}/g),n=o;for(let a=0;a<t.length;a++){let o=t[a];o!=``&&(this.fire(e.type,e,{data:o,dataTransfer:i,targetRanges:n,inputType:e.inputType,isComposing:e.isComposing}),n=[r.selection.getFirstRange()]),a+1<t.length&&(this.fire(e.type,e,{inputType:`insertParagraph`,targetRanges:n}),n=[r.selection.getFirstRange()])}}else this.fire(e.type,e,{data:a,dataTransfer:i,targetRanges:o,inputType:e.inputType,isComposing:e.isComposing})}}class Tu extends dl{constructor(e){super(e),this.document.on(`keydown`,((e,t)=>{if(this.isEnabled&&((n=t.keyCode)==A.arrowright||n==A.arrowleft||n==A.arrowup||n==A.arrowdown)){let n=new dc(this.document,`arrowKey`,this.document.selection.getFirstRange());this.document.fire(n,t),n.stop.called&&e.stop()}var n}))}observe(){}}class Eu extends dl{constructor(e){super(e);let t=this.document;t.on(`keydown`,((e,n)=>{if(!this.isEnabled||n.keyCode!=A.tab||n.ctrlKey)return;let r=new dc(t,`tab`,t.selection.getFirstRange());t.fire(r,n),r.stop.called&&e.stop()}))}observe(){}}class Du extends C(){constructor(e){super(),this.document=new vc(e),this.domConverter=new sl(this.document),this.domRoots=new Map,this.set(`isRenderingInProgress`,!1),this.set(`hasDomSelection`,!1),this._renderer=new Xc(this.domConverter,this.document.selection),this._renderer.bind(`isFocused`,`isSelecting`,`isComposing`).to(this.document,`isFocused`,`isSelecting`,`isComposing`),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new Ac(this.document),this.addObserver(_u),this.addObserver(yu),this.addObserver(bu),this.addObserver(hl),this.addObserver(jl),this.addObserver(xu),this.addObserver(Tu),this.addObserver(wu),this.addObserver(Eu),this.document.on(`arrowKey`,Jc,{priority:`low`}),Tc(this),this.on(`render`,(()=>{this._render(),this.document.fire(`layoutChanged`),this._hasChangedSinceTheLastRendering=!1})),this.listenTo(this.document.selection,`change`,(()=>{this._hasChangedSinceTheLastRendering=!0})),this.listenTo(this.document,`change:isFocused`,(()=>{this._hasChangedSinceTheLastRendering=!0}))}attachDomRoot(e,t=`main`){let n=this.document.getRoot(t);n._name=e.tagName.toLowerCase();let r={};for(let{name:t,value:i}of Array.from(e.attributes))r[t]=i,t===`class`?this._writer.addClass(i.split(` `),n):this._writer.setAttribute(t,i,n);this._initialDomRootAttributes.set(e,r);let i=()=>{this._writer.setAttribute(`contenteditable`,(!n.isReadOnly).toString(),n),n.isReadOnly?this._writer.addClass(`ck-read-only`,n):this._writer.removeClass(`ck-read-only`,n)};i(),this.domRoots.set(t,e),this.domConverter.bindElements(e,n),this._renderer.markToSync(`children`,n),this._renderer.markToSync(`attributes`,n),this._renderer.domDocuments.add(e.ownerDocument),n.on(`change:children`,((e,t)=>this._renderer.markToSync(`children`,t))),n.on(`change:attributes`,((e,t)=>this._renderer.markToSync(`attributes`,t))),n.on(`change:text`,((e,t)=>this._renderer.markToSync(`text`,t))),n.on(`change:isReadOnly`,(()=>this.change(i))),n.on(`change`,(()=>{this._hasChangedSinceTheLastRendering=!0}));for(let n of this._observers.values())n.observe(e,t)}detachDomRoot(e){let t=this.domRoots.get(e);Array.from(t.attributes).forEach((({name:e})=>t.removeAttribute(e)));let n=this._initialDomRootAttributes.get(t);for(let e in n)t.setAttribute(e,n[e]);this.domRoots.delete(e),this.domConverter.unbindDomElement(t)}getDomRoot(e=`main`){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(let[e,n]of this.domRoots)t.observe(n,e);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(let e of this._observers.values())e.disable()}enableObservers(){for(let e of this._observers.values())e.enable()}scrollToTheSelection(){let e=this.document.selection.getFirstRange();e&&function({target:e,viewportOffset:t=0}){let n=va(e),r=n,i=null;for(;r;){let a;a=ya(r==n?e:i),pa(a,(()=>ba(e,r)));let o=ba(e,r);if(fa(r,o,t),r.parent!=r){if(i=r.frameElement,r=r.parent,!i)return}else r=null}}({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){let e=this.document.selection.editableElement;e&&(this.domConverter.focus(e),this.forceRender())}}change(e){if(this.isRenderingInProgress||this._postFixersInProgress)throw new y(`cannot-change-view-tree`,this);try{if(this._ongoingChange)return e(this._writer);this._ongoingChange=!0;let t=e(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire(`render`)),t}catch(e){y.rethrowUnexpectedError(e,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.getObserver(yu).flush(),this.change((()=>{}))}destroy(){for(let e of this._observers.values())e.destroy();this.document.destroy(),this.stopListening()}createPositionAt(e,t){return z._createAt(e,t)}createPositionAfter(e){return z._createAfter(e)}createPositionBefore(e){return z._createBefore(e)}createRange(...e){return new B(...e)}createRangeOn(e){return B._createOn(e)}createRangeIn(e){return B._createIn(e)}createSelection(...e){return new lc(...e)}_disableRendering(e){this._renderingDisabled=e,e==0&&this.change((()=>{}))}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}class Ou{is(){throw Error(`is() method is abstract`)}}class ku extends Ou{constructor(e){super(),this.parent=null,this._attrs=Fa(e)}get document(){return null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))===null)throw new y(`model-node-not-found-in-parent`,this);return e}get startOffset(){let e;if(!this.parent)return null;if((e=this.parent.getChildStartOffset(this))===null)throw new y(`model-node-not-found-in-parent`,this);return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){let e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){let e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is(`rootElement`)}getPath(){let e=[],t=this;for(;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={}){let t=[],n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?`push`:`unshift`](n),n=n.parent;return t}getCommonAncestor(e,t={}){let n=this.getAncestors(t),r=e.getAncestors(t),i=0;for(;n[i]==r[i]&&n[i];)i++;return i===0?null:n[i-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;let t=this.getPath(),n=e.getPath(),r=Ae(t,n);switch(r){case`prefix`:return!0;case`extension`:return!1;default:return t[r]<n[r]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){let e={};return this._attrs.size&&(e.attributes=Array.from(this._attrs).reduce(((e,t)=>(e[t[0]]=t[1],e)),{})),e}_clone(e){return new this.constructor(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=Fa(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}}ku.prototype.is=function(e){return e===`node`||e===`model:node`};class Au{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce(((e,t)=>e+t.offsetSize),0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){let t=this._nodes.indexOf(e);return t==-1?null:t}getNodeStartOffset(e){let t=this.getNodeIndex(e);return t===null?null:this._nodes.slice(0,t).reduce(((e,t)=>e+t.offsetSize),0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;let t=this._nodes[e];if(!t)throw new y(`model-nodelist-index-out-of-bounds`,this);return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(let n of this._nodes){if(e>=t&&e<t+n.offsetSize)return this.getNodeIndex(n);t+=n.offsetSize}if(t!=e)throw new y(`model-nodelist-offset-out-of-bounds`,this,{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(let e of t)if(!(e instanceof ku))throw new y(`model-nodelist-insertnodes-not-node`,this);this._nodes=function(e,t,n,r){if(Math.max(t.length,e.length)>1e4)return e.slice(0,n).concat(t).concat(e.slice(n+r,e.length));{let i=Array.from(e);return i.splice(n,r,...t),i}}(this._nodes,Array.from(t),e,0)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map((e=>e.toJSON()))}}class V extends ku{constructor(e,t){super(t),this._data=e||``}get offsetSize(){return this.data.length}get data(){return this._data}toJSON(){let e=super.toJSON();return e.data=this.data,e}_clone(){return new V(this.data,this.getAttributes())}static fromJSON(e){return new V(e.data,e.attributes)}}V.prototype.is=function(e){return e===`$text`||e===`model:$text`||e===`text`||e===`model:text`||e===`node`||e===`model:node`};class ju extends Ou{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.offsetSize)throw new y(`model-textproxy-wrong-offsetintext`,this);if(n<0||t+n>e.offsetSize)throw new y(`model-textproxy-wrong-length`,this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get startOffset(){return this.textNode.startOffset===null?null:this.textNode.startOffset+this.offsetInText}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset===null?null:this.startOffset+this.offsetSize}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}getPath(){let e=this.textNode.getPath();return e.length>0&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={}){let t=[],n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?`push`:`unshift`](n),n=n.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}ju.prototype.is=function(e){return e===`$textProxy`||e===`model:$textProxy`||e===`textProxy`||e===`model:textProxy`};class H extends ku{constructor(e,t,n){super(t),this._children=new Au,this.name=e,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(let n of e)t=t.getChild(t.offsetToIndex(n));return t}findAncestor(e,t={}){let n=t.includeSelf?this:this.parent;for(;n;){if(n.name===e)return n;n=n.parent}return null}toJSON(){let e=super.toJSON();if(e.name=this.name,this._children.length>0){e.children=[];for(let t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){let t=e?Array.from(this._children).map((e=>e._clone(!0))):void 0;return new H(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){let n=function(e){return typeof e==`string`?[new V(e)]:(je(e)||(e=[e]),Array.from(e).map((e=>typeof e==`string`?new V(e):e instanceof ju?new V(e.data,e.getAttributes()):e)))}(t);for(let e of n)e.parent!==null&&e._remove(),e.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){let n=this._children._removeNodes(e,t);for(let e of n)e.parent=null;return n}static fromJSON(e){let t;if(e.children){t=[];for(let n of e.children)n.name?t.push(H.fromJSON(n)):t.push(V.fromJSON(n))}return new H(e.name,e.attributes,t)}}H.prototype.is=function(e,t){return t?t===this.name&&(e===`element`||e===`model:element`):e===`element`||e===`model:element`||e===`node`||e===`model:node`};class Mu{constructor(e){if(!e||!e.boundaries&&!e.startPosition)throw new y(`model-tree-walker-no-start-position`,null);let t=e.direction||`forward`;if(t!=`forward`&&t!=`backward`)throw new y(`model-tree-walker-unknown-direction`,e,{direction:t});this.direction=t,this.boundaries=e.boundaries||null,e.startPosition?this.position=e.startPosition.clone():this.position=U._createAt(this.boundaries[this.direction==`backward`?`end`:`start`]),this.position.stickiness=`toNone`,this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,n,r,i;do r=this.position,i=this._visitedParent,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=r,this._visitedParent=i)}next(){return this.direction==`forward`?this._next():this._previous()}_next(){let e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===n.maxOffset||n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let r=Pu(t,n),i=r||Fu(t,n,r);if(i instanceof H)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=i),this.position=t,Nu(`elementStart`,i,e,t,1);if(i instanceof V){let r;if(this.singleCharacters)r=1;else{let e=i.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<e&&(e=this.boundaries.end.offset),r=e-t.offset}let a=new ju(i,t.offset-i.startOffset,r);return t.offset+=r,this.position=t,Nu(`text`,a,e,t,r)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():Nu(`elementEnd`,n,e,t)}_previous(){let e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===0||n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let r=t.parent,i=Pu(t,r),a=i||Iu(t,r,i);if(a instanceof H)return t.offset--,this.shallow?(this.position=t,Nu(`elementStart`,a,e,t,1)):(t.path.push(a.maxOffset),this.position=t,this._visitedParent=a,this.ignoreElementEnd?this._previous():Nu(`elementEnd`,a,e,t));if(a instanceof V){let r;if(this.singleCharacters)r=1;else{let e=a.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>e&&(e=this.boundaries.start.offset),r=t.offset-e}let i=new ju(a,t.offset-a.startOffset-r,r);return t.offset-=r,this.position=t,Nu(`text`,i,e,t,r)}return t.path.pop(),this.position=t,this._visitedParent=n.parent,Nu(`elementStart`,n,e,t,1)}}function Nu(e,t,n,r,i){return{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:r,length:i}}}class U extends Ou{constructor(e,t,n=`toNone`){if(super(),!e.is(`element`)&&!e.is(`documentFragment`))throw new y(`model-position-root-invalid`,e);if(!(t instanceof Array)||t.length===0)throw new y(`model-position-path-incorrect-format`,e,{path:t});e.is(`rootElement`)?t=t.slice():(t=[...e.getPath(),...t],e=e.root),this.root=e,this.path=t,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)if(e=e.getChild(e.offsetToIndex(this.path[t])),!e)throw new y(`model-position-path-incorrect`,this,{position:this});if(e.is(`$text`))throw new y(`model-position-path-incorrect`,this,{position:this});return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return Pu(this,this.parent)}get nodeAfter(){let e=this.parent;return Fu(this,e,Pu(this,e))}get nodeBefore(){let e=this.parent;return Iu(this,e,Pu(this,e))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return`different`;let t=Ae(this.path,e.path);switch(t){case`same`:return`same`;case`prefix`:return`before`;case`extension`:return`after`;default:return this.path[t]<e.path[t]?`before`:`after`}}getLastMatchingPosition(e,t={}){t.startPosition=this;let n=new Mu(t);return n.skip(e),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){let e=this.parent;return e.is(`documentFragment`)?[e]:e.getAncestors({includeSelf:!0})}findAncestor(e){let t=this.parent;return t.is(`element`)?t.findAncestor(e,{includeSelf:!0}):null}getCommonPath(e){if(this.root!=e.root)return[];let t=Ae(this.path,e.path),n=typeof t==`string`?Math.min(this.path.length,e.path.length):t;return this.path.slice(0,n)}getCommonAncestor(e){let t=this.getAncestors(),n=e.getAncestors(),r=0;for(;t[r]==n[r]&&t[r];)r++;return r===0?null:t[r-1]}getShiftedBy(e){let t=this.clone(),n=t.offset+e;return t.offset=n<0?0:n,t}isAfter(e){return this.compareWith(e)==`after`}isBefore(e){return this.compareWith(e)==`before`}isEqual(e){return this.compareWith(e)==`same`}isTouching(e){if(this.root!==e.root)return!1;let t=Math.min(this.path.length,e.path.length);for(let n=0;n<t;n++){let t=this.path[n]-e.path[n];if(t<-1||t>1)return!1;if(t===1)return Lu(e,this,n);if(t===-1)return Lu(this,e,n)}return this.path.length===e.path.length||(this.path.length>e.path.length?Ru(this.path,t):Ru(e.path,t))}hasSameParentAs(e){return this.root===e.root?Ae(this.getParentPath(),e.getParentPath())==`same`:!1}getTransformedByOperation(e){let t;switch(e.type){case`insert`:t=this._getTransformedByInsertOperation(e);break;case`move`:case`remove`:case`reinsert`:t=this._getTransformedByMoveOperation(e);break;case`split`:t=this._getTransformedBySplitOperation(e);break;case`merge`:t=this._getTransformedByMergeOperation(e);break;default:t=U._createAt(this)}return t}_getTransformedByInsertOperation(e){return this._getTransformedByInsertion(e.position,e.howMany)}_getTransformedByMoveOperation(e){return this._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany)}_getTransformedBySplitOperation(e){let t=e.movedRange;return t.containsPosition(this)||t.start.isEqual(this)&&this.stickiness==`toNext`?this._getCombined(e.splitPosition,e.moveTargetPosition):e.graveyardPosition?this._getTransformedByMove(e.graveyardPosition,e.insertionPosition,1):this._getTransformedByInsertion(e.insertionPosition,1)}_getTransformedByMergeOperation(e){let t=e.movedRange,n;return t.containsPosition(this)||t.start.isEqual(this)?(n=this._getCombined(e.sourcePosition,e.targetPosition),e.sourcePosition.isBefore(e.targetPosition)&&(n=n._getTransformedByDeletion(e.deletionPosition,1))):n=this.isEqual(e.deletionPosition)?U._createAt(e.deletionPosition):this._getTransformedByMove(e.deletionPosition,e.graveyardPosition,1),n}_getTransformedByDeletion(e,t){let n=U._createAt(this);if(this.root!=e.root)return n;if(Ae(e.getParentPath(),this.getParentPath())==`same`){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;n.offset-=t}}else if(Ae(e.getParentPath(),this.getParentPath())==`prefix`){let r=e.path.length-1;if(e.offset<=this.path[r]){if(e.offset+t>this.path[r])return null;n.path[r]-=t}}return n}_getTransformedByInsertion(e,t){let n=U._createAt(this);if(this.root!=e.root)return n;if(Ae(e.getParentPath(),this.getParentPath())==`same`)(e.offset<this.offset||e.offset==this.offset&&this.stickiness!=`toPrevious`)&&(n.offset+=t);else if(Ae(e.getParentPath(),this.getParentPath())==`prefix`){let r=e.path.length-1;e.offset<=this.path[r]&&(n.path[r]+=t)}return n}_getTransformedByMove(e,t,n){if(t=t._getTransformedByDeletion(e,n),e.isEqual(t))return U._createAt(this);let r=this._getTransformedByDeletion(e,n);return r===null||e.isEqual(this)&&this.stickiness==`toNext`||e.getShiftedBy(n).isEqual(this)&&this.stickiness==`toPrevious`?this._getCombined(e,t):r._getTransformedByInsertion(t,n)}_getCombined(e,t){let n=e.path.length-1,r=U._createAt(t);return r.stickiness=this.stickiness,r.offset=r.offset+this.path[n]-e.offset,r.path=[...r.path,...this.path.slice(n+1)],r}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(e,t,n=`toNone`){if(e instanceof U)return new U(e.root,e.path,e.stickiness);{let r=e;if(t==`end`)t=r.maxOffset;else{if(t==`before`)return this._createBefore(r,n);if(t==`after`)return this._createAfter(r,n);if(t!==0&&!t)throw new y(`model-createpositionat-offset-required`,[this,e])}if(!r.is(`element`)&&!r.is(`documentFragment`))throw new y(`model-position-parent-incorrect`,[this,e]);let i=r.getPath();return i.push(t),new this(r.root,i,n)}}static _createAfter(e,t){if(!e.parent)throw new y(`model-position-after-root`,[this,e],{root:e});return this._createAt(e.parent,e.endOffset,t)}static _createBefore(e,t){if(!e.parent)throw new y(`model-position-before-root`,e,{root:e});return this._createAt(e.parent,e.startOffset,t)}static fromJSON(e,t){if(e.root===`$graveyard`){let n=new U(t.graveyard,e.path);return n.stickiness=e.stickiness,n}if(!t.getRoot(e.root))throw new y(`model-position-fromjson-no-root`,t,{rootName:e.root});return new U(t.getRoot(e.root),e.path,e.stickiness)}}function Pu(e,t){let n=t.getChild(t.offsetToIndex(e.offset));return n&&n.is(`$text`)&&n.startOffset<e.offset?n:null}function Fu(e,t,n){return n===null?t.getChild(t.offsetToIndex(e.offset)):null}function Iu(e,t,n){return n===null?t.getChild(t.offsetToIndex(e.offset)-1):null}function Lu(e,t,n){return n+1!==e.path.length&&!!Ru(t.path,n+1)&&!!function(e,t){let n=e.parent,r=e.path.length-1,i=0;for(;r>=t;){if(e.path[r]+i!==n.maxOffset)return!1;i=1,r--,n=n.parent}return!0}(e,n+1)}function Ru(e,t){for(;t<e.length;){if(e[t]!==0)return!1;t++}return!0}U.prototype.is=function(e){return e===`position`||e===`model:position`};class W extends Ou{constructor(e,t){super(),this.start=U._createAt(e),this.end=t?U._createAt(t):U._createAt(e),this.start.stickiness=this.isCollapsed?`toNone`:`toNext`,this.end.stickiness=this.isCollapsed?`toNone`:`toPrevious`}*[Symbol.iterator](){yield*new Mu({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return Ae(this.start.getParentPath(),this.end.getParentPath())==`same`}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);let n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),r=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&r}containsItem(e){let t=U._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){let t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new W(this.start,e.start)),this.containsPosition(e.end)&&t.push(new W(e.end,this.end))):t.push(new W(this.start,this.end)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new W(t,n)}return null}getJoined(e,t=!1){let n=this.isIntersecting(e);if(n||=this.start.isBefore(e.start)?t?this.end.isTouching(e.start):this.end.isEqual(e.start):t?e.end.isTouching(this.start):e.end.isEqual(this.start),!n)return null;let r=this.start,i=this.end;return e.start.isBefore(r)&&(r=e.start),e.end.isAfter(i)&&(i=e.end),new W(r,i)}getMinimalFlatRanges(){let e=[],t=this.start.getCommonPath(this.end).length,n=U._createAt(this.start),r=n.parent;for(;n.path.length>t+1;){let t=r.maxOffset-n.offset;t!==0&&e.push(new W(n,n.getShiftedBy(t))),n.path=n.path.slice(0,-1),n.offset++,r=r.parent}for(;n.path.length<=this.end.path.length;){let t=this.end.path[n.path.length-1],r=t-n.offset;r!==0&&e.push(new W(n,n.getShiftedBy(r))),n.offset=t,n.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new Mu(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;let t=new Mu(e);for(let e of t)yield e.item}*getPositions(e={}){e.boundaries=this;let t=new Mu(e);yield t.position;for(let e of t)yield e.nextPosition}getTransformedByOperation(e){switch(e.type){case`insert`:return this._getTransformedByInsertOperation(e);case`move`:case`remove`:case`reinsert`:return this._getTransformedByMoveOperation(e);case`split`:return[this._getTransformedBySplitOperation(e)];case`merge`:return[this._getTransformedByMergeOperation(e)]}return[new W(this.start,this.end)]}getTransformedByOperations(e){let t=[new W(this.start,this.end)];for(let n of e)for(let e=0;e<t.length;e++){let r=t[e].getTransformedByOperation(n);t.splice(e,1,...r),e+=r.length-1}for(let e=0;e<t.length;e++){let n=t[e];for(let r=e+1;r<t.length;r++){let e=t[r];(n.containsRange(e)||e.containsRange(n)||n.isEqual(e))&&t.splice(r,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is(`element`)&&e===t?e:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(e,t=!1){return this._getTransformedByInsertion(e.position,e.howMany,t)}_getTransformedByMoveOperation(e,t=!1){let n=e.sourcePosition,r=e.howMany,i=e.targetPosition;return this._getTransformedByMove(n,i,r,t)}_getTransformedBySplitOperation(e){let t=this.start._getTransformedBySplitOperation(e),n=this.end._getTransformedBySplitOperation(e);return this.end.isEqual(e.insertionPosition)&&(n=this.end.getShiftedBy(1)),t.root!=n.root&&(n=this.end.getShiftedBy(-1)),new W(t,n)}_getTransformedByMergeOperation(e){if(this.start.isEqual(e.targetPosition)&&this.end.isEqual(e.deletionPosition))return new W(this.start);let t=this.start._getTransformedByMergeOperation(e),n=this.end._getTransformedByMergeOperation(e);return t.root!=n.root&&(n=this.end.getShiftedBy(-1)),t.isAfter(n)&&(e.sourcePosition.isBefore(e.targetPosition)?(t=U._createAt(n),t.offset=0):(e.deletionPosition.isEqual(t)||(n=e.deletionPosition),t=e.targetPosition)),new W(t,n)}_getTransformedByInsertion(e,t,n=!1){if(n&&this.containsPosition(e))return[new W(this.start,e),new W(e.getShiftedBy(t),this.end._getTransformedByInsertion(e,t))];{let n=new W(this.start,this.end);return n.start=n.start._getTransformedByInsertion(e,t),n.end=n.end._getTransformedByInsertion(e,t),[n]}}_getTransformedByMove(e,t,n,r=!1){if(this.isCollapsed)return[new W(this.start._getTransformedByMove(e,t,n))];let i=W._createFromPositionAndShift(e,n),a=t._getTransformedByDeletion(e,n);if(this.containsPosition(t)&&!r&&(i.containsPosition(this.start)||i.containsPosition(this.end)))return[new W(this.start._getTransformedByMove(e,t,n),this.end._getTransformedByMove(e,t,n))];let o,s=this.getDifference(i),c=null,l=this.getIntersection(i);if(s.length==1?c=new W(s[0].start._getTransformedByDeletion(e,n),s[0].end._getTransformedByDeletion(e,n)):s.length==2&&(c=new W(this.start,this.end._getTransformedByDeletion(e,n))),o=c?c._getTransformedByInsertion(a,n,l!==null||r):[],l){let e=new W(l.start._getCombined(i.start,a),l.end._getCombined(i.start,a));o.length==2?o.splice(1,0,e):o.push(e)}return o}_getTransformedByDeletion(e,t){let n=this.start._getTransformedByDeletion(e,t),r=this.end._getTransformedByDeletion(e,t);return n==null&&r==null?null:(n??=e,r??=e,new W(n,r))}static _createFromPositionAndShift(e,t){let n=e,r=e.getShiftedBy(t);return t>0?new this(n,r):new this(r,n)}static _createIn(e){return new this(U._createAt(e,0),U._createAt(e,e.maxOffset))}static _createOn(e){return this._createFromPositionAndShift(U._createBefore(e),e.offsetSize)}static _createFromRanges(e){if(e.length===0)throw new y(`range-create-from-ranges-empty-array`,null);if(e.length==1)return e[0].clone();let t=e[0];e.sort(((e,t)=>e.start.isAfter(t.start)?1:-1));let n=e.indexOf(t),r=new this(t.start,t.end);if(n>0)for(let t=n-1;e[t].end.isEqual(r.start);t++)r.start=U._createAt(e[t].start);for(let t=n+1;t<e.length&&e[t].start.isEqual(r.end);t++)r.end=U._createAt(e[t].end);return r}static fromJSON(e,t){return new this(U.fromJSON(e.start,t),U.fromJSON(e.end,t))}}W.prototype.is=function(e){return e===`range`||e===`model:range`};class zu extends x(){constructor(){super(),this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on(`modelToViewPosition`,((e,t)=>{if(t.viewPosition)return;let n=this._modelToViewMapping.get(t.modelPosition.parent);if(!n)throw new y(`mapping-model-position-view-parent-not-found`,this,{modelPosition:t.modelPosition});t.viewPosition=this.findPositionIn(n,t.modelPosition.offset)}),{priority:`low`}),this.on(`viewToModelPosition`,((e,t)=>{if(t.modelPosition)return;let n=this.findMappedViewAncestor(t.viewPosition),r=this._viewToModelMapping.get(n),i=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,n);t.modelPosition=U._createAt(r,i)}),{priority:`low`})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e,t={}){let n=this.toModelElement(e);if(this._elementToMarkerNames.has(e))for(let t of this._elementToMarkerNames.get(e))this._unboundMarkerNames.add(t);t.defer?this._deferredBindingRemovals.set(e,e.root):(this._viewToModelMapping.delete(e),this._modelToViewMapping.get(n)==e&&this._modelToViewMapping.delete(n))}unbindModelElement(e){let t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){let n=this._markerNameToElements.get(t)||new Set;n.add(e);let r=this._elementToMarkerNames.get(e)||new Set;r.add(t),this._markerNameToElements.set(t,n),this._elementToMarkerNames.set(e,r)}unbindElementFromMarkerName(e,t){let n=this._markerNameToElements.get(t);n&&(n.delete(e),n.size==0&&this._markerNameToElements.delete(t));let r=this._elementToMarkerNames.get(e);r&&(r.delete(t),r.size==0&&this._elementToMarkerNames.delete(e))}flushUnboundMarkerNames(){let e=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),e}flushDeferredBindings(){for(let[e,t]of this._deferredBindingRemovals)e.root==t&&this.unbindViewElement(e);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new W(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new B(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){let t={viewPosition:e,mapper:this};return this.fire(`viewToModelPosition`,t),t.modelPosition}toViewPosition(e,t={}){let n={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire(`modelToViewPosition`,n),n.viewPosition}markerNameToElements(e){let t=this._markerNameToElements.get(e);if(!t)return null;let n=new Set;for(let e of t)if(e.is(`attributeElement`))for(let t of e.getElementsWithSameId())n.add(t);else n.add(e);return n}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}findMappedViewAncestor(e){let t=e.parent;for(;!this._viewToModelMapping.has(t);)t=t.parent;return t}_toModelOffset(e,t,n){if(n!=e)return this._toModelOffset(e.parent,e.index,n)+this._toModelOffset(e,t,e);if(e.is(`$text`))return t;let r=0;for(let n=0;n<t;n++)r+=this.getModelLength(e.getChild(n));return r}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name))return this._viewToModelLengthCallbacks.get(e.name)(e);if(this._viewToModelMapping.has(e))return 1;if(e.is(`$text`))return e.data.length;if(e.is(`uiElement`))return 0;{let t=0;for(let n of e.getChildren())t+=this.getModelLength(n);return t}}findPositionIn(e,t){let n,r=0,i=0,a=0;if(e.is(`$text`))return new z(e,t);for(;i<t;)n=e.getChild(a),r=this.getModelLength(n),i+=r,a++;return i==t?this._moveViewPositionToTextNode(new z(e,a)):this.findPositionIn(n,t-(i-r))}_moveViewPositionToTextNode(e){let t=e.nodeBefore,n=e.nodeAfter;return t instanceof R?new z(t,t.data.length):n instanceof R?new z(n,0):e}}class Bu{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=Vu(t),e instanceof ju&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=Vu(t),e instanceof ju&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=Vu(t),e instanceof ju&&(e=this._getSymbolForTextProxy(e));let n=this._consumable.get(e);if(n===void 0)return null;let r=n.get(t);return r===void 0?null:r}revert(e,t){t=Vu(t),e instanceof ju&&(e=this._getSymbolForTextProxy(e));let n=this.test(e,t);return!1===n?(this._consumable.get(e).set(t,!0),!0):!0!==n&&null}verifyAllConsumed(e){let t=[];for(let[n,r]of this._consumable)for(let[i,a]of r){let r=i.split(`:`)[0];a&&e==r&&t.push({event:i,item:n.name||n.description})}if(t.length)throw new y(`conversion-model-consumable-not-consumed`,null,{items:t})}_getSymbolForTextProxy(e){let t=null,n=this._textProxyRegistry.get(e.startOffset);if(n){let r=n.get(e.endOffset);r&&(t=r.get(e.parent))}return t||=this._addSymbolForTextProxy(e),t}_addSymbolForTextProxy(e){let t=e.startOffset,n=e.endOffset,r=e.parent,i=Symbol(`$textProxy:`+e.data),a,o;return a=this._textProxyRegistry.get(t),a||(a=new Map,this._textProxyRegistry.set(t,a)),o=a.get(n),o||(o=new Map,a.set(n,o)),o.set(r,i),i}}function Vu(e){let t=e.split(`:`);return t[0]==`insert`?t[0]:t[0]==`addMarker`||t[0]==`removeMarker`?e:t.length>1?t[0]+`:`+t[1]:t[0]}class Hu extends x(){constructor(e){super(),this._conversionApi={dispatcher:this,...e},this._firedEventsMap=new WeakMap}convertChanges(e,t,n){let r=this._createConversionApi(n,e.getRefreshedItems());for(let t of e.getMarkersToRemove())this._convertMarkerRemove(t.name,t.range,r);let i=this._reduceChanges(e.getChanges());for(let e of i)e.type===`insert`?this._convertInsert(W._createFromPositionAndShift(e.position,e.length),r):e.type===`reinsert`?this._convertReinsert(W._createFromPositionAndShift(e.position,e.length),r):e.type===`remove`?this._convertRemove(e.position,e.length,e.name,r):this._convertAttribute(e.range,e.attributeKey,e.attributeOldValue,e.attributeNewValue,r);for(let e of r.mapper.flushUnboundMarkerNames()){let n=t.get(e).getRange();this._convertMarkerRemove(e,n,r),this._convertMarkerAdd(e,n,r)}for(let t of e.getMarkersToAdd())this._convertMarkerAdd(t.name,t.range,r);r.mapper.flushDeferredBindings(),r.consumable.verifyAllConsumed(`insert`)}convert(e,t,n,r={}){let i=this._createConversionApi(n,void 0,r);this._convertInsert(e,i);for(let[e,n]of t)this._convertMarkerAdd(e,n,i);i.consumable.verifyAllConsumed(`insert`)}convertSelection(e,t,n){let r=Array.from(t.getMarkersAtPosition(e.getFirstPosition())),i=this._createConversionApi(n);if(this._addConsumablesForSelection(i.consumable,e,r),this.fire(`selection`,{selection:e},i),e.isCollapsed){for(let t of r){let n=t.getRange();if(!Uu(e.getFirstPosition(),t,i.mapper))continue;let r={item:e,markerName:t.name,markerRange:n};i.consumable.test(e,`addMarker:`+t.name)&&this.fire(`addMarker:${t.name}`,r,i)}for(let t of e.getAttributeKeys()){let n={item:e,range:e.getFirstRange(),attributeKey:t,attributeOldValue:null,attributeNewValue:e.getAttribute(t)};i.consumable.test(e,`attribute:`+n.attributeKey)&&this.fire(`attribute:${n.attributeKey}:$text`,n,i)}}}_convertInsert(e,t,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(t.consumable,Array.from(e));for(let n of Array.from(e.getWalker({shallow:!0})).map(Wu))this._testAndFire(`insert`,n,t)}_convertRemove(e,t,n,r){this.fire(`remove:${n}`,{position:e,length:t},r)}_convertAttribute(e,t,n,r,i){this._addConsumablesForRange(i.consumable,e,`attribute:${t}`);for(let a of e){let e={item:a.item,range:W._createFromPositionAndShift(a.previousPosition,a.length),attributeKey:t,attributeOldValue:n,attributeNewValue:r};this._testAndFire(`attribute:${t}`,e,i)}}_convertReinsert(e,t){let n=Array.from(e.getWalker({shallow:!0}));this._addConsumablesForInsert(t.consumable,n);for(let e of n.map(Wu))this._testAndFire(`insert`,{...e,reconversion:!0},t)}_convertMarkerAdd(e,t,n){if(t.root.rootName==`$graveyard`)return;let r=`addMarker:${e}`;if(n.consumable.add(t,r),this.fire(r,{markerName:e,markerRange:t},n),n.consumable.consume(t,r)){this._addConsumablesForRange(n.consumable,t,r);for(let i of t.getItems()){if(!n.consumable.test(i,r))continue;let a={item:i,range:W._createOn(i),markerName:e,markerRange:t};this.fire(r,a,n)}}}_convertMarkerRemove(e,t,n){t.root.rootName!=`$graveyard`&&this.fire(`removeMarker:${e}`,{markerName:e,markerRange:t},n)}_reduceChanges(e){let t={changes:e};return this.fire(`reduceChanges`,t),t.changes}_addConsumablesForInsert(e,t){for(let n of t){let t=n.item;if(e.test(t,`insert`)===null){e.add(t,`insert`);for(let n of t.getAttributeKeys())e.add(t,`attribute:`+n)}}return e}_addConsumablesForRange(e,t,n){for(let r of t.getItems())e.add(r,n);return e}_addConsumablesForSelection(e,t,n){e.add(t,`selection`);for(let r of n)e.add(t,`addMarker:`+r.name);for(let n of t.getAttributeKeys())e.add(t,`attribute:`+n);return e}_testAndFire(e,t,n){let r=function(e,t){return`${e}:${t.item.is(`element`)?t.item.name:`$text`}`}(e,t),i=t.item.is(`$textProxy`)?n.consumable._getSymbolForTextProxy(t.item):t.item,a=this._firedEventsMap.get(n),o=a.get(i);if(o){if(o.has(r))return;o.add(r)}else a.set(i,new Set([r]));this.fire(r,t,n)}_testAndFireAddAttributes(e,t){let n={item:e,range:W._createOn(e)};for(let e of n.item.getAttributeKeys())n.attributeKey=e,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(e),this._testAndFire(`attribute:${e}`,n,t)}_createConversionApi(e,t=new Set,n={}){let r={...this._conversionApi,consumable:new Bu,writer:e,options:n,convertItem:e=>this._convertInsert(W._createOn(e),r),convertChildren:e=>this._convertInsert(W._createIn(e),r,{doNotAddConsumables:!0}),convertAttributes:e=>this._testAndFireAddAttributes(e,r),canReuseView:e=>!t.has(r.mapper.toModelElement(e))};return this._firedEventsMap.set(r,new Map),r}}function Uu(e,t,n){let r=t.getRange(),i=Array.from(e.getAncestors());return i.shift(),i.reverse(),!i.some((e=>{if(r.containsItem(e))return!!n.toViewElement(e).getCustomProperty(`addHighlight`)}))}function Wu(e){return{item:e.item,range:W._createFromPositionAndShift(e.previousPosition,e.length)}}class Gu extends x(Ou){constructor(...e){super(),this._lastRangeBackward=!1,this._attrs=new Map,this._ranges=[],e.length&&this.setTo(...e)}get anchor(){if(this._ranges.length>0){let e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(this._ranges.length>0){let e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(let t of this._ranges){let n=!1;for(let r of e._ranges)if(t.isEqual(r)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(let e of this._ranges)yield new W(e.start,e.end)}getFirstRange(){let e=null;for(let t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?new W(e.start,e.end):null}getLastRange(){let e=null;for(let t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?new W(e.start,e.end):null}getFirstPosition(){let e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){let e=this.getLastRange();return e?e.end.clone():null}setTo(...e){let[t,n,r]=e;if(typeof n==`object`&&(r=n,n=void 0),t===null)this._setRanges([]);else if(t instanceof Gu)this._setRanges(t.getRanges(),t.isBackward);else if(t&&typeof t.getRanges==`function`)this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof W)this._setRanges([t],!!r&&!!r.backward);else if(t instanceof U)this._setRanges([new W(t)]);else if(t instanceof ku){let e=!!r&&!!r.backward,i;if(n==`in`)i=W._createIn(t);else if(n==`on`)i=W._createOn(t);else{if(n===void 0)throw new y(`model-selection-setto-required-second-parameter`,[this,t]);i=new W(U._createAt(t,n))}this._setRanges([i],e)}else{if(!je(t))throw new y(`model-selection-setto-not-selectable`,[this,t]);this._setRanges(t,r&&!!r.backward)}}_setRanges(e,t=!1){let n=Array.from(e),r=n.some((t=>{if(!(t instanceof W))throw new y(`model-selection-set-ranges-not-range`,[this,e]);return this._ranges.every((e=>!e.isEqual(t)))}));(n.length!==this._ranges.length||r)&&(this._replaceAllRanges(n),this._lastRangeBackward=!!t,this.fire(`change:range`,{directChange:!0}))}setFocus(e,t){if(this.anchor===null)throw new y(`model-selection-setfocus-no-ranges`,[this,e]);let n=U._createAt(e,t);if(n.compareWith(this.focus)==`same`)return;let r=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(r)==`before`?(this._pushRange(new W(n,r)),this._lastRangeBackward=!0):(this._pushRange(new W(r,n)),this._lastRangeBackward=!1),this.fire(`change:range`,{directChange:!0})}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire(`change:attribute`,{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire(`change:attribute`,{attributeKeys:[e],directChange:!0}))}getSelectedElement(){return this.rangeCount===1?this.getFirstRange().getContainedElement():null}*getSelectedBlocks(){let e=new WeakSet;for(let t of this.getRanges()){let n=Ju(t.start,e);n&&Yu(n,t)&&(yield n);for(let n of t.getWalker()){let r=n.item;n.type==`elementEnd`&&qu(r,e,t)&&(yield r)}let r=Ju(t.end,e);r&&!t.end.isTouching(U._createAt(r,0))&&Yu(r,t)&&(yield r)}}containsEntireContent(e=this.anchor.root){let t=U._createAt(e,0),n=U._createAt(e,`end`);return t.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(new W(e.start,e.end))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new y(`model-selection-range-intersects`,[this,e],{addedRange:e,intersectingRange:this._ranges[t]})}_replaceAllRanges(e){this._removeAllRanges();for(let t of e)this._pushRange(t)}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function Ku(e,t){return!t.has(e)&&(t.add(e),e.root.document.model.schema.isBlock(e)&&!!e.parent)}function qu(e,t,n){return Ku(e,t)&&Yu(e,n)}function Ju(e,t){let n=e.parent.root.document.model.schema,r=e.parent.getAncestors({parentFirst:!0,includeSelf:!0}),i=!1,a=r.find((e=>!i&&(i=n.isLimit(e),!i&&Ku(e,t))));return r.forEach((e=>t.add(e))),a}function Yu(e,t){let n=function(e){let t=e.root.document.model.schema,n=e.parent;for(;n;){if(t.isBlock(n))return n;n=n.parent}}(e);return n?!t.containsRange(W._createOn(n),!0):!0}Gu.prototype.is=function(e){return e===`selection`||e===`model:selection`};class Xu extends x(W){constructor(e,t){super(e,t),Zu.call(this)}detach(){this.stopListening()}toRange(){return new W(this.start,this.end)}static fromRange(e){return new Xu(e.start,e.end)}}function Zu(){this.listenTo(this.root.document.model,`applyOperation`,((e,t)=>{let n=t[0];n.isDocumentOperation&&Qu.call(this,n)}),{priority:`low`})}function Qu(e){let t=this.getTransformedByOperation(e),n=W._createFromRanges(t),r=!n.isEqual(this),i=function(e,t){switch(t.type){case`insert`:return e.containsPosition(t.position);case`move`:case`remove`:case`reinsert`:case`merge`:return e.containsPosition(t.sourcePosition)||e.start.isEqual(t.sourcePosition)||e.containsPosition(t.targetPosition);case`split`:return e.containsPosition(t.splitPosition)||e.containsPosition(t.insertionPosition)}return!1}(this,e),a=null;if(r){n.root.rootName==`$graveyard`&&(a=e.type==`remove`?e.sourcePosition:e.deletionPosition);let t=this.toRange();this.start=n.start,this.end=n.end,this.fire(`change:range`,t,{deletionPosition:a})}else i&&this.fire(`change:content`,this.toRange(),{deletionPosition:a})}Xu.prototype.is=function(e){return e===`liveRange`||e===`model:liveRange`||e==`range`||e===`model:range`};let $u=`selection:`;class ed extends x(Ou){constructor(e){super(),this._selection=new td(e),this._selection.delegate(`change:range`).to(this),this._selection.delegate(`change:attribute`).to(this),this._selection.delegate(`change:marker`).to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}refresh(){this._selection.updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(e){this._selection.observeMarkers(e)}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(...e){this._selection.setTo(...e)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection.getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return $u+e}static _isStoreAttributeKey(e){return e.startsWith($u)}}ed.prototype.is=function(e){return e===`selection`||e==`model:selection`||e==`documentSelection`||e==`model:documentSelection`};class td extends Gu{constructor(e){super(),this.markers=new Ma({idProperty:`name`}),this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this._model=e.model,this._document=e,this.listenTo(this._model,`applyOperation`,((e,t)=>{let n=t[0];n.isDocumentOperation&&n.type!=`marker`&&n.type!=`rename`&&n.type!=`noop`&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire(`change:range`,{directChange:!1})))}),{priority:`lowest`}),this.on(`change:range`,(()=>{this._validateSelectionRanges(this.getRanges())})),this.listenTo(this._model.markers,`update`,((e,t,n,r)=>{this._updateMarker(t,r)})),this.listenTo(this._document,`change`,((e,t)=>{(function(e,t){let n=e.document.differ;for(let r of n.getChanges()){if(r.type!=`insert`)continue;let n=r.position.parent;r.length===n.maxOffset&&e.enqueueChange(t,(e=>{let t=Array.from(n.getAttributeKeys()).filter((e=>e.startsWith($u)));for(let r of t)e.removeAttribute(r,n)}))}})(this._model,t)}))}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(...e){super.setTo(...e),this._updateAttributes(!0),this.updateMarkers()}setFocus(e,t){super.setFocus(e,t),this._updateAttributes(!0),this.updateMarkers()}setAttribute(e,t){if(this._setAttribute(e,t)){let t=[e];this.fire(`change:attribute`,{attributeKeys:t,directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){let t=[e];this.fire(`change:attribute`,{attributeKeys:t,directChange:!0})}}overrideGravity(){let e=v();return this._overriddenGravityRegister.add(e),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new y(`document-selection-gravity-wrong-restore`,this,{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(e){this._observedMarkers.add(e),this.updateMarkers()}_replaceAllRanges(e){this._validateSelectionRanges(e),super._replaceAllRanges(e)}_popRange(){this._ranges.pop().detach()}_pushRange(e){let t=this._prepareRange(e);t&&this._ranges.push(t)}_validateSelectionRanges(e){for(let t of e)if(!this._document._validateSelectionRange(t))throw new y(`document-selection-wrong-position`,this,{range:t})}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return;let t=Xu.fromRange(e);return t.on(`change:range`,((e,n,r)=>{if(this._hasChangedRange=!0,t.root==this._document.graveyard){this._selectionRestorePosition=r.deletionPosition;let e=this._ranges.indexOf(t);this._ranges.splice(e,1),t.detach()}})),t}updateMarkers(){if(!this._observedMarkers.size)return;let e=[],t=!1;for(let t of this._model.markers){let n=t.name.split(`:`,1)[0];if(!this._observedMarkers.has(n))continue;let r=t.getRange();for(let n of this.getRanges())r.containsRange(n,!n.isCollapsed)&&e.push(t)}let n=Array.from(this.markers);for(let n of e)this.markers.has(n)||(this.markers.add(n),t=!0);for(let n of Array.from(this.markers))e.includes(n)||(this.markers.remove(n),t=!0);t&&this.fire(`change:marker`,{oldMarkers:n,directChange:!1})}_updateMarker(e,t){let n=e.name.split(`:`,1)[0];if(!this._observedMarkers.has(n))return;let r=!1,i=Array.from(this.markers),a=this.markers.has(e);if(t){let n=!1;for(let e of this.getRanges())if(t.containsRange(e,!e.isCollapsed)){n=!0;break}n&&!a?(this.markers.add(e),r=!0):!n&&a&&(this.markers.remove(e),r=!0)}else a&&(this.markers.remove(e),r=!0);r&&this.fire(`change:marker`,{oldMarkers:i,directChange:!1})}_updateAttributes(e){let t=Fa(this._getSurroundingAttributes()),n=Fa(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(let[e,t]of this._attributePriority)t==`low`&&(this._attrs.delete(e),this._attributePriority.delete(e));this._setAttributesTo(t);let r=[];for(let[e,t]of this.getAttributes())n.has(e)&&n.get(e)===t||r.push(e);for(let[e]of n)this.hasAttribute(e)||r.push(e);r.length>0&&this.fire(`change:attribute`,{attributeKeys:r,directChange:!1})}_setAttribute(e,t,n=!0){let r=n?`normal`:`low`;return r==`low`&&this._attributePriority.get(e)==`normal`?!1:super.getAttribute(e)!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,r),!0)}_removeAttribute(e,t=!0){let n=t?`normal`:`low`;return(n!=`low`||this._attributePriority.get(e)!=`normal`)&&(this._attributePriority.set(e,n),!!super.hasAttribute(e)&&(this._attrs.delete(e),!0))}_setAttributesTo(e){let t=new Set;for(let[t,n]of this.getAttributes())e.get(t)!==n&&this._removeAttribute(t,!1);for(let[n,r]of e)this._setAttribute(n,r,!1)&&t.add(n);return t}*getStoredAttributes(){let e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(let t of e.getAttributeKeys())t.startsWith($u)&&(yield[t.substr(10),e.getAttribute(t)])}_getSurroundingAttributes(){let e=this.getFirstPosition(),t=this._model.schema,n=null;if(this.isCollapsed){let r=e.textNode?e.textNode:e.nodeBefore,i=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(n=nd(r)),n||=nd(i),!this.isGravityOverridden&&!n){let e=r;for(;e&&!t.isInline(e)&&!n;)e=e.previousSibling,n=nd(e)}if(!n){let e=i;for(;e&&!t.isInline(e)&&!n;)e=e.nextSibling,n=nd(e)}n||=this.getStoredAttributes()}else{let e=this.getFirstRange();for(let r of e){if(r.item.is(`element`)&&t.isObject(r.item))break;if(r.type==`text`){n=r.item.getAttributes();break}}}return n}_fixGraveyardSelection(e){let t=this._model.schema.getNearestSelectionRange(e);t&&this._pushRange(t)}}function nd(e){return e instanceof ju||e instanceof V?e.getAttributes():null}class rd{constructor(e){this._dispatchers=e}add(e){for(let t of this._dispatchers)e(t);return this}}var id=1,ad=4;let od=function(e){return Pi(e,id|ad)};class sd extends rd{elementToElement(e){return this.add(function(e){let t=ud(e.model),n=dd(e.view,`container`);return t.attributes.length&&(t.children=!0),r=>{r.on(`insert:${t.name}`,function(e,t=yd){return(n,r,i)=>{if(!t(r.item,i.consumable,{preflight:!0}))return;let a=e(r.item,i,r);if(!a)return;t(r.item,i.consumable);let o=i.mapper.toViewPosition(r.range.start);i.mapper.bindElements(r.item,a),i.writer.insert(o,a),i.convertAttributes(r.item),_d(a,r.item.getChildren(),i,{reconversion:r.reconversion})}}(n,gd(t)),{priority:e.converterPriority||`normal`}),(t.children||t.attributes.length)&&r.on(`reduceChanges`,hd(t),{priority:`low`})}}(e))}elementToStructure(e){return this.add(function(e){let t=ud(e.model),n=dd(e.view,`container`);return t.children=!0,r=>{if(r._conversionApi.schema.checkChild(t.name,`$text`))throw new y(`conversion-element-to-structure-disallowed-text`,r,{elementName:t.name});var i,a;r.on(`insert:${t.name}`,(i=n,a=gd(t),(e,t,n)=>{if(!a(t.item,n.consumable,{preflight:!0}))return;let r=new Map;n.writer._registerSlotFactory(function(e,t,n){return(r,i=`children`)=>{let a=r.createContainerElement(`$slot`),o=null;if(i===`children`)o=Array.from(e.getChildren());else{if(typeof i!=`function`)throw new y(`conversion-slot-mode-unknown`,n.dispatcher,{modeOrFilter:i});o=Array.from(e.getChildren()).filter((e=>i(e)))}return t.set(a,o),a}}(t.item,r,n));let o=i(t.item,n,t);if(n.writer._clearSlotFactory(),!o)return;(function(e,t,n){let r=Array.from(t.values()).flat(),i=new Set(r);if(i.size!=r.length)throw new y(`conversion-slot-filter-overlap`,n.dispatcher,{element:e});if(i.size!=e.childCount)throw new y(`conversion-slot-filter-incomplete`,n.dispatcher,{element:e})})(t.item,r,n),a(t.item,n.consumable);let s=n.mapper.toViewPosition(t.range.start);n.mapper.bindElements(t.item,o),n.writer.insert(s,o),n.convertAttributes(t.item),function(e,t,n,r){n.mapper.on(`modelToViewPosition`,o,{priority:`highest`});let i=null,a=null;for([i,a]of t)_d(e,a,n,r),n.writer.move(n.writer.createRangeIn(i),n.writer.createPositionBefore(i)),n.writer.remove(i);function o(e,t){let n=t.modelPosition.nodeAfter,r=a.indexOf(n);r<0||(t.viewPosition=t.mapper.findPositionIn(i,r))}n.mapper.off(`modelToViewPosition`,o)}(o,r,n,{reconversion:t.reconversion})}),{priority:e.converterPriority||`normal`}),r.on(`reduceChanges`,hd(t),{priority:`low`})}}(e))}attributeToElement(e){return this.add(function(e){e=od(e);let t=e.model;typeof t==`string`&&(t={key:t});let n=`attribute:${t.key}`;if(t.name&&(n+=`:`+t.name),t.values)for(let n of t.values)e.view[n]=dd(e.view[n],`attribute`);else e.view=dd(e.view,`attribute`);let r=fd(e);return t=>{t.on(n,function(e){return(t,n,r)=>{if(!r.consumable.test(n.item,t.name))return;let i=e(n.attributeOldValue,r,n),a=e(n.attributeNewValue,r,n);if(!i&&!a)return;r.consumable.consume(n.item,t.name);let o=r.writer,s=o.document.selection;if(n.item instanceof Gu||n.item instanceof ed)o.wrap(s.getFirstRange(),a);else{let e=r.mapper.toViewRange(n.range);n.attributeOldValue!==null&&i&&(e=o.unwrap(e,i)),n.attributeNewValue!==null&&a&&o.wrap(e,a)}}}(r),{priority:e.converterPriority||`normal`})}}(e))}attributeToAttribute(e){return this.add(function(e){e=od(e);let t=e.model;typeof t==`string`&&(t={key:t});let n=`attribute:${t.key}`;if(t.name&&(n+=`:`+t.name),t.values)for(let n of t.values)e.view[n]=pd(e.view[n]);else e.view=pd(e.view);let r=fd(e);return t=>{var i;t.on(n,(i=r,(e,t,n)=>{if(!n.consumable.test(t.item,e.name))return;let r=i(t.attributeOldValue,n,t),a=i(t.attributeNewValue,n,t);if(!r&&!a)return;n.consumable.consume(t.item,e.name);let o=n.mapper.toViewElement(t.item),s=n.writer;if(!o)throw new y(`conversion-attribute-to-attribute-on-text`,n.dispatcher,t);if(t.attributeOldValue!==null&&r)if(r.key==`class`){let e=j(r.value);for(let t of e)s.removeClass(t,o)}else if(r.key==`style`){let e=Object.keys(r.value);for(let t of e)s.removeStyle(t,o)}else s.removeAttribute(r.key,o);if(t.attributeNewValue!==null&&a)if(a.key==`class`){let e=j(a.value);for(let t of e)s.addClass(t,o)}else if(a.key==`style`){let e=Object.keys(a.value);for(let t of e)s.setStyle(t,a.value[t],o)}else s.setAttribute(a.key,a.value,o)}),{priority:e.converterPriority||`normal`})}}(e))}markerToElement(e){return this.add(function(e){let t=dd(e.view,`ui`);return n=>{var r;n.on(`addMarker:${e.model}`,(r=t,(e,t,n)=>{t.isOpening=!0;let i=r(t,n);t.isOpening=!1;let a=r(t,n);if(!i||!a)return;let o=t.markerRange;if(o.isCollapsed&&!n.consumable.consume(o,e.name))return;for(let t of o)if(!n.consumable.consume(t.item,e.name))return;let s=n.mapper,c=n.writer;c.insert(s.toViewPosition(o.start),i),n.mapper.bindElementToMarker(i,t.markerName),o.isCollapsed||(c.insert(s.toViewPosition(o.end),a),n.mapper.bindElementToMarker(a,t.markerName)),e.stop()}),{priority:e.converterPriority||`normal`}),n.on(`removeMarker:${e.model}`,((e,t,n)=>{let r=n.mapper.markerNameToElements(t.markerName);if(r){for(let e of r)n.mapper.unbindElementFromMarkerName(e,t.markerName),n.writer.clear(n.writer.createRangeOn(e),e);n.writer.clearClonedElementsGroup(t.markerName),e.stop()}}),{priority:e.converterPriority||`normal`})}}(e))}markerToHighlight(e){return this.add(function(e){return t=>{var n;t.on(`addMarker:${e.model}`,(n=e.view,(e,t,r)=>{if(!t.item||!(t.item instanceof Gu||t.item instanceof ed||t.item.is(`$textProxy`)))return;let i=md(n,t,r);if(!i||!r.consumable.consume(t.item,e.name))return;let a=r.writer,o=cd(a,i),s=a.document.selection;if(t.item instanceof Gu||t.item instanceof ed)a.wrap(s.getFirstRange(),o);else{let e=r.mapper.toViewRange(t.range),n=a.wrap(e,o);for(let e of n.getItems())if(e.is(`attributeElement`)&&e.isSimilar(o)){r.mapper.bindElementToMarker(e,t.markerName);break}}}),{priority:e.converterPriority||`normal`}),t.on(`addMarker:${e.model}`,function(e){return(t,n,r)=>{if(!n.item||!(n.item instanceof H))return;let i=md(e,n,r);if(!i||!r.consumable.test(n.item,t.name))return;let a=r.mapper.toViewElement(n.item);if(a&&a.getCustomProperty(`addHighlight`)){r.consumable.consume(n.item,t.name);for(let e of W._createIn(n.item))r.consumable.consume(e.item,t.name);a.getCustomProperty(`addHighlight`)(a,i,r.writer),r.mapper.bindElementToMarker(a,n.markerName)}}}(e.view),{priority:e.converterPriority||`normal`}),t.on(`removeMarker:${e.model}`,function(e){return(t,n,r)=>{if(n.markerRange.isCollapsed)return;let i=md(e,n,r);if(!i)return;let a=cd(r.writer,i),o=r.mapper.markerNameToElements(n.markerName);if(o){for(let e of o)r.mapper.unbindElementFromMarkerName(e,n.markerName),e.is(`attributeElement`)?r.writer.unwrap(r.writer.createRangeOn(e),a):e.getCustomProperty(`removeHighlight`)(e,i.id,r.writer);r.writer.clearClonedElementsGroup(n.markerName),t.stop()}}}(e.view),{priority:e.converterPriority||`normal`})}}(e))}markerToData(e){return this.add(function(e){e=od(e);let t=e.model,n=e.view;return n||=n=>({group:t,name:n.substr(e.model.length+1)}),r=>{var i;r.on(`addMarker:${t}`,(i=n,(e,t,n)=>{let r=i(t.markerName,n);if(!r)return;let a=t.markerRange;n.consumable.consume(a,e.name)&&(ld(a,!1,n,t,r),ld(a,!0,n,t,r),e.stop())}),{priority:e.converterPriority||`normal`}),r.on(`removeMarker:${t}`,function(e){return(t,n,r)=>{let i=e(n.markerName,r);if(!i)return;let a=r.mapper.markerNameToElements(n.markerName);if(a){for(let e of a)r.mapper.unbindElementFromMarkerName(e,n.markerName),e.is(`containerElement`)?(o(`data-${i.group}-start-before`,e),o(`data-${i.group}-start-after`,e),o(`data-${i.group}-end-before`,e),o(`data-${i.group}-end-after`,e)):r.writer.clear(r.writer.createRangeOn(e),e);r.writer.clearClonedElementsGroup(n.markerName),t.stop()}function o(e,t){if(t.hasAttribute(e)){let n=new Set(t.getAttribute(e).split(`,`));n.delete(i.name),n.size==0?r.writer.removeAttribute(e,t):r.writer.setAttribute(e,Array.from(n).join(`,`),t)}}}}(n),{priority:e.converterPriority||`normal`})}}(e))}}function cd(e,t){let n=e.createAttributeElement(`span`,t.attributes);return t.classes&&n._addClass(t.classes),typeof t.priority==`number`&&(n._priority=t.priority),n._id=t.id,n}function ld(e,t,n,r,i){let a=t?e.start:e.end,o=a.nodeAfter&&a.nodeAfter.is(`element`)?a.nodeAfter:null,s=a.nodeBefore&&a.nodeBefore.is(`element`)?a.nodeBefore:null;if(o||s){let e,a;t&&o||!t&&!s?(e=o,a=!0):(e=s,a=!1);let c=n.mapper.toViewElement(e);if(c)return void function(e,t,n,r,i,a){let o=`data-${a.group}-${t?`start`:`end`}-${n?`before`:`after`}`,s=e.hasAttribute(o)?e.getAttribute(o).split(`,`):[];s.unshift(a.name),r.writer.setAttribute(o,s.join(`,`),e),r.mapper.bindElementToMarker(e,i.markerName)}(c,t,a,n,r,i)}(function(e,t,n,r,i){let a=`${i.group}-${t?`start`:`end`}`,o=i.name?{name:i.name}:null,s=n.writer.createUIElement(a,o);n.writer.insert(e,s),n.mapper.bindElementToMarker(s,r.markerName)})(n.mapper.toViewPosition(a),t,n,r,i)}function ud(e){return typeof e==`string`&&(e={name:e}),e.attributes?Array.isArray(e.attributes)||(e.attributes=[e.attributes]):e.attributes=[],e.children=!!e.children,e}function dd(e,t){return typeof e==`function`?e:(n,r)=>function(e,t,n){typeof e==`string`&&(e={name:e});let r,i=t.writer,a=Object.assign({},e.attributes);if(n==`container`)r=i.createContainerElement(e.name,a);else if(n==`attribute`){let t={priority:e.priority||yc.DEFAULT_PRIORITY};r=i.createAttributeElement(e.name,a,t)}else r=i.createUIElement(e.name,a);if(e.styles){let t=Object.keys(e.styles);for(let n of t)i.setStyle(n,e.styles[n],r)}if(e.classes){let t=e.classes;if(typeof t==`string`)i.addClass(t,r);else for(let e of t)i.addClass(e,r)}return r}(e,r,t)}function fd(e){return e.model.values?(t,n,r)=>{let i=e.view[t];return i?i(t,n,r):null}:e.view}function pd(e){return typeof e==`string`?t=>({key:e,value:t}):typeof e==`object`?e.value?()=>e:t=>({key:e.key,value:t}):e}function md(e,t,n){let r=typeof e==`function`?e(t,n):e;return r?(r.priority||=10,r.id||=t.markerName,r):null}function hd(e){let t=function(e){return(t,n)=>{if(!t.is(`element`,e.name))return!1;if(n.type==`attribute`){if(e.attributes.includes(n.attributeKey))return!0}else if(e.children)return!0;return!1}}(e);return(e,n)=>{let r=[];n.reconvertedElements||=new Set;for(let e of n.changes){let i=e.type==`attribute`?e.range.start.nodeAfter:e.position.parent;if(i&&t(i,e)){if(!n.reconvertedElements.has(i)){n.reconvertedElements.add(i);let e=U._createBefore(i);r.push({type:`remove`,name:i.name,position:e,length:1},{type:`reinsert`,name:i.name,position:e,length:1})}}else r.push(e)}n.changes=r}}function gd(e){return(t,n,r={})=>{let i=[`insert`];for(let n of e.attributes)t.hasAttribute(n)&&i.push(`attribute:${n}`);return!!i.every((e=>n.test(t,e)))&&(r.preflight||i.forEach((e=>n.consume(t,e))),!0)}}function _d(e,t,n,r){for(let i of t)vd(e.root,i,n,r)||n.convertItem(i)}function vd(e,t,n,r){let{writer:i,mapper:a}=n;if(!r.reconversion)return!1;let o=a.toViewElement(t);return!(!o||o.root==e)&&!!n.canReuseView(o)&&(i.move(i.createRangeOn(o),a.toViewPosition(U._createBefore(t))),!0)}function yd(e,t,{preflight:n}={}){return n?t.test(e,`insert`):t.consume(e,`insert`)}function bd(e){let{schema:t,document:n}=e.model;for(let r of n.getRootNames()){let i=n.getRoot(r);if(i.isEmpty&&!t.checkChild(i,`$text`)&&t.checkChild(i,`paragraph`))return e.insertElement(`paragraph`,i),!0}return!1}function xd(e,t,n){let r=n.createContext(e);return!!n.checkChild(r,`paragraph`)&&!!n.checkChild(r.push(`paragraph`),t)}function Sd(e,t){let n=t.createElement(`paragraph`);return t.insert(n,e),t.createPositionAt(n,0)}class Cd extends rd{elementToElement(e){return this.add(wd(e))}elementToAttribute(e){return this.add(function(e){e=od(e),Dd(e);let t=Od(e,!1),n=Td(e.view),r=n?`element:${n}`:`element`;return n=>{n.on(r,t,{priority:e.converterPriority||`low`})}}(e))}attributeToAttribute(e){return this.add(function(e){e=od(e);let t=null;(typeof e.view==`string`||e.view.key)&&(t=function(e){typeof e.view==`string`&&(e.view={key:e.view});let t=e.view.key,n;return n=t==`class`||t==`style`?{[t==`class`?`classes`:`styles`]:e.view.value}:{attributes:{[t]:e.view.value===void 0?/[\s\S]*/:e.view.value}},e.view.name&&(n.name=e.view.name),e.view=n,t}(e)),Dd(e,t);let n=Od(e,!0);return t=>{t.on(`element`,n,{priority:e.converterPriority||`low`})}}(e))}elementToMarker(e){return this.add(function(e){let t=function(e){return(t,n)=>{let r=typeof e==`string`?e:e(t,n);return n.writer.createElement(`$marker`,{"data-name":r})}}(e.model);return wd({...e,model:t})}(e))}dataToMarker(e){return this.add(function(e){e=od(e),e.model||=t=>t?e.view+`:`+t:e.view;let t={view:e.view,model:e.model},n=Ed(kd(t,`start`)),r=Ed(kd(t,`end`));return i=>{i.on(`element:${e.view}-start`,n,{priority:e.converterPriority||`normal`}),i.on(`element:${e.view}-end`,r,{priority:e.converterPriority||`normal`});let a=ee.get(`low`),o=ee.get(`highest`),s=ee.get(e.converterPriority)/o;i.on(`element`,function(e){return(t,n,r)=>{let i=`data-${e.view}`;function a(t,i){for(let a of i){let i=e.model(a,r),o=r.writer.createElement(`$marker`,{"data-name":i});r.writer.insert(o,t),n.modelCursor.isEqual(t)?n.modelCursor=n.modelCursor.getShiftedBy(1):n.modelCursor=n.modelCursor._getTransformedByInsertion(t,1),n.modelRange=n.modelRange._getTransformedByInsertion(t,1)[0]}}(r.consumable.test(n.viewItem,{attributes:i+`-end-after`})||r.consumable.test(n.viewItem,{attributes:i+`-start-after`})||r.consumable.test(n.viewItem,{attributes:i+`-end-before`})||r.consumable.test(n.viewItem,{attributes:i+`-start-before`}))&&(n.modelRange||Object.assign(n,r.convertChildren(n.viewItem,n.modelCursor)),r.consumable.consume(n.viewItem,{attributes:i+`-end-after`})&&a(n.modelRange.end,n.viewItem.getAttribute(i+`-end-after`).split(`,`)),r.consumable.consume(n.viewItem,{attributes:i+`-start-after`})&&a(n.modelRange.end,n.viewItem.getAttribute(i+`-start-after`).split(`,`)),r.consumable.consume(n.viewItem,{attributes:i+`-end-before`})&&a(n.modelRange.start,n.viewItem.getAttribute(i+`-end-before`).split(`,`)),r.consumable.consume(n.viewItem,{attributes:i+`-start-before`})&&a(n.modelRange.start,n.viewItem.getAttribute(i+`-start-before`).split(`,`)))}}(t),{priority:a+s})}}(e))}}function wd(e){let t=Ed(e=od(e)),n=Td(e.view),r=n?`element:${n}`:`element`;return n=>{n.on(r,t,{priority:e.converterPriority||`normal`})}}function Td(e){return typeof e==`string`?e:typeof e==`object`&&typeof e.name==`string`?e.name:null}function Ed(e){let t=new Xo(e.view);return(n,r,i)=>{let a=t.match(r.viewItem);if(!a)return;let o=a.match;if(o.name=!0,!i.consumable.test(r.viewItem,o))return;let s=function(e,t,n){return e instanceof Function?e(t,n):n.writer.createElement(e)}(e.model,r.viewItem,i);s&&i.safeInsert(s,r.modelCursor)&&(i.consumable.consume(r.viewItem,o),i.convertChildren(r.viewItem,s),i.updateConversionResult(s,r))}}function Dd(e,t=null){let n=t===null||(e=>e.getAttribute(t));e.model={key:typeof e.model==`object`?e.model.key:e.model,value:typeof e.model!=`object`||e.model.value===void 0?n:e.model.value}}function Od(e,t){let n=new Xo(e.view);return(r,i,a)=>{if(!i.modelRange&&t)return;let o=n.match(i.viewItem);if(!o||(function(e,t){let n=typeof e==`function`?e(t):e;return typeof n==`object`&&!Td(n)?!1:!n.classes&&!n.attributes&&!n.styles}(e.view,i.viewItem)?o.match.name=!0:delete o.match.name,!a.consumable.test(i.viewItem,o.match)))return;let s=e.model.key,c=typeof e.model.value==`function`?e.model.value(i.viewItem,a):e.model.value;c!==null&&(i.modelRange||Object.assign(i,a.convertChildren(i.viewItem,i.modelCursor)),(function(e,t,n,r){let i=!1;for(let a of Array.from(e.getItems({shallow:n})))r.schema.checkAttribute(a,t.key)&&(i=!0,a.hasAttribute(t.key)||r.writer.setAttribute(t.key,t.value,a));return i})(i.modelRange,{key:s,value:c},t,a)&&(a.consumable.test(i.viewItem,{name:!0})&&(o.match.name=!0),a.consumable.consume(i.viewItem,o.match)))}}function kd(e,t){return{view:`${e.view}-${t}`,model:(t,n)=>{let r=t.getAttribute(`name`),i=e.model(r,n);return n.writer.createElement(`$marker`,{"data-name":i})}}}class Ad extends C(){constructor(e,t){super(),this.model=e,this.view=new Du(t),this.mapper=new zu,this.downcastDispatcher=new Hu({mapper:this.mapper,schema:e.schema});let n=this.model.document,r=n.selection,i=this.model.markers;this.listenTo(this.model,`_beforeChanges`,(()=>{this.view._disableRendering(!0)}),{priority:`highest`}),this.listenTo(this.model,`_afterChanges`,(()=>{this.view._disableRendering(!1)}),{priority:`lowest`}),this.listenTo(n,`change`,(()=>{this.view.change((e=>{this.downcastDispatcher.convertChanges(n.differ,i,e),this.downcastDispatcher.convertSelection(r,i,e)}))}),{priority:`low`}),this.listenTo(this.view.document,`selectionChange`,function(e,t){return(n,r)=>{let i=r.newSelection,a=[];for(let e of i.getRanges())a.push(t.toModelRange(e));let o=e.createSelection(a,{backward:i.isBackward});o.isEqual(e.document.selection)||e.change((e=>{e.setSelection(o)}))}}(this.model,this.mapper)),this.downcastDispatcher.on(`insert:$text`,((e,t,n)=>{if(!n.consumable.consume(t.item,e.name))return;let r=n.writer,i=n.mapper.toViewPosition(t.range.start),a=r.createText(t.item.data);r.insert(i,a)}),{priority:`lowest`}),this.downcastDispatcher.on(`insert`,((e,t,n)=>{n.convertAttributes(t.item),t.reconversion||!t.item.is(`element`)||t.item.isEmpty||n.convertChildren(t.item)}),{priority:`lowest`}),this.downcastDispatcher.on(`remove`,((e,t,n)=>{let r=n.mapper.toViewPosition(t.position),i=t.position.getShiftedBy(t.length),a=n.mapper.toViewPosition(i,{isPhantom:!0}),o=n.writer.createRange(r,a),s=n.writer.remove(o.getTrimmed());for(let e of n.writer.createRangeIn(s).getItems())n.mapper.unbindViewElement(e,{defer:!0})}),{priority:`low`}),this.downcastDispatcher.on(`selection`,((e,t,n)=>{let r=n.writer,i=r.document.selection;for(let e of i.getRanges())e.isCollapsed&&e.end.parent.isAttached()&&n.writer.mergeAttributes(e.start);r.setSelection(null)}),{priority:`high`}),this.downcastDispatcher.on(`selection`,((e,t,n)=>{let r=t.selection;if(r.isCollapsed||!n.consumable.consume(r,`selection`))return;let i=[];for(let e of r.getRanges())i.push(n.mapper.toViewRange(e));n.writer.setSelection(i,{backward:r.isBackward})}),{priority:`low`}),this.downcastDispatcher.on(`selection`,((e,t,n)=>{let r=t.selection;if(!r.isCollapsed||!n.consumable.consume(r,`selection`))return;let i=n.writer,a=r.getFirstPosition(),o=n.mapper.toViewPosition(a),s=i.breakAttributes(o);i.setSelection(s)}),{priority:`low`}),this.view.document.roots.bindTo(this.model.document.roots).using((e=>{if(e.rootName==`$graveyard`)return null;let t=new oc(this.view.document,e.name);return t.rootName=e.rootName,this.mapper.bindElements(e,t),t}))}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(e){let t=typeof e==`string`?e:e.name,n=this.model.markers.get(t);if(!n)throw new y(`editingcontroller-reconvertmarker-marker-not-exist`,this,{markerName:t});this.model.change((()=>{this.model.markers._refresh(n)}))}reconvertItem(e){this.model.change((()=>{this.model.document.differ._refreshItem(e)}))}}class jd{constructor(){this._consumables=new Map}add(e,t){let n;e.is(`$text`)||e.is(`documentFragment`)?this._consumables.set(e,!0):(this._consumables.has(e)?n=this._consumables.get(e):(n=new Nd(e),this._consumables.set(e,n)),n.add(t))}test(e,t){let n=this._consumables.get(e);return n===void 0?null:e.is(`$text`)||e.is(`documentFragment`)?n:n.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is(`$text`)||e.is(`documentFragment`)?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){let n=this._consumables.get(e);n!==void 0&&(e.is(`$text`)||e.is(`documentFragment`)?this._consumables.set(e,!0):n.revert(t))}static consumablesFromElement(e){let t={element:e,name:!0,attributes:[],classes:[],styles:[]},n=e.getAttributeKeys();for(let e of n)e!=`style`&&e!=`class`&&t.attributes.push(e);let r=e.getClassNames();for(let e of r)t.classes.push(e);let i=e.getStyleNames();for(let e of i)t.styles.push(e);return t}static createFrom(e,t){if(t||=new jd,e.is(`$text`))return t.add(e),t;e.is(`element`)&&t.add(e,jd.consumablesFromElement(e)),e.is(`documentFragment`)&&t.add(e);for(let n of e.getChildren())t=jd.createFrom(n,t);return t}}let Md=[`attributes`,`classes`,`styles`];class Nd{constructor(e){this.element=e,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){e.name&&(this._canConsumeName=!0);for(let t of Md)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(let t of Md)if(t in e){let n=this._test(t,e[t]);if(!0!==n)return n}return!0}consume(e){e.name&&(this._canConsumeName=!1);for(let t of Md)t in e&&this._consume(t,e[t])}revert(e){e.name&&(this._canConsumeName=!0);for(let t of Md)t in e&&this._revert(t,e[t])}_add(e,t){let n=qe(t)?t:[t],r=this._consumables[e];for(let t of n){if(e===`attributes`&&(t===`class`||t===`style`))throw new y(`viewconsumable-invalid-attribute`,this);if(r.set(t,!0),e===`styles`)for(let e of this.element.document.stylesProcessor.getRelatedStyles(t))r.set(e,!0)}}_test(e,t){let n=qe(t)?t:[t],r=this._consumables[e];for(let t of n)if(e!==`attributes`||t!==`class`&&t!==`style`){let e=r.get(t);if(e===void 0)return null;if(!e)return!1}else{let e=t==`class`?`classes`:`styles`,n=this._test(e,[...this._consumables[e].keys()]);if(!0!==n)return n}return!0}_consume(e,t){let n=qe(t)?t:[t],r=this._consumables[e];for(let t of n)if(e!==`attributes`||t!==`class`&&t!==`style`){if(r.set(t,!1),e==`styles`)for(let e of this.element.document.stylesProcessor.getRelatedStyles(t))r.set(e,!1)}else{let e=t==`class`?`classes`:`styles`;this._consume(e,[...this._consumables[e].keys()])}}_revert(e,t){let n=qe(t)?t:[t],r=this._consumables[e];for(let t of n)if(e!==`attributes`||t!==`class`&&t!==`style`)!1===r.get(t)&&r.set(t,!0);else{let e=t==`class`?`classes`:`styles`;this._revert(e,[...this._consumables[e].keys()])}}}class Pd extends C(){constructor(){super(),this._sourceDefinitions={},this._attributeProperties={},this.decorate(`checkChild`),this.decorate(`checkAttribute`),this.on(`checkAttribute`,((e,t)=>{t[0]=new Fd(t[0])}),{priority:`highest`}),this.on(`checkChild`,((e,t)=>{t[0]=new Fd(t[0]),t[1]=this.getDefinition(t[1])}),{priority:`highest`})}register(e,t){if(this._sourceDefinitions[e])throw new y(`schema-cannot-register-item-twice`,this,{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new y(`schema-cannot-extend-missing-item`,this,{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t=typeof e==`string`?e:`is`in e&&(e.is(`$text`)||e.is(`$textProxy`))?`$text`:e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){let t=this.getDefinition(e);return!(!t||!t.isBlock)}isLimit(e){let t=this.getDefinition(e);return!!t&&!(!t.isLimit&&!t.isObject)}isObject(e){let t=this.getDefinition(e);return!!t&&!!(t.isObject||t.isLimit&&t.isSelectable&&t.isContent)}isInline(e){let t=this.getDefinition(e);return!(!t||!t.isInline)}isSelectable(e){let t=this.getDefinition(e);return!!t&&!(!t.isSelectable&&!t.isObject)}isContent(e){let t=this.getDefinition(e);return!!t&&!(!t.isContent&&!t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){let n=this.getDefinition(e.last);return!!n&&n.allowAttributes.includes(t)}checkMerge(e,t){if(e instanceof U){let t=e.nodeBefore,n=e.nodeAfter;if(!(t instanceof H))throw new y(`schema-check-merge-no-element-before`,this);if(!(n instanceof H))throw new y(`schema-check-merge-no-element-after`,this);return this.checkMerge(t,n)}for(let n of t.getChildren())if(!this.checkChild(e,n))return!1;return!0}addChildCheck(e){this.on(`checkChild`,((t,[n,r])=>{if(!r)return;let i=e(n,r);typeof i==`boolean`&&(t.stop(),t.return=i)}),{priority:`high`})}addAttributeCheck(e){this.on(`checkAttribute`,((t,[n,r])=>{let i=e(n,r);typeof i==`boolean`&&(t.stop(),t.return=i)}),{priority:`high`})}setAttributeProperties(e,t){this._attributeProperties[e]=Object.assign(this.getAttributeProperties(e),t)}getAttributeProperties(e){return this._attributeProperties[e]||{}}getLimitElement(e){let t;for(t=e instanceof U?e.parent:(e instanceof W?[e]:Array.from(e.getRanges())).reduce(((e,t)=>{let n=t.getCommonAncestor();return e?e.getCommonAncestor(n,{includeSelf:!0}):n}),null);!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed){let n=[...e.getFirstPosition().getAncestors(),new V(``,e.getAttributes())];return this.checkAttribute(n,t)}{let n=e.getRanges();for(let e of n)for(let n of e)if(this.checkAttribute(n.item,t))return!0}return!1}*getValidRanges(e,t){e=function*(e){for(let t of e)yield*t.getMinimalFlatRanges()}(e);for(let n of e)yield*this._getValidRangesForRange(n,t)}getNearestSelectionRange(e,t=`both`){if(this.checkChild(e,`$text`))return new W(e);let n,r,i=e.getAncestors().reverse().find((e=>this.isLimit(e)))||e.root;t!=`both`&&t!=`backward`||(n=new Mu({boundaries:W._createIn(i),startPosition:e,direction:`backward`})),t!=`both`&&t!=`forward`||(r=new Mu({boundaries:W._createIn(i),startPosition:e}));for(let e of function*(e,t){let n=!1;for(;!n;){if(n=!0,e){let t=e.next();t.done||(n=!1,yield{walker:e,value:t.value})}if(t){let e=t.next();e.done||(n=!1,yield{walker:t,value:e.value})}}}(n,r)){let t=e.walker==n?`elementEnd`:`elementStart`,r=e.value;if(r.type==t&&this.isObject(r.item))return W._createOn(r.item);if(this.checkChild(r.nextPosition,`$text`))return new W(r.nextPosition)}return null}findAllowedParent(e,t){let n=e.parent;for(;n;){if(this.checkChild(n,t))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(e,t,n){let r=n.model;for(let[i,a]of Object.entries(t))r.schema.checkAttribute(e,i)&&n.setAttribute(i,a,e)}removeDisallowedAttributes(e,t){for(let n of e)if(n.is(`$text`))Jd(this,n,t);else{let e=W._createIn(n).getPositions();for(let n of e)Jd(this,n.nodeBefore||n.parent,t)}}getAttributesWithProperty(e,t,n){let r={};for(let[i,a]of e.getAttributes()){let e=this.getAttributeProperties(i);e[t]!==void 0&&(n!==void 0&&n!==e[t]||(r[i]=a))}return r}createContext(e){return new Fd(e)}_clearCache(){this._compiledDefinitions=null}_compile(){let e={},t=this._sourceDefinitions,n=Object.keys(t);for(let r of n)e[r]=Id(t[r],r);for(let t of n)Ld(e,t);for(let t of n)Rd(e,t);for(let t of n)zd(e,t);for(let t of n)Bd(e,t),Vd(e,t);for(let t of n)Hd(e,t),Ud(e,t),Wd(e,t);this._compiledDefinitions=e}_checkContextMatch(e,t,n=t.length-1){let r=t.getItem(n);if(e.allowIn.includes(r.name)){if(n==0)return!0;{let e=this.getDefinition(r);return this._checkContextMatch(e,t,n-1)}}return!1}*_getValidRangesForRange(e,t){let n=e.start,r=e.start;for(let i of e.getItems({shallow:!0}))i.is(`element`)&&(yield*this._getValidRangesForRange(W._createIn(i),t)),this.checkAttribute(i,t)||(n.isEqual(r)||(yield new W(n,r)),n=U._createAfter(i)),r=U._createAfter(i);n.isEqual(r)||(yield new W(n,r))}}class Fd{constructor(e){if(e instanceof Fd)return e;let t;t=typeof e==`string`?[e]:Array.isArray(e)?e:e.getAncestors({includeSelf:!0}),this._items=t.map(qd)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){let t=new Fd([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map((e=>e.name))}endsWith(e){return Array.from(this.getNames()).join(` `).endsWith(e)}startsWith(e){return Array.from(this.getNames()).join(` `).startsWith(e)}}function Id(e,t){let n={name:t,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(e,t){for(let n of e){let e=Object.keys(n).filter((e=>e.startsWith(`is`)));for(let r of e)t[r]=!!n[r]}}(e,n),Gd(e,n,`allowIn`),Gd(e,n,`allowContentOf`),Gd(e,n,`allowWhere`),Gd(e,n,`allowAttributes`),Gd(e,n,`allowAttributesOf`),Gd(e,n,`allowChildren`),Gd(e,n,`inheritTypesFrom`),function(e,t){for(let n of e){let e=n.inheritAllFrom;e&&(t.allowContentOf.push(e),t.allowWhere.push(e),t.allowAttributesOf.push(e),t.inheritTypesFrom.push(e))}}(e,n),n}function Ld(e,t){let n=e[t];for(let r of n.allowChildren){let n=e[r];n&&n.allowIn.push(t)}n.allowChildren.length=0}function Rd(e,t){for(let n of e[t].allowContentOf)e[n]&&Kd(e,n).forEach((e=>{e.allowIn.push(t)}));delete e[t].allowContentOf}function zd(e,t){for(let n of e[t].allowWhere){let r=e[n];if(r){let n=r.allowIn;e[t].allowIn.push(...n)}}delete e[t].allowWhere}function Bd(e,t){for(let n of e[t].allowAttributesOf){let r=e[n];if(r){let n=r.allowAttributes;e[t].allowAttributes.push(...n)}}delete e[t].allowAttributesOf}function Vd(e,t){let n=e[t];for(let t of n.inheritTypesFrom){let r=e[t];if(r){let e=Object.keys(r).filter((e=>e.startsWith(`is`)));for(let t of e)t in n||(n[t]=r[t])}}delete n.inheritTypesFrom}function Hd(e,t){let n=e[t],r=n.allowIn.filter((t=>e[t]));n.allowIn=Array.from(new Set(r))}function Ud(e,t){let n=e[t];for(let r of n.allowIn)e[r].allowChildren.push(t)}function Wd(e,t){let n=e[t];n.allowAttributes=Array.from(new Set(n.allowAttributes))}function Gd(e,t,n){for(let r of e){let e=r[n];typeof e==`string`?t[n].push(e):Array.isArray(e)&&t[n].push(...e)}}function Kd(e,t){let n=e[t];return(r=e,Object.keys(r).map((e=>r[e]))).filter((e=>e.allowIn.includes(n.name)));var r}function qd(e){return typeof e==`string`||e.is(`documentFragment`)?{name:typeof e==`string`?e:`$documentFragment`,*getAttributeKeys(){},getAttribute(){}}:{name:e.is(`element`)?e.name:`$text`,*getAttributeKeys(){yield*e.getAttributeKeys()},getAttribute:t=>e.getAttribute(t)}}function Jd(e,t,n){for(let r of t.getAttributeKeys())e.checkAttribute(t,r)||n.removeAttribute(r,t)}class Yd extends x(){constructor(e){super(),this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi={...e,consumable:null,writer:null,store:null,convertItem:(e,t)=>this._convertItem(e,t),convertChildren:(e,t)=>this._convertChildren(e,t),safeInsert:(e,t)=>this._safeInsert(e,t),updateConversionResult:(e,t)=>this._updateConversionResult(e,t),splitToAllowedParent:(e,t)=>this._splitToAllowedParent(e,t),getSplitParts:e=>this._getSplitParts(e),keepEmptyElement:e=>this._keepEmptyElement(e)}}convert(e,t,n=[`$root`]){this.fire(`viewCleanup`,e),this._modelCursor=function(e,t){let n;for(let r of new Fd(e)){let e={};for(let t of r.getAttributeKeys())e[t]=r.getAttribute(t);let i=t.createElement(r.name,e);n&&t.insert(i,n),n=U._createAt(i,0)}return n}(n,t),this.conversionApi.writer=t,this.conversionApi.consumable=jd.createFrom(e),this.conversionApi.store={};let{modelRange:r}=this._convertItem(e,this._modelCursor),i=t.createDocumentFragment();if(r){this._removeEmptyElements();for(let e of Array.from(this._modelCursor.parent.getChildren()))t.append(e,i);i.markers=function(e,t){let n=new Set,r=new Map,i=W._createIn(e).getItems();for(let e of i)e.is(`element`,`$marker`)&&n.add(e);for(let e of n){let n=e.getAttribute(`data-name`),i=t.createPositionBefore(e);r.has(n)?r.get(n).end=i.clone():r.set(n,new W(i.clone())),t.remove(e)}return r}(i,t)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,i}_convertItem(e,t){let n={viewItem:e,modelCursor:t,modelRange:null};if(e.is(`element`)?this.fire(`element:${e.name}`,n,this.conversionApi):e.is(`$text`)?this.fire(`text`,n,this.conversionApi):this.fire(`documentFragment`,n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof W))throw new y(`view-conversion-dispatcher-incorrect-result`,this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(e,t){let n=t.is(`position`)?t:U._createAt(t,0),r=new W(n);for(let t of Array.from(e.getChildren())){let e=this._convertItem(t,n);e.modelRange instanceof W&&(r.end=e.modelRange.end,n=e.modelCursor)}return{modelRange:r,modelCursor:n}}_safeInsert(e,t){let n=this._splitToAllowedParent(e,t);return!!n&&(this.conversionApi.writer.insert(e,n.position),!0)}_updateConversionResult(e,t){let n=this._getSplitParts(e),r=this.conversionApi.writer;t.modelRange||=r.createRange(r.createPositionBefore(e),r.createPositionAfter(n[n.length-1]));let i=this._cursorParents.get(e);t.modelCursor=i?r.createPositionAt(i,0):t.modelRange.end}_splitToAllowedParent(e,t){let{schema:n,writer:r}=this.conversionApi,i=n.findAllowedParent(t,e);if(i){if(i===t.parent)return{position:t};this._modelCursor.parent.getAncestors().includes(i)&&(i=null)}if(!i)return xd(t,e,n)?{position:Sd(t,r)}:null;let a=this.conversionApi.writer.split(t,i),o=[];for(let e of a.range.getWalker())if(e.type==`elementEnd`)o.push(e.item);else{let t=o.pop(),n=e.item;this._registerSplitPair(t,n)}let s=a.range.end.parent;return this._cursorParents.set(e,s),{position:a.position,cursorParent:s}}_registerSplitPair(e,t){this._splitParts.has(e)||this._splitParts.set(e,[e]);let n=this._splitParts.get(e);this._splitParts.set(t,n),n.push(t)}_getSplitParts(e){let t;return t=this._splitParts.has(e)?this._splitParts.get(e):[e],t}_keepEmptyElement(e){this._emptyElementsToKeep.add(e)}_removeEmptyElements(){let e=!1;for(let t of this._splitParts.keys())t.isEmpty&&!this._emptyElementsToKeep.has(t)&&(this.conversionApi.writer.remove(t),this._splitParts.delete(t),e=!0);e&&this._removeEmptyElements()}}class Xd{getHtml(e){let t=document.implementation.createHTMLDocument(``).createElement(`div`);return t.appendChild(e),t.innerHTML}}class Zd{constructor(e){this.skipComments=!0,this.domParser=new DOMParser,this.domConverter=new sl(e,{renderingMode:`data`}),this.htmlWriter=new Xd}toData(e){let t=this.domConverter.viewToDom(e);return this.htmlWriter.getHtml(t)}toView(e){let t=this._toDom(e);return this.domConverter.domToView(t,{skipComments:this.skipComments})}registerRawContentMatcher(e){this.domConverter.registerRawContentMatcher(e)}useFillerType(e){this.domConverter.blockFillerMode=e==`marked`?`markedNbsp`:`nbsp`}_toDom(e){e.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(e=`<body>${e}</body>`);let t=this.domParser.parseFromString(e,`text/html`),n=t.createDocumentFragment(),r=t.body.childNodes;for(;r.length>0;)n.appendChild(r[0]);return n}}class Qd extends x(){constructor(e,t){super(),this.model=e,this.mapper=new zu,this.downcastDispatcher=new Hu({mapper:this.mapper,schema:e.schema}),this.downcastDispatcher.on(`insert:$text`,((e,t,n)=>{if(!n.consumable.consume(t.item,e.name))return;let r=n.writer,i=n.mapper.toViewPosition(t.range.start),a=r.createText(t.item.data);r.insert(i,a)}),{priority:`lowest`}),this.downcastDispatcher.on(`insert`,((e,t,n)=>{n.convertAttributes(t.item),t.reconversion||!t.item.is(`element`)||t.item.isEmpty||n.convertChildren(t.item)}),{priority:`lowest`}),this.upcastDispatcher=new Yd({schema:e.schema}),this.viewDocument=new vc(t),this.stylesProcessor=t,this.htmlProcessor=new Zd(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new Ac(this.viewDocument),this.upcastDispatcher.on(`text`,((e,t,{schema:n,consumable:r,writer:i})=>{let a=t.modelCursor;if(!r.test(t.viewItem))return;if(!n.checkChild(a,`$text`)){if(!xd(a,`$text`,n)||t.viewItem.data.trim().length==0)return;let e=a.nodeBefore;a=Sd(a,i),e&&e.is(`element`,`$marker`)&&(i.move(i.createRangeOn(e),a),a=i.createPositionAfter(e))}r.consume(t.viewItem);let o=i.createText(t.viewItem.data);i.insert(o,a),t.modelRange=i.createRange(a,a.getShiftedBy(o.offsetSize)),t.modelCursor=t.modelRange.end}),{priority:`lowest`}),this.upcastDispatcher.on(`element`,((e,t,n)=>{if(!t.modelRange&&n.consumable.consume(t.viewItem,{name:!0})){let{modelRange:e,modelCursor:r}=n.convertChildren(t.viewItem,t.modelCursor);t.modelRange=e,t.modelCursor=r}}),{priority:`lowest`}),this.upcastDispatcher.on(`documentFragment`,((e,t,n)=>{if(!t.modelRange&&n.consumable.consume(t.viewItem,{name:!0})){let{modelRange:e,modelCursor:r}=n.convertChildren(t.viewItem,t.modelCursor);t.modelRange=e,t.modelCursor=r}}),{priority:`lowest`}),C().prototype.decorate.call(this,`init`),C().prototype.decorate.call(this,`set`),C().prototype.decorate.call(this,`get`),C().prototype.decorate.call(this,`toView`),C().prototype.decorate.call(this,`toModel`),this.on(`init`,(()=>{this.fire(`ready`)}),{priority:`lowest`}),this.on(`ready`,(()=>{this.model.enqueueChange({isUndoable:!1},bd)}),{priority:`lowest`})}get(e={}){let{rootName:t=`main`,trim:n=`empty`}=e;if(!this._checkIfRootsExists([t]))throw new y(`datacontroller-get-non-existent-root`,this);let r=this.model.document.getRoot(t);return n!==`empty`||this.model.hasContent(r,{ignoreWhitespaces:!0})?this.stringify(r,e):``}stringify(e,t={}){let n=this.toView(e,t);return this.processor.toData(n)}toView(e,t={}){let n=this.viewDocument,r=this._viewWriter;this.mapper.clearBindings();let i=W._createIn(e),a=new kc(n);this.mapper.bindElements(e,a);let o=e.is(`documentFragment`)?e.markers:function(e){let t=[],n=e.root.document;if(!n)return new Map;let r=W._createIn(e);for(let e of n.model.markers){let n=e.getRange(),i=n.isCollapsed,a=n.start.isEqual(r.start)||n.end.isEqual(r.end);if(i&&a)t.push([e.name,n]);else{let i=r.getIntersection(n);i&&t.push([e.name,i])}}return t.sort((([e,t],[n,r])=>{if(t.end.compareWith(r.start)!==`after`)return 1;if(t.start.compareWith(r.end)!==`before`)return-1;switch(t.start.compareWith(r.start)){case`before`:return 1;case`after`:return-1;default:switch(t.end.compareWith(r.end)){case`before`:return 1;case`after`:return-1;default:return n.localeCompare(e)}}})),new Map(t)}(e);return this.downcastDispatcher.convert(i,o,r,t),a}init(e){if(this.model.document.version)throw new y(`datacontroller-init-document-not-empty`,this);let t={};if(typeof e==`string`?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new y(`datacontroller-init-non-existent-root`,this);return this.model.enqueueChange({isUndoable:!1},(e=>{for(let n of Object.keys(t)){let r=this.model.document.getRoot(n);e.insert(this.parse(t[n],r),r,0)}})),Promise.resolve()}set(e,t={}){let n={};if(typeof e==`string`?n.main=e:n=e,!this._checkIfRootsExists(Object.keys(n)))throw new y(`datacontroller-set-non-existent-root`,this);this.model.enqueueChange(t.batchType||{},(e=>{e.setSelection(null),e.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(let t of Object.keys(n)){let r=this.model.document.getRoot(t);e.remove(e.createRangeIn(r)),e.insert(this.parse(n[t],r),r,0)}}))}parse(e,t=`$root`){let n=this.processor.toView(e);return this.toModel(n,t)}toModel(e,t=`$root`){return this.model.change((n=>this.upcastDispatcher.convert(e,n,t)))}addStyleProcessorRules(e){e(this.stylesProcessor)}registerRawContentMatcher(e){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(e),this.htmlProcessor.registerRawContentMatcher(e)}destroy(){this.stopListening()}_checkIfRootsExists(e){for(let t of e)if(!this.model.document.getRootNames().includes(t))return!1;return!0}}class $d{constructor(e,t){this._helpers=new Map,this._downcast=j(e),this._createConversionHelpers({name:`downcast`,dispatchers:this._downcast,isDowncast:!0}),this._upcast=j(t),this._createConversionHelpers({name:`upcast`,dispatchers:this._upcast,isDowncast:!1})}addAlias(e,t){let n=this._downcast.includes(t);if(!this._upcast.includes(t)&&!n)throw new y(`conversion-add-alias-dispatcher-not-registered`,this);this._createConversionHelpers({name:e,dispatchers:[t],isDowncast:n})}for(e){if(!this._helpers.has(e))throw new y(`conversion-for-unknown-group`,this);return this._helpers.get(e)}elementToElement(e){this.for(`downcast`).elementToElement(e);for(let{model:t,view:n}of ef(e))this.for(`upcast`).elementToElement({model:t,view:n,converterPriority:e.converterPriority})}attributeToElement(e){this.for(`downcast`).attributeToElement(e);for(let{model:t,view:n}of ef(e))this.for(`upcast`).elementToAttribute({view:n,model:t,converterPriority:e.converterPriority})}attributeToAttribute(e){this.for(`downcast`).attributeToAttribute(e);for(let{model:t,view:n}of ef(e))this.for(`upcast`).attributeToAttribute({view:n,model:t})}_createConversionHelpers({name:e,dispatchers:t,isDowncast:n}){if(this._helpers.has(e))throw new y(`conversion-group-exists`,this);let r=n?new sd(t):new Cd(t);this._helpers.set(e,r)}}function*ef(e){if(e.model.values)for(let t of e.model.values){let n={key:e.model.key,value:t},r=e.view[t];yield*tf(n,r,e.upcastAlso?e.upcastAlso[t]:void 0)}else yield*tf(e.model,e.view,e.upcastAlso)}function*tf(e,t,n){if(yield{model:e,view:t},n)for(let t of j(n))yield{model:e,view:t}}class nf{constructor(e){this.baseVersion=e,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){let e=Object.assign({},this);return e.__className=this.constructor.className,delete e.batch,delete e.isDocumentOperation,e}static get className(){return`Operation`}static fromJSON(e,t){return new this(e.baseVersion)}}function rf(e,t){let n=sf(t),r=n.reduce(((e,t)=>e+t.offsetSize),0),i=e.parent;lf(e);let a=e.index;return i._insertChild(a,n),cf(i,a+n.length),cf(i,a),new W(e,e.getShiftedBy(r))}function af(e){if(!e.isFlat)throw new y(`operation-utils-remove-range-not-flat`,this);let t=e.start.parent;lf(e.start),lf(e.end);let n=t._removeChildren(e.start.index,e.end.index-e.start.index);return cf(t,e.start.index),n}function of(e,t){if(!e.isFlat)throw new y(`operation-utils-move-range-not-flat`,this);let n=af(e);return rf(t=t._getTransformedByDeletion(e.start,e.end.offset-e.start.offset),n)}function sf(e){let t=[];(function e(n){if(typeof n==`string`)t.push(new V(n));else if(n instanceof ju)t.push(new V(n.data,n.getAttributes()));else if(n instanceof ku)t.push(n);else if(je(n))for(let t of n)e(t)})(e);for(let e=1;e<t.length;e++){let n=t[e],r=t[e-1];n instanceof V&&r instanceof V&&uf(n,r)&&(t.splice(e-1,2,new V(r.data+n.data,r.getAttributes())),e--)}return t}function cf(e,t){let n=e.getChild(t-1),r=e.getChild(t);if(n&&r&&n.is(`$text`)&&r.is(`$text`)&&uf(n,r)){let i=new V(n.data+r.data,n.getAttributes());e._removeChildren(t-1,2),e._insertChild(t-1,i)}}function lf(e){let t=e.textNode,n=e.parent;if(t){let r=e.offset-t.startOffset,i=t.index;n._removeChildren(i,1);let a=new V(t.data.substr(0,r),t.getAttributes()),o=new V(t.data.substr(r),t.getAttributes());n._insertChild(i,[a,o])}}function uf(e,t){let n=e.getAttributes(),r=t.getAttributes();for(let e of n){if(e[1]!==t.getAttribute(e[0]))return!1;r.next()}return r.next().done}class G extends nf{constructor(e,t,n,r){super(r),this.sourcePosition=e.clone(),this.sourcePosition.stickiness=`toNext`,this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness=`toNone`}get type(){return this.targetPosition.root.rootName==`$graveyard`?`remove`:this.sourcePosition.root.rootName==`$graveyard`?`reinsert`:`move`}clone(){return new G(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){let e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new G(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){let e=this.sourcePosition.parent,t=this.targetPosition.parent,n=this.sourcePosition.offset,r=this.targetPosition.offset;if(n+this.howMany>e.maxOffset)throw new y(`move-operation-nodes-do-not-exist`,this);if(e===t&&n<r&&r<n+this.howMany)throw new y(`move-operation-range-into-itself`,this);if(this.sourcePosition.root==this.targetPosition.root&&Ae(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())==`prefix`){let e=this.sourcePosition.path.length-1;if(this.targetPosition.path[e]>=n&&this.targetPosition.path[e]<n+this.howMany)throw new y(`move-operation-node-into-itself`,this)}}_execute(){of(W._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){let e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e.targetPosition=this.targetPosition.toJSON(),e}static get className(){return`MoveOperation`}static fromJSON(e,t){let n=U.fromJSON(e.sourcePosition,t),r=U.fromJSON(e.targetPosition,t);return new this(n,e.howMany,r,e.baseVersion)}}class df extends nf{constructor(e,t,n){super(n),this.position=e.clone(),this.position.stickiness=`toNone`,this.nodes=new Au(sf(t)),this.shouldReceiveAttributes=!1}get type(){return`insert`}get howMany(){return this.nodes.maxOffset}clone(){let e=new Au([...this.nodes].map((e=>e._clone(!0)))),t=new df(this.position,e,this.baseVersion);return t.shouldReceiveAttributes=this.shouldReceiveAttributes,t}getReversed(){let e=this.position.root.document.graveyard,t=new U(e,[0]);return new G(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){let e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new y(`insert-operation-position-invalid`,this)}_execute(){let e=this.nodes;this.nodes=new Au([...e].map((e=>e._clone(!0)))),rf(this.position,e)}toJSON(){let e=super.toJSON();return e.position=this.position.toJSON(),e.nodes=this.nodes.toJSON(),e}static get className(){return`InsertOperation`}static fromJSON(e,t){let n=[];for(let t of e.nodes)t.name?n.push(H.fromJSON(t)):n.push(V.fromJSON(t));let r=new df(U.fromJSON(e.position,t),n,e.baseVersion);return r.shouldReceiveAttributes=e.shouldReceiveAttributes,r}}class ff extends nf{constructor(e,t,n,r,i,a){super(a),this.name=e,this.oldRange=t?t.clone():null,this.newRange=n?n.clone():null,this.affectsData=i,this._markers=r}get type(){return`marker`}clone(){return new ff(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new ff(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){this.newRange?this._markers._set(this.name,this.newRange,!0,this.affectsData):this._markers._remove(this.name)}toJSON(){let e=super.toJSON();return this.oldRange&&(e.oldRange=this.oldRange.toJSON()),this.newRange&&(e.newRange=this.newRange.toJSON()),delete e._markers,e}static get className(){return`MarkerOperation`}static fromJSON(e,t){return new ff(e.name,e.oldRange?W.fromJSON(e.oldRange,t):null,e.newRange?W.fromJSON(e.newRange,t):null,t.model.markers,e.affectsData,e.baseVersion)}}let pf=function(e,t){return hu(e,t)};class K extends nf{constructor(e,t,n,r,i){super(i),this.range=e.clone(),this.key=t,this.oldValue=n===void 0?null:n,this.newValue=r===void 0?null:r}get type(){return this.oldValue===null?`addAttribute`:this.newValue===null?`removeAttribute`:`changeAttribute`}clone(){return new K(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new K(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){let e=super.toJSON();return e.range=this.range.toJSON(),e}_validate(){if(!this.range.isFlat)throw new y(`attribute-operation-range-not-flat`,this);for(let e of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!pf(e.getAttribute(this.key),this.oldValue))throw new y(`attribute-operation-wrong-old-value`,this,{item:e,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&e.hasAttribute(this.key))throw new y(`attribute-operation-attribute-exists`,this,{node:e,key:this.key})}}_execute(){pf(this.oldValue,this.newValue)||function(e,t,n){lf(e.start),lf(e.end);for(let r of e.getItems({shallow:!0})){let e=r.is(`$textProxy`)?r.textNode:r;n===null?e._removeAttribute(t):e._setAttribute(t,n),cf(e.parent,e.index)}cf(e.end.parent,e.end.index)}(this.range,this.key,this.newValue)}static get className(){return`AttributeOperation`}static fromJSON(e,t){return new K(W.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class mf extends nf{get type(){return`noop`}clone(){return new mf(this.baseVersion)}getReversed(){return new mf(this.baseVersion+1)}_execute(){}static get className(){return`NoOperation`}}class hf extends nf{constructor(e,t,n,r){super(r),this.position=e,this.position.stickiness=`toNext`,this.oldName=t,this.newName=n}get type(){return`rename`}clone(){return new hf(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new hf(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){let e=this.position.nodeAfter;if(!(e instanceof H))throw new y(`rename-operation-wrong-position`,this);if(e.name!==this.oldName)throw new y(`rename-operation-wrong-name`,this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){let e=super.toJSON();return e.position=this.position.toJSON(),e}static get className(){return`RenameOperation`}static fromJSON(e,t){return new hf(U.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class gf extends nf{constructor(e,t,n,r,i){super(i),this.root=e,this.key=t,this.oldValue=n,this.newValue=r}get type(){return this.oldValue===null?`addRootAttribute`:this.newValue===null?`removeRootAttribute`:`changeRootAttribute`}clone(){return new gf(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new gf(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is(`documentFragment`))throw new y(`rootattribute-operation-not-a-root`,this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new y(`rootattribute-operation-wrong-old-value`,this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new y(`rootattribute-operation-attribute-exists`,this,{root:this.root,key:this.key})}_execute(){this.newValue===null?this.root._removeAttribute(this.key):this.root._setAttribute(this.key,this.newValue)}toJSON(){let e=super.toJSON();return e.root=this.root.toJSON(),e}static get className(){return`RootAttributeOperation`}static fromJSON(e,t){if(!t.getRoot(e.root))throw new y(`rootattribute-operation-fromjson-no-root`,this,{rootName:e.root});return new gf(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}class q extends nf{constructor(e,t,n,r,i){super(i),this.sourcePosition=e.clone(),this.sourcePosition.stickiness=`toPrevious`,this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness=`toNext`,this.graveyardPosition=r.clone()}get type(){return`merge`}get deletionPosition(){return new U(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){let e=this.sourcePosition.getShiftedBy(1/0);return new W(this.sourcePosition,e)}clone(){return new q(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){let e=this.targetPosition._getTransformedByMergeOperation(this),t=this.sourcePosition.path.slice(0,-1),n=new U(this.sourcePosition.root,t)._getTransformedByMergeOperation(this);return new J(e,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){let e=this.sourcePosition.parent,t=this.targetPosition.parent;if(!e.parent)throw new y(`merge-operation-source-position-invalid`,this);if(!t.parent)throw new y(`merge-operation-target-position-invalid`,this);if(this.howMany!=e.maxOffset)throw new y(`merge-operation-how-many-invalid`,this)}_execute(){let e=this.sourcePosition.parent;of(W._createIn(e),this.targetPosition),of(W._createOn(e),this.graveyardPosition)}toJSON(){let e=super.toJSON();return e.sourcePosition=e.sourcePosition.toJSON(),e.targetPosition=e.targetPosition.toJSON(),e.graveyardPosition=e.graveyardPosition.toJSON(),e}static get className(){return`MergeOperation`}static fromJSON(e,t){let n=U.fromJSON(e.sourcePosition,t),r=U.fromJSON(e.targetPosition,t),i=U.fromJSON(e.graveyardPosition,t);return new this(n,e.howMany,r,i,e.baseVersion)}}class J extends nf{constructor(e,t,n,r,i){super(i),this.splitPosition=e.clone(),this.splitPosition.stickiness=`toNext`,this.howMany=t,this.insertionPosition=n,this.graveyardPosition=r?r.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness=`toNext`)}get type(){return`split`}get moveTargetPosition(){let e=this.insertionPosition.path.slice();return e.push(0),new U(this.insertionPosition.root,e)}get movedRange(){let e=this.splitPosition.getShiftedBy(1/0);return new W(this.splitPosition,e)}clone(){return new J(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){let e=this.splitPosition.root.document.graveyard,t=new U(e,[0]);return new q(this.moveTargetPosition,this.howMany,this.splitPosition,t,this.baseVersion+1)}_validate(){let e=this.splitPosition.parent,t=this.splitPosition.offset;if(!e||e.maxOffset<t)throw new y(`split-operation-position-invalid`,this);if(!e.parent)throw new y(`split-operation-split-in-root`,this);if(this.howMany!=e.maxOffset-this.splitPosition.offset)throw new y(`split-operation-how-many-invalid`,this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new y(`split-operation-graveyard-position-invalid`,this)}_execute(){let e=this.splitPosition.parent;if(this.graveyardPosition)of(W._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{let t=e._clone();rf(this.insertionPosition,t)}of(new W(U._createAt(e,this.splitPosition.offset),U._createAt(e,e.maxOffset)),this.moveTargetPosition)}toJSON(){let e=super.toJSON();return e.splitPosition=this.splitPosition.toJSON(),e.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(e.graveyardPosition=this.graveyardPosition.toJSON()),e}static get className(){return`SplitOperation`}static getInsertionPosition(e){let t=e.path.slice(0,-1);return t[t.length-1]++,new U(e.root,t,`toPrevious`)}static fromJSON(e,t){let n=U.fromJSON(e.splitPosition,t),r=U.fromJSON(e.insertionPosition,t),i=e.graveyardPosition?U.fromJSON(e.graveyardPosition,t):null;return new this(n,e.howMany,r,i,e.baseVersion)}}let _f={};_f[K.className]=K,_f[df.className]=df,_f[ff.className]=ff,_f[G.className]=G,_f[mf.className]=mf,_f[nf.className]=nf,_f[hf.className]=hf,_f[gf.className]=gf,_f[J.className]=J,_f[q.className]=q;class vf{static fromJSON(e,t){return _f[e.__className].fromJSON(e,t)}}let yf=new Map;function Y(e,t,n){let r=yf.get(e);r||(r=new Map,yf.set(e,r)),r.set(t,n)}function bf(e){return[e]}function xf(e,t,n={}){let r=function(e,t){let n=yf.get(e);return n&&n.has(t)?n.get(t):bf}(e.constructor,t.constructor);try{return r(e=e.clone(),t,n)}catch(e){throw e}}function Sf(e,t,n){e=e.slice(),t=t.slice();let r=new Cf(n.document,n.useRelations,n.forceWeakRemove);r.setOriginalOperations(e),r.setOriginalOperations(t);let i=r.originalOperations;if(e.length==0||t.length==0)return{operationsA:e,operationsB:t,originalOperations:i};let a=new WeakMap;for(let t of e)a.set(t,0);let o={nextBaseVersionA:e[e.length-1].baseVersion+1,nextBaseVersionB:t[t.length-1].baseVersion+1,originalOperationsACount:e.length,originalOperationsBCount:t.length},s=0;for(;s<e.length;){let n=e[s],i=a.get(n);if(i==t.length){s++;continue}let o=t[i],c=xf(n,o,r.getContext(n,o,!0)),l=xf(o,n,r.getContext(o,n,!1));r.updateRelation(n,o),r.setOriginalOperations(c,n),r.setOriginalOperations(l,o);for(let e of c)a.set(e,i+l.length);e.splice(s,1,...c),t.splice(i,1,...l)}if(n.padWithNoOps){let n=e.length-o.originalOperationsACount,r=t.length-o.originalOperationsBCount;Tf(e,r-n),Tf(t,n-r)}return wf(e,o.nextBaseVersionB),wf(t,o.nextBaseVersionA),{operationsA:e,operationsB:t,originalOperations:i}}class Cf{constructor(e,t,n=!1){this.originalOperations=new Map,this._history=e.history,this._useRelations=t,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(e,t=null){let n=t?this.originalOperations.get(t):null;for(let t of e)this.originalOperations.set(t,n||t)}updateRelation(e,t){if(e instanceof G)t instanceof q?e.targetPosition.isEqual(t.sourcePosition)||t.movedRange.containsPosition(e.targetPosition)?this._setRelation(e,t,`insertAtSource`):e.targetPosition.isEqual(t.deletionPosition)?this._setRelation(e,t,`insertBetween`):e.targetPosition.isAfter(t.sourcePosition)&&this._setRelation(e,t,`moveTargetAfter`):t instanceof G&&(e.targetPosition.isEqual(t.sourcePosition)||e.targetPosition.isBefore(t.sourcePosition)?this._setRelation(e,t,`insertBefore`):this._setRelation(e,t,`insertAfter`));else if(e instanceof J){if(t instanceof q)e.splitPosition.isBefore(t.sourcePosition)&&this._setRelation(e,t,`splitBefore`);else if(t instanceof G)if(e.splitPosition.isEqual(t.sourcePosition)||e.splitPosition.isBefore(t.sourcePosition))this._setRelation(e,t,`splitBefore`);else{let n=W._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.splitPosition)){let r=n.end.offset-e.splitPosition.offset,i=e.splitPosition.offset-n.start.offset;this._setRelation(e,t,{howMany:r,offset:i})}}}else if(e instanceof q)t instanceof q?(e.targetPosition.isEqual(t.sourcePosition)||this._setRelation(e,t,`mergeTargetNotMoved`),e.sourcePosition.isEqual(t.targetPosition)&&this._setRelation(e,t,`mergeSourceNotMoved`),e.sourcePosition.isEqual(t.sourcePosition)&&this._setRelation(e,t,`mergeSameElement`)):t instanceof J&&e.sourcePosition.isEqual(t.splitPosition)&&this._setRelation(e,t,`splitAtSource`);else if(e instanceof ff){let n=e.newRange;if(!n)return;if(t instanceof G){let r=W._createFromPositionAndShift(t.sourcePosition,t.howMany),i=r.containsPosition(n.start)||r.start.isEqual(n.start),a=r.containsPosition(n.end)||r.end.isEqual(n.end);!i&&!a||r.containsRange(n)||this._setRelation(e,t,{side:i?`left`:`right`,path:i?n.start.path.slice():n.end.path.slice()})}else if(t instanceof q){let r=n.start.isEqual(t.targetPosition),i=n.start.isEqual(t.deletionPosition),a=n.end.isEqual(t.deletionPosition),o=n.end.isEqual(t.sourcePosition);(r||i||a||o)&&this._setRelation(e,t,{wasInLeftElement:r,wasStartBeforeMergedElement:i,wasEndBeforeMergedElement:a,wasInRightElement:o})}}}getContext(e,t,n){return{aIsStrong:n,aWasUndone:this._wasUndone(e),bWasUndone:this._wasUndone(t),abRelation:this._useRelations?this._getRelation(e,t):null,baRelation:this._useRelations?this._getRelation(t,e):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(e){let t=this.originalOperations.get(e);return t.wasUndone||this._history.isUndoneOperation(t)}_getRelation(e,t){let n=this.originalOperations.get(t),r=this._history.getUndoneOperation(n);if(!r)return null;let i=this.originalOperations.get(e),a=this._relations.get(i);return a&&a.get(r)||null}_setRelation(e,t,n){let r=this.originalOperations.get(e),i=this.originalOperations.get(t),a=this._relations.get(r);a||(a=new Map,this._relations.set(r,a)),a.set(i,n)}}function wf(e,t){for(let n of e)n.baseVersion=t++}function Tf(e,t){for(let n=0;n<t;n++)e.push(new mf(0))}function Ef(e,t,n){let r=e.nodes.getNode(0).getAttribute(t);return r==n?null:new K(new W(e.position,e.position.getShiftedBy(e.howMany)),t,r,n,0)}function Df(e,t){return e.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany)===null}function Of(e,t){let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=new G(i.start,i.end.offset-i.start.offset,t,0);n.push(a);for(let t=r+1;t<e.length;t++)e[t]=e[t]._getTransformedByMove(a.sourcePosition,a.targetPosition,a.howMany)[0];t=t._getTransformedByMove(a.sourcePosition,a.targetPosition,a.howMany)}return n}Y(K,K,((e,t,n)=>{if(e.key===t.key&&e.range.start.hasSameParentAs(t.range.start)){let r=e.range.getDifference(t.range).map((t=>new K(t,e.key,e.oldValue,e.newValue,0))),i=e.range.getIntersection(t.range);return i&&n.aIsStrong&&r.push(new K(i,t.key,t.newValue,e.newValue,0)),r.length==0?[new mf(0)]:r}return[e]})),Y(K,df,((e,t)=>{if(e.range.start.hasSameParentAs(t.position)&&e.range.containsPosition(t.position)){let n=e.range._getTransformedByInsertion(t.position,t.howMany,!t.shouldReceiveAttributes).map((t=>new K(t,e.key,e.oldValue,e.newValue,e.baseVersion)));if(t.shouldReceiveAttributes){let r=Ef(t,e.key,e.oldValue);r&&n.unshift(r)}return n}return e.range=e.range._getTransformedByInsertion(t.position,t.howMany,!1)[0],[e]})),Y(K,q,((e,t)=>{let n=[];e.range.start.hasSameParentAs(t.deletionPosition)&&(e.range.containsPosition(t.deletionPosition)||e.range.start.isEqual(t.deletionPosition))&&n.push(W._createFromPositionAndShift(t.graveyardPosition,1));let r=e.range._getTransformedByMergeOperation(t);return r.isCollapsed||n.push(r),n.map((t=>new K(t,e.key,e.oldValue,e.newValue,e.baseVersion)))})),Y(K,G,((e,t)=>function(e,t){let n=W._createFromPositionAndShift(t.sourcePosition,t.howMany),r=null,i=[];n.containsRange(e,!0)?r=e:e.start.hasSameParentAs(n.start)?(i=e.getDifference(n),r=e.getIntersection(n)):i=[e];let a=[];for(let e of i){e=e._getTransformedByDeletion(t.sourcePosition,t.howMany);let n=t.getMovedRangeStart(),r=e.start.hasSameParentAs(n),i=e._getTransformedByInsertion(n,t.howMany,r);a.push(...i)}return r&&a.push(r._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany,!1)[0]),a}(e.range,t).map((t=>new K(t,e.key,e.oldValue,e.newValue,e.baseVersion))))),Y(K,J,((e,t)=>{if(e.range.end.isEqual(t.insertionPosition))return t.graveyardPosition||e.range.end.offset++,[e];if(e.range.start.hasSameParentAs(t.splitPosition)&&e.range.containsPosition(t.splitPosition)){let n=e.clone();return n.range=new W(t.moveTargetPosition.clone(),e.range.end._getCombined(t.splitPosition,t.moveTargetPosition)),e.range.end=t.splitPosition.clone(),e.range.end.stickiness=`toPrevious`,[e,n]}return e.range=e.range._getTransformedBySplitOperation(t),[e]})),Y(df,K,((e,t)=>{let n=[e];if(e.shouldReceiveAttributes&&e.position.hasSameParentAs(t.range.start)&&t.range.containsPosition(e.position)){let r=Ef(e,t.key,t.newValue);r&&n.push(r)}return n})),Y(df,df,((e,t,n)=>(e.position.isEqual(t.position)&&n.aIsStrong||(e.position=e.position._getTransformedByInsertOperation(t)),[e]))),Y(df,G,((e,t)=>(e.position=e.position._getTransformedByMoveOperation(t),[e]))),Y(df,J,((e,t)=>(e.position=e.position._getTransformedBySplitOperation(t),[e]))),Y(df,q,((e,t)=>(e.position=e.position._getTransformedByMergeOperation(t),[e]))),Y(ff,df,((e,t)=>(e.oldRange&&=e.oldRange._getTransformedByInsertOperation(t)[0],e.newRange&&=e.newRange._getTransformedByInsertOperation(t)[0],[e]))),Y(ff,ff,((e,t,n)=>{if(e.name==t.name){if(!n.aIsStrong)return[new mf(0)];e.oldRange=t.newRange?t.newRange.clone():null}return[e]})),Y(ff,q,((e,t)=>(e.oldRange&&=e.oldRange._getTransformedByMergeOperation(t),e.newRange&&=e.newRange._getTransformedByMergeOperation(t),[e]))),Y(ff,G,((e,t,n)=>{if(e.oldRange&&=W._createFromRanges(e.oldRange._getTransformedByMoveOperation(t)),e.newRange){if(n.abRelation){let r=W._createFromRanges(e.newRange._getTransformedByMoveOperation(t));if(n.abRelation.side==`left`&&t.targetPosition.isEqual(e.newRange.start))return e.newRange.end=r.end,e.newRange.start.path=n.abRelation.path,[e];if(n.abRelation.side==`right`&&t.targetPosition.isEqual(e.newRange.end))return e.newRange.start=r.start,e.newRange.end.path=n.abRelation.path,[e]}e.newRange=W._createFromRanges(e.newRange._getTransformedByMoveOperation(t))}return[e]})),Y(ff,J,((e,t,n)=>{if(e.oldRange&&=e.oldRange._getTransformedBySplitOperation(t),e.newRange){if(n.abRelation){let r=e.newRange._getTransformedBySplitOperation(t);return e.newRange.start.isEqual(t.splitPosition)&&n.abRelation.wasStartBeforeMergedElement?e.newRange.start=U._createAt(t.insertionPosition):e.newRange.start.isEqual(t.splitPosition)&&!n.abRelation.wasInLeftElement&&(e.newRange.start=U._createAt(t.moveTargetPosition)),e.newRange.end.isEqual(t.splitPosition)&&n.abRelation.wasInRightElement?e.newRange.end=U._createAt(t.moveTargetPosition):e.newRange.end.isEqual(t.splitPosition)&&n.abRelation.wasEndBeforeMergedElement?e.newRange.end=U._createAt(t.insertionPosition):e.newRange.end=r.end,[e]}e.newRange=e.newRange._getTransformedBySplitOperation(t)}return[e]})),Y(q,df,((e,t)=>(e.sourcePosition.hasSameParentAs(t.position)&&(e.howMany+=t.howMany),e.sourcePosition=e.sourcePosition._getTransformedByInsertOperation(t),e.targetPosition=e.targetPosition._getTransformedByInsertOperation(t),[e]))),Y(q,q,((e,t,n)=>{if(e.sourcePosition.isEqual(t.sourcePosition)&&e.targetPosition.isEqual(t.targetPosition)){if(n.bWasUndone){let n=t.graveyardPosition.path.slice();return n.push(0),e.sourcePosition=new U(t.graveyardPosition.root,n),e.howMany=0,[e]}return[new mf(0)]}if(e.sourcePosition.isEqual(t.sourcePosition)&&!e.targetPosition.isEqual(t.targetPosition)&&!n.bWasUndone&&n.abRelation!=`splitAtSource`){let r=e.targetPosition.root.rootName==`$graveyard`,i=t.targetPosition.root.rootName==`$graveyard`;if(i&&!r||!(r&&!i)&&n.aIsStrong){let n=t.targetPosition._getTransformedByMergeOperation(t),r=e.targetPosition._getTransformedByMergeOperation(t);return[new G(n,e.howMany,r,0)]}return[new mf(0)]}return e.sourcePosition.hasSameParentAs(t.targetPosition)&&(e.howMany+=t.howMany),e.sourcePosition=e.sourcePosition._getTransformedByMergeOperation(t),e.targetPosition=e.targetPosition._getTransformedByMergeOperation(t),e.graveyardPosition.isEqual(t.graveyardPosition)&&n.aIsStrong||(e.graveyardPosition=e.graveyardPosition._getTransformedByMergeOperation(t)),[e]})),Y(q,G,((e,t,n)=>{let r=W._createFromPositionAndShift(t.sourcePosition,t.howMany);return t.type==`remove`&&!n.bWasUndone&&!n.forceWeakRemove&&e.deletionPosition.hasSameParentAs(t.sourcePosition)&&r.containsPosition(e.sourcePosition)?[new mf(0)]:(e.sourcePosition.hasSameParentAs(t.targetPosition)&&(e.howMany+=t.howMany),e.sourcePosition.hasSameParentAs(t.sourcePosition)&&(e.howMany-=t.howMany),e.sourcePosition=e.sourcePosition._getTransformedByMoveOperation(t),e.targetPosition=e.targetPosition._getTransformedByMoveOperation(t),e.graveyardPosition.isEqual(t.targetPosition)||(e.graveyardPosition=e.graveyardPosition._getTransformedByMoveOperation(t)),[e])})),Y(q,J,((e,t,n)=>{if(t.graveyardPosition&&(e.graveyardPosition=e.graveyardPosition._getTransformedByDeletion(t.graveyardPosition,1),e.deletionPosition.isEqual(t.graveyardPosition)&&(e.howMany=t.howMany)),e.targetPosition.isEqual(t.splitPosition)){let r=t.howMany!=0,i=t.graveyardPosition&&e.deletionPosition.isEqual(t.graveyardPosition);if(r||i||n.abRelation==`mergeTargetNotMoved`)return e.sourcePosition=e.sourcePosition._getTransformedBySplitOperation(t),[e]}if(e.sourcePosition.isEqual(t.splitPosition)){if(n.abRelation==`mergeSourceNotMoved`)return e.howMany=0,e.targetPosition=e.targetPosition._getTransformedBySplitOperation(t),[e];if(n.abRelation==`mergeSameElement`||e.sourcePosition.offset>0)return e.sourcePosition=t.moveTargetPosition.clone(),e.targetPosition=e.targetPosition._getTransformedBySplitOperation(t),[e]}return e.sourcePosition.hasSameParentAs(t.splitPosition)&&(e.howMany=t.splitPosition.offset),e.sourcePosition=e.sourcePosition._getTransformedBySplitOperation(t),e.targetPosition=e.targetPosition._getTransformedBySplitOperation(t),[e]})),Y(G,df,((e,t)=>{let n=W._createFromPositionAndShift(e.sourcePosition,e.howMany)._getTransformedByInsertOperation(t,!1)[0];return e.sourcePosition=n.start,e.howMany=n.end.offset-n.start.offset,e.targetPosition.isEqual(t.position)||(e.targetPosition=e.targetPosition._getTransformedByInsertOperation(t)),[e]})),Y(G,G,((e,t,n)=>{let r=W._createFromPositionAndShift(e.sourcePosition,e.howMany),i=W._createFromPositionAndShift(t.sourcePosition,t.howMany),a,o=n.aIsStrong,s=!n.aIsStrong;if(n.abRelation==`insertBefore`||n.baRelation==`insertAfter`?s=!0:n.abRelation!=`insertAfter`&&n.baRelation!=`insertBefore`||(s=!1),a=e.targetPosition.isEqual(t.targetPosition)&&s?e.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany):e.targetPosition._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),Df(e,t)&&Df(t,e))return[t.getReversed()];if(r.containsPosition(t.targetPosition)&&r.containsRange(i,!0))return r.start=r.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),r.end=r.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),Of([r],a);if(i.containsPosition(e.targetPosition)&&i.containsRange(r,!0))return r.start=r.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),r.end=r.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),Of([r],a);let c=Ae(e.sourcePosition.getParentPath(),t.sourcePosition.getParentPath());if(c==`prefix`||c==`extension`)return r.start=r.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),r.end=r.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),Of([r],a);e.type!=`remove`||t.type==`remove`||n.aWasUndone||n.forceWeakRemove?e.type==`remove`||t.type!=`remove`||n.bWasUndone||n.forceWeakRemove||(o=!1):o=!0;let l=[],u=r.getDifference(i);for(let e of u){e.start=e.start._getTransformedByDeletion(t.sourcePosition,t.howMany),e.end=e.end._getTransformedByDeletion(t.sourcePosition,t.howMany);let n=Ae(e.start.getParentPath(),t.getMovedRangeStart().getParentPath())==`same`,r=e._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,n);l.push(...r)}let d=r.getIntersection(i);return d!==null&&o&&(d.start=d.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),d.end=d.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),l.length===0?l.push(d):l.length==1?i.start.isBefore(r.start)||i.start.isEqual(r.start)?l.unshift(d):l.push(d):l.splice(1,0,d)),l.length===0?[new mf(e.baseVersion)]:Of(l,a)})),Y(G,J,((e,t,n)=>{let r=e.targetPosition.clone();e.targetPosition.isEqual(t.insertionPosition)&&t.graveyardPosition&&n.abRelation!=`moveTargetAfter`||(r=e.targetPosition._getTransformedBySplitOperation(t));let i=W._createFromPositionAndShift(e.sourcePosition,e.howMany);if(i.end.isEqual(t.insertionPosition))return t.graveyardPosition||e.howMany++,e.targetPosition=r,[e];if(i.start.hasSameParentAs(t.splitPosition)&&i.containsPosition(t.splitPosition)){let e=new W(t.splitPosition,i.end);return e=e._getTransformedBySplitOperation(t),Of([new W(i.start,t.splitPosition),e],r)}e.targetPosition.isEqual(t.splitPosition)&&n.abRelation==`insertAtSource`&&(r=t.moveTargetPosition),e.targetPosition.isEqual(t.insertionPosition)&&n.abRelation==`insertBetween`&&(r=e.targetPosition);let a=[i._getTransformedBySplitOperation(t)];if(t.graveyardPosition){let r=i.start.isEqual(t.graveyardPosition)||i.containsPosition(t.graveyardPosition);e.howMany>1&&r&&!n.aWasUndone&&a.push(W._createFromPositionAndShift(t.insertionPosition,1))}return Of(a,r)})),Y(G,q,((e,t,n)=>{let r=W._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.deletionPosition.hasSameParentAs(e.sourcePosition)&&r.containsPosition(t.sourcePosition)){if(e.type!=`remove`||n.forceWeakRemove){if(e.howMany==1)return n.bWasUndone?(e.sourcePosition=t.graveyardPosition.clone(),e.targetPosition=e.targetPosition._getTransformedByMergeOperation(t),[e]):[new mf(0)]}else if(!n.aWasUndone){let n=[],r=t.graveyardPosition.clone(),i=t.targetPosition._getTransformedByMergeOperation(t);e.howMany>1&&(n.push(new G(e.sourcePosition,e.howMany-1,e.targetPosition,0)),r=r._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany-1),i=i._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany-1));let a=t.deletionPosition._getCombined(e.sourcePosition,e.targetPosition),o=new G(r,1,a,0),s=o.getMovedRangeStart().path.slice();s.push(0);let c=new U(o.targetPosition.root,s);i=i._getTransformedByMove(r,a,1);let l=new G(i,t.howMany,c,0);return n.push(o),n.push(l),n}}let i=W._createFromPositionAndShift(e.sourcePosition,e.howMany)._getTransformedByMergeOperation(t);return e.sourcePosition=i.start,e.howMany=i.end.offset-i.start.offset,e.targetPosition=e.targetPosition._getTransformedByMergeOperation(t),[e]})),Y(hf,df,((e,t)=>(e.position=e.position._getTransformedByInsertOperation(t),[e]))),Y(hf,q,((e,t)=>e.position.isEqual(t.deletionPosition)?(e.position=t.graveyardPosition.clone(),e.position.stickiness=`toNext`,[e]):(e.position=e.position._getTransformedByMergeOperation(t),[e]))),Y(hf,G,((e,t)=>(e.position=e.position._getTransformedByMoveOperation(t),[e]))),Y(hf,hf,((e,t,n)=>{if(e.position.isEqual(t.position)){if(!n.aIsStrong)return[new mf(0)];e.oldName=t.newName}return[e]})),Y(hf,J,((e,t)=>Ae(e.position.path,t.splitPosition.getParentPath())==`same`&&!t.graveyardPosition?[e,new hf(e.position.getShiftedBy(1),e.oldName,e.newName,0)]:(e.position=e.position._getTransformedBySplitOperation(t),[e]))),Y(gf,gf,((e,t,n)=>{if(e.root===t.root&&e.key===t.key){if(!n.aIsStrong||e.newValue===t.newValue)return[new mf(0)];e.oldValue=t.newValue}return[e]})),Y(J,df,((e,t)=>(e.splitPosition.hasSameParentAs(t.position)&&e.splitPosition.offset<t.position.offset&&(e.howMany+=t.howMany),e.splitPosition=e.splitPosition._getTransformedByInsertOperation(t),e.insertionPosition=e.insertionPosition._getTransformedByInsertOperation(t),[e]))),Y(J,q,((e,t,n)=>{if(!e.graveyardPosition&&!n.bWasUndone&&e.splitPosition.hasSameParentAs(t.sourcePosition)){let n=t.graveyardPosition.path.slice();n.push(0);let r=new J(new U(t.graveyardPosition.root,n),0,J.getInsertionPosition(new U(t.graveyardPosition.root,n)),null,0);return e.splitPosition=e.splitPosition._getTransformedByMergeOperation(t),e.insertionPosition=J.getInsertionPosition(e.splitPosition),e.graveyardPosition=r.insertionPosition.clone(),e.graveyardPosition.stickiness=`toNext`,[r,e]}return e.splitPosition.hasSameParentAs(t.deletionPosition)&&!e.splitPosition.isAfter(t.deletionPosition)&&e.howMany--,e.splitPosition.hasSameParentAs(t.targetPosition)&&(e.howMany+=t.howMany),e.splitPosition=e.splitPosition._getTransformedByMergeOperation(t),e.insertionPosition=J.getInsertionPosition(e.splitPosition),e.graveyardPosition&&=e.graveyardPosition._getTransformedByMergeOperation(t),[e]})),Y(J,G,((e,t,n)=>{let r=W._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.graveyardPosition){let i=r.start.isEqual(e.graveyardPosition)||r.containsPosition(e.graveyardPosition);if(!n.bWasUndone&&i){let n=e.splitPosition._getTransformedByMoveOperation(t),r=e.graveyardPosition._getTransformedByMoveOperation(t),i=r.path.slice();i.push(0);let a=new U(r.root,i);return[new G(n,e.howMany,a,0)]}e.graveyardPosition=e.graveyardPosition._getTransformedByMoveOperation(t)}let i=e.splitPosition.isEqual(t.targetPosition);if(i&&(n.baRelation==`insertAtSource`||n.abRelation==`splitBefore`))return e.howMany+=t.howMany,e.splitPosition=e.splitPosition._getTransformedByDeletion(t.sourcePosition,t.howMany),e.insertionPosition=J.getInsertionPosition(e.splitPosition),[e];if(i&&n.abRelation&&n.abRelation.howMany){let{howMany:t,offset:r}=n.abRelation;return e.howMany+=t,e.splitPosition=e.splitPosition.getShiftedBy(r),[e]}if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&r.containsPosition(e.splitPosition)){let n=t.howMany-(e.splitPosition.offset-t.sourcePosition.offset);return e.howMany-=n,e.splitPosition.hasSameParentAs(t.targetPosition)&&e.splitPosition.offset<t.targetPosition.offset&&(e.howMany+=t.howMany),e.splitPosition=t.sourcePosition.clone(),e.insertionPosition=J.getInsertionPosition(e.splitPosition),[e]}return t.sourcePosition.isEqual(t.targetPosition)||(e.splitPosition.hasSameParentAs(t.sourcePosition)&&e.splitPosition.offset<=t.sourcePosition.offset&&(e.howMany-=t.howMany),e.splitPosition.hasSameParentAs(t.targetPosition)&&e.splitPosition.offset<t.targetPosition.offset&&(e.howMany+=t.howMany)),e.splitPosition.stickiness=`toNone`,e.splitPosition=e.splitPosition._getTransformedByMoveOperation(t),e.splitPosition.stickiness=`toNext`,e.graveyardPosition?e.insertionPosition=e.insertionPosition._getTransformedByMoveOperation(t):e.insertionPosition=J.getInsertionPosition(e.splitPosition),[e]})),Y(J,J,((e,t,n)=>{if(e.splitPosition.isEqual(t.splitPosition)){if(!e.graveyardPosition&&!t.graveyardPosition||e.graveyardPosition&&t.graveyardPosition&&e.graveyardPosition.isEqual(t.graveyardPosition))return[new mf(0)];if(n.abRelation==`splitBefore`)return e.howMany=0,e.graveyardPosition=e.graveyardPosition._getTransformedBySplitOperation(t),[e]}if(e.graveyardPosition&&t.graveyardPosition&&e.graveyardPosition.isEqual(t.graveyardPosition)){let r=e.splitPosition.root.rootName==`$graveyard`,i=t.splitPosition.root.rootName==`$graveyard`;if(i&&!r||!(r&&!i)&&n.aIsStrong){let n=[];return t.howMany&&n.push(new G(t.moveTargetPosition,t.howMany,t.splitPosition,0)),e.howMany&&n.push(new G(e.splitPosition,e.howMany,e.moveTargetPosition,0)),n}return[new mf(0)]}if(e.graveyardPosition&&=e.graveyardPosition._getTransformedBySplitOperation(t),e.splitPosition.isEqual(t.insertionPosition)&&n.abRelation==`splitBefore`)return e.howMany++,[e];if(t.splitPosition.isEqual(e.insertionPosition)&&n.baRelation==`splitBefore`){let n=t.insertionPosition.path.slice();n.push(0);let r=new U(t.insertionPosition.root,n);return[e,new G(e.insertionPosition,1,r,0)]}return e.splitPosition.hasSameParentAs(t.splitPosition)&&e.splitPosition.offset<t.splitPosition.offset&&(e.howMany-=t.howMany),e.splitPosition=e.splitPosition._getTransformedBySplitOperation(t),e.insertionPosition=J.getInsertionPosition(e.splitPosition),[e]}));class kf extends x(U){constructor(e,t,n=`toNone`){if(super(e,t,n),!this.root.is(`rootElement`))throw new y(`model-liveposition-root-not-rootelement`,e);Af.call(this)}detach(){this.stopListening()}toPosition(){return new U(this.root,this.path.slice(),this.stickiness)}static fromPosition(e,t){return new this(e.root,e.path.slice(),t||e.stickiness)}}function Af(){this.listenTo(this.root.document.model,`applyOperation`,((e,t)=>{let n=t[0];n.isDocumentOperation&&jf.call(this,n)}),{priority:`low`})}function jf(e){let t=this.getTransformedByOperation(e);if(!this.isEqual(t)){let e=this.toPosition();this.path=t.path,this.root=t.root,this.fire(`change`,e)}}kf.prototype.is=function(e){return e===`livePosition`||e===`model:livePosition`||e==`position`||e===`model:position`};class Mf{constructor(e={}){typeof e==`string`&&(e=e===`transparent`?{isUndoable:!1}:{},b(`batch-constructor-deprecated-string-type`));let{isUndoable:t=!0,isLocal:n=!0,isUndo:r=!1,isTyping:i=!1}=e;this.operations=[],this.isUndoable=t,this.isLocal=n,this.isUndo=r,this.isTyping=i}get type(){return b(`batch-type-deprecated`),`default`}get baseVersion(){for(let e of this.operations)if(e.baseVersion!==null)return e.baseVersion;return null}addOperation(e){return e.batch=this,this.operations.push(e),e}}class Nf{constructor(e){this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set,this._markerCollection=e}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(e){let t=e;switch(t.type){case`insert`:if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case`addAttribute`:case`removeAttribute`:case`changeAttribute`:for(let e of t.range.getItems({shallow:!0}))this._isInInsertedElement(e.parent)||this._markAttribute(e);break;case`remove`:case`move`:case`reinsert`:{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;let e=this._isInInsertedElement(t.sourcePosition.parent),n=this._isInInsertedElement(t.targetPosition.parent);e||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),n||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case`rename`:{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);let e=W._createFromPositionAndShift(t.position,1);for(let t of this._markerCollection.getMarkersIntersectingRange(e)){let e=t.getData();this.bufferMarkerChange(t.name,e,e)}break}case`split`:{let e=t.splitPosition.parent;this._isInInsertedElement(e)||this._markRemove(e,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case`merge`:{let e=t.sourcePosition.parent;this._isInInsertedElement(e.parent)||this._markRemove(e.parent,e.startOffset,1);let n=t.graveyardPosition.parent;this._markInsert(n,t.graveyardPosition.offset,1);let r=t.targetPosition.parent;this._isInInsertedElement(r)||this._markInsert(r,t.targetPosition.offset,e.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(e,t,n){let r=this._changedMarkers.get(e);r?(r.newMarkerData=n,r.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{newMarkerData:n,oldMarkerData:t})}getMarkersToRemove(){let e=[];for(let[t,n]of this._changedMarkers)n.oldMarkerData.range!=null&&e.push({name:t,range:n.oldMarkerData.range});return e}getMarkersToAdd(){let e=[];for(let[t,n]of this._changedMarkers)n.newMarkerData.range!=null&&e.push({name:t,range:n.newMarkerData.range});return e}getChangedMarkers(){return Array.from(this._changedMarkers).map((([e,t])=>({name:e,data:{oldRange:t.oldMarkerData.range,newRange:t.newMarkerData.range}})))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(let{newMarkerData:e,oldMarkerData:t}of this._changedMarkers.values()){if(e.affectsData!==t.affectsData)return!0;if(e.affectsData){let n=e.range&&!t.range,r=!e.range&&t.range,i=e.range&&t.range&&!e.range.isEqual(t.range);if(n||r||i)return!0}}return!1}getChanges(e={}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let t=[];for(let e of this._changesInElement.keys()){let n=this._changesInElement.get(e).sort(((e,t)=>e.offset===t.offset?e.type==t.type?0:e.type==`remove`?-1:1:e.offset<t.offset?-1:1)),r=this._elementSnapshots.get(e),i=Pf(e.getChildren()),a=Ff(r.length,n),o=0,s=0;for(let n of a)if(n===`i`)t.push(this._getInsertDiff(e,o,i[o])),o++;else if(n===`r`)t.push(this._getRemoveDiff(e,o,r[s])),s++;else if(n===`a`){let n=i[o].attributes,a=r[s].attributes,c;if(i[o].name==`$text`)c=new W(U._createAt(e,o),U._createAt(e,o+1));else{let t=e.offsetToIndex(o);c=new W(U._createAt(e,o),U._createAt(e.getChild(t),0))}t.push(...this._getAttributesDiff(c,a,n)),o++,s++}else o++,s++}t.sort(((e,t)=>e.position.root==t.position.root?e.position.isEqual(t.position)?e.changeCount-t.changeCount:e.position.isBefore(t.position)?-1:1:e.position.root.rootName<t.position.root.rootName?-1:1));for(let e=1,n=0;e<t.length;e++){let r=t[n],i=t[e],a=r.type==`remove`&&i.type==`remove`&&r.name==`$text`&&i.name==`$text`&&r.position.isEqual(i.position),o=r.type==`insert`&&i.type==`insert`&&r.name==`$text`&&i.name==`$text`&&r.position.parent==i.position.parent&&r.position.offset+r.length==i.position.offset,s=r.type==`attribute`&&i.type==`attribute`&&r.position.parent==i.position.parent&&r.range.isFlat&&i.range.isFlat&&r.position.offset+r.length==i.position.offset&&r.attributeKey==i.attributeKey&&r.attributeOldValue==i.attributeOldValue&&r.attributeNewValue==i.attributeNewValue;a||o||s?(r.length++,s&&(r.range.end=r.range.end.getShiftedBy(1)),t[e]=null):n=e}t=t.filter((e=>e));for(let e of t)delete e.changeCount,e.type==`attribute`&&(delete e.position,delete e.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t,this._cachedChanges=t.filter(If),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(e){if(this._isInInsertedElement(e.parent))return;this._markRemove(e.parent,e.startOffset,e.offsetSize),this._markInsert(e.parent,e.startOffset,e.offsetSize),this._refreshedItems.add(e);let t=W._createOn(e);for(let e of this._markerCollection.getMarkersIntersectingRange(t)){let t=e.getData();this.bufferMarkerChange(e.name,t,t)}this._cachedChanges=null}_markInsert(e,t,n){let r={type:`insert`,offset:t,howMany:n,count:this._changeCount++};this._markChange(e,r)}_markRemove(e,t,n){let r={type:`remove`,offset:t,howMany:n,count:this._changeCount++};this._markChange(e,r),this._removeAllNestedChanges(e,t,n)}_markAttribute(e){let t={type:`attribute`,offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);let n=this._getChangesForElement(e);this._handleChange(t,n),n.push(t);for(let e=0;e<n.length;e++)n[e].howMany<1&&(n.splice(e,1),e--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,Pf(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(let n of t){let r=e.offset+e.howMany,i=n.offset+n.howMany;if(e.type==`insert`&&(n.type==`insert`&&(e.offset<=n.offset?n.offset+=e.howMany:e.offset<i&&(n.howMany+=e.nodesToHandle,e.nodesToHandle=0)),n.type==`remove`&&e.offset<n.offset&&(n.offset+=e.howMany),n.type==`attribute`)){if(e.offset<=n.offset)n.offset+=e.howMany;else if(e.offset<i){let i=n.howMany;n.howMany=e.offset-n.offset,t.unshift({type:`attribute`,offset:r,howMany:i-n.howMany,count:this._changeCount++})}}if(e.type==`remove`){if(n.type==`insert`){if(r<=n.offset)n.offset-=e.howMany;else if(r<=i)if(e.offset<n.offset){let t=r-n.offset;n.offset=e.offset,n.howMany-=t,e.nodesToHandle-=t}else n.howMany-=e.nodesToHandle,e.nodesToHandle=0;else if(e.offset<=n.offset)e.nodesToHandle-=n.howMany,n.howMany=0;else if(e.offset<i){let t=i-e.offset;n.howMany-=t,e.nodesToHandle-=t}}if(n.type==`remove`&&(r<=n.offset?n.offset-=e.howMany:e.offset<n.offset&&(e.nodesToHandle+=n.howMany,n.howMany=0)),n.type==`attribute`){if(r<=n.offset)n.offset-=e.howMany;else if(e.offset<n.offset){let t=r-n.offset;n.offset=e.offset,n.howMany-=t}else if(e.offset<i)if(r<=i){let r=n.howMany;n.howMany=e.offset-n.offset;let i=r-n.howMany-e.nodesToHandle;t.unshift({type:`attribute`,offset:e.offset,howMany:i,count:this._changeCount++})}else n.howMany-=i-e.offset}}if(e.type==`attribute`){if(n.type==`insert`)if(e.offset<n.offset&&r>n.offset){if(r>i){let e={type:`attribute`,offset:i,howMany:r-i,count:this._changeCount++};this._handleChange(e,t),t.push(e)}e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=n.offset&&e.offset<i&&(r>i?(e.nodesToHandle=r-i,e.offset=i):e.nodesToHandle=0);if(n.type==`remove`&&e.offset<n.offset&&r>n.offset){let i={type:`attribute`,offset:n.offset,howMany:r-n.offset,count:this._changeCount++};this._handleChange(i,t),t.push(i),e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}n.type==`attribute`&&(e.offset>=n.offset&&r<=i?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=n.offset&&r>=i&&(n.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,n){return{type:`insert`,position:U._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,n){return{type:`remove`,position:U._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,n){let r=[];n=new Map(n);for(let[i,a]of t){let t=n.has(i)?n.get(i):null;t!==a&&r.push({type:`attribute`,position:e.start,range:e.clone(),length:1,attributeKey:i,attributeOldValue:a,attributeNewValue:t,changeCount:this._changeCount++}),n.delete(i)}for(let[t,i]of n)r.push({type:`attribute`,position:e.start,range:e.clone(),length:1,attributeKey:t,attributeOldValue:null,attributeNewValue:i,changeCount:this._changeCount++});return r}_isInInsertedElement(e){let t=e.parent;if(!t)return!1;let n=this._changesInElement.get(t),r=e.startOffset;if(n){for(let e of n)if(e.type==`insert`&&r>=e.offset&&r<e.offset+e.howMany)return!0}return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,n){let r=new W(U._createAt(e,t),U._createAt(e,t+n));for(let e of r.getItems({shallow:!0}))e.is(`element`)&&(this._elementSnapshots.delete(e),this._changesInElement.delete(e),this._removeAllNestedChanges(e,0,e.maxOffset))}}function Pf(e){let t=[];for(let n of e)if(n.is(`$text`))for(let e=0;e<n.data.length;e++)t.push({name:`$text`,attributes:new Map(n.getAttributes())});else t.push({name:n.name,attributes:new Map(n.getAttributes())});return t}function Ff(e,t){let n=[],r=0,i=0;for(let e of t){if(e.offset>r){for(let t=0;t<e.offset-r;t++)n.push(`e`);i+=e.offset-r}if(e.type==`insert`){for(let t=0;t<e.howMany;t++)n.push(`i`);r=e.offset+e.howMany}else if(e.type==`remove`){for(let t=0;t<e.howMany;t++)n.push(`r`);r=e.offset,i+=e.howMany}else n.push(...`a`.repeat(e.howMany).split(``)),r=e.offset+e.howMany,i+=e.howMany}if(i<e)for(let t=0;t<e-i-r;t++)n.push(`e`);return n}function If(e){let t=`position`in e&&e.position.root.rootName==`$graveyard`,n=`range`in e&&e.range.root.rootName==`$graveyard`;return!t&&!n}class Lf{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(e){this._operations.length&&e>this._version+1&&this._gaps.set(this._version,e),this._version=e}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(e){if(e.baseVersion!==this.version)throw new y(`model-document-history-addoperation-incorrect-version`,this,{operation:e,historyVersion:this.version});this._operations.push(e),this._version++,this._baseVersionToOperationIndex.set(e.baseVersion,this._operations.length-1)}getOperations(e,t=this.version){if(!this._operations.length)return[];let n=this._operations[0];e===void 0&&(e=n.baseVersion);let r=t-1;for(let[t,n]of this._gaps)e>t&&e<n&&(e=n),r>t&&r<n&&(r=t-1);if(r<n.baseVersion||e>this.lastOperation.baseVersion)return[];let i=this._baseVersionToOperationIndex.get(e);i===void 0&&(i=0);let a=this._baseVersionToOperationIndex.get(r);return a===void 0&&(a=this._operations.length-1),this._operations.slice(i,a+1)}getOperation(e){let t=this._baseVersionToOperationIndex.get(e);if(t!==void 0)return this._operations[t]}setOperationAsUndone(e,t){this._undoPairs.set(t,e),this._undoneOperations.add(e)}isUndoingOperation(e){return this._undoPairs.has(e)}isUndoneOperation(e){return this._undoneOperations.has(e)}getUndoneOperation(e){return this._undoPairs.get(e)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}class Rf extends H{constructor(e,t,n=`main`){super(t),this._document=e,this.rootName=n}get document(){return this._document}toJSON(){return this.rootName}}Rf.prototype.is=function(e,t){return t?t===this.name&&(e===`rootElement`||e===`model:rootElement`||e===`element`||e===`model:element`):e===`rootElement`||e===`model:rootElement`||e===`element`||e===`model:element`||e===`node`||e===`model:node`};let zf=`$graveyard`;class Bf extends x(){constructor(e){super(),this.model=e,this.history=new Lf,this.selection=new ed(this),this.roots=new Ma({idProperty:`rootName`}),this.differ=new Nf(e.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot(`$root`,zf),this.listenTo(e,`applyOperation`,((e,t)=>{let n=t[0];n.isDocumentOperation&&this.differ.bufferOperation(n)}),{priority:`high`}),this.listenTo(e,`applyOperation`,((e,t)=>{let n=t[0];n.isDocumentOperation&&this.history.addOperation(n)}),{priority:`low`}),this.listenTo(this.selection,`change`,(()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0})),this.listenTo(e.markers,`update`,((e,t,n,r,i)=>{let a={...t.getData(),range:r};this.differ.bufferMarkerChange(t.name,i,a),n===null&&t.on(`change`,((e,n)=>{let r=t.getData();this.differ.bufferMarkerChange(t.name,{...r,range:n},r)}))}))}get version(){return this.history.version}set version(e){this.history.version=e}get graveyard(){return this.getRoot(zf)}createRoot(e=`$root`,t=`main`){if(this.roots.get(t))throw new y(`model-document-createroot-name-exists`,this,{name:t});let n=new Rf(this,e,t);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e=`main`){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,(e=>e.rootName)).filter((e=>e!=zf))}registerPostFixer(e){this._postFixers.add(e)}toJSON(){let e=qo(this);return e.selection=`[engine.model.DocumentSelection]`,e.model=`[engine.model.Model]`,e}_handleChangeBlock(e){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(e),this.selection.refresh(),this.differ.hasDataChanges()?this.fire(`change:data`,e.batch):this.fire(`change`,e.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(let e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){let e=this._getDefaultRoot(),t=this.model,n=t.schema,r=t.createPositionFromPath(e,[0]);return n.getNearestSelectionRange(r)||t.createRange(r)}_validateSelectionRange(e){return Vf(e.start)&&Vf(e.end)}_callPostFixers(e){let t=!1;do for(let n of this._postFixers)if(this.selection.refresh(),t=n(e),t)break;while(t)}}function Vf(e){let t=e.textNode;if(t){let n=t.data,r=e.offset-t.startOffset;return!Ia(n,r)&&!La(n,r)}return!0}class Hf extends x(){constructor(){super(...arguments),this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){let t=e instanceof Uf?e.name:e;return this._markers.has(t)}get(e){return this._markers.get(e)||null}_set(e,t,n=!1,r=!1){let i=e instanceof Uf?e.name:e;if(i.includes(`,`))throw new y(`markercollection-incorrect-marker-name`,this);let a=this._markers.get(i);if(a){let e=a.getData(),o=a.getRange(),s=!1;return o.isEqual(t)||(a._attachLiveRange(Xu.fromRange(t)),s=!0),n!=a.managedUsingOperations&&(a._managedUsingOperations=n,s=!0),typeof r==`boolean`&&r!=a.affectsData&&(a._affectsData=r,s=!0),s&&this.fire(`update:${i}`,a,o,t,e),a}let o=new Uf(i,Xu.fromRange(t),n,r);return this._markers.set(i,o),this.fire(`update:${i}`,o,null,t,{...o.getData(),range:null}),o}_remove(e){let t=e instanceof Uf?e.name:e,n=this._markers.get(t);return!!n&&(this._markers.delete(t),this.fire(`update:${t}`,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(e){let t=e instanceof Uf?e.name:e,n=this._markers.get(t);if(!n)throw new y(`markercollection-refresh-marker-not-exists`,this);let r=n.getRange();this.fire(`update:${t}`,n,r,r,n.getData())}*getMarkersAtPosition(e){for(let t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(let t of this)t.getRange().getIntersection(e)!==null&&(yield t)}destroy(){for(let e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(let t of this._markers.values())t.name.startsWith(e+`:`)&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}class Uf extends x(Ou){constructor(e,t,n,r){super(),this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=n,this._affectsData=r}get managedUsingOperations(){if(!this._liveRange)throw new y(`marker-destroyed`,this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new y(`marker-destroyed`,this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new y(`marker-destroyed`,this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new y(`marker-destroyed`,this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new y(`marker-destroyed`,this);return this._liveRange.toRange()}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate(`change:range`).to(this),e.delegate(`change:content`).to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating(`change:range`,this),this._liveRange.stopDelegating(`change:content`,this),this._liveRange.detach(),this._liveRange=null}}Uf.prototype.is=function(e){return e===`marker`||e===`model:marker`};class Wf extends nf{constructor(e,t){super(null),this.sourcePosition=e.clone(),this.howMany=t}get type(){return`detach`}toJSON(){let e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e}_validate(){if(this.sourcePosition.root.document)throw new y(`detach-operation-on-document-node`,this)}_execute(){af(W._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return`DetachOperation`}}class Gf extends Ou{constructor(e){super(),this.markers=new Map,this._children=new Au,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get nextSibling(){return null}get previousSibling(){return null}get root(){return this}get parent(){return null}get document(){return null}getAncestors(){return[]}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(let n of e)t=t.getChild(t.offsetToIndex(n));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){let e=[];for(let t of this._children)e.push(t.toJSON());return e}static fromJSON(e){let t=[];for(let n of e)n.name?t.push(H.fromJSON(n)):t.push(V.fromJSON(n));return new Gf(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){let n=function(e){return typeof e==`string`?[new V(e)]:(je(e)||(e=[e]),Array.from(e).map((e=>typeof e==`string`?new V(e):e instanceof ju?new V(e.data,e.getAttributes()):e)))}(t);for(let e of n)e.parent!==null&&e._remove(),e.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){let n=this._children._removeNodes(e,t);for(let e of n)e.parent=null;return n}}Gf.prototype.is=function(e){return e===`documentFragment`||e===`model:documentFragment`};class Kf{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new V(e,t)}createElement(e,t){return new H(e,t)}createDocumentFragment(){return new Gf}cloneElement(e,t=!0){return e._clone(t)}insert(e,t,n=0){if(this._assertWriterUsedCorrectly(),e instanceof V&&e.data==``)return;let r=U._createAt(t,n);if(e.parent){if(Zf(e.root,r.root))return void this.move(W._createOn(e),r);if(e.root.document)throw new y(`model-writer-insert-forbidden-move`,this);this.remove(e)}let i=new df(r,e,r.root.document?r.root.document.version:null);if(e instanceof V&&(i.shouldReceiveAttributes=!0),this.batch.addOperation(i),this.model.applyOperation(i),e instanceof Gf)for(let[t,n]of e.markers){let e=U._createAt(n.root,0),i={range:new W(n.start._getCombined(e,r),n.end._getCombined(e,r)),usingOperation:!0,affectsData:!0};this.model.markers.has(t)?this.updateMarker(t,i):this.addMarker(t,i)}}insertText(e,t,n,r){t instanceof Gf||t instanceof H||t instanceof U?this.insert(this.createText(e),t,n):this.insert(this.createText(e,t),n,r)}insertElement(e,t,n,r){t instanceof Gf||t instanceof H||t instanceof U?this.insert(this.createElement(e),t,n):this.insert(this.createElement(e,t),n,r)}append(e,t){this.insert(e,t,`end`)}appendText(e,t,n){t instanceof Gf||t instanceof H?this.insert(this.createText(e),t,`end`):this.insert(this.createText(e,t),n,`end`)}appendElement(e,t,n){t instanceof Gf||t instanceof H?this.insert(this.createElement(e),t,`end`):this.insert(this.createElement(e,t),n,`end`)}setAttribute(e,t,n){if(this._assertWriterUsedCorrectly(),n instanceof W){let r=n.getMinimalFlatRanges();for(let n of r)qf(this,e,t,n)}else Jf(this,e,t,n)}setAttributes(e,t){for(let[n,r]of Fa(e))this.setAttribute(n,r,t)}removeAttribute(e,t){if(this._assertWriterUsedCorrectly(),t instanceof W){let n=t.getMinimalFlatRanges();for(let t of n)qf(this,e,null,t)}else Jf(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();let t=e=>{for(let t of e.getAttributeKeys())this.removeAttribute(t,e)};if(e instanceof W)for(let n of e.getItems())t(n);else t(e)}move(e,t,n){if(this._assertWriterUsedCorrectly(),!(e instanceof W))throw new y(`writer-move-invalid-range`,this);if(!e.isFlat)throw new y(`writer-move-range-not-flat`,this);let r=U._createAt(t,n);if(r.isEqual(e.start))return;if(this._addOperationForAffectedMarkers(`move`,e),!Zf(e.root,r.root))throw new y(`writer-move-different-document`,this);let i=e.root.document?e.root.document.version:null,a=new G(e.start,e.end.offset-e.start.offset,r,i);this.batch.addOperation(a),this.model.applyOperation(a)}remove(e){this._assertWriterUsedCorrectly();let t=(e instanceof W?e:W._createOn(e)).getMinimalFlatRanges().reverse();for(let e of t)this._addOperationForAffectedMarkers(`move`,e),Xf(e.start,e.end.offset-e.start.offset,this.batch,this.model)}merge(e){this._assertWriterUsedCorrectly();let t=e.nodeBefore,n=e.nodeAfter;if(this._addOperationForAffectedMarkers(`merge`,e),!(t instanceof H))throw new y(`writer-merge-no-element-before`,this);if(!(n instanceof H))throw new y(`writer-merge-no-element-after`,this);e.root.document?this._merge(e):this._mergeDetached(e)}createPositionFromPath(e,t,n){return this.model.createPositionFromPath(e,t,n)}createPositionAt(e,t){return this.model.createPositionAt(e,t)}createPositionAfter(e){return this.model.createPositionAfter(e)}createPositionBefore(e){return this.model.createPositionBefore(e)}createRange(e,t){return this.model.createRange(e,t)}createRangeIn(e){return this.model.createRangeIn(e)}createRangeOn(e){return this.model.createRangeOn(e)}createSelection(...e){return this.model.createSelection(...e)}_mergeDetached(e){let t=e.nodeBefore,n=e.nodeAfter;this.move(W._createIn(n),U._createAt(t,`end`)),this.remove(n)}_merge(e){let t=U._createAt(e.nodeBefore,`end`),n=U._createAt(e.nodeAfter,0),r=e.root.document.graveyard,i=new U(r,[0]),a=e.root.document.version,o=new q(n,e.nodeAfter.maxOffset,t,i,a);this.batch.addOperation(o),this.model.applyOperation(o)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof H))throw new y(`writer-rename-not-element-instance`,this);let n=e.root.document?e.root.document.version:null,r=new hf(U._createBefore(e),e.name,t,n);this.batch.addOperation(r),this.model.applyOperation(r)}split(e,t){this._assertWriterUsedCorrectly();let n,r,i=e.parent;if(!i.parent)throw new y(`writer-split-element-no-parent`,this);if(t||=i.parent,!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new y(`writer-split-invalid-limit-element`,this);do{let t=i.root.document?i.root.document.version:null,a=i.maxOffset-e.offset,o=J.getInsertionPosition(e),s=new J(e,a,o,null,t);this.batch.addOperation(s),this.model.applyOperation(s),n||r||(n=i,r=e.parent.nextSibling),i=(e=this.createPositionAfter(e.parent)).parent}while(i!==t);return{position:e,range:new W(U._createAt(n,`end`),U._createAt(r,0))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new y(`writer-wrap-range-not-flat`,this);let n=t instanceof H?t:new H(t);if(n.childCount>0)throw new y(`writer-wrap-element-not-empty`,this);if(n.parent!==null)throw new y(`writer-wrap-element-attached`,this);this.insert(n,e.start);let r=new W(e.start.getShiftedBy(1),e.end.getShiftedBy(1));this.move(r,U._createAt(n,0))}unwrap(e){if(this._assertWriterUsedCorrectly(),e.parent===null)throw new y(`writer-unwrap-element-no-parent`,this);this.move(W._createIn(e),this.createPositionAfter(e)),this.remove(e)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||typeof t.usingOperation!=`boolean`)throw new y(`writer-addmarker-no-usingoperation`,this);let n=t.usingOperation,r=t.range,i=t.affectsData!==void 0&&t.affectsData;if(this.model.markers.has(e))throw new y(`writer-addmarker-marker-exists`,this);if(!r)throw new y(`writer-addmarker-no-range`,this);return n?(Yf(this,e,null,r,i),this.model.markers.get(e)):this.model.markers._set(e,r,n,i)}updateMarker(e,t){this._assertWriterUsedCorrectly();let n=typeof e==`string`?e:e.name,r=this.model.markers.get(n);if(!r)throw new y(`writer-updatemarker-marker-not-exists`,this);if(!t)return b(`writer-updatemarker-reconvert-using-editingcontroller`,{markerName:n}),void this.model.markers._refresh(r);let i=typeof t.usingOperation==`boolean`,a=typeof t.affectsData==`boolean`,o=a?t.affectsData:r.affectsData;if(!i&&!t.range&&!a)throw new y(`writer-updatemarker-wrong-options`,this);let s=r.getRange(),c=t.range?t.range:s;i&&t.usingOperation!==r.managedUsingOperations?t.usingOperation?Yf(this,n,null,c,o):(Yf(this,n,s,null,o),this.model.markers._set(n,c,void 0,o)):r.managedUsingOperations?Yf(this,n,s,c,o):this.model.markers._set(n,c,void 0,o)}removeMarker(e){this._assertWriterUsedCorrectly();let t=typeof e==`string`?e:e.name;if(!this.model.markers.has(t))throw new y(`writer-removemarker-no-marker`,this);let n=this.model.markers.get(t);if(!n.managedUsingOperations)return void this.model.markers._remove(t);Yf(this,t,n.getRange(),null,n.affectsData)}setSelection(...e){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(...e)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),typeof e==`string`)this._setSelectionAttribute(e,t);else for(let[t,n]of Fa(e))this._setSelectionAttribute(t,n)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),typeof e==`string`)this._removeSelectionAttribute(e);else for(let t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){let n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){let r=ed._getStoreAttributeKey(e);this.setAttribute(r,t,n.anchor.parent)}n._setAttribute(e,t)}_removeSelectionAttribute(e){let t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){let n=ed._getStoreAttributeKey(e);this.removeAttribute(n,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new y(`writer-incorrect-use`,this)}_addOperationForAffectedMarkers(e,t){for(let n of this.model.markers){if(!n.managedUsingOperations)continue;let r=n.getRange(),i=!1;if(e===`move`){let e=t;i=e.containsPosition(r.start)||e.start.isEqual(r.start)||e.containsPosition(r.end)||e.end.isEqual(r.end)}else{let e=t,n=e.nodeBefore,a=e.nodeAfter,o=r.start.parent==n&&r.start.isAtEnd,s=r.end.parent==a&&r.end.offset==0,c=r.end.nodeAfter==a,l=r.start.nodeAfter==a;i=o||s||c||l}i&&this.updateMarker(n.name,{range:r})}}}function qf(e,t,n,r){let i=e.model,a=i.document,o,s,c,l=r.start;for(let e of r.getWalker({shallow:!0}))c=e.item.getAttribute(t),o&&s!=c&&(s!=n&&u(),l=o),o=e.nextPosition,s=c;function u(){let r=new W(l,o),c=r.root.document?a.version:null,u=new K(r,t,s,n,c);e.batch.addOperation(u),i.applyOperation(u)}o instanceof U&&o!=l&&s!=n&&u()}function Jf(e,t,n,r){let i=e.model,a=i.document,o=r.getAttribute(t),s,c;if(o!=n){if(r.root===r)c=new gf(r,t,o,n,r.document?a.version:null);else{s=new W(U._createBefore(r),e.createPositionAfter(r));let i=s.root.document?a.version:null;c=new K(s,t,o,n,i)}e.batch.addOperation(c),i.applyOperation(c)}}function Yf(e,t,n,r,i){let a=e.model,o=a.document,s=new ff(t,n,r,a.markers,!!i,o.version);e.batch.addOperation(s),a.applyOperation(s)}function Xf(e,t,n,r){let i;if(e.root.document){let n=r.document;i=new G(e,t,new U(n.graveyard,[0]),n.version)}else i=new Wf(e,t);n.addOperation(i),r.applyOperation(i)}function Zf(e,t){return e===t||e instanceof Rf&&t instanceof Rf}function Qf(e){e.document.registerPostFixer((t=>function(e,t){let n=t.document.selection,r=t.schema,i=[],a=!1;for(let e of n.getRanges()){let t=$f(e,r);t&&!t.isEqual(e)?(i.push(t),a=!0):i.push(e)}return a&&e.setSelection(function(e){let t=[...e],n=new Set,r=1;for(;r<t.length;){let e=t[r],i=t.slice(0,r);for(let[a,o]of i.entries())if(!n.has(a)){if(e.isEqual(o))n.add(a);else if(e.isIntersecting(o)){n.add(a),n.add(r);let i=e.getJoined(o);t.push(i)}}r++}return t.filter(((e,t)=>!n.has(t)))}(i),{backward:n.isBackward}),!1}(t,e)))}function $f(e,t){return e.isCollapsed?function(e,t){let n=e.start,r=t.getNearestSelectionRange(n);if(!r){let e=n.getAncestors().reverse().find((e=>t.isObject(e)));return e?W._createOn(e):null}if(!r.isCollapsed)return r;let i=r.start;return n.isEqual(i)?null:new W(i)}(e,t):function(e,t){let{start:n,end:r}=e,i=t.checkChild(n,`$text`),a=t.checkChild(r,`$text`),o=t.getLimitElement(n),s=t.getLimitElement(r);if(o===s){if(i&&a)return null;if(function(e,t,n){let r=e.nodeAfter&&!n.isLimit(e.nodeAfter)||n.checkChild(e,`$text`),i=t.nodeBefore&&!n.isLimit(t.nodeBefore)||n.checkChild(t,`$text`);return r||i}(n,r,t)){let e=n.nodeAfter&&t.isSelectable(n.nodeAfter)?null:t.getNearestSelectionRange(n,`forward`),i=r.nodeBefore&&t.isSelectable(r.nodeBefore)?null:t.getNearestSelectionRange(r,`backward`);return new W(e?e.start:n,i?i.end:r)}}let c=o&&!o.is(`rootElement`),l=s&&!s.is(`rootElement`);if(c||l){let e=n.nodeAfter&&r.nodeBefore&&n.nodeAfter.parent===r.nodeBefore.parent,i=c&&(!e||!tp(n.nodeAfter,t)),a=l&&(!e||!tp(r.nodeBefore,t)),u=n,d=r;return i&&(u=U._createBefore(ep(o,t))),a&&(d=U._createAfter(ep(s,t))),new W(u,d)}return null}(e,t)}function ep(e,t){let n=e,r=n;for(;t.isLimit(r)&&r.parent;)n=r,r=r.parent;return n}function tp(e,t){return e&&t.isSelectable(e)}function np(e,t,n={}){if(t.isCollapsed)return;let r=t.getFirstRange();if(r.root.rootName==`$graveyard`)return;let i=e.schema;e.change((e=>{if(!n.doNotResetEntireContent&&function(e,t){let n=e.getLimitElement(t);if(!t.containsEntireContent(n))return!1;let r=t.getFirstRange();return r.start.parent==r.end.parent?!1:e.checkChild(n,`paragraph`)}(i,t))return void function(e,t){let n=e.model.schema.getLimitElement(t);e.remove(e.createRangeIn(n)),op(e,e.createPositionAt(n,0),t)}(e,t);let a={};if(!n.doNotAutoparagraph){let e=t.getSelectedElement();e&&Object.assign(a,i.getAttributesWithProperty(e,`copyOnReplace`,!0))}let[o,s]=function(e){let t=e.root.document.model,n=e.start,r=e.end;if(t.hasContent(e,{ignoreMarkers:!0})){let n=function(e){let t=e.parent,n=t.root.document.model.schema,r=t.getAncestors({parentFirst:!0,includeSelf:!0});for(let e of r){if(n.isLimit(e))return null;if(n.isBlock(e))return e}}(r);if(n&&r.isTouching(t.createPositionAt(n,0))){let n=t.createSelection(e);t.modifySelection(n,{direction:`backward`});let i=n.getLastPosition(),a=t.createRange(i,r);t.hasContent(a,{ignoreMarkers:!0})||(r=i)}}return[kf.fromPosition(n,`toPrevious`),kf.fromPosition(r,`toNext`)]}(r);o.isTouching(s)||e.remove(e.createRange(o,s)),n.leaveUnmerged||(function(e,t,n){let r=e.model;if(!ap(e.model.schema,t,n))return;let[i,a]=function(e,t){let n=e.getAncestors(),r=t.getAncestors(),i=0;for(;n[i]&&n[i]==r[i];)i++;return[n[i],r[i]]}(t,n);!i||!a||(!r.hasContent(i,{ignoreMarkers:!0})&&r.hasContent(a,{ignoreMarkers:!0})?ip(e,t,n,i.parent):rp(e,t,n,i.parent))}(e,o,s),i.removeDisallowedAttributes(o.parent.getChildren(),e)),sp(e,t,o),!n.doNotAutoparagraph&&function(e,t){let n=e.checkChild(t,`$text`),r=e.checkChild(t,`paragraph`);return!n&&r}(i,o)&&op(e,o,t,a),o.detach(),s.detach()}))}function rp(e,t,n,r){let i=t.parent,a=n.parent;if(i!=r&&a!=r){for(t=e.createPositionAfter(i),(n=e.createPositionBefore(a)).isEqual(t)||e.insert(a,t),e.merge(t);n.parent.isEmpty;){let t=n.parent;n=e.createPositionBefore(t),e.remove(t)}ap(e.model.schema,t,n)&&rp(e,t,n,r)}}function ip(e,t,n,r){let i=t.parent,a=n.parent;if(i!=r&&a!=r){for(t=e.createPositionAfter(i),(n=e.createPositionBefore(a)).isEqual(t)||e.insert(i,n);t.parent.isEmpty;){let n=t.parent;t=e.createPositionBefore(n),e.remove(n)}n=e.createPositionBefore(a),function(e,t){let n=t.nodeBefore,r=t.nodeAfter;n.name!=r.name&&e.rename(n,r.name),e.clearAttributes(n),e.setAttributes(Object.fromEntries(r.getAttributes()),n),e.merge(t)}(e,n),ap(e.model.schema,t,n)&&ip(e,t,n,r)}}function ap(e,t,n){let r=t.parent,i=n.parent;return r!=i&&!e.isLimit(r)&&!e.isLimit(i)&&function(e,t,n){let r=new W(e,t);for(let e of r.getWalker())if(n.isLimit(e.item))return!1;return!0}(t,n,e)}function op(e,t,n,r={}){let i=e.createElement(`paragraph`);e.model.schema.setAllowedAttributes(i,r,e),e.insert(i,t),sp(e,n,e.createPositionAt(i,0))}function sp(e,t,n){t instanceof ed?e.setSelection(n):t.setTo(n)}function cp(e,t){let n=[];Array.from(e.getItems({direction:`backward`})).map((e=>t.createRangeOn(e))).filter((t=>(t.start.isAfter(e.start)||t.start.isEqual(e.start))&&(t.end.isBefore(e.end)||t.end.isEqual(e.end)))).forEach((e=>{n.push(e.start.parent),t.remove(e)})),n.forEach((e=>{let n=e;for(;n.parent&&n.isEmpty;){let e=t.createRangeOn(n);n=n.parent,t.remove(e)}}))}class lp{constructor(e,t,n){this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null,this._nodeToSelect=null,this.model=e,this.writer=t,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._documentFragment=t.createDocumentFragment(),this._documentFragmentPosition=t.createPositionAt(this._documentFragment,0)}handleNodes(e){for(let t of Array.from(e))this._handleNode(t);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(e){let t=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(e);if(n.isAfter(t)){if(this._lastNode=e,this.position.parent!=e||!this.position.isAtEnd)throw new y(`insertcontent-invalid-insertion-position`,this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this._nodeToSelect?W._createOn(this._nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new W(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(e){if(this.schema.isObject(e))return void this._handleObject(e);let t=this._checkAndAutoParagraphToAllowedPosition(e);t||(t=this._checkAndSplitToAllowedPosition(e),t)?(this._appendToFragment(e),this._firstNode||=e,this._lastNode=e):this._handleDisallowedNode(e)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;let e=kf.fromPosition(this.position,`toNext`);this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=e.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=e.toPosition(),e.detach()}_handleObject(e){this._checkAndSplitToAllowedPosition(e)?this._appendToFragment(e):this._tryAutoparagraphing(e)}_handleDisallowedNode(e){e.is(`element`)?this.handleNodes(e.getChildren()):this._tryAutoparagraphing(e)}_appendToFragment(e){if(!this.schema.checkChild(this.position,e))throw new y(`insertcontent-wrong-position`,this,{node:e,position:this.position});this.writer.insert(e,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(e.offsetSize),this.schema.isObject(e)&&!this.schema.checkChild(this.position,`$text`)?this._nodeToSelect=e:this._nodeToSelect=null,this._filterAttributesOf.push(e)}_setAffectedBoundaries(e){this._affectedStart||=kf.fromPosition(e,`toPrevious`),this._affectedEnd&&!this._affectedEnd.isBefore(e)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=kf.fromPosition(e,`toNext`))}_mergeOnLeft(){let e=this._firstNode;if(!(e instanceof H)||!this._canMergeLeft(e))return;let t=kf._createBefore(e);t.stickiness=`toNext`;let n=kf.fromPosition(this.position,`toNext`);this._affectedStart.isEqual(t)&&(this._affectedStart.detach(),this._affectedStart=kf._createAt(t.nodeBefore,`end`,`toPrevious`)),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=kf._createAt(t.nodeBefore,`end`,`toNext`)),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_mergeOnRight(){let e=this._lastNode;if(!(e instanceof H)||!this._canMergeRight(e))return;let t=kf._createAfter(e);if(t.stickiness=`toNext`,!this.position.isEqual(t))throw new y(`insertcontent-invalid-insertion-position`,this);this.position=U._createAt(t.nodeBefore,`end`);let n=kf.fromPosition(this.position,`toPrevious`);this._affectedEnd.isEqual(t)&&(this._affectedEnd.detach(),this._affectedEnd=kf._createAt(t.nodeBefore,`end`,`toNext`)),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=kf._createAt(t.nodeBefore,0,`toPrevious`)),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_canMergeLeft(e){let t=e.previousSibling;return t instanceof H&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(t,e)}_canMergeRight(e){let t=e.nextSibling;return t instanceof H&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(e,t)}_tryAutoparagraphing(e){let t=this.writer.createElement(`paragraph`);this._getAllowedIn(this.position.parent,t)&&this.schema.checkChild(t,e)&&(t._appendChild(e),this._handleNode(t))}_checkAndAutoParagraphToAllowedPosition(e){if(this.schema.checkChild(this.position.parent,e))return!0;if(!this.schema.checkChild(this.position.parent,`paragraph`)||!this.schema.checkChild(`paragraph`,e))return!1;this._insertPartialFragment();let t=this.writer.createElement(`paragraph`);return this.writer.insert(t,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=t,this.position=this.writer.createPositionAt(t,0),!0}_checkAndSplitToAllowedPosition(e){let t=this._getAllowedIn(this.position.parent,e);if(!t)return!1;for(t!=this.position.parent&&this._insertPartialFragment();t!=this.position.parent;)if(this.position.isAtStart){let e=this.position.parent;this.position=this.writer.createPositionBefore(e),e.isEmpty&&e.parent===t&&this.writer.remove(e)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{let e=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=e,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(e,t){return this.schema.checkChild(e,t)?e:this.schema.isLimit(e)?null:this._getAllowedIn(e.parent,t)}}function up(e,t,n=`auto`){let r=e.getSelectedElement();if(r&&t.schema.isObject(r)&&!t.schema.isInline(r))return n==`before`||n==`after`?t.createRange(t.createPositionAt(r,n)):t.createRangeOn(r);let i=M(e.getSelectedBlocks());if(!i)return t.createRange(e.focus);if(i.isEmpty)return t.createRange(t.createPositionAt(i,0));let a=t.createPositionAfter(i);return e.focus.isTouching(a)?t.createRange(a):t.createRange(t.createPositionBefore(i))}function dp(e,t,n,r,i={}){if(!e.schema.isObject(t))throw new y(`insertobject-element-not-an-object`,e,{object:t});let a;a=n?n instanceof Gu||n instanceof ed?n:e.createSelection(n,r):e.document.selection;let o=a;i.findOptimalPosition&&e.schema.isBlock(t)&&(o=e.createSelection(up(a,e,i.findOptimalPosition)));let s=M(a.getSelectedBlocks()),c={};return s&&Object.assign(c,e.schema.getAttributesWithProperty(s,`copyOnReplace`,!0)),e.change((n=>{o.isCollapsed||e.deleteContent(o,{doNotAutoparagraph:!0});let r=t,a=o.anchor.parent;!e.schema.checkChild(a,t)&&e.schema.checkChild(a,`paragraph`)&&e.schema.checkChild(`paragraph`,t)&&(r=n.createElement(`paragraph`),n.insert(t,r)),e.schema.setAllowedAttributes(r,c,n);let s=e.insertContent(r,o);return s.isCollapsed||i.setSelection&&function(e,t,n,r){let i=e.model;if(n==`on`)return void e.setSelection(t,`on`);if(n!=`after`)throw new y(`insertobject-invalid-place-parameter-value`,i);let a=t.nextSibling;if(i.schema.isInline(t))return void e.setSelection(t,`after`);!(a&&i.schema.checkChild(a,`$text`))&&i.schema.checkChild(t.parent,`paragraph`)&&(a=e.createElement(`paragraph`),i.schema.setAllowedAttributes(a,r,e),i.insertContent(a,e.createPositionAfter(t))),a&&e.setSelection(a,0)}(n,t,i.setSelection,c),s}))}function fp(e,t){let{isForward:n,walker:r,unit:i,schema:a,treatEmojiAsSingleUnit:o}=e,{type:s,item:c,nextPosition:l}=t;if(s==`text`)return e.unit===`word`?function(e,t){let n=e.position.textNode;for(n||=t?e.position.nodeAfter:e.position.nodeBefore;n&&n.is(`$text`);){let r=e.position.offset-n.startOffset;if(hp(n,r,t))n=t?e.position.nodeAfter:e.position.nodeBefore;else{if(mp(n.data,r,t))break;e.next()}}return e.position}(r,n):function(e,t,n){let r=e.position.textNode;if(r){let i=r.data,a=e.position.offset-r.startOffset;for(;Ia(i,a)||t==`character`&&La(i,a)||n&&za(i,a);)e.next(),a=e.position.offset-r.startOffset}return e.position}(r,i,o);if(s==(n?`elementStart`:`elementEnd`)){if(a.isSelectable(c))return U._createAt(c,n?`after`:`before`);if(a.checkChild(l,`$text`))return l}else{if(a.isLimit(c))return void r.skip((()=>!0));if(a.checkChild(l,`$text`))return l}}function pp(e,t){let n=e.root,r=U._createAt(n,t?`end`:0);return t?new W(e,r):new W(r,e)}function mp(e,t,n){let r=t+(n?0:-1);return` ,.?!:;"-()`.includes(e.charAt(r))}function hp(e,t,n){return t===(n?e.offsetSize:0)}class gp extends C(){constructor(){super(),this.markers=new Hf,this.document=new Bf(this),this.schema=new Pd,this._pendingChanges=[],this._currentWriter=null,[`insertContent`,`insertObject`,`deleteContent`,`modifySelection`,`getSelectedContent`,`applyOperation`].forEach((e=>this.decorate(e))),this.on(`applyOperation`,((e,t)=>{t[0]._validate()}),{priority:`highest`}),this.schema.register(`$root`,{isLimit:!0}),this.schema.register(`$container`,{allowIn:[`$root`,`$container`]}),this.schema.register(`$block`,{allowIn:[`$root`,`$container`],isBlock:!0}),this.schema.register(`$blockObject`,{allowWhere:`$block`,isBlock:!0,isObject:!0}),this.schema.register(`$inlineObject`,{allowWhere:`$text`,allowAttributesOf:`$text`,isInline:!0,isObject:!0}),this.schema.register(`$text`,{allowIn:`$block`,isInline:!0,isContent:!0}),this.schema.register(`$clipboardHolder`,{allowContentOf:`$root`,allowChildren:`$text`,isLimit:!0}),this.schema.register(`$documentFragment`,{allowContentOf:`$root`,allowChildren:`$text`,isLimit:!0}),this.schema.register(`$marker`),this.schema.addChildCheck(((e,t)=>{if(t.name===`$marker`)return!0})),Qf(this),this.document.registerPostFixer(bd)}change(e){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new Mf,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}catch(e){y.rethrowUnexpectedError(e,this)}}enqueueChange(e,t){try{e?typeof e==`function`?(t=e,e=new Mf):e instanceof Mf||(e=new Mf(e)):e=new Mf,this._pendingChanges.push({batch:e,callback:t}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(e){y.rethrowUnexpectedError(e,this)}}applyOperation(e){e._execute()}insertContent(e,t,n){return function(e,t,n,r){return e.change((i=>{let a;a=n?n instanceof Gu||n instanceof ed?n:i.createSelection(n,r):e.document.selection,a.isCollapsed||e.deleteContent(a,{doNotAutoparagraph:!0});let o=new lp(e,i,a.anchor),s=[],c;if(t.is(`documentFragment`)){if(t.markers.size){let e=[];for(let[n,r]of t.markers){let{start:t,end:i}=r,a=t.isEqual(i);e.push({position:t,name:n,isCollapsed:a},{position:i,name:n,isCollapsed:a})}e.sort((({position:e},{position:t})=>e.isBefore(t)?1:-1));for(let{position:n,name:r,isCollapsed:a}of e){let e=null,o=null,c=n.parent===t&&n.isAtStart,l=n.parent===t&&n.isAtEnd;c||l?a&&(o=c?`start`:`end`):(e=i.createElement(`$marker`),i.insert(e,n)),s.push({name:r,element:e,collapsed:o})}}c=t.getChildren()}else c=[t];o.handleNodes(c);let l=o.getSelectionRange();if(t.is(`documentFragment`)&&s.length){let e=l?Xu.fromRange(l):null,t={};for(let e=s.length-1;e>=0;e--){let{name:n,element:r,collapsed:a}=s[e],c=!t[n];if(c&&(t[n]=[]),r){let e=i.createPositionAt(r,`before`);t[n].push(e),i.remove(r)}else{let e=o.getAffectedRange();if(!e){a&&t[n].push(o.position);continue}a?t[n].push(e[a]):t[n].push(c?e.start:e.end)}}for(let[e,[n,r]]of Object.entries(t))n&&r&&n.root===r.root&&i.addMarker(e,{usingOperation:!0,affectsData:!0,range:new W(n,r)});e&&(l=e.toRange(),e.detach())}l&&(a instanceof ed?i.setSelection(l):a.setTo(l));let u=o.getAffectedRange()||e.createRange(a.anchor);return o.destroy(),u}))}(this,e,t,n)}insertObject(e,t,n,r){return dp(this,e,t,n,r)}deleteContent(e,t){np(this,e,t)}modifySelection(e,t){(function(e,t,n={}){let r=e.schema,i=n.direction!=`backward`,a=n.unit?n.unit:`character`,o=!!n.treatEmojiAsSingleUnit,s=t.focus,c=new Mu({boundaries:pp(s,i),singleCharacters:!0,direction:i?`forward`:`backward`}),l={walker:c,schema:r,isForward:i,unit:a,treatEmojiAsSingleUnit:o},u;for(;u=c.next();){if(u.done)return;let n=fp(l,u.value);if(n)return void(t instanceof ed?e.change((e=>{e.setSelectionFocus(n)})):t.setFocus(n))}})(this,e,t)}getSelectedContent(e){return function(e,t){return e.change((e=>{let n=e.createDocumentFragment(),r=t.getFirstRange();if(!r||r.isCollapsed)return n;let i=r.start.root,a=r.start.getCommonPath(r.end),o=i.getNodeByPath(a),s;s=r.start.parent==r.end.parent?r:e.createRange(e.createPositionAt(o,r.start.path[a.length]),e.createPositionAt(o,r.end.path[a.length]+1));let c=s.end.offset-s.start.offset;for(let t of s.getItems({shallow:!0}))t.is(`$textProxy`)?e.appendText(t.data,t.getAttributes(),n):e.append(e.cloneElement(t,!0),n);if(s!=r){let t=r._getTransformedByMove(s.start,e.createPositionAt(n,0),c)[0],i=e.createRange(e.createPositionAt(n,0),t.start);cp(e.createRange(t.end,e.createPositionAt(n,`end`)),e),cp(i,e)}return n}))}(this,e)}hasContent(e,t={}){let n=e instanceof W?e:W._createIn(e);if(n.isCollapsed)return!1;let{ignoreWhitespaces:r=!1,ignoreMarkers:i=!1}=t;if(!i){for(let e of this.markers.getMarkersIntersectingRange(n))if(e.affectsData)return!0}for(let e of n.getItems())if(this.schema.isContent(e)&&(!e.is(`$textProxy`)||!r||e.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(e,t,n){return new U(e,t,n)}createPositionAt(e,t){return U._createAt(e,t)}createPositionAfter(e){return U._createAfter(e)}createPositionBefore(e){return U._createBefore(e)}createRange(e,t){return new W(e,t)}createRangeIn(e){return W._createIn(e)}createRangeOn(e){return W._createOn(e)}createSelection(...e){return new Gu(...e)}createBatch(e){return new Mf(e)}createOperationFromJSON(e){return vf.fromJSON(e,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){let e=[];this.fire(`_beforeChanges`);try{for(;this._pendingChanges.length;){let t=this._pendingChanges[0].batch;this._currentWriter=new Kf(this,t);let n=this._pendingChanges[0].callback(this._currentWriter);e.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}}finally{this._pendingChanges.length=0,this._currentWriter=null,this.fire(`_afterChanges`)}return e}}class _p extends ml{constructor(e){super(e),this.domEventType=`click`}onDomEvent(e){this.fire(e.type,e)}}class vp extends ml{constructor(e){super(e),this.domEventType=[`mousedown`,`mouseup`,`mouseover`,`mouseout`]}onDomEvent(e){this.fire(e.type,e)}}class yp{constructor(e){this.document=e}createDocumentFragment(e){return new kc(this.document,e)}createElement(e,t,n){return new ec(this.document,e,t,n)}createText(e){return new R(this.document,e)}clone(e,t=!1){return e._clone(t)}appendChild(e,t){return t._appendChild(e)}insertChild(e,t,n){return n._insertChild(e,t)}removeChildren(e,t,n){return n._removeChildren(e,t)}remove(e){let t=e.parent;return t?this.removeChildren(t.getChildIndex(e),1,t):[]}replace(e,t){let n=e.parent;if(n){let r=n.getChildIndex(e);return this.removeChildren(r,1,n),this.insertChild(r,t,n),!0}return!1}unwrapElement(e){let t=e.parent;if(t){let n=t.getChildIndex(e);this.remove(e),this.insertChild(n,e.getChildren(),t)}}rename(e,t){let n=new ec(this.document,e,t.getAttributes(),t.getChildren());return this.replace(t,n)?n:null}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){ot(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}createPositionAt(e,t){return z._createAt(e,t)}createPositionAfter(e){return z._createAfter(e)}createPositionBefore(e){return z._createBefore(e)}createRange(e,t){return new B(e,t)}createRangeOn(e){return B._createOn(e)}createRangeIn(e){return B._createIn(e)}createSelection(...e){return new lc(...e)}}new Set(`black.silver.gray.white.maroon.red.purple.fuchsia.green.lime.olive.yellow.navy.blue.teal.aqua.orange.aliceblue.antiquewhite.aquamarine.azure.beige.bisque.blanchedalmond.blueviolet.brown.burlywood.cadetblue.chartreuse.chocolate.coral.cornflowerblue.cornsilk.crimson.cyan.darkblue.darkcyan.darkgoldenrod.darkgray.darkgreen.darkgrey.darkkhaki.darkmagenta.darkolivegreen.darkorange.darkorchid.darkred.darksalmon.darkseagreen.darkslateblue.darkslategray.darkslategrey.darkturquoise.darkviolet.deeppink.deepskyblue.dimgray.dimgrey.dodgerblue.firebrick.floralwhite.forestgreen.gainsboro.ghostwhite.gold.goldenrod.greenyellow.grey.honeydew.hotpink.indianred.indigo.ivory.khaki.lavender.lavenderblush.lawngreen.lemonchiffon.lightblue.lightcoral.lightcyan.lightgoldenrodyellow.lightgray.lightgreen.lightgrey.lightpink.lightsalmon.lightseagreen.lightskyblue.lightslategray.lightslategrey.lightsteelblue.lightyellow.limegreen.linen.magenta.mediumaquamarine.mediumblue.mediumorchid.mediumpurple.mediumseagreen.mediumslateblue.mediumspringgreen.mediumturquoise.mediumvioletred.midnightblue.mintcream.mistyrose.moccasin.navajowhite.oldlace.olivedrab.orangered.orchid.palegoldenrod.palegreen.paleturquoise.palevioletred.papayawhip.peachpuff.peru.pink.plum.powderblue.rosybrown.royalblue.saddlebrown.salmon.sandybrown.seagreen.seashell.sienna.skyblue.slateblue.slategray.slategrey.snow.springgreen.steelblue.tan.thistle.tomato.turquoise.violet.wheat.whitesmoke.yellowgreen.activeborder.activecaption.appworkspace.background.buttonface.buttonhighlight.buttonshadow.buttontext.captiontext.graytext.highlight.highlighttext.inactiveborder.inactivecaption.inactivecaptiontext.infobackground.infotext.menu.menutext.scrollbar.threeddarkshadow.threedface.threedhighlight.threedlightshadow.threedshadow.window.windowframe.windowtext.rebeccapurple.currentcolor.transparent`.split(`.`));class bp{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){let n=this.get(e);if(!n)throw new y(`commandcollection-command-not-found`,this,{commandName:e});return n.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(let e of this.commands())e.destroy()}}class xp extends Pa{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t==`string`){let e=t;t=(t,n)=>{this.editor.execute(e),n()}}super.set(e,t,n)}}class Sp extends C(){constructor(e={}){super();let t=this.constructor,n=e.language||t.defaultConfig&&t.defaultConfig.language;this._context=e.context||new Io({language:n}),this._context._addEditor(this,!e.context);let r=Array.from(t.builtinPlugins||[]);this.config=new zi(e,t.defaultConfig),this.config.define(`plugins`,r),this.config.define(this._context._getEditorConfig()),this.plugins=new Fo(this,r,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new bp,this.set(`state`,`initializing`),this.once(`ready`,(()=>this.state=`ready`),{priority:`high`}),this.once(`destroy`,(()=>this.state=`destroyed`),{priority:`high`}),this.model=new gp;let i=new Zs;this.data=new Qd(this.model,i),this.editing=new Ad(this.model,i),this.editing.view.document.bind(`isReadOnly`).to(this),this.conversion=new $d([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias(`dataDowncast`,this.data.downcastDispatcher),this.conversion.addAlias(`editingDowncast`,this.editing.downcastDispatcher),this.keystrokes=new xp(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(e){throw new y(`editor-isreadonly-has-no-setter`)}enableReadOnlyMode(e){if(typeof e!=`string`&&typeof e!=`symbol`)throw new y(`editor-read-only-lock-id-invalid`,null,{lockId:e});this._readOnlyLocks.has(e)||(this._readOnlyLocks.add(e),this._readOnlyLocks.size===1&&this.fire(`change:isReadOnly`,`isReadOnly`,!0,!1))}disableReadOnlyMode(e){if(typeof e!=`string`&&typeof e!=`symbol`)throw new y(`editor-read-only-lock-id-invalid`,null,{lockId:e});this._readOnlyLocks.has(e)&&(this._readOnlyLocks.delete(e),this._readOnlyLocks.size===0&&this.fire(`change:isReadOnly`,`isReadOnly`,!1,!0))}initPlugins(){let e=this.config,t=e.get(`plugins`),n=e.get(`removePlugins`)||[],r=e.get(`extraPlugins`)||[],i=e.get(`substitutePlugins`)||[];return this.plugins.init(t.concat(r),n,i)}destroy(){let e=Promise.resolve();return this.state==`initializing`&&(e=new Promise((e=>this.once(`ready`,e)))),e.then((()=>{this.fire(`destroy`),this.stopListening(),this.commands.destroy()})).then((()=>this.plugins.destroy())).then((()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()})).then((()=>this._context._removeEditor(this)))}execute(e,...t){try{return this.commands.execute(e,...t)}catch(e){y.rethrowUnexpectedError(e,this)}}focus(){this.editing.view.focus()}}function Cp(e){return class extends e{setData(e){this.data.set(e)}getData(e){return this.data.get(e)}}}{let e=Cp(Object);Cp.setData=e.prototype.setData,Cp.getData=e.prototype.getData}function wp(e){return class extends e{updateSourceElement(e=this.data.get()){if(!this.sourceElement)throw new y(`editor-missing-sourceelement`,this);let t=this.config.get(`updateSourceElementOnDestroy`),n=this.sourceElement instanceof HTMLTextAreaElement;na(this.sourceElement,t||n?e:``)}}}wp.updateSourceElement=wp(Object).prototype.updateSourceElement;class Tp extends Lo{static get pluginName(){return`PendingActions`}init(){this.set(`hasAny`,!1),this._actions=new Ma({idProperty:`_id`}),this._actions.delegate(`add`,`remove`).to(this)}add(e){if(typeof e!=`string`)throw new y(`pendingactions-add-invalid-message`,this);let t=new(C());return t.set(`message`,e),this._actions.add(t),this.hasAny=!0,t}remove(e){this._actions.remove(e),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}let X={bold:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>`,cancel:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>`,caption:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>`,check:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>`,cog:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>`,eraser:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>`,image:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>`,lowVision:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>`,importExport:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path clip-rule="evenodd" d="M19 4.5 14 0H3v12.673l.868-1.041c.185-.222.4-.402.632-.54V1.5h8v5h5v7.626a2.24 2.24 0 0 1 1.5.822V4.5ZM14 5V2l3.3 3H14Zm-3.692 12.5c.062.105.133.206.213.303L11.52 19H8v-.876a2.243 2.243 0 0 0 1.82-.624h.488Zm7.518-.657a.75.75 0 0 0-1.152-.96L15.5 17.29V12H14v5.29l-1.174-1.408a.75.75 0 0 0-1.152.96l2.346 2.816a.95.95 0 0 0 1.46 0l2.346-2.815Zm-15.056-.38a.75.75 0 0 1-.096-1.056l2.346-2.815a.95.95 0 0 1 1.46 0l2.346 2.815a.75.75 0 1 1-1.152.96L6.5 14.96V20H5v-5.04l-1.174 1.408a.75.75 0 0 1-1.056.096Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>`,paragraph:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5.5H7v5h3.5a2.5 2.5 0 1 0 0-5zM5 3h6.5v.025a5 5 0 0 1 0 9.95V13H7v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>`,plus:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 0 0-1 1v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V3a1 1 0 0 0-1-1Z"/></svg>`,text:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555Zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13Z"/><path clip-rule="evenodd" d="m12.09 17-.534-1.292.848-1.971.545 1.319L12.113 17h-.023Zm1.142-5.187.545 1.319L15.5 9.13l1.858 4.316h-3.45l.398.965h3.467L18.887 17H20l-3.873-9h-1.254l-1.641 3.813Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>`,alignBottom:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>`,alignMiddle:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>`,alignTop:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>`,alignLeft:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>`,alignCenter:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>`,alignRight:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>`,alignJustify:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>`,objectLeft:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>`,objectCenter:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>`,objectRight:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>`,objectFullWidth:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>`,objectInline:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>`,objectBlockLeft:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>`,objectBlockRight:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>`,objectSizeFull:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>`,objectSizeLarge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>`,objectSizeSmall:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>`,objectSizeMedium:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>`,pencil:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>`,pilcrow:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>`,quote:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>`,threeVerticalDots:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>`};var Ep=i(5542);N()(Ep.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Ep.Z.locals;let{threeVerticalDots:Dp}=X,Op={alignLeft:X.alignLeft,bold:X.bold,importExport:X.importExport,paragraph:X.paragraph,plus:X.plus,text:X.text,threeVerticalDots:X.threeVerticalDots};class kp extends P{constructor(e,t){super(e);let n=this.bindTemplate,r=this.t;this.options=t||{},this.set(`ariaLabel`,r(`Editor toolbar`)),this.set(`maxWidth`,`auto`),this.items=this.createCollection(),this.focusTracker=new Na,this.keystrokes=new Pa,this.set(`class`,void 0),this.set(`isCompact`,!1),this.itemsView=new Ap(e),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();let i=e.uiLanguageDirection===`rtl`;this._focusCycler=new Do({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[i?`arrowright`:`arrowleft`,`arrowup`],focusNext:[i?`arrowleft`:`arrowright`,`arrowdown`]}});let a=[`ck`,`ck-toolbar`,n.to(`class`),n.if(`isCompact`,`ck-toolbar_compact`)];var o;this.options.shouldGroupWhenFull&&this.options.isFloating&&a.push(`ck-toolbar_floating`),this.setTemplate({tag:`div`,attributes:{class:a,role:`toolbar`,"aria-label":n.to(`ariaLabel`),style:{maxWidth:n.to(`maxWidth`)}},children:this.children,on:{mousedown:(o=this,o.bindTemplate.to((e=>{e.target===o.element&&e.preventDefault()})))}}),this._behavior=this.options.shouldGroupWhenFull?new Mp(this):new jp(this)}render(){super.render();for(let e of this.items)this.focusTracker.add(e.element);this.items.on(`add`,((e,t)=>{this.focusTracker.add(t.element)})),this.items.on(`remove`,((e,t)=>{this.focusTracker.remove(t.element)})),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t,n){this.items.addMany(this._buildItemsFromConfig(e,t,n))}_buildItemsFromConfig(e,t,n){let r=jo(e),i=n||r.removeItems;return this._cleanItemsConfiguration(r.items,t,i).map((e=>S(e)?this._createNestedToolbarDropdown(e,t,i):e===`|`?new ko:e===`-`?new Ao:t.create(e))).filter((e=>!!e))}_cleanItemsConfiguration(e,t,n){let r=e.filter(((e,r,i)=>e===`|`||n.indexOf(e)===-1&&(e===`-`?!this.options.shouldGroupWhenFull||(b(`toolbarview-line-break-ignored-when-grouping-items`,i),!1):!(!S(e)&&!t.has(e))||(b(`toolbarview-item-unavailable`,{item:e}),!1))));return this._cleanSeparatorsAndLineBreaks(r)}_cleanSeparatorsAndLineBreaks(e){let t=e=>e!==`-`&&e!==`|`,n=e.length,r=e.findIndex(t);if(r===-1)return[];let i=n-e.slice().reverse().findIndex(t);return e.slice(r,i).filter(((e,n,r)=>t(e)?!0:!(n>0&&r[n-1]===e)))}_createNestedToolbarDropdown(e,t,n){let{label:r,icon:i,items:a,tooltip:o=!0,withText:s=!1}=e;if(a=this._cleanItemsConfiguration(a,t,n),!a.length)return null;let c=zp(this.locale);return r||b(`toolbarview-nested-toolbar-dropdown-missing-label`,e),c.class=`ck-toolbar__nested-toolbar-dropdown`,c.buttonView.set({label:r,tooltip:o,withText:!!s}),!1===i?c.buttonView.withText=!0:c.buttonView.icon=Op[i]||i||Dp,Bp(c,(()=>c.toolbarView._buildItemsFromConfig(a,t,n))),c}}class Ap extends P{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:`div`,attributes:{class:[`ck`,`ck-toolbar__items`]},children:this.children})}}class jp{constructor(e){let t=e.bindTemplate;e.set(`isVertical`,!1),e.itemsView.children.bindTo(e.items).using((e=>e)),e.focusables.bindTo(e.items).using((e=>e)),e.extendTemplate({attributes:{class:[t.if(`isVertical`,`ck-toolbar_vertical`)]}})}render(){}destroy(){}}class Mp{constructor(e){this.view=e,this.viewChildren=e.children,this.viewFocusables=e.focusables,this.viewItemsView=e.itemsView,this.viewFocusTracker=e.focusTracker,this.viewLocale=e.locale,this.ungroupedItems=e.createCollection(),this.groupedItems=e.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,e.itemsView.children.bindTo(this.ungroupedItems).using((e=>e)),this.ungroupedItems.on(`change`,this._updateFocusCycleableItems.bind(this)),e.children.on(`change`,this._updateFocusCycleableItems.bind(this)),e.items.on(`change`,((e,t)=>{let n=t.index,r=Array.from(t.added);for(let e of t.removed)n>=this.ungroupedItems.length?this.groupedItems.remove(e):this.ungroupedItems.remove(e);for(let e=n;e<n+r.length;e++){let t=r[e-n];e>this.ungroupedItems.length?this.groupedItems.add(t,e-this.ungroupedItems.length):this.ungroupedItems.add(t,e)}this._updateGrouping()})),e.extendTemplate({attributes:{class:[`ck-toolbar_grouping`]}})}render(e){this.viewElement=e.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(e)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!sa(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);let e=this.groupedItems.length,t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==e&&this.view.fire(`groupedItemsUpdate`)}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;let e=this.viewElement,t=this.viewLocale.uiLanguageDirection,n=new O(e.lastChild),r=new O(e);if(!this.cachedPadding){let n=E.window.getComputedStyle(e),r=t===`ltr`?`paddingRight`:`paddingLeft`;this.cachedPadding=Number.parseInt(n[r])}return t===`ltr`?n.right>r.right-this.cachedPadding:n.left<r.left+this.cachedPadding}_enableGroupingOnResize(){let e;this.resizeObserver=new k(this.viewElement,(t=>{e&&e===t.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),e=t.contentRect.width)})),this._updateGrouping()}_enableGroupingOnMaxWidthChange(e){e.on(`change:maxWidth`,(()=>{this._updateGrouping()}))}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new ko),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){let e=this.viewLocale,t=e.t,n=zp(e);return n.class=`ck-toolbar__grouped-dropdown`,n.panelPosition=e.uiLanguageDirection===`ltr`?`sw`:`se`,Bp(n,this.groupedItems),n.buttonView.set({label:t(`Show more items`),tooltip:!0,tooltipPosition:e.uiLanguageDirection===`rtl`?`se`:`sw`,icon:Dp}),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map((e=>{this.viewFocusables.add(e)})),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var Np=i(1046);N()(Np.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Np.Z.locals;class Pp extends P{constructor(e){super(e);let t=this.bindTemplate;this.items=this.createCollection(),this.focusTracker=new Na,this.keystrokes=new Pa,this._focusCycler=new Do({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:`arrowup`,focusNext:`arrowdown`}}),this.set(`ariaLabel`,void 0),this.setTemplate({tag:`ul`,attributes:{class:[`ck`,`ck-reset`,`ck-list`],"aria-label":t.to(`ariaLabel`)},children:this.items})}render(){super.render();for(let e of this.items)this.focusTracker.add(e.element);this.items.on(`add`,((e,t)=>{this.focusTracker.add(t.element)})),this.items.on(`remove`,((e,t)=>{this.focusTracker.remove(t.element)})),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class Fp extends P{constructor(e){super(e);let t=this.bindTemplate;this.set(`isVisible`,!0),this.children=this.createCollection(),this.setTemplate({tag:`li`,attributes:{class:[`ck`,`ck-list__item`,t.if(`isVisible`,`ck-hidden`,(e=>!e))]},children:this.children})}focus(){this.children.first.focus()}}class Ip extends P{constructor(e){super(e),this.setTemplate({tag:`li`,attributes:{class:[`ck`,`ck-list__separator`]}})}}var Lp=i(7339);N()(Lp.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Lp.Z.locals;var Rp=i(3949);N()(Rp.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Rp.Z.locals;function zp(e,t=Co){let r=new t(e),i=new xo(e,r,new Eo(e));return r.bind(`isEnabled`).to(i),r instanceof To?r.arrowView.bind(`isOn`).to(i,`isOpen`):r.bind(`isOn`).to(i,`isOpen`),function(e){(function(e){e.on(`render`,(()=>{n({emitter:e,activator:()=>e.isOpen,callback:()=>{e.isOpen=!1},contextElements:[e.element]})}))})(e),function(e){e.on(`execute`,(t=>{t.source instanceof go||(e.isOpen=!1)}))}(e),function(e){e.focusTracker.on(`change:isFocused`,((t,n,r)=>{e.isOpen&&!r&&(e.isOpen=!1)}))}(e),function(e){e.keystrokes.set(`arrowdown`,((t,n)=>{e.isOpen&&(e.panelView.focus(),n())})),e.keystrokes.set(`arrowup`,((t,n)=>{e.isOpen&&(e.panelView.focusLast(),n())}))}(e),function(e){e.on(`change:isOpen`,((t,n,r)=>{if(r)return;let i=e.panelView.element;i&&i.contains(E.document.activeElement)&&e.buttonView.focus()}))}(e),function(e){e.on(`change:isOpen`,((t,n,r)=>{r&&e.panelView.focus()}),{priority:`low`})}(e)}(i),i}function Bp(e,t,n={}){e.extendTemplate({attributes:{class:[`ck-toolbar-dropdown`]}}),e.isOpen?Vp(e,t,n):e.once(`change:isOpen`,(()=>Vp(e,t,n)),{priority:`highest`}),n.enableActiveItemFocusOnDropdownOpen&&Wp(e,(()=>e.toolbarView.items.find((e=>e.isOn))))}function Vp(e,t,n){let r=e.locale,i=r.t,a=e.toolbarView=new kp(r),o=typeof t==`function`?t():t;a.ariaLabel=n.ariaLabel||i(`Dropdown toolbar`),n.maxWidth&&(a.maxWidth=n.maxWidth),n.class&&(a.class=n.class),n.isCompact&&(a.isCompact=n.isCompact),n.isVertical&&(a.isVertical=!0),o instanceof Ba?a.items.bindTo(o).using((e=>e)):a.items.addMany(o),e.panelView.children.add(a),a.items.delegate(`execute`).to(e)}function Hp(e,t,n={}){e.isOpen?Up(e,t,n):e.once(`change:isOpen`,(()=>Up(e,t,n)),{priority:`highest`}),Wp(e,(()=>e.listView.items.find((e=>e instanceof Fp&&e.children.first.isOn))))}function Up(e,t,n){let r=e.locale,i=e.listView=new Pp(r),a=typeof t==`function`?t():t;i.ariaLabel=n.ariaLabel,i.items.bindTo(a).using((e=>{if(e.type===`separator`)return new Ip(r);if(e.type===`button`||e.type===`switchbutton`){let t=new Fp(r),n;return n=e.type===`button`?new F(r):new go(r),n.bind(...Object.keys(e.model)).to(e.model),n.delegate(`execute`).to(t),t.children.add(n),t}return null})),e.panelView.children.add(i),i.items.delegate(`execute`).to(e)}function Wp(e,t){e.on(`change:isOpen`,(()=>{if(!e.isOpen)return;let n=t();n&&(typeof n.focus==`function`?n.focus():b(`ui-dropdown-focus-child-on-open-child-missing-focus`,{view:n}))}),{priority:ee.low-10})}var Gp=i(8793);N()(Gp.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Gp.Z.locals;let Kp=ra(`px`),qp=E.document.body;class Jp extends P{constructor(e){super(e);let t=this.bindTemplate;this.set(`top`,0),this.set(`left`,0),this.set(`position`,`arrow_nw`),this.set(`isVisible`,!1),this.set(`withArrow`,!0),this.set(`class`,void 0),this._pinWhenIsVisibleCallback=null,this.content=this.createCollection(),this.setTemplate({tag:`div`,attributes:{class:[`ck`,`ck-balloon-panel`,t.to(`position`,(e=>`ck-balloon-panel_${e}`)),t.if(`isVisible`,`ck-balloon-panel_visible`),t.if(`withArrow`,`ck-balloon-panel_with-arrow`),t.to(`class`)],style:{top:t.to(`top`,Kp),left:t.to(`left`,Kp)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();let t=Jp.defaultPositions,n=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:qp,fitInViewport:!0},e),r=Jp._getOptimalPosition(n),i=parseInt(r.left),a=parseInt(r.top),o=r.name,{withArrow:s=!0}=r.config||{};this.top=a,this.left=i,this.position=o,this.withArrow=s}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,`change:isVisible`,this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,`change:isVisible`,this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);let t=Yp(e.target),n=e.limiter?Yp(e.limiter):qp;this.listenTo(E.document,`scroll`,((r,i)=>{let a=i.target,o=t&&a.contains(t),s=n&&a.contains(n);!o&&!s&&t&&n||this.attachTo(e)}),{useCapture:!0}),this.listenTo(E.window,`resize`,(()=>{this.attachTo(e)}))}_stopPinning(){this.stopListening(E.document,`scroll`),this.stopListening(E.window,`resize`)}}function Yp(e){return Ri(e)?e:Xi(e)?e.commonAncestorContainer:typeof e==`function`?Yp(e()):null}function Xp(e={}){let{sideOffset:t=Jp.arrowSideOffset,heightOffset:n=Jp.arrowHeightOffset,stickyVerticalOffset:r=Jp.stickyVerticalOffset,config:i}=e;return{northWestArrowSouthWest:(e,n)=>({top:a(e,n),left:e.left-t,name:`arrow_sw`,...i&&{config:i}}),northWestArrowSouthMiddleWest:(e,n)=>({top:a(e,n),left:e.left-.25*n.width-t,name:`arrow_smw`,...i&&{config:i}}),northWestArrowSouth:(e,t)=>({top:a(e,t),left:e.left-t.width/2,name:`arrow_s`,...i&&{config:i}}),northWestArrowSouthMiddleEast:(e,n)=>({top:a(e,n),left:e.left-.75*n.width+t,name:`arrow_sme`,...i&&{config:i}}),northWestArrowSouthEast:(e,n)=>({top:a(e,n),left:e.left-n.width+t,name:`arrow_se`,...i&&{config:i}}),northArrowSouthWest:(e,n)=>({top:a(e,n),left:e.left+e.width/2-t,name:`arrow_sw`,...i&&{config:i}}),northArrowSouthMiddleWest:(e,n)=>({top:a(e,n),left:e.left+e.width/2-.25*n.width-t,name:`arrow_smw`,...i&&{config:i}}),northArrowSouth:(e,t)=>({top:a(e,t),left:e.left+e.width/2-t.width/2,name:`arrow_s`,...i&&{config:i}}),northArrowSouthMiddleEast:(e,n)=>({top:a(e,n),left:e.left+e.width/2-.75*n.width+t,name:`arrow_sme`,...i&&{config:i}}),northArrowSouthEast:(e,n)=>({top:a(e,n),left:e.left+e.width/2-n.width+t,name:`arrow_se`,...i&&{config:i}}),northEastArrowSouthWest:(e,n)=>({top:a(e,n),left:e.right-t,name:`arrow_sw`,...i&&{config:i}}),northEastArrowSouthMiddleWest:(e,n)=>({top:a(e,n),left:e.right-.25*n.width-t,name:`arrow_smw`,...i&&{config:i}}),northEastArrowSouth:(e,t)=>({top:a(e,t),left:e.right-t.width/2,name:`arrow_s`,...i&&{config:i}}),northEastArrowSouthMiddleEast:(e,n)=>({top:a(e,n),left:e.right-.75*n.width+t,name:`arrow_sme`,...i&&{config:i}}),northEastArrowSouthEast:(e,n)=>({top:a(e,n),left:e.right-n.width+t,name:`arrow_se`,...i&&{config:i}}),southWestArrowNorthWest:e=>({top:o(e),left:e.left-t,name:`arrow_nw`,...i&&{config:i}}),southWestArrowNorthMiddleWest:(e,n)=>({top:o(e),left:e.left-.25*n.width-t,name:`arrow_nmw`,...i&&{config:i}}),southWestArrowNorth:(e,t)=>({top:o(e),left:e.left-t.width/2,name:`arrow_n`,...i&&{config:i}}),southWestArrowNorthMiddleEast:(e,n)=>({top:o(e),left:e.left-.75*n.width+t,name:`arrow_nme`,...i&&{config:i}}),southWestArrowNorthEast:(e,n)=>({top:o(e),left:e.left-n.width+t,name:`arrow_ne`,...i&&{config:i}}),southArrowNorthWest:e=>({top:o(e),left:e.left+e.width/2-t,name:`arrow_nw`,...i&&{config:i}}),southArrowNorthMiddleWest:(e,n)=>({top:o(e),left:e.left+e.width/2-.25*n.width-t,name:`arrow_nmw`,...i&&{config:i}}),southArrowNorth:(e,t)=>({top:o(e),left:e.left+e.width/2-t.width/2,name:`arrow_n`,...i&&{config:i}}),southArrowNorthMiddleEast:(e,n)=>({top:o(e),left:e.left+e.width/2-.75*n.width+t,name:`arrow_nme`,...i&&{config:i}}),southArrowNorthEast:(e,n)=>({top:o(e),left:e.left+e.width/2-n.width+t,name:`arrow_ne`,...i&&{config:i}}),southEastArrowNorthWest:e=>({top:o(e),left:e.right-t,name:`arrow_nw`,...i&&{config:i}}),southEastArrowNorthMiddleWest:(e,n)=>({top:o(e),left:e.right-.25*n.width-t,name:`arrow_nmw`,...i&&{config:i}}),southEastArrowNorth:(e,t)=>({top:o(e),left:e.right-t.width/2,name:`arrow_n`,...i&&{config:i}}),southEastArrowNorthMiddleEast:(e,n)=>({top:o(e),left:e.right-.75*n.width+t,name:`arrow_nme`,...i&&{config:i}}),southEastArrowNorthEast:(e,n)=>({top:o(e),left:e.right-n.width+t,name:`arrow_ne`,...i&&{config:i}}),westArrowEast:(e,t)=>({top:e.top+e.height/2-t.height/2,left:e.left-t.width-n,name:`arrow_e`,...i&&{config:i}}),eastArrowWest:(e,t)=>({top:e.top+e.height/2-t.height/2,left:e.right+n,name:`arrow_w`,...i&&{config:i}}),viewportStickyNorth:(e,t,n)=>e.getIntersection(n)?{top:n.top+r,left:e.left+e.width/2-t.width/2,name:`arrowless`,config:{withArrow:!1,...i}}:null};function a(e,t){return e.top-t.height-n}function o(e){return e.bottom+n}}Jp.arrowSideOffset=25,Jp.arrowHeightOffset=10,Jp.stickyVerticalOffset=20,Jp._getOptimalPosition=ca,Jp.defaultPositions=Xp();var Zp=i(3332);N()(Zp.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Zp.Z.locals;let Qp=`ck-tooltip`;class $p extends Gi(){constructor(e){if(super(),$p._editors.add(e),$p._instance)return $p._instance;$p._instance=this,this.tooltipTextView=new P(e.locale),this.tooltipTextView.set(`text`,``),this.tooltipTextView.setTemplate({tag:`span`,attributes:{class:[`ck`,`ck-tooltip__text`]},children:[{text:this.tooltipTextView.bindTemplate.to(`text`)}]}),this.balloonPanelView=new Jp(e.locale),this.balloonPanelView.class=Qp,this.balloonPanelView.content.add(this.tooltipTextView),this._resizeObserver=null,this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._pinTooltipDebounced=Al(this._pinTooltip,600),this.listenTo(E.document,`mouseenter`,this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(E.document,`mouseleave`,this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(E.document,`focus`,this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(E.document,`blur`,this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(E.document,`scroll`,this._onScroll.bind(this),{useCapture:!0}),this._watchdogExcluded=!0}destroy(e){let t=e.ui.view&&e.ui.view.body;$p._editors.delete(e),this.stopListening(e.ui),t&&t.has(this.balloonPanelView)&&t.remove(this.balloonPanelView),$p._editors.size||(this._unpinTooltip(),this.balloonPanelView.destroy(),this.stopListening(),$p._instance=null)}static getPositioningFunctions(e){let t=$p.defaultBalloonPositions;return{s:[t.southArrowNorth,t.southArrowNorthEast,t.southArrowNorthWest],n:[t.northArrowSouth],e:[t.eastArrowWest],w:[t.westArrowEast],sw:[t.southArrowNorthEast],se:[t.southArrowNorthWest]}[e]}_onEnterOrFocus(e,{target:t}){let n=em(t);var r;n&&n!==this._currentElementWithTooltip&&(this._unpinTooltip(),this._pinTooltipDebounced(n,{text:(r=n).dataset.ckeTooltipText,position:r.dataset.ckeTooltipPosition||`s`,cssClass:r.dataset.ckeTooltipClass||``}))}_onLeaveOrBlur(e,{target:t,relatedTarget:n}){if(e.name===`mouseleave`){if(!Ri(t)||this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;let e=em(t),r=em(n);e&&e!==r&&this._unpinTooltip()}else{if(this._currentElementWithTooltip&&t!==this._currentElementWithTooltip)return;this._unpinTooltip()}}_onScroll(e,{target:t}){this._currentElementWithTooltip&&(t.contains(this.balloonPanelView.element)&&t.contains(this._currentElementWithTooltip)||this._unpinTooltip())}_pinTooltip(e,{text:t,position:n,cssClass:r}){let i=M($p._editors.values()).ui.view.body;i.has(this.balloonPanelView)||i.add(this.balloonPanelView),this.tooltipTextView.text=t,this.balloonPanelView.pin({target:e,positions:$p.getPositioningFunctions(n)}),this._resizeObserver=new k(e,(()=>{sa(e)||this._unpinTooltip()})),this.balloonPanelView.class=[Qp,r].filter((e=>e)).join(` `);for(let e of $p._editors)this.listenTo(e.ui,`update`,this._updateTooltipPosition.bind(this),{priority:`low`});this._currentElementWithTooltip=e,this._currentTooltipPosition=n}_unpinTooltip(){this._pinTooltipDebounced.cancel(),this.balloonPanelView.unpin();for(let e of $p._editors)this.stopListening(e.ui,`update`);this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._resizeObserver&&this._resizeObserver.destroy()}_updateTooltipPosition(){sa(this._currentElementWithTooltip)?this.balloonPanelView.pin({target:this._currentElementWithTooltip,positions:$p.getPositioningFunctions(this._currentTooltipPosition)}):this._unpinTooltip()}}function em(e){return Ri(e)?e.closest(`[data-cke-tooltip-text]:not([data-cke-tooltip-disabled])`):null}$p.defaultBalloonPositions=Xp({heightOffset:5,sideOffset:13}),$p._editors=new Set,$p._instance=null;class tm extends C(){constructor(e){super(),this.editor=e,this.componentFactory=new vo(e),this.focusTracker=new Na,this.tooltipManager=new $p(e),this.set(`viewportOffset`,this._readViewportOffsetFromConfig()),this.isReady=!1,this.once(`ready`,(()=>{this.isReady=!0})),this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[],this.listenTo(e.editing.view.document,`layoutChanged`,(()=>this.update())),this._initFocusTracking()}get element(){return null}update(){this.fire(`update`)}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor);for(let e of this._editableElementsMap.values())e.ckeditorInstance=null;this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||=this.editor,this.focusTracker.add(t);let n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once(`ready`,n)}getEditableElement(e=`main`){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once(`render`,(()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)})),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn(`editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.`,{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){let e=this.editor,t=e.config.get(`ui.viewportOffset`);if(t)return t;let n=e.config.get(`toolbar.viewportTopOffset`);return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){let e=this.editor,t=e.editing.view,n,r;e.keystrokes.set(`Alt+F10`,((e,i)=>{let a=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(a)&&!Array.from(t.domRoots.values()).includes(a)&&(n=a);let o=this._getCurrentFocusedToolbarDefinition();o&&r||(r=this._getFocusableCandidateToolbarDefinitions());for(let e=0;e<r.length;e++){let e=r.shift();if(r.push(e),e!==o&&this._focusFocusableCandidateToolbar(e)){o&&o.options.afterBlur&&o.options.afterBlur();break}}i()})),e.keystrokes.set(`Esc`,((t,r)=>{let i=this._getCurrentFocusedToolbarDefinition();i&&(n?(n.focus(),n=null):e.editing.view.focus(),i.options.afterBlur&&i.options.afterBlur(),r())}))}_getFocusableCandidateToolbarDefinitions(){let e=[];for(let t of this._focusableToolbarDefinitions){let{toolbarView:n,options:r}=t;(sa(n.element)||r.beforeFocus)&&e.push(t)}return e.sort(((e,t)=>nm(e)-nm(t))),e}_getCurrentFocusedToolbarDefinition(){for(let e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){let{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!sa(t.element)&&(t.focus(),!0)}}function nm(e){let{toolbarView:t,options:n}=e,r=10;return sa(t.element)&&r--,n.isContextual&&r--,r}var rm=i(9688);N()(rm.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),rm.Z.locals;class im extends P{constructor(e){super(e),this.body=new uo(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var am=i(3662);N()(am.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),am.Z.locals;class om extends P{constructor(e){super(e),this.set(`text`,void 0),this.set(`for`,void 0),this.id=`ck-editor__label_${v()}`;let t=this.bindTemplate;this.setTemplate({tag:`label`,attributes:{class:[`ck`,`ck-label`],id:this.id,for:t.to(`for`)},children:[{text:t.to(`text`)}]})}}class sm extends im{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:`div`,attributes:{class:[`ck`,`ck-reset`,`ck-editor`,`ck-rounded-corners`],role:`application`,dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:`div`,attributes:{class:[`ck`,`ck-editor__top`,`ck-reset_all`],role:`presentation`},children:this.top},{tag:`div`,attributes:{class:[`ck`,`ck-editor__main`],role:`presentation`},children:this.main}]})}_createVoiceLabel(){let e=this.t,t=new om;return t.text=e(`Rich Text Editor`),t.extendTemplate({attributes:{class:`ck-voice-label`}}),t}}class cm extends P{constructor(e,t,n){super(e),this.setTemplate({tag:`div`,attributes:{class:[`ck`,`ck-content`,`ck-editor__editable`,`ck-rounded-corners`],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.name=null,this.set(`isFocused`,!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on(`change:isFocused`,(()=>this._updateIsFocusedClasses())),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){let e=this._editingView;function t(t){e.change((n=>{let r=e.document.getRoot(t.name);n.addClass(t.isFocused?`ck-focused`:`ck-blurred`,r),n.removeClass(t.isFocused?`ck-blurred`:`ck-focused`,r)}))}e.isRenderingInProgress?function n(r){e.once(`change:isRenderingInProgress`,((e,i,a)=>{a?n(r):t(r)}))}(this):t(this)}}class lm extends cm{constructor(e,t,n,r={}){super(e,t,n);let i=e.t;this.extendTemplate({attributes:{role:`textbox`,class:`ck-editor__editable_inline`}}),this._generateLabel=r.label||(()=>i(`Editor editing area: %0`,this.name))}render(){super.render();let e=this._editingView;e.change((t=>{let n=e.document.getRoot(this.name);t.setAttribute(`aria-label`,this._generateLabel(this),n)}))}}var um=i(8847);N()(um.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),um.Z.locals;var dm=i(4879);N()(dm.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),dm.Z.locals;class fm extends P{constructor(e){super(e),this.set(`value`,void 0),this.set(`id`,void 0),this.set(`placeholder`,void 0),this.set(`isReadOnly`,!1),this.set(`hasError`,!1),this.set(`ariaDescribedById`,void 0),this.focusTracker=new Na,this.bind(`isFocused`).to(this.focusTracker),this.set(`isEmpty`,!0),this.set(`inputMode`,`text`);let t=this.bindTemplate;this.setTemplate({tag:`input`,attributes:{class:[`ck`,`ck-input`,t.if(`isFocused`,`ck-input_focused`),t.if(`isEmpty`,`ck-input-text_empty`),t.if(`hasError`,`ck-error`)],id:t.to(`id`),placeholder:t.to(`placeholder`),readonly:t.to(`isReadOnly`),inputmode:t.to(`inputMode`),"aria-invalid":t.if(`hasError`,!0),"aria-describedby":t.to(`ariaDescribedById`)},on:{input:t.to(((...e)=>{this.fire(`input`,...e),this._updateIsEmpty()})),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on(`change:value`,((e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()}))}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:``}}class pm extends fm{constructor(e){super(e),this.extendTemplate({attributes:{type:`text`,class:[`ck-input-text`]}})}}var mm=i(2577);N()(mm.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),mm.Z.locals;class hm extends P{constructor(e,t){super(e);let n=`ck-labeled-field-view-${v()}`,r=`ck-labeled-field-view-status-${v()}`;this.fieldView=t(this,n,r),this.set(`label`,void 0),this.set(`isEnabled`,!0),this.set(`isEmpty`,!0),this.set(`isFocused`,!1),this.set(`errorText`,null),this.set(`infoText`,null),this.set(`class`,void 0),this.set(`placeholder`,void 0),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(r),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind(`_statusText`).to(this,`errorText`,this,`infoText`,((e,t)=>e||t));let i=this.bindTemplate;this.setTemplate({tag:`div`,attributes:{class:[`ck`,`ck-labeled-field-view`,i.to(`class`),i.if(`isEnabled`,`ck-disabled`,(e=>!e)),i.if(`isEmpty`,`ck-labeled-field-view_empty`),i.if(`isFocused`,`ck-labeled-field-view_focused`),i.if(`placeholder`,`ck-labeled-field-view_placeholder`),i.if(`errorText`,`ck-error`)]},children:[{tag:`div`,attributes:{class:[`ck`,`ck-labeled-field-view__input-wrapper`]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(e){let t=new om(this.locale);return t.for=e,t.bind(`text`).to(this,`label`),t}_createStatusView(e){let t=new P(this.locale),n=this.bindTemplate;return t.setTemplate({tag:`div`,attributes:{class:[`ck`,`ck-labeled-field-view__status`,n.if(`errorText`,`ck-labeled-field-view__status_error`),n.if(`_statusText`,`ck-hidden`,(e=>!e))],id:e,role:n.if(`errorText`,`alert`)},children:[{text:n.to(`_statusText`)}]}),t}focus(){this.fieldView.focus()}}function gm(e,t,n){let r=new pm(e.locale);return r.set({id:t,ariaDescribedById:n}),r.bind(`isReadOnly`).to(e,`isEnabled`,(e=>!e)),r.bind(`hasError`).to(e,`errorText`,(e=>!!e)),r.on(`input`,(()=>{e.errorText=null})),e.bind(`isEmpty`,`isFocused`,`placeholder`).to(r),r}class _m extends Lo{static get pluginName(){return`Notification`}init(){this.on(`show:warning`,((e,t)=>{window.alert(t.message)}),{priority:`lowest`})}showSuccess(e,t={}){this._showNotification({message:e,type:`success`,namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:`info`,namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:`warning`,namespace:t.namespace,title:t.title})}_showNotification(e){let t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||``})}}class vm extends C(){constructor(e,t){super(),t&&fl(this,t),e&&this.set(e)}}var ym=i(4650);N()(ym.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),ym.Z.locals;var bm=i(7676);N()(bm.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),bm.Z.locals;let xm=ra(`px`);class Sm extends I{static get pluginName(){return`ContextualBalloon`}constructor(e){super(e),this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{let e=this.editor.editing.view,t=e.document.selection.editableElement;return t?e.domConverter.mapViewToDom(t.root):null},this.set(`visibleView`,null),this._viewToStack=new Map,this._idToStack=new Map,this.set(`_numberOfStacks`,0),this.set(`_singleViewMode`,!1),this._rotatorView=null,this._fakePanelsView=null}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new y(`contextualballoon-add-view-exist`,[this,e]);let t=e.stackId||`main`;if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));let n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new y(`contextualballoon-remove-view-not-exist`,[this,e]);let t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;let t=this._idToStack.get(e);if(!t)throw new y(`contextualballoon-showstack-stack-not-exist`,this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new Jp(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find((t=>t[1]===e))[0]}_showNextStack(){let e=Array.from(this._idToStack.values()),t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){let e=Array.from(this._idToStack.values()),t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){let e=new Cm(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind(`isNavigationVisible`).to(this,`_numberOfStacks`,this,`_singleViewMode`,((e,t)=>!t&&e>1)),e.on(`change:isNavigationVisible`,(()=>this.updatePosition()),{priority:`low`}),e.bind(`counter`).to(this,`visibleView`,this,`_numberOfStacks`,((e,n)=>n<2?``:t(`%0 of %1`,[Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1,n]))),e.buttonNextView.on(`execute`,(()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()})),e.buttonPrevView.on(`execute`,(()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()})),e}_createFakePanelsView(){let e=new wm(this.editor.locale,this.view);return e.bind(`numberOfPanels`).to(this,`_numberOfStacks`,this,`_singleViewMode`,((e,t)=>!t&&e>=2?Math.min(e-1,2):0)),e.listenTo(this.view,`change:top`,(()=>e.updatePosition())),e.listenTo(this.view,`change:left`,(()=>e.updatePosition())),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t=``,withArrow:n=!0,singleViewMode:r=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),r&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&=(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class Cm extends P{constructor(e){super(e);let t=e.t,n=this.bindTemplate;this.set(`isNavigationVisible`,!0),this.focusTracker=new Na,this.buttonPrevView=this._createButtonView(t(`Previous`),`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>`),this.buttonNextView=this._createButtonView(t(`Next`),`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>`),this.content=this.createCollection(),this.setTemplate({tag:`div`,attributes:{class:[`ck`,`ck-balloon-rotator`],"z-index":`-1`},children:[{tag:`div`,attributes:{class:[`ck-balloon-rotator__navigation`,n.to(`isNavigationVisible`,(e=>e?``:`ck-hidden`))]},children:[this.buttonPrevView,{tag:`span`,attributes:{class:[`ck-balloon-rotator__counter`]},children:[{text:n.to(`counter`)}]},this.buttonNextView]},{tag:`div`,attributes:{class:`ck-balloon-rotator__content`},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){let n=new F(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class wm extends P{constructor(e,t){super(e);let n=this.bindTemplate;this.set(`top`,0),this.set(`left`,0),this.set(`height`,0),this.set(`width`,0),this.set(`numberOfPanels`,0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:`div`,attributes:{class:[`ck-fake-panel`,n.to(`numberOfPanels`,(e=>e?``:`ck-hidden`))],style:{top:n.to(`top`,xm),left:n.to(`left`,xm),width:n.to(`width`,xm),height:n.to(`height`,xm)}},children:this.content}),this.on(`change:numberOfPanels`,((e,t,n,r)=>{n>r?this._addPanels(n-r):this._removePanels(r-n),this.updatePosition()}))}_addPanels(e){for(;e--;){let e=new P;e.setTemplate({tag:`div`}),this.content.add(e),this.registerChild(e)}}_removePanels(e){for(;e--;){let e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){let{top:e,left:t}=this._balloonPanelView,{width:n,height:r}=new O(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:r})}}}var Tm=i(5868);N()(Tm.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Tm.Z.locals;let Em=ra(`px`);class Dm extends P{constructor(e){super(e);let t=this.bindTemplate;this.set(`isActive`,!1),this.set(`isSticky`,!1),this.set(`limiterElement`,null),this.set(`limiterBottomOffset`,50),this.set(`viewportTopOffset`,0),this.set(`_marginLeft`,null),this.set(`_isStickyToTheLimiter`,!1),this.set(`_hasViewportTopOffset`,!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Ua({tag:`div`,attributes:{class:[`ck`,`ck-sticky-panel__placeholder`],style:{display:t.to(`isSticky`,(e=>e?`block`:`none`)),height:t.to(`isSticky`,(e=>e?Em(this._panelRect.height):null))}}}).render(),this._contentPanel=new Ua({tag:`div`,attributes:{class:[`ck`,`ck-sticky-panel__content`,t.if(`isSticky`,`ck-sticky-panel__content_sticky`),t.if(`_isStickyToTheLimiter`,`ck-sticky-panel__content_sticky_bottom-limit`)],style:{width:t.to(`isSticky`,(e=>e?Em(this._contentPanelPlaceholder.getBoundingClientRect().width):null)),top:t.to(`_hasViewportTopOffset`,(e=>e?Em(this.viewportTopOffset):null)),bottom:t.to(`_isStickyToTheLimiter`,(e=>e?Em(this.limiterBottomOffset):null)),marginLeft:t.to(`_marginLeft`)}},children:this.content}).render(),this.setTemplate({tag:`div`,attributes:{class:[`ck`,`ck-sticky-panel`]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(E.window,`scroll`,(()=>{this._checkIfShouldBeSticky()})),this.listenTo(this,`change:isActive`,(()=>{this._checkIfShouldBeSticky()}))}_checkIfShouldBeSticky(){let e=this._panelRect=this._contentPanel.getBoundingClientRect(),t;this.limiterElement?(t=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&t.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<t.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=t.bottom<e.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:Em(-E.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}var Om=i(9695);N()(Om.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Om.Z.locals;let{pilcrow:km}=X;class Am extends tm{constructor(e,t){super(e),this.view=t,this._toolbarConfig=jo(e.config.get(`toolbar`)),this._elementReplacer=new Oe}get element(){return this.view.element}init(e){let t=this.editor,n=this.view,r=t.editing.view,i=n.editable;i.name=r.document.getRoot().rootName,n.render();let a=i.element;this.setEditableElement(i.name,a),n.editable.bind(`isFocused`).to(this.focusTracker),r.attachDomRoot(a),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire(`ready`)}destroy(){super.destroy();let e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){let e=this.view;e.stickyPanel.bind(`isActive`).to(this.focusTracker,`isFocused`),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind(`viewportTopOffset`).to(this,`viewportOffset`,(({top:e})=>e||0)),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){let e=this.editor,t=e.editing.view,n=t.document.getRoot(),r=e.sourceElement,i=e.config.get(`placeholder`)||r&&r.tagName.toLowerCase()===`textarea`&&r.getAttribute(`placeholder`);i&&Bo({view:t,element:n,text:i,isDirectHost:!1,keepOnFocus:!0})}}var jm=i(3143);N()(jm.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),jm.Z.locals;class Mm extends sm{constructor(e,t,n={}){super(e),this.stickyPanel=new Dm(e),this.toolbar=new kp(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new lm(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class Nm extends Cp(wp(Sp)){constructor(e,t={}){if(!Pm(e)&&t.initialData!==void 0)throw new y(`editor-create-initial-data`,null);super(t),this.config.get(`initialData`)===void 0&&this.config.set(`initialData`,function(e){return Pm(e)?(t=e,t instanceof HTMLTextAreaElement?t.value:t.innerHTML):e;var t}(e)),Pm(e)&&(this.sourceElement=e),this.model.document.createRoot();let n=!this.config.get(`toolbar.shouldNotGroupWhenFull`),r=new Mm(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new Am(this,r),function(e){if(!Tt(e.updateSourceElement))throw new y(`attachtoform-missing-elementapi-interface`,e);let t=e.sourceElement;if(function(e){return!!e&&e.tagName.toLowerCase()===`textarea`}(t)&&t.form){let n,r=t.form,i=()=>e.updateSourceElement();Tt(r.submit)&&(n=r.submit,r.submit=()=>{i(),n.apply(r)}),r.addEventListener(`submit`,i),e.on(`destroy`,(()=>{r.removeEventListener(`submit`,i),n&&(r.submit=n)}))}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise((n=>{let r=new this(e,t);n(r.initPlugins().then((()=>r.ui.init(Pm(e)?e:null))).then((()=>r.data.init(r.config.get(`initialData`)))).then((()=>r.fire(`ready`))).then((()=>r)))}))}}function Pm(e){return Ri(e)}class Fm extends ml{constructor(e){super(e);let t=this.document;function n(e){return(n,r)=>{r.preventDefault();let i=r.dropRange?[r.dropRange]:null,a=new g(t,e);t.fire(a,{dataTransfer:r.dataTransfer,method:n.name,targetRanges:i,target:r.target}),a.stop.called&&r.stopPropagation()}}this.domEventType=[`paste`,`copy`,`cut`,`drop`,`dragover`,`dragstart`,`dragend`,`dragenter`,`dragleave`],this.listenTo(t,`paste`,n(`clipboardInput`),{priority:`low`}),this.listenTo(t,`drop`,n(`clipboardInput`),{priority:`low`}),this.listenTo(t,`dragover`,n(`dragging`),{priority:`low`})}onDomEvent(e){let t={dataTransfer:new Su(`clipboardData`in e?e.clipboardData:e.dataTransfer,{cacheFiles:e.type==`drop`||e.type==`paste`})};e.type!=`drop`&&e.type!=`dragover`||(t.dropRange=function(e,t){let n=t.target.ownerDocument,r=t.clientX,i=t.clientY,a;return n.caretRangeFromPoint&&n.caretRangeFromPoint(r,i)?a=n.caretRangeFromPoint(r,i):t.rangeParent&&(a=n.createRange(),a.setStart(t.rangeParent,t.rangeOffset),a.collapse(!0)),a?e.domConverter.domRangeToView(a):null}(this.view,e)),this.fire(e.type,e,t)}}let Im=[`figcaption`,`li`];function Lm(e){let t=``;if(e.is(`$text`)||e.is(`$textProxy`))t=e.data;else if(e.is(`element`,`img`)&&e.hasAttribute(`alt`))t=e.getAttribute(`alt`);else if(e.is(`element`,`br`))t=`
`;else{let n=null;for(let r of e.getChildren()){let e=Lm(r);n&&(n.is(`containerElement`)||r.is(`containerElement`))&&(Im.includes(n.name)||Im.includes(r.name)?t+=`
`:t+=`

`),t+=e,n=r}}return t}class Rm extends I{static get pluginName(){return`ClipboardPipeline`}init(){this.editor.editing.view.addObserver(Fm),this._setupPasteDrop(),this._setupCopyCut()}_setupPasteDrop(){let e=this.editor,t=e.model,n=e.editing.view,r=n.document;this.listenTo(r,`clipboardInput`,(t=>{e.isReadOnly&&t.stop()}),{priority:`highest`}),this.listenTo(r,`clipboardInput`,((e,t)=>{let r=t.dataTransfer,i;if(t.content)i=t.content;else{let e=``;r.getData(`text/html`)?e=function(e){return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,((e,t)=>t.length==1?` `:t)).replace(/<!--[\s\S]*?-->/g,``)}(r.getData(`text/html`)):r.getData(`text/plain`)&&(((a=(a=r.getData(`text/plain`)).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\r?\n\r?\n/g,`</p><p>`).replace(/\r?\n/g,`<br>`).replace(/\t/g,`&nbsp;&nbsp;&nbsp;&nbsp;`).replace(/^\s/,`&nbsp;`).replace(/\s$/,`&nbsp;`).replace(/\s\s/g,` &nbsp;`)).includes(`</p><p>`)||a.includes(`<br>`))&&(a=`<p>${a}</p>`),e=a),i=this.editor.data.htmlProcessor.toView(e)}var a;let o=new g(this,`inputTransformation`);this.fire(o,{content:i,dataTransfer:r,targetRanges:t.targetRanges,method:t.method}),o.stop.called&&e.stop(),n.scrollToTheSelection()}),{priority:`low`}),this.listenTo(this,`inputTransformation`,((e,n)=>{if(n.content.isEmpty)return;let r=this.editor.data.toModel(n.content,`$clipboardHolder`);r.childCount!=0&&(e.stop(),t.change((()=>{this.fire(`contentInsertion`,{content:r,method:n.method,dataTransfer:n.dataTransfer,targetRanges:n.targetRanges})})))}),{priority:`low`}),this.listenTo(this,`contentInsertion`,((e,n)=>{n.resultRange=t.insertContent(n.content)}),{priority:`low`})}_setupCopyCut(){let e=this.editor,t=e.model.document,n=e.editing.view.document,r=(r,i)=>{let a=i.dataTransfer;i.preventDefault();let o=e.data.toView(e.model.getSelectedContent(t.selection));n.fire(`clipboardOutput`,{dataTransfer:a,content:o,method:r.name})};this.listenTo(n,`copy`,r,{priority:`low`}),this.listenTo(n,`cut`,((t,n)=>{e.isReadOnly?n.preventDefault():r(t,n)}),{priority:`low`}),this.listenTo(n,`clipboardOutput`,((n,r)=>{r.content.isEmpty||(r.dataTransfer.setData(`text/html`,this.editor.data.htmlProcessor.toData(r.content)),r.dataTransfer.setData(`text/plain`,Lm(r.content))),r.method==`cut`&&e.model.deleteContent(t.selection)}),{priority:`low`})}}class zm{constructor(e,t=20){this._batch=null,this.model=e,this._size=0,this.limit=t,this._isLocked=!1,this._changeCallback=(e,t)=>{t.isLocal&&t.isUndoable&&t!==this._batch&&this._reset(!0)},this._selectionChangeCallback=()=>{this._reset()},this.model.document.on(`change`,this._changeCallback),this.model.document.selection.on(`change:range`,this._selectionChangeCallback),this.model.document.selection.on(`change:attribute`,this._selectionChangeCallback)}get batch(){return this._batch||=this.model.createBatch({isTyping:!0}),this._batch}get size(){return this._size}input(e){this._size+=e,this._size>=this.limit&&this._reset(!0)}get isLocked(){return this._isLocked}lock(){this._isLocked=!0}unlock(){this._isLocked=!1}destroy(){this.model.document.off(`change`,this._changeCallback),this.model.document.selection.off(`change:range`,this._selectionChangeCallback),this.model.document.selection.off(`change:attribute`,this._selectionChangeCallback)}_reset(e=!1){this.isLocked&&!e||(this._batch=null,this._size=0)}}class Bm extends L{constructor(e,t){super(e),this._buffer=new zm(e.model,t)}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(e={}){let t=this.editor.model,n=t.document,r=e.text||``,i=r.length,a=n.selection;e.selection?a=e.selection:e.range&&(a=t.createSelection(e.range));let o=e.resultRange;t.enqueueChange(this._buffer.batch,(e=>{this._buffer.lock(),t.deleteContent(a),r&&t.insertContent(e.createText(r,n.selection.getAttributes()),a),o?e.setSelection(o):a.is(`documentSelection`)||e.setSelection(a),this._buffer.unlock(),this._buffer.input(i)}))}}let Vm=[`insertText`,`insertReplacementText`];class Hm extends dl{constructor(e){super(e),c.isAndroid&&Vm.push(`insertCompositionText`);let t=e.document;t.on(`beforeinput`,((n,r)=>{if(!this.isEnabled)return;let{data:i,targetRanges:a,inputType:o,domEvent:s}=r;if(!Vm.includes(o))return;let c=new g(t,`insertText`);t.fire(c,new pl(e,s,{text:i,selection:e.createSelection(a)})),c.stop.called&&n.stop()})),t.on(`compositionend`,((n,{data:r,domEvent:i})=>{this.isEnabled&&!c.isAndroid&&r&&t.fire(`insertText`,new pl(e,i,{text:r,selection:t.selection}))}),{priority:`lowest`})}observe(){}}class Um extends I{static get pluginName(){return`Input`}init(){let e=this.editor,t=e.model,n=e.editing.view,r=t.document.selection;n.addObserver(Hm);let i=new Bm(e,e.config.get(`typing.undoStep`)||20);e.commands.add(`insertText`,i),e.commands.add(`input`,i),this.listenTo(n.document,`insertText`,((r,i)=>{n.document.isComposing||i.preventDefault();let{text:a,selection:o,resultRange:s}=i,l=Array.from(o.getRanges()).map((t=>e.editing.mapper.toModelRange(t))),u=a;if(c.isAndroid){let e=Array.from(l[0].getItems()).reduce(((e,t)=>e+(t.is(`$textProxy`)?t.data:``)),``);e&&(e.length<=u.length?u.startsWith(e)&&(u=u.substring(e.length),l[0].start=l[0].start.getShiftedBy(e.length)):e.startsWith(u)&&(l[0].start=l[0].start.getShiftedBy(u.length),u=``))}let d={text:u,selection:t.createSelection(l)};s&&(d.resultRange=e.editing.mapper.toModelRange(s)),e.execute(`insertText`,d)})),c.isAndroid?this.listenTo(n.document,`keydown`,((e,a)=>{!r.isCollapsed&&a.keyCode==229&&n.document.isComposing&&Wm(t,i)})):this.listenTo(n.document,`compositionstart`,(()=>{r.isCollapsed||Wm(t,i)}))}}function Wm(e,t){if(!t.isEnabled)return;let n=t.buffer;n.lock(),e.enqueueChange(n.batch,(()=>{e.deleteContent(e.document.selection)})),n.unlock()}class Gm extends L{constructor(e,t){super(e),this.direction=t,this._buffer=new zm(e.model,e.config.get(`typing.undoStep`))}get buffer(){return this._buffer}execute(e={}){let t=this.editor.model,n=t.document;t.enqueueChange(this._buffer.batch,(r=>{this._buffer.lock();let i=r.createSelection(e.selection||n.selection),a=e.sequence||1,o=i.isCollapsed;if(i.isCollapsed&&t.modifySelection(i,{direction:this.direction,unit:e.unit,treatEmojiAsSingleUnit:!0}),this._shouldEntireContentBeReplacedWithParagraph(a))return void this._replaceEntireContentWithParagraph(r);if(this._shouldReplaceFirstBlockWithParagraph(i,a))return void this.editor.execute(`paragraph`,{selection:i});if(i.isCollapsed)return;let s=0;i.getFirstRange().getMinimalFlatRanges().forEach((e=>{s+=ke(e.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))})),t.deleteContent(i,{doNotResetEntireContent:o,direction:this.direction}),this._buffer.input(s),r.setSelection(i),this._buffer.unlock()}))}_shouldEntireContentBeReplacedWithParagraph(e){if(e>1)return!1;let t=this.editor.model,n=t.document.selection,r=t.schema.getLimitElement(n);if(!(n.isCollapsed&&n.containsEntireContent(r))||!t.schema.checkChild(r,`paragraph`))return!1;let i=r.getChild(0);return!i||!i.is(`element`,`paragraph`)}_replaceEntireContentWithParagraph(e){let t=this.editor.model,n=t.document.selection,r=t.schema.getLimitElement(n),i=e.createElement(`paragraph`);e.remove(e.createRangeIn(r)),e.insert(i,r),e.setSelection(i,0)}_shouldReplaceFirstBlockWithParagraph(e,t){let n=this.editor.model;if(t>1||this.direction!=`backward`||!e.isCollapsed)return!1;let r=e.getFirstPosition(),i=n.schema.getLimitElement(r),a=i.getChild(0);return r.parent==a&&!!e.containsEntireContent(a)&&!!n.schema.checkChild(i,`paragraph`)&&a.name!=`paragraph`}}let Km=`word`,qm=`selection`,Jm=`backward`,Ym=`forward`,Xm={deleteContent:{unit:qm,direction:Jm},deleteContentBackward:{unit:`codePoint`,direction:Jm},deleteWordBackward:{unit:Km,direction:Jm},deleteHardLineBackward:{unit:qm,direction:Jm},deleteSoftLineBackward:{unit:qm,direction:Jm},deleteContentForward:{unit:`character`,direction:Ym},deleteWordForward:{unit:Km,direction:Ym},deleteHardLineForward:{unit:qm,direction:Ym},deleteSoftLineForward:{unit:qm,direction:Ym}};class Zm extends dl{constructor(e){super(e);let t=e.document,n=0;t.on(`keydown`,(()=>{n++})),t.on(`keyup`,(()=>{n=0})),t.on(`beforeinput`,((r,i)=>{if(!this.isEnabled)return;let{targetRanges:a,domEvent:o,inputType:s}=i,l=Xm[s];if(!l)return;let u={direction:l.direction,unit:l.unit,sequence:n};u.unit==qm&&(u.selectionToRemove=e.createSelection(a[0])),c.isAndroid&&s===`deleteContentBackward`&&(u.sequence=1,a.length!=1||a[0].start.parent==a[0].end.parent&&a[0].start.offset+1==a[0].end.offset||(u.unit=qm,u.selectionToRemove=e.createSelection(a)));let d=new dc(t,`delete`,a[0]);t.fire(d,new pl(e,o,u)),d.stop.called&&r.stop()})),c.isBlink&&function(e){let t=e.view,n=t.document,r=null,i=!1;function a(e){return e==A.backspace||e==A.delete}function o(e){return e==A.backspace?Jm:Ym}n.on(`keydown`,((e,{keyCode:t})=>{r=t,i=!1})),n.on(`keyup`,((s,{keyCode:c,domEvent:l})=>{let u=n.selection,d=e.isEnabled&&c==r&&a(c)&&!u.isCollapsed&&!i;if(r=null,d){let e=new dc(n,`delete`,u.getFirstRange()),r={unit:qm,direction:o(c),selectionToRemove:u};n.fire(e,new pl(t,l,r))}})),n.on(`beforeinput`,((e,{inputType:t})=>{let n=Xm[t];a(r)&&n&&n.direction==o(r)&&(i=!0)}),{priority:`high`}),n.on(`beforeinput`,((e,{inputType:t,data:n})=>{r==A.delete&&t==`insertText`&&n==``&&e.stop()}),{priority:`high`})}(this)}observe(){}}class Qm extends I{static get pluginName(){return`Delete`}init(){let e=this.editor,t=e.editing.view,n=t.document,r=e.model.document;t.addObserver(Zm),this._undoOnBackspace=!1;let i=new Gm(e,`forward`);e.commands.add(`deleteForward`,i),e.commands.add(`forwardDelete`,i),e.commands.add(`delete`,new Gm(e,`backward`)),this.listenTo(n,`delete`,((r,i)=>{n.isComposing||i.preventDefault();let{direction:a,sequence:o,selectionToRemove:s,unit:c}=i,l=a===`forward`?`deleteForward`:`delete`,u={sequence:o};if(c==`selection`){let t=Array.from(s.getRanges()).map((t=>e.editing.mapper.toModelRange(t)));u.selection=e.model.createSelection(t)}else u.unit=c;e.execute(l,u),t.scrollToTheSelection()}),{priority:`low`}),this.editor.plugins.has(`UndoEditing`)&&(this.listenTo(n,`delete`,((t,n)=>{this._undoOnBackspace&&n.direction==`backward`&&n.sequence==1&&n.unit==`codePoint`&&(this._undoOnBackspace=!1,e.execute(`undo`),n.preventDefault(),t.stop())}),{context:`$capture`}),this.listenTo(r,`change`,(()=>{this._undoOnBackspace=!1})))}requestUndoOnBackspace(){this.editor.plugins.has(`UndoEditing`)&&(this._undoOnBackspace=!0)}}class $m extends I{static get requires(){return[Um,Qm]}static get pluginName(){return`Typing`}}function eh(e,t){let n=e.start;return{text:Array.from(e.getItems()).reduce(((e,r)=>r.is(`$text`)||r.is(`$textProxy`)?e+r.data:(n=t.createPositionAfter(r),``)),``),range:t.createRange(n,e.end)}}class th extends C(){constructor(e,t){super(),this.model=e,this.testCallback=t,this._hasMatch=!1,this.set(`isEnabled`,!0),this.on(`change:isEnabled`,(()=>{this.isEnabled?this._startListening():(this.stopListening(e.document.selection),this.stopListening(e.document))})),this._startListening()}get hasMatch(){return this._hasMatch}_startListening(){let e=this.model.document;this.listenTo(e.selection,`change:range`,((t,{directChange:n})=>{n&&(e.selection.isCollapsed?this._evaluateTextBeforeSelection(`selection`):this.hasMatch&&(this.fire(`unmatched`),this._hasMatch=!1))})),this.listenTo(e,`change:data`,((e,t)=>{!t.isUndo&&t.isLocal&&this._evaluateTextBeforeSelection(`data`,{batch:t})}))}_evaluateTextBeforeSelection(e,t={}){let n=this.model,r=n.document.selection,{text:i,range:a}=eh(n.createRange(n.createPositionAt(r.focus.parent,0),r.focus),n),o=this.testCallback(i);if(!o&&this.hasMatch&&this.fire(`unmatched`),this._hasMatch=!!o,o){let n=Object.assign(t,{text:i,range:a});typeof o==`object`&&Object.assign(n,o),this.fire(`matched:${e}`,n)}}}class nh extends I{static get pluginName(){return`TwoStepCaretMovement`}constructor(e){super(e),this.attributes=new Set,this._overrideUid=null}init(){let e=this.editor,t=e.model,n=e.editing.view,r=e.locale,i=t.document.selection;this.listenTo(n.document,`arrowKey`,((e,t)=>{if(!i.isCollapsed||t.shiftKey||t.altKey||t.ctrlKey)return;let n=t.keyCode==A.arrowright,a=t.keyCode==A.arrowleft;if(!n&&!a)return;let o=r.contentLanguageDirection,s=!1;s=o===`ltr`&&n||o===`rtl`&&a?this._handleForwardMovement(t):this._handleBackwardMovement(t),!0===s&&e.stop()}),{context:`$text`,priority:`highest`}),this._isNextGravityRestorationSkipped=!1,this.listenTo(i,`change:range`,((e,t)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!t.directChange&&oh(i.getFirstPosition(),this.attributes)||this._restoreGravity())}))}registerAttribute(e){this.attributes.add(e)}_handleForwardMovement(e){let t=this.attributes,n=this.editor.model.document.selection,r=n.getFirstPosition();return!this._isGravityOverridden&&(!r.isAtStart||!rh(n,t))&&!!oh(r,t)&&(ah(e),this._overrideGravity(),!0)}_handleBackwardMovement(e){let t=this.attributes,n=this.editor.model,r=n.document.selection,i=r.getFirstPosition();return this._isGravityOverridden?(ah(e),this._restoreGravity(),ih(n,t,i),!0):i.isAtStart?!!rh(r,t)&&(ah(e),ih(n,t,i),!0):!!function(e,t){return oh(e.getShiftedBy(-1),t)}(i,t)&&(i.isAtEnd&&!rh(r,t)&&oh(i,t)?(ah(e),ih(n,t,i),!0):(this._isNextGravityRestorationSkipped=!0,this._overrideGravity(),!1))}get _isGravityOverridden(){return!!this._overrideUid}_overrideGravity(){this._overrideUid=this.editor.model.change((e=>e.overrideSelectionGravity()))}_restoreGravity(){this.editor.model.change((e=>{e.restoreSelectionGravity(this._overrideUid),this._overrideUid=null}))}}function rh(e,t){for(let n of t)if(e.hasAttribute(n))return!0;return!1}function ih(e,t,n){let r=n.nodeBefore;e.change((e=>{r?e.setSelectionAttribute(r.getAttributes()):e.removeSelectionAttribute(t)}))}function ah(e){e.preventDefault()}function oh(e,t){let{nodeBefore:n,nodeAfter:r}=e;for(let e of t){let t=n?n.getAttribute(e):void 0;if((r?r.getAttribute(e):void 0)!==t)return!0}return!1}var sh=/[\\^$.*+?()[\]{}|]/g,ch=RegExp(sh.source);let lh=function(e){return(e=gs(e))&&ch.test(e)?e.replace(sh,`\\$&`):e},uh={copyright:{from:`(c)`,to:`©`},registeredTrademark:{from:`(r)`,to:`®`},trademark:{from:`(tm)`,to:`™`},oneHalf:{from:/(^|[^/a-z0-9])(1\/2)([^/a-z0-9])$/i,to:[null,`½`,null]},oneThird:{from:/(^|[^/a-z0-9])(1\/3)([^/a-z0-9])$/i,to:[null,`⅓`,null]},twoThirds:{from:/(^|[^/a-z0-9])(2\/3)([^/a-z0-9])$/i,to:[null,`⅔`,null]},oneForth:{from:/(^|[^/a-z0-9])(1\/4)([^/a-z0-9])$/i,to:[null,`¼`,null]},threeQuarters:{from:/(^|[^/a-z0-9])(3\/4)([^/a-z0-9])$/i,to:[null,`¾`,null]},lessThanOrEqual:{from:`<=`,to:`≤`},greaterThanOrEqual:{from:`>=`,to:`≥`},notEqual:{from:`!=`,to:`≠`},arrowLeft:{from:`<-`,to:`←`},arrowRight:{from:`->`,to:`→`},horizontalEllipsis:{from:`...`,to:`…`},enDash:{from:/(^| )(--)( )$/,to:[null,`–`,null]},emDash:{from:/(^| )(---)( )$/,to:[null,`—`,null]},quotesPrimary:{from:gh(`"`),to:[null,`“`,null,`”`]},quotesSecondary:{from:gh(`'`),to:[null,`‘`,null,`’`]},quotesPrimaryEnGb:{from:gh(`'`),to:[null,`‘`,null,`’`]},quotesSecondaryEnGb:{from:gh(`"`),to:[null,`“`,null,`”`]},quotesPrimaryPl:{from:gh(`"`),to:[null,`„`,null,`”`]},quotesSecondaryPl:{from:gh(`'`),to:[null,`‚`,null,`’`]}},dh={symbols:[`copyright`,`registeredTrademark`,`trademark`],mathematical:[`oneHalf`,`oneThird`,`twoThirds`,`oneForth`,`threeQuarters`,`lessThanOrEqual`,`greaterThanOrEqual`,`notEqual`,`arrowLeft`,`arrowRight`],typography:[`horizontalEllipsis`,`enDash`,`emDash`],quotes:[`quotesPrimary`,`quotesSecondary`]},fh=[`symbols`,`mathematical`,`typography`,`quotes`];function ph(e){return typeof e==`string`?RegExp(`(${lh(e)})$`):e}function mh(e){return typeof e==`string`?()=>[e]:e instanceof Array?()=>e:e}function hh(e){return(e.textNode?e.textNode:e.nodeAfter).getAttributes()}function gh(e){return RegExp(`(^|\\s)(${e})([^${e}]*)(${e})$`)}function _h(e,t,n,r){return r.createRange(vh(e,t,n,!0,r),vh(e,t,n,!1,r))}function vh(e,t,n,r,i){let a=e.textNode||(r?e.nodeBefore:e.nodeAfter),o=null;for(;a&&a.getAttribute(t)==n;)o=a,a=r?a.previousSibling:a.nextSibling;return o?i.createPositionAt(o,r?`before`:`after`):e}function*yh(e,t){for(let n of t)n&&e.getAttributeProperties(n[0]).copyOnEnter&&(yield n)}class bh extends L{execute(){this.editor.model.change((e=>{this.enterBlock(e),this.fire(`afterExecute`,{writer:e})}))}enterBlock(e){let t=this.editor.model,n=t.document.selection,r=t.schema,i=n.isCollapsed,a=n.getFirstRange(),o=a.start.parent,s=a.end.parent;if(r.isLimit(o)||r.isLimit(s))return i||o!=s||t.deleteContent(n),!1;if(i){let t=yh(e.model.schema,n.getAttributes());return xh(e,a.start),e.setSelectionAttribute(t),!0}{let r=!(a.start.isAtStart&&a.end.isAtEnd),i=o==s;if(t.deleteContent(n,{leaveUnmerged:r}),r){if(i)return xh(e,n.focus),!0;e.setSelection(s,0)}}return!1}}function xh(e,t){e.split(t),e.setSelection(t.parent.nextSibling,0)}let Sh={insertParagraph:{isSoft:!1},insertLineBreak:{isSoft:!0}};class Ch extends dl{constructor(e){super(e);let t=this.document;t.on(`beforeinput`,((n,r)=>{if(!this.isEnabled)return;let i=r.domEvent,a=Sh[r.inputType];if(!a)return;let o=new dc(t,`enter`,r.targetRanges[0]);t.fire(o,new pl(e,i,{isSoft:a.isSoft})),o.stop.called&&n.stop()}))}observe(){}}class wh extends I{static get pluginName(){return`Enter`}init(){let e=this.editor,t=e.editing.view,n=t.document;t.addObserver(Ch),e.commands.add(`enter`,new bh(e)),this.listenTo(n,`enter`,((r,i)=>{n.isComposing||i.preventDefault(),i.isSoft||(e.execute(`enter`),t.scrollToTheSelection())}),{priority:`low`})}}class Th extends L{execute(){let e=this.editor.model,t=e.document;e.change((n=>{(function(e,t,n){let r=n.isCollapsed,i=n.getFirstRange(),a=i.start.parent,o=i.end.parent,s=a==o;if(r){let r=yh(e.schema,n.getAttributes());Eh(e,t,i.end),t.removeSelectionAttribute(n.getAttributeKeys()),t.setSelectionAttribute(r)}else{let r=!(i.start.isAtStart&&i.end.isAtEnd);e.deleteContent(n,{leaveUnmerged:r}),s?Eh(e,t,n.focus):r&&t.setSelection(o,0)}})(e,n,t.selection),this.fire(`afterExecute`,{writer:n})}))}refresh(){let e=this.editor.model,t=e.document;this.isEnabled=function(e,t){if(t.rangeCount>1)return!1;let n=t.anchor;if(!n||!e.checkChild(n,`softBreak`))return!1;let r=t.getFirstRange(),i=r.start.parent,a=r.end.parent;return!((Dh(i,e)||Dh(a,e))&&i!==a)}(e.schema,t.selection)}}function Eh(e,t,n){let r=t.createElement(`softBreak`);e.insertContent(r,n),t.setSelection(r,`after`)}function Dh(e,t){return!e.is(`rootElement`)&&(t.isLimit(e)||Dh(e.parent,t))}class Oh extends I{static get pluginName(){return`ShiftEnter`}init(){let e=this.editor,t=e.model.schema,n=e.conversion,r=e.editing.view,i=r.document;t.register(`softBreak`,{allowWhere:`$text`,isInline:!0}),n.for(`upcast`).elementToElement({model:`softBreak`,view:`br`}),n.for(`downcast`).elementToElement({model:`softBreak`,view:(e,{writer:t})=>t.createEmptyElement(`br`)}),r.addObserver(Ch),e.commands.add(`shiftEnter`,new Th(e)),this.listenTo(i,`enter`,((t,n)=>{i.isComposing||n.preventDefault(),n.isSoft&&(e.execute(`shiftEnter`),r.scrollToTheSelection())}),{priority:`low`})}}class kh extends x(){constructor(){super(),this._stack=[]}add(e,t){let n=this._stack,r=n[0];this._insertDescriptor(e);let i=n[0];r===i||Ah(r,i)||this.fire(`change:top`,{oldDescriptor:r,newDescriptor:i,writer:t})}remove(e,t){let n=this._stack,r=n[0];this._removeDescriptor(e);let i=n[0];r===i||Ah(r,i)||this.fire(`change:top`,{oldDescriptor:r,newDescriptor:i,writer:t})}_insertDescriptor(e){let t=this._stack,n=t.findIndex((t=>t.id===e.id));if(Ah(e,t[n]))return;n>-1&&t.splice(n,1);let r=0;for(;t[r]&&jh(t[r],e);)r++;t.splice(r,0,e)}_removeDescriptor(e){let t=this._stack,n=t.findIndex((t=>t.id===e));n>-1&&t.splice(n,1)}}function Ah(e,t){return e&&t&&e.priority==t.priority&&Mh(e.classes)==Mh(t.classes)}function jh(e,t){return e.priority>t.priority||!(e.priority<t.priority)&&Mh(e.classes)>Mh(t.classes)}function Mh(e){return Array.isArray(e)?e.sort().join(`,`):e}let Nh=`ck-widget_selected`;function Z(e){return!!e.is(`element`)&&!!e.getCustomProperty(`widget`)}function Ph(e,t,n={}){if(!e.is(`containerElement`))throw new y(`widget-to-widget-wrong-element-type`,null,{element:e});return t.setAttribute(`contenteditable`,`false`,e),t.addClass(`ck-widget`,e),t.setCustomProperty(`widget`,!0,e),e.getFillerOffset=Bh,t.setCustomProperty(`widgetLabel`,[],e),n.label&&function(e,t){e.getCustomProperty(`widgetLabel`).push(t)}(e,n.label),n.hasSelectionHandle&&function(e,t){let n=t.createUIElement(`div`,{class:`ck ck-widget__selection-handle`},(function(e){let t=this.toDomElement(e),n=new po;return n.set(`content`,`<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></svg>`),n.render(),t.appendChild(n.element),t}));t.insert(t.createPositionAt(e,0),n),t.addClass([`ck-widget_with-selection-handle`],e)}(e,t),Lh(e,t),e}function Fh(e,t,n){if(t.classes&&n.addClass(j(t.classes),e),t.attributes)for(let r in t.attributes)n.setAttribute(r,t.attributes[r],e)}function Ih(e,t,n){if(t.classes&&n.removeClass(j(t.classes),e),t.attributes)for(let r in t.attributes)n.removeAttribute(r,e)}function Lh(e,t,n=Fh,r=Ih){let i=new kh;i.on(`change:top`,((t,i)=>{i.oldDescriptor&&r(e,i.oldDescriptor,i.writer),i.newDescriptor&&n(e,i.newDescriptor,i.writer)})),t.setCustomProperty(`addHighlight`,((e,t,n)=>i.add(t,n)),e),t.setCustomProperty(`removeHighlight`,((e,t,n)=>i.remove(t,n)),e)}function Rh(e,t,n={}){return t.addClass([`ck-editor__editable`,`ck-editor__nested-editable`],e),t.setAttribute(`role`,`textbox`,e),n.label&&t.setAttribute(`aria-label`,n.label,e),t.setAttribute(`contenteditable`,e.isReadOnly?`false`:`true`,e),e.on(`change:isReadOnly`,((n,r,i)=>{t.setAttribute(`contenteditable`,i?`false`:`true`,e)})),e.on(`change:isFocused`,((n,r,i)=>{i?t.addClass(`ck-editor__nested-editable_focused`,e):t.removeClass(`ck-editor__nested-editable_focused`,e)})),Lh(e,t),e}function zh(e,t){let n=e.getSelectedElement();if(n){let r=Uh(e);if(r)return t.createRange(t.createPositionAt(n,r))}return up(e,t)}function Bh(){return null}let Vh=`widget-type-around`;function Hh(e,t,n){return!!e&&Z(e)&&!n.isInline(t)}function Uh(e){return e.getAttribute(Vh)}var Wh=i(4921);N()(Wh.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Wh.Z.locals;let Gh=[`before`,`after`],Kh=new DOMParser().parseFromString(`<svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg"><path d="M9.055.263v3.972h-6.77M1 4.216l2-2.038m-2 2 2 2.038"/></svg>`,`image/svg+xml`).firstChild,qh=`ck-widget__type-around_disabled`;class Jh extends I{static get pluginName(){return`WidgetTypeAround`}static get requires(){return[wh,Qm]}constructor(e){super(e),this._currentFakeCaretModelElement=null}init(){let e=this.editor,t=e.editing.view;this.on(`change:isEnabled`,((n,r,i)=>{t.change((e=>{for(let n of t.document.roots)i?e.removeClass(qh,n):e.addClass(qh,n)})),i||e.model.change((e=>{e.removeSelectionAttribute(Vh)}))})),this._enableTypeAroundUIInjection(),this._enableInsertingParagraphsOnButtonClick(),this._enableInsertingParagraphsOnEnterKeypress(),this._enableInsertingParagraphsOnTypingKeystroke(),this._enableTypeAroundFakeCaretActivationUsingKeyboardArrows(),this._enableDeleteIntegration(),this._enableInsertContentIntegration(),this._enableInsertObjectIntegration(),this._enableDeleteContentIntegration()}destroy(){super.destroy(),this._currentFakeCaretModelElement=null}_insertParagraph(e,t){let n=this.editor,r=n.editing.view,i=n.model.schema.getAttributesWithProperty(e,`copyOnReplace`,!0);n.execute(`insertParagraph`,{position:n.model.createPositionAt(e,t),attributes:i}),r.focus(),r.scrollToTheSelection()}_listenToIfEnabled(e,t,n,r){this.listenTo(e,t,((...e)=>{this.isEnabled&&n(...e)}),r)}_insertParagraphAccordingToFakeCaretPosition(){let e=this.editor.model.document.selection,t=Uh(e);if(!t)return!1;let n=e.getSelectedElement();return this._insertParagraph(n,t),!0}_enableTypeAroundUIInjection(){let e=this.editor,t=e.model.schema,n=e.locale.t,r={before:n(`Insert paragraph before block`),after:n(`Insert paragraph after block`)};e.editing.downcastDispatcher.on(`insert`,((e,i,a)=>{let o=a.mapper.toViewElement(i.item);o&&Hh(o,i.item,t)&&((function(e,t,n){let r=e.createUIElement(`div`,{class:`ck ck-reset_all ck-widget__type-around`},(function(e){let n=this.toDomElement(e);return function(e,t){for(let n of Gh){let r=new Ua({tag:`div`,attributes:{class:[`ck`,`ck-widget__type-around__button`,`ck-widget__type-around__button_${n}`],title:t[n],"aria-hidden":`true`},children:[e.ownerDocument.importNode(Kh,!0)]});e.appendChild(r.render())}}(n,t),function(e){let t=new Ua({tag:`div`,attributes:{class:[`ck`,`ck-widget__type-around__fake-caret`]}});e.appendChild(t.render())}(n),n}));e.insert(e.createPositionAt(n,`end`),r)})(a.writer,r,o),o.getCustomProperty(`widgetLabel`).push((()=>this.isEnabled?n(`Press Enter to type after or press Shift + Enter to type before the widget`):``)))}),{priority:`low`})}_enableTypeAroundFakeCaretActivationUsingKeyboardArrows(){let e=this.editor,t=e.model,n=t.document.selection,r=t.schema,i=e.editing.view;function a(e){return`ck-widget_type-around_show-fake-caret_${e}`}this._listenToIfEnabled(i.document,`arrowKey`,((e,t)=>{this._handleArrowKeyPress(e,t)}),{context:[Z,`$text`],priority:`high`}),this._listenToIfEnabled(n,`change:range`,((t,n)=>{n.directChange&&e.model.change((e=>{e.removeSelectionAttribute(Vh)}))})),this._listenToIfEnabled(t.document,`change:data`,(()=>{let t=n.getSelectedElement();t&&Hh(e.editing.mapper.toViewElement(t),t,r)||e.model.change((e=>{e.removeSelectionAttribute(Vh)}))})),this._listenToIfEnabled(e.editing.downcastDispatcher,`selection`,((e,t,n)=>{let i=n.writer;if(this._currentFakeCaretModelElement){let e=n.mapper.toViewElement(this._currentFakeCaretModelElement);e&&(i.removeClass(Gh.map(a),e),this._currentFakeCaretModelElement=null)}let o=t.selection.getSelectedElement();if(!o)return;let s=n.mapper.toViewElement(o);if(!Hh(s,o,r))return;let c=Uh(t.selection);c&&(i.addClass(a(c),s),this._currentFakeCaretModelElement=o)})),this._listenToIfEnabled(e.ui.focusTracker,`change:isFocused`,((t,n,r)=>{r||e.model.change((e=>{e.removeSelectionAttribute(Vh)}))}))}_handleArrowKeyPress(e,t){let n=this.editor,r=n.model,i=r.document.selection,a=r.schema,o=n.editing.view,s=function(e,t){let n=Da(e,t);return n===`down`||n===`right`}(t.keyCode,n.locale.contentLanguageDirection),c=o.document.selection.getSelectedElement(),l;Hh(c,n.editing.mapper.toModelElement(c),a)?l=this._handleArrowKeyPressOnSelectedWidget(s):i.isCollapsed?l=this._handleArrowKeyPressWhenSelectionNextToAWidget(s):t.shiftKey||(l=this._handleArrowKeyPressWhenNonCollapsedSelection(s)),l&&(t.preventDefault(),e.stop())}_handleArrowKeyPressOnSelectedWidget(e){let t=this.editor.model,n=Uh(t.document.selection);return t.change((t=>n?n===(e?`after`:`before`)?!1:(t.removeSelectionAttribute(Vh),!0):(t.setSelectionAttribute(Vh,e?`after`:`before`),!0)))}_handleArrowKeyPressWhenSelectionNextToAWidget(e){let t=this.editor,n=t.model,r=n.schema,i=t.plugins.get(`Widget`),a=i._getObjectElementNextToSelection(e);return!!Hh(t.editing.mapper.toViewElement(a),a,r)&&(n.change((t=>{i._setSelectionOverElement(a),t.setSelectionAttribute(Vh,e?`before`:`after`)})),!0)}_handleArrowKeyPressWhenNonCollapsedSelection(e){let t=this.editor,n=t.model,r=n.schema,i=t.editing.mapper,a=n.document.selection,o=e?a.getLastPosition().nodeBefore:a.getFirstPosition().nodeAfter;return!!Hh(i.toViewElement(o),o,r)&&(n.change((t=>{t.setSelection(o,`on`),t.setSelectionAttribute(Vh,e?`after`:`before`)})),!0)}_enableInsertingParagraphsOnButtonClick(){let e=this.editor,t=e.editing.view;this._listenToIfEnabled(t.document,`mousedown`,((n,r)=>{let i=r.domTarget.closest(`.ck-widget__type-around__button`);if(!i)return;let a=function(e){return e.classList.contains(`ck-widget__type-around__button_before`)?`before`:`after`}(i),o=function(e,t){let n=e.closest(`.ck-widget`);return t.mapDomToView(n)}(i,t.domConverter),s=e.editing.mapper.toModelElement(o);this._insertParagraph(s,a),r.preventDefault(),n.stop()}))}_enableInsertingParagraphsOnEnterKeypress(){let e=this.editor,t=e.model.document.selection,n=e.editing.view;this._listenToIfEnabled(n.document,`enter`,((n,r)=>{if(n.eventPhase!=`atTarget`)return;let i=t.getSelectedElement(),a=e.editing.mapper.toViewElement(i),o=e.model.schema,s;this._insertParagraphAccordingToFakeCaretPosition()?s=!0:Hh(a,i,o)&&(this._insertParagraph(i,r.isSoft?`before`:`after`),s=!0),s&&(r.preventDefault(),n.stop())}),{context:Z})}_enableInsertingParagraphsOnTypingKeystroke(){let e=this.editor.editing.view.document;this._listenToIfEnabled(e,`insertText`,((t,n)=>{this._insertParagraphAccordingToFakeCaretPosition()&&(n.selection=e.selection)}),{priority:`high`}),c.isAndroid?this._listenToIfEnabled(e,`keydown`,((e,t)=>{t.keyCode==229&&this._insertParagraphAccordingToFakeCaretPosition()})):this._listenToIfEnabled(e,`compositionstart`,(()=>{this._insertParagraphAccordingToFakeCaretPosition()}),{priority:`high`})}_enableDeleteIntegration(){let e=this.editor,t=e.editing.view,n=e.model,r=n.schema;this._listenToIfEnabled(t.document,`delete`,((t,i)=>{if(t.eventPhase!=`atTarget`)return;let a=Uh(n.document.selection);if(!a)return;let o=i.direction,s=n.document.selection.getSelectedElement(),c=o==`forward`;if(a===`before`===c)e.execute(`delete`,{selection:n.createSelection(s,`on`)});else{let t=r.getNearestSelectionRange(n.createPositionAt(s,a),o);if(t)if(t.isCollapsed){let i=n.createSelection(t.start);if(n.modifySelection(i,{direction:o}),i.focus.isEqual(t.start)){let e=function(e,t){let n=t;for(let r of t.getAncestors({parentFirst:!0})){if(r.childCount>1||e.isLimit(r))break;n=r}return n}(r,t.start.parent);n.deleteContent(n.createSelection(e,`on`),{doNotAutoparagraph:!0})}else n.change((n=>{n.setSelection(t),e.execute(c?`deleteForward`:`delete`)}))}else n.change((n=>{n.setSelection(t),e.execute(c?`deleteForward`:`delete`)}))}i.preventDefault(),t.stop()}),{context:Z})}_enableInsertContentIntegration(){let e=this.editor,t=this.editor.model,n=t.document.selection;this._listenToIfEnabled(e.model,`insertContent`,((e,[r,i])=>{if(i&&!i.is(`documentSelection`))return;let a=Uh(n);return a?(e.stop(),t.change((e=>{let i=n.getSelectedElement(),o=t.createPositionAt(i,a),s=e.createSelection(o),c=t.insertContent(r,s);return e.setSelection(s),c}))):void 0}),{priority:`high`})}_enableInsertObjectIntegration(){let e=this.editor,t=this.editor.model.document.selection;this._listenToIfEnabled(e.model,`insertObject`,((e,n)=>{let[,r,,i={}]=n;if(r&&!r.is(`documentSelection`))return;let a=Uh(t);a&&(i.findOptimalPosition=a,n[3]=i)}),{priority:`high`})}_enableDeleteContentIntegration(){let e=this.editor,t=this.editor.model.document.selection;this._listenToIfEnabled(e.model,`deleteContent`,((e,[n])=>{n&&!n.is(`documentSelection`)||Uh(t)&&e.stop()}),{priority:`high`})}}function Yh(e){let t=e.model;return(n,r)=>{let i=r.keyCode==A.arrowup,a=r.keyCode==A.arrowdown,o=r.shiftKey,s=t.document.selection;if(!i&&!a)return;let c=a;if(o&&function(e,t){return!e.isCollapsed&&e.isBackward==t}(s,c))return;let l=function(e,t,n){let r=e.model;if(n){let e=t.isCollapsed?t.focus:t.getLastPosition(),n=Xh(r,e,`forward`);if(!n)return null;let i=r.createRange(e,n),a=Zh(r.schema,i,`backward`);return a?r.createRange(e,a):null}{let e=t.isCollapsed?t.focus:t.getFirstPosition(),n=Xh(r,e,`backward`);if(!n)return null;let i=r.createRange(n,e),a=Zh(r.schema,i,`forward`);return a?r.createRange(a,e):null}}(e,s,c);if(l){if(l.isCollapsed&&(s.isCollapsed||o))return;(l.isCollapsed||function(e,t,n){let r=e.model,i=e.view.domConverter;if(n){let e=r.createSelection(t.start);r.modifySelection(e),e.focus.isAtEnd||t.start.isEqual(e.focus)||(t=r.createRange(e.focus,t.end))}let a=e.mapper.toViewRange(t),o=i.viewRangeToDom(a),s=O.getDomRangeRects(o),c;for(let e of s)if(c!==void 0){if(Math.round(e.top)>=c)return!1;c=Math.max(c,Math.round(e.bottom))}else c=Math.round(e.bottom);return!0}(e,l,c))&&(t.change((e=>{let n=c?l.end:l.start;if(o){let r=t.createSelection(s.anchor);r.setFocus(n),e.setSelection(r)}else e.setSelection(n)})),n.stop(),r.preventDefault(),r.stopPropagation())}}}function Xh(e,t,n){let r=e.schema,i=e.createRangeIn(t.root),a=n==`forward`?`elementStart`:`elementEnd`;for(let{previousPosition:e,item:o,type:s}of i.getWalker({startPosition:t,direction:n})){if(r.isLimit(o)&&!r.isInline(o))return e;if(s==a&&r.isBlock(o))return null}return null}function Zh(e,t,n){let r=n==`backward`?t.end:t.start;if(e.checkChild(r,`$text`))return r;for(let{nextPosition:r}of t.getWalker({direction:n}))if(e.checkChild(r,`$text`))return r;return null}var Qh=i(3488);N()(Qh.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Qh.Z.locals;class $h extends I{static get pluginName(){return`Widget`}static get requires(){return[Jh,Qm]}init(){let e=this.editor,t=e.editing.view,n=t.document;this._previouslySelected=new Set,this.editor.editing.downcastDispatcher.on(`selection`,((t,n,r)=>{let i=r.writer,a=n.selection;if(a.isCollapsed)return;let o=a.getSelectedElement();if(!o)return;let s=e.editing.mapper.toViewElement(o);var c;Z(s)&&r.consumable.consume(a,`selection`)&&i.setSelection(i.createRangeOn(s),{fake:!0,label:(c=s,c.getCustomProperty(`widgetLabel`).reduce(((e,t)=>typeof t==`function`?e?e+`. `+t():t():e?e+`. `+t:t),``))})})),this.editor.editing.downcastDispatcher.on(`selection`,((e,t,n)=>{this._clearPreviouslySelectedWidgets(n.writer);let r=n.writer,i=r.document.selection,a=null;for(let e of i.getRanges())for(let t of e){let e=t.item;Z(e)&&!eg(e,a)&&(r.addClass(Nh,e),this._previouslySelected.add(e),a=e)}}),{priority:`low`}),t.addObserver(vp),this.listenTo(n,`mousedown`,((...e)=>this._onMousedown(...e))),this.listenTo(n,`arrowKey`,((...e)=>{this._handleSelectionChangeOnArrowKeyPress(...e)}),{context:[Z,`$text`]}),this.listenTo(n,`arrowKey`,((...e)=>{this._preventDefaultOnArrowKeyPress(...e)}),{context:`$root`}),this.listenTo(n,`arrowKey`,Yh(this.editor.editing),{context:`$text`}),this.listenTo(n,`delete`,((e,t)=>{this._handleDelete(t.direction==`forward`)&&(t.preventDefault(),e.stop())}),{context:`$root`})}_onMousedown(e,t){let n=this.editor,r=n.editing.view,i=r.document,a=t.target;if(function(e){let t=e;for(;t;){if(t.is(`editableElement`)&&!t.is(`rootElement`))return!0;if(Z(t))return!1;t=t.parent}return!1}(a)){if((c.isSafari||c.isGecko)&&t.domEvent.detail>=3){let e=n.editing.mapper,r=a.is(`attributeElement`)?a.findAncestor((e=>!e.is(`attributeElement`))):a,i=e.toModelElement(r);t.preventDefault(),this.editor.model.change((e=>{e.setSelection(i,`in`)}))}return}if(!Z(a)&&(a=a.findAncestor(Z),!a))return;c.isAndroid&&t.preventDefault(),i.isFocused||r.focus();let o=n.editing.mapper.toModelElement(a);this._setSelectionOverElement(o)}_handleSelectionChangeOnArrowKeyPress(e,t){let n=t.keyCode,r=this.editor.model,i=r.schema,a=r.document.selection,o=a.getSelectedElement(),s=Da(n,this.editor.locale.contentLanguageDirection),c=s==`down`||s==`right`,l=s==`up`||s==`down`;if(o&&i.isObject(o)){let n=c?a.getLastPosition():a.getFirstPosition(),o=i.getNearestSelectionRange(n,c?`forward`:`backward`);o&&(r.change((e=>{e.setSelection(o)})),t.preventDefault(),e.stop());return}if(!a.isCollapsed&&!t.shiftKey){let n=a.getFirstPosition(),o=a.getLastPosition(),s=n.nodeAfter,l=o.nodeBefore;(s&&i.isObject(s)||l&&i.isObject(l))&&(r.change((e=>{e.setSelection(c?o:n)})),t.preventDefault(),e.stop());return}if(!a.isCollapsed)return;let u=this._getObjectElementNextToSelection(c);if(u&&i.isObject(u)){if(i.isInline(u)&&l)return;this._setSelectionOverElement(u),t.preventDefault(),e.stop()}}_preventDefaultOnArrowKeyPress(e,t){let n=this.editor.model,r=n.schema,i=n.document.selection.getSelectedElement();i&&r.isObject(i)&&(t.preventDefault(),e.stop())}_handleDelete(e){if(this.editor.isReadOnly)return;let t=this.editor.model.document.selection;if(!t.isCollapsed)return;let n=this._getObjectElementNextToSelection(e);return n?(this.editor.model.change((e=>{let r=t.anchor.parent;for(;r.isEmpty;){let t=r;r=t.parent,e.remove(t)}this._setSelectionOverElement(n)})),!0):void 0}_setSelectionOverElement(e){this.editor.model.change((t=>{t.setSelection(t.createRangeOn(e))}))}_getObjectElementNextToSelection(e){let t=this.editor.model,n=t.schema,r=t.document.selection,i=t.createSelection(r);if(t.modifySelection(i,{direction:e?`forward`:`backward`}),i.isEqual(r))return null;let a=e?i.focus.nodeBefore:i.focus.nodeAfter;return a&&n.isObject(a)?a:null}_clearPreviouslySelectedWidgets(e){for(let t of this._previouslySelected)e.removeClass(Nh,t);this._previouslySelected.clear()}}function eg(e,t){return!!t&&Array.from(e.getAncestors()).includes(t)}class tg extends I{static get requires(){return[Sm]}static get pluginName(){return`WidgetToolbarRepository`}init(){let e=this.editor;if(e.plugins.has(`BalloonToolbar`)){let t=e.plugins.get(`BalloonToolbar`);this.listenTo(t,`show`,(t=>{(function(e){let t=e.getSelectedElement();return!(!t||!Z(t))})(e.editing.view.document.selection)&&t.stop()}),{priority:`high`})}this._toolbarDefinitions=new Map,this._balloon=this.editor.plugins.get(`ContextualBalloon`),this.on(`change:isEnabled`,(()=>{this._updateToolbarsVisibility()})),this.listenTo(e.ui,`update`,(()=>{this._updateToolbarsVisibility()})),this.listenTo(e.ui.focusTracker,`change:isFocused`,(()=>{this._updateToolbarsVisibility()}),{priority:`low`})}destroy(){super.destroy();for(let e of this._toolbarDefinitions.values())e.view.destroy()}register(e,{ariaLabel:t,items:n,getRelatedElement:r,balloonClassName:i=`ck-toolbar-container`}){if(!n.length)return void b(`widget-toolbar-no-items`,{toolbarId:e});let a=this.editor,o=a.t,s=new kp(a.locale);if(s.ariaLabel=t||o(`Widget toolbar`),this._toolbarDefinitions.has(e))throw new y(`widget-toolbar-duplicated`,this,{toolbarId:e});let c={view:s,getRelatedElement:r,balloonClassName:i,itemsConfig:n,initialized:!1};a.ui.addToolbar(s,{isContextual:!0,beforeFocus:()=>{let e=r(a.editing.view.document.selection);e&&this._showToolbar(c,e)},afterBlur:()=>{this._hideToolbar(c)}}),this._toolbarDefinitions.set(e,c)}_updateToolbarsVisibility(){let e=0,t=null,n=null;for(let r of this._toolbarDefinitions.values()){let i=r.getRelatedElement(this.editor.editing.view.document.selection);if(this.isEnabled&&i)if(this.editor.ui.focusTracker.isFocused){let a=i.getAncestors().length;a>e&&(e=a,t=i,n=r)}else this._isToolbarVisible(r)&&this._hideToolbar(r);else this._isToolbarInBalloon(r)&&this._hideToolbar(r)}n&&this._showToolbar(n,t)}_hideToolbar(e){this._balloon.remove(e.view),this.stopListening(this._balloon,`change:visibleView`)}_showToolbar(e,t){this._isToolbarVisible(e)?ng(this.editor,t):this._isToolbarInBalloon(e)||(e.initialized||(e.initialized=!0,e.view.fillFromConfig(e.itemsConfig,this.editor.ui.componentFactory)),this._balloon.add({view:e.view,position:rg(this.editor,t),balloonClassName:e.balloonClassName}),this.listenTo(this._balloon,`change:visibleView`,(()=>{for(let e of this._toolbarDefinitions.values())if(this._isToolbarVisible(e)){let t=e.getRelatedElement(this.editor.editing.view.document.selection);ng(this.editor,t)}})))}_isToolbarVisible(e){return this._balloon.visibleView===e.view}_isToolbarInBalloon(e){return this._balloon.hasView(e.view)}}function ng(e,t){let n=e.plugins.get(`ContextualBalloon`),r=rg(e,t);n.updatePosition(r)}function rg(e,t){let n=e.editing.view,r=Jp.defaultPositions;return{target:n.domConverter.mapViewToDom(t),positions:[r.northArrowSouth,r.northArrowSouthWest,r.northArrowSouthEast,r.southArrowNorth,r.southArrowNorthWest,r.southArrowNorthEast,r.viewportStickyNorth]}}var ig=i(8506);N()(ig.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),ig.Z.locals;var ag=`Expected a function`;let og=function(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(ag);return S(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),Al(e,t,{leading:r,maxWait:t,trailing:i})};var sg=i(903);N()(sg.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),sg.Z.locals;class cg extends I{static get pluginName(){return`DragDrop`}static get requires(){return[Rm,$h]}init(){let e=this.editor,t=e.editing.view;this._draggedRange=null,this._draggingUid=``,this._draggableElement=null,this._updateDropMarkerThrottled=og((e=>this._updateDropMarker(e)),40),this._removeDropMarkerDelayed=dg((()=>this._removeDropMarker()),40),this._clearDraggableAttributesDelayed=dg((()=>this._clearDraggableAttributes()),40),t.addObserver(Fm),t.addObserver(vp),this._setupDragging(),this._setupContentInsertionIntegration(),this._setupClipboardInputIntegration(),this._setupDropMarker(),this._setupDraggableAttributeHandling(),this.listenTo(e,`change:isReadOnly`,((e,t,n)=>{n?this.forceDisabled(`readOnlyMode`):this.clearForceDisabled(`readOnlyMode`)})),this.on(`change:isEnabled`,((e,t,n)=>{n||this._finalizeDragging(!1)})),c.isAndroid&&this.forceDisabled(`noAndroidSupport`)}destroy(){return this._draggedRange&&=(this._draggedRange.detach(),null),this._updateDropMarkerThrottled.cancel(),this._removeDropMarkerDelayed.cancel(),this._clearDraggableAttributesDelayed.cancel(),super.destroy()}_setupDragging(){let e=this.editor,t=e.model,n=t.document,r=e.editing.view,i=r.document;this.listenTo(i,`dragstart`,((r,a)=>{let o=n.selection;if(a.target&&a.target.is(`editableElement`))return void a.preventDefault();let s=a.target?fg(a.target):null;if(s){let n=e.editing.mapper.toModelElement(s);this._draggedRange=Xu.fromRange(t.createRangeOn(n)),e.plugins.has(`WidgetToolbarRepository`)&&e.plugins.get(`WidgetToolbarRepository`).forceDisabled(`dragDrop`)}else if(!i.selection.isCollapsed){let e=i.selection.getSelectedElement();e&&Z(e)||(this._draggedRange=Xu.fromRange(o.getFirstRange()))}if(!this._draggedRange)return void a.preventDefault();this._draggingUid=v(),a.dataTransfer.effectAllowed=this.isEnabled?`copyMove`:`copy`,a.dataTransfer.setData(`application/ckeditor5-dragging-uid`,this._draggingUid);let c=t.createSelection(this._draggedRange.toRange()),l=e.data.toView(t.getSelectedContent(c));i.fire(`clipboardOutput`,{dataTransfer:a.dataTransfer,content:l,method:`dragstart`}),this.isEnabled||(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid=``)}),{priority:`low`}),this.listenTo(i,`dragend`,((e,t)=>{this._finalizeDragging(!t.dataTransfer.isCanceled&&t.dataTransfer.dropEffect==`move`)}),{priority:`low`}),this.listenTo(i,`dragenter`,(()=>{this.isEnabled&&r.focus()})),this.listenTo(i,`dragleave`,(()=>{this._removeDropMarkerDelayed()})),this.listenTo(i,`dragging`,((t,n)=>{if(!this.isEnabled)return void(n.dataTransfer.dropEffect=`none`);this._removeDropMarkerDelayed.cancel();let r=lg(e,n.targetRanges,n.target);this._draggedRange||(n.dataTransfer.dropEffect=`copy`),c.isGecko||(n.dataTransfer.effectAllowed==`copy`?n.dataTransfer.dropEffect=`copy`:[`all`,`copyMove`].includes(n.dataTransfer.effectAllowed)&&(n.dataTransfer.dropEffect=`move`)),r&&this._updateDropMarkerThrottled(r)}),{priority:`low`})}_setupClipboardInputIntegration(){let e=this.editor,t=e.editing.view.document;this.listenTo(t,`clipboardInput`,((t,n)=>{if(n.method!=`drop`)return;let r=lg(e,n.targetRanges,n.target);if(this._removeDropMarker(),!r||(this._draggedRange&&this._draggingUid!=n.dataTransfer.getData(`application/ckeditor5-dragging-uid`)&&(this._draggedRange.detach(),this._draggedRange=null,this._draggingUid=``),ug(n.dataTransfer)==`move`&&this._draggedRange&&this._draggedRange.containsRange(r,!0)))return this._finalizeDragging(!1),void t.stop();n.targetRanges=[e.editing.mapper.toViewRange(r)]}),{priority:`high`})}_setupContentInsertionIntegration(){let e=this.editor.plugins.get(Rm);e.on(`contentInsertion`,((e,t)=>{if(!this.isEnabled||t.method!==`drop`)return;let n=t.targetRanges.map((e=>this.editor.editing.mapper.toModelRange(e)));this.editor.model.change((e=>e.setSelection(n)))}),{priority:`high`}),e.on(`contentInsertion`,((e,t)=>{if(!this.isEnabled||t.method!==`drop`)return;let n=ug(t.dataTransfer)==`move`,r=!t.resultRange||!t.resultRange.isCollapsed;this._finalizeDragging(r&&n)}),{priority:`lowest`})}_setupDraggableAttributeHandling(){let e=this.editor,t=e.editing.view,n=t.document;this.listenTo(n,`mousedown`,((r,i)=>{if(c.isAndroid||!i)return;this._clearDraggableAttributesDelayed.cancel();let a=fg(i.target);if(c.isBlink&&!e.isReadOnly&&!a&&!n.selection.isCollapsed){let e=n.selection.getSelectedElement();e&&Z(e)||(a=n.selection.editableElement)}a&&(t.change((e=>{e.setAttribute(`draggable`,`true`,a)})),this._draggableElement=e.editing.mapper.toModelElement(a))})),this.listenTo(n,`mouseup`,(()=>{c.isAndroid||this._clearDraggableAttributesDelayed()}))}_clearDraggableAttributes(){let e=this.editor.editing;e.view.change((t=>{this._draggableElement&&this._draggableElement.root.rootName!=`$graveyard`&&t.removeAttribute(`draggable`,e.mapper.toViewElement(this._draggableElement)),this._draggableElement=null}))}_setupDropMarker(){let e=this.editor;e.conversion.for(`editingDowncast`).markerToHighlight({model:`drop-target`,view:{classes:[`ck-clipboard-drop-target-range`]}}),e.conversion.for(`editingDowncast`).markerToElement({model:`drop-target`,view:(t,{writer:n})=>{if(e.model.schema.checkChild(t.markerRange.start,`$text`))return n.createUIElement(`span`,{class:`ck ck-clipboard-drop-target-position`},(function(e){let t=this.toDomElement(e);return t.append(`⁠`,e.createElement(`span`),`⁠`),t}))}})}_updateDropMarker(e){let t=this.editor,n=t.model.markers;t.model.change((t=>{n.has(`drop-target`)?n.get(`drop-target`).getRange().isEqual(e)||t.updateMarker(`drop-target`,{range:e}):t.addMarker(`drop-target`,{range:e,usingOperation:!1,affectsData:!1})}))}_removeDropMarker(){let e=this.editor.model;this._removeDropMarkerDelayed.cancel(),this._updateDropMarkerThrottled.cancel(),e.markers.has(`drop-target`)&&e.change((e=>{e.removeMarker(`drop-target`)}))}_finalizeDragging(e){let t=this.editor,n=t.model;this._removeDropMarker(),this._clearDraggableAttributes(),t.plugins.has(`WidgetToolbarRepository`)&&t.plugins.get(`WidgetToolbarRepository`).clearForceDisabled(`dragDrop`),this._draggingUid=``,this._draggedRange&&=(e&&this.isEnabled&&n.deleteContent(n.createSelection(this._draggedRange),{doNotAutoparagraph:!0}),this._draggedRange.detach(),null)}}function lg(e,t,n){let r=e.model,i=e.editing.mapper,a=null,o=t?t[0].start:null;if(n.is(`uiElement`)&&(n=n.parent),a=function(e,t){let n=e.model,r=e.editing.mapper;if(Z(t))return n.createRangeOn(r.toModelElement(t));if(!t.is(`editableElement`)){let e=t.findAncestor((e=>Z(e)||e.is(`editableElement`)));if(Z(e))return n.createRangeOn(r.toModelElement(e))}return null}(e,n),a)return a;let s=function(e,t){let n=e.editing.mapper,r=e.editing.view,i=n.toModelElement(t);if(i)return i;let a=r.createPositionBefore(t),o=n.findMappedViewAncestor(a);return n.toModelElement(o)}(e,n),l=o?i.toModelPosition(o):null;return l?(a=function(e,t,n){let r=e.model;if(!r.schema.checkChild(n,`$block`))return null;let i=r.createPositionAt(n,0),a=t.path.slice(0,i.path.length),o=r.createPositionFromPath(t.root,a).nodeAfter;return o&&r.schema.isObject(o)?r.createRangeOn(o):null}(e,l,s),a||(a=r.schema.getNearestSelectionRange(l,c.isGecko?`forward`:`backward`),a||function(e,t){let n=e.model,r=t;for(;r;){if(n.schema.isObject(r))return n.createRangeOn(r);r=r.parent}return null}(e,l.parent))):function(e,t){let n=e.model,r=n.schema,i=n.createPositionAt(t,0);return r.getNearestSelectionRange(i,`forward`)}(e,s)}function ug(e){return c.isGecko?e.dropEffect:[`all`,`copyMove`].includes(e.effectAllowed)?`move`:`copy`}function dg(e,t){let n;function r(...i){r.cancel(),n=setTimeout((()=>e(...i)),t)}return r.cancel=()=>{clearTimeout(n)},r}function fg(e){if(e.is(`editableElement`))return null;if(e.hasClass(`ck-widget__selection-handle`))return e.findAncestor(Z);if(Z(e))return e;let t=e.findAncestor((e=>Z(e)||e.is(`editableElement`)));return Z(t)?t:null}class pg extends I{static get pluginName(){return`PastePlainText`}static get requires(){return[Rm]}init(){let e=this.editor,t=e.model,n=e.editing.view,r=n.document,i=t.document.selection,a=!1;n.addObserver(Fm),this.listenTo(r,`keydown`,((e,t)=>{a=t.shiftKey})),e.plugins.get(Rm).on(`contentInsertion`,((e,n)=>{(a||function(e,t){if(e.childCount>1)return!1;let n=e.getChild(0);return t.isObject(n)?!1:Array.from(n.getAttributeKeys()).length==0}(n.content,t.schema))&&t.change((e=>{let r=Array.from(i.getAttributes()).filter((([e])=>t.schema.getAttributeProperties(e).isFormatting));i.isCollapsed||t.deleteContent(i,{doNotAutoparagraph:!0}),r.push(...i.getAttributes());let a=e.createRangeIn(n.content);for(let t of a.getItems())t.is(`$textProxy`)&&e.setAttributes(r,t)}))}))}}class mg extends I{static get pluginName(){return`Clipboard`}static get requires(){return[Rm,cg,pg]}}class hg extends L{constructor(e){super(e),this.affectsData=!1}execute(){let e=this.editor.model,t=e.document.selection,n=e.schema.getLimitElement(t);if(t.containsEntireContent(n)||!gg(e.schema,n))do if(n=n.parent,!n)return;while(!gg(e.schema,n));e.change((e=>{e.setSelection(n,`in`)}))}}function gg(e,t){return e.isLimit(t)&&(e.checkChild(t,`$text`)||e.checkChild(t,`paragraph`))}let _g=Ta(`Ctrl+A`);class vg extends I{static get pluginName(){return`SelectAllEditing`}init(){let e=this.editor,t=e.editing.view.document;e.commands.add(`selectAll`,new hg(e)),this.listenTo(t,`keydown`,((t,n)=>{wa(n)===_g&&(e.execute(`selectAll`),n.preventDefault())}))}}class yg extends I{static get pluginName(){return`SelectAllUI`}init(){let e=this.editor;e.ui.componentFactory.add(`selectAll`,(t=>{let n=e.commands.get(`selectAll`),r=new F(t),i=t.t;return r.set({label:i(`Select all`),icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M.75 15.5a.75.75 0 0 1 .75.75V18l.008.09A.5.5 0 0 0 2 18.5h1.75a.75.75 0 1 1 0 1.5H1.5l-.144-.007a1.5 1.5 0 0 1-1.35-1.349L0 18.5v-2.25a.75.75 0 0 1 .75-.75zm18.5 0a.75.75 0 0 1 .75.75v2.25l-.007.144a1.5 1.5 0 0 1-1.349 1.35L18.5 20h-2.25a.75.75 0 1 1 0-1.5H18a.5.5 0 0 0 .492-.41L18.5 18v-1.75a.75.75 0 0 1 .75-.75zm-10.45 3c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2v-1.1c0-.11.09-.2.2-.2h1.6zm.45-5.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 1 1 0-1.5h8.5zM1.3 11c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2v-1.6c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM1.3 7c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm18.5 0c.11 0 .2.09.2.2v1.6a.2.2 0 0 1-.2.2h-1.1a.2.2 0 0 1-.2-.2V7.2c0-.11.09-.2.2-.2h1.1zm-4.55-2a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 1 1 0-1.5h2.5zm-5 0a.75.75 0 1 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5h5.5zm-6.5-5a.75.75 0 0 1 0 1.5H2a.5.5 0 0 0-.492.41L1.5 2v1.75a.75.75 0 0 1-1.5 0V1.5l.007-.144A1.5 1.5 0 0 1 1.356.006L1.5 0h2.25zM18.5 0l.144.007a1.5 1.5 0 0 1 1.35 1.349L20 1.5v2.25a.75.75 0 1 1-1.5 0V2l-.008-.09A.5.5 0 0 0 18 1.5h-1.75a.75.75 0 1 1 0-1.5h2.25zM8.8 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2H7.2a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6zm4 0c.11 0 .2.09.2.2v1.1a.2.2 0 0 1-.2.2h-1.6a.2.2 0 0 1-.2-.2V.2c0-.11.09-.2.2-.2h1.6z"/></svg>`,keystroke:`Ctrl+A`,tooltip:!0}),r.bind(`isEnabled`).to(n,`isEnabled`),this.listenTo(r,`execute`,(()=>{e.execute(`selectAll`),e.editing.view.focus()})),r}))}}class bg extends I{static get requires(){return[vg,yg]}static get pluginName(){return`SelectAll`}}class xg extends L{constructor(e){super(e),this._stack=[],this._createdBatches=new WeakSet,this.refresh(),this.listenTo(e.data,`set`,((e,t)=>{t[1]={...t[1]};let n=t[1];n.batchType||={isUndoable:!1}}),{priority:`high`}),this.listenTo(e.data,`set`,((e,t)=>{t[1].batchType.isUndoable||this.clearStack()}))}refresh(){this.isEnabled=this._stack.length>0}addBatch(e){let t=this.editor.model.document.selection,n={ranges:t.hasOwnRange?Array.from(t.getRanges()):[],isBackward:t.isBackward};this._stack.push({batch:e,selection:n}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(e,t,n){let r=this.editor.model,i=r.document,a=[],o=e.map((e=>e.getTransformedByOperations(n))),s=o.flat();for(let e of o){let t=e.filter((e=>e.root!=i.graveyard)).filter((e=>!Cg(e,s)));t.length&&(Sg(t),a.push(t[0]))}a.length&&r.change((e=>{e.setSelection(a,{backward:t})}))}_undo(e,t){let n=this.editor.model,r=n.document;this._createdBatches.add(t);let i=e.operations.slice().filter((e=>e.isDocumentOperation));i.reverse();for(let e of i){let i=e.baseVersion+1,a=Array.from(r.history.getOperations(i)),o=Sf([e.getReversed()],a,{useRelations:!0,document:this.editor.model.document,padWithNoOps:!1,forceWeakRemove:!0}).operationsA;for(let i of o)t.addOperation(i),n.applyOperation(i),r.history.setOperationAsUndone(e,i)}}}function Sg(e){e.sort(((e,t)=>e.start.isBefore(t.start)?-1:1));for(let t=1;t<e.length;t++){let n=e[t-1].getJoined(e[t],!0);n&&(t--,e.splice(t,2,n))}}function Cg(e,t){return t.some((t=>t!==e&&t.containsRange(e,!0)))}class wg extends xg{execute(e=null){let t=e?this._stack.findIndex((t=>t.batch==e)):this._stack.length-1,n=this._stack.splice(t,1)[0],r=this.editor.model.createBatch({isUndo:!0});this.editor.model.enqueueChange(r,(()=>{this._undo(n.batch,r);let e=this.editor.model.document.history.getOperations(n.batch.baseVersion);this._restoreSelection(n.selection.ranges,n.selection.isBackward,e),this.fire(`revert`,n.batch,r)})),this.refresh()}}class Tg extends xg{execute(){let e=this._stack.pop(),t=this.editor.model.createBatch({isUndo:!0});this.editor.model.enqueueChange(t,(()=>{let n=e.batch.operations[e.batch.operations.length-1].baseVersion+1,r=this.editor.model.document.history.getOperations(n);this._restoreSelection(e.selection.ranges,e.selection.isBackward,r),this._undo(e.batch,t)})),this.refresh()}}class Eg extends I{static get pluginName(){return`UndoEditing`}constructor(e){super(e),this._batchRegistry=new WeakSet}init(){let e=this.editor;this._undoCommand=new wg(e),this._redoCommand=new Tg(e),e.commands.add(`undo`,this._undoCommand),e.commands.add(`redo`,this._redoCommand),this.listenTo(e.model,`applyOperation`,((e,t)=>{let n=t[0];if(!n.isDocumentOperation)return;let r=n.batch,i=this._redoCommand._createdBatches.has(r),a=this._undoCommand._createdBatches.has(r);this._batchRegistry.has(r)||(this._batchRegistry.add(r),r.isUndoable&&(i?this._undoCommand.addBatch(r):a||(this._undoCommand.addBatch(r),this._redoCommand.clearStack())))}),{priority:`highest`}),this.listenTo(this._undoCommand,`revert`,((e,t,n)=>{this._redoCommand.addBatch(n)})),e.keystrokes.set(`CTRL+Z`,`undo`),e.keystrokes.set(`CTRL+Y`,`redo`),e.keystrokes.set(`CTRL+SHIFT+Z`,`redo`)}}let Dg=`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"/></svg>`,Og=`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"/></svg>`;class kg extends I{static get pluginName(){return`UndoUI`}init(){let e=this.editor,t=e.locale,n=e.t,r=t.uiLanguageDirection==`ltr`?Dg:Og,i=t.uiLanguageDirection==`ltr`?Og:Dg;this._addButton(`undo`,n(`Undo`),`CTRL+Z`,r),this._addButton(`redo`,n(`Redo`),`CTRL+Y`,i)}_addButton(e,t,n,r){let i=this.editor;i.ui.componentFactory.add(e,(a=>{let o=i.commands.get(e),s=new F(a);return s.set({label:t,icon:r,keystroke:n,tooltip:!0}),s.bind(`isEnabled`).to(o,`isEnabled`),this.listenTo(s,`execute`,(()=>{i.execute(e),i.editing.view.focus()})),s}))}}class Ag extends I{static get requires(){return[Eg,kg]}static get pluginName(){return`Undo`}}class jg extends C(){constructor(){super();let e=new window.FileReader;this._reader=e,this._data=void 0,this.set(`loaded`,0),e.onprogress=e=>{this.loaded=e.loaded}}get error(){return this._reader.error}get data(){return this._data}read(e){let t=this._reader;return this.total=e.size,new Promise(((n,r)=>{t.onload=()=>{let e=t.result;this._data=e,n(e)},t.onerror=()=>{r(`error`)},t.onabort=()=>{r(`aborted`)},this._reader.readAsDataURL(e)}))}abort(){this._reader.abort()}}class Mg extends I{static get pluginName(){return`FileRepository`}static get requires(){return[Tp]}init(){this.loaders=new Ma,this.loaders.on(`change`,(()=>this._updatePendingAction())),this._loadersMap=new Map,this._pendingAction=null,this.set(`uploaded`,0),this.set(`uploadTotal`,null),this.bind(`uploadedPercent`).to(this,`uploaded`,this,`uploadTotal`,((e,t)=>t?e/t*100:0))}getLoader(e){return this._loadersMap.get(e)||null}createLoader(e){if(!this.createUploadAdapter)return b(`filerepository-no-upload-adapter`),null;let t=new Ng(Promise.resolve(e),this.createUploadAdapter);return this.loaders.add(t),this._loadersMap.set(e,t),e instanceof Promise&&t.file.then((e=>{this._loadersMap.set(e,t)})).catch((()=>{})),t.on(`change:uploaded`,(()=>{let e=0;for(let t of this.loaders)e+=t.uploaded;this.uploaded=e})),t.on(`change:uploadTotal`,(()=>{let e=0;for(let t of this.loaders)t.uploadTotal&&(e+=t.uploadTotal);this.uploadTotal=e})),t}destroyLoader(e){let t=e instanceof Ng?e:this.getLoader(e);t._destroy(),this.loaders.remove(t),this._loadersMap.forEach(((e,n)=>{e===t&&this._loadersMap.delete(n)}))}_updatePendingAction(){let e=this.editor.plugins.get(Tp);if(this.loaders.length){if(!this._pendingAction){let t=this.editor.t,n=e=>`${t(`Upload in progress`)} ${parseInt(e)}%.`;this._pendingAction=e.add(n(this.uploadedPercent)),this._pendingAction.bind(`message`).to(this,`uploadedPercent`,n)}}else e.remove(this._pendingAction),this._pendingAction=null}}class Ng extends C(){constructor(e,t){super(),this.id=v(),this._filePromiseWrapper=this._createFilePromiseWrapper(e),this._adapter=t(this),this._reader=new jg,this.set(`status`,`idle`),this.set(`uploaded`,0),this.set(`uploadTotal`,null),this.bind(`uploadedPercent`).to(this,`uploaded`,this,`uploadTotal`,((e,t)=>t?e/t*100:0)),this.set(`uploadResponse`,null)}get file(){return this._filePromiseWrapper?this._filePromiseWrapper.promise.then((e=>this._filePromiseWrapper?e:null)):Promise.resolve(null)}get data(){return this._reader.data}read(){if(this.status!=`idle`)throw new y(`filerepository-read-wrong-status`,this);return this.status=`reading`,this.file.then((e=>this._reader.read(e))).then((e=>{if(this.status!==`reading`)throw this.status;return this.status=`idle`,e})).catch((e=>{throw e===`aborted`?(this.status=`aborted`,`aborted`):(this.status=`error`,this._reader.error?this._reader.error:e)}))}upload(){if(this.status!=`idle`)throw new y(`filerepository-upload-wrong-status`,this);return this.status=`uploading`,this.file.then((()=>this._adapter.upload())).then((e=>(this.uploadResponse=e,this.status=`idle`,e))).catch((e=>{throw this.status===`aborted`?`aborted`:(this.status=`error`,e)}))}abort(){let e=this.status;this.status=`aborted`,this._filePromiseWrapper.isFulfilled?e==`reading`?this._reader.abort():e==`uploading`&&this._adapter.abort&&this._adapter.abort():(this._filePromiseWrapper.promise.catch((()=>{})),this._filePromiseWrapper.rejecter(`aborted`)),this._destroy()}_destroy(){this._filePromiseWrapper=void 0,this._reader=void 0,this._adapter=void 0,this.uploadResponse=void 0}_createFilePromiseWrapper(e){let t={};return t.promise=new Promise(((n,r)=>{t.rejecter=r,t.isFulfilled=!1,e.then((e=>{t.isFulfilled=!0,n(e)})).catch((e=>{t.isFulfilled=!0,r(e)}))})),t}}class Pg extends P{constructor(e){super(e),this.buttonView=new F(e),this._fileInputView=new Fg(e),this._fileInputView.bind(`acceptedType`).to(this),this._fileInputView.bind(`allowMultipleFiles`).to(this),this._fileInputView.delegate(`done`).to(this),this.setTemplate({tag:`span`,attributes:{class:`ck-file-dialog-button`},children:[this.buttonView,this._fileInputView]}),this.buttonView.on(`execute`,(()=>{this._fileInputView.open()}))}focus(){this.buttonView.focus()}}class Fg extends P{constructor(e){super(e),this.set(`acceptedType`,void 0),this.set(`allowMultipleFiles`,!1);let t=this.bindTemplate;this.setTemplate({tag:`input`,attributes:{class:[`ck-hidden`],type:`file`,tabindex:`-1`,accept:t.to(`acceptedType`),multiple:t.to(`allowMultipleFiles`)},on:{change:t.to((()=>{this.element&&this.element.files&&this.element.files.length&&this.fire(`done`,this.element.files),this.element.value=``}))}})}open(){this.element.click()}}let Ig=`ckCsrfToken`;function Lg(){let e=function(e){e=e.toLowerCase();let t=document.cookie.split(`;`);for(let n of t){let t=n.split(`=`);if(decodeURIComponent(t[0].trim().toLowerCase())===e)return decodeURIComponent(t[1])}return null}(Ig);var t,n;return e&&e.length==40||(e=function(e){let t=``,n=new Uint8Array(e);window.crypto.getRandomValues(n);for(let e=0;e<n.length;e++){let r=`abcdefghijklmnopqrstuvwxyz0123456789`.charAt(n[e]%36);t+=Math.random()>.5?r.toUpperCase():r}return t}(40),t=Ig,n=e,document.cookie=encodeURIComponent(t)+`=`+encodeURIComponent(n)+`;path=/`),e}class Rg{constructor(e,t,n){this.loader=e,this.url=t,this.t=n}upload(){return this.loader.file.then((e=>new Promise(((t,n)=>{this._initRequest(),this._initListeners(t,n,e),this._sendRequest(e)}))))}abort(){this.xhr&&this.xhr.abort()}_initRequest(){let e=this.xhr=new XMLHttpRequest;e.open(`POST`,this.url,!0),e.responseType=`json`}_initListeners(e,t,n){let r=this.xhr,i=this.loader,a=(0,this.t)(`Cannot upload file:`)+` ${n.name}.`;r.addEventListener(`error`,(()=>t(a))),r.addEventListener(`abort`,(()=>t())),r.addEventListener(`load`,(()=>{let n=r.response;if(!n||!n.uploaded)return t(n&&n.error&&n.error.message?n.error.message:a);e({default:n.url})})),r.upload&&r.upload.addEventListener(`progress`,(e=>{e.lengthComputable&&(i.uploadTotal=e.total,i.uploaded=e.loaded)}))}_sendRequest(e){let t=new FormData;t.append(`upload`,e),t.append(`ckCsrfToken`,Lg()),this.xhr.send(t)}}function zg(e,t,n,r){let i,a=null;typeof r==`function`?i=r:(a=e.commands.get(r),i=()=>{e.execute(r)}),e.model.document.on(`change:data`,((o,s)=>{if(a&&!a.isEnabled||!t.isEnabled)return;let c=M(e.model.document.selection.getRanges());if(!c.isCollapsed||s.isUndo||!s.isLocal)return;let l=Array.from(e.model.document.differ.getChanges()),u=l[0];if(l.length!=1||u.type!==`insert`||u.name!=`$text`||u.length!=1)return;let d=u.position.parent;if(d.is(`element`,`codeBlock`)||d.is(`element`,`listItem`)&&typeof r!=`function`&&![`numberedList`,`bulletedList`,`todoList`].includes(r)||a&&!0===a.value)return;let f=d.getChild(0),p=e.model.createRangeOn(f);if(!p.containsRange(c)&&!c.end.isEqual(p.end))return;let m=n.exec(f.data.substr(0,c.end.offset));m&&e.model.enqueueChange((t=>{let n=new Xu(t.createPositionAt(d,0),t.createPositionAt(d,m[0].length));if(!1!==i({match:m})){t.remove(n);let r=e.model.document.selection.getFirstRange(),i=t.createRangeIn(d);!d.isEmpty||i.isEqual(r)||i.containsRange(r,!0)||t.remove(d)}n.detach(),e.model.enqueueChange((()=>{e.plugins.get(`Delete`).requestUndoOnBackspace()}))}))}))}function Bg(e,t,n,r){let i,a;n instanceof RegExp?i=n:a=n,a||=(e=>{let t,n=[],r=[];for(;(t=i.exec(e))!==null&&!(t&&t.length<4);){let{index:e,1:i,2:a,3:o}=t,s=i+a+o;e+=t[0].length-s.length;let c=[e,e+i.length],l=[e+i.length+a.length,e+i.length+a.length+o.length];n.push(c),n.push(l),r.push([e+i.length,e+i.length+a.length])}return{remove:n,format:r}}),e.model.document.on(`change:data`,((n,i)=>{if(i.isUndo||!i.isLocal||!t.isEnabled)return;let o=e.model,s=o.document.selection;if(!s.isCollapsed)return;let c=Array.from(o.document.differ.getChanges()),l=c[0];if(c.length!=1||l.type!==`insert`||l.name!=`$text`||l.length!=1)return;let u=s.focus,d=u.parent,{text:f,range:p}=function(e,t){let n=e.start;return{text:Array.from(e.getItems()).reduce(((e,r)=>!r.is(`$text`)&&!r.is(`$textProxy`)||r.getAttribute(`code`)?(n=t.createPositionAfter(r),``):e+r.data),``),range:t.createRange(n,e.end)}}(o.createRange(o.createPositionAt(d,0),u),o),m=a(f),h=Vg(p.start,m.format,o),g=Vg(p.start,m.remove,o);h.length&&g.length&&o.enqueueChange((t=>{if(!1!==r(t,h)){for(let e of g.reverse())t.remove(e);o.enqueueChange((()=>{e.plugins.get(`Delete`).requestUndoOnBackspace()}))}}))}))}function Vg(e,t,n){return t.filter((e=>e[0]!==void 0&&e[1]!==void 0)).map((t=>n.createRange(e.getShiftedBy(t[0]),e.getShiftedBy(t[1]))))}function Hg(e,t){return(n,r)=>{if(!e.commands.get(t).isEnabled)return!1;let i=e.model.schema.getValidRanges(r,t);for(let e of i)n.setAttribute(t,!0,e);n.removeSelectionAttribute(t)}}class Ug extends L{constructor(e,t){super(e),this.attributeKey=t}refresh(){let e=this.editor.model,t=e.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,this.attributeKey)}execute(e={}){let t=this.editor.model,n=t.document.selection,r=e.forceValue===void 0?!this.value:e.forceValue;t.change((e=>{if(n.isCollapsed)r?e.setSelectionAttribute(this.attributeKey,!0):e.removeSelectionAttribute(this.attributeKey);else{let i=t.schema.getValidRanges(n.getRanges(),this.attributeKey);for(let t of i)r?e.setAttribute(this.attributeKey,r,t):e.removeAttribute(this.attributeKey,t)}}))}_getValueFromFirstAllowedNode(){let e=this.editor.model,t=e.schema,n=e.document.selection;if(n.isCollapsed)return n.hasAttribute(this.attributeKey);for(let e of n.getRanges())for(let n of e.getItems())if(t.checkAttribute(n,this.attributeKey))return n.hasAttribute(this.attributeKey);return!1}}let Wg=`bold`;class Gg extends I{static get pluginName(){return`BoldEditing`}init(){let e=this.editor;e.model.schema.extend(`$text`,{allowAttributes:Wg}),e.model.schema.setAttributeProperties(Wg,{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:Wg,view:`strong`,upcastAlso:[`b`,e=>{let t=e.getStyle(`font-weight`);return t&&(t==`bold`||Number(t)>=600)?{name:!0,styles:[`font-weight`]}:null}]}),e.commands.add(Wg,new Ug(e,Wg)),e.keystrokes.set(`CTRL+B`,Wg)}}let Kg=`bold`;class qg extends I{static get pluginName(){return`BoldUI`}init(){let e=this.editor,t=e.t;e.ui.componentFactory.add(Kg,(n=>{let r=e.commands.get(Kg),i=new F(n);return i.set({label:t(`Bold`),icon:X.bold,keystroke:`CTRL+B`,tooltip:!0,isToggleable:!0}),i.bind(`isOn`,`isEnabled`).to(r,`value`,`isEnabled`),this.listenTo(i,`execute`,(()=>{e.execute(Kg),e.editing.view.focus()})),i}))}}let Jg=`italic`;class Yg extends I{static get pluginName(){return`ItalicEditing`}init(){let e=this.editor;e.model.schema.extend(`$text`,{allowAttributes:Jg}),e.model.schema.setAttributeProperties(Jg,{isFormatting:!0,copyOnEnter:!0}),e.conversion.attributeToElement({model:Jg,view:`i`,upcastAlso:[`em`,{styles:{"font-style":`italic`}}]}),e.commands.add(Jg,new Ug(e,Jg)),e.keystrokes.set(`CTRL+I`,Jg)}}let Xg=`italic`;class Zg extends I{static get pluginName(){return`ItalicUI`}init(){let e=this.editor,t=e.t;e.ui.componentFactory.add(Xg,(n=>{let r=e.commands.get(Xg),i=new F(n);return i.set({label:t(`Italic`),icon:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>`,keystroke:`CTRL+I`,tooltip:!0,isToggleable:!0}),i.bind(`isOn`,`isEnabled`).to(r,`value`,`isEnabled`),this.listenTo(i,`execute`,(()=>{e.execute(Xg),e.editing.view.focus()})),i}))}}class Qg extends L{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){let t=this.editor.model,n=t.schema,r=t.document.selection,i=Array.from(r.getSelectedBlocks()),a=e.forceValue===void 0?!this.value:e.forceValue;t.change((e=>{if(a){let t=i.filter((e=>$g(e)||t_(n,e)));this._applyQuote(e,t)}else this._removeQuote(e,i.filter($g))}))}_getValue(){let e=M(this.editor.model.document.selection.getSelectedBlocks());return!(!e||!$g(e))}_checkEnabled(){if(this.value)return!0;let e=this.editor.model.document.selection,t=this.editor.model.schema,n=M(e.getSelectedBlocks());return!!n&&t_(t,n)}_removeQuote(e,t){e_(e,t).reverse().forEach((t=>{if(t.start.isAtStart&&t.end.isAtEnd)return void e.unwrap(t.start.parent);if(t.start.isAtStart){let n=e.createPositionBefore(t.start.parent);e.move(t,n);return}t.end.isAtEnd||e.split(t.end);let n=e.createPositionAfter(t.end.parent);e.move(t,n)}))}_applyQuote(e,t){let n=[];e_(e,t).reverse().forEach((t=>{let r=$g(t.start);r||(r=e.createElement(`blockQuote`),e.wrap(t,r)),n.push(r)})),n.reverse().reduce(((t,n)=>t.nextSibling==n?(e.merge(e.createPositionAfter(t)),t):n))}}function $g(e){return e.parent.name==`blockQuote`?e.parent:null}function e_(e,t){let n,r=0,i=[];for(;r<t.length;){let a=t[r],o=t[r+1];n||=e.createPositionBefore(a),o&&a.nextSibling==o||(i.push(e.createRange(n,e.createPositionAfter(a))),n=null),r++}return i}function t_(e,t){let n=e.checkChild(t.parent,`blockQuote`),r=e.checkChild([`$root`,`blockQuote`],t);return n&&r}class n_ extends I{static get pluginName(){return`BlockQuoteEditing`}static get requires(){return[wh,Qm]}init(){let e=this.editor,t=e.model.schema;e.commands.add(`blockQuote`,new Qg(e)),t.register(`blockQuote`,{inheritAllFrom:`$container`}),e.conversion.elementToElement({model:`blockQuote`,view:`blockquote`}),e.model.document.registerPostFixer((n=>{let r=e.model.document.differ.getChanges();for(let e of r)if(e.type==`insert`){let r=e.position.nodeAfter;if(!r)continue;if(r.is(`element`,`blockQuote`)&&r.isEmpty)return n.remove(r),!0;if(r.is(`element`,`blockQuote`)&&!t.checkChild(e.position,r))return n.unwrap(r),!0;if(r.is(`element`)){let e=n.createRangeIn(r);for(let r of e.getItems())if(r.is(`element`,`blockQuote`)&&!t.checkChild(n.createPositionBefore(r),r))return n.unwrap(r),!0}}else if(e.type==`remove`){let t=e.position.parent;if(t.is(`element`,`blockQuote`)&&t.isEmpty)return n.remove(t),!0}return!1}));let n=this.editor.editing.view.document,r=e.model.document.selection,i=e.commands.get(`blockQuote`);this.listenTo(n,`enter`,((t,n)=>{!r.isCollapsed||!i.value||r.getLastPosition().parent.isEmpty&&(e.execute(`blockQuote`),e.editing.view.scrollToTheSelection(),n.preventDefault(),t.stop())}),{context:`blockquote`}),this.listenTo(n,`delete`,((t,n)=>{if(n.direction!=`backward`||!r.isCollapsed||!i.value)return;let a=r.getLastPosition().parent;a.isEmpty&&!a.previousSibling&&(e.execute(`blockQuote`),e.editing.view.scrollToTheSelection(),n.preventDefault(),t.stop())}),{context:`blockquote`})}}var r_=i(3062);N()(r_.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),r_.Z.locals;class i_ extends I{static get pluginName(){return`BlockQuoteUI`}init(){let e=this.editor,t=e.t;e.ui.componentFactory.add(`blockQuote`,(n=>{let r=e.commands.get(`blockQuote`),i=new F(n);return i.set({label:t(`Block quote`),icon:X.quote,tooltip:!0,isToggleable:!0}),i.bind(`isOn`,`isEnabled`).to(r,`value`,`isEnabled`),this.listenTo(i,`execute`,(()=>{e.execute(`blockQuote`),e.editing.view.focus()})),i}))}}class a_ extends I{static get pluginName(){return`CKBoxUI`}afterInit(){let e=this.editor;if(!e.commands.get(`ckbox`))return;let t=e.t;e.ui.componentFactory.add(`ckbox`,(n=>{let r=e.commands.get(`ckbox`),i=new F(n);return i.set({label:t(`Open file manager`),icon:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>`,tooltip:!0}),i.bind(`isOn`,`isEnabled`).to(r,`value`,`isEnabled`),i.on(`execute`,(()=>{e.execute(`ckbox`)})),i}))}}function o_({token:e,id:t,origin:n,width:r,extension:i}){let a=s_(e),o=function(e){let t=[e*10/100,80],n=Math.floor(Math.max(...t)),r=[Math.min(e,4e3)],i=r[0];for(;i-n>=n;)i-=n,r.unshift(i);return r}(r);return{imageFallbackUrl:c_({environmentId:a,id:t,origin:n,width:r,extension:function(e){return e===`bmp`||e===`tiff`||e===`jpg`?`jpeg`:e}(i)}),imageSources:[{srcset:o.map((e=>`${c_({environmentId:a,id:t,origin:n,width:e,extension:`webp`})} ${e}w`)).join(`,`),sizes:`(max-width: ${r}px) 100vw, ${r}px`,type:`image/webp`}]}}function s_(e){let[,t]=e.value.split(`.`);return JSON.parse(atob(t)).aud}function c_({environmentId:e,id:t,origin:n,width:r,extension:i}){return new URL(`${e}/assets/${t}/images/${r}.${i}`,n).toString()}class l_ extends L{constructor(e){super(e),this._chosenAssets=new Set,this._wrapper=null,this._initListeners()}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){this.fire(`ckbox:open`)}_getValue(){return this._wrapper!==null}_checkEnabled(){let e=this.editor.commands.get(`insertImage`),t=this.editor.commands.get(`link`);return!(!e.isEnabled&&!t.isEnabled)}_prepareOptions(){let e=this.editor.config.get(`ckbox`);return{theme:e.theme,language:e.language,tokenUrl:e.tokenUrl,serviceOrigin:e.serviceOrigin,assetsOrigin:e.assetsOrigin,dialog:{onClose:()=>this.fire(`ckbox:close`)},assets:{onChoose:e=>this.fire(`ckbox:choose`,e)}}}_initListeners(){let e=this.editor,t=e.model,n=!e.config.get(`ckbox.ignoreDataId`);this.on(`ckbox`,(()=>{this.refresh()}),{priority:`low`}),this.on(`ckbox:open`,(()=>{this.isEnabled&&!this.value&&(this._wrapper=Ze(document,`div`,{class:`ck ckbox-wrapper`}),document.body.appendChild(this._wrapper),window.CKBox.mount(this._wrapper,this._prepareOptions()))})),this.on(`ckbox:close`,(()=>{this.value&&(this._wrapper.remove(),this._wrapper=null)})),this.on(`ckbox:choose`,((r,i)=>{if(!this.isEnabled)return;let a=e.commands.get(`insertImage`),o=e.commands.get(`link`),s=e.plugins.get(`CKBoxEditing`),c=function({assets:e,origin:t,token:n,isImageAllowed:r,isLinkAllowed:i}){return e.map((e=>({id:e.data.id,type:d_(e)?`image`:`link`,attributes:u_(e,n,t)}))).filter((e=>e.type===`image`?r:i))}({assets:i,origin:e.config.get(`ckbox.assetsOrigin`),token:s.getToken(),isImageAllowed:a.isEnabled,isLinkAllowed:o.isEnabled});c.length!==0&&t.change((e=>{for(let t of c){let r=t===c[c.length-1];this._insertAsset(t,r,e),n&&(setTimeout((()=>this._chosenAssets.delete(t)),1e3),this._chosenAssets.add(t))}}))})),this.listenTo(e,`destroy`,(()=>{this.fire(`ckbox:close`),this._chosenAssets.clear()}))}_insertAsset(e,t,n){let r=this.editor.model.document.selection;n.removeSelectionAttribute(`linkHref`),e.type===`image`?this._insertImage(e):this._insertLink(e,n),t||n.setSelection(r.getLastPosition())}_insertImage(e){let t=this.editor,{imageFallbackUrl:n,imageSources:r,imageTextAlternative:i}=e.attributes;t.execute(`insertImage`,{source:{src:n,sources:r,alt:i}})}_insertLink(e,t){let n=this.editor,r=n.model,i=r.document.selection,{linkName:a,linkHref:o}=e.attributes;if(i.isCollapsed){let e=Fa(i.getAttributes()),n=t.createText(a,e),o=r.insertContent(n);t.setSelection(o)}n.execute(`link`,o)}}function u_(e,t,n){if(d_(e)){let{imageFallbackUrl:r,imageSources:i}=o_({token:t,origin:n,id:e.data.id,width:e.data.metadata.width,extension:e.data.extension});return{imageFallbackUrl:r,imageSources:i,imageTextAlternative:e.data.metadata.description||``}}return{linkName:e.data.name,linkHref:f_(e,t,n)}}function d_(e){let t=e.data.metadata;return!!t&&t.width&&t.height}function f_(e,t,n){let r=s_(t),i=new URL(`${r}/assets/${e.data.id}/file`,n);return i.searchParams.set(`download`,`true`),i.toString()}class p_ extends I{static get requires(){return[`ImageUploadEditing`,`ImageUploadProgress`,Mg,g_]}static get pluginName(){return`CKBoxUploadAdapter`}async afterInit(){let e=this.editor,t=!!e.config.get(`ckbox`),n=!!window.CKBox;if(!t&&!n)return;let r=e.plugins.get(Mg),i=e.plugins.get(g_);r.createUploadAdapter=t=>new m_(t,i.getToken(),e);let a=!e.config.get(`ckbox.ignoreDataId`),o=e.plugins.get(`ImageUploadEditing`);a&&o.on(`uploadComplete`,((t,{imageElement:n,data:r})=>{e.model.change((e=>{e.setAttribute(`ckboxImageId`,r.ckboxImageId,n)}))}))}}class m_{constructor(e,t,n){this.loader=e,this.token=t,this.editor=n,this.controller=new AbortController,this.serviceOrigin=n.config.get(`ckbox.serviceOrigin`),this.assetsOrigin=n.config.get(`ckbox.assetsOrigin`)}async getAvailableCategories(e=0){let t=new URL(`categories`,this.serviceOrigin);return t.searchParams.set(`limit`,`50`),t.searchParams.set(`offset`,e.toString()),this._sendHttpRequest({url:t}).then((async t=>{if(t.totalCount-(e+50)>0){let n=await this.getAvailableCategories(e+50);return[...t.items,...n]}return t.items})).catch((()=>{this.controller.signal.throwIfAborted(),ne(`ckbox-fetch-category-http-error`)}))}async getCategoryIdForFile(e){let t=h_(e.name),n=await this.getAvailableCategories();if(!n)return null;let r=this.editor.config.get(`ckbox.defaultUploadCategories`);if(r){let e=Object.keys(r).find((e=>r[e].includes(t)));if(e){let t=n.find((t=>t.id===e||t.name===e));return t?t.id:null}}let i=n.find((e=>e.extensions.includes(t)));return i?i.id:null}async upload(){let e=this.editor.t,t=e(`Cannot determine a category for the uploaded file.`),n=await this.loader.file,r=await this.getCategoryIdForFile(n);if(!r)return Promise.reject(t);let i=new URL(`assets`,this.serviceOrigin),a=new FormData;a.append(`categoryId`,r),a.append(`file`,n);let o={method:`POST`,url:i,data:a,onUploadProgress:e=>{e.lengthComputable&&(this.loader.uploadTotal=e.total,this.loader.uploaded=e.loaded)}};return this._sendHttpRequest(o).then((async e=>{let t=await this._getImageWidth(),r=h_(n.name),i=o_({token:this.token,id:e.id,origin:this.assetsOrigin,width:t,extension:r});return{ckboxImageId:e.id,default:i.imageFallbackUrl,sources:i.imageSources}})).catch((()=>{let t=e(`Cannot upload file:`)+` ${n.name}.`;return Promise.reject(t)}))}abort(){this.controller.abort()}_sendHttpRequest(e){let{url:t,data:n,onUploadProgress:r}=e,i=e.method||`GET`,a=this.controller.signal,o=new XMLHttpRequest;o.open(i,t.toString(),!0),o.setRequestHeader(`Authorization`,this.token.value),o.setRequestHeader(`CKBox-Version`,`CKEditor 5`),o.responseType=`json`;let s=()=>{o.abort()};return new Promise(((e,t)=>{a.addEventListener(`abort`,s),o.addEventListener(`loadstart`,(()=>{a.addEventListener(`abort`,s)})),o.addEventListener(`loadend`,(()=>{a.removeEventListener(`abort`,s)})),o.addEventListener(`error`,(()=>{t()})),o.addEventListener(`abort`,(()=>{t()})),o.addEventListener(`load`,(async()=>{let n=o.response;return!n||n.statusCode>=400?t(n&&n.message):e(n)})),r&&o.upload.addEventListener(`progress`,(e=>{r(e)})),o.send(n)}))}_getImageWidth(){return new Promise((e=>{let t=new Image;t.onload=()=>{URL.revokeObjectURL(t.src),e(t.width)},t.src=this.loader.data}))}}function h_(e){return e.match(/\.(?<ext>[^.]+)$/).groups.ext}class g_ extends I{static get pluginName(){return`CKBoxEditing`}static get requires(){return[`CloudServices`,`LinkEditing`,`PictureEditing`,p_]}async init(){let e=this.editor,t=!!e.config.get(`ckbox`),n=!!window.CKBox;if(!t&&!n)return;this._initConfig();let r=e.plugins.get(`CloudServicesCore`),i=e.config.get(`ckbox.tokenUrl`),a=e.config.get(`cloudServices.tokenUrl`);this._token=i===a?e.plugins.get(`CloudServices`).token:await r.createToken(i).init(),e.config.get(`ckbox.ignoreDataId`)||(this._initSchema(),this._initConversion(),this._initFixers()),n&&e.commands.add(`ckbox`,new l_(e))}getToken(){return this._token}_initConfig(){let e=this.editor;if(e.config.define(`ckbox`,{serviceOrigin:`https://api.ckbox.io`,assetsOrigin:`https://ckbox.cloud`,defaultUploadCategories:null,ignoreDataId:!1,language:e.locale.uiLanguage,theme:`default`,tokenUrl:e.config.get(`cloudServices.tokenUrl`)}),!e.config.get(`ckbox.tokenUrl`))throw new y(`ckbox-plugin-missing-token-url`,this);e.plugins.has(`ImageBlockEditing`)||e.plugins.has(`ImageInlineEditing`)||ne(`ckbox-plugin-image-feature-missing`,e)}_initSchema(){let e=this.editor.model.schema;e.extend(`$text`,{allowAttributes:`ckboxLinkId`}),e.isRegistered(`imageBlock`)&&e.extend(`imageBlock`,{allowAttributes:[`ckboxImageId`,`ckboxLinkId`]}),e.isRegistered(`imageInline`)&&e.extend(`imageInline`,{allowAttributes:[`ckboxImageId`,`ckboxLinkId`]}),e.addAttributeCheck(((e,t)=>{if(!e.last.getAttribute(`linkHref`)&&t===`ckboxLinkId`)return!1}))}_initConversion(){let e=this.editor;e.conversion.for(`downcast`).add((e=>{e.on(`attribute:ckboxLinkId:imageBlock`,((e,t,n)=>{let{writer:r,mapper:i,consumable:a}=n;if(!a.consume(t.item,e.name))return;let o=[...i.toViewElement(t.item).getChildren()].find((e=>e.name===`a`));o&&(t.item.hasAttribute(`ckboxLinkId`)?r.setAttribute(`data-ckbox-resource-id`,t.item.getAttribute(`ckboxLinkId`),o):r.removeAttribute(`data-ckbox-resource-id`,o))}),{priority:`low`}),e.on(`attribute:ckboxLinkId`,((e,t,n)=>{let{writer:r,mapper:i,consumable:a}=n;if(a.consume(t.item,e.name)){if(t.attributeOldValue){let e=v_(r,t.attributeOldValue);r.unwrap(i.toViewRange(t.range),e)}if(t.attributeNewValue){let e=v_(r,t.attributeNewValue);if(t.item.is(`selection`)){let t=r.document.selection;r.wrap(t.getFirstRange(),e)}else r.wrap(i.toViewRange(t.range),e)}}}),{priority:`low`})})),e.conversion.for(`upcast`).add((e=>{e.on(`element:a`,((e,t,n)=>{let{writer:r,consumable:i}=n;if(!t.viewItem.getAttribute(`href`)||!i.consume(t.viewItem,{attributes:[`data-ckbox-resource-id`]}))return;let a=t.viewItem.getAttribute(`data-ckbox-resource-id`);if(a)if(t.modelRange)for(let e of t.modelRange.getItems())e.is(`$textProxy`)&&(e=e.textNode),y_(e)&&r.setAttribute(`ckboxLinkId`,a,e);else{let e=t.modelCursor.nodeBefore||t.modelCursor.parent;r.setAttribute(`ckboxLinkId`,a,e)}}),{priority:`low`})})),e.conversion.for(`downcast`).attributeToAttribute({model:`ckboxImageId`,view:`data-ckbox-resource-id`}),e.conversion.for(`upcast`).elementToAttribute({model:{key:`ckboxImageId`,value:e=>e.getAttribute(`data-ckbox-resource-id`)},view:{attributes:{"data-ckbox-resource-id":/[\s\S]+/}}})}_initFixers(){let e=this.editor,t=e.model,n=t.document.selection;t.document.registerPostFixer(function(e){return t=>{let n=!1,r=e.model,i=e.commands.get(`ckbox`);if(!i)return n;for(let e of r.document.differ.getChanges()){if(e.type!==`insert`&&e.type!==`attribute`)continue;let r=e.type===`insert`?new W(e.position,e.position.getShiftedBy(e.length)):e.range,a=e.type===`attribute`&&e.attributeKey===`linkHref`&&e.attributeNewValue===null;for(let e of r.getItems()){if(a&&e.hasAttribute(`ckboxLinkId`)){t.removeAttribute(`ckboxLinkId`,e),n=!0;continue}let r=__(e,i._chosenAssets);for(let i of r){let r=i.type===`image`?`ckboxImageId`:`ckboxLinkId`;i.id!==e.getAttribute(r)&&(t.setAttribute(r,i.id,e),n=!0)}}}return n}}(e)),t.document.registerPostFixer(function(e){return t=>{!e.hasAttribute(`linkHref`)&&e.hasAttribute(`ckboxLinkId`)&&t.removeSelectionAttribute(`ckboxLinkId`)}}(n))}}function __(e,t){let n=e.is(`element`,`imageInline`)||e.is(`element`,`imageBlock`),r=e.hasAttribute(`linkHref`);return[...t].filter((t=>t.type===`image`&&n?t.attributes.imageFallbackUrl===e.getAttribute(`src`):t.type===`link`&&r?t.attributes.linkHref===e.getAttribute(`linkHref`):void 0))}function v_(e,t){let n=e.createAttributeElement(`a`,{"data-ckbox-resource-id":t},{priority:5});return e.setCustomProperty(`link`,!0,n),n}function y_(e){return!!e.is(`$text`)||!(!e.is(`element`,`imageInline`)&&!e.is(`element`,`imageBlock`))}class b_ extends I{static get pluginName(){return`CKFinderUI`}init(){let e=this.editor,t=e.ui.componentFactory,n=e.t;t.add(`ckfinder`,(t=>{let r=e.commands.get(`ckfinder`),i=new F(t);return i.set({label:n(`Insert image or file`),icon:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.627 16.5zm5.873-.196zm0-7.001V8h-13v8.5h4.341c.191.54.457 1.044.785 1.5H2a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 2 2h4.5a1.5 1.5 0 0 1 1.06.44L9.122 4H16a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 19 8v2.531a6.027 6.027 0 0 0-1.5-1.228zM16 6.5v-1H8.5l-2-2H2v13h1V8a1.5 1.5 0 0 1 1.5-1.5H16z"/><path d="M14.5 19.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM15 14v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2z"/></svg>`,tooltip:!0}),i.bind(`isEnabled`).to(r),i.on(`execute`,(()=>{e.execute(`ckfinder`),e.editing.view.focus()})),i}))}}class x_ extends L{constructor(e){super(e),this._affectsData=!1,this.stopListening(this.editor.model.document,`change`),this.listenTo(this.editor.model.document,`change`,(()=>this.refresh()),{priority:`low`})}refresh(){let e=this.editor.commands.get(`insertImage`),t=this.editor.commands.get(`link`);this.isEnabled=e.isEnabled||t.isEnabled}execute(){let e=this.editor,t=this.editor.config.get(`ckfinder.openerMethod`)||`modal`;if(t!=`popup`&&t!=`modal`)throw new y(`ckfinder-unknown-openermethod`,e);let n=this.editor.config.get(`ckfinder.options`)||{};n.chooseFiles=!0;let r=n.onInit;n.language||=e.locale.uiLanguage,n.onInit=t=>{r&&r(t),t.on(`files:choose`,(n=>{let r=n.data.files.toArray(),i=r.filter((e=>!e.isImage())),a=r.filter((e=>e.isImage()));for(let t of i)e.execute(`link`,t.getUrl());let o=[];for(let e of a){let n=e.getUrl();o.push(n||t.request(`file:getProxyUrl`,{file:e}))}o.length&&S_(e,o)})),t.on(`file:choose:resizedImage`,(t=>{let n=t.data.resizedUrl;if(n)S_(e,[n]);else{let t=e.plugins.get(`Notification`),n=e.locale.t;t.showWarning(n(`Could not obtain resized image URL.`),{title:n(`Selecting resized image failed`),namespace:`ckfinder`})}}))},window.CKFinder[t](n)}}function S_(e,t){if(e.commands.get(`insertImage`).isEnabled)e.execute(`insertImage`,{source:t});else{let t=e.plugins.get(`Notification`),n=e.locale.t;t.showWarning(n(`Could not insert image at the current position.`),{title:n(`Inserting image failed`),namespace:`ckfinder`})}}class C_ extends I{static get pluginName(){return`CKFinderEditing`}static get requires(){return[_m,`LinkEditing`]}init(){let e=this.editor;if(!e.plugins.has(`ImageBlockEditing`)&&!e.plugins.has(`ImageInlineEditing`))throw new y(`ckfinder-missing-image-plugin`,e);e.commands.add(`ckfinder`,new x_(e))}}class w_ extends I{static get pluginName(){return`CloudServicesUploadAdapter`}static get requires(){return[`CloudServices`,Mg]}init(){let e=this.editor,t=e.plugins.get(`CloudServices`),n=t.token,r=t.uploadUrl;n&&(this._uploadGateway=e.plugins.get(`CloudServicesCore`).createUploadGateway(n,r),e.plugins.get(Mg).createUploadAdapter=e=>new T_(this._uploadGateway,e))}}class T_{constructor(e,t){this.uploadGateway=e,this.loader=t}upload(){return this.loader.file.then((e=>(this.fileUploader=this.uploadGateway.upload(e),this.fileUploader.on(`progress`,((e,t)=>{this.loader.uploadTotal=t.total,this.loader.uploaded=t.uploaded})),this.fileUploader.send())))}abort(){this.fileUploader.abort()}}class E_ extends L{refresh(){let e=this.editor.model,t=M(e.document.selection.getSelectedBlocks());this.value=!!t&&t.is(`element`,`paragraph`),this.isEnabled=!!t&&D_(t,e.schema)}execute(e={}){let t=this.editor.model,n=t.document;t.change((r=>{let i=(e.selection||n.selection).getSelectedBlocks();for(let e of i)!e.is(`element`,`paragraph`)&&D_(e,t.schema)&&r.rename(e,`paragraph`)}))}}function D_(e,t){return t.checkChild(e.parent,`paragraph`)&&!t.isObject(e)}class O_ extends L{execute(e){let t=this.editor.model,n=e.attributes,r=e.position;t.change((e=>{let i=e.createElement(`paragraph`);if(n&&t.schema.setAllowedAttributes(i,n,e),!t.schema.checkChild(r.parent,i)){let n=t.schema.findAllowedParent(r,i);if(!n)return;r=e.split(r,n).position}t.insertContent(i,r),e.setSelection(i,`in`)}))}}class k_ extends I{static get pluginName(){return`Paragraph`}init(){let e=this.editor,t=e.model;e.commands.add(`paragraph`,new E_(e)),e.commands.add(`insertParagraph`,new O_(e)),t.schema.register(`paragraph`,{inheritAllFrom:`$block`}),e.conversion.elementToElement({model:`paragraph`,view:`p`}),e.conversion.for(`upcast`).elementToElement({model:(e,{writer:t})=>k_.paragraphLikeElements.has(e.name)?e.isEmpty?null:t.createElement(`paragraph`):null,view:/.+/,converterPriority:`low`})}}k_.paragraphLikeElements=new Set([`blockquote`,`dd`,`div`,`dt`,`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`li`,`p`,`td`,`th`]);class A_ extends L{constructor(e,t){super(e),this.modelElements=t}refresh(){let e=M(this.editor.model.document.selection.getSelectedBlocks());this.value=!!e&&this.modelElements.includes(e.name)&&e.name,this.isEnabled=!!e&&this.modelElements.some((t=>j_(e,t,this.editor.model.schema)))}execute(e){let t=this.editor.model,n=t.document,r=e.value;t.change((e=>{let i=Array.from(n.selection.getSelectedBlocks()).filter((e=>j_(e,r,t.schema)));for(let t of i)t.is(`element`,r)||e.rename(t,r)}))}}function j_(e,t,n){return n.checkChild(e.parent,t)&&!n.isObject(e)}let M_=`paragraph`;class N_ extends I{static get pluginName(){return`HeadingEditing`}constructor(e){super(e),e.config.define(`heading`,{options:[{model:`paragraph`,title:`Paragraph`,class:`ck-heading_paragraph`},{model:`heading1`,view:`h2`,title:`Heading 1`,class:`ck-heading_heading1`},{model:`heading2`,view:`h3`,title:`Heading 2`,class:`ck-heading_heading2`},{model:`heading3`,view:`h4`,title:`Heading 3`,class:`ck-heading_heading3`}]})}static get requires(){return[k_]}init(){let e=this.editor,t=e.config.get(`heading.options`),n=[];for(let r of t)r.model!==`paragraph`&&(e.model.schema.register(r.model,{inheritAllFrom:`$block`}),e.conversion.elementToElement(r),n.push(r.model));this._addDefaultH1Conversion(e),e.commands.add(`heading`,new A_(e,n))}afterInit(){let e=this.editor,t=e.commands.get(`enter`),n=e.config.get(`heading.options`);t&&this.listenTo(t,`afterExecute`,((t,r)=>{let i=e.model.document.selection.getFirstPosition().parent;n.some((e=>i.is(`element`,e.model)))&&!i.is(`element`,M_)&&i.childCount===0&&r.writer.rename(i,M_)}))}_addDefaultH1Conversion(e){e.conversion.for(`upcast`).elementToElement({model:`heading1`,view:`h1`,converterPriority:ee.get(`low`)+1})}}var P_=i(8733);N()(P_.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),P_.Z.locals;class F_ extends I{static get pluginName(){return`HeadingUI`}init(){let e=this.editor,t=e.t,n=function(e){let t=e.t,n={Paragraph:t(`Paragraph`),"Heading 1":t(`Heading 1`),"Heading 2":t(`Heading 2`),"Heading 3":t(`Heading 3`),"Heading 4":t(`Heading 4`),"Heading 5":t(`Heading 5`),"Heading 6":t(`Heading 6`)};return e.config.get(`heading.options`).map((e=>{let t=n[e.title];return t&&t!=e.title&&(e.title=t),e}))}(e),r=t(`Choose heading`),i=t(`Heading`);e.ui.componentFactory.add(`heading`,(t=>{let a={},o=new Ma,s=e.commands.get(`heading`),c=e.commands.get(`paragraph`),l=[s];for(let e of n){let t={type:`button`,model:new vm({label:e.title,class:e.class,withText:!0})};e.model===`paragraph`?(t.model.bind(`isOn`).to(c,`value`),t.model.set(`commandName`,`paragraph`),l.push(c)):(t.model.bind(`isOn`).to(s,`value`,(t=>t===e.model)),t.model.set({commandName:`heading`,commandValue:e.model})),o.add(t),a[e.model]=e.title}let u=zp(t);return Hp(u,o),u.buttonView.set({isOn:!1,withText:!0,tooltip:i}),u.extendTemplate({attributes:{class:[`ck-heading-dropdown`]}}),u.bind(`isEnabled`).toMany(l,`isEnabled`,((...e)=>e.some((e=>e)))),u.buttonView.bind(`label`).to(s,`value`,c,`value`,((e,t)=>{let n=e||t&&`paragraph`;return typeof n==`boolean`?r:a[n]?a[n]:r})),this.listenTo(u,`execute`,(t=>{let{commandName:n,commandValue:r}=t.source;e.execute(n,r?{value:r}:void 0),e.editing.view.focus()})),u}))}}class I_ extends L{refresh(){let e=this.editor.plugins.get(`ImageUtils`).getClosestSelectedImageElement(this.editor.model.document.selection);this.isEnabled=!!e,this.isEnabled&&e.hasAttribute(`alt`)?this.value=e.getAttribute(`alt`):this.value=!1}execute(e){let t=this.editor,n=t.plugins.get(`ImageUtils`),r=t.model,i=n.getClosestSelectedImageElement(r.document.selection);r.change((t=>{t.setAttribute(`alt`,e.newValue,i)}))}}function L_(e){return e.createContainerElement(`figure`,{class:`image`},[e.createEmptyElement(`img`),e.createSlot()])}function R_(e,t){let n=e.plugins.get(`ImageUtils`),r=e.plugins.has(`ImageInlineEditing`)&&e.plugins.has(`ImageBlockEditing`);return e=>n.isInlineImageView(e)?r?(e.getStyle(`display`)==`block`||e.findAncestor(n.isBlockImageView)?`imageBlock`:`imageInline`)===t?i(e):null:i(e):null;function i(e){let t={name:!0};return e.hasAttribute(`src`)&&(t.attributes=[`src`]),t}}function z_(e,t){let n=M(t.getSelectedBlocks());return!n||e.isObject(n)||n.isEmpty&&n.name!=`listItem`?`imageBlock`:`imageInline`}class B_ extends I{static get pluginName(){return`ImageUtils`}isImage(e){return this.isInlineImage(e)||this.isBlockImage(e)}isInlineImageView(e){return!!e&&e.is(`element`,`img`)}isBlockImageView(e){return!!e&&e.is(`element`,`figure`)&&e.hasClass(`image`)}insertImage(e={},t=null,n=null){let r=this.editor,i=r.model,a=i.document.selection;n=V_(r,t||a,n),e={...Object.fromEntries(a.getAttributes()),...e};for(let t in e)i.schema.checkAttribute(n,t)||delete e[t];return i.change((r=>{let a=r.createElement(n,e);return i.insertObject(a,t,null,{setSelection:`on`,findOptimalPosition:!t&&n!=`imageInline`}),a.parent?a:null}))}getClosestSelectedImageWidget(e){let t=e.getFirstPosition();if(!t)return null;let n=e.getSelectedElement();if(n&&this.isImageWidget(n))return n;let r=t.parent;for(;r;){if(r.is(`element`)&&this.isImageWidget(r))return r;r=r.parent}return null}getClosestSelectedImageElement(e){let t=e.getSelectedElement();return this.isImage(t)?t:e.getFirstPosition().findAncestor(`imageBlock`)}isImageAllowed(){let e=this.editor.model.document.selection;return function(e,t){if(V_(e,t)==`imageBlock`){let n=function(e,t){let n=zh(e,t).start.parent;return n.isEmpty&&!n.is(`element`,`$root`)?n.parent:n}(t,e.model);if(e.model.schema.checkChild(n,`imageBlock`))return!0}else if(e.model.schema.checkChild(t.focus,`imageInline`))return!0;return!1}(this.editor,e)&&function(e){return[...e.focus.getAncestors()].every((e=>!e.is(`element`,`imageBlock`)))}(e)}toImageWidget(e,t,n){return t.setCustomProperty(`image`,!0,e),Ph(e,t,{label:()=>{let t=this.findViewImgElement(e).getAttribute(`alt`);return t?`${t} ${n}`:n}})}isImageWidget(e){return!!e.getCustomProperty(`image`)&&Z(e)}isBlockImage(e){return!!e&&e.is(`element`,`imageBlock`)}isInlineImage(e){return!!e&&e.is(`element`,`imageInline`)}findViewImgElement(e){if(this.isInlineImageView(e))return e;let t=this.editor.editing.view;for(let{item:n}of t.createRangeIn(e))if(this.isInlineImageView(n))return n}}function V_(e,t,n){let r=e.model.schema,i=e.config.get(`image.insert.type`);return e.plugins.has(`ImageBlockEditing`)?e.plugins.has(`ImageInlineEditing`)?n||(i===`inline`?`imageInline`:i===`block`?`imageBlock`:t.is(`selection`)?z_(r,t):r.checkChild(t,`imageInline`)?`imageInline`:`imageBlock`):`imageBlock`:`imageInline`}class H_ extends I{static get requires(){return[B_]}static get pluginName(){return`ImageTextAlternativeEditing`}init(){this.editor.commands.add(`imageTextAlternative`,new I_(this.editor))}}var U_=i(1905);N()(U_.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),U_.Z.locals;var W_=i(6764);N()(W_.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),W_.Z.locals;class G_ extends P{constructor(e){super(e);let t=this.locale.t;this.focusTracker=new Na,this.keystrokes=new Pa,this.labeledInput=this._createLabeledInputView(),this.saveButtonView=this._createButton(t(`Save`),X.check,`ck-button-save`),this.saveButtonView.type=`submit`,this.cancelButtonView=this._createButton(t(`Cancel`),X.cancel,`ck-button-cancel`,`cancel`),this._focusables=new Ba,this._focusCycler=new Do({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:`shift + tab`,focusNext:`tab`}}),this.setTemplate({tag:`form`,attributes:{class:[`ck`,`ck-text-alternative-form`,`ck-responsive-form`],tabindex:`-1`},children:[this.labeledInput,this.saveButtonView,this.cancelButtonView]}),r(this)}render(){super.render(),this.keystrokes.listenTo(this.element),o({view:this}),[this.labeledInput,this.saveButtonView,this.cancelButtonView].forEach((e=>{this._focusables.add(e),this.focusTracker.add(e.element)}))}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}_createButton(e,t,n,r){let i=new F(this.locale);return i.set({label:e,icon:t,tooltip:!0}),i.extendTemplate({attributes:{class:n}}),r&&i.delegate(`execute`).to(this,r),i}_createLabeledInputView(){let e=this.locale.t,t=new hm(this.locale,gm);return t.label=e(`Text alternative`),t}}function K_(e){let t=e.editing.view,n=Jp.defaultPositions,r=e.plugins.get(`ImageUtils`);return{target:t.domConverter.mapViewToDom(r.getClosestSelectedImageWidget(t.document.selection)),positions:[n.northArrowSouth,n.northArrowSouthWest,n.northArrowSouthEast,n.southArrowNorth,n.southArrowNorthWest,n.southArrowNorthEast,n.viewportStickyNorth]}}class q_ extends I{static get requires(){return[Sm]}static get pluginName(){return`ImageTextAlternativeUI`}init(){this._createButton()}destroy(){super.destroy(),this._form&&this._form.destroy()}_createButton(){let e=this.editor,t=e.t;e.ui.componentFactory.add(`imageTextAlternative`,(n=>{let r=e.commands.get(`imageTextAlternative`),i=new F(n);return i.set({label:t(`Change image text alternative`),icon:X.lowVision,tooltip:!0}),i.bind(`isEnabled`).to(r,`isEnabled`),i.bind(`isOn`).to(r,`value`,(e=>!!e)),this.listenTo(i,`execute`,(()=>{this._showForm()})),i}))}_createForm(){let e=this.editor,t=e.editing.view.document,r=e.plugins.get(`ImageUtils`);this._balloon=this.editor.plugins.get(`ContextualBalloon`),this._form=new G_(e.locale),this._form.render(),this.listenTo(this._form,`submit`,(()=>{e.execute(`imageTextAlternative`,{newValue:this._form.labeledInput.fieldView.element.value}),this._hideForm(!0)})),this.listenTo(this._form,`cancel`,(()=>{this._hideForm(!0)})),this._form.keystrokes.set(`Esc`,((e,t)=>{this._hideForm(!0),t()})),this.listenTo(e.ui,`update`,(()=>{r.getClosestSelectedImageWidget(t.selection)?this._isVisible&&function(e){let t=e.plugins.get(`ContextualBalloon`);if(e.plugins.get(`ImageUtils`).getClosestSelectedImageWidget(e.editing.view.document.selection)){let n=K_(e);t.updatePosition(n)}}(e):this._hideForm(!0)})),n({emitter:this._form,activator:()=>this._isVisible,contextElements:()=>[this._balloon.view.element],callback:()=>this._hideForm()})}_showForm(){if(this._isVisible)return;this._form||this._createForm();let e=this.editor,t=e.commands.get(`imageTextAlternative`),n=this._form.labeledInput;this._form.disableCssTransitions(),this._isInBalloon||this._balloon.add({view:this._form,position:K_(e)}),n.fieldView.value=n.fieldView.element.value=t.value||``,this._form.labeledInput.fieldView.select(),this._form.enableCssTransitions()}_hideForm(e){this._isInBalloon&&(this._form.focusTracker.isFocused&&this._form.saveButtonView.focus(),this._balloon.remove(this._form),e&&this.editor.editing.view.focus())}get _isVisible(){return!!this._balloon&&this._balloon.visibleView===this._form}get _isInBalloon(){return!!this._balloon&&this._balloon.hasView(this._form)}}class J_ extends I{static get requires(){return[H_,q_]}static get pluginName(){return`ImageTextAlternative`}}function Y_(e,t){return e=>{e.on(`attribute:srcset:${t}`,n)};function n(t,n,r){if(!r.consumable.consume(n.item,t.name))return;let i=r.writer,a=r.mapper.toViewElement(n.item),o=e.findViewImgElement(a);if(n.attributeNewValue===null){let e=n.attributeOldValue;e.data&&(i.removeAttribute(`srcset`,o),i.removeAttribute(`sizes`,o),e.width&&i.removeAttribute(`width`,o))}else{let e=n.attributeNewValue;e.data&&(i.setAttribute(`srcset`,e.data,o),i.setAttribute(`sizes`,`100vw`,o),e.width&&i.setAttribute(`width`,e.width,o))}}}function X_(e,t,n){return e=>{e.on(`attribute:${n}:${t}`,r)};function r(t,n,r){if(!r.consumable.consume(n.item,t.name))return;let i=r.writer,a=r.mapper.toViewElement(n.item),o=e.findViewImgElement(a);i.setAttribute(n.attributeKey,n.attributeNewValue||``,o)}}class Z_ extends dl{observe(e){this.listenTo(e,`load`,((e,t)=>{let n=t.target;this.checkShouldIgnoreEventFromTarget(n)||n.tagName==`IMG`&&this._fireEvents(t)}),{useCapture:!0})}_fireEvents(e){this.isEnabled&&(this.document.fire(`layoutChanged`),this.document.fire(`imageLoaded`,e))}}class Q_ extends L{constructor(e){super(e);let t=e.config.get(`image.insert.type`);e.plugins.has(`ImageBlockEditing`)||t===`block`&&b(`image-block-plugin-required`),e.plugins.has(`ImageInlineEditing`)||t===`inline`&&b(`image-inline-plugin-required`)}refresh(){this.isEnabled=this.editor.plugins.get(`ImageUtils`).isImageAllowed()}execute(e){let t=j(e.source),n=this.editor.model.document.selection,r=this.editor.plugins.get(`ImageUtils`),i=Object.fromEntries(n.getAttributes());t.forEach(((e,t)=>{let a=n.getSelectedElement();if(typeof e==`string`&&(e={src:e}),t&&a&&r.isImage(a)){let t=this.editor.model.createPositionAfter(a);r.insertImage({...e,...i},t)}else r.insertImage({...e,...i})}))}}class $_ extends L{refresh(){let e=this.editor.plugins.get(`ImageUtils`),t=this.editor.model.document.selection.getSelectedElement();this.isEnabled=e.isImage(t),this.value=this.isEnabled?t.getAttribute(`src`):null}execute(e){let t=this.editor.model.document.selection.getSelectedElement();this.editor.model.change((n=>{n.setAttribute(`src`,e.source,t),n.removeAttribute(`srcset`,t),n.removeAttribute(`sizes`,t)}))}}class ev extends I{static get requires(){return[B_]}static get pluginName(){return`ImageEditing`}init(){let e=this.editor,t=e.conversion;e.editing.view.addObserver(Z_),t.for(`upcast`).attributeToAttribute({view:{name:`img`,key:`alt`},model:`alt`}).attributeToAttribute({view:{name:`img`,key:`srcset`},model:{key:`srcset`,value:e=>{let t={data:e.getAttribute(`srcset`)};return e.hasAttribute(`width`)&&(t.width=e.getAttribute(`width`)),t}}});let n=new Q_(e),r=new $_(e);e.commands.add(`insertImage`,n),e.commands.add(`replaceImageSource`,r),e.commands.add(`imageInsert`,n)}}class tv extends L{constructor(e,t){super(e),this._modelElementName=t}refresh(){let e=this.editor.plugins.get(`ImageUtils`),t=e.getClosestSelectedImageElement(this.editor.model.document.selection);this._modelElementName===`imageBlock`?this.isEnabled=e.isInlineImage(t):this.isEnabled=e.isBlockImage(t)}execute(){let e=this.editor,t=this.editor.model,n=e.plugins.get(`ImageUtils`),r=n.getClosestSelectedImageElement(t.document.selection),i=Object.fromEntries(r.getAttributes());return i.src||i.uploadId?t.change((e=>{let a=Array.from(t.markers).filter((e=>e.getRange().containsItem(r))),o=n.insertImage(i,t.createSelection(r,`on`),this._modelElementName);if(!o)return null;let s=e.createRangeOn(o);for(let t of a){let n=t.getRange(),r=n.root.rootName==`$graveyard`?s:n.getJoined(s,!0);e.updateMarker(t,{range:r})}return{oldElement:r,newElement:o}})):null}}class nv extends I{static get requires(){return[ev,B_,Rm]}static get pluginName(){return`ImageBlockEditing`}init(){let e=this.editor;e.model.schema.register(`imageBlock`,{inheritAllFrom:`$blockObject`,allowAttributes:[`alt`,`src`,`srcset`]}),this._setupConversion(),e.plugins.has(`ImageInlineEditing`)&&(e.commands.add(`imageTypeBlock`,new tv(this.editor,`imageBlock`)),this._setupClipboardIntegration())}_setupConversion(){let e=this.editor,t=e.t,n=e.conversion,r=e.plugins.get(`ImageUtils`);n.for(`dataDowncast`).elementToStructure({model:`imageBlock`,view:(e,{writer:t})=>L_(t)}),n.for(`editingDowncast`).elementToStructure({model:`imageBlock`,view:(e,{writer:n})=>r.toImageWidget(L_(n),n,t(`image widget`))}),n.for(`downcast`).add(X_(r,`imageBlock`,`src`)).add(X_(r,`imageBlock`,`alt`)).add(Y_(r,`imageBlock`)),n.for(`upcast`).elementToElement({view:R_(e,`imageBlock`),model:(e,{writer:t})=>t.createElement(`imageBlock`,e.hasAttribute(`src`)?{src:e.getAttribute(`src`)}:null)}).add(function(e){return e=>{e.on(`element:figure`,t)};function t(t,n,r){if(!r.consumable.test(n.viewItem,{name:!0,classes:`image`}))return;let i=e.findViewImgElement(n.viewItem);if(!i||!r.consumable.test(i,{name:!0}))return;r.consumable.consume(n.viewItem,{name:!0,classes:`image`});let a=M(r.convertItem(i,n.modelCursor).modelRange.getItems());a?(r.convertChildren(n.viewItem,a),r.updateConversionResult(a,n)):r.consumable.revert(n.viewItem,{name:!0,classes:`image`})}}(r))}_setupClipboardIntegration(){let e=this.editor,t=e.model,n=e.editing.view,r=e.plugins.get(`ImageUtils`);this.listenTo(e.plugins.get(`ClipboardPipeline`),`inputTransformation`,((i,a)=>{let o=Array.from(a.content.getChildren()),s;if(!o.every(r.isInlineImageView))return;s=a.targetRanges?e.editing.mapper.toModelRange(a.targetRanges[0]):t.document.selection.getFirstRange();let c=t.createSelection(s);if(z_(t.schema,c)===`imageBlock`){let e=new yp(n.document),t=o.map((t=>e.createElement(`figure`,{class:`image`},t)));a.content=e.createDocumentFragment(t)}}))}}var rv=i(3508);N()(rv.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),rv.Z.locals;class iv extends I{static get requires(){return[nv,$h,J_]}static get pluginName(){return`ImageBlock`}}class av extends I{static get requires(){return[ev,B_,Rm]}static get pluginName(){return`ImageInlineEditing`}init(){let e=this.editor,t=e.model.schema;t.register(`imageInline`,{inheritAllFrom:`$inlineObject`,allowAttributes:[`alt`,`src`,`srcset`]}),t.addChildCheck(((e,t)=>{if(e.endsWith(`caption`)&&t.name===`imageInline`)return!1})),this._setupConversion(),e.plugins.has(`ImageBlockEditing`)&&(e.commands.add(`imageTypeInline`,new tv(this.editor,`imageInline`)),this._setupClipboardIntegration())}_setupConversion(){let e=this.editor,t=e.t,n=e.conversion,r=e.plugins.get(`ImageUtils`);n.for(`dataDowncast`).elementToElement({model:`imageInline`,view:(e,{writer:t})=>t.createEmptyElement(`img`)}),n.for(`editingDowncast`).elementToStructure({model:`imageInline`,view:(e,{writer:n})=>r.toImageWidget(function(e){return e.createContainerElement(`span`,{class:`image-inline`},e.createEmptyElement(`img`))}(n),n,t(`image widget`))}),n.for(`downcast`).add(X_(r,`imageInline`,`src`)).add(X_(r,`imageInline`,`alt`)).add(Y_(r,`imageInline`)),n.for(`upcast`).elementToElement({view:R_(e,`imageInline`),model:(e,{writer:t})=>t.createElement(`imageInline`,e.hasAttribute(`src`)?{src:e.getAttribute(`src`)}:null)})}_setupClipboardIntegration(){let e=this.editor,t=e.model,n=e.editing.view,r=e.plugins.get(`ImageUtils`);this.listenTo(e.plugins.get(`ClipboardPipeline`),`inputTransformation`,((i,a)=>{let o=Array.from(a.content.getChildren()),s;if(!o.every(r.isBlockImageView))return;s=a.targetRanges?e.editing.mapper.toModelRange(a.targetRanges[0]):t.document.selection.getFirstRange();let c=t.createSelection(s);if(z_(t.schema,c)===`imageInline`){let e=new yp(n.document),t=o.map((t=>t.childCount===1?(Array.from(t.getAttributes()).forEach((n=>e.setAttribute(...n,r.findViewImgElement(t)))),t.getChild(0)):t));a.content=e.createDocumentFragment(t)}}))}}class ov extends I{static get requires(){return[av,$h,J_]}static get pluginName(){return`ImageInline`}}class sv extends L{refresh(){let e=this.editor,t=e.plugins.get(`ImageCaptionUtils`);if(!e.plugins.has(nv))return this.isEnabled=!1,void(this.value=!1);let n=e.model.document.selection,r=n.getSelectedElement();if(!r){let e=t.getCaptionFromModelSelection(n);this.isEnabled=!!e,this.value=!!e;return}this.isEnabled=this.editor.plugins.get(`ImageUtils`).isImage(r),this.isEnabled?this.value=!!t.getCaptionFromImageModelElement(r):this.value=!1}execute(e={}){let{focusCaptionOnShow:t}=e;this.editor.model.change((e=>{this.value?this._hideImageCaption(e):this._showImageCaption(e,t)}))}_showImageCaption(e,t){let n=this.editor.model.document.selection,r=this.editor.plugins.get(`ImageCaptionEditing`),i=n.getSelectedElement(),a=r._getSavedCaption(i);this.editor.plugins.get(`ImageUtils`).isInlineImage(i)&&(this.editor.execute(`imageTypeBlock`),i=n.getSelectedElement());let o=a||e.createElement(`caption`);e.append(o,i),t&&e.setSelection(o,`in`)}_hideImageCaption(e){let t=this.editor,n=t.model.document.selection,r=t.plugins.get(`ImageCaptionEditing`),i=t.plugins.get(`ImageCaptionUtils`),a,o=n.getSelectedElement();o?a=i.getCaptionFromImageModelElement(o):(a=i.getCaptionFromModelSelection(n),o=a.parent),r._saveCaption(o,a),e.setSelection(o,`on`),e.remove(a)}}class cv extends I{static get pluginName(){return`ImageCaptionUtils`}static get requires(){return[B_]}getCaptionFromImageModelElement(e){for(let t of e.getChildren())if(t&&t.is(`element`,`caption`))return t;return null}getCaptionFromModelSelection(e){let t=this.editor.plugins.get(`ImageUtils`),n=e.getFirstPosition().findAncestor(`caption`);return n&&t.isBlockImage(n.parent)?n:null}matchImageCaptionViewElement(e){let t=this.editor.plugins.get(`ImageUtils`);return e.name==`figcaption`&&t.isBlockImageView(e.parent)?{name:!0}:null}}class lv extends I{static get requires(){return[B_,cv]}static get pluginName(){return`ImageCaptionEditing`}constructor(e){super(e),this._savedCaptionsMap=new WeakMap}init(){let e=this.editor,t=e.model.schema;t.isRegistered(`caption`)?t.extend(`caption`,{allowIn:`imageBlock`}):t.register(`caption`,{allowIn:`imageBlock`,allowContentOf:`$block`,isLimit:!0}),e.commands.add(`toggleImageCaption`,new sv(this.editor)),this._setupConversion(),this._setupImageTypeCommandsIntegration(),this._registerCaptionReconversion()}_setupConversion(){let e=this.editor,t=e.editing.view,n=e.plugins.get(`ImageUtils`),r=e.plugins.get(`ImageCaptionUtils`),i=e.t;e.conversion.for(`upcast`).elementToElement({view:e=>r.matchImageCaptionViewElement(e),model:`caption`}),e.conversion.for(`dataDowncast`).elementToElement({model:`caption`,view:(e,{writer:t})=>n.isBlockImage(e.parent)?t.createContainerElement(`figcaption`):null}),e.conversion.for(`editingDowncast`).elementToElement({model:`caption`,view:(e,{writer:r})=>{if(!n.isBlockImage(e.parent))return null;let a=r.createEditableElement(`figcaption`);r.setCustomProperty(`imageCaption`,!0,a),Bo({view:t,element:a,text:i(`Enter image caption`),keepOnFocus:!0});let o=e.parent.getAttribute(`alt`);return Rh(a,r,{label:o?i(`Caption for image: %0`,[o]):i(`Caption for the image`)})}})}_setupImageTypeCommandsIntegration(){let e=this.editor,t=e.plugins.get(`ImageUtils`),n=e.plugins.get(`ImageCaptionUtils`),r=e.commands.get(`imageTypeInline`),i=e.commands.get(`imageTypeBlock`),a=e=>{if(!e.return)return;let{oldElement:r,newElement:i}=e.return;if(!r)return;if(t.isBlockImage(r)){let e=n.getCaptionFromImageModelElement(r);if(e)return void this._saveCaption(i,e)}let a=this._getSavedCaption(r);a&&this._saveCaption(i,a)};r&&this.listenTo(r,`execute`,a,{priority:`low`}),i&&this.listenTo(i,`execute`,a,{priority:`low`})}_getSavedCaption(e){let t=this._savedCaptionsMap.get(e);return t?H.fromJSON(t):null}_saveCaption(e,t){this._savedCaptionsMap.set(e,t.toJSON())}_registerCaptionReconversion(){let e=this.editor,t=e.model,n=e.plugins.get(`ImageUtils`),r=e.plugins.get(`ImageCaptionUtils`);t.document.on(`change:data`,(()=>{let i=t.document.differ.getChanges();for(let t of i){if(t.attributeKey!==`alt`)continue;let i=t.range.start.nodeAfter;if(n.isBlockImage(i)){let t=r.getCaptionFromImageModelElement(i);if(!t)return;e.editing.reconvertItem(t)}}}))}}class uv extends I{static get requires(){return[cv]}static get pluginName(){return`ImageCaptionUI`}init(){let e=this.editor,t=e.editing.view,n=e.plugins.get(`ImageCaptionUtils`),r=e.t;e.ui.componentFactory.add(`toggleImageCaption`,(i=>{let a=e.commands.get(`toggleImageCaption`),o=new F(i);return o.set({icon:X.caption,tooltip:!0,isToggleable:!0}),o.bind(`isOn`,`isEnabled`).to(a,`value`,`isEnabled`),o.bind(`label`).to(a,`value`,(e=>r(e?`Toggle caption off`:`Toggle caption on`))),this.listenTo(o,`execute`,(()=>{e.execute(`toggleImageCaption`,{focusCaptionOnShow:!0});let r=n.getCaptionFromModelSelection(e.model.document.selection);if(r){let n=e.editing.mapper.toViewElement(r);t.scrollToTheSelection(),t.change((e=>{e.addClass(`image__caption_highlighted`,n)}))}e.editing.view.focus()})),o}))}}var dv=i(2640);N()(dv.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),dv.Z.locals;class fv extends L{constructor(e,t){super(e),this._defaultStyles={imageBlock:!1,imageInline:!1},this._styles=new Map(t.map((e=>{if(e.isDefault)for(let t of e.modelElements)this._defaultStyles[t]=e.name;return[e.name,e]})))}refresh(){let e=this.editor.plugins.get(`ImageUtils`).getClosestSelectedImageElement(this.editor.model.document.selection);this.isEnabled=!!e,this.isEnabled?e.hasAttribute(`imageStyle`)?this.value=e.getAttribute(`imageStyle`):this.value=this._defaultStyles[e.name]:this.value=!1}execute(e={}){let t=this.editor,n=t.model,r=t.plugins.get(`ImageUtils`);n.change((t=>{let i=e.value,a=r.getClosestSelectedImageElement(n.document.selection);i&&this.shouldConvertImageType(i,a)&&(this.editor.execute(r.isBlockImage(a)?`imageTypeInline`:`imageTypeBlock`),a=r.getClosestSelectedImageElement(n.document.selection)),!i||this._styles.get(i).isDefault?t.removeAttribute(`imageStyle`,a):t.setAttribute(`imageStyle`,i,a)}))}shouldConvertImageType(e,t){return!this._styles.get(e).modelElements.includes(t.name)}}let{objectFullWidth:pv,objectInline:mv,objectLeft:hv,objectRight:gv,objectCenter:_v,objectBlockLeft:vv,objectBlockRight:yv}=X,bv={get inline(){return{name:`inline`,title:`In line`,icon:mv,modelElements:[`imageInline`],isDefault:!0}},get alignLeft(){return{name:`alignLeft`,title:`Left aligned image`,icon:hv,modelElements:[`imageBlock`,`imageInline`],className:`image-style-align-left`}},get alignBlockLeft(){return{name:`alignBlockLeft`,title:`Left aligned image`,icon:vv,modelElements:[`imageBlock`],className:`image-style-block-align-left`}},get alignCenter(){return{name:`alignCenter`,title:`Centered image`,icon:_v,modelElements:[`imageBlock`],className:`image-style-align-center`}},get alignRight(){return{name:`alignRight`,title:`Right aligned image`,icon:gv,modelElements:[`imageBlock`,`imageInline`],className:`image-style-align-right`}},get alignBlockRight(){return{name:`alignBlockRight`,title:`Right aligned image`,icon:yv,modelElements:[`imageBlock`],className:`image-style-block-align-right`}},get block(){return{name:`block`,title:`Centered image`,icon:_v,modelElements:[`imageBlock`],isDefault:!0}},get side(){return{name:`side`,title:`Side image`,icon:gv,modelElements:[`imageBlock`],className:`image-style-side`}}},xv={full:pv,left:vv,right:yv,center:_v,inlineLeft:hv,inlineRight:gv,inline:mv},Sv=[{name:`imageStyle:wrapText`,title:`Wrap text`,defaultItem:`imageStyle:alignLeft`,items:[`imageStyle:alignLeft`,`imageStyle:alignRight`]},{name:`imageStyle:breakText`,title:`Break text`,defaultItem:`imageStyle:block`,items:[`imageStyle:alignBlockLeft`,`imageStyle:block`,`imageStyle:alignBlockRight`]}];function Cv(e){b(`image-style-configuration-definition-invalid`,e)}let wv={normalizeStyles:function(e){return(e.configuredStyles.options||[]).map((e=>function(e){return e=typeof e==`string`?bv[e]?{...bv[e]}:{name:e}:function(e,t){let n={...t};for(let r in e)Object.prototype.hasOwnProperty.call(t,r)||(n[r]=e[r]);return n}(bv[e.name],e),typeof e.icon==`string`&&(e.icon=xv[e.icon]||e.icon),e}(e))).filter((t=>function(e,{isBlockPluginLoaded:t,isInlinePluginLoaded:n}){let{modelElements:r,name:i}=e;if(!(r&&r.length&&i))return Cv({style:e}),!1;{let i=[t?`imageBlock`:null,n?`imageInline`:null];if(!r.some((e=>i.includes(e))))return b(`image-style-missing-dependency`,{style:e,missingPlugins:r.map((e=>e===`imageBlock`?`ImageBlockEditing`:`ImageInlineEditing`))}),!1}return!0}(t,e)))},getDefaultStylesConfiguration:function(e,t){return e&&t?{options:[`inline`,`alignLeft`,`alignRight`,`alignCenter`,`alignBlockLeft`,`alignBlockRight`,`block`,`side`]}:e?{options:[`block`,`side`]}:t?{options:[`inline`,`alignLeft`,`alignRight`]}:{}},getDefaultDropdownDefinitions:function(e){return e.has(`ImageBlockEditing`)&&e.has(`ImageInlineEditing`)?[...Sv]:[]},warnInvalidStyle:Cv,DEFAULT_OPTIONS:bv,DEFAULT_ICONS:xv,DEFAULT_DROPDOWN_DEFINITIONS:Sv};function Tv(e,t){for(let n of t)if(n.name===e)return n}class Ev extends I{static get pluginName(){return`ImageStyleEditing`}static get requires(){return[B_]}init(){let{normalizeStyles:e,getDefaultStylesConfiguration:t}=wv,n=this.editor,r=n.plugins.has(`ImageBlockEditing`),i=n.plugins.has(`ImageInlineEditing`);n.config.define(`image.styles`,t(r,i)),this.normalizedStyles=e({configuredStyles:n.config.get(`image.styles`),isBlockPluginLoaded:r,isInlinePluginLoaded:i}),this._setupConversion(r,i),this._setupPostFixer(),n.commands.add(`imageStyle`,new fv(n,this.normalizedStyles))}_setupConversion(e,t){let n=this.editor,r=n.model.schema,i=(a=this.normalizedStyles,(e,t,n)=>{if(!n.consumable.consume(t.item,e.name))return;let r=Tv(t.attributeNewValue,a),i=Tv(t.attributeOldValue,a),o=n.mapper.toViewElement(t.item),s=n.writer;i&&s.removeClass(i.className,o),r&&s.addClass(r.className,o)});var a;let o=function(e){let t={imageInline:e.filter((e=>!e.isDefault&&e.modelElements.includes(`imageInline`))),imageBlock:e.filter((e=>!e.isDefault&&e.modelElements.includes(`imageBlock`)))};return(e,n,r)=>{if(!n.modelRange)return;let i=n.viewItem,a=M(n.modelRange.getItems());if(a&&r.schema.checkAttribute(a,`imageStyle`))for(let e of t[a.name])r.consumable.consume(i,{classes:e.className})&&r.writer.setAttribute(`imageStyle`,e.name,a)}}(this.normalizedStyles);n.editing.downcastDispatcher.on(`attribute:imageStyle`,i),n.data.downcastDispatcher.on(`attribute:imageStyle`,i),e&&(r.extend(`imageBlock`,{allowAttributes:`imageStyle`}),n.data.upcastDispatcher.on(`element:figure`,o,{priority:`low`})),t&&(r.extend(`imageInline`,{allowAttributes:`imageStyle`}),n.data.upcastDispatcher.on(`element:img`,o,{priority:`low`}))}_setupPostFixer(){let e=this.editor,t=e.model.document,n=e.plugins.get(B_),r=new Map(this.normalizedStyles.map((e=>[e.name,e])));t.registerPostFixer((e=>{let i=!1;for(let a of t.differ.getChanges())if(a.type==`insert`||a.type==`attribute`&&a.attributeKey==`imageStyle`){let t=a.type==`insert`?a.position.nodeAfter:a.range.start.nodeAfter;if(t&&t.is(`element`,`paragraph`)&&t.childCount>0&&(t=t.getChild(0)),!n.isImage(t))continue;let o=t.getAttribute(`imageStyle`);if(!o)continue;let s=r.get(o);s&&s.modelElements.includes(t.name)||(e.removeAttribute(`imageStyle`,t),i=!0)}return i}))}}var Dv=i(5083);N()(Dv.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Dv.Z.locals;class Ov extends I{static get requires(){return[Ev]}static get pluginName(){return`ImageStyleUI`}get localizedDefaultStylesTitles(){let e=this.editor.t;return{"Wrap text":e(`Wrap text`),"Break text":e(`Break text`),"In line":e(`In line`),"Full size image":e(`Full size image`),"Side image":e(`Side image`),"Left aligned image":e(`Left aligned image`),"Centered image":e(`Centered image`),"Right aligned image":e(`Right aligned image`)}}init(){let e=this.editor.plugins,t=this.editor.config.get(`image.toolbar`)||[],n=kv(e.get(`ImageStyleEditing`).normalizedStyles,this.localizedDefaultStylesTitles);for(let e of n)this._createButton(e);let r=kv([...t.filter(S),...wv.getDefaultDropdownDefinitions(e)],this.localizedDefaultStylesTitles);for(let e of r)this._createDropdown(e,n)}_createDropdown(e,t){let n=this.editor.ui.componentFactory;n.add(e.name,(r=>{let i,{defaultItem:a,items:o,title:s}=e,c=o.filter((e=>t.find((({name:t})=>Av(t)===e)))).map((e=>{let t=n.create(e);return e===a&&(i=t),t}));o.length!==c.length&&wv.warnInvalidStyle({dropdown:e});let l=zp(r,To),u=l.buttonView,d=u.arrowView;return Bp(l,c,{enableActiveItemFocusOnDropdownOpen:!0}),u.set({label:jv(s,i.label),class:null,tooltip:!0}),d.unbind(`label`),d.set({label:s}),u.bind(`icon`).toMany(c,`isOn`,((...e)=>{let t=e.findIndex(Ps);return t<0?i.icon:c[t].icon})),u.bind(`label`).toMany(c,`isOn`,((...e)=>{let t=e.findIndex(Ps);return jv(s,t<0?i.label:c[t].label)})),u.bind(`isOn`).toMany(c,`isOn`,((...e)=>e.some(Ps))),u.bind(`class`).toMany(c,`isOn`,((...e)=>e.some(Ps)?`ck-splitbutton_flatten`:null)),u.on(`execute`,(()=>{c.some((({isOn:e})=>e))?l.isOpen=!l.isOpen:i.fire(`execute`)})),l.bind(`isEnabled`).toMany(c,`isEnabled`,((...e)=>e.some(Ps))),this.listenTo(l,`execute`,(()=>{this.editor.editing.view.focus()})),l}))}_createButton(e){let t=e.name;this.editor.ui.componentFactory.add(Av(t),(n=>{let r=this.editor.commands.get(`imageStyle`),i=new F(n);return i.set({label:e.title,icon:e.icon,tooltip:!0,isToggleable:!0}),i.bind(`isEnabled`).to(r,`isEnabled`),i.bind(`isOn`).to(r,`value`,(e=>e===t)),i.on(`execute`,this._executeCommand.bind(this,t)),i}))}_executeCommand(e){this.editor.execute(`imageStyle`,{value:e}),this.editor.editing.view.focus()}}function kv(e,t){for(let n of e)t[n.title]&&(n.title=t[n.title]);return e}function Av(e){return`imageStyle:${e}`}function jv(e,t){return(e?e+`: `:``)+t}function Mv(e){let t=e.map((e=>e.replace(`+`,`\\+`)));return RegExp(`^image\\/(${t.join(`|`)})$`)}function Nv(e){return new Promise(((t,n)=>{let r=e.getAttribute(`src`);fetch(r).then((e=>e.blob())).then((e=>{let n=Pv(e,r),i=n.replace(`image/`,``);t(new File([e],`image.${i}`,{type:n}))})).catch((e=>e&&e.name===`TypeError`?function(e){return function(e){return new Promise(((t,n)=>{let r=E.document.createElement(`img`);r.addEventListener(`load`,(()=>{let e=E.document.createElement(`canvas`);e.width=r.width,e.height=r.height,e.getContext(`2d`).drawImage(r,0,0),e.toBlob((e=>e?t(e):n()))})),r.addEventListener(`error`,(()=>n())),r.src=e}))}(e).then((t=>{let n=Pv(t,e),r=n.replace(`image/`,``);return new File([t],`image.${r}`,{type:n})}))}(r).then(t).catch(n):n(e)))}))}function Pv(e,t){return e.type?e.type:t.match(/data:(image\/\w+);base64/)?t.match(/data:(image\/\w+);base64/)[1].toLowerCase():`image/jpeg`}class Fv extends I{static get pluginName(){return`ImageUploadUI`}init(){let e=this.editor,t=e.t,n=n=>{let r=new Pg(n),i=e.commands.get(`uploadImage`),a=e.config.get(`image.upload.types`),o=Mv(a);return r.set({acceptedType:a.map((e=>`image/${e}`)).join(`,`),allowMultipleFiles:!0}),r.buttonView.set({label:t(`Insert image`),icon:X.image,tooltip:!0}),r.buttonView.bind(`isEnabled`).to(i),r.on(`done`,((t,n)=>{let r=Array.from(n).filter((e=>o.test(e.type)));r.length&&(e.execute(`uploadImage`,{file:r}),e.editing.view.focus())})),r};e.ui.componentFactory.add(`uploadImage`,n),e.ui.componentFactory.add(`imageUpload`,n)}}var Iv=i(3689);N()(Iv.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Iv.Z.locals;var Lv=i(4036);N()(Lv.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Lv.Z.locals;var Rv=i(3773);N()(Rv.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Rv.Z.locals;class zv extends I{static get pluginName(){return`ImageUploadProgress`}constructor(e){super(e),this.placeholder=`data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==`}init(){let e=this.editor;e.plugins.has(`ImageBlockEditing`)&&e.editing.downcastDispatcher.on(`attribute:uploadStatus:imageBlock`,((...e)=>this.uploadStatusChange(...e))),e.plugins.has(`ImageInlineEditing`)&&e.editing.downcastDispatcher.on(`attribute:uploadStatus:imageInline`,((...e)=>this.uploadStatusChange(...e)))}uploadStatusChange(e,t,n){let r=this.editor,i=t.item,a=i.getAttribute(`uploadId`);if(!n.consumable.consume(t.item,e.name))return;let o=r.plugins.get(`ImageUtils`),s=r.plugins.get(Mg),c=a?t.attributeNewValue:null,l=this.placeholder,u=r.editing.mapper.toViewElement(i),d=n.writer;if(c==`reading`)return Bv(u,d),void Vv(o,l,u,d);if(c==`uploading`){let e=s.loaders.get(a);Bv(u,d),e?(Hv(u,d),function(e,t,n,r){let i=function(e){let t=e.createUIElement(`div`,{class:`ck-progress-bar`});return e.setCustomProperty(`progressBar`,!0,t),t}(t);t.insert(t.createPositionAt(e,`end`),i),n.on(`change:uploadedPercent`,((e,t,n)=>{r.change((e=>{e.setStyle(`width`,n+`%`,i)}))}))}(u,d,e,r.editing.view),function(e,t,n,r){if(r.data){let i=e.findViewImgElement(t);n.setAttribute(`src`,r.data,i)}}(o,u,d,e)):Vv(o,l,u,d);return}c==`complete`&&s.loaders.get(a)&&function(e,t,n){let r=t.createUIElement(`div`,{class:`ck-image-upload-complete-icon`});t.insert(t.createPositionAt(e,`end`),r),setTimeout((()=>{n.change((e=>e.remove(e.createRangeOn(r))))}),3e3)}(u,d,r.editing.view),function(e,t){Wv(e,t,`progressBar`)}(u,d),Hv(u,d),function(e,t){t.removeClass(`ck-appear`,e)}(u,d)}}function Bv(e,t){e.hasClass(`ck-appear`)||t.addClass(`ck-appear`,e)}function Vv(e,t,n,r){n.hasClass(`ck-image-upload-placeholder`)||r.addClass(`ck-image-upload-placeholder`,n);let i=e.findViewImgElement(n);i.getAttribute(`src`)!==t&&r.setAttribute(`src`,t,i),Uv(n,`placeholder`)||r.insert(r.createPositionAfter(i),function(e){let t=e.createUIElement(`div`,{class:`ck-upload-placeholder-loader`});return e.setCustomProperty(`placeholder`,!0,t),t}(r))}function Hv(e,t){e.hasClass(`ck-image-upload-placeholder`)&&t.removeClass(`ck-image-upload-placeholder`,e),Wv(e,t,`placeholder`)}function Uv(e,t){for(let n of e.getChildren())if(n.getCustomProperty(t))return n}function Wv(e,t,n){let r=Uv(e,n);r&&t.remove(t.createRangeOn(r))}class Gv extends L{refresh(){let e=this.editor,t=e.plugins.get(`ImageUtils`),n=e.model.document.selection.getSelectedElement();this.isEnabled=t.isImageAllowed()||t.isImage(n)}execute(e){let t=j(e.file),n=this.editor.model.document.selection,r=this.editor.plugins.get(`ImageUtils`),i=Object.fromEntries(n.getAttributes());t.forEach(((e,t)=>{let a=n.getSelectedElement();if(t&&a&&r.isImage(a)){let t=this.editor.model.createPositionAfter(a);this._uploadImage(e,i,t)}else this._uploadImage(e,i)}))}_uploadImage(e,t,n){let r=this.editor,i=r.plugins.get(Mg).createLoader(e),a=r.plugins.get(`ImageUtils`);i&&a.insertImage({...t,uploadId:i.id},n)}}class Kv extends I{static get requires(){return[Mg,_m,Rm,B_]}static get pluginName(){return`ImageUploadEditing`}constructor(e){super(e),e.config.define(`image`,{upload:{types:[`jpeg`,`png`,`gif`,`bmp`,`webp`,`tiff`]}}),this._uploadImageElements=new Map}init(){let e=this.editor,t=e.model.document,n=e.conversion,r=e.plugins.get(Mg),i=e.plugins.get(`ImageUtils`),a=Mv(e.config.get(`image.upload.types`)),o=new Gv(e);e.commands.add(`uploadImage`,o),e.commands.add(`imageUpload`,o),n.for(`upcast`).attributeToAttribute({view:{name:`img`,key:`uploadId`},model:`uploadId`}),this.listenTo(e.editing.view.document,`clipboardInput`,((t,n)=>{if(r=n.dataTransfer,Array.from(r.types).includes(`text/html`)&&r.getData(`text/html`)!==``)return;var r;let i=Array.from(n.dataTransfer.files).filter((e=>!!e&&a.test(e.type)));i.length&&(t.stop(),e.model.change((t=>{n.targetRanges&&t.setSelection(n.targetRanges.map((t=>e.editing.mapper.toModelRange(t)))),e.model.enqueueChange((()=>{e.execute(`uploadImage`,{file:i})}))})))})),this.listenTo(e.plugins.get(`ClipboardPipeline`),`inputTransformation`,((t,n)=>{let a=Array.from(e.editing.view.createRangeIn(n.content)).filter((e=>function(e,t){return!(!e.isInlineImageView(t)||!t.getAttribute(`src`))&&(t.getAttribute(`src`).match(/^data:image\/\w+;base64,/g)||t.getAttribute(`src`).match(/^blob:/g))}(i,e.item)&&!e.item.getAttribute(`uploadProcessed`))).map((e=>({promise:Nv(e.item),imageElement:e.item})));if(!a.length)return;let o=new yp(e.editing.view.document);for(let e of a){o.setAttribute(`uploadProcessed`,!0,e.imageElement);let t=r.createLoader(e.promise);t&&(o.setAttribute(`src`,``,e.imageElement),o.setAttribute(`uploadId`,t.id,e.imageElement))}})),e.editing.view.document.on(`dragover`,((e,t)=>{t.preventDefault()})),t.on(`change`,(()=>{let n=t.differ.getChanges({includeChangesInGraveyard:!0}).reverse(),i=new Set;for(let t of n)if(t.type==`insert`&&t.name!=`$text`){let n=t.position.nodeAfter,a=t.position.root.rootName==`$graveyard`;for(let t of qv(e,n)){let e=t.getAttribute(`uploadId`);if(!e)continue;let n=r.loaders.get(e);n&&(a?i.has(e)||n.abort():(i.add(e),this._uploadImageElements.set(e,t),n.status==`idle`&&this._readAndUpload(n)))}}})),this.on(`uploadComplete`,((e,{imageElement:t,data:n})=>{let r=n.urls?n.urls:n;this.editor.model.change((e=>{e.setAttribute(`src`,r.default,t),this._parseAndSetSrcsetAttributeOnImage(r,t,e)}))}),{priority:`low`})}afterInit(){let e=this.editor.model.schema;this.editor.plugins.has(`ImageBlockEditing`)&&e.extend(`imageBlock`,{allowAttributes:[`uploadId`,`uploadStatus`]}),this.editor.plugins.has(`ImageInlineEditing`)&&e.extend(`imageInline`,{allowAttributes:[`uploadId`,`uploadStatus`]})}_readAndUpload(e){let t=this.editor,n=t.model,r=t.locale.t,i=t.plugins.get(Mg),a=t.plugins.get(_m),o=t.plugins.get(`ImageUtils`),s=this._uploadImageElements;return n.enqueueChange({isUndoable:!1},(t=>{t.setAttribute(`uploadStatus`,`reading`,s.get(e.id))})),e.read().then((()=>{let r=e.upload(),i=s.get(e.id);if(c.isSafari){let e=t.editing.mapper.toViewElement(i),n=o.findViewImgElement(e);t.editing.view.once(`render`,(()=>{if(!n.parent)return;let e=t.editing.view.domConverter.mapViewToDom(n.parent);if(!e)return;let r=e.style.display;e.style.display=`none`,e._ckHack=e.offsetHeight,e.style.display=r}))}return n.enqueueChange({isUndoable:!1},(e=>{e.setAttribute(`uploadStatus`,`uploading`,i)})),r})).then((t=>{n.enqueueChange({isUndoable:!1},(n=>{let r=s.get(e.id);n.setAttribute(`uploadStatus`,`complete`,r),this.fire(`uploadComplete`,{data:t,imageElement:r})})),l()})).catch((t=>{if(e.status!==`error`&&e.status!==`aborted`)throw t;e.status==`error`&&t&&a.showWarning(t,{title:r(`Upload failed`),namespace:`upload`}),n.enqueueChange({isUndoable:!1},(t=>{t.remove(s.get(e.id))})),l()}));function l(){n.enqueueChange({isUndoable:!1},(t=>{let n=s.get(e.id);t.removeAttribute(`uploadId`,n),t.removeAttribute(`uploadStatus`,n),s.delete(e.id)})),i.destroyLoader(e)}}_parseAndSetSrcsetAttributeOnImage(e,t,n){let r=0,i=Object.keys(e).filter((e=>{let t=parseInt(e,10);if(!isNaN(t))return r=Math.max(r,t),!0})).map((t=>`${e[t]} ${t}w`)).join(`, `);i!=``&&n.setAttribute(`srcset`,{data:i,width:r},t)}}function qv(e,t){let n=e.plugins.get(`ImageUtils`);return Array.from(e.model.createRangeOn(t)).filter((e=>n.isImage(e.item))).map((e=>e.item))}class Jv extends I{static get pluginName(){return`IndentEditing`}init(){let e=this.editor;e.commands.add(`indent`,new Po(e)),e.commands.add(`outdent`,new Po(e))}}let Yv=`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"/></svg>`,Xv=`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"/></svg>`;class Zv extends I{static get pluginName(){return`IndentUI`}init(){let e=this.editor,t=e.locale,n=e.t,r=t.uiLanguageDirection==`ltr`?Yv:Xv,i=t.uiLanguageDirection==`ltr`?Xv:Yv;this._defineButton(`indent`,n(`Increase indent`),r),this._defineButton(`outdent`,n(`Decrease indent`),i)}_defineButton(e,t,n){let r=this.editor;r.ui.componentFactory.add(e,(i=>{let a=r.commands.get(e),o=new F(i);return o.set({label:t,icon:n,tooltip:!0}),o.bind(`isOn`,`isEnabled`).to(a,`value`,`isEnabled`),this.listenTo(o,`execute`,(()=>{r.execute(e),r.editing.view.focus()})),o}))}}class Qv{constructor(){this._definitions=new Set}get length(){return this._definitions.size}add(e){Array.isArray(e)?e.forEach((e=>this._definitions.add(e))):this._definitions.add(e)}getDispatcher(){return e=>{e.on(`attribute:linkHref`,((e,t,n)=>{if(!n.consumable.test(t.item,`attribute:linkHref`)||!t.item.is(`selection`)&&!n.schema.isInline(t.item))return;let r=n.writer,i=r.document.selection;for(let e of this._definitions){let a=r.createAttributeElement(`a`,e.attributes,{priority:5});e.classes&&r.addClass(e.classes,a);for(let t in e.styles)r.setStyle(t,e.styles[t],a);r.setCustomProperty(`link`,!0,a),e.callback(t.attributeNewValue)?t.item.is(`selection`)?r.wrap(i.getFirstRange(),a):r.wrap(n.mapper.toViewRange(t.range),a):r.unwrap(n.mapper.toViewRange(t.range),a)}}),{priority:`high`})}}getDispatcherForLinkedImage(){return e=>{e.on(`attribute:linkHref:imageBlock`,((e,t,{writer:n,mapper:r})=>{let i=r.toViewElement(t.item),a=Array.from(i.getChildren()).find((e=>e.name===`a`));for(let e of this._definitions){let r=Fa(e.attributes);if(e.callback(t.attributeNewValue)){for(let[e,t]of r)e===`class`?n.addClass(t,a):n.setAttribute(e,t,a);e.classes&&n.addClass(e.classes,a);for(let t in e.styles)n.setStyle(t,e.styles[t],a)}else{for(let[e,t]of r)e===`class`?n.removeClass(t,a):n.removeAttribute(e,a);e.classes&&n.removeClass(e.classes,a);for(let t in e.styles)n.removeStyle(t,a)}}}))}}}let $v=function(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:Ss(e,t,n)};var ey=RegExp(`[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]`);let ty=function(e){return ey.test(e)},ny=function(e){return e.split(``)};var ry=`\\ud800-\\udfff`,iy=`[`+ry+`]`,ay=`[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]`,oy=`\\ud83c[\\udffb-\\udfff]`,sy=`[^`+ry+`]`,cy=`(?:\\ud83c[\\udde6-\\uddff]){2}`,ly=`[\\ud800-\\udbff][\\udc00-\\udfff]`,uy=`(?:`+ay+`|`+oy+`)?`,dy=`[\\ufe0e\\ufe0f]?`,fy=dy+uy+(`(?:\\u200d(?:`+[sy,cy,ly].join(`|`)+`)`+dy+uy+`)*`),py=`(?:`+[sy+ay+`?`,ay,cy,ly,iy].join(`|`)+`)`,my=RegExp(oy+`(?=`+oy+`)|`+py+fy,`g`);let hy=function(e){return e.match(my)||[]},gy=function(e){return ty(e)?hy(e):ny(e)},_y=function(e){return function(t){t=gs(t);var n=ty(t)?gy(t):void 0,r=n?n[0]:t.charAt(0),i=n?$v(n,1).join(``):t.slice(1);return r[e]()+i}}(`toUpperCase`),vy=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,yy=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i,by=/^[\S]+@((?![-_])(?:[-\w\u00a1-\uffff]{0,63}[^-_]\.))+(?:[a-z\u00a1-\uffff]{2,})$/i,xy=/^((\w+:(\/{2,})?)|(\W))/i,Sy=`Ctrl+K`;function Cy(e,{writer:t}){let n=t.createAttributeElement(`a`,{href:e},{priority:5});return t.setCustomProperty(`link`,!0,n),n}function wy(e){return function(e){return e.replace(vy,``).match(yy)}(e=String(e))?e:`#`}function Ty(e,t){return!!e&&t.checkAttribute(e.name,`linkHref`)}function Ey(e,t){let n=(r=e,by.test(r)?`mailto:`:t);var r;let i=!!n&&!Dy(e);return e&&i?n+e:e}function Dy(e){return xy.test(e)}function Oy(e){window.open(e,`_blank`,`noopener`)}class ky extends L{constructor(e){super(e),this.manualDecorators=new Ma,this.automaticDecorators=new Qv}restoreManualDecoratorStates(){for(let e of this.manualDecorators)e.value=this._getDecoratorStateFromModel(e.id)}refresh(){let e=this.editor.model,t=e.document.selection,n=t.getSelectedElement()||M(t.getSelectedBlocks());Ty(n,e.schema)?(this.value=n.getAttribute(`linkHref`),this.isEnabled=e.schema.checkAttribute(n,`linkHref`)):(this.value=t.getAttribute(`linkHref`),this.isEnabled=e.schema.checkAttributeInSelection(t,`linkHref`));for(let e of this.manualDecorators)e.value=this._getDecoratorStateFromModel(e.id)}execute(e,t={}){let n=this.editor.model,r=n.document.selection,i=[],a=[];for(let e in t)t[e]?i.push(e):a.push(e);n.change((t=>{if(r.isCollapsed){let o=r.getFirstPosition();if(r.hasAttribute(`linkHref`)){let s=_h(o,`linkHref`,r.getAttribute(`linkHref`),n);t.setAttribute(`linkHref`,e,s),i.forEach((e=>{t.setAttribute(e,!0,s)})),a.forEach((e=>{t.removeAttribute(e,s)})),t.setSelection(t.createPositionAfter(s.end.nodeBefore))}else if(e!==``){let a=Fa(r.getAttributes());a.set(`linkHref`,e),i.forEach((e=>{a.set(e,!0)}));let{end:s}=n.insertContent(t.createText(e,a),o);t.setSelection(s)}[`linkHref`,...i,...a].forEach((e=>{t.removeSelectionAttribute(e)}))}else{let o=n.schema.getValidRanges(r.getRanges(),`linkHref`),s=[];for(let e of r.getSelectedBlocks())n.schema.checkAttribute(e,`linkHref`)&&s.push(t.createRangeOn(e));let c=s.slice();for(let e of o)this._isRangeToUpdate(e,s)&&c.push(e);for(let n of c)t.setAttribute(`linkHref`,e,n),i.forEach((e=>{t.setAttribute(e,!0,n)})),a.forEach((e=>{t.removeAttribute(e,n)}))}}))}_getDecoratorStateFromModel(e){let t=this.editor.model,n=t.document.selection,r=n.getSelectedElement();return Ty(r,t.schema)?r.getAttribute(e):n.getAttribute(e)}_isRangeToUpdate(e,t){for(let n of t)if(n.containsRange(e))return!1;return!0}}class Ay extends L{refresh(){let e=this.editor.model,t=e.document.selection,n=t.getSelectedElement();Ty(n,e.schema)?this.isEnabled=e.schema.checkAttribute(n,`linkHref`):this.isEnabled=e.schema.checkAttributeInSelection(t,`linkHref`)}execute(){let e=this.editor,t=this.editor.model,n=t.document.selection,r=e.commands.get(`link`);t.change((e=>{let i=n.isCollapsed?[_h(n.getFirstPosition(),`linkHref`,n.getAttribute(`linkHref`),t)]:t.schema.getValidRanges(n.getRanges(),`linkHref`);for(let t of i)if(e.removeAttribute(`linkHref`,t),r)for(let n of r.manualDecorators)e.removeAttribute(n.id,t)}))}}class jy{constructor({id:e,label:t,attributes:n,classes:r,styles:i,defaultValue:a}){this.id=e,this.set(`value`),this.defaultValue=a,this.label=t,this.attributes=n,this.classes=r,this.styles=i}_createPattern(){return{attributes:this.attributes,classes:this.classes,styles:this.styles}}}m(jy,C);var My=i(9773);N()(My.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),My.Z.locals;let Ny=`automatic`,Py=/^(https?:)?\/\//;class Fy extends I{static get pluginName(){return`LinkEditing`}static get requires(){return[nh,Um,Rm]}constructor(e){super(e),e.config.define(`link`,{addTargetToExternalLinks:!1})}init(){let e=this.editor;e.model.schema.extend(`$text`,{allowAttributes:`linkHref`}),e.conversion.for(`dataDowncast`).attributeToElement({model:`linkHref`,view:Cy}),e.conversion.for(`editingDowncast`).attributeToElement({model:`linkHref`,view:(e,t)=>Cy(wy(e),t)}),e.conversion.for(`upcast`).elementToAttribute({view:{name:`a`,attributes:{href:!0}},model:{key:`linkHref`,value:e=>e.getAttribute(`href`)}}),e.commands.add(`link`,new ky(e)),e.commands.add(`unlink`,new Ay(e));let t=function(e,t){let n={"Open in a new tab":e(`Open in a new tab`),Downloadable:e(`Downloadable`)};return t.forEach((e=>(e.label&&n[e.label]&&(e.label=n[e.label]),e))),t}(e.t,function(e){let t=[];if(e)for(let[n,r]of Object.entries(e)){let e=Object.assign({},r,{id:`link${_y(n)}`});t.push(e)}return t}(e.config.get(`link.decorators`)));this._enableAutomaticDecorators(t.filter((e=>e.mode===Ny))),this._enableManualDecorators(t.filter((e=>e.mode===`manual`))),e.plugins.get(nh).registerAttribute(`linkHref`),function(e,t,n,r){let i=e.editing.view,a=new Set;i.document.registerPostFixer((i=>{let o=e.model.document.selection,s=!1;if(o.hasAttribute(t)){let c=_h(o.getFirstPosition(),t,o.getAttribute(t),e.model),l=e.editing.mapper.toViewRange(c);for(let e of l.getItems())e.is(`element`,n)&&!e.hasClass(r)&&(i.addClass(r,e),a.add(e),s=!0)}return s})),e.conversion.for(`editingDowncast`).add((e=>{function t(){i.change((e=>{for(let t of a.values())e.removeClass(r,t),a.delete(t)}))}e.on(`insert`,t,{priority:`highest`}),e.on(`remove`,t,{priority:`highest`}),e.on(`attribute`,t,{priority:`highest`}),e.on(`selection`,t,{priority:`highest`})}))}(e,`linkHref`,`a`,`ck-link_selected`),this._enableLinkOpen(),this._enableInsertContentSelectionAttributesFixer(),this._enableClickingAfterLink(),this._enableTypingOverLink(),this._handleDeleteContentAfterLink(),this._enableClipboardIntegration()}_enableAutomaticDecorators(e){let t=this.editor,n=t.commands.get(`link`).automaticDecorators;t.config.get(`link.addTargetToExternalLinks`)&&n.add({id:`linkIsExternal`,mode:Ny,callback:e=>Py.test(e),attributes:{target:`_blank`,rel:`noopener noreferrer`}}),n.add(e),n.length&&t.conversion.for(`downcast`).add(n.getDispatcher())}_enableManualDecorators(e){if(!e.length)return;let t=this.editor,n=t.commands.get(`link`).manualDecorators;e.forEach((e=>{t.model.schema.extend(`$text`,{allowAttributes:e.id}),e=new jy(e),n.add(e),t.conversion.for(`downcast`).attributeToElement({model:e.id,view:(t,{writer:n,schema:r},{item:i})=>{if((i.is(`selection`)||r.isInline(i))&&t){let t=n.createAttributeElement(`a`,e.attributes,{priority:5});e.classes&&n.addClass(e.classes,t);for(let r in e.styles)n.setStyle(r,e.styles[r],t);return n.setCustomProperty(`link`,!0,t),t}}}),t.conversion.for(`upcast`).elementToAttribute({view:{name:`a`,...e._createPattern()},model:{key:e.id}})}))}_enableLinkOpen(){let e=this.editor,t=e.editing.view.document;this.listenTo(t,`click`,((e,t)=>{if(!(c.isMac?t.domEvent.metaKey:t.domEvent.ctrlKey))return;let n=t.domTarget;if(n.tagName.toLowerCase()!=`a`&&(n=n.closest(`a`)),!n)return;let r=n.getAttribute(`href`);r&&(e.stop(),t.preventDefault(),Oy(r))}),{context:`$capture`}),this.listenTo(t,`keydown`,((t,n)=>{let r=e.commands.get(`link`).value;r&&n.keyCode===A.enter&&n.altKey&&(t.stop(),Oy(r))}))}_enableInsertContentSelectionAttributesFixer(){let e=this.editor.model,t=e.document.selection;this.listenTo(e,`insertContent`,(()=>{let n=t.anchor.nodeBefore,r=t.anchor.nodeAfter;t.hasAttribute(`linkHref`)&&n&&n.hasAttribute(`linkHref`)&&(r&&r.hasAttribute(`linkHref`)||e.change((t=>{Iy(t,Ry(e.schema))})))}),{priority:`low`})}_enableClickingAfterLink(){let e=this.editor,t=e.model;e.editing.view.addObserver(vp);let n=!1;this.listenTo(e.editing.view.document,`mousedown`,(()=>{n=!0})),this.listenTo(e.editing.view.document,`selectionChange`,(()=>{if(!n)return;n=!1;let e=t.document.selection;if(!e.isCollapsed||!e.hasAttribute(`linkHref`))return;let r=e.getFirstPosition(),i=_h(r,`linkHref`,e.getAttribute(`linkHref`),t);(r.isTouching(i.start)||r.isTouching(i.end))&&t.change((e=>{Iy(e,Ry(t.schema))}))}))}_enableTypingOverLink(){let e=this.editor,t=e.editing.view,n,r;this.listenTo(t.document,`delete`,(()=>{r=!0}),{priority:`high`}),this.listenTo(e.model,`deleteContent`,(()=>{let t=e.model.document.selection;t.isCollapsed||(r?r=!1:Ly(e)&&function(e){let t=e.document.selection,n=t.getFirstPosition(),r=t.getLastPosition(),i=n.nodeAfter;return!i||!i.is(`$text`)||!i.hasAttribute(`linkHref`)?!1:i===(r.textNode||r.nodeBefore)?!0:_h(n,`linkHref`,i.getAttribute(`linkHref`),e).containsRange(e.createRange(n,r),!0)}(e.model)&&(n=t.getAttributes()))}),{priority:`high`}),this.listenTo(e.model,`insertContent`,((t,[i])=>{r=!1,Ly(e)&&n&&(e.model.change((e=>{for(let[t,r]of n)e.setAttribute(t,r,i)})),n=null)}),{priority:`high`})}_handleDeleteContentAfterLink(){let e=this.editor,t=e.model,n=t.document.selection,r=e.editing.view,i=!1,a=!1;this.listenTo(r.document,`delete`,((e,t)=>{a=t.direction===`backward`}),{priority:`high`}),this.listenTo(t,`deleteContent`,(()=>{i=!1;let e=n.getFirstPosition(),r=n.getAttribute(`linkHref`);if(!r)return;let a=_h(e,`linkHref`,r,t);i=a.containsPosition(e)||a.end.isEqual(e)}),{priority:`high`}),this.listenTo(t,`deleteContent`,(()=>{a&&(a=!1,i||e.model.enqueueChange((e=>{Iy(e,Ry(t.schema))})))}),{priority:`low`})}_enableClipboardIntegration(){let e=this.editor,t=e.model,n=this.editor.config.get(`link.defaultProtocol`);n&&this.listenTo(e.plugins.get(`ClipboardPipeline`),`contentInsertion`,((e,r)=>{t.change((e=>{let t=e.createRangeIn(r.content);for(let r of t.getItems())if(r.hasAttribute(`linkHref`)){let t=Ey(r.getAttribute(`linkHref`),n);e.setAttribute(`linkHref`,t,r)}}))}))}}function Iy(e,t){e.removeSelectionAttribute(`linkHref`);for(let n of t)e.removeSelectionAttribute(n)}function Ly(e){return e.model.change((e=>e.batch)).isTyping}function Ry(e){return e.getDefinition(`$text`).allowAttributes.filter((e=>e.startsWith(`link`)))}var zy=i(7754);N()(zy.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),zy.Z.locals;class By extends P{constructor(e,t){super(e);let n=e.t;this.focusTracker=new Na,this.keystrokes=new Pa,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n(`Save`),X.check,`ck-button-save`),this.saveButtonView.type=`submit`,this.cancelButtonView=this._createButton(n(`Cancel`),X.cancel,`ck-button-cancel`,`cancel`),this._manualDecoratorSwitches=this._createManualDecoratorSwitches(t),this.children=this._createFormChildren(t.manualDecorators),this._focusables=new Ba,this._focusCycler=new Do({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:`shift + tab`,focusNext:`tab`}});let i=[`ck`,`ck-link-form`,`ck-responsive-form`];t.manualDecorators.length&&i.push(`ck-link-form_layout-vertical`,`ck-vertical-form`),this.setTemplate({tag:`form`,attributes:{class:i,tabindex:`-1`},children:this.children}),r(this)}getDecoratorSwitchesState(){return Array.from(this._manualDecoratorSwitches).reduce(((e,t)=>(e[t.name]=t.isOn,e)),{})}render(){super.render(),o({view:this}),[this.urlInputView,...this._manualDecoratorSwitches,this.saveButtonView,this.cancelButtonView].forEach((e=>{this._focusables.add(e),this.focusTracker.add(e.element)})),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}_createUrlInput(){let e=this.locale.t,t=new hm(this.locale,gm);return t.label=e(`Link URL`),t}_createButton(e,t,n,r){let i=new F(this.locale);return i.set({label:e,icon:t,tooltip:!0}),i.extendTemplate({attributes:{class:n}}),r&&i.delegate(`execute`).to(this,r),i}_createManualDecoratorSwitches(e){let t=this.createCollection();for(let n of e.manualDecorators){let r=new go(this.locale);r.set({name:n.id,label:n.label,withText:!0}),r.bind(`isOn`).toMany([n,e],`value`,((e,t)=>t===void 0&&e===void 0?n.defaultValue:e)),r.on(`execute`,(()=>{n.set(`value`,!r.isOn)})),t.add(r)}return t}_createFormChildren(e){let t=this.createCollection();if(t.add(this.urlInputView),e.length){let e=new P;e.setTemplate({tag:`ul`,children:this._manualDecoratorSwitches.map((e=>({tag:`li`,children:[e],attributes:{class:[`ck`,`ck-list__item`]}}))),attributes:{class:[`ck`,`ck-reset`,`ck-list`]}}),t.add(e)}return t.add(this.saveButtonView),t.add(this.cancelButtonView),t}}var Vy=i(2347);N()(Vy.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Vy.Z.locals;class Hy extends P{constructor(e){super(e);let t=e.t;this.focusTracker=new Na,this.keystrokes=new Pa,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(t(`Unlink`),`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zm4.919 10.562-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></svg>`,`unlink`),this.editButtonView=this._createButton(t(`Edit link`),X.pencil,`edit`),this.set(`href`),this._focusables=new Ba,this._focusCycler=new Do({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:`shift + tab`,focusNext:`tab`}}),this.setTemplate({tag:`div`,attributes:{class:[`ck`,`ck-link-actions`,`ck-responsive-form`],tabindex:`-1`},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]})}render(){super.render(),[this.previewButtonView,this.editButtonView,this.unlinkButtonView].forEach((e=>{this._focusables.add(e),this.focusTracker.add(e.element)})),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}_createButton(e,t,n){let r=new F(this.locale);return r.set({label:e,icon:t,tooltip:!0}),r.delegate(`execute`).to(this,n),r}_createPreviewButton(){let e=new F(this.locale),t=this.bindTemplate,n=this.t;return e.set({withText:!0,tooltip:n(`Open link in new tab`)}),e.extendTemplate({attributes:{class:[`ck`,`ck-link-actions__preview`],href:t.to(`href`,(e=>e&&wy(e))),target:`_blank`,rel:`noopener noreferrer`}}),e.bind(`label`).to(this,`href`,(e=>e||n(`This link has no URL`))),e.bind(`isEnabled`).to(this,`href`,(e=>!!e)),e.template.tag=`a`,e.template.eventListeners={},e}}let Uy=`link-ui`;class Wy extends I{static get requires(){return[Sm]}static get pluginName(){return`LinkUI`}init(){let e=this.editor;e.editing.view.addObserver(_p),this.actionsView=null,this.formView=null,this._balloon=e.plugins.get(Sm),this._createToolbarLinkButton(),this._enableBalloonActivators(),e.conversion.for(`editingDowncast`).markerToHighlight({model:Uy,view:{classes:[`ck-fake-link-selection`]}}),e.conversion.for(`editingDowncast`).markerToElement({model:Uy,view:{name:`span`,classes:[`ck-fake-link-selection`,`ck-fake-link-selection_collapsed`]}})}destroy(){super.destroy(),this.formView&&this.formView.destroy(),this.actionsView&&this.actionsView.destroy()}_createViews(){this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._enableUserBalloonInteractions()}_createActionsView(){let e=this.editor,t=new Hy(e.locale),n=e.commands.get(`link`),r=e.commands.get(`unlink`);return t.bind(`href`).to(n,`value`),t.editButtonView.bind(`isEnabled`).to(n),t.unlinkButtonView.bind(`isEnabled`).to(r),this.listenTo(t,`edit`,(()=>{this._addFormView()})),this.listenTo(t,`unlink`,(()=>{e.execute(`unlink`),this._hideUI()})),t.keystrokes.set(`Esc`,((e,t)=>{this._hideUI(),t()})),t.keystrokes.set(Sy,((e,t)=>{this._addFormView(),t()})),t}_createFormView(){let e=this.editor,t=e.commands.get(`link`),n=e.config.get(`link.defaultProtocol`),r=new By(e.locale,t);return r.urlInputView.fieldView.bind(`value`).to(t,`value`),r.urlInputView.bind(`isReadOnly`).to(t,`isEnabled`,(e=>!e)),r.saveButtonView.bind(`isEnabled`).to(t),this.listenTo(r,`submit`,(()=>{let{value:t}=r.urlInputView.fieldView.element,i=Ey(t,n);e.execute(`link`,i,r.getDecoratorSwitchesState()),this._closeFormView()})),this.listenTo(r,`cancel`,(()=>{this._closeFormView()})),r.keystrokes.set(`Esc`,((e,t)=>{this._closeFormView(),t()})),r}_createToolbarLinkButton(){let e=this.editor,t=e.commands.get(`link`),n=e.t;e.ui.componentFactory.add(`link`,(e=>{let r=new F(e);return r.isEnabled=!0,r.label=n(`Link`),r.icon=`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"/></svg>`,r.keystroke=Sy,r.tooltip=!0,r.isToggleable=!0,r.bind(`isEnabled`).to(t,`isEnabled`),r.bind(`isOn`).to(t,`value`,(e=>!!e)),this.listenTo(r,`execute`,(()=>this._showUI(!0))),r}))}_enableBalloonActivators(){let e=this.editor,t=e.editing.view.document;this.listenTo(t,`click`,(()=>{this._getSelectedLinkElement()&&this._showUI()})),e.keystrokes.set(Sy,((t,n)=>{n(),e.commands.get(`link`).isEnabled&&this._showUI(!0)}))}_enableUserBalloonInteractions(){this.editor.keystrokes.set(`Tab`,((e,t)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),t())}),{priority:`high`}),this.editor.keystrokes.set(`Esc`,((e,t)=>{this._isUIVisible&&(this._hideUI(),t())})),n({emitter:this.formView,activator:()=>this._isUIInPanel,contextElements:()=>[this._balloon.view.element],callback:()=>this._hideUI()})}_addActionsView(){this.actionsView||this._createViews(),this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()})}_addFormView(){if(this.formView||this._createViews(),this._isFormInPanel)return;let e=this.editor.commands.get(`link`);this.formView.disableCssTransitions(),this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this._balloon.visibleView===this.formView&&this.formView.urlInputView.fieldView.select(),this.formView.enableCssTransitions(),this.formView.urlInputView.fieldView.element.value=e.value||``}_closeFormView(){let e=this.editor.commands.get(`link`);e.restoreManualDecoratorStates(),e.value===void 0?this._hideUI():this._removeFormView()}_removeFormView(){this._isFormInPanel&&(this.formView.saveButtonView.focus(),this._balloon.remove(this.formView),this.editor.editing.view.focus(),this._hideFakeVisualSelection())}_showUI(e=!1){this.formView||this._createViews(),this._getSelectedLinkElement()?(this._areActionsVisible?this._addFormView():this._addActionsView(),e&&this._balloon.showStack(`main`)):(this._showFakeVisualSelection(),this._addActionsView(),e&&this._balloon.showStack(`main`),this._addFormView()),this._startUpdatingUI()}_hideUI(){if(!this._isUIInPanel)return;let e=this.editor;this.stopListening(e.ui,`update`),this.stopListening(this._balloon,`change:visibleView`),e.editing.view.focus(),this._removeFormView(),this._balloon.remove(this.actionsView),this._hideFakeVisualSelection()}_startUpdatingUI(){let e=this.editor,t=e.editing.view.document,n=this._getSelectedLinkElement(),r=a(),i=()=>{let e=this._getSelectedLinkElement(),t=a();n&&!e||!n&&t!==r?this._hideUI():this._isUIVisible&&this._balloon.updatePosition(this._getBalloonPositionData()),n=e,r=t};function a(){return t.selection.focus.getAncestors().reverse().find((e=>e.is(`element`)))}this.listenTo(e.ui,`update`,i),this.listenTo(this._balloon,`change:visibleView`,i)}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){return this._balloon.visibleView==this.formView||this._areActionsVisible}_getBalloonPositionData(){let e=this.editor.editing.view,t=this.editor.model,n=e.document,r=null;if(t.markers.has(Uy)){let t=Array.from(this.editor.editing.mapper.markerNameToElements(Uy)),n=e.createRange(e.createPositionBefore(t[0]),e.createPositionAfter(t[t.length-1]));r=e.domConverter.viewRangeToDom(n)}else r=()=>{let t=this._getSelectedLinkElement();return t?e.domConverter.mapViewToDom(t):e.domConverter.viewRangeToDom(n.selection.getFirstRange())};return{target:r}}_getSelectedLinkElement(){let e=this.editor.editing.view,t=e.document.selection,n=t.getSelectedElement();if(t.isCollapsed||n&&Z(n))return Gy(t.getFirstPosition());{let n=t.getFirstRange().getTrimmed(),r=Gy(n.start),i=Gy(n.end);return r&&r==i&&e.createRangeIn(r).getTrimmed().isEqual(n)?r:null}}_showFakeVisualSelection(){let e=this.editor.model;e.change((t=>{let n=e.document.selection.getFirstRange();if(e.markers.has(Uy))t.updateMarker(Uy,{range:n});else if(n.start.isAtEnd){let r=n.start.getLastMatchingPosition((({item:t})=>!e.schema.isContent(t)),{boundaries:n});t.addMarker(Uy,{usingOperation:!1,affectsData:!1,range:t.createRange(r,n.end)})}else t.addMarker(Uy,{usingOperation:!1,affectsData:!1,range:n})}))}_hideFakeVisualSelection(){let e=this.editor.model;e.markers.has(Uy)&&e.change((e=>{e.removeMarker(Uy)}))}}function Gy(e){return e.getAncestors().find((e=>{return(t=e).is(`attributeElement`)&&!!t.getCustomProperty(`link`);var t}))}let Ky=RegExp(`(^|\\s)(((?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(((?!www\\.)|(www\\.))(?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.)+(?:[a-z\\u00a1-\\uffff]{2,63})))(?::\\d{2,5})?(?:[/?#]\\S*)?)|((www.|(\\S+@))((?![-_])(?:[-_a-z0-9\\u00a1-\\uffff]{1,63}\\.))+(?:[a-z\\u00a1-\\uffff]{2,63})))$`,`i`);class qy extends I{static get requires(){return[Qm]}static get pluginName(){return`AutoLink`}init(){let e=this.editor.model.document.selection;e.on(`change:range`,(()=>{this.isEnabled=!e.anchor.parent.is(`element`,`codeBlock`)})),this._enableTypingHandling()}afterInit(){this._enableEnterHandling(),this._enableShiftEnterHandling()}_enableTypingHandling(){let e=this.editor,t=new th(e.model,(e=>{if(!function(e){return e.length>4&&e[e.length-1]===` `&&e[e.length-2]!==` `}(e))return;let t=Jy(e.substr(0,e.length-1));return t?{url:t}:void 0}));t.on(`matched:data`,((t,n)=>{let{batch:r,range:i,url:a}=n;if(!r.isTyping)return;let o=i.end.getShiftedBy(-1),s=o.getShiftedBy(-a.length),c=e.model.createRange(s,o);this._applyAutoLink(a,c)})),t.bind(`isEnabled`).to(this)}_enableEnterHandling(){let e=this.editor,t=e.model,n=e.commands.get(`enter`);n&&n.on(`execute`,(()=>{let e=t.document.selection.getFirstPosition();if(!e.parent.previousSibling)return;let n=t.createRangeIn(e.parent.previousSibling);this._checkAndApplyAutoLinkOnRange(n)}))}_enableShiftEnterHandling(){let e=this.editor,t=e.model,n=e.commands.get(`shiftEnter`);n&&n.on(`execute`,(()=>{let e=t.document.selection.getFirstPosition(),n=t.createRange(t.createPositionAt(e.parent,0),e.getShiftedBy(-1));this._checkAndApplyAutoLinkOnRange(n)}))}_checkAndApplyAutoLinkOnRange(e){let t=this.editor.model,{text:n,range:r}=eh(e,t),i=Jy(n);if(i){let e=t.createRange(r.end.getShiftedBy(-i.length),r.end);this._applyAutoLink(i,e)}}_applyAutoLink(e,t){let n=this.editor.model,r=Ey(e,this.editor.config.get(`link.defaultProtocol`));this.isEnabled&&function(e,t){return t.schema.checkAttributeInSelection(t.createSelection(e),`linkHref`)}(t,n)&&Dy(r)&&!function(e){let t=e.start.nodeAfter;return t&&t.hasAttribute(`linkHref`)}(t)&&this._persistAutoLink(r,t)}_persistAutoLink(e,t){let n=this.editor.model,r=this.editor.plugins.get(`Delete`);n.enqueueChange((i=>{i.setAttribute(`linkHref`,e,t),n.enqueueChange((()=>{r.requestUndoOnBackspace()}))}))}}function Jy(e){let t=Ky.exec(e);return t?t[2]:null}class Yy extends L{constructor(e,t){super(e),this.type=t}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(e={}){let t=this.editor.model,n=t.document,r=Array.from(n.selection.getSelectedBlocks()).filter((e=>Zy(e,t.schema))),i=e.forceValue===void 0?this.value:!e.forceValue;t.change((e=>{if(i){let t=r[r.length-1].nextSibling,n=1/0,i=[];for(;t&&t.name==`listItem`&&t.getAttribute(`listIndent`)!==0;){let e=t.getAttribute(`listIndent`);e<n&&(n=e);let r=e-n;i.push({element:t,listIndent:r}),t=t.nextSibling}i=i.reverse();for(let t of i)e.setAttribute(`listIndent`,t.listIndent,t.element)}if(!i){let e=1/0;for(let t of r)t.is(`element`,`listItem`)&&t.getAttribute(`listIndent`)<e&&(e=t.getAttribute(`listIndent`));e=e===0?1:e,Xy(r,!0,e),Xy(r,!1,e)}for(let t of r.reverse())i&&t.name==`listItem`?e.rename(t,`paragraph`):i||t.name==`listItem`?i||t.name!=`listItem`||t.getAttribute(`listType`)==this.type||e.setAttribute(`listType`,this.type,t):(e.setAttributes({listType:this.type,listIndent:0},t),e.rename(t,`listItem`));this.fire(`_executeCleanup`,r)}))}_getValue(){let e=M(this.editor.model.document.selection.getSelectedBlocks());return!!e&&e.is(`element`,`listItem`)&&e.getAttribute(`listType`)==this.type}_checkEnabled(){if(this.value)return!0;let e=this.editor.model.document.selection,t=this.editor.model.schema,n=M(e.getSelectedBlocks());return!!n&&Zy(n,t)}}function Xy(e,t,n){let r=t?e[0]:e[e.length-1];if(r.is(`element`,`listItem`)){let i=r[t?`previousSibling`:`nextSibling`],a=r.getAttribute(`listIndent`);for(;i&&i.is(`element`,`listItem`)&&i.getAttribute(`listIndent`)>=n;)a>i.getAttribute(`listIndent`)&&(a=i.getAttribute(`listIndent`)),i.getAttribute(`listIndent`)==a&&e[t?`unshift`:`push`](i),i=i[t?`previousSibling`:`nextSibling`]}}function Zy(e,t){return t.checkChild(e.parent,`listItem`)&&!t.isObject(e)}class Qy extends L{constructor(e,t){super(e),this._indentBy=t==`forward`?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){let e=this.editor.model,t=e.document,n=Array.from(t.selection.getSelectedBlocks());e.change((e=>{let t=n[n.length-1],r=t.nextSibling;for(;r&&r.name==`listItem`&&r.getAttribute(`listIndent`)>t.getAttribute(`listIndent`);)n.push(r),r=r.nextSibling;this._indentBy<0&&(n=n.reverse());for(let t of n){let n=t.getAttribute(`listIndent`)+this._indentBy;n<0?e.rename(t,`paragraph`):e.setAttribute(`listIndent`,n,t)}this.fire(`_executeCleanup`,n)}))}_checkEnabled(){let e=M(this.editor.model.document.selection.getSelectedBlocks());if(!e||!e.is(`element`,`listItem`))return!1;if(this._indentBy>0){let t=e.getAttribute(`listIndent`),n=e.getAttribute(`listType`),r=e.previousSibling;for(;r&&r.is(`element`,`listItem`)&&r.getAttribute(`listIndent`)>=t;){if(r.getAttribute(`listIndent`)==t)return r.getAttribute(`listType`)==n;r=r.previousSibling}return!1}return!0}}function $y(e,t){let n=t.mapper,r=t.writer,i=e.getAttribute(`listType`)==`numbered`?`ol`:`ul`,a=function(e){let t=e.createContainerElement(`li`);return t.getFillerOffset=cb,t}(r),o=r.createContainerElement(i,null);return r.insert(r.createPositionAt(o,0),a),n.bindElements(e,a),a}function eb(e,t,n,r){let i=t.parent,a=n.mapper,o=n.writer,s=a.toViewPosition(r.createPositionBefore(e)),c=rb(e.previousSibling,{sameIndent:!0,smallerIndent:!0,listIndent:e.getAttribute(`listIndent`)}),l=e.previousSibling;if(c&&c.getAttribute(`listIndent`)==e.getAttribute(`listIndent`)){let e=a.toViewElement(c);s=o.breakContainer(o.createPositionAfter(e))}else if(l&&l.name==`listItem`){s=a.toViewPosition(r.createPositionAt(l,`end`));let e=a.findMappedViewAncestor(s),t=function(e){for(let t of e.getChildren())if(t.name==`ul`||t.name==`ol`)return t;return null}(e);s=t?o.createPositionBefore(t):o.createPositionAt(e,`end`)}else s=a.toViewPosition(r.createPositionBefore(e));if(s=nb(s),o.insert(s,i),l&&l.name==`listItem`){let e=a.toViewElement(l),n=o.createRange(o.createPositionAt(e,0),s).getWalker({ignoreElementEnd:!0});for(let e of n)if(e.item.is(`element`,`li`)){let r=o.breakContainer(o.createPositionBefore(e.item)),i=e.item.parent,a=o.createPositionAt(t,`end`);tb(o,a.nodeBefore,a.nodeAfter),o.move(o.createRangeOn(i),a),n.position=r}}else{let n=i.nextSibling;if(n&&(n.is(`element`,`ul`)||n.is(`element`,`ol`))){let r=null;for(let t of n.getChildren()){let n=a.toModelElement(t);if(!(n&&n.getAttribute(`listIndent`)>e.getAttribute(`listIndent`)))break;r=t}r&&(o.breakContainer(o.createPositionAfter(r)),o.move(o.createRangeOn(r.parent),o.createPositionAt(t,`end`)))}}tb(o,i,i.nextSibling),tb(o,i.previousSibling,i)}function tb(e,t,n){return!t||!n||t.name!=`ul`&&t.name!=`ol`||t.name!=n.name||t.getAttribute(`class`)!==n.getAttribute(`class`)?null:e.mergeContainers(e.createPositionAfter(t))}function nb(e){return e.getLastMatchingPosition((e=>e.item.is(`uiElement`)))}function rb(e,t){let n=!!t.sameIndent,r=!!t.smallerIndent,i=t.listIndent,a=e;for(;a&&a.name==`listItem`;){let e=a.getAttribute(`listIndent`);if(n&&i==e||r&&i>e)return a;a=t.direction===`forward`?a.nextSibling:a.previousSibling}return null}function ib(e,t,n,r){e.ui.componentFactory.add(t,(i=>{let a=e.commands.get(t),o=new F(i);return o.set({label:n,icon:r,tooltip:!0,isToggleable:!0}),o.bind(`isOn`,`isEnabled`).to(a,`value`,`isEnabled`),o.on(`execute`,(()=>{e.execute(t),e.editing.view.focus()})),o}))}function ab(e,t){let n=[],r=e.parent,i={ignoreElementEnd:!1,startPosition:e,shallow:!0,direction:t},a=r.getAttribute(`listIndent`),o=[...new Mu(i)].filter((e=>e.item.is(`element`))).map((e=>e.item));for(let e of o){if(!e.is(`element`,`listItem`)||e.getAttribute(`listIndent`)<a)break;if(!(e.getAttribute(`listIndent`)>a)){if(e.getAttribute(`listType`)!==r.getAttribute(`listType`)||e.getAttribute(`listStyle`)!==r.getAttribute(`listStyle`)||e.getAttribute(`listReversed`)!==r.getAttribute(`listReversed`)||e.getAttribute(`listStart`)!==r.getAttribute(`listStart`))break;t===`backward`?n.unshift(e):n.push(e)}}return n}let ob=[`disc`,`circle`,`square`],sb=[`decimal`,`decimal-leading-zero`,`lower-roman`,`upper-roman`,`lower-latin`,`upper-latin`];function cb(){let e=!this.isEmpty&&(this.getChild(0).name==`ul`||this.getChild(0).name==`ol`);return this.isEmpty||e?0:rc.call(this)}class lb extends I{static get pluginName(){return`ListUtils`}getListTypeFromListStyleType(e){return function(e){return ob.includes(e)?`bulleted`:sb.includes(e)?`numbered`:null}(e)}getSelectedListItems(e){return function(e){let t=[...e.document.selection.getSelectedBlocks()].filter((e=>e.is(`element`,`listItem`))).map((t=>{let n=e.change((e=>e.createPositionAt(t,0)));return[...ab(n,`backward`),...ab(n,`forward`)]})).flat();return t=[...new Set(t)],t}(e)}getSiblingNodes(e,t){return ab(e,t)}}function ub(e){return(t,n,r)=>{let i=r.consumable;if(!i.test(n.item,`insert`)||!i.test(n.item,`attribute:listType`)||!i.test(n.item,`attribute:listIndent`))return;i.consume(n.item,`insert`),i.consume(n.item,`attribute:listType`),i.consume(n.item,`attribute:listIndent`);let a=n.item;eb(a,$y(a,r),r,e)}}let db=(e,t,n)=>{if(!n.consumable.test(t.item,e.name))return;let r=n.mapper.toViewElement(t.item),i=n.writer;i.breakContainer(i.createPositionBefore(r)),i.breakContainer(i.createPositionAfter(r));let a=r.parent,o=t.attributeNewValue==`numbered`?`ol`:`ul`;i.rename(o,a)},fb=(e,t,n)=>{n.consumable.consume(t.item,e.name);let r=n.mapper.toViewElement(t.item).parent,i=n.writer;tb(i,r,r.nextSibling),tb(i,r.previousSibling,r)},pb=(e,t,n)=>{if(n.consumable.test(t.item,e.name)&&t.item.name!=`listItem`){let e=n.mapper.toViewPosition(t.range.start),r=n.writer,i=[];for(;(e.parent.name==`ul`||e.parent.name==`ol`)&&(e=r.breakContainer(e),e.parent.name==`li`);){let t=e,n=r.createPositionAt(e.parent,`end`);if(!t.isEqual(n)){let e=r.remove(r.createRange(t,n));i.push(e)}e=r.createPositionAfter(e.parent)}if(i.length>0){for(let t=0;t<i.length;t++){let n=e.nodeBefore;if(e=r.insert(e,i[t]).end,t>0){let t=tb(r,n,n.nextSibling);t&&t.parent==n&&e.offset--}}tb(r,e.nodeBefore,e.nodeAfter)}}},mb=(e,t,n)=>{let r=n.mapper.toViewPosition(t.position),i=r.nodeBefore,a=r.nodeAfter;tb(n.writer,i,a)},hb=(e,t,n)=>{if(n.consumable.consume(t.viewItem,{name:!0})){let e=n.writer,r=e.createElement(`listItem`),i=function(e){let t=0,n=e.parent;for(;n;){if(n.is(`element`,`li`))t++;else{let e=n.previousSibling;e&&e.is(`element`,`li`)&&t++}n=n.parent}return t}(t.viewItem);e.setAttribute(`listIndent`,i,r);let a=t.viewItem.parent&&t.viewItem.parent.name==`ol`?`numbered`:`bulleted`;if(e.setAttribute(`listType`,a,r),!n.safeInsert(r,t.modelCursor))return;let o=function(e,t,n){let{writer:r,schema:i}=n,a=r.createPositionAfter(e);for(let o of t)if(o.name==`ul`||o.name==`ol`)a=n.convertItem(o,a).modelCursor;else{let t=n.convertItem(o,r.createPositionAt(e,`end`)),s=t.modelRange.start.nodeAfter;s&&s.is(`element`)&&!i.checkChild(e,s.name)&&(e=t.modelCursor.parent.is(`element`,`listItem`)?t.modelCursor.parent:bb(t.modelCursor),a=r.createPositionAfter(e))}return a}(r,t.viewItem.getChildren(),n);t.modelRange=e.createRange(t.modelCursor,o),n.updateConversionResult(r,t)}},gb=(e,t,n)=>{if(n.consumable.test(t.viewItem,{name:!0})){let e=Array.from(t.viewItem.getChildren());for(let t of e)!(t.is(`element`,`li`)||Sb(t))&&t._remove()}},_b=(e,t,n)=>{if(n.consumable.test(t.viewItem,{name:!0})){if(t.viewItem.childCount===0)return;let e=[...t.viewItem.getChildren()],n=!1;for(let t of e)n&&!Sb(t)&&t._remove(),Sb(t)&&(n=!0)}};function vb(e){return(t,n)=>{if(n.isPhantom)return;let r=n.modelPosition.nodeBefore;if(r&&r.is(`element`,`listItem`)){let t=n.mapper.toViewElement(r),i=t.getAncestors().find(Sb),a=e.createPositionAt(t,0).getWalker();for(let e of a){if(e.type==`elementStart`&&e.item.is(`element`,`li`)){n.viewPosition=e.previousPosition;break}if(e.type==`elementEnd`&&e.item==i){n.viewPosition=e.nextPosition;break}}}}}let yb=function(e,[t,n,r]){let i=this,a,o=t.is(`documentFragment`)?t.getChild(0):t;if(a=n?i.createSelection(n,r):i.document.selection,o&&o.is(`element`,`listItem`)){let e=a.getFirstPosition(),t=null;if(e.parent.is(`element`,`listItem`)?t=e.parent:e.nodeBefore&&e.nodeBefore.is(`element`,`listItem`)&&(t=e.nodeBefore),t){let e=t.getAttribute(`listIndent`);if(e>0)for(;o&&o.is(`element`,`listItem`);)o._setAttribute(`listIndent`,o.getAttribute(`listIndent`)+e),o=o.nextSibling}}};function bb(e){let t=new Mu({startPosition:e}),n;do n=t.next();while(!n.value.item.is(`element`,`listItem`));return n.value.item}function xb(e,t,n,r,i,a){let o=rb(t.nodeBefore,{sameIndent:!0,smallerIndent:!0,listIndent:e}),s=i.mapper,c=i.writer,l=o?o.getAttribute(`listIndent`):null,u;if(o)if(l==e){let e=s.toViewElement(o).parent;u=c.createPositionAfter(e)}else{let e=a.createPositionAt(o,`end`);u=s.toViewPosition(e)}else u=n;u=nb(u);for(let e of[...r.getChildren()])Sb(e)&&(u=c.move(c.createRangeOn(e),u).end,tb(c,e,e.nextSibling),tb(c,e.previousSibling,e))}function Sb(e){return e.is(`element`,`ol`)||e.is(`element`,`ul`)}var Cb=i(4564);N()(Cb.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Cb.Z.locals;class wb extends I{static get pluginName(){return`ListEditing`}static get requires(){return[wh,Qm,lb]}init(){let e=this.editor;e.model.schema.register(`listItem`,{inheritAllFrom:`$block`,allowAttributes:[`listType`,`listIndent`]});let t=e.data,n=e.editing;var r;e.model.document.registerPostFixer((t=>function(e,t){let n=e.document.differ.getChanges(),r=new Map,i=!1;for(let r of n)if(r.type==`insert`&&r.name==`listItem`)a(r.position);else if(r.type==`insert`&&r.name!=`listItem`){if(r.name!=`$text`){let n=r.position.nodeAfter;n.hasAttribute(`listIndent`)&&(t.removeAttribute(`listIndent`,n),i=!0),n.hasAttribute(`listType`)&&(t.removeAttribute(`listType`,n),i=!0),n.hasAttribute(`listStyle`)&&(t.removeAttribute(`listStyle`,n),i=!0),n.hasAttribute(`listReversed`)&&(t.removeAttribute(`listReversed`,n),i=!0),n.hasAttribute(`listStart`)&&(t.removeAttribute(`listStart`,n),i=!0);for(let t of Array.from(e.createRangeIn(n)).filter((e=>e.item.is(`element`,`listItem`))))a(t.previousPosition)}a(r.position.getShiftedBy(r.length))}else r.type==`remove`&&r.name==`listItem`?a(r.position):(r.type==`attribute`&&r.attributeKey==`listIndent`||r.type==`attribute`&&r.attributeKey==`listType`)&&a(r.range.start);for(let e of r.values())o(e),s(e);return i;function a(e){let t=e.nodeBefore;if(t&&t.is(`element`,`listItem`)){let e=t;if(r.has(e))return;for(let t=e.previousSibling;t&&t.is(`element`,`listItem`);t=e.previousSibling)if(e=t,r.has(e))return;r.set(t,e)}else{let t=e.nodeAfter;t&&t.is(`element`,`listItem`)&&r.set(t,t)}}function o(e){let n=0,r=null;for(;e&&e.is(`element`,`listItem`);){let a=e.getAttribute(`listIndent`);if(a>n){let o;r===null?(r=a-n,o=n):(r>a&&(r=a),o=a-r),t.setAttribute(`listIndent`,o,e),i=!0}else r=null,n=e.getAttribute(`listIndent`)+1;e=e.nextSibling}}function s(e){let n=[],r=null;for(;e&&e.is(`element`,`listItem`);){let a=e.getAttribute(`listIndent`);if(r&&r.getAttribute(`listIndent`)>a&&(n=n.slice(0,a+1)),a!=0)if(n[a]){let r=n[a];e.getAttribute(`listType`)!=r&&(t.setAttribute(`listType`,r,e),i=!0)}else n[a]=e.getAttribute(`listType`);r=e,e=e.nextSibling}}}(e.model,t))),n.mapper.registerViewToModelLength(`li`,Tb),t.mapper.registerViewToModelLength(`li`,Tb),n.mapper.on(`modelToViewPosition`,vb(n.view)),n.mapper.on(`viewToModelPosition`,(r=e.model,(e,t)=>{let n=t.viewPosition,i=n.parent,a=t.mapper;if(i.name==`ul`||i.name==`ol`){if(n.isAtEnd){let e=a.toModelElement(n.nodeBefore),i=a.getModelLength(n.nodeBefore);t.modelPosition=r.createPositionBefore(e).getShiftedBy(i)}else{let e=a.toModelElement(n.nodeAfter);t.modelPosition=r.createPositionBefore(e)}e.stop()}else if(i.name==`li`&&n.nodeBefore&&(n.nodeBefore.name==`ul`||n.nodeBefore.name==`ol`)){let o=a.toModelElement(i),s=1,c=n.nodeBefore;for(;c&&Sb(c);)s+=a.getModelLength(c),c=c.previousSibling;t.modelPosition=r.createPositionBefore(o).getShiftedBy(s),e.stop()}})),t.mapper.on(`modelToViewPosition`,vb(n.view)),e.conversion.for(`editingDowncast`).add((t=>{t.on(`insert`,pb,{priority:`high`}),t.on(`insert:listItem`,ub(e.model)),t.on(`attribute:listType:listItem`,db,{priority:`high`}),t.on(`attribute:listType:listItem`,fb,{priority:`low`}),t.on(`attribute:listIndent:listItem`,function(e){return(t,n,r)=>{if(!r.consumable.consume(n.item,`attribute:listIndent`))return;let i=r.mapper.toViewElement(n.item),a=r.writer;a.breakContainer(a.createPositionBefore(i)),a.breakContainer(a.createPositionAfter(i));let o=i.parent,s=o.previousSibling,c=a.createRangeOn(o);a.remove(c),s&&s.nextSibling&&tb(a,s,s.nextSibling),xb(n.attributeOldValue+1,n.range.start,c.start,i,r,e),eb(n.item,i,r,e);for(let e of n.item.getChildren())r.consumable.consume(e,`insert`)}}(e.model)),t.on(`remove:listItem`,function(e){return(t,n,r)=>{let i=r.mapper.toViewPosition(n.position).getLastMatchingPosition((e=>!e.item.is(`element`,`li`))).nodeAfter,a=r.writer;a.breakContainer(a.createPositionBefore(i)),a.breakContainer(a.createPositionAfter(i));let o=i.parent,s=o.previousSibling,c=a.createRangeOn(o),l=a.remove(c);s&&s.nextSibling&&tb(a,s,s.nextSibling),xb(r.mapper.toModelElement(i).getAttribute(`listIndent`)+1,n.position,c.start,i,r,e);for(let e of a.createRangeIn(l).getItems())r.mapper.unbindViewElement(e);t.stop()}}(e.model)),t.on(`remove`,mb,{priority:`low`})})),e.conversion.for(`dataDowncast`).add((t=>{t.on(`insert`,pb,{priority:`high`}),t.on(`insert:listItem`,ub(e.model))})),e.conversion.for(`upcast`).add((e=>{e.on(`element:ul`,gb,{priority:`high`}),e.on(`element:ol`,gb,{priority:`high`}),e.on(`element:li`,_b,{priority:`high`}),e.on(`element:li`,hb)})),e.model.on(`insertContent`,yb,{priority:`high`}),e.commands.add(`numberedList`,new Yy(e,`numbered`)),e.commands.add(`bulletedList`,new Yy(e,`bulleted`)),e.commands.add(`indentList`,new Qy(e,`forward`)),e.commands.add(`outdentList`,new Qy(e,`backward`));let i=n.view.document;this.listenTo(i,`enter`,((e,t)=>{let n=this.editor.model.document,r=n.selection.getLastPosition().parent;n.selection.isCollapsed&&r.name==`listItem`&&r.isEmpty&&(this.editor.execute(`outdentList`),t.preventDefault(),e.stop())}),{context:`li`}),this.listenTo(i,`delete`,((e,t)=>{if(t.direction!==`backward`)return;let n=this.editor.model.document.selection;if(!n.isCollapsed)return;let r=n.getFirstPosition();if(!r.isAtStart)return;let i=r.parent;i.name===`listItem`&&(i.previousSibling&&i.previousSibling.name===`listItem`||(this.editor.execute(`outdentList`),t.preventDefault(),e.stop()))}),{context:`li`}),this.listenTo(e.editing.view.document,`tab`,((t,n)=>{let r=n.shiftKey?`outdentList`:`indentList`;this.editor.commands.get(r).isEnabled&&(e.execute(r),n.stopPropagation(),n.preventDefault(),t.stop())}),{context:`li`})}afterInit(){let e=this.editor.commands,t=e.get(`indent`),n=e.get(`outdent`);t&&t.registerChildCommand(e.get(`indentList`)),n&&n.registerChildCommand(e.get(`outdentList`))}}function Tb(e){let t=1;for(let n of e.getChildren())if(n.name==`ul`||n.name==`ol`)for(let e of n.getChildren())t+=Tb(e);return t}class Eb extends I{static get pluginName(){return`ListUI`}init(){let e=this.editor.t;ib(this.editor,`numberedList`,e(`Numbered List`),`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"/></svg>`),ib(this.editor,`bulletedList`,e(`Bulleted List`),`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"/></svg>`)}}function Db(e,t){return e=>{e.on(`attribute:url:media`,n)};function n(n,r,i){if(!i.consumable.consume(r.item,n.name))return;let a=r.attributeNewValue,o=i.writer,s=i.mapper.toViewElement(r.item),c=[...s.getChildren()].find((e=>e.getCustomProperty(`media-content`)));o.remove(c);let l=e.getMediaViewElement(o,a,t);o.insert(o.createPositionAt(s,0),l)}}function Ob(e,t,n,r){return e.createContainerElement(`figure`,{class:`media`},[t.getMediaViewElement(e,n,r),e.createSlot()])}function kb(e){let t=e.getSelectedElement();return t&&t.is(`element`,`media`)?t:null}function Ab(e,t,n,r){e.change((i=>{let a=i.createElement(`media`,{url:t});e.insertObject(a,n,null,{setSelection:`on`,findOptimalPosition:r})}))}class jb extends L{refresh(){let e=this.editor.model,t=e.document.selection,n=kb(t);this.value=n?n.getAttribute(`url`):null,this.isEnabled=function(e){let t=e.getSelectedElement();return!!t&&t.name===`media`}(t)||function(e,t){let n=zh(e,t).start.parent;return n.isEmpty&&!t.schema.isLimit(n)&&(n=n.parent),t.schema.checkChild(n,`media`)}(t,e)}execute(e){let t=this.editor.model,n=t.document.selection,r=kb(n);r?t.change((t=>{t.setAttribute(`url`,e,r)})):Ab(t,e,n,!0)}}class Mb{constructor(e,t){let n=t.providers,r=t.extraProviders||[],i=new Set(t.removeProviders),a=n.concat(r).filter((e=>{let t=e.name;return t?!i.has(t):(b(`media-embed-no-provider-name`,{provider:e}),!1)}));this.locale=e,this.providerDefinitions=a}hasMedia(e){return!!this._getMedia(e)}getMediaViewElement(e,t,n){return this._getMedia(t).getViewElement(e,n)}_getMedia(e){if(!e)return new Nb(this.locale);e=e.trim();for(let t of this.providerDefinitions){let n=t.html,r=j(t.url);for(let t of r){let r=this._getUrlMatches(e,t);if(r)return new Nb(this.locale,e,r,n)}}return null}_getUrlMatches(e,t){let n=e.match(t);if(n)return n;let r=e.replace(/^https?:\/\//,``);return n=r.match(t),n||(r=r.replace(/^www\./,``),n=r.match(t),n||null)}}class Nb{constructor(e,t,n,r){this.url=this._getValidUrl(t),this._locale=e,this._match=n,this._previewRenderer=r}getViewElement(e,t){let n={},r;if(t.renderForEditingView||t.renderMediaPreview&&this.url&&this._previewRenderer){this.url&&(n[`data-oembed-url`]=this.url),t.renderForEditingView&&(n.class=`ck-media__wrapper`);let i=this._getPreviewHtml(t);r=e.createRawElement(`div`,n,((e,t)=>{t.setContentOf(e,i)}))}else this.url&&(n.url=this.url),r=e.createEmptyElement(t.elementName,n);return e.setCustomProperty(`media-content`,!0,r),r}_getPreviewHtml(e){return this._previewRenderer?this._previewRenderer(this._match):this.url&&e.renderForEditingView?this._getPlaceholderHtml():``}_getPlaceholderHtml(){let e=new po,t=this._locale.t;return e.content=`<svg viewBox="0 0 64 42" xmlns="http://www.w3.org/2000/svg"><path d="M47.426 17V3.713L63.102 0v19.389h-.001l.001.272c0 1.595-2.032 3.43-4.538 4.098-2.506.668-4.538-.083-4.538-1.678 0-1.594 2.032-3.43 4.538-4.098.914-.244 2.032-.565 2.888-.603V4.516L49.076 7.447v9.556A1.014 1.014 0 0 0 49 17h-1.574zM29.5 17h-8.343a7.073 7.073 0 1 0-4.657 4.06v3.781H3.3a2.803 2.803 0 0 1-2.8-2.804V8.63a2.803 2.803 0 0 1 2.8-2.805h4.082L8.58 2.768A1.994 1.994 0 0 1 10.435 1.5h8.985c.773 0 1.477.448 1.805 1.149l1.488 3.177H26.7c1.546 0 2.8 1.256 2.8 2.805V17zm-11.637 0H17.5a1 1 0 0 0-1 1v.05A4.244 4.244 0 1 1 17.863 17zm29.684 2c.97 0 .953-.048.953.889v20.743c0 .953.016.905-.953.905H19.453c-.97 0-.953.048-.953-.905V19.89c0-.937-.016-.889.97-.889h28.077zm-4.701 19.338V22.183H24.154v16.155h18.692zM20.6 21.375v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616v-1.616H20.6zm0 3.231v1.616h1.616V37.53H20.6zm24.233-16.155v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615v-1.616h-1.615zm0 3.231v1.616h1.615V37.53h-1.615zM29.485 25.283a.4.4 0 0 1 .593-.35l9.05 4.977a.4.4 0 0 1 0 .701l-9.05 4.978a.4.4 0 0 1-.593-.35v-9.956z"/></svg>`,e.viewBox=`0 0 64 42`,new Ua({tag:`div`,attributes:{class:`ck ck-reset_all ck-media__placeholder`},children:[{tag:`div`,attributes:{class:`ck-media__placeholder__icon`},children:[e]},{tag:`a`,attributes:{class:`ck-media__placeholder__url`,target:`_blank`,rel:`noopener noreferrer`,href:this.url,"data-cke-tooltip-text":t(`Open media in new tab`)},children:[{tag:`span`,attributes:{class:`ck-media__placeholder__url__text`},children:[this.url]}]}]}).render().outerHTML}_getValidUrl(e){return e?e.match(/^https?/)?e:`https://`+e:null}}var Pb=i(7442);N()(Pb.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Pb.Z.locals;class Fb extends I{static get pluginName(){return`MediaEmbedEditing`}constructor(e){super(e),e.config.define(`mediaEmbed`,{elementName:`oembed`,providers:[{name:`dailymotion`,url:/^dailymotion\.com\/video\/(\w+)/,html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; "><iframe src="https://www.dailymotion.com/embed/video/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" width="480" height="270" allowfullscreen allow="autoplay"></iframe></div>`},{name:`spotify`,url:[/^open\.spotify\.com\/(artist\/\w+)/,/^open\.spotify\.com\/(album\/\w+)/,/^open\.spotify\.com\/(track\/\w+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 126%;"><iframe src="https://open.spotify.com/embed/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`},{name:`youtube`,url:[/^(?:m\.)?youtube\.com\/watch\?v=([\w-]+)(?:&t=(\d+))?/,/^(?:m\.)?youtube\.com\/v\/([\w-]+)(?:\?t=(\d+))?/,/^youtube\.com\/embed\/([\w-]+)(?:\?start=(\d+))?/,/^youtu\.be\/([\w-]+)(?:\?t=(\d+))?/],html:e=>{let t=e[1],n=e[2];return`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://www.youtube.com/embed/${t}${n?`?start=${n}`:``}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`}},{name:`vimeo`,url:[/^vimeo\.com\/(\d+)/,/^vimeo\.com\/[^/]+\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/album\/[^/]+\/video\/(\d+)/,/^vimeo\.com\/channels\/[^/]+\/(\d+)/,/^vimeo\.com\/groups\/[^/]+\/videos\/(\d+)/,/^vimeo\.com\/ondemand\/[^/]+\/(\d+)/,/^player\.vimeo\.com\/video\/(\d+)/],html:e=>`<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;"><iframe src="https://player.vimeo.com/video/${e[1]}" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>`},{name:`instagram`,url:/^instagram\.com\/p\/(\w+)/},{name:`twitter`,url:/^twitter\.com/},{name:`googleMaps`,url:[/^google\.com\/maps/,/^goo\.gl\/maps/,/^maps\.google\.com/,/^maps\.app\.goo\.gl/]},{name:`flickr`,url:/^flickr\.com/},{name:`facebook`,url:/^facebook\.com/}]}),this.registry=new Mb(e.locale,e.config.get(`mediaEmbed`))}init(){let e=this.editor,t=e.model.schema,n=e.t,r=e.conversion,i=e.config.get(`mediaEmbed.previewsInData`),a=e.config.get(`mediaEmbed.elementName`),o=this.registry;e.commands.add(`mediaEmbed`,new jb(e)),t.register(`media`,{inheritAllFrom:`$blockObject`,allowAttributes:[`url`]}),r.for(`dataDowncast`).elementToStructure({model:`media`,view:(e,{writer:t})=>{let n=e.getAttribute(`url`);return Ob(t,o,n,{elementName:a,renderMediaPreview:n&&i})}}),r.for(`dataDowncast`).add(Db(o,{elementName:a,renderMediaPreview:i})),r.for(`editingDowncast`).elementToStructure({model:`media`,view:(e,{writer:t})=>function(e,t,n){return t.setCustomProperty(`media`,!0,e),Ph(e,t,{label:n})}(Ob(t,o,e.getAttribute(`url`),{elementName:a,renderForEditingView:!0}),t,n(`media widget`))}),r.for(`editingDowncast`).add(Db(o,{elementName:a,renderForEditingView:!0})),r.for(`upcast`).elementToElement({view:e=>[`oembed`,a].includes(e.name)&&e.getAttribute(`url`)?{name:!0}:null,model:(e,{writer:t})=>{let n=e.getAttribute(`url`);if(o.hasMedia(n))return t.createElement(`media`,{url:n})}}).elementToElement({view:{name:`div`,attributes:{"data-oembed-url":!0}},model:(e,{writer:t})=>{let n=e.getAttribute(`data-oembed-url`);if(o.hasMedia(n))return t.createElement(`media`,{url:n})}}).add((e=>{e.on(`element:figure`,(function(e,t,n){if(!n.consumable.consume(t.viewItem,{name:!0,classes:`media`}))return;let{modelRange:r,modelCursor:i}=n.convertChildren(t.viewItem,t.modelCursor);t.modelRange=r,t.modelCursor=i,M(r.getItems())||n.consumable.revert(t.viewItem,{name:!0,classes:`media`})}))}))}}let Ib=/^(?:http(s)?:\/\/)?[\w-]+\.[\w-.~:/?#[\]@!$&'()*+,;=%]+$/;class Lb extends I{static get requires(){return[mg,Qm,Ag]}static get pluginName(){return`AutoMediaEmbed`}constructor(e){super(e),this._timeoutId=null,this._positionToInsert=null}init(){let e=this.editor,t=e.model.document;this.listenTo(e.plugins.get(`ClipboardPipeline`),`inputTransformation`,(()=>{let e=t.selection.getFirstRange(),n=kf.fromPosition(e.start);n.stickiness=`toPrevious`;let r=kf.fromPosition(e.end);r.stickiness=`toNext`,t.once(`change:data`,(()=>{this._embedMediaBetweenPositions(n,r),n.detach(),r.detach()}),{priority:`high`})})),e.commands.get(`undo`).on(`execute`,(()=>{this._timeoutId&&(E.window.clearTimeout(this._timeoutId),this._positionToInsert.detach(),this._timeoutId=null,this._positionToInsert=null)}),{priority:`high`})}_embedMediaBetweenPositions(e,t){let n=this.editor,r=n.plugins.get(Fb).registry,i=new Xu(e,t),a=i.getWalker({ignoreElementEnd:!0}),o=``;for(let e of a)e.item.is(`$textProxy`)&&(o+=e.item.data);if(o=o.trim(),!o.match(Ib)||!r.hasMedia(o))return void i.detach();n.commands.get(`mediaEmbed`).isEnabled?(this._positionToInsert=kf.fromPosition(e),this._timeoutId=E.window.setTimeout((()=>{n.model.change((e=>{let t;this._timeoutId=null,e.remove(i),i.detach(),this._positionToInsert.root.rootName!==`$graveyard`&&(t=this._positionToInsert),Ab(n.model,o,t,!1),this._positionToInsert.detach(),this._positionToInsert=null})),n.plugins.get(`Delete`).requestUndoOnBackspace()}),100)):i.detach()}}var Rb=i(9292);N()(Rb.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Rb.Z.locals;class zb extends P{constructor(e,t){super(t);let n=t.t;this.focusTracker=new Na,this.keystrokes=new Pa,this.set(`mediaURLInputValue`,``),this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(n(`Save`),X.check,`ck-button-save`),this.saveButtonView.type=`submit`,this.saveButtonView.bind(`isEnabled`).to(this,`mediaURLInputValue`,(e=>!!e)),this.cancelButtonView=this._createButton(n(`Cancel`),X.cancel,`ck-button-cancel`,`cancel`),this._focusables=new Ba,this._focusCycler=new Do({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:`shift + tab`,focusNext:`tab`}}),this._validators=e,this.setTemplate({tag:`form`,attributes:{class:[`ck`,`ck-media-form`,`ck-responsive-form`],tabindex:`-1`},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]}),r(this)}render(){super.render(),o({view:this}),[this.urlInputView,this.saveButtonView,this.cancelButtonView].forEach((e=>{this._focusables.add(e),this.focusTracker.add(e.element)})),this.keystrokes.listenTo(this.element);let e=e=>e.stopPropagation();this.keystrokes.set(`arrowright`,e),this.keystrokes.set(`arrowleft`,e),this.keystrokes.set(`arrowup`,e),this.keystrokes.set(`arrowdown`,e),this.listenTo(this.urlInputView.element,`selectstart`,((e,t)=>{t.stopPropagation()}),{priority:`high`})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}get url(){return this.urlInputView.fieldView.element.value.trim()}set url(e){this.urlInputView.fieldView.element.value=e.trim()}isValid(){this.resetFormStatus();for(let e of this._validators){let t=e(this);if(t)return this.urlInputView.errorText=t,!1}return!0}resetFormStatus(){this.urlInputView.errorText=null,this.urlInputView.infoText=this._urlInputViewInfoDefault}_createUrlInput(){let e=this.locale.t,t=new hm(this.locale,gm),n=t.fieldView;return this._urlInputViewInfoDefault=e(`Paste the media URL in the input.`),this._urlInputViewInfoTip=e(`Tip: Paste the URL into the content to embed faster.`),t.label=e(`Media URL`),t.infoText=this._urlInputViewInfoDefault,n.on(`input`,(()=>{t.infoText=n.element.value?this._urlInputViewInfoTip:this._urlInputViewInfoDefault,this.mediaURLInputValue=n.element.value.trim()})),t}_createButton(e,t,n,r){let i=new F(this.locale);return i.set({label:e,icon:t,tooltip:!0}),i.extendTemplate({attributes:{class:n}}),r&&i.delegate(`execute`).to(this,r),i}}class Bb extends I{static get requires(){return[Fb]}static get pluginName(){return`MediaEmbedUI`}init(){let e=this.editor,t=e.commands.get(`mediaEmbed`);e.ui.componentFactory.add(`mediaEmbed`,(e=>{let n=zp(e);return this._setUpDropdown(n,t),n}))}_setUpDropdown(e,t){let n=this.editor,r=n.t,i=e.buttonView,a=n.plugins.get(Fb).registry;e.once(`change:isOpen`,(()=>{let r=new zb(function(e,t){return[t=>{if(!t.url.length)return e(`The URL must not be empty.`)},n=>{if(!t.hasMedia(n.url))return e(`This media URL is not supported.`)}]}(n.t,a),n.locale);e.panelView.children.add(r),i.on(`open`,(()=>{r.disableCssTransitions(),r.url=t.value||``,r.urlInputView.fieldView.select(),r.enableCssTransitions()}),{priority:`low`}),e.on(`submit`,(()=>{r.isValid()&&(n.execute(`mediaEmbed`,r.url),n.editing.view.focus())})),e.on(`change:isOpen`,(()=>r.resetFormStatus())),e.on(`cancel`,(()=>{n.editing.view.focus()})),r.delegate(`submit`,`cancel`).to(e),r.urlInputView.bind(`value`).to(t,`value`),r.urlInputView.bind(`isReadOnly`).to(t,`isEnabled`,(e=>!e))})),e.bind(`isEnabled`).to(t),i.set({label:r(`Insert media`),icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18.68 3.03c.6 0 .59-.03.59.55v12.84c0 .59.01.56-.59.56H1.29c-.6 0-.59.03-.59-.56V3.58c0-.58-.01-.55.6-.55h17.38zM15.77 15V5H4.2v10h11.57zM2 4v1h1V4H2zm0 2v1h1V6H2zm0 2v1h1V8H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zm0 2v1h1v-1H2zM17 4v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1zM7.5 7.177a.4.4 0 0 1 .593-.351l5.133 2.824a.4.4 0 0 1 0 .7l-5.133 2.824a.4.4 0 0 1-.593-.35V7.176v.001z"/></svg>`,tooltip:!0})}}var Vb=i(4652);N()(Vb.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),Vb.Z.locals;function Hb(e,t,n,{blockElements:r,inlineObjectElements:i}){let a=n.createPositionAt(e,t==`forward`?`after`:`before`);return a=a.getLastMatchingPosition((({item:e})=>e.is(`element`)&&!r.includes(e.name)&&!i.includes(e.name)),{direction:t}),t==`forward`?a.nodeAfter:a.nodeBefore}function Ub(e,t){return!!e&&e.is(`element`)&&t.includes(e.name)}function Wb(e,t){if(!e.childCount)return;let n=new yp(e.document),r=function(e,t){let n=t.createRangeIn(e),r=new Xo({name:/^p|h\d+$/,styles:{"mso-list":/.*/}}),i=[];for(let e of n)if(e.type===`elementStart`&&r.match(e.item)){let t=qb(e.item);i.push({element:e.item,id:t.id,order:t.order,indent:t.indent})}return i}(e,n);if(!r.length)return;let i=null,a=1;r.forEach(((e,o)=>{let s=function(e,t){if(!e)return!0;if(e.id!==t.id)return t.indent-e.indent!=1;let n=t.element.previousSibling;if(!n)return!0;return r=n,!(r.is(`element`,`ol`)||r.is(`element`,`ul`));var r}(r[o-1],e),c=s?null:r[o-1],l=(d=e,(u=c)?d.indent-u.indent:d.indent-1);var u,d;if(s&&(i=null,a=1),!i||l!==0){let r=function(e,t){let n=RegExp(`@list l${e.id}:level${e.indent}\\s*({[^}]*)`,`gi`),r=/mso-level-number-format:([^;]{0,100});/gi,i=/mso-level-start-at:\s{0,100}([0-9]{0,10})\s{0,100};/gi,a=n.exec(t),o=`decimal`,s=`ol`,c=null;if(a&&a[1]){let t=r.exec(a[1]);if(t&&t[1]&&(o=t[1].trim(),s=o!==`bullet`&&o!==`image`?`ol`:`ul`),o===`bullet`){let t=function(e){let t=function(e){if(e.getChild(0).is(`$text`))return null;for(let t of e.getChildren()){if(!t.is(`element`,`span`))continue;let e=t.getChild(0);return e.is(`$text`)?e:e.getChild(0)}return null}(e);if(!t)return null;let n=t._data;return n===`o`?`circle`:n===`·`?`disc`:n===`§`?`square`:null}(e.element);t&&(o=t)}else{let e=i.exec(a[1]);e&&e[1]&&(c=parseInt(e[1]))}}return{type:s,startIndex:c,style:Gb(o)}}(e,t);if(i){if(e.indent>a){let e=i.getChild(i.childCount-1);i=Kb(r,e.getChild(e.childCount-1),n),a+=1}else if(e.indent<a){let t=a-e.indent;i=function(e,t){let n=e.getAncestors({parentFirst:!0}),r=null,i=0;for(let e of n)if((e.is(`element`,`ul`)||e.is(`element`,`ol`))&&i++,i===t){r=e;break}return r}(i,t),a=e.indent}}else i=Kb(r,e.element,n);e.indent<=a&&(i.is(`element`,r.type)||(i=n.rename(r.type,i)))}let f=function(e,t){return function(e,t){let n=new Xo({name:`span`,styles:{"mso-list":`Ignore`}}),r=t.createRangeIn(e);for(let e of r)e.type===`elementStart`&&n.match(e.item)&&t.remove(e.item)}(e,t),t.rename(`li`,e)}(e.element,n);n.appendChild(f,i)}))}function Gb(e){if(e.startsWith(`arabic-leading-zero`))return`decimal-leading-zero`;switch(e){case`alpha-upper`:return`upper-alpha`;case`alpha-lower`:return`lower-alpha`;case`roman-upper`:return`upper-roman`;case`roman-lower`:return`lower-roman`;case`circle`:case`disc`:case`square`:return e;default:return null}}function Kb(e,t,n){let r=t.parent,i=n.createElement(e.type),a=r.getChildIndex(t)+1;return n.insertChild(a,i,r),e.style&&n.setStyle(`list-style-type`,e.style,i),e.startIndex&&e.startIndex>1&&n.setAttribute(`start`,e.startIndex,i),i}function qb(e){let t={},n=e.getStyle(`mso-list`);if(n){let e=n.match(/(^|\s{1,100})l(\d+)/i),r=n.match(/\s{0,100}lfo(\d+)/i),i=n.match(/\s{0,100}level(\d+)/i);e&&r&&i&&(t.id=e[2],t.order=r[1],t.indent=parseInt(i[1]))}return t}let Jb=/id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;class Yb{constructor(e){this.document=e}isActive(e){return Jb.test(e)}execute(e){let t=new yp(this.document),{body:n}=e._parsedData;(function(e,t){for(let n of e.getChildren())if(n.is(`element`,`b`)&&n.getStyle(`font-weight`)===`normal`){let r=e.getChildIndex(n);t.remove(n),t.insertChild(r,n.getChildren(),e)}})(n,t),function(e,t){for(let n of t.createRangeIn(e)){let e=n.item;if(e.is(`element`,`li`)){let n=e.getChild(0);n&&n.is(`element`,`p`)&&t.unwrapElement(n)}}}(n,t),function(e,t){let n=new sl(new vc(t.document.stylesProcessor),{renderingMode:`data`}),r=n.blockElements,i=n.inlineObjectElements,a=[];for(let n of t.createRangeIn(e)){let e=n.item;if(e.is(`element`,`br`)){let n=Hb(e,`forward`,t,{blockElements:r,inlineObjectElements:i}),o=Hb(e,`backward`,t,{blockElements:r,inlineObjectElements:i}),s=Ub(n,r);(Ub(o,r)||s)&&a.push(e)}}for(let e of a)e.hasClass(`Apple-interchange-newline`)?t.remove(e):t.replace(e,t.createElement(`p`))}(n,t),e.content=n}}function Xb(e,t){if(!e.childCount)return;let n=new yp(e.document),r=function(e,t){let n=t.createRangeIn(e),r=new Xo({name:/v:(.+)/}),i=[];for(let e of n){if(e.type!=`elementStart`)continue;let t=e.item,n=t.previousSibling,a=n&&n.is(`element`)?n.name:null;r.match(t)&&t.getAttribute(`o:gfxdata`)&&a!==`v:shapetype`&&i.push(e.item.getAttribute(`id`))}return i}(e,n);(function(e,t,n){let r=n.createRangeIn(t),i=new Xo({name:`img`}),a=[];for(let t of r)if(t.item.is(`element`)&&i.match(t.item)){let n=t.item,r=n.getAttribute(`v:shapes`)?n.getAttribute(`v:shapes`).split(` `):[];r.length&&r.every((t=>e.indexOf(t)>-1))?a.push(n):n.getAttribute(`src`)||a.push(n)}for(let e of a)n.remove(e)})(r,e,n),function(e,t,n){let r=n.createRangeIn(t),i=[];for(let t of r)if(t.type==`elementStart`&&t.item.is(`element`,`v:shape`)){let n=t.item.getAttribute(`id`);if(e.includes(n))continue;a(t.item.parent.getChildren(),n)||i.push(t.item)}for(let e of i){let t={src:o(e)};e.hasAttribute(`alt`)&&(t.alt=e.getAttribute(`alt`));let r=n.createElement(`img`,t);n.insertChild(e.index+1,r,e.parent)}function a(e,t){for(let n of e)if(n.is(`element`)&&(n.name==`img`&&n.getAttribute(`v:shapes`)==t||a(n.getChildren(),t)))return!0;return!1}function o(e){for(let t of e.getChildren())if(t.is(`element`)&&t.getAttribute(`src`))return t.getAttribute(`src`)}}(r,e,n),function(e,t){let n=t.createRangeIn(e),r=new Xo({name:/v:(.+)/}),i=[];for(let e of n)e.type==`elementStart`&&r.match(e.item)&&i.push(e.item);for(let e of i)t.remove(e)}(e,n);let i=function(e,t){let n=t.createRangeIn(e),r=new Xo({name:`img`}),i=[];for(let e of n)e.item.is(`element`)&&r.match(e.item)&&e.item.getAttribute(`src`).startsWith(`file://`)&&i.push(e.item);return i}(e,n);i.length&&function(e,t,n){if(e.length===t.length)for(let r=0;r<e.length;r++){let i=`data:${t[r].type};base64,${Zb(t[r].hex)}`;n.setAttribute(`src`,i,e[r])}}(i,function(e){if(!e)return[];let t=/{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,n=RegExp(`(?:(`+t.source+`))([\\da-fA-F\\s]+)\\}`,`g`),r=e.match(n),i=[];if(r)for(let e of r){let n=!1;e.includes(`\\pngblip`)?n=`image/png`:e.includes(`\\jpegblip`)&&(n=`image/jpeg`),n&&i.push({hex:e.replace(t,``).replace(/[^\da-fA-F]/g,``),type:n})}return i}(t),n)}function Zb(e){return btoa(e.match(/\w{2}/g).map((e=>String.fromCharCode(parseInt(e,16)))).join(``))}let Qb=/<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,$b=/xmlns:o="urn:schemas-microsoft-com/i;class ex{constructor(e){this.document=e}isActive(e){return Qb.test(e)||$b.test(e)}execute(e){let{body:t,stylesString:n}=e._parsedData;Wb(t,n),Xb(t,e.dataTransfer.getData(`text/rtf`)),e.content=t}}function tx(e){return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,((e,t)=>t.length===1?` `:Array(t.length+1).join(`\xA0 `).substr(0,t.length)))}function nx(e,t){let n=new DOMParser,r=function(e){return tx(tx(e)).replace(/(<span\s+style=['"]mso-spacerun:yes['"]>[^\S\r\n]*?)[\r\n]+([^\S\r\n]*<\/span>)/g,`$1$2`).replace(/<span\s+style=['"]mso-spacerun:yes['"]><\/span>/g,``).replace(/ <\//g,`\xA0</`).replace(/ <o:p><\/o:p>/g,`\xA0<o:p></o:p>`).replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g,``).replace(/>([^\S\r\n]*[\r\n]\s*)</g,`><`)}(function(e){let t=e.indexOf(`</body>`);if(t<0)return e;let n=e.indexOf(`</html>`,t+7);return e.substring(0,t+7)+(n>=0?e.substring(n):``)}(e=e.replace(/<!--\[if gte vml 1]>/g,``))),i=n.parseFromString(r,`text/html`);(function(e){e.querySelectorAll(`span[style*=spacerun]`).forEach((e=>{let t=e,n=t.innerText.length||0;t.innerText=Array(n+1).join(`\xA0 `).substr(0,n)}))})(i);let a=i.body.innerHTML,o=function(e,t){let n=new sl(new vc(t),{renderingMode:`data`}),r=e.createDocumentFragment(),i=e.body.childNodes;for(;i.length>0;)r.appendChild(i[0]);return n.domToView(r,{skipComments:!0})}(i,t),s=function(e){let t=[],n=[],r=Array.from(e.getElementsByTagName(`style`));for(let e of r)e.sheet&&e.sheet.cssRules&&e.sheet.cssRules.length&&(t.push(e.sheet),n.push(e.innerHTML));return{styles:t,stylesString:n.join(` `)}}(i);return{body:o,bodyString:a,styles:s.styles,stylesString:s.stylesString}}function Q(e,t,n,r,i=1){t>i?r.setAttribute(e,t,n):r.removeAttribute(e,n)}function rx(e,t,n={}){let r=e.createElement(`tableCell`,n);return e.insertElement(`paragraph`,r),e.insert(r,t),r}function ix(e,t){let n=t.parent.parent,r=parseInt(n.getAttribute(`headingColumns`)||0),{column:i}=e.getCellLocation(t);return!!r&&i<r}function ax(){return e=>{e.on(`element:table`,((e,t,n)=>{let r=t.viewItem;if(!n.consumable.test(r,{name:!0}))return;let{rows:i,headingRows:a,headingColumns:o}=function(e){let t={headingRows:0,headingColumns:0},n=[],r=[],i;for(let a of Array.from(e.getChildren()))if(a.name===`tbody`||a.name===`thead`||a.name===`tfoot`){a.name!==`thead`||i||(i=a);let e=Array.from(a.getChildren()).filter((e=>e.is(`element`,`tr`)));for(let a of e)if(a.parent.name===`thead`&&a.parent===i)t.headingRows++,n.push(a);else{r.push(a);let e=sx(a);e>t.headingColumns&&(t.headingColumns=e)}}return t.rows=[...n,...r],t}(r),s={};o&&(s.headingColumns=o),a&&(s.headingRows=a);let c=n.writer.createElement(`table`,s);if(n.safeInsert(c,t.modelCursor)){if(n.consumable.consume(r,{name:!0}),i.forEach((e=>n.convertItem(e,n.writer.createPositionAt(c,`end`)))),n.convertChildren(r,n.writer.createPositionAt(c,`end`)),c.isEmpty){let e=n.writer.createElement(`tableRow`);n.writer.insert(e,n.writer.createPositionAt(c,`end`)),rx(n.writer,n.writer.createPositionAt(e,`end`))}n.updateConversionResult(c,t)}}))}}function ox(e){return t=>{t.on(`element:${e}`,((e,t,{writer:n})=>{if(!t.modelRange)return;let r=t.modelRange.start.nodeAfter,i=n.createPositionAt(r,0);if(t.viewItem.isEmpty)return void n.insertElement(`paragraph`,i);let a=Array.from(r.getChildren());if(a.every((e=>e.is(`element`,`$marker`)))){let e=n.createElement(`paragraph`);n.insert(e,n.createPositionAt(r,0));for(let t of a)n.move(n.createRangeOn(t),n.createPositionAt(e,`end`))}}),{priority:`low`})}}function sx(e){let t=0,n=0,r=Array.from(e.getChildren()).filter((e=>e.name===`th`||e.name===`td`));for(;n<r.length&&r[n].name===`th`;){let e=r[n];t+=parseInt(e.getAttribute(`colspan`)||1),n++}return t}class ${constructor(e,t={}){this._table=e,this._startRow=t.row===void 0?t.startRow||0:t.row,this._endRow=t.row===void 0?t.endRow:t.row,this._startColumn=t.column===void 0?t.startColumn||0:t.column,this._endColumn=t.column===void 0?t.endColumn:t.column,this._includeAllSlots=!!t.includeAllSlots,this._skipRows=new Set,this._row=0,this._rowIndex=0,this._column=0,this._cellIndex=0,this._spannedCells=new Map,this._nextCellAtColumn=-1}[Symbol.iterator](){return this}next(){let e=this._table.getChild(this._rowIndex);if(!e||this._isOverEndRow())return{done:!0};if(!e.is(`element`,`tableRow`))return this._rowIndex++,this.next();if(this._isOverEndColumn())return this._advanceToNextRow();let t=null,n=this._getSpanned();if(n)this._includeAllSlots&&!this._shouldSkipSlot()&&(t=this._formatOutValue(n.cell,n.row,n.column));else{let n=e.getChild(this._cellIndex);if(!n)return this._advanceToNextRow();let r=parseInt(n.getAttribute(`colspan`)||1),i=parseInt(n.getAttribute(`rowspan`)||1);(r>1||i>1)&&this._recordSpans(n,i,r),this._shouldSkipSlot()||(t=this._formatOutValue(n)),this._nextCellAtColumn=this._column+r}return this._column++,this._column==this._nextCellAtColumn&&this._cellIndex++,t||this.next()}skipRow(e){this._skipRows.add(e)}_advanceToNextRow(){return this._row++,this._rowIndex++,this._column=0,this._cellIndex=0,this._nextCellAtColumn=-1,this.next()}_isOverEndRow(){return this._endRow!==void 0&&this._row>this._endRow}_isOverEndColumn(){return this._endColumn!==void 0&&this._column>this._endColumn}_formatOutValue(e,t=this._row,n=this._column){return{done:!1,value:new cx(this,e,t,n)}}_shouldSkipSlot(){let e=this._skipRows.has(this._row),t=this._row<this._startRow,n=this._column<this._startColumn,r=this._endColumn!==void 0&&this._column>this._endColumn;return e||t||n||r}_getSpanned(){let e=this._spannedCells.get(this._row);return e&&e.get(this._column)||null}_recordSpans(e,t,n){let r={cell:e,row:this._row,column:this._column};for(let e=this._row;e<this._row+t;e++)for(let t=this._column;t<this._column+n;t++)e==this._row&&t==this._column||this._markSpannedCell(e,t,r)}_markSpannedCell(e,t,n){this._spannedCells.has(e)||this._spannedCells.set(e,new Map),this._spannedCells.get(e).set(t,n)}}class cx{constructor(e,t,n,r){this.cell=t,this.row=e._row,this.column=e._column,this.cellAnchorRow=n,this.cellAnchorColumn=r,this._cellIndex=e._cellIndex,this._rowIndex=e._rowIndex,this._table=e._table}get isAnchor(){return this.row===this.cellAnchorRow&&this.column===this.cellAnchorColumn}get cellWidth(){return parseInt(this.cell.getAttribute(`colspan`)||1)}get cellHeight(){return parseInt(this.cell.getAttribute(`rowspan`)||1)}get rowIndex(){return this._rowIndex}getPositionBefore(){return this._table.root.document.model.createPositionAt(this._table.getChild(this.row),this._cellIndex)}}function lx(e,t={}){return(n,{writer:r})=>{let i=n.getAttribute(`headingRows`)||0,a=[];i>0&&a.push(r.createContainerElement(`thead`,null,r.createSlot((e=>e.is(`element`,`tableRow`)&&e.index<i)))),i<e.getRows(n)&&a.push(r.createContainerElement(`tbody`,null,r.createSlot((e=>e.is(`element`,`tableRow`)&&e.index>=i))));let o=r.createContainerElement(`figure`,{class:`table`},[r.createContainerElement(`table`,null,a),r.createSlot((e=>!e.is(`element`,`tableRow`)))]);return t.asWidget?function(e,t){return t.setCustomProperty(`table`,!0,e),Ph(e,t,{hasSelectionHandle:!0})}(o,r):o}}function ux(e={}){return(t,{writer:n})=>{let r=t.parent,i=r.parent,a=new $(i,{row:i.getChildIndex(r)}),o=i.getAttribute(`headingRows`)||0,s=i.getAttribute(`headingColumns`)||0;for(let r of a)if(r.cell==t){let t=r.row<o||r.column<s?`th`:`td`;return e.asWidget?Rh(n.createEditableElement(t),n):n.createContainerElement(t)}}}function dx(e={}){return(t,{writer:n})=>{if(t.parent.is(`element`,`tableCell`)&&fx(t)){if(e.asWidget)return n.createContainerElement(`span`,{class:`ck-table-bogus-paragraph`});{let e=n.createContainerElement(`p`);return n.setCustomProperty(`dataPipeline:transparentRendering`,!0,e),e}}}}function fx(e){return e.parent.childCount==1&&![...e.getAttributeKeys()].length}class px extends L{refresh(){let e=this.editor.model,t=e.document.selection,n=e.schema;this.isEnabled=function(e,t){let n=e.getFirstPosition().parent,r=n===n.root?n:n.parent;return t.checkChild(r,`table`)}(t,n)}execute(e={}){let t=this.editor.model,n=this.editor.plugins.get(`TableUtils`),r=this.editor.config.get(`table`),i=r.defaultHeadings.rows,a=r.defaultHeadings.columns;e.headingRows===void 0&&i&&(e.headingRows=i),e.headingColumns===void 0&&a&&(e.headingColumns=a),t.change((r=>{let i=n.createTable(r,e);t.insertObject(i,null,null,{findOptimalPosition:`auto`}),r.setSelection(r.createPositionAt(i.getNodeByPath([0,0,0]),0))}))}}class mx extends L{constructor(e,t={}){super(e),this.order=t.order||`below`}refresh(){let e=this.editor.model.document.selection,t=!!this.editor.plugins.get(`TableUtils`).getSelectionAffectedTableCells(e).length;this.isEnabled=t}execute(){let e=this.editor,t=e.model.document.selection,n=e.plugins.get(`TableUtils`),r=this.order===`above`,i=n.getSelectionAffectedTableCells(t),a=n.getRowIndexes(i),o=r?a.first:a.last,s=i[0].findAncestor(`table`);n.insertRows(s,{at:r?o:o+1,copyStructureFromAbove:!r})}}class hx extends L{constructor(e,t={}){super(e),this.order=t.order||`right`}refresh(){let e=this.editor.model.document.selection,t=!!this.editor.plugins.get(`TableUtils`).getSelectionAffectedTableCells(e).length;this.isEnabled=t}execute(){let e=this.editor,t=e.model.document.selection,n=e.plugins.get(`TableUtils`),r=this.order===`left`,i=n.getSelectionAffectedTableCells(t),a=n.getColumnIndexes(i),o=r?a.first:a.last,s=i[0].findAncestor(`table`);n.insertColumns(s,{columns:1,at:r?o:o+1})}}class gx extends L{constructor(e,t={}){super(e),this.direction=t.direction||`horizontally`}refresh(){let e=this.editor.plugins.get(`TableUtils`).getSelectionAffectedTableCells(this.editor.model.document.selection);this.isEnabled=e.length===1}execute(){let e=this.editor.plugins.get(`TableUtils`),t=e.getSelectionAffectedTableCells(this.editor.model.document.selection)[0];this.direction===`horizontally`?e.splitCellHorizontally(t,2):e.splitCellVertically(t,2)}}function _x(e,t,n){let{startRow:r,startColumn:i,endRow:a,endColumn:o}=t,s=n.createElement(`table`),c=a-r+1;for(let e=0;e<c;e++)n.insertElement(`tableRow`,s,`end`);let l=[...new $(e,{startRow:r,endRow:a,startColumn:i,endColumn:o,includeAllSlots:!0})];for(let{row:e,column:t,cell:c,isAnchor:u,cellAnchorRow:d,cellAnchorColumn:f}of l){let l=e-r,p=s.getChild(l);if(u){let r=n.cloneElement(c);n.append(r,p),Sx(r,e,t,a,o,n)}else (d<r||f<i)&&rx(n,n.createPositionAt(p,`end`))}return function(e,t,n,r,i){let a=parseInt(t.getAttribute(`headingRows`)||0);a>0&&Q(`headingRows`,a-n,e,i,0);let o=parseInt(t.getAttribute(`headingColumns`)||0);o>0&&Q(`headingColumns`,o-r,e,i,0)}(s,e,r,i,n),s}function vx(e,t,n=0){let r=[],i=new $(e,{startRow:n,endRow:t-1});for(let e of i){let{row:n,cellHeight:i}=e;n<t&&t<=n+i-1&&r.push(e)}return r}function yx(e,t,n){let r=e.parent,i=r.parent,a=r.index,o=t-a,s={},c=parseInt(e.getAttribute(`rowspan`))-o;c>1&&(s.rowspan=c);let l=parseInt(e.getAttribute(`colspan`)||1);l>1&&(s.colspan=l);let u=a+o,d=[...new $(i,{startRow:a,endRow:u,includeAllSlots:!0})],f,p=null;for(let t of d){let{row:r,column:i,cell:a}=t;a===e&&f===void 0&&(f=i),f!==void 0&&f===i&&r===u&&(p=rx(n,t.getPositionBefore(),s))}return Q(`rowspan`,o,e,n),p}function bx(e,t){let n=[],r=new $(e);for(let e of r){let{column:r,cellWidth:i}=e;r<t&&t<=r+i-1&&n.push(e)}return n}function xx(e,t,n,r){let i=n-t,a={},o=parseInt(e.getAttribute(`colspan`))-i;o>1&&(a.colspan=o);let s=parseInt(e.getAttribute(`rowspan`)||1);s>1&&(a.rowspan=s);let c=rx(r,r.createPositionAfter(e),a);return Q(`colspan`,i,e,r),c}function Sx(e,t,n,r,i,a){let o=parseInt(e.getAttribute(`colspan`)||1),s=parseInt(e.getAttribute(`rowspan`)||1);n+o-1>i&&Q(`colspan`,i-n+1,e,a,1),t+s-1>r&&Q(`rowspan`,r-t+1,e,a,1)}function Cx(e,t){let n=t.getColumns(e),r=Array(n).fill(0);for(let{column:t}of new $(e))r[t]++;let i=r.reduce(((e,t,n)=>t?e:[...e,n]),[]);if(i.length>0){let n=i[i.length-1];return t.removeColumns(e,{at:n}),!0}return!1}function wx(e,t){let n=[],r=t.getRows(e);for(let t=0;t<r;t++)e.getChild(t).isEmpty&&n.push(t);if(n.length>0){let r=n[n.length-1];return t.removeRows(e,{at:r}),!0}return!1}function Tx(e,t){Cx(e,t)||wx(e,t)}function Ex(e,t){let n=Array.from(new $(e,{startColumn:t.firstColumn,endColumn:t.lastColumn,row:t.lastRow}));if(n.every((({cellHeight:e})=>e===1)))return t.lastRow;let r=n[0].cellHeight-1;return t.lastRow+r}function Dx(e,t){let n=Array.from(new $(e,{startRow:t.firstRow,endRow:t.lastRow,column:t.lastColumn}));if(n.every((({cellWidth:e})=>e===1)))return t.lastColumn;let r=n[0].cellWidth-1;return t.lastColumn+r}class Ox extends L{constructor(e,t){super(e),this.direction=t.direction,this.isHorizontal=this.direction==`right`||this.direction==`left`}refresh(){let e=this._getMergeableCell();this.value=e,this.isEnabled=!!e}execute(){let e=this.editor.model,t=e.document,n=this.editor.plugins.get(`TableUtils`).getTableCellsContainingSelection(t.selection)[0],r=this.value,i=this.direction;e.change((e=>{let t=i==`right`||i==`down`,a=t?n:r,o=t?r:n,s=o.parent;(function(e,t,n){kx(e)||(kx(t)&&n.remove(n.createRangeIn(t)),n.move(n.createRangeIn(e),n.createPositionAt(t,`end`))),n.remove(e)})(o,a,e);let c=this.isHorizontal?`colspan`:`rowspan`,l=parseInt(n.getAttribute(c)||1),u=parseInt(r.getAttribute(c)||1);e.setAttribute(c,l+u,a),e.setSelection(e.createRangeIn(a));let d=this.editor.plugins.get(`TableUtils`);Tx(s.findAncestor(`table`),d)}))}_getMergeableCell(){let e=this.editor.model.document,t=this.editor.plugins.get(`TableUtils`),n=t.getTableCellsContainingSelection(e.selection)[0];if(!n)return;let r=this.isHorizontal?function(e,t,n){let r=e.parent.parent,i=t==`right`?e.nextSibling:e.previousSibling,a=(r.getAttribute(`headingColumns`)||0)>0;if(!i)return;let o=t==`right`?e:i,s=t==`right`?i:e,{column:c}=n.getCellLocation(o),{column:l}=n.getCellLocation(s),u=parseInt(o.getAttribute(`colspan`)||1),d=ix(n,o),f=ix(n,s);if(!(a&&d!=f))return c+u===l?i:void 0}(n,this.direction,t):function(e,t,n){let r=e.parent,i=r.parent,a=i.getChildIndex(r);if(t==`down`&&a===n.getRows(i)-1||t==`up`&&a===0)return;let o=parseInt(e.getAttribute(`rowspan`)||1),s=i.getAttribute(`headingRows`)||0,c=t==`down`&&a+o===s;if(s&&(c||t==`up`&&a===s))return;let l=parseInt(e.getAttribute(`rowspan`)||1),u=t==`down`?a+l:a,d=[...new $(i,{endRow:u})],f=d.find((t=>t.cell===e)).column,p=d.find((({row:e,cellHeight:n,column:r})=>r===f&&(t==`down`?e===u:u===e+n)));return p&&p.cell}(n,this.direction,t);if(!r)return;let i=this.isHorizontal?`rowspan`:`colspan`,a=parseInt(n.getAttribute(i)||1);return parseInt(r.getAttribute(i)||1)===a?r:void 0}}function kx(e){return e.childCount==1&&e.getChild(0).is(`element`,`paragraph`)&&e.getChild(0).isEmpty}class Ax extends L{refresh(){let e=this.editor.plugins.get(`TableUtils`),t=e.getSelectionAffectedTableCells(this.editor.model.document.selection),n=t[0];if(n){let r=n.findAncestor(`table`),i=this.editor.plugins.get(`TableUtils`).getRows(r)-1,a=e.getRowIndexes(t),o=a.first===0&&a.last===i;this.isEnabled=!o}else this.isEnabled=!1}execute(){let e=this.editor.model,t=this.editor.plugins.get(`TableUtils`),n=t.getSelectionAffectedTableCells(e.document.selection),r=t.getRowIndexes(n),i=n[0],a=i.findAncestor(`table`),o=t.getCellLocation(i).column;e.change((e=>{let n=r.last-r.first+1;t.removeRows(a,{at:r.first,rows:n});let i=function(e,t,n,r){let i=e.getChild(Math.min(t,r-1)),a=i.getChild(0),o=0;for(let e of i.getChildren()){if(o>n)return a;a=e,o+=parseInt(e.getAttribute(`colspan`)||1)}return a}(a,r.first,o,t.getRows(a));e.setSelection(e.createPositionAt(i,0))}))}}class jx extends L{refresh(){let e=this.editor.plugins.get(`TableUtils`),t=e.getSelectionAffectedTableCells(this.editor.model.document.selection),n=t[0];if(n){let r=n.findAncestor(`table`),i=e.getColumns(r),{first:a,last:o}=e.getColumnIndexes(t);this.isEnabled=o-a<i-1}else this.isEnabled=!1}execute(){let e=this.editor.plugins.get(`TableUtils`),[t,n]=function(e,t){let n=t.getSelectionAffectedTableCells(e),r=n[0],i=n.pop(),a=[r,i];return r.isBefore(i)?a:a.reverse()}(this.editor.model.document.selection,e),r=t.parent.parent,i=[...new $(r)],a={first:i.find((e=>e.cell===t)).column,last:i.find((e=>e.cell===n)).column},o=function(e,t,n,r){return parseInt(n.getAttribute(`colspan`)||1)>1?n:t.previousSibling||n.nextSibling?n.nextSibling||t.previousSibling:r.first?e.reverse().find((({column:e})=>e<r.first)).cell:e.reverse().find((({column:e})=>e>r.last)).cell}(i,t,n,a);this.editor.model.change((e=>{let t=a.last-a.first+1;this.editor.plugins.get(`TableUtils`).removeColumns(r,{at:a.first,columns:t}),e.setSelection(e.createPositionAt(o,0))}))}}class Mx extends L{refresh(){let e=this.editor.plugins.get(`TableUtils`),t=this.editor.model,n=e.getSelectionAffectedTableCells(t.document.selection),r=n.length>0;this.isEnabled=r,this.value=r&&n.every((e=>this._isInHeading(e,e.parent.parent)))}execute(e={}){if(e.forceValue===this.value)return;let t=this.editor.plugins.get(`TableUtils`),n=this.editor.model,r=t.getSelectionAffectedTableCells(n.document.selection),i=r[0].findAncestor(`table`),{first:a,last:o}=t.getRowIndexes(r),s=this.value?a:o+1,c=i.getAttribute(`headingRows`)||0;n.change((e=>{if(s){let t=vx(i,s,s>c?c:0);for(let{cell:n}of t)yx(n,s,e)}Q(`headingRows`,s,i,e,0)}))}_isInHeading(e,t){let n=parseInt(t.getAttribute(`headingRows`)||0);return!!n&&e.parent.index<n}}class Nx extends L{refresh(){let e=this.editor.model,t=this.editor.plugins.get(`TableUtils`),n=t.getSelectionAffectedTableCells(e.document.selection),r=n.length>0;this.isEnabled=r,this.value=r&&n.every((e=>ix(t,e)))}execute(e={}){if(e.forceValue===this.value)return;let t=this.editor.plugins.get(`TableUtils`),n=this.editor.model,r=t.getSelectionAffectedTableCells(n.document.selection),i=r[0].findAncestor(`table`),{first:a,last:o}=t.getColumnIndexes(r),s=this.value?a:o+1;n.change((e=>{if(s){let t=bx(i,s);for(let{cell:n,column:r}of t)xx(n,r,s,e)}Q(`headingColumns`,s,i,e,0)}))}}class Px extends I{static get pluginName(){return`TableUtils`}init(){this.decorate(`insertColumns`),this.decorate(`insertRows`)}getCellLocation(e){let t=e.parent,n=t.parent,r=new $(n,{row:n.getChildIndex(t)});for(let{cell:t,row:n,column:i}of r)if(t===e)return{row:n,column:i}}createTable(e,t){let n=e.createElement(`table`),r=parseInt(t.rows)||2,i=parseInt(t.columns)||2;return Fx(e,n,0,r,i),t.headingRows&&Q(`headingRows`,Math.min(t.headingRows,r),n,e,0),t.headingColumns&&Q(`headingColumns`,Math.min(t.headingColumns,i),n,e,0),n}insertRows(e,t={}){let n=this.editor.model,r=t.at||0,i=t.rows||1,a=t.copyStructureFromAbove!==void 0,o=t.copyStructureFromAbove?r-1:r,s=this.getRows(e),c=this.getColumns(e);if(r>s)throw new y(`tableutils-insertrows-insert-out-of-range`,this,{options:t});n.change((t=>{let n=e.getAttribute(`headingRows`)||0;if(n>r&&Q(`headingRows`,n+i,e,t,0),!a&&(r===0||r===s))return void Fx(t,e,r,i,c);let l=new $(e,{endRow:a?Math.max(r,o):r}),u=Array(c).fill(1);for(let{row:e,column:n,cellHeight:s,cellWidth:c,cell:d}of l){let l=e+s-1;e<r&&r<=l?(t.setAttribute(`rowspan`,s+i,d),u[n]=-c):a&&e<=o&&o<=l&&(u[n]=c)}for(let n=0;n<i;n++){let n=t.createElement(`tableRow`);t.insert(n,e,r);for(let e=0;e<u.length;e++){let r=u[e],i=t.createPositionAt(n,`end`);r>0&&rx(t,i,r>1?{colspan:r}:null),e+=Math.abs(r)-1}}}))}insertColumns(e,t={}){let n=this.editor.model,r=t.at||0,i=t.columns||1;n.change((t=>{let n=e.getAttribute(`headingColumns`);r<n&&t.setAttribute(`headingColumns`,n+i,e);let a=this.getColumns(e);if(r===0||a===r){for(let n of e.getChildren())n.is(`element`,`tableRow`)&&Ix(i,t,t.createPositionAt(n,r?`end`:0));return}let o=new $(e,{column:r,includeAllSlots:!0});for(let e of o){let{row:n,cell:a,cellAnchorColumn:s,cellAnchorRow:c,cellWidth:l,cellHeight:u}=e;if(s<r){t.setAttribute(`colspan`,l+i,a);let e=c+u-1;for(let t=n;t<=e;t++)o.skipRow(t)}else Ix(i,t,e.getPositionBefore())}}))}removeRows(e,t){let n=this.editor.model,r=t.rows||1,i=this.getRows(e),a=t.at,o=a+r-1;if(o>i-1)throw new y(`tableutils-removerows-row-index-out-of-range`,this,{table:e,options:t});n.change((t=>{let{cellsToMove:n,cellsToTrim:r}=function(e,t,n){let r=new Map,i=[];for(let{row:a,column:o,cellHeight:s,cell:c}of new $(e,{endRow:n})){let e=a+s-1;if(a>=t&&a<=n&&e>n){let e=s-(n-a+1);r.set(o,{cell:c,rowspan:e})}if(a<t&&e>=t){let r;r=e>=n?n-t+1:e-t+1,i.push({cell:c,rowspan:s-r})}}return{cellsToMove:r,cellsToTrim:i}}(e,a,o);n.size&&(function(e,t,n,r){let i=[...new $(e,{includeAllSlots:!0,row:t})],a=e.getChild(t),o;for(let{column:e,cell:t,isAnchor:s}of i)if(n.has(e)){let{cell:t,rowspan:i}=n.get(e),s=o?r.createPositionAfter(o):r.createPositionAt(a,0);r.move(r.createRangeOn(t),s),Q(`rowspan`,i,t,r),o=t}else s&&(o=t)})(e,o+1,n,t);for(let n=o;n>=a;n--)t.remove(e.getChild(n));for(let{rowspan:e,cell:n}of r)Q(`rowspan`,e,n,t);(function(e,t,n,r){let i=e.getAttribute(`headingRows`)||0;t<i&&Q(`headingRows`,n<i?i-(n-t+1):t,e,r,0)})(e,a,o,t),Cx(e,this)||wx(e,this)}))}removeColumns(e,t){let n=this.editor.model,r=t.at,i=t.columns||1,a=t.at+i-1;n.change((t=>{(function(e,t,n){let r=e.getAttribute(`headingColumns`)||0;if(r&&t.first<r){let i=Math.min(r-1,t.last)-t.first+1;n.setAttribute(`headingColumns`,r-i,e)}})(e,{first:r,last:a},t);for(let n=a;n>=r;n--)for(let{cell:r,column:i,cellWidth:a}of[...new $(e)])i<=n&&a>1&&i+a>n?Q(`colspan`,a-1,r,t):i===n&&t.remove(r);wx(e,this)||Cx(e,this)}))}splitCellVertically(e,t=2){let n=this.editor.model,r=e.parent.parent,i=parseInt(e.getAttribute(`rowspan`)||1),a=parseInt(e.getAttribute(`colspan`)||1);n.change((n=>{if(a>1){let{newCellsSpan:r,updatedSpan:o}=Lx(a,t);Q(`colspan`,o,e,n);let s={};r>1&&(s.colspan=r),i>1&&(s.rowspan=i),Ix(a>t?t-1:a-1,n,n.createPositionAfter(e),s)}if(a<t){let o=t-a,s=[...new $(r)],{column:c}=s.find((({cell:t})=>t===e)),l=s.filter((({cell:t,cellWidth:n,column:r})=>t!==e&&r===c||r<c&&r+n>c));for(let{cell:e,cellWidth:t}of l)n.setAttribute(`colspan`,t+o,e);let u={};i>1&&(u.rowspan=i),Ix(o,n,n.createPositionAfter(e),u);let d=r.getAttribute(`headingColumns`)||0;d>c&&Q(`headingColumns`,d+o,r,n)}}))}splitCellHorizontally(e,t=2){let n=this.editor.model,r=e.parent,i=r.parent,a=i.getChildIndex(r),o=parseInt(e.getAttribute(`rowspan`)||1),s=parseInt(e.getAttribute(`colspan`)||1);n.change((n=>{if(o>1){let r=[...new $(i,{startRow:a,endRow:a+o-1,includeAllSlots:!0})],{newCellsSpan:c,updatedSpan:l}=Lx(o,t);Q(`rowspan`,l,e,n);let{column:u}=r.find((({cell:t})=>t===e)),d={};c>1&&(d.rowspan=c),s>1&&(d.colspan=s);for(let e of r){let{column:t,row:r}=e;r>=a+l&&t===u&&(r+a+l)%c==0&&Ix(1,n,e.getPositionBefore(),d)}}if(o<t){let r=t-o,c=[...new $(i,{startRow:0,endRow:a})];for(let{cell:t,cellHeight:i,row:o}of c)if(t!==e&&o+i>a){let e=i+r;n.setAttribute(`rowspan`,e,t)}let l={};s>1&&(l.colspan=s),Fx(n,i,a+1,r,1,l);let u=i.getAttribute(`headingRows`)||0;u>a&&Q(`headingRows`,u+r,i,n)}}))}getColumns(e){return[...e.getChild(0).getChildren()].reduce(((e,t)=>e+parseInt(t.getAttribute(`colspan`)||1)),0)}getRows(e){return Array.from(e.getChildren()).reduce(((e,t)=>t.is(`element`,`tableRow`)?e+1:e),0)}createTableWalker(e,t={}){return new $(e,t)}getSelectedTableCells(e){let t=[];for(let n of this.sortRanges(e.getRanges())){let e=n.getContainedElement();e&&e.is(`element`,`tableCell`)&&t.push(e)}return t}getTableCellsContainingSelection(e){let t=[];for(let n of e.getRanges()){let e=n.start.findAncestor(`tableCell`);e&&t.push(e)}return t}getSelectionAffectedTableCells(e){let t=this.getSelectedTableCells(e);return t.length?t:this.getTableCellsContainingSelection(e)}getRowIndexes(e){let t=e.map((e=>e.parent.index));return this._getFirstLastIndexesObject(t)}getColumnIndexes(e){let t=[...new $(e[0].findAncestor(`table`))].filter((t=>e.includes(t.cell))).map((e=>e.column));return this._getFirstLastIndexesObject(t)}isSelectionRectangular(e){if(e.length<2||!this._areCellInTheSameTableSection(e))return!1;let t=new Set,n=new Set,r=0;for(let i of e){let{row:e,column:a}=this.getCellLocation(i),o=parseInt(i.getAttribute(`rowspan`)||1),s=parseInt(i.getAttribute(`colspan`)||1);t.add(e),n.add(a),o>1&&t.add(e+o-1),s>1&&n.add(a+s-1),r+=o*s}return function(e,t){let n=Array.from(e.values()),r=Array.from(t.values()),i=Math.max(...n),a=Math.min(...n),o=Math.max(...r),s=Math.min(...r);return(i-a+1)*(o-s+1)}(t,n)==r}sortRanges(e){return Array.from(e).sort(Rx)}_getFirstLastIndexesObject(e){let t=e.sort(((e,t)=>e-t));return{first:t[0],last:t[t.length-1]}}_areCellInTheSameTableSection(e){let t=e[0].findAncestor(`table`),n=this.getRowIndexes(e),r=parseInt(t.getAttribute(`headingRows`)||0);if(!this._areIndexesInSameSection(n,r))return!1;let i=parseInt(t.getAttribute(`headingColumns`)||0),a=this.getColumnIndexes(e);return this._areIndexesInSameSection(a,i)}_areIndexesInSameSection({first:e,last:t},n){return e<n==t<n}}function Fx(e,t,n,r,i,a={}){for(let o=0;o<r;o++){let r=e.createElement(`tableRow`);e.insert(r,t,n),Ix(i,e,e.createPositionAt(r,`end`),a)}}function Ix(e,t,n,r={}){for(let i=0;i<e;i++)rx(t,n,r)}function Lx(e,t){if(e<t)return{newCellsSpan:1,updatedSpan:1};let n=Math.floor(e/t);return{newCellsSpan:n,updatedSpan:e-n*t+n}}function Rx(e,t){let n=e.start,r=t.start;return n.isBefore(r)?-1:1}class zx extends L{refresh(){let e=this.editor.plugins.get(Px),t=e.getSelectedTableCells(this.editor.model.document.selection);this.isEnabled=e.isSelectionRectangular(t,this.editor.plugins.get(Px))}execute(){let e=this.editor.model,t=this.editor.plugins.get(Px);e.change((n=>{let r=t.getSelectedTableCells(e.document.selection),i=r.shift(),{mergeWidth:a,mergeHeight:o}=function(e,t,n){let r=0,i=0;for(let e of t){let{row:t,column:a}=n.getCellLocation(e);r=Hx(e,a,r,`colspan`),i=Hx(e,t,i,`rowspan`)}let{row:a,column:o}=n.getCellLocation(e);return{mergeWidth:r-o,mergeHeight:i-a}}(i,r,t);Q(`colspan`,a,i,n),Q(`rowspan`,o,i,n);for(let e of r)Bx(e,i,n);Tx(i.findAncestor(`table`),t),n.setSelection(i,`in`)}))}}function Bx(e,t,n){Vx(e)||(Vx(t)&&n.remove(n.createRangeIn(t)),n.move(n.createRangeIn(e),n.createPositionAt(t,`end`))),n.remove(e)}function Vx(e){return e.childCount==1&&e.getChild(0).is(`element`,`paragraph`)&&e.getChild(0).isEmpty}function Hx(e,t,n,r){let i=parseInt(e.getAttribute(r)||1);return Math.max(n,t+i)}class Ux extends L{constructor(e){super(e),this.affectsData=!1}refresh(){let e=this.editor.plugins.get(`TableUtils`).getSelectionAffectedTableCells(this.editor.model.document.selection);this.isEnabled=e.length>0}execute(){let e=this.editor.model,t=this.editor.plugins.get(`TableUtils`),n=t.getSelectionAffectedTableCells(e.document.selection),r=t.getRowIndexes(n),i=n[0].findAncestor(`table`),a=[];for(let t=r.first;t<=r.last;t++)for(let n of i.getChild(t).getChildren())a.push(e.createRangeOn(n));e.change((e=>{e.setSelection(a)}))}}class Wx extends L{constructor(e){super(e),this.affectsData=!1}refresh(){let e=this.editor.plugins.get(`TableUtils`).getSelectionAffectedTableCells(this.editor.model.document.selection);this.isEnabled=e.length>0}execute(){let e=this.editor.plugins.get(`TableUtils`),t=this.editor.model,n=e.getSelectionAffectedTableCells(t.document.selection),r=n[0],i=n.pop(),a=r.findAncestor(`table`),o=e.getCellLocation(r),s=e.getCellLocation(i),c=Math.min(o.column,s.column),l=Math.max(o.column,s.column),u=[];for(let e of new $(a,{startColumn:c,endColumn:l}))u.push(t.createRangeOn(e.cell));t.change((e=>{e.setSelection(u)}))}}function Gx(e){e.document.registerPostFixer((t=>function(e,t){let n=t.document.differ.getChanges(),r=!1,i=new Set;for(let t of n){let n;t.name==`table`&&t.type==`insert`&&(n=t.position.nodeAfter),t.name!=`tableRow`&&t.name!=`tableCell`||(n=t.position.findAncestor(`table`)),Jx(t)&&(n=t.range.start.findAncestor(`table`)),n&&!i.has(n)&&(r=Kx(n,e)||r,r=qx(n,e)||r,i.add(n))}return r}(t,e)))}function Kx(e,t){let n=!1,r=function(e){let t=parseInt(e.getAttribute(`headingRows`)||0),n=Array.from(e.getChildren()).reduce(((e,t)=>t.is(`element`,`tableRow`)?e+1:e),0),r=[];for(let{row:i,cell:a,cellHeight:o}of new $(e)){if(o<2)continue;let e=i<t?t:n;if(i+o>e){let t=e-i;r.push({cell:a,rowspan:t})}}return r}(e);if(r.length){n=!0;for(let e of r)Q(`rowspan`,e.rowspan,e.cell,t,1)}return n}function qx(e,t){let n=!1,r=function(e){let t=Array(e.childCount).fill(0);for(let{rowIndex:n}of new $(e,{includeAllSlots:!0}))t[n]++;return t}(e),i=[];for(let[t,n]of r.entries())!n&&e.getChild(t).is(`element`,`tableRow`)&&i.push(t);if(i.length){n=!0;for(let n of i.reverse())t.remove(e.getChild(n)),r.splice(n,1)}let a=r.filter(((t,n)=>e.getChild(n).is(`element`,`tableRow`))),o=a[0];if(!a.every((e=>e===o))){let r=a.reduce(((e,t)=>t>e?t:e),0);for(let[i,o]of a.entries()){let a=r-o;if(a){for(let n=0;n<a;n++)rx(t,t.createPositionAt(e.getChild(i),`end`));n=!0}}}return n}function Jx(e){let t=e.type===`attribute`,n=e.attributeKey;return t&&(n===`headingRows`||n===`colspan`||n===`rowspan`)}function Yx(e){e.document.registerPostFixer((t=>function(e,t){let n=t.document.differ.getChanges(),r=!1;for(let t of n)t.type==`insert`&&t.name==`table`&&(r=Xx(t.position.nodeAfter,e)||r),t.type==`insert`&&t.name==`tableRow`&&(r=Zx(t.position.nodeAfter,e)||r),t.type==`insert`&&t.name==`tableCell`&&(r=Qx(t.position.nodeAfter,e)||r),$x(t)&&(r=Qx(t.position.parent,e)||r);return r}(t,e)))}function Xx(e,t){let n=!1;for(let r of e.getChildren())r.is(`element`,`tableRow`)&&(n=Zx(r,t)||n);return n}function Zx(e,t){let n=!1;for(let r of e.getChildren())n=Qx(r,t)||n;return n}function Qx(e,t){if(e.childCount==0)return t.insertElement(`paragraph`,e),!0;let n=Array.from(e.getChildren()).filter((e=>e.is(`$text`)));for(let e of n)t.wrap(t.createRangeOn(e),`paragraph`);return!!n.length}function $x(e){return!(!e.position||!e.position.parent.is(`element`,`tableCell`))&&(e.type==`insert`&&e.name==`$text`||e.type==`remove`)}function eS(e,t){if(!e.is(`element`,`paragraph`))return!1;let n=t.toViewElement(e);return!!n&&fx(e)!==n.is(`element`,`span`)}var tS=i(3881);N()(tS.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),tS.Z.locals;class nS extends I{static get pluginName(){return`TableEditing`}static get requires(){return[Px]}init(){let e=this.editor,t=e.model,n=t.schema,r=e.conversion,i=e.plugins.get(Px);n.register(`table`,{inheritAllFrom:`$blockObject`,allowAttributes:[`headingRows`,`headingColumns`]}),n.register(`tableRow`,{allowIn:`table`,isLimit:!0}),n.register(`tableCell`,{allowContentOf:`$container`,allowIn:`tableRow`,allowAttributes:[`colspan`,`rowspan`],isLimit:!0,isSelectable:!0}),r.for(`upcast`).add((e=>{e.on(`element:figure`,((e,t,n)=>{if(!n.consumable.test(t.viewItem,{name:!0,classes:`table`}))return;let r=function(e){for(let t of e.getChildren())if(t.is(`element`,`table`))return t}(t.viewItem);if(!r||!n.consumable.test(r,{name:!0}))return;n.consumable.consume(t.viewItem,{name:!0,classes:`table`});let i=M(n.convertItem(r,t.modelCursor).modelRange.getItems());i?(n.convertChildren(t.viewItem,n.writer.createPositionAt(i,`end`)),n.updateConversionResult(i,t)):n.consumable.revert(t.viewItem,{name:!0,classes:`table`})}))})),r.for(`upcast`).add(ax()),r.for(`editingDowncast`).elementToStructure({model:{name:`table`,attributes:[`headingRows`]},view:lx(i,{asWidget:!0})}),r.for(`dataDowncast`).elementToStructure({model:{name:`table`,attributes:[`headingRows`]},view:lx(i)}),r.for(`upcast`).elementToElement({model:`tableRow`,view:`tr`}),r.for(`upcast`).add((e=>{e.on(`element:tr`,((e,t)=>{t.viewItem.isEmpty&&t.modelCursor.index==0&&e.stop()}),{priority:`high`})})),r.for(`downcast`).elementToElement({model:`tableRow`,view:(e,{writer:t})=>e.isEmpty?t.createEmptyElement(`tr`):t.createContainerElement(`tr`)}),r.for(`upcast`).elementToElement({model:`tableCell`,view:`td`}),r.for(`upcast`).elementToElement({model:`tableCell`,view:`th`}),r.for(`upcast`).add(ox(`td`)),r.for(`upcast`).add(ox(`th`)),r.for(`editingDowncast`).elementToElement({model:`tableCell`,view:ux({asWidget:!0})}),r.for(`dataDowncast`).elementToElement({model:`tableCell`,view:ux()}),r.for(`editingDowncast`).elementToElement({model:`paragraph`,view:dx({asWidget:!0}),converterPriority:`high`}),r.for(`dataDowncast`).elementToElement({model:`paragraph`,view:dx(),converterPriority:`high`}),r.for(`downcast`).attributeToAttribute({model:`colspan`,view:`colspan`}),r.for(`upcast`).attributeToAttribute({model:{key:`colspan`,value:rS(`colspan`)},view:`colspan`}),r.for(`downcast`).attributeToAttribute({model:`rowspan`,view:`rowspan`}),r.for(`upcast`).attributeToAttribute({model:{key:`rowspan`,value:rS(`rowspan`)},view:`rowspan`}),e.config.define(`table.defaultHeadings.rows`,0),e.config.define(`table.defaultHeadings.columns`,0),e.commands.add(`insertTable`,new px(e)),e.commands.add(`insertTableRowAbove`,new mx(e,{order:`above`})),e.commands.add(`insertTableRowBelow`,new mx(e,{order:`below`})),e.commands.add(`insertTableColumnLeft`,new hx(e,{order:`left`})),e.commands.add(`insertTableColumnRight`,new hx(e,{order:`right`})),e.commands.add(`removeTableRow`,new Ax(e)),e.commands.add(`removeTableColumn`,new jx(e)),e.commands.add(`splitTableCellVertically`,new gx(e,{direction:`vertically`})),e.commands.add(`splitTableCellHorizontally`,new gx(e,{direction:`horizontally`})),e.commands.add(`mergeTableCells`,new zx(e)),e.commands.add(`mergeTableCellRight`,new Ox(e,{direction:`right`})),e.commands.add(`mergeTableCellLeft`,new Ox(e,{direction:`left`})),e.commands.add(`mergeTableCellDown`,new Ox(e,{direction:`down`})),e.commands.add(`mergeTableCellUp`,new Ox(e,{direction:`up`})),e.commands.add(`setTableColumnHeader`,new Nx(e)),e.commands.add(`setTableRowHeader`,new Mx(e)),e.commands.add(`selectTableRow`,new Ux(e)),e.commands.add(`selectTableColumn`,new Wx(e)),Gx(t),Yx(t),this.listenTo(t.document,`change:data`,(()=>{(function(e,t){let n=e.document.differ;for(let e of n.getChanges()){let n,r=!1;if(e.type==`attribute`){let t=e.range.start.nodeAfter;if(!t||!t.is(`element`,`table`)||e.attributeKey!=`headingRows`&&e.attributeKey!=`headingColumns`)continue;n=t,r=e.attributeKey==`headingRows`}else e.name!=`tableRow`&&e.name!=`tableCell`||(n=e.position.findAncestor(`table`),r=e.name==`tableRow`);if(!n)continue;let i=n.getAttribute(`headingRows`)||0,a=n.getAttribute(`headingColumns`)||0,o=new $(n);for(let e of o){let n=e.row<i||e.column<a?`th`:`td`,o=t.mapper.toViewElement(e.cell);o&&o.is(`element`)&&o.name!=n&&t.reconvertItem(r?e.cell.parent:e.cell)}}})(t,e.editing),function(e,t){let n=e.document.differ,r=new Set;for(let e of n.getChanges()){let t=e.type==`attribute`?e.range.start.parent:e.position.parent;t.is(`element`,`tableCell`)&&r.add(t)}for(let e of r.values()){let n=Array.from(e.getChildren()).filter((e=>eS(e,t.mapper)));for(let e of n)t.reconvertItem(e)}}(t,e.editing)}))}}function rS(e){return t=>{let n=parseInt(t.getAttribute(e));return Number.isNaN(n)||n<=0?null:n}}var iS=i(1613);N()(iS.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),iS.Z.locals;class aS extends P{constructor(e){super(e);let t=this.bindTemplate;this.items=this._createGridCollection(),this.keystrokes=new Pa,this.focusTracker=new Na,this.set(`rows`,0),this.set(`columns`,0),this.bind(`label`).to(this,`columns`,this,`rows`,((e,t)=>`${t} × ${e}`)),this.setTemplate({tag:`div`,attributes:{class:[`ck`]},children:[{tag:`div`,attributes:{class:[`ck-insert-table-dropdown__grid`]},on:{"mouseover@.ck-insert-table-dropdown-grid-box":t.to(`boxover`)},children:this.items},{tag:`div`,attributes:{class:[`ck`,`ck-insert-table-dropdown__label`],"aria-hidden":!0},children:[{text:t.to(`label`)}]}],on:{mousedown:t.to((e=>{e.preventDefault()})),click:t.to((()=>{this.fire(`execute`)}))}}),this.on(`boxover`,((e,t)=>{let{row:n,column:r}=t.target.dataset;this.items.get(10*(parseInt(n,10)-1)+(parseInt(r,10)-1)).focus()})),this.focusTracker.on(`change:focusedElement`,((e,t,n)=>{if(!n)return;let{row:r,column:i}=n.dataset;this.set({rows:parseInt(r),columns:parseInt(i)})})),this.on(`change:columns`,(()=>this._highlightGridBoxes())),this.on(`change:rows`,(()=>this._highlightGridBoxes()))}render(){super.render(),function({keystrokeHandler:e,focusTracker:t,gridItems:n,numberOfColumns:r,uiLanguageDirection:i}){let a=typeof r==`number`?()=>r:r;function o(e){return r=>{let i=n.find((e=>e.element===t.focusedElement)),a=e(n.getIndex(i),n);n.get(a).focus(),r.stopPropagation(),r.preventDefault()}}function s(e,t){return e===t-1?0:e+1}function c(e,t){return e===0?t-1:e-1}e.set(`arrowright`,o(((e,t)=>i===`rtl`?c(e,t.length):s(e,t.length)))),e.set(`arrowleft`,o(((e,t)=>i===`rtl`?s(e,t.length):c(e,t.length)))),e.set(`arrowup`,o(((e,t)=>{let n=e-a();return n<0&&(n=e+a()*Math.floor(t.length/a()),n>t.length-1&&(n-=a())),n}))),e.set(`arrowdown`,o(((e,t)=>{let n=e+a();return n>t.length-1&&(n=e%a()),n})))}({keystrokeHandler:this.keystrokes,focusTracker:this.focusTracker,gridItems:this.items,numberOfColumns:10,uiLanguageDirection:this.locale&&this.locale.uiLanguageDirection});for(let e of this.items)this.focusTracker.add(e.element);this.keystrokes.listenTo(this.element)}focus(){this.items.get(0).focus()}focusLast(){this.items.get(0).focus()}_highlightGridBoxes(){let e=this.rows,t=this.columns;this.items.map(((n,r)=>{let i=Math.floor(r/10)<e&&r%10<t;n.set(`isOn`,i)}))}_createGridButton(e,t,n,r){let i=new F(e);return i.set({label:r,class:`ck-insert-table-dropdown-grid-box`}),i.extendTemplate({attributes:{"data-row":t,"data-column":n}}),i}_createGridCollection(){let e=[];for(let t=0;t<100;t++){let n=Math.floor(t/10),r=t%10,i=`${n+1} × ${r+1}`;e.push(this._createGridButton(this.locale,n+1,r+1,i))}return this.createCollection(e)}}class oS extends I{static get pluginName(){return`TableUI`}init(){let e=this.editor,t=this.editor.t,n=e.locale.contentLanguageDirection===`ltr`;e.ui.componentFactory.add(`insertTable`,(n=>{let r=e.commands.get(`insertTable`),i=zp(n),a;return i.bind(`isEnabled`).to(r),i.buttonView.set({icon:`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6v3h4V6H3zm0 4v3h4v-3H3zm0 4v3h4v-3H3zm5 3h4v-3H8v3zm5 0h4v-3h-4v3zm4-4v-3h-4v3h4zm0-4V6h-4v3h4zm1.5 8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 17V4c.222-.863 1.068-1.5 2-1.5h13c.932 0 1.778.637 2 1.5v13zM12 13v-3H8v3h4zm0-4V6H8v3h4z"/></svg>`,label:t(`Insert table`),tooltip:!0}),i.on(`change:isOpen`,(()=>{a||(a=new aS(n),i.panelView.children.add(a),a.delegate(`execute`).to(i),i.on(`execute`,(()=>{e.execute(`insertTable`,{rows:a.rows,columns:a.columns}),e.editing.view.focus()})))})),i})),e.ui.componentFactory.add(`tableColumn`,(e=>{let r=[{type:`switchbutton`,model:{commandName:`setTableColumnHeader`,label:t(`Header column`),bindIsOn:!0}},{type:`separator`},{type:`button`,model:{commandName:n?`insertTableColumnLeft`:`insertTableColumnRight`,label:t(`Insert column left`)}},{type:`button`,model:{commandName:n?`insertTableColumnRight`:`insertTableColumnLeft`,label:t(`Insert column right`)}},{type:`button`,model:{commandName:`removeTableColumn`,label:t(`Delete column`)}},{type:`button`,model:{commandName:`selectTableColumn`,label:t(`Select column`)}}];return this._prepareDropdown(t(`Column`),`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M18 7v1H2V7h16zm0 5v1H2v-1h16z" opacity=".6"/><path d="M14 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm-2 1H8v4h4V2zm0 6H8v4h4V8zm0 6H8v4h4v-4z"/></svg>`,r,e)})),e.ui.componentFactory.add(`tableRow`,(e=>{let n=[{type:`switchbutton`,model:{commandName:`setTableRowHeader`,label:t(`Header row`),bindIsOn:!0}},{type:`separator`},{type:`button`,model:{commandName:`insertTableRowAbove`,label:t(`Insert row above`)}},{type:`button`,model:{commandName:`insertTableRowBelow`,label:t(`Insert row below`)}},{type:`button`,model:{commandName:`removeTableRow`,label:t(`Delete row`)}},{type:`button`,model:{commandName:`selectTableRow`,label:t(`Select row`)}}];return this._prepareDropdown(t(`Row`),`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v16h-1V2z" opacity=".6"/><path d="M1 6h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm1 2v4h4V8H2zm6 0v4h4V8H8zm6 0v4h4V8h-4z"/></svg>`,n,e)})),e.ui.componentFactory.add(`mergeTableCells`,(e=>{let r=[{type:`button`,model:{commandName:`mergeTableCellUp`,label:t(`Merge cell up`)}},{type:`button`,model:{commandName:n?`mergeTableCellRight`:`mergeTableCellLeft`,label:t(`Merge cell right`)}},{type:`button`,model:{commandName:`mergeTableCellDown`,label:t(`Merge cell down`)}},{type:`button`,model:{commandName:n?`mergeTableCellLeft`:`mergeTableCellRight`,label:t(`Merge cell left`)}},{type:`separator`},{type:`button`,model:{commandName:`splitTableCellVertically`,label:t(`Split cell vertically`)}},{type:`button`,model:{commandName:`splitTableCellHorizontally`,label:t(`Split cell horizontally`)}}];return this._prepareMergeSplitButtonDropdown(t(`Merge cells`),`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 1h15A1.5 1.5 0 0 1 19 2.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 17.5v-15A1.5 1.5 0 0 1 2.5 1zM2 2v16h16V2H2z" opacity=".6"/><path d="M7 2h1v16H7V2zm5 0h1v7h-1V2zm6 5v1H2V7h16zM8 12v1H2v-1h6z" opacity=".6"/><path d="M7 7h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1 2v9h10V9H8z"/></svg>`,r,e)}))}_prepareDropdown(e,t,n,r){let i=this.editor,a=zp(r),o=this._fillDropdownWithListOptions(a,n);return a.buttonView.set({label:e,icon:t,tooltip:!0}),a.bind(`isEnabled`).toMany(o,`isEnabled`,((...e)=>e.some((e=>e)))),this.listenTo(a,`execute`,(e=>{i.execute(e.source.commandName),e.source instanceof go||i.editing.view.focus()})),a}_prepareMergeSplitButtonDropdown(e,t,n,r){let i=this.editor,a=zp(r,To),o=`mergeTableCells`,s=i.commands.get(o),c=this._fillDropdownWithListOptions(a,n);return a.buttonView.set({label:e,icon:t,tooltip:!0,isEnabled:!0}),a.bind(`isEnabled`).toMany([s,...c],`isEnabled`,((...e)=>e.some((e=>e)))),this.listenTo(a.buttonView,`execute`,(()=>{i.execute(o),i.editing.view.focus()})),this.listenTo(a,`execute`,(e=>{i.execute(e.source.commandName),i.editing.view.focus()})),a}_fillDropdownWithListOptions(e,t){let n=this.editor,r=[],i=new Ma;for(let e of t)sS(e,n,r,i);return Hp(e,i),r}}function sS(e,t,n,r){let i=e.model=new vm(e.model),{commandName:a,bindIsOn:o}=e.model;if(e.type===`button`||e.type===`switchbutton`){let e=t.commands.get(a);n.push(e),i.set({commandName:a}),i.bind(`isEnabled`).to(e),o&&i.bind(`isOn`).to(e,`value`)}i.set({withText:!0}),r.add(e)}var cS=i(6945);N()(cS.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),cS.Z.locals;class lS extends I{static get pluginName(){return`TableSelection`}static get requires(){return[Px,Px]}init(){let e=this.editor,t=e.model,n=e.editing.view;this.listenTo(t,`deleteContent`,((e,t)=>this._handleDeleteContent(e,t)),{priority:`high`}),this.listenTo(n.document,`insertText`,((e,t)=>this._handleInsertTextEvent(e,t)),{priority:`high`}),this._defineSelectionConverter(),this._enablePluginDisabling()}getSelectedTableCells(){let e=this.editor.plugins.get(Px),t=this.editor.model.document.selection,n=e.getSelectedTableCells(t);return n.length==0?null:n}getSelectionAsFragment(){let e=this.editor.plugins.get(Px),t=this.getSelectedTableCells();return t?this.editor.model.change((n=>{let r=n.createDocumentFragment(),{first:i,last:a}=e.getColumnIndexes(t),{first:o,last:s}=e.getRowIndexes(t),c=t[0].findAncestor(`table`),l=s,u=a;if(e.isSelectionRectangular(t)){let e={firstColumn:i,lastColumn:a,firstRow:o,lastRow:s};l=Ex(c,e),u=Dx(c,e)}let d=_x(c,{startRow:o,startColumn:i,endRow:l,endColumn:u},n);return n.insert(d,r,0),r})):null}setCellSelection(e,t){let n=this._getCellsToSelect(e,t);this.editor.model.change((e=>{e.setSelection(n.cells.map((t=>e.createRangeOn(t))),{backward:n.backward})}))}getFocusCell(){let e=[...this.editor.model.document.selection.getRanges()].pop().getContainedElement();return e&&e.is(`element`,`tableCell`)?e:null}getAnchorCell(){let e=M(this.editor.model.document.selection.getRanges()).getContainedElement();return e&&e.is(`element`,`tableCell`)?e:null}_defineSelectionConverter(){let e=this.editor,t=new Set;e.conversion.for(`editingDowncast`).add((e=>e.on(`selection`,((e,n,r)=>{let i=r.writer;(function(e){for(let n of t)e.removeClass(`ck-editor__editable_selected`,n);t.clear()})(i);let a=this.getSelectedTableCells();if(!a)return;for(let e of a){let n=r.mapper.toViewElement(e);i.addClass(`ck-editor__editable_selected`,n),t.add(n)}let o=r.mapper.toViewElement(a[a.length-1]);i.setSelection(o,0)}),{priority:`lowest`})))}_enablePluginDisabling(){let e=this.editor;this.on(`change:isEnabled`,(()=>{if(!this.isEnabled){let t=this.getSelectedTableCells();if(!t)return;e.model.change((n=>{let r=n.createPositionAt(t[0],0),i=e.model.schema.getNearestSelectionRange(r);n.setSelection(i)}))}}))}_handleDeleteContent(e,t){let n=this.editor.plugins.get(Px),[r,i]=t,a=this.editor.model,o=!i||i.direction==`backward`,s=n.getSelectedTableCells(r);s.length&&(e.stop(),a.change((e=>{let t=s[o?s.length-1:0];a.change((e=>{for(let t of s)a.deleteContent(e.createSelection(t,`in`))}));let n=a.schema.getNearestSelectionRange(e.createPositionAt(t,0));r.is(`documentSelection`)?e.setSelection(n):r.setTo(n)})))}_handleInsertTextEvent(e,t){let n=this.editor,r=n.model.document.selection,i=this.getSelectedTableCells(r);if(!i)return;let a=n.editing.view,o=n.editing.mapper,s=i.map((e=>a.createRangeOn(o.toViewElement(e))));t.selection=a.createSelection(s)}_getCellsToSelect(e,t){let n=this.editor.plugins.get(`TableUtils`),r=n.getCellLocation(e),i=n.getCellLocation(t),a=Math.min(r.row,i.row),o=Math.max(r.row,i.row),s=Math.min(r.column,i.column),c=Math.max(r.column,i.column),l=Array(o-a+1).fill(null).map((()=>[])),u={startRow:a,endRow:o,startColumn:s,endColumn:c};for(let{row:t,cell:n}of new $(e.findAncestor(`table`),u))l[t-a].push(n);let d=i.row<r.row,f=i.column<r.column;return d&&l.reverse(),f&&l.forEach((e=>e.reverse())),{cells:l.flat(),backward:d||f}}}class uS extends I{static get pluginName(){return`TableClipboard`}static get requires(){return[lS,Px]}init(){let e=this.editor,t=e.editing.view.document;this.listenTo(t,`copy`,((e,t)=>this._onCopyCut(e,t))),this.listenTo(t,`cut`,((e,t)=>this._onCopyCut(e,t))),this.listenTo(e.model,`insertContent`,((e,t)=>this._onInsertContent(e,...t)),{priority:`high`}),this.decorate(`_replaceTableSlotCell`)}_onCopyCut(e,t){let n=this.editor.plugins.get(lS);if(!n.getSelectedTableCells()||e.name==`cut`&&this.editor.isReadOnly)return;t.preventDefault(),e.stop();let r=this.editor.data,i=this.editor.editing.view.document,a=r.toView(n.getSelectionAsFragment());i.fire(`clipboardOutput`,{dataTransfer:t.dataTransfer,content:a,method:e.name})}_onInsertContent(e,t,n){if(n&&!n.is(`documentSelection`))return;let r=this.editor.model,i=this.editor.plugins.get(Px),a=dS(t,r);if(!a)return;let o=i.getSelectionAffectedTableCells(r.document.selection);o.length?(e.stop(),r.change((e=>{let t={width:i.getColumns(a),height:i.getRows(a)},n=function(e,t,n,r){let i=e[0].findAncestor(`table`),a=r.getColumnIndexes(e),o=r.getRowIndexes(e),s={firstColumn:a.first,lastColumn:a.last,firstRow:o.first,lastRow:o.last},c=e.length===1;return c&&(s.lastRow+=t.height-1,s.lastColumn+=t.width-1,function(e,t,n,r){let i=r.getColumns(e),a=r.getRows(e);n>i&&r.insertColumns(e,{at:i,columns:n-i}),t>a&&r.insertRows(e,{at:a,rows:t-a})}(i,s.lastRow+1,s.lastColumn+1,r)),c||!r.isSelectionRectangular(e)?function(e,t,n){let{firstRow:r,lastRow:i,firstColumn:a,lastColumn:o}=t,s={first:r,last:i},c={first:a,last:o};pS(e,a,s,n),pS(e,o+1,s,n),fS(e,r,c,n),fS(e,i+1,c,n,r)}(i,s,n):(s.lastRow=Ex(i,s),s.lastColumn=Dx(i,s)),s}(o,t,e,i),r=n.lastRow-n.firstRow+1,s=n.lastColumn-n.firstColumn+1,c={startRow:0,startColumn:0,endRow:Math.min(r,t.height)-1,endColumn:Math.min(s,t.width)-1};a=_x(a,c,e);let l=o[0].findAncestor(`table`),u=this._replaceSelectedCellsWithPasted(a,t,l,n,e);if(this.editor.plugins.get(`TableSelection`).isEnabled){let t=i.sortRanges(u.map((t=>e.createRangeOn(t))));e.setSelection(t)}else e.setSelection(u[0],0)}))):Tx(a,i)}_replaceSelectedCellsWithPasted(e,t,n,r,i){let{width:a,height:o}=t,s=function(e,t,n){let r=Array(n).fill(null).map((()=>Array(t).fill(null)));for(let{column:t,row:n,cell:i}of new $(e))r[n][t]=i;return r}(e,a,o),c=[...new $(n,{startRow:r.firstRow,endRow:r.lastRow,startColumn:r.firstColumn,endColumn:r.lastColumn,includeAllSlots:!0})],l=[],u;for(let e of c){let{row:t,column:n}=e;n===r.firstColumn&&(u=e.getPositionBefore());let c=t-r.firstRow,d=n-r.firstColumn,f=s[c%o][d%a],p=f?i.cloneElement(f):null,m=this._replaceTableSlotCell(e,p,u,i);m&&(Sx(m,t,n,r.lastRow,r.lastColumn,i),l.push(m),u=i.createPositionAfter(m))}let d=parseInt(n.getAttribute(`headingRows`)||0),f=parseInt(n.getAttribute(`headingColumns`)||0),p=r.firstRow<d&&d<=r.lastRow,m=r.firstColumn<f&&f<=r.lastColumn;if(p){let e=fS(n,d,{first:r.firstColumn,last:r.lastColumn},i,r.firstRow);l.push(...e)}if(m){let e=pS(n,f,{first:r.firstRow,last:r.lastRow},i);l.push(...e)}return l}_replaceTableSlotCell(e,t,n,r){let{cell:i,isAnchor:a}=e;return a&&r.remove(i),t?(r.insert(t,n),t):null}getTableIfOnlyTableInContent(e,t){return dS(e,t)}}function dS(e,t){if(!e.is(`documentFragment`)&&!e.is(`element`))return null;if(e.is(`element`,`table`))return e;if(e.childCount==1&&e.getChild(0).is(`element`,`table`))return e.getChild(0);let n=t.createRangeIn(e);for(let e of n.getItems())if(e.is(`element`,`table`)){let r=t.createRange(n.start,t.createPositionBefore(e));if(t.hasContent(r,{ignoreWhitespaces:!0}))return null;let i=t.createRange(t.createPositionAfter(e),n.end);return t.hasContent(i,{ignoreWhitespaces:!0})?null:e}return null}function fS(e,t,n,r,i=0){if(!(t<1))return vx(e,t,i).filter((({column:e,cellWidth:t})=>mS(e,t,n))).map((({cell:e})=>yx(e,t,r)))}function pS(e,t,n,r){if(!(t<1))return bx(e,t).filter((({row:e,cellHeight:t})=>mS(e,t,n))).map((({cell:e,column:n})=>xx(e,n,t,r)))}function mS(e,t,n){let r=e+t-1,{first:i,last:a}=n;return e>=i&&e<=a||e<i&&r>=i}class hS extends I{static get pluginName(){return`TableKeyboard`}static get requires(){return[lS,Px]}init(){let e=this.editor.editing.view.document;this.listenTo(e,`arrowKey`,((...e)=>this._onArrowKey(...e)),{context:`table`}),this.listenTo(e,`tab`,((...e)=>this._handleTabOnSelectedTable(...e)),{context:`figure`}),this.listenTo(e,`tab`,((...e)=>this._handleTab(...e)),{context:[`th`,`td`]})}_handleTabOnSelectedTable(e,t){let n=this.editor,r=n.model.document.selection.getSelectedElement();r&&r.is(`element`,`table`)&&(t.preventDefault(),t.stopPropagation(),e.stop(),n.model.change((e=>{e.setSelection(e.createRangeIn(r.getChild(0).getChild(0)))})))}_handleTab(e,t){let n=this.editor,r=this.editor.plugins.get(Px),i=n.model.document.selection,a=!t.shiftKey,o=r.getTableCellsContainingSelection(i)[0];if(o||=this.editor.plugins.get(`TableSelection`).getFocusCell(),!o)return;t.preventDefault(),t.stopPropagation(),e.stop();let s=o.parent,c=s.parent,l=c.getChildIndex(s),u=s.getChildIndex(o),d=u===0;if(!a&&d&&l===0)return void n.model.change((e=>{e.setSelection(e.createRangeOn(c))}));let f=u===s.childCount-1,p=l===r.getRows(c)-1;if(a&&p&&f&&(n.execute(`insertTableRowBelow`),l===r.getRows(c)-1))return void n.model.change((e=>{e.setSelection(e.createRangeOn(c))}));let m;if(a&&f)m=c.getChild(l+1).getChild(0);else if(!a&&d){let e=c.getChild(l-1);m=e.getChild(e.childCount-1)}else m=s.getChild(u+(a?1:-1));n.model.change((e=>{e.setSelection(e.createRangeIn(m))}))}_onArrowKey(e,t){let n=this.editor,r=Da(t.keyCode,n.locale.contentLanguageDirection);this._handleArrowKeys(r,t.shiftKey)&&(t.preventDefault(),t.stopPropagation(),e.stop())}_handleArrowKeys(e,t){let n=this.editor.plugins.get(Px),r=this.editor.model,i=r.document.selection,a=[`right`,`down`].includes(e),o=n.getSelectedTableCells(i);if(o.length){let n;return n=t?this.editor.plugins.get(`TableSelection`).getFocusCell():a?o[o.length-1]:o[0],this._navigateFromCellInDirection(n,e,t),!0}let s=i.focus.findAncestor(`tableCell`);if(!s)return!1;if(!i.isCollapsed)if(t){if(i.isBackward==a&&!i.containsEntireContent(s))return!1}else{let e=i.getSelectedElement();if(!e||!r.schema.isObject(e))return!1}return!!this._isSelectionAtCellEdge(i,s,a)&&(this._navigateFromCellInDirection(s,e,t),!0)}_isSelectionAtCellEdge(e,t,n){let r=this.editor.model,i=this.editor.model.schema,a=n?e.getLastPosition():e.getFirstPosition();if(!i.getLimitElement(a).is(`element`,`tableCell`))return r.createPositionAt(t,n?`end`:0).isTouching(a);let o=r.createSelection(a);return r.modifySelection(o,{direction:n?`forward`:`backward`}),a.isEqual(o.focus)}_navigateFromCellInDirection(e,t,n=!1){let r=this.editor.model,i=e.findAncestor(`table`),a=[...new $(i,{includeAllSlots:!0})],{row:o,column:s}=a[a.length-1],c=a.find((({cell:t})=>t==e)),{row:l,column:u}=c;switch(t){case`left`:u--;break;case`up`:l--;break;case`right`:u+=c.cellWidth;break;case`down`:l+=c.cellHeight}if(l<0||l>o||u<0&&l<=0||u>s&&l>=o)return void r.change((e=>{e.setSelection(e.createRangeOn(i))}));u<0?(u=n?0:s,l--):u>s&&(u=n?s:0,l++);let d=a.find((e=>e.row==l&&e.column==u)).cell,f=[`right`,`down`].includes(t),p=this.editor.plugins.get(`TableSelection`);if(n&&p.isEnabled){let t=p.getAnchorCell()||e;p.setCellSelection(t,d)}else{let e=r.createPositionAt(d,f?0:`end`);r.change((t=>{t.setSelection(e)}))}}}class gS extends ml{constructor(e){super(e),this.domEventType=[`mousemove`,`mouseleave`]}onDomEvent(e){this.fire(e.type,e)}}class _S extends I{static get pluginName(){return`TableMouse`}static get requires(){return[lS,Px]}init(){this.editor.editing.view.addObserver(gS),this._enableShiftClickSelection(),this._enableMouseDragSelection()}_enableShiftClickSelection(){let e=this.editor,t=e.plugins.get(Px),n=!1,r=e.plugins.get(lS);this.listenTo(e.editing.view.document,`mousedown`,((i,a)=>{let o=e.model.document.selection;if(!this.isEnabled||!r.isEnabled||!a.domEvent.shiftKey)return;let s=r.getAnchorCell()||t.getTableCellsContainingSelection(o)[0];if(!s)return;let c=this._getModelTableCellFromDomEvent(a);c&&vS(s,c)&&(n=!0,r.setCellSelection(s,c),a.preventDefault())})),this.listenTo(e.editing.view.document,`mouseup`,(()=>{n=!1})),this.listenTo(e.editing.view.document,`selectionChange`,(e=>{n&&e.stop()}),{priority:`highest`})}_enableMouseDragSelection(){let e=this.editor,t,n,r=!1,i=!1,a=e.plugins.get(lS);this.listenTo(e.editing.view.document,`mousedown`,((e,n)=>{this.isEnabled&&a.isEnabled&&(n.domEvent.shiftKey||n.domEvent.ctrlKey||n.domEvent.altKey||(t=this._getModelTableCellFromDomEvent(n)))})),this.listenTo(e.editing.view.document,`mousemove`,((e,o)=>{if(!o.domEvent.buttons||!t)return;let s=this._getModelTableCellFromDomEvent(o);s&&vS(t,s)&&(n=s,r||n==t||(r=!0)),r&&(i=!0,a.setCellSelection(t,n),o.preventDefault())})),this.listenTo(e.editing.view.document,`mouseup`,(()=>{r=!1,i=!1,t=null,n=null})),this.listenTo(e.editing.view.document,`selectionChange`,(e=>{i&&e.stop()}),{priority:`highest`})}_getModelTableCellFromDomEvent(e){let t=e.target,n=this.editor.editing.view.createPositionAt(t,0);return this.editor.editing.mapper.toModelPosition(n).parent.findAncestor(`tableCell`,{includeSelf:!0})}}function vS(e,t){return e.parent.parent==t.parent.parent}var yS=i(6306);N()(yS.Z,{injectType:`singletonStyleTag`,attributes:{"data-cke":!0},insert:`head`,singleton:!0}),yS.Z.locals;function bS(e){let t=e.getSelectedElement();return t&&SS(t)?t:null}function xS(e){let t=e.getFirstPosition();if(!t)return null;let n=t.parent;for(;n;){if(n.is(`element`)&&SS(n))return n;n=n.parent}return null}function SS(e){return!!e.getCustomProperty(`table`)&&Z(e)}let CS={autoRefresh:!0},wS=36e5;class TS{constructor(e,t=CS){if(!e)throw new y(`token-missing-token-url`,this);t.initValue&&this._validateTokenValue(t.initValue),this.set(`value`,t.initValue),this._refresh=typeof e==`function`?e:()=>{return t=e,new Promise(((e,n)=>{let r=new XMLHttpRequest;r.open(`GET`,t),r.addEventListener(`load`,(()=>{let t=r.status,i=r.response;return t<200||t>299?n(new y(`token-cannot-download-new-token`,null)):e(i)})),r.addEventListener(`error`,(()=>n(Error(`Network Error`)))),r.addEventListener(`abort`,(()=>n(Error(`Abort`)))),r.send()}));var t},this._options=Object.assign({},CS,t)}init(){return new Promise(((e,t)=>{this.value?(this._options.autoRefresh&&this._registerRefreshTokenTimeout(),e(this)):this.refreshToken().then(e).catch(t)}))}refreshToken(){return this._refresh().then((e=>{this._validateTokenValue(e),this.set(`value`,e),this._options.autoRefresh&&this._registerRefreshTokenTimeout()})).then((()=>this))}destroy(){clearTimeout(this._tokenRefreshTimeout)}_validateTokenValue(e){let t=typeof e==`string`,n=!/^".*"$/.test(e),r=t&&e.split(`.`).length===3;if(!n||!r)throw new y(`token-not-in-jwt-format`,this)}_registerRefreshTokenTimeout(){let e=this._getTokenRefreshTimeoutTime();clearTimeout(this._tokenRefreshTimeout),this._tokenRefreshTimeout=setTimeout((()=>{this.refreshToken()}),e)}_getTokenRefreshTimeoutTime(){try{let[,e]=this.value.split(`.`),{exp:t}=JSON.parse(atob(e));return t?Math.floor((1e3*t-Date.now())/2):wS}catch{return wS}}static create(e,t=CS){return new TS(e,t).init()}}m(TS,C);let ES=TS,DS=/^data:(\S*?);base64,/;class OS{constructor(e,t,n){if(!e)throw new y(`fileuploader-missing-file`,null);if(!t)throw new y(`fileuploader-missing-token`,null);if(!n)throw new y(`fileuploader-missing-api-address`,null);this.file=function(e){if(typeof e!=`string`)return!1;let t=e.match(DS);return!(!t||!t.length)}(e)?function(e,t=512){try{let n=e.match(DS)[1],r=atob(e.replace(DS,``)),i=[];for(let e=0;e<r.length;e+=t){let n=r.slice(e,e+t),a=Array(n.length);for(let e=0;e<n.length;e++)a[e]=n.charCodeAt(e);i.push(new Uint8Array(a))}return new Blob(i,{type:n})}catch{throw new y(`fileuploader-decoding-image-data-error`,null)}}(e):e,this._token=t,this._apiAddress=n}onProgress(e){return this.on(`progress`,((t,n)=>e(n))),this}onError(e){return this.once(`error`,((t,n)=>e(n))),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){let e=new XMLHttpRequest;e.open(`POST`,this._apiAddress),e.setRequestHeader(`Authorization`,this._token.value),e.responseType=`json`,this.xhr=e}_attachXHRListeners(){let e=this,t=this.xhr;function n(t){return()=>e.fire(`error`,t)}t.addEventListener(`error`,n(`Network Error`)),t.addEventListener(`abort`,n(`Abort`)),t.upload&&t.upload.addEventListener(`progress`,(e=>{e.lengthComputable&&this.fire(`progress`,{total:e.total,uploaded:e.loaded})})),t.addEventListener(`load`,(()=>{let e=t.status,n=t.response;if(e<200||e>299)return this.fire(`error`,n.message||n.error)}))}_sendRequest(){let e=new FormData,t=this.xhr;return e.append(`file`,this.file),new Promise(((n,r)=>{t.addEventListener(`load`,(()=>{let e=t.status,i=t.response;return e<200||e>299?i.message?r(new y(`fileuploader-uploading-data-failed`,this,{message:i.message})):r(i.error):n(i)})),t.addEventListener(`error`,(()=>r(Error(`Network Error`)))),t.addEventListener(`abort`,(()=>r(Error(`Abort`)))),t.send(e)}))}}m(OS,x);class kS{constructor(e,t){if(!e)throw new y(`uploadgateway-missing-token`,null);if(!t)throw new y(`uploadgateway-missing-api-address`,null);this._token=e,this._apiAddress=t}upload(e){return new OS(e,this._token,this._apiAddress)}}class AS extends Lo{static get pluginName(){return`CloudServicesCore`}createToken(e,t){return new ES(e,t)}createUploadGateway(e,t){return new kS(e,t)}}class jS extends Nm{}jS.builtinPlugins=[class extends I{static get requires(){return[mg,wh,bg,Oh,$m,Ag]}static get pluginName(){return`Essentials`}},class extends I{static get requires(){return[Mg]}static get pluginName(){return`CKFinderUploadAdapter`}init(){let e=this.editor.config.get(`ckfinder.uploadUrl`);e&&(this.editor.plugins.get(Mg).createUploadAdapter=t=>new Rg(t,e,this.editor.t))}},class extends I{static get requires(){return[Qm]}static get pluginName(){return`Autoformat`}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats(),this._addCodeBlockAutoformats(),this._addHorizontalLineAutoformats()}_addListAutoformats(){let e=this.editor.commands;e.get(`bulletedList`)&&zg(this.editor,this,/^[*-]\s$/,`bulletedList`),e.get(`numberedList`)&&zg(this.editor,this,/^1[.|)]\s$/,`numberedList`),e.get(`todoList`)&&zg(this.editor,this,/^\[\s?\]\s$/,`todoList`),e.get(`checkTodoList`)&&zg(this.editor,this,/^\[\s?x\s?\]\s$/,(()=>{this.editor.execute(`todoList`),this.editor.execute(`checkTodoList`)}))}_addBasicStylesAutoformats(){let e=this.editor.commands;if(e.get(`bold`)){let e=Hg(this.editor,`bold`);Bg(this.editor,this,/(?:^|\s)(\*\*)([^*]+)(\*\*)$/g,e),Bg(this.editor,this,/(?:^|\s)(__)([^_]+)(__)$/g,e)}if(e.get(`italic`)){let e=Hg(this.editor,`italic`);Bg(this.editor,this,/(?:^|\s)(\*)([^*_]+)(\*)$/g,e),Bg(this.editor,this,/(?:^|\s)(_)([^_]+)(_)$/g,e)}if(e.get(`code`)){let e=Hg(this.editor,`code`);Bg(this.editor,this,/(`)([^`]+)(`)$/g,e)}if(e.get(`strikethrough`)){let e=Hg(this.editor,`strikethrough`);Bg(this.editor,this,/(~~)([^~]+)(~~)$/g,e)}}_addHeadingAutoformats(){let e=this.editor.commands.get(`heading`);e&&e.modelElements.filter((e=>e.match(/^heading[1-6]$/))).forEach((t=>{let n=t[7],r=RegExp(`^(#{${n}})\\s$`);zg(this.editor,this,r,(()=>{if(!e.isEnabled||e.value===t)return!1;this.editor.execute(`heading`,{value:t})}))}))}_addBlockQuoteAutoformats(){this.editor.commands.get(`blockQuote`)&&zg(this.editor,this,/^>\s$/,`blockQuote`)}_addCodeBlockAutoformats(){let e=this.editor,t=e.model.document.selection;e.commands.get(`codeBlock`)&&zg(e,this,/^```$/,(()=>{if(t.getFirstPosition().parent.is(`element`,`listItem`))return!1;this.editor.execute(`codeBlock`,{usePreviousLanguageChoice:!0})}))}_addHorizontalLineAutoformats(){this.editor.commands.get(`horizontalLine`)&&zg(this.editor,this,/^---$/,`horizontalLine`)}},class extends I{static get requires(){return[Gg,qg]}static get pluginName(){return`Bold`}},class extends I{static get requires(){return[Yg,Zg]}static get pluginName(){return`Italic`}},class extends I{static get requires(){return[n_,i_]}static get pluginName(){return`BlockQuote`}},class extends I{static get pluginName(){return`CKBox`}static get requires(){return[g_,a_]}},class extends I{static get pluginName(){return`CKFinder`}static get requires(){return[`Link`,`CKFinderUploadAdapter`,C_,b_]}},class extends Lo{static get pluginName(){return`CloudServices`}static get requires(){return[AS]}init(){let e=this.context.config.get(`cloudServices`)||{};for(let t in e)this[t]=e[t];if(this._tokens=new Map,this.tokenUrl)return this.token=this.context.plugins.get(`CloudServicesCore`).createToken(this.tokenUrl),this._tokens.set(this.tokenUrl,this.token),this.token.init();this.token=null}registerTokenUrl(e){if(this._tokens.has(e))return Promise.resolve(this.getTokenFor(e));let t=this.context.plugins.get(`CloudServicesCore`).createToken(e);return this._tokens.set(e,t),t.init()}getTokenFor(e){let t=this._tokens.get(e);if(!t)throw new y(`cloudservices-token-not-registered`,this);return t}destroy(){super.destroy();for(let e of this._tokens.values())e.destroy()}},class extends I{static get requires(){return[w_,`ImageUpload`]}init(){let e=this.editor;e.plugins.has(`ImageBlockEditing`)||e.plugins.has(`ImageInlineEditing`)||b(`easy-image-image-feature-missing`,e)}static get pluginName(){return`EasyImage`}},class extends I{static get requires(){return[N_,F_]}static get pluginName(){return`Heading`}},class extends I{static get requires(){return[iv,ov]}static get pluginName(){return`Image`}},class extends I{static get requires(){return[lv,uv]}static get pluginName(){return`ImageCaption`}},class extends I{static get requires(){return[Ev,Ov]}static get pluginName(){return`ImageStyle`}},class extends I{static get requires(){return[tg,B_]}static get pluginName(){return`ImageToolbar`}afterInit(){let e=this.editor,t=e.t,n=e.plugins.get(tg),r=e.plugins.get(`ImageUtils`);var i;n.register(`image`,{ariaLabel:t(`Image toolbar`),items:(i=e.config.get(`image.toolbar`)||[],i.map((e=>S(e)?e.name:e))),getRelatedElement:e=>r.getClosestSelectedImageWidget(e)})}},class extends I{static get pluginName(){return`ImageUpload`}static get requires(){return[Kv,Fv,zv]}},class extends I{static get pluginName(){return`Indent`}static get requires(){return[Jv,Zv]}},class extends I{static get requires(){return[Fy,Wy,qy]}static get pluginName(){return`Link`}},class extends I{static get requires(){return[wb,Eb]}static get pluginName(){return`List`}},class extends I{static get requires(){return[Fb,Bb,Lb,$h]}static get pluginName(){return`MediaEmbed`}},k_,class extends I{static get pluginName(){return`PasteFromOffice`}static get requires(){return[Rm]}init(){let e=this.editor,t=e.editing.view.document,n=[];n.push(new ex(t)),n.push(new Yb(t)),e.plugins.get(`ClipboardPipeline`).on(`inputTransformation`,((r,i)=>{if(i._isTransformedWithPasteFromOffice||e.model.document.selection.getFirstPosition().parent.is(`element`,`codeBlock`))return;let a=i.dataTransfer.getData(`text/html`),o=n.find((e=>e.isActive(a)));o&&(i._parsedData=nx(a,t.stylesProcessor),o.execute(i),i._isTransformedWithPasteFromOffice=!0)}),{priority:`high`})}},class extends I{static get requires(){return[ev,B_]}static get pluginName(){return`PictureEditing`}afterInit(){let e=this.editor;e.plugins.has(`ImageBlockEditing`)&&e.model.schema.extend(`imageBlock`,{allowAttributes:[`sources`]}),e.plugins.has(`ImageInlineEditing`)&&e.model.schema.extend(`imageInline`,{allowAttributes:[`sources`]}),this._setupConversion(),this._setupImageUploadEditingIntegration()}_setupConversion(){let e=this.editor,t=e.conversion,n=e.plugins.get(`ImageUtils`);t.for(`upcast`).add(function(e){let t=[`srcset`,`media`,`type`,`sizes`];return e=>{e.on(`element:picture`,n)};function n(n,r,i){let a=r.viewItem;if(!i.consumable.test(a,{name:!0}))return;let o=new Map;for(let e of a.getChildren())if(e.is(`element`,`source`)){let n={};for(let r of t)e.hasAttribute(r)&&i.consumable.test(e,{attributes:r})&&(n[r]=e.getAttribute(r));Object.keys(n).length&&o.set(e,n)}let s=e.findViewImgElement(a);if(!s)return;let c=r.modelCursor.parent;if(!c.is(`element`,`imageBlock`)){let e=i.convertItem(s,r.modelCursor);r.modelRange=e.modelRange,r.modelCursor=e.modelCursor,c=M(e.modelRange.getItems())}i.consumable.consume(a,{name:!0});for(let[e,t]of o)i.consumable.consume(e,{attributes:Object.keys(t)});o.size&&i.writer.setAttribute(`sources`,Array.from(o.values()),c),i.convertChildren(a,c)}}(n)),t.for(`downcast`).add(function(e){return e=>{e.on(`attribute:sources:imageBlock`,t),e.on(`attribute:sources:imageInline`,t)};function t(t,n,r){if(!r.consumable.consume(n.item,t.name))return;let i=r.writer,a=r.mapper.toViewElement(n.item),o=e.findViewImgElement(a);if(n.attributeNewValue&&n.attributeNewValue.length){let e=i.createContainerElement(`picture`,null,n.attributeNewValue.map((e=>i.createEmptyElement(`source`,e)))),t=[],r=o.parent;for(;r&&r.is(`attributeElement`);){let e=r.parent;i.unwrap(i.createRangeOn(o),r),t.unshift(r),r=e}i.insert(i.createPositionBefore(o),e),i.move(i.createRangeOn(o),i.createPositionAt(e,`end`));for(let n of t)i.wrap(i.createRangeOn(e),n)}else if(o.parent.is(`element`,`picture`)){let e=o.parent;i.move(i.createRangeOn(o),i.createPositionBefore(e)),i.remove(e)}}}(n))}_setupImageUploadEditingIntegration(){let e=this.editor;e.plugins.has(`ImageUploadEditing`)&&this.listenTo(e.plugins.get(`ImageUploadEditing`),`uploadComplete`,((t,{imageElement:n,data:r})=>{let i=r.sources;i&&e.model.change((e=>{e.setAttributes({sources:i},n)}))}))}},class extends I{static get requires(){return[nS,oS,lS,_S,hS,uS,$h]}static get pluginName(){return`Table`}},class extends I{static get requires(){return[tg]}static get pluginName(){return`TableToolbar`}afterInit(){let e=this.editor,t=e.t,n=e.plugins.get(tg),r=e.config.get(`table.contentToolbar`),i=e.config.get(`table.tableToolbar`);r&&n.register(`tableContent`,{ariaLabel:t(`Table toolbar`),items:r,getRelatedElement:xS}),i&&n.register(`table`,{ariaLabel:t(`Table toolbar`),items:i,getRelatedElement:bS})}},class extends I{static get requires(){return[`Delete`,`Input`]}static get pluginName(){return`TextTransformation`}constructor(e){super(e),e.config.define(`typing`,{transformations:{include:fh}})}init(){let e=this.editor.model.document.selection;e.on(`change:range`,(()=>{this.isEnabled=!e.anchor.parent.is(`element`,`codeBlock`)})),this._enableTransformationWatchers()}_enableTransformationWatchers(){let e=this.editor,t=e.model,n=e.plugins.get(`Delete`),r=function(e){let t=e.extra||[],n=e.remove||[],r=e=>!n.includes(e);return function(e){let t=new Set;for(let n of e)if(typeof n==`string`&&dh[n])for(let e of dh[n])t.add(e);else t.add(n);return Array.from(t)}(e.include.concat(t).filter(r)).filter(r).map((e=>typeof e==`string`&&uh[e]?uh[e]:e)).filter((e=>typeof e==`object`)).map((e=>({from:ph(e.from),to:mh(e.to)})))}(e.config.get(`typing.transformations`)),i=new th(e.model,(e=>{for(let t of r)if(t.from.test(e))return{normalizedTransformation:t}}));i.on(`matched:data`,((e,r)=>{if(!r.batch.isTyping)return;let{from:i,to:a}=r.normalizedTransformation,o=i.exec(r.text),s=a(o.slice(1)),c=r.range,l=o.index;t.enqueueChange((e=>{for(let n=1;n<o.length;n++){let r=o[n],i=s[n-1];if(i==null){l+=r.length;continue}let a=c.start.getShiftedBy(l),u=t.createRange(a,a.getShiftedBy(r.length)),d=hh(a);t.insertContent(e.createText(i,d),u),l+=i.length}t.enqueueChange((()=>{n.requestUndoOnBackspace()}))}))})),i.bind(`isEnabled`).to(this)}}],jS.defaultConfig={toolbar:{items:[`heading`,`|`,`bold`,`italic`,`link`,`bulletedList`,`numberedList`,`|`,`outdent`,`indent`,`|`,`uploadImage`,`blockQuote`,`insertTable`,`mediaEmbed`,`undo`,`redo`]},image:{toolbar:[`imageStyle:inline`,`imageStyle:block`,`imageStyle:side`,`|`,`toggleImageCaption`,`imageTextAlternative`]},table:{contentToolbar:[`tableColumn`,`tableRow`,`mergeTableCells`]},language:`en`}})(),a=a.default})()))}));export{n,r as t};