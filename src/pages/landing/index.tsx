import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../../styles/Landing.css";

import { Container, Text, Title, createStyles } from "@mantine/core";

import AboutSection from "../../components/About";
import Description from "../../components/description";
import Proposition from "../../components/sections/Proposition";

const useStyles = createStyles((theme) => ({
	// root: {
	//   backgroundColor: '#11284b',
	//   backgroundSize: 'cover',
	//   backgroundPosition: 'center',
	//   backgroundImage:
	//     'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)',
	//   paddingTop: `calc(${theme.spacing.xl} * 3)`,
	//   paddingBottom: `calc(${theme.spacing.xl} * 3)`,
	// },

	inner: {
		display: "flex",
		justifyContent: "space-between",

		[theme.fn.smallerThan("md")]: {
			flexDirection: "column",
		},
	},

	image: {
		[theme.fn.smallerThan("md")]: {
			display: "none",
		},
	},

	content: {
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		marginRight: `calc(${theme.spacing.xl} * 3)`,
		width: "100%",
		// float: 'left',

		[theme.fn.smallerThan("md")]: {
			marginRight: 0,
		},
	},

	title: {
		color: theme.white,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		lineHeight: 1.05,

		fontSize: rem(48),

		[theme.fn.smallerThan("md")]: {
			maxWidth: "100%",
			fontSize: rem(34),
			lineHeight: 1.15,
		},
	},

	description: {
		color: theme.white,
		opacity: 0.75,
		maxWidth: rem(500),

		[theme.fn.smallerThan("md")]: {
			maxWidth: "100%",
		},
	},

	control: {
		paddingLeft: rem(50),
		paddingRight: rem(50),
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: rem(22),

		[theme.fn.smallerThan("md")]: {
			width: "100%",
		},
	},
}));
export const Landing = () => {
	{
		/* <div>Landing</div> */
	}
	return (
		<>
			<div className='relative w-ful bg-darky'>
				<Parallax
					pages={4}
					style={{ top: "0", left: "0" }}
					className='animation bg-darky'>
					<ParallaxLayer
						offset={0}
						speed={0.1}>
						<div
							className='animation_layer parallax'
							id='lanitra'></div>
					</ParallaxLayer>
					<ParallaxLayer
						offset={0}
						speed={0.15}>
						<div
							className='animation_layer parallax'
							id='nuage'></div>
					</ParallaxLayer>
					{/* <ParallaxLayer offset={0} speed={0.15}>
            <Hero />
          </ParallaxLayer> */}
					<ParallaxLayer
						offset={0}
						speed={0.2}>
						<div
							className='animation_layer parallax'
							id='kintana'></div>
					</ParallaxLayer>
					<ParallaxLayer
						offset={0}
						speed={0.2}>
						{/* -0.1 */}
						<div
							className='animation_layer parallax'
							id='vatobe'></div>
					</ParallaxLayer>
					<ParallaxLayer
						offset={0}
						speed={0.3}>
						{/* 0.3 */}
						<div
							className='animation_layer parallax'
							id='hazogauche'></div>
					</ParallaxLayer>
					<ParallaxLayer
						offset={0}
						speed={0.3}>
						{/* 0.3 */}
						<div
							className='animation_layer parallax'
							id='hazodroite'></div>
					</ParallaxLayer>
					<ParallaxLayer
						offset={0}
						speed={-0.3}>
						{/* 0.35 */}
						<div
							className='animation_layer parallax mb-[-40vh]'
							id='volana'></div>
					</ParallaxLayer>
					<ParallaxLayer
						offset={0}
						speed={0.5}>
						<div
							className='relative animation_layer parallax'
							id='olona'>
							{" "}
							<div className='w-full h-[40vh] bg-darky absolute bottom-[-40vh]' />
						</div>
					</ParallaxLayer>

					<ParallaxLayer
						offset={0}
						speed={0.24}>
						<div
							className='animation_layer parallax relative'
							id='etoiletsyaiko'>
							<div>
								<Hero />
							</div>
						</div>
					</ParallaxLayer>
					{/*  */}
					{/* <TextBlock /> */}

					{/* <ParallaxLayer offset={1} speed={0.50}>
            <div className="relative w-full overflow-x-clip bg-red-600 ">
              <StreamlinedExperience />
            </div>
          </ParallaxLayer> */}
					<ParallaxLayer
						offset={1}
						speed={0.5}>
						<Description />
					</ParallaxLayer>

					<ParallaxLayer
						offset={2}
						speed={0.5}>
						<Proposition />
					</ParallaxLayer>

					<ParallaxLayer
						offset={3}
						speed={0.5}>
						<AboutSection />
					</ParallaxLayer>
				</Parallax>

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
			</div>
		</>
	);
};

const Hero = () => {
	const { classes } = useStyles();
	return (
		<div className='absolute top-[150px] left-[0] w-full pl-[100px]'>
			<Container
				size='xl'
				className='top-[150px] left-[0] mx-auto'>
				<div className={classes.inner}>
					<div className={classes.content}>
						<Title className={classes.title}>
							<Text className='font-bold text-[48px] text-center'>
								<span className='text-[#DF0060]'>Explorez</span>{" "}
								les secrets de votre subconscient et découvrez
								ce que l'avenir vous réserve”
							</Text>

							{/* <TypeAnimation
                cursor={false}
                sequence={[
                  'les secrets de votre subconscient',
                  2500,
                  'ce que l\'avenir vous réserve',
                  250
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
                style={{
                  minHeight: 65,
                  fontWeight: "900 !important",
                  // fontSize: 60
                }}

              /> */}
						</Title>

						{/* <Text className={classes.description} mt={30}>
            Build fully functional accessible web applications with ease – Mantine includes more
            than 100 customizable components and hooks to cover you in any situation
          </Text> */}

						{/* <button className="b animate-bounce h-16 w-64 flex justify-center items-center mt-12">
              <div className="i h-16 w-64 bg-gradient-to-br from-pink-400 to-orange-600 items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
              </div>
              <a className="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center"><IconRocket />Hover on me!</a>
            </button> */}

						{/* <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="lg"
              className={classes.control}
              mt={40}
            >
              Get started
            </Button> */}
					</div>
				</div>
			</Container>
		</div>
	);
};

function rem(n: number): string {
	return n + 8 + "px";
	// throw new Error("Function not implemented.");
}
