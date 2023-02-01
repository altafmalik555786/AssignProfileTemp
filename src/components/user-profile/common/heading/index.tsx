import React from 'react'
import style from './style.module.scss'
import classNames from 'classnames'


export interface HeadingPropsTypes {
  heading?: string;
  className?: string;

}

const Heading = ({ heading, className }: HeadingPropsTypes) => {
  return (
    <h2 className={classNames(style.profileHeadngText, className)} >
      {heading || ''}
    </h2>
  )
}

export default Heading
