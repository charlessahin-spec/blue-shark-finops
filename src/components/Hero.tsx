import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/bluesharkconsulting/30min'});
    }
  };

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--navy)/0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
            Optimisation Fiscale & Sociale{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Sur-Mesure
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
            Accompagnement complet pour réduire vos charges, simplifier votre gestion et sécuriser votre situation juridique. Service exclusif destiné aux entrepreneurs, freelances et dirigeants.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 px-2">
            <Button
              size="lg"
              onClick={openCalendly}
              className="group shadow-premium hover:shadow-gold transition-all duration-300 bg-gradient-premium hover:scale-105 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              Réserver un appel stratégique
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="inline-block bg-card rounded-2xl px-6 sm:px-8 py-3 sm:py-4 shadow-card mx-2">
            <p className="text-muted-foreground text-xs sm:text-sm">
              <span className="font-semibold text-foreground">Réduction moyenne :</span> 12 000€ / an d'impôts et cotisations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
