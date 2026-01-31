import { useAtom, useSetAtom } from "jotai";
import { menuOpenAtom } from "@/atoms/menuOpenAtom";
import { QuestionMarkSVG } from "@/shared/components/IconButtonWrapper/components/QuestionMarkSVG";
import { IconButtonWrapper } from "../../IconButtonWrapper";
import { userManualOpenAtom } from "@/atoms/userManualOpenAtom";

export function UserManualButton() {
	const setMenuIsOpen = useSetAtom(menuOpenAtom);
	const [userManualIsOpen, setUserManualIsOpen] =
		useAtom(userManualOpenAtom);

	return (
		<IconButtonWrapper
			disabled={userManualIsOpen}
			onClick={() => {
				setUserManualIsOpen(true);
				setMenuIsOpen(false);
			}}>
			<QuestionMarkSVG />
		</IconButtonWrapper>
	);
}
