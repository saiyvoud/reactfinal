import { Cached } from '@mui/icons-material'
import React from 'react'

const Loading = ({show, className}) => {
  return (
    (show && (
        <div className={className}>
            <div className="w-full flex justify-center">
                <Cached className="h-6 w-6 animate-spin"></Cached>
            </div>
        </div>
    ))
  )
}

export default Loading