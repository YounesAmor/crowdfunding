import CheckIcon from "../assets/images/icon-check.svg";
const ThankYouNote = ({ handleThankYouPage }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-200 bg-opacity-80">
      <div className="w-9/10 grid h-screen place-content-center">
        <div className="mx-3 flex flex-col items-center justify-center rounded-lg border border-transparent bg-white py-12 px-2 lg:mx-[500px]">
          <img src={CheckIcon} alt="check icon" />
          <p className="font-commissioner font-bold">
            Thanks for your support!
          </p>
          <p className="my-3 font-commissioner text-gray-400 sm:text-sm">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button
            className="mt-3 rounded-full bg-moderateCyan p-2 px-5 text-white"
            onClick={handleThankYouPage()}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouNote;
