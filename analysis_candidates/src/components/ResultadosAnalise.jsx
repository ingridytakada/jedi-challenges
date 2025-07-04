import React from 'react';
import { CheckCircle2, XCircle, MessageSquare, Briefcase, Target, Award } from 'lucide-react';

const ResultadosAnalise = ({ analise }) => {
  const getCorRecomendacao = (acao) => {
    if (acao.includes('APROVAR')) return 'text-green-600';
    if (acao.includes('REJEITAR')) return 'text-red-600';
    return 'text-yellow-600';
  };

  const getFundoRecomendacao = (acao) => {
    if (acao.includes('APROVAR')) return 'bg-green-50 border-green-200';
    if (acao.includes('REJEITAR')) return 'bg-red-50 border-red-200';
    return 'bg-yellow-50 border-yellow-200';
  };

  if (!analise) return null;

  return (
    <div className="space-y-6">
      {/* Card de Recomendação Principal */}
      <div className={`rounded-lg border p-6 ${getFundoRecomendacao(analise.recomendacoes.decisaoRecomendada.acao)}`}>
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Recomendação Final</h2>
            <div className={`text-2xl font-bold mb-2 ${getCorRecomendacao(analise.recomendacoes.decisaoRecomendada.acao)}`}>
              {analise.recomendacoes.decisaoRecomendada.acao.replace(/_/g, ' ')}
            </div>
            <p className="text-gray-700">{analise.recomendacoes.decisaoRecomendada.justificativa}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-gray-900">{analise.recomendacoes.decisaoRecomendada.confianca}%</div>
            <div className="text-sm text-gray-500">Confiança</div>
          </div>
        </div>
      </div>

      {/* Cards de Perfil */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Perfil de Comunicação */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Comunicação & Presença
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Clareza</span>
              <span className="font-bold text-blue-600">{analise.perfilBasico.perfilBasico.comunicacao.clareza}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Confiança</span>
              <span className="font-bold text-blue-600">{analise.perfilBasico.perfilBasico.comunicacao.confianca}</span>
            </div>
            <div className="text-xs text-gray-600 mt-2">
              <strong>Estrutura:</strong> {analise.perfilBasico.perfilBasico.comunicacao.estrutura}
            </div>
            <div className="text-xs text-gray-600">
              <strong>Vocabulário:</strong> {analise.perfilBasico.perfilBasico.comunicacao.vocabulario}
            </div>
          </div>
        </div>

        {/* Experiência */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Background Profissional
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium">Experiência:</span> {analise.perfilBasico.perfilBasico.experiencia.anosExperiencia}
            </div>
            <div>
              <span className="font-medium">Senioridade:</span> {analise.perfilBasico.perfilBasico.experiencia.senioridade}
            </div>
            <div>
              <span className="font-medium">Empresas anteriores:</span> {analise.perfilBasico.perfilBasico.experiencia.empresasAnteriores}
            </div>
            <div>
              <span className="font-medium">Setores:</span> {analise.perfilBasico.perfilBasico.experiencia.setoresExperiencia.join(', ')}
            </div>
          </div>
        </div>
      </div>

      {/* Avaliação Específica */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Avaliação Detalhada</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(analise.avaliacaoEspecifica[Object.keys(analise.avaliacaoEspecifica)[0]]).slice(0, -2).map(([key, data]) => (
            <div key={key} className="border rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-sm text-gray-900">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </h4>
                <span className={`text-lg font-bold ${data.pontuacao >= 80 ? 'text-green-600' : data.pontuacao >= 60 ? 'text-blue-600' : 'text-yellow-600'}`}>
                  {data.pontuacao}
                </span>
              </div>
              <p className="text-xs text-gray-600">{data.detalhes}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Red Flags e Pontos de Atenção */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Red Flags */}
        {analise.analiseComportamental.redFlags.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Red Flags
            </h3>
            <div className="space-y-3">
              {analise.analiseComportamental.redFlags.map((flag, idx) => (
                <div key={idx} className="bg-white rounded p-3 text-sm">
                  <div className="font-medium text-red-800 mb-1">{flag.categoria}</div>
                  <div className="text-gray-700 mb-2">{flag.descricao}</div>
                  <div className="text-xs text-gray-600 italic">"{flag.citacao}"</div>
                  <div className={`text-xs mt-1 font-medium ${flag.gravidade === 'Alta' ? 'text-red-600' : 'text-yellow-600'}`}>
                    Gravidade: {flag.gravidade}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Momentos Positivos */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Destaques Positivos
          </h3>
          <div className="space-y-3">
            {analise.analiseComportamental.momentosPositivos.map((momento, idx) => (
              <div key={idx} className="bg-white rounded p-3 text-sm">
                <div className="font-medium text-green-800 mb-1">{momento.categoria}</div>
                <div className="text-gray-700 italic mb-2">"{momento.citacao}"</div>
                <div className="text-xs text-gray-600">{momento.impacto}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Próximos Passos */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5" />
          Próximos Passos Recomendados
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Ações Imediatas</h4>
            <div className="space-y-2">
              {analise.recomendacoes.proximosPassos.map((passo, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <div className={`w-2 h-2 rounded-full mt-2 ${passo.prioridade === 'Alta' ? 'bg-red-500' : 'bg-yellow-500'}`} />
                  <div>
                    <div className="font-medium">{passo.acao}</div>
                    <div className="text-gray-600">{passo.objetivo}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Perguntas Follow-up</h4>
            <div className="space-y-1">
              {analise.recomendacoes.perguntasFollowUp.map((pergunta, idx) => (
                <div key={idx} className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                  "{pergunta}"
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Insights de Negociação */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5" />
          Insights para Negociação
        </h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Expectativa Salarial</h4>
            <p className="text-gray-600">{analise.recomendacoes.negociacaoSalario.expectativaEstimada}</p>
            <p className="text-xs text-gray-500 mt-1">{analise.recomendacoes.negociacaoSalario.estrategia}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Pontos de Poder</h4>
            <ul className="text-gray-600 space-y-1">
              {analise.recomendacoes.negociacaoSalario.pontosPoder.map((ponto, idx) => (
                <li key={idx} className="text-xs">• {ponto}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Fit com Equipe</h4>
            <div className="text-2xl font-bold text-green-600 mb-1">{analise.recomendacoes.integracaoTime.fitEquipe}%</div>
            <p className="text-xs text-gray-600">{analise.recomendacoes.integracaoTime.estiloTrabalo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultadosAnalise; 