import { useSetAtom } from "jotai";
import { menuOpenAtom } from "@/atoms/menuOpenAtom";
import { routes } from "@/shared/constants/routes";
import { useLocation, useRoute } from "wouter";
import { QuestionMarkSVG } from "@/shared/svg/QuestionMarkSVG";
import { IconButtonWrapper } from "./IconButtonWrapper";

export function UserManualButton() {
	const setMenuIsOpen = useSetAtom(menuOpenAtom);
	const [match] = useRoute(routes.manual);
	const [, navigate] = useLocation();

	return (
		<IconButtonWrapper
			disabled={match}
			onClick={() => {
				navigate(routes.manual);
				setMenuIsOpen(false);
			}}>
			<QuestionMarkSVG />
		</IconButtonWrapper>
	);
}
