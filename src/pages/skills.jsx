import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'

const icons = [
  { name: 'HTML5', src: '/icons/html.svg', alt: 'html Logo' },
  { name: 'CSS3', src: '/icons/css.svg', alt: 'CSS Logo' },
  { name: 'javascript', src: '/icons/javascript.svg', alt: 'javascript Logo' },
  { name: 'bootstrap', src: '/icons/bootstrap.svg', alt: 'bootstrap Logo' },
  { name: 'next.js', src: '/icons/next-js.svg', alt: 'next.js Logo' },
  { name: 'formik', src: '/icons/formik.svg', alt: 'formik Logo' },
  { name: 'node', src: '/icons/node.svg', alt: 'node Logo' },
  { name: 'postgresql', src: '/icons/postgresql.svg', alt: 'postgresql Logo' },
  { name: 'prisma', src: '/icons/prisma.svg', alt: 'prisma Logo' },
  { name: 'react', src: '/icons/react.svg', alt: 'react Logo' },
  { name: 'redux', src: '/icons/redux.svg', alt: 'redux Logo' },
  { name: 'socket-io', src: '/icons/socket-io.svg', alt: 'socket-io Logo' },
  { name: 'supabase', src: '/icons/supabase.svg', alt: 'supabase Logo' },
  { name: 'tailwind', src: '/icons/tailwind.svg', alt: 'tailwind Logo' },
  { name: 'typescript', src: '/icons/typescript.svg', alt: 'typescript Logo' },
]

export default function Skills() {
  return (
    <>
      <Head>
        <title>Tools & skills - Mariam Youssef</title>
        <meta
          name="technologies"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout title="Skill and technologies I used to create projects."></SimpleLayout>
      <Container className="mt-9">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          {icons.map((icon) => (
            <div key={Math.random()}>
              <div className=" flex items-center space-x-3 rounded-lg px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 ">
                <div className="text-center">
                  <img src={icon.src} alt={icon.alt} />
                  <p className="mt-6 space-y-7 text-base font-bold text-zinc-600 dark:text-zinc-400">
                    {icon.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
