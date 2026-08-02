import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'custom-games',
    icon: 'Gamepad2',
    title: 'Custom Game Development',
    description:
      'Original games built around your objective, whether that objective is a lesson outcome, a campaign target, a training goal, or a title of its own.',
    features: [
      'Original game concept & design',
      'Themed worlds, characters & assets',
      'Single, multiplayer & co-op modes',
      'Screen, tablet, web & controller builds',
      'Live leaderboards & progress displays',
    ],
  },
  {
    id: 'learning-education',
    icon: 'GraduationCap',
    title: 'Learning & Education Gamification',
    description:
      'Play-based learning for classrooms and training rooms alike, from early childhood centres and schools to onboarding, safety, and product training for teams.',
    features: [
      'Early childhood & preschool play-based learning',
      'Curriculum-aligned classroom games',
      'Onboarding, safety & compliance training',
      'Progress tracking for teachers & trainers',
      'Assessment, scoring & reporting',
    ],
  },
  {
    id: 'gamified-campaigns',
    icon: 'Zap',
    title: 'Gamified Campaigns & Activations',
    description:
      'Quests, challenges, and missions that turn a campaign or an event floor into something people play along with over days and weeks, not minutes.',
    features: [
      'Challenge & mission design',
      'Progress and streak mechanics',
      'Online and on-ground integration',
      'Social sharing & referral loops',
      'Campaign performance dashboards',
    ],
  },
  {
    id: 'loyalty-systems',
    icon: 'Trophy',
    title: 'Loyalty & Reward Systems',
    description:
      'Points, tiers, badges, and redemption mechanics that give people a reason to come back, engineered around the behaviour you want repeated.',
    features: [
      'Points & tier structures',
      'Digital stamp cards & collectibles',
      'Achievement and badge systems',
      'Live leaderboards & seasons',
      'Prize & reward redemption flows',
    ],
  },
  {
    id: 'gamification-strategy',
    icon: 'Layers',
    title: 'Gamification Strategy',
    description:
      'Before anything gets built: we map the behaviour you want, design the loop that drives it, and define how success will be measured.',
    features: [
      'Audience & motivation research',
      'Behaviour loop mapping',
      'Game mechanics selection',
      'Reward economy design',
      'Success metrics & measurement plan',
    ],
  },
]

export const serviceDetails = [
  {
    id: 'custom-games',
    title: 'Custom Game Development',
    overview:
      'We design and build original games around a specific outcome: attention, participation, learning, or loyalty. Some run in a classroom, some on an event floor, some live inside an app, some ship as standalone titles. The brief comes first, the format follows.',
    benefits: [
      'Turns a passive audience into active participants',
      'Holds attention far longer than static content or messaging',
      'Creates natural, shareable moments people record and post',
      'Produces measurable engagement data from every play session',
      'Fully themable, from characters and worlds to in-game signage',
    ],
    process: [
      'Discovery & objective alignment',
      'Concept development & game design',
      'UI/UX design & playable prototype',
      'Development & playtesting',
      'Launch, deployment & support',
    ],
    deliverables: [
      'Custom game build',
      'Platform or hardware setup',
      'Themed visual assets',
      'Operational runbook',
      'Post-launch engagement report',
    ],
  },
  {
    id: 'learning-education',
    title: 'Learning & Education Gamification',
    overview:
      'Attention is the hard part of teaching anything. We build play-based learning experiences that hold it, designed around how people at that age actually learn: tactile and forgiving for early childhood, challenge-driven for older students, scenario-based for adults in training.',
    benefits: [
      'Learners choose to keep going instead of being made to',
      'Repetition stops feeling like repetition, which is where retention comes from',
      'Age-appropriate design, from pre-readers to adult professionals',
      'Teachers and trainers see progress per learner, not just completion',
      'Works alongside an existing syllabus or training programme, not against it',
    ],
    process: [
      'Learning objectives & age-group discovery',
      'Pedagogy-led mechanics design',
      'Prototype & classroom playtesting',
      'Build, accessibility & safety review',
      'Rollout, educator onboarding & support',
    ],
    deliverables: [
      'Learner-facing game or activity set',
      'Educator or trainer dashboard',
      'Facilitation and lesson-fit guide',
      'Progress & assessment reporting',
      'Onboarding session for staff',
    ],
  },
  {
    id: 'gamified-campaigns',
    title: 'Gamified Campaigns & Activations',
    overview:
      'A campaign asks people to notice. A gamified campaign asks them to play. We build the quests, challenges, and progression systems that keep an audience coming back across an entire campaign period, on-ground and online.',
    benefits: [
      'Extends campaign engagement from a moment into a habit',
      'Gives audiences a reason to return, not just to look',
      'Creates a clear reason to share with friends and colleagues',
      'Captures first-party data through voluntary participation',
      'Works across channels: retail, event, social, and app',
    ],
    process: [
      'Objective & behaviour definition',
      'Mechanics and reward economy design',
      'Experience & interface design',
      'Build, integration & testing',
      'Live operation and optimisation',
    ],
    deliverables: [
      'Complete campaign game system',
      'Player-facing web or app experience',
      'Admin & content management portal',
      'Reward and redemption logic',
      'Live analytics dashboard',
    ],
  },
]
