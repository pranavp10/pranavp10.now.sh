import { FaLaptopCode, FaGraduationCap, FaMobileAlt, FaBoxOpen } from 'react-icons/fa';
import { AiOutlineCode, AiOutlineGlobal } from 'react-icons/ai';
import { IoNewspaper } from 'react-icons/io5';
import { SiVisualstudiocode } from 'react-icons/si';
import { BiBuildings, BiSpreadsheet } from 'react-icons/bi';
import { GiPathDistance } from 'react-icons/gi';
import Link from 'next/link';
import { RoughNotation } from 'react-rough-notation';
import DateEntry from './dateEntry';
import TimeLineEntry from './timelineEntry';

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <DateEntry title="2021" />
      <TimeLineEntry title="My Learning Path" Icon={GiPathDistance} tint="gray">
        <p className="text-gray-700 dark:text-gray-400">
          Defining my all my learning so that it will helps other, how I started my learning.
        </p>
      </TimeLineEntry>
      <TimeLineEntry title="Personal Blog" Icon={BiSpreadsheet} tint="gray">
        <p className="text-gray-700 dark:text-gray-400">
          This was in my mind long back in when I was in my collage but it came into existence this
          year.
        </p>
      </TimeLineEntry>
      <TimeLineEntry title="Personal Website" Icon={AiOutlineGlobal} tint="gray">
        <p className="text-gray-700 dark:text-gray-400">
          Launching person website which is built using tailwind css and next js
        </p>
      </TimeLineEntry>

      <DateEntry title="2020" />
      <TimeLineEntry title="Frontend Libraries" Icon={FaBoxOpen} tint="red">
        <p className="text-gray-700 dark:text-gray-400">
          Best{' '}
          <RoughNotation type="highlight" show color="#feb6b6">
            <Link href="/libraries">
              <a>Frontend Libraries</a>
            </Link>
          </RoughNotation>{' '}
          which are used by professionals working at facebook, Google, Microsoft and many other top
          companies.
        </p>
      </TimeLineEntry>
      <TimeLineEntry title="My Code editor" Icon={SiVisualstudiocode} tint="blue">
        <p className="text-gray-700 dark:text-gray-400">
          <RoughNotation type="highlight" show color="#91a7ef">
            <Link href="/mycodeeditor">
              <a>My code editor</a>
            </Link>
          </RoughNotation>{' '}
          for Frontend development that improves your efficiency.
        </p>
      </TimeLineEntry>
      <TimeLineEntry title="Dev Env" Icon={AiOutlineCode} tint="gray">
        <p className="text-gray-700 dark:text-gray-400">
          Will help the developers to setup the{' '}
          <RoughNotation type="highlight" show color="#bfbfbf">
            <Link href="/devenv">
              <a>dev environment</a>
            </Link>
          </RoughNotation>{' '}
          .
        </p>
      </TimeLineEntry>
      <TimeLineEntry title="Joined Quze Inc" Icon={BiBuildings} tint="yellow">
        <p className="text-gray-700 dark:text-gray-400">
          I was really exited to join as Frontend developer. The learning phase of the start up
        </p>
      </TimeLineEntry>
      <DateEntry title="2019" />
      <TimeLineEntry title="Joined Tulasi Technologies" Icon={BiBuildings} tint="yellow">
        <p className="text-gray-700 dark:text-gray-400">
          Worked as a software Engineer and learnt lots of things during this phase
        </p>
      </TimeLineEntry>
      <TimeLineEntry title="Graduation Year" Icon={FaGraduationCap} tint="gray">
        <p className="text-gray-700 dark:text-gray-400">4 years of my life in nutshell</p>
      </TimeLineEntry>
      <TimeLineEntry title="Offer Letter" Icon={IoNewspaper} tint="green">
        <p className="text-gray-700 dark:text-gray-400">
          I was place in the college and was really happy because it was my first offer latter as{' '}
          <b>Software Engineer</b>
        </p>
      </TimeLineEntry>
      <DateEntry title="2015" />
      <TimeLineEntry title="Joined Engineering Collage" Icon={FaLaptopCode} tint="gray">
        <p className="text-gray-700 dark:text-gray-400">
          I was really fascinated with my smartphone and then took the compute science as my course
        </p>
      </TimeLineEntry>
      <DateEntry title="2013" />
      <TimeLineEntry title="My first smartphone" Icon={FaMobileAlt} tint="purple">
        <p className="text-gray-700 dark:text-gray-400">
          I got my first smart phone at the age of 16{' '}
        </p>
      </TimeLineEntry>
    </div>
  );
}
