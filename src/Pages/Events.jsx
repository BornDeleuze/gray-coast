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
         <div className="my-6 flex justify-center">
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
            We are working to make this nearly 100-year-old building more accessible. Currently, 
            there is one main entrance with six stairs, and a side entrance with a ramp. The bathroom 
            and various other parts of the building are accessible without stairs, but many features remain 
            as originally designed before modern accessibility standards were in place.
         </p>

         <p>
           Shows and other events are hosted by Guildhall volunteers who have been oriented on how to run events, work
           the lights and sound, and manage other event details. Because of this, our ability to host
           events depends entirely on the interest and availability of our volunteers!
         </p>

         <p>
           For more information about performing at the Guildhall, or being trained to host events as a
           volunteer, reach out to the Events Team with this form:
          <div className="mt-10 flex justify-center">
            <div className="w-full max-w-md bg-gray-90 p-6 rounded-2xl shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Message our Events Team</h2>
                <form
                  action="https://formsubmit.co/b5dfc263e8443134f718861827588051"
                  method="POST"
                  className="space-y-5"
                >
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                  required
                ></textarea>
                </div>
                <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:brightness-110 transition-shadow shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

         </p>
         <p>
           The Guildhall is also open to private rentals for those looking to host closed events such
           as youth camps, private gatherings, music lessons, weddings, and more. Visit our Contact page to reach out
           for more information about private rental policies and fees.
         </p>
       </div>
     </div>
   );
 };
 
 export default Events;
 