"use client";

import { useState } from "react";
import Image from "next/image";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("home");
  return (
    <>
      {open ? (
        <aside
          className="flex h-full w-80 flex-col gap-10
 bg-sidebar px-10 py-4 text-secondary"
        >
          <div className="flex flex-row justify-between">
            <Image alt="logo" width={32} height={32} src="/favicon.ico" />
            <button onClick={() => setOpen(false)}>
              <Image
                alt="hamburger icon"
                width={24}
                height={24}
                src="/icons/bars.svg"
              />
            </button>
          </div>
          <div>
            <div className="absolute left-0">
              <Image
                alt=" pointer icon"
                width={10}
                height={10}
                src="/icons/pointer.svg"
              />
            </div>
            <div className="mt-3 flex flex-col gap-7">
              <div className="flex flex-row items-center gap-5">
                <Image
                  alt="home icon"
                  width={24}
                  height={24}
                  src="/icons/house.svg"
                />
                <span>Home</span>
              </div>
              <div className="flex flex-row items-center gap-5">
                <Image
                  alt="discover icon"
                  width={24}
                  height={24}
                  src="/icons/compass.svg"
                />
                <span>Discover</span>
              </div>
              <div className="flex flex-row items-center gap-5">
                <Image
                  alt="products icon"
                  width={24}
                  height={24}
                  src="/icons/box.svg"
                />
                <span>Popular Products</span>
              </div>
              <div className="flex flex-row items-center gap-5">
                <Image
                  alt="authors icon"
                  width={24}
                  height={24}
                  src="/icons/user-group.svg"
                />
                <span>Top Authors</span>
              </div>

              <div className="flex flex-row items-center gap-5">
                <Image
                  alt="feed icon"
                  width={24}
                  height={24}
                  src="/icons/feed-1.svg"
                />
                <span>Feed</span>
              </div>
              <div className="flex flex-row items-center gap-5">
                <Image
                  alt="contact icon"
                  width={24}
                  height={24}
                  src="/icons/headset.svg"
                />
                <span>Contact</span>
              </div>
            </div>
          </div>
          <div className="mt-40 flex flex-col gap-7">
            <div className="flex flex-row items-center gap-5">
              <Image
                alt="settings icon"
                width={24}
                height={24}
                src="/icons/gear.svg"
              />
              <span>Settings</span>
            </div>
            <div className="flex flex-row items-center gap-5">
              <Image
                alt="help icon"
                width={24}
                height={24}
                src="/icons/question.svg"
              />
              <span>Help</span>
            </div>
          </div>
          {/* <div className="flex text-sm flex-col gap-1">
            <div className="flex text-gray-400 flex-row justify-between">
              <span>Terms</span>
              <span>Privacy</span>
              <span>Help</span>
            </div>
            <div className="text-gray-400  text-sm flex flex-row justify-center">Copyright 2023 Avinash</div>
          </div> */}
        </aside>
      ) : (
      <aside onClick={() => setOpen(true)}
      className="flex h-full w-26 flex-col gap-10
bg-sidebar px-10 py-4 text-secondary"
    >
      <div className="flex flex-row justify-between">
        <Image alt="logo" width={32} height={32} src="/favicon.ico" />
       
      </div>
      <div>
        <div className="absolute left-0">
          <Image
            alt=" pointer icon"
            width={10}
            height={10}
            src="/icons/pointer.svg"
          />
        </div>
        <div className="mt-3 flex flex-col gap-7">
          <div className="flex flex-row items-center gap-5">
            <Image
              alt="home icon"
              width={24}
              height={24}
              src="/icons/house.svg"
            />
          </div>
          <div className="flex flex-row items-center gap-5">
            <Image
              alt="discover icon"
              width={24}
              height={24}
              src="/icons/compass.svg"
            />
        
          </div>
          <div className="flex flex-row items-center gap-5">
            <Image
              alt="products icon"
              width={24}
              height={24}
              src="/icons/box.svg"
            />
          
          </div>
          <div className="flex flex-row items-center gap-5">
            <Image
              alt="authors icon"
              width={24}
              height={24}
              src="/icons/user-group.svg"
            />
       
          </div>

          <div className="flex flex-row items-center gap-5">
            <Image
              alt="feed icon"
              width={24}
              height={24}
              src="/icons/feed-1.svg"
            />
  
          </div>
          <div className="flex flex-row items-center gap-5">
            <Image
              alt="contact icon"
              width={24}
              height={24}
              src="/icons/headset.svg"
            />
         
          </div>
        </div>
      </div>
      <div className="mt-40 flex flex-col gap-7">
        <div className="flex flex-row items-center gap-5">
          <Image
            alt="settings icon"
            width={24}
            height={24}
            src="/icons/gear.svg"
          />
   
        </div>
        <div className="flex flex-row items-center gap-5">
          <Image
            alt="help icon"
            width={24}
            height={24}
            src="/icons/question.svg"
          />
     
        </div>
      </div>
      {/* <div className="flex text-sm flex-col gap-1">
        <div className="flex text-gray-400 flex-row justify-between">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Help</span>
        </div>
        <div className="text-gray-400  text-sm flex flex-row justify-center">Copyright 2023 Avinash</div>
      </div> */}
    </aside>
      )}
    </>
  );
};

export default Sidebar;
