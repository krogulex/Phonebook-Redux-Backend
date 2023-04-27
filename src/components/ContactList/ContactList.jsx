import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

//import { deleteContact } from 'redux/actions';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <div>
      {contacts.length === 0
        ? <p>No contacts yet...</p>
        : filter !== ''
        ? contacts
            .filter(f => f.name.toLowerCase().includes(filter.toLowerCase()))
            .map(element => {
              return (
                <div key={element.id} id={element.id} className="contact-item">
                  <p>
                    <span>{element.name}: </span>
                    {element.number}
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
        : contacts.map(element => {
            return (
              <div key={element.id} id={element.id} className="contact-item">
                <p>
                  <span>{element.name}: </span>
                  {element.number}
                </p>
                <button
                  className="contact-delete"
                  onClick={() => handleDelete(element.id)}
                >
                  delete
                </button>
              </div>
            );
          })}
    </div>
  );
};
