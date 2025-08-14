// Enhanced by AI on 2025-08-14T14:51:36.249Z
// Section: features
// Category: features

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"
import Link from "next/link"

export default function ParapharmacyFeatures() {
  const features = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Get your parapharmacy products delivered quickly and efficiently.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Our online store uses industry-standard encryption to protect your information.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Browse and shop our parapharmacy products on any device.",
      badge: "Design"
    },
    {
      icon: Globe,
      title: "Nationwide Shipping",
      description: "We ship our parapharmacy products across the country.",
      badge: "Infrastructure"
    },
    {
      icon: BarChart3,
      title: "Order Tracking",
      description: "Monitor the status of your parapharmacy orders in real-time.",
      badge: "Analytics"
    },
    {
      icon: Palette,
      title: "Branded Packaging",
      description: "Your parapharmacy products will arrive in custom branded packaging.",
      badge: "Customization"
    },
    {
      icon: Code2,
      title: "API Integration",
      description: "Easily integrate our parapharmacy store with your existing systems.",
      badge: "Developer"
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Our team is available 24/7 to assist with any questions or issues.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Privacy Focused",
      description: "We prioritize the privacy and security of your personal information.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Parapharmacy Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Parapharmacy Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Powerful features designed to help you build, grow, and scale your parapharmacy
            business with confidence and ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to start your parapharmacy business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Create Account
            </Link>
            <Link href="/products" className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}