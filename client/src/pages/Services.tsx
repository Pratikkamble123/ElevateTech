import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  Code2, 
  ArrowRight,
  Database,
  Lock,
  Workflow,
  Smartphone
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "cloud",
      icon: Cloud,
      title: "Cloud Architecture & Migration",
      description: "Seamlessly transition your legacy systems to modern, scalable cloud environments (AWS, Azure, GCP). We architect resilient infrastructure that guarantees high availability and optimizes operational costs.",
      features: [
        { icon: Database, text: "Zero-downtime database migrations" },
        { icon: Workflow, text: "Microservices & Serverless design" },
        { icon: Lock, text: "Automated backup & disaster recovery" }
      ]
    },
    {
      id: "ai",
      icon: Cpu,
      title: "AI & Machine Learning Integration",
      description: "Harness the power of artificial intelligence to automate repetitive tasks, extract actionable insights from your data, and provide hyper-personalized experiences to your customers.",
      features: [
        { icon: Workflow, text: "Custom LLM training & deployment" },
        { icon: Database, text: "Predictive analytics pipelines" },
        { icon: Smartphone, text: "Intelligent chatbot interfaces" }
      ]
    },
    {
      id: "security",
      icon: ShieldCheck,
      title: "Enterprise Cybersecurity",
      description: "Protect your intellectual property and customer data with military-grade security protocols. We implement comprehensive threat detection, identity management, and compliance frameworks.",
      features: [
        { icon: Lock, text: "Zero-trust network architecture" },
        { icon: Database, text: "Real-time threat monitoring (SOC)" },
        { icon: ShieldCheck, text: "SOC2, HIPAA & GDPR compliance" }
      ]
    },
    {
      id: "software",
      icon: Code2,
      title: "Custom Software Engineering",
      description: "From complex enterprise resource planning systems to sleek customer-facing applications, our full-stack engineering team builds software that perfectly aligns with your specific business logic.",
      features: [
        { icon: Smartphone, text: "Cross-platform mobile apps" },
        { icon: Workflow, text: "High-performance web portals" },
        { icon: Code2, text: "Third-party API integrations" }
      ]
    }
  ];

  return (
    <PageLayout>
      {/* Header */}
      <section className="pt-20 pb-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Capabilities & <span className="text-primary">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            End-to-end technology solutions tailored for enterprises ready to scale, innovate, and secure their digital future.
          </motion.p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] rounded-3xl bg-slate-50 border border-border p-8 flex flex-col justify-center items-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
                    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-primary/5 to-transparent z-0" />
                    
                    <div className="relative z-10 w-24 h-24 rounded-2xl bg-white shadow-xl shadow-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                      <service.icon className="w-12 h-12" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="pt-4 space-y-4">
                    <h4 className="font-semibold text-foreground uppercase tracking-wider text-sm">Key Deliverables</h4>
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-border/50">
                        <div className="text-primary bg-primary/10 p-2 rounded-lg">
                          <feature.icon className="w-5 h-5" />
                        </div>
                        <span className="font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <Link href="/contact">
                      <Button className="rounded-xl shadow-md hover:shadow-lg transition-all group">
                        Discuss this service
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Our Delivery Methodology</h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2" />
            
            {[
              { num: "01", title: "Discovery", desc: "Deep dive into your business needs and current architecture." },
              { num: "02", title: "Strategy", desc: "Design a comprehensive blueprint and technology roadmap." },
              { num: "03", title: "Execution", desc: "Agile sprints with weekly deliverables and transparency." },
              { num: "04", title: "Optimization", desc: "Continuous monitoring, scaling, and performance tuning." },
            ].map((step, i) => (
              <div key={i} className="relative z-10 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white text-primary flex items-center justify-center text-2xl font-bold mx-auto shadow-xl">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-white/80 text-sm px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
