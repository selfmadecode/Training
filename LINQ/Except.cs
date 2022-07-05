using ALGOnDS.LINQ.Sequence;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;

namespace ALGOnDS.LINQ
{    
    public class Except
    {
        public IEnumerable<Product> ExceptUsingComparer()
        {
            ProductComparer pc = new ProductComparer();

            var newSupply = new List<Product>() {
                new Product
                {
                    Id = 1,
                    Brand = "Dell",
                    Color = "Red",
                    Name = "Legion 5"
                },
                new Product
                {
                    Id = 2,
                    Brand = "HP",
                    Color = "Black",
                    Name = "Product 2"
                }
            };

            var inStock = new List<Product>() {
                new Product
                {
                    Id = 1,
                    Brand = "HP",
                    Color = "Pink",
                    Name = "New Product 1"
                },
                new Product
                {
                    Id = 1,
                    Brand = "Dell",
                    Color = "Red",
                    Name = "Legion 5"
                },
                new Product
                {
                    Id = 1,
                    Brand = "Acer",
                    Color = "white",
                    Name = "Acer Spider"
                }
            };

            return inStock.Except(newSupply, pc); // returns products inStock that are not found in newSupply
        }

        public IEnumerable<int> ExceptOnIntergers()
        {
            var list1 = new List<int> { 1, 2, 3, 4, 5, 6 };
            var list2 = new List<int> { 2, 3, 5 };

            return list1.Except(list2); // Returns elements in list1 that are not in list 2
        }
    }
}
