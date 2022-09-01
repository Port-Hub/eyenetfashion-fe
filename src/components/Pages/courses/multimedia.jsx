const multiArray = [
  {
    title: "Level - 1",
    points: [
      "Image editing using Adobe photoshop",
      "2D drawing using Corel Draw",
      "Gif Animation",
    ],
    extra: "Duration : 1 Month",
    svg: (
      <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg">
        <title>{"skill-level"}</title>
        <path d="M30 30h-8V4h8Zm-6-2h4V6h-4ZM20 30h-8V12h8Zm-6-2h4V14h-4ZM10 30H2V18h8Zm-6-2h4v-8H4Z" />
        <path
          data-name="&lt;Transparent Rectangle&gt;"
          style={{
            fill: "none",
          }}
          d="M0 0h32v32H0z"
        />
      </svg>
    ),
  },
  {
    title: "Level - 2",
    points: [
      "2D Animation using flash with script",
      "Text animation with Swish Max",
      "Elastic Reality",
    ],
    extra: "Duration : 2 Months",
    svg: (
      <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg">
        <title>{"skill-level--basic"}</title>
        <path d="M30 30h-8V4h8Zm-6-2h4V6h-4ZM20 30h-8V12h8Zm-6-2h4V14h-4ZM10 30H2V18h8Z" />
        <path
          data-name="&lt;Transparent Rectangle&gt;"
          style={{
            fill: "none",
          }}
          d="M0 0h32v32H0z"
        />
      </svg>
    ),
  },
  {
    title: "Level - 3",
    points: [
      "Video editing using Adobe premiere",
      "Sound editing using Sound forge",
      "Adding Special effects for video",
      "Rotoscoping, Compositing",
      "Green/Blue matting, etc., using Combustion",
    ],
    extra: "Duration : 2 Months",
    svg: (
      <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg">
        <title>{"skill-level--intermediate"}</title>
        <path d="M30 30h-8V4h8Zm-6-2h4V6h-4ZM20 30h-8V12h8ZM10 30H2V18h8Z" />
        <path
          data-name="&lt;Transparent Rectangle&gt;"
          style={{
            fill: "none",
          }}
          d="M0 0h32v32H0z"
        />
      </svg>
    ),
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
      "Walk through Rendering etc., Project",
    ],
    extra: "Duration : 3 Months",
    svg: (
      <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg">
        <title>{"skill-level--advanced"}</title>
        <path d="M30 30h-8V4h8ZM20 30h-8V12h8ZM10 30H2V18h8Z" />
        <path
          data-name="&lt;Transparent Rectangle&gt;"
          style={{
            fill: "none",
          }}
          d="M0 0h32v32H0z"
        />
      </svg>
    ),
  },
];

const mapChild = (param) => {
  return param.map((item, index) => <li key={index}>{item}</li>);
};

const mapMulti = (param) => {
  return param.map((item, index) => (
    <div
      key={index}
      className="flex items-stretch px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 flex-grow justify-center"
      data-wow-duration="1s"
      styles="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;"
    >
      <div className="py-8 px-12 mb-12 bg-slate-300 rounded-2xl shadow-2xl transform transition duration-300 ease-in-out dark:shadow-primary hover:-translate-y-2">
        <div className="inline-block text-gray-900 mb-4">{item.svg}</div>
        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          {item.title}
        </h3>
        <p className="text-gray-500 text-left">{mapChild(item.points)}</p>
        <h5 className="text-lg leading-normal mt-2 text-black">{item.extra}</h5>
      </div>
    </div>
  ));
};

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
