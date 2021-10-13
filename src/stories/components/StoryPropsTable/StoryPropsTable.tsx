import { FC } from 'react';

// styles
import './story-props-table.scss';

export type TTableBody = {
  defaultValue?: string;
  description: string;
  name: string;
  type: string;
};

export type TProps = {
  tableBodyData: Array<TTableBody>;
};

const StoryPropsTable: FC<TProps> = ({ tableBodyData }) => (
  <section className="StoryPropsTable">
    <h2 className="StoryPropsTable__title">Props</h2>
    <table className="StoryPropsTable__table">
      <thead>
        <tr className="StoryPropsTable__table-header">
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {tableBodyData.map(
          ({ defaultValue = '', description, name, type }, key) => (
            <tr className="StoryPropsTable__table-body" key={key}>
              <td className="StoryPropsTable__table-body__name">{name}</td>
              <td
                className="StoryPropsTable__table-body__type"
                dangerouslySetInnerHTML={{
                  __html: type,
                }}
              />
              <td className="StoryPropsTable__table-body__default-value">
                {defaultValue}
              </td>
              <td
                className="StoryPropsTable__table-body__description"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </tr>
          )
        )}
      </tbody>
    </table>
  </section>
);

export default StoryPropsTable;
