import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Shield, Users, Clock, Gavel, FileText } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/office-exterior.jpg" 
            alt="Firma Legal Del Bajío Office" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20">
          <div className="lg:col-span-7 text-white space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block border-l-4 border-chart-1 pl-4"
            >
              <span className="text-chart-1 font-display font-bold tracking-[0.2em] uppercase text-sm md:text-base">
                Pacto de Justicia
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-bold text-5xl md:text-7xl leading-tight"
            >
              Transformamos el <span className="text-transparent bg-clip-text bg-gradient-to-r from-chart-1 to-amber-200">Letargo Burocrático</span> en Acción Legal Decisiva
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed"
            >
              Somos el referente legal inquebrantable del Bajío. No somos un bufete tradicional, somos una fortaleza jurídica personalizada para proteger sus intereses con integridad intransigente.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/contacto">
                <Button className="bg-chart-1 hover:bg-chart-1/90 text-primary font-bold text-lg px-8 py-6 rounded-none border-2 border-chart-1 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,189,2,0.4)]">
                  AGENDAR CITA
                </Button>
              </Link>
              <Link href="/areas-practica">
                <Button variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white font-display tracking-wider text-lg px-8 py-6 rounded-none transition-all duration-300">
                  NUESTRAS ÁREAS
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:block relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative z-10"
            >
              <div className="absolute -inset-4 border-2 border-chart-1/30 z-0 translate-x-4 translate-y-4" />
              <img 
                src="/images/hero-lawyer-1.jpg" 
                alt="Abogado Profesional" 
                className="w-full h-auto shadow-2xl grayscale-[20%] contrast-125 relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Bento Grid Style */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-chart-1 font-display font-bold tracking-[0.2em] uppercase text-sm">Nuestros Pilares</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 text-primary">Valores Fundamentales</h2>
            <div className="w-24 h-1 bg-chart-1 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Card 1 - Large */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 row-span-1 bg-primary text-white p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Scale size={120} />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl mb-4 text-chart-1">Calidad Innegociable</h3>
                  <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                    Ejecución con un estándar de excelencia que supera las expectativas. Desde la preparación de un escrito hasta la argumentación en sala, cada detalle es revisado meticulosamente.
                  </p>
                </div>
                <div className="w-12 h-1 bg-chart-1 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-muted p-8 flex flex-col justify-between group border border-border hover:border-chart-1/50 transition-colors"
            >
              <Shield className="h-12 w-12 text-primary mb-4" />
              <div>
                <h3 className="font-display font-bold text-xl mb-3 text-primary">Profesionalismo Ético</h3>
                <p className="text-muted-foreground">
                  Actuación basada en la verdad y honestidad absoluta. Transparencia radical en cada paso del proceso.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 flex flex-col justify-between group border border-border hover:border-chart-1/50 transition-colors"
            >
              <Users className="h-12 w-12 text-chart-2 mb-4" />
              <div>
                <h3 className="font-display font-bold text-xl mb-3 text-primary">Atención Personalizada</h3>
                <p className="text-muted-foreground">
                  Tratamos cada expediente como único. Canal directo de comunicación y reportes de estatus mensuales.
                </p>
              </div>
            </motion.div>

            {/* Card 4 - Large */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 bg-white p-10 relative overflow-hidden group border border-border"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
                <div>
                  <h3 className="font-display font-bold text-2xl mb-4 text-primary">Compromiso 360°</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Dedicación total al objetivo del cliente. Nuestro compromiso va más allá del horario: se trata de una visión enfocada en preponderar el interés del cliente a solo llevar un asunto más.
                  </p>
                  <Link href="/nosotros">
                    <span className="inline-flex items-center text-primary font-bold hover:text-chart-2 transition-colors cursor-pointer group-hover:translate-x-2 duration-300">
                      CONOCE AL EQUIPO <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                </div>
                <div className="h-full w-full relative overflow-hidden hidden md:block">
                  <img 
                    src="/images/team-meeting.jpg" 
                    alt="Equipo Legal" 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-chart-2 font-display font-bold tracking-[0.2em] uppercase text-sm">Mapeo de Soluciones</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 text-primary">Áreas de Práctica</h2>
              <p className="mt-6 text-muted-foreground text-lg">
                Nuestros socios fundadores son expertos de renombre en sus respectivas ramas, fusionando la oralidad moderna con la solidez del derecho clásico.
              </p>
            </div>
            <Link href="/areas-practica">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 py-6 font-display tracking-wider">
                VER TODAS LAS ÁREAS
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Oralidad Familiar",
                desc: "Régimen de convivencias, divorcios, adopciones y protección del interés superior del menor.",
                icon: Users,
                image: "/images/consultation.jpg"
              },
              {
                title: "Derecho Civil",
                desc: "Recuperación de propiedades, juicios sucesorios, escrituración y rectificación de actas.",
                icon: FileText,
                image: "/images/hero-lawyer-2.jpg"
              },
              {
                title: "Derecho Mercantil",
                desc: "Cobranza de títulos de crédito, juicios ejecutivos y nulidad de cargos bancarios.",
                icon: Scale,
                image: "/images/office-exterior.jpg"
              },
              {
                title: "Derecho Laboral",
                desc: "Defensa ante despidos injustificados y asesoría a patrones para bajas y rescisiones.",
                icon: Clock,
                image: "/images/team-meeting.jpg"
              },
              {
                title: "Derecho Penal",
                desc: "Defensa especializada en delitos de alto impacto con estrategia y precisión técnica.",
                icon: Gavel,
                image: "/images/hero-lawyer-1.jpg"
              }
            ].map((area, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-background border border-border overflow-hidden hover:shadow-xl transition-all duration-500"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 relative">
                  <div className="absolute -top-8 right-8 bg-chart-1 p-4 shadow-lg">
                    <area.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 text-primary group-hover:text-chart-2 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {area.desc}
                  </p>
                  <Link href="/areas-practica">
                    <span className="inline-flex items-center text-sm font-bold text-primary uppercase tracking-wider hover:text-chart-1 transition-colors cursor-pointer">
                      Más Información <ArrowRight className="ml-2 h-3 w-3" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight">
            ¿Su patrimonio o libertad están en riesgo?
          </h2>
          <p className="text-xl text-white/80 mb-12 font-light">
            No deje su futuro al azar. Contrate una defensa estratégica, ética y contundente.
            La primera asesoría es el paso más importante hacia la solución.
          </p>
          <Link href="/contacto">
            <Button className="bg-chart-1 hover:bg-chart-1/90 text-primary font-bold text-xl px-12 py-8 rounded-none shadow-[0_0_30px_rgba(245,189,2,0.3)] hover:shadow-[0_0_50px_rgba(245,189,2,0.5)] transition-all duration-300 transform hover:-translate-y-1">
              AGENDAR ASESORÍA AHORA
            </Button>
          </Link>
          
        </div>
      </section>
    </Layout>
  );
}
