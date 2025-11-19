const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl">🦈</span>
              </div>
              <span className="font-bold text-xl">Blue Shark Consulting</span>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Cabinet d'optimisation fiscale premium pour entrepreneurs et dirigeants d'entreprise.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Call Fiscal</li>
              <li>Accompagnement 1 Mois</li>
              <li>Accompagnement 3 Mois</li>
              <li>Fiscal Club</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>contact@bluesharkconsulting.fr</li>
              <li>+33 1 23 45 67 89</li>
              <li>Du lundi au vendredi</li>
              <li>9h - 18h</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/60">
              © {currentYear} Blue Shark Consulting. Tous droits réservés.
            </p>
            <p className="text-xs text-secondary-foreground/60 italic">
              Consultant fiscal et juridique (non avocat)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
