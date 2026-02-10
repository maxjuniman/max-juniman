export const personalInfo = {
  name: 'Max Juniman Batistel',
  role: 'Desenvolvedor Front-end',
  age: 36,
  maritalStatus: 'Casado',
  children: '2 filhos',
  address: 'Rua Juracy Pontes Carpes, Nº 170',
  city: 'Porto Alegre',
  state: 'RS',
  country: 'Brasil',
  phone: '(51) 99311-2125',
  email: 'maxjuniman@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/max-juniman',
  linkedinLabel: '/in/max-juniman',
  github: 'https://github.com/max-juniman',
  availability: 'Disponibilidade para viagens',
  summary:
    'Sólida experiência com Suporte Técnico, troubleshooting de erros em fluxos de sistemas. Desenvolvimento em React Js, React Native, JavaScript, TypeScript, NextJs, Expo e Laravel. Experiência com Windows, AWS e Linux Server. Experiência com fluxo de publicação de aplicativos nas plataformas iOS e Android. Facilidade de comunicação com o cliente (interno e externo).',
};

export interface Education {
  degree: string;
  field: string;
  institution: string;
  conclusion: string;
}

export const education: Education[] = [
  {
    degree: 'Pós-Graduação',
    field: 'Desenvolvimento Web Full Stack',
    institution: 'Anhanguera Educacional',
    conclusion: '04/2025',
  },
  {
    degree: 'Pós-Graduação',
    field: 'Tecnologia Java',
    institution: 'Anhanguera Educacional',
    conclusion: '09/2025',
  },
  {
    degree: 'Graduação',
    field: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Estácio de Sá',
    conclusion: '02/2023',
  },
  {
    degree: 'Técnico',
    field: 'Informática',
    institution: 'Escola de Ensino Técnico Alcides Maya',
    conclusion: '2013',
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  activities: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Grecale Soluções',
    role: 'Desenvolvedor Front-end',
    period: 'Julho/2025 — Janeiro/2026',
    activities: [
      'Desenvolvimento em ReactJs, NextJs, JavaScript, Expo e TypeScript',
      'Programação de novos templates web e Suporte na resolução de bugs',
      'Implementação de features e desenvolvimento de novos componentes',
      'Gerenciamento de versão com Mercurial e Git',
      'Desenvolvimento e manutenção de aplicativos',
      'Responsável pela publicação dos aplicativos nas plataformas iOS e Android',
    ],
  },
  {
    company: 'Firedev Serviços em TI',
    role: 'Desenvolvedor Front-end',
    period: 'Dezembro/2024 — Junho/2025',
    activities: [
      'Desenvolvimento em ReactJs, NextJs, JavaScript, Bootstrap, Python e TypeScript',
      'Programação de novos templates web e Suporte na resolução de bugs',
      'Implementação de features e desenvolvimento de novos componentes',
      'Gerenciamento de versão com Mercurial e Git',
    ],
  },
  {
    company: 'FISERV do Brasil',
    role: 'Desenvolvedor Front-end Sênior',
    period: 'Janeiro/2022 — Outubro/2024',
    activities: [
      'Desenvolvimento em React JS, JavaScript, jQuery, CSS, HTML e TypeScript',
      'Desenvolvimento de interfaces e Resolução de bugs',
      'Implementação de features utilizando TDD',
      'Desenvolvimento de componentes web',
      'Gerenciamento de versão com Mercurial',
      'Ferramentas: Jira, Confluence, Jenkins e ADP',
      'Testes unitários com Jest',
      'Gerenciamento de microsserviços com Single SPA',
    ],
  },
  {
    company: 'Firedev Serviços em TI',
    role: 'Desenvolvedor Front-end',
    period: 'Junho/2021 — Setembro/2023',
    activities: [
      'Desenvolvimento em ReactJs, NextJs, JavaScript, Bootstrap e TypeScript',
      'Programação de novos templates web e Suporte na resolução de bugs',
      'Implementação de features e desenvolvimento de novos componentes',
      'Gerenciamento de versão com Mercurial e Git',
    ],
  },
  {
    company: 'TargetIT Serviços em Tecnologia',
    role: 'Analista de Suporte N3',
    period: 'Dezembro/2017 — Setembro/2020',
    activities: [
      'Suporte de ferramenta da TargetIT',
      'Banco de dados (MySQL, Oracle e SQL Server), PHP, servidores Linux e Windows',
      'Agendamentos de tarefas, leitura de XML, emissão de NFe/CTe/NFSe',
      'Integração com plataformas como SAP/Protheus/Datasul',
      'Atendimento via telefone, chat, presencial e WhatsApp',
      'Responsável por sobreaviso e plantões',
    ],
  },
  {
    company: 'KingHost Hospedagem de Sites',
    role: 'Analista de Suporte Pleno',
    period: 'Março/2013 — Dezembro/2017',
    activities: [
      'Suporte a clientes com dificuldades ligadas ao domínio/site e questões técnicas',
      'Suporte a MySQL, MSSQL, Firebird, PostgreSQL, Oracle e ferramentas internas',
    ],
  },
];

export const hardSkills = [
  { name: 'React JS', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'Next.js', level: 85 },
  { name: 'React Native', level: 80 },
  { name: 'HTML & CSS', level: 95 },
  { name: 'Node.js', level: 70 },
  { name: 'Python', level: 60 },
  { name: 'Laravel / PHP', level: 65 },
  { name: 'SQL / Banco de Dados', level: 75 },
  { name: 'Git & Mercurial', level: 90 },
  { name: 'AWS / Linux Server', level: 65 },
];

export const softSkills = [
  'Adaptabilidade',
  'Comunicação',
  'Criatividade',
  'Flexibilidade',
  'Liderança',
  'Ownership',
  'Proatividade',
  'Resiliência',
  'Apresentação em Público',
  'Interesse em constante aprendizado',
];

export const tools = [
  'Git',
  'Mercurial',
  'Jenkins',
  'VS Code',
  'Cursor',
  'Copilot',
  'Windsurf',
  'Figma',
  'Adobe XD',
  'Jira',
  'Confluence',
];

export const trainings = [
  'Windows Server 2008 (2013)',
  'Participação na CIPA (2015 e 2016)',
  'Testes e instalação de CMS',
  'REST API com Laravel 8 (Udemy)',
  'Curso Web Moderno com JavaScript (Udemy)',
];
