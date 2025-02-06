import React from 'react'
import account from '../../json/account.json'
import { NavLink } from 'react-router-dom'
const LinkNames = account[0].title.map((link) => link.name)
const LinkNames1 = account[1].title.map((link) => link.name)
import accdetails from '../../json/accountdetail.json'
import Input from '../ui/Input'
import Button from '../ui/Button'
const Account = () => {
  return (
    <section>
      <div className="container">
        <div className="flex py-20 justify-end">
          <h2>Welcome! <span className='text-red_1-red1'>Md Rimel</span></h2>
        </div>
        <div className="flex gap-[100px]">
          <div className="">
            <div className="flex flex-col pb-6  ">
              <div className="">
                <h4 className='pb-4 font-p font-medium text-base'>Manage My Account</h4>
              </div>
              <div className="flex flex-col gap-2 pl-10 w-[205px]">
                {
                  LinkNames.map((item, index) => (
                    <div key={index + Date.now() + item}>
                      <NavLink to={item.to}>
                        <div className="font-normal opacity-50 font-p text-base capitalize hover:opacity-100 hover:text-red_1-red1">{item}</div>
                      </NavLink>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="flex flex-col pb-6 ">
              <div className="">
                <h4 className='pb-4 font-p font-medium text-base'>My Orders</h4>
              </div>
              <div className="flex flex-col gap-2 pl-10 w-[195px]">
                {
                  LinkNames1.map((item, index) => (
                    <div key={index + Date.now() + item}>
                      <NavLink to={item.to}>
                        <div className="font-normal opacity-50 font-p text-base capitalize hover:opacity-100 hover:text-red_1-red1">{item}</div>
                      </NavLink>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="">
              <h4 className='pb-6 font-p font-medium text-base'>My WishList</h4>
            </div>
          </div>
          <div className="w-[870px] shadow-Customnew py-10 px-20 mb-[180px]">
            <div className="">
              <h2 className='text-red_1-red1 font-p font-medium text-xl'>Edit Your Profile</h2>
            </div>
            <div className="grid grid-cols-2 w-[710px] justify-between gap-y-6">
            {
              accdetails.map((item,index) => (
                <div key={index}>
                  <NavLink to={item.to}>
                    <div className="flex w-[330px]">
                      <div className="flex flex-col gap-2">
                        <Input className={"w-[330px]"} id={item.id} placeholder={item.placeholder} title={item.title} type={item.type}/>
                      </div>
                    </div>
                    </NavLink> 
                </div>
              ))
            }
            </div>
            <div className="flex flex-col gap-4 my-6">
              <div className="flex flex-col gap-2">
                <Input id={"type5"} placeholder={"Current Passwod"} title={"Password Changes"}/>
              </div>
              <div className="flex flex-col gap-4">
              <Input id={"type5"} placeholder={"New Passwod"} type={"password"} classNameLabel={"hidden"}/>
              <Input id={"type5"} placeholder={"Confirm New Passwod"} type={"password"} classNameLabel={"hidden"}/>
              </div>
            </div>
            <div className="flex justify-end items-center gap-8">
              <h2>Cancel</h2>
              <Button Children={"Save Changes"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Account
