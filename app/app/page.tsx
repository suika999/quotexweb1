
'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { 
  TrendingUp, 
  Shield, 
  Smartphone, 
  GraduationCap, 
  CheckCircle, 
  Star,
  ArrowRight,
  ExternalLink,
  DollarSign,
  Clock,
  Users,
  Award
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import CountUp from '@/components/count-up'
import TestimonialCard from '@/components/testimonial-card'

const features = [
  {
    icon: TrendingUp,
    title: 'Tecnologia de Ponta',
    description: 'Nossa plataforma utiliza tecnologia avançada com execução de ordens em milissegundos, garantindo que você nunca perca uma oportunidade de mercado.',
  },
  {
    icon: DollarSign,
    title: 'Condições Imbatíveis',
    description: 'Operações a partir de R$ 5, retornos de até 98%, mais de 410 ativos disponíveis, sem taxas de depósito ou saque.',
  },
  {
    icon: Smartphone,
    title: 'Acesso Total',
    description: 'Negocie de qualquer lugar com nossa plataforma web otimizada ou aplicativo móvel para Android e iOS.',
  },
  {
    icon: GraduationCap,
    title: 'Educação Completa',
    description: 'Materiais educativos, webinários ao vivo e suporte personalizado para desenvolver suas habilidades de trading.',
  },
]

const benefits = [
  'Conta demo gratuita com R$ 50.000 virtuais',
  'Depósito mínimo de apenas R$ 50',
  'Bônus de 50% no primeiro depósito',
  'Suporte em português 24/7',
]

const steps = [
  {
    number: '1',
    title: 'Cadastro Rápido',
    description: 'Registre-se gratuitamente em menos de 2 minutos com seu e-mail ou redes sociais.',
  },
  {
    number: '2',
    title: 'Pratique Grátis',
    description: 'Use nossa conta demo com R$ 50.000 virtuais para aprender sem riscos.',
  },
  {
    number: '3',
    title: 'Negocie com Lucro',
    description: 'Faça seu primeiro depósito e comece a lucrar com nossa plataforma profissional.',
  },
]

const testimonials = [
  {
    name: 'Maria Silva',
    location: 'São Paulo',
    content: 'A Quotex mudou minha vida financeira. Em 6 meses, consegui resultados que nunca imaginei possíveis. A plataforma é intuitiva e o suporte é excepcional.',
    rating: 5,
  },
  {
    name: 'João Santos',
    location: 'Rio de Janeiro',
    content: 'Como iniciante, a conta demo foi fundamental. Pratiquei por semanas antes de investir dinheiro real. Hoje sou um trader consistente graças à Quotex.',
    rating: 5,
  },
  {
    name: 'Ana Costa',
    location: 'Belo Horizonte',
    content: 'O que mais me impressiona é a velocidade de execução. Nunca perco uma operação por atraso na plataforma. Recomendo para todos os traders sérios.',
    rating: 5,
  },
]

const stats = [
  { number: 1000000, suffix: '+', label: 'Traders Ativos' },
  { number: 410, suffix: '+', label: 'Ativos Disponíveis' },
  { number: 98, suffix: '%', label: 'Retorno Máximo' },
  { number: 24, suffix: '/7', label: 'Suporte' },
]

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const stepsRef = useRef(null)
  const testimonialsRef = useRef(null)
  const statsRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })
  const stepsInView = useInView(stepsRef, { once: true })
  const testimonialsInView = useInView(testimonialsRef, { once: true })
  const statsInView = useInView(statsRef, { once: true })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCTAClick = () => {
    window.open('http://quotex.tv.br/go/quotex', '_blank', 'noopener,noreferrer')
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16 lg:pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
          <div className="absolute inset-0 opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        {/* Hero Image */}
        <div className="absolute right-0 top-0 w-full sm:w-1/2 h-full opacity-10 sm:opacity-20 lg:opacity-40">
          <div className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Trading Platform Interface"
              fill
              className="object-cover object-left"
              priority
            />
          </div>
        </div>

        <div className="relative z-10 container py-12 sm:py-20">
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
                  <span className="gradient-text">Quotex Brasil:</span>
                  <br />
                  Sua Plataforma de{' '}
                  <span className="gradient-text">Trading Digital</span> de Confiança
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-body-lg text-muted-foreground font-medium"
                >
                  Negocie com mais de 410 ativos globais e comece com apenas R$ 5
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-body text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                >
                  A Quotex é a plataforma de trading digital mais inovadora do Brasil, 
                  oferecendo uma experiência única para traders iniciantes e experientes. 
                  Com tecnologia de ponta, execução instantânea e suporte 24/7 em português.
                </motion.p>
              </div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-3"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={heroInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="flex items-center space-x-3 justify-center lg:justify-start"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm sm:text-base">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  onClick={handleCTAClick}
                  size="lg"
                  className="btn-primary group"
                >
                  <span className="hidden sm:inline">Comece a Negociar Agora</span>
                  <span className="sm:hidden">Começar Agora</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button
                  onClick={handleCTAClick}
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="hidden sm:inline">Conta Demo Gratuita</span>
                  <span className="sm:hidden">Demo Grátis</span>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mt-8 lg:mt-0"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <Card className="card-hover bg-card/50 backdrop-blur-sm border-primary/20">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-2">
                        <CountUp end={stat.number} suffix={stat.suffix} />
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Por Que Escolher a <span className="gradient-text">Quotex Brasil?</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Descubra os diferenciais que fazem da Quotex a escolha preferida 
              de mais de 1 milhão de traders em todo o mundo.
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
      <section ref={stepsRef} className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Comece em <span className="gradient-text">3 Passos Simples</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Sua jornada no trading digital começa aqui. Siga estes passos 
              simples e comece a negociar em minutos.
            </p>
          </motion.div>

          <div className="grid-responsive-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="text-center relative"
              >
                {/* Connection Line - Hidden on mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 transform -translate-x-1/2" />
                )}
                
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-lg sm:text-2xl font-bold text-background">
                    {step.number}
                  </div>
                  <h3 className="heading-sm mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-body text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-8 sm:mt-12"
          >
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="btn-primary group"
            >
              Começar Agora
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Depoimentos de <span className="gradient-text">Traders Brasileiros</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Veja o que nossos traders estão dizendo sobre sua experiência 
              com a Quotex Brasil.
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
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Pronto para Transformar sua{' '}
              <span className="gradient-text">Vida Financeira?</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
              Junte-se a milhares de brasileiros que já descobriram o potencial 
              do trading digital com a Quotex. Sua jornada de sucesso começa agora.
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
              ⚠️ Trading envolve riscos. Negocie com responsabilidade.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
