import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col background relative items-center">
      <h1 className="bg-white rounded-md mt-[0.6rem] text-center w-[90%] text-2xl font-bold p-1">
        RANDOM GIFS
      </h1>


      <div className="flex flex-col w-full items-center mb-6">
        <Random />
        <Tag />
      </div>


    </div>
  );
}
