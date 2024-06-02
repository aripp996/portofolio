import Metadata from "@/components/utilities/metadata";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
  SiHtml5,
  SiMarkdown,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiLinux,
  SiGnubash,
  SiApache,
  SiProxmox,
  SiMikrotik,
  SiUbiquiti,
  SiFigma,
  SiPostman,
  SiArduino,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiCpanel,
  SiFirebase,
  SiGrafana,
  SiPrometheus,
  SiVmware,
  SiTypescript,
  SiJsonwebtokens,
  SiCisco,
  SiTerraform,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNodejs, DiNginx } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";

const SkillsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const grayscales = document.querySelectorAll(".grayscale");
    const iconSkills = document.querySelectorAll(".icon-skill");

    const animateGrayscale = () => {
      if (activeIndex < grayscales.length) {
        grayscales[activeIndex].classList.remove("grayscale", "opacity-60");
        grayscales[activeIndex].classList.add(
          "grayscale-0",
          "opacity-100",
          "scale-110"
        );

        iconSkills[activeIndex].classList.remove("scale-0");
        iconSkills[activeIndex].classList.add("scale-110");

        setTimeout(() => {
          grayscales[activeIndex].classList.remove(
            "grayscale-0",
            "opacity-100",
            "scale-110"
          );

          iconSkills[activeIndex].classList.remove("scale-110");

          grayscales[activeIndex].classList.add("grayscale", "opacity-60");
          iconSkills[activeIndex].classList.add("scale-0");
          setActiveIndex(activeIndex + 1);
        }, 500);
      } else {
        setActiveIndex(0);
      }
    };

    animateGrayscale();
  }, [activeIndex]);

  return (
    <>
      <Metadata
        title="Portofolio - Skills"
        description="Berikut adalah list Teknologi, Programming Laguage dan Tools yang saya kuasai."
        image="/metadata/home.png"
        url="skills"
      />

      <section id="skills" className="pt-36 pb-36 dark:bg-dark">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-[#4458dc]">
                Skills
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl">
                Penguasaan Teknologi, Problem Solving dan Manajemen Waktu
              </h2>
              <p className="text-medium font-medium text-secondary md:text-lg mt-10">
                Ketika berbicara tentang penguasaan teknologi, pemahaman
                mendalam tentang berbagai bahasa pemrograman dan alat-alat yang
                kritis adalah kunci dalam menghadapi tantangan dunia teknologi
                yang terus berkembang. Saya telah mengembangkan keahlian yang
                cukup dalam berbagai bidang, yang memungkinkan saya untuk
                merangkai solusi yang tangguh dan efektif. 
              </p>
            </div>
          </div>

          <div className="w-full pr-5">
            <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4 items-center justify-center">
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
