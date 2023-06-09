import { AuthPage } from "@refinedev/mantine";
import { url } from "vfile-message";
import "../../styles/App.css";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import { Image } from "@mantine/core";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";

export const Login = () => {
  return (
    // <AuthPage
    //   type="login"
    //   formProps={{
    //     initialValues: { email: "demo@refine.dev", password: "demodemo" },
    //   }}
    // />

    <div
      className="isolate w-100 h-[100vh!important] bg-white px-6 py-24 sm:py-32 lg:px-8"
      id="loginContainer"
    >
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      {/* <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact sales
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div> */}
      <CustomCard
        effectColor="grey" // required
        color="white" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
        className="w-[400px] min-h-[500px]  bold bg-white float-right mt-36 mr-[120px] text-center border-radius-1 "
        style={{ border: "1px solid white" }}
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
        <h1>Connexion</h1>
        <Paper
          className="bg-transparent border-none text-left"
          withBorder
          shadow="md"
          p={30}
          mt={10}
          radius="md"
        >
          <TextInput
            label="Email"
            placeholder="johnDoe@gmail.com"
            className="text-white bold border-radius-1"
            required
            styles={{
              label: {
                color: "white",
              },
            }}
          />
          <PasswordInput
            className="text-white bold border-radius-1"
            label="Password"
            placeholder=""
            required
            mt="md"
            styles={{
              label: {
                color: "white",
              },
            }}
          />
          <Group position="apart" mt="lg">
            {/* <Checkbox label="Remember me" /> */}

            <Anchor
              component="button"
              size="sm"
              color="white"
              style={{ textDecoration: "none", color: "white" }}
            >
              Mot de passe oublié ?
            </Anchor>
            <Anchor
              component="button"
              size="sm"
              color="green"
              style={{ textDecoration: "none", color: "#0bceb2" }}
            >
              Je veux m'inscrire !
            </Anchor>
          </Group>

          <button
            type="button"
            className="inline-flex mt-3 w-fit w-[275px!important] justify-center rounded-md bg-teal-400  py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 "
          >
            Se connecter
          </button>
        </Paper>
      </CustomCard>
    </div>
  );
};
