import React from 'react'
import classes from './Message.module.css';

type MessagePropsType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessagePropsType) {
  return (
      <div className={classes.cover}>
        <div className={classes.contents}><img className={classes.avatar}
                  src={props.avatar} />
        </div>
        <div className={classes.message}>
          <h3>{props.name}</h3>
          <div className={classes.textTime}>
            {props.message}
            <span>{props.time}</span>
          </div>
        </div>

      </div>
  )
}

export default Message
