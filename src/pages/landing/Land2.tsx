import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { AuthPage } from "@refinedev/mantine";
import TextBlock from "../textBlock";
import "../../styles/Landing.css";
import { SamePage } from "../../components/sections/same-page";
import { StreamlinedExperience } from "../../components/sections/streamlined-experience";
import { Features } from "../../components/sections/features";
import { MoreFeatures } from "../../components/sections/more-features";
import { NoLockin } from "../../components/sections/no-lockin";
import { ParallaxBanner } from "react-scroll-parallax";

export const Landing2 = () => {
  {
    /* <div>Landing</div> */
  }
  return (
    <>
      <p>hey land</p>
      {/* <div className="relative w-ful"> */}

      <ParallaxBanner
        layers={[
          { image: '/images/para/1-lanitra.svg', speed: -20 },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-8xl text-white font-thin">Hello World!</h1>
              </div>
            ),
          },
          { image: '/images/para/2-Vatobe.svg', speed: -10 },
        ]}
        className="aspect-[2/1]"
      />

      {/* <div className="relative w-full overflow-x-clip bg-gray-600 ">
          <div className="h-[100vh] bg-red-600"></div>
          <div className="h-[100vh] bg-green-600"></div>
          <div className="h-[100vh] bg-red-600"></div>
          <SamePage />
          <StreamlinedExperience />
          <Features />
          <MoreFeatures />
          <NoLockin />
        </div> */}
      {/* </div> */}
    </>
  );
};
