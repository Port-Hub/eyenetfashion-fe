const photoArray = [
  {
    title: "Introduction to DSLR Cameras",
    points: [
      "Learning about Camera menus and its functions",
      "Mega pixel and resolution Full frame sensors and cropped frame sensors,Crop Factor",
    ],
  },
  {
    title: "Exposure",
    points: [
      "Controlling motion and depth of field while making images",
      "Exposure meters and choosing the best mode suitable for a situation",
      "Exposure compensation, Exposure bracketing and Exposure balancing",
      "Histogram and its uses",
      "Color balance",
    ],
  },
  {
    title: "Lenses",
    points: [
      "Knowing about Zoom lenses, Fixed focal length lenses and their constructions",
      "Auto focusing and manual focusing",
      "Image stabilisation",
      "Choosing AF points based on the subject for best results",
      "Wide, normal and tele lenses understanding how they control the perspective quality in an image",
      "Making razor sharp images",
    ],
  },
  {
    title: "Light Awareness",
    points: [
      "Quality of light Hard and soft light and how they occur in nature",
      "Choosing the best light for making images",
      "Direction of light Understanding its effects for making interesting images",
      "Built in flash light and its creative usage",
      "Flash bracketing and fill flash techniques",
    ],
  },
  {
    title: "Effective Story Telling",
    points: [
      "Visualization and enhancing observation skills",
      "Study of visual elements like shapes, forms, texture etc",
      "Colors and their influence on a photograph",
      "Making mundane subjects look great in your images",
      "Art of composing an Image",
      "Conversion of Raw files through Lightroom / Adobe Camera Raw",
      "Tools that control your image",
      "Enhancing your images",
      "Sharpening",
      "Quality output for Prints and for web applications",
    ],
  },
];

const mapChild = (param) => {
  return param.map((item, index) => <li key={index}>{item}</li>);
};

// const mapCards =(param) =>{
//   return param.map((item,index)=>(
//     <div className="flex flex-wrap flex-row -mx-4 text-center">
//     <div
//       className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
//       data-wow-duration="1s"
//       // style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;"
//     >
//       {/* <!-- service block --> */}
//       <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
//         <div className="inline-block text-gray-900 mb-4">
//         </div>
//         <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
//           {item.title}
//         </h3>
//         <p className="text-gray-500">
//           {mapChild(item.points)}
//         </p>
//       </div>
//     </div>
//   </div> 
//   ));
// }

// const photoList = mapPhoto(photoArray);
// const cardList = mapCards(photoArray);
const Photography = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold py-6">
        DIGITAL SLR COURSE
      </h1>
      <div
        className="section pt-20 pb-8 md:pt-16 md:pb-0"
      >
        <div className="container xl:max-w-15xl mx-auto px-4">
        {/* <!-- row --> */}
        <div className="flex flex-wrap flex-row -mx-4 text-center">
            <div className="flex items-stretch px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp " data-wow-duration="1s" styles="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                {/* <!-- service block --> */}
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block text-gray-900 mb-4">
                    </div>
                    <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{photoArray[0].title}</h3>
                    <p className="text-gray-500">{mapChild(photoArray[0].points)}</p>
                </div>
                {/* <!-- end service block --> */}
            </div>
            <div className="flex items-stretch px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" styles="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                {/* <!-- service block --> */}
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block text-gray-900 mb-4">
                    </div>
                    <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{photoArray[1].title}</h3>
                    <p className="text-gray-500">{mapChild(photoArray[1].points)}</p>
                </div>
                {/* <!-- end service block --> */}
            </div>
            <div className="flex items-stretch px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" styles="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                {/* <!-- service block --> */}
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block text-gray-900 mb-4">
                    </div>
                    <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{photoArray[2].title}</h3>
                    <p className="text-gray-500">{mapChild(photoArray[2].points)}</p>
                </div>
                {/* <!-- end service block --> */}
            </div>
            <div className="flex items-stretch px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" styles="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                {/* <!-- service block --> */}
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block text-gray-900 mb-4">
                    </div>
                    <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{photoArray[3].title}</h3>
                    <p className="text-gray-500">{mapChild(photoArray[3].points)}</p>
                </div>
                {/* <!-- end service block --> */}
            </div>
            <div className="flex items-stretch px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" styles="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                {/* <!-- service block --> */}
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{photoArray[4].title}</h3>
                    <p className="text-gray-500">{mapChild(photoArray[4].points)}</p>
                </div>
                {/* <!-- end service block --> */}
            </div>
        </div>
      
        </div>
      </div>
    </>
  );
};

export default Photography;
