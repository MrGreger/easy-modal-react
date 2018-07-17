import DLSModalFooter from '../DLSModalFooter';

const props = DLSModalFooter.docProps;

describe('DLSModalFooter', () => {
  it('renders', () => {
    const subject = shallow(<DLSModalFooter {...props} />);

    matchSnapshot(subject);
  });

  it('calls onCancel when user clicks outside the close button', () => {
    const mockFunction = jest.fn();
    const subject = shallow(<DLSModalFooter {...props} onCancel={mockFunction} />);

    subject.find('DLSButton').at(0).simulate('click', { target: '' });
    expect(mockFunction).toHaveBeenCalled();
  });

  it('calls onApprove when user clicks outside the close button', () => {
    const mockFunction = jest.fn();
    const subject = shallow(<DLSModalFooter {...props} onApprove={mockFunction} />);

    subject.find('DLSButton').at(1).simulate('click', { target: '' });
    expect(mockFunction).toHaveBeenCalled();
  });
});
