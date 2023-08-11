import "../styles/home.css";
import couch from "../images/couch.jpeg";
import Interior from "../components/interior";

function Home() {
  return (
    <div className="h-fit">
      <div className="home h-[120vh] grid justify-items-center content-center">
        <div className="text-[#ffffff] text-center">
          <p className=" text-2xl font-bold">WE PROVIDE EVERYTHING</p>
          <p className="text-5xl my-5">
            <span className="text-[#ff565b] font-extrabold">INTERIOR</span>{" "}
            DESIGNER
          </p>
          <button className="bg-[#ffffff] hover:text-white transition duration-500 hover:bg-[#ff565b] text-[#ff565b] w-[180px] h-[50px] rounded-lg">
            Discover More
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="grid gap-5 justify-items-center content-center absolute md:grid-row-2 md:grid-col-4 grid-col-1 grid-row-5 w-[90vw] md:h-[40vh] h-[90vh] top-[100vh] bg-white shadow-xl z-0 ">
          <div className="grid row-start-1 md:col-start-1 md:w-[17vw] w-[60vw] h-[15vh]">
            <h3 className="font-extrabold text-lg">Search Work by Title</h3>
            <input
              type="text"
              className="border-[1px] border-gray-500 outline-none rounded-md"
              placeholder="Type any work title...."
            />
          </div>
          <div className="grid md:row-start-1 md:col-start-2 row-start-2 md:w-[17vw] w-[60vw] h-[15vh]">
            <h3 className="font-extrabold text-lg">Choose Category</h3>
            <select
              name=""
              id=""
              className="border-[1px] border-gray-400 rounded-md"
            >
              <option value="">Choose Category</option>
              <option value="">Exterior Design</option>
              <option value="">Interior Design</option>
              <option value="">New Videos</option>
              <option value="">Trend Design</option>
            </select>
          </div>
          <div className="grid md:row-start-1 md:col-start-3 row-start-3 md:w-[17vw] w-[60vw] h-[15vh] ">
            <h3 className="font-extrabold text-lg">Price Range</h3>
            <select
              name=""
              id=""
              className="border-[1px] border-gray-400 rounded-md"
            >
              <option value="">Choose Price</option>
              <option value="">$100 - $250</option>
              <option value="">$250 - $500</option>
              <option value="">$500 - $1000</option>
              <option value="">$1000+</option>
            </select>
          </div>
          <div className="grid md:row-start-1 md:col-start-4 row-start-4 md:w-[17vw] w-[60vw] h-[15vh]">
            <h3 className="font-extrabold text-lg">Pick a Plan</h3>
            <select
              name=""
              id=""
              className="border-[1px] border-gray-400 rounded-md"
            >
              <option value="">Choose Plan</option>
              <option value="">Standard</option>
              <option value="">Proffessional</option>
              <option value="">Golden</option>
              <option value="">Premium</option>
            </select>
          </div>
          <div className="grid md:row-start-2 md:col-start-1 md:col-span-4 row-start-5  ">
            <button className="bg-[#ff565b] text-white hover:bg-black md:w-[85vw] w-[60vw] h-[7vh] rounded-md md:mt-0 mt-3">
              Search Now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[90vw] mt-[250px] font-[900]">
          <h1 className="text-3xl">EXPLORE SOME OF OUR LATEST</h1>
          <div className="text-[#ff565b] flex items-center space-x-5 text-3xl">
            <div className="h-[3px] w-20 bg-[#ff565b]"></div>
            <h1>
              INTERIOR DESIGN WORK<span className="text-black">.</span>
            </h1>
          </div>
          <div className="flex mt-10 justify-between">
            <img
              src={couch}
              alt="couch"
              className="w-[40vw] h-screen rounded-md"
            />
            <div className="basis-[45vw]">
              <Interior
                name={"Interior Design"}
                date={"January 22, 2022"}
                workplace={"The Waterfront Cafe and Restaurant"}
                location={"Florida, USA"}
                descriptionStart={
                  "Designer HTML5 Template is 100% free to download provided by"
                }
                descriptionEnd={"TemplateMo website."}
              />
              <Interior
                name={"Interior Design"}
                date={"January 22, 2022"}
                workplace={"The Waterfront Cafe and Restaurant"}
                location={"Florida, USA"}
                descriptionStart={
                  "Designer HTML5 Template is 100% free to download provided by"
                }
                descriptionEnd={"TemplateMo website."}
              />
              <Interior
                name={"Interior Design"}
                date={"January 22, 2022"}
                workplace={"The Waterfront Cafe and Restaurant"}
                location={"Florida, USA"}
                descriptionStart={
                  "Designer HTML5 Template is 100% free to download provided by"
                }
                descriptionEnd={"TemplateMo website."}
              />
              <Interior
                name={"Interior Design"}
                date={"January 22, 2022"}
                workplace={"The Waterfront Cafe and Restaurant"}
                location={"Florida, USA"}
                descriptionStart={
                  "Designer HTML5 Template is 100% free to download provided by"
                }
                descriptionEnd={"TemplateMo website."}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ........................Trending......................... */}

      <div className="flex justify-center w-full font-[900]">
        <div className="w-[90vw] flex justify-between items-center">
          <div className="w-[40vw]">
            <h1 className="text-3xl">CHECK OUT WHATS TRENDING IN</h1>
            <div className="text-[#ff565b] flex items-center space-x-5 text-3xl">
              <div className="h-[3px] w-20 bg-[#ff565b]"></div>
              <h1>
                INTERIOR DESIGN WORK<span className="text-black">.</span>
              </h1>
            </div>
            <p className="text-slate-500 leading-7 my-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              dolorum, numquam atque sint mollitia reprehenderit earum. Nulla
              veritatis, omnis sit saepe id cum ipsum in maxime voluptates qui,
              facilis illum!
            </p>
            <button className="text-white bg-[#ff565b] w-[200px] h-10 rounded-lg">
              Discover More
            </button>
          </div>
          <div className="flex items-center">
            <img src={couch} alt="couch" className="h-[70vh] w-[20vw]" />
            <img src={couch} alt="couch" className="h-[50vh] w-[15vw]" />
            <img src={couch} alt="couch" className="h-[30vh] w-[10vw]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
