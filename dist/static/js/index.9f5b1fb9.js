(()=>{"use strict";var e,r,t,o,n,i,a={59(e,r,t){var o=t(848),n=t(540),i=t(338),a=t(570),l=t(260);let s=(0,l.DU)`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${e=>{let{theme:r}=e;return r.fonts.primary}};
    background-color: ${e=>{let{theme:r}=e;return r.colors.background}};
    color: ${e=>{let{theme:r}=e;return r.colors.text}};
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${e=>{let{theme:r}=e;return r.colors.background}};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>{let{theme:r}=e;return r.colors.primary}};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${e=>{let{theme:r}=e;return r.colors.primaryLight}};
  }

  ::selection {
    background: ${e=>{let{theme:r}=e;return r.colors.primary}};
    color: ${e=>{let{theme:r}=e;return r.colors.white}};
  }

  section {
    padding: 5rem 0;
  }
`;var d=t(531);let c=l.Ay.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};
  padding: 1rem 0;

  ${e=>{let{$isScrolled:r,theme:t}=e;return r&&(0,l.AH)`
      background: ${t.colors.backgroundLight}ee;
      backdrop-filter: blur(20px);
      box-shadow: ${t.shadows.md};
      padding: 0.5rem 0;
    `}}
`,m=l.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,u=l.Ay.h1`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  color: ${e=>{let{theme:r}=e;return r.colors.white}};

  span {
    background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,p=l.Ay.nav`
  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.md}}) {
    display: none;
  }
`,x=l.Ay.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
`,h=l.Ay.button`
  color: ${e=>{let{theme:r,$isActive:t}=e;return t?r.colors.primary:r.colors.textSecondary}};
  font-size: 0.9rem;
  font-weight: 500;
  transition: color ${e=>{let{theme:r}=e;return r.transitions.fast}};
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${e=>{let{$isActive:r}=e;return r?"100%":"0"}};
    height: 2px;
    background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
    transition: width ${e=>{let{theme:r}=e;return r.transitions.default}};
  }

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.colors.primary}};

    &::after {
      width: 100%;
    }
  }
`,g=l.Ay.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.md}}) {
    display: flex;
  }
`,f=l.Ay.span`
  width: 25px;
  height: 2px;
  background: ${e=>{let{theme:r}=e;return r.colors.white}};
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};
  transform-origin: center;

  &:nth-child(1) {
    transform: ${e=>{let{$isOpen:r}=e;return r?"rotate(45deg) translate(5px, 5px)":"none"}};
  }

  &:nth-child(2) {
    opacity: ${e=>{let{$isOpen:r}=e;return+!r}};
  }

  &:nth-child(3) {
    transform: ${e=>{let{$isOpen:r}=e;return r?"rotate(-45deg) translate(5px, -5px)":"none"}};
  }
`,b=l.Ay.div`
  display: none;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.md}}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    max-width: 320px;
    height: 100vh;
    background: ${e=>{let{theme:r}=e;return r.colors.backgroundLight}};
    padding: 5rem 2rem 2rem;
    gap: 1rem;
    transform: translateX(${e=>{let{$isOpen:r}=e;return r?"0":"100%"}});
    transition: transform ${e=>{let{theme:r}=e;return r.transitions.default}};
    box-shadow: ${e=>{let{theme:r}=e;return r.shadows.lg}};
    z-index: 1000;
  }
`,y=l.Ay.button`
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.75rem 0;
  text-align: left;
  transition: color ${e=>{let{theme:r}=e;return r.transitions.fast}};
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  }
`,v=[{label:"In\xedcio",path:"/",hash:"#hero"},{label:"Sobre",path:"/",hash:"#about"},{label:"Habilidades",path:"/",hash:"#skills"},{label:"Experi\xeancia",path:"/",hash:"#experience"},{label:"Forma\xe7\xe3o",path:"/",hash:"#education"},{label:"Contato",path:"/",hash:"#contact"}];function j(){let[e,r]=(0,n.useState)(!1),[t,i]=(0,n.useState)(!1),l=(0,a.zy)();(0,n.useEffect)(()=>{let e=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let s=e=>{i(!1);let r=document.querySelector(e);r&&r.scrollIntoView({behavior:"smooth"})};return(0,o.jsx)(c,{$isScrolled:e,children:(0,o.jsxs)(m,{children:[(0,o.jsx)(a.N_,{to:"/",onClick:()=>s("#hero"),children:(0,o.jsxs)(u,{children:["<","Max",(0,o.jsx)("span",{children:"/"}),">"]})}),(0,o.jsx)(p,{children:(0,o.jsx)(x,{children:v.map(e=>(0,o.jsx)("li",{children:(0,o.jsx)(h,{onClick:()=>s(e.hash),$isActive:l.hash===e.hash,children:e.label})},e.hash))})}),(0,o.jsxs)(g,{as:d.$,onPress:()=>i(!t),"aria-label":"Menu",children:[(0,o.jsx)(f,{$isOpen:t}),(0,o.jsx)(f,{$isOpen:t}),(0,o.jsx)(f,{$isOpen:t})]}),(0,o.jsx)(b,{$isOpen:t,children:v.map(e=>(0,o.jsx)(y,{onClick:()=>s(e.hash),children:e.label},e.hash))})]})})}var $=t(619);let w="Max Juniman Batistel",k="Desenvolvedor Front-end",A="Porto Alegre",S="maxjuniman@hotmail.com",z="https://www.linkedin.com/in/max-juniman",F=[{degree:"P\xf3s-Gradua\xe7\xe3o",field:"Desenvolvimento Web Full Stack",institution:"Anhanguera Educacional",conclusion:"04/2025"},{degree:"P\xf3s-Gradua\xe7\xe3o",field:"Tecnologia Java",institution:"Anhanguera Educacional",conclusion:"09/2025"},{degree:"Gradua\xe7\xe3o",field:"An\xe1lise e Desenvolvimento de Sistemas",institution:"Est\xe1cio de S\xe1",conclusion:"02/2023"},{degree:"T\xe9cnico",field:"Inform\xe1tica",institution:"Escola de Ensino T\xe9cnico Alcides Maya",conclusion:"2013"}],C=[{company:"Grecale Solu\xe7\xf5es",role:"Desenvolvedor Front-end",period:"Julho/2025 — Janeiro/2026",activities:["Desenvolvimento em ReactJs, NextJs, JavaScript, Expo e TypeScript","Programa\xe7\xe3o de novos templates web e Suporte na resolu\xe7\xe3o de bugs","Implementa\xe7\xe3o de features e desenvolvimento de novos componentes","Gerenciamento de vers\xe3o com Mercurial e Git","Desenvolvimento e manuten\xe7\xe3o de aplicativos","Respons\xe1vel pela publica\xe7\xe3o dos aplicativos nas plataformas iOS e Android"]},{company:"Firedev Servi\xe7os em TI",role:"Desenvolvedor Front-end",period:"Dezembro/2024 — Junho/2025",activities:["Desenvolvimento em ReactJs, NextJs, JavaScript, Bootstrap, Python e TypeScript","Programa\xe7\xe3o de novos templates web e Suporte na resolu\xe7\xe3o de bugs","Implementa\xe7\xe3o de features e desenvolvimento de novos componentes","Gerenciamento de vers\xe3o com Mercurial e Git"]},{company:"Fiserv do Brasil",role:"Desenvolvedor Front-end S\xeanior",period:"Janeiro/2022 — Outubro/2024",activities:["Desenvolvimento em React JS, JavaScript, jQuery, CSS, HTML e TypeScript","Desenvolvimento de interfaces e Resolu\xe7\xe3o de bugs","Implementa\xe7\xe3o de features utilizando TDD","Desenvolvimento de componentes web","Gerenciamento de vers\xe3o com Mercurial","Ferramentas: Jira, Confluence, Jenkins e ADP","Testes unit\xe1rios com Jest","Gerenciamento de microsservi\xe7os com Single SPA"]},{company:"Firedev Servi\xe7os em TI",role:"Desenvolvedor Front-end",period:"Junho/2021 — Setembro/2023",activities:["Desenvolvimento em ReactJs, NextJs, JavaScript, Bootstrap e TypeScript","Programa\xe7\xe3o de novos templates web e Suporte na resolu\xe7\xe3o de bugs","Implementa\xe7\xe3o de features e desenvolvimento de novos componentes","Gerenciamento de vers\xe3o com Mercurial e Git"]},{company:"TargetIT Servi\xe7os em Tecnologia",role:"Analista de Suporte N3",period:"Dezembro/2017 — Setembro/2020",activities:["Suporte de ferramenta da TargetIT","Banco de dados (MySQL, Oracle e SQL Server), PHP, servidores Linux e Windows","Agendamentos de tarefas, leitura de XML, emiss\xe3o de NFe/CTe/NFSe","Integra\xe7\xe3o com plataformas como SAP/Protheus/Datasul","Atendimento via telefone, chat, presencial e WhatsApp","Respons\xe1vel por sobreaviso e plant\xf5es"]},{company:"KingHost Hospedagem de Sites",role:"Analista de Suporte Pleno",period:"Mar\xe7o/2013 — Dezembro/2017",activities:["Suporte a clientes com dificuldades ligadas ao dom\xednio/site e quest\xf5es t\xe9cnicas","Suporte a MySQL, MSSQL, Firebird, PostgreSQL, Oracle e ferramentas internas"]}],E=[{name:"React JS",level:95},{name:"TypeScript",level:90},{name:"JavaScript",level:95},{name:"Next.js",level:85},{name:"React Native",level:90},{name:"HTML & CSS",level:95},{name:"Node.js",level:70},{name:"Python",level:60},{name:"Laravel / PHP",level:65},{name:"SQL / Banco de Dados",level:75},{name:"Git & Mercurial",level:90},{name:"AWS / Linux Server",level:65}],R=["Adaptabilidade","Comunica\xe7\xe3o","Criatividade","Flexibilidade","Lideran\xe7a","Ownership","Proatividade","Resili\xeancia","Apresenta\xe7\xe3o em P\xfablico","Interesse em constante aprendizado"],M=["Git","Mercurial","Jenkins","VS Code","Cursor","Copilot","Windsurf","Figma","Adobe XD","Jira","Confluence"],P=["Windows Server 2008 (2013)","Participa\xe7\xe3o na CIPA (2015 e 2016)","Testes e instala\xe7\xe3o de CMS","REST API com Laravel 8 (Udemy)","Curso Web Moderno com JavaScript (Udemy)"],T="portfolio_visit_count",D="portfolio_has_visited",L="portfolio-max-juniman",O="visits";async function I(){try{let e=await fetch(`https://api.counterapi.dev/v1/${L}/${O}/up`,{method:"GET"});if(!e.ok)throw Error("API indispon\xedvel");return(await e.json()).count}catch{return null}}async function J(){try{let e=await fetch(`https://api.counterapi.dev/v1/${L}/${O}`,{method:"GET"});if(!e.ok)throw Error("API indispon\xedvel");return(await e.json()).count}catch{return null}}function B(){let e=localStorage.getItem(T);return e?parseInt(e,10):0}function Y(e){localStorage.setItem(T,String(e))}function _(){sessionStorage.setItem(D,"true")}async function N(){if("true"!==sessionStorage.getItem(D)){let e=await I();if(null!==e)return Y(e),_(),e;let r=B()+1;return Y(r),_(),r}let e=await J();return null!==e?(Y(e),e):B()}let G=(0,l.i7)`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`,H=(0,l.i7)`
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
`,Q=(0,l.i7)`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`,W=l.Ay.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1.1rem;
  background: ${e=>{let{theme:r}=e;return r.colors.backgroundCard}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.full}};
  animation: ${H} 0.5s ease;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};

  &:hover {
    border-color: ${e=>{let{theme:r}=e;return r.colors.primary}}60;
    box-shadow: ${e=>{let{theme:r}=e;return r.shadows.sm}};
  }
`,q=l.Ay.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${e=>{let{theme:r}=e;return r.colors.success}};
  animation: ${Q} 2s ease-in-out infinite;
`,V=l.Ay.span`
  display: flex;
  align-items: center;
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  font-size: 0.9rem;

  ${e=>{let{$isAnimating:r}=e;return r&&(0,l.AH)`
      animation: ${G} 0.6s ease;
    `}}
`,U=l.Ay.div`
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
`,X=l.Ay.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};

  ${e=>{let{$isAnimating:r}=e;return r&&(0,l.AH)`
      animation: ${G} 0.6s ease;
    `}}
`,K=l.Ay.span`
  font-size: 0.75rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};
  font-weight: 500;
`;function Z(){let[e,r]=(0,n.useState)(null),[t,i]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{let e=!1;return N().then(t=>{e||(r(t),i(!0),setTimeout(()=>i(!1),600))}),()=>{e=!0}},[]),null===e)?null:(0,o.jsxs)(W,{title:"Total de visitantes",children:[(0,o.jsx)(q,{}),(0,o.jsx)(V,{$isAnimating:t,children:(0,o.jsx)($.Ny1,{})}),(0,o.jsxs)(U,{children:[(0,o.jsx)(X,{$isAnimating:t,children:e.toLocaleString("pt-BR")}),(0,o.jsx)(K,{children:"visitantes"})]})]})}let ee=l.Ay.footer`
  background: ${e=>{let{theme:r}=e;return r.colors.backgroundLight}};
  border-top: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};
  padding: 3rem 0 1.5rem;
`,er=l.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,et=l.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.md}}) {
    flex-direction: column;
    text-align: center;
  }
`,eo=l.Ay.button`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  color: ${e=>{let{theme:r}=e;return r.colors.white}};
  cursor: pointer;

  span {
    background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,en=l.Ay.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,ei=l.Ay.button`
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  font-size: 0.9rem;
  transition: color ${e=>{let{theme:r}=e;return r.transitions.fast}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  }
`,ea=l.Ay.div`
  display: flex;
  gap: 1rem;
`,el=l.Ay.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${e=>{let{theme:r}=e;return r.colors.backgroundCard}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  font-size: 1.1rem;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};

  &:hover {
    background: ${e=>{let{theme:r}=e;return r.colors.primary}};
    border-color: ${e=>{let{theme:r}=e;return r.colors.primary}};
    color: ${e=>{let{theme:r}=e;return r.colors.white}};
    transform: translateY(-2px);
  }
`,es=l.Ay.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};
`,ed=l.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.md}}) {
    flex-direction: column;
    text-align: center;
  }
`,ec=l.Ay.p`
  font-size: 0.85rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};
`,em=l.Ay.p`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};

  svg {
    color: ${e=>{let{theme:r}=e;return r.colors.accent}};
    font-size: 0.8rem;
  }
`;function eu(){let e=new Date().getFullYear(),r=e=>{let r=document.querySelector(e);r&&r.scrollIntoView({behavior:"smooth"})};return(0,o.jsx)(ee,{children:(0,o.jsxs)(er,{children:[(0,o.jsxs)(et,{children:[(0,o.jsxs)(eo,{onClick:()=>r("#hero"),children:["<","Max",(0,o.jsx)("span",{children:"/"}),">"]}),(0,o.jsxs)(en,{children:[(0,o.jsx)(ei,{onClick:()=>r("#about"),children:"Sobre"}),(0,o.jsx)(ei,{onClick:()=>r("#skills"),children:"Habilidades"}),(0,o.jsx)(ei,{onClick:()=>r("#experience"),children:"Experi\xeancia"}),(0,o.jsx)(ei,{onClick:()=>r("#education"),children:"Forma\xe7\xe3o"}),(0,o.jsx)(ei,{onClick:()=>r("#contact"),children:"Contato"})]}),(0,o.jsxs)(ea,{children:[(0,o.jsx)(el,{href:z,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:(0,o.jsx)($.QEs,{})}),(0,o.jsx)(el,{href:`mailto:${S}`,"aria-label":"E-mail",children:(0,o.jsx)($.maD,{})})]})]}),(0,o.jsx)(es,{children:(0,o.jsx)(Z,{})}),(0,o.jsxs)(ed,{children:[(0,o.jsxs)(ec,{children:["\xa9 ",e," ",w,". Todos os direitos reservados."]}),(0,o.jsxs)(em,{children:["Feito com ",(0,o.jsx)($.Mbv,{})," usando React, TypeScript & Styled Components"]})]})]})})}let ep=(0,l.i7)`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ex=(0,l.i7)`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`,eh=(0,l.i7)`
  from { opacity: 0.2; }
  to { opacity: 1; }
`,eg=l.Ay.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4rem;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.lg}}) {
    flex-direction: column;
    text-align: left;
    padding-top: 6rem;
    gap: 3rem;
  }
`,ef=l.Ay.div`
  flex: 1;
  animation: ${ep} 0.8s ease forwards;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.lg}}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`,eb=l.Ay.span`
  display: inline-block;
  color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  animation: ${ep} 0.8s ease forwards;
`,ey=l.Ay.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.75rem;
`,ev=l.Ay.span`
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,ej=l.Ay.h2`
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 600;
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  margin-bottom: 1.25rem;
`,e$=l.Ay.p`
  font-size: 1rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};
  max-width: 560px;
  line-height: 1.8;
  margin-bottom: 1rem;
`,ew=l.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  font-size: 0.95rem;
  margin-bottom: 1rem;

  svg {
    color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  }
`,ek=l.Ay.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${e=>{let{theme:r}=e;return r.colors.success}}20;
  color: ${e=>{let{theme:r}=e;return r.colors.success}};
  padding: 0.4rem 1rem;
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.full}};
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 2rem;
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.success}}40;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: ${e=>{let{theme:r}=e;return r.colors.success}};
    border-radius: 50%;
    animation: ${eh} 1.5s ease-in-out infinite;
  }
`,eA=l.Ay.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.lg}}) {
    justify-content: flex-start;
  }
`,eS=l.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  color: ${e=>{let{theme:r}=e;return r.colors.white}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.md}};
  font-weight: 600;
  font-size: 0.95rem;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};
  box-shadow: ${e=>{let{theme:r}=e;return r.shadows.glow}};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>{let{theme:r}=e;return r.shadows.lg}};
  }
`,ez=l.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  background: transparent;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.md}};
  font-weight: 600;
  font-size: 0.95rem;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};

  &:hover {
    border-color: ${e=>{let{theme:r}=e;return r.colors.primary}};
    color: ${e=>{let{theme:r}=e;return r.colors.primary}};
    transform: translateY(-2px);
  }
`,eF=l.Ay.div`
  flex: 1;
  display: flex;
  justify-content: center;
  animation: ${ep} 1s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.lg}}) {
    width: 100%;
    max-width: 500px;
    justify-content: flex-start;
  }

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.sm}}) {
    max-width: 100%;
  }
`,eC=l.Ay.div`
  background: ${e=>{let{theme:r}=e;return r.colors.backgroundCard}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.lg}};
  padding: 2rem;
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  font-size: 0.9rem;
  width: 100%;
  max-width: 460px;
  animation: ${ex} 6s ease-in-out infinite;
  box-shadow: ${e=>{let{theme:r}=e;return r.shadows.lg}};
  text-align: left;
  overflow-x: auto;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.sm}}) {
    padding: 1.25rem;
    font-size: 0.75rem;
    max-width: 100%;
  }
`,eE=l.Ay.div`
  padding: 0.2rem 0;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
  white-space: nowrap;
`,eR=l.Ay.span`
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
`,eM=l.Ay.span`
  color: ${e=>{let{theme:r}=e;return r.colors.success}};
`,eP=l.Ay.div`
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};
  padding-bottom: 0.5rem;
`;function eT(){return(0,o.jsxs)(eg,{id:"hero",children:[(0,o.jsxs)(ef,{children:[(0,o.jsx)(eb,{children:"Ol\xe1, eu sou"}),(0,o.jsx)(ey,{children:(0,o.jsx)(ev,{children:w})}),(0,o.jsx)(ej,{children:k}),(0,o.jsx)(e$,{children:"S\xf3lida experi\xeancia com Suporte T\xe9cnico, troubleshooting de erros em fluxos de sistemas. Desenvolvimento em React Js, React Native, JavaScript, TypeScript, NextJs, Expo e Laravel. Experi\xeancia com Windows, AWS e Linux Server. Experi\xeancia com fluxo de publica\xe7\xe3o de aplicativos nas plataformas iOS e Android. Facilidade de comunica\xe7\xe3o com o cliente (interno e externo)."}),(0,o.jsxs)(ew,{children:[(0,o.jsx)($.vq8,{}),A,", ","RS"," — ","Brasil"]}),(0,o.jsx)(ek,{children:"Disponibilidade para viagens"}),(0,o.jsxs)(eA,{children:[(0,o.jsxs)(eS,{href:z,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)($.QEs,{})," Conectar no LinkedIn"]}),(0,o.jsxs)(ez,{href:"https://wa.me/5551993112125",target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)($.EcP,{})," WhatsApp"]}),(0,o.jsxs)(ez,{href:`mailto:${S}`,children:[(0,o.jsx)($.maD,{})," E-mail"]})]})]}),(0,o.jsx)(eF,{children:(0,o.jsxs)(eC,{children:[(0,o.jsx)(eP,{children:"// portfolio.ts"}),(0,o.jsxs)(eE,{children:[(0,o.jsx)(eR,{children:"const"})," developer = ","{"]}),(0,o.jsxs)(eE,{style:{paddingLeft:"1.5rem"},children:["name: ",(0,o.jsxs)(eM,{children:['"',w,'"']}),","]}),(0,o.jsxs)(eE,{style:{paddingLeft:"1.5rem"},children:["role: ",(0,o.jsxs)(eM,{children:['"',k,'"']}),","]}),(0,o.jsxs)(eE,{style:{paddingLeft:"1.5rem"},children:["stack: [",(0,o.jsx)(eM,{children:'"React"'}),", ",(0,o.jsx)(eM,{children:'"React Native"'}),", ",(0,o.jsx)(eM,{children:'"TypeScript"'}),", ",(0,o.jsx)(eM,{children:'"Javascript"'}),", ",(0,o.jsx)(eM,{children:'"Next.js"'}),", ",(0,o.jsx)(eM,{children:'"Expo"'}),", ",(0,o.jsx)(eM,{children:'"PHP"'}),", ",(0,o.jsx)(eM,{children:'"Laravel"'}),"],"]}),(0,o.jsxs)(eE,{style:{paddingLeft:"1.5rem"},children:["available: ",(0,o.jsx)(eR,{children:"true"}),","]}),(0,o.jsx)(eE,{children:"}"})]})})]})}(0,l.i7)`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;let eD=l.Ay.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`,eL=l.Ay.p`
  text-align: center;
  color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`,eO=l.Ay.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
`,eI=l.Ay.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.lg}}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,eJ=l.Ay.div`
  p {
    color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
    line-height: 1.9;
    margin-bottom: 1.25rem;
    font-size: 1rem;

    strong {
      color: ${e=>{let{theme:r}=e;return r.colors.text}};
      font-weight: 600;
    }
  }
`,eB=l.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`,eY=l.Ay.div`
  background: ${e=>{let{theme:r}=e;return r.colors.backgroundCard}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.lg}};
  padding: 1.5rem;
  text-align: center;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};

  &:hover {
    transform: translateY(-4px);
    border-color: ${e=>{let{theme:r}=e;return r.colors.primary}};
    box-shadow: ${e=>{let{theme:r}=e;return r.shadows.glow}};
  }
`,e_=l.Ay.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  margin-bottom: 0.75rem;
`,eN=l.Ay.span`
  display: block;
  font-size: 0.8rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
`,eG=l.Ay.span`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
`;function eH(){return(0,o.jsxs)(eD,{id:"about",children:[(0,o.jsx)(eL,{children:"Conhe\xe7a mais"}),(0,o.jsx)(eO,{children:"Sobre Mim"}),(0,o.jsxs)(eI,{children:[(0,o.jsxs)(eJ,{children:[(0,o.jsxs)("p",{children:["Sou um desenvolvedor front-end com s\xf3lida experi\xeancia em ",(0,o.jsx)("strong",{children:"React JS"}),","," ",(0,o.jsx)("strong",{children:"TypeScript"}),", ",(0,o.jsx)("strong",{children:"Next.js"})," e ",(0,o.jsx)("strong",{children:"React Native"}),". Com mais de 5 anos atuando no desenvolvimento de interfaces modernas, tenho paix\xe3o por criar experi\xeancias web e mobile de alta qualidade."]}),(0,o.jsxs)("p",{children:["Minha trajet\xf3ria inclui passagens por empresas como ",(0,o.jsx)("strong",{children:"Fiserv"}),","," ",(0,o.jsx)("strong",{children:"Grecale"})," e ",(0,o.jsx)("strong",{children:"Firedev"}),", onde desenvolvi habilidades em TDD, microsservi\xe7os com Single SPA, publica\xe7\xe3o de apps em iOS/Android e gerenciamento de vers\xe3o com Git e Mercurial."]}),(0,o.jsx)("p",{children:"Atualmente focado em tecnologias modernas do ecossistema React, busco constantemente evoluir e entregar solu\xe7\xf5es que impactem positivamente os neg\xf3cios e a experi\xeancia dos usu\xe1rios."})]}),(0,o.jsxs)(eB,{children:[(0,o.jsxs)(eY,{children:[(0,o.jsx)(e_,{children:(0,o.jsx)($.x$1,{})}),(0,o.jsx)(eN,{children:"Idade"}),(0,o.jsxs)(eG,{children:[37," anos"]})]}),(0,o.jsxs)(eY,{children:[(0,o.jsx)(e_,{children:(0,o.jsx)($.Mbv,{})}),(0,o.jsx)(eN,{children:"Estado Civil"}),(0,o.jsx)(eG,{children:"Casado"})]}),(0,o.jsxs)(eY,{children:[(0,o.jsx)(e_,{children:(0,o.jsx)($.U6x,{})}),(0,o.jsx)(eN,{children:"Filhos"}),(0,o.jsx)(eG,{children:"2 filhos"})]}),(0,o.jsxs)(eY,{children:[(0,o.jsx)(e_,{children:(0,o.jsx)($.wmg,{})}),(0,o.jsx)(eN,{children:"Disponibilidade"}),(0,o.jsx)(eG,{children:"Viagens"})]})]})]})]})}var eQ=t(331);let eW=l.Ay.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`,eq=l.Ay.p`
  text-align: center;
  color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`,eV=l.Ay.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
`,eU=l.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.lg}}) {
    grid-template-columns: 1fr;
  }
`,eX=l.Ay.div``,eK=l.Ay.h3`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
  margin-bottom: 1.5rem;
`,eZ=l.Ay.span`
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  font-size: 1.25rem;
  display: flex;
  align-items: center;
`,e0=l.Ay.div`
  margin-bottom: 1.25rem;
`,e1=l.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`,e5=l.Ay.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
`,e2=l.Ay.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
`,e3=l.Ay.div`
  width: 100%;
  height: 8px;
  background: ${e=>{let{theme:r}=e;return r.colors.surface}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.full}};
  overflow: hidden;
`,e8=l.Ay.div`
  height: 100%;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.full}};
  transition: width 1s ease;
`,e9=l.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,e7=l.Ay.span`
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: ${e=>{let{theme:r}=e;return r.colors.backgroundCard}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.full}};
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
  font-size: 0.9rem;
  font-weight: 500;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};

  &:hover {
    border-color: ${e=>{let{theme:r}=e;return r.colors.primary}};
    color: ${e=>{let{theme:r}=e;return r.colors.primary}};
    box-shadow: ${e=>{let{theme:r}=e;return r.shadows.glow}};
    transform: translateY(-2px);
  }
`,e6=l.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,e4=l.Ay.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: ${e=>{let{theme:r}=e;return r.colors.primary}}15;
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.primary}}30;
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.md}};
  color: ${e=>{let{theme:r}=e;return r.colors.primaryLight}};
  font-size: 0.85rem;
  font-weight: 500;
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};

  &:hover {
    background: ${e=>{let{theme:r}=e;return r.colors.primary}}25;
    border-color: ${e=>{let{theme:r}=e;return r.colors.primary}};
    transform: translateY(-2px);
  }
`;function re(){return(0,o.jsxs)(eW,{id:"skills",children:[(0,o.jsx)(eq,{children:"O que eu sei"}),(0,o.jsx)(eV,{children:"Habilidades"}),(0,o.jsxs)(eU,{children:[(0,o.jsxs)(eX,{children:[(0,o.jsxs)(eK,{children:[(0,o.jsx)(eZ,{children:(0,o.jsx)($.FSj,{})}),"Hard Skills"]}),E.map(e=>(0,o.jsxs)(e0,{children:[(0,o.jsxs)(e1,{children:[(0,o.jsx)(e5,{children:e.name}),(0,o.jsxs)(e2,{children:[e.level,"%"]})]}),(0,o.jsx)(eQ.z,{value:e.level,maxValue:100,"aria-label":e.name,children:e=>{let{percentage:r}=e;return(0,o.jsx)(e3,{children:(0,o.jsx)(e8,{style:{width:`${r}%`}})})}})]},e.name))]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)(eX,{children:[(0,o.jsxs)(eK,{children:[(0,o.jsx)(eZ,{children:(0,o.jsx)($.YXz,{})}),"Soft Skills"]}),(0,o.jsx)(e9,{children:R.map(e=>(0,o.jsx)(e7,{children:e},e))})]}),(0,o.jsxs)(eX,{style:{marginTop:"2rem"},children:[(0,o.jsxs)(eK,{children:[(0,o.jsx)(eZ,{children:(0,o.jsx)($.xdT,{})}),"Ferramentas"]}),(0,o.jsx)(e6,{children:M.map(e=>(0,o.jsx)(e4,{children:e},e))})]})]})]})]})}let rr=(0,l.i7)`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,rt=l.Ay.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`,ro=l.Ay.p`
  text-align: center;
  color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`,rn=l.Ay.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
`,ri=l.Ay.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`,ra=l.Ay.div`
  position: relative;
  padding-left: 3.5rem;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`,rl=l.Ay.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${e=>{let{theme:r,$isActive:t}=e;return t?r.colors.gradient:r.colors.backgroundCard}};
  border: 2px solid ${e=>{let{theme:r,$isActive:t}=e;return t?r.colors.primary:r.colors.border}};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};
`,rs=l.Ay.span`
  color: ${e=>{let{theme:r}=e;return r.colors.white}};
  font-size: 0.85rem;
  display: flex;
  align-items: center;
`,rd=l.Ay.div`
  position: absolute;
  left: 19px;
  top: 40px;
  width: 2px;
  height: calc(100% - 20px);
  background: ${e=>{let{theme:r}=e;return r.colors.border}};
`,rc=l.Ay.div`
  background: ${e=>{let{theme:r}=e;return r.colors.backgroundCard}};
  border: 1px solid ${e=>{let{theme:r,$isExpanded:t}=e;return t?r.colors.primary+"50":r.colors.border}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.lg}};
  padding: 1.5rem;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};

  &:hover {
    border-color: ${e=>{let{theme:r}=e;return r.colors.primary}}50;
    box-shadow: ${e=>{let{theme:r}=e;return r.shadows.sm}};
  }
`,rm=l.Ay.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
  margin-bottom: 0.25rem;
`,ru=l.Ay.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  margin-bottom: 0.25rem;
`,rp=l.Ay.p`
  font-size: 0.85rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  margin-bottom: 1rem;
`,rx=l.Ay.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  font-size: 0.85rem;
  cursor: pointer;
  padding: 0.25rem 0;
  transition: color ${e=>{let{theme:r}=e;return r.transitions.fast}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  }
`,rh=l.Ay.ul`
  margin-top: 1rem;
  animation: ${rr} 0.3s ease;
`,rg=l.Ay.li`
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.6rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  font-size: 0.9rem;
  line-height: 1.6;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  }
`;function rf(){let[e,r]=(0,n.useState)(0);return(0,o.jsxs)(rt,{id:"experience",children:[(0,o.jsx)(ro,{children:"Minha trajet\xf3ria"}),(0,o.jsx)(rn,{children:"Experi\xeancia Profissional"}),(0,o.jsx)(ri,{children:C.map((t,n)=>(0,o.jsxs)(ra,{children:[(0,o.jsx)(rl,{$isActive:e===n,children:(0,o.jsx)(rs,{children:(0,o.jsx)($._yv,{})})}),n<C.length-1&&(0,o.jsx)(rd,{}),(0,o.jsxs)(rc,{$isExpanded:e===n,children:[(0,o.jsx)(rm,{children:t.company}),(0,o.jsx)(ru,{children:t.role}),(0,o.jsx)(rp,{children:t.period}),(0,o.jsxs)(rx,{as:d.$,onPress:()=>{r(e===n?null:n)},"aria-label":e===n?"Recolher atividades":"Expandir atividades",children:[(0,o.jsx)($.Vr3,{style:{transform:e===n?"rotate(180deg)":"rotate(0)",transition:"transform 0.3s ease"}}),e===n?"Recolher":"Ver atividades"]}),e===n&&(0,o.jsx)(rh,{children:t.activities.map((e,r)=>(0,o.jsx)(rg,{children:e},r))})]})]},`${t.company}-${n}`))})]})}let rb=l.Ay.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`,ry=l.Ay.p`
  text-align: center;
  color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`,rv=l.Ay.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
`,rj=l.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`,r$=l.Ay.div`
  background: ${e=>{let{theme:r}=e;return r.colors.backgroundCard}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.lg}};
  padding: 2rem;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
    opacity: 0;
    transition: opacity ${e=>{let{theme:r}=e;return r.transitions.default}};
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${e=>{let{theme:r}=e;return r.colors.primary}}50;
    box-shadow: ${e=>{let{theme:r}=e;return r.shadows.glow}};

    &::before {
      opacity: 1;
    }
  }
`,rw=l.Ay.div`
  font-size: 2rem;
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  margin-bottom: 1rem;
`,rk=l.Ay.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: ${e=>{let{theme:r}=e;return r.colors.primary}}20;
  color: ${e=>{let{theme:r}=e;return r.colors.primaryLight}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.full}};
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`,rA=l.Ay.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
  margin-bottom: 0.5rem;
`,rS=l.Ay.p`
  font-size: 0.9rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  margin-bottom: 0.5rem;
`,rz=l.Ay.p`
  font-size: 0.8rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
`,rF=l.Ay.div`
  max-width: 700px;
  margin: 0 auto;
  background: ${e=>{let{theme:r}=e;return r.colors.backgroundCard}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.lg}};
  padding: 2rem;
`,rC=l.Ay.h3`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
  margin-bottom: 1.5rem;

  svg {
    color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
  }
`,rE=l.Ay.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,rR=l.Ay.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  font-size: 0.95rem;
`,rM=l.Ay.span`
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  font-weight: bold;
`;function rP(){return(0,o.jsxs)(rb,{id:"education",children:[(0,o.jsx)(ry,{children:"Minha forma\xe7\xe3o"}),(0,o.jsx)(rv,{children:"Forma\xe7\xe3o Acad\xeamica"}),(0,o.jsx)(rj,{children:F.map((e,r)=>(0,o.jsxs)(r$,{children:[(0,o.jsx)(rw,{children:(0,o.jsx)($.YNd,{})}),(0,o.jsx)(rk,{children:e.degree}),(0,o.jsx)(rA,{children:e.field}),(0,o.jsx)(rS,{children:e.institution}),(0,o.jsxs)(rz,{children:["Conclus\xe3o: ",e.conclusion]})]},r))}),(0,o.jsxs)(rF,{children:[(0,o.jsxs)(rC,{children:[(0,o.jsx)($.veT,{})," Treinamentos & Certifica\xe7\xf5es"]}),(0,o.jsx)(rE,{children:P.map((e,r)=>(0,o.jsxs)(rR,{children:[(0,o.jsx)(rM,{children:"▹"}),e]},r))})]})]})}let rT=l.Ay.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`,rD=l.Ay.p`
  text-align: center;
  color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`,rL=l.Ay.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
`,rO=l.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.lg}}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,rI=l.Ay.div``,rJ=l.Ay.p`
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`,rB=l.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,rY=l.Ay.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  color: ${e=>{let{theme:r}=e;return r.colors.white}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.md}};
  font-weight: 600;
  font-size: 1rem;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};
  box-shadow: ${e=>{let{theme:r}=e;return r.shadows.glow}};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>{let{theme:r}=e;return r.shadows.lg}};
  }

  svg {
    font-size: 1.2rem;
  }
`,r_=l.Ay.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: transparent;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.md}};
  font-weight: 600;
  font-size: 1rem;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};

  &:hover {
    border-color: ${e=>{let{theme:r}=e;return r.colors.primary}};
    color: ${e=>{let{theme:r}=e;return r.colors.primary}};
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.2rem;
  }
`,rN=l.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.xs}}) {
    grid-template-columns: 1fr;
  }
`,rG=l.Ay.div`
  background: ${e=>{let{theme:r}=e;return r.colors.backgroundCard}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.lg}};
  padding: 1.5rem;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};

  &:hover {
    transform: translateY(-4px);
    border-color: ${e=>{let{theme:r}=e;return r.colors.primary}}50;
    box-shadow: ${e=>{let{theme:r}=e;return r.shadows.glow}};
  }
`,rH=l.Ay.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  margin-bottom: 0.75rem;
`,rQ=l.Ay.span`
  display: block;
  font-size: 0.8rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
`,rW=l.Ay.span`
  display: block;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
  word-break: break-all;
  transition: color ${e=>{let{theme:r}=e;return r.transitions.fast}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  }
`;function rq(){return(0,o.jsxs)(rT,{id:"contact",children:[(0,o.jsx)(rD,{children:"Fale comigo"}),(0,o.jsx)(rL,{children:"Vamos Conversar?"}),(0,o.jsxs)(rO,{children:[(0,o.jsxs)(rI,{children:[(0,o.jsx)(rJ,{children:"Estou dispon\xedvel para novas oportunidades e desafios. Se voc\xea est\xe1 procurando um desenvolvedor front-end com experi\xeancia s\xf3lida em React, TypeScript e tecnologias modernas, vamos conversar!"}),(0,o.jsxs)(rB,{children:[(0,o.jsxs)(rY,{href:"https://wa.me/5551993112125",target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)($.EcP,{})," Chamar no WhatsApp"]}),(0,o.jsxs)(r_,{href:z,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)($.QEs,{})," Conectar no LinkedIn"]})]})]}),(0,o.jsxs)(rN,{children:[(0,o.jsxs)(rG,{children:[(0,o.jsx)(rH,{children:(0,o.jsx)($.maD,{})}),(0,o.jsx)(rQ,{children:"E-mail"}),(0,o.jsx)(rW,{as:"a",href:`mailto:${S}`,children:S})]}),(0,o.jsxs)(rG,{children:[(0,o.jsx)(rH,{children:(0,o.jsx)($.Cab,{})}),(0,o.jsx)(rQ,{children:"Telefone"}),(0,o.jsx)(rW,{as:"a",href:"tel:+5551993112125",children:"(51) 99311-2125"})]}),(0,o.jsxs)(rG,{children:[(0,o.jsx)(rH,{children:(0,o.jsx)($.vq8,{})}),(0,o.jsx)(rQ,{children:"Localiza\xe7\xe3o"}),(0,o.jsxs)(rW,{children:[A,", ","RS"]})]}),(0,o.jsxs)(rG,{children:[(0,o.jsx)(rH,{children:(0,o.jsx)($.QEs,{})}),(0,o.jsx)(rQ,{children:"LinkedIn"}),(0,o.jsx)(rW,{as:"a",href:z,target:"_blank",rel:"noopener noreferrer",children:"/in/max-juniman"})]})]})]})]})}function rV(){return(0,o.jsxs)("main",{children:[(0,o.jsx)(eT,{}),(0,o.jsx)(eH,{}),(0,o.jsx)(re,{}),(0,o.jsx)(rf,{}),(0,o.jsx)(rP,{}),(0,o.jsx)(rq,{})]})}let rU=l.Ay.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`,rX=l.Ay.h1`
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 900;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
`,rK=l.Ay.p`
  font-size: 1.25rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  margin: 1rem 0 2rem;
`,rZ=(0,l.Ay)(a.N_)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  color: ${e=>{let{theme:r}=e;return r.colors.white}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.md}};
  font-weight: 600;
  font-size: 1rem;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>{let{theme:r}=e;return r.shadows.lg}};
  }
`;function r0(){return(0,o.jsxs)(rU,{children:[(0,o.jsx)(rX,{children:"404"}),(0,o.jsx)(rK,{children:"Oops! P\xe1gina n\xe3o encontrada."}),(0,o.jsx)(rZ,{to:"/",children:"Voltar ao In\xedcio"})]})}i.createRoot(document.getElementById("root")).render((0,o.jsx)(n.StrictMode,{children:(0,o.jsxs)(l.NP,{theme:{colors:{primary:"#6C63FF",primaryLight:"#8B85FF",primaryDark:"#4A42E0",secondary:"#00D9FF",secondaryLight:"#33E1FF",accent:"#FF6B6B",background:"#0A0E27",backgroundLight:"#111640",backgroundCard:"#161B45",surface:"#1C2251",surfaceHover:"#242B63",text:"#E8E8FF",textSecondary:"#9B9BC4",textMuted:"#6B6B9E",white:"#FFFFFF",border:"#2A3070",gradient:"linear-gradient(135deg, #6C63FF 0%, #00D9FF 100%)",gradientText:"linear-gradient(135deg, #6C63FF 0%, #00D9FF 100%)",gradientHover:"linear-gradient(135deg, #8B85FF 0%, #33E1FF 100%)",success:"#4ECB71",warning:"#FFB84D",error:"#FF6B6B"},fonts:{primary:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",mono:"'JetBrains Mono', 'Fira Code', monospace"},breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px"},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"3rem",section:"5rem"},borderRadius:{sm:"0.375rem",md:"0.75rem",lg:"1rem",xl:"1.5rem",full:"9999px"},shadows:{sm:"0 2px 8px rgba(108, 99, 255, 0.1)",md:"0 4px 16px rgba(108, 99, 255, 0.15)",lg:"0 8px 32px rgba(108, 99, 255, 0.2)",glow:"0 0 20px rgba(108, 99, 255, 0.3)",glowSecondary:"0 0 20px rgba(0, 217, 255, 0.3)"},transitions:{fast:"0.15s ease",default:"0.3s ease",slow:"0.5s ease"}},children:[(0,o.jsx)(s,{}),(0,o.jsx)(a.Kd,{children:(0,o.jsx)(function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(j,{}),(0,o.jsxs)(a.BV,{children:[(0,o.jsx)(a.qh,{path:"/",element:(0,o.jsx)(rV,{})}),(0,o.jsx)(a.qh,{path:"*",element:(0,o.jsx)(r0,{})})]}),(0,o.jsx)(eu,{})]})},{})})]})}))}},l={};function s(e){var r=l[e];if(void 0!==r)return r.exports;var t=l[e]={exports:{}};return a[e](t,t.exports,s),t.exports}s.m=a,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(t,o){if(1&o&&(t=this(t)),8&o||"object"==typeof t&&t&&(4&o&&t.__esModule||16&o&&"function"==typeof t.then))return t;var n=Object.create(null);s.r(n);var i={};e=e||[null,r({}),r([]),r(r)];for(var a=2&o&&t;("object"==typeof a||"function"==typeof a)&&!~e.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach(e=>{i[e]=()=>t[e]});return i.default=()=>t,s.d(n,i),n},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),s.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nc=void 0,t=[],s.O=(e,r,o,n)=>{if(r){n=n||0;for(var i=t.length;i>0&&t[i-1][2]>n;i--)t[i]=t[i-1];t[i]=[r,o,n];return}for(var a=1/0,i=0;i<t.length;i++){for(var[r,o,n]=t[i],l=!0,d=0;d<r.length;d++)(!1&n||a>=n)&&Object.keys(s.O).every(e=>s.O[e](r[d]))?r.splice(d--,1):(l=!1,n<a&&(a=n));if(l){t.splice(i--,1);var c=o();void 0!==c&&(e=c)}}return e},o={410:0},s.O.j=e=>0===o[e],n=(e,r)=>{var t,n,[i,a,l]=r,d=0;if(i.some(e=>0!==o[e])){for(t in a)s.o(a,t)&&(s.m[t]=a[t]);if(l)var c=l(s)}for(e&&e(r);d<i.length;d++)n=i[d],s.o(o,n)&&o[n]&&o[n][0](),o[n]=0;return s.O(c)},(i=self.webpackChunkportfolio_max_juniman=self.webpackChunkportfolio_max_juniman||[]).forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i));var d=s.O(void 0,["783","535","603"],()=>s(59));d=s.O(d)})();