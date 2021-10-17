import { render, waitFor } from '@testing-library/react';

// components
import CirclePulse from './CirclePulse';

describe('CirclePulse', () => {
  const mockCallBack = jest.fn();

  it('should have proper animation duration', () => {
    const { container } = render(
      <CirclePulse
        animationDuration={1000}
        className={'Test__pulse'}
        pulseElements={[]}
        setPulseElements={mockCallBack}
      />
    );

    expect(container.firstChild).toHaveStyle('animation-duration: 1000ms');
  });

  it('should append class', () => {
    const { container } = render(
      <CirclePulse
        animationDuration={1000}
        className={'Test__pulse'}
        pulseElements={[]}
        setPulseElements={mockCallBack}
      />
    );

    expect(container.firstChild).toHaveClass('Test__pulse');
  });

  it('should fire onclick event after end the end of animation', async () => {
    render(
      <CirclePulse
        animationDuration={0}
        className={'Test__pulse'}
        pulseElements={[]}
        setPulseElements={mockCallBack}
      />
    );

    await waitFor(
      () => {
        expect(mockCallBack.mock.calls.length).toBe(1);
      },
      { timeout: 100 }
    );
  });
});
