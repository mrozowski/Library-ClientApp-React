(this["webpackJsonplibrary-client-app"]=this["webpackJsonplibrary-client-app"]||[]).push([[0],{26:function(t,e,a){},27:function(t,e,a){},28:function(t,e,a){},29:function(t,e,a){},35:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(1),r=a.n(s),o=a(19),c=a.n(o),i=(a(26),a(6)),l=a(7),b=a(9),h=a(8),j=(a(27),a(11)),d=a(2);var u=function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-md navbar-light bg-white",children:Object(n.jsxs)("div",{className:"container-fluid ",children:[Object(n.jsx)("a",{className:"navbar-brand flex-grow-1",children:"Library"}),Object(n.jsx)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{class:"navbar-toggler-icon"})}),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"collapse navbar-collapse wrapper",id:"navbarSupportedContent",children:[Object(n.jsx)("form",{children:Object(n.jsxs)("div",{className:"input-group",children:[Object(n.jsx)("input",{type:"text",class:"form-control",placeholder:"search","aria-label":"search","aria-describedby":"button-addon2"}),Object(n.jsx)("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon2",children:"Search"})]})}),Object(n.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0 nav-bar-login",children:Object(n.jsx)("li",{className:"nav-item d-flex justify-content-end",children:Object(n.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Login"})})})]})})]})})},p=(a(28),function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props,e=t.nameSort,a=t.ratingSort,s=t.dateSort,r=t.topBooks,o=t.discover;return Object(n.jsxs)("nav",{className:"left-bar px-3 pt-5",children:[Object(n.jsx)("h3",{className:"side-bar-h3 fw-normal",children:"Sort"}),Object(n.jsxs)("ul",{className:"list-unstyled ms-4 fw-light fs-5",children:[Object(n.jsx)("li",{onClick:e,children:"Name"}),Object(n.jsx)("li",{onClick:a,children:"Rating"}),Object(n.jsx)("li",{onClick:s,children:"Date"})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("h3",{className:"side-bar-h3",children:"Browse"}),Object(n.jsxs)("ul",{className:"list-unstyled ms-4 fw-light fs-5",children:[Object(n.jsx)("li",{onClick:r,children:"Top books"}),Object(n.jsx)("li",{onClick:o,children:"Discover"})]}),Object(n.jsx)("hr",{}),Object(n.jsx)("h3",{className:"side-bar-h3",children:"Your books"}),Object(n.jsxs)("ul",{className:"list-unstyled ms-4 fw-light fs-5",children:[Object(n.jsx)("li",{children:"Reading"}),Object(n.jsx)("li",{children:"History"})]})]})}}]),a}(s.Component)),m=(a(29),function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props.book,e=t.id,a=t.title,s=t.authors,r=t.rating;return Object(n.jsxs)("div",{className:"book shadow mx-3 mb-3 bg-white d-flex",children:[Object(n.jsxs)("div",{className:"list-item-content flex-grow-1",children:[Object(n.jsx)("h3",{className:"truncate-overflow",children:a}),Object(n.jsx)("h5",{className:"fw-light authors",children:s}),Object(n.jsxs)("h6",{className:"fw-light ",children:["Rating: ",r]})]}),Object(n.jsxs)("div",{className:"ps-auto d-flex",children:[Object(n.jsx)(j.b,{to:{pathname:"/book/".concat(e),query:{id:e}},children:Object(n.jsx)("button",{className:"book-button btn-details",children:"Details"})}),Object(n.jsx)(j.b,{to:{pathname:"/alert"},children:Object(n.jsx)("button",{className:"book-button btn-green ",children:"Borrow"})})]})]})}}]),a}(s.Component)),O=function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={book:[{id:1,title:"Harry Potter",author:"J.K Rowling",rating:4.3,popularity:69,pages:100,year:"2006-04-01",publisher:"Wrtnilg"},{id:2,title:"Harry Potter",author:"J.K Rowling",rating:4.3,popularity:69,pages:100,year:"2006-04-01",publisher:"Wrtnilg"},{id:3,title:"Harry Potter",author:"J.K Rowling",rating:4.3,popularity:69,pages:100,year:"2006-04-01",publisher:"Wrtnilg"},{id:4,title:"Harry Potter",author:"J.K Rowling",rating:4.3,popularity:69,pages:100,year:"2006-04-01",publisher:"Wrtnilg"}]},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props.books;return Object(n.jsx)("section",{className:"pt-5 d-flex flex-wrap justify-content-center",children:t.map((function(t,e){return Object(n.jsx)(m,{book:t},e)}))})}}]),a}(s.Component),x="https://thingproxy.freeboard.io/fetch/https://java-library-api.herokuapp.com/",f=function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={bookId:0,isFetching:!0,bookDetails:null},t.fetchOpinion=function(e){fetch(x+"api/library/books/id/".concat(e)).then((function(t){return t.json()})).then((function(a){t.setState({bookDetails:a,bookId:e,isFetching:!1})}))},t.getPopularity=function(){var e=t.state.bookDetails.popularity;return e>90?"Very popular":e>50?"Popular":e>10?"Less popular":"Not many people read this book"},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.location.pathname;if(t=t.substr(6,t.length-1),null!=this.props.books&&null!=t){var e=this.props.books.find((function(e){return e.id===t}));if(null!=e)return console.log(e),void this.setState({bookDetails:e,bookId:t,isFetching:!1})}this.setState({bookId:t}),this.fetchOpinion(t)}},{key:"render",value:function(){return this.state.isFetching?Object(n.jsx)("div",{children:"Loading..."}):Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"card mx-5 mt-5 shadow",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:this.state.bookDetails.title}),Object(n.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:this.state.bookDetails.authors}),Object(n.jsxs)("h6",{className:"card-subtitle mb-2 mt-3",children:["Raiting: ",Object(n.jsxs)("span",{className:"fw-normal mx-1",children:[" ",this.state.bookDetails.rating," "]})]}),Object(n.jsxs)("h6",{className:"card-subtitle mb-2",children:["Pages: ",Object(n.jsxs)("span",{className:"fw-normal mx-1",children:[" ",this.state.bookDetails.pages]})]}),Object(n.jsxs)("h6",{className:"card-subtitle mb-2",children:["Year: ",Object(n.jsxs)("span",{className:"fw-normal mx-1",children:[" ",this.state.bookDetails.year]})]}),Object(n.jsxs)("h6",{className:"card-subtitle mb-2",children:["Publisher: ",Object(n.jsxs)("span",{className:"fw-normal mx-1",children:[" ",this.state.bookDetails.publisher]})]}),Object(n.jsxs)("h6",{className:"mb-2",children:[" ",this.getPopularity()]}),Object(n.jsx)(j.c,{to:"/",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-secondary my-2 ",children:" Back "})}),Object(n.jsx)(j.c,{to:"/alert",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-success mx-3",children:"Borrow"})})]})})})}}]),a}(s.Component),g=Object(d.f)(f),v=function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"alert alert-warning mx-3 mt-3",role:"alert",children:[Object(n.jsx)("h4",{className:"alert-heading",children:"No permission"}),Object(n.jsx)("p",{children:"In order to do this action you have to be logged in. However, this website doesn't implement all API methods yet. Login is still not available."}),Object(n.jsx)("hr",{}),Object(n.jsx)("p",{className:"mb-0",children:"Please go back to home page."}),Object(n.jsx)(j.c,{to:"/",children:Object(n.jsx)("button",{type:"button",className:"btn btn-outline-secondary my-2 ",children:" Back to home page"})})]})}}]),a}(s.Component),y="https://thingproxy.freeboard.io/fetch/https://java-library-api.herokuapp.com/",k=function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={book:[]},t.fetchProducts=function(){fetch(y+"api/library/books/10/10").then((function(t){return t.json()})).then((function(e){t.setState({book:e})}))},t.sortBooksByName=function(){var e=t.state.book.sort((function(t,e){return t.title.localeCompare(e.title)}));t.setState({books:e})},t.sortBooksByRating=function(){var e=t.state.book.sort((function(t,e){return e.rating>t.rating?1:-1}));t.setState({books:e})},t.sortBooksByDate=function(){var e=t.state.book.sort((function(t,e){return e.year.localeCompare(t.year)}));t.setState({books:e})},t.getTopBooks=function(){fetch(y+"api/library/books/popular/10").then((function(t){return t.json()})).then((function(e){t.setState({book:e})}))},t.dicoverBooks=function(){fetch(y+"api/library/books/discover").then((function(t){return t.json()})).then((function(e){t.setState({book:e})}))},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchProducts()}},{key:"render",value:function(){var t=this;return Object(n.jsx)(j.a,{children:Object(n.jsxs)("div",{className:"grid-container",children:[Object(n.jsxs)("div",{className:"nav-bar-grid",children:[" ",Object(n.jsx)(u,{})]}),Object(n.jsx)("div",{className:"side-bar-grid",children:Object(n.jsx)(p,{nameSort:this.sortBooksByName,ratingSort:this.sortBooksByRating,dateSort:this.sortBooksByDate,topBooks:this.getTopBooks,discover:this.dicoverBooks})}),Object(n.jsx)("div",{className:"main-grid",children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/",exact:!0,render:function(){return Object(n.jsx)(O,{books:t.state.book})}}),Object(n.jsx)(d.a,{path:"/book/:id",render:function(){return Object(n.jsx)(g,{books:t.state.book})}}),Object(n.jsx)(d.a,{path:"/alert",render:function(){return Object(n.jsx)(v,{})}})]})}),Object(n.jsx)("div",{className:"footer-grid"})]})})}}]),a}(s.Component),N=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,o=e.getTTFB;a(t),n(t),s(t),r(t),o(t)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),N()}},[[35,1,2]]]);
//# sourceMappingURL=main.42bf5270.chunk.js.map