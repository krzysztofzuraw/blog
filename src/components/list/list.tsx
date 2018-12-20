import * as React from 'react';
import { style } from 'typestyle';

import { MarkdownRemarkConnectionFrontmatterInputObject_2 } from 'typings/graphql';
import { theme } from '../../theme';

const listStyle = style({
  gridArea: 'content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'column',
});

const itemStyle = style({
  display: 'flex',
  flexDirection: 'column',
  $nest: {
    '& a': {
      textDecoration: 'none',
      fontWeight: 700,
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
    '& span': {
      color: theme.colors.gray.toString(),
      // fontSize: '16px',
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
