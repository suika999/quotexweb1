
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message, formType } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      )
    }

    const contactForm = await prisma.contactForm.create({
      data: {
        name,
        email,
        subject: subject || 'Contato via website',
        message,
        formType: formType || 'contact',
        status: 'new'
      }
    })

    return NextResponse.json(
      { 
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        id: contactForm.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating contact form:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente mais tarde.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const forms = await prisma.contactForm.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50
    })

    return NextResponse.json(forms)
  } catch (error) {
    console.error('Error fetching contact forms:', error)
    return NextResponse.json(
      { error: 'Failed to fetch contact forms' },
      { status: 500 }
    )
  }
}
