import Link from 'next/link';
import Image from 'next/image';
import KudosAppImage from '/public/images/kudos-phone.webp';
import KudosApp2Image from '/public/images/kudos-phone2.webp';
import GooglePlayBadgeImage from '/public/images/google-play-badge.webp';
import AppStoreBadgeImage from '/public/images/app-store-badge.webp';
import { PuzzleIcon, LightBulbIcon, DeviceMobileIcon } from '@heroicons/react/outline';
// import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div className='min-h-screen h-full mt-16 mb-12 flex flex-col items-center'>
      <section className='bg-gradient-to-br w-full from-blue-400 to-blue-600 shadow-md p-8 pb-16 flex gap-24 items-start relative md:pr-72 lg:py-24'>
        <div className='px-4 flex flex-col items-start gap-4 md:gap-8 h-full justify-center'>
          <h1 className='text-white text-3xl md:text-5xl leading-snug'>
            Engage & Reward Employees <br /> Leading Healthy Lifestyles
          </h1>
          <Link href='/plans'>
            <button className='py-4 px-6 bg-white text-slate-900 rounded-md hover:shadow-lg transition-all duration-300 font-medium text-xs md:text-base'>
              View plans
            </button>
          </Link>
        </div>
        <div className='hidden md:flex absolute right-16 w-52 lg:w-72'>
          <div className='mt-40 lg:mt-4 z-10'>
            <Image src={KudosAppImage} width={240} height={480} />
          </div>
          <div className='mt-48 lg:mt-12 -ml-16 lg:-ml-24'>
            <Image src={KudosApp2Image} width={200} height={400} />
          </div>
        </div>
      </section>
      <section className='flex flex-col md:hidden p-8 items-center gap-4'>
        <h2 className='text-2xl font-semibold'>Download our App</h2>
        <div className='flex'>
          <Link href='https://apps.apple.com/us/app/kudoshealth/id1457996773?uo=4&at=11l6hc&app=itunes&ct=fnd'>
            <button>
              <Image src={AppStoreBadgeImage} alt='Download on the App Store' width={196} height={64} />
            </button>
          </Link>
          <Link href='https://play.google.com/store/apps/details?id=com.kudoshealth.mobileapp4'>
            <button>
              <Image src={GooglePlayBadgeImage} alt='Get it on Google Play' width={160} height={64} />
            </button>
          </Link>
        </div>
      </section>
      <section className='mt-64 p-4 text-slate-500 flex flex-col gap-16'>
        <h3 className='text-3xl flex flex-col gap-12 items-center mb-16'>
          <span>
            Our concept is <span className='font-gloria'>simple</span>,
          </span>
          <span>affordable gamification of workplace health initiatives</span>
        </h3>

        <div className='flex max-w-6xl'>
          <div className='flex flex-col w-1/2 px-8 gap-4'>
            <p className='text-5xl font-semibold text-blue-500'>Inclusivity</p>
            <span className='text-2xl'>
              Engage and reward all your employees of all fitness levels & activities across the globe, without disrupting their existing activity choices
            </span>
          </div>
          <div className='flex items-center justify-center w-1/2 px-8 text-blue-500'>
            <PuzzleIcon width={192} height={192} />
          </div>
        </div>
        <div className='flex max-w-6xl'>
          <div className='flex items-center justify-center w-1/2 px-8 text-blue-500'>
            <LightBulbIcon width={192} height={192} />
          </div>
          <div className='flex flex-col w-1/2 px-8 gap-4'>
            <p className='text-5xl font-semibold text-blue-500'>Innovation</p>
            <span className='text-2xl'>
              Create fun, competitive challenges driven by an individual's ability, calorie burn and activity intensity, and not just 'Steps' which favours the
              fittest employees
            </span>
          </div>
        </div>
        <div className='flex max-w-6xl'>
          <div className='flex flex-col w-1/2 px-8 gap-4'>
            <p className='text-5xl font-semibold text-blue-500'>Integration</p>
            <span className='text-2xl'>
              Connect to the employees existing popular fitness tracking app's and devices for automated data collection and simple participation
            </span>
          </div>
          <div className='flex items-center justify-center w-1/2 px-8 text-blue-500'>
            <DeviceMobileIcon width={192} height={192} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
