import { motion } from 'motion/react'

const skills = [
  {
    name: 'React.js',
    icon: 'fa-brands fa-react',
    description:
      'Building reusable, scalable, and maintainable user interfaces using components, hooks, state management, routing, and API integration.',
  },
  {
    name: 'Tailwind CSS',
    icon: 'fa-solid fa-wind',
    description:
      'Developing responsive and customizable interfaces using utility-first CSS and reusable design patterns.',
  },
  {
    name: 'Responsive Design',
    icon: 'fa-solid fa-mobile-screen-button',
    description:
      'Creating interfaces that provide a consistent user experience across desktop, tablet, and mobile devices.',
  },
  {
    name: 'Web Performance',
    icon: 'fa-solid fa-gauge-high',
    description:
      'Improving frontend performance by optimizing rendering, loading, assets, code splitting, lazy loading, and Core Web Vitals.',
  },
  {
    name: 'SEO Optimization',
    icon: 'fa-solid fa-magnifying-glass-chart',
    description:
      'Improving website visibility through semantic HTML, proper metadata, page structure, performance optimization, and SEO-friendly implementation.',
  },
  {
    name: 'REST API Integration',
    icon: 'fa-solid fa-plug-circle-bolt',
    description:
      'Connecting frontend applications with backend services, handling API requests, responses, loading states, errors, and data management.',
  },
  {
    name: 'Git & GitHub',
    icon: 'fa-brands fa-github',
    description:
      'Managing source code, tracking changes, working with branches, and maintaining frontend projects using Git and GitHub.',
  },
  {
    name: 'Backend Knowledge',
    icon: 'fa-solid fa-server',
    description:
      'Having a solid background in PHP, Laravel, REST APIs, and MySQL, which helps me understand backend architecture, authentication, data flow, and frontend-backend communication.',
  },
]

const Skills = () => {
  return (
    <div className='mb-10 mt-5 flex flex-col'>
      <div className='mx-auto mt-30 mb-10 flex h-10 items-center justify-center rounded-full border border-purple-600 px-5 text-center text-white'>
        Skills
      </div>

      <div className='flex flex-row flex-wrap items-center justify-center gap-4'>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.12 + 0.5, ease: 'easeOut' }}
            className='group h-[260px] w-[250px] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:bg-purple-500/10'
          >
            <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-lg text-purple-300 shadow-lg shadow-purple-500/20'>
              <i className={skill.icon} />
            </div>

            <h3 className='text-lg font-semibold text-white'>{skill.name}</h3>
            <p className='mt-2 text-sm text-slate-300'>{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills