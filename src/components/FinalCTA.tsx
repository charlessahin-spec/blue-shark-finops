import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/bluesharkconsulting/30min'});
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-premium">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-6 px-2">
            Prêt à optimiser votre fiscalité ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            Réservez votre appel stratégique dès aujourd'hui et découvrez combien vous pouvez économiser
          </p>
          <Button
            size="lg"
            onClick={openCalendly}
            className="group shadow-gold hover:shadow-xl transition-all duration-300 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 hover:scale-105 w-full sm:w-auto mx-2"
          >
            Réserver un appel stratégique
            <ArrowRight className="ml-2 h-5 sm:h-6 w-5 sm:w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-primary-foreground/70 text-xs sm:text-sm mt-4 sm:mt-6 px-2">
            Paiement sécurisé • Réponse en 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
