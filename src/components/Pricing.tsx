import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone, Clock, TrendingUp } from "lucide-react";

const offers = [
  {
    icon: Phone,
    title: "Appel Stratégique",
    price: "149€ HT",
    description: "Analyse approfondie et feuille de route personnalisée",
    features: [
      "45 minutes par visio",
      "Analyse fiscale / sociale / juridique",
      "Feuille de route personnalisée",
      "Recommandations concrètes"
    ],
    cta: "Réserver mon appel",
    popular: true
  },
  {
    icon: Clock,
    title: "Accompagnement Premium",
    price: "À partir de 899€ HT",
    description: "Optimisation complète et mise en place des stratégies",
    features: [
      "Optimisation fiscale complète",
      "Mise en place des stratégies",
      "Réponses illimitées par écrit",
      "Mise en conformité totale",
      "Suivi personnalisé"
    ],
    cta: "Démarrer l'accompagnement",
    popular: false
  },
  {
    icon: TrendingUp,
    title: "Accompagnement Mensuel",
    price: "289€ HT / mois",
    description: "Suivi continu et optimisation en temps réel",
    features: [
      "Suivi continu personnalisé",
      "Ajustements & optimisation en temps réel",
      "Priorité de traitement",
      "Conseils illimités",
      "Résiliation à tout moment"
    ],
    cta: "S'abonner maintenant",
    popular: false
  }
];

const Pricing = () => {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/bluesharkconsulting/30min'});
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nos Offres Premium
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choisissez l'accompagnement adapté à vos besoins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <Card
                key={index}
                className={`relative flex flex-col shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1 animate-scale-in ${
                  offer.popular ? "border-secondary border-2" : "border-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {offer.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-secondary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-gold">
                    Recommandé
                  </div>
                )}
                
                <CardHeader className="pb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-premium flex items-center justify-center mb-4 shadow-premium">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{offer.title}</CardTitle>
                  <div className="text-4xl font-bold text-foreground mb-3">{offer.price}</div>
                  <CardDescription className="text-base">{offer.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <ul className="space-y-4">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-8">
                  <Button
                    className="w-full text-base py-6"
                    variant={offer.popular ? "default" : "outline"}
                    onClick={openCalendly}
                  >
                    {offer.cta}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
