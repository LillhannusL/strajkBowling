import ReactModal from 'react-modal';
import './ErrorComponent.css';

interface ErrorComponentProps {
	isError: boolean;
	message: string;
	onClose: () => void;
}

function ErrorComponent({ isError, message, onClose }: ErrorComponentProps) {
	return (
		<>
			<ReactModal
				isOpen={isError}
				onRequestClose={onClose}
				contentLabel={'errormessage'}
				overlayClassName="overlay"
				className="ErrorModal"
			>
				<h2>An Error Occured</h2>
				<p>{message}</p>
				<button onClick={onClose}>Try Again</button>
			</ReactModal>
		</>
	);
}

export default ErrorComponent;
