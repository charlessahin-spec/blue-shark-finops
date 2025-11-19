import { Shield, TrendingDown, FileCheck, HeadphonesIcon, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: TrendingDown,
    title: "Optimisation Fiscale & Sociale Personnalisée",
    description: "Stratégies sur-mesure adaptées à votre structure et votre situation"
  },
  {
    icon: Shield,
    title: "Sécurisation Juridique & Conformité",
    description: "Protection totale et conformité réglementaire garantie"
  },
  {
    icon: FileCheck,
    title: "Réduction de 12 000€ / an en moyenne",
    description: "Économies réelles sur vos impôts et cotisations URSSAF"
  },
  {
    icon: Building2,
    title: "Toutes Structures Accompagnées",
    description: "SASU, SAS, EURL, SARL, SCI - expertise complète"
  },
  {
    icon: HeadphonesIcon,
    title: "Gestion Simplifiée & Conseils Continus",
    description: "Accompagnement permanent pour optimiser votre situation"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-premium flex items-center justify-center mb-6 mx-auto shadow-premium">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
