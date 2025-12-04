import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Instagram, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/areas-practica", label: "Áreas de Práctica" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-body text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Top Bar - Contact Info */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs md:text-sm hidden md:block border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3 text-chart-1" />
              <span>479-103-3505</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3 text-chart-1" />
              <span>jrsfirmalegaldelbajio@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/70">Lunes a Viernes: 9:00 - 19:00</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-chart-1 transition-colors">
              <Instagram className="h-3 w-3" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-chart-1 transition-colors">
              <Music className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-background/95 backdrop-blur-md border-border shadow-md py-2" : "bg-background py-4"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden">
                <img 
                  src="/images/logo.jpg" 
                  alt="Firma Legal Del Bajío Logo" 
                  className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg md:text-xl leading-none tracking-wide text-primary">
                  FIRMA LEGAL
                </span>
                <span className="font-display font-medium text-xs md:text-sm leading-none tracking-[0.2em] text-chart-1">
                  DEL BAJÍO
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span 
                  className={cn(
                    "text-sm font-medium uppercase tracking-widest cursor-pointer transition-all duration-300 hover:text-chart-1 relative group py-2",
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-0 h-[2px] bg-chart-1 transition-all duration-300 group-hover:w-full",
                    location === link.href ? "w-full" : ""
                  )} />
                </span>
              </Link>
            ))}
            <Link href="/contacto">
              <Button className="bg-primary hover:bg-primary/90 text-white font-display tracking-wider rounded-none px-6 border border-primary hover:border-chart-1 transition-all duration-300">
                AGENDAR CITA
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden animate-in slide-in-from-top-10 duration-300">
          <nav className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span 
                  className={cn(
                    "text-xl font-display font-bold uppercase tracking-widest cursor-pointer",
                    location === link.href ? "text-chart-1" : "text-primary"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contacto">
              <Button 
                className="w-full mt-4 bg-primary text-white rounded-none py-6 text-lg font-display"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AGENDAR CITA
              </Button>
            </Link>
          </nav>
        </div>
      )}

      {/* Page Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-chart-1">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/logo.jpg" 
                  alt="Logo Footer" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-white/70 text-sm leading-relaxed mt-4">
                Transformando el letargo burocrático en acción legal decisiva. Un pacto de justicia para el Bajío.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-chart-1 tracking-widest">ENLACES</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/70 hover:text-chart-1 transition-colors cursor-pointer text-sm uppercase tracking-wide">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-chart-1 tracking-widest">ÁREAS LEGALES</h3>
            <ul className="space-y-3">
              {["Oralidad Familiar", "Civil", "Mercantil", "Laboral", "Penal"].map((area) => (
                <li key={area}>
                  <Link href="/areas-practica">
                    <span className="text-white/70 hover:text-chart-1 transition-colors cursor-pointer text-sm">
                      {area}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-chart-1 tracking-widest">CONTACTO</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-chart-1 shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Calle Brillante #605, Fraccionamiento Guadalupe, León, Guanajuato, C.P. 37200
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-chart-1 shrink-0" />
                <span className="text-white/70 text-sm">479-103-3505</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-chart-1 shrink-0" />
                <span className="text-white/70 text-sm">jrsfirmalegaldelbajio@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs uppercase tracking-wider">
            © {new Date().getFullYear()} Firma Legal Del Bajío. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-chart-1 text-xs uppercase tracking-wider transition-colors">Aviso de Privacidad</a>
            <a href="#" className="text-white/40 hover:text-chart-1 text-xs uppercase tracking-wider transition-colors">Términos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
