
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { 
  Play,
  TrendingUp,
  TrendingDown,
  Clock,
  DollarSign,
  Target,
  BarChart3,
  Smartphone,
  Monitor,
  CheckCircle,
  ExternalLink,
  ArrowRight,
  Zap,
  Shield,
  Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const steps = [
  {
    number: '1',
    title: 'Escolha o Ativo',
    description: 'Selecione entre mais de 410 ativos disponíveis: pares de moedas, ações, commodities, criptomoedas e índices.',
    icon: Target,
  },
  {
    number: '2',
    title: 'Defina o Valor',
    description: 'Determine o valor que deseja investir na operação. Você pode começar com apenas R$ 5.',
    icon: DollarSign,
  },
  {
    number: '3',
    title: 'Escolha a Direção',
    description: 'Preveja se o preço do ativo vai subir (CALL) ou descer (PUT) no tempo determinado.',
    icon: TrendingUp,
  },
  {
    number: '4',
    title: 'Aguarde o Resultado',
    description: 'Acompanhe sua operação em tempo real e receba o retorno se sua previsão estiver correta.',
    icon: Clock,
  },
]

const features = [
  {
    icon: Zap,
    title: 'Execução Instantânea',
    description: 'Ordens executadas em milissegundos para você nunca perder uma oportunidade.',
  },
  {
    icon: Shield,
    title: 'Plataforma Segura',
    description: 'Tecnologia de segurança avançada para proteger seus dados e investimentos.',
  },
  {
    icon: Award,
    title: 'Retornos Competitivos',
    description: 'Retornos de até 98% em operações bem-sucedidas.',
  },
  {
    icon: BarChart3,
    title: 'Análise Avançada',
    description: 'Ferramentas de análise técnica profissionais incluídas na plataforma.',
  },
]

const platforms = [
  {
    icon: Monitor,
    title: 'Plataforma Web',
    description: 'Acesse diretamente pelo navegador, sem necessidade de download.',
    features: ['Interface intuitiva', 'Gráficos avançados', 'Análise técnica', 'Execução rápida'],
  },
  {
    icon: Smartphone,
    title: 'App Mobile',
    description: 'Negocie de qualquer lugar com nosso aplicativo para Android e iOS.',
    features: ['Trading móvel', 'Notificações push', 'Sincronização', 'Interface otimizada'],
  },
]

const assetTypes = [
  {
    name: 'Forex',
    description: 'Pares de moedas principais, menores e exóticos',
    examples: ['EUR/USD', 'GBP/JPY', 'USD/BRL'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Ações',
    description: 'Ações das maiores empresas globais',
    examples: ['Apple', 'Google', 'Tesla'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Commodities',
    description: 'Metais preciosos, petróleo e produtos agrícolas',
    examples: ['Ouro', 'Petróleo', 'Prata'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Criptomoedas',
    description: 'Principais criptomoedas do mercado',
    examples: ['Bitcoin', 'Ethereum', 'Litecoin'],
    color: 'from-purple-500 to-pink-500',
  },
]

export default function ComoFuncionaPage() {
  const heroRef = useRef(null)
  const stepsRef = useRef(null)
  const featuresRef = useRef(null)
  const platformsRef = useRef(null)
  const assetsRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const stepsInView = useInView(stepsRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })
  const platformsInView = useInView(platformsRef, { once: true })
  const assetsInView = useInView(assetsRef, { once: true })
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
                  Como Funciona o <span className="gradient-text">Trading Digital</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-body-lg text-muted-foreground"
                >
                  Simples, Rápido e Lucrativo
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-body text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                >
                  O trading digital na Quotex é uma forma simples e acessível de investir 
                  em diversos mercados financeiros. Você prevê a direção do preço de um 
                  ativo e pode obter retornos de até 98% em operações bem-sucedidas.
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
                  <span className="hidden sm:inline">Experimentar Agora</span>
                  <span className="sm:hidden">Experimentar</span>
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
                  src="https://i.pinimg.com/originals/20/f6/54/20f6541a1428e557e19c538001960849.png"
                  alt="Como Funciona Trading Digital"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-background ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section ref={stepsRef} className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              <span className="gradient-text">4 Passos</span> para Começar
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Veja como é simples fazer sua primeira operação na Quotex.
            </p>
          </motion.div>

          <div className="grid-responsive-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connection Line - Hidden on mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 transform -translate-x-1/2" />
                )}
                
                <Card className="card-hover h-full bg-card border-primary/10">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-lg sm:text-2xl font-bold text-background">
                      {step.number}
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <h3 className="heading-sm mb-3 sm:mb-4">{step.title}</h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Recursos da <span className="gradient-text">Plataforma</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Tecnologia avançada para maximizar suas oportunidades de lucro.
            </p>
          </motion.div>

          <div className="grid-responsive-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="card-hover h-full bg-card border-primary/10">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
                    </div>
                    <h3 className="heading-sm mb-3 sm:mb-4">{feature.title}</h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section ref={platformsRef} className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={platformsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Negocie em Qualquer <span className="gradient-text">Dispositivo</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Acesse sua conta e negocie de onde estiver com nossas plataformas otimizadas.
            </p>
          </motion.div>

          <div className="grid-responsive-2">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={platformsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                <Card className="card-hover h-full bg-card border-primary/10">
                  <CardContent className="p-6 sm:p-8">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <platform.icon className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
                      </div>
                      <h3 className="heading-sm mb-3">{platform.title}</h3>
                      <p className="text-body text-muted-foreground">
                        {platform.description}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-body text-foreground">{feature}</span>
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

      {/* Assets Section */}
      <section ref={assetsRef} className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={assetsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Mais de <span className="gradient-text">410 Ativos</span> Disponíveis
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Diversifique seus investimentos com nossa ampla variedade de ativos financeiros.
            </p>
          </motion.div>

          <div className="grid-responsive-4">
            {assetTypes.map((asset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={assetsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="card-hover h-full bg-card border-primary/10 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${asset.color}`} />
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="heading-sm mb-3">{asset.name}</h3>
                    <p className="text-body text-muted-foreground mb-4">
                      {asset.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Exemplos:</p>
                      <div className="flex flex-wrap gap-2">
                        {asset.examples.map((example, exampleIndex) => (
                          <span
                            key={exampleIndex}
                            className="px-2 py-1 bg-muted rounded text-sm text-muted-foreground"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
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
              Pronto para <span className="gradient-text">Começar?</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
              Abra sua conta demo gratuita e pratique com R$ 50.000 virtuais. 
              Sem riscos, sem compromisso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleCTAClick}
                size="lg"
                className="btn-primary group"
              >
                <span className="hidden sm:inline">Abrir Conta Demo Gratuita</span>
                <span className="sm:hidden">Conta Demo Gratuita</span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground mt-6">
              ⚠️ Trading envolve riscos. Pratique primeiro com a conta demo.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
