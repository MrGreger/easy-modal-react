import DLSModalHeader from '../DLSModalHeader';

const props = DLSModalHeader.docProps;

describe('DLSModalHeader', () => {
  it('renders', () => {
    const subject = shallow(<DLSModalHeader {...props} />);

    matchSnapshot(subject);
  });

  it('calls onClose when user clicks outside the close button', () => {
    const mockFunction = jest.fn();
    const subject = shallow(<DLSModalHeader {...props} onClose={mockFunction} />);

    subject.find('.modal-close').simulate('click', { target: '' });
    expect(mockFunction).toHaveBeenCalled();
  });
});
