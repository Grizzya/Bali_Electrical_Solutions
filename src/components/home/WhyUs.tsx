import { getTranslations } from "next-intl/server";
import ScrollReveal from "@/components/ui/ScrollReveal";

type WhyItem = {
  title: string;
  description: string;
};

/* Lingkaran bernomor: dipakai di mobile dan desktop */
function NumberBadge({ n }: { n: number }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B5C50] text-xl font-extrabold text-[#F2C21B] shadow-sm transition-transform duration-300 group-hover:scale-110">
      {n}
    </span>
  );
}

export default async function WhyUs() {
  const t = await getTranslations("Home.why");
  const items = t.raw("items") as WhyItem[];

  return (
    <section id="why-us" className="bg-[#0B5C50] text-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 md:py-[88px]">
        <ScrollReveal>
          <h2 className="text-center text-3xl font-extrabold text-white md:text-[38px] tracking-tight">
            {t("title")}
          </h2>
        </ScrollReveal>

        {/* ===== Mobile: kartu horizontal, 1 kolom ===== */}
        <div className="mt-8 grid gap-4 md:hidden">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 90}>
              <div
                className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm text-slate-800 transition-all duration-300 hover:shadow-md"
              >
                <NumberBadge n={i + 1} />
                <div>
                  <h3 className="text-lg font-extrabold text-[#0B5C50]">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ===== Desktop: kartu vertikal di tengah, 4 kolom dengan staggered entrance & hover lift ===== */}
        <div className="mt-11 hidden grid-cols-4 gap-5 md:grid">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div
                className="group flex flex-col items-center rounded-2xl bg-white p-7 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-slate-800 h-full cursor-default"
              >
                <NumberBadge n={i + 1} />
                <h3 className="mt-4 text-lg font-extrabold text-[#0B5C50] group-hover:text-[#0B5C50] transition-colors">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
