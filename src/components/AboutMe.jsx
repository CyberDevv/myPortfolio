import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FaUserAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { RiWhatsappFill, RiGithubFill, RiTwitterFill } from "react-icons/ri"
import { motion } from "framer-motion"

const aboutMeVariant = {
  initial: { x: "-100vw" },
  final: { x: 0 },
}

const summary = {
  initial: { x: "-100vw" },
  final: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      mass: 0.6,
    },
  },
}

const divider = {
  initial: {
    opacity: 0,
    y: -100,
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      mass: 0.6,
      staggerChildren: 0.3,
      when: "beforeChildren",
      delay: 1,
    },
  },
}

const links = {
  initial: {
    opacity: 0,
    y: -100,
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: "50",
    },
  },
}

const imageAnim = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: { delay: 1.5, staggerChildren: 0.3, when: "beforeChildren" },
  },
}

const imageVarinat = {
  initial: { opacity: 0 },
  final: { opacity: 1 },
}

const imageParentVarinat = {
  initial: { opacity: 0 },
  final: {
    opacity: 1,
    transition: { staggerChildren: 0.3, when: "beforeChildren" },
  },
}

const AboutMe = () => {
  return (
    <motion.div
      className="lg:flex lg:justify-between lg:items-center"
      variants={aboutMeVariant}
    >
      {/* Details*/}

      <div className="lg:w-1/2 divide-y-2 divide-opacity-20 divide-gray-100">
        {/*ANCHOR Summary */}

        <motion.h3
          className="mt-8 text-xs sm:text-sm tracking-widest leading-loose font-roboto"
          variants={summary}
        >
          I am a Front-End developer with more than 3+ years of experience in
          building websites and web applications. I specialize in JavaScript and
          have professional experience working with ReactJS and APIs to create
          functional, aesthetic websites that users can interact with. I also
          have experience working with TailwindCSS, JQuery, GatsbyJS and also
          NodeJS. You can checkout some of my projects.
        </motion.h3>

        {/* ANCHOR Links */}

        <motion.div
          className="mt-8 grid sm:grid-cols-2 gap-4 pt-8 font-roboto text-xs sm:text-sm"
          variants={divider}
        >
          <motion.h4 className="flex items-center" variants={links}>
            <FaUserAlt className="text-base" />:
            <span className="ml-2">Ibrahim Odesola</span>
          </motion.h4>

          {/* Email */}
          <motion.h4 className="flex items-center" variants={links}>
            <MdEmail className="text-lg" />:
            <a
              className="ml-2"
              href="mailto:tocyberdevv@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              tocyberdevv@gmail.com
            </a>
          </motion.h4>

          {/* Whatsapp */}
          <motion.h4 className="flex items-center" variants={links}>
            <RiWhatsappFill className="text-lg" />:
            <a
              className="ml-2"
              href="https://wa.me/2348072534558?text=Hello!"
              target="_blank"
              rel="noopener noreferrer"
            >
              +2348072534558
            </a>
          </motion.h4>

          {/* github */}
          <motion.h4 className="flex items-center" variants={links}>
            <RiGithubFill className="text-lg" />:
            <a
              className="ml-2"
              href="https://github.com/CyberDevv"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/CyberDevv
            </a>
          </motion.h4>

          {/* Twitter */}
          <motion.h4 className="flex items-center" variants={links}>
            <RiTwitterFill className="text-lg" />:
            <a
              className="ml-2"
              href="https://twitter.com/CyberDevv"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter.com/CyberDevv
            </a>
          </motion.h4>
        </motion.div>
      </div>

      {/* ANCHOR Images Section */}

      <motion.div className="lg:w-1/2 mt-32 lg:mt-0" variants={imageAnim}>
        <div>
          <div className="relative flex justify-center items-center">
            <motion.div variants={imageVarinat}>
              <StaticImage
                src="../images/myImage.jpeg"
                alt="myImage"
                className="rounded-full myIMage h-60 w-60 xl:h-80 xl:w-80"
                placeholder="tracedSVG"
              />
            </motion.div>

            {/* InnerCircle */}
            <motion.div
              class="absolute innerCircle"
              variants={imageParentVarinat}
            >
              {/* ANCHOR ReactJS */}
              <motion.i
                className="planetCircle -left-4 lg:-left-6"
                variants={imageVarinat}
              >
                <svg
                  preserveAspectRatio="xMidYMid"
                  version="1.1"
                  viewBox="0 0 256 230"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m0.75412 114.75c0 19.214 18.762 37.152 48.343 47.262-5.907 29.738-1.0586 53.706 15.135 63.046 16.646 9.5991 41.444 2.9545 64.98-17.619 22.943 19.743 46.131 27.513 62.31 18.147 16.629-9.627 21.688-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.5349-31.933 0.9977-55.32-15.867-65.045-16.259-9.3757-39.716-1.2038-62.996 19.057-24.219-21.505-47.445-28.07-64.293-18.317-16.243 9.4023-20.878 33.806-14.952 64.095-28.582 9.9653-48.343 26.57-48.343 45.263z"
                    fill="#fff"
                  />
                  <path
                    d="m201.02 79.674c-2.344-0.80681-4.7729-1.5702-7.2738-2.2921 0.41105-1.6776 0.78831-3.3334 1.1237-4.9611 5.5061-26.727 1.906-48.259-10.387-55.348-11.788-6.7976-31.065 0.28999-50.535 17.234-1.8722 1.6293-3.7497 3.3543-5.6264 5.1622-1.2504-1.1961-2.4989-2.3521-3.7441-3.4577-20.405-18.117-40.857-25.752-53.139-18.643-11.776 6.8173-15.264 27.059-10.308 52.389 0.47862 2.4466 1.0381 4.945 1.6707 7.4853-2.8946 0.82169-5.6891 1.6977-8.3629 2.6296-23.922 8.3404-39.2 21.412-39.2 34.97 0 14.003 16.401 28.049 41.318 36.566 1.9664 0.67208 4.0067 1.3076 6.1094 1.9108-0.68253 2.7474-1.2762 5.4397-1.7745 8.0657-4.7258 24.89-1.0353 44.654 10.71 51.428 12.132 6.9959 32.492-0.19507 52.317-17.525 1.567-1.3699 3.1396-2.8226 4.715-4.3454 2.042 1.9664 4.0807 3.8273 6.1086 5.5729 19.203 16.525 38.17 23.198 49.904 16.405 12.119-7.016 16.058-28.247 10.945-54.078-0.39054-1.9728-0.84502-3.9882-1.3554-6.0394 1.4298-0.42271 2.8335-0.8591 4.2022-1.3128 25.904-8.5825 42.757-22.457 42.757-36.648 0-13.608-15.771-26.767-40.175-35.168z"
                    fill="#53C1DE"
                  />
                  <path
                    d="m195.41 142.33c-1.2356 0.40904-2.5033 0.8044-3.7952 1.1877-2.8596-9.0531-6.7191-18.68-11.442-28.626 4.507-9.7091 8.2173-19.213 10.997-28.207 2.3114 0.66886 4.5549 1.3743 6.7167 2.1188 20.91 7.1982 33.664 17.841 33.664 26.041 0 8.735-13.775 20.074-36.14 27.485zm-9.2804 18.389c2.2612 11.422 2.5841 21.749 1.0863 29.822-1.3458 7.2541-4.0522 12.091-7.3985 14.028-7.1209 4.1217-22.349-1.236-38.772-15.368-1.8827-1.6201-3.7791-3.3499-5.6815-5.1807 6.3668-6.9633 12.73-15.058 18.94-24.049 10.923-0.9693 21.243-2.554 30.602-4.7174 0.46092 1.8594 0.87036 3.6829 1.2231 5.4659zm-93.849 43.137c-6.9572 2.457-12.498 2.5274-15.848 0.59606-7.1274-4.1109-10.09-19.979-6.0487-41.265 0.46293-2.4377 1.0139-4.9418 1.649-7.5014 9.2562 2.0468 19.501 3.5196 30.45 4.4073 6.2522 8.7973 12.799 16.884 19.397 23.964-1.4415 1.3916-2.8773 2.7165-4.3051 3.9649-8.7667 7.6631-17.552 13.1-25.294 15.835zm-32.594-61.58c-11.018-3.7658-20.117-8.6602-26.354-14.001-5.6042-4.7994-8.4337-9.5643-8.4337-13.431 0-8.2278 12.267-18.722 32.725-25.855 2.4824-0.86553 5.081-1.6812 7.7777-2.4474 2.8275 9.1975 6.5365 18.814 11.013 28.538-4.534 9.8684-8.2958 19.638-11.151 28.943-1.9225-0.55262-3.7851-1.1342-5.5773-1.7464zm10.926-74.371c-4.2464-21.702-1.4262-38.073 5.6706-42.181 7.5593-4.3763 24.275 1.8634 41.893 17.507 1.1262 0.99987 2.2567 2.0464 3.3905 3.1291-6.5651 7.0494-13.052 15.075-19.249 23.82-10.627 0.98499-20.799 2.5672-30.152 4.686-0.58802-2.3653-1.1089-4.6892-1.5533-6.9613zm97.467 24.067c-2.2358-3.8619-4.5312-7.6325-6.8712-11.3 7.2094 0.91138 14.117 2.1212 20.603 3.6017-1.9475 6.2413-4.3747 12.767-7.232 19.457-2.0496-3.8913-4.2175-7.8147-6.5003-11.758zm-39.747-38.714c4.4523 4.8236 8.9111 10.209 13.297 16.052-4.4194-0.20874-8.8934-0.31734-13.405-0.31734-4.4684 0-8.9095 0.10618-13.302 0.3113 4.39-5.7889 8.8874-11.167 13.409-16.046zm-40.002 38.78c-2.2334 3.8728-4.361 7.7749-6.3785 11.684-2.811-6.6665-5.2157-13.222-7.1801-19.552 6.4469-1.4427 13.322-2.6223 20.485-3.5164-2.373 3.7014-4.6872 7.4998-6.9267 11.383v8.044e-4zm7.133 57.683c-7.4013-0.82572-14.379-1.9446-20.825-3.3475 1.9957-6.4428 4.4536-13.138 7.3241-19.948 2.0227 3.9066 4.1587 7.8103 6.4058 11.692h4.021e-4c2.2889 3.954 4.6603 7.8272 7.0944 11.604zm33.136 27.389c-4.575-4.9362-9.1384-10.396-13.595-16.27 4.3265 0.16973 8.7374 0.2566 13.22 0.2566 4.6056 0 9.1585-0.10377 13.64-0.30326-4.4001 5.9791-8.8428 11.448-13.265 16.316zm46.072-51.031c3.0201 6.8836 5.566 13.544 7.5875 19.877-6.5514 1.4946-13.625 2.6984-21.078 3.5928 2.3456-3.7171 4.6611-7.5525 6.9363-11.498 2.3018-3.9914 4.4873-7.9889 6.5538-11.972zm-14.915 7.1499c-3.5321 6.1243-7.1583 11.971-10.84 17.489-6.7051 0.47942-13.632 0.72637-20.692 0.72637-7.0317 0-13.871-0.2184-20.458-0.64593-3.8297-5.591-7.5348-11.455-11.044-17.517h8.044e-4c-3.5003-6.0459-6.722-12.143-9.6411-18.206 2.9184-6.0768 6.1315-12.181 9.6118-18.216l-8.044e-4 0.0012066c3.4895-6.0511 7.162-11.886 10.956-17.442 6.72-0.50798 13.611-0.77303 20.575-0.77303h4.02e-4c6.9955 0 13.895 0.26706 20.613 0.77946 3.7364 5.5154 7.384 11.332 10.887 17.383 3.543 6.1199 6.7976 12.183 9.7409 18.13-2.9344 6.0487-6.1818 12.173-9.7091 18.29zm19.912-107.79c7.5666 4.3635 10.509 21.961 5.7551 45.037-0.30326 1.4725-0.64472 2.9723-1.0156 4.4922-9.3745-2.163-19.554-3.7726-30.212-4.7725-6.2088-8.8416-12.643-16.88-19.101-23.838 1.7363-1.6703 3.4702-3.263 5.1968-4.7661 16.682-14.517 32.273-20.249 39.377-16.153z"
                    fill="#fff"
                  />
                  <path
                    d="m128.22 94.665c11.143 0 20.177 9.0334 20.177 20.177 0 11.143-9.0338 20.177-20.177 20.177s-20.177-9.0338-20.177-20.177c0-11.144 9.0338-20.177 20.177-20.177"
                    fill="#53C1DE"
                  />
                </svg>
              </motion.i>

              {/* ANCHOR Github */}
              <motion.img
                variants={imageVarinat}
                className="planetCircle -right-4 lg:-right-6"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="
                alt="github"
              />
            </motion.div>

            {/* OuterCircle */}
            <motion.div
              class="absolute outerCircle flex-col"
              variants={imageParentVarinat}
            >
              <div className="flex justify-between items-center w-full">
                {/*ANCHOR TailwindCSS */}
                <motion.i
                  className="planetCircle -left-4 lg:-left-6 p-1"
                  variants={imageVarinat}
                >
                  <svg
                    preserveAspectRatio="xMidYMid"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 153.6"
                  >
                    <linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%">
                      <stop offset="0" stop-color="#2298bd" />
                      <stop offset="1" stop-color="#0ed7b5" />
                    </linearGradient>
                    <path
                      d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
                      fill="url(#a)"
                    />
                  </svg>{" "}
                </motion.i>

                {/* ANCHOR Redux */}
                <motion.i
                  className="planetCircle -right-4 lg:-right-6 p-1"
                  variants={imageVarinat}
                >
                  <svg viewBox="0 0 100 100">
                    <g fill="#764ABC">
                      <path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z" />
                      <path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z" />
                      <path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z" />
                    </g>
                  </svg>
                </motion.i>
              </div>

              <div className="flex justify-between items-center w-full transform rotate-90">
                {/* ANCHOR NodeJS */}
                <motion.i
                  className="planetCircle -left-8 lg:-left-14 p-1"
                  variants={imageVarinat}
                >
                  <svg
                    viewBox="0 0 256 282"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin meet"
                  >
                    <g fill="#8CC84B">
                      <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />
                      <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
                    </g>
                  </svg>
                </motion.i>

                {/*ANCHOR Gatsby */}
                <motion.i className="planetCircle" variants={imageVarinat}>
                  <svg
                    enable-background="new 0 0 2500 2500"
                    viewBox="0 0 2500 2500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m1250 0c-690.4 0-1250 559.6-1250 1250s559.6 1250 1250 1250 1250-559.6 1250-1250-559.6-1250-1250-1250zm-981.4 1263 968.4 968.4c-531.8-6.9-961.5-436.6-968.4-968.4zm1201.1 943.9-1176.6-1176.6c99.8-436.3 490.3-761.9 956.9-761.9 326.1 0 615.1 159.1 793.6 403.9l-135.9 119.9c-144.8-207.6-385.4-343.5-657.7-343.5-346.7 0-642 220.2-753.6 528.4l1026.5 1026.4c249.3-90.3 441-300.7 505.2-561.3h-425.4v-192.2h629c-.1 466.6-325.7 857.1-762 956.9z"
                      fill="#744c9e"
                    />
                  </svg>
                </motion.i>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AboutMe
