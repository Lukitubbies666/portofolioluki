import { useEffect } from 'react';
import './App.css';
import fotoluki from './assets/fotodepan.jpg'
import project1 from './assets/project1.jpg'
import project2 from './assets/project2.jpg'
import pdf from './assets/CV.pdf';
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {FaPalette} from 'react-icons/fa'
import { themeChange } from 'theme-change';


function App() {
  useEffect(() => {
    themeChange(false)
    console.log('App component mounted or updated');
  }, []);
  return (
    <>
    <div>

      <div className="bg-base-100 sticky inset-x-0 w-full top-0 z-[9999] navbar  shadow-lg rounded-md">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Luki Viali</a>
        </div>

        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <div title="Theme" className="dropdown dropdown-end ">
              <div tabIndex={0} className="btn gap-2 normal-case btn-ghost">
                <FaPalette/>
              </div>
              <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px overflow-y-auto shadow-2xl mt-16">
                <ul className="menu menu-compact p-4" tabIndex={0}>
                    <li>
                      <button data-set-theme="light" data-act-classname="active" className="">
                          Light
                      </button>
                    </li>
                    <li>
                      <button data-set-theme="dark" data-act-classname="active">
                          Dark
                      </button>
                    </li>
                    <li>
                      <button data-set-theme="night" data-act-classname="active">
                          Night
                      </button>
                    </li>
                </ul>
              </div>
            </div>
            </ul>
        </div>
      </div>

      {/* HERO */}
      <div className="hero bg-base-200 min-h-screen z-0  px-4 lg:px-24 xl:px-44">
        <div className="hero bg-base-200">
          <div className="hero-content mb-12 flex-col items-center lg:mt-28 lg:flex-row-reverse gap-4">
            <img src={fotoluki} className="rounded-lg object-contain mt-16 w-9/12 sm:w-7/12  md:w-4/12 lg:mt-0" />
            <div>
              <h1 className="text-5xl font-bold text-accent">Hi, I'm Luki!</h1>
              <p className="py-6">
              I'm a programmer with a communication studies education background. 
              With a combination of technical abillity and creative problem-solving, 
              I deliver user-friendly solutions to enhance projects.
              </p>

              <p className="py-6">
                Click the button to see my resume!
              </p>
              <a href={pdf} target="_blank" rel="noreferrer" className="btn btn-primary">
                Resume Button
              </a>
            </div>
          </div>
        </div>
      </div>

      <h2
          id="Projects"
          className="text-4xl font-bold flex justify-center my-4"
        >
          Featured Projects
      </h2>
        <div className="flex justify-center mx-12">
          <p>
            All projects here are in progress
          </p>
        </div>

      {/* FEATURED PROJECTS */}
        <div className="flex justify-center flex-wrap my-8 mx-6 md:gap-6">
          <img
            className="object-cover rounded-2xl w-full cursor-pointer sm:w-6/12 md:w-4/12"
            src={project2}
            alt='project1'
          />
          <div className="shadow-md flex flex-col rounded-2xl justify-around gap-8 p-6 bg-base-300 sm:w-6/12 md:w-6/12 md:gap-2  ">
            <a href="" target="_blank" rel="noreferrer">
              <h3 className="stat-value">Redoura</h3>
            </a>
            <div className="flex gap-2 flex-wrap">
                  <div className="badge badge-primary text-lg p-3">
                    CodeIgniter
                  </div>
                  <div className="badge badge-primary text-lg p-3">
                    MySQL
                  </div>
                  <div className="badge badge-secondary text-lg p-3">
                    Microsoft Excel
                  </div>
                  <div className="badge badge-accent text-lg p-3">
                    Bootstrap
                  </div>
            </div>

            <div className="my-4">
            This insurance services project is a current job that I'm working on. 
            The project aims to create a system to make the client easier to processing data, from importing, changing policy status, etc.
            </div>

            <div className="flex gap-2">
              <a
                className="btn btn-primary w-1/5"
                href="https://sys.redoura.com/auth/login"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
              {/* <a
                className="btn btn w-1/4"
                href=""
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a> */}
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-wrap my-8 mx-6 md:gap-6">
          <img
            className="object-cover rounded-2xl w-full cursor-pointer sm:w-6/12 md:w-4/12"
            src={project1}
            alt='project1'
          />
          <div className="shadow-md flex flex-col rounded-2xl justify-around gap-8 p-6 bg-base-300 sm:w-6/12 md:w-6/12 md:gap-2  ">
            <a href="" target="_blank" rel="noreferrer">
              <h3 className="stat-value">WSL Database 2021-22</h3>
            </a>
            <div className="flex gap-2 flex-wrap">
                  <div className="badge badge-primary text-lg p-3">
                    React
                  </div>
                  <div className="badge badge-accent text-lg p-3">
                    Node
                  </div>
                  <div className="badge badge-secondary text-lg p-3">
                    Json Server
                  </div>
                  <div className="badge badge-primary text-lg p-3">
                    TailwindCSS
                  </div>
            </div>

            <div className="my-4">
              A simple database that showing individual stats of England Women's Super League 2021-2022.
              Data gathered from fbref mostly.
            </div>

            <div className="flex gap-2">
              <a
                className="btn btn-primary w-1/5"
                href="https://wsl21-22.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
              <a
                className="btn btn w-1/4"
                href="https://github.com/Lukitubbies666/wsl-db"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        
        <h2 className="text-4xl font-bold flex justify-center my-4">
            Other Projects
        </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-6  md:mx-16 lg:mx-28">       
              <div className="card-body">
                <h2 className="card-title">
                  This Portofolio
                </h2>
                <p>
                  My current personal portofolio, coded and designed by me
                </p>
                <div className="my-4">
                  <div className="badge badge-primary badge-outline">React</div>
                  <div className="badge badge-secondary badge-outline">Tailwind</div>
                  <div className="badge badge-secondary badge-outline">DaisyUI</div>

                </div>
                <div className="card-actions justify-end">
                  <a
                    href="https://portolukivt23.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Link
                  </a>
                  <a href="https://github.com/Lukitubbies666/portofolioluki" target="_blank" rel="noreferrer" className="btn">
                    Github
                  </a>
                </div>
              </div>

              <div className="card-body">
                <h2 className="card-title">
                  Non programming projects
                </h2>
                <p>
                  I got previous non-programming stuffs before that most of it involved Adobe Creative Cloud softwares.
                </p>
                <div className="my-4">
                  <div className="badge badge-primary badge-outline">Photoshop</div>
                  <div className="badge badge-secondary badge-outline">Premiere</div>
                  <div className="badge badge-secondary badge-outline">After Effects</div>

                </div>
                <div className="card-actions justify-end">
                  <a
                    href="https://portofolioluki.netlify.app/exp4"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>

            <footer className="footer footer-center p-10 bg-primary text-primary-content">
              <div>
                <p>Copyright © 2023 - All right reserved</p>
              </div> 
              <div>
                <div className="grid grid-flow-col gap-4">
                  <a href="https://github.com/Lukitubbies666/" target="_blank" rel="noreferrer">
                  <BsGithub size={24}/>
                  </a>
                  <a href="https://www.linkedin.com/in/luki-viali-tobing-1bb669150/" target="_blank" rel="noreferrer">
                  <BsLinkedin size={24}/>
                  </a>
                </div>
              </div>
            </footer>




    </div>


    </>

  );
};

export default App;
