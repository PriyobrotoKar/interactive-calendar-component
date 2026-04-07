import Image from "next/image";

function HeroImage() {
  return (
    <div>
      <Image
        src={"/calendar/jan.jpeg"}
        alt="January Hero Image"
        width={400}
        height={600}
      />
    </div>
  );
}

export { HeroImage };
