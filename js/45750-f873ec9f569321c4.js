"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45750],{54906:function(t,e,a){a.d(e,{Z:function(){return c}});var s=a(85893),o=a(36465),i=a.n(o),n=a(67294),r=a(40817);function c(t){var e,a,o;let c;let[d,p]=(0,n.useState)(""),[l,x]=(0,n.useState)(-1);(null===(e=t.districtList)||void 0===e?void 0:e.cityData)&&(c=t.districtList.cityData.filter(t=>-1!=t.name.indexOf(d.toLowerCase())||-1!=t.slug.indexOf(d.toLowerCase())));let h=t=>{x(e=>t==e?-1:t)},E=e=>{let{stateData:a}=t.districtList,{cityData:s}=t.districtList;for(let t of a){if(t.id===e.parent)return"/news/".concat(t.slug,"/").concat(e.slug,"/");if(0===e.parent)return"/news/".concat(e.slug,"/");for(let t of s)if(t.id===e.parent)return"/news/".concat(t.slug,"/").concat(e.slug,"/")}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]])+" "+"tpchsstctpopupwrap ng-scope ".concat(t.showStates?"adclstpchsstctpopupwrap":""),children:(0,s.jsxs)("div",{className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]])+" "+"tpchsstctpopup ".concat(t.showStates?"adclstpchsstctpopup":""),children:[(0,s.jsx)("a",{onClick:t.handleShowChange,className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]])+" chsstctbtnclose"}),(0,s.jsxs)("div",{className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]])+" tpchsstctpopup-in",children:[(0,s.jsx)("h2",{className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]])+" tpchsstctpopuphd",children:"अपना शहर चुनें"}),(0,s.jsxs)("div",{className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]])+" tpchsstctnames",children:[(0,s.jsx)("input",{type:"text",placeholder:"अपना शहर चुनें",onChange:t=>{let{target:e}=t;p(e.value)},className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]])+" search-icons ng-pristine ng-untouched ng-valid ng-empty"}),(0,s.jsx)("div",{className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]])+" state-div1 tpctlits ng-hide",children:(0,s.jsxs)("ul",{className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]])+" autoboxinner",children:[d&&!c.length?(0,s.jsx)("li",{style:{width:"auto"},className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]]),children:"No filtered items"},-1):null,c&&c.length>0?c.map((e,a)=>(0,s.jsx)(n.Fragment,{children:a<20&&(0,s.jsx)("li",{className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]])+" ng-scope filter",children:(0,s.jsx)("a",{onClick:()=>{(0,r.Kz)("Local18_Select","Click ",e.name)},href:E(e),className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]]),children:e.name})},"RHS_".concat(e.id).concat(a))},a)):null]})})]}),(0,s.jsx)("h3",{className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]])+" tpchsstcthd",children:"राज्य"}),(0,s.jsx)("div",{className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]])+" tpstatesnames",children:(null===(a=t.districtList)||void 0===a?void 0:a.stateData)&&(null===(o=t.districtList)||void 0===o?void 0:o.stateData.map((e,a)=>(0,s.jsx)("ul",{className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]]),children:e.child&&e.child.length>0?(0,s.jsxs)("li",{onClick:()=>h(a),className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]])+" "+((l==a?"active":"")||""),children:[(0,s.jsx)("a",{className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]]),children:e.name}),(0,s.jsx)("div",{className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]])+" tpstatesnames-sublist",children:e.child&&e.child.length>0?e.child.map((o,c)=>(0,s.jsx)(n.Fragment,{children:(0,s.jsx)("a",{onClick:()=>{(0,r.Kz)("Local18_Select","Click ",o.name)},href:"/news/".concat(e.slug,"/").concat(o.slug,"/"),className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]]),children:o.name})},"".concat(a,"-").concat(c))):""})]}):(0,s.jsx)("li",{className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]])+" ng-scope no-filter test noArrow",children:(0,s.jsx)("a",{onClick:()=>{(0,r.Kz)("Local18_Select","Click ",e.name)},href:"/news/".concat(e.slug,"/"),className:i().dynamic([["283aa0c23aea287e",[t.showStates?"hidden":""]]]),children:e.name})},"RHS_278497_0")},a)))})]})]})}),(0,s.jsx)(i(),{id:"283aa0c23aea287e",dynamic:[t.showStates?"hidden":""],children:'.tpstatesnames-sublist a{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:50%;font-size:13px;padding:15px 15px 5px 15px;font-weight:normal}.tpchsstctpopupwrap.adclstpchsstctpopupwrap{-webkit-transition:.2s ease-in-out;-moz-transition:.2s ease-in-out;-o-transition:.2s ease-in-out;transition:.2s ease-in-out;visibility:visible;opacity:1}.tpchsstctpopupwrap{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,.4);-webkit-transition:.2s ease-in-out;-moz-transition:.2s ease-in-out;-o-transition:.2s ease-in-out;transition:.2s ease-in-out;visibility:hidden;opacity:0;z-index:999999}.tpchsstctpopuphd{text-align:center;color:#e1261d;font-size:24px;line-height:36px;margin:15px 0}.tpchsstctpopup-in{overflow-y:scroll;overflow-x:hidden;width:295px;height:100%;margin-left:24px;background:#f7f7f7;-webkit-box-shadow:0px -5px 10px#777;-moz-box-shadow:0px -5px 10px#777;box-shadow:0px -5px 10px#777}.tpchsstctpopup.adclstpchsstctpopup{right:0px;-webkit-transition:all.5s ease-in-out;-moz-transition:all.5s ease-in-out;-o-transition:all.5s ease-in-out;transition:all.5s ease-in-out}.tpchsstctpopup{position:fixed;top:0;bottom:0;right:-306px;z-index:20;width:306px;overflow:hidden;-webkit-transition:all.5s ease-in-out;-moz-transition:all.5s ease-in-out;-o-transition:all.5s ease-in-out;transition:all.5s ease-in-out}.chsstctbtnclose{background:#ee1c25;width:48px;height:48px;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;position:absolute;top:5px;left:0px;z-index:1;cursor:pointer}.chsstctbtnclose:hover{background:#000}.chsstctbtnclose:after{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}.chsstctbtnclose:before,.chsstctbtnclose:after{content:"";position:absolute;width:3px;height:24px;background:#fff;top:12px;left:22px}.chsstctbtnclose:before{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.tpchsstctnames{margin:0 8px}.tpchsstctnames input{color:#606060;font-size:14px;height:44px;border:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;background:#e3e3e3 url(https://images.news18.com/ibnkhabar/uploads/assets/event/common/images/srchstcticon_1607493720.png)18px 50%no-repeat;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px;outline:none;width:100%;padding:0 10px 0 45px}.tpctlits ul{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:10px 0 0 20px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.tpctlits ul li{width:50%;font-size:14px;margin:12px 0;background:url(https://images.news18.com/ibnkhabar/uploads/assets/event/common/images/ctlisticon_1607493481.png)0 0 no-repeat;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding-left:28px}.tpchsstcthd{background:#fff;border-bottom:2px solid#e1261d;text-transform:uppercase;font-size:16px;padding:15px 20px 12px 20px;-webkit-box-shadow:0px 3px 6px#00000029;-moz-box-shadow:0px 3px 6px#00000029;box-shadow:0px 3px 6px#00000029;color:#444}.tpstatesnames ul li a{font-size:14px;padding:11px 20px;color:#222;display:block;line-height:20px}.tpstatesnames ul li.active a{font-weight:bold}.tpstatesnames ul li.active:before{content:"";background:#e3e3e3;width:35px;height:30px;position:absolute;top:4px;right:10px;-webkit-border-radius:5px 5px 0 0;-moz-border-radius:5px 5px 0 0;border-radius:5px 5px 0 0}.tpstatesnames ul li.active:after{-webkit-transform:rotate(-225deg);-moz-transform:rotate(-225deg);-ms-transform:rotate(-225deg);-o-transform:rotate(-225deg);transform:rotate(-225deg);top:18px;-webkit-transition:.2s ease-in-out;-moz-transition:.2s ease-in-out;-o-transition:.2s ease-in-out;transition:.2s ease-in-out}.tpstatesnames ul li:after{content:"";position:absolute;width:6px;height:6px;border-left:2px solid#606060;border-bottom:2px solid#606060;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);top:14px;right:24px;-webkit-transition:.2s ease-in-out;-moz-transition:.2s ease-in-out;-o-transition:.2s ease-in-out;transition:.2s ease-in-out}.tpstatesnames ul li.noArrow:after{display:none}.tpstatesnames ul{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.tpstatesnames ul li.active .tpstatesnames-sublist{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.tpstatesnames-sublist{display:none;background:#e3e3e3;-webkit-border-radius:0 0 15px 15px;-moz-border-radius:0 0 15px 15px;border-radius:0 0 15px 15px;margin:-8px 10px 0 10px;padding:0px 0 10px 0}.tpstatesnames ul li{position:relative;cursor:pointer}.noarrow::after{display:none}.tpstatesnames li.active div a{font-weight:normal}.tpchsstctpopup.adclstpchsstctpopup{right:0px;-webkit-transition:all.5s ease-in-out;-moz-transition:all.5s ease-in-out;-o-transition:all.5s ease-in-out;transition:all.5s ease-in-out}body{overflow:'.concat(t.showStates?"hidden":"","}li{list-style:none}a{text-decoration:none;color:#000}")})]})}},11361:function(t,e){e.Z={HOME:"होम",NEWS18_HOME:"પ્રદેશ ૧૮ હોમ",SELECT_STATE:"राज्य चुनें",STATE:"राज्य",CITIES:"શહેર",MY_FAVORITES:"મારી પસંદગીનું",ADD_TO_FAVORITES:"પસંદગીનું જોડો",RECENTLY_VISITED:"હમણાં જ જોયેલું",FIND_YOUR_LOCATION:"વાંચો તમારા શહેરના સમાચાર",FIND_YOUR_LOCATION_BY_STATECITY:"આપનો જિલ્લો અને શહેર",LANGUAGE:"भाषा",HINDI:"હિન્દી",ENGLISH:"અંગ્રેજી",GUJARATI:"ગુજરાતીં",CHANGE_LANGUAGE:"भाषा चुनें",DEFUALT_LANGUAGE_SET:"Your default language is set to",SET_HOMEPAGE_DEFAULT:"Set home page as default page",SET_DEFAULT_LANGUAGE:"set your default language",BROWSE_LOCATION_BY_STATECITY:"આપનો જિલ્લો અને શહેર",LIVE_TV:"लाइव टीवी",BLOGS:"BLOGS",NEWS18_PICKS:"પ્રદેશ ૧૮ ખાસ",SHOWS:"શો",ABOUT_US:"हमारे बारे में",CONTACT_US:"संपर्क करें",PRIVACY_POLICY:"गोपनीयता नीति",SITEMAP:"साइट मैप",APPS:"એપ્સ",NATION:"देश",ADD_YOUR_COMMENTS:"આપનો પ્રતિભાવ આપો",CLICK_TO_CLOSE:"બંધ કરવા માટે ક્લિક કરો",CLICK_TO_OPEN:"ખોલવા માટે ક્લિક કરો",EDITOR_PICKS:"સંપાદક ખાસ",BREAKING:"BREAKING",ALERT:"એલર્ટ",FACEBOOK_LINK:"https://www.facebook.com/EtvNewsGujrati",TWITTER_LINK:"https://twitter.com/News18Gujarati",FOLLOW_ON_FACEBOOK:"Follow us on Facebook",FOLLOW_ON_TWITTER:"Follow us on Twitter",NEWS18_POLL:"પ્રદેશ ૧૮ પોલ",POLL:"પોલ",NATIONAL_INTERNATIONAL:"દેશવિદેશ",MOVIES:"મૂવીઝ",EYE_CATCHER:"અજબગજબ",MORE:"વધુ...",SCORECARD:"સ્કોરકાર્ડ",FULL:"ફૂલ",QUICK:"ઝડપી",COMMENTARY:"કોમેન્ટરી",RECENT:"નવિનતમ",COMING:"આગામી",READ_THIS:"આ પણ વાંચો",LATEST:"લેટેસ્ટ",VIDEOS:"વીડિયો",ALL:"બધું",JUMP_TO:"JUMP TO",NEWS18_STATE:"PRADESH18 STATE",NEWS:"न्यूज",LIVETV:"લાઇવ ટીવી",BROWSE_YOUR_LOCATION_WITHIN:"Browse All Locations Within",LEFT_FBOX_NEWS:"લેટેસ્ટ ન્યૂઝ",LEFT_FBOX_VIDEOS:"લેટેસ્ટ વીડિયો",LEFT_FBOX_SHOWS:"શો",LEFT_FBOX_INFOPAGE:"ઇન્ફો પેજ",LEFT_FBOX_LIVETV:"લાઇવ ટીવી",LEFT_FBOX_MAP:"નકશો",LEFT_FBOX_PHOTO:"photo",LEFT_FBOX_SCORECARD:"ક્રિકેટ સ્કોર",LATEST_VIDEOS:"લેટેસ્ટ વીડિયો",LATEST_NEWS:"લેટેસ્ટ ન્યૂઝ",LATEST_SHOW:"લેટેસ્ટ શો",FILTER_BY_STATE:"Filter by state",FILTER_BY_CITY:"Filter by city",MAP:"નકશો",SCORE:"સ્કોર",GUJARAT:"ગુજરાત",BROWSE_LOCATIONS:"Browse Locations",RECOMMENDED_GALLERY:"સુચવેલા ફોટા",RECOMMENDED_VIDEO:"સુચવેલા વીડિયો",RECOMMENDED_STORY:"સુચવેલા સમાચાર",RELATED_STORY:"સંબંધિત સમાચાર",PHOTO:"તસવીરો",LATEST_PHOTO:"લેટેસ્ટ ફોટો",SEARCH_NEWS_TOPICS:"તમારા ન્યૂઝ સર્ચ કરો",SETTINGS:"સેટિંગ્સ",CHOOSE_LANGUAGE:"भाषा चुनें",CATEGOTRY:"કેટેગરી",WEATHER:"હવામાન",ENTER_CITY_STATE:"ઉમેરો શહેર,રાજ્ય",LIVE_SCORE:"લાઇવ સ્કોર",SEARCH_STATE_CITY:"શોધો રાજ્ય/શહેર",LIVE_NOW:"લાઇવ નાઉ",LAST:"આખરી",FIRST:"પ્રથમ",LOCAL:"સ્થાનિક",TRENDING_NEWS:"ટ્રેન્ડીંગ ન્યૂઝ",SELECT_BLOGGER:"બ્લોગર પસંદ કરો",SELECT_SHOW:"પસંદ કરો શો",FILTER_BY:"ફિલ્ટર બાય",JUMP_TO_CITY:"શહેર બદલો",JUMP_TO_CATEGORY:"કેટેગરી બદલો",MARKET:"બજાર",TOP_STORIES:"મુખ્ય સમાચાર",SEARCH:"સર્ચ",BYLINE:"બાય લાઇન",GUJARAT_SECTION:"ગુજરાત વિભાગ",SECTION:"सेक्शन",GUJARAT_NEWS:"ગુજરાત ન્યૂઝ",ASTRO:"રાશિ ભવિષ્ય",BLOGGER:"બ્લોગર",TOP_STORY:"મુખ્ય સમાચાર",TOP:"ટોપ ",NEXT:"Next",VIEW_MORE:"જુઓ વધુ",NEXT_PROGRAM:"હવે પછીના કાર્યક્રમ",SUPERHIT_GALLERY:"સુુપરહિટ ગૅલેરી",LATEST_NEWS:"ताजा खबरें",POPULAR:"લોકપ્રિય",WATCH_LIVE:"લાઈવ જુઓ",MOST_VIEWED:"સૌથી વધુ પસંદીદા",OTHER_NEWS:"અન્ય સમાચાર",SUPERHIT_JOKES:"સુપરહિટ બૉક્સ",READ_MORE:"વધુ વાંચો",DOWNLOAD_APP:"ऐप डाउनलोड करें",DOWNLOAD_APP_HOME:"News18 ऐप डाउनलोड करें",FOLLOW_US_ON:"हमें फॉलो करें",NOTIFICATION:"अधिसूचना"}}}]);