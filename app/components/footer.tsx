
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TrendingUp, ExternalLink, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = [
  {
    title: 'Plataforma',
    links: [
      { name: 'Como Funciona', href: '/como-funciona' },
      { name: 'Conta Demo', href: '/demo' },
      { name: 'Estratégias', href: '/estrategias' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { name: 'Sobre Nós', href: '/sobre' },
      { name: 'Blog', href: '/blog' },
    ],
  },
]

const contactInfo = [
  {
    icon: Mail,
    text: 'suporte@quotex.ps',
    href: 'mailto:suporte@quotex.ps',
  },
  {
    icon: Phone,
    text: 'Suporte 24/7',
    href: '#',
  },
  {
    icon: MapPin,
    text: 'Brasil',
    href: '#',
  },
]

export default function Footer() {
  const handleCTAClick = () => {
    window.open('http://quotex.tv.br/go/quotex', '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sm:col-span-2 lg:col-span-2"
            >
              <Link href="/" className="flex items-center space-x-2 mb-6 group">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-background" />
                </div>
                <span className="text-xl font-bold gradient-text">
                  Quotex Brasil
                </span>
              </Link>
              
              <p className="text-muted-foreground mb-6 max-w-md text-sm sm:text-base">
                A plataforma de trading digital mais inovadora do Brasil. 
                Negocie com mais de 410 ativos globais com segurança e 
                suporte 24/7 em português.
              </p>

              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    {item.href === '#' ? (
                      <span>{item.text}</span>
                    ) : (
                      <Link href={item.href} className="hover:underline">{item.text}</Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
                viewport={{ once: true }}
                className="sm:col-span-1"
              >
                <h3 className="text-lg font-semibold mb-4 sm:mb-6">{section.title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: sectionIndex * 0.2 + linkIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm block py-1 touch-target"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-border"
        >
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Pronto para Começar a Negociar?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Junte-se a mais de 1 milhão de traders que confiam na Quotex. 
              Abra sua conta demo gratuita agora e comece a praticar sem riscos.
            </p>
            <motion.button
              onClick={handleCTAClick}
              className="btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="hidden sm:inline">Abrir Conta Demo Gratuita</span>
              <span className="sm:hidden">Conta Demo Gratuita</span>
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-6 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © 2025 Quotex Brasil. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center justify-center text-xs sm:text-sm text-muted-foreground">
              <span>
                ⚠️ Trading envolve riscos. Negocie com responsabilidade.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
