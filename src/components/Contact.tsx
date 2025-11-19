import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Prêt à optimiser votre fiscalité ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Réservez votre appel gratuit dès aujourd'hui et découvrez votre potentiel d'économies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-card hover:shadow-premium transition-all duration-300 animate-scale-in">
            <CardContent className="pt-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Réserver un appel gratuit
                </h3>
                <p className="text-muted-foreground">
                  Choisissez le créneau qui vous convient
                </p>
              </div>
              
              <div className="bg-muted/50 rounded-xl p-8 mb-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Calendly sera intégré ici
                </p>
                <Button className="w-full" size="lg">
                  Accéder au calendrier
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-premium transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Autres moyens de contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <a
                      href="mailto:contact@bluesharkconsulting.fr"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@bluesharkconsulting.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Téléphone</div>
                    <a
                      href="tel:+33123456789"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-4">Horaires d'ouverture</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="font-medium">9h - 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span className="font-medium">Sur rendez-vous</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="font-medium">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
