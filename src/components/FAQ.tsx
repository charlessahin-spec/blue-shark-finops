import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quelles sont les économies fiscales possibles ?",
    answer: "Selon votre situation, vous pouvez économiser jusqu'à 6000€ sur votre impôt sur le revenu et réduire vos charges URSSAF jusqu'à 80%. Chaque situation est unique, c'est pourquoi nous réalisons un audit personnalisé.",
  },
  {
    question: "Comment se déroule un accompagnement ?",
    answer: "L'accompagnement débute par un audit complet de votre situation. Ensuite, nous établissons ensemble une stratégie d'optimisation personnalisée. Nous vous accompagnons dans la mise en place de chaque action et assurons un suivi régulier pour maximiser vos résultats.",
  },
  {
    question: "Quels types de structures pouvez-vous optimiser ?",
    answer: "Nous intervenons sur tous types de structures : micro-entreprise, EURL, SARL, SAS, Holdings, SCI. Nous analysons votre situation actuelle et recommandons la structure la plus avantageuse fiscalement.",
  },
  {
    question: "L'optimisation fiscale est-elle légale ?",
    answer: "Absolument. Toutes nos stratégies sont 100% légales et conformes à la législation française. Nous appliquons les dispositifs fiscaux existants dans le cadre légal pour optimiser votre situation.",
  },
  {
    question: "Quel est le délai pour voir des résultats ?",
    answer: "Les premiers résultats sont généralement visibles dès le premier mois. Pour une optimisation complète avec restructuration, comptez 2 à 3 mois. Le call fiscal initial vous donne déjà un plan d'action en 24h.",
  },
  {
    question: "Que comprend l'abonnement Fiscal Club ?",
    answer: "Le Fiscal Club vous donne accès à des analyses hebdomadaires, des mini-formations, des modèles juridiques, des alertes fiscales en temps réel et un support prioritaire. C'est l'outil idéal pour rester informé et optimiser votre fiscalité en continu.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tout ce que vous devez savoir sur nos services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-2xl px-6 shadow-card hover:shadow-premium transition-all duration-300 border-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
