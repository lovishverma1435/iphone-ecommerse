import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Button from '../Components/ui/Button';
import gamepad1 from '../json/gamepad.json'
import FlashCards from "../Components/Cards/FlashCards";
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
      <main>
        <div className="container">
          <div className="flex flex-col pt-[80px] pb-[140px] font-p font-normal text-sm leading-[21px]">
            <div className="flex flex-col lg:flex-row pb-[140px]">
              <div className="flex flex-col-reverse">
              <div className="flex  w-full md:hidden lg:flex-col mr-[30px] gap-[16px] items-center ">
                {
                  gamepadshortimg.map((item, index) => (
                    <div key={item + index + Date.now()}>
                      <Link className="" to={item.to}>
                        <img
                          className="hover:shadow-custom transition-all duration-300 w-[170px] h-[138px]"
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
              </div>
              {/*  */}
              <div className="flex flex-col max-w-[399px] w-full">
                <div className="flex flex-col gap-4 mb-[16px]">
                  <h4 className="font-i font-semibold text-2xl leading-6 tracking-[0.03em] ">
                    Havic HV G-92 Gamepad
                  </h4>
                  <div className="flex gap-4 items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        src="/src/assets/logo/Four-Star.png"
                        alt="FourStar1"
                      />
                      <h4 className="font-p font-normal text-sm leading-[21px] opacity-[50%]">
                        (150 Reviews){" "}
                      </h4>
                      <div className="flex gap-2  items-center">
                        <h4 className="opacity-[50%] bg-black rounded h-[16px] w-[1px]">
                          {" "}
                        </h4>
                        <h4 className="text-green_1-green">In Stock</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 pb-[24px] border-b border-gray_2-gray mb-[24px]">
                  <h4 className="font-i font-normal text-2xl leading-6 tracking-[0.03em]">
                    $192.00
                  </h4>
                  <h4>
                    PlayStation 5 Controller Skin High quality vinyl with air  channel adhesive for easy bubble free install & mess free  removal Pressure sensitive.
                  </h4>
                </div>
                <div className="flex gap-6 mb-[24px]">
                  <h4 className="font-i font-normal text-xl leading-5 tracking-[0.03em]">
                    Colours:</h4>
                  <div className="flex gap-2">
                    {
                      color &&
                      color.map((item, index) => (
                        <Fragment key={index}>
                          <div
                            className={`flex items-center w-5 h-5  justify-center rounded-full border-[2px]  ${isborder === index
                              ? " border-black"
                              : " border-none"
                              }`}>
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
                      ))
                    }
                  </div>
                </div>
                <div className="mb-6 flex items-center font-i font-normal text-xl leading-5 tracking-[0.03em]flex gap-6">
                  <h4>Size:</h4>
                  <div className="flex gap-4">
                    {
                      gamepadsize.map((item, index) => (
                        <div key={item + index + Date.now()}>
                          <Link to={item.to}>
                            <button
                              onClick={() => setgamepad(index)}
                              className={`${gamepad === index
                                ? "bg-red_1-red1 border-transparent text-white"
                                : "border-gray_2-gray bg-white text-black"
                                } flex w-[32px] p-[6px_7px] justify-center border  rounded font-customfont12 font-medium text-sm leading-[18px]`}>
                              <h4>{item.name}</h4>
                            </button>
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className="flex mb-10  ">
                  <div className="flex w-[159px] items-center h-[44px]   justify-between mr-4">
                    <button
                      className="group hover:border-transparent transition-all duration-200 hover:bg-red_1-red1 w-[40px] p-[10px_8px] rounded-l border-l border-t  border-b border-gray_2-gray"
                      onClick={() => setcount(count === 1 ? count : count - 1)}>
                      <img
                        className="group-hover:hidden" src="/src/assets/logo/iconminus.svg" alt="icon-minus" />
                      <img
                        className="hidden group-hover:block" src="/src/assets/logo/iconminuscopy.svg" alt="icon-minus" />
                    </button>
                    <h4 className="font-p font-medium text-xl border w-[80px] py-2 border-gray_2-gray text-center">
                      {count}
                    </h4>
                    <button
                      className="group hover:border-transparent transition-all duration-200 hover:bg-red_1-red1 w-[40px] p-[10px_8px] rounded-r  border-r border-t  border-b border-gray_2-gray"
                      onClick={() => setcount(count === 20 ? count : count + 1)}
                    >
                      <img
                        className="group-hover:hidden" src="/src/assets/logo/iconplus.svg" alt="icon-plus" />
                      <img className="hidden group-hover:block" src="/src/assets/logo/iconpluscopy.svg" alt="icon-plus" />
                    </button>
                  </div>
                  <div className="mr-[19px] ">
                    <Button Children={"Buy Now"} className={"font-medium text-base py-[10px] px-12 text-nowrap  flex justify-center items-center"} />
                  </div>
                  <div className="flex  items-center justify-center w-10 border border-gray_2-gray rounded">
                    <img src="/src/assets/logo/Wishlist.svg" alt="Wishlist" />
                  </div>
                </div>
                <div className="max-w-[399px] w-full flex flex-col border border-gray_2-gray rounded ">
                  <div className="flex border-b border-gray_2-gray p-[24px_0px_16px_16px] gap-4">
                    <img src="/src/assets/logo/icondelivery.svg" alt="icon-delivery" />
                    <div className="flex flex-col gap-2">
                      <h4 className="font-p font-medium text-base">Free Delivery</h4>
                      <h4 className="underline font-p font-medium text-xs leading-[18px]">  Enter your postal code for Delivery Availability</h4>
                    </div>
                  </div>
                  <div className="flex p-[24px_0px_16px_16px] gap-4">
                    <img src="/src/assets/logo/Iconreturn.svg" alt="Icon-return" />
                    <div className="flex flex-col gap-2">
                      <h4 className="font-p font-medium text-base">Return Delivery</h4>
                      <h4 className=" font-p font-medium text-xs leading-[18px]">  Free 30 Days Delivery Returns.<span className="border-b  ml-[3px] border-gray_2-gray text-center">Details</span> </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[60px]">
            <div className="flex items-center gap-4 ">
                    <div className="bg-red_1-red1 w-5 h-10 rounded-md"></div>
                    <div className="text-red_1-red1 font-p font-semibold capitalize">Related Items</div>
                </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex  lg:justify-between ">
                    {
                      gamepad1.map((item,index) =>(
                        <div key={index}>
                          <Link to={item.to}> <FlashCards discount={item.discount} heart={item.heart} view={item.view} image={item.image} name={item.name} offprice={item.offprice} price={item.price} rating={item.rating} viewer={item.viewer} /></Link>
                         
                        </div>
                      ))
                    }
            </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Gamepad;