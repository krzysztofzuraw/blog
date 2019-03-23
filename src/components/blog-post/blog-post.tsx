import * as React from 'react';
import { media, style } from 'typestyle';

import { FilterMarkdownRemark } from 'typings/graphql';
import { typography } from '../../utils';

const contentStyle = style(
  media({ maxWidth: 320 }, { maxWidth: typography.rhythm(12) }),
  media({ minWidth: 321, maxWidth: 400 }, { maxWidth: typography.rhythm(14) }),
  media({ minWidth: 401, maxWidth: 500 }, { maxWidth: typography.rhythm(16) }),
  media({ minWidth: 501, maxWidth: 900 }, { maxWidth: typography.rhythm(30) })
);

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
