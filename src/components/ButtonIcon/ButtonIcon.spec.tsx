import { fireEvent, render, waitFor } from '@testing-library/react';

// components
import ButtonIcon from './ButtonIcon';

// others
import { error, Size } from './constants';

// services
import hideConsole, { Console } from '../../services/console/hideConsole';

describe('ButtonIcon', () => {
  const mockCallBack = jest.fn();
  hideConsole(Console.error);

  it('should render child', () => {
    const { getByText } = render(
      <ButtonIcon onClick={mockCallBack}>Click</ButtonIcon>
    );
    const button = getByText('Click');

    expect(button).toHaveTextContent('Click');
  });

  it('should append class', () => {
    const { container } = render(
      <ButtonIcon className="test" onClick={mockCallBack}>
        Click
      </ButtonIcon>
    );

    expect(container.firstChild.classList.contains('text'));
  });

  it('should not have disabled attribute', () => {
    const { container } = render(
      <ButtonIcon onClick={mockCallBack}>Click</ButtonIcon>
    );

    expect(container.firstChild).not.toHaveAttribute('disabled');
  });

  it('should have disabled attribute', () => {
    const { container } = render(
      <ButtonIcon disabled onClick={mockCallBack}>
        Click
      </ButtonIcon>
    );

    expect(container.firstChild).toHaveAttribute('disabled');
  });

  it('should render pulseEffect after click', async () => {
    const { getByText } = render(<ButtonIcon>Click</ButtonIcon>);

    fireEvent.click(getByText('Click'));
    await waitFor(
      () => {
        expect(getByText('Click').lastChild).toHaveClass('CirclePulse');
      },
      { timeout: 100 }
    );
  });

  it('should not render pulseEffect after click', async () => {
    const { getByText } = render(
      <ButtonIcon disablePulseEffect>Click</ButtonIcon>
    );

    fireEvent.click(getByText('Click'));
    await waitFor(
      () => {
        expect(getByText('Click').lastChild).toHaveTextContent('Click');
      },
      { timeout: 100 }
    );
  });

  it('should have forced hover', () => {
    const { container } = render(
      <ButtonIcon forcedHover onClick={mockCallBack}>
        Click
      </ButtonIcon>
    );

    expect(container.firstChild).toHaveClass('ButtonIcon__forced-hover');
  });

  it('should return error if hsitory is not forwarded', () => {
    expect(() =>
      render(
        <ButtonIcon href="/" onClick={mockCallBack}>
          Click
        </ButtonIcon>
      )
    ).toThrow(error);
  });

  it('should call push if hsitory & href are forwarded', () => {
    const { getByText } = render(
      // @ts-ignore
      <ButtonIcon history={{ push: mockCallBack }} href="/">
        Click
      </ButtonIcon>
    );
    const button = getByText('Click');

    fireEvent.click(button);
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should fire onclick event', () => {
    const { getByText } = render(
      <ButtonIcon onClick={mockCallBack}>Click</ButtonIcon>
    );
    const button = getByText('Click');

    fireEvent.click(button);
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should have medium size', () => {
    const { container } = render(
      <ButtonIcon onClick={mockCallBack}>Click</ButtonIcon>
    );

    expect(container.firstChild).toHaveClass('ButtonIcon__medium');
  });

  it('should have large size', () => {
    const { container } = render(
      <ButtonIcon size={Size.large} onClick={mockCallBack}>
        Click
      </ButtonIcon>
    );

    expect(container.firstChild).toHaveClass('ButtonIcon__large');
  });

  it('should have custom styles', () => {
    const { container } = render(
      <ButtonIcon style={{ width: '100%' }} onClick={mockCallBack}>
        Click
      </ButtonIcon>
    );

    expect(container.firstChild).toHaveAttribute('style');
  });
});
