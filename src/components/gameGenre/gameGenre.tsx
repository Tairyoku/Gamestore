import React, { FC } from 'react'
import './gameGenre.css'

interface IGameGenre {
    genre:string
}

const GameGenre:FC<IGameGenre> = ({genre}) => {
  return (
    <span className='game-genre'>{genre}</span>
  )
}

export default GameGenre