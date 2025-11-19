import { Calendar, Search, Settings, TrendingDown, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Réservation de l'appel",
    description: "Choisissez le créneau qui vous convient"
  },
  {
    icon: Search,
    title: "Audit complet",
    description: "Analyse approfondie de votre situation"
  },
  {
    icon: Settings,
    title: "Mise en place des solutions",
    description: "Implémentation des stratégies d'optimisation"
  },
  {
    icon: TrendingDown,
    title: "Réduction des charges",
    description: "Économies concrètes et sécurisation juridique"
  },
  {
    icon: RefreshCw,
    title: "Suivi mensuel",
    description: "Accompagnement continu si souhaité"
  }
];

const Process = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-muted-foreground">
            Un processus simple et efficace en 5 étapes
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border" style={{ width: '80%', marginLeft: '10%' }}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-premium flex items-center justify-center shadow-premium mx-auto relative z-10">
                      <Icon className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold shadow-gold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
