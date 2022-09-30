import React, { useEffect, useState } from "react";
import { isFirefox, isBrowser, isChrome, isMobile } from "react-device-detect";

export default function MobileFooter() {
  const [browser, setBrowser] = useState(isBrowser);

  useEffect(() => {
    if (isFirefox) {
      setBrowser("Firefox");
    }
    if (isChrome) {
      setBrowser("Chrome");
    }
    if (isMobile) {
      setBrowser("Mobile");
    }
  }, []);
  

  return (
    <div className="flex items-center mt-5 justify-center max-w-[520px] w-full  h-12 font-bold gap-5 bg-white rounded-md sha-[0px 35px 50px -15px rgba(194, 195, 214, 0.5)]">
      <p className="text-[#9495A5]">All</p>
      <p>this is a {browser} browser</p>
      <p className="text-[#9495A5]">Active</p>
      <p className="text-[#9495A5]">Completed</p>
    </div>
  );
}
