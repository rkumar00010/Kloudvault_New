"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhyScrollButton from "@/components/WhyScrollButton";
import IndustryPageChrome, { IndustryCta } from "./IndustryPageChrome";

const CONTACT = "https://360cti.com/contact/";

function UseCaseCard({ item }) {
  return (
    <article className="group rounded-2xl border border-sky-100 bg-sky-50/80 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]">
      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
      {item.body && <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>}
      {item.flow && (
        <p className="mt-3 rounded-lg border border-sky-100 bg-white px-3 py-2 text-sm font-medium text-sky-800">
          {item.flow}
        </p>
      )}
      {item.beforeAfter && (
        <div className="mt-4 space-y-3">
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              {item.beforeAfter.withoutLabel || "Without automation"}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.beforeAfter.without}</p>
          </div>
          <div className="rounded-lg border border-sky-100 bg-sky-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sky-600">
              {item.beforeAfter.withLabel || "With AI OCR"}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.beforeAfter.with}</p>
          </div>
        </div>
      )}
      {item.bulletsIntro && <p className="mt-3 text-sm font-medium text-slate-700">{item.bulletsIntro}</p>}
      {item.bullets?.length > 0 && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      {item.footer && <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.footer}</p>}
    </article>
  );
}

export default function IndustryGenericProductPage({ content }) {
  if (!content) return null;

  const useCaseColumns = content.useCases?.columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";

  return (
    <IndustryPageChrome>
      <section className="relative overflow-hidden pb-16 pt-24 sm:pb-20 sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, #ffffff 0%, #eef9ff 42%, #dbeafe 100%),
              radial-gradient(circle at 18% 55%, rgb(56 189 248 / 0.25) 0%, transparent 38%),
              radial-gradient(circle at 82% 52%, rgb(14 165 233 / 0.18) 0%, transparent 40%)`,
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">{content.hero.badge}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {content.hero.title}
            </h1>
            {content.hero.tagline && (
              <p className="mt-4 text-xl font-semibold text-sky-700">{content.hero.tagline}</p>
            )}
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">{content.hero.description}</p>
            {content.hero.secondaryDescription && (
              <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600">
                {content.hero.secondaryDescription}
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={CONTACT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700"
              >
                {content.cta.button}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <WhyScrollButton
                productName={content.productName}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-sky-50"
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-xl">
              <img
                src={content.hero.image}
                alt={content.hero.title}
                className="h-auto w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {content.dataTable && (
        <section className="bg-slate-50/80 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">{content.dataTable.title}</h2>
            {content.dataTable.subtitle && (
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">{content.dataTable.subtitle}</p>
            )}
            <div className="mt-10 overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
              <div className="hidden grid-cols-[1.1fr_1.2fr_1.3fr] gap-4 border-b border-sky-100 bg-sky-50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 md:grid">
                <span>{content.dataTable.col1Label}</span>
                <span>{content.dataTable.col2Label}</span>
                <span>{content.dataTable.col3Label}</span>
              </div>
              <div className="divide-y divide-sky-50">
                {content.dataTable.rows.map((row) => (
                  <div
                    key={row.category}
                    className="grid gap-3 px-6 py-4 md:grid-cols-[1.1fr_1.2fr_1.3fr] md:items-start md:gap-4"
                  >
                    <p className="font-semibold text-slate-900">{row.category}</p>
                    <p className="text-sm text-slate-600">{row.examples}</p>
                    <p className="text-sm text-slate-600">{row.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {content.useCases && (
        <section className={`py-16 sm:py-20 ${content.dataTable ? "" : "bg-slate-50/80"}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">{content.useCases.title}</h2>
            {content.useCases.subtitle && (
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600">{content.useCases.subtitle}</p>
            )}
            <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${useCaseColumns}`}>
              {content.useCases.items.map((item) => (
                <UseCaseCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {content.comparisonTable && (
        <section className="bg-slate-50/80 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">{content.comparisonTable.title}</h2>
            <div className="mt-10 overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm">
              <div className="grid grid-cols-2 gap-4 border-b border-sky-100 bg-sky-50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
                <span>{content.comparisonTable.col1Label}</span>
                <span>{content.comparisonTable.col2Label}</span>
              </div>
              <div className="divide-y divide-sky-50">
                {content.comparisonTable.rows.map((row) => (
                  <div key={row.left} className="grid grid-cols-2 gap-4 px-6 py-4">
                    <p className="text-sm text-slate-600">{row.left}</p>
                    <p className="text-sm font-medium text-slate-800">{row.right}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {content.opportunityFlow && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">{content.opportunityFlow.title}</h2>
            {content.opportunityFlow.subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">{content.opportunityFlow.subtitle}</p>
            )}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              {content.opportunityFlow.steps.map((step, index) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="rounded-xl border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-slate-800">
                    {step}
                  </span>
                  {index < content.opportunityFlow.steps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-sky-400" />
                  )}
                </span>
              ))}
            </div>
            {content.opportunityFlow.exampleTitle && (
              <p className="mt-10 text-center text-sm font-semibold uppercase tracking-[0.14em] text-sky-600">
                {content.opportunityFlow.exampleTitle}
              </p>
            )}
            {content.opportunityFlow.exampleSteps?.length > 0 && (
              <div className="mt-6 space-y-3">
                {content.opportunityFlow.exampleSteps.map((step, index) => (
                  <div key={step} className="flex items-start gap-3 rounded-xl border border-sky-100 bg-white px-4 py-3 shadow-sm">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                      {index + 1}
                    </span>
                    <p className="pt-0.5 text-sm leading-relaxed text-slate-700">{step}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {content.architecture && (
        <section className="bg-slate-50/80 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">{content.architecture.title}</h2>
            {content.architecture.subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">{content.architecture.subtitle}</p>
            )}
            {content.architecture.steps?.length > 0 && (
              <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                {content.architecture.steps.map((step, index) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-xl border border-sky-100 bg-white px-4 py-2 text-sm font-semibold text-slate-800">
                      {step}
                    </span>
                    {index < content.architecture.steps.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-sky-400" />
                    )}
                  </span>
                ))}
              </div>
            )}
            {content.architecture.capabilities?.length > 0 && (
              <>
                {content.architecture.capabilitiesTitle && (
                  <h3 className="mt-12 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
                    {content.architecture.capabilitiesTitle}
                  </h3>
                )}
              <div className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-4 ${content.architecture.capabilitiesTitle ? "mt-8" : "mt-12"}`}>
                {content.architecture.capabilities.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-sky-100 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
              </>
            )}
          </div>
        </section>
      )}

      <section id="why" className="scroll-mt-24 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">
            {content.valueProposition.eyebrow || `Why ${content.productName}`}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{content.valueProposition.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{content.valueProposition.description}</p>
        </div>
      </section>

      {content.modules?.items?.length > 0 && (
        <section className="bg-slate-50/80 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">{content.modules.title}</h2>
            {content.modules.subtitle && (
              <p className="mx-auto mt-3 max-w-2xl text-center text-lg font-semibold text-sky-700">
                {content.modules.subtitle}
              </p>
            )}
            {content.modules.description && (
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-slate-600">
                {content.modules.description}
              </p>
            )}
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {content.modules.items.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_12px_32px_rgba(14,165,233,0.12)]"
                >
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <IndustryCta title={content.cta.title} description={content.cta.description} button={content.cta.button} />
    </IndustryPageChrome>
  );
}
