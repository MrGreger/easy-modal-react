import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';

import EasyModalHeader from './EasyModalHeader';
import EasyModalFooter from './EasyModalFooter';

import styles from './EasyModal.scss';

class EasyModal extends React.PureComponent {
  constructor() {
    super();

    this.body = document.body;
  }

  componentWillMount() {
    this.toggleListeners();
  }

  componentDidMount() {
    this.updateHeight();
  }

  componentWillUpdate() {
    this.toggleListeners();
  }

  componentDidUpdate() {
    this.updateHeight();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  getModalStyleName() {
    const { fullScreen } = this.props;

    return classNames('modal-container', { 'modal-container--full-screen': fullScreen });
  }

  keyListener(event) {
    const { onClose } = this.props;
    const escapeKey = event.key === 'Escape' || event.key === 'Esc';

    // close modal when user hits escape
    if (escapeKey) {
      event.preventDefault();
      onClose();
    }
  }

  toggleListeners() {
    const { open } = this.props;

    if (open) {
      this.addListeners();
    } else {
      this.removeListeners();
    }
  }

  addListeners() {
    this.body.classList.add('has-modal');
    window.addEventListener('keydown', this.keyListener.bind(this));
  }

  removeListeners() {
    this.body.classList.remove('has-modal');
    window.removeEventListener('keydown', this.keyListener.bind(this));
  }

  updateHeight() {
    const isIE11 = document.documentMode === 11;

    /*
      TODO: Remove this hack when IE11 usage is low enough
      Background: In IE10/11, because of a bug with their implementation of older
      revisions of the flexbox spec, the overflow:hidden on .modal isn't respected.
      Adding a fixed height forces a repaint, which fixes this.
    */
    if (this.modal && isIE11) {
      const modalTooTall = this.modal.scrollHeight > window.innerHeight;

      if (modalTooTall) {
        this.modal.style.height = '100%';
      }
    }
  }

  renderHeader() {
    const { header } = this.props;

    if (header) {
      return header;
    }

    return null;
  }

  renderFooter() {
    const { footer } = this.props;

    if (footer) {
      return footer;
    }

    return null;
  }

  renderContent() {
    const { children, onClose, className } = this.props;
    const cssClass = className ? { className } : {};

    return (
      <div styleName={this.getModalStyleName()}>
        <div
          styleName="modal-overlay"
          onClick={() => onClose()}
        />
        <div styleName="modal-content" ref={div => this.modal = div}>
          <div styleName="modal">
            <div styleName="modal-top">
              {this.renderHeader()}
            </div>
            <div styleName="modal-message" {...cssClass}>
              {children}
            </div>
            {this.props.footer &&
              <div styleName="modal-bottom">
                {this.renderFooter()}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <CSSTransition
        classNames="EasyModal"
        enter
        exit
        timeout={250}
				appear={false}
				in={this.props.open}
				mountOnEnter
				unmountOnExit
      >
        {this.renderContent()}
      </CSSTransition>
    );
  }
}

EasyModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  fullScreen: PropTypes.bool
};

EasyModal.defaultProps = {
  className: '',
  header: '',
  footer: null,
  fullScreen: false
};

export default CSSModules(EasyModal, styles);
export {
	EasyModalHeader,
	EasyModalFooter
}