import Image from 'next/image';

import { CalendarMonthTheme } from './theme';

interface HeroImageProps {
  theme: CalendarMonthTheme;
}

function HeroImage({ theme }: HeroImageProps) {
  const imageSrc = `/calendar/${theme.month}.jpg`;

  return (
    <div className="h-40 self-stretch sm:h-52 lg:h-auto">
      <Image
        src={imageSrc}
        alt={`Hero Image`}
        width={400}
        height={600}
        className="h-full w-full rounded-l object-cover object-[center_60%] sm:object-center lg:h-183 lg:w-100"
      />
    </div>
  );
}

export { HeroImage };
