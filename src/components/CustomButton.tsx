'use client'
import { ReactNode } from 'react'
import { Button } from './ui/button'

const CustomButton = ({
  children,
  url,
  classname,
}: {
  children: ReactNode
  url: string
  classname: string
}) => {
  return (
    <Button
      onClick={() => {
        window.location.href = url
      }}
      className={classname}
    >
      {children}
    </Button>
  )
}

export default CustomButton
