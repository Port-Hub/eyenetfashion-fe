const multiArray = [
  {
    title: "Level - 1",
    points: [
      "Image editing using Adobe photoshop",
      "2D drawing using Corel Draw",
      "Gif Animation"
    ],
    extra: "Duration : 1 Month"
  },
  {
    title: "Level - 2",
    points: [
      "2D Animation using flash with script",
      "Text animation with Swish Max",
      "Elastic Reality"
    ],
    extra: "Duration : 2 Months"
  },
  {
    title: "Level - 3",
    points: [
      "Video editing using Adobe premiere",
      "Sound editing using Sound forge",
      "Adding Special effects for video",
      "Rotoscoping, Compositing",
      "Green/Blue matting, etc., using Combustion"
    ],
    extra: "Duration : 2 Months"
  },
  {
    title: "Level - 4",
    points: [
      "3D Studio Max / Maya",
      "3D Modeling",
      "Character Animation",
      "Texturing",
      "Lighting",
      "Camera projection",
      "Walk through Rendering etc., Project"
    ],
    extra: "Duration : 3 Months"
  },
]

const mapChild = (param) => {
  return param.map((item, index) => <li key={index}>{item}</li>);
};

const mapMulti = (param) =>{
  return param.map((item,index)=>(
    <div
    key={index}
    className="flex items-stretch px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6"
    data-wow-duration="1s"
    styles="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;"
  >
    <div className="py-8 px-12 mb-12 bg-slate-300 rounded-2xl shadow-2xl transform transition duration-300 ease-in-out dark:shadow-primary hover:-translate-y-2">
      <div className="inline-block text-gray-900 mb-4">
        {item.svg}
      </div>
      <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
        {item.title}
      </h3>
      <p className="text-gray-500">
        {mapChild(item.points)}
      </p>
      <h5 className="text-lg leading-normal mt-2 text-black">
        {item.extra}
      </h5>
    </div>
  </div>
  ));
}

const multiList = mapMulti(multiArray);

const Multimedia = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold py-6">
        Multimedia Training
      </h1>
      <div className="section pt-20 pb-8 md:pt-16 md:pb-0">
        <div className="container xl:max-w-15xl mx-auto px-4">
          <div className="flex flex-wrap flex-row -mx-4 text-center">
            {multiList}
          </div>
        </div>
      </div>
    </>
  );
};

export default Multimedia;
