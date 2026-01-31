import { IconButtonWrapper } from "@/shared/components/IconButtonWrapper";
import st from "./styles.module.scss";
import { CardFlipSVG } from "@/shared/components/IconButtonWrapper/components/CardFlipSVG";

interface I_FlashcardTopProps {
	isOnBack: boolean;
	setIsOnBack: (x: boolean) => void;
}

export function FlashcardTop({
	isOnBack,
	setIsOnBack,
}: I_FlashcardTopProps) {
	return (
		<div className={st.container}>
			<div className={st.counter}>2/15</div>
			<div className={st.button}>
				<IconButtonWrapper onClick={() => setIsOnBack(!isOnBack)}>
					<CardFlipSVG />
				</IconButtonWrapper>
			</div>
		</div>
	);
}
