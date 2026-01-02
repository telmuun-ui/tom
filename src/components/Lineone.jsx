import React from "react";

export const Lineone = () => {
  return (
    <section className="w-full mb-25 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-24 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
        <div className="flex flex-col gap-4 pt-24 max-w-[600px]">
          <h1 className="text-6xl font-bold">Hi, I'm Telmuun 👋</h1>

          <p className="text-gray-600 leading-relaxed">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>

          <div className="flex flex-col mt-8 gap-3">
            <div className="flex items-center gap-2 text-gray-600">
              <img src="/icon.png" alt="location" className="w-5 h-5" />
              <span>Ulaanbaatar, Mongolia</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Available for new projects</span>
            </div>
          </div>

          <div className="flex items-center mt-10 gap-4">
            <img
              src="/git.png"
              alt="GitHub"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="/twit.png"
              alt="Twitter"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="/figma.png"
              alt="Figma"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>

        <div className="relative mt-24 w-[280px] h-[360px] flex-shrink-0">
          <div className="absolute top-6 left-6 w-full h-full bg-gray-300"></div>
          <div className="absolute top-3 left-3 w-full h-full bg-white"></div>

          <img
            src="/DSC05203.jpg"
            alt="Telmuun"
            className="relative w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
