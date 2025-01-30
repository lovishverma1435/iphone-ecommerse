import React from 'react'

const Button = ({ className, Children,DivForButton }) => {

    return (
        <> 
            {
               
                    (<>
                        <div className={`flex ${DivForButton} items-center justify-center pt-[73px] `}>
                            <button className={`bg-red_1-red1 ${className} border-[1px] border-transparent text-white_1-white font-p font-medium text-base py-4 px-12 rounded-md hover:shadow-custom-heavy hover:bg-white hover:text-red_1-red1 hover:border-red_1-red1`}>{Children}</button>
                        </div>
                    </>)
            }
        </>
    )
}

export default Button
