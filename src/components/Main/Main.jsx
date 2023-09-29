import databiz from "../../images/client-databiz.svg";
import audioPhile from "../../images/client-audiophile.svg";
import meet from "../../images/client-meet.svg";
import maker from "../../images/client-maker.svg";
import heroDesktop from "../../images/image-hero-desktop.png";
import heroMobile from "../../images/image-hero-mobile.png";

const Main = () => {
  return (
    <main className="mb-4 mt-8 md:mx-auto md:mt-16 md:grid md:w-10/12 md:grid-cols-2 md:gap-8 lg:gap-16 xl:gap-32">
      <section className="col-start-2">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroDesktop} />
          <img src={heroMobile} alt="Hero" className="mx-auto" />
        </picture>
      </section>

      <section className="row-start-1 mt-12 flex flex-col gap-12 lg:mt-24  ">
        <div>
          <h1 className="mb-8 text-center text-4xl font-bold md:text-left md:text-4xl lg:mb-12 lg:text-5xl xl:text-7xl">
            Make remote work
          </h1>
          <p className="mx-auto mb-8 w-[90%] text-center text-[#696969] md:mx-0 md:w-[80%] md:text-left lg:mb-12">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="mx-auto mb-8 block rounded-2xl bg-[#141414] px-5 py-3 font-bold text-[#fafafa] md:mx-0 md:mb-0">
            Learn more
          </button>
        </div>

        <ul className="mx-auto flex w-fit justify-between gap-6 px-4 md:mx-0 md:mt-auto">
          <li>
            <img src={databiz} alt="Databiz" />
          </li>
          <li>
            <img src={audioPhile} alt="Audio Phile" />
          </li>
          <li>
            <img src={meet} alt="Meet" />
          </li>
          <li>
            <img src={maker} alt="Maker" />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Main;
