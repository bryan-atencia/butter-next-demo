(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8SpD":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return g})),n.d(t,"default",(function(){return E}));var r,a=n("q1tI"),o=n.n(a),c=(n("ls82"),n("H2TA")),i=n("tRbT"),l=n("ofer"),u=(n("8Kt/"),n("YFqc")),s=n.n(u),f=n("CafY");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=!0,E=Object(c.a)((function(e){return{image:{height:"250px",width:"250px",borderRadius:"50%",backgroundColor:"#d5d5d5"},stepsGrid:{width:"100%",margin:"50px auto"},tileActionText:{borderBottom:"1px solid",width:"fit-content",margin:"20px 10px 0 0",textTransform:"uppercase"},tileTitle:{margin:"15px auto 0",fontWeight:"bold"},tileSubTitle:{margin:"15px 0"}}}))(r=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,n,r,a=b(c);function c(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).renderSteps=function(){var t=e.props.subcategoryData,n=e.props.classes;return o.a.createElement(i.a,{container:!0,className:n.stepsGrid},t.steps&&t.steps.map((function(e,t){return o.a.createElement(i.a,{item:!0,xs:12,sm:4,key:t},o.a.createElement(i.a,null,o.a.createElement(i.a,{className:n.image})),o.a.createElement(i.a,null,o.a.createElement(l.a,{className:n.tileTitle},e.title),o.a.createElement(l.a,{className:n.tileSubTitle,style:{width:"200px"}},e.description)))})))},e}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.subcategoryData,n=e.classes;return(o.a.createElement(f.a,null,t&&o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{style:{maxWidth:"900px"}},o.a.createElement(l.a,{variant:"h2"},t.pagetitle),o.a.createElement(l.a,{variant:"h6"},t.pagedescription),o.a.createElement(i.a,{container:!0},o.a.createElement(l.a,{className:n.tileActionText},t.pageactionlink),o.a.createElement(s.a,{href:"/"},o.a.createElement(l.a,{variant:"body1",className:n.tileActionText},"HOME")),o.a.createElement(s.a,{href:t.category?"/category/".concat(t.category.id):"/"},o.a.createElement(l.a,{variant:"body1",className:n.tileActionText},"BACK TO CATEGORY")))),o.a.createElement(i.a,null,this.renderSteps()))))}}])&&m(t.prototype,n),r&&m(t,r),c}(o.a.Component))||r},u8yB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/subcategory/[category]/[id]",function(){return n("8SpD")}])}},[["u8yB",0,2,1,3]]]);