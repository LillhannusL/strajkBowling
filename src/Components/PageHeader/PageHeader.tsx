import './PageHeader.css';

type HeaderTextProp = {
	text: string;
};

function PageHeader({ text }: HeaderTextProp) {
	return (
		<section className="header">
			<img src="src\assets\logo.png" className="logo" />
			<h1 className="text">{text}</h1>
		</section>
	);
}

export default PageHeader;
