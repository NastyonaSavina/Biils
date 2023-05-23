import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { addBill } from 'redux/bills/bills.operations';


const initialState = {
  companyName: '',
  gameName: '',
  amount: '',
  currency: '',
};

const AddBill = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState(initialState);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, [values]);

  const handleChange = (value, name) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleChangeCompany = event => {
     setValues(prev => ({ ...prev, companyName: event.target.value }));
  };

  const handleChangeCurrency = event => {
    if (event.target.checked === true) {
      setValues(prev => ({ ...prev, currency: event.target.value }));
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      setIsLoading(true);

      await dispatch(addBill(values));

      setIsLoading(false);
      setIsOpenForm(false);
      toast.success('Success!');
      setValues(initialState);
    } catch (e) {
      console.log(e);
      toast.error('Some error');
    }
  };

  const handleOpenForm = (event) => {
        setIsOpenForm(true);

}



  return (
    <>
      {isLoading && <p>Loading ...</p>}

      {isOpenForm ? (
        <form
          className="row gy-2 gx-4 align-items-center mx-0 mb-4 bg-secondary-subtle border border-secondary-subtle rounded-3 p-3"
          onSubmit={handleSubmit}
        >
          <h4>Put values for new bill</h4>
          <div className="col-auto">
            <label className="visually-hidden" htmlFor="autoSizingSelect">
              Preference
            </label>
            <select
              className="form-select"
              id="autoSizingSelect"
              onChange={handleChangeCompany}
              required
            >
              <option value=""> Choose company...</option>
              <option value="Company1">Company1</option>
              <option value="Company2">Company2</option>
              <option value="Company3">Company3</option>
              <option value="Company4">Company4</option>
              <option value="Company5">Company5</option>
            </select>
          </div>
          <div className="col-auto">
            <label className="visually-hidden" htmlFor="autoSizingInput">
              gameName
            </label>
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="Put name of the game"
              name="gameName"
              value={values.gameName}
              onChange={e => handleChange(e.target.value, e.target.name)}
              required
            />
          </div>
          <div className="col-auto">
            <label className="visually-hidden" htmlFor="autoSizingInput">
              Amount
            </label>
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="Put amount..."
              name="amount"
              value={values.amount}
              onChange={e => handleChange(e.target.value, e.target.name)}
              required
            />
          </div>
          <div className="col-auto">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="dollar"
                id="flexRadioDefault1"
                onChange={handleChangeCurrency}
                required
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Dollar
              </label>
            </div>
            <div className="form-check me-5">
              <input
                className="form-check-input"
                type="radio"
                value="euro"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={handleChangeCurrency}
                required
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Euro
              </label>
            </div>
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="p-3 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-3 mb-4 d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-warning ms-auto"
            onClick={handleOpenForm}
          >
            Add new bill
          </button>
        </div>
      )}
    </>
  );
};

export default AddBill;
