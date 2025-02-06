import React from 'react'

const Input = ({id,type,placeholder,title,className,classNameLabel}) => {
    
  return (
    <>
      <label className={classNameLabel} htmlFor={id}>{title}</label>
      <input className={` ${className} outline-none bg-gray_2-gray py-[13px] px-4  rounded`}  type={type} placeholder={placeholder} id={id}/>
    </>
  )
}

export default Input
