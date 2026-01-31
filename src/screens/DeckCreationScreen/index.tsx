import { Flashcard } from "@/shared/components/Flashcard";
import st from "./styles.module.scss";

export function DeckCreationScreen() {
	return (
		<div className={st.container}>
			<div className={st.content}>
				<Flashcard />
			</div>
		</div>
	);
}
