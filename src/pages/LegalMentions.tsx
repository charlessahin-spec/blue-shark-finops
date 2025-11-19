import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const LegalMentions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <img src={logo} alt="Blue Shark Consulting" className="h-10 sm:h-12 w-auto" />
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Mentions Légales</h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informations légales</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site <strong>Blue Shark Consulting</strong> est détenu et exploité par :
              </p>
              <div className="bg-card border border-border rounded-lg p-6 my-4">
                <p className="text-foreground mb-2"><strong>Raison sociale :</strong> SACONSEIL</p>
                <p className="text-foreground mb-2"><strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)</p>
                <p className="text-foreground mb-2"><strong>Capital social :</strong> 100 €</p>
                <p className="text-foreground mb-2"><strong>Siège social :</strong> CS 48756, 58 RUE DE MONCEAU, 75008 PARIS</p>
                <p className="text-foreground mb-2"><strong>RCS :</strong> Paris 941 024 366</p>
                <p className="text-foreground"><strong>Représentée par :</strong> M. Emirhan Sahin, Président</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Publication</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le directeur de la publication du site est M. Emirhan Sahin, en sa qualité de Président de la société SACONSEIL.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Hébergement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site est hébergé par Lovable.dev, accessible à l'adresse lovable.dev.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed">
                L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, etc.) 
                est la propriété exclusive de SACONSEIL, à l'exception des marques, logos ou contenus appartenant 
                à d'autres sociétés partenaires ou auteurs.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication, 
                même partielle, de ces différents éléments est strictement interdite sans l'accord exprès 
                par écrit de SACONSEIL.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Données personnelles</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les informations recueillies via les formulaires de contact et de réservation sont 
                destinées à SACONSEIL pour le traitement de votre demande et la gestion de la relation client.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au 
                Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, 
                de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse : 58 RUE DE MONCEAU, 75008 PARIS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation de responsabilité</h2>
              <p className="text-muted-foreground leading-relaxed">
                SACONSEIL s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées 
                sur ce site, mais ne peut garantir l'exactitude, la précision ou l'exhaustivité des 
                informations mises à disposition.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                En conséquence, SACONSEIL décline toute responsabilité pour toute imprécision, inexactitude 
                ou omission portant sur des informations disponibles sur ce site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur et réaliser 
                des statistiques de visite. Vous pouvez désactiver l'utilisation de cookies en modifiant 
                les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Droit applicable</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige, 
                et à défaut d'accord amiable, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalMentions;
