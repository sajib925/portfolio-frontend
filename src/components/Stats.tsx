"use client";
import CountUp from "react-countup";

export const Stats = () => {
  const stats: { num: number | string; text: string }[] = [
    {
      num: 2,
      text: "Years of experience",
    },
    {
      num: 10,
      text: "Projects completed",
    },
    {
      num: 15,
      text: "Technologies mastered",
    },
    {
      num: "500+",
      text: "Code commits",
    },
  ];

  return (
    <section className="container mx-auto pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
        {stats.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
            >
              <CountUp
                end={typeof item.num === "number" ? item.num : 500}
                duration={5}
                delay={2}
                className="text-4xl font-extrabold xl:text-6xl"
              />
              <p
                className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
