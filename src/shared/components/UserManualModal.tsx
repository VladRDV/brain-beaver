import { useAtom } from "jotai";
import { SlideModalWrapper } from "./SlideModalWrapper";
import { userManualOpenAtom } from "@/atoms/userManualOpenAtom";

export function UserManualModal() {
	const [userManualIsOpen, setUserManualIsOpen] =
		useAtom(userManualOpenAtom);

	return (
		<SlideModalWrapper
			slideOutDirection={"down"}
			isOpen={userManualIsOpen}
			closeModal={() => setUserManualIsOpen(false)}>
			UserManualModal
		</SlideModalWrapper>
	);
}
