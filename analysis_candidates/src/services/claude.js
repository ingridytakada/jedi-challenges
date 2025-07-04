// Configuração do cliente Claude usando fetch diretamente
let apiKey = null;

export const initializeClaude = (key) => {
  if (!key) {
    throw new Error('API Key do Claude é obrigatória');
  }
  apiKey = key;
};

export const callClaude = async (prompt, maxTokens = 4000) => {
  if (!apiKey) {
    throw new Error('Claude não foi inicializado. Configure a API Key primeiro.');
  }

  // Para desenvolvimento/teste: simular resposta da IA
  if (window.location.hostname === 'localhost' && !window.claudeRealAPI) {
    console.log('🧪 MODO DEMONSTRAÇÃO: Simulando resposta da IA Claude');
    
    // Simular delay da API
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));
    
    // Retornar resposta simulada baseada no tipo de prompt
    if (prompt.includes('perfil básico')) {
      return JSON.stringify({
        perfilBasico: {
          comunicacao: {
            clareza: 88,
            estrutura: "Respostas muito bem organizadas, seguindo estrutura início-meio-fim clara",
            vocabulario: "Técnico apropriado, sem jargões excessivos, comunica bem com não-técnicos",
            confianca: 85
          },
          experiencia: {
            anosExperiencia: "6 anos confirmados",
            senioridade: "Senior",
            empresasAnteriores: 3,
            setoresExperiencia: ["fintech", "consultoria", "e-commerce"]
          },
          preparacao: {
            pontuacao: 90,
            evidencias: "Pesquisou sobre a empresa, demonstrou conhecimento sobre projetos de IA",
            conhecimentoVaga: "Demonstrou entendimento claro dos requisitos e desafios"
          },
          engajamento: {
            interesse: 92,
            perguntas: 5,
            entusiasmo: "Alto - demonstrou empolgação genuína sobre desafios técnicos"
          },
          primeirasImpressoes: {
            pontos_fortes: ["Preparação evidente", "Comunicação técnica excelente", "Motivação genuína"],
            pontos_atencao: ["Nenhum ponto significativo de atenção identificado"]
          }
        }
      });
    } else if (prompt.includes('competências TÉCNICAS')) {
      return JSON.stringify({
        competenciasTecnicas: {
          conhecimentoTeorico: {
            pontuacao: 87,
            detalhes: "Conhecimento sólido em React, Node.js, Docker. Entende arquitetura de microserviços.",
            gaps: ["Machine Learning prático", "Cloud avançado"]
          },
          experienciaPratica: {
            pontuacao: 89,
            projetos: 1,
            complexidade: "Alta - migração de sistema legado com 10k transações/dia",
            exemplosConcretos: ["Migração PHP para Node.js", "Arquitetura microserviços"]
          },
          resolucaoProblemas: {
            pontuacao: 91,
            abordagem: "Estruturada - identifica problema, propõe solução, executa com equipe",
            exemplo: "Manteve sistema antigo funcionando durante migração crítica"
          },
          atualizacaoTecnica: {
            pontuacao: 85,
            evidencias: "Interesse demonstrado em cloud e ML, busca novos desafios",
            tendencias: "Quer aprender IA/ML e cloud, acompanha inovações"
          },
          comunicacaoTecnica: {
            pontuacao: 88,
            habilidade: "Explica conceitos técnicos de forma clara e organizada",
            exemplo: "Descreveu migração complexa de forma compreensível"
          }
        },
        pontuacaoTecnicaGeral: 88,
        recomendacao: "APROVAR - Sólido tecnicamente com excelente comunicação"
      });
    } else if (prompt.includes('RED FLAGS')) {
      return JSON.stringify({
        redFlags: [],
        pontosAtencao: [
          {
            categoria: "Crescimento",
            descricao: "Busca constante por novos desafios pode indicar necessidade de progressão rápida",
            evidencia: "Menciona domínio das tecnologias atuais e busca por complexidade",
            investigar: "Expectativas de crescimento e timeline de carreira"
          }
        ],
        momentosPositivos: [
          {
            categoria: "Liderança Técnica",
            citacao: "coordenei 3 desenvolvedores e 1 QA... O que me deixou mais orgulhoso foi ver como o time cresceu tecnicamente",
            impacto: "Demonstra foco no desenvolvimento da equipe além de resultados técnicos",
            momento: "~7 minutos de entrevista"
          },
          {
            categoria: "Resolução de Conflitos",
            citacao: "organizei uma sessão onde cada um apresentou sua proposta com prós e contras",
            impacto: "Abordagem madura e colaborativa para resolução de conflitos técnicos",
            momento: "~12 minutos de entrevista"
          }
        ],
        linguagemCorporal: {
          positivos: ["Comunicação clara", "Estrutura bem organizada", "Exemplos concretos"],
          atencao: ["Nenhum ponto negativo identificado"]
        },
        consistenciaRespostas: {
          pontuacao: 95,
          inconsistencias: [],
          credibilidade: "Alta - histórias detalhadas e coerentes"
        }
      });
    } else if (prompt.includes('recomendações')) {
      return JSON.stringify({
        decisaoRecomendada: {
          acao: "APROVAR_PROXIMA_ETAPA",
          confianca: 92,
          justificativa: "Candidato excepcional tecnicamente com perfil de liderança natural. Fit cultural forte e motivação genuína."
        },
        proximosPassos: [
          {
            acao: "Entrevista técnica hands-on",
            objetivo: "Validar conhecimentos práticos em React/Node.js",
            prioridade: "Alta"
          },
          {
            acao: "Conversa com future manager",
            objetivo: "Alinhar expectativas de crescimento e projetos",
            prioridade: "Alta"
          },
          {
            acao: "Reference check técnico",
            objetivo: "Confirmar resultados do projeto de migração",
            prioridade: "Média"
          }
        ],
        perguntasFollowUp: [
          "Quais são suas expectativas específicas de crescimento nos próximos 2 anos?",
          "Como você imagina aplicar sua experiência em microserviços nos nossos projetos?",
          "Qual seria sua abordagem para aprender ML/IA rapidamente?"
        ],
        negociacaoSalario: {
          estrategia: "Competitivo - candidato forte com opções no mercado",
          expectativaEstimada: "R$ 15-18k (senior experiente)",
          pontosPoder: ["Experiência em migração crítica", "Liderança técnica", "Fit cultural forte"],
          limitacoes: ["Pode ter ofertas concorrentes", "Expectativa de crescimento rápido"]
        },
        integracaoTime: {
          fitEquipe: 94,
          estiloTrabalo: "Colaborativo e orientado a resultados, ótimo mentor para juniors",
          potenciaisConflitos: "Nenhum conflito significativo identificado",
          onboarding: "Pode assumir responsabilidades rapidamente, ideal para projetos desafiadores"
        },
        riscosContratacao: [
          {
            risco: "Ambição de crescimento acelerado",
            mitigacao: "Definir roadmap claro de carreira e projetos desafiadores",
            probabilidade: "Baixa"
          }
        ]
      });
    }
    
    return '{"erro": "Tipo de prompt não reconhecido no modo demonstração"}';
  }

  // Tentativa real com a API Claude
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: maxTokens,
        temperature: 0.1,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Erro desconhecido' }));
      throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Falha na requisição'}`);
    }

    const data = await response.json();
    
    if (!data.content || !data.content[0] || !data.content[0].text) {
      throw new Error('Resposta inválida da API Claude');
    }

    return data.content[0].text;
  } catch (error) {
    console.error('Erro ao chamar Claude API:', error);
    
    if (error.message.includes('CORS') || error.message.includes('Failed to fetch')) {
      throw new Error('❌ CORS Error: Para usar a API real do Claude, você precisa de um backend. Por enquanto, a aplicação está rodando em MODO DEMONSTRAÇÃO com dados simulados. A análise ainda funciona para mostrar a interface!');
    } else if (error.message.includes('API Error: 401')) {
      throw new Error('API Key inválida. Verifique sua chave do Claude.');
    } else if (error.message.includes('API Error: 429')) {
      throw new Error('Limite de requisições excedido. Tente novamente em alguns minutos.');
    } else if (error.message.includes('API Error: 400')) {
      throw new Error('Erro na requisição. Verifique se a transcrição não está muito longa.');
    } else {
      throw new Error(`Falha na análise: ${error.message}`);
    }
  }
};

// Função de compatibilidade com o código existente
export const createClaudeService = (key) => {
  initializeClaude(key);
  
  return {
    complete: callClaude
  };
}; 