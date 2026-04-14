"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSimple from '@/components/sections/footer/FooterSimple';

export default function StavebniCinnostPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple
          navItems={[
            { name: "Domů", id: "/" },
            { name: "Stavební činnost", id: "/stavebni-cinnost" },
            { name: "Reference", id: "/reference" },
            { name: "O nás", id: "/o-nas" },
            { name: "Kontakt", id: "/kontakt" },
          ]}
          brandName="RD Real plus"
        />
        
        <HeroBillboard
          title="Profesionální stavební činnost"
          description="Výstavba rodinných domů na klíč, komplexní rekonstrukce a odborná realizace staveb s garancí kvality."
          buttons={[{ text: "Poptat realizaci", href: "#kontakt" }]}
          imageSrc="http://img.b2bpic.net/free-photo/modern-country-houses-construction_1385-15.jpg"
        />

        <FeatureCardTwentyOne
          title="Naše stavební služby"
          description="Realizujeme projekty s důrazem na preciznost, termíny a individuální potřeby našich klientů."
          accordionItems={[
            { id: "c1", title: "Výstavba rodinných domů", content: "Stavíme moderní, úsporné a bezpečné domy přesně podle vašeho projektu." },
            { id: "c2", title: "Kompletní rekonstrukce", content: "Od bytů po historické budovy – vracíme prostorům život a funkčnost." },
            { id: "c3", title: "Stavební dozor", content: "Zajistíme profesionální dohled nad procesem realizace, abyste měli jistotu kvality." }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/stone-modern-building-with-windows_23-2148252726.jpg"
        />

        <SplitAbout
          title="Proč zvolit RD Real plus?"
          description="Naše firma sází na poctivé řemeslo, zkušený tým a moderní technologické postupy."
          textboxLayout="split"
          bulletPoints={[
            { title: "Kvalita materiálů", description: "Pracujeme výhradně s certifikovanými materiály od ověřených dodavatelů." },
            { title: "Dodržení termínů", description: "Plánování je základ – vaše projekty dokončujeme včas." },
            { title: "Transparentní rozpočet", description: "U nás se nemusíte bát skrytých nákladů – jasně a předem." }
          ]}
        />

        <ProductCardOne
          title="Ukázky realizací"
          description="Prohlédněte si naše nedávné projekty a přesvědčte se o našem přístupu."
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          products={[
            { id: "p1", name: "Novostavba RD Ostrava", price: "Realizováno 2023", imageSrc: "http://img.b2bpic.net/free-photo/modern-country-houses-construction_1385-15.jpg" },
            { id: "p2", name: "Rekonstrukce vily", price: "Realizováno 2023", imageSrc: "http://img.b2bpic.net/free-photo/stone-modern-building-with-windows_23-2148252726.jpg" }
          ]}
        />

        <ContactSplitForm
          title="Chcete začít stavět?"
          description="Napište nám a probereme vaše plány nezávazně u šálku kávy."
          inputs={[
            { name: "name", type: "text", placeholder: "Jméno a příjmení", required: true },
            { name: "email", type: "email", placeholder: "E-mail", required: true }
          ]}
        />

        <FooterSimple 
          columns={[
            { title: "RD Real plus", items: [{ label: "Kontakt", href: "/kontakt" }] }
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}