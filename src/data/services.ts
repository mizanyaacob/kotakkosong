import { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'custom-games',
    icon: 'Gamepad2',
    title: 'Custom Game Development',
    description:
      'A game built from nothing, around one goal that matters to you. A lesson that has to land. A message that has to stick. A skill that has to be practised until it is second nature.',
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
      'Study that stops feeling like study. We turn lessons into games children ask to play again, and training your team finishes without being chased. Preschool to professional development.',
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
      'Quests, streaks, and missions that stretch a campaign from a three-second scroll into something people come back to for weeks. On the floor and on their phones.',
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
      'Points, tiers, badges, and streaks that make coming back feel like winning something. Every mechanic engineered around the one behaviour you want repeated.',
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
      'Points and badges bolted onto a bad idea just make a bad idea noisier. First we map the behaviour you want, design the loop that drives it, and agree how we will know it worked.',
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
      'We design and build original games around one specific outcome: attention, participation, learning, or loyalty. Some run in a classroom. Some run on an exhibition floor. Some live inside an app, and some ship as titles in their own right. We never start from a format and work backwards. We start from what has to change in the person playing.',
    benefits: [
      'Turns an audience that was watching into an audience that is playing',
      'Holds attention for minutes, where a poster gets you seconds',
      'Creates the kind of moments people film and send to a friend',
      'Every session produces real data on who engaged and for how long',
      'Yours to theme completely, from characters and worlds to in-game signage',
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
      'Ask any teacher and they will tell you the hard part was never explaining the material. It is holding the room long enough to explain it. So we stop competing with play and use it instead. Lessons become levels. Practice becomes a score worth beating. A wrong answer becomes another go rather than a red mark. We design to the age in the room: tactile, colourful and forgiving for early years, competitive and challenge-driven for older students, realistic and scenario-based for adults in training. The syllabus stays exactly as it is. What changes is whether anyone wants to sit through it.',
    benefits: [
      'Children ask to play it again, and repetition is where learning actually sticks',
      'Holds a room for the whole lesson, not the first five minutes',
      'Built for the age group, from pre-readers to seasoned professionals',
      'Teachers and trainers see who is struggling and exactly where',
      'Fits around your existing syllabus or training plan instead of replacing it',
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
      'A campaign asks people to notice. A gamified campaign asks them to play. We build the quests, challenges, and progression systems that keep an audience coming back for the length of the campaign rather than the length of a scroll, on the ground and online.',
    benefits: [
      'Turns a campaign moment into a daily habit',
      'Gives people a reason to come back, not just a reason to look',
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
