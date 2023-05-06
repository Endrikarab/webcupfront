import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { AuthPage } from "@refinedev/mantine";
import TextBlock from "../textBlock";
import "../../styles/Landing.css";
import { SamePage } from "../../components/sections/same-page";
import { StreamlinedExperience } from "../../components/sections/streamlined-experience";
import { Features } from "../../components/sections/features";
import { MoreFeatures } from "../../components/sections/more-features";
import { NoLockin } from "../../components/sections/no-lockin";

export const Landing = () => {
  {
    /* <div>Landing</div> */
  }
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        {/* <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer> */}

        {/*  */}
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="animation_layer parallax" id="lanitra"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.15}>
          <div className="animation_layer parallax" id="nuage"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="animation_layer parallax" id="kintana"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          {/* -0.1 */}
          <div className="animation_layer parallax" id="vatobe"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          {/* 0.3 */}
          <div className="animation_layer parallax" id="hazogauche"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          {/* 0.3 */}
          <div className="animation_layer parallax" id="hazodroite"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3}>
          {/* 0.35 */}
          <div className="animation_layer parallax" id="volana"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="olona"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.34}>
          <div className="animation_layer parallax" id="etoiletsyaiko"></div>
        </ParallaxLayer>
        {/*  */}
        <ParallaxLayer offset={1} speed={0.45}>
          <TextBlock />
        </ParallaxLayer>
        {/* <TextBlock /> */}
      </Parallax>
      <SamePage />
      <StreamlinedExperience />
      <Features />
      <MoreFeatures />
      {/* <NoLockin /> */}
    </div>
  );
};
