import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavbarComponent from "../components/Navbar"
import { IoBriefcase, IoSchoolOutline } from "react-icons/io5"

import { motion } from "framer-motion"
import { ToastContainer } from 'react-toastify'
import UserProfile from '../components/UserProfile'

import 'react-toastify/dist/ReactToastify.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kiattisak Beaw Sanburee | Professional Profile</title>
        <meta name="description" content="Hello, My name is Kiattisak. I'm a blockchain expert, and I can write Typescript Golang Python SQL and use Docker." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon/kiattisak-x192.png" />
        <meta name="theme-color" content="#151019" />
        <meta name="keywords" content="Beaw, Kiattisak, Sanburee"></meta>
      </Head>

      <NavbarComponent/>

      <main>
        <ToastContainer position="top-center" />

        <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
          <div className="block text-center mb-8 space-y-3 lg:hidden">
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
              <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Hey, I&apos;m Kiattisak S.</h1>
              <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">About me</p>
            </div>

            <UserProfile />

            <dl className="mt-4 text-xs font-medium flex flex-col justify-center items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
              <dt className="sr-only">Reviews</dt>
              <dd className="text-rose-600 flex items-center dark:text-rose-400">
                <svg width="20" height="20" className="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <title>School</title>
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M32 192L256 64l224 128-224 128L32 192z"/>
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M112 240v128l144 80 144-80V240M480 368V192M256 320v128"/>
                </svg>
                <span>Assumption College Rayong</span>
              </dd>

              <dt className="sr-only">Location</dt>
              <dd className="flex items-center text-white hover:text-slate-400" onClick={() => window.open("https://tellyou.network")}>
                <IoBriefcase size={20} className="mr-2"/>
                
                Founder at TellYou.Network
              </dd>
            </dl>

            <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
              I&apos;m a blockchain expert, and I can write Typescript Golang Python SQL and use Docker.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
              <h1 className="opacity-0 lg:opacity-100 mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Hey, I&apos;m Kiattisak S.</h1>
              
              <p className="opacity-0 lg:opacity-100 text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">About me</p>
            </div>

            <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
              <img src="/certs/6.png" alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-12" loading="lazy"/>
              <img src="/certs/2.png" alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-6 lg:h-32" loading="lazy"/>
              <img src="/certs/3.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-10 lg:h-32" loading="lazy"/>
              <img src="/certs/4.png" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-8 lg:h-32" loading="lazy"/>
              <img src="/certs/1.jpg" alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-12" loading="lazy"/>
              <img src="/certs/5.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-8 lg:h-32" loading="lazy"/>
              <img src="/certs/7.jpeg" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-3 lg:col-span-8 lg:h-32" loading="lazy"/>
              <img src="/certs/8.png" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-3 lg:col-span-10 lg:h-32" loading="lazy"/>
              <img src="/certs/9.png" alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-8" loading="lazy"/>
              <img src="/certs/11.png" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-3 lg:col-span-8 lg:h-32" loading="lazy"/>
              <img src="/certs/12.png" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-4 lg:col-span-12 lg:h-36" loading="lazy"/>
              <img src="/certs/10.png" alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-4 md:col-span-2 lg:col-span-10 lg:h-40" loading="lazy"/>
            </div>
            
            <dl className="hidden mt-4 text-xs font-medium lg:flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
              <dt className="sr-only">Reviews</dt>
              <dd className="text-rose-600 flex items-center dark:text-rose-400">
                <IoSchoolOutline size={20} className="mr-2" />
                <span>Assumption College Rayong</span>
              </dd>

              <dt className="sr-only">Founder</dt>
              <dd className="flex items-center text-white">
                <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                  <circle cx="1" cy="1" r="1" />
                </svg>

                <IoBriefcase size={20} className="mr-2"/>
                
                Founder at TellYou.Network
              </dd>
            </dl>

            <div className="hidden lg:block mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
              <UserProfile />
            </div>
            
            <p className="hidden lg:block mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
            I&apos;m a blockchain expert, and I can write Typescript Golang Python SQL and use Docker.
            </p>
          </div>
        </div>

        <div className="fixed bottom-2 flex w-full h-[4.25rem] px-2 sm:px-24 justify-center">
          <div className="h-full w-full max-w-[208px] sm:max-w-[428px] rounded-2xl bg-white/50 backdrop-blur-md flex p-2 pr-4 sm:pr-2 space-x-2">
            <motion.div 
              className="hidden sm:flex items-center justify-center h-full w-[52px] bg-[#00313D] rounded-xl"
              whileHover={{ scale: 1.36, y: -13 }}
              whileTap={{ scale: 0.77 }}  
              onClick={() => window.open("https://go.dev")}
            >
              <Image src="/assets/golang-vector.svg" width={32} height={32} alt="Golang"/>
            </motion.div>

            <motion.div 
              className="hidden sm:flex  items-center justify-center h-full w-[52px] bg-[#0B1823] rounded-xl"
              whileHover={{ scale: 1.36, y: -13 }}
              whileTap={{ scale: 0.77 }}  
              onClick={() => window.open("https://www.python.org")}
            >
              <Image src="/assets/python-vector.svg" width={32} height={32} alt="Python"/>
            </motion.div>

            <motion.div
              className="hidden sm:flex  items-center justify-center h-full w-[52px] bg-[#051B3B] rounded-xl"
              whileHover={{ scale: 1.36, y: -13 }}
              whileTap={{ scale: 0.77 }}
              onClick={() => window.open("https://en.wikipedia.org/wiki/Blockchain")}  
            >
              <Image src="/assets/blockchain-image.png" width={32} height={32} alt="SQL"/>
            </motion.div>

            <motion.div
              className="hidden sm:flex  items-center justify-center h-full w-[52px] bg-[#181303] rounded-xl"
              whileHover={{ scale: 1.36, y: -13 }}
              whileTap={{ scale: 0.77 }} 
              onClick={() => window.open("https://en.wikipedia.org/wiki/SQL")}
            >
              <Image src="/assets/database-vector.svg" width={32} height={32} alt="SQL"/>
            </motion.div>

            <motion.div
              className="flex items-center justify-center h-full w-[52px] bg-[#0B0B0B] rounded-xl"
              whileHover={{ scale: 1.36, y: -13 }}
              whileTap={{ scale: 0.77 }}  
              onClick={() => window.open("https://github.com/beawy7")}
            >
              <Image src="/assets/github-vector.webp" className="rounded-xl" width={52} height={52} alt="Facebook"/>
            </motion.div>

            <motion.div
              className="flex items-center justify-center h-full w-[52px] bg-[#0168E0] rounded-xl"
              whileHover={{ scale: 1.36, y: -13 }}
              whileTap={{ scale: 0.77 }}  
              onClick={() => window.open("https://www.facebook.com/kiattisakbeawsanburee")}
            >
              <Image src="/assets/facebook-vector.webp" className="rounded-xl" width={52} height={52} alt="Github"/>
            </motion.div>

            <motion.div
              className="flex items-center justify-center h-full w-[52px] bg-[#0A66C2] rounded-xl"
              whileHover={{ scale: 1.36, y: -13 }}
              whileTap={{ scale: 0.77 }}
              onClick={() => window.open("https://th.linkedin.com/in/kiattisakbeaw")}
            >
              <Image src="/assets/linkedin-vector.webp" className="rounded-xl" width={52} height={52} alt="LinkedIn"/>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
