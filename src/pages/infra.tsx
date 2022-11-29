import { Link } from "react-router-dom";
import infrasvg from "../assets/infra/infrasvg.svg";

const Infra: (arg: any) => JSX.Element = () => {
  return (
    <>
      <section className=" dark:text-primary">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={infrasvg}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Our
              <span className="text-violet-400"> Presence</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Because of providing quality education to the people and always
              maintaining the sense of commitment, NCFT Heights has succeeded to
              inculcate the sense of trust among the people
              <br className="hidden md:inline lg:hidden" />, as a result within
              a short span of time, the Institute has set up more than 150
              centres in South India.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link to="explore">
              <button 
                className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900"
              >
                Explore
              </button>
              </Link>
              <Link to="/virtual">
                <button className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">
                  Virtual Tour
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Infra;
