import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ name, onChange }) => (
  <>
    <label>
      <input
        className={css.inputFilter}
        placeholder="Enter to search..."
        type="text"
        name={name}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  </>
);

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
