import { Card, CardContent } from "@/components/ui/card";
import { Award, TrendingUp } from "lucide-react";

const cases = [
  {
    title: "Entrepreneur en SASU",
    result: "10 800€ économisés",
    period: "la 1ère année"
  },
  {
    title: "Freelance",
    result: "14 300€ optimisés",
    period: "en charges sociales"
  },
  {
    title: "Gérant de société",
    result: "Contrat social et statut sécurisés",
    period: "conformité totale"
  }
];

const Proof = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-card mb-6">
            <Award className="w-5 h-5 text-secondary" />
            <span className="text-foreground font-semibold">4 ans d'expérience en conseil aux dirigeants</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Résultats Prouvés
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des économies réelles pour nos clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cases.map((item, index) => (
            <Card
              key={index}
              className="border-0 shadow-card hover:shadow-premium transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-8 text-center">
                <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-muted-foreground mb-3">{item.title}</h3>
                <p className="text-2xl font-bold text-foreground mb-1">{item.result}</p>
                <p className="text-sm text-muted-foreground">{item.period}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-premium rounded-2xl p-8 sm:p-12 text-center shadow-premium">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">12K€</p>
                <p className="text-primary-foreground/80 text-sm">Économie moyenne / an</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">40%</p>
                <p className="text-primary-foreground/80 text-sm">Réduction charges</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2">100%</p>
                <p className="text-primary-foreground/80 text-sm">Conformité</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
