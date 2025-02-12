import React from 'react'
import footer from '../../json/Footer.json'
import { Link, NavLink } from 'react-router-dom'
const Footer = () => {
  const LinkNames = footer[0].title.map((link) => link.name)
  const LinkNames1 = footer[1].title.map((link) => link.name)
  const LinkNames2 = footer[2].title.map((link) => link.name)


  return (
    <>
       <footer className="bg-black text-white pt-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8 justify-between pb-14">
        <div className="flex flex-col gap-6 max-w-xs">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-2xl tracking-wide">Exclusive</h1>
            <h2 className="text-[#FAFAFA] font-medium text-xl">Subscribe</h2>
            <h3 className="text-[#FAFAFA] text-base">Get 10% off your first order</h3>
          </div>
          <div className="flex items-center border border-white rounded px-4 py-3">
            <input
              className="w-full bg-black outline-none text-white placeholder-opacity-50 text-base"
              type="email"
              placeholder="Enter your email"
            />
            <img src="/src/assets/logo/icon-send.svg" alt="send icon" className="ml-3" />
          </div>
        </div>

        {[
          { title: "Support", links: LinkNames },
          { title: "Account", links: LinkNames1 },
          { title: "Quick Links", links: LinkNames2 },
        ].map((section, index) => (
          <div key={index} className="flex flex-col max-w-[175px]">
            <h4 className="pb-6 font-medium text-xl">{section.title}</h4>
            <div className="flex flex-col gap-4">
              {section.links.map((item, idx) => (
                <NavLink key={idx} to={item.to} className="text-base capitalize truncate">
                  {item}
                </NavLink>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-6">
          <h1 className="font-medium text-xl">Download App</h1>
          <h2 className="text-[#FAFAFA] opacity-70 text-xs">Save $3 with App New User Only</h2>
          <div className="flex gap-4 items-center">
            <img src="/src/assets/logo/QrCode.svg" alt="qr code" className="w-16 h-16" />
            <div className="flex flex-col gap-2">
              <img src="/src/assets/logo/playstore.svg" alt="playstore" className="w-26 h-8" />
              <img src="/src/assets/logo/GooglePlay.svg" alt="appstore" className="w-26 h-8" />
            </div>
          </div>

          <div className="flex items-center gap-6">
            {["Facebook", "Twitter", "instagram", "Linkedin"].map((icon, index) => (
              <img key={index} src={`/src/assets/logo/${icon}.svg`} alt={icon} className="w-6 h-6" />
            ))}
          </div>
        </div>
      </div>
      
      <div className="border-t pt-4 flex items-center justify-center gap-2 pb-6 text-sm opacity-60 border-white">
        <img src="/src/assets/logo/copyright.svg" alt="copyright" className="w-4 h-4" />
        <h6>Copyright Rimel 2022. All rights reserved</h6>
      </div>
    </footer>
    </>
  )
}

export default Footer
