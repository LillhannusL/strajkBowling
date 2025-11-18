import ReactModal from 'react-modal';
import './ErrorComponent.css';

interface ErrorComponentProps {
	isError: boolean;
	onClose: () => void;
}

function ErrorComponent({ isError, onClose }: ErrorComponentProps) {
	return (
		<>
			<ReactModal
				isOpen={isError}
				onRequestClose={onClose}
				contentLabel={'Felmeddelande'}
				overlayClassName="overlay"
				className="ErrorModal"
			>
				<h2>Ett fel inträffade</h2>
				<p>Något gick fel vid bokningen, vändlig försök igen!</p>
				<button onClick={onClose}>Stäng</button>
			</ReactModal>
		</>
	);
}

export default ErrorComponent;
