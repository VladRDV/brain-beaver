import { CSSProperties } from "react";
import st from "./styles.module.scss";

interface I_FlipCardWrapperProps {
	isOnBack: boolean;
}

export function FlipCardWrapper({ isOnBack }: I_FlipCardWrapperProps) {
	return (
		<div
			className={st.container}
			style={
				{
					"--rotation": isOnBack ? "180deg" : "0",
				} as CSSProperties
			}>
			<div className={st.content}>
				<div className={st.front}> front of the card</div>
				<div className={st.back}>back of the card</div>
			</div>
		</div>
	);
}
