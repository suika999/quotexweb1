
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { 
  TrendingUp,
  TrendingDown,
  BarChart3,
  Clock,
  Target,
  Shield,
  Zap,
  BookOpen,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Star,
  Award,
  Users
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const strategies = [
  {
    title: 'Estratégia de Tendência',
    difficulty: 'Iniciante',
    timeframe: '5-15 min',
    successRate: '75%',
    description: 'Identifique e siga as tendências do mercado para maximizar seus lucros.',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    steps: [
      'Identifique a direção da tendência principal',
      'Aguarde um pullback (correção)',
      'Entre na direção da tendência',
      'Defina stop loss e take profit'
    ],
    tips: [
      'Use médias móveis para confirmar tendências',
      'Evite operar contra tendências fortes',
      'Aguarde confirmação antes de entrar'
    ]
  },
  {
    title: 'Estratégia de Reversão',
    difficulty: 'Intermediário',
    timeframe: '1-5 min',
    successRate: '68%',
    description: 'Identifique pontos de reversão para capturar movimentos contrários.',
    icon: TrendingDown,
    color: 'from-red-500 to-pink-500',
    steps: [
      'Identifique níveis de suporte/resistência',
      'Aguarde sinais de reversão',
      'Confirme com indicadores técnicos',
      'Execute a operação rapidamente'
    ],
    tips: [
      'Use RSI para identificar sobrecompra/sobrevenda',
      'Confirme com padrões de candlestick',
      'Seja rápido na execução'
    ]
  },
  {
    title: 'Estratégia de Breakout',
    difficulty: 'Avançado',
    timeframe: '15-30 min',
    successRate: '72%',
    description: 'Capture movimentos explosivos quando o preço rompe níveis importantes.',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    steps: [
      'Identifique consolidações ou triângulos',
      'Aguarde o rompimento com volume',
      'Entre na direção do breakout',
      'Gerencie o risco adequadamente'
    ],
    tips: [
      'Volume é crucial para confirmar breakouts',
      'Evite falsos rompimentos',
      'Use stop loss apertado'
    ]
  },
  {
    title: 'Estratégia de Scalping',
    difficulty: 'Avançado',
    timeframe: '30s-2 min',
    successRate: '65%',
    description: 'Operações rápidas para capturar pequenos movimentos de preço.',
    icon: Clock,
    color: 'from-blue-500 to-cyan-500',
    steps: [
      'Monitore gráficos de curto prazo',
      'Identifique micro tendências',
      'Execute operações rapidamente',
      'Feche posições em lucros pequenos'
    ],
    tips: [
      'Requer concentração total',
      'Use spreads baixos',
      'Gerencie emoções rigorosamente'
    ]
  }
]

const indicators = [
  {
    name: 'Médias Móveis',
    description: 'Identifica tendências e pontos de entrada',
    usage: 'Cruzamentos de médias indicam mudanças de tendência',
    icon: BarChart3
  },
  {
    name: 'RSI',
    description: 'Mede força e momentum do preço',
    usage: 'Valores acima de 70 indicam sobrecompra, abaixo de 30 sobrevenda',
    icon: Target
  },
  {
    name: 'MACD',
    description: 'Confirma tendências e divergências',
    usage: 'Cruzamentos da linha de sinal geram sinais de compra/venda',
    icon: TrendingUp
  },
  {
    name: 'Bollinger Bands',
    description: 'Identifica volatilidade e reversões',
    usage: 'Preços nas bandas extremas indicam possível reversão',
    icon: Shield
  }
]

const riskManagement = [
  {
    title: 'Gestão de Capital',
    description: 'Nunca arrisque mais de 2-5% do seu capital por operação',
    icon: Shield,
    tips: [
      'Defina um valor máximo por trade',
      'Diversifique entre diferentes ativos',
      'Mantenha reserva de emergência'
    ]
  },
  {
    title: 'Controle Emocional',
    description: 'Mantenha disciplina e siga seu plano de trading',
    icon: Target,
    tips: [
      'Não opere por impulso',
      'Aceite perdas como parte do processo',
      'Mantenha um diário de trading'
    ]
  },
  {
    title: 'Análise de Resultados',
    description: 'Monitore e analise suas operações regularmente',
    icon: BarChart3,
    tips: [
      'Registre todas as operações',
      'Analise erros e acertos',
      'Ajuste estratégias conforme necessário'
    ]
  }
]

export default function EstrategiasPage() {
  const heroRef = useRef(null)
  const strategiesRef = useRef(null)
  const indicatorsRef = useRef(null)
  const riskRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const strategiesInView = useInView(strategiesRef, { once: true })
  const indicatorsInView = useInView(indicatorsRef, { once: true })
  const riskInView = useInView(riskRef, { once: true })
  const ctaInView = useInView(ctaRef, { once: true })

  const handleCTAClick = () => {
    window.open('http://quotex.tv.br/go/quotex', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen pt-14 sm:pt-16 lg:pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 text-center lg:text-left"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="heading-xl"
                >
                  <span className="gradient-text">Estratégias</span> de Trading
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-body-lg text-muted-foreground"
                >
                  Técnicas Comprovadas para Maximizar seus Lucros
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-body text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                >
                  Descubra estratégias testadas e aprovadas por traders profissionais. 
                  Aprenda técnicas de análise, gestão de risco e psicologia do trading 
                  para aumentar suas chances de sucesso no mercado financeiro.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  onClick={handleCTAClick}
                  size="lg"
                  className="btn-primary group"
                >
                  <span className="hidden sm:inline">Praticar Estratégias</span>
                  <span className="sm:hidden">Praticar</span>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="https://i.pinimg.com/originals/8b/aa/a3/8baaa32af6d2202044f7fe43dee9a6d9.jpg"
                  alt="Estratégias de Trading"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section ref={strategiesRef} className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={strategiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Estratégias <span className="gradient-text">Principais</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Conheça as estratégias mais eficazes para diferentes perfis de trader.
            </p>
          </motion.div>

          <div className="grid-responsive-2">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={strategiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="card-hover h-full bg-card border-primary/10 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${strategy.color}`} />
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <strategy.icon className="w-6 h-6 text-background" />
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-muted-foreground">Taxa de Sucesso</span>
                        <p className="text-lg font-bold text-primary">{strategy.successRate}</p>
                      </div>
                    </div>
                    
                    <h3 className="heading-sm mb-2">{strategy.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                        {strategy.difficulty}
                      </span>
                      <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                        {strategy.timeframe}
                      </span>
                    </div>
                    
                    <p className="text-body text-muted-foreground mb-6">
                      {strategy.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Passos:</h4>
                        <ul className="space-y-1">
                          {strategy.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start space-x-2">
                              <span className="text-primary font-bold text-sm mt-0.5">{stepIndex + 1}.</span>
                              <span className="text-sm text-muted-foreground">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Dicas:</h4>
                        <ul className="space-y-1">
                          {strategy.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Indicators Section */}
      <section ref={indicatorsRef} className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={indicatorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Indicadores <span className="gradient-text">Técnicos</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Ferramentas essenciais para análise técnica e tomada de decisões.
            </p>
          </motion.div>

          <div className="grid-responsive-4">
            {indicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={indicatorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="card-hover h-full bg-card border-primary/10">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <indicator.icon className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
                    </div>
                    <h3 className="heading-sm mb-3 sm:mb-4">{indicator.name}</h3>
                    <p className="text-body text-muted-foreground mb-4">
                      {indicator.description}
                    </p>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-sm text-muted-foreground">
                        <strong>Como usar:</strong> {indicator.usage}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management Section */}
      <section ref={riskRef} className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={riskInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Gestão de <span className="gradient-text">Risco</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Proteja seu capital e maximize seus lucros com gestão adequada de riscos.
            </p>
          </motion.div>

          <div className="grid-responsive-3">
            {riskManagement.map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={riskInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="card-hover h-full bg-card border-primary/10">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <risk.icon className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
                    </div>
                    <h3 className="heading-sm mb-3 text-center">{risk.title}</h3>
                    <p className="text-body text-muted-foreground mb-4 text-center">
                      {risk.description}
                    </p>
                    <div className="space-y-2">
                      {risk.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Coloque as Estratégias em <span className="gradient-text">Prática</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
              Agora que você conhece as estratégias, é hora de praticá-las! 
              Abra sua conta demo gratuita e teste essas técnicas sem riscos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="btn-primary group"
              >
                <span className="hidden sm:inline">Praticar com Conta Demo</span>
                <span className="sm:hidden">Praticar Demo</span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">R$ 50.000 Virtuais</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Todas as Estratégias</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Sem Riscos</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground mt-6">
              ⚠️ Pratique sempre com a conta demo antes de aplicar estratégias com dinheiro real.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
