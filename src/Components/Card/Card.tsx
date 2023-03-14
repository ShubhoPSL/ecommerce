import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Modal from "../Modal/Modal";
import { CartProducts } from "../DataTypes/CartProducts";
import { Product } from "../DataTypes/Product";
import { cartItems } from "../States/CartItems";
import { modal } from "../States/Modal";

function Card(props: { product: Product }) {
  const { product } = props;
  const [cartItem, setCartItem] = useRecoilState(cartItems);
  const [newModal, setModal] = useRecoilState(modal);
  const image1 = "data:image/jpeg;base64," + product.image;
  const handleAddtoCart = () => {
    const indexInCart = cartItem.findIndex((item) => item.id === product.id);
    let newItem: CartProducts;
    indexInCart === -1
      ? (newItem = { ...product, count: 1 })
      : (newItem = {
          ...cartItem[indexInCart],
          count: cartItem[indexInCart].count + 1,
        });

    cartItem[0].id === 0
      ? setCartItem([{ ...product, count: 1 }])
      : indexInCart === -1
      ? setCartItem([...cartItem, newItem])
      : setCartItem([
          ...cartItem.slice(0, indexInCart),
          newItem,
          ...cartItem.slice(indexInCart + 1),
        ]);
    setModal(true);
  };

  return (
    <>
      <div className="card-container-div">
        <img src={image1} alt="Cannot be displayed" className="card-img" />
        <p className="card-para">{product.title}</p>
        <p className="card-para">Price: ${product.price}</p>
        <Link to={`/OrderSummary/${product.id}`}>
          <button className="card-btn-buy">Buy Now</button>
        </Link>
        <button className="card-btn-cart" onClick={() => handleAddtoCart()}>
          Add to Cart
        </button>
      </div>
      {newModal ? <Modal /> : null}
    </>
  );
}

export default Card;
