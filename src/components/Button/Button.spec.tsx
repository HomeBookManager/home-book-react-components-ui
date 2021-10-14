import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

// components
import Button from './Button';

// others
import { Color, Size, Variant } from './constants';

describe('Button', () => {
  const mockCallBack = jest.fn();

  it('should render child', () => {
    const { getByText } = render(<Button onClick={mockCallBack}>Click</Button>);
    const button = getByText('Click');

    expect(button).toHaveTextContent('Click');
  });

  it('should append class', () => {
    const { container } = render(
      <Button className="test" onClick={mockCallBack}>
        Click
      </Button>
    );

    expect(container.firstChild.classList.contains('text'));
  });

  it('should be primary color', () => {
    const { container } = render(
      <Button className="test" onClick={mockCallBack}>
        Click
      </Button>
    );

    expect(
      container.firstChild.classList.contains('Button__contained--primary')
    ).toBeTruthy();
  });

  it('should be secondary color', () => {
    const { container } = render(
      <Button className="test" color={Color.secondary} onClick={mockCallBack}>
        Click
      </Button>
    );

    expect(
      container.firstChild.classList.contains('Button__contained--secondary')
    ).toBeTruthy();
  });

  it('should not have disabled attribute', () => {
    const { container } = render(<Button onClick={mockCallBack}>Click</Button>);

    expect(container.firstChild).not.toHaveAttribute('disabled');
  });

  it('should have disabled attribute', () => {
    const { container } = render(
      <Button disabled onClick={mockCallBack}>
        Click
      </Button>
    );

    expect(container.firstChild).toHaveAttribute('disabled');
  });

  it('should render rippleEffect after click', async () => {
    const { getByText } = render(<Button>Click</Button>);

    fireEvent.click(getByText('Click'));
    await waitFor(
      () => {
        expect(getByText('Click').lastChild).toHaveClass(
          'Button__contained--primary__ripple'
        );
      },
      { timeout: 100 }
    );
  });

  it('should not render rippleEffect after click', async () => {
    const { getByText } = render(<Button disableRippleEffect>Click</Button>);

    fireEvent.click(getByText('Click'));
    await waitFor(
      () => {
        expect(getByText('Click').lastChild).toHaveTextContent('Click');
      },
      { timeout: 100 }
    );
  });

  it('should have image after children', () => {
    const { container } = render(
      <Button endIcon="icon" onClick={mockCallBack}>
        Click
      </Button>
    );

    expect(container.firstChild.lastChild).toHaveClass('Button__icon');
  });

  it('should have forced hover', () => {
    const { container } = render(
      <Button forcedHover onClick={mockCallBack}>
        Click
      </Button>
    );

    expect(container.firstChild).toHaveClass(
      'Button__contained--primary-forced-hover'
    );
  });

  it('should have fullWidth', () => {
    const { container } = render(
      <Button fullWidth onClick={mockCallBack}>
        Click
      </Button>
    );

    expect(container.firstChild).toHaveClass('Button__full-width');
  });

  it('should fire onclick event', () => {
    const { getByText } = render(<Button onClick={mockCallBack}>Click</Button>);
    const button = getByText('Click');

    fireEvent.click(button);
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should have medium size', () => {
    const { container } = render(<Button onClick={mockCallBack}>Click</Button>);

    expect(container.firstChild).toHaveClass('Button__medium');
  });

  it('should have large size', () => {
    const { container } = render(
      <Button size={Size.large} onClick={mockCallBack}>
        Click
      </Button>
    );

    expect(container.firstChild).toHaveClass('Button__large');
  });

  it('should have image before children', () => {
    const { container } = render(
      <Button startIcon="icon" onClick={mockCallBack}>
        Click
      </Button>
    );

    expect(container.firstChild.firstChild).toHaveClass('Button__icon');
  });

  it('should have custom styles', () => {
    const { container } = render(
      <Button style={{ width: '100%' }} onClick={mockCallBack}>
        Click
      </Button>
    );

    expect(container.firstChild).toHaveAttribute('style');
  });

  it('should be contained variant', () => {
    const { container } = render(<Button onClick={mockCallBack}>Click</Button>);

    expect(container.firstChild).toHaveClass('Button__contained');
  });

  it('should be text variant', () => {
    const { container } = render(
      <Button onClick={mockCallBack} variant={Variant.text}>
        Click
      </Button>
    );

    expect(container.firstChild).toHaveClass('Button__text');
  });
});
