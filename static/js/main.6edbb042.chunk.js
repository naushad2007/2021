(this["webpackJsonpcowin-notif"]=this["webpackJsonpcowin-notif"]||[]).push([[0],{230:function(t,e,i){},231:function(t,e,i){},253:function(t,e){},255:function(t,e){},265:function(t,e){},267:function(t,e){},294:function(t,e){},295:function(t,e){},300:function(t,e){},302:function(t,e){},309:function(t,e){},328:function(t,e){},371:function(t,e,i){"use strict";i.r(e);var n=i(0),a=i.n(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=i(24),s=i.n(c),o=(i(230),i(28)),r=i.n(o),l=i(45),u=i(103),g=i(104),M=i(224),j=i(221),I=(i(231),i(376)),y=i(379),h=i(378),d=i(382),A=i(384),N=i(383),D=i(381),x=i(61),b=i(380),p=i(118),f=i(56),T=i.n(f),O=i(377),E=i(145),S=i.n(E),L="https://cdn-api.co-vin.in/api",k=parseInt(localStorage.pollFreq)||1800,v=function(){function t(){Object(u.a)(this,t)}return Object(g.a)(t,[{key:"req",value:function(t){return new Promise((function(e,i){T.a.get(t).then((function(t){return e(t.data)})).catch((function(t){return i(t)}))}))}},{key:"init",value:function(t,e){var i=this;return new O.a((function(n){var a=i.req.bind(i);i.watcher=setInterval((function(){a("".concat("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin","?pincode=").concat(t,"&date=").concat(e)).then((function(t){n.next(t)})).catch((function(t){n.error(t)}))}),k)}))}},{key:"initDist",value:function(t,e){var i=this;return new O.a((function(n){var a=i.req.bind(i),c=function(){a("".concat("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict","?district_id=").concat(t,"&date=").concat(e)).then((function(t){n.next(t)})).catch((function(t){n.error(t)}))};c(),i.watcher=setInterval(c,k)}))}},{key:"clearWatch",value:function(){console.log(this),clearInterval(this.watcher)}},{key:"clearAuthWatch",value:function(){clearInterval(this.authWatcher)}},{key:"generateOtp",value:function(){var t=Object(l.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.a.post("https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP",{mobile:e,secret:"U2FsdGVkX19mD56KTNfQsZgXJMwOG7u/6tuj0Qvil1LEjx783oxHXGUTDWYm+XMYVGXPeu+a24sl5ndEKcLTUQ=="}).then((function(t){return t.data})).catch((function(t){throw t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"verifyOtp",value:function(){var t=Object(l.a)(r.a.mark((function t(e,i){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=S.a.SHA256(e).toString(S.a.enc.Hex),console.log(n),t.next=4,T.a.post("https://cdn-api.co-vin.in/api/v2/auth/validateMobileOtp",{otp:n,txnId:i}).then((function(t){return console.log(t),t.data})).catch((function(t){return console.log(t)}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}()},{key:"getBenefeciaries",value:function(){var t=Object(l.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.a.get("https://cdn-api.co-vin.in/api/v2/appointment/beneficiaries",{headers:{"content-type":"application/json",authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){return t.data.beneficiaries})).catch((function(t){throw t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"book",value:function(){var t=Object(l.a)(r.a.mark((function t(e,i){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.a.post("https://cdn-api.co-vin.in/api//v2/appointment/schedule",e,{headers:{"content-type":"application/json",authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){return t.data})).catch((function(t){throw t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}()},{key:"trackAuth",value:function(t){var e=this;return new O.a((function(i){var n=e.getBenefeciaries.bind(e);e.authWatcher=setInterval((function(){n(t).then((function(t){i.next(t)})).catch((function(t){i.next("err")}))}),45e3)}))}},{key:"getStates",value:function(){var t=Object(l.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",T.a.get("".concat(L,"/v2/admin/location/states")).then((function(t){return t.data})).catch((function(t){throw t})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getDistricts",value:function(){var t=Object(l.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",T.a.get("".concat(L,"/v2/admin/location/districts/").concat(e)).then((function(t){return t.data.districts})).catch((function(t){throw t})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),w=i(146),m=i.n(w),C=i(6),z=I.a.TabPane,B=new v,Y=y.a.Search,Q=h.a.Option,U=function(t){Object(M.a)(i,t);var e=Object(j.a)(i);function i(t){var n;Object(u.a)(this,i),n=e.call(this,t);var a={isWatchingAvailability:!1,vaccineType:"ANY",bookingInProgress:!1,isAuthenticated:!!localStorage.token,minAge:18,districtId:null,stateId:null,beneficiaries:[],selectedBeneficiaries:[],otpData:{txnId:null},vaccineCalendar:{},zip:null,enableOtp:!1,otp:null,mobile:null,token:localStorage.token||null,selectedTab:"1",dates:[],states:[],districs:[],session:null,bookingCenter:null,showSuccessModal:!1};return localStorage.appData&&(a=Object.assign(a,JSON.parse(localStorage.appData))),localStorage.token&&(a.token=localStorage.token,a.isAuthenticated=!0),n.state=a,n}return Object(g.a)(i,[{key:"waitForOtp",value:function(){var t=Object(l.a)(r.a.mark((function t(){var e,i=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("waiting for otp"),this.ac&&this.ac.abort(),!("OTPCredential"in window)){t.next=17;break}return console.log("Waiting for SMS. Try sending yourself a following message:\n\nYour verification code is: 123ABC\n\n@whatwebcando.today #123ABC"),t.prev=4,this.ac=new AbortController,t.next=8,navigator.credentials.get({otp:{transport:["sms"]},signal:this.ac.signal}).then((function(t){console.log("otp is ",t),console.log("otp, ".concat(t)),i.setState({otp:t})})).catch((function(t){console.log("ssss ".concat(t))}));case 8:e=t.sent,console.log(e),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),console.log(t.t0);case 15:t.next=18;break;case 17:console.log("Web OTP API not supported");case 18:case"end":return t.stop()}}),t,this,[[4,12]])})));return function(){return t.apply(this,arguments)}}()},{key:"getBeneficiaries",value:function(){var t=this;console.log("get bens"),B.getBenefeciaries(this.state.token).then((function(e){t.setState({beneficiaries:e},(function(){t.setStorage()}))})).catch((function(e){console.log(e),delete localStorage.token,t.setState({isAuthenticated:!1,token:null,enableOtp:!1},(function(){t.state.mobile}))}))}},{key:"speak",value:function(t){try{var e=new SpeechSynthesisUtterance;e.lang="en-US",e.volume=1,e.rate=1,e.pitch=1,e.text=t,window.speechSynthesis.speak(e)}catch(i){console.log(i)}}},{key:"componentDidMount",value:function(){var t=this,e=localStorage.token||this.state.token;e&&(this.getBeneficiaries(),this.trackAuth(e)),B.getStates().then((function(e){t.setState({states:e.states},(function(){t.selectState(t.state.stateId),t.selectDistrict(t.state.districtId)}))})).catch((function(t){console.log(t)}));try{Notification.requestPermission((function(t){console.log("Notification permission status:",t)}))}catch(n){console.log(n)}this.notifSound=document.getElementById("notif");var i={title:"Vaccine Notifications Enabled",body:"You now have notifications active for Covid vaccine availability",native:!0,vibrate:[300,100,400]};try{Notification.requestPermission((function(t){"granted"===t&&navigator.serviceWorker.ready.then((function(t){t.showNotification(i.title,i)}))})),new Notification(i.title,i)}catch(n){console.log(n)}}},{key:"setStorage",value:function(){var t=Object.assign({},this.state);delete t.enableOtp,delete t.vaccineCalendar,delete t.isWatchingAvailability,localStorage.appData=JSON.stringify(t)}},{key:"componentWillUnmount",value:function(){this.setStorage(),this.watcher&&this.watcher.unsubscribe()}},{key:"handleNotification",value:function(){var t=this,e=this.state.vaccineCalendar.centers,i=1;this.state.selectedBeneficiaries&&Array.isArray(this.state.selectedBeneficiaries)&&this.state.selectedBeneficiaries.length>0&&(i=this.state.selectedBeneficiaries.length),e.map((function(e){e.sessions.map((function(n){if(parseInt(n.min_age_limit)===t.state.minAge&&parseInt(n.available_capacity)>=i&&!t.state.bookingInProgress){var a=t.state.vaccineType;if("ANY"!==a&&a!==n.vaccine)return;var c={title:e.name,body:"".concat(e.pincode," ").concat(e.address," has ").concat(n.available_capacity," on ").concat(n.date),vibrate:[300,100,400],native:!0};try{Notification.requestPermission((function(t){"granted"===t&&navigator.serviceWorker.ready.then((function(t){t.showNotification(c.message,c)}))})),new Notification(c.title,c),t.speak("Vaccines Available. Attempting to book."),t.setState({bookingInProgress:!0},(function(){t.book(n,e)}))}catch(s){console.log(s)}}}))}))}},{key:"book",value:function(){var t=Object(l.a)(r.a.mark((function t(e,i){var n,a,c=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],t.next=3,this.setState({bookingSession:e,bookingCenter:i});case 3:if(0!==this.state.selectedBeneficiaries.length){t.next=8;break}return this.state.isAuthenticated||this.setState({enableOtp:!0},(function(){c.generateOtp()})),t.abrupt("return");case 8:this.state.selectedBeneficiaries.map((function(t){n.push(t.beneficiary_reference_id)}));case 9:a={dose:this.state.dose,session_id:e.session_id,slot:e.slots[0],beneficiaries:n},B.book(a,this.state.token).then((function(t){console.log("Booking success ",t.appointment_id),c.clearWatch(),c.setState({bookingInProgress:!1,appointment_id:t.appointment_id,showSuccessModal:!0})})).catch((function(t){c.setState({bookingInProgress:!1,session:null,bookingCenter:null});var e="Booking did not get through, tracking for next slot";c.speak(e),console.log(e)}));case 11:case"end":return t.stop()}}),t,this)})));return function(e,i){return t.apply(this,arguments)}}()},{key:"initWatch",value:function(t){var e=this;this.setStorage(),this.setState({isWatchingAvailability:!0}),"1"===this.state.selectedTab?this.watcher=B.initDist(this.state.districtId,m()().format("DD-MM-YYYY")).subscribe({next:function(t){e.setState({vaccineCalendar:t},(function(){e.handleNotification()}))},error:function(t){console.error("something wrong occurred: "+t)},complete:function(){console.log("done"),this.setState({isWatchingAvailability:!1})}}):this.watcher=B.init(this.state.zip,m()().format("DD-MM-YYYY")).subscribe({next:function(t){e.setState({vaccineCalendar:t},(function(){e.handleNotification(),e.setStorage()}))},error:function(t){console.error("something wrong occurred: "+t)},complete:function(){console.log("done"),this.setState({isWatchingAvailability:!1})}})}},{key:"trackAuth",value:function(){var t=this;console.log("trackauth"),this.authWatch=B.trackAuth(this.state.token).subscribe({next:function(e){console.log({sdata:e}),Array.isArray(e)?t.setState({beneficiaries:e}):(console.log("asasad"),delete localStorage.token,t.setState({isAuthenticated:!1,token:null},(function(){t.speak("Session expired!"),t.state.isWatchingAvailability&&(t.generateOtp(),B.clearAuthWatch())})))},error:function(e){console.error("something wrong occurred: "+e),t.speak("Session expired!"),delete localStorage.token,t.setState({isAuthenticated:!1,token:null},(function(){t.state.isWatchingAvailability&&!t.state.enableOtp&&(t.generateOtp(),B.clearAuthWatch())}))},complete:function(){console.log("done"),t.setState({isWatchingAvailability:!1})}})}},{key:"clearWatch",value:function(){B.clearWatch(),this.setState({isWatchingAvailability:!1})}},{key:"renderTable",value:function(t){return Object(C.jsx)("table",{style:{marginTop:10},children:t.centers.map((function(t){return t.sessions.map((function(t){t.available_capacity>0&&!1})),Object(C.jsxs)("tr",{children:[Object(C.jsxs)("td",{children:[Object(C.jsx)("h3",{children:t.name}),t.block_name,", ",t.address,", ",t.pincode]}),t.sessions.map((function(t){return Object(C.jsxs)("td",{children:[Object(C.jsx)("h4",{children:t.date}),Object(C.jsx)("p",{children:t.vaccine}),Object(C.jsx)("div",{children:(parseInt(t.available_capacity),"".concat(t.available_capacity," shots available for ").concat(t.min_age_limit,"+"))}),parseInt(t.available_capacity>0)?Object(C.jsxs)("div",{children:[Object(C.jsx)("b",{children:"Available Slots"}),t.slots.map((function(t){return Object(C.jsx)(d.a,{children:t})}))]}):null]},t.session_id)}))]},t.center_id)}))})}},{key:"setMinAge",value:function(t){this.setState({minAge:t.target.value})}},{key:"generateOtp",value:function(){var t=this;this.speak("OTP has been sent to your phone. Please enter OTP"),this.setState({enableOtp:!0},(function(){B.generateOtp(t.state.mobile).then((function(e){t.setState({otpData:e,enableOtp:!0})})).catch((function(e){console.log(e),t.setState({enableOtp:!1})}))}))}},{key:"verifyOtp",value:function(){var t=this;B.verifyOtp(this.state.otp,this.state.otpData.txnId).then((function(e){localStorage.token=e.token,t.setState({token:e.token,isAuthenticated:!0,enableOtp:!1},(function(){t.setStorage(),t.getBeneficiaries(),t.trackAuth(e.token)}))})).catch((function(e){console.log(e),t.state.isAuthenticated&&(delete localStorage.appData,delete localStorage.token,t.setState({token:null,isAuthenticated:!1}))}))}},{key:"selectState",value:function(t){var e=this;this.setState({stateId:t},(function(){B.getDistricts(t).then((function(t){e.setState({districs:t})})).catch((function(t){console.log(t)}))}))}},{key:"selectDistrict",value:function(t){this.setState({districtId:t},(function(){}))}},{key:"render",value:function(){var t=this,e=this.state.vaccineCalendar,i=this.state.isAuthenticated,n=this.state,a=n.beneficiaries,c=n.selectedBeneficiaries;return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("audio",{id:"notif",children:Object(C.jsx)("source",{src:"https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"})}),Object(C.jsxs)("header",{className:"App-header",children:[Object(C.jsx)("h2",{children:"Vaccine bookings and notifications for Covid-19 vaccine availability."}),Object(C.jsx)("p",{children:"This web-app can continously tracks for availability of vaccine and proceed with booking on your behalf."}),Object(C.jsxs)("p",{style:{color:"#555"},children:["Please register on"," ",Object(C.jsx)("a",{href:"https://www.cowin.gov.in/home",target:"_blank",rel:"noreferrer",children:"Cowin"}),", ","add beneficiaries and then, come back here.",Object(C.jsx)("br",{}),"Login and select beneficiaries to enable automatic booking.",Object(C.jsx)("br",{}),"If you do not get the OTP for more than 2 mins, please refresh and start over. When the load is high, OTP generation fails. Please bear with it. You can choose to track notifications only. Simply proceed with tracking without logging in.",Object(C.jsx)("br",{}),"*Please be careful with the location selection as the booking can automatically happen at any center that has availability."]})]}),Object(C.jsx)(d.a,{gutter:{xs:8,sm:16,md:24,lg:32},children:Object(C.jsxs)(A.a,{children:[i?null:Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:"Login"}),this.state.enableOtp?null:Object(C.jsx)(Y,{placeholder:this.state.mobile?this.state.mobile:"Mobile Number",allowClear:!0,type:"number",enterButton:"Generate OTP",size:"large",onSearch:function(e){t.setState({mobile:e,enableOtp:!0},(function(){t.generateOtp()}))}}),this.state.enableOtp?Object(C.jsx)(Y,{placeholder:"Enter OTP",allowClear:!0,type:"number",enterButton:"Submit",size:"large",onSearch:function(e){t.setState({otp:e},(function(){t.verifyOtp()}))}}):null]}),i?Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{children:"Beneficiaries"}),0===a.length?Object(C.jsxs)("p",{children:["You do not have any benificiares added yet. Please login to"," ",Object(C.jsx)("a",{href:"https://www.cowin.gov.in/home",target:"_blank",rel:"noreferrer",children:"Cowin"})," ","and add beneficiaries"]}):Object(C.jsx)("p",{children:"Select beneficiaries to book a slot automatically when there's availability. This app can continuously track availability and make a booking."}),this.state.beneficiaries.map((function(e){return Object(C.jsx)(d.a,{children:Object(C.jsx)(N.a,{disabled:t.state.isWatchingAvailability,checked:-1!==c.findIndex((function(t){return t.beneficiary_reference_id===e.beneficiary_reference_id})),onClick:function(i){var n=t.state.selectedBeneficiaries,a=n.findIndex((function(t){return t.beneficiary_reference_id===e.beneficiary_reference_id}));-1===a?n.push(e):n.splice(a,1),t.setState({selectedBeneficiaries:n})},children:e.name})})}))]}):null,Object(C.jsxs)(d.a,{style:{marginTop:10},children:[Object(C.jsx)("h2",{style:{marginTop:10,marginBottom:0},children:"Vaccine Type"}),Object(C.jsxs)(D.a.Group,{style:{marginTop:18,marginLeft:10},onChange:function(e){t.setState({vaccineType:e.target.value})},value:this.state.vaccineType,disabled:this.state.isWatchingAvailability,children:[Object(C.jsx)(D.a,{value:"ANY",children:"Any"}),Object(C.jsx)(D.a,{value:"COVAXIN",children:"Covaxin"}),Object(C.jsx)(D.a,{value:"COVISHIELD",children:"Covishield"})]})]}),Object(C.jsxs)(d.a,{style:{marginTop:10},children:[Object(C.jsx)("h2",{style:{marginTop:10,marginBottom:0},children:"Age Group"}),Object(C.jsxs)(D.a.Group,{style:{marginTop:18,marginLeft:10},onChange:this.setMinAge.bind(this),value:this.state.minAge,disabled:this.state.isWatchingAvailability,children:[Object(C.jsx)(D.a,{value:18,children:"18 to 45 Years"}),Object(C.jsx)(D.a,{value:45,children:"45+ Years"})]})]}),Object(C.jsxs)(d.a,{style:{marginTop:5},children:[Object(C.jsx)("h2",{style:{marginTop:10,marginBottom:0},children:"Dose"}),Object(C.jsxs)(D.a.Group,{style:{marginTop:18,marginLeft:10},onChange:function(e){t.setState({dose:e.target.value})},defaultValue:1,value:this.state.dose,disabled:this.state.isWatchingAvailability,children:[Object(C.jsx)(D.a,{value:1,children:"Dose 1"}),Object(C.jsx)(D.a,{value:2,children:"Dose 2"})]})]}),Object(C.jsx)("h2",{style:{marginTop:15,marginBottom:0},children:"Select Location"}),Object(C.jsxs)(I.a,{defaultActiveKey:this.state.selectedTab||"1",onChange:function(e){t.setState({selectedTab:e})},children:[Object(C.jsxs)(z,{tab:"Track By District",children:[Object(C.jsx)(h.a,{style:{width:234},size:"large",defaultValue:this.state.stateId,onChange:this.selectState.bind(this),placeholder:"Select State",children:this.state.states.map((function(t){return Object(C.jsx)(Q,{value:t.state_id,children:t.state_name},t.state_id)}))}),Object(C.jsx)(h.a,{style:{width:234},defaultValue:this.state.districtId,size:"large",onChange:function(e){t.selectDistrict(e)},placeholder:"Select District",children:this.state.districs.map((function(t){return Object(C.jsx)(Q,{value:t.district_id,children:t.district_name},t.district_id)}))}),Object(C.jsx)(x.a,{type:"primary",size:"large",loading:this.state.isWatchingAvailability,onClick:function(e){return t.initWatch()},children:this.state.isWatchingAvailability?"Tracking":this.state.isAuthenticated?"Track Availability & Book":"Track Availability"}),this.state.isWatchingAvailability?Object(C.jsx)(x.a,{type:"primary",icon:Object(C.jsx)(p.a,{}),size:"large",danger:!0,onClick:this.clearWatch.bind(this),children:"Stop"}):null]},1),Object(C.jsx)(z,{tab:"Track By Pincode",children:Object(C.jsxs)(d.a,{children:[Object(C.jsx)(Y,{disabled:this.state.isWatchingAvailability,placeholder:this.state.zip?this.state.zip:"Enter your area pincode",allowClear:!0,type:"number",enterButton:this.state.isWatchingAvailability?"Tracking":this.state.isAuthenticated?"Track Availability & Book":"Track Availability",size:"large",loading:this.state.isWatchingAvailability,onSearch:function(e){t.setState({zip:e,isWatchingAvailability:!0},(function(){t.initWatch()}))}}),this.state.isWatchingAvailability?Object(C.jsx)(x.a,{type:"primary",icon:Object(C.jsx)(p.a,{}),size:"large",danger:!0,onClick:this.clearWatch.bind(this),children:"Stop"}):null]})},2)]})]})}),e&&e.centers?this.renderTable(e):null,Object(C.jsx)("h3",{style:{marginTop:15,marginBottom:0},children:"Donate"}),Object(C.jsx)("div",{children:Object(C.jsx)("a",{className:"paytm-button",href:"https://paytm.me/gO-42Lh",rel:"noreferrer",target:"_blank",children:"Donate with PayTM"})}),Object(C.jsx)("div",{children:Object(C.jsxs)("a",{className:"paypal-button",href:"https://paypal.me/YashwanthMaheshwaram?locale.x=en_GB",rel:"noreferrer",target:"_blank",children:[Object(C.jsx)("img",{className:"paypal-button-logo paypal-button-logo-pp paypal-button-logo-gold",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICAgIDxwYXRoIGZpbGw9IiMwMDljZGUiIGQ9Ik0gMjAuOTA1IDkuNSBDIDIxLjE4NSA3LjQgMjAuOTA1IDYgMTkuNzgyIDQuNyBDIDE4LjU2NCAzLjMgMTYuNDExIDIuNiAxMy42OTcgMi42IEwgNS43MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMy4xIDQuNjE1IDMuNiBMIDEuMzM5IDI1LjggQyAxLjMzOSAyNi4yIDEuNjIgMjYuNyAyLjA4OCAyNi43IEwgNi45NTYgMjYuNyBMIDYuNjc1IDI4LjkgQyA2LjU4MSAyOS4zIDYuODYyIDI5LjYgNy4yMzYgMjkuNiBMIDExLjM1NiAyOS42IEMgMTEuODI1IDI5LjYgMTIuMjkyIDI5LjMgMTIuMzg2IDI4LjggTCAxMi4zODYgMjguNSBMIDEzLjIyOCAyMy4zIEwgMTMuMjI4IDIzLjEgQyAxMy4zMjIgMjIuNiAxMy43OSAyMi4yIDE0LjI1OCAyMi4yIEwgMTQuODIxIDIyLjIgQyAxOC44NDUgMjIuMiAyMS45MzUgMjAuNSAyMi44NzEgMTUuNSBDIDIzLjMzOSAxMy40IDIzLjE1MyAxMS43IDIyLjAyOSAxMC41IEMgMjEuNzQ4IDEwLjEgMjEuMjc5IDkuOCAyMC45MDUgOS41IEwgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAxMjE2OSIgZD0iTSAyMC45MDUgOS41IEMgMjEuMTg1IDcuNCAyMC45MDUgNiAxOS43ODIgNC43IEMgMTguNTY0IDMuMyAxNi40MTEgMi42IDEzLjY5NyAyLjYgTCA1LjczOSAyLjYgQyA1LjI3MSAyLjYgNC43MSAzLjEgNC42MTUgMy42IEwgMS4zMzkgMjUuOCBDIDEuMzM5IDI2LjIgMS42MiAyNi43IDIuMDg4IDI2LjcgTCA2Ljk1NiAyNi43IEwgOC4yNjcgMTguNCBMIDguMTczIDE4LjcgQyA4LjI2NyAxOC4xIDguNzM1IDE3LjcgOS4yOTYgMTcuNyBMIDExLjYzNiAxNy43IEMgMTYuMjI0IDE3LjcgMTkuNzgyIDE1LjcgMjAuOTA1IDEwLjEgQyAyMC44MTIgOS44IDIwLjkwNSA5LjcgMjAuOTA1IDkuNSI+PC9wYXRoPgogICAgPHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA5LjQ4NSA5LjUgQyA5LjU3NyA5LjIgOS43NjUgOC45IDEwLjA0NiA4LjcgQyAxMC4yMzIgOC43IDEwLjMyNiA4LjYgMTAuNTEzIDguNiBMIDE2LjY5MiA4LjYgQyAxNy40NDIgOC42IDE4LjE4OSA4LjcgMTguNzUzIDguOCBDIDE4LjkzOSA4LjggMTkuMTI3IDguOCAxOS4zMTQgOC45IEMgMTkuNTAxIDkgMTkuNjg4IDkgMTkuNzgyIDkuMSBDIDE5Ljg3NSA5LjEgMTkuOTY4IDkuMSAyMC4wNjMgOS4xIEMgMjAuMzQzIDkuMiAyMC42MjQgOS40IDIwLjkwNSA5LjUgQyAyMS4xODUgNy40IDIwLjkwNSA2IDE5Ljc4MiA0LjYgQyAxOC42NTggMy4yIDE2LjUwNiAyLjYgMTMuNzkgMi42IEwgNS43MzkgMi42IEMgNS4yNzEgMi42IDQuNzEgMyA0LjYxNSAzLjYgTCAxLjMzOSAyNS44IEMgMS4zMzkgMjYuMiAxLjYyIDI2LjcgMi4wODggMjYuNyBMIDYuOTU2IDI2LjcgTCA4LjI2NyAxOC40IEwgOS40ODUgOS41IFoiPjwvcGF0aD4KPC9zdmc+Cg",alt:"","aria-label":"pp"}),Object(C.jsx)("img",{className:"paypal-button-logo paypal-button-logo-paypal paypal-button-logo-gold",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAwIDMyIiB4bWxucz0iaHR0cDomI3gyRjsmI3gyRjt3d3cudzMub3JnJiN4MkY7MjAwMCYjeDJGO3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaW4gbWVldCI+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAxMiA0LjkxNyBMIDQuMiA0LjkxNyBDIDMuNyA0LjkxNyAzLjIgNS4zMTcgMy4xIDUuODE3IEwgMCAyNS44MTcgQyAtMC4xIDI2LjIxNyAwLjIgMjYuNTE3IDAuNiAyNi41MTcgTCA0LjMgMjYuNTE3IEMgNC44IDI2LjUxNyA1LjMgMjYuMTE3IDUuNCAyNS42MTcgTCA2LjIgMjAuMjE3IEMgNi4zIDE5LjcxNyA2LjcgMTkuMzE3IDcuMyAxOS4zMTcgTCA5LjggMTkuMzE3IEMgMTQuOSAxOS4zMTcgMTcuOSAxNi44MTcgMTguNyAxMS45MTcgQyAxOSA5LjgxNyAxOC43IDguMTE3IDE3LjcgNi45MTcgQyAxNi42IDUuNjE3IDE0LjYgNC45MTcgMTIgNC45MTcgWiBNIDEyLjkgMTIuMjE3IEMgMTIuNSAxNS4wMTcgMTAuMyAxNS4wMTcgOC4zIDE1LjAxNyBMIDcuMSAxNS4wMTcgTCA3LjkgOS44MTcgQyA3LjkgOS41MTcgOC4yIDkuMzE3IDguNSA5LjMxNyBMIDkgOS4zMTcgQyAxMC40IDkuMzE3IDExLjcgOS4zMTcgMTIuNCAxMC4xMTcgQyAxMi45IDEwLjUxNyAxMy4xIDExLjIxNyAxMi45IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSAzNS4yIDEyLjExNyBMIDMxLjUgMTIuMTE3IEMgMzEuMiAxMi4xMTcgMzAuOSAxMi4zMTcgMzAuOSAxMi42MTcgTCAzMC43IDEzLjYxNyBMIDMwLjQgMTMuMjE3IEMgMjkuNiAxMi4wMTcgMjcuOCAxMS42MTcgMjYgMTEuNjE3IEMgMjEuOSAxMS42MTcgMTguNCAxNC43MTcgMTcuNyAxOS4xMTcgQyAxNy4zIDIxLjMxNyAxNy44IDIzLjQxNyAxOS4xIDI0LjgxNyBDIDIwLjIgMjYuMTE3IDIxLjkgMjYuNzE3IDIzLjggMjYuNzE3IEMgMjcuMSAyNi43MTcgMjkgMjQuNjE3IDI5IDI0LjYxNyBMIDI4LjggMjUuNjE3IEMgMjguNyAyNi4wMTcgMjkgMjYuNDE3IDI5LjQgMjYuNDE3IEwgMzIuOCAyNi40MTcgQyAzMy4zIDI2LjQxNyAzMy44IDI2LjAxNyAzMy45IDI1LjUxNyBMIDM1LjkgMTIuNzE3IEMgMzYgMTIuNTE3IDM1LjYgMTIuMTE3IDM1LjIgMTIuMTE3IFogTSAzMC4xIDE5LjMxNyBDIDI5LjcgMjEuNDE3IDI4LjEgMjIuOTE3IDI1LjkgMjIuOTE3IEMgMjQuOCAyMi45MTcgMjQgMjIuNjE3IDIzLjQgMjEuOTE3IEMgMjIuOCAyMS4yMTcgMjIuNiAyMC4zMTcgMjIuOCAxOS4zMTcgQyAyMy4xIDE3LjIxNyAyNC45IDE1LjcxNyAyNyAxNS43MTcgQyAyOC4xIDE1LjcxNyAyOC45IDE2LjExNyAyOS41IDE2LjcxNyBDIDMwIDE3LjQxNyAzMC4yIDE4LjMxNyAzMC4xIDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwMzA4NyIgZD0iTSA1NS4xIDEyLjExNyBMIDUxLjQgMTIuMTE3IEMgNTEgMTIuMTE3IDUwLjcgMTIuMzE3IDUwLjUgMTIuNjE3IEwgNDUuMyAyMC4yMTcgTCA0My4xIDEyLjkxNyBDIDQzIDEyLjQxNyA0Mi41IDEyLjExNyA0Mi4xIDEyLjExNyBMIDM4LjQgMTIuMTE3IEMgMzggMTIuMTE3IDM3LjYgMTIuNTE3IDM3LjggMTMuMDE3IEwgNDEuOSAyNS4xMTcgTCAzOCAzMC41MTcgQyAzNy43IDMwLjkxNyAzOCAzMS41MTcgMzguNSAzMS41MTcgTCA0Mi4yIDMxLjUxNyBDIDQyLjYgMzEuNTE3IDQyLjkgMzEuMzE3IDQzLjEgMzEuMDE3IEwgNTUuNiAxMy4wMTcgQyA1NS45IDEyLjcxNyA1NS42IDEyLjExNyA1NS4xIDEyLjExNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA2Ny41IDQuOTE3IEwgNTkuNyA0LjkxNyBDIDU5LjIgNC45MTcgNTguNyA1LjMxNyA1OC42IDUuODE3IEwgNTUuNSAyNS43MTcgQyA1NS40IDI2LjExNyA1NS43IDI2LjQxNyA1Ni4xIDI2LjQxNyBMIDYwLjEgMjYuNDE3IEMgNjAuNSAyNi40MTcgNjAuOCAyNi4xMTcgNjAuOCAyNS44MTcgTCA2MS43IDIwLjExNyBDIDYxLjggMTkuNjE3IDYyLjIgMTkuMjE3IDYyLjggMTkuMjE3IEwgNjUuMyAxOS4yMTcgQyA3MC40IDE5LjIxNyA3My40IDE2LjcxNyA3NC4yIDExLjgxNyBDIDc0LjUgOS43MTcgNzQuMiA4LjAxNyA3My4yIDYuODE3IEMgNzIgNS42MTcgNzAuMSA0LjkxNyA2Ny41IDQuOTE3IFogTSA2OC40IDEyLjIxNyBDIDY4IDE1LjAxNyA2NS44IDE1LjAxNyA2My44IDE1LjAxNyBMIDYyLjYgMTUuMDE3IEwgNjMuNCA5LjgxNyBDIDYzLjQgOS41MTcgNjMuNyA5LjMxNyA2NCA5LjMxNyBMIDY0LjUgOS4zMTcgQyA2NS45IDkuMzE3IDY3LjIgOS4zMTcgNjcuOSAxMC4xMTcgQyA2OC40IDEwLjUxNyA2OC41IDExLjIxNyA2OC40IDEyLjIxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5MC43IDEyLjExNyBMIDg3IDEyLjExNyBDIDg2LjcgMTIuMTE3IDg2LjQgMTIuMzE3IDg2LjQgMTIuNjE3IEwgODYuMiAxMy42MTcgTCA4NS45IDEzLjIxNyBDIDg1LjEgMTIuMDE3IDgzLjMgMTEuNjE3IDgxLjUgMTEuNjE3IEMgNzcuNCAxMS42MTcgNzMuOSAxNC43MTcgNzMuMiAxOS4xMTcgQyA3Mi44IDIxLjMxNyA3My4zIDIzLjQxNyA3NC42IDI0LjgxNyBDIDc1LjcgMjYuMTE3IDc3LjQgMjYuNzE3IDc5LjMgMjYuNzE3IEMgODIuNiAyNi43MTcgODQuNSAyNC42MTcgODQuNSAyNC42MTcgTCA4NC4zIDI1LjYxNyBDIDg0LjIgMjYuMDE3IDg0LjUgMjYuNDE3IDg0LjkgMjYuNDE3IEwgODguMyAyNi40MTcgQyA4OC44IDI2LjQxNyA4OS4zIDI2LjAxNyA4OS40IDI1LjUxNyBMIDkxLjQgMTIuNzE3IEMgOTEuNCAxMi41MTcgOTEuMSAxMi4xMTcgOTAuNyAxMi4xMTcgWiBNIDg1LjUgMTkuMzE3IEMgODUuMSAyMS40MTcgODMuNSAyMi45MTcgODEuMyAyMi45MTcgQyA4MC4yIDIyLjkxNyA3OS40IDIyLjYxNyA3OC44IDIxLjkxNyBDIDc4LjIgMjEuMjE3IDc4IDIwLjMxNyA3OC4yIDE5LjMxNyBDIDc4LjUgMTcuMjE3IDgwLjMgMTUuNzE3IDgyLjQgMTUuNzE3IEMgODMuNSAxNS43MTcgODQuMyAxNi4xMTcgODQuOSAxNi43MTcgQyA4NS41IDE3LjQxNyA4NS43IDE4LjMxNyA4NS41IDE5LjMxNyBaIj48L3BhdGg+PHBhdGggZmlsbD0iIzAwOWNkZSIgZD0iTSA5NS4xIDUuNDE3IEwgOTEuOSAyNS43MTcgQyA5MS44IDI2LjExNyA5Mi4xIDI2LjQxNyA5Mi41IDI2LjQxNyBMIDk1LjcgMjYuNDE3IEMgOTYuMiAyNi40MTcgOTYuNyAyNi4wMTcgOTYuOCAyNS41MTcgTCAxMDAgNS42MTcgQyAxMDAuMSA1LjIxNyA5OS44IDQuOTE3IDk5LjQgNC45MTcgTCA5NS44IDQuOTE3IEMgOTUuNCA0LjkxNyA5NS4yIDUuMTE3IDk1LjEgNS40MTcgWiI+PC9wYXRoPjwvc3ZnPg",alt:"","aria-label":"paypal"})," ","Donate"]})}),this.state.session&&this.state.bookingCenter?Object(C.jsxs)(b.a,{title:"Congrats!",visible:this.state.showSuccessModal,onOk:function(e){t.setState({showSuccessModal:!1})},onCancel:function(e){t.setState({showSuccessModal:!1})},children:[Object(C.jsxs)("p",{children:["You vaccine slot is booked for selected beneficiaries at"," ",this.state.bookingCenter.name,","," ",this.state.bookingCenter.block_name,","," ",this.state.bookingCenter.address,","," ",this.state.bookingCenter.district_name,","," ",this.state.bookingCenter.state_name,","," ",this.state.bookingCenter.pincode]}),Object(C.jsxs)("p",{children:["Your appointment id is ",this.state.appointment_id]}),Object(C.jsxs)("p",{children:["You can login into"," ",Object(C.jsx)("a",{href:"https://www.cowin.gov.in/home",target:"_blank",rel:"noreferrer",children:"Cowin"})," ","to see details of your Vaccine slot"]})]}):null]})}}]),i}(a.a.Component),W=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,385)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;i(t),n(t),a(t),c(t),s(t)}))},P=i(151);P.a.initialize("G-GS2F4HCX5T"),P.a.pageview(window.location.pathname+window.location.search),s.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(U,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)})),W()}},[[371,1,2]]]);
//# sourceMappingURL=main.6edbb042.chunk.js.map