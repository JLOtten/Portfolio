"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { on } from "events";

type ProjectProps = (typeof projectsData)[number] & { onClick: () => void };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
  onClick,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <motion.div
      onClick={onClick}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 last:mb 0"
    >
      <section
        className="group bg-100 max-w-[42rem] border border-black/5 rounded-lg
    overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 
    transition flex flex-col sm:flex-row"
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] 
        flex flex-col h-full"
        >
          <h3
            className="text-2xl
        font-semibold"
          >
            {title}
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] 
                uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="
            w-[28.25rem] rounded-t-lg shadow-2xl
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2 sm:absolute sm:top-8 sm:-right-40"
        />
      </section>
    </motion.div>
  );
}
