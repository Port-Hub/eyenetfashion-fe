import Pg1img1 from "../../assets/beautician/Beautician_1.jpg";
import Pg1img2 from "../../assets/beautician/Parlour_Infra_1.jpg";
import Pg1img3 from "../../assets/beautician/Parlour_Infra.jpg";
import Pg1img4 from "../../assets/beautician/Parlour_Infra_2.jpg";
import Pg1img5 from "../../assets/beautician/Parlour_Infra_3.jpg";
import { Link } from "react-router-dom";

const Beautician = () => {
  return (
    <>
      <div className="drawer h-fit ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="container mx-auto">
            <div className="flex flex-col">
              <div>
                <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight pt-10">
                  <span>Best</span>{" "}
                  <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                    Training Institute
                  </span>{" "}
                  <span>for Beautician Courses</span>
                </h1>
                <div className="prose-lg">
                  <br />
                  A thing of Beauty is a Joy Forever. True to its sense, looking
                  at beautiful things always gives pleasure or joy to everyone.
                  Every person in this world is attracted to beauty and want to
                  look beautiful. There has been an increased awareness about
                  beauty and grooming in the past years as more and more people
                  have started to go to Beauty Parlours & Spas to enhance their
                  appearance
                  <br />
                  <br />
                  <div>
                    The Art of Beauty & Cosmetology has helped many ordinary
                    women to become beautiful and thereby boosting their
                    confidence and career. In recent years there has been an
                    increase in the number of beauty parlour all over the
                    country. This created a demand for beauticians who have
                    completed any Beauty parlour courses, Cosmetology courses,
                    Beauty Therapist courses, or Hair and Beauty courses from a
                    reputed Institute for Beautician courses
                    <br />
                  </div>
                  <br />
                  There are many parlours offering Beautician courses in South
                  India. But they are more of practical in nature and are not
                  professional in training. NCFT Heights is the only institute
                  offering Beautician courses in Tamil Nadu, karnataka & kerala
                  at affordable fees for all segments of people. NCFT Heights is
                  the best Training Centre for Beautician Courses with well
                  trained faculty and up to date study materials. At NCFT
                  Heights we offer different beauty related courses like
                  Certificate Courses for Bridal Make up , Cosmetology Courses,
                  Beauty care Courses, Beauty Short term Courses , Beauty
                  Therapist Courses , and Hair & Beauty Courses . By completing
                  any of these courses one can either take up a job with a
                  reputed beauty salon and spa or Start their own Beautician
                  institute and provide employment to others. Being a Career in
                  Beautician is a respectable profession with a very high
                  earnings.
                  <br />
                </div>
                <div className="items-centre">
                  <label
                    htmlFor="my-drawer"
                    className="btn btn-outline btn-primary drawer-button"
                  >
                    Explore Courses
                  </label>
                </div>
              </div>
              <div className="self-center ">
                <div className="carousel  max-w-sm p-4 space-x-4 bg-white rounded-box">
                  <div id="slide1" className="carousel-item relative w-full">
                    <img src={Pg1img1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide4" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide2" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                    <img src={Pg1img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide1" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide3" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                    <img src={Pg1img3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide2" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide4" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide4" className="carousel-item relative w-full">
                    <img src={Pg1img4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide3" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide5" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide5" className="carousel-item relative w-full">
                    <img src={Pg1img5} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide4" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide1" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
                {/* <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-white rounded-box">
                  <div className="carousel-item">
                    <img src={Pg1img1} className="rounded-box" />
                  </div>
                  <div className="carousel-item">
                    <img src={Pg1img2} className="rounded-box" />
                  </div>
                  <div className="carousel-item">
                    <img src={Pg1img3} className="rounded-box" />
                  </div>
                  <div className="carousel-item">
                    <img src={Pg1img4} className="rounded-box" />
                  </div>
                  <div className="carousel-item">
                    <img src={Pg1img5} className="rounded-box" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <div className="min-h-90% flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-gray-800">
              <div className="fixed flex flex-col top-0 left-0 w-30 bg-white h-full">
                <div className="flex items-center justify-center h-14"></div>
                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                  <ul className="flex flex-col py-4 space-y-1">
                    <li className="px-5">
                      <div className="flex flex-row items-center h-8">
                        <div className="text-md font-semibold tracking-wide text-primary">
                          Diploma Courses
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link
                        to="diploma"
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-accent pr-6"
                      >
                        <span className="inline-flex justify-center items-center ml-4"></span>

                        <span className="ml-2 text-sm tracking-wide">
                          Advance Diploma in Beauty Therapy
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="aromatherapy"
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent  hover:border-accent pr-6"
                      >
                        <span className="inline-flex justify-center items-center ml-4"></span>
                        <span className="ml-2 text-sm tracking-wide">
                          Diploma in Aroma Therapy
                        </span>
                      </Link>
                    </li>
                    <li className="px-5">
                      <div className="flex flex-row items-center h-8">
                        <div className="text-md font-semibold tracking-wide text-primary">
                          Certificate Courses
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link
                        to="certificate"
                        className="relative flex flex-row items-center h-11 focus:outline-1 hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-accent pr-6"
                      >
                        <span className="inline-flex justify-center items-center ml-4"></span>
                        <span className="ml-2 text-sm tracking-wide">
                          Certificate Course in Beautician
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="haircare"
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-accent pr-6"
                      >
                        <span className="inline-flex justify-center items-center ml-4"></span>
                        <span className="ml-2 text-sm tracking-wide ">
                          Certificate in Hair Care
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="hairstylist"
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-accent pr-6"
                      >
                        <span className="inline-flex justify-center items-center ml-4"></span>
                        <span className="ml-2 text-sm tracking-wide ">
                          Certificate in Hair Stylist
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="makeupstylist"
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-accent pr-6"
                      >
                        <span className="inline-flex justify-center items-center ml-4"></span>
                        <span className="ml-2 text-sm tracking-wide ">
                          Certificate in Makeup Stylist
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="beautystylist"
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-accent pr-6"
                      >
                        <span className="inline-flex justify-center items-center ml-4"></span>
                        <span className="ml-2 text-sm tracking-wide ">
                          Certificate in Beauty Stylist
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Beautician;
