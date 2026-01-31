import { FlipCardWrapper } from "@/shared/components/FlipCardWrapper";
import st from "./styles.module.scss";
import { useState } from "react";

export function DeckCreationScreen() {
	const [cardIsFlipped, setCardIsFlipped] = useState(false);

	return (
		<div className={st.container}>
			<FlipCardWrapper isOnBack={cardIsFlipped} />

			<button onClick={() => setCardIsFlipped(!cardIsFlipped)}>
				Flip
				{/* <CardFlipIcon /> */}
			</button>
		</div>
	);
}
