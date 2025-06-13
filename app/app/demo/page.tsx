
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { 
  Play,
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  Target,
  CheckCircle,
  ExternalLink,
  ArrowRight,
  Zap,
  BookOpen,
  Users,
  Award,
  BarChart3
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  {
    icon: DollarSign,
    title: 'R$ 50.000 Virtuais',
    description: 'Comece com um saldo generoso para praticar todas as estratégias sem limitações.',
  },
  {
    icon: Shield,
    title: '100% Sem Riscos',
    description: 'Pratique quanto quiser sem risco de perder dinheiro real. É completamente gratuito.',
  },
  {
    icon: BarChart3,
    title: 'Plataforma Completa',
    description: 'Acesso a todos os recursos da plataforma real, incluindo análise técnica avançada.',
  },
  {
    icon: Clock,
    title: 'Sem Limite de Tempo',
    description: 'Use a conta demo pelo tempo que precisar para se sentir confiante.',
  },
]

const features = [
  {
    title: 'Mais de 410 Ativos',
    description: 'Pratique com forex, ações, commodities, criptomoedas e índices.',
    icon: Target,
  },
  {
    title: 'Execução em Tempo Real',
    description: 'Preços e execução idênticos à plataforma real para uma experiência autêntica.',
    icon: Zap,
  },
  {
    title: 'Ferramentas Profissionais',
    description: 'Indicadores técnicos, gráficos avançados e análise de mercado.',
    icon: BarChart3,
  },
  {
    title: 'Suporte Educativo',
    description: 'Materiais de aprendizado e dicas integradas na plataforma.',
    icon: BookOpen,
  },
]

const steps = [
  {
    number: '1',
    title: 'Cadastro Rápido',
    description: 'Registre-se gratuitamente em menos de 2 minutos.',
  },
  {
    number: '2',
    title: 'Acesse a Demo',
    description: 'Entre na plataforma e comece a praticar imediatamente.',
  },
  {
    number: '3',
    title: 'Pratique e Aprenda',
    description: 'Teste estratégias e desenvolva suas habilidades.',
  },
  {
    number: '4',
    title: 'Migre para Real',
    description: 'Quando se sentir confiante, faça seu primeiro depósito.',
  },
]

const testimonials = [
  {
    name: 'Carlos Mendes',
    location: 'São Paulo',
    content: 'A conta demo foi essencial para meu aprendizado. Pratiquei por 3 semanas antes de investir dinheiro real.',
    rating: 5,
  },
  {
    name: 'Fernanda Lima',
    location: 'Rio de Janeiro',
    content: 'Perfeita para iniciantes! Consegui entender como funciona o trading sem pressão.',
    rating: 5,
  },
  {
    name: 'Roberto Silva',
    location: 'Belo Horizonte',
    content: 'Uso a demo para testar novas estratégias antes de aplicar na conta real. Muito útil!',
    rating: 5,
  },
]

export default function DemoPage() {
  const heroRef = useRef(null)
  const benefitsRef = useRef(null)
  const featuresRef = useRef(null)
  const stepsRef = useRef(null)
  const testimonialsRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const benefitsInView = useInView(benefitsRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })
  const stepsInView = useInView(stepsRef, { once: true })
  const testimonialsInView = useInView(testimonialsRef, { once: true })
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
                  Conta <span className="gradient-text">Demo Gratuita</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-body-lg text-muted-foreground"
                >
                  Pratique Trading sem Riscos com R$ 50.000 Virtuais
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-body text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                >
                  A conta demo da Quotex é a forma perfeita de aprender trading digital 
                  sem riscos. Pratique com dinheiro virtual, teste estratégias e 
                  desenvolva suas habilidades antes de investir dinheiro real.
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
                  <span className="hidden sm:inline">Abrir Conta Demo Agora</span>
                  <span className="sm:hidden">Abrir Demo</span>
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button
                  onClick={handleCTAClick}
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="hidden sm:inline">Ver Plataforma</span>
                  <span className="sm:hidden">Ver Demo</span>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
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
                  src="https://lh5.googleusercontent.com/6IYQaqD8fgxEDh5npWp_0qIa6Aupms3DBFVxtaPdbrnY0KBnvtU_R5YK-NYU5v9DxW6dEngF7HLOrr66WWBr0dmimTyr42DetLeC3o8YzzniE32zJEjFoVtd5w45352f2VM7o1WPthK5LXiQFH_Ugek"
                  alt="Conta Demo Quotex"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Demo Gratuita
                </div>
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium">Saldo Virtual:</p>
                  <p className="text-lg font-bold gradient-text">R$ 50.000</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Vantagens da <span className="gradient-text">Conta Demo</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Descubra por que milhares de traders começam com nossa conta demo.
            </p>
          </motion.div>

          <div className="grid-responsive-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="card-hover h-full bg-card border-primary/10">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
                    </div>
                    <h3 className="heading-sm mb-3 sm:mb-4">{benefit.title}</h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {benefit.description}
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
              Recursos <span className="gradient-text">Completos</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Acesso total a todas as funcionalidades da plataforma real.
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
              Como <span className="gradient-text">Começar</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Sua jornada no trading digital começa com estes passos simples.
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

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              O Que Dizem Nossos <span className="gradient-text">Usuários</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Experiências reais de quem começou com a conta demo.
            </p>
          </motion.div>

          <div className="grid-responsive-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="card-hover h-full bg-card border-primary/10">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Award key={i} className="w-5 h-5 text-primary fill-current" />
                      ))}
                    </div>
                    <p className="text-body text-muted-foreground mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-background" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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
              Comece Sua Jornada <span className="gradient-text">Hoje Mesmo</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
              Não perca mais tempo! Abra sua conta demo gratuita agora e comece 
              a praticar trading digital com R$ 50.000 virtuais.
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

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">100% Gratuito</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Sem Riscos</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Cadastro em 2min</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground mt-6">
              ⚠️ A conta demo é para fins educacionais. Pratique antes de investir dinheiro real.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
