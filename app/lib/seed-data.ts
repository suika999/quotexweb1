
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function seedDatabase() {
  try {
    // Seed testimonials
    const testimonials = [
      {
        name: 'Maria Silva',
        location: 'São Paulo',
        content: 'A Quotex mudou minha vida financeira. Em 6 meses, consegui resultados que nunca imaginei possíveis. A plataforma é intuitiva e o suporte é excepcional.',
        rating: 5,
        featured: true,
      },
      {
        name: 'João Santos',
        location: 'Rio de Janeiro',
        content: 'Como iniciante, a conta demo foi fundamental. Pratiquei por semanas antes de investir dinheiro real. Hoje sou um trader consistente graças à Quotex.',
        rating: 5,
        featured: true,
      },
      {
        name: 'Ana Costa',
        location: 'Belo Horizonte',
        content: 'O que mais me impressiona é a velocidade de execução. Nunca perco uma operação por atraso na plataforma. Recomendo para todos os traders sérios.',
        rating: 5,
        featured: true,
      },
      {
        name: 'Carlos Oliveira',
        location: 'Brasília',
        content: 'Excelente plataforma para quem está começando. O suporte em português faz toda a diferença. Consegui meus primeiros lucros em poucas semanas.',
        rating: 5,
        featured: false,
      },
      {
        name: 'Fernanda Lima',
        location: 'Salvador',
        content: 'A variedade de ativos é impressionante. Posso diversificar meus investimentos facilmente. A interface é muito amigável e fácil de usar.',
        rating: 5,
        featured: false,
      },
    ]

    for (const testimonial of testimonials) {
      await prisma.testimonial.upsert({
        where: { 
          id: `${testimonial.name}-${testimonial.location}`.toLowerCase().replace(/\s+/g, '-')
        },
        update: testimonial,
        create: {
          ...testimonial,
          id: `${testimonial.name}-${testimonial.location}`.toLowerCase().replace(/\s+/g, '-')
        },
      })
    }

    // Seed blog posts
    const blogPosts = [
      {
        title: 'Como Começar no Trading Digital: Guia Completo para Brasileiros',
        slug: 'como-comecar-trading-digital-brasileiros',
        excerpt: 'O trading digital tem se tornado cada vez mais popular no Brasil. Descubra como começar sua jornada no mundo dos investimentos digitais com segurança.',
        content: 'Conteúdo completo do artigo sobre como começar no trading digital...',
        author: 'Equipe Quotex',
        category: 'Iniciantes',
        tags: ['trading', 'iniciantes', 'brasil', 'guia'],
        published: true,
        featured: true,
        imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      },
      {
        title: 'Análise Técnica vs Fundamentalista: Qual Escolher?',
        slug: 'analise-tecnica-vs-fundamentalista',
        excerpt: 'Entenda as diferenças entre análise técnica e fundamentalista e descubra qual abordagem se adapta melhor ao seu perfil de trader.',
        content: 'Conteúdo completo sobre análise técnica vs fundamentalista...',
        author: 'Carlos Silva',
        category: 'Estratégias',
        tags: ['análise técnica', 'análise fundamentalista', 'estratégias'],
        published: true,
        featured: true,
        imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      },
      {
        title: 'Gestão de Risco: Como Proteger Seu Capital',
        slug: 'gestao-risco-proteger-capital',
        excerpt: 'A gestão de risco é fundamental para o sucesso no trading. Aprenda técnicas essenciais para proteger seu capital e maximizar seus lucros.',
        content: 'Conteúdo completo sobre gestão de risco...',
        author: 'Ana Costa',
        category: 'Gestão de Risco',
        tags: ['gestão de risco', 'capital', 'proteção'],
        published: true,
        featured: false,
        imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      },
    ]

    for (const post of blogPosts) {
      await prisma.blogPost.upsert({
        where: { slug: post.slug },
        update: post,
        create: post,
      })
    }

    console.log('Database seeded successfully!')
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

// Add unique constraint to testimonials
export async function addUniqueConstraints() {
  try {
    // This would be handled by Prisma migrations in a real app
    console.log('Unique constraints would be added via Prisma migrations')
  } catch (error) {
    console.error('Error adding constraints:', error)
  }
}
