import React from 'react';
import { useSelector } from 'react-redux';

const AboutMe: React.FC = () => {
  const globalMessage: string = useSelector(({globalMessage}: {globalMessage: string}) => globalMessage);
  return (
    <div>
      <h1>About Me</h1>
      <span>{globalMessage}</span>
    </div>
  );
};

export default AboutMe;
