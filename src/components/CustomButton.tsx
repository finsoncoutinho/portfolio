'use client'
import { ReactNode } from 'react'
import { Button } from './ui/button'

const CustomButton = ({
  children,
  url,
  classname,
  altText,
}: {
  children: ReactNode
  url: string
  altText: string
  classname?: string
}) => {
  return (
    <Button
      onClick={() => {
        window.open(url, '_blank')
      }}
      className={classname}
      aria-label={altText}
    >
      {children}
    </Button>
  )
}

export default CustomButton
