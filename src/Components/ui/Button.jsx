import React from 'react'

const Button = ({ className, Children}) => {

    return (
        <>
        
            <div className="flex items-center justify-center pt-[73px] pb-[60px] border-b-[2px]">
                <button className={`bg-red_1-red1 ${className} text-white_1-white font-p font-medium text-base py-4 px-12 rounded-md`}>{Children}</button>
            </div>
        </>
    )
}

export default Button
