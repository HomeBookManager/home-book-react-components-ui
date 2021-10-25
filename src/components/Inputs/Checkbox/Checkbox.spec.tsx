import { fireEvent, render, waitFor } from '@testing-library/react';

// components
import Checkbox from './Checkbox';

// others
import { Size } from './constants';

jest.mock('react-svg', () => ({
  ReactSVG: (props) => <input {...props} />,
}));

describe('Checkbox', () => {
  const mockCallBack = jest.fn();

  it('should be unchecked', () => {
    const { container } = render(<Checkbox />);
    expect(container.firstChild.firstChild).not.toBeChecked();
  });

  it('should be checked', () => {
    const { container } = render(<Checkbox checked />);
    expect(container.firstChild.firstChild).toBeChecked();
  });

  it('should render checked icon', () => {
    const { container } = render(<Checkbox />);
    expect(container.firstChild.childNodes[1].childNodes[1]).toHaveClass(
      'Checkbox__checked-icon'
    );
  });

  it('should render custom checked icon', () => {
    const checkedIcon = './assets/icons/icon.svg';
    const { container } = render(<Checkbox checkedIcon={checkedIcon} />);

    expect(container.firstChild.childNodes[1].childNodes[1]).toHaveAttribute(
      'src',
      checkedIcon
    );
  });

  it('should append class', () => {
    const { container } = render(<Checkbox className="test" />);
    expect(container.firstChild).toHaveClass('test');
  });

  it('should not have disabled attribute', () => {
    const { container } = render(<Checkbox />);

    expect(container.firstChild.firstChild).not.toHaveAttribute('disabled');
  });

  it('should have disabled attribute', () => {
    const { container } = render(<Checkbox disabled />);

    expect(container.firstChild.firstChild).toHaveAttribute('disabled');
  });

  it('should render pulseEffect after click', async () => {
    const { getByTestId } = render(<Checkbox />);

    fireEvent.click(getByTestId('input'));
    await waitFor(
      () => {
        expect(getByTestId('input').nextSibling.lastChild).toHaveClass(
          'CirclePulse'
        );
      },
      { timeout: 100 }
    );
  });

  it('should not render pulseEffect after click', async () => {
    const { getByTestId } = render(<Checkbox disablePulseEffect />);

    fireEvent.click(getByTestId('input'));
    await waitFor(
      () => {
        expect(getByTestId('input').nextSibling.lastChild).toHaveClass(
          'Checkbox__checked-icon'
        );
      },
      { timeout: 100 }
    );
  });

  it('should have forced focus', () => {
    const { container } = render(<Checkbox forcedFocus />);
    expect(container.firstChild.firstChild).toHaveClass(
      'Checkbox__input-forced-focus'
    );
  });

  it('should have forced hover', () => {
    const { container } = render(<Checkbox forcedHover />);
    expect(container.firstChild.firstChild).toHaveClass(
      'Checkbox__input-forced-hover'
    );
  });

  it('should fire onChange event', () => {
    const { getByTestId } = render(<Checkbox onChange={mockCallBack} />);
    const checkbox = getByTestId('input');

    fireEvent.click(checkbox);
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should fire setCheckedGroup event', () => {
    const { getByTestId } = render(
      <Checkbox index={10} setCheckedGroup={mockCallBack} />
    );
    const checkbox = getByTestId('input');

    fireEvent.click(checkbox);
    expect(mockCallBack).toHaveBeenCalledWith(10);
  });

  it('should have medium size', () => {
    const { container } = render(<Checkbox />);

    expect(container.firstChild.firstChild).toHaveClass(
      'Checkbox__input--medium'
    );
    expect(container.firstChild.childNodes[1]).toHaveClass(
      'Checkbox__icon-wrapper--medium'
    );
  });

  it('should have medium size', () => {
    const { container } = render(<Checkbox size={Size.large} />);

    expect(container.firstChild.firstChild).toHaveClass(
      'Checkbox__input--large'
    );
    expect(container.firstChild.childNodes[1]).toHaveClass(
      'Checkbox__icon-wrapper--large'
    );
  });

  it('should have custom styles', () => {
    const { container } = render(<Checkbox style={{ width: '100%' }} />);

    expect(container.firstChild).toHaveAttribute('style');
  });

  it('should render unchecked icon', () => {
    const { container } = render(<Checkbox />);
    expect(container.firstChild.childNodes[1].firstChild).toHaveClass(
      'Checkbox__unchecked-icon'
    );
  });

  it('should render custom unchecked icon', () => {
    const uncheckedIcon = './assets/icons/icon.svg';
    const { container } = render(<Checkbox uncheckedIcon={uncheckedIcon} />);

    expect(container.firstChild.childNodes[1].firstChild).toHaveAttribute(
      'src',
      uncheckedIcon
    );
  });
});
