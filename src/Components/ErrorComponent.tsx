import ReactModal from 'react-modal';
import './ErrorComponent.css';

interface ErrorComponentProps {
	isError: boolean;
	message: string | null;
	onClose: () => void;
}

function ErrorComponent({ isError, message, onClose }: ErrorComponentProps) {
	return (
		<div className="error">
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
		</div>
	);
}

export default ErrorComponent;
