type FeatureCardProps = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
};

export function FeatureCard({
  iconSrc,
  iconAlt,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="flex h-full flex-col gap-6 bg-card p-4 pt-8">
      <div className="flex size-12 items-center justify-center rounded-full bg-brand p-2.5">
        <img src={iconSrc} alt={iconAlt} className="size-8" />
      </div>
      <h3 className="text-2xl font-medium leading-[1.3] text-white">{title}</h3>
      <p className="text-base font-medium leading-[1.3] text-white">
        {description}
      </p>
    </article>
  );
}
