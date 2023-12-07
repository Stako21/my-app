import './GoodCard.scss'

export const GoodCard = ({ good }) => (
  <div
    className='GoodCard'
    style={{ color: good.color, backgroundColor: `${good.color}40` }}
  >
    {good.name}
  </div>
)