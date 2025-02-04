import React from 'react'

const Button = ({ className, Children,DivForButton,varient }) => {

    return (
        <> 
            { varient === white ? (<>
                <div className={`flex ${DivForButton} items-center justify-center  `}>
                            <button className={`bg-gray_2-gray ${className} border-[1px] border-black_1-black text-white_1-white font-p font-medium text-base py-4 px-12 rounded-md  hover:bg-white hover:text-black_1-black hover:border-black_1-black`}>{Children}</button>
                        </div>
            </>):
               
                    (<>
                        <div className={`flex ${DivForButton} items-center justify-center  `}>
                            <button className={`bg-red_1-red1 ${className} border-[1px] border-transparent text-white_1-white font-p font-medium text-base py-4 px-12 rounded-md  hover:bg-white hover:text-red_1-red1 hover:border-red_1-red1`}>{Children}</button>
                        </div>
                    </>)
            }
        </>
    )
}

export default Button
