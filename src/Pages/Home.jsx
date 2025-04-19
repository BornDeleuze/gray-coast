import InstagramGrid from "../Components/InstagramGrid";

const Home = () => {
  return (
    <>
      <div class="text-center">
        <h1 class="text-2xl font-semibold">Welcome</h1>
        <div class="m-5 md:m-10 text-gray-800 leading-relaxed">
          <p class="p-2">The Gray Coast Guildhall is a space for gathering, creating, organizing, and performing. Our home is the Old Theater Building in Quilcene, Washington, on traditional Twana & S’Klallam territory.</p>
          <p class="p-2">We provide space for music events and other performances, meetings and gatherings, dances, movie nights, and more. We are working on creating space for local artists and crafters to set up small working studios.</p>
          <p class="p-2">The Gray Coast Guildhall is a not-for-profit project, and is collectively managed by a team of dedicated volunteers. This space is only possible with the help and support of many people, and we welcome you to get involved!</p>
        </div>
        <div>
        <p class="text-xl font-semibold p-4 border-t-4 border-gray-900">Upcoming and Recent Events</p>
          <InstagramGrid/>
        </div>
      </div>
    </>
  );
};

export default Home;