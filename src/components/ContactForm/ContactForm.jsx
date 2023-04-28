import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const oldContacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const contact = {
      name: form.elements[0].value,
      phone: form.elements[1].value,
      id: nanoid(),
    };

    if (
      oldContacts.find(
        oldContact =>
          oldContact.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} is already in contacts`);
    }

    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          placeholder="Enter name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <div>
          <input
            id="number"
            type="tel"
            placeholder="Enter phone number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button className="add-button" type="submit">
          Add contact
        </button>
      </form>
      <h2>Contacts</h2>
    </div>
  );
};
