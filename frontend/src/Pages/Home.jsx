import React from "react";

const Home = () => {
  return (
    <div>
      <section className=" body-font">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium font-bold">
              JSON Data of Companies
            </h1>
            <p className="mb-8 leading-relaxed">
              This is a frontend of a website which populates companies data
              into tables, charts etc coming from Backend.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="company"
              src="/hero.gif"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
