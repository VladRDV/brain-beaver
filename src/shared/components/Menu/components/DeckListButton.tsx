import { useSetAtom } from "jotai";
import { menuOpenAtom } from "@/atoms/menuOpenAtom";
import { routes } from "@/shared/constants/routes";
import { useLocation, useRoute } from "wouter";
import { ListSVG } from "@/shared/components/IconButtonWrapper/components/ListSVG";
import { IconButtonWrapper } from "../../IconButtonWrapper";

export function DeckListButton() {
	const setMenuIsOpen = useSetAtom(menuOpenAtom);
	const [match] = useRoute(routes.deckList);
	const [, navigate] = useLocation();

	return (
		<IconButtonWrapper
			disabled={match}
			onClick={() => {
				navigate(routes.deckList);
				setMenuIsOpen(false);
			}}>
			<ListSVG />
		</IconButtonWrapper>
	);
}
