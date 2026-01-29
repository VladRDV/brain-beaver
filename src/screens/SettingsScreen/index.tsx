import { useAtom } from "jotai";
import st from "./styles.module.scss";
import { navOpenAtom } from "@/atoms/navOpenAtom";

export default function SettingsScreen() {
	const [visible, setVisible] = useAtom(navOpenAtom);
	return (
		<div className={st.container}>
			SettingsScreen
			<button disabled={visible} onClick={() => setVisible(true)}>
				094328049238
			</button>
		</div>
	);
}
