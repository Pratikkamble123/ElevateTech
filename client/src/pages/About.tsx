import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Zap, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="pt-20 pb-16 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About <span className="text-primary">ElevateTech</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We are a team of visionary engineers, designers, and strategists dedicated to pushing the boundaries of enterprise technology.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To democratize access to enterprise-grade technology. We believe that robust cloud infrastructure, advanced security, and AI automation shouldn't be reserved exclusively for Fortune 500 giants. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We empower growing businesses with the tools they need to compete on a global scale.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Zap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A digital landscape where technology acts as an invisible, flawless catalyst for human creativity and business growth, rather than a hurdle to overcome.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision building systems so reliable and intuitive that our clients can focus entirely on their core mission.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-slate-50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Decades of combined experience in software engineering, cloud architecture, and product design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alexandra Vance",
                role: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop",
                desc: "Former VP of Engineering at major tech firms, Alex founded ElevateTech to bridge the gap between enterprise capabilities and mid-market needs."
              },
              {
                name: "Marcus Chen",
                role: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop",
                desc: "A pioneer in distributed systems and AI implementation. Marcus holds multiple patents in machine learning algorithms."
              },
              {
                name: "Elena Rodriguez",
                role: "Head of Product",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop",
                desc: "Obsessed with user experience. Elena ensures that our complex technical solutions remain intuitive and accessible."
              }
            ].map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-lg group">
                  <div className="aspect-square overflow-hidden relative">
                    {/* professional headshots */}
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          </div>

          <div className="space-y-12">
            {[
              { year: "2020", title: "Company Founded", desc: "ElevateTech was established with a core team of 5 engineers in a small office." },
              { year: "2021", title: "Seed Funding & Growth", desc: "Secured $3.2M in seed funding. Launched our proprietary Cloud migration framework." },
              { year: "2022", title: "Enterprise Expansion", desc: "Signed our first 10 Fortune 500 clients. Expanded operations to Europe." },
              { year: "2023", title: "Series A & AI Launch", desc: "Raised $15M Series A. Launched our specialized Enterprise AI automation division." },
              { year: "2024", title: "Industry Recognition", desc: "Named 'Top B2B Tech Innovator'. Team grew to over 150 global experts." }
            ].map((item, i) => (
              <div key={item.year} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 md:gap-8 items-center">
                  <div className="hidden md:block md:col-span-1 text-right">
                    <span className="text-2xl font-bold text-primary">{item.year}</span>
                  </div>
                  
                  {/* Node */}
                  <div className="absolute left-0 md:left-auto md:col-span-1 flex justify-center w-8 md:w-full top-1 md:top-auto">
                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 z-10" />
                    {i !== 4 && (
                      <div className="absolute top-4 left-1.5 md:left-1/2 w-1 h-32 md:h-24 bg-border -translate-x-1/2" />
                    )}
                  </div>

                  <div className="md:col-span-3">
                    <div className="md:hidden text-primary font-bold text-xl mb-1">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
