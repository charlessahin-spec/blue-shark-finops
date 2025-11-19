import { Building2, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Clients satisfaits",
  },
  {
    icon: TrendingUp,
    value: "6000€",
    label: "Économie moyenne",
  },
  {
    icon: Award,
    value: "15+",
    label: "Années d'expérience",
  },
  {
    icon: Building2,
    value: "100%",
    label: "Taux de satisfaction",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              À propos de{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Blue Shark Consulting
              </span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Blue Shark Consulting est un cabinet spécialisé dans l'optimisation fiscale et la structuration juridique pour entrepreneurs et dirigeants d'entreprise.
              </p>
              <p>
                Notre expertise couvre l'optimisation de l'impôt sur le revenu, la réduction des charges URSSAF, et la structuration patrimoniale via SAS, Holdings, et SCI.
              </p>
              <p>
                Nous accompagnons nos clients dans une démarche d'optimisation fiscale légale et pérenne, avec une approche sur-mesure adaptée à chaque situation.
              </p>
              <p className="text-sm italic text-muted-foreground/80 pt-4 border-t border-border">
                * Consultant fiscal et juridique (non avocat)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
