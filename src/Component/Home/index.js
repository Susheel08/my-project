import React from "react";
import mapimg from "../../image/dotted-world-map-gray-color-vector-removebg-preview.png";
import planeimg from "../../image/plane.png";
import shipimg from "../../image/ship-removebg-preview.png";
import truckimg from "../../image/truck-removebg-preview.png";
import workerman from "../../image/worker-man.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  return (
    <>
      <div className="flex justify-center bg-[#120569] lg:h-[580px]">
        <img
          src={mapimg}
          alt=""
          className=" lg:w-[1200px] lg:h-[520px] h-72 w-64"
        />
        <div className="absolute top-[130px] px-5">
          <div className="text-start flex flex-col text-white">
            <span className="font-bold lg:text-5xl text-sm text-white">
              Find Logistic Services
            </span>
            <span className="lg:text-sm text-xs font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              amet nihil nam hic quos <br />
              saepe velit similique quam.
            </span>
            <div className="lg:flex lg:flex-row lg:justify-between items-center pt-5">
              <span className="lg:text-lg text-xs text-gray-200">
                Your ZIP code or City e.g. New York
              </span>
              <button className="bg-[#42f5f2] text-[#120569] rounded py-1 px-5">
                Search
              </button>
            </div>

            <div className="flex justify-between pt-20">
              <div className="flex flex-col items-center">
                <span className="font-bold lg:text-2xl text-sm">2,917</span>
                <sup className="text-[#42f5dd]">_______</sup>
                <span className=" text-xs"># of companies</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-bold lg:text-2xl text-sm">3,918</span>
                <sup className="text-[#42f5dd]">_______</sup>
                <span className=" text-xs"># of Roag frieght</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-bold lg:text-2xl text-xs">38,928</span>
                <sup className="text-[#42f5dd]">__________</sup>
                <span className=" text-xs"># of Air Frieght</span>
              </div>

              <div className="flex flex-col items-center">
                <span className="font-bold lg:text-2xl text-xs">7,192</span>
                <sup className="text-[#42f5dd]">_______</sup>
                <span className=" text-xs"># of Sea Frieght</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-row flex-col lg:absolute lg:bottom-0  lg:left-[250px] md:left-0 left-3 text-[#120569]  gap-5 ">
        <div className=" flex justify-center gap-2 p-2 h-36 bg-white shadow-2xl ">
          <img src={planeimg} alt="" className="h-16 w-12" />
          <div className="flex flex-col justify-between ">
            <p className="flex flex-col gap-2">
              <span className="font-bold">Air Frieght</span>
              <span className="text-xs">
                Far far away,behind the word mountain <br />
                far from the countries vokalla and consonantia,
                <br /> there live the blind text.
              </span>
            </p>
            <span className="font-bold text-xs pt-5 cursor-pointer">
              READ MORE <ArrowForwardIcon />
            </span>
          </div>
        </div>
        {/* card 2  */}
        <div className=" flex justify-center  p-2 bg-white  h-36 shadow-2xl ">
          <img src={shipimg} alt="" className="h-16 w-18" />
          <div className="flex flex-col justify-between">
            <p className="flex flex-col gap-2">
              <span className="font-bold">Sea Frieght</span>
              <span className="text-xs">
                Far far away,behind the word mountain <br /> far from the
                countries vokalla and consonantia, <br />
                there live the blind text.
              </span>
            </p>
            <span className="font-bold text-xs cursor-pointer">
              READ MORE <ArrowForwardIcon />
            </span>
          </div>
        </div>

        <div className=" flex justify-center p-2 h-36 bg-white shadow-2xl ">
          <img src={truckimg} alt="" className="h-16 w-[70px]" />
          <div className="flex flex-col justify-between">
            <p className="flex flex-col gap-2">
              <span className="font-bold">Land Frieght</span>
              <span className=" text-xs">
                Far far away,behind the word mountain
                <br /> far from the countries vokalla and consonantia,
                <br /> there live the blind text.
              </span>
            </p>
            <span className="font-bold text-xs cursor-pointer  py-5">
              READ MORE <ArrowForwardIcon />
            </span>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:flex-row md:flex md:flex-col flex-col justify-center items-center gap-24 lg:pt-48 px-5 pt-10">
        <div className="flex flex-col gap-3">
          <span className="text-sm">MISSION</span>
          <span className="font-bold text-3xl">About Us</span>
          <span className="text-xs">
            Far far away,behind the word mountain far from the countries vokalla
            and <br />
            consonantia, there live the blind text.Seprated they live in
            Bookmarksgrove <br />
            right at the coast of the Semantic, a large language ocean.
          </span>

          <div className="flex">
            <img src={planeimg} alt="" className="h-42 w-16 " />
            <div className="flex flex-col p-2">
              <span className="font-bold">Land Frieght</span>
              <span className="text-xs">
                Far far away,behind the word mountain <br /> far from the
                countries vokalla and consonantia, <br />
                there live the blind text.
              </span>
            </div>
          </div>
        </div>
        <img src={workerman} alt="" className="h-72 w-[530px]" />
      </div>
    </>
  );
};

export default Home;
