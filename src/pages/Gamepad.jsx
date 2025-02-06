import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Button from '../Components/ui/Button';
import gamepad1 from '../json/gamepad.json'
import Flashsales from "../Components/home/FlashSale";
const Gamepad = () => {
  const [gamepad, setgamepad] = useState(false);
  const [isborder, setIsborder] = useState(0);
  const [count, setcount] = useState(1);
  const gamepadshortimg = [
    {
      img: "Gamepad1.png",
    },
    {
      img: "Gamepad2.png",
    },
    {
      img: "Gamepad3.png",
    },
    {
      img: "Gamepad4.png",
    },
  ];
  const color = [
    {
      color: "#A0BCE0",
    },
    {
      color: "#E07575",
    },
  ];
  const gamepadsize = [
    {
      name: "XS",
    },
    {
      name: "S",
    },
    {
      name: "M",
    },
    {
      name: "L",
    },
    {
      name: "XL",
    },
  ];
  return (
    <>
      {/* <h4>{count}</h4>
    <button onClick={()=>setcount(count === 20 ? count : count + 1)}>++++++++</button>
    <button onClick={()=>setcount(count === 1 ? count : count - 1)}>------------</button> */}
      <main>
        <div className="container">
          <div className="flex flex-col pt-[80px] pb-[140px] font-customfont12 font-normal text-sm leading-[21px] gap-[140px]">
            <div className="flex gap-3 font-customfont12 font-normal text-sm leading-[21px]">
              <Link to={"/Account"} className="opacity-[50%]">
                Account
              </Link>
              <h4 className="opacity-[50%]">/</h4>
              <h4 className="opacity-[50%]">Gaming</h4>
              <h4 className="opacity-[50%]">/</h4>
              <h4>Havic HV G-92 Gamepad</h4>
            </div>
            <div className="flex ">
              <div className="flex flex-col mr-[30px] gap-[16px] items-center w-[170px]">
                {
                  gamepadshortimg.map((item, index) => (
                    <div key={item + index + Date.now()}>
                      <Link className="" to={item.to}>
                        <img
                          className="hover:shadow-custom transition-all duration-300"
                          src={`/src/assets/images/${item.img}`}
                          alt="gamepadshort"
                        />
                      </Link>
                    </div>
                  ))}
              </div>
              {/* main image */}
              <div className="mr-[70px]">
                <img src="/src/assets/images/gamepad5.png" alt="gamepadhead" />
              </div>
              {/*  */}
              <div className="flex flex-col max-w-[399px] w-full">
                <div className="flex flex-col gap-4 mb-[16px]">
                  <h4 className="font-customfont font-semibold text-2xl leading-6 tracking-[0.03em] ">
                    Havic HV G-92 Gamepad
                  </h4>
                  <div className="flex gap-4 items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        src="/src/assets/logo/Four-Star.png"
                        alt="FourStar1"
                      />
                      <h4 className="font-customfont12 font-normal text-sm leading-[21px] opacity-[50%]">
                        (150 Reviews){" "}
                      </h4>
                      <div className="flex gap-2  items-center">
                        <h4 className="opacity-[50%] bg-black rounded h-[16px] w-[1px]">
                          {" "}
                        </h4>
                        <h4 className="text-customgreen-0">In Stock</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 pb-[24px] border-b border-customGray-0 mb-[24px]">
                  <h4 className="font-customfont font-normal text-2xl leading-6 tracking-[0.03em]">
                    $192.00
                  </h4>
                  <h4>
                    PlayStation 5 Controller Skin High quality vinyl with air
                    channel adhesive for easy bubble free install & mess free
                    removal Pressure sensitive.
                  </h4>
                </div>
                <div className="flex gap-6 mb-[24px]">
                  <h4 className="font-customfont font-normal text-xl leading-5 tracking-[0.03em]">
                    Colours:
                  </h4>
                  <div className="flex gap-2">
                    {" "}
                    {color &&
                      color.map((item, index) => (
                        <Fragment key={index}>
                          <div
                            className={`flex items-center w-5 h-5  justify-center rounded-full border-[2px]  ${isborder === index
                                ? " border-black"
                                : " border-none"
                              }`}
                          >
                            <button
                              style={{
                                background: item.color,
                              }}
                              onClick={() => setIsborder(index)}
                              className={`  rounded-full ${isborder === index ? " w-3 h-3" : " w-4 h-4"
                                } `}
                            ></button>
                          </div>
                        </Fragment>
                      ))}
                  </div>
                </div>
                <div className="mb-6 flex items-center font-customfont font-normal text-xl leading-5 tracking-[0.03em]flex gap-6">
                  <h4>Size:</h4>
                  <div className="flex gap-4">
                    {gamepadsize.map((item, index) => (
                      <div key={item + index + Date.now()}>
                        <Link to={item.to}>
                          <button
                            onClick={() => setgamepad(index)}
                            className={`${gamepad === index
                                ? "bg-CustomRed-0 border-transparent text-white"
                                : "border-customGray-0 bg-white text-black"
                              } flex w-[32px] p-[6px_7px] justify-center border  rounded font-customfont12 font-medium text-sm leading-[18px]`}
                          >
                            <h4>{item.name}</h4>
                          </button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex mb-10  ">
                  <div className="flex w-[159px] items-center h-[44px]   justify-between mr-4">
                    <button
                      className="group hover:border-transparent transition-all duration-200 hover:bg-CustomRed-0 w-[40px] p-[10px_8px] rounded-l border-l border-t  border-b border-customGray-0"
                      onClick={() => setcount(count === 1 ? count : count - 1)}
                    >
                      <img
                        className="group-hover:hidden"
                        src="/src/assets/logo/iconminus.svg"
                        alt="icon-minus"
                      />
                      <img
                        className="hidden group-hover:block"
                        src="/src/assets/svg/icon-minuscopy.svg"
                        alt="icon-minus"
                      />
                    </button>
                    <h4 className="font-customfont12 font-medium text-xl border w-[80px] pt-[7px] pb-[7px] border-customGray-0 text-center">
                      {count}
                    </h4>
                    <button
                      className="group hover:border-transparent transition-all duration-200 hover:bg-CustomRed-0 w-[40px] p-[10px_8px] rounded-r r border-r border-t  border-b border-customGray-0"
                      onClick={() => setcount(count === 20 ? count : count + 1)}
                    >
                      <img
                        className="group-hover:hidden"
                        src="/src/assets/logo/iconplus.svg"
                        alt="icon-plus"
                      />
                      <img
                        className="hidden group-hover:block"
                        src="/src/assets/svg/icon-pluscopy.svg"
                        alt="icon-plus"
                      />
                    </button>
                  </div>
                  <div className="mr-[19px]">
                    <Button Children={"Buy"} className={"font-medium text-base p-[10px_46px] h-[44px] w-[165px]"}/>
                  </div>
                  <div className="flex  items-center justify-center w-10 border border-customGray-0 rounded">
                    <img src="/src/assets/logo/Wishlist.svg" alt="Wishlist" />
                  </div>
                </div>
                <div className="max-w-[399px] w-full flex flex-col border border-customGray-0 rounded ">
                  <div className="flex border-b border-customGray-0 p-[24px_0px_16px_16px] gap-4">
                    <img src="/src/assets/logo/icondelivery.svg" alt="icon-delivery" />
                    <div className="flex flex-col gap-2">
                      <h4 className="font-customfont12 font-medium text-base">Free Delivery</h4>
                      <h4 className="underline font-customfont12 font-medium text-xs leading-[18px]">  Enter your postal code for Delivery Availability</h4>
                    </div>
                  </div>
                  <div className="flex p-[24px_0px_16px_16px] gap-4">
                    <img src="/src/assets/logo/Iconreturn.svg" alt="Icon-return" />
                    <div className="flex flex-col gap-2">
                      <h4 className="font-customfont12 font-medium text-base">Return Delivery</h4>
                      <h4 className=" font-customfont12 font-medium text-xs leading-[18px]">  Free 30 Days Delivery Returns.<span className="border-b  ml-[3px] border-customGray-0 text-center">Details</span> </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <Flashsales classmain={"hidden"} titleclass={"hidden"} buttonclass={"hidden"} headingclass={"w-[140px]"} info={"Related Item"} classhead={"gap-[60px]"} data={gamepad1} />

            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Gamepad;