const Donate = () => {
   return (
     <div className="px-4 py-8 max-w-4xl mx-auto">
       <h1 className="text-3xl font-bold mb-6 text-center">Donate</h1>
       <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
         <p>
           This project is run by a collective of unpaid volunteers who work to maintain and run the space
           while upholding principles of anti-oppression, collective management, mutual accountability,
           community resilience, and environmental consciousness.
         </p>
         <p>
           While the Old Theater Building has been around since the 1930s, the Gray Coast Guildhall was
           founded in 2018. Even with a long, quiet Covid-19 interlude, the Guildhall has already hosted
           many music events and performances, meetings and gatherings, dances, movie nights, and more.
         </p>
         <p>
           It serves as a much-needed space on the Olympic Peninsula to generate and nourish radical and DIY
           arts, culture, organizing, and resistance.
         </p>
         <p>
           This project is only possible with the help and support of many people, and your donations help us
           keep the space open and tackle the many (MANY) improvements our old building needs – such as:
         </p>
         <ul className="list-disc list-inside text-gray-700">
           <li>Insulation and soundproofing</li>
           <li>Artist studios upstairs</li>
           <li>Improving our audio and video systems</li>
           <li>Mutual aid corner</li>
           <li>...and so much more!</li>
         </ul>
         <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md text-blue-800">
           <p>
             There are many ways to donate! Use the buttons above to make a one-time donation via <strong>Venmo</strong>,
             or become a monthly supporter on <strong>Patreon</strong>.
           </p>
           <p className="mt-2">
             Interested in making a larger donation or sending a check?{" "}
             <a href="mailto:graycoastguildhall@gmail.com" className="underline text-blue-600">
               Get in touch!
             </a>
           </p>
         </div>
         <div className="my-8 flex justify-center">
           <img
             src="/images/walker.jpg"
             className="w-full max-w-3xl rounded-lg shadow-md"
             alt="Walker on stage at the Guildhall"
           />
         </div>
       </div>
     </div>
   );
 };
 
 export default Donate;
 