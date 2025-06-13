
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { 
  Shield, 
  Users, 
  Award, 
  TrendingUp, 
  Globe, 
  Clock,
  CheckCircle,
  ExternalLink,
  Target,
  Heart,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import CountUp from '@/components/count-up'

const values = [
  {
    icon: Shield,
    title: 'Segurança',
    description: 'Protegemos seus dados e investimentos com tecnologia de ponta e regulamentações rigorosas.',
  },
  {
    icon: Heart,
    title: 'Transparência',
    description: 'Operamos com total transparência, sem taxas ocultas e com informações claras sobre todos os processos.',
  },
  {
    icon: Zap,
    title: 'Inovação',
    description: 'Investimos constantemente em tecnologia para oferecer a melhor experiência de trading do mercado.',
  },
  {
    icon: Users,
    title: 'Suporte',
    description: 'Nossa equipe está disponível 24/7 para ajudar você a alcançar seus objetivos financeiros.',
  },
]

const achievements = [
  {
    number: 1000000,
    suffix: '+',
    label: 'Traders Ativos',
    description: 'Mais de 1 milhão de traders confiam na nossa plataforma',
  },
  {
    number: 410,
    suffix: '+',
    label: 'Ativos Disponíveis',
    description: 'Ampla variedade de instrumentos financeiros',
  },
  {
    number: 98,
    suffix: '%',
    label: 'Retorno Máximo',
    description: 'Retornos competitivos para maximizar seus lucros',
  },
  {
    number: 24,
    suffix: '/7',
    label: 'Suporte',
    description: 'Atendimento em português disponível sempre',
  },
]

const timeline = [
  {
    year: '2019',
    title: 'Fundação',
    description: 'A Quotex foi fundada com a missão de democratizar o acesso ao trading digital.',
  },
  {
    year: '2020',
    title: 'Expansão Global',
    description: 'Expandimos para mais de 100 países, incluindo o Brasil.',
  },
  {
    year: '2021',
    title: 'Inovação Tecnológica',
    description: 'Lançamos nossa plataforma mobile e melhoramos a velocidade de execução.',
  },
  {
    year: '2022',
    title: 'Crescimento no Brasil',
    description: 'Alcançamos mais de 100.000 traders brasileiros ativos.',
  },
  {
    year: '2023',
    title: 'Novos Recursos',
    description: 'Introduzimos análise técnica avançada e sinais de trading.',
  },
  {
    year: '2024',
    title: 'Liderança de Mercado',
    description: 'Nos tornamos a plataforma de trading digital mais popular do Brasil.',
  },
]

export default function SobrePage() {
  const heroRef = useRef(null)
  const valuesRef = useRef(null)
  const achievementsRef = useRef(null)
  const timelineRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const valuesInView = useInView(valuesRef, { once: true })
  const achievementsInView = useInView(achievementsRef, { once: true })
  const timelineInView = useInView(timelineRef, { once: true })
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
                  Sobre a <span className="gradient-text">Quotex Brasil</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-body-lg text-muted-foreground"
                >
                  Transformando o Trading Digital no Brasil
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-body text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                >
                  A Quotex é uma plataforma de trading digital inovadora que está revolucionando 
                  a forma como os brasileiros investem e negociam ativos financeiros. Com tecnologia 
                  de ponta, suporte especializado e uma interface intuitiva, oferecemos uma 
                  experiência única para traders de todos os níveis.
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
                  <span className="hidden sm:inline">Começar a Negociar</span>
                  <span className="sm:hidden">Começar</span>
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
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://i.pinimg.com/originals/e7/70/f0/e770f095b5b68af0f219b03c40bff852.jpg"
                  alt="Quotex Brasil Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Os princípios que guiam nossa missão de democratizar o trading digital no Brasil.
            </p>
          </motion.div>

          <div className="grid-responsive-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="card-hover h-full bg-card border-primary/10">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
                    </div>
                    <h3 className="heading-sm mb-3 sm:mb-4">{value.title}</h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Nossos <span className="gradient-text">Números</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              Resultados que demonstram nossa liderança no mercado brasileiro de trading digital.
            </p>
          </motion.div>

          <div className="grid-responsive-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={achievementsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="card-hover bg-card border-primary/10">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                      <CountUp end={achievement.number} suffix={achievement.suffix} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{achievement.label}</h3>
                    <p className="text-body text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="section-padding bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Nossa <span className="gradient-text">Jornada</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              A evolução da Quotex desde sua fundação até se tornar líder no Brasil.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-8 ${
                    index % 2 === 1 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-lg sm:text-xl font-bold text-background">
                        {item.year}
                      </span>
                    </div>
                  </div>
                  
                  <Card className="flex-1 bg-card border-primary/10">
                    <CardContent className="p-6 sm:p-8">
                      <h3 className="heading-sm mb-3">{item.title}</h3>
                      <p className="text-body text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="https://thumbs.dreamstime.com/b/diverse-business-professionals-working-together-looking-papers-office-charts-brainstorming-boosting-productivity-sitting-278705574.jpg"
                  alt="Equipe Quotex Brasil"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8 text-center lg:text-left order-1 lg:order-2"
            >
              <div className="space-y-4">
                <h2 className="heading-lg">
                  Nossa <span className="gradient-text">Missão</span>
                </h2>
                
                <p className="text-body-lg text-muted-foreground">
                  Democratizar o acesso ao trading digital no Brasil
                </p>

                <p className="text-body text-muted-foreground">
                  Acreditamos que todos os brasileiros devem ter acesso a ferramentas 
                  financeiras de qualidade para construir seu futuro. Nossa missão é 
                  tornar o trading digital acessível, seguro e lucrativo para pessoas 
                  de todos os perfis e níveis de experiência.
                </p>

                <div className="space-y-3">
                  {[
                    'Educação financeira de qualidade',
                    'Tecnologia acessível e intuitiva',
                    'Suporte especializado em português',
                    'Transparência em todas as operações'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 justify-center lg:justify-start"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-body text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
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
              Faça Parte da <span className="gradient-text">Nossa História</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
              Junte-se a mais de 1 milhão de traders que confiam na Quotex para 
              alcançar seus objetivos financeiros. Sua jornada de sucesso começa aqui.
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
