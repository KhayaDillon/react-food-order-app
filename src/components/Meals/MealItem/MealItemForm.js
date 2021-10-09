import Input from '../../UI/input'

import styles from '../Styles.module.css'

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input label="Amount" input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          defaultValue: '1'
      }} />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;