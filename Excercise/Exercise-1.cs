using System;
using System.Collections.Generic;
using System.Text;

namespace ALGOnDS.Excercise
{
    public class Exercise_1
    {
        Dictionary<string, int> Scores = new Dictionary<string, int>();

        public void AddScore(string name, int result)
        {
            Scores.Add(name, result);
        }

        public void GetStudentResult()
        {
            string studentname = "";
            int studentScore = 0;
            bool flag = false;

            foreach (var score in Scores)
            {
                Console.WriteLine($"Hello {score.Key} your result is {score.Value}");
                Console.WriteLine("Is this your result? Y/N");

                var response = Console.ReadLine();

                if(response.ToLower() == "y")
                {
                    studentname = score.Key;
                    studentScore = score.Value;

                    Scores.Remove(score.Key);
                    flag = true;
                    break;
                }
            }
            Console.WriteLine($"My is{Scores.Count}");

            if (flag)
            {
                Scores.Add(studentname, studentScore);
            }
            Console.WriteLine($"My is{Scores.Count}");

            GetStudentRecord(Scores);
        }

        public void GetStudentRecord(Dictionary<string, int> Scorea)
        {
            Console.WriteLine($"My is{Scorea.Count}");


            foreach (var score in Scorea)
            {
                Console.WriteLine($"Hello {score.Key} your result is {score.Value}");
            }
        }
    }
}
