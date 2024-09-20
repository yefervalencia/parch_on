import Image from "next/image";

export const Manizales = () => {
  return (
    <Image
      className="image-manizales"
      src="/manizales.jpg"
      alt="Manizales emblematic spot"
      width={800}
      height={560}
    />
  );
};
