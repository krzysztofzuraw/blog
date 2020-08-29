import React, { FunctionComponent } from 'react';
import { Layout, Stack } from '../components';

const ProjectsPage: FunctionComponent = () => {
  return (
    <Layout location="projects">
      <Stack>
        <h1>Projects</h1>
        <div
          css={(theme) => ({
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
            gridGap: theme.spacing['s0'],
          })}
        >
          {projectList.map((project) => (
            <div
              key={`${project.title}-${project.description}-${project.stack}`}
              css={(theme) => ({
                padding: theme.spacing['s+1'],
                border: '1px solid',
                cursor: 'pointer',
                color: '#000',
                backgroundColor: '#fff',
                ':hover': {
                  color: '#fff',
                  backgroundColor: '#000',
                },
              })}
            >
              <a href={project.link} css={{ color: 'inherit', textDecoration: 'none' }}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p css={{ fontStyle: 'italic' }}>{project.stack}</p>
              </a>
            </div>
          ))}
        </div>
      </Stack>
    </Layout>
  );
};

export default ProjectsPage;

type SideProject = { title: string; description: string; link: string; stack: string };

const projectList: SideProject[] = [
  {
    title: 'Rabat',
    description: 'Discount/Promo codes tracker for chrome',
    stack: 'React, TypeScript',
    link: 'https://github.com/krzysztofzuraw/rabat',
  },
  {
    title: 'Blog',
    description: 'nth iteration of my personal space',
    stack: 'Gatsby, React, TypeScript, Emotion',
    link: 'https://github.com/krzysztofzuraw/blog',
  },
  {
    title: 'Blog layout experiment',
    description: 'Example blog layout by using patterns from everylayout.dev',
    stack: 'CSS, HTML',
    link: 'https://github.com/krzysztofzuraw/blog-layout-experiment',
  },
  {
    title: 'Blog post exploration',
    description: 'Example blog post build with HTML & CSS',
    stack: 'CSS, HTML',
    link: 'https://github.com/krzysztofzuraw/blog-post-exploration',
  },
  {
    title: 'CSS grid coffee shop',
    description: 'Example site build with CSS grid',
    stack: 'CSS, HTML',
    link: 'https://github.com/krzysztofzuraw/css-grid-coffee-shop',
  },
  {
    title: 'Xstate Autocomplete',
    description: 'Location autocomplete build with xstate',
    stack: 'Xstate, React, TypeScript',
    link: 'https://github.com/krzysztofzuraw/xstate-autocomplete',
  },
  {
    title: 'Writer Mode',
    description: 'VSCode extension for plain text wrting',
    stack: 'TypeScript',
    link: 'https://github.com/krzysztofzuraw/writer-mode',
  },
  {
    title: 'Blog projects',
    description: 'Various projects made while writing this blog',
    stack: 'Python, Django',
    link: 'https://github.com/krzysztofzuraw/blog-projects',
  },
];
