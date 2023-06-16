"use strict";(self.webpackChunkBook_Cinema=self.webpackChunkBook_Cinema||[]).push([[314],{3314:(I,m,s)=>{s.r(m),s.d(m,{TheatresModule:()=>F});var c=s(6895),l=s(2591),d=s(7579),v=s(2722),g=s(6635),p=s(9057),u=s(8029),f=s(6425),e=s(1571),h=s(3257),_=s(6290);function x(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",13),e._uU(2),e.qZA(),e.BQk()),2&n){const t=o.$implicit;e.xp6(2),e.Oqu(t)}}function T(n,o){1&n&&(e.TgZ(0,"span"),e._uU(1,","),e.qZA())}function C(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"span",14),e._uU(2),e.qZA(),e.YNc(3,T,2,0,"span",15),e.BQk()),2&n){const t=o.$implicit,i=o.index,a=e.oxw();e.xp6(2),e.Oqu(t),e.xp6(1),e.Q6J("ngIf",i+1!==(null==a.jonors?null:a.jonors.length))}}let w=(()=>{class n{constructor(){this.jonors=[],this.languages=[]}ngOnInit(){}ngOnChanges(t){null!=t.movieDetails&&this.movieDetails&&(this.jonors=this.movieDetails?.tags?.split(","),this.languages=this.movieDetails?.language?.split(","))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-movie-details"]],inputs:{movieDetails:"movieDetails"},features:[e.TTD],decls:22,vars:7,consts:[[1,"movie-details-container"],[1,"img-movie"],[3,"src"],[1,"movie-info"],[1,"movie-name"],[1,"imdb-rating"],[1,"movie-rating"],[1,"movie-languages-container"],[4,"ngFor","ngForOf"],[1,"other-details"],[1,"movie-running-time"],[1,"details-separator"],[1,"movie-date"],[1,"movie-languages"],[1,"movie-tags"],[4,"ngIf"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3)(4,"h2",4),e._uU(5),e.qZA(),e.TgZ(6,"div",5)(7,"h4",6),e._uU(8),e.qZA(),e.TgZ(9,"h4",6),e._uU(10,"- IMDB Rating"),e.qZA()(),e.TgZ(11,"div",7),e.YNc(12,x,3,1,"ng-container",8),e.qZA(),e.TgZ(13,"div",9)(14,"span",10),e._uU(15),e.qZA(),e._UZ(16,"span",11),e.TgZ(17,"span"),e.YNc(18,C,4,2,"ng-container",8),e.qZA(),e._UZ(19,"span",11),e.TgZ(20,"span",12),e._uU(21),e.qZA()()()()),2&t&&(e.xp6(2),e.s9C("src",null==i.movieDetails?null:i.movieDetails.thumbnail_url,e.LSH),e.xp6(3),e.Oqu(null==i.movieDetails?null:i.movieDetails.movie_name),e.xp6(3),e.hij("",null==i.movieDetails?null:i.movieDetails.imdb_rating,"/10"),e.xp6(4),e.Q6J("ngForOf",i.languages),e.xp6(3),e.Oqu(null==i.movieDetails?null:i.movieDetails.running_time),e.xp6(3),e.Q6J("ngForOf",i.jonors),e.xp6(3),e.Oqu(null==i.movieDetails?null:i.movieDetails.release_date))},dependencies:[c.sg,c.O5],styles:[".movie-details-container[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center;padding:2rem 0}.movie-info[_ngcontent-%COMP%]{color:#fff;padding:2rem;min-width:40%}.movie-name[_ngcontent-%COMP%]{color:#fff;letter-spacing:.4px;margin-bottom:17px;font-size:34px}.movie-rating[_ngcontent-%COMP%]{font-size:28px}.movie-languages[_ngcontent-%COMP%]{border:1px solid #ccc;display:flex;flex-wrap:wrap;background-color:#e5e5e5;color:#000;border-radius:2px;align-self:flex-start;margin-top:8px;padding:5px 15px;font-size:20px}.movie-languages-container[_ngcontent-%COMP%]{display:flex;gap:10px}.other-details[_ngcontent-%COMP%]{display:flex;gap:10px;margin:47px 5px;flex-wrap:wrap;color:#fff;font-size:24px;font-weight:400;line-height:24px;letter-spacing:.2px;align-items:center}.details-separator[_ngcontent-%COMP%]{background-color:#fff;height:10px;width:10px;border-radius:50%;margin:0 10px}.movie-tags[_ngcontent-%COMP%]{margin:0 5px}.imdb-rating[_ngcontent-%COMP%]{display:flex;gap:20px;align-items:center;margin:1rem 0}"]}),n})();var Z=s(7587),M=s(213);function O(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",7),e._UZ(2,"app-movie-details",8),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("movieDetails",t.movie)}}function b(n,o){if(1&n&&(e.TgZ(0,"div",17),e._uU(1),e.qZA()),2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",t.show1_movie," ")}}function P(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",20)(2,"button",21),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,r=e.oxw();return e.KtG(r.showSeatsAvailable(a,a.show1_time,a.show1_movie))}),e._uU(3),e.qZA(),e.YNc(4,b,2,1,"div",22),e.qZA(),e.BQk()}if(2&n){const t=e.oxw().$implicit,i=e.oxw();e.xp6(3),e.hij(" ",t.show1_time," "),e.xp6(1),e.Q6J("ngIf","all"===i.movieName)}}function A(n,o){if(1&n&&(e.TgZ(0,"div",17),e._uU(1),e.qZA()),2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",t.show2_movie," ")}}function N(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",20)(2,"button",21),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,r=e.oxw();return e.KtG(r.showSeatsAvailable(a,a.show2_time,a.show2_movie))}),e._uU(3),e.qZA(),e.YNc(4,A,2,1,"div",22),e.qZA(),e.BQk()}if(2&n){const t=e.oxw().$implicit,i=e.oxw();e.xp6(3),e.hij(" ",t.show2_time," "),e.xp6(1),e.Q6J("ngIf","all"===i.movieName)}}function y(n,o){if(1&n&&(e.TgZ(0,"div",17),e._uU(1),e.qZA()),2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",t.show3_movie," ")}}function k(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",20)(2,"button",21),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,r=e.oxw();return e.KtG(r.showSeatsAvailable(a,a.show3_time,a.show3_movie))}),e._uU(3),e.qZA(),e.YNc(4,y,2,1,"div",22),e.qZA(),e.BQk()}if(2&n){const t=e.oxw().$implicit,i=e.oxw();e.xp6(3),e.hij(" ",t.show3_time," "),e.xp6(1),e.Q6J("ngIf","all"===i.movieName)}}function U(n,o){if(1&n&&(e.TgZ(0,"div",17),e._uU(1),e.qZA()),2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.hij(" ",t.show4_movie," ")}}function D(n,o){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",20)(2,"button",21),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,r=e.oxw();return e.KtG(r.showSeatsAvailable(a,a.show4_time,a.show4_movie))}),e._uU(3),e.qZA(),e.YNc(4,U,2,1,"div",22),e.qZA(),e.BQk()}if(2&n){const t=e.oxw().$implicit,i=e.oxw();e.xp6(3),e.hij(" ",t.show4_time," "),e.xp6(1),e.Q6J("ngIf","all"===i.movieName)}}function q(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",9)(2,"div",10),e._UZ(3,"img",11),e.TgZ(4,"div",12)(5,"div",13),e._uU(6),e.qZA(),e.TgZ(7,"div",13),e._uU(8,"- Customer Rating"),e.qZA()()(),e.TgZ(9,"div",14)(10,"div",15),e._uU(11),e.qZA(),e.TgZ(12,"div",16),e._uU(13),e.qZA(),e.TgZ(14,"div",17)(15,"a",18),e._uU(16," visit site"),e.qZA()(),e.TgZ(17,"div",19),e.YNc(18,P,5,2,"ng-container",1),e.YNc(19,N,5,2,"ng-container",1),e.YNc(20,k,5,2,"ng-container",1),e.YNc(21,D,5,2,"ng-container",1),e.qZA()()(),e.BQk()),2&n){const t=o.$implicit,i=e.oxw();e.xp6(3),e.s9C("src",t.thumbnail_url,e.LSH),e.xp6(3),e.hij("",t.customer_rating,"/5"),e.xp6(5),e.Oqu(t.theatre_name),e.xp6(2),e.Oqu(t.address),e.xp6(2),e.s9C("href",t.website,e.LSH),e.xp6(3),e.Q6J("ngIf",t.show1_movie===i.movieName||"all"===i.movieName),e.xp6(1),e.Q6J("ngIf",t.show2_movie===i.movieName||"all"===i.movieName),e.xp6(1),e.Q6J("ngIf",t.show3_movie===i.movieName||"all"===i.movieName),e.xp6(1),e.Q6J("ngIf",t.show4_movie===i.movieName||"all"===i.movieName)}}function j(n,o){1&n&&e._UZ(0,"span",12)}function B(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"span",10),e._uU(2),e.qZA(),e.YNc(3,j,1,0,"span",11),e.BQk()),2&n){const t=o.$implicit,i=o.index,a=e.oxw();e.xp6(2),e.Oqu(t),e.xp6(1),e.Q6J("ngIf",i+1!==(null==a.jonors?null:a.jonors.length))}}const L=[{path:":id",component:(()=>{class n{constructor(t,i,a,r){this.cinemaService=t,this.activatedRoute=i,this.route=a,this.store=r,this.userMail="sample@gmail.com",this.theatres=[],this.pageName=g.p.theatres,this.ngUnsubscribe=new d.x,this.searchText="",this.movieName=this.activatedRoute.snapshot.paramMap.get("id")?.replace("-"," ")}ngOnInit(){this.store.dispatch((0,f.Lp)({userName:this.userMail})),this.store.pipe((0,p.Ys)(u.g)).subscribe(t=>{this.movies=t?.movies,"all"!=this.movieName&&t?(this.movie=t?.movies?.find(i=>i.movie_name===this.movieName),this.theatres=t?.theatre?.filter(i=>i.show1_movie===this.movieName||i.show2_movie===this.movieName||i.show3_movie===this.movieName||i.show4_movie===this.movieName)):t&&(this.theatres=t.theatre)}),this.cinemaService.getSearchText().pipe((0,v.R)(this.ngUnsubscribe)).subscribe(t=>{this.searchText=t}),this.cinemaService.setPageName(this.pageName)}showSeatsAvailable(t,i,a){this.cinemaService.updateBookSeatsDetails(t,i,"all"==this.movieName?this.movies?.find(r=>r.movie_name==a):this.movie),this.route.navigate([this.route.url+"/"+g.p.bookSeats])}ngOnDestroy(){this.ngUnsubscribe.next(null),this.ngUnsubscribe.complete()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.j),e.Y36(l.gz),e.Y36(l.F0),e.Y36(p.yh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-theatre-landing"]],decls:11,vars:6,consts:[[1,"theatre-landing"],[4,"ngIf"],[1,"theatres-conatiner"],[1,"theatre-title"],[1,"theatre-dates-conatiner"],[1,"theatre-list"],[4,"ngFor","ngForOf"],[1,"movie-background"],[3,"movieDetails"],[1,"theatre-details"],[1,"img-container"],[3,"src"],[1,"cust-rating"],[1,"theatre-rating"],[1,"theatre-info"],[1,"theatre-name"],[1,"theatre-address"],[1,"show-movie"],["target","_blank",3,"href"],[1,"show-container"],[1,"show-info"],[1,"show-time",3,"click"],["class","show-movie",4,"ngIf"]],template:function(t,i){1&t&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0),e.YNc(2,O,3,1,"ng-container",1),e.TgZ(3,"div",2)(4,"h1",3),e._uU(5,"Theatres"),e.qZA(),e.TgZ(6,"div",4),e._UZ(7,"app-dates-available"),e.qZA(),e.TgZ(8,"div",5),e.YNc(9,q,22,9,"ng-container",6),e.ALo(10,"search"),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("ngIf","all"!==i.movieName),e.xp6(7),e.Q6J("ngForOf",e.Dn7(10,2,i.theatres,i.pageName,i.searchText)))},dependencies:[c.sg,c.O5,_.G,w,Z.Y,M.C],styles:[".movie-background[_ngcontent-%COMP%]{background-color:#000}.theatre-title[_ngcontent-%COMP%]{margin:1rem 0}.theatre-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;background-color:#fff;border-radius:15px}.theatre-landing[_ngcontent-%COMP%]{overflow-y:scroll;max-height:calc(100vh - 110px);background:#f5f5f5}.theatre-info[_ngcontent-%COMP%]{height:95%}.img-container[_ngcontent-%COMP%]{text-align:center}.theatre-details[_ngcontent-%COMP%]{display:grid;grid-template-columns:360px auto;align-items:flex-start;padding:20px;border-bottom:1px solid #ccc}.theatre-details[_ngcontent-%COMP%]:hover{background-color:#ccc}.theatre-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:340px;height:280px;border-radius:5%}.theatre-details[_ngcontent-%COMP%]   .star-image[_ngcontent-%COMP%]{height:25px;width:25px}.theatre-name[_ngcontent-%COMP%]{font-weight:500;color:#212121;margin-bottom:8px;font-size:24px}.view-now-button[_ngcontent-%COMP%]{background-color:#f44336;color:#fff;height:50px;padding:10px 20px;border:none;border-radius:5px;font-size:16px;text-decoration:none;transition:opacity .3s ease-in-out}.show-container[_ngcontent-%COMP%]{display:flex;height:65%;flex-wrap:wrap;align-items:center}.show-container[_ngcontent-%COMP%]   .show-info[_ngcontent-%COMP%]{margin:2rem;min-width:200px;text-align:center}.show-container[_ngcontent-%COMP%]   .show-info[_ngcontent-%COMP%]   .show-time[_ngcontent-%COMP%]{border:1px solid #999;color:#4abd5d;padding:4px;border-radius:4px;width:100%;height:40px;font-weight:700;display:flex;justify-content:center;align-items:center;flex-direction:column;position:relative;cursor:pointer}.show-container[_ngcontent-%COMP%]   .show-info[_ngcontent-%COMP%]   .show-time[_ngcontent-%COMP%]:hover{background-color:#fff}.show-movie[_ngcontent-%COMP%]{margin:1rem 0;font-weight:700}.cust-rating[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:10px}.cust-rating[_ngcontent-%COMP%]   .theatre-rating[_ngcontent-%COMP%]{font-size:22px;font-weight:700}.theatres-conatiner[_ngcontent-%COMP%]{margin:1rem 0 2rem 2rem}"]}),n})()},{path:":id/"+g.p.bookSeats,component:(()=>{class n{constructor(t,i){this.cinemaService=t,this.router=i,this.showTime="",this.activeDate=new Date}ngOnInit(){this.cinemaService.getBookSeatsDetails().subscribe(t=>{t&&(this.movie=t.movie,this.jonors=this.movie?.tags?.split(","),this.showTime=t.showTime,this.theatre=t.theatre)}),this.cinemaService.getActiveDate().subscribe(t=>{t&&(this.activeDate=t.activeDate)})}navigateToTheatres(){this.router.navigate([this.router.url.replace(g.p.bookSeats,"")])}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.j),e.Y36(l.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-theatre-book-seats"]],decls:15,vars:7,consts:[[1,"details-container"],[1,"back-button",3,"click"],[1,"movie-theatre-container"],[1,"movie-details-container"],[1,"movie-name"],[1,"theatre-details-container"],[1,"theatre-name"],[1,"book-date","separator"],[1,"movie-tags-container","separator"],[4,"ngFor","ngForOf"],[1,"movie-tags"],["class","movie-tag-separator",4,"ngIf"],[1,"movie-tag-separator"]],template:function(t,i){1&t&&(e.TgZ(0,"app-header")(1,"div",0)(2,"button",1),e.NdJ("click",function(){return i.navigateToTheatres()}),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4),e._uU(6),e.qZA()(),e.TgZ(7,"div",5)(8,"div",6),e._uU(9),e.qZA(),e.TgZ(10,"div",7),e._uU(11),e.ALo(12,"date"),e.qZA(),e.TgZ(13,"div",8),e.YNc(14,B,4,2,"ng-container",9),e.qZA()()()()()),2&t&&(e.xp6(6),e.Oqu(null==i.movie?null:i.movie.movie_name),e.xp6(3),e.Oqu(null==i.theatre?null:i.theatre.theatre_name),e.xp6(2),e.hij(" ",e.xi3(12,4,i.activeDate,"EEEE, MMMM d, y")," "),e.xp6(3),e.Q6J("ngForOf",i.jonors))},dependencies:[c.sg,c.O5,_.G,c.uU],styles:['.details-container[_ngcontent-%COMP%]{color:#fff;display:flex;align-items:center}.back-button[_ngcontent-%COMP%]{background-color:#f44336;float:right;color:#fff;height:50px;margin:15px;padding:10px;border:none;border-radius:5px;width:25px;font-size:16px;text-decoration:none;cursor:pointer}.back-button[_ngcontent-%COMP%]:before{content:"<";position:absolute;top:7%;left:22px}.theatre-details-container[_ngcontent-%COMP%]{display:flex;gap:1rem}.movie-name[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.movie-details-container[_ngcontent-%COMP%]{display:flex}.separator[_ngcontent-%COMP%]{border-left:1px solid #fff;padding:0 10px}.movie-tags-container[_ngcontent-%COMP%]{display:flex;align-items:center}.movie-tag-separator[_ngcontent-%COMP%]{background-color:#fff;height:6px;width:6px;border-radius:50%;margin:0 10px}.imdb-rating[_ngcontent-%COMP%]{display:flex;gap:5px}.imdb-rating-score[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:50%}']}),n})()}];let J=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.Bz.forChild(L),l.Bz]}),n})();var Y=s(4466);let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,J,Y.m8]}),n})()}}]);