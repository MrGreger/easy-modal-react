# Easy Modal for React
An simple, clean, and easy to use modal that supports any screen size and uses (mostly) modern CSS.

## Installation
`npm install easy-modal-react`

## Usage
### Simple
```
import EasyModal from 'easy-modal-react';

<EasyModal
	open={this.state.modalOpen}
	onClose={this.closeModal}
>
	content here!
</EasyModal>
```

### Advanced
```
import EasyModal, { EasyModalHeader, EasyModalFooter } from 'easy-modal-react';

<EasyModal
	open={this.state.modalOpen}
	onClose={this.closeModal}
	header={<EasyModalHeader onClose={this.onClose} />}
	footer={<EasyModalFooter onCancel={this.onClose} onApprove={this.onApprove} />}
>
	content here!
</EasyModal>
```

### Props
|Prop|PropType|Description|
|---|---|---|
|`open` (required)|`PropTypes.bool`|Tells EasyModal weather it is open or closed<br><br>Options: `true` \| `false`|
|`onClose` (required)|`PropTypes.func`|Called by EasyModal when the user closes the modal. Should update state for `open`|
|`children` (required)|`PropTypes.node`|The content of the modal|
|`className`|`PropTypes.string`|Adds a CSS class of your choice to the `.modal-message` element.|
|`header`|<ul><li>`PropTypes.node`<li>`PropTypes.string`</ul>|A React node or a string to display at the top of the modal.<br><br>Use `EasyModalHeader` for a default header with a close button.|
|`footer`|<ul><li>`PropTypes.node`<li>`PropTypes.string`</ul>|A React node or a string to display at the bottom of the modal.<br><br>Use `EasyModalFooter` for a default footer with "Cancel" and "Ok" buttons.|