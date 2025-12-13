const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-muted-foreground">Available</span>
          </span>
          <span className="text-sm text-muted-foreground">March</span>
        </div>
        
        <p className="text-sm text-muted-foreground text-center">
          Work still in progress - Last updated Mar, 2025
        </p>

        <img
          src="https://framerusercontent.com/images/nyyVG7N6UOz2JLw3yIOumT1BsI.svg"
          alt="Framer"
          className="h-5 opacity-50 invert"
        />
      </div>
    </footer>
  );
};

export default Footer;
