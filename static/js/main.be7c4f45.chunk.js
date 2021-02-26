(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(3),l=n.n(c),s=(n(17),n(4)),a=(n(18),n(12)),o=(n(19),n(1));function u(e){var t=e.data,n=e.gridDimensions,i=e.applyPatternToGrid,r=e.hover,c=e.showHoverPattern,l=e.removeHoverPattern,s=n.columns<11?{}:{width:"".concat(100/n.columns,"%")};return Object(o.jsx)("div",{style:s,className:"cell".concat(t.isAlive?" alive":""," ").concat(r?" hover-pattern":""),onClick:function(){return i(t.id)},onMouseEnter:function(){return c(t.id)},onMouseLeave:l})}n(21);function d(e){var t=e.grid,n=e.setGrid,r=e.rowCount,c=e.pattern,l=e.patterns,d=Object(i.useState)([]),j=Object(s.a)(d,2),h=j[0],v=j[1],b=function(e){var n=[Math.floor(e/r),e%r],i=[];t[n[0]][n[1]].isAlive||("Row"===c?t[n[0]].forEach((function(e){i.push(e.id)})):"Column"===c&&t.forEach((function(e){i.push(e[n[1]].id)})),l[c].forEach((function(e){try{i.push(t[n[0]+e[0]][n[1]+e[1]].id)}catch(r){}})),v(i))},f=function(){v([])},O=function(e){var i=Object(a.a)(t),s=[Math.floor(e/r),e%r];!0===i[s[0]][s[1]].isAlive?i[s[0]][s[1]].isAlive=!1:("Row"===c?i[s[0]].forEach((function(e){e.isAlive=!0})):"Column"===c&&i.forEach((function(e){e[s[1]].isAlive=!0})),l[c].forEach((function(e){try{i[s[0]+e[0]][s[1]+e[1]].isAlive=!0}catch(t){}})));n(i)};return t.map((function(e){return Object(o.jsx)("div",{className:"cell-row",children:e.map((function(e){return Object(o.jsx)(u,{gridDimensions:{rows:t.length,columns:t[0].length},hover:h.includes(e.id),data:e,applyPatternToGrid:O,showHoverPattern:b,removeHoverPattern:f},e.id)}))},"row".concat(Math.floor(e[0].id)))}))}n(22);function j(e){var t=e.generation,n=e.livingCellCount,i=e.totalCells;return Object(o.jsxs)("div",{id:"info-panel",className:"container",children:[Object(o.jsx)("h3",{className:"section-header",children:"Information"}),Object(o.jsx)("h4",{children:"Rules:"}),Object(o.jsxs)("ol",{children:[Object(o.jsx)("li",{children:"Any live cell with two or three live neighbours survives."}),Object(o.jsx)("li",{children:"Any dead cell with three live neighbours becomes a live cell."}),Object(o.jsx)("li",{children:"All other live cells die in the next generation. Similarly, all other dead cells stay dead."})]}),Object(o.jsxs)("h4",{children:["Generation: ",t]}),Object(o.jsxs)("h4",{children:["Living Cells: ",n]}),Object(o.jsxs)("h4",{children:["Total Cells: ",i]})]})}var h=n(11);n(26),n(27);function v(e){var t=e.grid,n=e.setGrid,r=e.generation,c=e.setGeneration,l=e.rowCount,a=e.setRowCount,u=e.columnCount,d=e.setColumnCount,j=e.freshGrid,v=e.patterns,b=e.pattern,f=e.setPattern,O=Object(i.useRef)(null),p=Object(i.useState)(!1),m=Object(s.a)(p,2),x=m[0],g=m[1],C=Object(i.useState)(200),A=Object(s.a)(C,2),w=A[0],N=A[1],S=Object(i.useState)(null),G=Object(s.a)(S,2),y=G[0],P=G[1],k=Object(i.useCallback)((function(){var e=t.map((function(e,n){return e.map((function(e,i){var r=0,c={id:e.id,isAlive:e.isAlive};return 0!==n&&(0!==i&&t[n-1][i-1].isAlive&&r++,t[n-1][i].isAlive&&r++,i!==u-1&&t[n-1][i+1].isAlive&&r++),0!==i&&t[n][i-1].isAlive&&r++,i!==u-1&&t[n][i+1].isAlive&&r++,n!==l-1&&(0!==i&&t[n+1][i-1].isAlive&&r++,t[n+1][i].isAlive&&r++,i!==l-1&&t[n+1][i+1].isAlive&&r++),e.isAlive&&2!==r&&3!==r?c.isAlive=!1:e.isAlive||3!==r||(c.isAlive=!0),c}))}));n(e),c((function(e){return e+1}))}),[t,n,l,u,c]);return Object(i.useEffect)((function(){if(null!==O.current)return x&&(O.current=setInterval((function(){return k()}),w)),function(){return clearInterval(O.current)}}),[t,k,x,w]),Object(o.jsxs)("div",{id:"control-panel",className:"container",children:[Object(o.jsx)("h3",{className:"section-header",children:"Controls"}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsxs)("div",{className:"button-row",children:[Object(o.jsx)("button",{onClick:function(){0===r&&P(t),k()},children:"Step"}),Object(o.jsx)("button",{onClick:x?function(){g(!1)}:function(){0===r&&P(t),g(!0)},children:x?"Pause":"Play"}),Object(o.jsx)("button",{onClick:function(){null!==y&&n(y),c(0),x&&g(!1)},children:"Reset"}),Object(o.jsx)("button",{onClick:function(){n(j(l,u)),c(0),x&&g(!1)},children:"Clear"})]}),Object(o.jsxs)("div",{className:"speed-slider-wrapper",children:[Object(o.jsx)("label",{htmlFor:"speed-slider",children:"Speed:"}),Object(o.jsx)(h.a,{id:"speed-slider",min:1,max:20,defaultValue:5,onChange:function(e){N(1e3/e)}})]}),Object(o.jsxs)("div",{className:"select-wrapper pattern-select-wrapper",children:[Object(o.jsx)("label",{htmlFor:"pattern-select",children:"Pattern:"}),Object(o.jsx)("select",{value:b,id:"pattern-select",className:"u-select",onChange:function(e){return f(e.target.value)},children:Object.keys(v).map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))})]}),Object(o.jsxs)("div",{className:"select-wrapper grid-select-wrapper",children:[Object(o.jsx)("label",{htmlFor:"grid-size-select",children:"Grid Size:"}),Object(o.jsxs)("select",{value:l.toString(),id:"grid-size-select",className:"u-select",onChange:function(e){a(parseInt(e.target.value)),d(parseInt(e.target.value)),n(j(parseInt(e.target.value),parseInt(e.target.value))),c(0),P(null)},children:[Object(o.jsx)("option",{value:"10",children:"10 x 10"}),Object(o.jsx)("option",{value:"25",children:"25 x 25"}),Object(o.jsx)("option",{value:"50",children:"50 x 50"})]})]})]})]})}var b=function(){var e=Object(i.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(null),l=Object(s.a)(c,2),a=l[0],u=l[1],h=Object(i.useState)(25),b=Object(s.a)(h,2),f=b[0],O=b[1],p=Object(i.useState)(25),m=Object(s.a)(p,2),x=m[0],g=m[1],C=Object(i.useState)("Cell"),A=Object(s.a)(C,2),w=A[0],N=A[1],S={Cell:[[0,0]],Blinker:[[-1,0],[0,0],[1,0]],Glider:[[-1,0],[0,0],[0,1],[1,-1],[1,1]],Spaceship:[[-2,0],[-2,1],[-1,-2],[-1,-1],[-1,1],[-1,2],[0,-2],[0,-1],[0,0],[0,1],[1,0],[1,-1]],"R-Pentamino":[[-1,0],[-1,1],[0,-1],[0,0],[1,0]],Acorn:[[-1,-2],[0,0],[1,-3],[1,-2],[1,1],[1,2],[1,3]],Row:[],Column:[]},G=function(e,t){for(var n=0,i=[],r=0;r<e;r++){i.push([]);for(var c=0;c<t;c++)i[r].push({id:n,isAlive:!1}),n++}return i};return null===a&&u(function(e){return e[18][7].isAlive=!0,e[18][9].isAlive=!0,e[17][8].isAlive=!0,e[17][9].isAlive=!0,e[16][8].isAlive=!0,e}(G(f,x))),Object(o.jsxs)("div",{className:"main",style:window.innerWidth>960?{height:window.innerHeight}:{},children:[Object(o.jsxs)("div",{className:"container grid-container",children:[Object(o.jsx)("h1",{className:"site-header",children:"John Conway's Game of Life"}),Object(o.jsxs)("h4",{children:["Generation: ",n]}),Object(o.jsx)(d,{grid:a,setGrid:u,rowCount:f,patterns:S,pattern:w})]}),Object(o.jsx)(v,{grid:a,setGrid:u,generation:n,setGeneration:r,rowCount:f,setRowCount:O,columnCount:x,setColumnCount:g,freshGrid:G,patterns:S,pattern:w,setPattern:N}),Object(o.jsx)(j,{generation:n,totalCells:f*x,livingCellCount:function(e){var t=0;return null===a?0:(e.forEach((function(e){t+=e.filter((function(e){return e.isAlive})).length})),t)}(a)})]})};l.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.be7c4f45.chunk.js.map