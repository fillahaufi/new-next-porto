import React from "react";

type H4Props = {
	children: React.ReactNode;
};

const H4 = (props: H4Props) => {
	return (
		<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
			{props.children}
		</h4>
	);
};

export default H4;
