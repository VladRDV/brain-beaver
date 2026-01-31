import { CSSProperties, useState } from "react";
import st from "./styles.module.scss";
import { FlashcardTop } from "./components/FlashcardTop";
import { FlashcardMiddle } from "./components/FlashcardMiddle";
import { FlashcardBottom } from "./components/FlashcardBottom";

export function Flashcard() {
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
				<div className={st.front}>
					<FlashcardTop
						isOnBack={isOnBack}
						setIsOnBack={setIsOnBack}
					/>
					<h1>question</h1>
					<FlashcardMiddle />
					<FlashcardBottom />
				</div>
				<div className={st.back}>
					<FlashcardTop
						isOnBack={isOnBack}
						setIsOnBack={setIsOnBack}
					/>
					<h1>answer</h1>
					<FlashcardMiddle />
					<FlashcardBottom />
				</div>
			</div>
		</div>
	);
}
