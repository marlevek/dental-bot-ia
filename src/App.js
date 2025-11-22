import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Calendar, Phone, MessageCircle, Clock, CheckCircle, TrendingUp, Users } from 'lucide-react';

export default function DentalAIAssistant() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Olá! Sou o DentalBot AI, seu assistente virtual para clínica odontológica. Posso ajudar com:\n\n• Agendamento de consultas 24/7\n• Confirmações automáticas\n• Lembretes de retorno\n• Informações sobre tratamentos\n• Respostas a perguntas frequentes\n\nComo posso ajudar você hoje?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(input.toLowerCase());
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (input) => {
    if (input.includes('agendar') || input.includes('consulta') || input.includes('marcar')) {
      return 'Perfeito! Para agendar sua consulta, preciso de algumas informações:\n\n1. Qual data você prefere?\n2. Período: manhã ou tarde?\n3. Tipo de consulta: avaliação, limpeza, canal, etc?\n\nTemos horários disponíveis esta semana: Terça 14h, Quarta 10h e Sexta 16h.';
    }
    
    if (input.includes('preço') || input.includes('valor') || input.includes('quanto custa')) {
      return 'Nossos principais tratamentos:\n\n• Limpeza: R$ 150-200\n• Restauração: R$ 200-400\n• Canal: R$ 800-1500\n• Clareamento: R$ 600-1200\n• Implante: R$ 2000-4000\n\nGostaria de agendar uma avaliação gratuita para um orçamento personalizado?';
    }
    
    if (input.includes('horário') || input.includes('funciona') || input.includes('aberto')) {
      return 'Nossa clínica funciona:\n\n• Segunda a Sexta: 8h às 18h\n• Sábado: 8h às 12h\n\nEstamos localizados na Av. Principal, 123 - Centro\nTelefone: (41) 3333-4444\n\nPosso agendar uma consulta para você?';
    }
    
    if (input.includes('cancelar') || input.includes('remarcar')) {
      return 'Sem problemas! Para cancelar ou remarcar sua consulta, preciso do seu nome completo e data da consulta agendada.\n\nLembre-se: cancelamentos com menos de 24h de antecedência podem ter taxa de remarcação.\n\nQual seu nome e data da consulta?';
    }
    
    if (input.includes('dor') || input.includes('emergência') || input.includes('urgência')) {
      return '⚠️ Para emergências odontológicas:\n\n• Dor intensa: Entre em contato pelo telefone (41) 3333-4444\n• Trauma dental: Procure atendimento imediato\n• Dente quebrado: Guarde os fragmentos e ligue\n\nTemos horários de emergência disponíveis. Posso encaixá-lo hoje?';
    }
    
    if (input.includes('plano') || input.includes('convênio') || input.includes('seguro')) {
      return 'Aceitamos os principais convênios:\n\n✓ Unimed\n✓ Amil Dental\n✓ SulAmérica\n✓ Porto Seguro\n✓ MetLife\n\nTambém oferecemos planos próprios com até 30% de desconto nos tratamentos. Gostaria de mais informações?';
    }

    return 'Entendi! Posso ajudar você com:\n\n• Agendar consultas\n• Informações sobre tratamentos\n• Valores e formas de pagamento\n• Localização e horários\n• Convênios aceitos\n\nSobre qual assunto você gostaria de saber mais?';
  };

  const quickActions = [
    { icon: Calendar, text: 'Agendar consulta', action: 'Gostaria de agendar uma consulta' },
    { icon: Phone, text: 'Horários', action: 'Quais são os horários de funcionamento?' },
    { icon: MessageCircle, text: 'Valores', action: 'Quanto custa uma limpeza?' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="bg-white rounded-t-2xl shadow-lg p-6 border-b-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Bot className="w-9 h-9 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">DentalBot AI</h1>
                <p className="text-gray-600">Seu assistente virtual 24/7</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Online</span>
            </div>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-white border-b">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-semibold">Agendamentos</p>
                <p className="text-2xl font-bold text-blue-800">+85%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-semibold">Taxa Presença</p>
                <p className="text-2xl font-bold text-green-800">92%</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 font-semibold">Tempo Poupado</p>
                <p className="text-2xl font-bold text-purple-800">15h/sem</p>
              </div>
              <Clock className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600 font-semibold">Satisfação</p>
                <p className="text-2xl font-bold text-orange-800">4.9★</p>
              </div>
              <Users className="w-8 h-8 text-orange-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Chat Interface */}
          <div className="lg:col-span-2 bg-white rounded-b-2xl shadow-lg overflow-hidden flex flex-col" style={{ height: '600px' }}>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-br from-gray-400 to-gray-600' 
                      : 'bg-gradient-to-br from-blue-500 to-cyan-500'
                  }`}>
                    {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
                  </div>
                  <div className={`max-w-lg p-4 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-gray-500 to-gray-600 text-white rounded-tr-none'
                      : 'bg-gradient-to-br from-blue-50 to-cyan-50 text-gray-800 rounded-tl-none border border-blue-100'
                  }`}>
                    <p className="whitespace-pre-line text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-blue-50 p-4 rounded-2xl rounded-tl-none border border-blue-100">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-6 py-3 bg-gray-50 border-t">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {quickActions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInput(action.action);
                      setTimeout(() => handleSend(), 100);
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all whitespace-nowrap"
                  >
                    <action.icon className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700">{action.text}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-6 bg-white border-t">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSend}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Features Panel */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🚀 Funcionalidades</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Agendamento 24/7</h4>
                    <p className="text-sm text-gray-600">Pacientes agendam a qualquer hora via WhatsApp, Instagram ou site</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Confirmações Automáticas</h4>
                    <p className="text-sm text-gray-600">Reduz faltas em até 70% com lembretes inteligentes</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Economia de Tempo</h4>
                    <p className="text-sm text-gray-600">Economize 15h/semana da recepção</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Fidelização</h4>
                    <p className="text-sm text-gray-600">Lembretes de retorno aumentam retenção em 40%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-2">💰 ROI Comprovado</h3>
              <p className="text-blue-50 mb-4">Clínicas que usam IA reportam:</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-blue-50">↑ Agendamentos</span>
                  <span className="font-bold">+85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-50">↓ Faltas</span>
                  <span className="font-bold">-70%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-50">↑ Faturamento</span>
                  <span className="font-bold">+45%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">🎯 Integração Total</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>✓ WhatsApp Business</p>
                <p>✓ Instagram Direct</p>
                <p>✓ Facebook Messenger</p>
                <p>✓ Site da clínica</p>
                <p>✓ Agenda Google</p>
                <p>✓ Sistemas de gestão</p>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Por que dentistas amam o DentalBot AI?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">40%</div>
                <p className="text-emerald-50">dos dentistas lutam com retenção de pacientes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">18%</div>
                <p className="text-emerald-50">enfrentam desafios com agendamentos e faltas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">50%</div>
                <p className="text-emerald-50">gastam +5h/semana em gestão administrativa</p>
              </div>
            </div>
            <button className="mt-8 px-8 py-4 bg-white text-emerald-600 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl">
              Quero Testar Grátis por 30 Dias
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}