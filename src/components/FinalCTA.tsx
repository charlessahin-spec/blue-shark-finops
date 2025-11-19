import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/bluesharkconsulting/30min'});
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-premium">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Prêt à optimiser votre fiscalité ?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Réservez votre appel stratégique dès aujourd'hui et découvrez combien vous pouvez économiser
          </p>
          <Button
            size="lg"
            onClick={openCalendly}
            className="group shadow-gold hover:shadow-xl transition-all duration-300 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-10 py-7 hover:scale-105"
          >
            Réserver mon appel stratégique - 149€ HT
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-primary-foreground/70 text-sm mt-6">
            Paiement sécurisé • Réponse en 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
