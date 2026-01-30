import { ReactNode } from "react";
import st from "./styles.module.scss";

interface I_IconButtonWrapperProps {
	disabled: boolean;
	onClick: () => void;
	children: ReactNode;
}

export function IconButtonWrapper({
	disabled,
	onClick,
	children,
}: I_IconButtonWrapperProps) {
	return (
		<div className={st.container}>
			<button
				disabled={disabled}
				className={st.content}
				onClick={onClick}>
				{children}
			</button>
		</div>
	);
}
