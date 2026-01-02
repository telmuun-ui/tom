import React from "react";

export const Third = () => {
  const skills = [
    { name: "Javascript", icon: "/icon-javscript.svg" },
    { name: "Typescript", icon: "/icon-typescript.svg" },
    { name: "React", icon: "icon-react.svg" },
    { name: "Next.js", icon: "icon-nextjs.svg" },
    { name: "Node.js", icon: "icon-nodejs.svg" },
    { name: "Express.js", icon: "icon-express.svg" },
    { name: "Nest.js", icon: "icon-nest.svg" },
    { name: "Socket.io", icon: "icon-socket.svg" },
    { name: "PostgreSQL", icon: "icon-postgresql.svg" },
    { name: "MongoDB", icon: "icon-mongodb.svg" },
    { name: "Sass/Scss", icon: "icon-sass.svg" },
    { name: "Tailwindcss", icon: "icon-tailwindcss.svg" },
    { name: "Figma", icon: "icon-figma.svg" },
    { name: "Cypress", icon: "icon-cypress.svg" },
    { name: "Storybook", icon: "icon-storybook.svg" },
    { name: "Git", icon: "icon-git.svg" },
  ];

  return (
    <section className="py-16">
      <h2 className="text-center text-gray-600 text-xl font-normal">
        The skills, tools and technologies I am really good at:
      </h2>
      <div className="mt-12 grid grid-rows-2 grid-flow-col gap-x-12 gap-y-10 px-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-3 min-w-[100px]"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 object-contain"
            />
            <p className="text-gray-600 text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
