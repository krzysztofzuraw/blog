import { graphql } from 'gatsby';
import * as React from 'react';

import { BlogPostBySlugQuery } from 'typings/graphql';
import { Link } from '.';

export const WebMentions: React.FunctionComponent<{
  data: BlogPostBySlugQuery['allWebMentionEntry'];
}> = ({ data: { edges } }) => {
  const likesAndReposts = edges.filter(
    ({ node }) => node.wmProperty === 'like-of' || node.wmProperty === 'repost-of'
  );
  const mentionsAndReplies = edges.filter(
    ({ node }) => node.wmProperty === 'mention-of' || node.wmProperty === 'in-reply-to'
  );
  return (
    <div className="webmentions">
      <h4>Webmentions</h4>
      <div>
        <span title="likes and reposts" role="img" aria-label="emoji">
          💙&nbsp;
        </span>
        {likesAndReposts.length} &nbsp;
        <span title="comments" role="img" aria-label="emoji">
          💬
        </span>
        &nbsp;
        {mentionsAndReplies.length}
      </div>
      <ul>
        {mentionsAndReplies.map((entry) => (
          <li key={entry.node.wmId ?? ''}>
            <div className="webmention">
              {entry.node.author?.url && (
                <Link to={entry.node.author?.url} className="avatar">
                  <img
                    src={entry.node.author?.photo ?? ''}
                    alt="avatar"
                    title={entry.node.author?.name ?? ''}
                  />
                </Link>
              )}
              <div dangerouslySetInnerHTML={{ __html: entry.node.content?.html ?? '' }}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  fragment WebMentionInformation on WebMentionEntryEdge {
    node {
      wmTarget
      wmSource
      wmProperty
      wmId
      type
      url
      likeOf
      author {
        url
        type
        photo
        name
      }
      content {
        html
      }
    }
  }
`;
