const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container text-center">
      <p className="font-heading text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
        © {new Date().getFullYear()} Blackspire Pvt. Ltd. — External Division. All rights reserved.
      </p>
      <p className="mt-2 text-xs text-muted-foreground/60">
        You focus on your work. We handle the growth.
      </p>
    </div>
  </footer>
);

export default Footer;
