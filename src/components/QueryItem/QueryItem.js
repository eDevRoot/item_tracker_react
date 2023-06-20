import "./QueryItem.css";

export default function QueryItem(props)
{
    const { item } = props;

    return (
      <div className="item">
          <a href={item.url} target="_blank" rel="noreferrer">
              <img className="item-image" src={item.image} alt={item.id}/>
              <p className="item-title">{item.title}</p>
              <p className="item-price">Price: {item.price}</p>
              <p className="item-price">Shipping: { item.shipping }</p>
              { item.is_auction ? (<p>Subasta!</p>) : null }
              { item.admits_offers ? (<p>Acepta Ofertas</p>) : null }
          </a>
      </div>
    );
}