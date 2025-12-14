import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Blue Shark Consulting" className="h-10 sm:h-12 w-auto mb-4" />
            <p className="text-muted-foreground text-sm text-center md:text-left max-w-md px-4 md:px-0">
              Cabinet d'optimisation fiscale, juridique et sociale sur-mesure pour entrepreneurs et dirigeants.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-foreground font-semibold mb-2">Blue Shark Consulting</p>
            <p className="text-muted-foreground text-sm mb-1">58 RUE DE MONCEAU</p>
            <p className="text-muted-foreground text-sm">75008 PARIS</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center px-4">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} Blue Shark Consulting. Tous droits réservés.
            {" "} • {" "}
            <a href="/mentions-legales" className="hover:text-foreground transition-colors">
              Mentions légales
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
