import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleGetValue = e => {
    const prop = e.currentTarget.name;
    this.setState({ [prop]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <h1 className={css.formTitle}>PhoneBook</h1>
        <div className={css.inputWrapper}>
          <label className={css.label}>
            Name
            <input
              className={css.inputName}
              value={this.state.name}
              onChange={this.handleGetValue}
              placeholder="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label className={css.label}>
            Number
            <input
              className={css.inputNumber}
              value={this.state.number}
              onChange={this.handleGetValue}
              placeholder="number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
        </div>
        <button
          className={css.btnSubmit}
          type="submit"
          aria-label="button-submit"
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
