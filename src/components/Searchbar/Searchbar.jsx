import { Field,  Formik } from 'formik';
import { StyledForm } from './SearchBar.styled';

export const Searchbar = ({ onSubmit }) => {
  // state = {
  //   title: '',
  // };
  // handleChangeInput = evt => {
  //   this.setState({ title: evt.target.value });
  // };
  const handleSubmit = (value, actions) => {
    onSubmit(value.title);
    actions.resetForm();
  };

  return (
   
      <Formik initialValues={{ title: '' }} onSubmit={handleSubmit}>
        <StyledForm>
          <button type="submit" className='button'>
            <span className="button-label"></span>
          </button>
          <Field
            type="text"
            name="title"
            className="input"
            placeholder="Search images and photos"
          />
        </StyledForm>
      </Formik>
    
  );
};
