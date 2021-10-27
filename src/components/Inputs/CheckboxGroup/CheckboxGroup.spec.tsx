import { fireEvent, render, waitFor } from '@testing-library/react';

// components
import Checkbox from '../Checkbox/Checkbox';
import { Size } from '../Checkbox/constants';
import CheckboxGroup from './CheckboxGroup';

jest.mock('react-svg', () => ({
  ReactSVG: (props) => <input {...props} />,
}));

describe('Checkbox', () => {
  const mockCallBack = jest.fn();

  it('should be unchecked in every checkbox', () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(container.firstChild.firstChild.firstChild).not.toBeChecked();

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild.childNodes[1].childNodes[i].firstChild
      ).not.toBeChecked();
    }
  });

  it('should be checked in every checkbox', () => {
    const { container } = render(
      <CheckboxGroup checked>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(container.firstChild.firstChild.firstChild).toBeChecked();

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild.childNodes[1].childNodes[i].firstChild
      ).toBeChecked();
    }
  });

  it('should be checked child if Parent is unchecked', () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox checked />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(container.firstChild.firstChild.firstChild).not.toBeChecked();
    expect(
      container.firstChild.childNodes[1].childNodes[0].firstChild
    ).toBeChecked();

    for (let i = 1; i < 3; i++) {
      expect(
        container.firstChild.childNodes[1].childNodes[i].firstChild
      ).not.toBeChecked();
    }
  });

  it('should render checked icon', () => {
    const { container } = render(
      <CheckboxGroup checked>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container.firstChild.firstChild.childNodes[1].firstChild
    ).toHaveClass('Checkbox__checked-icon');

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild.childNodes[1].childNodes[i].childNodes[1]
          .firstChild
      ).toHaveClass('Checkbox__checked-icon');
    }
  });

  it('should render custom checked icon in every checkbox', () => {
    const checkedIcon = './assets/icons/icon.svg';
    const { container } = render(
      <CheckboxGroup checked checkedIcon={checkedIcon}>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container.firstChild.firstChild.childNodes[1].firstChild
    ).toHaveAttribute('src', checkedIcon);

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild.childNodes[1].childNodes[i].childNodes[1]
          .firstChild
      ).toHaveAttribute('src', checkedIcon);
    }
  });

  it('should append class', () => {
    const { container } = render(
      <CheckboxGroup className="test">
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(container.firstChild).toHaveClass('test');
  });

  it('should not have disabled attribute in every checkbox', () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(container.firstChild.firstChild.firstChild).not.toHaveAttribute(
      'disabled'
    );

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild.childNodes[1].childNodes[i].firstChild
      ).not.toHaveAttribute('disabled');
    }
  });

  it('should have disabled attribute in every checkbox', () => {
    const { container } = render(
      <CheckboxGroup disabled>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(container.firstChild.firstChild.firstChild).toHaveAttribute(
      'disabled'
    );

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild.childNodes[1].childNodes[i].firstChild
      ).toHaveAttribute('disabled');
    }
  });

  it('should render pulseEffect after click on every checkbox', async () => {
    const { getAllByTestId } = render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    for (let i = 0; i < 4; i++) {
      fireEvent.click(getAllByTestId('input')[i]);
      await waitFor(
        () => {
          expect(getAllByTestId('input')[i].nextSibling.lastChild).toHaveClass(
            'CirclePulse'
          );
        },
        { timeout: 100 }
      );
    }
  });

  it('should render pulseEffect after click on every checkbox', async () => {
    const { getAllByTestId } = render(
      <CheckboxGroup disablePulseEffect>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    for (let i = 0; i < 4; i++) {
      fireEvent.click(getAllByTestId('input')[i]);
      await waitFor(
        () => {
          expect(
            getAllByTestId('input')[i].nextSibling.lastChild
          ).not.toHaveClass('CirclePulse');
        },
        { timeout: 100 }
      );
    }
  });

  it('should have forced focus', () => {
    const { container } = render(
      <CheckboxGroup forcedFocus>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      'Checkbox__input-forced-focus'
    );

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild.childNodes[1].childNodes[i].firstChild
      ).toHaveClass('Checkbox__input-forced-focus');
    }
  });

  it('should have forced hover', () => {
    const { container } = render(
      <CheckboxGroup forcedHover>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      'Checkbox__input-forced-hover'
    );

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild.childNodes[1].childNodes[i].firstChild
      ).toHaveClass('Checkbox__input-forced-hover');
    }
  });

  it('should render indeterminate icon', () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox checked />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container.firstChild.firstChild.childNodes[1].firstChild
    ).toHaveAttribute('src', 'indeterminate.svg');
  });

  it('should display proper label', () => {
    const { container } = render(
      <CheckboxGroup label="Parent">
        <Checkbox label="Child_1" />
        <Checkbox label="Child_2" />
        <Checkbox label="Child_3" />
      </CheckboxGroup>
    );

    expect(container.firstChild.firstChild.lastChild).toHaveTextContent(
      'Parent'
    );

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild.childNodes[1].childNodes[i].lastChild
      ).toHaveTextContent(`Child_${i + 1}`);
    }
  });

  it('should fire onChange event', () => {
    const { getAllByTestId } = render(
      <CheckboxGroup onChange={mockCallBack}>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );
    const checkbox = getAllByTestId('input')[0];

    fireEvent.click(checkbox);
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should have medium size in every checkbox', () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      'Checkbox__input--medium'
    );

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild.childNodes[1].childNodes[i].firstChild
      ).toHaveClass('Checkbox__input--medium');
    }
  });

  it('should have large size in every checkbox', () => {
    const { container } = render(
      <CheckboxGroup size={Size.large}>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      'Checkbox__input--large'
    );

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild.childNodes[1].childNodes[i].firstChild
      ).toHaveClass('Checkbox__input--large');
    }
  });

  it('should have custom styles', () => {
    const { container } = render(
      <CheckboxGroup size={Size.large} style={{ width: '100%' }}>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(container.firstChild).toHaveAttribute('style');
  });

  it('should render unchecked icon', () => {
    const { container } = render(
      <CheckboxGroup>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container.firstChild.firstChild.childNodes[1].firstChild
    ).toHaveClass('Checkbox__unchecked-icon');

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild.childNodes[1].childNodes[i].childNodes[1]
          .firstChild
      ).toHaveClass('Checkbox__unchecked-icon');
    }
  });

  it('should render custom unchecked icon in every checkbox', () => {
    const uncheckedIcon = './assets/icons/icon.svg';
    const { container } = render(
      <CheckboxGroup uncheckedIcon={uncheckedIcon}>
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </CheckboxGroup>
    );

    expect(
      container.firstChild.firstChild.childNodes[1].firstChild
    ).toHaveAttribute('src', uncheckedIcon);

    for (let i = 0; i < 3; i++) {
      expect(
        container.firstChild.childNodes[1].childNodes[i].childNodes[1]
          .firstChild
      ).toHaveAttribute('src', uncheckedIcon);
    }
  });
});
