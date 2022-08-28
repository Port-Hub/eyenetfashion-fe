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

const mapPhoto = (param) => {
  return (
    param.map((item) => (
      <div className="flex flex-wrap gap-6">
        <article className="prose prose-zinc">
          <h2>{item.title}</h2>
          <ul className="list-none text-justify p-6 border-4 rounded-2xl">
            {mapChild(item.points)}
          </ul>
        </article>
      </div>
    ))
  )
}

const photoList = mapPhoto(photoArray);

const Photography = () => {
  return (   
      <div className="container mx-auto px-4 text-center">
        <h1 className=" text-4xl font-semibold">DIGITAL SLR COURSE</h1>
        {photoList}          
      </div>
  );
};

export default Photography;
