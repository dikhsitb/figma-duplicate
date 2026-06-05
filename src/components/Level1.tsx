import { Button } from "./Button";
import { ContentSection } from "./ContentSection";
import { FeatureCard } from "./FeatureCard";
import { Header } from "./Header";

const analyticsDescription =
  "With Linkd you can view click counts, see where your traffic is coming from, and track what's happening with your links in one dashboard!";

const features = [
  {
    iconSrc: "/assets/robot.svg",
    iconAlt: "Robot icon",
    title: "Conversion Tracking",
    description:
      "Turn clicks into customers — track every signup, purchase, and action that happens after the click.",
  },
  {
    iconSrc: "/assets/coins.svg",
    iconAlt: "Coins icon",
    title: "Spam & Bot Filtering",
    description:
      "Keep your data clean and trustworthy by automatically filtering out bots, crawlers, and fraudulent clicks.",
  },
  {
    iconSrc: "/assets/gitfork.svg",
    iconAlt: "Git fork icon",
    title: "A/B Split Testing",
    description:
      "Test two or more destinations against each other and let your data decide which one wins.",
  },
  {
    iconSrc: "/assets/webhooks.svg",
    iconAlt: "Webhooks icon",
    title: "Realtime Event Webhooks",
    description:
      "Get instant notifications the moment something happens. No polling, no delays, no guessing.",
  },
];

export function Level1() {
  return (
    <div className="min-h-full bg-surface" data-node-id="1:4250" data-name="Level 1">
      <Header />

      {/* Hero */}
      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-1 flex-col gap-[59px]">
            <h1 className="max-w-[443px] text-[32px] font-semibold leading-normal text-white">
              Track your links with Linkd for better results.
            </h1>
            <p className="max-w-[517px] text-xl font-medium leading-[1.3] text-white">
              With Linkd you can track clicks to links, revenue attribution,
              filter bots, A/B route traffic. You can also connect custom domain
              names, and password protect any page you wish with just one
              setting!
            </p>
            <div>
              <Button>Get Started</Button>
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="relative aspect-[571/473] w-full max-w-[571px] overflow-hidden">
              <img
                src="/assets/hero.jpg"
                alt="Person working on a laptop"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <ContentSection
        title="Get access to a diverse set of analytics with Linkd"
        description={analyticsDescription}
        buttonLabel="Explore Analytics"
        imageSrc="/assets/analytics.jpg"
        imageAlt="Analytics dashboard on a laptop"
        reversed
      />

      {/* Feature grid */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* Custom domains */}
      <ContentSection
        title="Use custom domains when you use Linkd"
        description={analyticsDescription}
        buttonLabel="Explore Analytics"
        imageSrc="/assets/domains.jpg"
        imageAlt="Person using laptop on a sofa"
      />

      {/* Security */}
      <ContentSection
        title="Get access to a diverse set of analytics with Linkd"
        description={analyticsDescription}
        buttonLabel="Explore Analytics"
        imageSrc="/assets/security.jpg"
        imageAlt="Door lock with keys"
        reversed
      />

      {/* Team collaboration */}
      <ContentSection
        title="Get access to a diverse set of analytics with Linkd"
        description={analyticsDescription}
        buttonLabel="Explore Analytics"
        imageSrc="/assets/team.jpg"
        imageAlt="Team collaborating in an office"
      />
    </div>
  );
}
