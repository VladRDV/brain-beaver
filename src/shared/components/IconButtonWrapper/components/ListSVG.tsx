// From https://ionic.io/ionicons

import st from "../styles.module.scss";

export function ListSVG() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="ListSVG"
			viewBox="0 0 512 512">
			<path
				className={st.stroke}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="32"
				d="M160 144h288M160 256h288M160 368h288"
			/>
			<circle
				className={st.stroke}
				cx="80"
				cy="144"
				r="16"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="32"
			/>
			<circle
				className={st.stroke}
				cx="80"
				cy="256"
				r="16"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="32"
			/>
			<circle
				className={st.stroke}
				cx="80"
				cy="368"
				r="16"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="32"
			/>
		</svg>
	);
}
