const Home = () => {
  return (
    <>
      <div>
        <a href="/">
          <div class="relative">
            <img src="/images/sunset.jpg" class="w-full" alt="Sunset"/>
            <h5 class="absolute text-3xl md:text-5xl text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase drop-shadow-lg text-center">
              Gray Coast Guildhall
            </h5>
          </div>
        </a>
      </div>

      <div class="text-center">
        <h1 class="text-2xl font-semibold">Welcome</h1>
        <div class="m-5 md:m-10 text-gray-800 leading-relaxed">
          <p class="p-2">The Gray Coast Guildhall is a space for gathering, creating, organizing, and performing. Our home is the Old Theater Building in Quilcene, Washington, on traditional Twana & S’Klallam territory.</p>
          <p class="p-2">We provide space for music events and other performances, meetings and gatherings, dances, movie nights, and more. We are working on creating space for local artists and crafters to set up small working studios.</p>
          <p class="p-2">The Gray Coast Guildhall is a not-for-profit project, and is collectively managed by a team of dedicated volunteers. This space is only possible with the help and support of many people, and we welcome you to get involved!</p>
        </div>
        <img src="/public/images/back.jpg" class="w-full rounded-lg shadow-md" alt="Background"/>
      </div>

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
    </>
  );
};

export default Home;