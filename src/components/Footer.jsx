import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-20 items-center justify-center bg-white">
      <div className="max-w-[1440px] w-full flex flex-col items-center text-center px-6">
        <span className="mb-6 text-sm bg-gray-100 px-4 py-1 rounded-full text-gray-600">
          Get in touch
        </span>

        <p className="text-gray-600 max-w-xl mb-10">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>

        <div className="flex items-center gap-4 text-2xl font-semibold mb-4">
          <img src="./mail.svg" alt="mail" className="w-6 h-6" />
          <span>tom@pinecone.mn</span>
          <img
            src="./copy.svg"
            alt="copy"
            className="w-5 h-5 cursor-pointer opacity-60"
          />
        </div>

        <div className="flex items-center gap-4 text-2xl font-semibold mb-10">
          <img src="./phone.svg" alt="phone" className="w-6 h-6" />
          <span>+976 88112233</span>
          <img
            src="./copy.svg"
            alt="copy"
            className="w-5 h-5 cursor-pointer opacity-60"
          />
        </div>

        <p className="text-sm text-gray-500 mb-4">
          You may also find me on these platforms!
        </p>

        <div className="flex gap-6">
          <img
            src="./git.png"
            alt="github"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="./twit.png"
            alt="twitter"
            className="w-6 h-6 cursor-pointer"
          />
          <img
            src="./figma.png"
            alt="dribbble"
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
      <div className="h-[68px] font-normal text-gray-600 flex justify-center items-center bg-gray-50">
        2024 | Greetings with ❤️️ from Ulaanbaatar
      </div>
    </footer>
  );
};
