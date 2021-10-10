import { FC } from 'react';

// others
import { TBlockCode } from './types';

// services
import getContextHTML from './services/getContextHTML';

// styles
import './story-block-code.scss';

export type TProps = {
  blockCodeData: TBlockCode;
};

const StoryBlockCode: FC<TProps> = ({ blockCodeData }) => {
  const { componentName, data } = blockCodeData;

  return (
    <div className="StoryBlockCode">
      {data.map((props, key) => (
        <p
          className="StoryBlockCode__code"
          dangerouslySetInnerHTML={{
            __html: getContextHTML(props, componentName),
          }}
          key={key}
        />
      ))}
    </div>
  );
};

export default StoryBlockCode;
