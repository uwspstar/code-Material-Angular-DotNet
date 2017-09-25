using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FuntionalCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Example_1();
        }

        public static void Example_1()
        {
            //7! = 7*6*5*4*3*2*1
            int input = Convert.ToInt32(Console.ReadLine());

            IEnumerable<int> ints = Enumerable.Range(1, input);
            int factorialNumber = ints.Aggregate((f, s) => f * s);

            Console.WriteLine("{0}! is {1}", input, factorialNumber);

            Console.ReadLine();
        }
    }
}
