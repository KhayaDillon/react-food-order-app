import { Fragment } from 'react';
import ReactDOM from 'react-dom' //Needed to get portal methods

import styles from './Styles.module.css';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose} />
}

const Overlay = props => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const Modal = props => {
    return (
        <Fragment>
            { ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('overlays')) }
		    { ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlays')) }
        </Fragment>
    )
};

export default Modal;