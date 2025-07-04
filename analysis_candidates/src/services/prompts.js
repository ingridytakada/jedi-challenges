export const criarPromptEstagio1 = (transcricao) => `Analise esta transcrição de entrevista para criar um perfil básico do CANDIDATO (não da entrevistadora).

TRANSCRIÇÃO:
${transcricao}

Foque apenas no candidato/entrevistado. Responda APENAS com JSON válido:
{
  "perfilBasico": {
    "comunicacao": {
      "clareza": 85,
      "estrutura": "Respostas bem organizadas, início-meio-fim claro",
      "vocabulario": "Técnico apropriado, sem jargões excessivos",
      "confianca": 78
    },
    "experiencia": {
      "anosExperiencia": "5-7 anos estimados",
      "senioridade": "Pleno/Senior",
      "empresasAnteriores": 3,
      "setoresExperiencia": ["tecnologia", "startups"]
    },
    "preparacao": {
      "pontuacao": 82,
      "evidencias": "Pesquisou sobre a empresa, fez 4 perguntas específicas",
      "conhecimentoVaga": "Demonstrou entendimento claro dos requisitos"
    },
    "engajamento": {
      "interesse": 90,
      "perguntas": 6,
      "entusiasmo": "Alto - expressou empolgação genuína 3 vezes"
    },
    "primeirasImpressoes": {
      "pontos_fortes": ["Preparação evidente", "Comunicação clara", "Interesse genuíno"],
      "pontos_atencao": ["Nervosismo inicial", "Algumas respostas longas demais"]
    }
  }
}`;

export const promptsEspecificos = {
  tecnica: (transcricao, perfilBasico) => `Avalie as competências TÉCNICAS do candidato baseado nesta entrevista.

TRANSCRIÇÃO:
${transcricao}

PERFIL BÁSICO:
${JSON.stringify(perfilBasico)}

Analise APENAS o candidato. Responda com JSON válido:
{
  "competenciasTecnicas": {
    "conhecimentoTeorico": {
      "pontuacao": 85,
      "detalhes": "Demonstrou conhecimento sólido em React, Node.js. Explicou conceitos com precisão.",
      "gaps": ["Kubernetes básico", "Microserviços avançados"]
    },
    "experienciaPratica": {
      "pontuacao": 78,
      "projetos": 4,
      "complexidade": "Média-alta - trabalhou com sistemas de 100k usuários",
      "exemplosConcretos": ["Sistema de pagamentos", "API de integração"]
    },
    "resolucaoProblemas": {
      "pontuacao": 82,
      "abordagem": "Estruturada - identifica problema, analisa opções, implementa solução",
      "exemplo": "Relatou como resolveu problema de performance em 3 etapas"
    },
    "atualizacaoTecnica": {
      "pontuacao": 75,
      "evidencias": "Menciona cursos recentes, conferências, projetos pessoais",
      "tendencias": "Conhece IA/ML básico, interesse em cloud"
    },
    "comunicacaoTecnica": {
      "pontuacao": 88,
      "habilidade": "Explica conceitos complexos de forma simples",
      "exemplo": "Explicou arquitetura de microsserviços usando analogia de restaurante"
    }
  },
  "pontuacaoTecnicaGeral": 82,
  "recomendacao": "APROVAR - Sólido tecnicamente com boa capacidade de explicação"
}`,

  comportamental: (transcricao, perfilBasico) => `Avalie o PERFIL COMPORTAMENTAL e fit cultural do candidato.

TRANSCRIÇÃO:
${transcricao}

PERFIL BÁSICO:
${JSON.stringify(perfilBasico)}

Analise APENAS o candidato. Responda com JSON válido:
{
  "perfilComportamental": {
    "inteligenciaEmocional": {
      "pontuacao": 85,
      "autoconhecimento": "Reconhece pontos fortes e fracos com maturidade",
      "empatia": "Demonstra consideração pelos colegas em 3 exemplos",
      "resiliencia": "Relatou como superou desafio de projeto cancelado"
    },
    "colaboracao": {
      "pontuacao": 78,
      "estiloTrabalho": "Colaborativo - prefere trabalho em equipe",
      "conflitos": "Abordagem madura - busca entender diferentes perspectivas",
      "feedback": "Receptivo - deu exemplo de como incorporou feedback do gestor"
    },
    "adaptabilidade": {
      "pontuacao": 82,
      "mudancas": "Lida bem com mudanças - exemplo de mudança de stack tecnológica",
      "aprendizado": "Curioso - faz perguntas e busca aprender constantemente",
      "flexibilidade": "Aberto a diferentes metodologias e processos"
    },
    "motivacao": {
      "pontuacao": 88,
      "drivers": ["Crescimento profissional", "Impacto do produto", "Aprendizado"],
      "persistencia": "Não desiste facilmente - exemplo de projeto desafiador",
      "proatividade": "Toma iniciativa - sugeriu 2 melhorias em empresa anterior"
    },
    "valores": {
      "pontuacao": 80,
      "etica": "Demonstra integridade em situações difíceis",
      "transparencia": "Comunicação honesta sobre limitações e erros",
      "compromisso": "Fala sobre responsabilidade com prazos e qualidade"
    }
  },
  "fitCultural": 83,
  "recomendacao": "FORTE FIT - Valores alinhados, perfil colaborativo"
}`,

  lideranca: (transcricao, perfilBasico) => `Avalie as COMPETÊNCIAS DE LIDERANÇA do candidato.

TRANSCRIÇÃO:
${transcricao}

PERFIL BÁSICO:
${JSON.stringify(perfilBasico)}

Analise APENAS o candidato. Responda com JSON válido:
{
  "competenciasLideranca": {
    "visaoEstrategica": {
      "pontuacao": 78,
      "pensamentoEstrategico": "Conecta ações táticas com objetivos de negócio",
      "exemplo": "Explicou como reestruturação do team impactou KPIs da empresa"
    },
    "gestaoEquipes": {
      "pontuacao": 82,
      "experiencia": "Gerenciou equipe de 6 pessoas por 2 anos",
      "estiloLideranca": "Coaching - foca no desenvolvimento individual",
      "resultados": "Team teve 0% turnover e entregou 95% dos projetos no prazo"
    },
    "desenvolvimentoPessoas": {
      "pontuacao": 85,
      "mentoria": "3 exemplos concretos de desenvolvimento de junior para pleno",
      "feedback": "Processo estruturado de 1:1s semanais e reviews trimestrais",
      "reconhecimento": "Celebra conquistas da equipe, dá crédito publicamente"
    },
    "tomadaDecisao": {
      "pontuacao": 75,
      "processo": "Coleta informações, consulta team, decide com rapidez",
      "decisoesDificeis": "Exemplo de demissão por performance tratada com empatia",
      "assumeResponsabilidade": "Não culpa equipe pelos erros, assume ownership"
    },
    "comunicacaoLideranca": {
      "pontuacao": 88,
      "clareza": "Comunica expectativas e objetivos de forma cristalina",
      "inspiracao": "Conecta trabalho individual com propósito maior da empresa",
      "transparencia": "Compartilha contexto e decisões estratégicas com team"
    }
  },
  "potencialLideranca": 82,
  "recomendacao": "POTENCIAL ALTO - Experiência sólida, estilo inspirador"
}`,

  vendas: (transcricao, perfilBasico) => `Avalie as HABILIDADES COMERCIAIS e de vendas do candidato.

TRANSCRIÇÃO:
${transcricao}

PERFIL BÁSICO:
${JSON.stringify(perfilBasico)}

Analise APENAS o candidato. Responda com JSON válido:
{
  "habilidadesComerciais": {
    "descobertaNecessidades": {
      "pontuacao": 85,
      "escutaAtiva": "Fez 8 perguntas de discovery durante a entrevista",
      "qualificacao": "Entende processo de decisão e dores do cliente",
      "exemplo": "Perguntou sobre orçamento, timeline e decision makers"
    },
    "apresentacaoSolucoes": {
      "pontuacao": 78,
      "articulacao": "Conecta features com benefícios de forma clara",
      "storytelling": "Usa casos de sucesso para ilustrar valor",
      "personalizacao": "Adapta pitch baseado nas necessidades identificadas"
    },
    "superacaoObjecoes": {
      "pontuacao": 82,
      "abordagem": "Não fica defensivo, explora objeção para entender melhor",
      "exemplo": "Quando questionado sobre preço, focou em ROI e valor",
      "preparacao": "Antecipa objeções comuns e tem respostas estruturadas"
    },
    "fechamento": {
      "pontuacao": 75,
      "timing": "Identifica momentos certos para avançar no processo",
      "tecnicas": "Usa fechamentos assumptivos e de alternativa",
      "seguimento": "Sempre define próximos passos claros"
    },
    "relacionamento": {
      "pontuacao": 88,
      "rapport": "Cria conexão genuína nos primeiros minutos",
      "confianca": "Transmite credibilidade através de conhecimento e honestidade",
      "seguimento": "Mantem contato regular e adiciona valor entre reuniões"
    }
  },
  "potencialComercial": 82,
  "recomendacao": "FORTE POTENCIAL - Habilidades naturais de relacionamento"
}`,

  geral: (transcricao, perfilBasico) => `Faça uma avaliação GERAL abrangente do candidato.

TRANSCRIÇÃO:
${transcricao}

PERFIL BÁSICO:
${JSON.stringify(perfilBasico)}

Analise APENAS o candidato. Responda com JSON válido:
{
  "avaliacaoGeral": {
    "pontosFortes": [
      {
        "area": "Comunicação",
        "detalhes": "Articula ideias com clareza, estrutura bem as respostas",
        "evidencia": "Todas as 12 respostas seguiram estrutura STAR"
      },
      {
        "area": "Preparação",
        "detalhes": "Pesquisou a empresa e função detalhadamente",
        "evidencia": "Fez 5 perguntas específicas sobre cultura e crescimento"
      }
    ],
    "areasDesenvolvimento": [
      {
        "area": "Concisão",
        "detalhes": "Algumas respostas muito longas, perdeu foco",
        "impacto": "2 respostas ultrapassaram 3 minutos cada"
      }
    ],
    "compatibilidadeVaga": {
      "pontuacao": 85,
      "requisitos": "Atende 8 de 10 requisitos técnicos",
      "experiencia": "Background alinhado com necessidades da posição",
      "crescimento": "Vaga representa evolução natural na carreira"
    },
    "riscos": [
      {
        "risco": "Expectativa salarial",
        "probabilidade": "Média",
        "detalhes": "Atual salário pode estar próximo do teto da vaga"
      }
    ],
    "diferenciais": [
      "Experiência internacional (2 anos Reino Unido)",
      "Projetos open source relevantes",
      "Certificações atualizadas"
    ]
  },
  "recomendacaoFinal": "APROVAR - Candidato forte com fit técnico e cultural"
}`
};

export const criarPromptEstagio3 = (transcricao, perfilBasico, avaliacaoEspecifica) => `Identifique RED FLAGS, pontos de atenção e citações específicas do CANDIDATO.

TRANSCRIÇÃO:
${transcricao}

AVALIAÇÕES ANTERIORES:
${JSON.stringify({ perfilBasico, avaliacaoEspecifica })}

Responda APENAS com JSON válido:
{
  "redFlags": [
    {
      "categoria": "Motivação",
      "descricao": "Menciona que está saindo 'por dinheiro' como única motivação",
      "citacao": "Candidato: 'Quero mudar porque aqui não pagam bem...'",
      "gravidade": "Alta",
      "impacto": "Pode indicar falta de alinhamento com propósito da empresa"
    }
  ],
  "pontosAtencao": [
    {
      "categoria": "Estabilidade",
      "descricao": "3 mudanças de emprego em 2 anos",
      "evidencia": "Mencionou 3 empresas diferentes no período 2022-2024",
      "investigar": "Razões específicas para mudanças frequentes"
    }
  ],
  "momentosPositivos": [
    {
      "categoria": "Liderança",
      "citacao": "Quando o projeto estava atrasado, me voluntariei para trabalhar no fim de semana e trouxe dois colegas comigo",
      "impacto": "Demonstra proatividade e capacidade de mobilizar equipe",
      "momento": "~15 minutos de entrevista"
    }
  ],
  "linguagemCorporal": {
    "positivos": ["Contato visual consistente", "Postura confiante", "Gestos naturais"],
    "atencao": ["Nervosismo inicial", "Fidgetismo quando perguntado sobre salário"]
  },
  "consistenciaRespostas": {
    "pontuacao": 85,
    "inconsistencias": ["Timeline de uma empresa anterior não bate"],
    "credibilidade": "Alta - histórias coerentes e detalhadas"
  }
}`;

export const criarPromptEstagio4 = (perfilBasico, avaliacaoEspecifica, analiseComportamental) => `Baseado na análise completa, gere recomendações sobre este CANDIDATO para a entrevistadora.

ANÁLISE COMPLETA:
${JSON.stringify({ perfilBasico, avaliacaoEspecifica, analiseComportamental })}

Responda APENAS com JSON válido:
{
  "decisaoRecomendada": {
    "acao": "APROVAR_PROXIMA_ETAPA",
    "confianca": 85,
    "justificativa": "Candidato sólido tecnicamente com bom fit cultural. Red flags menores podem ser mitigados."
  },
  "proximosPassos": [
    {
      "acao": "Entrevista técnica hands-on",
      "objetivo": "Validar conhecimentos práticos em React",
      "prioridade": "Alta"
    },
    {
      "acao": "Reference check com ex-gestor",
      "objetivo": "Confirmar estilo de liderança e resultados",
      "prioridade": "Média"
    }
  ],
  "perguntasFollowUp": [
    "Pode elaborar sobre as razões específicas para sair da empresa anterior?",
    "Como você lida com feedback construtivo? Pode dar um exemplo?",
    "Quais são suas expectativas salariais específicas?"
  ],
  "negociacaoSalario": {
    "estrategia": "Flexível - candidato parece mais motivado por crescimento que por salário",
    "expectativaEstimada": "R$ 12-15k",
    "pontosPoder": ["Experiência internacional", "Skills raros no mercado"],
    "limitacoes": ["Empresa anterior pagava abaixo do mercado"]
  },
  "integracaoTime": {
    "fitEquipe": 88,
    "estiloTrabalo": "Colaborativo, se adapta bem a diferentes personalidades",
    "potenciaisConflitos": "Pode ter choque inicial com processos mais burocráticos",
    "onboarding": "Precisa de mentoria técnica nos primeiros 30 dias"
  },
  "riscosContratacao": [
    {
      "risco": "Expectativa de crescimento acelerado",
      "mitigacao": "Definir plano de carreira claro nos primeiros 90 dias",
      "probabilidade": "Média"
    }
  ]
}`; 