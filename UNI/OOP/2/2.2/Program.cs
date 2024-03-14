﻿using System.Diagnostics.Metrics;

namespace _2._1;

class Program
{
    static void Main(string[] args)
    {
        Counter[] myCounters = new Counter[3];
        myCounters[0] = new Counter("lehan");
        myCounters[1] = new Counter("Gagan");
        myCounters[2] = myCounters[0];

        for (int i = 1; i<=9; i++)
        {
            myCounters[0].Increment();
        }

        for (int i = 1; i <= 14; i++)
        {
            myCounters[1].Increment();
        }

        PrintCounters(myCounters);
        myCounters[2].Reset();
        PrintCounters(myCounters);

    }

    static void PrintCounters(Counter[] counters)
    {
        foreach (Counter c in counters)
        {
            Console.WriteLine("{0} is {1}", c.Name, c.Ticks);
        }
    }
}

