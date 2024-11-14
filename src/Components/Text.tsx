// import styles from './Text.css'

interface Props {
	children: string;
	size: 1 | 2 | 3 | 4 | 5 | 6;
}

function Text({ children, size }: Props) {
	return (
		<div className="text-container">
			<p className={`font-monospace fw-semibold fs-${size}`}>
				{children}
			</p>
		</div>
	);
}

export default Text;
