import DLSModal from '../DLSModal';

const props = DLSModal.docProps;

describe('DLSModal', () => {
  it('renders when open is true', () => {
    const subject = shallow(<DLSModal {...props} open>content</DLSModal>);

    expect(subject.find('.modal-container')).toBePresent();
    matchSnapshot(subject);
  });

  it('doe not render when open is false', () => {
    const subject = shallow(<DLSModal {...props}>content</DLSModal>);

    expect(subject.find('.modal-container')).not.toBePresent();
    matchSnapshot(subject);
  });

  it('renders children', () => {
    const subject = shallow(<DLSModal {...props} open>hahaha hello</DLSModal>);

    expect(subject.find('.modal-message').text()).toEqual('hahaha hello');
  });

  it('renders custom header', () => {
    const subject = shallow(<DLSModal {...props} header="test header" open>hahaha hello</DLSModal>);

    expect(subject.find('.modal-top').text()).toEqual('test header');
    matchSnapshot(subject);
  });

  it('renders custom footer', () => {
    const subject = shallow(<DLSModal {...props} footer="test footer" open>hahaha hello</DLSModal>);

    expect(subject.find('.modal-bottom').text()).toEqual('test footer');
    matchSnapshot(subject);
  });

  it('calls onClose when user clicks outside the content area', () => {
    const mockFunction = jest.fn();
    const subject = shallow(
      <DLSModal {...props} open onClose={mockFunction}>hahaha hello</DLSModal>
    );

    subject.find('.modal-overlay').simulate('click', { target: subject.instance().overlay });
    expect(mockFunction).toHaveBeenCalled();
  });
});
