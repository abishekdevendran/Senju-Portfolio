import Link from 'next/link';
import React from 'react';

const Home = () => {
	return (
		<div className="w-full h-full flex items-center justify-center bg-background">
			<div className="flex flex-col gap-4 p-8">
				<div>{`Hi, I'm`}</div>
				<div className="font-poppins font-extrabold text-7xl leading-tight mb-4">
					Sanjay Raaman
				</div>
				<div className="flex gap-2">
					<div className="font-openSans text-2xl">{`An engineer from `}</div>
					<Link
						className="font-openSans text-2xl underline"
						href="https://www.google.com/maps/place/Chennai,+Tamil+Nadu"
						rel="noopener noreferrer"
						target="_blank">
						{`Chennai, Tamil Nadu.`}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
