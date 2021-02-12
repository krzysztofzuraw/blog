import { graphql } from 'gatsby';
import React, { ChangeEvent, FunctionComponent, useEffect, useRef, useState } from 'react';

import { Layout, Link, SEO } from '../components';

type Props = {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          frontmatter: { slug: string; title: string; date: string; tags: string[] };
          id: string;
        };
      }>;
    };
  };
};

const BlogListPage: FunctionComponent<Props> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const focusInput = (e: KeyboardEvent) => {
    if (e.code === 'Slash') {
      ref.current?.focus();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', focusInput);
    return () => document.removeEventListener('keyup', focusInput);
  }, []);

  const [state, setState] = useState<{
    filteredPosts: Props['data']['allMarkdownRemark']['edges'];
    query: string;
  }>({ filteredPosts: [], query: '' });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    const posts = edges;

    const filteredPosts = posts.filter((post) => {
      const { title } = post.node.frontmatter;
      return title.toLowerCase().includes(query.toLowerCase());
    });

    setState({ filteredPosts, query });
  };
  const hasSearchResults = state.filteredPosts && state.query !== '';
  const posts = hasSearchResults ? state.filteredPosts : edges;

  return (
    <Layout>
      <SEO title="Blog index" />
      <h1>Blog index</h1>
      <label htmlFor="blogPostSearch">Search by post title</label>
      <input
        id="blogPostSearch"
        name="blogPostSearch"
        type="search"
        placeholder="Type '/' to focus"
        onChange={handleInputChange}
        className="blog-search"
        ref={ref}
      />
      <ul className="blog-index-list">
        {posts.map(({ node }) => (
          <li key={node.id}>
            {node.frontmatter.date} -{' '}
            <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogListPage;
export const pageQuery = graphql`
  query BlogListPage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            slug
          }
        }
      }
    }
  }
`;
