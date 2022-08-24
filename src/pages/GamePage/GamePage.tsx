import React, { FC } from 'react'
import GameBuy from '../../components/gameBuy/gameBuy'
import GameCover from '../../components/gameCover/gameCover'
import GameGenre from '../../components/gameGenre/gameGenre'
import { useTypedSelector } from '../../components/hooks/useTypesSelector'
import { IGameItem } from '../../components/models/models'
import './GamePage.css'

// interface IGamePage {
//   items: IGameItem,
// }

export const GamePage = () => {
const game = useTypedSelector(state => state.games.currentGame)

if (!game) return null

  return (
    <div className='game-page'>
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe 
          src={game.video} 
          width="90%"
          height="400px"
          title='Youtube Video Player'
          // frameborder="0"
          ></iframe>
        </div>
        <div className="game-page__right">
            <GameCover image={game.image} />
            <p>{game.description}</p>
            <p className="secondary-text">Популярні мітки продукту:</p>
            {game.genres.map(genre => <GameGenre genre={genre} key={game.video} />)}
            <div className="game-page__buy-game">
              <GameBuy game={game} />
            </div>
        </div>
      </div>
    </div>
  )
}


