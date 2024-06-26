import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbTextColor } from "react-icons/tb";

const menus = [
  { title: "Beranda", target: "/" },
  { title: "Tentang Saya", target: "/tentang-saya" },
  { title: "Prestasi", target: "/portofolio" },
  { title: "Skills", target: "/skills" },
  { title: "Pendidikan", target: "/pendidikan" },
  { title: "Pengalaman", target: "/pengalaman" },
];

const Footer = () => {
  const pathName = usePathname();


  return (
    <footer className="relative w-full border-t border-dark/20 dark:border-white/20 pt-12 transition duration-300 ease-in-out dark:bg-dark dark:opacity-90 lg:pt-20">
      <div className="relative w-full border-t border-dark/20 dark:border-white/20 pt-12 transition duration-300 ease-in-out dark:bg-dark dark:opacity-90 lg:pt-20">
        <div className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
          <div
            className="aspect-[1500/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#4458dc] to-[#854fee] opacity-25 dark:block"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          ></div>
        </div>
          <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
              <div className="flex flex-col xl:flex-row justify-between gap-8">
                  <div className="space-y-2 xl:w-1/2">
                      <h2 className="flex h-10 shrink-0 items-center text-xl md:text-3xl font-bold focus:outline-none dark:text-white mb-5">
                          &{">"} /dev/null
                      </h2>
                      <h3 className="mb-2 text-lg font-bold text-accents-300 dark:text-white/80">
                          Hubungi Saya
                      </h3>
                      <a
                          href="mailto:arifrizkik@gmail.com"
                          className="hover:text-[#4458dc] text-accents-300 dark:text-white/80 dark:hover:text-[#4458dc]"
                      >
                          <span>arifrizkik@gmail.com</span>
                      </a>
                      <div className="flex gap-x-1">
                          {/* Github */}
                          <a
                              href="https://github.com/aripp996"
                              target="_blank"
                              className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-400 dark:border-slate-300 text-slate-400 dark:text-slate-300 hover:border-[#4458dc] hover:bg-[#4458dc] hover:text-white dark:hover:border-[#4458dc] dark:hover:bg-[#4458dc] dark:hover:text-white"
                          >
                              <FaGithub className="h-6 w-6" />
                              <span className="absolute mt-20 scale-0 rounded bg-[#4458dc] text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                                  GitHub
                              </span>
                          </a>
                          {/* Youtube */}
                          <a
                              href="https://www.youtube.com/channel/UCVfdHhVDpe3rsAAi3XbMSfQ#"
                              target="_blank"
                              className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-400 dark:border-slate-300 text-slate-400 dark:text-slate-300 hover:border-[#4458dc] hover:bg-[#4458dc] hover:text-white dark:hover:border-[#4458dc] dark:hover:bg-[#4458dc] dark:hover:text-white"
                          >
                              <FaYoutube className="h-6 w-6" />
                              <span className="absolute mt-20 scale-0 rounded bg-[#4458dc] text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                                  YouTube
                              </span>
                          </a>
                          {/* Instagram */}
                          <a
                              href="https://www.instagram.com/arifrizkik/"
                              target="_blank"
                              className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-400 dark:border-slate-300 text-slate-400 dark:text-slate-300 hover:border-[#4458dc] hover:bg-[#4458dc] hover:text-white dark:hover:border-[#4458dc] dark:hover:bg-[#4458dc] dark:hover:text-white"
                          >
                              <FaInstagram className="h-6 w-6" />
                              <span className="absolute mt-20 scale-0 rounded bg-[#4458dc] text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                                  Instagram
                              </span>
                          </a>
                          {/* Linkedin */}
                          <a
                              href="https://www.linkedin.com/in/arif-rizki-kurniadi-944ab21b4/"
                              target="_blank"
                              className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-400 dark:border-slate-300 text-slate-400 dark:text-slate-300 hover:border-[#4458dc] hover:bg-[#4458dc] hover:text-white dark:hover:border-[#4458dc] dark:hover:bg-[#4458dc] dark:hover:text-white"
                          >
                              <FaLinkedin className="h-6 w-6" />
                              <span className="absolute mt-20 scale-0 rounded bg-[#4458dc] text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                                  LinkedIn
                              </span>
                          </a>
                      </div>
                  </div>
                  <div className="xl:w-1/5">
                      <div>
                          <h3 className="leading text-xl font-bold dark:text-white">
                              Tautan
                          </h3>
                          <ul role="list" className="mt-6 space-y-4">
                              {menus.map((menu, index) => (
                                  <li key={index}>
                                      <Link
                                          className={`text-base leading-6 ${pathName === menu.target
                                              ? "text-[#4458dc]"
                                              : "text-slate-500 dark:text-slate-400"
                                          } hover:text-[#4458dc] dark:hover:text-[#4458dc]`}
                                          href={menu.target}
                                      >
                                          {menu.title}
                                      </Link>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
        <div className="mt-16 flex items-center justify-center border-t border-dark pt-8 dark:border-white/10 sm:mt-20 lg:mt-24">
          <p className="text-accents-300 dark:text-white/80 text-xs leading-5">
            © Copyright 2024 - {new Date().getFullYear()} devnull. All rights
            reserved.
          </p>
        </div>
        <p className="text-center text-xs font-medium text-accents-300 dark:text-white/80 mt-2">
          Dibuat dengan <span className="text-pink-500">❤️</span> oleh{" "}
          <a
            href="https://github.com/armandwipangestu/armandwipangestu.vercel.app"
            target="_blank"
            className="font-bold text-[#4458dc] hover:text-[#4458dc]/80"
          >
            Arif Rizki Kurniadi
          </a>
          , menggunakan{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            className="font-bold text-[#4458dc] hover:text-[#4458dc]/80"
          >
            Next.js
          </a>
          ,{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            className="font-bold text-[#4458dc] hover:text-[#4458dc]/80"
          >
            Tailwind CSS
          </a>{" "}
          dan{" "}
          <a
            href="https://www.markdownguide.org"
            target="_blank"
            className="font-bold text-[#4458dc] hover:text-[#4458dc]/80"
          >
            Markdown
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;