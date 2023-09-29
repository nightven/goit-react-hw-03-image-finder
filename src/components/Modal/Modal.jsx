import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay } from './Modal.styled';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  closeModal = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    
    return createPortal(
        <Overlay className="overlay" onClick={this.closeModal}>
          <div className="modal">
            {this.props.children}
          </div>
        </Overlay>,
        modalRoot,
      );
  }
}
