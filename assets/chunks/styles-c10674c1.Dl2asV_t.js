import{Selection as e,array as t,common$1 as n,evaluate as r,getConfig as i,getStylesFromArray as a,interpolateToCurve as o,isFunction_default as s,isPlainObject_default as c,linear_default as l,log$1 as u,renderKatex as d,rgba_default as f,root as p,select_default as m,setupGraphViewbox$1 as h,utils as g}from"./mermaid-b5860b54.7bkKHyOp.js";import{channel_default as _}from"./channel.4zlIZ3A9.js";import{Graph as v}from"./graphlib.B5VBQ7js.js";import{render as y}from"./index-3862675e.DI8GD69W.js";function b(n){return typeof n==`string`?new e([document.querySelectorAll(n)],[document.documentElement]):new e([t(n)],p)}function x(e,t){return!!e.children(t).length}function S(e){return w(e.v)+`:`+w(e.w)+`:`+w(e.name)}var C=/:/g;function w(e){return e?String(e).replace(C,`\\:`):``}function T(e,t){t&&e.attr(`style`,t)}function E(e,t,n){t&&e.attr(`class`,t).attr(`class`,n+` `+e.attr(`class`))}function D(e,t){var n=t.graph();if(c(n)){var r=n.transition;if(s(r))return r(e)}return e}function O(e,t){var n=e.append(`foreignObject`).attr(`width`,`100000`),r=n.append(`xhtml:div`);r.attr(`xmlns`,`http://www.w3.org/1999/xhtml`);var i=t.label;switch(typeof i){case`function`:r.insert(i);break;case`object`:r.insert(function(){return i});break;default:r.html(i)}T(r,t.labelStyle),r.style(`display`,`inline-block`),r.style(`white-space`,`nowrap`);var a=r.node().getBoundingClientRect();return n.attr(`width`,a.width).attr(`height`,a.height),n}const k={},A=function(e){let t=Object.keys(e);for(let n of t)k[n]=e[n]},j=async function(e,t,o,s,c,l){let f=s.select(`[id="${o}"]`),p=Object.keys(e);for(let o of p){let s=e[o],p=`default`;s.classes.length>0&&(p=s.classes.join(` `)),p+=` flowchart-label`;let m=a(s.styles),h=s.text===void 0?s.id:s.text,g;if(u.info(`vertex`,s,s.labelType),s.labelType===`markdown`)u.info(`vertex`,s,s.labelType);else if(r(i().flowchart.htmlLabels)){let e={label:h};g=O(f,e).node(),g.parentNode.removeChild(g)}else{let e=c.createElementNS(`http://www.w3.org/2000/svg`,`text`);e.setAttribute(`style`,m.labelStyle.replace(`color:`,`fill:`));let t=h.split(n.lineBreakRegex);for(let n of t){let t=c.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttributeNS(`http://www.w3.org/XML/1998/namespace`,`xml:space`,`preserve`),t.setAttribute(`dy`,`1em`),t.setAttribute(`x`,`1`),t.textContent=n,e.appendChild(t)}g=e}let _=0,v=``;switch(s.type){case`round`:_=5,v=`rect`;break;case`square`:v=`rect`;break;case`diamond`:v=`question`;break;case`hexagon`:v=`hexagon`;break;case`odd`:v=`rect_left_inv_arrow`;break;case`lean_right`:v=`lean_right`;break;case`lean_left`:v=`lean_left`;break;case`trapezoid`:v=`trapezoid`;break;case`inv_trapezoid`:v=`inv_trapezoid`;break;case`odd_right`:v=`rect_left_inv_arrow`;break;case`circle`:v=`circle`;break;case`ellipse`:v=`ellipse`;break;case`stadium`:v=`stadium`;break;case`subroutine`:v=`subroutine`;break;case`cylinder`:v=`cylinder`;break;case`group`:v=`rect`;break;case`doublecircle`:v=`doublecircle`;break;default:v=`rect`}let y=await d(h,i());t.setNode(s.id,{labelStyle:m.labelStyle,shape:v,labelText:y,labelType:s.labelType,rx:_,ry:_,class:p,style:m.style,id:s.id,link:s.link,linkTarget:s.linkTarget,tooltip:l.db.getTooltip(s.id)||``,domId:l.db.lookUpDomId(s.id),haveCallback:s.haveCallback,width:s.type===`group`?500:void 0,dir:s.dir,type:s.type,props:s.props,padding:i().flowchart.padding}),u.info(`setNode`,{labelStyle:m.labelStyle,labelType:s.labelType,shape:v,labelText:y,rx:_,ry:_,class:p,style:m.style,id:s.id,domId:l.db.lookUpDomId(s.id),width:s.type===`group`?500:void 0,type:s.type,dir:s.dir,props:s.props,padding:i().flowchart.padding})}},M=async function(e,t,r){u.info(`abc78 edges = `,e);let s=0,c={},f,p;if(e.defaultStyle!==void 0){let t=a(e.defaultStyle);f=t.style,p=t.labelStyle}for(let r of e){s++;let m=`L-`+r.start+`-`+r.end;c[m]===void 0?(c[m]=0,u.info(`abc78 new entry`,m,c[m])):(c[m]++,u.info(`abc78 new entry`,m,c[m]));let h=m+`-`+c[m];u.info(`abc78 new link id to be used is`,m,h,c[m]);let g=`LS-`+r.start,_=`LE-`+r.end,v={style:``,labelStyle:``};switch(v.minlen=r.length||1,r.type===`arrow_open`?v.arrowhead=`none`:v.arrowhead=`normal`,v.arrowTypeStart=`arrow_open`,v.arrowTypeEnd=`arrow_open`,r.type){case`double_arrow_cross`:v.arrowTypeStart=`arrow_cross`;case`arrow_cross`:v.arrowTypeEnd=`arrow_cross`;break;case`double_arrow_point`:v.arrowTypeStart=`arrow_point`;case`arrow_point`:v.arrowTypeEnd=`arrow_point`;break;case`double_arrow_circle`:v.arrowTypeStart=`arrow_circle`;case`arrow_circle`:v.arrowTypeEnd=`arrow_circle`;break}let y=``,b=``;switch(r.stroke){case`normal`:y=`fill:none;`,f!==void 0&&(y=f),p!==void 0&&(b=p),v.thickness=`normal`,v.pattern=`solid`;break;case`dotted`:v.thickness=`normal`,v.pattern=`dotted`,v.style=`fill:none;stroke-width:2px;stroke-dasharray:3;`;break;case`thick`:v.thickness=`thick`,v.pattern=`solid`,v.style=`stroke-width: 3.5px;fill:none;`;break;case`invisible`:v.thickness=`invisible`,v.pattern=`solid`,v.style=`stroke-width: 0;fill:none;`;break}if(r.style!==void 0){let e=a(r.style);y=e.style,b=e.labelStyle}v.style=v.style+=y,v.labelStyle=v.labelStyle+=b,r.interpolate===void 0?e.defaultInterpolate===void 0?v.curve=o(k.curve,l):v.curve=o(e.defaultInterpolate,l):v.curve=o(r.interpolate,l),r.text===void 0?r.style!==void 0&&(v.arrowheadStyle=`fill: #333`):(v.arrowheadStyle=`fill: #333`,v.labelpos=`c`),v.labelType=r.labelType,v.label=await d(r.text.replace(n.lineBreakRegex,`
`),i()),r.style===void 0&&(v.style=v.style||`stroke: #333; stroke-width: 1.5px;fill:none;`),v.labelStyle=v.labelStyle.replace(`color:`,`fill:`),v.id=h,v.classes=`flowchart-link `+g+` `+_,t.setEdge(r.start,r.end,v,s)}},N=function(e,t){return t.db.getClasses()},P=async function(e,t,n,r){u.info(`Drawing flowchart`);let a=r.db.getDirection();a===void 0&&(a=`TD`);let{securityLevel:o,flowchart:s}=i(),c=s.nodeSpacing||50,l=s.rankSpacing||50,d;o===`sandbox`&&(d=m(`#i`+t));let f=m(o===`sandbox`?d.nodes()[0].contentDocument.body:`body`),p=o===`sandbox`?d.nodes()[0].contentDocument:document,_=new v({multigraph:!0,compound:!0}).setGraph({rankdir:a,nodesep:c,ranksep:l,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),x,S=r.db.getSubGraphs();u.info(`Subgraphs - `,S);for(let e=S.length-1;e>=0;e--)x=S[e],u.info(`Subgraph - `,x),r.db.addVertex(x.id,{text:x.title,type:x.labelType},`group`,void 0,x.classes,x.dir);let C=r.db.getVertices(),w=r.db.getEdges();u.info(`Edges`,w);let T=0;for(T=S.length-1;T>=0;T--){x=S[T],b(`cluster`).append(`text`);for(let e=0;e<x.nodes.length;e++)u.info(`Setting up subgraphs`,x.nodes[e],x.id),_.setParent(x.nodes[e],x.id)}await j(C,_,t,f,p,r),await M(w,_);let E=f.select(`[id="${t}"]`),D=f.select(`#`+t+` g`);if(await y(D,_,[`point`,`circle`,`cross`],`flowchart`,t),g.insertTitle(E,`flowchartTitleText`,s.titleTopMargin,r.db.getDiagramTitle()),h(_,E,s.diagramPadding,s.useMaxWidth),r.db.indexNodes(`subGraph`+T),!s.htmlLabels){let e=p.querySelectorAll(`[id="`+t+`"] .edgeLabel .label`);for(let t of e){let e=t.getBBox(),n=p.createElementNS(`http://www.w3.org/2000/svg`,`rect`);n.setAttribute(`rx`,0),n.setAttribute(`ry`,0),n.setAttribute(`width`,e.width),n.setAttribute(`height`,e.height),t.insertBefore(n,t.firstChild)}}let O=Object.keys(C);O.forEach(function(e){let n=C[e];if(n.link){let r=m(`#`+t+` [id="`+e+`"]`);if(r){let e=p.createElementNS(`http://www.w3.org/2000/svg`,`a`);e.setAttributeNS(`http://www.w3.org/2000/svg`,`class`,n.classes.join(` `)),e.setAttributeNS(`http://www.w3.org/2000/svg`,`href`,n.link),e.setAttributeNS(`http://www.w3.org/2000/svg`,`rel`,`noopener`),o===`sandbox`?e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,`_top`):n.linkTarget&&e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,n.linkTarget);let t=r.insert(function(){return e},`:first-child`),i=r.select(`.label-container`);i&&t.append(function(){return i.node()});let a=r.select(`.label`);a&&t.append(function(){return a.node()})}}})},F={setConf:A,addVertices:j,addEdges:M,getClasses:N,draw:P},I=(e,t)=>{let n=_,r=n(e,`r`),i=n(e,`g`),a=n(e,`b`);return f(r,i,a,t)},L=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${I(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,R=L;export{O as addHtmlLabel,E as applyClass,T as applyStyle,D as applyTransition,S as edgeToId,F as flowRendererV2,R as flowStyles,x as isSubgraph,b as selectAll_default};