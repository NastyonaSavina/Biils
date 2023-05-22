import { useEffect, useState } from 'react';

import { Row, Col, Card, Table, Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectFilteredBills } from '../../redux/filter/filter.selector';
import { fetchBills } from 'redux/bills/bills.operations';
import { Filter } from 'components/Filter/Filter';
import CheckCompany from 'components/CheckCompany/CheckCompany';

const BillsPage = () => {
  const filteredList = useSelector(selectFilteredBills);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBills());
  }, [dispatch]);

  return (
    <>
      <CheckCompany />

      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">All bills</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#Number</th>
                    <th>Company name</th>
                    <th>Game Name</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    <th>Time of creation</th>
                    <th>Time of payment</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredList?.map(bill => (
                    <tr key={bill._id} className="align-items-center">
                      <th scope="row">{bill.billNumber}</th>
                      <td>{bill.companyName}</td>
                      <td>{bill.gameName}</td>
                      <td>{bill.amount}</td>
                      <td>{bill.currency}</td>
                      <td>{new Date(bill.createdAt).toLocaleString()}</td>
                      {bill.ispaid ? (
                        <td>{new Date(bill.dateOfPayment).toLocaleString()}</td>
                      ) : (
                        <td>
                          <Button>Is paid</Button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default BillsPage;
