const Donate = () => {
  return (
   <div className="px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Donate</h1>
      <div className="space-y-4 text-lg text-gray-800 leading-relaxed">
         <p>
            This project is run by a collective of unpaid volunteers who work to maintain and run the space while upholding principles of anti-oppression, collective management, mutual accountability, community resilience, and environmental consciousness. 
            While the Old Theater Building has been around since the 1930’s, the Graycoast Guildhall was founded in 2018. Even with a long, quiet Covid-19 interlude, the Guildhall has already hosted many music events and other performances, meetings and gatherings, dances, movie nights, and more! It serves as a much needed space on the Olympic Peninsula to generate and nourish radical and DIY arts, culture, organizing, and resistance.
            This project is only possible with the help and support of many people, and your donations help us keep the space open, and tackle the many (MANY) improvements our old building needs – such as a new roof, ADA accessible walkway and entrance, insulation and soundproofing, building out artist studios upstairs, and so much more. 
            There are many ways to donate! Click one of the buttons above to make a one-time donation on Venmo, or become a monthly community supporter on Patreon! If you are interested in making a larger donation or sending us a check, get in touch!
         </p>
         <div className="my-6 flex justify-center">
            <img
               src="/images/walker.jpg"
               className="w-full max-w-3xl rounded-lg shadow-md"
               alt="Theatre Stage"
            />
         </div>
      </div>
   </div>
  );
};

export default Donate;