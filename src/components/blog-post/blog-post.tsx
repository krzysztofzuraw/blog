import * as React from 'react';
import { style } from 'typestyle';

import { FilterMarkdownRemark } from 'typings/graphql';

const contentStyle = style({
  overflow: 'auto',
});

interface Props {
  markdownRemark: FilterMarkdownRemark;
}

export const BlogPost: React.FunctionComponent<Props> = ({ markdownRemark }) => (
  <>
    {markdownRemark.frontmatter && (
      <>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <p>{markdownRemark.frontmatter.date}</p>
      </>
    )}
    <div
      className={contentStyle}
      dangerouslySetInnerHTML={{ __html: markdownRemark.html as string }}
    />
  </>
);
