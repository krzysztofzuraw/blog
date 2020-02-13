import { DiscussionEmbed } from 'disqus-react';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { CommentsQuery } from 'typings/graphql';

type Props = {
  slug: string;
  title: string;
};

export const Comments: React.FunctionComponent<Props> = ({ slug, title }) => {
  const { site } = useStaticQuery<CommentsQuery>(
    graphql`
      query Comments {
        site {
          siteMetadata {
            disqusShortname
            siteUrl
          }
        }
      }
    `
  );

  return (
    <DiscussionEmbed
      shortname={site?.siteMetadata?.disqusShortname!}
      config={{
        identifier: slug,
        title,
        url: `${site?.siteMetadata?.siteUrl}${slug}`,
      }}
    />
  );
};
