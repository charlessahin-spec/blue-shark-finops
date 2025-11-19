import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/bluesharkconsulting/30min'});
    }
  };

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--navy)/0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Optimisation Fiscale & Sociale{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Haut de Gamme
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Accompagnement complet pour réduire vos charges, simplifier votre gestion et sécuriser votre situation juridique. Service premium destiné aux entrepreneurs, freelances et dirigeants.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={openCalendly}
              className="group shadow-premium hover:shadow-gold transition-all duration-300 bg-gradient-premium hover:scale-105 text-lg px-8 py-6"
            >
              Réserver un appel stratégique - 149€ HT
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="inline-block bg-card rounded-2xl px-8 py-4 shadow-card">
            <p className="text-muted-foreground text-sm">
              <span className="font-semibold text-foreground">Réduction moyenne :</span> 12 000€ / an d'impôts et cotisations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
