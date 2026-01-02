import React from "react";

export const LineTwo = () => {
  return (
    <section className="bg-gray-50 w-full py-24">
      <div className="flex justify-center mb-20">
        <div className="bg-gray-200 py-2 px-6 rounded-2xl text-gray-600">
          About me
        </div>
      </div>

      <div className="max-w-[1440px] justify-center flex gap-24 items-start">
        <div className="relative w-[400px] h-[400px] flex-shrink-0">
          <div className="absolute top-6 left-6 w-full h-full bg-gray-300"></div>
          <div className="absolute top-3 left-3 w-full h-full bg-white"></div>
          <img
            src="/me.jpg"
            alt="me"
            className="relative w-full h-full object-cover"
          />
        </div>

        <div className="max-w-[600px] flex flex-col gap-5 text-gray-700">
          <h3 className="font-semibold">Curious about me? Here you have it:</h3>

          <p>
            I'm a designer turned full stack developer, passionate about
            React.js and Node.js. I excel in blending technical and visual
            aspects to craft exceptional digital products, prioritizing user
            experience, precise design, and optimized code.
          </p>

          <p>
            Since starting my web development journey in 2015, I've embraced
            challenges and kept up with the latest tech trends. Now in my early
            thirties, seven years in, I'm building cutting-edge web apps using
            Next.js, TypeScript, NestJS, Tailwind CSS, Supabase, and more.
          </p>

          <p>
            With a progressive mindset, I enjoy the entire product development
            process, from ideation to execution. Off duty, you'll find me on
            Twitter, tracking startup journeys, or unwinding.
          </p>

          <p>Finally, some quick bits about me:</p>

          <ul className="list-disc pl-5 flex gap-12">
            <div>
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
            </div>
            <div>
              <li>Avid learner</li>
            </div>
          </ul>

          <p>
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </section>
  );
};
