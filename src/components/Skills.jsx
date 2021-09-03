import React from 'react'
import Skill from './Skill'

const Skills = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-x-32 my-8">
      <Skill skill="Html5" progress="97" className="w-97%" />
      <Skill skill="CSS3" progress="95" className="w-95%" />
      <Skill skill="Javascript" progress="90" className="w-90%" />
      <Skill skill="TypeScript" progress="50" className="w-2/4" />
      <Skill skill="TailwindCSS" progress="100" className="w-full" />
      <Skill skill="NodeJS" progress="70" className="w-70%" />
      <Skill skill="ReactJS" progress="87" className="w-87%" />
      <Skill skill="GatsbyJS" progress="87" className="w-87%" />
      <Skill skill="Git" progress="88" className="w-88%" />
      <Skill skill="Communication" progress="90" className="w-90%" />
    </div>
  )
}

export default Skills
