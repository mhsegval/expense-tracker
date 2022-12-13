import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const FormExpense = (props) => {
  return (
    <div>
      <Card>
        <Card.Header className="text-center">Expenditure</Card.Header>
        <Card.Body className="text-center">
          <Card.Title>Add your expense</Card.Title>
          <Card.Text>
            Manage your money by daily adding your expense and track it later.
          </Card.Text>
        </Card.Body>
        {/* Adding form in the card for adding expenses */}
        <Container>
          <Form onSubmit={props.handleFormExpenseSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={props.value.amount}
                onChange={props.handleFormExpenseChange}
                placeholder="Enter expense amount"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of expense</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={props.value.date}
                onChange={props.handleFormExpenseChange}
                placeholder="Select date of expense"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={props.value.description}
                onChange={props.handleFormExpenseChange}
                placeholder="Enter short description"
              />
            </Form.Group>
            <Form.Group>
              <Form.Select
                value={props.value.category}
                onChange={props.handleFormExpenseChange}
                name="category"
                aria-label="Select category"
              >
                <option>Select category</option>
                <option value="Fixed">Fixed</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
              </Form.Select>
            </Form.Group>
            <Button className="mb-3 mt-3" variant="primary" type="submit">
              Add Expense
            </Button>
          </Form>
        </Container>
        {/* end of Form */}
        <Card.Footer className="text-muted text-center">
          Tip: Add a short description for future suggestions.
        </Card.Footer>
      </Card>
    </div>
  );
};

export default FormExpense;
