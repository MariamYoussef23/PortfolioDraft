import Head from 'next/head'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'


function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Mariam Youssef - Full Stack Software engineer</title>
        <meta
          name="description"
          content="A Writer/Economist turned Full Stack Software Engineer."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            A Writer/Economist turned Full Stack Software Engineer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Mariam, an aspiring Software Engineer. After graduating with an
            Economics bachelors degree and working for about two years as a tax
            consultant I discovered my love for programming. Ever since, I have
            been working hard on becoming a full stack software engineer and
            have been loving every part of the journey.
          </p>
          <p className=" text-base text-zinc-600 dark:text-zinc-400">
            <Link
              href="/about"
              className="text-blue-600 visited:text-purple-600"
            >
              <a>Learn more about my Journey</a>
            </Link>
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
    </>
  )
}


