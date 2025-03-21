const Home = () => {
  return (
    <>
      <div>
        <a href="/">
          <div class="relative">
            <img src="/images/sunset.jpg" class="relative text-center w-full"/>
              <h5 class="absolute text-5xl text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-nowrap uppercase drop-shadow-lg">
                Gray Coast Guildhall
              </h5>
          </div>
        </a>
      </div>
      <div>
        <h1 class="text-center m-8 text-2xl">
          Welcome
        </h1>
        <div class="m-5 md:m-10">
          The Gray Coast Guildhall is a space for gathering, creating, organizing, and performing. Our home is the Old Theater Building in Quilcene, Washington, on traditional Twana & S’Klallam territory.
          We provide space for music events and other performances, meetings and gatherings, dances, movie nights, and more. We are working on creating space for local artists and crafters to set up small working studios.
          The Grey Coast Guildhall is a not-for-profit project, and is collectively managed by a team of dedicated volunteers. This space is only possible with the help and support of many people, and we welcome you to get involved!
        </div>
        <img src="/public/images/back.jpg"/>
      </div>
    <div>
        <div>
          <h4>
            Visit Us
          </h4>
          <h5>
            11 Old church rd
            Quilcene, WA  98376
            USA
          </h5>
        </div>
        <div>
          <h4>
            Send us a message
          </h4>
        </div>
      </div>
    </>
  );
};

export default Home;