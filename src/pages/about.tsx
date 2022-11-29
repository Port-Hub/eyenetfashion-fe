import Left from "../assets/about/Left.jpg";
import Right from "../assets/about/Right.jpg";

const About: (arg: any) => JSX.Element = () => {
    return (
        <div className="flex flex-row gap-x-36">

            <img src={Left} width="128" height="330"/>

            <div className="">
            <h4 className="text-violet-500">The Concern - A Bird's Eye View...</h4>

            <p>
                The Eye-net, a renowned Training Center 
                (Computer Education - Fashion Technology - Spoken English)
                with an impeccable track record of 15 years. So far thousands 
                of students have gone out of our institute after having successfully 
                trained by us. Taking personal care, updating and fine tuning our 
                curriculum every now and then are some of the qualities that have 
                brought us to the place where we are now. And honestly it is our 
                dedication which is our hall mark of success.
            </p>

            <p>
                The Institute was established in the year 2000 with Computer Education 
                and Spoken English courses. And it has spread its wing in the year 2003 
                by introducing Fashion Designing Courses in the City. We are the Franchisee 
                Institute of NCFT Heights, Chennai for fashion Designing Courses.
            </p>


            <p>
                We keep ready our Well Qualified and Competent Faculty members to give training 
                on Life Style oriented Courses like Computer Education, Multimedia Training, 
                Fashion Designing courses and English Communication Skill Development courses.
            </p>

            <h4 className="text-violet-500">Our Aim</h4>

            <p>
                The institute aims to train students to respond competently and confidently to 
                the economic, social and organizational challenges arising from a rapidly advancing 
                technology, a shifting economic base and a global market place and to enhance the 
                capabilities of organization through research and consultancy. The courses are 
                specially designed to develop and enhance the basic creative skills and abilities 
                of students and to equip them with appropriate tools of modern computing techniques 
                for better and speedy decision making. We believe our programs match with the highest 
                academic standard what companies and other organizations want.
            </p>


            <h4 className="text-violet-500">Our Ventures</h4>

            <p>
                NCFT Heights institute of Fashion & Technology is a venture of eye-net Computer Technology 
                to strengthen the professional base of the people, we are offering Computer Education, 
                Fashion Designing Courses, Multimedia Training & Export Management.
            </p>

            <h4 className="text-violet-500"> BBC Style... a language school</h4>

            <p>
                BBC Style came into existence to provide/facilitate the courses to 
                the students in the field of Spoken English, Personality Development, 
                Communication Skill & Interview Preparation etc.
            </p>

            <h4 className="text-violet-500">Manuals & Booklets</h4>

            <p>
                In order to have smooth administration in the entrees, Institute has 
                formulated well-structured operational manuals. To streamline the academic 
                aspect, Institute has prepared academic manuals. We wish more and more people 
                can gain out of our various time bound career courses, to get a first hand 
                knowledge to the people about these courses we have prepared different 
                prospectus in Computer, Fashion and Communication Skills.
            </p>
            </div>

            <img src={Right} width="128" height="330"/>
        </div>
    )
}

export default About;