'use client'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = () => {
  const router = useRouter()
  return (
    <div onClick={() => router.back()} className='hover:cursor-pointer'>
      <ArrowLeft size={32} />
    </div>
  )
}

export default BackButton
