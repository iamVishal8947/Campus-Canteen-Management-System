export const mockData1 = [
    {
      orderId: 1,
      name: "AAA",
      qty: 3,
      amount: 60,
      orderStatus: "COMPLETED",
      carts: [
          {
            cartId: 1,
            order: "Idli",
            qtyOrdered: 3,
            netPrice: 60
          }
        ]
    },
    {
      orderId: 2,
      qty: 3,
      name: "BBB",
      amount: 50,
      orderStatus: "COMPLETED",
      carts: [
          {
            cartId: 2,
            order: "Idli",
            qtyOrdered: 2,
            netPrice: 40
          },
          {
              cartId: 3,
              order: "Tea",
              qtyOrdered: 1,
              netPrice: 10
            }
        ]
    },
    {
      orderId: 3,
      qty: 3,
      name: "CCC",
      amount: 100,
      orderStatus: "COMPLETED",
      carts: [
          {
            cartId: 1,
            order: "Poli Bhaji",
            qtyOrdered: 2,
            netPrice: 50
          },
          {
              cartId: 2,
              order: "Full Lunch",
              qtyOrdered: 1,
              netPrice: 50
            },
        ]
    },
    {
      orderId: 4,
      qty: 3,
      name: "DDD",
      amount: 60,
      orderStatus: "COMPLETED",
      carts: [
          {
            cartId: 1,
            order: "Idli",
            qtyOrdered: 3,
            netPrice: 60
          }
        ]
    },
  ];
  