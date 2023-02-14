import "./App.css";
import NavBar from "./components/navBar";
import IconBookMark from "./assets/images/icon-bookmark.svg";
import LogoMasterCraftIcon from "./assets/images/logo-mastercraft.svg";
import IconBookMarkChecked from "./assets/images/icon-bookmark-checked.svg";
import { useEffect, useState } from "react";
import ModalForm from "./components/modal";
import ThankYouNote from "./components/thankYouModal";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [showThankYouPage, setShowThankYouPage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [clickBookmark, setClickBookmark] = useState(false);
  const [sourceDonation, setSourceDonation] = useState(null);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const handleThankYouPage = () => {
    setShowThankYouPage(!showThankYouPage);
  };
  const handleChangeSourceDonation = (e) => {
    setSourceDonation(e.target.name);
    setShowModal(true);
  };
  const handleModalFormPage = () => {
    setShowThankYouPage(true);
    setShowModal(false);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="App w-screen bg-gray-100">
      <header className="w-full bg-cover bg-center bg-no-repeat sm:h-[300px] sm:bg-heroMobile lg:h-[400px] lg:bg-heroDesktop">
        <NavBar />
      </header>
      <main className="relative top-[-60px]  mx-5 grid gap-3 lg:mx-[350px]">
        <div className="relative grid items-center justify-center space-y-5 rounded-lg border border-transparent bg-white  p-7 px-10 pt-10 font-commissioner sm:grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center lg:col-span-2">
            <img
              src={LogoMasterCraftIcon}
              alt="master craft"
              className="absolute top-[-30px]"
            />
          </div>
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold">
              Mastercraft Bamboo Monitor Riser
            </h1>
          </div>
          <div className="lg:col-span-2">
            <p className="text-md text-darkGray">
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
          </div>

          <div className="relative flex justify-between lg:col-span-2 lg:py-5">
            <button className="rounded-full border border-transparent bg-moderateCyan px-6 text-white hover:bg-darkCyan lg:px-10">
              Back this project
            </button>
            <div className={width >= 1440 ? "flex" : "hidden"}>
              <img
                src={
                  clickBookmark === true ? IconBookMarkChecked : IconBookMark
                }
                alt="bookmark"
                className="relative left-[50px]"
                onClick={() => setClickBookmark(!clickBookmark)}
              />
              <button
                className={
                  clickBookmark === true
                    ? "rounded-full border border-transparent bg-gray-200 p-3 pl-[3.5rem] text-moderateCyan"
                    : "rounded-full border border-transparent bg-gray-200 p-3 pl-[3.5rem] text-darkGray"
                }
                onClick={() => setClickBookmark(!clickBookmark)}
              >
                Boorkmark
              </button>
            </div>
            <img
              src={clickBookmark === true ? IconBookMarkChecked : IconBookMark}
              alt="bookmark"
              className={width < 1440 ? "" : "hidden"}
              onClick={() => setClickBookmark(!clickBookmark)}
            />
          </div>
        </div>
        <div className="grid rounded-lg border border-transparent bg-white py-5 px-3 font-commissioner sm:grid-cols-1 sm:space-y-4 lg:grid-cols-3 lg:gap-6 lg:space-y-0 lg:divide-x-2">
          <div className="flex flex-col space-y-2">
            <p className="text-3xl font-bold">$89,914</p>
            <p className="text-sm text-gray-400">of $100,000 backed</p>
          </div>
          <div className="flex justify-center lg:hidden">
            <hr className="h-px w-24 border-0 bg-gray-200" />
          </div>

          <div className="flex flex-col space-y-2 ">
            <p className="text-3xl font-bold">5007</p>
            <p className="text-sm text-gray-400">total backers</p>
          </div>

          <div className="flex justify-center lg:hidden">
            <hr className="h-px w-24 border-0 bg-gray-200" />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-3xl font-bold">56</p>
            <p className="text-sm text-gray-400">days left</p>
          </div>
          <div className="h-3 rounded-full border border-transparent bg-gray-200 lg:col-span-3">
            <div className="h-full w-3/4 rounded-full border border-transparent bg-moderateCyan"></div>
          </div>
        </div>
        <div className="grid rounded-lg border border-transparent bg-white py-5 px-5 text-left font-commissioner">
          <p className="text-xl font-bold lg:py-4">About this project</p>
          <p className="py-4 text-gray-400 sm:text-sm lg:text-lg">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
            <br />
            <br />
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
          <div className="my-4 grid rounded-lg border px-6 py-2 sm:grid-cols-1 lg:grid-cols-2 lg:items-center">
            <div className="sm:mt-4 lg:col-start-1 lg:mt-0">
              <p className="text-md  font-bold">Bamboo Stand</p>
            </div>
            <div className="mt-5 py-2 lg:col-start-2 lg:place-self-end ">
              <p className="pb-5 font-medium text-moderateCyan">
                Pledge $25 or more
              </p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-gray-400 sm:text-sm lg:text-base ">
                {" "}
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you'll be added to a
                special Backer member list.
              </p>
            </div>
            <div className="my-5 flex items-center">
              <p className="mr-2 text-3xl font-bold">101</p>
              <p className="text-gray-400">left</p>
            </div>
            <div className="sm:mb-5 lg:col-start-2 lg:my-5 lg:place-self-end lg:self-center">
              <button
                className=" cursor-pointer self-start rounded-full border border-transparent bg-moderateCyan p-2 px-5 text-white hover:bg-darkCyan"
                onClick={(e) => handleChangeSourceDonation(e)}
                name="bamboo"
              >
                Select Reward
              </button>
            </div>
          </div>
          <div className="my-4 grid rounded-lg border px-6 py-2 sm:grid-cols-1 lg:grid-cols-2 lg:items-center">
            <div className="sm:mt-4 lg:col-start-1 lg:mt-0">
              <p className="text-md font-bold">Black Edition Stand</p>
            </div>
            <div className="mt-5 py-2 lg:col-start-2 lg:place-self-end ">
              <p className="pb-5 font-medium text-moderateCyan">
                Pledge $75 or more
              </p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-gray-400 sm:text-sm lg:text-base">
                {" "}
                You get a Black Special Edition computer stand and a personal
                thank you. You'll be added to our Backer member list. Shipping
                is included.
              </p>
            </div>
            <div className="my-5 flex items-center">
              <p className="mr-2 text-3xl font-bold">64</p>
              <p className="text-gray-400">left</p>
            </div>
            <div className="sm:mb-5 lg:col-start-2 lg:my-5 lg:place-self-end lg:self-center">
              <button
                className=" cursor-pointer self-start rounded-full border border-transparent bg-moderateCyan p-2 px-5 text-white hover:bg-darkCyan"
                onClick={(e) => handleChangeSourceDonation(e)}
                name="black"
              >
                Select Reward
              </button>
            </div>
          </div>
          <div className="my-4 grid rounded-lg border px-6 py-2 opacity-50 sm:grid-cols-1 lg:grid-cols-2 lg:items-center">
            <div className="sm:mt-4 lg:col-start-1 lg:mt-0">
              <p className="text-md mt-4 font-bold">Mahogany Special Edition</p>
            </div>
            <div className="mt-5 py-2 lg:col-start-2 lg:place-self-end ">
              <p className="pb-5 font-medium text-moderateCyan">
                Pledge $200 or more
              </p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-gray-400 sm:text-sm lg:text-base">
                {" "}
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You'll be added to our Backer member
                list. Shipping is included.
              </p>
            </div>
            <div className="my-5 flex items-center">
              <p className="mr-2 text-3xl font-bold">0</p>
              <p className="text-gray-400">left</p>
            </div>
            <div className="sm:mb-5 lg:col-start-2 lg:my-5 lg:place-self-end lg:self-center">
              <button className="cursor-pointer self-start rounded-full border border-transparent bg-darkGray p-2 px-5 text-white">
                Out of stock
              </button>
            </div>
          </div>
        </div>
      </main>
      {showModal && (
        <ModalForm
          handleModalFormPage={() => handleModalFormPage}
          closeModal={() => closeModal}
          sourceDonation={sourceDonation}
        />
      )}
      {showThankYouPage && (
        <ThankYouNote handleThankYouPage={() => handleThankYouPage} />
      )}
    </div>
  );
}
export default App;
