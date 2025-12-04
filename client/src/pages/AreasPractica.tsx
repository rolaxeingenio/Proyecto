import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Scale, Users, Home, Briefcase, Gavel, FileText, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AreasPractica() {
  const areas = [
    {
      id: "familiar",
      title: "Oralidad Familiar",
      icon: Users,
      desc: "Protegemos el núcleo de la sociedad con sensibilidad y firmeza. Entendemos que detrás de cada expediente hay una familia reestructurándose.",
      services: [
        "Régimen de Convivencias (Privación): Ayudamos a restablecer o reajustar convivencias arbitrariamente privadas.",
        "Compensación por Matrimonio (Divorcio): Tramitamos compensaciones económicas de hasta el 50% de los bienes.",
        "Adopción por Pareja (Dirigida): Gestión de adopción por cónyuge o concubino legalmente."
      ],
      color: "bg-blue-50"
    },
    {
      id: "civil",
      title: "Derecho Civil",
      icon: Home,
      desc: "Defendemos su patrimonio y regularizamos su situación legal con precisión técnica. La certeza jurídica es nuestra prioridad.",
      services: [
        "Recuperación de Propiedades (Invasión): Juicios Reivindicatorios para recuperar posesión de inmuebles.",
        "Arreglo de Escrituras (Fallecimiento): Resolución de situaciones legales tras el deceso de un familiar.",
        "Rectificación de Acta de Nacimiento: Corrección de errores sustanciales mediante juicio.",
        "Formalización de Compraventa: Aseguramos la inscripción en el Registro Público de la Propiedad."
      ],
      color: "bg-slate-50"
    },
    {
      id: "mercantil",
      title: "Derecho Mercantil",
      icon: Scale,
      desc: "Recuperación efectiva de activos y protección contra abusos financieros. Actuamos con velocidad para asegurar el pago.",
      services: [
        "Cobranza de Títulos de Crédito: Recuperación de dinero adeudado a través de Juicio Ejecutivo Mercantil.",
        "Embargo Precautorio: Priorizamos el aseguramiento de bienes o cuentas para garantizar el pago.",
        "Nulidad de Cargos: Defensa a usuarios de servicios financieros por cargos no reconocidos."
      ],
      color: "bg-amber-50"
    },
    {
      id: "laboral",
      title: "Derecho Laboral",
      icon: Briefcase,
      desc: "Equilibrio justo en las relaciones de trabajo. Asesoramos tanto a trabajadores como a patrones con estricto apego a la ley.",
      services: [
        "Despido Injustificado: Representación para obtener el pago de la Indemnización Constitucional.",
        "Baja de Trabajadores (Patrones): Asesoría para rescisiones laborales sin responsabilidad patronal.",
        "Elaboración de Actas Administrativas: Documentación correcta para procesos de baja.",
        "Cálculo y Entrega de Finiquito: Gestión transparente de terminaciones laborales."
      ],
      color: "bg-gray-50"
    },
    {
      id: "penal",
      title: "Derecho Penal",
      icon: Gavel,
      desc: "Defensa técnica de alto nivel en situaciones críticas. Protegemos su libertad con conocimiento profundo del sistema acusatorio.",
      services: [
        "Delitos de Alto Impacto: Estrategia de defensa especializada.",
        "Asesoría a Víctimas: Acompañamiento para garantizar la reparación del daño.",
        "Audiencias de Control: Representación experta en todas las etapas procesales."
      ],
      color: "bg-slate-100"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-white py-20 border-b border-white/10">
        <div className="container mx-auto text-center">
          <span className="text-chart-1 font-display font-bold tracking-[0.2em] uppercase text-sm">Soluciones Integrales</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mt-4 mb-6">Áreas de Práctica</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
            Un enfoque multidisciplinario para resolver sus desafíos legales más complejos con precisión analítica y ejecución estratégica.
          </p>
        </div>
      </section>

      {/* Areas List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto space-y-24">
          {areas.map((area, index) => (
            <motion.div 
              key={area.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* Title Column */}
              <div className="lg:col-span-4 sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-primary text-white rounded-none shadow-lg">
                    <area.icon size={32} />
                  </div>
                  <h2 className="font-display font-bold text-3xl text-primary">{area.title}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 border-l-4 border-chart-1 pl-4">
                  {area.desc}
                </p>
                <Link href="/contacto">
                  <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-display tracking-wider rounded-none">
                    CONSULTAR UN CASO
                  </Button>
                </Link>
              </div>

              {/* Services Column */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {area.services.map((service, i) => (
                    <div 
                      key={i} 
                      className="bg-white p-8 border border-border hover:border-chart-1 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="h-6 w-6 text-chart-1 shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-primary text-lg mb-2 group-hover:text-chart-2 transition-colors">
                            {service.split(":")[0]}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {service.split(":")[1] || "Servicio especializado con atención personalizada."}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted border-t border-border">
        <div className="container mx-auto text-center max-w-3xl">
          <AlertCircle className="h-16 w-16 text-chart-1 mx-auto mb-6" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
            ¿No encuentra su problema en la lista?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            El derecho es vasto y cada caso es único. Contáctenos para una evaluación personalizada de su situación jurídica. Si no es nuestra especialidad, se lo diremos con honestidad absoluta.
          </p>
          <Link href="/contacto">
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 py-6 rounded-none shadow-xl">
              CONTACTAR AHORA
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
