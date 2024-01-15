import Link from "next/link";
import React from "react";

interface LinkItem {
  href: string;
  text: string;
}

interface Props {
  title: string;
  links: LinkItem[];
}

const NavbarDropdown: React.FC<Props> = ({ title, links }) => (
  <li className="nav-item dropdown text-dark">
    <div
      className="nav-link text-dark d-flex align-items-center  justify-content-between"
      id={`navbarDropdown-${title}`}
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <p className="m-0">{title}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M1.79505 8.57383L1.7952 8.57399L6.69505 13.4884C6.69506 13.4884 6.69508 13.4884 6.69509 13.4885C6.74024 13.5336 6.78537 13.5619 6.83021 13.5777L6.83091 13.578C6.88196 13.5964 6.93805 13.6061 7.00026 13.6061C7.06247 13.6061 7.11856 13.5964 7.16961 13.578L7.17031 13.5777C7.21516 13.5619 7.2603 13.5336 7.30547 13.4884L12.2201 8.57383C12.327 8.46686 12.3815 8.33463 12.3815 8.16654C12.3815 8.00149 12.3243 7.86345 12.2055 7.74466C12.0851 7.62433 11.9514 7.56862 11.7982 7.56862C11.6449 7.56862 11.5112 7.62433 11.3909 7.74466L7.10338 12.0322L7.00026 12.1353L6.89714 12.0322L2.60964 7.74466C2.50191 7.63693 2.37185 7.5832 2.20993 7.5832C2.05054 7.5832 1.91456 7.63972 1.79505 7.75924C1.67472 7.87957 1.61901 8.0133 1.61901 8.16654C1.61901 8.31978 1.67472 8.45351 1.79505 8.57383Z"
          fill="#232221"
          stroke="white"
          strokeWidth="0.291667"
        />
      </svg>
    </div>
    <div
      className="dropdown-menu bg-light"
      style={{ border: `none` }}
      aria-labelledby={`navbarDropdown-${title}`}
    >
      {links.map((link, index) => {
        if (link.text == `Види ги сите`) {
          return (
            <Link
              data-toggle="collapse"
              data-target="#navbarCollapse"
              key={index}
              href={link.href}
              className="dropdown-item text-dark p-0 pb-2 text-danger"
              style={{ background: "none", fontSize: "20px" }}
            >
              <p className="m-0" style={{ color: "#8A8328" }}>
                {link.text}
              </p>
            </Link>
          );
        } else {
          return (
            <Link
              data-toggle="collapse"
              data-target="#navbarCollapse"
              key={index}
              href={link.href}
              className="dropdown-item text-dark p-0 pb-2"
              style={{ background: `none` }}
            >
              {link.text}
            </Link>
          );
        }
      })}
    </div>
  </li>
);

export default NavbarDropdown;
