/* eslint max-len: ["error", { "code": 400 }] */
/* eslint-disable */
import React from 'react';
import {Title, HomeWrapper, STitle, TextContainer, STitle1} from '../About/About.style';
import ChatGpt from '../../icons/gptnew.png';
import Gool from '../../icons/gool.png';
import Zoom from '../../icons/zoom.webp';
import Jira from '../../icons/jira.png';
import GitHub from '../../icons/github.png';
import Qase from '../../icons/qase.png';
import StackOverFlow from '../../icons/stackoverflow.png';
import Translate from '../../icons/trans.png';
import Discord from '../../icons/Discord.png';
import Symbolab from '../../icons/favicon.png';
import Desmos from '../../icons/desmos_icon_square.png';
import Wikipedia from '../../icons/Wikipedia.png';
import Rapid from '../../icons/rapid.jpeg';
import CircleCi from '../../icons/circleci.png';
import Render from '../../icons/render.png';
import Compilers from '../../icons/compilers.png';
import Scholar from '../../icons/scholar.png';

export default function Tools() {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#0d1116' }}>
      <br />
      <br />
      <br />
      <br />
      <Title>General</Title>
      <br />
      <a href="https://openai.com/blog/chatgpt">
      <img src={ChatGpt} alt="ChatGpt" title="Chatbot GPT (Generative Pre-trained Transformer) is a language model developed by OpenAI. It is designed to generate human-like responses in conversational contexts. GPT-based models, such as ChatGPT, utilize deep learning techniques to understand and generate human-like text based on the input received." style={{ width: 100, height: 100, margin: 30 }} />
      </a>
      <a href="https://www.gool.co.il/">
      <img src={Gool} alt="Gool" title="The site contains online courses in dozens of subjects in the fields of mathematics, statistics and probability, physics, chemistry, scientific computers, economics, business administration, finance, accounting and more." style={{ width: 100, height: 100, margin: 30 }} />
      </a>
      <a href="https://translate.google.com/?hl=iw">
      <img src={Translate} alt="Translate" title="Google Translate is a widely used online translation service developed by Google. It allows users to translate text, documents, websites, and even speech between different languages." style={{ width: 100, height: 100, margin: 20 }} />
      </a>
      <a href="https://www.wikipedia.org/">
      <img src={Wikipedia} alt="Wikipedia" title="Wikipedia is a free, web-based encyclopedia that allows users to create, edit, and collaborate on articles covering a wide range of topics. It is one of the largest and most popular reference websites on the internet, serving as a valuable source of general knowledge and information." style={{ width: 100, height: 100, margin: 30 }} />
      </a>  
      <a href="https://scholar.google.com/">
      <img src={Scholar} alt="Scholar" title="Google Scholar is a web search engine specifically designed to search for scholarly literature, including articles, theses, books, conference papers, and preprints across various disciplines. It allows users to access a wide range of academic resources and research publications." style={{ width: 150, height: 100, margin: 30 }} />
      </a>
      <br />
      <br />
      <br />
      <br />
      <Title>Math</Title>
      <br />
      <a href="https://he.symbolab.com/">
      <img src={Symbolab} alt="Symbolab" title="Symbolab is an advanced math education tool. It allows users to learn, practice and discover math topics using mathematical symbols and scientific notations as well as text. Symbolab provides automated step by step solutions to algebraic, trigonometric and calculus topics covering from middle school through college. Symbolab offers a wealth of smart calculators including: equations, simultaneous equations, inequalities, integrals, derivatives, limits , tangent line, trigonometric equations, functions and more. The stated goal of the site is to make scientific content universally accessible by expanding the searchable data space onto scientific notations, expressions, equations and formulas. This is done by applying proprietary machine learning algorithms in order to understand the meaning and context of the queries. Symbolab, making math simpler." style={{ width: 100, height: 100, margin: 20 }} />
    </a>
    <a href="https://www.desmos.com/">
      <img src={Desmos} alt="Desmos" title="Desmos is a powerful online graphing calculator and educational tool that allows users to visualize and explore mathematical concepts. It provides a user-friendly interface that enables students, teachers, and math enthusiasts to plot graphs, create animations, analyze data, and solve equations." style={{ width: 100, height: 100, margin: 20 }} />
    </a>
    <a href="https://www.rapidtables.com/calc/math/binary-calculator.html">
      <img src={Rapid} alt="Rapid" title="Math calculators." style={{ width: 150, height: 100, margin: 30 }} />
    </a>   
    <br />
    <br />
    <br />
    <br />
    <Title>Software</Title>    <br />
    <a href="https://stackoverflow.com/">
      <img src={StackOverFlow} alt="StackOverFlow" title="Stack Overflow is a popular question and answer website that focuses on programming and software development topics. It serves as a community-driven platform where developers can ask questions, provide answers, and engage in discussions related to programming, coding, and technology." style={{ width: 100, height: 100, margin: 20 }} />
    </a>
    <a href="https://www.atlassian.com/software/jira">
      <img src={Jira} alt="Jira" title="Jira is a widely used project management and issue tracking tool developed by Atlassian. It is designed to help teams plan, track, and manage their work efficiently." style={{ width: 100, height: 100, margin: 30 }} />
    </a>
    <a href="https://qase.io/">
      <img src={Qase} alt="Qase" title="Qase is a website that provides test management and quality assurance tools for software development teams. It offers a platform to organize, track, and manage software testing activities efficiently." style={{ width: 100, height: 100, margin: 30 }} />
    </a>
    <a href="https://github.com/">
      <img src={GitHub} alt="GitHub" title="GitHub is a web-based platform that provides a version control system and collaboration tools for software development projects. It allows developers to host their code repositories, manage versions of their projects, and collaborate with others through features like pull requests and issue tracking." style={{ width: 100, height: 100, margin: 30 }} />
    </a>
    <a href="https://circleci.com/">
      <img src={CircleCi} alt="Circlrci" title="CircleCI is a web-based platform that provides continuous integration and delivery (CI/CD) services for software development teams. It offers automation tools and infrastructure to build, test, and deploy applications efficiently." style={{ width: 100, height: 100, margin: 20 }} />
    </a>
    <a href="https://render.com/">
      <img src={Render} alt="Render" title="Render is a web hosting platform that offers a scalable and simplified solution for deploying and managing web applications, APIs, and static sites. It aims to provide developers with an intuitive and efficient hosting experience." style={{ width: 120, height: 100, margin: 20 }} />
    </a>
    <a href="https://www.codingninjas.com/codestudio/online-compiler">
      <img src={Compilers} alt="Compilers" title="c,c++,python,java and more online compilers." style={{ width: 170, height: 100, margin: 30 }} />
    </a>    
    <br />
    <br />
    <br />
    <br />
    <Title>Online learning in groups</Title>    <br />
    <a href="https://zoom.us/">
      <img src={Zoom} alt="Zoom" title="Zoom is a popular video conferencing and collaboration platform that allows users to conduct online meetings, webinars, and virtual events. It provides a range of features and tools for remote communication and collaboration." style={{ width: 100, height: 100, margin: 30 }} />
      </a>
    <a href="https://discord.com/">
      <img src={Discord} alt="Discord" title="Discord is a popular communication platform designed for creating communities and facilitating real-time communication. It allows users to connect with others through voice, video, and text channels. While initially targeted towards gamers, Discord has expanded to serve a wide range of communities and interests." style={{ width: 100, height: 100, margin: 30 }} />
    </a>
    </div>
 );
}