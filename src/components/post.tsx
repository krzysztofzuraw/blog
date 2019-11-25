import { Link } from 'gatsby';
import * as React from 'react';

import style from '../styles/post.module.css';

type Props = {
  frontmatter: any;
  excerpt?: any;
  html?: any;
};

const Post: React.FunctionComponent<Props> = ({ frontmatter, excerpt, html }) => {
  if (frontmatter) {
    const { slug, title, date } = frontmatter;
    return (
      <div className={style.post} key={frontmatter.slug}>
        <div className={style.postContent}>
          <h1 className={style.title}>
            <Link to={slug}>{title}</Link>
          </h1>
          <div className={style.meta}>{date}</div>
          {excerpt ? (
            <>
              <p>{excerpt}</p>
              <Link to={slug} className={style.readMore}>
                Read more →
              </Link>
            </>
          ) : (
            <>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export default Post;
