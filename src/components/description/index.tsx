import { Divider } from "@mantine/core";

const Description = () => {
	return (
		<div>
			<h1 className='font-semibold text-center text-white text-[46px]'>
				Quelques descriptions.
			</h1>
			<div className='flex flex-col'>
				<div className='flex items-center justify-center mt-[74px] gap-[111px]'>
					<img
						src='/images/IA.svg'
						width={318}
						height={318}
					/>
					<p className='font-bold text-[36px] w-[419px] text-white'>
						<span className='text-[#0BCEB2]'>Onyrix</span> est une
						intelligence artificielle de pointe pour l'analyse et
						l'interprétation des rêves.
					</p>
				</div>
			</div>
			<div className='flex flex-col'>
				<div className='flex items-center justify-center mt-[74px] gap-[111px]'>
					<p className='font-bold text-[36px] w-[419px] text-white'>
						<span className='text-[#B92EB6]'>
							L'Institut International des Rêves
						</span>{" "}
						est un centre de recherche dédié à l'étude de l'impact
						des rêves sur notre avenir et notre bien-être.
					</p>
					<img
						src='/images/echantillon.svg'
						width={318}
						height={318}
					/>
				</div>
			</div>
			<div className='mt-[110px] mx-[111px]'>
				<Divider />
			</div>
		</div>
	);
};

export default Description;
