import { CSSProperties, useState } from "react";
import st from "./styles.module.scss";

export function FlipCardWrapper() {
	const [isOnBack, setIsOnBack] = useState(false);

	return (
		<div
			className={st.container}
			style={
				{
					"--rotation": isOnBack ? "180deg" : "0",
				} as CSSProperties
			}>
			<div className={st.content}>
				<div className={st.top}>
					<button onClick={() => setIsOnBack(!isOnBack)}>
						Flip
						{/* <CardFlipIcon /> */}
					</button>
				</div>
				<div className={st.middle}>
					<div className={st.front}>
						<h1>question</h1>
					</div>
					<div className={st.back}>
						<h1>answer</h1>
					</div>
				</div>
				<div className={st.bottom}>
					chat UI goes here with media uploads and eventually
					camera access on mobile
				</div>
			</div>
		</div>
	);
}
