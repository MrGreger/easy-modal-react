import '../../jest.setup';
import EasyModalHeader from '../EasyModalHeader';

const testProps = {
	onClose: () => {}
};

describe('EasyModalHeader', () => {
  it('renders', () => {
    const subject = shallow(<EasyModalHeader {...testProps} />);

    expect(subject).toMatchSnapshot();
  });

  it('calls onClose when user clicks outside the close button', () => {
    const mockFunction = jest.fn();
    const subject = shallow(<EasyModalHeader {...testProps} onClose={mockFunction} />);

    subject.find('.modal-close').simulate('click', { target: '' });
    expect(mockFunction).toHaveBeenCalled();
  });
});
