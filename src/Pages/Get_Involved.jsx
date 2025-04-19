const GetInvolved = () => {
  return (
   <div>
      <h1>
         The Gray Coast Guildhall is a not-for-profit and collectively managed project, and is only possible with the support and involvement of many people!
         Check out our Donate page for information about our wish-list of building materials and other items, as well as ways to donate money to support this project and our many building repairs.
         Email us at graycoastguildhall@gmail.com to be added to our monthly mailing list where were share information about upcoming events, work parties, and other ways to plug in.
         Whether you have a special skill set or idea of how you’d like to support this project, or just want to see what’s going on and how to get involved – we would love to hear from you!
      </h1>
      <div class="flex justify-center items-center p-6">
         <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h4 class="text-xl font-semibold mb-4 text-center">Send us a message</h4>
            <form action="https://formsubmit.co/6cf70ccd3364c6b0fbdd1583a2d652e9" method="POST" class="space-y-4">
               <div>
               <label class="block text-sm font-medium text-gray-700" for="email">Email</label>
               <input type="email" name="email" id="email" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
               </div>
            
               <div>
               <label class="block text-sm font-medium text-gray-700" for="message">Message</label>
               <textarea name="message" id="message" rows="4" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
               </div>   
               <div>
               <button type="submit" class="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">Send</button>
               </div>
            </form>
         </div>
      </div>
   </div>
  );
};

export default GetInvolved;