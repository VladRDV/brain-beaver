import st from "./styles.module.scss";
import { CSSProperties, ReactNode, useRef } from "react";
import { useClickOut } from "@/shared/hooks/useClickOut";

interface I_SlideModalWrapperProps {
	slideOutDirection: "up" | "down";
	isOpen: boolean;
	closeModal: () => void;
	children: ReactNode;
}

export function SlideModalWrapper({
	slideOutDirection,
	isOpen,
	closeModal,
	children,
}: I_SlideModalWrapperProps) {
	const containerRef = useRef(null);

	useClickOut([containerRef], closeModal);

	return (
		<div
			ref={containerRef}
			className={st.container}
			style={
				{
					"--position-top-closed":
						slideOutDirection === "up"
							? "var(--position-top-closed-up)"
							: "var(--position-top-closed-down)",
					"--position-top": isOpen
						? "var(--position-top-open)"
						: "var(--position-top-closed)",
					"--opacity": isOpen ? "1" : "0",
				} as CSSProperties
			}>
			<div className={st.content}>{children}</div>
		</div>
	);
}
