import { getTranslations } from "next-intl/server";

type WhyItem = {
  title: string;
  description: string;
};

/* Lingkaran bernomor: dipakai di mobile dan desktop */
function NumberBadge({ n }: { n: number }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal text-xl font-extrabold text-gold">
      {n}
    </span>
  );
}

export default async function WhyUs() {
  const t = await getTranslations("Home.why");
  const items = t.raw("items") as WhyItem[];

  return (
    <section id="why-us" className="bg-mist">
      <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-[88px]">
        <h2 className="text-center text-3xl font-extrabold text-ink md:text-[38px]">
          {t("title")}
        </h2>

        {/* ===== Mobile: kartu horizontal, 1 kolom ===== */}
        <div className="mt-8 grid gap-4 md:hidden">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm"
            >
              <NumberBadge n={i + 1} />
              <div>
                <h3 className="text-lg font-extrabold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Desktop: kartu vertikal di tengah, 4 kolom ===== */}
        <div className="mt-11 hidden grid-cols-4 gap-5 md:grid">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-2xl bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <NumberBadge n={i + 1} />
              <h3 className="mt-4 text-lg font-extrabold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
