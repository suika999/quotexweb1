
'use client'

import { motion } from 'framer-motion'
import { Star, User } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface TestimonialProps {
  testimonial: {
    name: string
    location: string
    content: string
    rating: number
  }
}

export default function TestimonialCard({ testimonial }: TestimonialProps) {
  return (
    <Card className="card-hover h-full bg-card border-primary/10">
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-current" />
          ))}
        </div>
        
        <p className="text-body text-muted-foreground mb-6 italic leading-relaxed">
          "{testimonial.content}"
        </p>
        
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-foreground text-sm sm:text-base truncate">
              {testimonial.name}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground truncate">
              {testimonial.location}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
