import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError, selectIsAdding } from 'redux/selectors';
import { useEffect } from 'react';

import { ThreeDots } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isAdding = useSelector(selectIsAdding);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="content-box">
      <ContactForm />
      <Filter />
      {isLoading && !error && (
        <div className='loader'>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#008CBA"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            ma
          />
        </div>
      )}
      {error && (
        <p>Service communication error</p>
      )
      }
      <ContactList />
      {isAdding && !error && (
        <div className='loader'>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#008CBA"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            ma
          />
        </div>
      )}
    </div>
  );
};
