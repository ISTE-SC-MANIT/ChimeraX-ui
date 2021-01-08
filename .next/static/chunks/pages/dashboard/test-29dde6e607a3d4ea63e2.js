_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"+JwS":function(e,n,t){"use strict";var a=t("wx14"),i=t("Ff2n"),r=t("q1tI"),s=(t("17x9"),t("iuhU")),o=t("H2TA"),l=r.forwardRef((function(e,n){var t=e.disableSpacing,o=void 0!==t&&t,l=e.classes,u=e.className,c=Object(i.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(a.a)({className:Object(s.a)(l.root,u,!o&&l.spacing),ref:n},c))}));n.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(l)},"3wWx":function(e,n,t){"use strict";t.r(n);var a=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"input"}],n=[{alias:null,args:[{kind:"Variable",name:"submitQuizInput",variableName:"input"}],concreteType:"Team",kind:"LinkedField",name:"submitQuiz",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"teamLeadersId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"invitationId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"teamHelpersId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"teamName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"city",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"teamStatus",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"SubmitQuizMutation",selections:n,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"SubmitQuizMutation",selections:n},params:{cacheID:"6a83b624aa1531915926b9c4adc2cc45",id:null,metadata:{},name:"SubmitQuizMutation",operationKind:"mutation",text:"mutation SubmitQuizMutation(\n  $input: SubmitQuizInput!\n) {\n  submitQuiz(submitQuizInput: $input) {\n    _id\n    id\n    teamLeadersId\n    invitationId\n    teamHelpersId\n    teamName\n    city\n    teamStatus\n    status\n  }\n}\n"}}}();a.hash="9094c6e25623211f3868bf6230fd09cb",n.default=a},"4/pR":function(e,n,t){"use strict";t.r(n);var a=function(){var e=[{alias:null,args:null,concreteType:"Question",kind:"LinkedField",name:"getQuestions",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"question",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"questionNo",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"questionType",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GetQuestionsQuery",selections:e,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"GetQuestionsQuery",selections:e},params:{cacheID:"6483395be11579bc6819d9e51b4b32b4",id:null,metadata:{},name:"GetQuestionsQuery",operationKind:"query",text:"query GetQuestionsQuery {\n  getQuestions {\n    id\n    question\n    questionNo\n    questionType\n  }\n}\n"}}}();a.hash="78b071e71c5c4ad53b96a7f65f79d681",n.default=a},"56Ss":function(e,n,t){"use strict";var a=t("wx14"),i=t("Ff2n"),r=t("q1tI"),s=(t("17x9"),t("iuhU")),o=t("H2TA"),l=t("MquD"),u=r.forwardRef((function(e,n){var t=e.classes,o=e.className,u=Object(i.a)(e,["classes","className"]),c=r.useContext(l.a);return r.createElement("div",Object(a.a)({className:Object(s.a)(t.root,o,"flex-start"===c.alignItems&&t.alignItemsFlexStart),ref:n},u))}));n.a=Object(o.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(u)},"5CWz":function(e,n,t){"use strict";var a=t("wx14"),i=t("q1tI"),r=(t("17x9"),t("H2TA")),s={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},o=function(e){return Object(a.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};n.a=Object(r.a)((function(e){return{"@global":{html:s,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(a.a)({margin:0},o(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var n=e.children,t=void 0===n?null:n;return e.classes,i.createElement(i.Fragment,null,t)}))},"63Za":function(e,n,t){"use strict";var a=t("TqRt"),i=t("284h");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("q1tI")),s=(0,a(t("8/g6")).default)(r.createElement("path",{d:"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"}),"AccessAlarmOutlined");n.default=s},EQI2:function(e,n,t){"use strict";var a=t("wx14"),i=t("Ff2n"),r=t("q1tI"),s=(t("17x9"),t("iuhU")),o=t("H2TA"),l=r.forwardRef((function(e,n){var t=e.classes,o=e.className,l=e.dividers,u=void 0!==l&&l,c=Object(i.a)(e,["classes","className","dividers"]);return r.createElement("div",Object(a.a)({className:Object(s.a)(t.root,o,u&&t.dividers),ref:n},c))}));n.a=Object(o.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(l)},GYdy:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/test",function(){return t("J16n")}])},J16n:function(e,n,t){"use strict";t.r(n);var a,i,r=t("ODXe"),s=t("q1tI"),o=t.n(s),l=t("Z3vd"),u=t("tRbT"),c=t("hlFM"),d=t("469l"),m=t("5CWz"),g=t("B38C"),p=void 0!==a?a:a=t("4/pR"),f=t("kKAo"),b=t("63Za"),v=t.n(b),y=t("Ku+5"),w=void 0!==i?i:i=t("3wWx"),h=function(e,n,t){var a=t.onCompleted,i=t.onError;return Object(y.commitMutation)(e,{mutation:w,variables:{input:n},onCompleted:function(e){function n(n,t){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e,n){n&&console.log(n),a(e)})),onError:i})},k=t("R/WZ"),S=t("rePB"),x=t("ofer"),O=o.a.createElement;function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(t),!0).forEach((function(n){Object(S.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var q,N,T,E=function(e){var n=e.startTime,t=e.onTimeUp,a=(new Date).getMinutes()-new Date(n.getQuizDetails.quizStartTime).getMinutes(),i=o.a.useState({minute:30-a,seconds:0}),s=Object(r.a)(i,2),l=s[0],u=s[1];return o.a.useEffect((function(){var e=setInterval((function(){l.seconds>0&&u(j(j({},l),{},{seconds:l.seconds-1})),0===l.seconds&&(0===l.minute?(t(),clearInterval(e)):u({minute:l.minute-1,seconds:59}))}),1e3);return function(){return clearTimeout(e)}})),O(o.a.Fragment,null," ",O(x.a,{component:"h1",variant:"h5"},0===l.minute&&0===l.seconds?O(o.a.Fragment,null,"Time's Up!"):O(o.a.Fragment,null,"Time Remaining: ",l.minute,":",l.seconds<10?"0".concat(l.seconds):l.seconds)))},z=t("wb2y"),F=t("IsqK"),A=t("ZBNC"),M=o.a.createElement,I=Object(k.a)((function(e){return Object(A.a)({root:{flexGrow:1},paper:{padding:e.spacing(2,1),textAlign:"center",color:e.palette.text.secondary,height:e.spacing(8),width:e.spacing(8),position:"relative",borderRadius:"50%",cursor:"pointer",display:"flex",flexWrap:"wrap"},box:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",WebkitTransform:"translate(-50%, -50%)"}})})),R=function(e){var n=e.questions,t=e.onQuestionClick,a=e.currentQuestion,i=e.visitedAnswers,r=e.reviewedAnswers,s=e.answers,o=I(),l=function(e,n){if(e===a.questionNo)return{background:"#2196F3",color:"#FFFFFF"};var t=r.find((function(e){return e===n}));if(Boolean(t))return{background:"blue",color:"white"};var o=i.find((function(e){return e===n}));if(Boolean(o)){var l=s.find((function(e){return e.questionId===n}));return Boolean(l.answer)?{background:"#1FAA59",color:"white"}:{background:"red",color:"white"}}return{background:null,color:null}};return M("div",{className:o.root},M(c.a,{mb:2},M(F.a,{primary:"Questions",secondary:"Click on question number to view the question",primaryTypographyProps:{variant:"h6"}})),M(u.a,{container:!0,spacing:1},M(u.a,{container:!0,item:!0,spacing:2},n.map((function(e){return M(u.a,{item:!0},M(f.a,{className:o.paper,elevation:6,style:{backgroundColor:l(e.questionNo,e.id).background,color:l(e.questionNo,e.id).color},onClick:function(){return t(e.questionNo)}},M(c.a,{className:o.box},e.questionNo)))})))))},D=o.a.createElement,C=Object(k.a)((function(e){return Object(A.a)({root:{flexGrow:1,width:"100%"},paper:{padding:e.spacing(2,1),textAlign:"center",height:e.spacing(5),width:e.spacing(5),position:"relative",borderRadius:"50%",color:"white"},box:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",WebkitTransform:"translate(-50%, -50%)"}})})),K=function(e){var n=e.reviewedAnswers,t=e.visitedAnswers,a=e.answers,i=C(),s=o.a.useState(0),l=Object(r.a)(s,2),d=l[0],m=l[1];return o.a.useEffect((function(){var e=0;a.map((function(n){Boolean(n.answer)&&e++,m(e)}))}),[a]),D("div",{className:i.root},D(c.a,{mb:2},D(F.a,{primary:"Statistics",secondary:"Keep a track of your responses",primaryTypographyProps:{variant:"h6"}})),D(u.a,{container:!0,spacing:1},D(u.a,{container:!0,item:!0,xs:12,spacing:2},D(u.a,{item:!0,xs:6},D(c.a,{display:"flex"},D(f.a,{className:i.paper,style:{background:"green"},elevation:6},D(c.a,{className:i.box},d)),D(c.a,{mt:1,ml:2},"Answered"))),D(u.a,{item:!0,xs:6},D(c.a,{display:"flex"},D(f.a,{className:i.paper,style:{background:"red"},elevation:6},D(c.a,{className:i.box},t.length-d)),D(c.a,{mt:1,ml:2},"Visited & Not Answered")))),D(u.a,{container:!0,item:!0,xs:12,spacing:2,style:{marginTop:"8px"}},D(u.a,{item:!0,xs:6},D(c.a,{display:"flex"},D(f.a,{className:i.paper,style:{background:"blue"},elevation:6},D(c.a,{className:i.box},n.length)),D(c.a,{mt:1,ml:2},"Marked for review"))),D(u.a,{item:!0,xs:6},D(c.a,{display:"flex"},D(f.a,{className:i.paper,style:{color:"black"},elevation:6},D(c.a,{className:i.box},30-t.length)),D(c.a,{mt:1,ml:2},"Not visited"))))))},B=t("KQm4"),_=t("wx14"),L=t("Ff2n"),P=t("H2TA"),G=t("yv+Y"),W=t("EQI2"),H=t("+JwS"),U=t("r9w1"),Y=o.a.createElement,V=Object(k.a)((function(e){return{root:{margin:0,padding:0,boxSizing:"border-box",minHeight:"100vh"},box:{width:"80%",border:"3px solid ".concat(e.palette.divider)},dialogActions:{display:"flex",flexWrap:"wrap"},nextBtn:Object(S.a)({},e.breakpoints.down("lg"),{margin:e.spacing(1)}),reviewBtn:Object(S.a)({},e.breakpoints.down("md"),{margin:e.spacing(1)}),noSelect:{userSelect:"none"}}})),J=Object(P.a)((function(e){return Object(A.a)({root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})}))((function(e){var n=e.children,t=e.classes,a=(e.onClose,Object(L.a)(e,["children","classes","onClose"]));return Y(G.a,Object(_.a)({disableTypography:!0,className:t.root},a),Y(x.a,{variant:"h6"},n))})),X=Object(P.a)((function(e){return{root:{padding:e.spacing(2)}}}))(W.a),Z=Object(P.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(H.a),$=function(e){var n=e.question,t=e.answer,a=e.setAnswers,i=e.visitedAnswers,s=e.setVisitedAnswers,d=e.reviewedAnswers,m=e.setReviewedAnswers,g=e.currentQuestion,p=e.setCurrentQuestion,f=e.questions,b=e.role,v=function(e){return console.log(t),t.find((function(n){return n.questionNumber===e})).answer},y=o.a.useState(""),w=Object(r.a)(y,2),h=w[0],k=w[1];o.a.useEffect((function(){k(v(n.questionNo));var e=i.find((function(e){return e===n.id}));Boolean(e)||s([].concat(Object(B.a)(i),[n.id]))}),[n]);var S=V();return Y("div",null,Y(u.a,{container:!0,justify:"center",alignItems:"center",className:S.root},Y(c.a,{className:S.box},Y(J,{id:"customized-dialog-title",onClose:function(){}},"Question ",n.questionNo),Y(X,{dividers:!0},Y(x.a,{gutterBottom:!0},n.question),Y(c.a,null,Y(U.a,{fullWidth:!0,multiline:!0,label:"Answer",onChange:function(e){k(e.target.value)},value:h,disabled:"TEAM_HELPER"===b}))),Y(Z,{className:S.dialogActions},Y(c.a,{style:{marginRight:"auto"},className:S.nextBtn},Y(c.a,null,Y(l.a,{onClick:function(){var e=f.findIndex((function(e){return e.id===g.id}));p(f[e-1])},variant:"contained",color:"primary",disabled:1===g.questionNo},"Previous"),"\xa0\xa0\xa0",Y(l.a,{onClick:function(){var e=f.findIndex((function(e){return e.id===g.id}));p(f[e+1])},variant:"contained",color:"primary",disabled:30===g.questionNo},"Next"),"\xa0\xa0\xa0","TEAM_LEADER"===b&&Y(l.a,{onClick:function(){var e=d.find((function(e){return e===n.id}));if(Boolean(e)){var t=Object(B.a)(d),a=d.findIndex((function(e){return e===n.id}));t.splice(a,1),m(t)}else m([].concat(Object(B.a)(d),[n.id]))},variant:"contained",color:"primary",className:S.reviewBtn},function(){var e=d.find((function(e){return e===n.id}));return Boolean(e)}()?"Un-mark for review":"mark for review"))),"TEAM_LEADER"===b&&Y(l.a,{onClick:function(){var e=t.findIndex((function(e){return e.questionNumber===n.questionNo})),i=Object(B.a)(t);i[e].answer="",a(i),k("")},disabled:!Boolean(v(n.questionNo)),variant:"contained",color:"primary"},"Reset"),"TEAM_LEADER"===b&&Y(l.a,{onClick:function(){var e=t.findIndex((function(e){return e.questionNumber===n.questionNo})),i=Object(B.a)(t);i[e].answer=h,a(i)},variant:"contained",color:"primary",disabled:Boolean(v(n.questionNo))},"Save Answer")))))},ee=t("xXu5"),ne=void 0!==q?q:q=t("uryY"),te=t("20a2"),ae=s.createElement,ie=Object(k.a)((function(e){return{root:{height:"100vh"},paper:{margin:e.spacing(2,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},divider:{width:"100%",margin:e.spacing(2,0)}}})),re=function(e){var n=e.environment,t=e.viewer,a=e.setSuccessMessage,i=e.setErrorMessage,o=ie(),b=Object(g.useQuery)(p),y=b.data,w=(b.error,b.retry,b.isLoading),k=Object(g.useQuery)(ne),S=k.data,x=(k.error,k.retry,k.isLoading),O=s.useState(null),Q=Object(r.a)(O,2),j=Q[0],q=Q[1],N=s.useState([]),T=Object(r.a)(N,2),A=T[0],M=T[1],I=s.useState([]),D=Object(r.a)(I,2),C=D[0],B=D[1],_=s.useState([]),L=Object(r.a)(_,2),P=L[0],G=L[1],W=Object(te.useRouter)();if(s.useEffect((function(){if(q(null===y||void 0===y?void 0:y.getQuestions[0]),Boolean(y)){var e=y.getQuestions.map((function(e){return{answer:"",questionId:e.id,questionNumber:e.questionNo}}));M(e)}}),[y]),w||x)return ae(ee.a,{loading:!0});var H=function(){h(n,{responses:A},{onCompleted:function(){a("Quiz was successfully Submitted"),W.push("/login")},onError:function(){i("Something went wrong")}})};return ae(u.a,{container:!0,component:"main",className:o.root},ae(m.a,null),ae(u.a,{item:!0,xs:12,md:6,lg:8,style:{position:"relative"}},j?ae($,{question:j,answer:A,setAnswers:M,reviewedAnswers:C,setReviewedAnswers:B,visitedAnswers:P,setVisitedAnswers:G,currentQuestion:j,setCurrentQuestion:q,questions:y.getQuestions,role:t.role}):ae(ee.a,{loading:!0})),ae(u.a,{item:!0,xs:12,md:6,lg:4,component:f.a,elevation:6,square:!0},ae("div",{className:o.paper},ae(c.a,{display:"flex"},ae(d.a,{className:o.avatar},ae(v.a,null)),ae(c.a,{mt:1},ae(E,{startTime:S,onTimeUp:H}))),ae(z.a,{variant:"middle",className:o.divider}),ae(R,{questions:y.getQuestions,onQuestionClick:function(e){var n=y.getQuestions.find((function(n){return n.questionNo===e}));q(n)},currentQuestion:j,reviewedAnswers:C,answers:A,visitedAnswers:P}),ae(z.a,{variant:"middle",className:o.divider}),"TEAM_LEADER"===t.role&&ae(s.Fragment,null,"     ",ae(K,{reviewedAnswers:C,answers:A,visitedAnswers:P}),ae(z.a,{variant:"middle",className:o.divider}),ae(c.a,{mb:2,width:"100%"},ae(F.a,{primary:"Submit Quiz",secondary:"Quiz will be submitted automatically when time is over",primaryTypographyProps:{variant:"h6"}})),ae(l.a,{color:"primary",variant:"contained",onClick:function(){return H()}},"SUBMIT")))))},se=t("tVbE"),oe=t("56Ss"),le=t("eD//"),ue=t("nOHt"),ce=t("gF/r"),de=t("5EWR"),me=o.a.createElement,ge=Object(k.a)((function(e){return Object(A.a)({root:Object(S.a)({backgroundColor:"",minHeight:"80vh",margin:"auto",padding:"auto",paddingBottom:"6px"},e.breakpoints.up("md"),{width:"100%"}),menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:320},fullList:{width:"auto"},sublist:{marginLeft:e.spacing(3)},paper:Object(S.a)({width:"50%",marginLeft:"auto",marginRight:"auto",marginBottom:e.spacing(4),padding:e.spacing(2),borderRadius:"25px"},e.breakpoints.down("md"),{width:"96%"}),textField:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},button:{margin:"auto"},heading:{color:"black",marginBottom:e.spacing(4),paddingTop:"40px"},subHeading:{color:"#001831",fontSize:"1.2rem"},details:{textAlign:"center"},center:{width:"fit-content",margin:"auto"},text:Object(S.a)({marginRight:e.spacing(2)},e.breakpoints.down("md"),{marginTop:"165px",marginLeft:e.spacing(2)})})})),pe=function(e){var n=e.viewer,t=e.setSuccessMessage,a=e.setErrorMessage,i=ge(),s=(Object(ue.useRouter)(),o.a.useState(!1)),l=Object(r.a)(s,2),d=l[0],m=l[1];return me("div",{className:i.root},me(de.a,{name:n.name,username:n.email,open:d,setOpen:m,setSuccessMessage:t,setErrorMessage:a}),me(ce.a,{setOpen:m,setSuccessMessage:t,setErrorMessage:a}),me(u.a,{container:!0,onClick:function(){return m(!1)}},me(u.a,{container:!0,alignItems:"center",justify:"center"},me(c.a,null,me(se.a,{className:i.heading},me(F.a,{primary:"Instructions",primaryTypographyProps:{variant:"h2",align:"center"},secondary:"Here are some Instructions for ISTE's multi city quiz competition: ChimeraX",secondaryTypographyProps:{className:"".concat(i.subHeading),align:"center"}})))),me(u.a,{container:!0,alignItems:"center",justify:"center"},me(c.a,null,me(f.a,{className:i.paper,elevation:8},me(le.a,{component:"nav","aria-label":"Instructions for Test"},me(se.a,null,me(oe.a,null),me(F.a,null,"1) The test will begin at __, and end at __"))," ",me(se.a,null,me(oe.a,null),me(F.a,null,"2) There can be a maximum of 2 members in a team."))," ",me(se.a,null,me(oe.a,null),me(F.a,null,"3) The quiz will automatically submit once the timer runs out"))," ",me(se.a,null,me(oe.a,null),me(F.a,null,"4) Replacement of any participant of a team is not allowed after registration."))," ",me(se.a,null,me(oe.a,null),me(F.a,null,"5) Make sure to save your answers whenever a question is attempted")),me(se.a,null,me(oe.a,null),me(F.a,null,"6) Each correct question gets __ marks and no marks are deducted for a wrong answer")),me(se.a,null,me(oe.a,null),me(F.a,null,"7) There are 30 questions, all are compulsory")),me(se.a,null,me(oe.a,null),me(F.a,null,"8) Questions marked for review are marked in blue, questions whose answers are saved are marked in green and unsaved answers to questions are marked in red to help u keep track"))))))))},fe=void 0!==N?N:N=t("qx29"),be=void 0!==T?T:T=t("fWLT"),ve=function(e,n){var t=n.onCompleted,a=n.onError;return Object(y.commitMutation)(e,{mutation:be,variables:{},onCompleted:function(e){function n(n,t){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e,n){n&&console.log(n),t(e)})),onError:a})},ye=o.a.createElement;n.default=function(e){var n=e.viewer,t=e.environment,a=e.setSuccessMessage,i=e.refetch,s=e.setErrorMessage,d=o.a.useState(!1),m=Object(r.a)(d,2),p=m[0],f=m[1],b=Object(g.useQuery)(fe),v=b.data,y=(b.error,b.isLoading),w=(b.retry,Object(te.useRouter)());if(o.a.useEffect((function(){"REGISTER"===n.step&&w.push("/register"),"PAYMENT"===n.step&&w.push("/payment"),n.step,"CHOOSE_TEAM"===n.step&&w.push("/team")}),[]),o.a.useEffect((function(){Boolean(v)&&f("STARTED"===v.getQuizDetails.userQuizStatus)}),[v]),y)return ye(ee.a,{loading:!0});return p?ye(re,{viewer:n,environment:t,setSuccessMessage:a,refetch:i,setErrorMessage:s}):ye(o.a.Fragment,null,ye(pe,{viewer:n,environment:t,setSuccessMessage:a,refetch:i,setErrorMessage:s}),ye(u.a,{container:!0,spacing:0,alignItems:"center",justify:"center"},ye(c.a,null,ye(l.a,{onClick:function(){ve(t,{onCompleted:function(){a("Quiz has Started"),f(!0)},onError:function(){s("Something went wrong")}})},disabled:!0,variant:"contained",color:"primary"},"Start Quiz"))))}},fWLT:function(e,n,t){"use strict";t.r(n);var a=function(){var e=[{alias:null,args:null,concreteType:"StartQuizResponse",kind:"LinkedField",name:"startQuiz",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"quizStartTime",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StartQuizMutation",selections:e,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"StartQuizMutation",selections:e},params:{cacheID:"629d56c2f2f204f34d4fb5f5b4b1fc2c",id:null,metadata:{},name:"StartQuizMutation",operationKind:"mutation",text:"mutation StartQuizMutation {\n  startQuiz {\n    quizStartTime\n  }\n}\n"}}}();a.hash="f280fa6f7bdab06e880c77da04b7b434",n.default=a},qx29:function(e,n,t){"use strict";t.r(n);var a=function(){var e=[{alias:null,args:null,concreteType:"QuizDetailsResponse",kind:"LinkedField",name:"getQuizDetails",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"quizStartTime",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"userQuizStatus",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GetQuizStatusQuery",selections:e,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"GetQuizStatusQuery",selections:e},params:{cacheID:"404770004c846ac5462c6a088f704e49",id:null,metadata:{},name:"GetQuizStatusQuery",operationKind:"query",text:"query GetQuizStatusQuery {\n  getQuizDetails {\n    quizStartTime\n    userQuizStatus\n  }\n}\n"}}}();a.hash="229ed76edc42579ff9ec9954650b9313",n.default=a},uryY:function(e,n,t){"use strict";t.r(n);var a=function(){var e=[{alias:null,args:null,concreteType:"QuizDetailsResponse",kind:"LinkedField",name:"getQuizDetails",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"quizStartTime",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GetQuizStartTimeQuery",selections:e,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"GetQuizStartTimeQuery",selections:e},params:{cacheID:"0196176c7f1779a1b437b4eba8d0979c",id:null,metadata:{},name:"GetQuizStartTimeQuery",operationKind:"query",text:"query GetQuizStartTimeQuery {\n  getQuizDetails {\n    quizStartTime\n  }\n}\n"}}}();a.hash="95adbb461599125c6e2b894b08102149",n.default=a},"yv+Y":function(e,n,t){"use strict";var a=t("wx14"),i=t("Ff2n"),r=t("q1tI"),s=(t("17x9"),t("iuhU")),o=t("H2TA"),l=t("ofer"),u=r.forwardRef((function(e,n){var t=e.children,o=e.classes,u=e.className,c=e.disableTypography,d=void 0!==c&&c,m=Object(i.a)(e,["children","classes","className","disableTypography"]);return r.createElement("div",Object(a.a)({className:Object(s.a)(o.root,u),ref:n},m),d?t:r.createElement(l.a,{component:"h2",variant:"h6"},t))}));n.a=Object(o.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(u)}},[["GYdy",1,2,0,3,4,6,5,9]]]);