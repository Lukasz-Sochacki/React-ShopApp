import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };
  const chosenSize = props.sizes.find((size) => size.name === currentSize);

  const price = useMemo(() => {
    return props.basePrice + chosenSize.additionalPrice;
  }, [props.basePrice, chosenSize]);

  return (
    <article className={styles.product}>
      <ProductImage
        name={props.name}
        title={props.title}
        currentColor={currentColor}
      />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>

        <ProductForm
          title={props.title}
          sizes={props.sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          colors={props.colors}
          setCurrentColor={setCurrentColor}
          currentColor={currentColor}
          price={price}
          prepareColorClassName={prepareColorClassName}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
