import PropositionCard from "../PropositionCard";
import Divider from "../divider";

const Proposition = () => {
	return (
		<>
			<div className='mx-auto text-center w-[945px] text-white'>
				<h1 className='font-bold text-[64px]  text-center  mx-auto'>
					Ce que <span className='text-[#0BCEB2]'>Dream Vision</span>{" "}
					propose à ses utilisateurs
				</h1>
				<p className='mt-[10px] w-[535px] mx-auto font-normal text-2xl text-center'>
					Voici une liste des fonctionnalités que le plateforme Dream
					Vision nous propose
				</p>
				<div className='flex items-center justify-between gap-9 mt-[115px]'>
					<PropositionCard
						img='images/intuitive-icon.svg'
						title='Intuitive'
						text='Plateforme facile à naviguer avec un interface à couper le soufle'
					/>
					<PropositionCard
						img='images/language-icon.svg'
						title='Multi-langue'
						text='Dream Vision nous propose plusieurs langue afin de cibler des utilisateurs étrangers.'
					/>
					<PropositionCard
						img='images/ia-icon.svg'
						title='Onyrix AI'
						text="Implémenter d'une IA capable de prédire votre avenir grâce aux rêves auxquels vous faites"
					/>
				</div>
			</div>
			<div className='mt-[75px] mx-[111px]'>
				<Divider />
			</div>
		</>
	);
};

export default Proposition;
