import React from "react";

export const Third = () => {
  const skills = [
    { name: "Javascript", icon: "/icon-javscript.svg" },
    { name: "Typescript", icon: "/icon-typescript.svg" },
    { name: "React", icon: "/icon-react.svg" },
    { name: "Next.js", icon: "/icon-nextjs.svg" },
    { name: "Node.js", icon: "/icon-nodejs.svg" },
    { name: "Express.js", icon: "/icon-express.svg" },
    { name: "Nest.js", icon: "/icon-nest.svg" },
    { name: "Socket.io", icon: "/icon-socket.svg" },
    { name: "PostgreSQL", icon: "/icon-postgresql.svg" },
    { name: "MongoDB", icon: "/icon-mongodb.svg" },
    { name: "Sass/Scss", icon: "/icon-sass.svg" },
    { name: "Tailwindcss", icon: "/icon-tailwindcss.svg" },
    { name: "Figma", icon: "/icon-figma.svg" },
    { name: "Cypress", icon: "/icon-cypress.svg" },
    { name: "Storybook", icon: "/icon-storybook.svg" },
    { name: "Git", icon: "/icon-git.svg" },
  ];

  return (
    <section className="w-full py-12 sm:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-24">
        <h2 className="text-center text-gray-600 text-base sm:text-xl font-normal">
          The skills, tools and technologies I am really good at:
        </h2>

        {/* ✅ mobile friendly grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-10">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-3">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
              <p className="text-gray-600 text-xs sm:text-sm text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
