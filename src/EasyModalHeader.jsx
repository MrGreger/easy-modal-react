import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './EasyModal.scss';

class EasyModalHeader extends React.PureComponent {
	static propTypes = {
		onClose: PropTypes.func.isRequired
	};

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

export default CSSModules(EasyModalHeader, styles);
