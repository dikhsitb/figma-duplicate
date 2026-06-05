import { Button } from "./Button";

type ContentSectionProps = {
  title: string;
  description: string;
  buttonLabel: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  imageClassName?: string;
};

export function ContentSection({
  title,
  description,
  buttonLabel,
  imageSrc,
  imageAlt,
  reversed = false,
  imageClassName = "",
}: ContentSectionProps) {
  const textBlock = (
    <div className="flex flex-col gap-[59px]">
      <h2 className="max-w-[443px] text-[32px] font-semibold leading-normal text-white">
        {title}
      </h2>
      <p className="max-w-[517px] text-xl font-medium leading-[1.3] text-white">
        {description}
      </p>
      <div>
        <Button>{buttonLabel}</Button>
      </div>
    </div>
  );

  const imageBlock = (
    <div className="relative aspect-[571/473] w-full max-w-[571px] overflow-hidden">
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`h-full w-full object-cover ${imageClassName}`}
      />
    </div>
  );

  return (
    <section className="px-6 py-16 lg:px-8 lg:py-24">
      <div
        className={`mx-auto flex max-w-7xl flex-col items-center gap-12 lg:gap-16 ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="flex-1">{textBlock}</div>
        <div className="flex flex-1 justify-center">{imageBlock}</div>
      </div>
    </section>
  );
}
