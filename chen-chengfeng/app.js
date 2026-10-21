'use strict';
const relations = {
  liang:{name:'你 · 梁博星',role:'指导、补位与交接',x:180,y:260,paths:[['liang','chen'],['chen','liang']],text:'你给她第一份排版任务，也在她试出轮播办法之后，把“陈成凤出品”介绍给老师。6 月谈到陪跑，7 月开始交接工具与稿件。她也会把答案带回来，提醒你继续变得更专业。',source:'私聊 · 2025.09.27、2026.04.18—19、05.11、06.08；26文编部长群 · 07.01—03',links:[['彼此补位','#svg'],['交接的去向','#handover']]},
  gao:{name:'高小倩',role:'指导、审核与分工',x:330,y:95,paths:[['gao','chen']],text:'高小倩在群里征集任务参与者，接她的排版预览，也与她分配寒假来稿。你把有关副部长工作的疑问转给高小倩，她随后确认陈成凤来问了。学习和竞选的连接，都能找到具体的工作记录。',source:'25青媒文编 · 2025.10.13、10.21；25青媒大家庭 · 2026.01.29；你与高小倩私聊 · 05.28',links:[['一起带人的早期','#first'],['从询问到交接','#s13']]},
  wang:{name:'王雪',role:'选图协作 · 经你协调',x:175,y:450,paths:[['wang','chen']],indirect:true,text:'运动会当天，你把她接到办公室选图这条工作线上。王雪在与你的聊天中确认，下午由你、王雪和陈成凤挑照片、放到推送里。6 月你又把她的新排版交给王雪等人看意见。这里的连接，主要由你的对接记录确认。',source:'你与王雪私聊 · 2026.04.16 11:35—11:48；你与陈成凤私聊 · 06.20 19:34',links:[['回到运动会与视觉工作','#others']]},
  ding:{name:'丁佳',role:'视觉工作与拍摄对接',x:620,y:74,paths:[['ding','chen']],text:'在视觉设计中心，丁佳对接校舞赛拍摄，明确点到陈成凤与其他同学。陈成凤在活动群交回拍摄素材。这条线让人看到：她的参与也在现场和镜头后面。',source:'25视觉设计中心 · 2025.11.10；11.14校舞赛决赛 · 11.14',links:[['她自己的另一条工作线','#s9']]},
  zhu:{name:'朱梦鹤',role:'直接沟通的审核与要求',x:825,y:155,paths:[['zhu','chen']],text:'6 月 2 日的三下乡通知工作群里，朱老师直接向她补发材料、要求预览，她回应并继续处理。6 月 21 日，你又请她把人物采访先给受访同学看，再交老师审核，并让她直接加朱老师。她逐渐走进更完整的审核链。',source:'2026 三下乡通知 · 2026.06.02；私聊 · 06.21 14:22—14:31',links:[['回到彼此补位','#svg']]},
  li:{name:'李宗泰',role:'文案与编辑配合 · 同届班子',x:825,y:330,paths:[['chen','li'],['li','chen']],text:'2025 年 11 月，你安排他们一起做推送：她负责编辑，与李宗泰私聊协商。2026 年 7 月的换届名单里，她是部长，李宗泰是副部长。一次次任务里的横向配合，延续进了下一届班子。',source:'25青媒文编 · 2025.11.11；私聊 · 2026.07.02',links:[['最早的一次协商','#s14'],['后来的一份名单','#handover']]},
  song:{name:'宋雨茹',role:'同届文编班子',x:665,y:463,paths:[['song','chen']],text:'7 月 1 日，宋雨茹创建的部长群把前后两届连接起来。次日你发给陈成凤的名单中，宋雨茹与李宗泰同列副部长。记录可以确认共同班子的安排；两人日后怎样分工，此时的资料尚未展开。',source:'26文编部长群 · 2026.07.01；私聊 · 07.02',links:[['换届名单与交接','#s15']]},
  lei:{name:'雷若祺',role:'大创材料的接力协作',x:405,y:465,paths:[['chen','lei'],['lei','chen']],text:'大创材料处理中，她填信息、调整语义，雷若祺继续处理格式；你在群里衔接两人的工作。4 月 13 日，她指出序号与项目类别编码的区别，雷若祺回应并继续调整。贡献藏在这些小小的接力里。',source:'26大创 · 2026.04.01、04.13',links:[['材料里的协作','#s10']]}
};
const center={name:'陈成凤',role:'这些线的交点',x:505,y:270};
const ns='http://www.w3.org/2000/svg';
function svgEl(tag,attrs){const el=document.createElementNS(ns,tag);for(const [key,value] of Object.entries(attrs))el.setAttribute(key,value);return el;}
const lineLayer=document.getElementById('map-lines');
const nodeLayer=document.getElementById('map-nodes');
const positions={chen:center,...relations};
for(const [key,person] of Object.entries(relations)){
  person.paths.forEach(([from,to],index)=>{
    const a=positions[from],b=positions[to];
    const dx=b.x-a.x,dy=b.y-a.y,length=Math.hypot(dx,dy);
    const offset=person.paths.length>1?11:0;
    const mx=(a.x+b.x)/2-dy/length*offset,my=(a.y+b.y)/2+dx/length*offset;
    const endRadius=to==='chen'?49:35;
    const targetX=b.x-dx/length*endRadius,targetY=b.y-dy/length*endRadius;
    const startRadius=from==='chen'?51:36;
    const startX=a.x+dx/length*startRadius,startY=a.y+dy/length*startRadius;
    lineLayer.append(svgEl('path',{d:`M ${startX} ${startY} Q ${mx} ${my} ${targetX} ${targetY}`,class:`map-edge${person.indirect?' indirect':''}`,'data-edge':key,'marker-end':'url(#arrow)'}));
  });
}
for(const [key,person] of Object.entries(positions)){
  const isCenter=key==='chen';
  const group=svgEl('g',{class:`map-node${isCenter?' central':''}`,transform:`translate(${person.x} ${person.y})`});
  if(!isCenter){group.setAttribute('tabindex','0');group.setAttribute('role','button');group.setAttribute('aria-label',`查看陈成凤与${person.name}的关系`);group.setAttribute('data-node',key);group.addEventListener('click',()=>selectPerson(key));group.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();selectPerson(key);}});}
  group.append(svgEl('circle',{r:isCenter?51:35}));
  const name=svgEl('text',{class:'node-name',x:0,y:6,'text-anchor':'middle'});name.textContent=isCenter?'陈成凤':person.name.replace('你 · ','');group.append(name);
  const label=svgEl('text',{class:'node-role',x:0,y:isCenter?78:61,'text-anchor':'middle'});label.textContent=isCenter?'舒窈 / Crescent':person.role.split(' · ')[0];group.append(label);nodeLayer.append(group);
}
function selectPerson(key){
  const person=relations[key];
  document.querySelectorAll('[data-person]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.person===key)));
  document.querySelectorAll('[data-node]').forEach(node=>node.classList.toggle('selected',node.dataset.node===key));
  document.querySelectorAll('[data-edge]').forEach(edge=>edge.classList.toggle('active',edge.dataset.edge===key));
  const detail=document.getElementById('relation-detail');detail.replaceChildren();
  const heading=document.createElement('div'),h=document.createElement('h3'),role=document.createElement('span');h.textContent=person.name;role.textContent=person.role;role.className='role';heading.append(h,role);
  const body=document.createElement('div'),p=document.createElement('p'),source=document.createElement('p'),links=document.createElement('p');p.textContent=person.text;source.textContent=person.source;source.className='detail-source';links.className='detail-source';
  person.links.forEach(([label,href],index)=>{if(index)links.append(document.createTextNode('　／　'));const a=document.createElement('a');a.href=href;a.textContent=label+' ↗';links.append(a);});body.append(p,source,links);detail.append(heading,body);
}
document.querySelectorAll('[data-person]').forEach(button=>button.addEventListener('click',()=>selectPerson(button.dataset.person)));
function openSource(){const id=decodeURIComponent(location.hash.slice(1));const source=document.getElementById(id);if(source&&source.tagName==='DETAILS')source.open=true;}
window.addEventListener('hashchange',openSource);openSource();selectPerson('liang');
if(window.matchMedia('(max-width:560px)').matches){const graph=document.querySelector('.graph-scroll');graph.scrollLeft=(graph.scrollWidth-graph.clientWidth)/2;}
