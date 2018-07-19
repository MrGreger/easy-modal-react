import '../../jest.setup';
import EasyModal from '../EasyModal';

const testProps = {
	onClose: () => {}
};

describe('EasyModal', () => {
  it('renders when open is true', () => {
    const subject = shallow(<EasyModal {...testProps} open>content</EasyModal>);

    expect(subject.find('.modal-container').length).toEqual(1);
    expect(subject).toMatchSnapshot();
  });

  it('renders children', () => {
    const subject = shallow(<EasyModal {...testProps} open>hahaha hello</EasyModal>);

    expect(subject.find('.modal-message').text()).toEqual('hahaha hello');
  });

  it('renders custom header', () => {
    const subject = shallow(<EasyModal {...testProps} header="test header" open>hahaha hello</EasyModal>);

    expect(subject.find('.modal-top').text()).toEqual('test header');
    expect(subject).toMatchSnapshot();
  });

  it('renders custom footer', () => {
    const subject = shallow(<EasyModal {...testProps} footer="test footer" open>hahaha hello</EasyModal>);

    expect(subject.find('.modal-bottom').text()).toEqual('test footer');
    expect(subject).toMatchSnapshot();
  });

  it('calls onClose when user clicks outside the content area', () => {
    const mockFunction = jest.fn();
    const subject = shallow(
      <EasyModal {...testProps} open onClose={mockFunction}>hahaha hello</EasyModal>
    );

    subject.find('.modal-overlay').simulate('click', { target: subject.instance().overlay });
    expect(mockFunction).toHaveBeenCalled();
  });
});
