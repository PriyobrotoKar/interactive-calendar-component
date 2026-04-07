import Image from 'next/image';

function HeroImage() {
  return (
    <div className="self-stretch">
      <Image
        src={'/calendar/jan.jpeg'}
        alt="January Hero Image"
        width={400}
        height={600}
        className="h-full object-cover"
      />
    </div>
  );
}

export { HeroImage };
