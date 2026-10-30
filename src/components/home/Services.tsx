import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getServices } from "@/lib/services";

type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
};

/* Satu baris layanan: dipakai di mobile dan desktop */
function ServiceRow({ no, item, cta }: { no: number; item: ServiceItem; cta: string }) {
  return (
    <Link
      href={`/#contact`}
      className="group grid grid-cols-[48px_1fr] gap-3 border-b border-slate-200 py-6 transition hover:bg-slate-50 md:grid-cols-[72px_1fr_auto] md:gap-4 md:px-3 md:py-7"
    >
      <span className="text-2xl font-extrabold text-[#0B5C50] md:text-[28px]">
        {String(no).padStart(2, "0")}
      </span>

      <div>
        <h3 className="text-lg font-extrabold text-[#073D35] md:text-[22px]">{item.title}</h3>
        <p className="mt-2 max-w-[640px] text-sm leading-relaxed text-slate-600 md:text-base">
          {item.summary}
        </p>

        {/* CTA teks: hanya mobile */}
        <span className="mt-3 inline-block text-sm font-bold text-[#0F766E] md:hidden">
          {cta} →
        </span>
      </div>

      {/* Panah: hanya desktop */}
      <span
        aria-hidden
        className="hidden self-center text-2xl font-bold text-[#0F766E] transition group-hover:translate-x-1 md:block"
      >
        →
      </span>
    </Link>
  );
}

export default async function Services() {
  const locale = await getLocale();
  const t = await getTranslations("Home.services");
  const services = await getServices(locale);

  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-6 md:py-[88px]">
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-14">
          {/* ===== Kolom kiri: judul ===== */}
          <div className="md:sticky md:top-[110px]">
            <p className="text-[13px] font-extrabold tracking-[0.15em] text-[#0B5C50]">
              {t("eyebrow")}
            </p>
            <h2 className="mt-2.5 text-3xl font-extrabold leading-[1.15] text-[#073D35] md:text-[42px]">
              {t("title")}
            </h2>
            <p className="mt-4 leading-[1.7] text-slate-600">{t("subtitle")}</p>

            {/* Gambar: desktop saja */}
            <div className="relative mt-7 hidden h-[260px] overflow-hidden rounded-2xl bg-[#0B5C50]/10 border border-slate-200 md:block">
              <Image
                src="/images/services/cover.webp"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0B5C50]/10 flex items-center justify-center">
                <span className="text-[#073D35] font-bold text-xs uppercase tracking-widest bg-white/90 px-4 py-2 rounded-lg backdrop-blur-xs">
                  {t("imageAlt")}
                </span>
              </div>
            </div>
          </div>

          {/* ===== Kolom kanan: daftar bernomor ===== */}
          <div>
            {/* Header tabel "NO | ITEM": desktop saja */}
            <div className="hidden grid-cols-[72px_1fr] rounded-[10px] bg-[#0B5C50] py-3.5 pl-3 font-extrabold text-[#F2C21B] md:grid">
              <span>{t("colNo")}</span>
              <span>{t("colItem")}</span>
            </div>

            {/* Header kecil: mobile saja */}
            <div className="mb-1 flex items-center justify-between rounded-lg bg-[#0B5C50] px-4 py-3 text-sm font-extrabold text-[#F2C21B] md:hidden">
              <span>{t("colNo")}</span>
              <span>{t("colItem")}</span>
            </div>

            <div>
              {services.map((s, i) => (
                <ServiceRow key={s.slug} no={i + 1} item={s} cta={t("learnMore")} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
