using ALGOnDS.DS;
using ALGOnDS.Excercise;
using ALGOnDS.Excercise.Sorting;
using ALGOnDS.Generics;
using ALGOnDS.Timing;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ALGOnDS
{
    class Program
    {
        static void Main(string[] args)
        {
            // 0 => 12am, 4 => am, 12 => 12pm, 15 => 3pm
            int hour = int.Parse(Console.ReadLine());
            int equivalent = 0;
            
            if (hour == 0)
                Console.WriteLine("12am");
            if (hour == 12)
                Console.WriteLine("12pm");
            if(hour > 12)
            {
                // 3pm => 15-12 = 3
                equivalent = hour - 12;
                Console.WriteLine(equivalent + "pm");
            }
            else
            {
                Console.Write(hour + "am");
            }














            string password = "";//Dim password AS string;

            password = Console.ReadLine();

            if(password == "Secret")
            {
                Console.WriteLine("Welcome");
            }
            else
            {
                Console.WriteLine("Not welcome");
            }

            //End If

            Console.ReadLine();









            int kilometers; // Dim kilometers As Integer
            int passengers; // Dim passengers As Integer

            double taxiFare = 0; // Dim taxiFare As Integer

            kilometers = int.Parse(Console.ReadLine());
            passengers = int.Parse(Console.ReadLine());

            taxiFare = (2 * passengers);

            taxiFare = taxiFare + (1.5 * kilometers);

            Console.Write(taxiFare);

            Console.ReadLine();
















            BubbleSort bbsort = new BubbleSort();

            bbsort.InsertRandomNumbersToArrayBase();

            Console.ReadLine();






            //ArrayTest.RunTest();

            //Exercise_1 exercise = new Exercise_1();

            //exercise.AddScore("First", 10);
            //exercise.AddScore("Second", 20);
            //exercise.AddScore("Alpha", 30);

            //exercise.GetStudentResult();

            //TestCustomGenericClass();

            int n = 3;
            int totalg = 0;
            int count = 1;

            for (int i = 0; i < n; i++)
            {
                totalg += n * (n - 1) + count;
                count += 2;
            }

            var ttg = totalg;

            var arr = "shxdxssjsxx";

            int[,] grades = new int[,] {{1, 82, 74, 89, 100},
                                        {2, 93, 96, 85, 86},
                                        {3, 83, 72, 95, 89},
                                        {4, 91, 98, 79, 88}};


            ArrayListPr.CalculateParticularSubjectScore(grades, 0);

            ArrayList ar = new ArrayList() { 1, 2, 3, 4 };
            var tt = ar.Count;

            ArrayListPr.GetAverage(ar);


            ArrayTest.GetAverageScore();
            //check each string
            var s = "hhhhsksjdhdjs";

            var part = 4;

            var smal = Enumerable.Range(0, s.Length / part).Select(i => s.Substring(i * part, part));



            foreach (var item in smal)
            {
                Console.WriteLine(item);
            }
            Console.ReadLine();
        }

        static int fillMissingBrackets(string s)
        {


            return 1;
        }

        

        //public static void TestCustomGenericClass()
        //{
        //    SelfmadeCustomList<object> list = new SelfmadeCustomList<object>();

        //    list.AddToSelfmadeList(1);
        //    list.AddToSelfmadeList("name");

        //    Console.WriteLine("Count is:" + list.CountSelfmadeList());
        //}
    }

    static class stringEx
    {
        public static IEnumerable<string> SplitIntoFour(this String s)
        {
            //if(s == null)
            for (var i = 0; i < s.Length; i += 4)
                yield return s.Substring(i, Math.Min(4, s.Length - i));

        }
    }
}
