using System;
using System.Collections.Generic;
using System.Text;

namespace ALGOnDS.Excercise.Sorting
{
    public class BubbleSort
    {
        private readonly int size = 10;
        private Random random = new Random(100);
        public void InsertRandomNumbersToArrayBase()
        {
            var arrBase = new ArrayBase(size);

            for (int i = 0; i < size; i++)
            {
                var value = (int)(random.NextDouble() * 100);
                arrBase.Insert(value);
            }

            arrBase.DisplayElements();
        }
    }
}
