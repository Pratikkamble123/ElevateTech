import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams beginning their digital transformation.",
      price: "$99",
      period: "/month",
      features: [
        { name: "Up to 5 users", included: true },
        { name: "Basic Cloud Architecture", included: true },
        { name: "Standard Security Protocols", included: true },
        { name: "8/5 Email Support", included: true },
        { name: "Custom API Integrations", included: false },
        { name: "Dedicated Account Manager", included: false },
        { name: "AI Automation Tools", included: false },
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      description: "Complete toolkit for growing enterprises requiring scale.",
      price: "$299",
      period: "/month",
      features: [
        { name: "Up to 25 users", included: true },
        { name: "Advanced Cloud Architecture", included: true },
        { name: "Enterprise Security & Compliance", included: true },
        { name: "24/7 Priority Support", included: true },
        { name: "Custom API Integrations", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "AI Automation Tools", included: false },
      ],
      popular: true,
      cta: "Get Professional"
    },
    {
      name: "Enterprise",
      description: "Tailored solutions for large-scale operations and custom needs.",
      price: "Custom",
      period: "",
      features: [
        { name: "Unlimited users", included: true },
        { name: "Multi-region Cloud Deployment", included: true },
        { name: "Zero-Trust Security Framework", included: true },
        { name: "24/7 Dedicated Support (SLA)", included: true },
        { name: "Unlimited API Integrations", included: true },
        { name: "Dedicated Engineering Team", included: true },
        { name: "Custom AI Model Training", included: true },
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <PageLayout>
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Transparent <span className="text-primary">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16"
          >
            Invest in technology that pays for itself. Choose the plan that fits your operational scale.
          </motion.p>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="h-full relative"
              >
                <Card className={`h-full flex flex-col relative ${
                  plan.popular 
                    ? 'border-primary shadow-2xl shadow-primary/20 scale-105 z-10' 
                    : 'border-border/50 shadow-lg mt-4 lg:mt-0'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <span className="bg-primary text-primary-foreground text-sm font-bold py-1 px-4 rounded-full uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="h-10 mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <div className="text-center mb-8">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    
                    <ul className="space-y-4 text-left">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-primary shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/30 shrink-0" />
                          )}
                          <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/50 line-through'}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="pb-8">
                    <Link href="/contact" className="w-full">
                      <Button 
                        variant={plan.popular ? "default" : "outline"} 
                        className={`w-full h-12 rounded-xl text-lg ${plan.popular ? 'shadow-lg shadow-primary/25 hover:shadow-xl' : ''}`}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-6">
            {[
              { q: "Can I upgrade my plan later?", a: "Absolutely. You can scale your plan up or down at any time. Changes are prorated for the remainder of your billing cycle." },
              { q: "Do you offer custom SLA agreements?", a: "Yes, our Enterprise tier includes custom Service Level Agreements tailored to your specific uptime and response time requirements." },
              { q: "How long does implementation take?", a: "Implementation timelines vary by scope. Starter packages deploy in days, while Enterprise architectures typically take 4-12 weeks." }
            ].map((faq, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
