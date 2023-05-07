import {
  Anchor,
  Box,
  Grid,
  Group,
  InputBase,
  Paper,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { AuthPage } from "@refinedev/mantine";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import { IMaskInput } from "react-imask";
import { DateInput } from "@mantine/dates";
import { Image } from "@mantine/core";

export const Register = () => {
  // return <AuthPage type="register" />;
  return (
    <div
      className="isolate w-100 h-[100vh!important] bg-white px-6 py-24 sm:py-32 lg:px-8"
      id="loginContainer"
    >
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>

      <CustomCard
        effectColor="grey" // required
        color="white" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-2 w-[797px] min-w-[797px]  min-h-[600px]  bold bg-white  mt-36 mr-[120px] text-center border-radius-1 m-0-auto"
        style={{
          border: "1px solid white",
          justifyContent: "center",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <div
          className=" col-span-4 text-center flex items-center justify-center"
          style={{
            alignItems: "center",
            marginTop: "0 auto",
          }}
        >
          <div className="m-0-auto">
            <Image
              maw={150}
              mx="auto"
              radius="md"
              src="src/images/Logo.svg"
              alt="Random image"
              width={80}
              height={90}
            />
            <h1 style={{ margin: "0 auto" }}>Inscription</h1>
          </div>
          <div className="m-0-auto"></div>
        </div>
        <div className="col-span-8 text-center ">
          <Paper
            className="grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12 gap-4 bg-transparent border-none text-left"
            withBorder
            shadow="md"
            p={30}
            mt={30}
            radius="md"
          >
            <TextInput
              label="Nom"
              placeholder=""
              className="col-span-6 text-white bold border-radius-1 mb-3"
              required
              styles={{
                label: {
                  color: "white",
                },
              }}
            />
            <TextInput
              label="Prénom"
              placeholder=""
              className="col-span-6 text-white bold border-radius-1 mb-3"
              required
              styles={{
                label: {
                  color: "white",
                },
              }}
            />

            <InputBase
              label="Genre"
              required
              component="select"
              className="col-span-6 text-white bold border-radius-1 mb-3"
              styles={{
                label: {
                  color: "white",
                },
              }}
            >
              <option value="react">Homme</option>
              <option value="react">Femme</option>
            </InputBase>

            <TextInput
              label="Date de naissance"
              placeholder=""
              className="col-span-6 text-white bold border-radius-1 mb-3"
              required
              styles={{
                label: {
                  color: "white",
                },
              }}
            />
            <TextInput
              label="Email"
              placeholder="johnDoe@gmail.com"
              className="col-span-12 text-white bold border-radius-1 mb-2"
              required
              styles={{
                label: {
                  color: "white",
                },
              }}
            />
            <PasswordInput
              className="col-span-12 text-white bold border-radius-1 mb-4"
              label="Mot de passe"
              placeholder=""
              required
              mt="md"
              styles={{
                label: {
                  color: "white",
                },
              }}
            />
            {/* <Group position="apart" mt="lg">
             

              <Anchor component="button" size="sm" color="white">
                Je veux m'inscrire!
              </Anchor>
              <Anchor component="button" size="sm" color="green">
                Je veux m'inscrire!
              </Anchor>
            </Group> */}

            <button
              type="button"
              style={{ flex: 1 }}
              className="w-full col-span-12 inline-flex  mt-3 flex w-fit  justify-center rounded-md bg-teal-400  py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 "
            >
              Envoyer mon inscription
            </button>
          </Paper>
        </div>
      </CustomCard>
    </div>
  );
};
