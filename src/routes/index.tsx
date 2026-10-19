import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Instagram, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/vastra-hero.jpg";
import silkImage from "@/assets/collections/vastra-silk.jpg";
import contactImage from "@/assets/collections/contact-duo.jpg";
import arrivalPink from "@/assets/collections/arrival-pink.jpg";
import arrivalCoral from "@/assets/collections/arrival-coral.jpg";
import arrivalLavender from "@/assets/collections/arrival-lavender.jpg";
import arrivalYellow from "@/assets/collections/arrival-yellow.jpg";
import arrivalSage from "@/assets/collections/arrival-sage.jpg";
import arrivalBlue from "@/assets/collections/arrival-blue.jpg";
import sellerYellow from "@/assets/collections/seller-yellow.jpg";
import sellerLavender from "@/assets/collections/seller-lavender.jpg";
import sellerRose from "@/assets/collections/seller-rose.jpg";
import sellerSage from "@/assets/collections/seller-sage.jpg";
import sellerBlue from "@/assets/collections/seller-blue.jpg";

const arrivals = [
  { image: arrivalPink, name: "Gulabi Phool", color: "Pink" },
  { image: arrivalCoral, name: "Sunehri Bagh", color: "Coral" },
  { image: arrivalLavender, name: "Shaam-e-Gul", color: "Lavender" },
  { image: arrivalYellow, name: "Aam Ki Kali", color: "Marigold" },
  { image: arrivalSage, name: "Hara Gul", color: "Sage" },
  { image: arrivalBlue, name: "Neel Aasmaan", color: "Sky blue" },
];

const colors = [
  { name: "Red", note: "Love & ritual", className: "shade-red" },
  { name: "Green", note: "Abundance & grace", className: "shade-green" },
  { name: "Yellow", note: "Joy in every fold", className: "shade-yellow" },
  { name: "Blue", note: "A quieter kind of beauty", className: "shade-blue" },
  { name: "Pink", note: "Made for daydreams", className: "shade-pink" },
  { name: "Purple", note: "A little bit of magic", className: "shade-purple" },
];

const bestSellers = [
  { image: sellerYellow, name: "The Sunehri Organza", color: "Marigold" },
  { image: sellerLavender, name: "The Gulabi Jaal", color: "Lavender" },
  { image: sellerRose, name: "The Gulab Bagh", color: "Rose" },
  { image: sellerSage, name: "The Hara Mahal", color: "Sage" },
  { image: sellerBlue, name: "The Neel Tara", color: "Sky" },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "New arrivals", href: "#new-arrivals" },
  { label: "Categories", href: "#categories" },
  { label: "Shop by color", href: "#colors" },
  { label: "Best sellers", href: "#best-sellers" },
  { label: "Contact", href: "#contact" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VASTRA — Heirloom Sarees, Woven for Today" },
      { name: "description", content: "Discover VASTRA: exquisite heirloom sarees woven with heritage craft and a modern spirit." },
      { property: "og:title", content: "VASTRA — Heirloom Sarees, Woven for Today" },
      { property: "og:description", content: "A little piece of forever. Discover the VASTRA heirloom saree collection." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VastraHome,
});

function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <span className={`brand-mark${small ? " brand-mark-small" : ""}`} aria-label="VASTRA">
      <span className="brand-initial">V</span>
      <span className="brand-name">VASTRA</span>
    </span>
  );
}

function VastraHome() {
  const [introVisible, setIntroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sent, setSent] = useState(false);
  const arrivalsSection = useRef<HTMLElement>(null);
  const arrivalsViewport = useRef<HTMLDivElement>(null);
  const arrivalsTrack = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const introTimer = window.setTimeout(() => setIntroVisible(false), 3000);
    const updateHeader = () => setScrolled(window.scrollY > 40);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      }),
      { threshold: 0.13, rootMargin: "0px 0px -28px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const updateArrivals = () => {
      const section = arrivalsSection.current;
      const viewport = arrivalsViewport.current;
      const track = arrivalsTrack.current;
      if (!section || !viewport || !track || window.innerWidth < 760) return;
      const maxDistance = Math.max(0, track.scrollWidth - viewport.clientWidth);
      const scrollDistance = section.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -section.getBoundingClientRect().top / scrollDistance));
      track.style.setProperty("--arrival-distance", `${maxDistance}px`);
      track.style.setProperty("--arrival-progress", `${progress}`);
      const indicator = viewport.querySelector<HTMLElement>(".arrival-progress-value");
      if (indicator) indicator.style.transform = `scaleX(${progress})`;
    };
    updateArrivals();
    window.addEventListener("scroll", updateArrivals, { passive: true });
    window.addEventListener("resize", updateArrivals);

    return () => {
      window.clearTimeout(introTimer);
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("scroll", updateArrivals);
      window.removeEventListener("resize", updateArrivals);
      revealObserver.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <main>
      <div className={`intro-screen${introVisible ? " intro-visible" : " intro-gone"}`} aria-hidden={!introVisible}>
        <img className="intro-silk" src={silkImage} alt="" width={762} height={1024} />
        <div className="intro-vignette" />
        <BrandMark />
        <span className="intro-caption">A little piece of forever</span>
      </div>

      <header className={`site-header${scrolled ? " header-scrolled" : ""}`}>
        <a className="header-brand" href="#home" aria-label="VASTRA home" onClick={closeMenu}><BrandMark small /></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <Button variant="ghost" className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? "Close" : "Menu"}<span className="menu-icon">{menuOpen ? <X size={18} /> : <Menu size={18} />}</span>
        </Button>
      </header>

      <div className={`mobile-menu${menuOpen ? " mobile-menu-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => <a key={item.href} href={item.href} onClick={closeMenu}><span>0{index + 1}</span>{item.label}<ArrowUpRight size={20} /></a>)}
        </nav>
        <p>HEIRLOOMS FOR EVERY CHAPTER</p>
      </div>

      <section className="hero-section" id="home">
        <img className="hero-image" src={heroImage} alt="Two women in exquisite VASTRA heirloom sarees, surrounded by the warm glow of brass lamps" width={1536} height={1024} fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-content">
          <span className="eyebrow hero-eyebrow">Sarees woven with</span>
          <h1>Culture<span className="hero-period">.</span><svg className="hero-swoosh" viewBox="0 0 462 33" aria-hidden="true"><path d="M6 25C105 8 231 1 456 8" /></svg></h1>
          <p className="hero-subtitle">Heirloom drapes for<br />modern stories</p>
          <a className="pill-link pill-link-light" href="#new-arrivals">Explore the collection <ArrowRight size={16} /></a>
        </div>
        <a className="hero-discover" href="#new-arrivals" aria-label="Scroll to discover"><span>Discover our world</span><ArrowDown size={17} /></a>
        <div className="signature-strip"><span>The VASTRA signature</span><i />Finest fabrics, heritage craftsmanship, enduring elegance</div>
      </section>

      <section className="arrivals-section" id="new-arrivals" ref={arrivalsSection}>
        <div className="arrivals-sticky">
          <div className="arrivals-copy reveal">
            <span className="eyebrow">The newest chapter</span>
            <h2>Fresh Weaves,<br /><em>Timeless Grace</em></h2>
            <p>Six new stories, each one spun from the colours, gardens and little moments that stay with us.</p>
            <a className="pill-link pill-link-wine" href="#best-sellers">Discover new arrivals <ArrowRight size={16} /></a>
            <span className="collection-index">01 <i /> 06</span>
          </div>
          <div className="arrivals-gallery" ref={arrivalsViewport}>
            <div className="arrival-progress"><span className="arrival-progress-value" /></div>
            <div className="arrivals-track" ref={arrivalsTrack}>
              {arrivals.map((item, index) => (
                  <a className={`arrival-card reveal${index % 2 ? " arrival-card-lower" : ""}`} href="#contact" key={item.name} style={{ "--reveal-delay": `${index * 65}ms` } as CSSProperties}>
                  <div className="arrival-photo"><img src={item.image} alt={`${item.name} ${item.color} silk saree`} width={502} height={760} loading="lazy" /><span className="photo-arrow"><ArrowUpRight size={17} /></span></div>
                  <div className="arrival-details"><span>{item.color} · New season</span><h3>{item.name}</h3></div>
                </a>
              ))}
            </div>
          </div>
          <span className="arrivals-scroll-note">Scroll to explore <ArrowRight size={15} /></span>
        </div>
      </section>

      <section className="color-section" id="colors">
        <div className="color-heading reveal"><span className="eyebrow">Find your hue</span><h2>Shop by <em>colour.</em></h2><p>A colour for every kind of becoming.</p></div>
        <div className="color-gallery" id="categories">
          {colors.map((color, index) => (
            <a className={`color-arch ${color.className} reveal`} href="#new-arrivals" key={color.name} style={{ "--reveal-delay": `${index * 75}ms` } as CSSProperties}>
              <span className="arch-number">0{index + 1}</span><span className="arch-label">{color.name}</span><span className="arch-note">{color.note}</span><span className="arch-arrow"><ArrowUpRight size={18} /></span>
            </a>
          ))}
        </div>
        <a className="color-all-link" href="#best-sellers">Explore every shade <ArrowRight size={14} /></a>
      </section>

      <section className="bestsellers-section" id="best-sellers">
        <div className="bestsellers-copy reveal"><span className="eyebrow">A few favourites</span><h2>Our most<br /><em>loved.</em></h2><p>The drapes you reach for, remember, and pass down. VASTRA, at its most adored.</p><a className="text-link-light" href="#contact">Explore all <span>●</span><ArrowRight size={15} /></a></div>
        <div className="bestseller-gallery">
          {bestSellers.map((item, index) => (
            <a className={`bestseller-card reveal${index % 2 === 1 ? " bestseller-card-lower" : ""}`} href="#contact" key={item.name} style={{ "--reveal-delay": `${index * 85}ms` } as CSSProperties}>
              <div className="bestseller-photo"><img src={item.image} alt={`${item.name}, ${item.color} organza saree`} width={505} height={760} loading="lazy" /><span><ArrowUpRight size={18} /></span></div>
              <div className="bestseller-caption"><h3>{item.name}</h3><span>{item.color} · Organza</span></div>
            </a>
          ))}
        </div>
        <div className="bestseller-index">The forever collection <i /> 01 — 05</div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-intro"><div className="contact-title reveal"><span className="eyebrow">The beginning of a conversation</span><h2>We'd love to<br /><em>hear from you.</em></h2></div><div className="contact-photo reveal"><img src={contactImage} alt="Two smiling women in pastel silk sarees in the soft glow of golden hour" width={762} height={1024} loading="lazy" /><span>Made to be remembered, together.</span></div></div>
        <div className="contact-grid">
          <div className="contact-info reveal"><span className="eyebrow">Come say hello</span><a className="contact-detail" href="mailto:hello@vastra.in"><span className="contact-icon"><Mail size={17} /></span><span><small>Write to us</small>hello@vastra.in</span></a><a className="contact-detail" href="tel:+919876543210"><span className="contact-icon"><Phone size={17} /></span><span><small>Call our studio</small>+91 98765 43210</span></a><div className="contact-detail"><span className="contact-icon"><MapPin size={17} /></span><span><small>Visit our atelier</small>12, Heritage Lane<br />Bengaluru, Karnataka</span></div><a className="directions-link" href="https://maps.google.com/?q=Bengaluru+Karnataka" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={15} /></a><a className="social-link" href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={16} /> Follow our little world</a></div>
          <form className="contact-form reveal" onSubmit={handleSubmit}><span className="eyebrow">Leave us a note</span><label>Your name<input name="name" type="text" placeholder="The name we can call you" required /></label><label>Your email<input name="email" type="email" placeholder="Where we can write back" required /></label><label>Your message<textarea name="message" rows={2} placeholder="Whatever's on your mind…" required /></label><Button type="submit" variant="default" className="form-submit">{sent ? "Thank you — we'll be in touch" : "Send your message"}<ArrowRight size={16} /></Button></form>
          <aside className="quote-panel reveal"><span className="quote-ornament">“</span><blockquote>Every message is a thread — woven into who we become.</blockquote><span className="quote-signature">With love, VASTRA</span><span className="quote-motif" aria-hidden="true">V</span></aside>
        </div>
      </section>

      <footer className="site-footer"><a href="#home" aria-label="VASTRA home"><BrandMark small /></a><p>Woven with love. Worn with meaning.</p><span>© 2026 VASTRA · All the stories, reserved.</span></footer>
    </main>
  );
}