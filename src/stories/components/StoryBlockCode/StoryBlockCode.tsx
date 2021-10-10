import { FC } from 'react';

// others
import { TBlockCode } from './types';

// services
import getContextHTMLComponents from './services/getContextHTMLComponents';
import getContextHTMLImport from './services/getContextHTMLImports';

// styles
import './story-block-code.scss';

export type TProps = {
  blockCodeData: TBlockCode;
};

const StoryBlockCode: FC<TProps> = ({ blockCodeData }) => {
  const { componentName, data, importsContext } = blockCodeData;

  return (
    <div className="StoryBlockCode">
      {/* IMPORTS */}
      {importsContext.map((props, key) => (
        <p
          className="StoryBlockCode__imports"
          dangerouslySetInnerHTML={{
            __html: getContextHTMLImport(props),
          }}
          key={key}
        />
      ))}
      <div className="StoryBlockCode__separator" />
      {/* COMPONENTS */}
      {data.map((props, key) => (
        <p
          className="StoryBlockCode__components"
          dangerouslySetInnerHTML={{
            __html: getContextHTMLComponents(props, componentName),
          }}
          key={key}
        />
      ))}
    </div>
  );
};

export default StoryBlockCode;
