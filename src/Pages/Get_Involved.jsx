const GetInvolved = () => {
   return (
     <div className="px-4 py-8 max-w-4xl mx-auto">
       <h1 className="text-3xl font-bold mb-6 text-center">Get Involved</h1>
       <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
         <p>
           The Gray Coast Guildhall is a not-for-profit and collectively managed project, and is only
           possible with the support and involvement of many people!
         </p>
         <p>
           Check out our <a href="/donate" className="text-blue-600 underline">Donate</a> page for
           information about our wish list of building materials and other items, as well as ways to
           donate money to support this project and our many building repairs.
         </p>
         <p>
           Email us at{" "}
           <a href="mailto:graycoastguildhall@gmail.com" className="text-blue-600 underline">
             graycoastguildhall@gmail.com
           </a>{" "}
           to be added to our monthly mailing list where we share information about upcoming events,
           work parties, and other ways to plug in.
         </p>
         <p>
           Whether you have a special skill set or an idea of how you’d like to support this project,
           or just want to see what’s going on and how to get involved – we would love to hear from you!
         </p>
       </div>
 
       <div className="mt-10 flex justify-center">
         <div className="w-full max-w-md bg-gray-90 p-6 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Send us a message</h2>
            <form
               action="https://formsubmit.co/6cf70ccd3364c6b0fbdd1583a2d652e9"
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
     </div>
   );
 };
 
 export default GetInvolved;
 