import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkCointainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <>
    <Nav className='justify-content-center mb-4'>
      <Nav>
        {step1 ? (
        <LinkCointainer to='/login'>
          <Nav.Link>Sign In</Nav.Link>
        </LinkCointainer>
        ) : (
        <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav>

      <Nav.Item>
        {step2 ? (
          <LinkCointainer to='/shipping'>
            <Nav.Link>Shipping</Nav.Link>
          </LinkCointainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkCointainer to='/payment'>
            <Nav.Link>Payment</Nav.Link>
          </LinkCointainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkCointainer to='/placeorder'>
            <Nav.Link>Place Order</Nav.Link>
          </LinkCointainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>

    </Nav>
    </>
  )
}

export default CheckoutSteps

