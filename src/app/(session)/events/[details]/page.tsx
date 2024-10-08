"use client";

import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import { ClockIcon, LocationIcon } from "@primer/octicons-react";
import Link from "next/link";

export default function DetailEvent() {
  const searchParams = useSearchParams();

  const { id } = useParams();
  const day = searchParams.get("day");
  const month = searchParams.get("month");
  const title = searchParams.get("title");
  const time = searchParams.get("time");
  const location = searchParams.get("location");
  const imageUrl = "/det.png";

  return (
    <div className="p-10 min-h-screen bg-black/90">
      <div className="flex justify-center mt-2 w-full">
        <div className="relative w-3/4 h-96">
          <Image
            src={imageUrl}
            alt="Event image"
            layout="fill"
            objectFit="cover"
            priority={true}
          />

          {/* Letrero de la fecha */}
          <div className="absolute top-2 left-2 bg-[#ff3385] text-white p-2 text-center rounded-br-lg">
            <p className="text-lg font-bold">{day}</p>
            <p className="text-lg">{month}</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="font-mono font-bold mb-4 text-white">{title}</h1>
        <div className="text-white text-xl mb-4 flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <ClockIcon size={24} />
            <span className="font-bold">{time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <LocationIcon size={24} />
            <span className="font-bold">{location}</span>
          </div>
        </div>
        <div className="mt-8">
          <Link href={`/tickets?id=${id}`}>
            <button
              type="button"
              className="bg-[#ff0066] font-bold text-white text-2xl px-4 py-2 rounded-2xl hover:bg-[#e6005c] "
            >
              Comprar tickets
            </button>
          </Link>
        </div>

        <div className="mt-8 text-white w-3/4 text-xl">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            interdum tincidunt tortor, vel feugiat libero efficitur ac.
            Curabitur consectetur, leo a fringilla convallis, erat nisi
            tincidunt arcu, ac tincidunt nulla nunc a augue. Sed placerat ut
            massa sed bibendum.
          </p>
          <p className="mb-4">
            Integer vehicula diam eget arcu lacinia, ac molestie erat semper.
            Vestibulum blandit magna sit amet justo tincidunt, non aliquam eros
            vestibulum. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Sed vitae dui nec quam
            consectetur ultricies.
          </p>
          <p className="mb-4">
            Suspendisse potenti. Phasellus eget libero nec magna bibendum
            sodales non a ligula. Ut nec tortor at lorem vestibulum feugiat. Ut
            a tincidunt nulla. Nulla facilisi. Phasellus tincidunt elit ut magna
            ultrices, in vulputate eros vehicula.
          </p>
        </div>
      </div>
    </div>
  );
}
