import Image from 'next/image';

function HeroImage() {
  return (
    <div className="h-40 self-stretch sm:h-52 lg:h-auto">
      <Image
        src={'/calendar/jan.jpeg'}
        alt="January Hero Image"
        width={400}
        height={600}
        className="h-full w-full object-cover lg:w-100"
      />
    </div>
  );
}

export { HeroImage };
