import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const icons = [
  {name: "HTML5", src:"/icons/html.svg", alt:"html Logo" }, 
  {name: "CSS3", src:"/icons/css.svg", alt:"CSS Logo" }, 
  {name: "javascript", src:"/icons/javascript.svg", alt:"javascript Logo" }, 
  {name: "bootstrap", src:"/icons/bootstrap.svg", alt:"CSbootstrapS Logo" }, 
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
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        /> */}
      </Head>
      <SimpleLayout title="Skill and technologies I used to create projects."></SimpleLayout>
      <Container className="mt-9">
        {/* <FontAwesomeIcon icon="fa-brands fa-html5" /> */}
        {/* <i className="fa-brands fa-html5" ></i>
        <i className="fa-brands fa-css3-alt"></i> */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
      {icons.map((icon) => (
        <div key={Math.random()}>
          <div className=" flex items-center space-x-3 rounded-lg px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 ">
          <div className="box-icon">
            <img src={icon.src} alt={icon.alt}/>
            <p>{icon.name}</p>
          </div>
          </div>
          
        </div>
      ))}
    </div>
      </Container>
    </>
  )
}
