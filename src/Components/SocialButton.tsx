import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	link: string;
}
function SocialButton({ children, link }: Props) {
	return <a href={link} target="_blank">{children}</a>;
}

export default SocialButton;
