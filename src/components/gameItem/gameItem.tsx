import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { setCurrentGame } from '../../redux/games/redusers';
import GameBuy from '../gameBuy/gameBuy'
import GameCover from '../gameCover/gameCover'
import GameGenre from '../gameGenre/gameGenre'
import { IGameItem } from '../models/models'
import './gameItem.css'

interface IGames {
    game: IGameItem
    // key: number
  }

const GameItem:FC<IGames> = ({game}) => {

const navigate = useNavigate()
const dispatch = useDispatch()

const handleClick = () => {
  dispatch(setCurrentGame(game))
  navigate(`/app/${game.title}`)
}

  return (
    <div className='game-item' >
      <div onClick={handleClick}>
      <GameCover image={game.image} />
        <div className="game-item-details">
            <span className='game-item-title'>{game.title}</span>
            <div className="game-item-genres">
                  {game.genres.map((genre) => <GameGenre genre={genre} key={genre} />)}
            </div>
        </div>
            </div>
            <div className="gane-item-buy">
              <GameBuy game={game} />
        </div>
            </div>
  )
}

export default GameItem