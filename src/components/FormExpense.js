import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const FormExpense = () => {
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
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter expense amount" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of expense</Form.Label>
              <Form.Control type="date" placeholder="Select date of expense" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Enter short description" />
            </Form.Group>
            <Button className="mb-3" variant="danger" type="submit">
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
