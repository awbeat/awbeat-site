"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { siteConfig } from "@/config/site"
import { navLinks } from "@/lib/links"
import { settings } from "@/config/settings"
import { Audiowide } from "next/font/google"
import { Button } from "@/components/ui/button"
import { alphaLyraeMedium } from "@/app/fonts";
import Image from "next/image";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)



  const handleClick = async () => {
    setNavbar(false)
  }

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [navbar])

  return (
    <header className="select-none">
      <nav className="container md:flex md:items-center px-8 mx-auto py-12">
        <div>
          <div className="flex items-center justify-between block py-5">
            <Link href="/" onClick={handleClick}>
              <h1 className={`${alphaLyraeMedium.className} text-2xl duration-200`}>
                {/* {siteConfig.name} */}

                <Image
        src="/awbeat_logo.svg"
        className=""
        width={100}
        height={20}
        alt="Card image"
      />
              </h1>
            </Link>
            <div className="flex gap-1 md:hidden">
              <button
                className="rounded-md p-2 outline-none focus:border focus:border-primary"
                aria-label="Hamburger Menu"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
              {/* <ModeToggle /> */}
            </div>
          </div>
        </div>
        <div className="ml-auto">
          <div
            className={`absolute left-0 right-0 z-10 m-auto justify-self-end md:static md:mt-0 md:block md:border-none md:p-0  w-full ${
              navbar ? "block" : "hidden"
            }`}
            style={{}}
          >
            <ul className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0 ">
              {navLinks.map((link) => (
                <li key={link.route}>
                  <Link
                    className="hover:underline"
                    href={link.path}
                    onClick={handleClick}
                  >
                    {link.route}
                  </Link>
                </li>
              ))}


            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
