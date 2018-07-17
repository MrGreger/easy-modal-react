import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './EasyModal.scss';

class EasyModalHeader extends React.PureComponent {
  render() {
    const { onClose } = this.props;

    return (
      <div styleName="modal-header">
        <button
          onClick={() => onClose()}
          styleName="modal-close"
        >
          <span styleName="modal-close-label">
            close
          </span>
        </button>
      </div>
    );
  }
}

EasyModalHeader.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default CSSModules(EasyModalHeader, styles);
