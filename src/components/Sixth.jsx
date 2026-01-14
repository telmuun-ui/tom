import React from "react";

export const Sixth = () => {
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
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row-reverse rounded-xl shadow-md bg-gray-50 overflow-hidden">
          <div className="w-full lg:w-1/2 flex justify-center items-center p-4 sm:p-8">
            <img
              src="/zurag2.png"
              alt="Mentorhub"
              className="w-full max-w-md lg:max-w-full rounded-xl object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 bg-white p-6 sm:p-10">
            <div className="text-lg sm:text-xl font-semibold">Mentorhub</div>

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
