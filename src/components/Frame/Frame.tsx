import { motion, MotionStyle } from 'framer-motion'
import React, { Fragment, ReactNode } from 'react'

import style from './Frame.module.css'

interface Props {
  children: ReactNode
  animations?: MotionStyle
  label: string
}

const Frame = (props: Props) =>
  <Fragment>
    <motion.div
      className={style.frame}
      style={props.animations}>

      <a
        href={`#${props.label}`}
        className={style.label}>

        {props.label}
      </a>

      {props.children}
    </motion.div>

    <div id={props.label} className={style.space} />
    <div className={style.space} />
  </Fragment>

export default Frame
