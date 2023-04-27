
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getIsLoading } from 'redux/selectors';
import { getError } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="content-box">
      <ContactForm />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};
