import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'

const CommentCard = ({comment}) => {
  return (
    <Card>
        <CardHeader>
           <h1 className="text-xl font-semibold"> Comment - @{comment.user}</h1>
        </CardHeader>
        <CardContent>
            {comment.desc}
        </CardContent>
    </Card>
  )
}

export default CommentCard