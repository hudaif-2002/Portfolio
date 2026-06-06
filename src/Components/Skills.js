import React from 'react';
import { FaReact, FaGitAlt, FaGithub, FaDocker, FaHtml5, FaCss3, FaDatabase } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { SiMicrosoftazure, SiBlazor, SiCsharp, SiDotnet } from "react-icons/si";
import { GrActions } from "react-icons/gr";
import { VscAzure } from "react-icons/vsc";

const Skills = ({ skill }) => {
  const icon = {
    Csharp: <SiCsharp />,
    DotNet: <SiDotnet />,
    Azure: <SiMicrosoftazure />,
    PostgreSQL: <DiPostgresql />,
    EFCore: <FaDatabase />,
    Docker: <FaDocker />,
    GitHubActions: <FaGithub />,
    Blazor: <SiBlazor />,
    React: <FaReact />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
  };

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill] || <span>{skill}</span>}
    </div>
  );
};

export default Skills;