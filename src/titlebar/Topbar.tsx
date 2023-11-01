
import React from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";


type TopbarProps = {
	problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {

	return (
		<nav className='relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7'>
			<div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto" : ""}`}>

				{problemPage && (
					<div className='flex items-center gap-4 flex-1 justify-center'>
						<div>
                            Hello
						</div>
					</div>
				)}

				<div className='flex items-center space-x-4 flex-1 justify-end'>
					<div>
						<p
							className=' cursor-pointer  text-brand-orange '
						>
							Coderoom
						</p>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Topbar;