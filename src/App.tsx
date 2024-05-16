import MyForm from "./Form";
import List from "./List";
import ChevronDown from "./assets/chevron-down.svg";
import Link from "./assets/link.svg";

function App() {
  return (
    <>
    
      <div className="w-full snap-y min-h-screen overflow-y-scroll">
        
        <div className="bg-main-bg bg-no-repeat bg-cover h-screen w-full px-2 min-[375px]:px-5 snap-start relative">
          <div className="flex flex-col items-center text-center h-50 wrapper pt-10 gap-20">
            <div className="max-w-[100px] mx-auto flex" >
              <img
                src="../img/LOGONT2PUTIH.png"
                className=" w-full h-full"
                alt="Nirwana Textile"
              />
             
            </div>
            
            <div className="h-[50vh] flex flex-col gap-5 justify-center">
         
                <p className="font-gotham text-xl min-[375px]:text-lg text-white font-bold">YOU ARE INVITED TO</p>
                {/* <p className="font-gotham text-3xl min-[375px]:text-xl font-bold text-white tracking-wider">
                  GRAND OPENING STORE
                </p> */}
              <div>
                <div >
                <img
              src="../img/KSJ.png"
              className="w-full h-full animate-pulse"
              alt="Nirwana Textile"
            />
                  {/* <h2 className="font-gotham text-white text-2xl font-bold tracking-wide">
                  KENDURI SABLON 
                  </h2>
                  <h2 className="font-gotham text-white text-2xl font-bold tracking-wide">
                  JOGJAKARTA #02
                  </h2> */}
                </div>
                <div className="py-5">
                  <img
                    src="../img/divider.png"
                    alt="divider"
                    className="translate-y-0.5"
                  />
                  <div className="flex justify-evenly items-center text-center font-gotham font-bold tracking-wider">
                    <div className="flex flex-col font-bold justify-evenly">
                     
                      <span className="text-5xl tracking-wider">
                        8-9
                      </span>
                      <span className="tracking-wide">JUNI 2024</span>
                    </div>
                    {/* <div className="border-l border-[#D1B15C] h-28 ml-1" />
                    <span className="text-lg">11.00<br/>WIB</span> */}
                  </div>
                  <img
                    src="../img/divider.png"
                    alt="divider"
                    className="-translate-y-0.5"
                  />
                </div>
                <div className="flex flex-col text-white font-gotham gap-2">
                  <h2 className="font-bold text-xl">LOKASI :</h2>
                  <a
                    href="https://maps.app.goo.gl/h4pBSb6TJKx5EwyW6"
                    target="_blank"
                    className="flex w-full text-center justify-center gap-2 underline hover:text-blue-500 transition-all uppercase"
                  >
                   JOGJA EXPO CENTER
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
