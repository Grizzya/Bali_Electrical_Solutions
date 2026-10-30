import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { WHATSAPP_URL } from "@/lib/constants";

/* Foto + badge: dipakai di mobile dan desktop dengan tinggi berbeda */
function Photo({ heightClass, alt, badgeTop, badgeBottom }: {
  heightClass: string;
  alt: string;
  badgeTop: string;
  badgeBottom: string;
}) {
  return (
    <div className="relative">
      <div className={`relative overflow-hidden rounded-2xl ${heightClass}`}>
        <Image
          src="/images/about.webp"
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute -bottom-[22px] right-5 rounded-[14px] bg-teal px-[22px] py-3.5 text-center shadow-lg">
        <p className="text-[28px] font-extrabold leading-none text-gold">{badgeTop}</p>
        <p className="mt-1 text-xs font-semibold text-white">{badgeBottom}</p>
      </div>
    </div>
  );
}

export default async function About() {
  const t = await getTranslations("Home.about");
  const points = t.raw("points") as string[];

  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 py-14 md:grid-cols-2 md:gap-14 md:px-6 md:py-[88px]">
        {/* ===== Foto ===== */}
        <div className="md:hidden">
          <Photo
            heightClass="h-72"
            alt={t("imageAlt")}
            badgeTop={t("badgeTop")}
            badgeBottom={t("badgeBottom")}
          />
        </div>
        <div className="hidden md:block">
          <Photo
            heightClass="h-[420px]"
            alt={t("imageAlt")}
            badgeTop={t("badgeTop")}
            badgeBottom={t("badgeBottom")}
          />
        </div>

        {/* ===== Teks ===== */}
        <div>
          <p className="text-[13px] font-extrabold tracking-[0.15em] text-teal">{t("eyebrow")}</p>
          <h2 className="mt-2.5 text-3xl font-extrabold leading-[1.15] text-ink md:text-[38px]">
            {t("title")}
          </h2>
          <p className="mt-[18px] leading-[1.7] text-ink">{t("description")}</p>

          <ul className="mt-5 grid gap-2.5 text-ink">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5">
                <span
                  aria-hidden
                  className="mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full bg-gold ring-2 ring-teal"
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-[10px] bg-teal px-[26px] py-3.5 font-extrabold text-gold transition hover:brightness-110"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
