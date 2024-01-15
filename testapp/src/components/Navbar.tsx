import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [windowY, setWindowY] = useState<boolean | number>(0);

  const windowScroll = 300;

  const router = useRouter()
  useEffect(() => {
    const handleScroll = () => {
      setWindowY(window.scrollY > windowScroll);
    };
    const throttledHandleScroll = throttle(handleScroll, 200);
    window.addEventListener(`scroll`, throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return (
    <div className="row">
      <div className={`header fixedCostume py-3 d-flex justify-content-between align-items-center border-bottom ${windowY ? `scrolled col-12` : `col-10 offset-1`}`}>
        <Link className={`${windowY ? `d-none`: null}`} href={`/`} style={{ textDecoration: `none`, color: `#fff` }}>
          Logo
        </Link>
        <ul

          className={`${windowY? `flex-column` : ``} d-flex align-items-center m-0`}
          style={{ listStyle: `none` }}
        >
          <Link href={`/`} className="mr-3" style={{color:`${router.pathname == `/`? `gold`: `#e6e6fa`}`,textDecoration:`none`}}>Home</Link>
          <Link href={`/aboutPage`} className="mr-3" style={{color:`${router.pathname == `/aboutPage`? `gold`: `#e6e6fa`}`,textDecoration:`none`}}>About</Link>
          <Link href={`/morePage`} style={{color:`${router.pathname == `/morePage`? `gold`: `#e6e6fa`}`,textDecoration:`none`}}>More</Link>
        </ul>
        <Link
        className={`ml-3 ${windowY ? `d-none`: null}`}
          href={`/loginPage`}
          style={{ textDecoration: `none`, color: `#fff` }}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

const throttle = (callback: () => void, limit: number): (() => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return () => {
    if (!timeout) {
      timeout = setTimeout(() => {
        callback();
        timeout = null;
      }, limit);
    }
  };
};
