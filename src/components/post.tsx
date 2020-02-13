import { Link } from 'gatsby';
import * as React from 'react';

import { MarkdownRemarkFrontmatter } from 'typings/graphql';

import style from '../styles/post.module.css';
import { Comments } from './comments';
import { Newsletter } from './newsletter';

type ExcerptProps = {
  frontmatter: MarkdownRemarkFrontmatter | null;
  excerpt: string | null | undefined;
};

type HTMLProps = {
  frontmatter: MarkdownRemarkFrontmatter | null;
  html: string | null | undefined;
};

function Post(props: ExcerptProps | HTMLProps) {
  if (props.frontmatter) {
    const { slug, title, date } = props.frontmatter;
    return (
      <div className={style.post} key={slug!}>
        <div className={style.postContent}>
          <h1 className={`${style.title} post-link`}>
            <Link to={slug!}>{title}</Link>
          </h1>
          <div className={style.meta}>{date}</div>
          {'excerpt' in props ? (
            <>
              <p>{props.excerpt}</p>
              <Link to={slug!} className={style.readMore}>
                Read more →
              </Link>
            </>
          ) : (
            <>
              <div dangerouslySetInnerHTML={{ __html: props.html! }} />
              <Newsletter />
              <Comments title={title!} slug={slug!} />
            </>
          )}
        </div>
      </div>
    );
  }
  return null;
}

export default Post;
