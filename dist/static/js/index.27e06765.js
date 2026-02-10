(()=>{"use strict";var e,r,t,o,n,i,l={669(e,r,t){var o=t(848),n=t(540),i=t(338),l=t(570),a=t(260);let s=(0,a.DU)`
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
`;var d=t(531);let c=a.Ay.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};
  padding: 1rem 0;

  ${e=>{let{$isScrolled:r,theme:t}=e;return r&&(0,a.AH)`
      background: ${t.colors.backgroundLight}ee;
      backdrop-filter: blur(20px);
      box-shadow: ${t.shadows.md};
      padding: 0.5rem 0;
    `}}
`,m=a.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,p=a.Ay.h1`
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
`,u=a.Ay.nav`
  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.md}}) {
    display: none;
  }
`,x=a.Ay.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
`,h=a.Ay.button`
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
`,g=a.Ay.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.md}}) {
    display: flex;
  }
`,f=a.Ay.span`
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
`,b=a.Ay.div`
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
`,y=a.Ay.button`
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
`,j=[{label:"In\xedcio",path:"/",hash:"#hero"},{label:"Sobre",path:"/",hash:"#about"},{label:"Habilidades",path:"/",hash:"#skills"},{label:"Experi\xeancia",path:"/",hash:"#experience"},{label:"Forma\xe7\xe3o",path:"/",hash:"#education"},{label:"Contato",path:"/",hash:"#contact"}];function v(){let[e,r]=(0,n.useState)(!1),[t,i]=(0,n.useState)(!1),a=(0,l.zy)();(0,n.useEffect)(()=>{let e=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let s=e=>{i(!1);let r=document.querySelector(e);r&&r.scrollIntoView({behavior:"smooth"})};return(0,o.jsx)(c,{$isScrolled:e,children:(0,o.jsxs)(m,{children:[(0,o.jsx)(l.N_,{to:"/",onClick:()=>s("#hero"),children:(0,o.jsxs)(p,{children:["<","Max",(0,o.jsx)("span",{children:"/"}),">"]})}),(0,o.jsx)(u,{children:(0,o.jsx)(x,{children:j.map(e=>(0,o.jsx)("li",{children:(0,o.jsx)(h,{onClick:()=>s(e.hash),$isActive:a.hash===e.hash,children:e.label})},e.hash))})}),(0,o.jsxs)(g,{as:d.$,onPress:()=>i(!t),"aria-label":"Menu",children:[(0,o.jsx)(f,{$isOpen:t}),(0,o.jsx)(f,{$isOpen:t}),(0,o.jsx)(f,{$isOpen:t})]}),(0,o.jsx)(b,{$isOpen:t,children:j.map(e=>(0,o.jsx)(y,{onClick:()=>s(e.hash),children:e.label},e.hash))})]})})}var $=t(619);let w="Max Juniman Batistel",k="Desenvolvedor Front-end",A="Porto Alegre",S="maxjuniman@hotmail.com",z="https://www.linkedin.com/in/max-juniman",F=[{degree:"P\xf3s-Gradua\xe7\xe3o",field:"Desenvolvimento Web Full Stack",institution:"Anhanguera Educacional",conclusion:"04/2025"},{degree:"P\xf3s-Gradua\xe7\xe3o",field:"Tecnologia Java",institution:"Anhanguera Educacional",conclusion:"09/2025"},{degree:"Gradua\xe7\xe3o",field:"An\xe1lise e Desenvolvimento de Sistemas",institution:"Est\xe1cio de S\xe1",conclusion:"02/2023"},{degree:"T\xe9cnico",field:"Inform\xe1tica",institution:"Escola de Ensino T\xe9cnico Alcides Maya",conclusion:"2013"}],C=[{company:"Grecale Solu\xe7\xf5es",role:"Desenvolvedor Front-end",period:"Julho/2025 — Janeiro/2026",activities:["Desenvolvimento em ReactJs, NextJs, JavaScript, Expo e TypeScript","Programa\xe7\xe3o de novos templates web e Suporte na resolu\xe7\xe3o de bugs","Implementa\xe7\xe3o de features e desenvolvimento de novos componentes","Gerenciamento de vers\xe3o com Mercurial e Git","Desenvolvimento e manuten\xe7\xe3o de aplicativos","Respons\xe1vel pela publica\xe7\xe3o dos aplicativos nas plataformas iOS e Android"]},{company:"Firedev Servi\xe7os em TI",role:"Desenvolvedor Front-end",period:"Dezembro/2024 — Junho/2025",activities:["Desenvolvimento em ReactJs, NextJs, JavaScript, Bootstrap, Python e TypeScript","Programa\xe7\xe3o de novos templates web e Suporte na resolu\xe7\xe3o de bugs","Implementa\xe7\xe3o de features e desenvolvimento de novos componentes","Gerenciamento de vers\xe3o com Mercurial e Git"]},{company:"FISERV do Brasil",role:"Desenvolvedor Front-end S\xeanior",period:"Janeiro/2022 — Outubro/2024",activities:["Desenvolvimento em React JS, JavaScript, jQuery, CSS, HTML e TypeScript","Desenvolvimento de interfaces e Resolu\xe7\xe3o de bugs","Implementa\xe7\xe3o de features utilizando TDD","Desenvolvimento de componentes web","Gerenciamento de vers\xe3o com Mercurial","Ferramentas: Jira, Confluence, Jenkins e ADP","Testes unit\xe1rios com Jest","Gerenciamento de microsservi\xe7os com Single SPA"]},{company:"Firedev Servi\xe7os em TI",role:"Desenvolvedor Front-end",period:"Junho/2021 — Setembro/2023",activities:["Desenvolvimento em ReactJs, NextJs, JavaScript, Bootstrap e TypeScript","Programa\xe7\xe3o de novos templates web e Suporte na resolu\xe7\xe3o de bugs","Implementa\xe7\xe3o de features e desenvolvimento de novos componentes","Gerenciamento de vers\xe3o com Mercurial e Git"]},{company:"TargetIT Servi\xe7os em Tecnologia",role:"Analista de Suporte N3",period:"Dezembro/2017 — Setembro/2020",activities:["Suporte de ferramenta da TargetIT","Banco de dados (MySQL, Oracle e SQL Server), PHP, servidores Linux e Windows","Agendamentos de tarefas, leitura de XML, emiss\xe3o de NFe/CTe/NFSe","Integra\xe7\xe3o com plataformas como SAP/Protheus/Datasul","Atendimento via telefone, chat, presencial e WhatsApp","Respons\xe1vel por sobreaviso e plant\xf5es"]},{company:"KingHost Hospedagem de Sites",role:"Analista de Suporte Pleno",period:"Mar\xe7o/2013 — Dezembro/2017",activities:["Suporte a clientes com dificuldades ligadas ao dom\xednio/site e quest\xf5es t\xe9cnicas","Suporte a MySQL, MSSQL, Firebird, PostgreSQL, Oracle e ferramentas internas"]}],R=[{name:"React JS",level:95},{name:"TypeScript",level:90},{name:"JavaScript",level:95},{name:"Next.js",level:85},{name:"React Native",level:80},{name:"HTML & CSS",level:95},{name:"Node.js",level:70},{name:"Python",level:60},{name:"Laravel / PHP",level:65},{name:"SQL / Banco de Dados",level:75},{name:"Git & Mercurial",level:90},{name:"AWS / Linux Server",level:65}],M=["Adaptabilidade","Comunica\xe7\xe3o","Criatividade","Flexibilidade","Lideran\xe7a","Ownership","Proatividade","Resili\xeancia","Apresenta\xe7\xe3o em P\xfablico","Interesse em constante aprendizado"],E=["Git","Mercurial","Jenkins","VS Code","Cursor","Copilot","Windsurf","Figma","Adobe XD","Jira","Confluence"],D=["Windows Server 2008 (2013)","Participa\xe7\xe3o na CIPA (2015 e 2016)","Testes e instala\xe7\xe3o de CMS","REST API com Laravel 8 (Udemy)","Curso Web Moderno com JavaScript (Udemy)"],P=a.Ay.footer`
  background: ${e=>{let{theme:r}=e;return r.colors.backgroundLight}};
  border-top: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};
  padding: 3rem 0 1.5rem;
`,T=a.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,L=a.Ay.div`
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
`,O=a.Ay.button`
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
`,J=a.Ay.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`,I=a.Ay.button`
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  font-size: 0.9rem;
  transition: color ${e=>{let{theme:r}=e;return r.transitions.fast}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  }
`,B=a.Ay.div`
  display: flex;
  gap: 1rem;
`,Y=a.Ay.a`
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
`,_=a.Ay.div`
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
`,N=a.Ay.p`
  font-size: 0.85rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};
`,G=a.Ay.p`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};

  svg {
    color: ${e=>{let{theme:r}=e;return r.colors.accent}};
    font-size: 0.8rem;
  }
`;function H(){let e=new Date().getFullYear(),r=e=>{let r=document.querySelector(e);r&&r.scrollIntoView({behavior:"smooth"})};return(0,o.jsx)(P,{children:(0,o.jsxs)(T,{children:[(0,o.jsxs)(L,{children:[(0,o.jsxs)(O,{onClick:()=>r("#hero"),children:["<","Max",(0,o.jsx)("span",{children:"/"}),">"]}),(0,o.jsxs)(J,{children:[(0,o.jsx)(I,{onClick:()=>r("#about"),children:"Sobre"}),(0,o.jsx)(I,{onClick:()=>r("#skills"),children:"Habilidades"}),(0,o.jsx)(I,{onClick:()=>r("#experience"),children:"Experi\xeancia"}),(0,o.jsx)(I,{onClick:()=>r("#education"),children:"Forma\xe7\xe3o"}),(0,o.jsx)(I,{onClick:()=>r("#contact"),children:"Contato"})]}),(0,o.jsxs)(B,{children:[(0,o.jsx)(Y,{href:z,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:(0,o.jsx)($.QEs,{})}),(0,o.jsx)(Y,{href:`mailto:${S}`,"aria-label":"E-mail",children:(0,o.jsx)($.maD,{})})]})]}),(0,o.jsxs)(_,{children:[(0,o.jsxs)(N,{children:["\xa9 ",e," ",w,". Todos os direitos reservados."]}),(0,o.jsxs)(G,{children:["Feito com ",(0,o.jsx)($.Mbv,{})," usando React, TypeScript & Styled Components"]})]})]})})}let V=(0,a.i7)`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Q=(0,a.i7)`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`,W=(0,a.i7)`
  from { opacity: 0.2; }
  to { opacity: 1; }
`,q=a.Ay.section`
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
    text-align: center;
    padding-top: 6rem;
    gap: 3rem;
  }
`,U=a.Ay.div`
  flex: 1;
  animation: ${V} 0.8s ease forwards;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.lg}}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,X=a.Ay.span`
  display: inline-block;
  color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  animation: ${V} 0.8s ease forwards;
`,K=a.Ay.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.75rem;
`,Z=a.Ay.span`
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,ee=a.Ay.h2`
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 600;
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  margin-bottom: 1.25rem;
`,er=a.Ay.p`
  font-size: 1rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};
  max-width: 560px;
  line-height: 1.8;
  margin-bottom: 1rem;
`,et=a.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  font-size: 0.95rem;
  margin-bottom: 1rem;

  svg {
    color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  }
`,eo=a.Ay.span`
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
    animation: ${W} 1.5s ease-in-out infinite;
  }
`,en=a.Ay.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.lg}}) {
    justify-content: center;
  }
`,ei=a.Ay.a`
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
`,el=a.Ay.a`
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
`,ea=a.Ay.div`
  flex: 1;
  display: flex;
  justify-content: center;
  animation: ${V} 1s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.lg}}) {
    width: 100%;
    max-width: 500px;
  }
`,es=a.Ay.div`
  background: ${e=>{let{theme:r}=e;return r.colors.backgroundCard}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.lg}};
  padding: 2rem;
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  font-size: 0.9rem;
  width: 100%;
  max-width: 460px;
  animation: ${Q} 6s ease-in-out infinite;
  box-shadow: ${e=>{let{theme:r}=e;return r.shadows.lg}};
`,ed=a.Ay.div`
  padding: 0.2rem 0;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
`,ec=a.Ay.span`
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
`,em=a.Ay.span`
  color: ${e=>{let{theme:r}=e;return r.colors.success}};
`,ep=a.Ay.div`
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};
  padding-bottom: 0.5rem;
`;function eu(){return(0,o.jsxs)(q,{id:"hero",children:[(0,o.jsxs)(U,{children:[(0,o.jsx)(X,{children:"Ol\xe1, eu sou"}),(0,o.jsx)(K,{children:(0,o.jsx)(Z,{children:w})}),(0,o.jsx)(ee,{children:k}),(0,o.jsx)(er,{children:"S\xf3lida experi\xeancia com Suporte T\xe9cnico, troubleshooting de erros em fluxos de sistemas. Desenvolvimento em React Js, React Native, JavaScript, TypeScript, NextJs, Expo e Laravel. Experi\xeancia com Windows, AWS e Linux Server. Experi\xeancia com fluxo de publica\xe7\xe3o de aplicativos nas plataformas iOS e Android. Facilidade de comunica\xe7\xe3o com o cliente (interno e externo)."}),(0,o.jsxs)(et,{children:[(0,o.jsx)($.vq8,{}),A,", ","RS"," — ","Brasil"]}),(0,o.jsx)(eo,{children:"Disponibilidade para viagens"}),(0,o.jsxs)(en,{children:[(0,o.jsxs)(ei,{href:z,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)($.QEs,{})," Conectar no LinkedIn"]}),(0,o.jsxs)(el,{href:"https://wa.me/5551993112125",target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)($.EcP,{})," WhatsApp"]}),(0,o.jsxs)(el,{href:`mailto:${S}`,children:[(0,o.jsx)($.maD,{})," E-mail"]})]})]}),(0,o.jsx)(ea,{children:(0,o.jsxs)(es,{children:[(0,o.jsx)(ep,{children:"// portfolio.ts"}),(0,o.jsxs)(ed,{children:[(0,o.jsx)(ec,{children:"const"})," developer = ","{"]}),(0,o.jsxs)(ed,{style:{paddingLeft:"1.5rem"},children:["name: ",(0,o.jsxs)(em,{children:['"',w,'"']}),","]}),(0,o.jsxs)(ed,{style:{paddingLeft:"1.5rem"},children:["role: ",(0,o.jsxs)(em,{children:['"',k,'"']}),","]}),(0,o.jsxs)(ed,{style:{paddingLeft:"1.5rem"},children:["stack: [",(0,o.jsx)(em,{children:'"React"'}),", ",(0,o.jsx)(em,{children:'"TypeScript"'}),", ",(0,o.jsx)(em,{children:'"Next.js"'}),"],"]}),(0,o.jsxs)(ed,{style:{paddingLeft:"1.5rem"},children:["available: ",(0,o.jsx)(ec,{children:"true"}),","]}),(0,o.jsx)(ed,{children:"}"})]})})]})}(0,a.i7)`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;let ex=a.Ay.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`,eh=a.Ay.p`
  text-align: center;
  color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`,eg=a.Ay.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
`,ef=a.Ay.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.lg}}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,eb=a.Ay.div`
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
`,ey=a.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`,ej=a.Ay.div`
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
`,ev=a.Ay.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  margin-bottom: 0.75rem;
`,e$=a.Ay.span`
  display: block;
  font-size: 0.8rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
`,ew=a.Ay.span`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
`;function ek(){return(0,o.jsxs)(ex,{id:"about",children:[(0,o.jsx)(eh,{children:"Conhe\xe7a mais"}),(0,o.jsx)(eg,{children:"Sobre Mim"}),(0,o.jsxs)(ef,{children:[(0,o.jsxs)(eb,{children:[(0,o.jsxs)("p",{children:["Sou um desenvolvedor front-end com s\xf3lida experi\xeancia em ",(0,o.jsx)("strong",{children:"React JS"}),","," ",(0,o.jsx)("strong",{children:"TypeScript"}),", ",(0,o.jsx)("strong",{children:"Next.js"})," e ",(0,o.jsx)("strong",{children:"React Native"}),". Com mais de 5 anos atuando no desenvolvimento de interfaces modernas, tenho paix\xe3o por criar experi\xeancias web e mobile de alta qualidade."]}),(0,o.jsxs)("p",{children:["Minha trajet\xf3ria inclui passagens por empresas como ",(0,o.jsx)("strong",{children:"FISERV"}),","," ",(0,o.jsx)("strong",{children:"Grecale"})," e ",(0,o.jsx)("strong",{children:"Firedev"}),", onde desenvolvi habilidades em TDD, microsservi\xe7os com Single SPA, publica\xe7\xe3o de apps em iOS/Android e gerenciamento de vers\xe3o com Git e Mercurial."]}),(0,o.jsx)("p",{children:"Atualmente focado em tecnologias modernas do ecossistema React, busco constantemente evoluir e entregar solu\xe7\xf5es que impactem positivamente os neg\xf3cios e a experi\xeancia dos usu\xe1rios."})]}),(0,o.jsxs)(ey,{children:[(0,o.jsxs)(ej,{children:[(0,o.jsx)(ev,{children:(0,o.jsx)($.x$1,{})}),(0,o.jsx)(e$,{children:"Idade"}),(0,o.jsxs)(ew,{children:[36," anos"]})]}),(0,o.jsxs)(ej,{children:[(0,o.jsx)(ev,{children:(0,o.jsx)($.Mbv,{})}),(0,o.jsx)(e$,{children:"Estado Civil"}),(0,o.jsx)(ew,{children:"Casado"})]}),(0,o.jsxs)(ej,{children:[(0,o.jsx)(ev,{children:(0,o.jsx)($.U6x,{})}),(0,o.jsx)(e$,{children:"Filhos"}),(0,o.jsx)(ew,{children:"2 filhos"})]}),(0,o.jsxs)(ej,{children:[(0,o.jsx)(ev,{children:(0,o.jsx)($.wmg,{})}),(0,o.jsx)(e$,{children:"Disponibilidade"}),(0,o.jsx)(ew,{children:"Viagens"})]})]})]})]})}var eA=t(331);let eS=a.Ay.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`,ez=a.Ay.p`
  text-align: center;
  color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`,eF=a.Ay.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
`,eC=a.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.lg}}) {
    grid-template-columns: 1fr;
  }
`,eR=a.Ay.div``,eM=a.Ay.h3`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
  margin-bottom: 1.5rem;
`,eE=a.Ay.span`
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  font-size: 1.25rem;
  display: flex;
  align-items: center;
`,eD=a.Ay.div`
  margin-bottom: 1.25rem;
`,eP=a.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`,eT=a.Ay.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
`,eL=a.Ay.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
`,eO=a.Ay.div`
  width: 100%;
  height: 8px;
  background: ${e=>{let{theme:r}=e;return r.colors.surface}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.full}};
  overflow: hidden;
`,eJ=a.Ay.div`
  height: 100%;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.full}};
  transition: width 1s ease;
`,eI=a.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,eB=a.Ay.span`
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
`,eY=a.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,e_=a.Ay.span`
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
`;function eN(){return(0,o.jsxs)(eS,{id:"skills",children:[(0,o.jsx)(ez,{children:"O que eu sei"}),(0,o.jsx)(eF,{children:"Habilidades"}),(0,o.jsxs)(eC,{children:[(0,o.jsxs)(eR,{children:[(0,o.jsxs)(eM,{children:[(0,o.jsx)(eE,{children:(0,o.jsx)($.FSj,{})}),"Hard Skills"]}),R.map(e=>(0,o.jsxs)(eD,{children:[(0,o.jsxs)(eP,{children:[(0,o.jsx)(eT,{children:e.name}),(0,o.jsxs)(eL,{children:[e.level,"%"]})]}),(0,o.jsx)(eA.z,{value:e.level,maxValue:100,"aria-label":e.name,children:e=>{let{percentage:r}=e;return(0,o.jsx)(eO,{children:(0,o.jsx)(eJ,{style:{width:`${r}%`}})})}})]},e.name))]}),(0,o.jsxs)("div",{children:[(0,o.jsxs)(eR,{children:[(0,o.jsxs)(eM,{children:[(0,o.jsx)(eE,{children:(0,o.jsx)($.YXz,{})}),"Soft Skills"]}),(0,o.jsx)(eI,{children:M.map(e=>(0,o.jsx)(eB,{children:e},e))})]}),(0,o.jsxs)(eR,{style:{marginTop:"2rem"},children:[(0,o.jsxs)(eM,{children:[(0,o.jsx)(eE,{children:(0,o.jsx)($.xdT,{})}),"Ferramentas"]}),(0,o.jsx)(eY,{children:E.map(e=>(0,o.jsx)(e_,{children:e},e))})]})]})]})]})}let eG=(0,a.i7)`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,eH=a.Ay.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`,eV=a.Ay.p`
  text-align: center;
  color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`,eQ=a.Ay.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
`,eW=a.Ay.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`,eq=a.Ay.div`
  position: relative;
  padding-left: 3.5rem;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`,eU=a.Ay.div`
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
`,eX=a.Ay.span`
  color: ${e=>{let{theme:r}=e;return r.colors.white}};
  font-size: 0.85rem;
  display: flex;
  align-items: center;
`,eK=a.Ay.div`
  position: absolute;
  left: 19px;
  top: 40px;
  width: 2px;
  height: calc(100% - 20px);
  background: ${e=>{let{theme:r}=e;return r.colors.border}};
`,eZ=a.Ay.div`
  background: ${e=>{let{theme:r}=e;return r.colors.backgroundCard}};
  border: 1px solid ${e=>{let{theme:r,$isExpanded:t}=e;return t?r.colors.primary+"50":r.colors.border}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.lg}};
  padding: 1.5rem;
  transition: all ${e=>{let{theme:r}=e;return r.transitions.default}};

  &:hover {
    border-color: ${e=>{let{theme:r}=e;return r.colors.primary}}50;
    box-shadow: ${e=>{let{theme:r}=e;return r.shadows.sm}};
  }
`,e0=a.Ay.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
  margin-bottom: 0.25rem;
`,e1=a.Ay.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  margin-bottom: 0.25rem;
`,e5=a.Ay.p`
  font-size: 0.85rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  margin-bottom: 1rem;
`,e2=a.Ay.div`
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
`,e3=a.Ay.ul`
  margin-top: 1rem;
  animation: ${eG} 0.3s ease;
`,e8=a.Ay.li`
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
`;function e9(){let[e,r]=(0,n.useState)(0);return(0,o.jsxs)(eH,{id:"experience",children:[(0,o.jsx)(eV,{children:"Minha trajet\xf3ria"}),(0,o.jsx)(eQ,{children:"Experi\xeancia Profissional"}),(0,o.jsx)(eW,{children:C.map((t,n)=>(0,o.jsxs)(eq,{children:[(0,o.jsx)(eU,{$isActive:e===n,children:(0,o.jsx)(eX,{children:(0,o.jsx)($._yv,{})})}),n<C.length-1&&(0,o.jsx)(eK,{}),(0,o.jsxs)(eZ,{$isExpanded:e===n,children:[(0,o.jsx)(e0,{children:t.company}),(0,o.jsx)(e1,{children:t.role}),(0,o.jsx)(e5,{children:t.period}),(0,o.jsxs)(e2,{as:d.$,onPress:()=>{r(e===n?null:n)},"aria-label":e===n?"Recolher atividades":"Expandir atividades",children:[(0,o.jsx)($.Vr3,{style:{transform:e===n?"rotate(180deg)":"rotate(0)",transition:"transform 0.3s ease"}}),e===n?"Recolher":"Ver atividades"]}),e===n&&(0,o.jsx)(e3,{children:t.activities.map((e,r)=>(0,o.jsx)(e8,{children:e},r))})]})]},`${t.company}-${n}`))})]})}let e6=a.Ay.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`,e7=a.Ay.p`
  text-align: center;
  color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`,e4=a.Ay.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
`,re=a.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`,rr=a.Ay.div`
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
`,rt=a.Ay.div`
  font-size: 2rem;
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  margin-bottom: 1rem;
`,ro=a.Ay.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: ${e=>{let{theme:r}=e;return r.colors.primary}}20;
  color: ${e=>{let{theme:r}=e;return r.colors.primaryLight}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.full}};
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`,rn=a.Ay.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
  margin-bottom: 0.5rem;
`,ri=a.Ay.p`
  font-size: 0.9rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  margin-bottom: 0.5rem;
`,rl=a.Ay.p`
  font-size: 0.8rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
`,ra=a.Ay.div`
  max-width: 700px;
  margin: 0 auto;
  background: ${e=>{let{theme:r}=e;return r.colors.backgroundCard}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.colors.border}};
  border-radius: ${e=>{let{theme:r}=e;return r.borderRadius.lg}};
  padding: 2rem;
`,rs=a.Ay.h3`
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
`,rd=a.Ay.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,rc=a.Ay.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  font-size: 0.95rem;
`,rm=a.Ay.span`
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  font-weight: bold;
`;function rp(){return(0,o.jsxs)(e6,{id:"education",children:[(0,o.jsx)(e7,{children:"Minha forma\xe7\xe3o"}),(0,o.jsx)(e4,{children:"Forma\xe7\xe3o Acad\xeamica"}),(0,o.jsx)(re,{children:F.map((e,r)=>(0,o.jsxs)(rr,{children:[(0,o.jsx)(rt,{children:(0,o.jsx)($.YNd,{})}),(0,o.jsx)(ro,{children:e.degree}),(0,o.jsx)(rn,{children:e.field}),(0,o.jsx)(ri,{children:e.institution}),(0,o.jsxs)(rl,{children:["Conclus\xe3o: ",e.conclusion]})]},r))}),(0,o.jsxs)(ra,{children:[(0,o.jsxs)(rs,{children:[(0,o.jsx)($.veT,{})," Treinamentos & Certifica\xe7\xf5es"]}),(0,o.jsx)(rd,{children:D.map((e,r)=>(0,o.jsxs)(rc,{children:[(0,o.jsx)(rm,{children:"▹"}),e]},r))})]})]})}let ru=a.Ay.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`,rx=a.Ay.p`
  text-align: center;
  color: ${e=>{let{theme:r}=e;return r.colors.secondary}};
  font-family: ${e=>{let{theme:r}=e;return r.fonts.mono}};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`,rh=a.Ay.h2`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 3rem;
`,rg=a.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.lg}}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,rf=a.Ay.div``,rb=a.Ay.p`
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`,ry=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,rj=a.Ay.a`
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
`,rv=a.Ay.a`
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
`,r$=a.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${e=>{let{theme:r}=e;return r.breakpoints.xs}}) {
    grid-template-columns: 1fr;
  }
`,rw=a.Ay.div`
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
`,rk=a.Ay.div`
  font-size: 1.5rem;
  color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  margin-bottom: 0.75rem;
`,rA=a.Ay.span`
  display: block;
  font-size: 0.8rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textMuted}};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
`,rS=a.Ay.span`
  display: block;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.colors.text}};
  word-break: break-all;
  transition: color ${e=>{let{theme:r}=e;return r.transitions.fast}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.colors.primary}};
  }
`;function rz(){return(0,o.jsxs)(ru,{id:"contact",children:[(0,o.jsx)(rx,{children:"Fale comigo"}),(0,o.jsx)(rh,{children:"Vamos Conversar?"}),(0,o.jsxs)(rg,{children:[(0,o.jsxs)(rf,{children:[(0,o.jsx)(rb,{children:"Estou dispon\xedvel para novas oportunidades e desafios. Se voc\xea est\xe1 procurando um desenvolvedor front-end com experi\xeancia s\xf3lida em React, TypeScript e tecnologias modernas, vamos conversar!"}),(0,o.jsxs)(ry,{children:[(0,o.jsxs)(rj,{href:"https://wa.me/5551993112125",target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)($.EcP,{})," Chamar no WhatsApp"]}),(0,o.jsxs)(rv,{href:z,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)($.QEs,{})," Conectar no LinkedIn"]})]})]}),(0,o.jsxs)(r$,{children:[(0,o.jsxs)(rw,{children:[(0,o.jsx)(rk,{children:(0,o.jsx)($.maD,{})}),(0,o.jsx)(rA,{children:"E-mail"}),(0,o.jsx)(rS,{as:"a",href:`mailto:${S}`,children:S})]}),(0,o.jsxs)(rw,{children:[(0,o.jsx)(rk,{children:(0,o.jsx)($.Cab,{})}),(0,o.jsx)(rA,{children:"Telefone"}),(0,o.jsx)(rS,{as:"a",href:"tel:+5551993112125",children:"(51) 99311-2125"})]}),(0,o.jsxs)(rw,{children:[(0,o.jsx)(rk,{children:(0,o.jsx)($.vq8,{})}),(0,o.jsx)(rA,{children:"Localiza\xe7\xe3o"}),(0,o.jsxs)(rS,{children:[A,", ","RS"]})]}),(0,o.jsxs)(rw,{children:[(0,o.jsx)(rk,{children:(0,o.jsx)($.QEs,{})}),(0,o.jsx)(rA,{children:"LinkedIn"}),(0,o.jsx)(rS,{as:"a",href:z,target:"_blank",rel:"noopener noreferrer",children:"/in/max-juniman"})]})]})]})]})}function rF(){return(0,o.jsxs)("main",{children:[(0,o.jsx)(eu,{}),(0,o.jsx)(ek,{}),(0,o.jsx)(eN,{}),(0,o.jsx)(e9,{}),(0,o.jsx)(rp,{}),(0,o.jsx)(rz,{})]})}let rC=a.Ay.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`,rR=a.Ay.h1`
  font-size: clamp(5rem, 15vw, 10rem);
  font-weight: 900;
  background: ${e=>{let{theme:r}=e;return r.colors.gradient}};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
`,rM=a.Ay.p`
  font-size: 1.25rem;
  color: ${e=>{let{theme:r}=e;return r.colors.textSecondary}};
  margin: 1rem 0 2rem;
`,rE=(0,a.Ay)(l.N_)`
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
`;function rD(){return(0,o.jsxs)(rC,{children:[(0,o.jsx)(rR,{children:"404"}),(0,o.jsx)(rM,{children:"Oops! P\xe1gina n\xe3o encontrada."}),(0,o.jsx)(rE,{to:"/",children:"Voltar ao In\xedcio"})]})}i.createRoot(document.getElementById("root")).render((0,o.jsx)(n.StrictMode,{children:(0,o.jsxs)(a.NP,{theme:{colors:{primary:"#6C63FF",primaryLight:"#8B85FF",primaryDark:"#4A42E0",secondary:"#00D9FF",secondaryLight:"#33E1FF",accent:"#FF6B6B",background:"#0A0E27",backgroundLight:"#111640",backgroundCard:"#161B45",surface:"#1C2251",surfaceHover:"#242B63",text:"#E8E8FF",textSecondary:"#9B9BC4",textMuted:"#6B6B9E",white:"#FFFFFF",border:"#2A3070",gradient:"linear-gradient(135deg, #6C63FF 0%, #00D9FF 100%)",gradientText:"linear-gradient(135deg, #6C63FF 0%, #00D9FF 100%)",gradientHover:"linear-gradient(135deg, #8B85FF 0%, #33E1FF 100%)",success:"#4ECB71",warning:"#FFB84D",error:"#FF6B6B"},fonts:{primary:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",mono:"'JetBrains Mono', 'Fira Code', monospace"},breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px"},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"3rem",section:"5rem"},borderRadius:{sm:"0.375rem",md:"0.75rem",lg:"1rem",xl:"1.5rem",full:"9999px"},shadows:{sm:"0 2px 8px rgba(108, 99, 255, 0.1)",md:"0 4px 16px rgba(108, 99, 255, 0.15)",lg:"0 8px 32px rgba(108, 99, 255, 0.2)",glow:"0 0 20px rgba(108, 99, 255, 0.3)",glowSecondary:"0 0 20px rgba(0, 217, 255, 0.3)"},transitions:{fast:"0.15s ease",default:"0.3s ease",slow:"0.5s ease"}},children:[(0,o.jsx)(s,{}),(0,o.jsx)(l.Kd,{children:(0,o.jsx)(function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{}),(0,o.jsxs)(l.BV,{children:[(0,o.jsx)(l.qh,{path:"/",element:(0,o.jsx)(rF,{})}),(0,o.jsx)(l.qh,{path:"*",element:(0,o.jsx)(rD,{})})]}),(0,o.jsx)(H,{})]})},{})})]})}))}},a={};function s(e){var r=a[e];if(void 0!==r)return r.exports;var t=a[e]={exports:{}};return l[e](t,t.exports,s),t.exports}s.m=l,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(t,o){if(1&o&&(t=this(t)),8&o||"object"==typeof t&&t&&(4&o&&t.__esModule||16&o&&"function"==typeof t.then))return t;var n=Object.create(null);s.r(n);var i={};e=e||[null,r({}),r([]),r(r)];for(var l=2&o&&t;("object"==typeof l||"function"==typeof l)&&!~e.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach(e=>{i[e]=()=>t[e]});return i.default=()=>t,s.d(n,i),n},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),s.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nc=void 0,t=[],s.O=(e,r,o,n)=>{if(r){n=n||0;for(var i=t.length;i>0&&t[i-1][2]>n;i--)t[i]=t[i-1];t[i]=[r,o,n];return}for(var l=1/0,i=0;i<t.length;i++){for(var[r,o,n]=t[i],a=!0,d=0;d<r.length;d++)(!1&n||l>=n)&&Object.keys(s.O).every(e=>s.O[e](r[d]))?r.splice(d--,1):(a=!1,n<l&&(l=n));if(a){t.splice(i--,1);var c=o();void 0!==c&&(e=c)}}return e},o={410:0},s.O.j=e=>0===o[e],n=(e,r)=>{var t,n,[i,l,a]=r,d=0;if(i.some(e=>0!==o[e])){for(t in l)s.o(l,t)&&(s.m[t]=l[t]);if(a)var c=a(s)}for(e&&e(r);d<i.length;d++)n=i[d],s.o(o,n)&&o[n]&&o[n][0](),o[n]=0;return s.O(c)},(i=self.webpackChunkportfolio_max_juniman=self.webpackChunkportfolio_max_juniman||[]).forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i));var d=s.O(void 0,["783","535","603"],()=>s(669));d=s.O(d)})();