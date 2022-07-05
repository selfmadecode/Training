using ALGOnDS.LINQ.Setup;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;

namespace ALGOnDS.LINQ.Sequence
{    
    public class SequenceEqual
    {        
        public bool SequenceEqualUsingComparer()
        {
            var pc = new ColorProductComparer();

            var list1 = new List<Product>() {
                new Product
                {
                    Color = "Red",
                    Name = "Legion 5"
                },
                new Product
                {
                    Color = "Black",
                    Name = "Product 2"
                }
            };

            var list2 = new List<Product>() {
                new Product
                {
                    Color = "Red",
                    Name = "Legion 51"
                },
                new Product
                {
                    Color = "Black",
                    Name = "Product 21"
                }
            };

            return list1.SequenceEqual(list2, pc); // returns True since the color is same based on the comparer
        }
        public bool SequenceEqualUsingIntergers()
        {
            var list1 = new List<int> { 1, 2, 3, 4, 5, 6 };
            var list2 = new List<int> { 2, 3, 5 };

            return list1.SequenceEqual(list2);
        }
    }
}
