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
    <section className="bg-gray-50 w-full py-20">
      <p className="mx-auto text-center text-sm mb-3 bg-gray-100 text-gray-600 px-3 py-1 rounded-full w-max">
        Experience
      </p>

      <h2 className="text-center text-gray-700 text-xl font-light mb-14">
        Here is a quick summary of my most recent experiences:
      </h2>

      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-8 flex justify-between gap-6 items-start"
          >
            <img
              src={exp.logo}
              className="w-24 object-contain mt-1"
              alt="logo"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-lg mb-3">
                {exp.title}
              </h3>

              <ul className="list-disc ml-5 text-gray-600 text-sm space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-500 whitespace-nowrap">
              {exp.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
