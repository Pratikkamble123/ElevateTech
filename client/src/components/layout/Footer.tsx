import { Link } from "wouter";
import { Hexagon, Twitter, Linkedin, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Hexagon className="w-8 h-8 text-primary fill-primary/20" />
              <span className="font-bold text-2xl tracking-tight text-white">
                Elevate<span className="text-primary">Tech</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering forward-thinking enterprises with next-generation cloud architecture and AI-driven solutions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-slate-900 hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-900 hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-900 hover:bg-primary hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Partners</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="hover:text-primary transition-colors">Cloud Migration</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">AI & Machine Learning</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Custom Software</Link></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <p className="text-slate-400 mb-4">
              Subscribe to our newsletter for the latest tech insights.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary transition-colors"
              />
              <Button type="submit" size="icon" className="shrink-0">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ElevateTech Solutions Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
