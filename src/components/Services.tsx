import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, Calendar, TrendingUp, Shield } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Call Fiscal – Disponible Aujourd'hui",
    price: "149€",
    description: "Analyse approfondie de votre situation fiscale",
    features: [
      "45 minutes d'analyse approfondie",
      "Optimisation IR + URSSAF",
      "Plan PDF remis en 24h",
      "Recommandations personnalisées",
    ],
    cta: "Réserver un call aujourd'hui",
    popular: false,
  },
  {
    icon: Calendar,
    title: "Accompagnement 1 Mois",
    price: "490€",
    description: "Optimisation fiscale complète et mise en place",
    features: [
      "Optimisation complète IR/URSSAF",
      "Mise en place des stratégies",
      "Support illimité pendant 1 mois",
      "Suivi personnalisé hebdomadaire",
    ],
    cta: "Commencer l'accompagnement",
    popular: true,
  },
  {
    icon: TrendingUp,
    title: "Accompagnement 3 Mois",
    price: "1290€",
    description: "Structuration complète et suivi stratégique",
    features: [
      "Optimisation IR / URSSAF / Revenus pro",
      "Structuration SAS, Holding, SCI",
      "Suivi stratégique trimestriel",
      "Support prioritaire illimité",
    ],
    cta: "Démarrer sur 3 mois",
    popular: false,
  },
  {
    icon: Shield,
    title: "FISCAL CLUB - Abonnement Mensuel",
    price: "29€/mois",
    description: "Restez à jour avec l'optimisation fiscale",
    features: [
      "Analyses fiscales hebdomadaires",
      "Mini-formations exclusives",
      "Modèles juridiques",
      "Alerte fiscale en temps réel",
      "Réponses prioritaires",
    ],
    cta: "Rejoindre le Club",
    popular: false,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nos Services Premium
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions sur-mesure pour optimiser votre fiscalité et structurer votre patrimoine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`relative flex flex-col shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1 animate-scale-in ${
                  service.popular ? "border-primary border-2" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Le plus populaire
                  </div>
                )}
                
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">{service.price}</div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={service.popular ? "default" : "outline"}
                  >
                    {service.cta}
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

export default Services;
