import Metadata from "@/components/utilities/metadata";

const EducationPage = () => {
  return (
    <>
      <Metadata
        title="Portofolio - Pendidikan"
        description="Berikut adalah pendidikan yang saya tempuh"
        image="/metadata/home.png"
        url="pendidikan"
      />

      <section
        id="pendidikan"
        className="pb-32 pt-36 transition-all duration-300 dark:bg-dark"
      >
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center">
              <h4 className="mb-2 text-lg font-semibold uppercase text-[#4458dc]">
                Pendidikan
              </h4>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <ol className="border-l border-dark dark:border-white">
                {/* First Item */}
                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-[#4458dc]"></div>
                    <p className="inline-flex items-center rounded-full border border-[#4458dc]/40 bg-[#4458dc]/10 px-3 py-1 text-xs font-medium tracking-tight text-[#4458dc] transition-colors hover:bg-[#4458dc]/20 focus:outline-none">
                      Agustus 2024 - 
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      ON COMING
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      ON COMING
                    </p>
                  </div>
                </li>

                {/* Second Item */}
                <li>
                  <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-[#4458dc]"></div>
                    <p className="inline-flex items-center rounded-full border border-[#4458dc]/40 bg-[#4458dc]/10 px-3 py-1 text-xs font-medium tracking-tight text-[#4458dc] transition-colors hover:bg-[#4458dc]/20 focus:outline-none">
                      2021 - 2024
                    </p>
                  </div>
                  <div className="mb-6 ml-4 mt-2">
                    <h4 className="tex-dark mb-1.5 text-xl font-semibold dark:text-white">
                      MAN 1 Kuantan Singingi
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                      IPA (Ilmu Pengetahuan Alam)
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationPage;
