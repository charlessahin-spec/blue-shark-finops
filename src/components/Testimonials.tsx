import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Dirigeante SAS",
    content: "Grâce à Blue Shark Consulting, j'ai économisé 5800€ en un an. Leur expertise en structuration fiscale est exceptionnelle.",
    rating: 5,
  },
  {
    name: "Thomas L.",
    role: "Entrepreneur",
    content: "-72% d'URSSAF en 2 mois. Un accompagnement professionnel et des résultats concrets. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Marie D.",
    role: "Consultante indépendante",
    content: "L'abonnement Fiscal Club est une mine d'or. Des informations précieuses et un support réactif. Excellent rapport qualité-prix.",
    rating: 5,
  },
  {
    name: "Pierre B.",
    role: "Directeur commercial",
    content: "La structuration de ma holding a été réalisée de manière impeccable. Un gain fiscal considérable et une sérénité retrouvée.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Témoignages Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez les résultats obtenus par nos clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-premium transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
