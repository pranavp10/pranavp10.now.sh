import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';

const editUrl = (slug) =>
  `https://github.com/pranavp10/pranavp10.now.sh/edit/main/data/blog/${slug}.mdx`;

const BlogLayout = ({ children, frontMatter }) => (
  <div className="pt-32">
    <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-12 w-full">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        {frontMatter.title}
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
        <div className="flex items-center">
          <Image
            alt="Pranav Patel"
            height={24}
            width={24}
            src="/static/avatar.jpg"
            className="rounded-full"
          />
          <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
            {frontMatter.by}
            {'Pranav Patel / '}
            {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
          </p>
        </div>
        <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
          {frontMatter.readingTime.text}
        </p>
      </div>
      <div className="prose dark:prose-dark md:prose-lg lg:prose-xl prose-blue">{children}</div>
      <div className="text-right mt-4 w-full">
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            className="text-right"
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer">
            Edit this page
          </a>
        </div>
      </div>
    </article>
  </div>
);
BlogLayout.propTypes = {
  children: PropTypes.any,
  frontMatter: PropTypes.any,
};

export default BlogLayout;
