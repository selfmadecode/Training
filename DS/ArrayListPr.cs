using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace ALGOnDS.DS
{
    public static class ArrayListPr
    {
        public static double Average { get; set; }
        public static double Total { get; set; }

        public static double GetAverage(ArrayList arr)
        {
            foreach (int value in arr)
            {
                Total += value;
            }

            return Total / arr.Count;
        }

        public static ArrayList RemoveAt(ArrayList arr, int position)
        {
            arr.RemoveAt(position);
            return arr;
        }
        public static ArrayList InsertAt(ArrayList arr, int position, object data)
        {
            arr.Insert(position, data);
            return arr;
        }

        public static int CalculateParticularSubjectScore(int[,] arr, int subjectPostion)
        {
            TimerClass timer = new TimerClass();
            timer.StartTime();

            var firstSubjectlastScore = arr.GetUpperBound(0); // returns the column count starting at 0

            int total = 0;

            for (int row = 0; row <= subjectPostion; row++)
            {
                for (int subject = 0; subject <= firstSubjectlastScore; subject++)
                {
                    total += arr[subject, subjectPostion]; // [0, 0], [0, 1]
                }
            }

            timer.StopTime();
            Console.WriteLine();
            Console.WriteLine("Elapsed Time (.NET):" + timer.Result());

            return total;
        }
    }
}
