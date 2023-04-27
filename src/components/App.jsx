
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {

  return (
    <div className="content-box">
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
