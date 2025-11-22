import React, { useState, useRef } from 'react';
import { Bot, Calendar, Clock, TrendingUp, CheckCircle, Users, MessageCircle, Zap, Shield, Star, Menu, X, ArrowRight, Play } from 'lucide-react';

export default function DentalBotLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const demoRef = useRef(null);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '197',
      description: 'Ideal para consultórios pequenos',
      features: [
        'Até 200 conversas/mês',
        'WhatsApp + Instagram',
        'Agendamento automático',
        'Confirmações por SMS',
        'Dashboard básico',
        'Suporte por email'
      ],
      highlighted: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: '397',
      description: 'Mais popular entre clínicas',
      features: [
        'Conversas ilimitadas',
        'Todos os canais integrados',
        'IA avançada personalizada',
        'Lembretes de retorno',
        'CRM integrado',
        'Relatórios completos',
        'Suporte prioritário 24/7',
        'Treinamento incluído'
      ],
      highlighted: true,
      badge: 'MAIS POPULAR'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      description: 'Para redes de clínicas',
      features: [
        'Tudo do Professional',
        'Múltiplas unidades',
        'API personalizada',
        'White label disponível',
        'Gerente de conta dedicado',
        'SLA garantido',
        'Implementação assistida'
      ],
      highlighted: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Carlos Silva',
      role: 'Ortodontista - São Paulo',
      text: 'Aumentamos em 85% os agendamentos e reduzimos faltas em 70%. O ROI foi absurdo!',
      rating: 5,
      image: '👨‍⚕️'
    },
    {
      name: 'Dra. Ana Paula',
      role: 'Clínica Dental Life - Curitiba',
      text: 'Economizamos 15h/semana da recepção. Agora focamos no atendimento, não no telefone.',
      rating: 5,
      image: '👩‍⚕️'
    },
    {
      name: 'Dr. Roberto Mendes',
      role: 'Implantodontista - Rio de Janeiro',
      text: 'O melhor investimento que fiz. Meus pacientes adoram a praticidade de agendar pelo WhatsApp.',
      rating: 5,
      image: '👨‍⚕️'
    }
  ];

  const stats = [
    { value: '+85%', label: 'Aumento em Agendamentos', icon: TrendingUp },
    { value: '-70%', label: 'Redução de Faltas', icon: Calendar },
    { value: '15h/sem', label: 'Tempo Economizado', icon: Clock },
    { value: '4.9★', label: 'Satisfação dos Dentistas', icon: Star }
  ];

  const faqs = [
    {
      q: 'Preciso de conhecimentos técnicos?',
      a: 'Não! A configuração é simples e nossa equipe te ajuda em tudo. Em 5 minutos você está online.'
    },
    {
      q: 'Funciona com meu sistema de gestão atual?',
      a: 'Sim! Integramos com os principais sistemas odontológicos: Simples Dental, Dental Office, ISO e outros.'
    },
    {
      q: 'E se eu quiser cancelar?',
      a: 'Pode cancelar a qualquer momento, sem multas ou burocracias. Seus dados continuam disponíveis.'
    },
    {
      q: 'O bot substitui minha recepcionista?',
      a: 'Não! Ele complementa o trabalho, liberando sua equipe para tarefas mais importantes e humanizadas.'
    },
    {
      q: 'Quanto tempo leva para ver resultados?',
      a: 'Clientes reportam aumento de agendamentos na primeira semana e redução de faltas em 30 dias.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Header/Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">DentalBot AI</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Funcionalidades</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Preços</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Depoimentos</a>
              <button onClick={scrollToDemo} className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md">
                Testar Grátis
              </button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-600">Funcionalidades</a>
              <a href="#pricing" className="block text-gray-600">Preços</a>
              <a href="#testimonials" className="block text-gray-600">Depoimentos</a>
              <button onClick={scrollToDemo} className="w-full px-6 py-2 bg-blue-500 text-white rounded-full">
                Testar Grátis
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
                🚀 Automatize seu consultório com IA
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transforme Visitantes em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Pacientes 24/7</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                O assistente virtual com IA que agenda consultas, confirma horários e fideliza pacientes automaticamente. Economize 15h/semana e aumente seu faturamento em 45%.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button onClick={scrollToDemo} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Testar Grátis por 30 Dias <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-full font-bold text-lg hover:border-blue-500 hover:text-blue-600 transition-all flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" /> Ver Demonstração
                </button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Cancele quando quiser</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">DentalBot AI</div>
                    <div className="text-sm text-green-500 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Online agora
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 rounded-tl-none">
                    <p className="text-gray-800">Olá! 👋 Gostaria de agendar uma consulta?</p>
                  </div>
                  <div className="bg-gray-100 rounded-2xl p-4 rounded-tr-none ml-8">
                    <p className="text-gray-800">Sim, preciso de uma limpeza</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 rounded-tl-none">
                    <p className="text-gray-800">Perfeito! Temos horários disponíveis:</p>
                    <div className="mt-3 space-y-2">
                      <div className="bg-white rounded-lg p-2 text-sm">📅 Terça, 14h</div>
                      <div className="bg-white rounded-lg p-2 text-sm">📅 Quarta, 10h</div>
                      <div className="bg-white rounded-lg p-2 text-sm">📅 Sexta, 16h</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Você está perdendo pacientes todos os dias</h2>
            <p className="text-xl text-gray-600">E nem percebe...</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ligações Perdidas</h3>
              <p className="text-gray-600">40% das ligações fora do horário comercial são perdidas. Seu concorrente está atendendo enquanto você dorme.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">❌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Faltas e No-Shows</h3>
              <p className="text-gray-600">30% de faltas causam prejuízo de milhares por mês. Tempo vazio = dinheiro perdido.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tempo Desperdiçado</h3>
              <p className="text-gray-600">Sua recepção gasta 20h/semana respondendo as mesmas perguntas no WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Como o DentalBot AI Resolve Tudo Isso</h2>
            <p className="text-xl text-gray-600">Automatize, economize e fature mais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Agendamento 24/7</h3>
              <p className="text-gray-600">Pacientes agendam consultas a qualquer hora via WhatsApp, Instagram ou site. Sem perder nenhuma oportunidade.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Confirmações Automáticas</h3>
              <p className="text-gray-600">Reduz faltas em até 70% com lembretes inteligentes por WhatsApp 24h e 2h antes da consulta.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fidelização Inteligente</h3>
              <p className="text-gray-600">Lembretes de retorno automáticos para limpeza semestral. Aumente retenção em 40%.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Respostas Instantâneas</h3>
              <p className="text-gray-600">Responde perguntas sobre tratamentos, valores, localização e horários em menos de 2 segundos.</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Relatórios Inteligentes</h3>
              <p className="text-gray-600">Dashboard completo com métricas de conversão, horários de pico e perfil dos pacientes.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Seguro</h3>
              <p className="text-gray-600">Dados criptografados e em conformidade com LGPD. Seus pacientes e informações sempre protegidos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Planos para Todo Tamanho de Clínica</h2>
            <p className="text-xl text-gray-600">Escolha o plano ideal para seu consultório</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${plan.highlighted ? 'ring-4 ring-blue-500 scale-105' : ''}`}>
                {plan.badge && (
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-2 font-bold text-sm">
                    {plan.badge}
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    {plan.price === 'Custom' ? (
                      <div className="text-4xl font-bold text-gray-900">Sob Consulta</div>
                    ) : (
                      <div>
                        <span className="text-4xl font-bold text-gray-900">R$ {plan.price}</span>
                        <span className="text-gray-600">/mês</span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button onClick={scrollToDemo} className={`w-full py-3 rounded-full font-bold transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    {plan.price === 'Custom' ? 'Falar com Vendas' : 'Começar Teste Grátis'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">💳 Aceitamos todos os cartões de crédito • 🔒 Ambiente 100% seguro</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mais de 1.200 Dentistas Já Automatizaram</h2>
            <p className="text-xl text-gray-600">Veja o que eles estão dizendo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-800 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Demo Section */}
      <section ref={demoRef} className="py-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Teste Grátis por 30 Dias
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Sem cartão de crédito • Configuração em 5 minutos • Cancele quando quiser
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Comece Agora</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email profissional"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="WhatsApp"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Nome da clínica"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg">
                Iniciar Teste Grátis Agora →
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              🔒 Seus dados estão seguros e protegidos
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">DentalBot AI</span>
              </div>
              <p className="text-gray-400">Automatize seu consultório odontológico com inteligência artificial.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white">Funcionalidades</a></li>
                <li><a href="#pricing" className="hover:text-white">Preços</a></li>
                <li><a href="#" className="hover:text-white">Integrações</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@dentalbot.ai</li>
                <li>(41) 99999-8888</li>
                <li>Seg-Sex: 9h às 18h</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DentalBot AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}