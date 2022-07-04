using System;
using System.Collections.Generic;
using System.Text;

namespace ALGOnDS.LINQ.Sequence
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Color { get; set; }
        public string Brand { get; set; }
        public int OrderId { get; set; }        
    }

    public class GetAllProd
    {
        public IEnumerable<Product> GetAll()
        {
            var products = new List<Product>()
            {
                new Product
                {
                    Id = 1,
                    Brand = "HP",
                    Color = "Pink",
                    Name = "New HP 1",
                    OrderId = 1
                },
                new Product
                {
                    Id = 2,
                    Brand = "HP",
                    Color = "Pink",
                    Name = "New HP 2",
                    OrderId = 1
                },
                new Product
                {
                    Id = 3,
                    Brand = "HP",
                    Color = "Yellow",
                    Name = "New HP 2",
                    OrderId = 2
                }
            };

            return products;
        }
    }
}
