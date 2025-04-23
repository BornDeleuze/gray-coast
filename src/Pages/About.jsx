const About = () => {
   return (
     <>
       <div className="flex flex-col items-center justify-center px-6 py-10 space-y-8 text-lg md:text-xl text-center ">
         <p className="leading-relaxed max-w-3xl">
           The Gray Coast Guildhall is a space for gathering, creating, organizing, and performing. Our home is the Old Theater Building in Quilcene, Washington, on traditional Twana & S’Klallam territory.
         </p>
         <p className="leading-relaxed max-w-3xl">
           Gray Coast Guildhall holds space to generate and nourish radical and DIY arts, culture, organizing, and resistance on the Olympic Peninsula. We operate through collective decision making and mutual aid, and oppose all forms of oppression.
         </p>
         <img
           src="/images/back.jpg"
           className="w-full max-w-3xl rounded-lg shadow-md"
           alt="Background"
         />
       </div>
     </>
   );
 };
 
 export default About; 