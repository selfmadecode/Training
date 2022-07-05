using ALGOnDS.LINQ.Sequence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ALGOnDS.LINQ.Setup
{
    public class Union
    {        
        public IEnumerable<Product> UnionUsingComparer()
        {
            var pc = new ColorProductComparer();

            var getAllProd = new GetAllProd();

            var list1 = getAllProd.GetAll();
            var list2 = getAllProd.GetAll();

            return list1.Union(list2, pc).OrderBy(c => c.Color);
        }

        public IEnumerable<int> UnionUsingInt()
        {
            var list1 = new List<int> { 1, 2, 3, 4, 5, 6 };
            var list2 = new List<int> { 1, 2, 6, 7, 8, 0 };

            return list1.Union(list2).OrderBy(x => x);
        }
    }
}
