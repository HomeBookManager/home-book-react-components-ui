import { fireEvent, render, waitFor } from '@testing-library/react';

// components
import Checkbox from '../Checkbox/Checkbox';
import CheckboxGroup from './CheckboxGroup';

jest.mock('react-svg', () => ({
  ReactSVG: (props) => <input {...props} />,
}));

describe('Checkbox', () => {
  const mockCallBack = jest.fn();

  it('should be unchecked', () => {
    const { container } = render(<Checkbox />);
    expect(container.firstChild.firstChild).not.toBeChecked();
  });
});
