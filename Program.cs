using ALGOnDS.DS;
using ALGOnDS.Excercise;
using ALGOnDS.Excercise.Sorting;
using ALGOnDS.Generics;
using ALGOnDS.LINQ;
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
            //PlayGround.ExceptEx.ExceptUsingComparer();

            // PlayGround.SequenceEx.SequenceEqualUsingComparer();

            PlayGround.UnionEx.UnionUsingComparer();

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
