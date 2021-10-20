import { FC } from 'react';

// others
import { TStoryBlockCode } from './types';

// services
import parseComponentToHTMLContext from './services/parseComponentToHTMLContext';
import parseImportsToHTMLContext from './services/parseImportToHTMLContext';

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
            __html: parseImportsToHTMLContext(importObj),
          }}
          key={key}
        />
      ))}
      {props.length > 0 && <div className="StoryBlockCode__separator" />}
      {/* COMPONENTS */}
      {props.map((props, key) => (
        <div
          className="StoryBlockCode__components"
          dangerouslySetInnerHTML={{
            __html: parseComponentToHTMLContext(props, componentName),
          }}
          key={key}
        />
      ))}
    </div>
  );
};

export default StoryBlockCode;
