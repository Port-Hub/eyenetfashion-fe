const spokenArray = [
  {
    title:"Basic English",
    points:[
      "Tense",
      "Question Making",
      "Parts of Speech",
      "Active and Passive Voice"
    ]
  },
  {
    title:"General English",
    points:[
      "Funny Words",
      "Usage",
      "Vocabulary Development",
      "Pronunciation Practice",
      "Reading and Listening"
    ]
  },
  {
    title:"Higher Grammar",
    points:[
      "Phrasal verbs",
      "Phrase",
      "Clauses",
      "Direct and Indirect Speech"
    ]
  },
  {
    title:"Personality Development",
    points:[
      "Common - Sense Development",
      "Interpersonal Relationship Skills",
      "Public Speaking",
      "Negotiation Ability",
      "Hotel Manners",
      "EQ Development"
    ]
  },
  {
    title:"Practicals",
    points:[
      "Mock Interview",
      "Mono-Acting",
      "Dumb-Charades",
      "Role-Play",
      "Reading and Writing Exercises"
    ]
  },
  {
    title:"Out-Door Activities",
    points:[
      "Jungle Camp",
      "English Style Dining",
      "Archaeological Site Visit",
      "Bird Watching Trips",
      "Culture-Gazing"
    ]
  },
  {
    title:"Special Features",
    points:[
      "Crash Course Conducted",
      "Innovative Teaching Method",
      "Course Content updated frequently",
      "Separate batch for housewives",
      "Special attention to slow learners",
      "10th, +1 and +2 English grammer tution available"
    ]
  }
]

const mapChild = (param) => {
  return param.map((item, index) => <li key={index}>{item}</li>);
};

const mapSpoken = (param) =>{
  return param.map((item,index)=>(
    <div
    key={index}
    className="flex items-stretch px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6"
    data-wow-duration="1s"
    styles="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;"
  >
    <div className="py-8 px-12 mb-12 bg-slate-300 rounded-2xl shadow-2xl transform transition duration-300 dark:shadow-primary ease-in-out hover:-translate-y-2">
      <div className="inline-block text-gray-900 mb-4">
        {item.svg}
      </div>
      <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
        {item.title}
      </h3>
      <p className="text-gray-500">
        {mapChild(item.points)}
      </p>
    </div>
  </div>
  ));
}

const spokenList = mapSpoken(spokenArray)

const Spoken = () => {
  return (
    <>
    <h1 className="text-center text-4xl font-semibold py-6">
      Spoken English
    </h1>
    <p className="text-center px-60">
      Today is the age of globalisation it is difficult for one to
      remainconnected with the rest of the worldwithout English Knowledge.
      Further English Speaking prople have an edge over others in the job
      market. And having this knowledge also gives you a passport tp break into
      higher circles of the society. Further it is needless to say that English
      makes one courageous and confident.
    </p>
    <div className="section pt-20 pb-8 md:pt-16 md:pb-0">
      <div className="container xl:max-w-15xl mx-auto px-4">
        <div className="flex flex-wrap flex-row -mx-4 text-center">
          {spokenList}
        </div>
      </div>
    </div>
  </>
  );
};

export default Spoken;
