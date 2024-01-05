import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonPinRoundedIcon from '@mui/icons-material/PersonPinRounded';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import InventoryIcon from '@mui/icons-material/Inventory';

import Image from 'next/image';

export const WhyChooseUsData = [
  {
    id: crypto.randomUUID(),
    icon: <PersonPinRoundedIcon />,
    heading: 'User-Centric Approach',
  },
  {
    id: crypto.randomUUID(),
    icon: <PeopleIcon />,
    heading: 'Customer Satisfaction',
  },
  {
    id: crypto.randomUUID(),
    icon: <PersonAddIcon />,
    heading: 'Integrating Feedback',
  },
  {
    id: crypto.randomUUID(),
    icon: <FolderSpecialIcon />,
    heading: 'High Quality Products',
  },
  {
    id: crypto.randomUUID(),
    icon: <InventoryIcon />,
    heading: 'On-Time Product Delivery',
  },
];

export const digitalServicesData = [
  {
    id: crypto.randomUUID(),
    image: (
      <Image
        src={'/images/software.png'}
        width={75}
        height={75}
        alt={'software'}
        priority={false}
      />
    ),
    heading: 'Website Development',
    description:
      'We specialize in responsive website development, ensuring optimal performance across various devices.',
    icon: (
      <KeyboardArrowRightIcon
        sx={{
          backgroundColor: '#E68F50',
          color: '#fff',
          padding: '.5rem',
          borderRadius: '50px',
        }}
      />
    ),
  },
  {
    id: crypto.randomUUID(),
    image: (
      <Image
        src={'/images/code.png'}
        width={75}
        height={75}
        alt={'code'}
        priority={false}
      />
    ),
    heading: 'App Development',
    description:
      'We specialize in creating superior apps for diverse sectors such as e-commerce, education, and transportation.',
    icon: (
      <KeyboardArrowRightIcon
        sx={{
          backgroundColor: '#E68F50',
          color: '#fff',
          padding: '.5rem',
          borderRadius: '50px',
        }}
      />
    ),
  },
  {
    id: crypto.randomUUID(),
    image: (
      <Image
        src={'/images/cloud-computing.png'}
        width={75}
        height={75}
        alt={'cloud-computing'}
        priority={false}
      />
    ),
    heading: 'Software Development',
    description:
      'We specialize in tailored solutions ensuring business growth and efficiency by providing superior software.',
    icon: (
      <KeyboardArrowRightIcon
        sx={{
          backgroundColor: '#E68F50',
          color: '#fff',
          padding: '.5rem',
          borderRadius: '50px',
        }}
      />
    ),
  },
  {
    id: crypto.randomUUID(),
    image: (
      <Image
        src={'/images/marketing.png'}
        width={75}
        height={75}
        alt={'marketing'}
        priority={false}
      />
    ),
    heading: 'UI/UX Design',
    description:
      'We specialize in creating exemplary designs prioritizing user-friendly concepts and aesthetically appealing interfaces.',
    icon: (
      <KeyboardArrowRightIcon
        sx={{
          backgroundColor: '#E68F50',
          color: '#fff',
          padding: '.5rem',
          borderRadius: '50px',
        }}
      />
    ),
  },
  {
    id: crypto.randomUUID(),
    image: (
      <Image
        src={'/images/marketing.png'}
        width={75}
        height={75}
        alt={'marketing'}
        priority={false}
      />
    ),
    heading: 'Digital Marketing',
    description:
      'We specialize in tailored digital marketing solutions and ensure effective online marketing strategies.',
    icon: (
      <KeyboardArrowRightIcon
        sx={{
          backgroundColor: '#E68F50',
          color: '#fff',
          padding: '.5rem',
          borderRadius: '50px',
        }}
      />
    ),
  },
  {
    id: crypto.randomUUID(),
    image: (
      <Image
        src={'/images/seo.png'}
        width={75}
        height={75}
        alt={'seo'}
        priority={false}
      />
    ),
    heading: 'SEO Optimization',
    description:
      'We ensure optimal website traffic by addressing factors such as user experience, accessibility, product details, and monitoring target audience.',
    icon: (
      <KeyboardArrowRightIcon
        sx={{
          backgroundColor: '#E68F50',
          color: '#fff',
          padding: '.5rem',
          borderRadius: '50px',
        }}
      />
    ),
  },
];

export const seoServicesData = [
  {
    id: crypto.randomUUID(),
    heading: 'Customized SEO Services',
    description:
      'We develop tailored SEO plans for new websites as they consider a correct SEO website checklist, as well as strategy, to be critical for business.',
    icon: <CheckCircleIcon />,
  },
  {
    id: crypto.randomUUID(),
    heading: 'On-Page SEO Services',
    description:
      'We offer on-page SEO services for content, photos, descriptions, and visibility. They follow the design principles for SEO-friendly websites in order to provide their customers with the best outcomes.',
    icon: <CheckCircleIcon />,
  },
  {
    id: crypto.randomUUID(),
    heading: 'Off-Page SEO Services',
    description:
      'We undertake off-page SEO for better rankings. They mainly specialize in handling backlink profiles. Their SEO analysts strive to ensure that their websites are listed on some of the popular sites in the industry of travel.',
    icon: <CheckCircleIcon />,
  },
  {
    id: crypto.randomUUID(),
    heading: 'Mobile SEO Services',
    description:
      'We stress upon the mobile optimizations since the mobile phone use by search is highly prevalent. They are more able to score the best SEO rankings and can easily be viewed on mobile devices.',
    icon: <CheckCircleIcon />,
  },
  {
    id: crypto.randomUUID(),
    heading: 'Free Website Audit and Strategies',
    description:
      'We go beyond essential SEO website development to give out free website audits, analysis and SEO strategies for transparent business strategies. They target business owners in different industries, and these packages include local SEO and e-commerce services.',
    icon: <CheckCircleIcon />,
  },
];

export const jobPlacementData = [
  {
    id: crypto.randomUUID(),
    image: (
      <Image
        src={'/images/locations.png'}
        width={75}
        height={75}
        alt={'locations'}
        priority={false}
      />
    ),
    heading: 'Unleashing Top Talent Globally',
    description:
      'We offer 5% top talents and supports companies hiring from various time zones.',
  },
  {
    id: crypto.randomUUID(),
    image: (
      <Image
        src={'/images/promotion.png'}
        width={75}
        height={75}
        alt={'promotion'}
        priority={false}
      />
    ),
    heading: 'Securing Success',
    description:
      'The company has a 30-day replacement policy and high retention rate due to competitive payouts and strong brand reputation.',
  },
  {
    id: crypto.randomUUID(),
    image: (
      <Image
        src={'/images/pin.png'}
        width={75}
        height={75}
        alt={'pin'}
        priority={false}
      />
    ),
    heading: 'Beyond Borders',
    description: 'We provide both, flexible full-time and part-time jobs',
  },
  {
    id: crypto.randomUUID(),
    image: (
      <Image
        src={'/images/badge.png'}
        width={75}
        height={75}
        alt={'badge'}
        priority={false}
      />
    ),
    heading: 'End-to-End Excellence',
    description:
      'In our hiring process, a job description is shared, matches are reviewed, interviews are conducted, and post-hiring support is provided by us.',
  },
  {
    id: crypto.randomUUID(),
    image: (
      <Image
        src={'/images/performance.png'}
        width={75}
        height={75}
        alt={'performance'}
        priority={false}
      />
    ),
    heading: 'Efficiency Redefined',
    description:
      'The platform enables fast hiring without waiting for candidates to reply. We offer affordable alternatives to traditional recruitment methods and provides quality talent.',
  },
  {
    id: crypto.randomUUID(),
    image: (
      <Image
        src={'/images/commitment.png'}
        width={75}
        height={75}
        alt={'commitment'}
        priority={false}
      />
    ),
    heading: 'Simplified Contracts Satisfied Partnerships',
    description:
      'The contracts are good and satisfy both parties. We save time and money by providing remote onboarding and IT support.',
  },
];
