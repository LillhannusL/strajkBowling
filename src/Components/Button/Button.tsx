import './Button.css';

type buttonProps = {
	text: string;
};

function Button({ text }: buttonProps) {
	return <button className="btn">{text}</button>;
}

export default Button;
