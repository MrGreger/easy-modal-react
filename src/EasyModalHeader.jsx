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
          <span styleName="modal-close-label">close</span>
					<svg viewBox="0 0 40 40" styleName="modal-close-icon">
						<path d="M 5,5 L 35,35 M 35,5 L 5,35" />
					</svg>
        </button>
      </div>
    );
  }
}

export default CSSModules(EasyModalHeader, styles);
