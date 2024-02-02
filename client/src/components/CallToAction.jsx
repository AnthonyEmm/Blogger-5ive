import { Button } from "flowbite-react";
import React from "react";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-cyan-300 justify-center item-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Dreaming to take advantage today to master Next.js?
        </h2>
        <p className="text-gray-300 my-2">
          Go from beginner to expert by learning the foundations of Next.js and
          building a fully functional demo website that uses all the latest
          features.
        </p>
        <Button
          gradientDuoTone="purpleToBlue"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Tutorial
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default CallToAction;
