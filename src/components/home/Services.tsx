import React from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { getServices } from "@/lib/services";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServicesShowcase from "@/components/services/ServicesShowcase";

/* Baris layanan digantikan oleh ServicesShowcase dengan popup detail */
export default async function Services() {
  const locale = await getLocale();
  const tServices = await getTranslations("services");
  const services = await getServices(locale);

  // Mapping detail data lengkap untuk interaksi popup di Home
  const servicesMap: Record<string, { image: string; features: string[]; fullDescription: string }> = {};

  services.forEach((s) => {
    const features = (tServices.raw(`items.${s.key}.features`) as string[]) || s.highlights || [];
    const fullDescription = tServices(`items.${s.key}.description`) || s.summary;
    servicesMap[s.key] = {
      image: '/images/hero.webp',
      features,
      fullDescription,
    };
  });

  return (
    <section id="services" className="bg-white py-14 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <ServicesShowcase services={services} servicesMap={servicesMap} />
        </ScrollReveal>
      </div>
    </section>
  );
}
