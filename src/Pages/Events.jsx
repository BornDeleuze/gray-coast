const Events = () => {
   return (
     <div className="px-4 py-8 max-w-4xl mx-auto">
       <h1 className="text-3xl font-bold mb-6 text-center">Events at the Guildhall</h1>
       <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
         <p>
           The Guildhall hosts a wide variety of events – from music and theater performances, to
           movie screenings, presentations and discussions, author readings, clothing swaps, skill
           shares, open mics, and more! Our public events are open to all ages, and are either free or
           by donation or sliding scale – no one turned away for lack of funds. There is no alcohol
           allowed at public events.
         </p>
         <div className="mt-8 flex justify-center">
            <img
            src="/images/solstice.jpg"
            className="w-full max-w-3xl rounded-lg shadow-md"
            alt="Theatre Stage"
            />
         </div>
         <p>
           We have a house sound system and basic theater lighting, and can seat around 100 people at
           maximum capacity.
         </p>
         <p>
           Events are hosted by Guildhall volunteers who have been oriented on how to run events, work
           the lights and sound, and manage other event details. Because of this, our ability to host
           events depends entirely on the interest and availability of our volunteers!
         </p>
         <p>
           For more information about performing at the Guildhall, or being trained to host events as a
           volunteer, reach out to{" "}
           <a href="mailto:events.graycoastguildhall@gmail.com" className="text-blue-600 underline">
             events.graycoastguildhall@gmail.com
           </a>
         </p>
         <p>
           The Guildhall is also open to private rentals for those looking to host closed events such
           as youth camps, private gatherings, music lessons, weddings, and more. Contact{" "}
           <a href="mailto:graycoastguildhall@gmail.com" className="text-blue-600 underline">
             graycoastguildhall@gmail.com
           </a>{" "}
           for more information about private rental policies and fees.
         </p>
       </div>
     </div>
   );
 };
 
 export default Events;
 