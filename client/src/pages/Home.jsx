import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src='./threejs.png' alt='logo' className='w-8 h-8 object-contain' />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
            <h1 className='head-text'>
              LET'S <br className='xl:block hidden' /> DO IT.
            </h1>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
            <p className="max-w-md font-normal text-gray-600 text-base">
              Create your unique and exclusive Design with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>
              <CustomButton
                type='filled'
                title='Customize It'
                handleClick={() => state.intro=false}
                customStyles="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              />
            </motion.div>
          </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home