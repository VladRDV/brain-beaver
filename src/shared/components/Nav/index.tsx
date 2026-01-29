import { Link } from "wouter";
import st from "./styles.module.scss";
import { routes } from "@/shared/constants/routes";
import { useEffect, useRef } from "react";
import useClickOut from "@/shared/hooks/useClickOut";
import setCSSValue from "@/shared/functions/setCSSValue";
import { useAtom } from "jotai";
import { navOpenAtom } from "@/atoms/navOpenAtom";
import { TriggerButton } from "./TriggerButton";

export default function Nav() {
	const [navIsOpen, setNavIsOpen] = useAtom(navOpenAtom);
	const containerRef = useRef(null);

	useEffect(() => {
		setCSSValue(
			containerRef,
			"--position-left",
			navIsOpen ? "0" : "-50vw",
		);
	}, [navIsOpen]);

	useClickOut([containerRef], () => setNavIsOpen(false));

	return (
		<>
			<div ref={containerRef} className={st.container}>
				<div className={st.content}>
					<Link href={routes.deckList}>All Decks</Link>
					{/* <Link href={routes.deckCreate}>New Deck</Link> */}
					{/* <Link href={routes.deckEdit}>Profile</Link> */}
					<Link href={routes.challenge}>Challenge mode</Link>
					<Link href={routes.settings}>Settings</Link>
				</div>
			</div>
			<TriggerButton
				navIsOpen={navIsOpen}
				setNavIsOpen={setNavIsOpen}
			/>
		</>
	);
}
