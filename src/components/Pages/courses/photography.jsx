const photoArray = [
  {
    title:"Introduction to DSLR Cameras",
    points:["Learning about Camera menus and its functions","Mega pixel and resolution Full frame sensors and cropped frame sensors,Crop Factor"]
  },
  {
    title:"Exposure",
    points:["Controlling motion and depth of field while making images","Exposure meters and choosing the best mode suitable for a situation","Exposure compensation, Exposure bracketing and Exposure balancing","Histogram and its uses","Color balance"]
  },
  {
    title:"Lenses",
    points:["Knowing about Zoom lenses, Fixed focal length lenses and their constructions","Auto focusing and manual focusing","Image stabilisation","Choosing AF points based on the subject for best results","Wide, normal and tele lenses understanding how they control the perspective quality in an image","Making razor sharp images"]
  },
  {
    title:"Light Awareness",
    points:["Quality of light Hard and soft light and how they occur in nature","Choosing the best light for making images","Direction of light Understanding its effects for making interesting images","Built in flash light and its creative usage","Flash bracketing and fill flash techniques"]
  },
  {
    title:"Effective Story Telling",
    points:["Visualization and enhancing observation skills","Study of visual elements like shapes, forms, texture etc","Colors and their influence on a photograph","Making mundane subjects look great in your images","Art of composing an Image","Conversion of Raw files through Lightroom / Adobe Camera Raw","Tools that control your image","Enhancing your images","Sharpening","Quality output for Prints and for web applications"]
  }
]

const mapChild = (param) => {
  return (
      param.map((item, index) => (
      <li key={index}>{item}</li>
          )
      )
  )
}

const mapLink = (param) => {
  return (
    param.map((item,index) => (
      <a key={index} href={"#item"+index} className="btn btn-xl">{item.title}</a>
    ))
  )
}

const mapPhoto = (param) => {
  return (
    param.map((item,index) => (
        <div key={index} id={"item"+index} className=" hero carousel-item w-full">
          <ul className="text-justify p-10 border-4 rounded-2xl">
            {mapChild(item.points)}
          </ul>
        </div>
    ))
  )
}

const photoList = mapPhoto(photoArray);
const linkList = mapLink(photoArray);

const Photography = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold">DIGITAL SLR COURSE</h1>
      <div className="flex justify-center w-full py-2 gap-2">
        {linkList}
      </div>
      <div className="carousel">
        {photoList}
      </div>
    </>
  );
};

export default Photography;
