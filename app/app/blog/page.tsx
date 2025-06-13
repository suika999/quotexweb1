
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Calendar,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter,
  Clock,
  TrendingUp,
  BookOpen,
  Target
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// Mock blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'Como Começar no Trading Digital: Guia Completo para Brasileiros',
    slug: 'como-comecar-trading-digital-brasileiros',
    excerpt: 'O trading digital tem se tornado cada vez mais popular no Brasil. Descubra como começar sua jornada no mundo dos investimentos digitais com segurança.',
    content: '',
    author: 'Equipe Quotex',
    category: 'Iniciantes',
    tags: ['trading', 'iniciantes', 'brasil', 'guia'],
    published: true,
    featured: true,
    imageUrl: 'https://thumbs.dreamstime.com/b/financial-trader-analyzing-multiple-monitors-data-charts-focused-stands-several-computer-displaying-various-colorful-337285030.jpg',
    createdAt: '2025-06-10',
    readTime: '8 min',
  },
  {
    id: '2',
    title: 'Análise Técnica vs Fundamentalista: Qual Escolher?',
    slug: 'analise-tecnica-vs-fundamentalista',
    excerpt: 'Entenda as diferenças entre análise técnica e fundamentalista e descubra qual abordagem se adapta melhor ao seu perfil de trader.',
    content: '',
    author: 'Carlos Silva',
    category: 'Estratégias',
    tags: ['análise técnica', 'análise fundamentalista', 'estratégias'],
    published: true,
    featured: true,
    imageUrl: 'https://lh4.googleusercontent.com/7hCvh30FUouvJdpWJ2aFZhkNV2kgS4qzFabupwRTM4gt2te6n2a2emE6nq7z4v8YF3_sPNw-ov7TYXPt5SnCUQAU791SfGxa1a_7XR-v19DIR42xBSFpdpiCmtH7tZegcHcsH7bHCgvCiwTceRqrNg',
    createdAt: '2025-06-09',
    readTime: '6 min',
  },
  {
    id: '3',
    title: 'Gestão de Risco: Como Proteger Seu Capital',
    slug: 'gestao-risco-proteger-capital',
    excerpt: 'A gestão de risco é fundamental para o sucesso no trading. Aprenda técnicas essenciais para proteger seu capital e maximizar seus lucros.',
    content: '',
    author: 'Ana Costa',
    category: 'Gestão de Risco',
    tags: ['gestão de risco', 'capital', 'proteção'],
    published: true,
    featured: false,
    imageUrl: 'https://thumbs.dreamstime.com/b/risk-management-concept-idea-business-strategy-financial-protection-money-safety-set-colorful-icons-isolated-flat-vector-137830417.jpg',
    createdAt: '2025-06-08',
    readTime: '10 min',
  },
  {
    id: '4',
    title: 'Psicologia do Trading: Controlando Emoções',
    slug: 'psicologia-trading-controlando-emocoes',
    excerpt: 'O aspecto psicológico é crucial no trading. Descubra como controlar emoções como medo e ganância para tomar decisões mais assertivas.',
    content: '',
    author: 'Dr. Roberto Lima',
    category: 'Psicologia',
    tags: ['psicologia', 'emoções', 'disciplina'],
    published: true,
    featured: false,
    imageUrl: 'https://i.pinimg.com/originals/93/ba/bc/93babc354b92c2cb1b0eda86d69e7ae3.jpg',
    createdAt: '2025-06-07',
    readTime: '7 min',
  },
  {
    id: '5',
    title: 'Melhores Horários para Trading de Forex',
    slug: 'melhores-horarios-trading-forex',
    excerpt: 'Timing é tudo no forex. Conheça os melhores horários para negociar pares de moedas e maximize suas oportunidades de lucro.',
    content: '',
    author: 'Maria Santos',
    category: 'Forex',
    tags: ['forex', 'horários', 'sessões'],
    published: true,
    featured: false,
    imageUrl: 'https://i.pinimg.com/originals/d4/28/05/d42805c7a6a253df440136fe5e683611.png',
    createdAt: '2025-06-06',
    readTime: '5 min',
  },
  {
    id: '6',
    title: 'Criptomoedas: Oportunidades e Riscos no Trading',
    slug: 'criptomoedas-oportunidades-riscos-trading',
    excerpt: 'O mercado de criptomoedas oferece grandes oportunidades, mas também riscos elevados. Aprenda a navegar neste mercado volátil.',
    content: '',
    author: 'João Pedro',
    category: 'Criptomoedas',
    tags: ['criptomoedas', 'bitcoin', 'volatilidade'],
    published: true,
    featured: false,
    imageUrl: 'https://i.pinimg.com/originals/c3/37/47/c33747d66f9de9afd164fe031d042bf0.jpg',
    createdAt: '2025-06-05',
    readTime: '9 min',
  },
]

const categories = ['Todos', 'Iniciantes', 'Estratégias', 'Gestão de Risco', 'Psicologia', 'Forex', 'Criptomoedas']

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  const heroRef = useRef(null)
  const featuredRef = useRef(null)
  const postsRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const featuredInView = useInView(featuredRef, { once: true })
  const postsInView = useInView(postsRef, { once: true })

  useEffect(() => {
    let filtered = blogPosts

    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }, [searchTerm, selectedCategory])

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen pt-14 sm:pt-16 lg:pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="heading-xl mb-4 sm:mb-6">
              Blog <span className="gradient-text">Quotex</span>
            </h1>
            <p className="text-body-lg text-muted-foreground max-w-4xl mx-auto">
              Conhecimento e Estratégias para Traders
            </p>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto mt-4">
              Mantenha-se atualizado com as últimas tendências, estratégias e 
              insights do mundo do trading digital.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16 max-w-2xl mx-auto"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48 h-12">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section ref={featuredRef} className="section-padding bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={featuredInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8 sm:mb-12"
            >
              <h2 className="heading-lg mb-4 sm:mb-6">
                Artigos em <span className="gradient-text">Destaque</span>
              </h2>
            </motion.div>

            <div className="grid-responsive-2">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="card-hover h-full bg-card border-primary/10 overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                          Destaque
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Tag className="w-4 h-4" />
                          <span>{post.category}</span>
                        </div>
                      </div>
                      
                      <h3 className="heading-sm mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-body text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{post.author}</span>
                        </div>
                        
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm" className="group">
                            Ler mais
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section ref={postsRef} className="section-padding">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={postsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="heading-lg mb-4 sm:mb-6">
              Todos os <span className="gradient-text">Artigos</span>
            </h2>
            {filteredPosts.length === 0 && (
              <p className="text-muted-foreground">
                Nenhum artigo encontrado com os filtros selecionados.
              </p>
            )}
          </motion.div>

          {regularPosts.length > 0 && (
            <div className="grid-responsive-3">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={postsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="card-hover h-full bg-card border-primary/10 overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-body text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{post.author}</span>
                        </div>
                        
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm" className="group">
                            Ler
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-background" />
            </div>
            <h2 className="heading-lg mb-4 sm:mb-6">
              Continue <span className="gradient-text">Aprendendo</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
              Quer se manter atualizado com as últimas estratégias e insights de trading? 
              Pratique na nossa plataforma e acompanhe nosso blog regularmente.
            </p>
            
            <Button
              onClick={() => window.open('http://quotex.tv.br/go/quotex', '_blank', 'noopener,noreferrer')}
              size="lg"
              className="btn-primary group"
            >
              Começar a Praticar
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
