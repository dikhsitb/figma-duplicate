import { useState } from "react";

const assets = {
  product: "/assets/cursor-hero/product.png",
  logo: "/assets/cursor-hero/logo.svg",
  chevron: "/assets/cursor-hero/chevron.svg",
  shopifyIcon: "/assets/cursor-hero/shopify-icon.svg",
  wave: "/assets/cursor-hero/wave.svg",
  iconQuantity: "/assets/cursor-hero/icon-quantity.svg",
  arrowUpDown: "/assets/cursor-hero/arrow-up-down.svg",
  iconDelivery: "/assets/cursor-hero/icon-delivery.svg",
  mapFold: "/assets/cursor-hero/map-fold.svg",
  chevronSmall: "/assets/cursor-hero/chevron-small.svg",
  truck: "/assets/cursor-hero/truck.svg",
  radioSelected: "/assets/cursor-hero/radio-selected.svg",
  radioUnselected: "/assets/cursor-hero/radio-unselected.svg",
  radioFrame: "/assets/cursor-hero/radio-frame.svg",
  iconContact: "/assets/cursor-hero/icon-contact.svg",
  iconAddress: "/assets/cursor-hero/icon-address.svg",
};

function PrimaryButton({
  children,
  size = "hero",
  showIcon = true,
}: {
  children: React.ReactNode;
  size?: "hero" | "nav";
  showIcon?: boolean;
}) {
  const isNav = size === "nav";

  return (
    <button
      type="button"
      className={`relative flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-[10.5px] bg-[#ff7a68] shadow-[0px_7px_18px_0px_rgba(255,94,73,0.45)] ${
        isNav
          ? "px-[18px] py-[11px] text-[14.3px] font-medium tracking-[-0.29px] text-[#feefec]"
          : "px-[18px] py-[11px] text-[16px] font-medium tracking-[-0.32px] text-white"
      }`}
    >
      {showIcon && (
        <img src={assets.shopifyIcon} alt="" className="h-[18px] w-4" />
      )}
      {children}
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.4),inset_0px_-4px_2px_0px_rgba(235,70,48,0.4)]" />
    </button>
  );
}

function OutlineButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="w-full rounded-[14px] border border-black/10 bg-white px-6 py-3.5 text-[15px] font-medium tracking-[-0.3px] text-[#402926] transition-colors hover:bg-[#fff7f6]"
    >
      {children}
    </button>
  );
}

function DarkButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="w-full rounded-[14px] bg-[#402926] px-6 py-3.5 text-[15px] font-medium tracking-[-0.3px] text-white transition-colors hover:bg-[#2d1c1a]"
    >
      {children}
    </button>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="mt-0.5 shrink-0"
      aria-hidden
    >
      <path
        d="M2.5 7L5.5 10L11.5 4"
        stroke="#402926"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-14 flex max-w-[640px] flex-col items-center gap-4 text-center">
      <h2 className="text-3xl font-semibold tracking-[-1.5px] text-[#402926] sm:text-4xl lg:text-[42px] lg:leading-[1.1] lg:tracking-[-2px]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base font-medium leading-relaxed text-[rgba(64,41,38,0.65)] sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

const CARD_SHADOW =
  "shadow-[0px_42px_26px_0px_rgba(255,94,73,0.05),0px_18px_18px_0px_rgba(255,94,73,0.09),0px_5px_10px_0px_rgba(255,94,73,0.1),0px_8px_8px_0px_rgba(11,32,103,0.05)]";

function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="relative shrink-0 overflow-hidden rounded-[10.5px] bg-white px-[18px] py-[11px] text-[16px] font-medium tracking-[-0.32px] text-[#ff5e49] shadow-[0px_2px_4px_0px_rgba(157,64,52,0.2)]"
    >
      {children}
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_0px_0px_rgba(255,255,255,0.33),inset_0px_-3px_1px_0px_rgba(235,70,48,0.1),inset_0px_3px_3px_0px_rgba(255,255,255,0.25)]" />
    </button>
  );
}

function FloatingLabel({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-[5px] rounded-lg bg-white p-[7px] shadow-[0px_18px_18px_0px_rgba(255,94,73,0.09),0px_5px_10px_0px_rgba(255,94,73,0.1)]">
      <img src={icon} alt="" className="size-[11.5px] shrink-0" />
      <p className="text-[11.5px] font-medium leading-normal text-[#402926]">
        {label}
      </p>
    </div>
  );
}

function QuantityStepper() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-[10.5px] tracking-[-0.11px] text-black/85">
        Quantity:
      </span>
      <div className="flex items-start gap-[11px] rounded-[7px] border border-[#da4431] bg-[#ffe9e6] px-2 py-[3px]">
        <span className="text-[14px] font-normal tracking-[-0.29px] text-[#da4431]">
          2
        </span>
        <div className="flex flex-col items-center justify-between self-stretch py-0.5">
          <img src={assets.arrowUpDown} alt="" className="h-[5px] w-[7px]" />
          <img
            src={assets.arrowUpDown}
            alt=""
            className="h-[5px] w-[7px] -scale-y-100"
          />
        </div>
      </div>
    </div>
  );
}

function OrderCard() {
  return (
    <div className="flex w-[345px] shrink-0 flex-col gap-[31px] rounded-[28px] bg-white p-3 shadow-[0px_42px_26px_0px_rgba(255,94,73,0.05),0px_18px_18px_0px_rgba(255,94,73,0.09),0px_5px_10px_0px_rgba(255,94,73,0.1),0px_8px_8px_0px_rgba(11,32,103,0.05)]">
      <div className="flex flex-col gap-[21px]">
        <p className="px-2.5 pb-1.5 pt-2 text-[19px] font-semibold tracking-[-0.57px] text-black">
          🎉 Your Order is Completed!
        </p>
        <div className="flex h-[127px] gap-[18px] rounded-[25px] border border-black/10 p-2.5">
          <div className="relative h-[108px] w-[105px] shrink-0 overflow-hidden rounded-xl bg-[#ffe7e0]">
            <img
              src={assets.product}
              alt="Product"
              className="absolute left-1/2 top-1/2 size-[87px] -translate-x-1/2 -translate-y-1/2 object-cover"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-between">
            <div className="flex flex-col gap-[9px]">
              <div className="h-3.5 w-[154px] rounded-full bg-[rgba(195,195,195,0.46)]" />
              <div className="h-3.5 w-[83px] rounded-full bg-[rgba(195,195,195,0.46)]" />
            </div>
            <div>
              <p className="text-[20px] font-semibold tracking-[-0.6px] text-[#3cb13e]">
                $15
              </p>
              <p className="text-[12px] text-black/45">
                Quantity:{" "}
                <span className="text-[14px] font-semibold text-black">1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[7px]">
        <button
          type="button"
          className="relative flex w-full items-center justify-center rounded-[19px] py-[11px] text-[10px] font-medium text-[#ff5e49]"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 94, 73, 0.17) 0%, rgba(255, 198, 136, 0.17) 100%), #fff7f6",
          }}
        >
          Edit Your Order
        </button>
        <p className="text-[11px] font-medium text-black">
          You have <span className="text-[#ff5e49]">29 mins</span> to edit
        </p>
      </div>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="w-[222px] origin-top-left rotate-[2deg]">
      <FloatingLabel icon={assets.iconContact} label="Change Quantities / Remove Items" />
      <div className="mt-1 rounded-[10px] bg-white px-3 pb-4 pt-2.5 shadow-lg">
        <label className="text-[10px] text-black">Phone</label>
        <div className="mt-1 rounded-[7px] bg-[#f4f4f4] px-2.5 py-2 text-[11px] text-black/50">
          +091 12345 67890
        </div>
        <label className="mt-2 block text-[10px] text-black">Email</label>
        <div className="mt-1 rounded-[7px] border border-[#ff5e49] bg-[#f4f4f4] px-2.5 py-2 text-[11px] text-[#151515]">
          email@example.com
        </div>
      </div>
    </div>
  );
}

function AddressCard() {
  return (
    <div className="w-[222px] origin-top-left -rotate-[5deg]">
      <FloatingLabel icon={assets.iconAddress} label="Change Quantities / Remove Items" />
      <div className="mt-1 rounded-[10px] bg-white px-3 pb-4 pt-2.5 shadow-lg">
        <label className="text-[10px] text-black">Update Shipping Address</label>
        <div className="mt-1.5 rounded-[7px] bg-[#f4f4f4] px-2.5 py-2 text-[11px] text-black/50">
          City
        </div>
      </div>
    </div>
  );
}

function DeliveryCard() {
  return (
    <div className="w-[222px] origin-top-right -rotate-[8deg]">
      <FloatingLabel icon={assets.iconDelivery} label="Change Quantities / Remove Items" />
      <div className="mt-1 rounded-lg bg-white p-2 shadow-lg">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src={assets.mapFold} alt="" className="size-2.5" />
            <span className="text-[8px] text-black">Preferred Delivery Date</span>
          </div>
          <img src={assets.chevronSmall} alt="" className="h-1 w-2 rotate-180" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded bg-[#ffe7e0]">
              <img src={assets.truck} alt="" className="size-2.5" />
            </div>
            <div className="flex-1">
              <p className="text-[6px] font-semibold uppercase text-[rgba(62,181,56,0.6)]">
                Free Delivery
              </p>
              <p className="text-[8px] text-black">Friday, 7 march</p>
            </div>
            <img src={assets.radioSelected} alt="" className="size-3" />
          </div>
          <div className="flex items-center gap-2">
            <img src={assets.radioUnselected} alt="" className="size-6" />
            <div className="flex-1">
              <p className="text-[6px] font-semibold uppercase text-black/60">
                Fast delivery (+$5)
              </p>
              <p className="text-[8px] text-black">Friday, 3 march</p>
            </div>
            <img src={assets.radioFrame} alt="" className="size-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuantityCard() {
  return (
    <div className="w-[222px] origin-top-right rotate-[2deg]">
      <FloatingLabel icon={assets.iconQuantity} label="Change Quantities / Remove Items" />
      <div className="mt-1 rounded-[11px] bg-white p-2 shadow-lg">
        <div className="flex gap-3">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-[#ffe7e0]">
            <img
              src={assets.product}
              alt=""
              className="absolute left-1/2 top-1/2 size-[47px] -translate-x-1/2 -translate-y-1/2 object-cover"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
            <div className="h-1.5 w-24 rounded-full bg-[#e3e3e3]" />
            <div className="h-1.5 w-full rounded-full bg-[#e3e3e3]" />
            <QuantityStepper />
          </div>
        </div>
      </div>
    </div>
  );
}

const CONNECTOR_LEFT_PATHS = [
  "M0 84.9846C24.5378 84.9846 44.4297 104.876 44.4297 129.414V149.592C44.4297 175.942 65.7903 197.302 92.14 197.302H111.324",
  "M0.000489617 84.9839H2.68373C25.7397 84.9839 44.4302 66.2933 44.4302 43.2374C44.4302 20.1815 63.1207 1.49095 86.1767 1.49095H111.324",
];

const CONNECTOR_RIGHT_PATHS = [
  "M0.000529657 113.809C24.5384 113.809 44.4302 93.917 44.4302 69.3791V49.2012C44.4302 22.8515 65.7909 1.49095 92.1405 1.49095H111.324",
  "M0 113.809H2.68324C25.7392 113.809 44.4297 132.5 44.4297 155.556C44.4297 178.612 63.1203 197.302 86.1762 197.302H111.324",
];

function ConnectorBracket({ side }: { side: "left" | "right" }) {
  const paths = side === "left" ? CONNECTOR_LEFT_PATHS : CONNECTOR_RIGHT_PATHS;

  return (
    <div
      className={`pointer-events-none h-[196px] w-[111px] ${
        side === "left" ? "-scale-y-100 rotate-180" : ""
      }`}
      aria-hidden
    >
      <svg
        viewBox="0 0 111.325 198.793"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible"
        preserveAspectRatio="none"
      >
        {paths.map((d) => (
          <path
            key={d}
            d={d}
            stroke="#FF5E49"
            strokeOpacity={0.4}
            strokeWidth={2.98189}
          />
        ))}
      </svg>
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[1242px] px-4">
      {/* Desktop — positions mapped from Figma (1242×500 illustration zone) */}
      <div className="relative mx-auto hidden h-[500px] w-full overflow-visible lg:block">
        <div className="absolute left-[27%] top-[36%] z-0">
          <ConnectorBracket side="left" />
        </div>
        <div className="absolute left-[64%] top-[28%] z-0">
          <ConnectorBracket side="right" />
        </div>

        <div className="absolute left-[12.5%] top-[4%] z-10">
          <ContactCard />
        </div>
        <div className="absolute left-[12.5%] top-[62%] z-10">
          <AddressCard />
        </div>
        <div className="absolute right-[11%] top-[2%] z-10">
          <DeliveryCard />
        </div>
        <div className="absolute right-[9%] top-[58%] z-10">
          <QuantityCard />
        </div>

        <div className="absolute left-1/2 top-[14%] z-20 -translate-x-1/2">
          <OrderCard />
        </div>
      </div>

      {/* Mobile / tablet */}
      <div className="flex flex-col items-center gap-8 py-8 lg:hidden">
        <OrderCard />
        <div className="grid w-full max-w-md grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex justify-center">
            <ContactCard />
          </div>
          <div className="flex justify-center">
            <DeliveryCard />
          </div>
          <div className="flex justify-center">
            <AddressCard />
          </div>
          <div className="flex justify-center">
            <QuantityCard />
          </div>
        </div>
      </div>
    </div>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      heading: "Install the app",
      body: "Add Customizer to your Shopify store in one click. No code required.",
    },
    {
      step: "02",
      heading: "Set your rules",
      body: "Choose which order fields customers can edit and how long they have to make changes.",
    },
    {
      step: "03",
      heading: "Reduce support load",
      body: "Customers self-serve edits while you focus on growing your business.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#fce1df] to-[rgba(255,247,246,0.6)] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="How It Works"
          subtitle="Three simple steps to give your customers control and cut support tickets."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className={`flex flex-col rounded-[28px] bg-white p-8 ${CARD_SHADOW}`}
            >
              <span className="inline-flex w-fit rounded-[10.5px] bg-[#ff7a68] px-3 py-1 text-[13px] font-medium text-white shadow-[0px_7px_18px_0px_rgba(255,94,73,0.45)]">
                {item.step}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.5px] text-[#402926]">
                {item.heading}
              </h3>
              <p className="mt-3 text-[15px] font-medium leading-relaxed text-[rgba(64,41,38,0.7)]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const quotes = [
    {
      quote:
        "Cut our order-edit support tickets by 40% in the first month.",
      name: "Sarah M.",
      store: "Bloom & Co.",
    },
    {
      quote:
        "Customers love being able to fix their address without emailing us.",
      name: "James T.",
      store: "Urban Goods",
    },
    {
      quote:
        "Setup took five minutes. The AOV bump was a nice surprise.",
      name: "Priya K.",
      store: "Luxe Skincare",
    },
    {
      quote:
        "Finally, a post-purchase experience that actually works.",
      name: "Marcus L.",
      store: "Peak Outdoors",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[rgba(255,247,246,0.6)] to-[#fff7f6] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="What Merchants Say"
          subtitle="Real results from Shopify stores using Customizer every day."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((item) => (
            <blockquote
              key={item.quote}
              className={`rounded-[28px] bg-white p-8 ${CARD_SHADOW}`}
            >
              <p className="text-[17px] font-medium leading-relaxed tracking-[-0.2px] text-[#402926]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-full bg-[#ffe9e6] text-sm font-semibold text-[#ff5e49]">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#402926]">
                    {item.name}
                  </p>
                  <p className="text-[13px] text-[rgba(64,41,38,0.55)]">
                    {item.store}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "quarterly">("monthly");

  const plans = [
    {
      id: "starter",
      badge: "Starter",
      badgeStyle: "bg-[#ff7a68] text-white",
      description:
        "Perfect for small stores getting started with self-serve order edits.",
      monthlyPrice: 29,
      features: [
        "Up to 500 orders/month",
        "Address & quantity edits",
        "30-minute edit window",
        "Email notifications",
        "Basic dashboard",
      ],
      cta: "Get started",
      ctaVariant: "outline" as const,
      highlighted: false,
    },
    {
      id: "pro",
      badge: "Pro",
      badgeStyle: "bg-[#ff7a68] text-white",
      description:
        "For growing brands that need more flexibility and faster turnaround.",
      monthlyPrice: 79,
      features: [
        "Unlimited orders",
        "All edit types included",
        "Custom edit time windows",
        "Slack & dashboard updates",
        "Priority support",
        "AOV optimization tools",
      ],
      cta: "Get started",
      ctaVariant: "outline" as const,
      highlighted: false,
    },
    {
      id: "custom",
      badge: "Custom",
      badgeStyle: "bg-white text-[#402926]",
      description:
        "For high-volume stores with advanced workflows and dedicated needs.",
      monthlyPrice: null,
      features: [
        "Everything in Pro",
        "Multi-store management",
        "Custom development",
        "Dedicated account manager",
        "SLA & priority support",
        "Advanced analytics",
      ],
      cta: "Book a Call",
      ctaVariant: "dark" as const,
      highlighted: true,
    },
  ];

  const formatPrice = (monthly: number) => {
    const price =
      billing === "quarterly" ? Math.round(monthly * 0.9) : monthly;
    return price;
  };

  return (
    <section className="relative bg-gradient-to-b from-[#fff7f6] via-[rgba(255,237,233,0.5)] to-[#fce1df] px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Choose your right plan!"
          subtitle="Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for a seamless fit!"
        />

        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full bg-white p-1.5 shadow-[0px_5px_10px_0px_rgba(255,94,73,0.08)]">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-6 py-2.5 text-[14px] font-medium tracking-[-0.14px] transition-colors ${
                billing === "monthly"
                  ? "bg-[#ff7a68] text-white shadow-[0px_4px_12px_0px_rgba(255,94,73,0.35)]"
                  : "text-[rgba(64,41,38,0.6)]"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("quarterly")}
              className={`rounded-full px-6 py-2.5 text-[14px] font-medium tracking-[-0.14px] transition-colors ${
                billing === "quarterly"
                  ? "bg-[#ff7a68] text-white shadow-[0px_4px_12px_0px_rgba(255,94,73,0.35)]"
                  : "text-[rgba(64,41,38,0.6)]"
              }`}
            >
              Quarterly{" "}
              <span className={billing === "quarterly" ? "text-white/85" : ""}>
                (save 10%)
              </span>
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col rounded-[24px] p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-[#ffd4cc] via-[#ffe9e6] to-[#fff0ee]"
                  : `bg-white ${CARD_SHADOW}`
              }`}
            >
              <span
                className={`inline-flex w-fit rounded-lg px-3 py-1 text-[13px] font-semibold ${plan.badgeStyle}`}
              >
                {plan.badge}
              </span>

              <p className="mt-5 text-[14px] font-medium leading-relaxed text-[rgba(64,41,38,0.65)]">
                {plan.description}
              </p>

              <div className="mt-6 mb-8">
                {plan.monthlyPrice !== null ? (
                  <p className="flex items-baseline gap-1">
                    <span className="text-[42px] font-semibold tracking-[-2px] text-[#402926]">
                      ${formatPrice(plan.monthlyPrice)}
                    </span>
                    <span className="text-[15px] font-medium text-[rgba(64,41,38,0.5)]">
                      /month
                    </span>
                  </p>
                ) : (
                  <p className="text-[32px] font-semibold tracking-[-1.5px] text-[#402926]">
                    Let&apos;s Talk!
                  </p>
                )}
              </div>

              <ul className="mb-8 flex flex-1 flex-col gap-3.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[14px] font-medium text-[#402926]"
                  >
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.ctaVariant === "outline" ? (
                <OutlineButton>{plan.cta}</OutlineButton>
              ) : (
                <DarkButton>{plan.cta}</DarkButton>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          <p className="text-[15px] font-medium text-[rgba(64,41,38,0.6)]">
            14-day free trial on all plans · Cancel anytime
          </p>
          <PrimaryButton showIcon={false}>Start Free Trial</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export function HeroDesign() {
  return (
    <div className="w-full" data-node-id="1006:2" data-name="Hero Design">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[rgba(255,237,233,0.8)] to-[#fce1df] pb-16 pt-6">
        <img
          src={assets.wave}
          alt=""
          className="pointer-events-none absolute bottom-0 left-1/2 w-full max-w-[1600px] -translate-x-1/2 opacity-80"
        />

        <nav className="relative z-20 mx-auto flex w-[calc(100%-48px)] max-w-[1060px] items-center justify-between gap-4 rounded-[18px] bg-white px-3 py-2 shadow-[0px_54px_11px_0px_rgba(255,103,92,0.01)]">
          <img src={assets.logo} alt="Logo" className="ml-2 h-7 w-14" />
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden items-center gap-5 text-[14px] font-medium capitalize tracking-[-0.14px] text-black sm:flex">
              <span>Home</span>
              <span>How it Works</span>
              <span className="flex items-center gap-1.5">
                Resources
                <img src={assets.chevron} alt="" className="h-1 w-2.5" />
              </span>
            </div>
            <PrimaryButton size="nav">Install Customizer</PrimaryButton>
          </div>
        </nav>

        <div className="relative z-10 mx-auto mt-16 flex max-w-[720px] flex-col items-center gap-[22px] px-6 text-center">
          <div className="flex flex-col items-center gap-[18px]">
            <div className="flex items-center gap-[7px] rounded-[8px] bg-white py-1 pl-1 pr-2 shadow-sm">
              <span className="relative rounded-[10.5px] bg-[#ff7a68] px-2.5 py-1 text-[13px] font-medium text-white shadow-[0px_7px_18px_0px_rgba(255,94,73,0.45)]">
                31%
              </span>
              <span className="text-[13px] font-medium text-[#402926]">
                Increased AOV Value 🎉
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-[-2px] text-[#402926] sm:text-5xl lg:text-[55px] lg:leading-[52px] lg:tracking-[-2.75px]">
              Cut Support Tickets & Let Customers Edit Orders
            </h1>
            <p className="max-w-[540px] text-base font-medium text-[rgba(64,41,38,0.77)] sm:text-lg">
              Let Customers Edit Orders Themselves: Save your customers time and
              yourself from support email headaches
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-[14px]">
            <SecondaryButton>Get Demo</SecondaryButton>
            <PrimaryButton>Install Customizer</PrimaryButton>
          </div>
        </div>

        <div className="relative z-10 mt-10 overflow-visible pb-8">
          <HeroIllustration />
        </div>
      </section>

      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />

      <footer className="border-t border-[#fce1df] bg-white px-6 py-12 text-center text-sm text-black/50">
        <img src={assets.logo} alt="Logo" className="mx-auto mb-4 h-6 w-12 opacity-60" />
        <p>© 2026 Customizer. All rights reserved.</p>
      </footer>
    </div>
  );
}
