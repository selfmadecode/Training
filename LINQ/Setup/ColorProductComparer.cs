using ALGOnDS.LINQ.Sequence;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;

namespace ALGOnDS.LINQ.Setup
{
    public class ColorProductComparer : ProductComparer
    {
        public override bool Equals([AllowNull] Product x, [AllowNull] Product y)
        {
            return (x.Color == y.Color);
        }
    }
}
