using ALGOnDS.LINQ;
using ALGOnDS.LINQ.Sequence;
using ALGOnDS.LINQ.Setup;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ALGOnDS
{
    public static class PlayGround
    {
        public static class ExceptEx
        {
            public static void ExceptUsingComparer()
            {
                var except = new Except();

                var collection = except.ExceptUsingComparer();

                foreach (var item in collection)
                {
                    Console.WriteLine($"Brand: {item.Brand}, Color: {item.Color}, Name: {item.Name}");
                }

                Console.ReadLine();
            }

            public static void ExceptOnIntergers()
            {
                var except = new Except();

                var collection = except.ExceptOnIntergers();
                foreach (var item in collection)
                {
                    Console.WriteLine(item);
                }
                Console.ReadLine();
            }
        }

        public static class SequenceEx
        {
            public static void SequenceEqualUsingComparer()
            {
                var sequenceEqual = new SequenceEqual();

                var status = sequenceEqual.SequenceEqualUsingComparer();

                Console.WriteLine(status);

                Console.ReadLine();
            }
            public static void SequenceEqualUsingIntergers()
            {
                var sequenceEqual = new SequenceEqual();

                var status = sequenceEqual.SequenceEqualUsingIntergers();

                Console.WriteLine(status);

                Console.ReadLine();
            }
        }

        public static class UnionEx
        {
            public static void UnionUsingComparer()
            {
                var union = new Union();

                var data = union.UnionUsingComparer();

                foreach (var item in data)
                {
                    Console.WriteLine($"Brand: {item.Brand}, Color: {item.Color}, Name: {item.Name}");
                }
                Console.WriteLine(data.Count());
                Console.ReadLine();
            }

            public static void UnionUsingInt()
            {
                var union = new Union();

                var collection = union.UnionUsingInt();

                foreach (var item in collection)
                {
                    Console.WriteLine(item);
                }

                Console.ReadLine();
            }
        }
    }
}
