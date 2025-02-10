import React from 'react'
import Button from '../Components/ui/Button'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="py-[140px]">
                        <div className="flex flex-col items-center justify-center gap-10">
                            <h1 className='font-medium font-i text-[110px] leading-[115px] tracking-[0.03em]'>404 Not Found</h1>
                            <h6 className='font-p font-normal text-base'>Your visited page not found. You may go home page.</h6>
                            <div className="pt-20">
                                <Link to={"/"}>
                                <Button Children={"Back To Home Page"} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error
