import MyForm from "./Form";
import List from "./List";
import ChevronDown from "./assets/chevron-down.svg";
import Link from "./assets/link.svg";

function App() {
  return (
    <>
      <div className="w-full snap-y min-h-screen overflow-y-scroll">
        <div className="bg-main-bg bg-no-repeat bg-cover h-screen w-full px-2 min-[375px]:px-5 snap-start relative">
          <div className="flex flex-col gap-10 items-center text-center h-full wrapper pt-10">
            <div className="max-w-[100px] mx-auto">
              <img
                src="../img/LOGONT2PUTIH.png"
                className="w-full h-full"
                alt="Nirwana Textile"
              />
            </div>
            <div className="h-[60vh] flex flex-col gap-10 justify-center">
              <div>
                <p className="font-gotham">YOU ARE INVITED TO A</p>
                <p className="font-roxborough text-3xl min-[375px]:text-4xl font-bold text-[#E5B465] tracking-wider">
                  GRAND OPENING STORE
                </p>
              </div>
              <div>
                <h2 className="font-times text-[#E5B465] text-xl tracking-wide">
                  NIRWANA FABRIC OUTLET
                </h2>
                <div className="py-5">
                  <img
                    src="../img/divider.png"
                    alt="divider"
                    className="translate-y-0.5"
                  />
                  <div className="flex text-[#FAF0B2] justify-evenly items-center font-times tracking-wide">
                    <span className="min-[375px]:text-lg">SATURDAY</span>
                    <div className="border-l border-[#D1B15C] h-28 mr-1" />
                    <div className="flex flex-col font-bold">
                      <span className="tracking-wider">OCT</span>
                      <span className="text-6xl tracking-wide leading-[0.8] translate-x-0.5">
                        21
                      </span>
                      <span className="tracking-wider">2023</span>
                    </div>
                    <div className="border-l border-[#D1B15C] h-28 ml-1" />
                    <span className="min-[375px]:text-lg">AT 10.00 AM</span>
                  </div>
                  <img
                    src="../img/divider.png"
                    alt="divider"
                    className="-translate-y-0.5"
                  />
                </div>
                <div className="flex flex-col text-[#FAF0B2] font-times gap-2">
                  <span className="font-bold">LOCATION :</span>
                  <a
                    href="https://maps.app.goo.gl/J8qCNyY8UaiBayGcA"
                    target="_blank"
                    className="flex w-full text-center justify-center gap-2 underline hover:text-blue-500 transition-all uppercase"
                  >
                    Jl Imam Bonjol no. 292, Denpasar, Bali
                    <img src={Link} className="w-5" />
                  </a>
                </div>
              </div>
            </div>
            <a className="absolute bottom-10 animate-bounce" href="#form">
              <img src={ChevronDown} className="w-10" />
            </a>
          </div>
        </div>
        <MyForm />
        <List />
      </div>
    </>
  );
}

export default App;
