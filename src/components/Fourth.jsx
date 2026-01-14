import React from "react";

export const Fourth = () => {
  const experiences = [
    {
      logo: "/logo-upwork.png",
      title: "Sr. Frontend Developer",
      date: "Nov 2021 - Present",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      logo: "/logo-upwork.png",
      title: "Team Lead",
      date: "Jul 2017 - Oct 2021",
      points: [
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      logo: "/logo-upwork.png",
      title: "Full Stack Developer",
      date: "Dec 2015 - May 2017",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 w-full py-12 sm:py-16 lg:py-20">
      <p className="mx-auto text-center text-sm mb-3 bg-gray-100 text-gray-600 px-3 py-1 rounded-full w-max">
        Experience
      </p>

      <h2 className="text-center text-gray-700 text-base sm:text-xl font-light mb-10 sm:mb-14 px-4">
        Here is a quick summary of my most recent experiences:
      </h2>

      <div className="flex flex-col gap-6 sm:gap-10 w-full max-w-4xl mx-auto px-4 sm:px-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 sm:p-8 flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-6 items-start"
          >
            <img
              src={exp.logo}
              className="w-20 sm:w-24 object-contain mt-1 flex-shrink-0"
              alt="logo"
            />

            <div className="flex-1 w-full">
              <p className="text-xs sm:hidden text-gray-500 mb-2">{exp.date}</p>

              <h3 className="font-semibold text-gray-800 text-base sm:text-lg mb-3">
                {exp.title}
              </h3>

              <ul className="list-disc ml-5 text-gray-600 text-sm space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <p className="hidden sm:block text-sm text-gray-500 whitespace-nowrap">
              {exp.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
