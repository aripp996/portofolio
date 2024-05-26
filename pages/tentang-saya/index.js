import Metadata from "@/components/utilities/metadata";
import {
  FaGithub,
  FaGitlab,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <Metadata
        title="Portofolio - Tentang Saya"
        description="Saya adalah seorang Junior Web Developer, Network Technician, System Administrator"
        image="/metadata/home.png"
        url="tentang-saya"
      />

      <section className="pb-32 pt-32 transition duration-300 ease-in-out dark:bg-dark lg:pt-44">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full px-4 lg:w-1/2">
              <h4 className="mb-3 text-lg font-bold uppercase text-primary">
                Tentang Saya
              </h4>

              <h2 className="mb-5 max-w-lg text-3xl font-bold text-dark dark:text-white lg:text-4xl">
                Menghubungkan Kreativitas Dengan{" "}
                <span className="ml-1 inline-block -rotate-1 rounded-xl bg-gradient-to-r via-primary/20 px-4 py-1.5 text-lg tracking-tight shadow-2xl shadow-primary/[0.50] ring-2 ring-dark/70 dark:ring-white/70 sm:px-4 sm:py-3 sm:text-3xl lg:text-4xl">
                  Kode.
                </span>
              </h2>

              <p className="max-w-xl text-base font-medium text-secondary lg:text-lg">
                Saya seorang Junior Web Developer yang memiliki minat dalam mempelajari dan memperdalam teknologi yang dibutuhkan di masa depan agar dapat memecahkan masalah.
                <br />
                <br />
                Dalam peran Technology Enthusiasts, saya senang dalam mempelajari teknologi, dan mempraktekan apa yang saya pelajari dalam kehidupan sehari-hari.

                <br />
                <br />
                Sebagai seorang Self Motivated, saya selalu berpikir positif, peduli terhadap kesehatan fisik dan mental, dan fokus pada proses, bukan hasil.
              </p>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white lg:pt-10 lg:text-4xl">
                Mari Berteman
              </h2>

              <p className="mb-6 text-base font-medium text-secondary lg:mt-14 lg:text-lg">
                Saya senang jika diberi kepercayaan dan diandalkan. Saya akan berusaha menguasai skill dan ilmu diposisi yang saya tempati
                <br />
                <br />
                Senang rasanya dapat berbagi perjalanan dan pengalaman saya dengan Anda. Saya sangat berharap dapat terhubung dengan Anda dan menjalin persahabatan yang lebih dekat. Terima kasih atas kunjungannya, dan mari bersama-sama menginspirasi dan memajukan dunia teknologi! 
              </p>

              <div className="flex items-center">
                {/* Github */}
                <a
                  href="https://github.com/aripp996"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaGithub className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    GitHub
                  </span>
                </a>

                {/* Youtube */}
                <a
                  href="https://www.youtube.com/channel/UCVfdHhVDpe3rsAAi3XbMSfQ#"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaYoutube className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    YouTube
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/arifrizkik/"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaInstagram className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    Instagram
                  </span>
                </a>

                {/* Linkedin */}
                <a
                  href="https://www.linkedin.com/in/arif-rizki-kurniadi-944ab21b4/"
                  target="_blank"
                  className="group mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <FaLinkedin className="h-6 w-6" />
                  <span className="absolute mt-20 scale-0 rounded bg-primary text-white p-2 text-xs group-hover:scale-100 whitespace-normal transition duration-300 ease-in-out font-bold">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
