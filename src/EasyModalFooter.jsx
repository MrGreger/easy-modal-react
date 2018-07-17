import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import styles from './EasyModal.scss';

class EasyModalFooter extends React.PureComponent {
  render() {
    return (
      <div styleName="modal-footer">
        <button
          onClick={() => this.props.onCancel()}
          styleName="modal-footer-cancel"
        >
          cancel
        </button>
        <button
          onClick={() => this.props.onApprove()}
        >
          ok
        </button>
      </div>
    );
  }
}

EasyModalFooter.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onApprove: PropTypes.func.isRequired
};

export default CSSModules(EasyModalFooter, styles);
