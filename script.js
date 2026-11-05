const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
$('#t').onclick=()=>{const h=document.documentElement;h.dataset.theme=h.dataset.theme==='dark'?'light':'dark'};
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
$$('.rv').forEach((e,i)=>{e.style.transitionDelay=(i%4)*80+'ms';io.observe(e)});
$$('[data-n]').forEach(el=>{const n=+el.dataset.n,t=performance.now();(function f(now){const p=Math.min((now-t)/1600,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)))+(n===300&&p===1?'+':'');if(p<1)requestAnimationFrame(f)})(t)});
const roles=[['Mafia','You work with the mafia. Each night, you and your team secretly choose a player to eliminate. By day, blend in and lie.'],['Doctor','Each night, you pick one player to save. If the mafia targets them, they survive. You can protect yourself.'],['Detective','Each night, you investigate one player and learn if they are mafia. Guide the town without exposing yourself too early.'],['Villager','No special power. Listen, discuss and vote to find the mafia before they outnumber you.'],['Godfather','The mafia leader. You lead the night kill, and the detective sees you as innocent. Stay hidden.'],['Sniper','You have one shot for the whole game. Use it on a night to eliminate a suspect, but a wrong target costs the town.']];
function draw(){const c=$('#rc');c.classList.remove('on');setTimeout(()=>{{const r=roles[Math.random()*roles.length|0];$('#role').innerHTML=`${r[0]}<small>${r[1]}</small>`}c.classList.add('on')},350)}
$('#draw').onclick=draw;$('#rc').onclick=draw;
function tick(){$$('[data-t]').forEach(e=>{if(!e.t)e.t=new Date(e.dataset.t).getTime();let s=Math.max(0,(e.t-Date.now())/1e3|0);const d=s/86400|0,h=s%86400/3600|0,m=s%3600/60|0;e.textContent=s?`${d}d ${h}h ${m}m ${s%60}s`:'Live now'})}
tick();setInterval(tick,1000);
const snip={js:"// Example snippet\nconst clan = { name: 'Other Side', id: 28535 };\nconsole.log(`Welcome to ${clan.name}`);",py:"# Example snippet\nclan = {'name': 'Other Side', 'id': 28535}\nprint(f\"Welcome to {clan['name']}\")"};
function show(l){$('#code').textContent=snip[l];$$('.tabs button').forEach(b=>b.classList.toggle('on',b.dataset.l===l))}
$$('.tabs button').forEach(b=>b.onclick=()=>show(b.dataset.l));show('js');
const copy=(t,b)=>{try{navigator.clipboard.writeText(t)}catch(e){};const o=b.textContent;b.textContent='Copied ✓';setTimeout(()=>b.textContent=o,1500)};
$('#cp').onclick=e=>copy($('#code').textContent,e.target);
$('#id').onclick=e=>copy('28535',e.target);
$$('.gal div').forEach(d=>d.onclick=()=>{$('#lbt').style.background=getComputedStyle(d).backgroundImage;$('#lb').classList.add('on')});
$('#lb').onclick=()=>$('#lb').classList.remove('on');
$$('h1 .ln').forEach((l,j)=>{const t=l.textContent;l.textContent='';[...t].forEach((c,i)=>{const s=document.createElement('span');s.className='ch';s.textContent=c;s.style.animationDelay=(j*.35+i*.07)+'s';l.appendChild(s)})});
const pg=$('#pg'),h1=$('h1');
addEventListener('scroll',()=>{const y=scrollY;pg.style.width=y/(document.body.scrollHeight-innerHeight)*100+'%';h1.style.transform=`translateY(${y*.25}px)`;h1.style.opacity=Math.max(0,1-y/700)},{passive:true});
const cur=$('#cur');let mx=-200,my=-200,cx=0,cy=0;
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY});
(function c(){cx+=(mx-cx)*.18;cy+=(my-cy)*.18;cur.style.transform=`translate(${cx-7}px,${cy-7}px)`;requestAnimationFrame(c)})();
$$('a,button,.rc,.gal div').forEach(e=>{e.addEventListener('pointerenter',()=>cur.classList.add('big'));e.addEventListener('pointerleave',()=>cur.classList.remove('big'))});
$$('.card').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transition='transform .1s';c.style.transform=`perspective(700px) rotateY(${x*14}deg) rotateX(${-y*14}deg) translateY(-6px)`});c.addEventListener('pointerleave',()=>{c.style.transition='transform .5s';c.style.transform=''})});
$$('.btn,.flip').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.4}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')});
const CH='ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&';
const sio=new IntersectionObserver(e=>e.forEach(x=>{if(!x.isIntersecting)return;sio.unobserve(x.target);const el=x.target,t=el.textContent;let f=0;const iv=setInterval(()=>{el.textContent=[...t].map((c,i)=>c===' '||i<f/2?c:CH[Math.random()*CH.length|0]).join('');if(++f>t.length*2){el.textContent=t;clearInterval(iv)}},35)}),{threshold:.6});
$$('h2').forEach(h=>sio.observe(h));
const cv=$('#cv'),g=cv.getContext('2d');let W,H,P=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;P=Array.from({length:Math.min(80,W/14|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5}))}
rs();addEventListener('resize',rs);
(function a(){g.clearRect(0,0,W,H);g.fillStyle=g.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue('--fg').trim();
P.forEach((p,i)=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;const dx=p.x-mx,dy=p.y-my,d=Math.hypot(dx,dy)||1;if(d<140){p.x+=dx/d*1.5;p.y+=dy/d*1.5}g.globalAlpha=.5;g.fillRect(p.x,p.y,2,2);for(let j=i+1;j<P.length;j++){const q=P[j],e=Math.hypot(p.x-q.x,p.y-q.y);if(e<120){g.globalAlpha=(1-e/120)*.25;g.beginPath();g.moveTo(p.x,p.y);g.lineTo(q.x,q.y);g.stroke()}}});requestAnimationFrame(a)})();