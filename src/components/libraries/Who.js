import { RoughNotation } from 'react-rough-notation';

const Who = () => (
  <div className="mt-8">
    <h4 className="font-semibold text-primary">New npm packages ?</h4>
    <h5
      className="text-md text-gray-700 dark:text-gray-400 mb-8"
      data-aos="zoom-y-out"
      data-aos-delay="150">
      I am always starving to try out new npm packages so that I can implement those in my up coming
      projects. Do you know any other packages that I could try out?{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:pranavkp.me@outlook.com?subject=https://pranavp10.me/libraries&body=package%20name%3A-%0D%0Agithub%20link%3A-%0D%0Awebsite%3A-">
        <RoughNotation type="highlight" show color="#feb6b6">
          <b>mail me</b>
        </RoughNotation>
      </a>{' '}
      , let's discuss and will try to add it in the list.
    </h5>
  </div>
);
export default Who;
