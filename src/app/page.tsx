"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLarge"
        background="floatingGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Domů",          id: "hero"},
        {
          name: "Stavební činnost",          id: "/stavebni-cinnost"},
        {
          name: "Rekonstrukce",          id: "sluzby"},
        {
          name: "Fotovoltaika",          id: "sluzby"},
        {
          name: "Ohřev vody",          id: "sluzby"},
        {
          name: "Reference",          id: "reference"},
        {
          name: "O nás",          id: "o-nas"},
        {
          name: "Kontakt",          id: "kontakt"},
      ]}
      brandName="RD Real plus"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars"}}
      title="Rodinné domy, rekonstrukce a fotovoltaika bez zbytečných starostí "
      description="RD Real plus poskytuje kompletní stavební a energetická řešení pro rodinné domy. Od prvního návrhu až po finální realizaci dbáme na kvalitu, transparentní komunikaci a profesionální přístup."
      buttons={[
        {
          text: "Nezávazně poptat",          href: "#kontakt"},
        {
          text: "Zobrazit reference",          href: "#reference"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-country-houses-construction_1385-15.jpg?_wi=1"
      imageAlt="Realizace rodinného domu na klíč"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/modern-country-houses-construction_1385-15.jpg",          alt: "Spokojený klient 1"},
        {
          src: "http://img.b2bpic.net/free-photo/stone-modern-building-with-windows_23-2148252726.jpg",          alt: "Spokojený klient 2"},
        {
          src: "http://img.b2bpic.net/free-photo/closeup-shot-hummer-tools-stairs-house-construction_181624-28753.jpg",          alt: "Spokojený klient 3"},
        {
          src: "http://img.b2bpic.net/free-photo/modern-house-architecture-navy-roof-wooden-soffit-blue-sky_626616-509.jpg",          alt: "Spokojený klient 4"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-heat-pump-outside-home_23-2149250259.jpg",          alt: "Spokojený klient 5"},
      ]}
      avatarText="Více než 500 úspěšných projektů"
      marqueeItems={[
        {
          type: "text",          text: "Stavby na klíč"},
        {
          type: "text",          text: "Rekonstrukce"},
        {
          type: "text",          text: "Fotovoltaika"},
        {
          type: "text",          text: "Ohřev vody"},
        {
          type: "text",          text: "Moravskoslezský kraj"},
      ]}
    />
  </div>

  <div id="sluzby" data-section="sluzby">
      <FeatureCardTwentyOne
      useInvertedBackground={true}
      title="Naše komplexní služby"
      description="Specializujeme se na profesionální řešení pro váš dům – od projektu až po předání."
      accordionItems={[
        {
          id: "s1",          title: "Stavební činnost",          content: "Zajistíme kompletní výstavbu vašeho nového domova přesně podle vašich představ."},
        {
          id: "s2",          title: "Rekonstrukce",          content: "Modernizujeme byty i starší rodinné domy s důrazem na kvalitu a funkčnost."},
        {
          id: "s3",          title: "Fotovoltaika",          content: "Navrhujeme a instalujeme úsporné fotovoltaické systémy pro maximální energetickou soběstačnost."},
        {
          id: "s4",          title: "Ohřev vody",          content: "Dodáváme a montujeme efektivní solární systémy pro ohřev užitkové vody."},
        {
          id: "s5",          title: "Dotace a dokumentace",          content: "Pomáháme s vyřízením potřebné dokumentace i administrací dotačních programů, aby byla realizace pro klienta jednodušší a přehlednější."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/stone-modern-building-with-windows_23-2148252726.jpg?_wi=1"
      imageAlt="Stavba rodinného domu na klíč"
    />
  </div>

  <div id="o-nas" data-section="o-nas">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Více než 25 let zkušeností"
      description="RD Real plus s.r.o. je stabilním partnerem v oblasti stavebnictví a energetiky v Moravskoslezském kraji."
      bulletPoints={[
        {
          title: "Odbornost",          description: "Tým certifikovaných expertů s dlouholetou praxí."},
        {
          title: "Komplexnost",          description: "Vše vyřídíme od papírování po samotnou realizaci."},
        {
          title: "Transparentnost",          description: "Jasné ceny a komunikace během celého procesu."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/closeup-shot-hummer-tools-stairs-house-construction_181624-28753.jpg?_wi=1"
      imageAlt="Interiérová rekonstrukce bytu"
    />
  </div>

  <div id="reference" data-section="reference">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "r1",          name: "Rodinný dům Ostrava",          price: "Realizace 2023",          imageSrc: "http://img.b2bpic.net/free-photo/stone-modern-building-with-windows_23-2148252726.jpg?_wi=2"},
        {
          id: "r2",          name: "Rekonstrukce bytu Poruba",          price: "Realizace 2023",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-hummer-tools-stairs-house-construction_181624-28753.jpg?_wi=2"},
        {
          id: "r3",          name: "Instalace FVE",          price: "Realizace 2024",          imageSrc: "http://img.b2bpic.net/free-photo/modern-house-architecture-navy-roof-wooden-soffit-blue-sky_626616-509.jpg"},
        {
          id: "r4",          name: "Ohřev vody Vratimov",          price: "Realizace 2024",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-heat-pump-outside-home_23-2149250259.jpg"},
      ]}
      title="Naše nedávné projekty"
      description="Podívejte se na ukázky naší práce v regionu Ostrava."
    />
  </div>

  <div id="kontakt" data-section="kontakt">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Nezávazná nabídka"
      description="Zanechte nám kontakt, ozveme se vám do 24 hodin."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Vaše jméno",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Váš telefon",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Váš e-mail",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Zpráva a typ služby",        rows: 4,
        required: true,
      }}
      buttonText="Odeslat poptávku"
      imageSrc="http://img.b2bpic.net/free-photo/modern-country-houses-construction_1385-15.jpg?_wi=2"
      imageAlt="Kontaktujte RD Real plus"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "RD Real plus s.r.o.",          items: [
            {
              label: "Klínová 620/1, 709 00 Ostrava",              href: "https://www.google.com/maps/search/?api=1&query=Klinova+620/1+Ostrava"},
            {
              label: "Zobrazit na mapě",              href: "https://www.google.com/maps/search/?api=1&query=Klinova+620/1+Ostrava"},
            {
              label: "Tel: +420 777 400 257",              href: "tel:+420777400257"},
            {
              label: "E-mail: rdreal@rdreal.cz",              href: "mailto:rdreal@rdreal.cz"},
          ],
        },
        {
          title: "Služby",          items: [
            {
              label: "Stavební činnost",              href: "/stavebni-cinnost"},
            {
              label: "Rekonstrukce",              href: "/rekonstrukce"},
            {
              label: "Fotovoltaika",              href: "/fotovoltaika"},
            {
              label: "Ohřev vody",              href: "/ohrev-vody"},
          ],
        },
      ]}
      bottomLeftText="© 2024 RD Real plus s.r.o. Všechna práva vyhrazena."
      bottomRightText="Ochrana osobních údajů"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
