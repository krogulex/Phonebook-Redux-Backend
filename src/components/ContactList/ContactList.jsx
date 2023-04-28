import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts, selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <div>
      {contacts.length > filteredContacts.length &&
      filteredContacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        filteredContacts.map(element => {
          return (
            <div key={element.id} id={element.id} className="contact-item">
              <p>
                <span>{element.name}: </span>
                {element.phone}
              </p>
              <button
                className="contact-delete"
                onClick={() => handleDelete(element.id)}
              >
                delete
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};
