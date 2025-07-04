import React, { useState, useCallback } from 'react';
import { User, Briefcase, Brain, Heart, TrendingUp, AlertCircle, Loader2, CheckCircle2, XCircle, Star, Target, Lightbulb, MessageSquare, Shield, Users, Award, Key } from 'lucide-react';
import { createClaudeService } from './services/claude.js';
import { criarPromptEstagio1, promptsEspecificos, criarPromptEstagio3, criarPromptEstagio4 } from './services/prompts.js';
import ResultadosAnalise from './components/ResultadosAnalise.jsx';

const App = () => {
  const [transcricao, setTranscricao] = useState('');
  const [analisando, setAnalisando] = useState(false);
  const [estagio, setEstagio] = useState('');
  const [tipoSelecionado, setTipoSelecionado] = useState(null);
  const [analise, setAnalise] = useState(null);
  const [erro, setErro] = useState('');
  const [logDebug, setLogDebug] = useState([]);
  const [apiKey, setApiKey] = useState('');
  const [claudeService, setClaudeService] = useState(null);

  const tiposEntrevista = [
    { id: 'tecnica', name: 'Técnica/Especialista', icon: Brain, color: 'blue', desc: 'Avaliar conhecimentos técnicos e experiência' },
    { id: 'comportamental', name: 'Comportamental/Cultural', icon: Heart, color: 'pink', desc: 'Analisar fit cultural e soft skills' },
    { id: 'lideranca', name: 'Liderança/Gestão', icon: Users, color: 'purple', desc: 'Avaliar capacidade de liderança e gestão' },
    { id: 'vendas', name: 'Vendas/Comercial', icon: TrendingUp, color: 'green', desc: 'Analisar habilidades de vendas e persuasão' },
    { id: 'geral', name: 'Entrevista Geral', icon: User, color: 'gray', desc: 'Análise geral do candidato' }
  ];

  const configurarClaude = useCallback(() => {
    if (!apiKey.trim()) {
      setErro('Por favor, insira sua API Key do Claude');
      return;
    }
    
    try {
      const service = createClaudeService(apiKey);
      setClaudeService(service);
      setErro('');
    } catch (error) {
      setErro('Erro ao configurar Claude: ' + error.message);
    }
  }, [apiKey]);

  const adicionarLogDebug = (estagio, mensagem, dados = null) => {
    const entrada = {
      timestamp: new Date().toISOString(),
      estagio,
      mensagem,
      dados
    };
    setLogDebug(prev => [...prev, entrada]);
    console.log(`[${estagio}]`, mensagem, dados || '');
  };

  const analisarResposta = (resposta, estagio) => {
    adicionarLogDebug(estagio, 'Resposta recebida', { tamanho: resposta.length });
    
    try {
      return JSON.parse(resposta);
    } catch (e) {
      try {
        let limpa = resposta.trim();
        limpa = limpa.replace(/^```(?:json)?\s*\n?/i, '');
        limpa = limpa.replace(/\n?```\s*$/i, '');
        return JSON.parse(limpa.trim());
      } catch (e2) {
        const match = resposta.match(/\{[\s\S]*\}/);
        if (match) {
          return JSON.parse(match[0]);
        }
        throw new Error(`Falha ao analisar resposta no ${estagio}`);
      }
    }
  };

  const analisarCandidato = async (tipo) => {
    if (!claudeService) {
      setErro('Por favor, configure sua API Key do Claude primeiro');
      return;
    }

    if (!transcricao.trim()) {
      setErro('Por favor, cole a transcrição da entrevista primeiro');
      return;
    }

    setAnalisando(true);
    setErro('');
    setTipoSelecionado(tipo);
    setAnalise(null);
    setLogDebug([]);
    
    try {
      // Estágio 1: Perfil básico do candidato
      setEstagio('Analisando perfil do candidato...');
      adicionarLogDebug('Estágio 1', 'Iniciando análise de perfil');
      
      const promptEstagio1 = criarPromptEstagio1(transcricao);
      const respostaEstagio1 = await claudeService.complete(promptEstagio1);
      const perfilBasico = analisarResposta(respostaEstagio1, 'Estágio 1');
      adicionarLogDebug('Estágio 1', 'Perfil básico analisado', perfilBasico);

      // Estágio 2: Análise específica por tipo de entrevista
      setEstagio('Avaliando competências específicas...');
      adicionarLogDebug('Estágio 2', 'Iniciando análise específica para tipo: ' + tipo);
      
      const promptEstagio2 = promptsEspecificos[tipo](transcricao, perfilBasico);
      const respostaEstagio2 = await claudeService.complete(promptEstagio2);
      const avaliacaoEspecifica = analisarResposta(respostaEstagio2, 'Estágio 2');
      adicionarLogDebug('Estágio 2', 'Avaliação específica concluída', avaliacaoEspecifica);

      // Estágio 3: Red flags e pontos de atenção
      setEstagio('Identificando red flags e pontos de atenção...');
      adicionarLogDebug('Estágio 3', 'Analisando red flags');
      
      const promptEstagio3 = criarPromptEstagio3(transcricao, perfilBasico, avaliacaoEspecifica);
      const respostaEstagio3 = await claudeService.complete(promptEstagio3);
      const analiseComportamental = analisarResposta(respostaEstagio3, 'Estágio 3');
      adicionarLogDebug('Estágio 3', 'Red flags identificados', analiseComportamental);

      // Estágio 4: Recomendações e próximos passos
      setEstagio('Gerando recomendações finais...');
      adicionarLogDebug('Estágio 4', 'Gerando recomendações');
      
      const promptEstagio4 = criarPromptEstagio4(perfilBasico, avaliacaoEspecifica, analiseComportamental);
      const respostaEstagio4 = await claudeService.complete(promptEstagio4);
      const recomendacoes = analisarResposta(respostaEstagio4, 'Estágio 4');
      adicionarLogDebug('Estágio 4', 'Recomendações geradas', recomendacoes);

      // Combinar toda a análise
      const analiseCompleta = {
        tipo,
        perfilBasico,
        avaliacaoEspecifica,
        analiseComportamental,
        recomendacoes,
        timestamp: new Date().toISOString()
      };

      adicionarLogDebug('Final', 'Análise completa do candidato', analiseCompleta);
      setAnalise(analiseCompleta);
      
    } catch (err) {
      adicionarLogDebug('Erro', err.message, err.stack);
      setErro(`Análise falhou: ${err.message}`);
    } finally {
      setAnalisando(false);
      setEstagio('');
    }
  };

  // ... resto do componente será adicionado
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Cabeçalho */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">📊 Análise do Candidato</h1>
          <p className="text-gray-600">
            Cole a transcrição da entrevista e receba uma análise completa do candidato usando IA.
          </p>
        </div>

        {/* Modo Demonstração */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-medium text-yellow-900 mb-2">🧪 Modo Demonstração Ativo</h3>
              <p className="text-sm text-yellow-700 mb-2">
                Esta aplicação está funcionando com <strong>dados simulados</strong> para demonstração. 
                A análise é baseada na transcrição de exemplo e mostra como a interface funciona.
              </p>
              <p className="text-xs text-yellow-600">
                Para usar a API real do Claude, você precisaria de um backend que evite problemas de CORS.
              </p>
            </div>
          </div>
        </div>

        {/* Configuração da API Key */}
        {!claudeService && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Key className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h3 className="font-medium text-blue-900 mb-2">Configurar para Demonstração</h3>
                <div className="flex gap-3">
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="demo-key (qualquer valor para demonstração)"
                    className="flex-1 px-3 py-2 text-sm border border-blue-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={configurarClaude}
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                  >
                    Ativar Demo
                  </button>
                </div>
                <p className="text-xs text-blue-700 mt-2">
                  Digite qualquer valor para ativar o modo demonstração com dados simulados.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Seção de Input */}
        {claudeService && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Transcrição da Entrevista
            </label>
            <textarea
              value={transcricao}
              onChange={(e) => setTranscricao(e.target.value)}
              placeholder="Entrevistadora: Bom dia João, obrigada por estar aqui...&#10;Candidato: Bom dia! Obrigado pela oportunidade...&#10;&#10;(Cole a transcrição completa da entrevista)"
              className="w-full h-40 p-3 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
            />
            <div className="mt-2 text-xs text-gray-500">
              {transcricao.length} caracteres • {transcricao.split(/\s+/).filter(Boolean).length} palavras
            </div>
          </div>
        )}

        {/* Estado de Erro */}
        {erro && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 font-medium">{erro}</p>
            </div>
          </div>
        )}

        {/* Botões de Análise */}
        {claudeService && transcricao.trim() && (
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Escolha o tipo de avaliação:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {tiposEntrevista.map(tipo => {
                const Icon = tipo.icon;
                return (
                  <button
                    key={tipo.id}
                    onClick={() => analisarCandidato(tipo.id)}
                    disabled={analisando}
                    className={`
                      p-4 rounded-lg border transition-all text-left
                      ${tipoSelecionado === tipo.id 
                        ? 'bg-blue-50 border-blue-300' 
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'}
                      ${analisando ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className={`w-5 h-5 mt-0.5 ${tipoSelecionado === tipo.id ? 'text-blue-600' : 'text-gray-600'}`} />
                      <div className="flex-1 min-w-0">
                        <div className={`font-medium text-sm ${tipoSelecionado === tipo.id ? 'text-blue-700' : 'text-gray-900'}`}>
                          {tipo.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{tipo.desc}</div>
                        {analisando && tipoSelecionado === tipo.id && (
                          <div className="flex items-center gap-2 mt-2">
                            <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                            <span className="text-xs text-blue-600">Analisando...</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Estado de Carregamento */}
        {analisando && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
              <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
              <span className="text-blue-700 font-medium">{estagio || 'Analisando candidato...'}</span>
            </div>
          </div>
        )}

        {/* Resultados da Análise */}
        {analise && !analisando && (
          <ResultadosAnalise analise={analise} />
        )}

        {/* Debug Info */}
        {logDebug.length > 0 && (
          <details className="bg-gray-100 rounded-lg p-4">
            <summary className="text-sm font-medium text-gray-700 cursor-pointer">
              Debug ({logDebug.length} entradas)
            </summary>
            <pre className="mt-3 text-xs bg-white p-3 rounded overflow-x-auto">
              {JSON.stringify(logDebug, null, 2)}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};

export default App; 