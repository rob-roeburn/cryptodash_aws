(this.webpackJsonpcryptodash=this.webpackJsonpcryptodash||[]).push([[0],{206:function(e,t,r){e.exports=r(304)},299:function(e,t,r){},304:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(14),o=r.n(c),i=r(30),s=r.n(i),l=r(168),u=r(35),f=r(66),d=r(119),m=r(169),p=r.n(m),b=r(175),h=r.n(b),E=r(185),y=r.n(E),O=r(176),g=r.n(O),j=r(183),k=r.n(j),v=r(135),w=r.n(v),x=r(134),P=r.n(x),S=r(177),R=r.n(S),I=r(178),C=r.n(I),D=r(180),N=r.n(D),A=r(181),T=r.n(A),L=r(182),U=r.n(L),J=r(186),Q=r.n(J),q=r(179),F=r.n(q),z=r(184),B=r.n(z),G=r(187),H=r.n(G),M=r(159);r(299);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(r,!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}o.a.render(a.a.createElement((function(){var e=new AbortController,t="https://pr2zg9d0r2.execute-api.eu-west-1.amazonaws.com/prod",r={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"},c={Add:Object(n.forwardRef)((function(e,t){return a.a.createElement(h.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return a.a.createElement(g.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return a.a.createElement(P.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return a.a.createElement(R.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return a.a.createElement(w.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return a.a.createElement(C.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return a.a.createElement(F.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return a.a.createElement(N.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return a.a.createElement(T.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return a.a.createElement(U.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return a.a.createElement(w.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return a.a.createElement(k.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return a.a.createElement(P.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return a.a.createElement(B.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return a.a.createElement(y.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return a.a.createElement(Q.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return a.a.createElement(H.a,Object.assign({},e,{ref:t}))}))},o=Object(n.useState)({exchangeRates:[{rateName:"USD",rate:1,symbol:"$"},{rateName:"GBP",rate:.89,symbol:"\xa3"}],selectedExchangeRate:[{rateName:"USD",rate:1,symbol:"$"}]}),i=Object(d.a)(o,2),l=i[0],m=i[1],b=Object(n.useState)({tickers:[{}],tickerId:"",tickerName:"",tickerSymbol:"",tickerPrice:""}),E=Object(d.a)(b,2),O=E[0],j=E[1],v=Object(n.useState)({portfoliocolumns:[{title:"Trade time",field:"tradetime"},{title:"Name",field:"name"},{title:"Symbol",field:"symbol"},{title:"Position",field:"position"},{title:"Price at trade ("+l.selectedExchangeRate[0].symbol+")",field:"tradePrice"},{title:"Active",field:"active"},{title:"Unrealised P&L  ("+l.selectedExchangeRate[0].symbol+")",field:"pl"}],positionData:[{}],precision:2,portfolioId:0,portfolioUnrealisedPL:0,portfolioRealisedPL:0}),x=Object(d.a)(v,2),S=x[0],I=x[1],D=function(){var e=Object(f.a)(s.a.mark((function e(r){var n,a,c,o,i,l,f,d,m,p,b,h,E,y,g,k;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(u.a)(O.tickers),a=[],e.next=4,fetch(t+"/getTickers");case 4:return c=e.sent,e.next=7,c.json();case 7:if(o=e.sent,200===c.status){e.next=10;break}throw Error(o.message);case 10:for(i=!0,l=!1,f=void 0,e.prev=13,d=o.body[Symbol.iterator]();!(i=(m=d.next()).done);i=!0)p=m.value,a.push(p);e.next=21;break;case 17:e.prev=17,e.t0=e.catch(13),l=!0,f=e.t0;case 21:e.prev=21,e.prev=22,i||null==d.return||d.return();case 24:if(e.prev=24,!l){e.next=27;break}throw f;case 27:return e.finish(24);case 28:return e.finish(21);case 29:return a=JSON.parse(o.body),n=a,b=Object(u.a)(O.tickerId),b=a[0].tickerId.toString(),h=Object(u.a)(O.tickerSymbol),h=a[0].tickerSymbol,E=Object(u.a)(O.tickerName),E=a[0].tickerName,y=Object(u.a)(O.tickerPrice.toString()),e.next=40,fetch(t+"/getPrice/"+parseInt(b));case 40:return g=e.sent,e.next=43,g.json();case 43:if(k=e.sent,200===g.status){e.next=48;break}throw Error(k.message);case 48:y=k.body.Items[0].cmcCacheData.quote.USD.price.toString(),j($({},O,{tickers:n,tickerPrice:y,tickerId:b,tickerSymbol:h,tickerName:E}));case 50:case"end":return e.stop()}}),e,null,[[13,17,21,29],[22,,24,28]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(f.a)(s.a.mark((function e(n){var a,c,o,i,f,d,m,p,b,h,E,y,O,g,j,k,v;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(u.a)(S.positionData),c=Object(u.a)(S.portfolioUnrealisedPL.toString()),o=Object(u.a)(S.portfolioRealisedPL.toString()),a=[],i=0,e.next=7,fetch(t+"/getPortfolio/"+S.portfolioId);case 7:return f=e.sent,e.next=10,f.json();case 10:if(d=e.sent,200===f.status){e.next=15;break}throw Error(d.message);case 15:m=[],p=!0,b=!1,h=void 0,e.prev=19,E=d.body.Items[0].positions[Symbol.iterator]();case 21:if(p=(y=E.next()).done){e.next=40;break}return O=y.value,g=void 0,j=0,e.next=26,fetch(t+"/getPrice/"+O.currencyId);case 26:return k=e.sent,e.next=29,k.json();case 29:if(v=e.sent,200===k.status){e.next=34;break}throw Error(v.message);case 34:g=v.body.Items[0].cmcCacheData.quote.USD.price.toString(),O.active&&(i+=(g-O.priceAtTrade)*O.positionQty,j=(g-O.priceAtTrade)*O.positionQty),m.push({id:O._id,portfolioId:S.portfolioId,tradetime:new Date(O.DateTime).toLocaleTimeString("en-GB",r),currencyId:O.currencyId,name:O.name,symbol:O.symbol,position:O.positionQty,tradePrice:O.priceAtTrade*l.selectedExchangeRate[0].rate,active:O.active.toString(),pl:(j*l.selectedExchangeRate[0].rate).toFixed(S.precision)});case 37:p=!0,e.next=21;break;case 40:e.next=46;break;case 42:e.prev=42,e.t0=e.catch(19),b=!0,h=e.t0;case 46:e.prev=46,e.prev=47,p||null==E.return||E.return();case 49:if(e.prev=49,!b){e.next=52;break}throw h;case 52:return e.finish(49);case 53:return e.finish(46);case 54:a=m,c=i,o=d.body.Items[0].realisedPL,I($({},S,{positionData:a,portfolioUnrealisedPL:c,portfolioRealisedPL:o}));case 58:case"end":return e.stop()}}),e,null,[[19,42,46,54],[47,,49,53]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(f.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D(),A();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return L(),function(){e.abort()}}),[]);var J=function(e,t,r){for(var n=[],a=0;a<e.length;a++)e[a][r]===parseInt(t)&&n.push(e[a]);return n},q=function(){var e=Object(f.a)(s.a.mark((function e(r){var n,a,c,o,i,l,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(u.a)(O.tickerId),n=r.target.value,a=J(O.tickers,n,"tickerId"),c=Object(u.a)(O.tickerSymbol),c=a[0].tickerSymbol,o=Object(u.a)(O.tickerName),o=a[0].tickerName,i=Object(u.a)(O.tickerPrice.toString()),e.next=10,fetch(t+"/getPrice/"+parseInt(n));case 10:return l=e.sent,e.next=13,l.json();case 13:if(f=e.sent,200===l.status){e.next=18;break}throw Error(f.message);case 18:i=f.body.Items[0].cmcCacheData.quote.USD.price.toString(),j($({},O,{tickerId:n,tickerPrice:i,tickerName:o,tickerSymbol:c}));case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(f.a)(s.a.mark((function e(r){var n,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure?")){e.next=20;break}return(n=[]).push({portfolioId:S.portfolioId}),n.push({tradeDate:new Date}),n.push({positionQty:document.getElementById("positionQty").value}),n.push({tickerId:O.tickerId}),n.push({tickerName:O.tickerName}),n.push({tickerSymbol:O.tickerSymbol}),n.push({tickerPrice:O.tickerPrice}),e.next=11,fetch(t+"/postNewPosition",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Methods":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Content-Type, Authorization"},body:JSON.stringify({post:n})});case 11:return a=e.sent,e.next=14,a;case 14:if(c=e.sent,200===a.status){e.next=19;break}throw Error(c.message);case 19:A();case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(f.a)(s.a.mark((function e(r){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"/updateCache?file="+r.target.textContent);case 2:return n=e.sent,e.next=5,n;case 5:if(a=e.sent,200===n.status){e.next=10;break}throw Error(a.message);case 10:D(),j($({},O,{tickers:[]})),A();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(f.a)(s.a.mark((function e(r){var n,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure?")){e.next=14;break}return(n=[]).push({portfolioId:S.portfolioId}),e.next=5,fetch(t+"/resetPortfolio",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({post:n})});case 5:return a=e.sent,e.next=8,a;case 8:if(c=e.sent,200===a.status){e.next=13;break}throw Error(c.message);case 13:setTimeout((function(){A()}),250);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=O.tickers.map((function(e){return a.a.createElement("option",{value:e.tickerId},e.tickerName)})),Z=l.exchangeRates.map((function(e){return a.a.createElement("option",{value:e.rateName},e.rateName)}));return a.a.createElement("div",null,a.a.createElement("div",{className:"outerDiv"},a.a.createElement("div",{className:"leftDiv"},a.a.createElement("h2",null,"CryptoDash")),a.a.createElement("div",{className:"midDiv"},a.a.createElement("h4",null,"Unrealised P&L Total: ",l.selectedExchangeRate[0].symbol+""+(S.portfolioUnrealisedPL*l.selectedExchangeRate[0].rate).toFixed(S.precision))),a.a.createElement("div",{className:"rightDiv"},a.a.createElement("h4",null,"Realised P&L Total: ",l.selectedExchangeRate[0].symbol+""+(S.portfolioRealisedPL*l.selectedExchangeRate[0].rate).toFixed(S.precision)))),a.a.createElement(p.a,{title:"Portfolio View",icons:c,columns:S.portfoliocolumns,data:S.positionData,editable:{onRowDelete:function(e){return new Promise((function(r){"true"===e.active?setTimeout((function(){fetch(t+"/getPrice/"+e.currencyId,{}).then((function(e){return e.json()})).then((function(n){var a=[];a.push({portfolioId:e.portfolioId}),a.push({table:"portfolios"}),a.push({positionId:e.id}),a.push({realisedPL:(n.body.Items[0].cmcCacheData.quote.USD.price-e.tradePrice)*e.position}),fetch(t+"/exitPosition",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Methods":"*","Access-Control-Allow-Credentials":"true","Access-Control-Allow-Headers":"Content-Type, Authorization"},body:JSON.stringify({post:a})}).then((function(e){A(),r()}))}))}),250):(alert("You cannot exit a closed position."),r())}))}}}),a.a.createElement("table",null,a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("h3",null,"Trade Entry"))),a.a.createElement("tr",null,a.a.createElement("td",null,"Select currency"),a.a.createElement("td",null,a.a.createElement("select",{onChange:q},Y))),a.a.createElement("tr",null,a.a.createElement("td",null,"Price of currency"),a.a.createElement("td",{id:"tickerPrice"},l.selectedExchangeRate[0].symbol+""+O.tickerPrice*l.selectedExchangeRate[0].rate)),a.a.createElement("tr",null,a.a.createElement("td",null,"Position quantity"),a.a.createElement("td",null,a.a.createElement("input",{id:"positionQty",type:"text"}))),a.a.createElement("tr",null,a.a.createElement("td",null),a.a.createElement("td",null,a.a.createElement(M.a,{variant:"contained",color:"primary",onClick:z},"Trade"))),a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("h3",null,"System Control"))),a.a.createElement("tr",null,a.a.createElement("td",null,"Reload cache from sandbox"),a.a.createElement("td",null,a.a.createElement(M.a,{variant:"contained",color:"primary",onClick:G},"coinmarketcap.json"))),a.a.createElement("tr",null,a.a.createElement("td",null,"Reload cache from pro"),a.a.createElement("td",null,a.a.createElement(M.a,{variant:"contained",color:"primary",onClick:G},"pro.coinmarketcap.json"))),a.a.createElement("tr",null,a.a.createElement("td",null,"Reset portfolio"),a.a.createElement("td",null,a.a.createElement(M.a,{variant:"contained",color:"primary",onClick:V},"Zero positions"))),a.a.createElement("tr",null,a.a.createElement("td",null,"Currency to view (USD=",l.selectedExchangeRate[0].rate,")"),a.a.createElement("td",null,a.a.createElement("select",{onChange:function(e){var t=Object(u.a)(l.selectedExchangeRate),r=l.exchangeRates.find((function(t){return t.rateName===e.target.value}));(t=[]).push(r),m($({},l,{selectedExchangeRate:t}))}},Z))))))}),null),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.62e187ba.chunk.js.map