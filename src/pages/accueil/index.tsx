import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { AuthPage } from "@refinedev/mantine";
import TextBlock from "../textBlock";
import "../../styles/Landing.css";
import { SamePage } from "../../components/sections/same-page";
import { StreamlinedExperience } from "../../components/sections/streamlined-experience";
import { Features } from "../../components/sections/features";
import { MoreFeatures } from "../../components/sections/more-features";
import { NoLockin } from "../../components/sections/no-lockin";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import { Anchor, Group, Paper, PasswordInput, TextInput } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons";
import { Image } from "@mantine/core";

export const Accueil = () => {
  {
    /* <div>Landing</div> */
  }
  return (
    <div
      className="w-100 h-[100vh!important] bg-white px-6  sm:py-32 "
      id="Accueil"
    >
      <div
        className="h-full border-none"
        style={{ marginTop: "-128px", marginLeft: "-37px" }}
      >
        <CustomCard
          effectColor="grey" // required
          color="white" // default color is white
          blur={10} // default blur value is 10px
          borderRadius={0} // default border radius value is 10px
          className="w-[400px] h-[100vh!important] bold bg-white mr-[120px] text-center"
        >
          <div className="flex flex-row">
            <IconArrowNarrowLeft />
            <label>Retour</label>
          </div>

          <div
            className="flex flex-row mt-6 mb-3"
            style={{ fontWeight: "bold" }}
          >
            <h1>Dream Vision</h1>
          </div>
          <div className="flex flex-row text-left mb-3">
            Bienvenue sur Dream Vision, la plateforme de prédiction de rêve
            accessible à tous. Notre mission est de fournir à chaque utilisateur
            les outils nécessaires pour comprendre les messages de leur
            subconscient et obtenir des prédictions fiables sur leur avenir.
          </div>

          <div
            className="flex flex-row text-left mt-6"
            style={{ fontWeight: "bold" }}
          >
            <h3>Comment pouvons-nous vous aidez ?</h3>
          </div>
          <div className="flex flex-row text-left mt-3">
            Eh bien, c’est facile !! Il suffit de choisir une des deux (02)
            cartes qui vous sont proposées. Ne vous inquiétez pas, vous saurez
            quelle carte choisir.
          </div>
        </CustomCard>
      </div>
      <div
        className="flex flex-col w-full  border-none "
        style={{ marginTop: "-128px" }}
      >
        <div
          className="flex flex-row alignItems-left bg-red"
          style={{ justifyContent: "space-between" }}
        >
          <Image
            maw={150}
            mx="auto"
            radius="md"
            src="src/images/Logo.svg"
            alt="Random image"
            width={80}
            height={90}
          />
          <button
            type="button"
            className="mt-3 h-2 w-fit w-[275px!important] justify-center rounded-md bg-teal-400  py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 "
          >
            Deconnexion
          </button>
        </div>

        <div>
          <div
            className="flex flex-row mt-6 mb-3"
            style={{ fontWeight: "bold" }}
          >
            <h1>Comment classifierez-vous votre rêve ?</h1>
          </div>
          <div className="flex flex-col justify-center gap-4 justify-center items-center">
            <div
              className="flex flex-row gap-x-4"
              style={{
                backgroundColor: "grey",
                display: "flex",
                flexDirection: "row",
                width: "500px",
                border: "2px solid white",
              }}
            >
              <Image
                maw={150}
                mx="auto"
                radius="md"
                src="src/images/Logo.svg"
                alt="Random image"
                width={80}
                height={90}
              />
              <div className="flex flex-col">
                <h2>Un simple rêve</h2>
                <p>
                  C’est un rêve qui se produise prèsque toute les nuits, sauf
                  que nous ne nous souvenons pas de toutes ces rêves au moment
                  de notre réveil.
                </p>
              </div>
            </div>
            <div
              className="flex flex-row gap-x-4"
              style={{
                backgroundColor: "grey",
                display: "flex",
                flexDirection: "row",
                width: "500px",
                border: "2px solid white",
              }}
            >
              <Image
                maw={150}
                mx="auto"
                radius="md"
                src="src/images/Logo.svg"
                alt="Random image"
                width={80}
                height={90}
              />
              <div className="flex flex-col">
                <h2>Un Cauchemar</h2>
                <p>
                  Un cauchemar est un rêve qui provoque une forte anxiété ou une
                  peur intense, souvent accompagné de scénarios désagréables ou
                  effrayants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div></div> */}
    </div>
  );
};
