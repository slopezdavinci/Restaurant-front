let testData = {
  orders: [
    {
      order_id: "0",
      table_number: 3,
      products: [
        {
          product_id:"231",
          description: "Hamburguesa",
          price: 250.0
        },
        {
          product_id:"213",
          description: "Coca Cola",
          price: 250.0
        }
      ],
      waiter_assigned: "Oscar",      
      payment_method: "Mercado Pago",      
      order_state: "Pendiente"
    },
    {
      order_id: "1",
      table_number: 4,
      products: [
        {
          product_id:"241",
          description: "Pizza Muzzarella",
          price: 750.0
        },
        {
          product_id:"253",
          description: "Cerveza Quilmes",
          price: 250.0
        }
      ],
      waiter_assigned: "Carlos",      
      payment_method: "Debito",      
      order_state: "Completado"
    },
    {
      order_id: "2",
      table_number: 1,
      products: [
        {
          product_id:"271",
          description: "Empandas de Jamon y Queso",
          price: 500.0
        },
        {
          product_id:"223",
          description: "Cerveza Quilmes",
          price: 250.0
        }
      ],
      waiter_assigned: "Pablo",      
      payment_method: "Credito",      
      order_state: "En curso"      
    },    
    {
      order_id: "3",
      table_number: 6,
      products: [
        {
          product_id:"271",
          description: "Tortilla española",
          price: 400.0
        },
        {
          product_id:"223",
          description: "Cerveza Heineken",
          price: 300.0
        }
      ],
      waiter_assigned: "Pablo",      
      payment_method: "Efectivo",      
      order_state: "En curso"      
    },
  ],
  products: [
    {
      idProd: "1",
      Producto: "Coca",
      Descripcion: "Bebida",
      Precio: "$10",
      Imagen: "",
    },
    {
      idProd: "2",
      Producto: "Pepsi",
      Descripcion: "Bebida",
      Precio: "$8",
      Imagen: "",
    },
  ],
};

export default testData;
