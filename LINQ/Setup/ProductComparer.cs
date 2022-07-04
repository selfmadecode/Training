using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;

namespace ALGOnDS.LINQ.Sequence
{
    public class ProductComparer : EqualityComparer<Product>
    {
        public override bool Equals([AllowNull] Product x, [AllowNull] Product y)
        {
            // Compare each property in both objects
            return (x.Name == y.Name && x.Color == y.Color);
        }

        public override int GetHashCode([DisallowNull] Product obj)
        {
            string value = obj.Color + obj.Brand + obj.Id.ToString() + obj.Name;

            return value.GetHashCode();
        }
    }
}
