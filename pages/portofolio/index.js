import Metadata from "@/components/utilities/metadata";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const PortofolioPage = () => {
  const [portos, setPortos] = useState([]);
  const [isHoveredIndex, setIsHoveredIndex] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/portofolio`
      );
      const data = await response.json();
      setPortos(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Metadata
        title="Prestasi"
        description="Berikut adalah list prestasi yang saya miliki"
        image="/metadata/home.png"
        url="portofolio"
      />

      <section className="pt-36 pb-36 transition duration-300 ease-in-out dark:bg-dark">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-16 text-center">
                <h4 className="mb-2 text-lg font-semibold uppercase text-primary">
                  Prestasi
                </h4>
              </div>
            </div>
            
            <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <ol className="border-l border-dark dark:border-white">
                {/* First Item */}
                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      2023
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      Juara 1 OSNK ASTRONOMI
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      Puspernas
                    </p>
                  </div>
                </li>

                {/* Second Item */}
                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      2023
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      Peserta ONSP ASTRONOMI
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      Puspernas
                    </p>
                  </div>
                </li>

                {/* First Item */}
                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      2022
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      Medali Perak ASTRONOMI
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      Hardiknas POSI
                    </p>
                  </div>
                </li>

                {/* First Item */}
                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      2022
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      Medali Perak ASTRONOMI
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      Saintech Science Competition
                    </p>
                  </div>
                </li>

                {/* First Item */}
                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-primary"></div>
                    <p className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none">
                      2023
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      Semi Final Cerdas Cermat Fisika
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      FMIPA UNRI
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

            
          </div>

          <div className="grid gap-y-12 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 lg:gap-x-20 lg:gap-y-24 mt-20 px-4">
            {portos.map((porto, index) => (
              <div key={index}>
                <Link href={porto.link} target="_blank">
                  <div
                    data-radix-aspect-ratio-wrapper=""
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingBottom: "56.25%",
                    }}
                  >
                    <div
                      className="ring-border/50 text-accent-foreground grid place-content-center overflow-hidden rounded-[0.60rem] bg-accent font-mono text-sm ring-1 ring-black dark:ring-white"
                      style={{
                        position: "absolute",
                        inset: "0px",
                      }}
                    >
                      <img
                        alt=""
                        height="360"
                        width="640"
                        src={porto.thubmnail}
                        className={`transition duration-300 ease-in-out hover:scale-110 ${
                          isHoveredIndex === index ? "scale-110" : ""
                        }`}
                        onMouseEnter={() => setIsHoveredIndex(index)}
                        onMouseLeave={() => setIsHoveredIndex(null)}
                      />
                    </div>
                  </div>
                </Link>
                <div className="mt-4 rounded-lg">
                  <div className="line-clamp-1 dark:text-white">
                    <Link href={porto.link} target="_blank">
                      <span
                        onMouseEnter={() => setIsHoveredIndex(index)}
                        onMouseLeave={() => setIsHoveredIndex(null)}
                        className={`hover:text-primary transition duration-300 ease-in-out ${
                          isHoveredIndex === index ? "text-primary" : ""
                        }`}
                      >
                        {porto.title}
                      </span>
                    </Link>
                  </div>
                  <div className="mb-4 mt-2 line-clamp-2 text-sm text-slate-400">
                    {porto.excerpt}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-1">
                      {porto.techs?.map((tech, index) => (
                        <div
                          className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium tracking-tight text-cyan-500 transition-colors hover:bg-cyan-500/20 focus:outline-none cursor-default"
                          key={index}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortofolioPage;
