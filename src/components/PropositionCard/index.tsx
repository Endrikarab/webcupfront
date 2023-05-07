type Props = {
    img: string;
    title: string;
    text: string;
};

const PropositionCard = (props: Props) => {
	return (
		<div className='w-[400px] h-[400px] proposition-card text-center'>
			<img
                className="proposition-card-img p-1"
				src={props.img}
				width={82}
				height={82}
			/>
			<p className='font-bold text-[36px] text-[#0BCEB2] mt-[35px]'>{props.title}</p>
			<p className='font-normal text-[24px] mt-[25px]'>
				{props.text}
			</p>
		</div>
	);
};

export default PropositionCard;
