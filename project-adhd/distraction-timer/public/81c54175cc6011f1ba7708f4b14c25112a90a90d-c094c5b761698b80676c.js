(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+/SI":function(t,e,r){"use strict";var o=r("q1tI"),n=r.n(o),a=r("r9M9");e.a=function(t){var e=t.timerName,r=t.distraction,i=t.paused,l=Object(o.useState)(0),s=(l[0],l[1]);return Object(o.useEffect)((function(){var t=setInterval((function(){s(Date.now())}),1e3);return function(){return clearInterval(t)}}),[]),n.a.createElement(a.b.Consumer,null,(function(t){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",null,e),n.a.createElement("div",{className:"timer-face"},function(t){var e;function o(t){return t<10&&(t="0"+t),t}e=r?function(t,e){for(var r=[],o=0;o<t.length;o+=2){var n;n=t[o]>=t[o+1]?o:o+1,r.push(t[o],t[n])}var a=[];for(o="tasks"===e?0:1;o<r.length-1;o+=2){var i=r[o+1]-r[o];a.push(i)}return a=0===a.length?0:a.reduce((function(t,e){return t+e}))}(t,"distractions"):i?t[t.length-1]-t[0]:Date.now()-t[0];var a=Math.floor(e%864e5/36e5),l=o(Math.floor(e%36e5/6e4)),s=o(Math.floor(e%6e4/1e3));return n.a.createElement("p",{id:"time"},a,":",l,":",s)}(t.timedEvents)))}))}},OsJn:function(t,e,r){"use strict";r.d(e,"a",(function(){return I}));var o=r("q1tI"),n=r("XDgv"),a=r.n(n),i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function l(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var s=function(){return(s=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function u(t,e,r,o){return new(r||(r=Promise))((function(n,a){function i(t){try{s(o.next(t))}catch(e){a(e)}}function l(t){try{s(o.throw(t))}catch(e){a(e)}}function s(t){t.done?n(t.value):new r((function(e){e(t.value)})).then(i,l)}s((o=o.apply(t,e||[])).next())}))}function c(t,e){var r,o,n,a,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(6===a[0]&&i.label<n[1]){i.label=n[1],n=a;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(a);break}n[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(l){a=[6,l],o=0}finally{r=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}var p={graph_id:null,legend_toggle:!1,graphID:null,options:{colors:null},data:null,rows:null,columns:null,diffdata:null,chartEvents:null,legendToggle:!1,chartActions:null,getChartWrapper:function(t,e){},getChartEditor:null,className:"",style:{},formatters:null,spreadSheetUrl:null,spreadSheetQueryParameters:{headers:1,gid:1},rootProps:{},chartWrapperParams:{},controls:null,render:null,toolbarItems:null,toolbarID:null},h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleGoogleChartsLoaderScriptLoaded=function(t){var r=e.props,o=r.chartVersion,n=r.chartPackages,a=r.chartLanguage,i=r.mapsApiKey,l=r.onLoad;t.charts.load(o||"current",{packages:n||["corechart","controls"],language:a||"en",mapsApiKey:i}),t.charts.setOnLoadCallback((function(){l(t)}))},e}return l(e,t),e.prototype.shouldComponentUpdate=function(t){return t.chartPackages===this.props.chartPackages},e.prototype.render=function(){var t=this,e=this.props.onError;return Object(o.createElement)(a.a,{url:"https://www.gstatic.com/charts/loader.js",onError:e,onLoad:function(){var e=window;e.google&&t.handleGoogleChartsLoaderScriptLoaded(e.google)}})},e}(o.Component),d=0,g=function(){return"reactgooglegraph-"+(d+=1)},f=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],v=function(t,e,r){return void 0===r&&(r={}),u(void 0,void 0,void 0,(function(){return c(this,(function(o){return[2,new Promise((function(o,n){var a=r.headers?"headers="+r.headers:"headers=0",i=r.query?"&tq="+encodeURIComponent(r.query):"",l=r.gid?"&gid="+r.gid:"",s=r.sheet?"&sheet="+r.sheet:"",u=r.access_token?"&access_token="+r.access_token:"",c=e+"/gviz/tq?"+(""+a+l+s+i+u);new t.visualization.Query(c).send((function(t){t.isError()?n("Error in query:  "+t.getMessage()+" "+t.getDetailedMessage()):o(t.getDataTable())}))}))]}))}))},m=Object(o.createContext)(p),C=m.Provider,b=m.Consumer,y=function(t){var e=t.children,r=t.value;return Object(o.createElement)(C,{value:r},e)},w=function(t){var e=t.render;return Object(o.createElement)(b,null,(function(t){return e(t)}))},E=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={hiddenColumns:[]},e.listenToLegendToggle=function(){var t=e.props,r=t.google,o=t.googleChartWrapper;r.visualization.events.addListener(o,"select",(function(){var t=o.getChart().getSelection(),r=o.getDataTable();if(0!==t.length&&null===t[0].row&&null!==r){var n=t[0].column,a=e.getColumnID(r,n);e.state.hiddenColumns.includes(a)?e.setState((function(t){return s({},t,{hiddenColumns:t.hiddenColumns.filter((function(t){return t!==a})).slice()})})):e.setState((function(t){return s({},t,{hiddenColumns:t.hiddenColumns.concat([a])})}))}}))},e.applyFormatters=function(t,r){for(var o=e.props.google,n=0,a=r;n<a.length;n++){var i=a[n];switch(i.type){case"ArrowFormat":(l=new o.visualization.ArrowFormat(i.options)).format(t,i.column);break;case"BarFormat":(l=new o.visualization.BarFormat(i.options)).format(t,i.column);break;case"ColorFormat":for(var l=new o.visualization.ColorFormat(i.options),s=0,u=i.ranges;s<u.length;s++){var c=u[s];l.addRange.apply(l,c)}l.format(t,i.column);break;case"DateFormat":(l=new o.visualization.DateFormat(i.options)).format(t,i.column);break;case"NumberFormat":(l=new o.visualization.NumberFormat(i.options)).format(t,i.column);break;case"PatternFormat":(l=new o.visualization.PatternFormat(i.options)).format(t,i.column)}}},e.getColumnID=function(t,e){return t.getColumnId(e)||t.getColumnLabel(e)},e.draw=function(t){var r=t.data,o=t.diffdata,n=t.rows,a=t.columns,i=t.options,l=t.legend_toggle,s=t.legendToggle,p=t.chartType,h=t.formatters,d=t.spreadSheetUrl,g=t.spreadSheetQueryParameters;return u(e,void 0,void 0,(function(){var t,e,u,f,m,C,b,y,w,E,O,D,T,P;return c(this,(function(c){switch(c.label){case 0:return t=this.props,e=t.google,u=t.googleChartWrapper,m=null,null!==o&&(C=e.visualization.arrayToDataTable(o.old),b=e.visualization.arrayToDataTable(o.new),m=e.visualization[p].prototype.computeDiff(C,b)),null===r?[3,1]:(f=Array.isArray(r)?e.visualization.arrayToDataTable(r):new e.visualization.DataTable(r),[3,5]);case 1:return null===n||null===a?[3,2]:(f=e.visualization.arrayToDataTable([a].concat(n)),[3,5]);case 2:return null===d?[3,4]:[4,v(e,d,g)];case 3:return f=c.sent(),[3,5];case 4:f=e.visualization.arrayToDataTable([]),c.label=5;case 5:for(y=f.getNumberOfColumns(),w=0;w<y;w+=1)E=this.getColumnID(f,w),this.state.hiddenColumns.includes(E)&&(O=f.getColumnLabel(w),D=f.getColumnId(w),T=f.getColumnType(w),f.removeColumn(w),f.addColumn({label:O,id:D,type:T}));return P=u.getChart(),"Timeline"===u.getChartType()&&P&&P.clearChart(),u.setChartType(p),u.setOptions(i),u.setDataTable(f),u.draw(),null!==this.props.googleChartDashboard&&this.props.googleChartDashboard.draw(f),null!==m&&(u.setDataTable(m),u.draw()),null!==h&&(this.applyFormatters(f,h),u.setDataTable(f),u.draw()),!0!==s&&!0!==l||this.grayOutHiddenColumns({options:i}),[2]}}))}))},e.grayOutHiddenColumns=function(t){var r=t.options,o=e.props.googleChartWrapper,n=o.getDataTable();if(null!==n){var a=n.getNumberOfColumns();if(!1!==e.state.hiddenColumns.length>0){var i=Array.from({length:a-1}).map((function(t,o){var a=e.getColumnID(n,o+1);return e.state.hiddenColumns.includes(a)?"#CCCCCC":void 0!==r.colors&&null!==r.colors?r.colors[o]:f[o]}));o.setOptions(s({},r,{colors:i})),o.draw()}}},e.onResize=function(){e.props.googleChartWrapper.draw()},e}return l(e,t),e.prototype.componentDidMount=function(){this.draw(this.props),window.addEventListener("resize",this.onResize),(this.props.legend_toggle||this.props.legendToggle)&&this.listenToLegendToggle()},e.prototype.componentWillUnmount=function(){var t=this.props,e=t.google,r=t.googleChartWrapper;window.removeEventListener("resize",this.onResize),e.visualization.events.removeAllListeners(r),"Timeline"===r.getChartType()&&r.getChart()&&r.getChart().clearChart()},e.prototype.componentDidUpdate=function(){this.draw(this.props)},e.prototype.render=function(){return null},e}(o.Component),O=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),e.prototype.componentDidMount=function(){},e.prototype.componentWillUnmount=function(){},e.prototype.shouldComponentUpdate=function(){return!1},e.prototype.render=function(){var t=this.props,e=t.google,r=t.googleChartWrapper,n=t.googleChartDashboard;return Object(o.createElement)(w,{render:function(t){return Object(o.createElement)(E,s({},t,{google:e,googleChartWrapper:r,googleChartDashboard:n}))}})},e}(o.Component),D=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),e.prototype.shouldComponentUpdate=function(){return!1},e.prototype.listenToEvents=function(t){var e=this,r=t.chartEvents,o=t.google,n=t.googleChartWrapper;if(null!==r){o.visualization.events.removeAllListeners(n);for(var a=function(t){var r=t.eventName,a=t.callback;o.visualization.events.addListener(n,r,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];a({chartWrapper:n,props:e.props,google:o,eventArgs:t})}))},i=0,l=r;i<l.length;i++){a(l[i])}}},e.prototype.render=function(){var t=this,e=this.props,r=e.google,n=e.googleChartWrapper;return Object(o.createElement)(w,{render:function(e){return t.listenToEvents({chartEvents:e.chartEvents||null,google:r,googleChartWrapper:n}),null}})},e}(o.Component),T=0,P=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={googleChartWrapper:null,googleChartDashboard:null,googleChartControls:null,googleChartEditor:null,isReady:!1},e.graphID=null,e.dashboard_ref=Object(o.createRef)(),e.toolbar_ref=Object(o.createRef)(),e.getGraphID=function(){var t,r=e.props,o=r.graphID,n=r.graph_id;return t=null===o&&null===n?null===e.graphID?g():e.graphID:null!==o&&null===n?o:null!==n&&null===o?n:o,e.graphID=t,e.graphID},e.getControlID=function(t,e){return T+=1,void 0===t?"googlechart-control-"+e+"-"+T:t},e.addControls=function(t,r){var o=e.props,n=o.google,a=o.controls,i=null===a?null:a.map((function(t,r){var o=t.controlID,a=t.controlType,i=t.options,l=t.controlWrapperParams,u=e.getControlID(o,r);return{controlProp:t,control:new n.visualization.ControlWrapper(s({containerId:u,controlType:a,options:i},l))}}));if(null===i)return null;r.bind(i.map((function(t){return t.control})),t);for(var l=function(r){for(var o=r.control,a=r.controlProp.controlEvents,i=function(r){var a=r.callback,i=r.eventName;n.visualization.events.removeListener(o,i,a),n.visualization.events.addListener(o,i,(function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];a({chartWrapper:t,controlWrapper:o,props:e.props,google:n,eventArgs:r})}))},l=0,s=void 0===a?[]:a;l<s.length;l++){i(s[l])}},u=0,c=i;u<c.length;u++){l(c[u])}return i},e.renderChart=function(){var t=e.props,r=t.width,n=t.height,a=t.options,i=t.style,l=t.className,u=t.rootProps,c=t.google,p=s({height:n||a&&a.height,width:r||a&&a.width},i);return Object(o.createElement)("div",s({id:e.getGraphID(),style:p,className:l},u),e.state.isReady&&null!==e.state.googleChartWrapper?Object(o.createElement)(o.Fragment,null,Object(o.createElement)(O,{googleChartWrapper:e.state.googleChartWrapper,google:c,googleChartDashboard:e.state.googleChartDashboard}),Object(o.createElement)(D,{googleChartWrapper:e.state.googleChartWrapper,google:c})):null)},e.renderControl=function(t){return void 0===t&&(t=function(t){t.control,t.controlProp;return!0}),e.state.isReady&&null!==e.state.googleChartControls?Object(o.createElement)(o.Fragment,null,e.state.googleChartControls.filter((function(e){var r=e.controlProp,o=e.control;return t({control:o,controlProp:r})})).map((function(t){var e=t.control;t.controlProp;return Object(o.createElement)("div",{key:e.getContainerId(),id:e.getContainerId()})}))):null},e.renderToolBar=function(){return null===e.props.toolbarItems?null:Object(o.createElement)("div",{ref:e.toolbar_ref})},e}return l(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.options,r=t.google,o=t.chartType,n=t.chartWrapperParams,a=t.toolbarItems,i=t.getChartEditor,l=t.getChartWrapper,u=s({chartType:o,options:e,containerId:this.getGraphID()},n),c=new r.visualization.ChartWrapper(u);c.setOptions(e),l(c,r);var p=new r.visualization.Dashboard(this.dashboard_ref),h=this.addControls(c,p);null!==a&&r.visualization.drawToolbar(this.toolbar_ref.current,a);var d=null;null!==i&&i({chartEditor:d=new r.visualization.ChartEditor,chartWrapper:c,google:r}),this.setState({googleChartEditor:d,googleChartControls:h,googleChartDashboard:p,googleChartWrapper:c,isReady:!0})},e.prototype.componentDidUpdate=function(){if(null!==this.state.googleChartWrapper&&null!==this.state.googleChartDashboard&&null!==this.state.googleChartControls)for(var t=this.props.controls,e=0;e<t.length;e+=1){var r=t[e],o=r.controlType,n=r.options,a=r.controlWrapperParams;a&&"state"in a&&this.state.googleChartControls[e].control.setState(a.state),this.state.googleChartControls[e].control.setOptions(n),this.state.googleChartControls[e].control.setControlType(o)}},e.prototype.shouldComponentUpdate=function(t,e){return this.state.isReady!==e.isReady||t.controls!==this.props.controls},e.prototype.render=function(){var t=this.props,e=t.width,r=t.height,n=t.options,a=t.style,i=s({height:r||n&&n.height,width:e||n&&n.width},a);return null!==this.props.render?Object(o.createElement)("div",{ref:this.dashboard_ref,style:i},Object(o.createElement)("div",{ref:this.toolbar_ref,id:"toolbar"}),this.props.render({renderChart:this.renderChart,renderControl:this.renderControl,renderToolbar:this.renderToolBar})):Object(o.createElement)("div",{ref:this.dashboard_ref,style:i},this.renderControl((function(t){return"bottom"!==t.controlProp.controlPosition})),this.renderChart(),this.renderControl((function(t){return"bottom"===t.controlProp.controlPosition})),this.renderToolBar())},e}(o.Component),I=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._isMounted=!1,e.state={loadingStatus:"loading",google:null},e.onLoad=function(t){if(e.isFullyLoaded(t))e.onSuccess(t);else var r=setInterval((function(){var t=window.google;e._isMounted?t&&e.isFullyLoaded(t)&&(clearInterval(r),e.onSuccess(t)):clearInterval(r)}),1e3)},e.onSuccess=function(t){e.setState({loadingStatus:"ready",google:t})},e.onError=function(){e.setState({loadingStatus:"errored"})},e}return l(e,t),e.prototype.render=function(){var t=this.props,e=t.chartLanguage,r=t.chartPackages,n=t.chartVersion,a=t.mapsApiKey,i=t.loader,l=t.errorElement;return Object(o.createElement)(y,{value:this.props},"ready"===this.state.loadingStatus&&null!==this.state.google?Object(o.createElement)(P,s({},this.props,{google:this.state.google})):"errored"===this.state.loadingStatus&&l?l:i,Object(o.createElement)(h,s({},{chartLanguage:e,chartPackages:r,chartVersion:n,mapsApiKey:a},{onLoad:this.onLoad,onError:this.onError})))},e.prototype.componentDidMount=function(){this._isMounted=!0},e.prototype.componentWillUnmount=function(){this._isMounted=!1},e.prototype.isFullyLoaded=function(t){var e=this.props,r=e.controls,o=e.toolbarItems,n=e.getChartEditor;return t&&t.visualization&&t.visualization.ChartWrapper&&t.visualization.Dashboard&&(!r||t.visualization.ChartWrapper)&&(!n||t.visualization.ChartEditor)&&(!o||t.visualization.drawToolbar)},e.defaultProps=p,e}(o.Component)},Pnty:function(t,e,r){"use strict";var o=r("q1tI"),n=r.n(o),a=r("r9M9"),i=r("OsJn");function l(t){for(var e=function(t){for(var e=[],r=0;r<t.length;r+=2){var o;o=t[r]>=t[r+1]?r:r+1,e.push(t[r],t[o])}return e}(t),r=[[{type:"string",id:"Focus"},{type:"string",id:"Name"},{type:"date",id:"Start"},{type:"date",id:"End"}]],o=0;o<e.length-1;o++){var n=["focus",o%2==0?"focus":"distracted",e[o],e[o+1]];r.push(n)}return r}e.a=function(){return n.a.createElement(a.b.Consumer,null,(function(t){return n.a.createElement(i.a,{width:"100%",height:"100px",chartType:"Timeline",loader:n.a.createElement("div",null,"Loading Chart"),data:l(t.timedEvents),options:{timeline:{showRowLabels:!1,showBarLabels:!0},avoidOverlappingGridLines:!1,colors:["#818181","#4266f5"]},rootProps:{"data-testid":"3"}})}))}},UOMH:function(t,e,r){"use strict";var o=r("q1tI"),n=r.n(o),a=r("r9M9"),i=r("OsJn");function l(t,e){for(var r=[],o=0;o<t.length;o+=2){var n;n=t[o]>=t[o+1]?o:o+1,r.push(t[o],t[n])}var a=[];for(o="tasks"===e?0:1;o<r.length-1;o+=2){var i=r[o+1]-r[o];a.push(i)}return a=0===a.length?0:a.reduce((function(t,e){return t+e}))}e.a=function(){return n.a.createElement(a.b.Consumer,null,(function(t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{timedEvents:t.timedEvents,width:"20vh",height:"20vh",chartType:"PieChart",loader:n.a.createElement("div",null,"Loading Chart"),data:[["Task","Hours per Day"],["Distracted",l(t.timedEvents,"distractions")],["Task",l(t.timedEvents,"tasks")]],options:{tooltip:{trigger:"none"},legend:"none",pieSliceText:"none",colors:["#4266f5","#818181"]},rootProps:{"data-testid":"1"}}),(e=t.timedEvents,r=l(e,"distractions"),o=e[e.length-1]-e[0],a=Math.floor(r/o*100),n.a.createElement("h4",{style:{color:"blue"}},"Distracted ",a,"% of total task time")));var e,r,o,a}))}},XDgv:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,n=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),a=r("q1tI"),i=(o=a)&&o.__esModule?o:{default:o},l=r("17x9");var s=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.scriptLoaderId="id"+r.constructor.idCount++,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),n(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.onError,r=t.onLoad,o=t.url;this.constructor.loadedScripts[o]?r():this.constructor.erroredScripts[o]?e():this.constructor.scriptObservers[o]?this.constructor.scriptObservers[o][this.scriptLoaderId]=this.props:(this.constructor.scriptObservers[o]=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}({},this.scriptLoaderId,this.props),this.createScript())}},{key:"componentWillUnmount",value:function(){var t=this.props.url,e=this.constructor.scriptObservers[t];e&&delete e[this.scriptLoaderId]}},{key:"createScript",value:function(){var t=this,e=this.props,r=e.onCreate,o=e.url,n=e.attributes,a=document.createElement("script");r(),n&&Object.keys(n).forEach((function(t){return a.setAttribute(t,n[t])})),a.src=o,a.hasAttribute("async")||(a.async=1);var i=function(e){var r=t.constructor.scriptObservers[o];Object.keys(r).forEach((function(n){e(r[n])&&delete t.constructor.scriptObservers[o][t.scriptLoaderId]}))};a.onload=function(){t.constructor.loadedScripts[o]=!0,i((function(t){return t.onLoad(),!0}))},a.onerror=function(){t.constructor.erroredScripts[o]=!0,i((function(t){return t.onError(),!0}))},document.body.appendChild(a)}},{key:"render",value:function(){return null}}]),e}(i.default.Component);s.propTypes={attributes:l.PropTypes.object,onCreate:l.PropTypes.func,onError:l.PropTypes.func.isRequired,onLoad:l.PropTypes.func.isRequired,url:l.PropTypes.string.isRequired},s.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},s.scriptObservers={},s.loadedScripts={},s.erroredScripts={},s.idCount=0,e.default=s,t.exports=e.default}}]);
//# sourceMappingURL=81c54175cc6011f1ba7708f4b14c25112a90a90d-c094c5b761698b80676c.js.map