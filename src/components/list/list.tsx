import * as React from 'react';
import { style } from 'typestyle';

import { MarkdownRemarkConnectionFrontmatterInputObject_2 } from 'typings/graphql';
import { typography } from '../../layout';
import { theme } from '../../theme';

const listStyle = style({
  gridArea: 'content',
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  padding: typography.rhythm(0.5),
});

const itemStyle = style({
  display: 'flex',
  flexDirection: 'column',
  margin: `${typography.rhythm(0.5)} 0 ${typography.rhythm(0.5)} 0`,
  $nest: {
    '& a': {
      textDecoration: 'none',
      fontWeight: 700,
      color: 'unset',
      fontSize: typography.rhythm(0.8),
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
    '& span': {
      color: theme.colors.gray.toString(),
    },
  },
});

interface ItemProps {
  frontmatter?: MarkdownRemarkConnectionFrontmatterInputObject_2 | null;
}

export class List extends React.Component {
  static Item: React.FunctionComponent<ItemProps> = ({ frontmatter }) => (
    <div className={itemStyle}>
      {frontmatter && (
        <>
          <a href={frontmatter.slug as string}>{frontmatter.title}</a>
          <span>{frontmatter.date}</span>
        </>
      )}
    </div>
  );
  render() {
    return <div className={listStyle}>{this.props.children}</div>;
  }
}
