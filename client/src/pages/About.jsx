import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About <span className="text-orange-400">Blogger 5ive&copy;</span>
          </h1>
          <div className="text-md text-gray-300 flex flex-col gap-6">
            <p>
              Welcome to Blogger 5ive, your go-to destination for insightful and
              engaging content across a variety of topics. Created from a
              passion for storytelling, our platform is a haven for both
              seasoned and aspiring bloggers. We believe in the power of words
              to inspire, inform, and connect people from all walks of life.
            </p>
            <p>
              At Blogger 5ive, diversity is our strength. Our team of talented
              writers brings a wealth of perspectives, ensuring a rich tapestry
              of ideas and opinions. Whether you're seeking practical advice,
              thought-provoking discussions, or simply a delightful escape from
              the ordinary, we've got you covered.
            </p>
            <p>
              Join us on a journey of discovery as we explore the latest trends,
              share personal experiences, and dive deep into the issues that
              matter most. Blogger 5ive is more than a platform; it's a
              community of like-minded individuals who share a love for the
              written word. Let's embark on this blogging adventure together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
