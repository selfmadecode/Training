using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;

namespace ALGOnDS.Timing
{
    public class ArrayTest
    {
        // Declaring an array
        int[] score = new int[10];
        int[] scores = new int[] { 1, 2, 3, 4 };
        //The list of numbers, called the initialization list, is delimited with curly braces,
        //and each element is delimited with a comma.

        


        public  static void GetAverageScore()
        {
            int[,] grades = new int[,] {{1, 82, 74, 89, 100},
                                        {2, 93, 96, 85, 86},
                                        {3, 83, 72, 95, 89},
                                        {4, 91, 98, 79, 88}};

            int last_grade = grades.GetUpperBound(1); // count the row -> 4 (100, 86, 89, 88)

            double average = 0.0;

            int total;

            int last_student = grades.GetUpperBound(0); // count the column 3 (1, 2, 3, 4)

            for (int row = 0; row <= last_student; row++)
            {
                total = 0;
                for (int col = 0; col <= last_grade; col++) // 1, 82, 74, 89
                    total += grades[row, col];
                average = total / last_grade;
                Console.WriteLine("Average:" + average);
            }
        }
    
        public static void BuildArray(int[] arr)
        {
            for (int i = 0; i <= 99999; i++)
                arr[i] = i;
        }
        public static void DisplayNums(int[] arr)
        {
            for (int i = 0; i <= arr.GetUpperBound(0); i++)
                Console.Write(arr[i] + " ");
        }

        public static void DisplayNums(string arr)
        {
            var exes = arr.Split().Select(x => x).Where(x => x == 'x'.ToString());
        }

        public static void RunTest()
        {
            int[] nums = new int[100000];
            BuildArray(nums);

            TimerClass timer = new TimerClass();
            timer.StartTime();

            DisplayNums(nums);
            timer.StopTime();

            Console.WriteLine();
            Console.WriteLine("Elapsed Time (.NET):" + timer.Result());
        }
    }
}
