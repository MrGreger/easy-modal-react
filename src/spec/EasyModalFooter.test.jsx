import '../../jest.setup';
import EasyModalFooter from '../EasyModalFooter';

const testProps = {
	onCancel: () => {},
	onApprove: () => {}
};

describe('EasyModalFooter', () => {
  it('renders', () => {
    const subject = shallow(<EasyModalFooter {...testProps} />);

    expect(subject).toMatchSnapshot();
  });

  it('calls onCancel when user clicks outside the close button', () => {
    const mockFunction = jest.fn();
    const subject = shallow(<EasyModalFooter {...testProps} onCancel={mockFunction} />);

    subject.find('button').at(0).simulate('click', { target: '' });
    expect(mockFunction).toHaveBeenCalled();
  });

  it('calls onApprove when user clicks outside the close button', () => {
    const mockFunction = jest.fn();
    const subject = shallow(<EasyModalFooter {...testProps} onApprove={mockFunction} />);

    subject.find('button').at(1).simulate('click', { target: '' });
    expect(mockFunction).toHaveBeenCalled();
  });
});
