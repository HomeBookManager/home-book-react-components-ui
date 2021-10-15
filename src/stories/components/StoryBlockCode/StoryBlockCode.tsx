import { FC } from 'react';

// others
import { TStoryBlockCode } from './types';

// services
import getContextHTMLComponents from './services/getContextHTMLComponents';
import getContextHTMLImport from './services/getContextHTMLImports';

// styles
import './story-block-code.scss';

export type TProps = {
  blockCodeData: TStoryBlockCode;
  className?: string;
};

const StoryBlockCode: FC<TProps> = ({ blockCodeData, className = '' }) => {
  const { componentName = '', props = [], imports } = blockCodeData;

  return (
    <div className={`StoryBlockCode ${className}`}>
      {/* IMPORTS */}
      {imports.map((importObj, key) => (
        <p
          className="StoryBlockCode__imports"
          dangerouslySetInnerHTML={{
            __html: getContextHTMLImport(importObj),
          }}
          key={key}
        />
      ))}
      {props.length > 0 && <div className="StoryBlockCode__separator" />}
      {/* COMPONENTS */}
      {props.map((props, key) => (
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
