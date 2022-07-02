using System;
using System.Collections.Generic;
using System.Text;

namespace ALGOnDS.Excercise.Sorting
{
    public class ArrayBase
    {
        private int[] arr;
        private int upperBoundOfArr;
        private int numberOfElementsInArr;

        public ArrayBase(int arrSize)
        {
            arr = new int[arrSize];
            upperBoundOfArr = arrSize - 1;
            numberOfElementsInArr = 0;
        }

        public void Insert(int val)
        {
            arr[numberOfElementsInArr] = val;
            numberOfElementsInArr++;
        }
        public void DisplayElements()
        {
            for (int i = 0; i <= upperBoundOfArr; i++)
            {
                Console.WriteLine(arr[i]);
            }
        }

    }
}
