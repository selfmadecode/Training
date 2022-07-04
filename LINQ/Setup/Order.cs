using System;
using System.Collections.Generic;
using System.Text;

namespace ALGOnDS.LINQ.Setup
{
    public class Order
    {
        public int Id { get; set; }
        public int ProductId { get; set; }

        public IEnumerable<Order> GetAll()
        {
            var orders = new List<Order>()
            {
                new Order
                {
                    Id = 1,
                    ProductId = 1
                },
            };

            return orders;
        }
    }
}
