import cn from 'classname';
import './Cards.scss';


export const Cards = ({ title, price }) => (
  // <div className={`Product ${price === 0 ? 'Product--free' : ''}`}>
  <div className={cn('Product', {'Product--free' : price === 0})}>
    <h2 
      className="Product__title" 
      style={{ color: price === 0 ? 'red' : 'green'}}
    >
      {title}
    </h2>

    <div className="Product__price">
      {`Price: ${price} `}
        {price === 0 && (
          <>
            <span>*</span>
            <span>*</span>
          </>
        )}
    </div>
  </div>
);
