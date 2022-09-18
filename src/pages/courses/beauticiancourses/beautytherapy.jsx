import Pg2img1 from "../../../assets/beautician/Beauty_Therapy.jpg";
const photoArray = [
  {
    title: "Basics",
    points: [
      "Threading (Eye-brow)",
      "Bleach (2 types)",
      "Facial (2 types)",
      "Fruit facial",
      "Waxing (2 types)",
      "Manicure (3 types)",
      "Pedicure (3types)",
      "Oil Massage",
      "Hair cut (3 types)",
      "Henna Application",
      "Hair style (5 types)",
      "Hair colouring",
      "Mehandi (Arabic, Indian)",
      "Nail art",
      "Saree draping (4 types)",
      "Normal Makeup",
      "Bridal Makeup",
    ],
  },
  {
    title: "Theory",
    points: [
      "Histology of skin",
      "Skin types",
      "Aims of treatment",
      "Facial massage stroke",
      "Lymphatic drainage massage stroke (Acne skin)"
    ],
  },
  {
    title: "Treatment",
    points: [
      " Anti wrinkle treatment",
      "Acne treatment",
      "Under eye treatment",
      "Skin lightening facial",
      "Gold Facial",
      "Pearl Facial",
      "Dandruff ",
      "Laser Hair removal",
      "Body Massage"
    ],
  },
  {
    title: "Treatment - Practical",
    points: [
      "Galvanic machine",
      "High frequency machine",
      "Ultra sonic machine"
    ],
  },
];
const mapChild = (param) => {
  return param.map((item, index) => <li key={index}>{item}</li>);
};

const mapPhoto = (param) => {
  return param.map((item, index) => (
    <div
      key={index}
      className="flex items-stretch px-4 w-100% sm:w-1/2 lg:w-1/4 lg:px-6 flex-grow justify-center"
      data-wow-duration="1s"
      styles="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;"
    >
      <div className="py-8 px-12 mb-12 bg-white rounded-2xl shadow-2xl transform transition duration-300 ease-in-out hover:-translate-y-2">
        <div className="inline-block text-gray-900 mb-4">{item.svg}</div>
        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sta">{mapChild(item.points)}</p>
      </div>
    </div>
  ));
};
const photoList = mapPhoto(photoArray);
const Beautytherapy = () => {
  return (
    <>
      <>
        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight pt-10 text-center">
          Advance Diploma in Beauty Therapy{" "}
        </h1>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
          <img
            src={Pg2img1}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-xl"
          />
        </div>

        <div className="section pt-20 pb-8 md:pt-16 md:pb-0">
          <div className="container xl:max-w-15xl mx-auto px-4">
            <div className="flex flex-wrap flex-row -mx-1 text-center">
              {photoList}
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default Beautytherapy;
