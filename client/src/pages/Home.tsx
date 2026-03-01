import { Link } from "wouter";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  CheckCircle2, 
  BarChart3,
  Globe2,
  Zap
} from "lucide-react";

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8"
            >
              <Zap className="w-4 h-4" />
              <span>Next-Gen Enterprise Solutions</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Accelerate Your <span className="text-gradient">Digital</span> Transformation
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              ElevateTech Solutions delivers scalable cloud infrastructure, AI-powered automation, and robust cybersecurity to future-proof your business.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 h-14 rounded-xl border-2 hover:bg-secondary transition-all">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners/Social Proof */}
      <section className="py-10 border-y border-border bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Logos represented by stylized text for the demo */}
            <h3 className="text-2xl font-bold font-serif">Acme Corp</h3>
            <h3 className="text-2xl font-bold font-sans tracking-tighter">GLOBAL<span className="text-primary">NET</span></h3>
            <h3 className="text-2xl font-bold font-mono">TechFlow</h3>
            <h3 className="text-2xl font-bold italic">Innovate.io</h3>
            <h3 className="text-2xl font-bold">Nexus</h3>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade Solutions</h2>
            <p className="text-lg text-muted-foreground">Comprehensive technology services designed to scale with your ambition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Cloud, title: "Cloud Architecture", desc: "Scalable, resilient cloud infrastructure tailored to your operational needs." },
              { icon: Cpu, title: "AI & Automation", desc: "Intelligent systems that streamline workflows and unlock data insights." },
              { icon: ShieldCheck, title: "Cybersecurity", desc: "Advanced threat protection and compliance management for enterprise data." },
              { icon: Code2, title: "Custom Software", desc: "Bespoke applications engineered for performance and user experience." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border border-border/50 shadow-lg shadow-slate-200/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-24 bg-slate-50 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why partner with ElevateTech?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just write code; we build strategic assets. Our methodology ensures that every solution we deploy directly impacts your bottom line.
              </p>
              
              <div className="space-y-6">
                {[
                  "Accelerated time-to-market with proven frameworks",
                  "Bank-grade security protocols standard on all deployments",
                  "Seamless integration with your existing tech stack",
                  "24/7 dedicated support and proactive maintenance"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <p className="text-foreground font-medium text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Abstract composition instead of an image */}
              <div className="aspect-square rounded-3xl overflow-hidden glass-panel relative p-8 flex flex-col justify-center gap-6">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />
                
                <Card className="relative z-10 border-none shadow-xl transform translate-x-4">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-foreground">System Uptime</p>
                      <p className="text-green-600 font-medium">99.999% Guaranteed</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="relative z-10 border-none shadow-xl transform -translate-x-4">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                      <Globe2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-foreground">Global Reach</p>
                      <p className="text-muted-foreground">Deployed in 14 regions</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Hear from the leaders who transformed their operations with us.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "ElevateTech completely overhauled our legacy systems in record time. Our operational efficiency has increased by 40%.", author: "Sarah Jenkins", role: "CTO, GlobalNet" },
              { quote: "Their AI implementation for our customer service pipeline paid for itself within three months. Exceptional engineering.", author: "Marcus Thorne", role: "Director of Operations, Nexus" },
              { quote: "The most professional, capable external tech team we've ever worked with. They feel like an extension of our own company.", author: "David Chen", role: "CEO, Innovate.io" }
            ].map((t, i) => (
              <Card key={i} className="bg-slate-50 border-none shadow-md">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-foreground italic mb-8">"{t.quote}"</p>
                  <div>
                    <p className="font-bold text-foreground">{t.author}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0" />
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Elevate Your Tech?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation with our solutions architects to discuss your specific challenges and goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 text-lg h-14 px-10 rounded-xl shadow-2xl">
              Get in Touch Today
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
