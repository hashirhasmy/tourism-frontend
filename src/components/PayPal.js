import React, { useRef, useEffect } from 'react';

function Paypal() {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Cool looking table',
                amount: {
                  currency_code: 'CAD',
                  value: 650.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div
      className="Center"
      style={{
        marginTop: '15rem',
      }}
    >
      <h2 style={{ color: '#697e3e' }}>
        Make your payments and booking via PayPal
      </h2>
      <hr className="divider light my-4" />
      <div ref={paypal}></div>
    </div>
  );
}

export default Paypal;
