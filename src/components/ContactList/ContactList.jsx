import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <ContactItem
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
