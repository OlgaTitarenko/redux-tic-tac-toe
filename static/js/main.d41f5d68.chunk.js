(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,n,t){e.exports=t(44)},37:function(e,n,t){},38:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(23),o=t.n(i),s=t(26),c=t(14),u=t(10),l=t(17),m=t(9),v={squares:Array(9).fill(null),history:{0:Array(9).fill(null)},move:0},h=Object(m.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"NEW_GAME":return v;case"ONE_MOVE":var t,r=e.squares.slice();return t=(e.move+1)%2===0?"O":"X",r[n.position]=t,Object(l.a)({},e,{squares:r,move:e.move+1,history:Object(l.a)({},e.history,Object(u.a)({},e.move+1,r))});case"MOVE_BACK":return delete e.history[n.move],Object(l.a)({},e,{move:n.move-1,history:e.history,squares:e.history[n.move-1]});default:return e}}),p=(t(37),t(27)),d=t(11),f=t(12),E=t(16),b=t(13),w=t(15),O=function(e){function n(){return Object(d.a)(this,n),Object(E.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(w.a)(n,e),Object(f.a)(n,[{key:"render",value:function(){var e=this,n="square "+this.props.winClass;return a.a.createElement("button",{className:n,onClick:function(){return e.props.onClick()}},this.props.value)}}]),n}(a.a.Component),y=function(e){return a.a.createElement("button",{onClick:function(){return e.onClick()}},"New Game")},k=function(e){function n(){return Object(d.a)(this,n),Object(E.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(w.a)(n,e),Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.onNewGame()}},{key:"handleOnBack",value:function(e){this.props.onBackMove(e)}},{key:"handleClick",value:function(e){var n=this.props.squares.slice();q(n).winner||n[e]||this.props.onNewMove(e)}},{key:"handleClickNewGame",value:function(){this.props.onNewGame()}},{key:"renderSquare",value:function(e,n){var t=this,r="";return n&&(r=-1!==n.indexOf(e)?"winner_line":""),a.a.createElement(O,{winClass:r,value:this.props.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,n,t=this,r=q(this.props.squares).winner,i="",o="Move: "+this.props.move;return n=(this.props.move+1)%2===0?"O":"X",r?(e="Winner: "+r,i=q(this.props.squares).winLine):e="Next player: "+n,a.a.createElement("div",null,a.a.createElement("div",{className:"status"},e),a.a.createElement("div",{className:"status"},o),a.a.createElement("div",{className:"status"},a.a.createElement("button",{onClick:function(){return t.handleOnBack(t.props.move)}},"BACK")),a.a.createElement("div",{className:"board-row"},this.renderSquare(0,i),this.renderSquare(1,i),this.renderSquare(2,i)),a.a.createElement("div",{className:"board-row"},this.renderSquare(3,i),this.renderSquare(4,i),this.renderSquare(5,i)),a.a.createElement("div",{className:"board-row"},this.renderSquare(6,i),this.renderSquare(7,i),this.renderSquare(8,i)),a.a.createElement("div",{className:"new_game_button"},a.a.createElement(y,{onClick:function(){return t.handleClickNewGame()}})))}}]),n}(a.a.Component),N=Object(c.b)(function(e){return{squares:e.squares,move:e.move,history:e.history}},function(e){return{onNewMove:function(n){e({type:"ONE_MOVE",position:n})},onNewGame:function(){e({type:"NEW_GAME"})},onBackMove:function(n){e({type:"MOVE_BACK",move:n})}}})(k);function q(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var r=Object(p.a)(n[t],3),a=r[0],i=r[1],o=r[2];if(e[a]&&e[a]===e[i]&&e[i]===e[o])return{winner:e[a],winLine:n[t]}}return{winner:null,winLine:null}}t(38);var C=function(){return a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"game-board"},a.a.createElement(N,null)))};o.a.render(a.a.createElement(c.a,{store:h},a.a.createElement(s.a,null,a.a.createElement(C,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.d41f5d68.chunk.js.map