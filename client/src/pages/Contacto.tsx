import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export default function Contacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Mensaje enviado correctamente", {
        description: "Nos pondremos en contacto con usted en menos de 24 horas.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/logo-reference.webp')] bg-no-repeat bg-right-bottom bg-contain -mr-20 -mb-20" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-chart-1 font-display font-bold tracking-[0.2em] uppercase text-sm">Comunicación Directa</span>
            <h1 className="font-display font-bold text-4xl md:text-6xl mt-4 mb-6">Inicie su Defensa Hoy</h1>
            <p className="text-xl text-white/70 font-light">
              La primera asesoría es el paso más importante. Contáctenos para recibir una evaluación honesta y estratégica de su caso.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="font-display font-bold text-3xl text-primary mb-8">Información de Contacto</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="bg-muted p-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-chart-1" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Ubicación Física</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Calle Brillante #605<br />
                      Fraccionamiento Guadalupe<br />
                      León, Guanajuato, C.P. 37200
                    </p>
                    <p className="text-sm text-chart-2 mt-2 italic">
                      Casa de dos plantas color café moca con portón de herrería negro mate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-muted p-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone className="h-6 w-6 text-chart-1" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Teléfonos</h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        <span className="font-bold text-primary">Oficina:</span> 479-103-3505
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-bold text-primary">Familiar y Civil:</span> 477-271-9724
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-bold text-primary">Mercantil y Penal:</span> 477-660-4364
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-muted p-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail className="h-6 w-6 text-chart-1" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Correo Electrónico</h3>
                    <p className="text-muted-foreground">jrsfirmalegaldelbajio@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="bg-muted p-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Clock className="h-6 w-6 text-chart-1" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">Horario de Atención</h3>
                    <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 19:00</p>
                    <p className="text-sm text-muted-foreground mt-1">Atención exclusivamente con cita previa.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 border-l-4 border-primary">
              <h3 className="font-display font-bold text-xl text-primary mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-chart-1" />
                Política de Transparencia
              </h3>
              <p className="text-primary/80 text-sm leading-relaxed mb-4">
                En Firma Legal Del Bajío practicamos la <strong>Transparencia Radical</strong>. No existen "costos ocultos". Desde la primera cita se le informará con claridad sobre los honorarios y gastos del proceso.
              </p>
              <div className="flex gap-4 mt-6">
                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                  <CheckCircle className="h-4 w-4 text-chart-1" /> Sin Jerga Legal
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                  <CheckCircle className="h-4 w-4 text-chart-1" /> Costos Claros
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 shadow-2xl border-t-4 border-chart-1 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-muted -z-10 translate-x-4 -translate-y-4" />
            
            <h2 className="font-display font-bold text-3xl text-primary mb-2">Solicitud de Cita</h2>
            <p className="text-muted-foreground mb-8">Complete el formulario y nos pondremos en contacto a la brevedad.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-primary uppercase tracking-wide">Nombre Completo</label>
                <Input id="name" required placeholder="Ingrese su nombre completo" className="bg-muted border-transparent focus:border-chart-1 rounded-none h-12" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-primary uppercase tracking-wide">Teléfono</label>
                  <Input id="phone" type="tel" required placeholder="10 dígitos" className="bg-muted border-transparent focus:border-chart-1 rounded-none h-12" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-primary uppercase tracking-wide">Correo Electrónico</label>
                  <Input id="email" type="email" required placeholder="ejemplo@correo.com" className="bg-muted border-transparent focus:border-chart-1 rounded-none h-12" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-primary uppercase tracking-wide">Resumen del Problema</label>
                <Textarea 
                  id="message" 
                  required 
                  placeholder="Ej: Necesito divorciarme y solicitar custodia / Mi terreno fue invadido..." 
                  className="bg-muted border-transparent focus:border-chart-1 rounded-none min-h-[150px] resize-none" 
                />
                <p className="text-xs text-muted-foreground text-right">Máximo dos líneas de texto</p>
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 rounded-none transition-all duration-300"
              >
                {isSubmitting ? "ENVIANDO..." : "ENVIAR SOLICITUD"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-muted relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.406638862656!2d-101.68239862496356!3d21.13623898053996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842887a765155555%3A0x5555555555555555!2sC.%20Brillante%20605%2C%20Guadalupe%2C%2037200%20Le%C3%B3n%2C%20Gto.!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: "grayscale(100%) contrast(1.2) opacity(0.8)" }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 pointer-events-none bg-primary/10 mix-blend-multiply" />
      </section>
    </Layout>
  );
}
