import { fireEvent, render, waitFor } from '@testing-library/react';

// components
import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

// others
import { Numbers } from '../../stories/components/StoryBlockCode/constants';
import { Color, Size, Variant } from '../Button/constants';
import { Orientation } from './constants';

describe('ButtonGroup', () => {
  const mockCallBack = jest.fn();

  it('should render buttons', () => {
    const { getByText } = render(
      <ButtonGroup>
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(getByText(Numbers[i])).toHaveTextContent(Numbers[i]);
    }
  });

  it('should append class', () => {
    const { container } = render(
      <ButtonGroup className="test">
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    expect(container.firstChild).toHaveClass('test');
  });

  it('should pass for all buttons primary color', () => {
    const { container } = render(
      <ButtonGroup>
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild.childNodes[i]).toHaveClass(
        'ButtonGroup__button__horizontal__contained--primary'
      );
    }
  });

  it('should pass for all buttons secondary color', () => {
    const { container } = render(
      <ButtonGroup color={Color.secondary}>
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild.childNodes[i]).toHaveClass(
        'ButtonGroup__button__horizontal__contained--secondary'
      );
    }
  });

  it('should not pass for all buttons disabled attribute', () => {
    const { container } = render(
      <ButtonGroup>
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild.childNodes[i]).not.toHaveAttribute(
        'disabled'
      );
    }
  });

  it('should pass for all buttons disabled attribute', () => {
    const { container } = render(
      <ButtonGroup disabled>
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild.childNodes[i]).toHaveAttribute('disabled');
    }
  });

  it('should render rippleEffect after click for every button', async () => {
    const { getByText } = render(
      <ButtonGroup>
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      fireEvent.click(getByText(Numbers[i]));
      await waitFor(
        () => {
          expect(getByText(Numbers[i]).lastChild).toHaveClass(
            'Button__contained--primary__ripple'
          );
        },
        { timeout: 100 }
      );
    }
  });

  it('should not render rippleEffect after click for every button', async () => {
    const { getByText } = render(
      <ButtonGroup disableRippleEffect>
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      fireEvent.click(getByText(Numbers[i]));
      await waitFor(
        () => {
          expect(getByText(Numbers[i]).lastChild).toHaveTextContent(Numbers[i]);
        },
        { timeout: 100 }
      );
    }
  });

  it('should pass for every button forcedHover', () => {
    const { container } = render(
      <ButtonGroup forcedHover>
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild.childNodes[i]).toHaveClass(
        'Button__contained--primary-forced-hover'
      );
    }
  });

  it('should have horizontal orientation', () => {
    const { container } = render(
      <ButtonGroup>
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    expect(container.firstChild).toHaveClass('ButtonGroup__horizontal');
  });

  it('should have vertical orientation', () => {
    const { container } = render(
      <ButtonGroup orientation={Orientation.vertical}>
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    expect(container.firstChild).toHaveClass('ButtonGroup__vertical');
  });

  it('should pass for every button large size', () => {
    const { container } = render(
      <ButtonGroup forcedHover>
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild.childNodes[i]).toHaveClass('Button__medium');
    }
  });

  it('should pass for every button large size', () => {
    const { container } = render(
      <ButtonGroup forcedHover size={Size.large}>
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild.childNodes[i]).toHaveClass('Button__large');
    }
  });

  it('should have custom styles', () => {
    const { container } = render(
      <ButtonGroup style={{ width: '100%' }}>
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    expect(container.firstChild).toHaveAttribute('style');
  });

  it('should pass for every button variant contained', () => {
    const { container } = render(
      <ButtonGroup>
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild.childNodes[i]).toHaveClass(
        'Button__contained'
      );
    }
  });

  it('should pass for every button variant text', () => {
    const { container } = render(
      <ButtonGroup variant={Variant.text}>
        <Button onClick={mockCallBack}>{Numbers[0]}</Button>
        <Button onClick={mockCallBack}>{Numbers[1]}</Button>
        <Button onClick={mockCallBack}>{Numbers[2]}</Button>
      </ButtonGroup>
    );

    for (let i = 0; i < 3; i++) {
      expect(container.firstChild.childNodes[i]).toHaveClass('Button__text');
    }
  });
});
