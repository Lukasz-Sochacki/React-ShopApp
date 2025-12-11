import styles from '../Product.module.scss';
import Button from './Button/Button';
import OptionSize from './OptionSize/OptionSize';
import OptionColor from './OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        console.log(
          `Summary \n================\n\n Name: ${
            props.title
          }\n\n Price: ${props.getPrice()}\n\n Size: ${
            props.currentSize
          }\n\n Color: ${props.currentColor}`
        );
      }}
    >
      <OptionSize
        sizes={props.sizes}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
      />
      <OptionColor
        colors={props.colors}
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
        prepareColorClassName={props.prepareColorClassName}
      />

      <Button className={styles.button}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  title: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  getPrice: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  prepareColorClassName: PropTypes.func.isRequired,
};

export default ProductForm;
