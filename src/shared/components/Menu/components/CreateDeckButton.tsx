import { useSetAtom } from "jotai";
import { menuOpenAtom } from "@/atoms/menuOpenAtom";
import { PlusSVG } from "@/shared/components/IconButtonWrapper/components/PlusSVG";
import { routes } from "@/shared/constants/routes";
import { useLocation, useRoute } from "wouter";
import { IconButtonWrapper } from "../../IconButtonWrapper";

export function CreateDeckButton() {
	const setMenuIsOpen = useSetAtom(menuOpenAtom);
	const [match] = useRoute(routes.deckCreate);
	const [, navigate] = useLocation();

	return (
		<IconButtonWrapper
			disabled={match}
			onClick={() => {
				navigate(routes.deckCreate);
				setMenuIsOpen(false);
			}}>
			<PlusSVG />
		</IconButtonWrapper>
	);
}
