(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(26)},18:function(e,t,n){},20:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),s=n.n(o),i=(n(18),n(1)),c=n.n(i),l=n(2),u=n(5),m=n(6),v=n(10),p=n(7),d=n(11),f=(n(20),n(8)),_=n.n(f),h=n(9),g=n.n(h);n(25);function w(e){var t=e.genre;return r.a.createElement("span",{className:"Movie__Genre"},t," ")}function y(e){var t=e.poster,n=e.alt;return r.a.createElement("img",{src:t,alt:n,title:n,className:"Movie__Poster"})}w.proptype={genre:_.a.string.isRequired};var E=function(e){var t=e.title,n=e.poster,a=e.genres,o=e.synopsis;return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Column"},r.a.createElement(y,{poster:n,alt:t})),r.a.createElement("div",{className:"Movie__Column"},r.a.createElement("h1",{className:"Movie__Title"},t),r.a.createElement("div",{className:"Movie__Genres"},a.map(function(e,t){return r.a.createElement(w,{genre:e,key:t})})),r.a.createElement("div",{className:"Movie__Synopsis"},r.a.createElement(g.a,{text:o,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))," "))},M=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e)})),n._callApi=Object(l.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)}));case 1:case"end":return e.stop()}},e)})),n._renderMovies=function(){return n.state.movies.map(function(e,t){return console.log(e),r.a.createElement(E,{title:e.title_english,poster:e.large_cover_image,genres:e.genres,synopsis:e.synopsis,key:t})})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:e?"App":"App--loading"},e?this._renderMovies():"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.2792d74b.chunk.js.map