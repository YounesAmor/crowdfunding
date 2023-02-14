import React, { useEffect, useState } from "react";
import CloseIcon from "../assets/images/icon-close-modal.svg";
const ModalForm = ({ handleModalFormPage, closeModal, sourceDonation }) => {
  const [pledgeNoRewardChoosen, setPledgeNoRewardChoosen] = useState(false);
  const [pledgeBambooChoosen, setPledgeBambooChoosen] = useState(false);
  const [pledgeBlackChoosen, setPledgeBlackChoosen] = useState(false);
  const [valueBamboo, setValueBamboo] = useState("");
  const [valueBlack, setValueBlack] = useState("");

  useEffect(() => {
    if (sourceDonation === "bamboo") {
      setPledgeBambooChoosen(true);
    } else {
      setPledgeBlackChoosen(true);
    }
  }, [sourceDonation]);
  useEffect(() => {
    if (pledgeNoRewardChoosen === true) {
      setPledgeBambooChoosen(false);
      setPledgeBlackChoosen(false);
    }
  }, [pledgeNoRewardChoosen]);
  useEffect(() => {
    if (pledgeBambooChoosen === true) {
      setPledgeNoRewardChoosen(false);
      setPledgeBlackChoosen(false);
    }
  }, [pledgeBambooChoosen]);
  useEffect(() => {
    if (pledgeBlackChoosen === true) {
      setPledgeBambooChoosen(false);
      setPledgeNoRewardChoosen(false);
    }
  }, [pledgeBlackChoosen]);
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-200 bg-opacity-80">
      <div className="w-9/10 grid place-content-center">
        <div className="mx-3 rounded-lg border border-transparent bg-white py-12 px-4 lg:mx-[400px] lg:px-24">
          <div className="flex items-center justify-between">
            <p className="font-commissioner font-bold">Back this project</p>
            <img src={CloseIcon} alt="close" onClick={closeModal()} />
          </div>
          <p className="py-4 text-left font-commissioner sm:text-sm">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <div
            className={
              pledgeNoRewardChoosen
                ? "my-2 grid justify-start rounded-lg border border-moderateCyan p-4 sm:grid-cols-12"
                : "my-2 grid justify-start rounded-lg border p-4 sm:grid-cols-12 "
            }
          >
            <div className="justify-self-start sm:col-start-1 sm:row-start-1 lg:row-span-3 lg:ml-3">
              <input
                type="checkbox"
                className=""
                onClick={() => setPledgeNoRewardChoosen(!pledgeNoRewardChoosen)}
                checked={pledgeNoRewardChoosen}
                onChange={() =>
                  setPledgeNoRewardChoosen(!pledgeNoRewardChoosen)
                }
              />
            </div>
            <div className="self-start justify-self-start sm:col-span-12 sm:col-start-2 ">
              <p className="font-commissioner text-sm font-bold">
                Pledge with no reward
              </p>
            </div>
            <div className="justify-self-start sm:col-span-12 sm:col-start-1 lg:col-start-2">
              <p className="text-left font-commissioner text-sm sm:py-3">
                {" "}
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
            </div>

            {pledgeNoRewardChoosen && (
              <React.Fragment>
                <hr className="h-px border-0 bg-gray-200 sm:col-span-12" />
                <div className="sm:col-span-12 sm:flex sm:justify-center lg:col-span-4 lg:col-start-2 lg:self-center lg:justify-self-start">
                  <input
                    type="text"
                    placeholder="Enter your pledge"
                    className="rounded-lg text-center sm:mt-4 lg:mt-0"
                    required
                  />
                </div>
                <div className="sm:col-span-12 lg:col-span-2 lg:col-start-10 lg:justify-self-start">
                  <button
                    className="mt-2 rounded-full bg-moderateCyan px-7 py-2 text-white "
                    onClick={handleModalFormPage()}
                  >
                    Continue
                  </button>
                </div>
              </React.Fragment>
            )}
          </div>
          <div
            className={
              pledgeBambooChoosen
                ? "my-2 grid justify-start rounded-lg border border-moderateCyan p-4 sm:grid-cols-12"
                : "my-2 grid justify-start rounded-lg border p-4 sm:grid-cols-12 "
            }
          >
            <div className="justify-self-start sm:col-start-1 sm:row-start-1 lg:row-span-3 lg:ml-3">
              <input
                type="checkbox"
                onClick={() => setPledgeBambooChoosen(!pledgeBambooChoosen)}
                checked={pledgeBambooChoosen}
                onChange={() => setPledgeBambooChoosen(!pledgeBambooChoosen)}
              />
            </div>

            <div className="flex text-left sm:col-span-11 sm:flex-col sm:items-start sm:justify-center lg:col-span-8 lg:flex-row lg:justify-start lg:gap-3">
              <p className="font-commissioner text-sm font-bold">
                Bamboo Stand
              </p>
              <p className="font-commissioner text-sm font-medium text-moderateCyan">
                Pledge $25 or more
              </p>
            </div>
            <div className="justify-self-start sm:col-span-12 sm:col-start-1 lg:col-start-2">
              <p className="text-left font-commissioner text-sm sm:py-3">
                {" "}
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you'll be added to a
                special Backer member list.
              </p>
            </div>

            <div className="sm:col-span-12 sm:col-start-1 sm:justify-self-start lg:col-start-11 lg:row-start-1">
              <p className="text-left font-commissioner sm:py-4 lg:py-0">
                <span className="font-bold">101</span> left
              </p>
            </div>

            {pledgeBambooChoosen && (
              <React.Fragment>
                <hr className="col-span-12 h-px border-0 bg-gray-200" />
                <div className="flex justify-center sm:col-span-12">
                  <input
                    type="text"
                    placeholder="Enter your pledge"
                    name="pledge-bamboo"
                    className="mt-4 rounded-lg text-center"
                    value={valueBamboo}
                    onChange={(e) => setValueBamboo(e.target.value)}
                    required
                  />
                </div>
                <div className="sm:col-span-5 sm:col-start-1 sm:mt-2">
                  <button
                    className="rounded-full border px-7 py-2 font-bold "
                    onClick={() => setValueBamboo("25$")}
                  >
                    $25
                  </button>
                </div>
                <div className="sm:col-span-5 sm:col-start-7 sm:mt-2">
                  <button
                    className="rounded-full bg-moderateCyan px-7 py-2 text-white "
                    onClick={handleModalFormPage()}
                  >
                    Continue
                  </button>
                </div>
              </React.Fragment>
            )}
          </div>
          <div
            className={
              pledgeBlackChoosen
                ? "my-2 grid justify-start rounded-lg border border-moderateCyan p-4 sm:grid-cols-12"
                : "my-2 grid justify-start rounded-lg border p-4 sm:grid-cols-12 "
            }
          >
            <div className="justify-self-start sm:col-start-1 sm:row-start-1 lg:row-span-3 lg:ml-3">
              <input
                type="checkbox"
                onClick={() => setPledgeBlackChoosen(!pledgeBlackChoosen)}
                checked={pledgeBlackChoosen}
                onChange={() => setPledgeBlackChoosen(!pledgeBlackChoosen)}
              />
            </div>

            <div className="flex text-left sm:col-span-11 sm:flex-col sm:items-start sm:justify-center lg:col-span-8 lg:flex-row lg:justify-start lg:gap-3">
              <p className="font-commissioner text-sm font-bold">
                Black Edition Stand
              </p>
              <p className="font-commissioner text-sm font-medium text-moderateCyan">
                Pledge $75 or more
              </p>
            </div>
            <div className="justify-self-start sm:col-span-12 sm:col-start-1 lg:col-start-2">
              <p className="text-left font-commissioner text-sm sm:py-3">
                {" "}
                You get a Black Special Edition computer stand and a personal
                thank you. You'll be added to our Backer member list. Shipping
                is included.
              </p>
            </div>

            <div className="sm:col-span-12 sm:col-start-1 sm:justify-self-start lg:col-start-11 lg:row-start-1">
              <p className="text-left font-commissioner sm:py-4 lg:py-0">
                <span className="font-bold">64</span> left
              </p>
            </div>

            {pledgeBlackChoosen && (
              <React.Fragment>
                <hr className="col-span-12 h-px border-0 bg-gray-200" />
                <div className="flex justify-center sm:col-span-12">
                  <input
                    type="text"
                    placeholder="Enter your pledge"
                    name="pledge-bamboo"
                    className="mt-4 rounded-lg text-center"
                    value={valueBlack}
                    onChange={(e) => setValueBlack(e.target.value)}
                    required
                  />
                </div>
                <div className="sm:col-span-5 sm:col-start-1 sm:mt-2">
                  <button
                    className="rounded-full border px-7 py-2 font-bold "
                    onClick={() => setValueBlack("75$")}
                  >
                    $75
                  </button>
                </div>
                <div className="sm:col-span-5 sm:col-start-7 sm:mt-2">
                  <button
                    className="rounded-full bg-moderateCyan px-7 py-2 text-white "
                    onClick={handleModalFormPage()}
                  >
                    Continue
                  </button>
                </div>
              </React.Fragment>
            )}
          </div>
          <div className="my-2 grid grid-cols-12 rounded-lg border p-4 opacity-40">
            <div className="justify-self-start sm:col-start-1 sm:row-start-1 lg:row-span-3 lg:ml-3">
              <input type="checkbox" disabled />
            </div>

            <div className="flex text-left sm:col-span-10 sm:flex-col sm:items-start sm:justify-center lg:col-span-8 lg:flex-row lg:justify-start lg:gap-3">
              <p className="font-commissioner text-sm font-bold">
                Mahogany Special Edition
              </p>
              <p className="font-commissioner text-sm font-medium text-moderateCyan">
                Pledge $200 or more
              </p>
            </div>
            <div className="justify-self-start sm:col-span-12 sm:col-start-1 lg:col-start-2">
              <p className="text-left font-commissioner text-sm sm:py-3">
                {" "}
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You'll be added to our Backer member
                list. Shipping is included.
              </p>
            </div>

            <div className="sm:col-span-12 sm:col-start-1 sm:justify-self-start lg:col-start-11 lg:row-start-1">
              <p className="text-left font-commissioner sm:py-4 lg:py-0">
                <span className="font-bold">0</span> left
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
