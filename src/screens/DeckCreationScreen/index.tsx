import { FlipCardWrapper } from "@/shared/components/FlipCardWrapper";
import st from "./styles.module.scss";

export function DeckCreationScreen() {
	return (
		<div className={st.container}>
			<div className={st.content}>
				<FlipCardWrapper />
			</div>
		</div>
	);
}
