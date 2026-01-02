import React from "react";

export const Seventh = () => {
  const apps = [
    { name: "React" },
    { name: "PostgreSQL.js" },
    { name: "Next.js" },
    { name: "Tyoescript.js" },
    { name: "Nest.js" },
    { name: "Tailwindcss" },
    { name: "Figma" },
    { name: "Cypress" },
    { name: "Storybook" },
    { name: "Git" },
  ];
  return (
    <section className=" py-20">
      <div className="flex rounded-xl shadow-md bg-gray-50 max-w-6xl mx-auto  h-120">
        <div className="flex justify-center items-center w-143 h-120">
          <div className="flex-shrink-0 w-[480px] h-[384px]">
            <img
              src="/toim.jpg"
              alt="iToim project"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="bg-white w-145 h-120 rounded-r-lg">
          <div className="flex text-xl pt-12 pl-12 font-semibold">iToim</div>
          <div className="flex text-base w-120 pt-12 pl-12 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </div>
          <div className="mt-12 pl-12 flex flex-wrap gap-x-1 gap-y-2 px-4">
            {apps.map((app) => (
              <div
                key={app.name}
                className="text-gray-600 text-sm bg-gray-200 rounded-2xl items-center gap-3 pl-3 px-5 py-1"
              >
                {app.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
