import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositories on github</Title>
      <Form>
        <input placeholder="Type here" />
        <button type="submit">Search</button>
      </Form>
      <Repositories>
        <a href="https://github.com/recofka/waste-point-web">
          <img
            src="https://avatars0.githubusercontent.com/u/22827350?s=460&u=85b1413e88d5a645a375885936e29810faba1a3d&v=4"
            alt="Denise Recofka"
          />
          <div>
            <strong>recofka / waste-point-web</strong>
            <p>React project with typescript</p>
          </div>
          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
