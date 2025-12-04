import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Shield, Award, Scale, Users } from "lucide-react";

export default function Nosotros() {
  const partners = [
    {
      name: "Lic. Jorge Alberto Rico Ramírez",
      role: "Socio Fundador - Área Mercantil",
      desc: "Especialista en cobranza de títulos de crédito y juicios ejecutivos. Su enfoque estratégico maximiza la recuperación de activos.",
      image: "/images/hero-lawyer-1.jpg"
    },
    {
      name: "Lic. Rolando David Martínez Castro",
      role: "Socio Fundador - Civil y Familiar",
      desc: "Experto en oralidad familiar y derecho civil. Combina la sensibilidad humana con la firmeza legal necesaria en casos delicados.",
      image: "/images/consultation.jpg"
    },
    {
      name: "Lic. Jessica Esmeralda Guerrero Negrete",
      role: "Socia Fundadora - Laboral (Trabajadores)",
      desc: "Defensora incansable de los derechos laborales, especializada en despidos injustificados y negociaciones justas.",
      image: "/images/hero-lawyer-2.jpg"
    },
    {
      name: "Lic. Carmen Beatriz Merino Sandoval",
      role: "Socia Fundadora - Laboral (Patrones)",
      desc: "Asesora estratégica para empresas, enfocada en la prevención de conflictos y el cumplimiento normativo laboral.",
      image: "/images/team-meeting.jpg"
    },
    {
      name: "Lic. Jesús Osbaldo Badillo Medina",
      role: "Socio Fundador - Penal",
      desc: "Litigante en delitos de alto impacto. Su rigor técnico y conocimiento del sistema penal acusatorio garantizan una defensa sólida.",
      image: "/images/hero-lawyer-1.jpg" // Reusing image for demo purposes
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 w-full h-full bg-[url('/images/office-exterior.jpg')] bg-cover bg-center mix-blend-overlay" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-chart-1 font-display font-bold tracking-[0.2em] uppercase text-sm">Nuestra Esencia</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl mt-4 mb-6">Más que un Bufete,<br/>un Pacto de Justicia</h1>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              Nacimos en 2022 con una misión clara: romper con el letargo burocrático y ofrecer una acción legal decisiva. Somos una firma de especialistas jóvenes, enérgicos y comprometidos con la excelencia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History & Philosophy */}
      <section className="py-24 bg-background">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 border-2 border-chart-1/30 z-0 -translate-x-4 -translate-y-4" />
            <img 
              src="/images/team-meeting.jpg" 
              alt="Fundadores de Firma Legal Del Bajío" 
              className="w-full h-auto shadow-2xl relative z-10 grayscale-[20%]"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display font-bold text-3xl text-primary mb-4">El Pacto de León</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Surgimos de una frustración compartida ante la lentitud y deshumanización de los procesos legales postpandemia. Cinco expertos decidimos fusionar nuestros caminos para crear una "Firma de Especialistas" que actuara con velocidad y solidez.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted p-6 border-l-4 border-chart-1">
                <Shield className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold text-primary mb-2">Fortaleza Jurídica</h3>
                <p className="text-sm text-muted-foreground">Protección integral y estrategia personalizada para cada caso.</p>
              </div>
              <div className="bg-muted p-6 border-l-4 border-chart-1">
                <Award className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold text-primary mb-2">Excelencia</h3>
                <p className="text-sm text-muted-foreground">Estándares que superan las expectativas en cada etapa procesal.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-chart-2 font-display font-bold tracking-[0.2em] uppercase text-sm">Liderazgo Experto</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 text-primary">Socios Fundadores</h2>
            <div className="w-24 h-1 bg-chart-1 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background group hover:shadow-xl transition-all duration-500 border border-border"
              >
                <div className="h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 text-center relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-chart-1 text-primary px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-md">
                    Socio Fundador
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary mb-2">{partner.name}</h3>
                  <p className="text-chart-2 font-medium text-sm mb-4 uppercase tracking-wide">{partner.role}</p>
                  <div className="w-8 h-0.5 bg-border mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {partner.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mascot Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-chart-1 font-display font-bold tracking-[0.2em] uppercase text-sm">Símbolo de Sabiduría</span>
            <h2 className="font-display font-bold text-4xl mt-4 mb-6">Lex, el Búho Real</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              En nuestros privados encontrará la figura del búho, emblema de la abogacía. Lex representa la sabiduría, el conocimiento profundo y la capacidad de ver con claridad donde otros solo ven oscuridad.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-chart-1 rounded-full" />
                <span className="text-white/90">Erudición y comprensión intelectual</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-chart-1 rounded-full" />
                <span className="text-white/90">Vigilancia constante y decidida</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 bg-chart-1 rounded-full" />
                <span className="text-white/90">Aplicación inteligente de la ley</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-sm">
              <Scale size={120} className="text-chart-1 opacity-80" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
