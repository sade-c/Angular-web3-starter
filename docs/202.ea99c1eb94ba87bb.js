"use strict";(self.webpackChunkAngweb3=self.webpackChunkAngweb3||[]).push([[202],{7617:(K,A,o)=>{o.r(A),o.d(A,{GreeterModule:()=>D});var x=o(6895),S=o(9965),$=o(7127),l=o(5861),c=o(433);const C=JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"GreeterError","type":"error"},{"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"greeting","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"throwError","outputs":[],"stateMutability":"pure","type":"function"}]}');var G=o(1317),T=o(5687),Z=o(8538),I=o.n(Z),f=o(9751),j=o(1135),B=o(4315);class O{constructor(t,e,n){this._messageService=t,this._web3Service=e,this._eventListeners={},this.address=n,this._web3Service.getUserAccountAddressSubject().subscribe(a=>{this._fromAccount=a})}getContract(t){var e=this;return(0,l.Z)(function*(){if(null!=e.contract)return e.contract;if(e._web3Service){const n=yield e._web3Service.getContract(t,e.address);if(null==n)throw new Error("Contract not found. Confirm that your wallet is connected on the right chain");return n}throw new Error("Web3 not instanciated")})()}owner(){return new f.y(t=>{this._owner?t.next(this._owner):this.getString(this.getContractABI(),"owner").then(e=>{this._owner=e,t.next(this._owner)})})}isOwner(){return new f.y(t=>{this.owner().subscribe(e=>{this._web3Service.getUserAccountAddressSubject().subscribe(n=>{t.next(e===n)})})})}getEventBehaviorSubject(t){var e=this;return(0,l.Z)(function*(){const n=yield e.getContract(e.getContractABI()),a=e._validateEventAndInstanceSubject(n,t.eventName,t.web3jsParameters),i=a.key;if(a.new){let u;t.web3jsParameters&&(u={filter:t.web3jsParameters}),n.events[t.eventName](u).on("data",p=>{e._eventListeners[i]&&e._eventListeners[i].next(p.returnValues)}).on("error",p=>{console.error(t.eventName,p)})}return e._eventListeners[i]})()}getWeb3EventSubscription(t){var e=this;return(0,l.Z)(function*(){return(yield e.getContract(e.getContractABI())).events[t.eventName](t)})()}allWeb3Events(){var t=this;return(0,l.Z)(function*(){return(yield t.getContract(t.getContractABI())).getPastEvents("allEvents")})()}getWeb3PastEventSubscription(t){var e=this;return(0,l.Z)(function*(){return(yield e.getContract(e.getContractABI())).getPastEvents(t.eventName,t.web3jsParameters)})()}_validateEventAndInstanceSubject(t,e,n){if(t.events[e]){let a=!1;const i=n?e.concat(JSON.stringify(n)):e;return this._eventListeners[i]||(this._eventListeners[i]=new j.X(null),a=!0),{new:a,key:i}}throw new Error(`Event '${e}' does not exists in the contract`)}call(t,e,...n){return this.callPrivate(t,e,this.justReturnV,...n)}callBN(t,e,...n){return this.callPrivate(t,e,a=>new(I())(a),...n)}send(t,e,n,a,i,...u){return new f.y(m=>{this.getContract(t).then(p=>{let g;this._web3Service.getUserAccountAddressSubject().subscribe(function(){var y=(0,l.Z)(function*(h){try{g=yield p.methods[e](...u).send({from:h}).on("transactionHash",d=>{m.next({success:!0,result:n})}).once("confirmation",(d,v,b)=>{a&&a({success:!0,result:i||""})})}catch(d){const v=B.M[d.code];console.log(d.message);let b="We had some problem. The transaction wasn't sent.";v&&(b=`${v.title}: ${v.message}. The transaction wasn't sent.`),console.warn(d),a?a({success:!1,result:b}):m.next({success:!1,result:b})}});return function(h){return y.apply(this,arguments)}}())})})}getString(t,e){return this.getProperty(t,e)}getStringArray(t,e){return this.getProperty(t,e)}getBoolean(t,e){var n=this;return(0,l.Z)(function*(){return n.getProperty(t,e)})()}getNumber(t,e){return this.getProperty(t,e)}getBN(t,e){return this.getProperty(t,e)}getProperty(t,e){var n=this;return(0,l.Z)(function*(){try{return yield(yield n.getContract(t)).methods[e]().call({from:n._fromAccount})}catch(a){console.error(a),n._messageService.showMessageAlert("Error",`Unexpected exception when fetching '${e}': ${a.message}`)}})()}justReturnV(t){return t}callPrivate(t,e,n=this.justReturnV,...a){return new f.y(i=>{this.getContract(t).then(u=>{let m;this._web3Service.getUserAccountAddressSubject().subscribe(function(){var p=(0,l.Z)(function*(g){try{m=yield u.methods[e](...a).call({from:g}),i.next({success:!0,result:n(m)})}catch(y){const h=B.M[y.code];let d="We had some problem. The transaction wasn't sent.";h&&(d=`${h.title}: ${h.message}. The transaction wasn't sent.`),console.warn(y),i.next({success:!1,result:d})}});return function(g){return p.apply(this,arguments)}}())})})}}var w=o(9834),s=o(1571),F=o(529);let R=(()=>{class r extends O{constructor(e,n,a,i){super(i,n,n.currentConfig.contracts.Greeter),this.provider=e,this.wallet=n,this.http=a}getContractABI(){return C.Mt}greet(){var e=this;return(0,l.Z)(function*(){let n=yield yield e.getString(C.Mt,"greet");return console.log(n),n})()}finalSetGreetings(e,n){return this.send(C.Mt,"setGreeting",`Transaction to send  ${e} was sent successfully`,n,`Transaction to finalize tchanged ${e} was confirmed`,e)}}return r.\u0275fac=function(e){return new(e||r)(s.LFG(G.$),s.LFG(T.N),s.LFG(F.eN),s.LFG(w.t))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const N=JSON.parse('{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}'),J=JSON.parse('{"required":"Field is required","minlength":"Field must be at least {0} characters long","maxlength":"Field must be at most {0} characters long","min":"Field must be at least {0}","max":"Field must be at most {0}","pattern":"Field is invalid","email":"Field must be a valid email address","ethereumAccount":"Field must be a valid Ethereum account address"}');var L=o.t(J,2);class P{constructor(){this.errorMessages={},this.submitted=!1,this.errorMessages=L}hasError(t,e){return this.form.controls[t].hasError(e)}getErrorMessage(t){if(!this.form.controls[t].dirty&&!this.form.controls[t].touched&&!this.submitted)return null;for(let e in this.form.controls[t].errors){if(this.errorMessages[e]&&-1==this.errorMessages[e].indexOf("{0}"))return this.errorMessages[e];if(this.errorMessages[e]){const n=Object.values(this.form.controls[t].getError(e))[0];return`${this.errorMessages[e]}`.replace("{0}",n)}return e}return null}getAllErrors(){let t=[];for(let e in this.form.controls)for(let n in this.form.controls[e].errors)t.push(this.errorMessages[n]?`${e} ${this.errorMessages[n]}`:`${e} ${n}`);return t}}var U=o(2172);function _(r){return 42==r.value.trim().length||/^0x[0-9a-fA-F]+$/.test(r.value)?null:{ethereumAddress:!0}}var M=o(1740);function Y(r,t){if(1&r&&(s.TgZ(0,"div",6),s._uU(1),s.qZA()),2&r){const e=s.oxw();s.xp6(1),s.AsE(" ",e.formatedBalance," ",e.symbol," ")}}let W=(()=>{class r extends P{constructor(e,n,a){super(),this._formBuilder=e,this._messageService=n,this._numberService=a,this.symbol="",this.decimals=1,this.isLoading=!1,this.showBalance=!1,this.formatedBalance="0",this.formatedBalanceTooltip="0"}ngOnInit(){this.form=this._formBuilder.group({accountAddress:["",[c.kI.required,c.kI.minLength(42),_]]})}getBalance(e){if(this.submitted=!0,e.preventDefault(),this.form.valid){this.isLoading=!0,this.showBalance=!0,console.log(this.form.value.accountAddress);try{this.contractERC20.balanceOf(this.form.get("accountAddress").value).subscribe(n=>{if(0==n.success)return this._messageService.showToast(`It was not possible to get ${this.form.controls.accountAddress.value} ${this.symbol} balance`),void(this.showBalance=!1);this.formatedBalance=this._numberService.formatBNShortScale(n.result),this.formatedBalanceTooltip=this._numberService.formatBN(n.result),this.isLoading=!1})}catch(n){this.isLoading=!1,this._messageService.showToast(n.message)}}else this.showBalance=!1,this._messageService.showToast("The data filled in the form is not valid. Please, fill the form correctly before submit it")}}return r.\u0275fac=function(e){return new(e||r)(s.Y36(c.qu),s.Y36(w.t),s.Y36(U.G))},r.\u0275cmp=s.Xpm({type:r,selectors:[["dapp-erc20-balance"]],inputs:{contractERC20:"contractERC20",symbol:"symbol",decimals:"decimals"},features:[s.qOj],decls:11,vars:1,consts:[[1,"container",3,"formGroup","ngSubmit"],[1,"field"],["for","accountAddress",1,"block"],["id","accountAddress","type","accountAddress","aria-describedby","username2-help","formControlName","accountAddress","pInputText","",1,"ng-invalid","ng-dirty"],["id","accountAddress-help",1,"p-error","block"],["balance",""],[1,"balance"]],template:function(e,n){1&e&&(s.TgZ(0,"form",0),s.NdJ("ngSubmit",function(i){return n.getBalance(i)}),s.TgZ(1,"h5"),s._uU(2,"Invalid"),s.qZA(),s.TgZ(3,"div",1)(4,"label",2),s._uU(5,"Account Address"),s.qZA(),s._UZ(6,"input",3),s.TgZ(7,"small",4),s._uU(8,"Inform the 42 characters long account address and ENTER."),s.qZA()()(),s.YNc(9,Y,2,2,"ng-template",null,5,s.W1O)),2&e&&s.Q6J("formGroup",n.form)},dependencies:[c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,M.o],styles:[".container[_ngcontent-%COMP%]{padding-top:5px}.input_40characters[_ngcontent-%COMP%]{width:45ch}.value-container[_ngcontent-%COMP%]{display:flex;gap:5px;padding-top:25px;padding-bottom:15px;align-items:center}.value-label[_ngcontent-%COMP%]{font-weight:500}.balance[_ngcontent-%COMP%]{color:#3f51b5;font-size:x-large}"]}),r})();var z=o(5593),V=o(1795);const Q=[{path:"",component:$.F,children:[{path:"",component:(()=>{class r{constructor(e,n,a){this.wallet=e,this.greeterService=n,this._messageService=a,this.gform=new c.nJ({saysame:new c.p4("")}),this.ERC20=this.getContractABI()}getContractABI(){return N.Mt}greetMe(){var e=this;return(0,l.Z)(function*(){e.greet=yield e.greeterService.greet(),console.log(e.greet)})()}onApproveClicked(){var e=this;return(0,l.Z)(function*(){console.log("onApproveClicked"),yield e.greeterService.finalSetGreetings(e.gform.value.saysame).subscribe(n=>{e._messageService.showMessageAlert(n.success?"info":"error",n.result)})})()}}return r.\u0275fac=function(e){return new(e||r)(s.Y36(T.N),s.Y36(R),s.Y36(w.t))},r.\u0275cmp=s.Xpm({type:r,selectors:[["app-greet"]],decls:23,vars:3,consts:[[1,"grid"],[1,"col-12","md:col-6"],[1,"card","p-fluid"],[1,"formgroup-inline"],[1,"field"],["pButton","","pRipple","","type","button","label","Get Greet",1,"p-button-secondary","mr-2","mb-2",3,"click"],[1,"font-medium","ml-2"],[1,"normal-text-color",3,"formGroup"],[1,"col-12","md:col-4"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],["type","text","pInputText","","placeholder","sayed","formControlName","saysame"],["pButton","","pRipple","","type","button","label","Write",1,"p-button-secondary","mr-2","mb-2",3,"click"],[3,"contractERC20"]],template:function(e,n){1&e&&(s.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),s._uU(4,"Read Contract"),s.qZA(),s.TgZ(5,"div",3)(6,"div",4)(7,"button",5),s.NdJ("click",function(){return n.greetMe()}),s.qZA()(),s.TgZ(8,"div",4)(9,"span",6),s._uU(10),s.qZA()()()()(),s.TgZ(11,"div",1)(12,"div",2)(13,"form",7)(14,"div",8)(15,"div",9)(16,"span",10),s._uU(17,"Say Sameting"),s.qZA(),s._UZ(18,"input",11),s.qZA()(),s.TgZ(19,"div",8)(20,"div",9)(21,"button",12),s.NdJ("click",function(){return n.onApproveClicked()}),s.qZA()()()()()()(),s._UZ(22,"dapp-erc20-balance",13)),2&e&&(s.xp6(10),s.hij(" ",n.greet," "),s.xp6(3),s.Q6J("formGroup",n.gform),s.xp6(9),s.Q6J("contractERC20",n.ERC20))},dependencies:[c._Y,c.Fj,c.JJ,c.JL,W,c.sg,c.u,z.Hq,M.o,V.H]}),r})()}]}];let X=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[S.Bz.forChild(Q),S.Bz]}),r})();var E=o(3110);let D=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[x.ez,c.u5,X,E.m,E.m]}),r})()}}]);