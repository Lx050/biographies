const relations = {
  liang:{name:'我 · 梁博星',role:'指导、补位与交接',x:180,y:260,paths:[['liang','chen'],['chen','liang']],text:'我给她第一份排版任务，也在她试出轮播办法之后，把“陈成凤出品”介绍给老师。6 月谈到陪跑，7 月开始交接工具与稿件。她也会把答案带回来，提醒我继续变得更专业。',source:'私聊 · 2025.09.27、2026.04.10—13、04.18—19、05.11、06.08；26文编部长群 · 07.01—03',links:[['彼此补位','#svg'],['交接的去向','#handover']]},
  gao:{name:'高小倩',role:'指导、审核与分工',x:330,y:95,paths:[['gao','chen']],text:'高小倩在群里征集任务参与者，接她的排版预览，也与她分配寒假来稿。我把有关副部长工作的疑问转给高小倩，她随后确认陈成凤来问了。学习和竞选的连接，都能找到具体的工作记录。',source:'25青媒文编 · 2025.10.13、10.21；25青媒大家庭 · 2026.01.29；我与高小倩私聊 · 05.28',links:[['一起带人的早期','#first'],['从询问到交接','#s13']]},
  wang:{name:'王雪',role:'选图协作 · 经我协调',x:175,y:450,paths:[['wang','chen']],indirect:true,text:'运动会当天，我把她接到办公室选图这条工作线上。王雪在与我的聊天中确认，下午由我、王雪和陈成凤挑照片、放到推送里。6 月我又把她的新排版交给王雪等人看意见。这里的连接，主要由我的对接记录确认。',source:'我与王雪私聊 · 2026.04.16 11:35—11:48；我与陈成凤私聊 · 06.20 19:34',links:[['回到运动会与视觉工作','#world']]},
  ding:{name:'丁佳',role:'视觉工作与拍摄对接',x:620,y:74,paths:[['ding','chen']],text:'在视觉设计中心，丁佳对接校舞赛拍摄，明确点到陈成凤与其他同学。陈成凤在活动群交回拍摄素材。这条线让人看到：她的参与也在现场和镜头后面。',source:'25视觉设计中心 · 2025.11.10；11.14校舞赛决赛 · 11.14',links:[['她自己的另一条工作线','#s9']]},
  zhu:{name:'朱梦鹤',role:'直接沟通的审核与要求',x:825,y:155,paths:[['zhu','chen']],text:'6 月 2 日的三下乡通知工作群里，朱老师直接向她补发材料、要求预览，她回应并继续处理。6 月 21 日，我又请她把人物采访先给受访同学看，再交老师审核，并让她直接加朱老师。她逐渐走进更完整的审核链。',source:'2026 三下乡通知 · 2026.06.02；私聊 · 06.21 14:22—14:31',links:[['回到彼此补位','#svg']]},
  li:{name:'李宗泰',role:'文案与编辑配合 · 同届班子',x:825,y:330,paths:[['chen','li'],['li','chen']],text:'2025 年 11 月，我安排他们一起做推送：她负责编辑，并在群里确认与李宗泰转到私聊协商。2026 年 7 月的换届名单里，她是部长，李宗泰是副部长。一次推送里的协作，后来接上了同届名单。',source:'25青媒文编 · 2025.11.11；私聊 · 2026.07.02',links:[['最早的一次协商','#s14'],['后来的一份名单','#handover']]},
  song:{name:'宋雨茹',role:'同届文编班子',x:665,y:463,paths:[['song','chen']],text:'7 月 1 日，宋雨茹邀请我进入的部长群把前后两届连接起来。次日我发给陈成凤的名单中，宋雨茹与李宗泰同列副部长。记录可以确认共同班子的安排；两人日后怎样分工，此时的资料尚未展开。',source:'26文编部长群 · 2026.07.01；私聊 · 07.02',links:[['换届名单与交接','#s15']]},
  lei:{name:'雷若祺',role:'大创材料的接力协作',x:405,y:465,paths:[['chen','lei'],['lei','chen']],text:'大创材料处理中，她填信息、调整语义，雷若祺继续处理格式；我在群里衔接两人的工作。4 月 13 日，她指出序号与项目类别编码的区别，雷若祺回应并继续调整。贡献藏在这些小小的接力里。',source:'26大创 · 2026.04.01、04.13',links:[['材料里的协作','#s10']]}
};

const routes={
  liang:[['她','试出了滑动样式的办法'],['我','把她的预览发给老师'],['我','次日继续接新要求']],
  gao:[['高小倩','给参考、接排版预览'],['陈成凤','参与制作与修改'],['两人','各自承担寒假稿件']],
  wang:[['我','协调运动会选图'],['王雪','确认下午三人选图的安排'],['推送','选图工作的去向']],
  ding:[['丁佳','对接校舞赛拍摄'],['陈成凤','参与现场拍摄'],['活动群','她交回拍摄素材']],
  zhu:[['朱梦鹤','补材料，要求预览'],['陈成凤','回应并继续处理'],['审核','进入直接沟通的流程']],
  li:[['我','安排文案与编辑协作'],['陈成凤','确认与李宗泰私聊协商的安排'],['陈成凤','负责推送编辑']],
  song:[['宋雨茹','邀请我进入新部长群'],['前后两届','在同一群里衔接'],['我','交接稿件、工具']],
  lei:[['陈成凤','补信息、微调语义'],['雷若祺','接着调整格式'],['材料','两人的修改继续衔接']]
};

// Edges express only the action shown by the selected record; roster edges have no arrow.
const nodes={
 chen:{name:'陈成凤',role:'舒窈 / Crescent',wide:[500,350],small:[180,340]},
 liang:{name:'梁博星',role:'任务 · 共同解决',wide:[190,300],small:[60,225]},
 gao:{name:'高小倩',role:'参考 · 反馈',wide:[170,90],small:[60,70]},
 ding:{name:'丁佳',role:'拍摄对接',wide:[465,70],small:[180,50]},
 team:{name:'工作群',role:'PETI 预览',wide:[770,80],small:[300,70]},
 teacher:{name:'她的老师',role:'报错答疑',wide:[590,150],small:[235,140]},
 zhu:{name:'朱梦鹤',role:'材料 · 审核',wide:[850,270],small:[300,225]},
 li:{name:'李宗泰',role:'编辑协作 · 同届',wide:[840,480],small:[300,460]},
 song:{name:'宋雨茹',role:'新群 · 同届',wide:[630,590],small:[285,610]},
 lei:{name:'雷若祺',role:'大创材料接力',wide:[360,580],small:[140,610]},
 wang:{name:'王雪',role:'选图安排',wide:[120,510],small:[60,460]}
};
const edges=[
 {id:'task',from:'liang',to:'chen',bend:-35,people:['liang','li','wang'],events:['learning','handover']},
 {id:'reference',from:'gao',to:'chen',bend:20,people:['gao'],events:['learning']},
 {id:'idea',from:'chen',to:'liang',bend:-35,people:['liang'],events:['idea','night','answer']},
 {id:'ask-teacher',from:'chen',to:'teacher',kind:'reported',bend:-28,people:[],events:['answer']},
 {id:'teacher-answer',from:'teacher',to:'chen',kind:'reported',bend:-28,people:[],events:['answer']},
 {id:'preview',from:'liang',to:'team',bend:-100,people:['liang'],events:['idea']},
 {id:'submit',from:'liang',to:'zhu',bend:-115,people:['liang','zhu'],events:['night']},
 {id:'review',from:'zhu',to:'chen',bend:25,people:['zhu'],events:[]},
 {id:'camera',from:'ding',to:'chen',bend:10,people:['ding'],events:['camera']},
 {id:'research',from:'chen',to:'lei',bend:12,people:['lei'],events:['research']},
 {id:'photos',from:'wang',to:'liang',bend:-20,people:['wang'],events:[]},
 {id:'invite',from:'song',to:'liang',bend:-75,people:['song'],events:['handover']},
 {id:'writing',from:'chen',to:'li',bend:-25,people:['li'],events:[]},
 {id:'roster-li',from:'chen',to:'li',kind:'peer',bend:20,people:['li'],events:['handover']},
 {id:'roster-song',from:'chen',to:'song',kind:'peer',bend:10,people:['song'],events:['handover']}
];
const eventStories={
 all:{title:'每条线，都有一个动词。',date:'2025.09 — 2026.07',summary:'任务、题目、反馈、材料。选一件事，看行动怎样继续；点一个人，看她和这个人的连接。',steps:[],source:'实线为记录中的行动方向；长虚线表示同届名单，点线表示她转述的老师答疑。各事件发生在不同时间。',links:[]},
 learning:{title:'先一起改好一篇推送。',date:'2025.09 — 2026.01',summary:'我给她排版任务，高小倩也提供参考、接预览。寒假分稿时，两人各做一部分。',steps:[['梁博星','邀请她做国庆升旗排版'],['陈成凤','做模板、按意见修改'],['高小倩','另给参考与反馈，后来安排寒假分稿']],source:'两条指导线并行发生，不把先后顺序画成彼此导致。',links:[['第一份模板','#s2'],['高小倩的指导','#s3']]},
 idea:{title:'一个题目，从她那里出发。',date:'2026.04.10 — 04.13',summary:'4 月 10 日，她向我提出 PETI。三天后，这个标题出现在工作群的预览里。',steps:[['陈成凤','提出“测测你的 PETI”'],['梁博星','回应选题，后来发出预览'],['工作群','出现体育人格标题的预览']],source:'只核对预览标题，未据此声称最终发布。',links:[['PETI 的来路','#s5']]},
 night:{title:'她试办法，我把预览交出去。',date:'2026.04.18',summary:'从编辑器里卡住，到一篇能同步的预览，这件事经过了她的尝试、我的转交和后续查漏。',steps:[['陈成凤','试出样式办法'],['梁博星','把她的预览发给朱老师'],['陈成凤','压缩三张大图、重新同步']],source:'朱梦鹤在此处是预览接收者，不据此声称已经审核通过。',links:[['试办法','#s6'],['反馈与同步','#s7']]},
 answer:{title:'我答不上来，她找到了答案。',date:'2026.05.11',summary:'她来问程序报错。我没能回答，她去问老师，再把中英文符号的问题带回来。',steps:[['陈成凤','转去问老师'],['她的老师','报错原因由她转述'],['陈成凤','把答案带回，提醒我继续学习']],source:'老师在记录中未对应姓名；问答由陈成凤的消息转述，点线不表示读取过老师的独立对话。',links:[['她带回的答案','#s12']]},
 handover:{title:'名单与工具，一起交到下一届。',date:'2026.07.01 — 07.03',summary:'宋雨茹邀请我进新群。我交接稿件与工具，陈成凤确认了部长名单。',steps:[['宋雨茹','邀请我进入新部长群'],['梁博星','交接待完成稿件、知识中心、工具'],['陈成凤','确认部长及同届副部长名单']],source:'陈成凤、李宗泰与宋雨茹的虚线只表示私聊确认的同届安排，不代替正式任命公告。',links:[['名单与交接','#s15']]},
 camera:{title:'她的工作，也发生在镜头后。',date:'2025.11',summary:'丁佳对接校舞赛拍摄，陈成凤参与现场工作，随后在活动群交回素材。',steps:[['丁佳','对接参与拍摄的人'],['陈成凤','参与现场拍摄'],['活动群','她交回拍摄素材']],source:'这里确认拍摄参与与素材提交；不描述未识别的图片内容。',links:[['视觉工作线','#s9']]},
 research:{title:'一份材料，两个人接着改。',date:'2026.04.01、04.13',summary:'陈成凤补信息、微调语义，雷若祺接着改格式。之后，她又指出序号与项目类别编码的区别。',steps:[['陈成凤','填写信息、微调语义'],['雷若祺','继续调整格式'],['材料','在两人的修改中继续推进']],source:'行动线来自大创工作群中的具体接力。',links:[['材料接力','#s10']]}
};
const ns='http://www.w3.org/2000/svg';
function svgElement(tag,attrs={}){const el=document.createElementNS(ns,tag);for(const [key,value] of Object.entries(attrs))el.setAttribute(key,String(value));return el;}
const graph=document.getElementById('relation-map');
let selectedEvent='all',selectedPerson=null,compactGraph=null;
function drawGraph() {
 const compact=innerWidth<=760;if(compactGraph===compact)return;compactGraph=compact;
 graph.replaceChildren();graph.setAttribute('viewBox',compact?'0 0 360 675':'0 0 1000 680');
 const defs=svgElement('defs');
 for(const [id,color] of [['arrow','#8d9c7e'],['arrow-active','#b84e39']]) {
  const marker=svgElement('marker',{id,viewBox:'0 0 10 10',refX:9,refY:5,markerWidth:5,markerHeight:5,orient:'auto'});
  marker.append(svgElement('path',{d:'M1 1 L9 5 L1 9',fill:'none',stroke:color,'stroke-width':1.2}));defs.append(marker);
 }
 const lines=svgElement('g'),labels=svgElement('g');graph.append(defs,lines,labels);
 for(const edge of edges) {
  const a=nodes[edge.from][compact?'small':'wide'],b=nodes[edge.to][compact?'small':'wide'];
  const dx=b[0]-a[0],dy=b[1]-a[1],length=Math.hypot(dx,dy),bend=edge.bend*(compact?.45:1);
  const mx=(a[0]+b[0])/2-dy/length*bend,my=(a[1]+b[1])/2+dx/length*bend;
  // Clip to each rectangular label along the actual Bezier tangent.
  function endpoint(point,toward,central){const vx=toward[0]-point[0],vy=toward[1]-point[1];const hw=compact?(central?49:41):(central?65:54),hh=compact?(central?27:23):(central?35:29);const t=1/Math.max(Math.abs(vx)/(hw+5),Math.abs(vy)/(hh+5));return[point[0]+vx*t,point[1]+vy*t];}
  const start=endpoint(a,[mx,my],edge.from==='chen'),end=endpoint(b,[mx,my],edge.to==='chen');
  const path=svgElement('path',{d:`M${start[0]} ${start[1]} Q${mx} ${my} ${end[0]} ${end[1]}`,class:`graph-edge${edge.kind==='peer'?' peer':edge.kind==='reported'?' reported':''}`,'data-edge':edge.id});
  if(edge.kind!=='peer')path.setAttribute('marker-end','url(#arrow)');lines.append(path);
 }
 for(const [key,person] of Object.entries(nodes)) {
  const [x,y]=person[compact?'small':'wide'],central=key==='chen';
  const width=compact?(central?98:82):(central?130:108),height=compact?(central?54:46):(central?70:58);
  const node=svgElement('g',{class:`graph-node${central?' central':''}`,transform:`translate(${x} ${y})`,'data-node':key,tabindex:0,role:'button','aria-label':key==='chen'?'显示全部关系线索':key==='team'?'查看 PETI 进入工作群的路线':key==='teacher'?'查看她问老师后带回答案的路线':`查看陈成凤与${person.name}的关系`});
  node.append(svgElement('rect',{x:-width/2,y:-height/2,width,height,rx:1}));
  const name=svgElement('text',{class:'graph-name',x:0,y:7});name.textContent=person.name;
  const role=svgElement('text',{class:'graph-role',x:0,y:height/2+(compact?22:29)});role.textContent=person.role;node.append(name,role);labels.append(node);
  const choose=()=>key==='chen'?selectEvent('all'):key==='team'?selectEvent('idea'):key==='teacher'?selectEvent('answer'):selectPerson(key);
  node.addEventListener('click',choose);node.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();choose();}});
 }
 highlightGraph();
}
function highlightGraph() {
 const activeEdges=new Set(),activeNodes=new Set(['chen']);
 for(const edge of edges) {
  const active=selectedPerson?edge.people.includes(selectedPerson):selectedEvent==='all'||edge.events.includes(selectedEvent);
  if(active){activeEdges.add(edge.id);activeNodes.add(edge.from);activeNodes.add(edge.to);}
 }
 graph.querySelectorAll('[data-edge]').forEach(path=>{const active=activeEdges.has(path.dataset.edge),specific=selectedPerson||selectedEvent!=='all';path.classList.toggle('active',!!specific&&active);path.classList.toggle('dim',!active);if(!path.classList.contains('peer'))path.setAttribute('marker-end',`url(#${specific&&active?'arrow-active':'arrow'})`);});
 graph.querySelectorAll('[data-node]').forEach(node=>{node.classList.toggle('dim',!activeNodes.has(node.dataset.node));node.classList.toggle('selected',node.dataset.node===selectedPerson);});
}
function setRoute(steps){const list=document.getElementById('relation-route');list.replaceChildren();steps.forEach(([name,action])=>{const li=document.createElement('li'),b=document.createElement('b'),p=document.createElement('span');b.textContent=name;p.textContent=action;li.append(b,p);list.append(li);});}
function setDetail(text,links) {
 const detail=document.getElementById('relation-detail'),source=document.createElement('p'),anchors=document.createElement('p');source.className='detail-source';source.textContent=text;anchors.className='detail-source';
 links.forEach(([label,href],i)=>{if(i)anchors.append(document.createTextNode('　／　'));const a=document.createElement('a');a.href=href;a.textContent=label+' ↗';anchors.append(a);});detail.replaceChildren(source,anchors);
}
function syncButtons(){document.querySelectorAll('[data-event]').forEach(button=>button.setAttribute('aria-pressed',String(!selectedPerson&&button.dataset.event===selectedEvent)));document.querySelectorAll('[data-person]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.person===selectedPerson)));}
function announceSelection(title,steps){document.getElementById('network-status').textContent=title+' '+steps.map(([name,action])=>name+'：'+action).join('；');}
function selectEvent(key) {
 const event=eventStories[key];if(!event)return;selectedEvent=key;selectedPerson=null;
 document.getElementById('connection-kind').textContent=key==='all'?'从一件事读起':'一条事件路线';document.getElementById('connection-date').textContent=event.date;
 document.getElementById('connection-title').textContent=event.title;document.getElementById('connection-summary').textContent=event.summary;
 setRoute(event.steps);setDetail(event.source,event.links);syncButtons();highlightGraph();announceSelection(event.title,event.steps);
}
function selectPerson(key) {
 const person=relations[key];if(!person)return;selectedPerson=key;
 document.getElementById('connection-kind').textContent='她与这个人的连接';document.getElementById('connection-date').textContent='见下方事件出处';
 document.getElementById('connection-title').textContent=person.name;document.getElementById('connection-summary').textContent=person.text;
 setRoute(routes[key]);setDetail(person.source+'。图中汇集这段关系在不同时间发生的行动。',person.links);syncButtons();highlightGraph();announceSelection(person.name,routes[key]);
}
document.querySelectorAll('[data-event]').forEach(button=>button.addEventListener('click',()=>selectEvent(button.dataset.event)));
document.querySelectorAll('[data-person]').forEach(button=>button.addEventListener('click',()=>selectPerson(button.dataset.person)));
document.querySelectorAll('[data-event-jump]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();openNetwork(link.dataset.eventJump);}));
document.querySelectorAll('[data-person-jump]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();openNetwork(link.dataset.personJump,'person');}));
// Links point to the actual scene or source, never to a removed layout.
relations.wang.links=[['选图与其他协作','#world']];
relations.gao.links=[['参考与分工','#s3'],['后来询问竞选','#s13']];
relations.li.links=[['早期的协商','#s14'],['后来的名单','#after']];
relations.zhu.links=[['转交排版预览','#s7']];


// A native dialog keeps the reader at the paragraph that led into a relationship.
const dialog=document.getElementById('connection-dialog');
function openNetwork(key='all',kind='event'){
 if(!dialog.open)dialog.showModal();
 drawGraph();if(kind==='person')selectPerson(key);else selectEvent(key);
 dialog.scrollTop=0;
}
document.querySelectorAll('[data-open-network]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();openNetwork();}));
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
// Choosing a source closes the overlay and opens that exact record in the document.
dialog.addEventListener('click',event=>{const link=event.target.closest('a[href^="#"]');if(!link)return;const id=link.hash.slice(1),target=document.getElementById(id);if(!target||dialog.contains(target))return;event.preventDefault();dialog.close();if(target.tagName==='DETAILS')target.open=true;history.pushState(null,'','#'+id);const focusTarget=target.tagName==='DETAILS'?target.querySelector('summary'):target;if(!focusTarget.hasAttribute('tabindex')&&focusTarget.tagName!=='SUMMARY')focusTarget.setAttribute('tabindex','-1');focusTarget.focus({preventScroll:true});requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));});

const chapterTraces={"first": [{"label": "我邀她", "from_": "梁博星", "to": "陈成凤", "action": "邀请做国庆排版", "quote": "有个给十一升旗活动排版的任务，你想来吗？", "date": "09.27", "note": "邀请之后，她接下任务，并问什么时候要。", "source": "s2", "kind": "action", "speaker": "梁博星 · 原话"}, {"label": "修改之后", "from_": "梁博星", "to": "陈成凤", "action": "回复她修改后的模板", "quote": "好的很", "date": "09.30", "note": "她发模板，我提简约的建议；再次修改后，我给出这句回复。", "source": "s2", "kind": "action", "speaker": "梁博星 · 修改后的回复"}, {"label": "还有学姐", "from_": "高小倩", "to": "陈成凤", "action": "参考、预览与分稿", "quote": "她的另一条工作线", "date": "10月 — 次年1月", "note": "这是并行的指导与协作，并非前两步导致的结果。", "source": "s3", "kind": "parallel", "speaker": "关系说明"}], "idea": [{"label": "她提出", "from_": "陈成凤", "to": "梁博星", "action": "带来 PETI 题目", "quote": "我有想法\n了\n真的", "date": "04.10", "note": "三条消息之后，她说：测测你的 PETI，体育人格。", "source": "s5", "kind": "action", "speaker": "陈成凤 · 三条原话"}, {"label": "我回应", "from_": "梁博星", "to": "陈成凤", "action": "请她接着讲", "quote": "快讲 快快请讲！", "date": "04.10", "note": "两秒后，我又单独补发了一个感叹号。", "source": "s5", "kind": "action", "speaker": "梁博星 · 原话"}, {"label": "题目往前走", "from_": "梁博星", "to": "工作群", "action": "发出 PETI 预览", "quote": "一个题目，有了可以打开的一页。", "date": "04.13", "note": "此处确认预览标题，未据此声称最终发布。", "source": "s5", "kind": "action", "speaker": "据预览记录整理"}], "svg": [{"label": "她试办法", "from_": "陈成凤", "to": "梁博星", "action": "卡住之后继续试", "quote": "非满级人类有\n非满级人类的办法", "date": "22:14", "note": "约八分钟后，她回复“OK了”。这是样式进展，整篇仍需继续处理。", "source": "s6", "kind": "action", "speaker": "陈成凤 · 原话"}, {"label": "我交预览", "from_": "梁博星", "to": "朱梦鹤", "action": "转交她的排版预览", "quote": "陈成凤出品", "date": "22:38", "note": "我介绍她的排版与配色。老师在这里是接收者，不能据此认定审核通过。", "source": "s7", "kind": "action", "speaker": "梁博星向朱梦鹤介绍"}, {"label": "她查漏", "from_": "陈成凤", "to": "稿件", "action": "压缩三张大图，重传", "quote": "同步好了", "date": "23:44", "note": "在查漏、压缩与重传之后，这一晚的同步才完成。", "source": "s7", "kind": "action", "speaker": "陈成凤 · 原话"}, {"label": "次日我接", "from_": "陈成凤", "to": "梁博星", "action": "她准备答辩，我接新要求", "quote": "学长加油", "date": "次日 13:09", "note": "13:12 我发出“陈到功成”。新要求仍在处理。", "source": "s8", "kind": "action", "speaker": "陈成凤 · 原话"}], "answer": [{"label": "我答不上", "from_": "梁博星", "to": "陈成凤", "action": "回应她的报错问题", "quote": "不知道", "date": "18:12", "note": "这三个字是我的回复。问题在这里没有得到解决。", "source": "s12", "kind": "blocked", "speaker": "梁博星 · 未能解答"}, {"label": "她另问老师", "from_": "陈成凤", "to": "她的老师", "action": "转向另一处求助", "quote": "豆包也不会，我直接找爱师了", "date": "18:20", "note": "求助与老师答疑由她在私聊中转述；没有老师的独立对话记录。", "source": "s12", "kind": "reported", "speaker": "陈成凤 · 转述求助"}, {"label": "她带回来", "from_": "陈成凤", "to": "梁博星", "action": "说明原因，也提醒我", "quote": "学长也得加油呀，\n变得更专业", "date": "18:20 — 21", "note": "她带回中英文符号的解释。我回“专业专业”，后来承认“学艺不精了”。", "source": "s12", "kind": "action", "speaker": "陈成凤 · 原话"}], "handover": [{"label": "谈眼前", "from_": "陈成凤", "to": "梁博星", "action": "回应排版经验", "quote": "OK，学到了", "date": "19:46", "note": "这句是她的回应。上文谈的是文本框、空行与新草稿。", "source": "s13", "kind": "action", "speaker": "陈成凤 · 回复"}, {"label": "问明年", "from_": "陈成凤", "to": "梁博星", "action": "问到我和学姐不在之后", "quote": "如果明年你和学姐都不在，\n我们改咋办[流泪]", "date": "19:47", "note": "“改咋办”保留原字。她问的是将来。", "source": "s13", "kind": "action", "speaker": "陈成凤 · 原话摘引"}, {"label": "一个约定", "from_": "梁博星", "to": "陈成凤", "action": "说出陪跑的约定", "quote": "陪跑一个暑假，\n剩下就靠你们了", "date": "19:48", "note": "这是当时的答复与约定，不表示后来已经完成了整个暑假的陪跑。", "source": "s13", "kind": "promise", "speaker": "梁博星 · 当时的答复"}], "after": [{"label": "新群", "from_": "宋雨茹", "to": "梁博星", "action": "邀请进入部长群", "quote": "前后两届，进入同一个群。", "date": "07.01", "note": "我随后在群里交接待完成稿件、知识中心和工具。", "source": "s15", "kind": "action", "speaker": "据入群记录整理"}, {"label": "名单", "from_": "陈成凤", "to": "李宗泰 · 宋雨茹", "action": "同届名单，职责并列", "quote": "部长：陈成凤\n副部长：李宗泰、宋雨茹", "date": "07.02", "note": "虚线表示私聊确认的同届安排；不是任命因果，也不代替正式公告。", "source": "s15", "kind": "roster", "speaker": "梁博星发出的私聊名单"}, {"label": "次日", "from_": "陈成凤", "to": "梁博星", "action": "又带着材料来", "quote": "救命\n學長", "date": "07.03", "note": "名单确认后的第二天，她来求助，我给出处理起点与 AI 对话。", "source": "s16", "kind": "action", "speaker": "陈成凤 · 连发两条"}]};

const kindLabels={action:'行动',parallel:'并行协作',blocked:'这一步未解',reported:'由她转述',promise:'当时的约定',roster:'同届安排'};
function chooseTrace(panel,index){
 const step=chapterTraces[panel.dataset.traceScene][index];if(!step)return;
 panel.dataset.kind=step.kind;
 panel.querySelector('.trace-date').textContent=step.date;
 panel.querySelector('.trace-from').textContent=step.from_;
 panel.querySelector('.trace-to').textContent=step.to;
 panel.querySelector('.trace-action').textContent=kindLabels[step.kind]+' · '+step.action;
 panel.querySelector('.trace-speaker').textContent=step.speaker;
 panel.querySelector('.trace-quote').textContent=step.quote;
 panel.querySelector('.trace-note').textContent=step.note;
 panel.querySelector('.trace-source').href='#'+step.source;
 panel.querySelectorAll('[data-trace]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.trace)===index)));
 if(panel.dataset.traceScene==='svg'){
  const art=panel.closest('.chapter').querySelector('.art-night');
  art.querySelector('.art-label').textContent=index===3?'次日，事情还没有做完':'这一晚，还在继续';
  art.querySelector('.night-dial').textContent=step.date.replace('次日 ','');
  art.querySelector('p').textContent=step.quote;
  art.querySelector('.art-note').textContent=step.speaker;
 }
}
document.querySelectorAll('.causal-trace').forEach(panel=>{
 panel.querySelectorAll('[data-trace]').forEach(b=>b.addEventListener('click',()=>chooseTrace(panel,Number(b.dataset.trace))));
 chooseTrace(panel,0);
});
const voices=[
 {date:'2025.09.27',direction:'我问她',quote:'你想来吗？',source:'s2'},
 {date:'2026.04.10',direction:'她告诉我',quote:'我有想法\n了\n真的',source:'s5'},
 {date:'2026.05.11',direction:'她提醒我',quote:'学长也得加油呀，\n变得更专业。',source:'s12'}
];
document.querySelectorAll('[data-voice-select]').forEach(button=>button.addEventListener('click',()=>{
 const index=Number(button.dataset.voiceSelect),voice=voices[index];
 document.querySelector('.cover-conversation').dataset.voice=String(index);
 document.getElementById('voice-date').textContent=voice.date;
 document.getElementById('voice-direction').textContent=voice.direction;
 document.getElementById('voice-quote').textContent=voice.quote;
 document.getElementById('voice-source').href='#'+voice.source;
 document.querySelectorAll('[data-voice-select]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
}));
const scenes=Array.from(document.querySelectorAll('[data-scene]'));let currentScene=-1,scheduled=false;
function updateReading(){
 scheduled=false;const max=document.documentElement.scrollHeight-innerHeight;
 document.querySelector('.reading-progress i').style.transform=`scaleX(${max>0?Math.max(0,Math.min(1,scrollY/max)):0})`;
 let active=0;scenes.forEach((scene,i)=>{if(scene.getBoundingClientRect().top<=Math.max(180,innerHeight*.35))active=i;});
 if(active!==currentScene){currentScene=active;document.querySelectorAll('[data-stage-link]').forEach(link=>{if(Number(link.dataset.stageLink)===active)link.setAttribute('aria-current','step');else link.removeAttribute('aria-current');});}
 drawGraph();
}
function scheduleReading(){if(!scheduled){scheduled=true;requestAnimationFrame(updateReading);}}
window.addEventListener('scroll',scheduleReading,{passive:true});window.addEventListener('resize',scheduleReading,{passive:true});
const readingMode=document.querySelector('.reading-mode');
readingMode.addEventListener('click',()=>{
 const active=Array.from(document.querySelectorAll('.chapter-prose>p,.chapter-prose>.scene-dialogue')).find(paragraph=>{const r=paragraph.getBoundingClientRect();return r.top<innerHeight&&r.bottom>150;});
 const before=active?active.getBoundingClientRect().top:0;
 const reading=readingMode.getAttribute('aria-pressed')!=='true';
 readingMode.setAttribute('aria-pressed',String(reading));readingMode.textContent=reading?'显示来回':'只读文字';
 document.body.classList.toggle('prose-only',reading);
 if(active)window.scrollBy({top:active.getBoundingClientRect().top-before,behavior:'instant'});
 scheduleReading();
});
function openSource(){let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}if(id==='network'){openNetwork();return;}const target=document.getElementById(id);if(target&&target.tagName==='DETAILS'&&!target.open){target.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));}}
document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#s"]');if(!link)return;const target=document.getElementById(link.hash.slice(1));if(target&&target.tagName==='DETAILS')target.open=true;});
window.addEventListener('hashchange',openSource);
drawGraph();selectEvent('all');openSource();updateReading();
