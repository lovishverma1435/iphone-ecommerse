import React, { useState, useRef, useEffect } from "react";
import Arowicon from "../assets/logo/DropDown.svg"

const Dropdown = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(0);
    const [height, setHeight] = useState(0);
    const dropdownRef = useRef(null);
    // const inputref = useRef(null);
    // const [value, setValue] = useState(50); // Default value
    useEffect(() => {
        if (isOpen) {
            setHeight(dropdownRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div className="relative w-full bg-white">
           {/* <p>{value}</p> 
      <input 
        ref={inputref}
        type="range" 
        name="range" 
        step={1} 
        min={0} 
        max={100} 
        value={value}
        onInput={(e) => setValue(e.target.value)} 
      /> */}
            <button
                className="flex w-full justify-between  pb-3 font-p leading-6 text-base font-normal  hover:text-red_1-red1 capitalize"
                onClick={() => setIsOpen(!isOpen)}
            >
                {label}
                <img src={Arowicon} className={`transition-all duration-200 ${isOpen && "rotate-90"}`} alt="" />
            </button>
            <div
                ref={dropdownRef}
                className="flex overflow-hidden transition-all duration-300 bg-white"
                style={{ height: `${height}px` }}
            >
                <ul className="py-2 list-disc flex">
                    {items?.map((item, index) => (
                  <>
                  {item.map((item,index)=>(
                        <li key={index} className="ml-[25px] font-p pb-2">
                        {item}
                    </li>
                  ))}
                  </>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
