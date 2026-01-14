import React from "react";

export const Fifth = () => {
  const apps = [
    { name: "React" },
    { name: "PostgreSQL.js" },
    { name: "Next.js" },
    { name: "Typescript.js" },
    { name: "Nest.js" },
    { name: "Tailwindcss" },
    { name: "Figma" },
    { name: "Cypress" },
    { name: "Storybook" },
    { name: "Git" },
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <p className="mx-auto text-center text-sm mb-3 bg-gray-100 text-gray-600 px-3 py-1 rounded-full w-max">
        Work
      </p>

      <h2 className="text-center font-light text-gray-700 text-base sm:text-xl mb-10 sm:mb-14 px-4">
        Some of the noteworthy projects I have built:
      </h2>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row rounded-xl shadow-md bg-gray-50 overflow-hidden">
          <div className="w-full lg:w-1/2 flex justify-center items-center p-4 sm:p-8">
            <img
              src="/ubcab1.png"
              alt="UBCab"
              className="w-full max-w-md lg:max-w-full rounded-xl object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 bg-white p-6 sm:p-10">
            <div className="text-lg sm:text-xl font-semibold">UBCab</div>

            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>

            <div className="mt-6 sm:mt-10 flex flex-wrap gap-2">
              {apps.map((app) => (
                <div
                  key={app.name}
                  className="text-gray-600 text-xs sm:text-sm bg-gray-200 rounded-2xl px-4 py-1"
                >
                  {app.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
