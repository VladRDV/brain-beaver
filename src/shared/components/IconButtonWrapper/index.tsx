import { ReactNode } from "react";
import st from "./styles.module.scss";

interface I_IconButtonWrapperProps {
	disabled?: boolean;
	onClick: () => void;
	children: ReactNode;
}

export function IconButtonWrapper({
	disabled = false,
	onClick,
	children,
}: I_IconButtonWrapperProps) {
	return (
		<div className={st.container}>
			<button
				className={st.content}
				disabled={disabled}
				onClick={onClick}>
				{children}
			</button>
		</div>
	);
}
