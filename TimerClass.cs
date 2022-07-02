using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace ALGOnDS
{
    public class TimerClass
    {
        TimeSpan startingTime;
        TimeSpan duration;
        public TimerClass()
        {
            startingTime = new TimeSpan(0);
            duration = new TimeSpan(0);
        }

        public void StopTime()
        {
            duration = Process.GetCurrentProcess().Threads[0].UserProcessorTime.Subtract(startingTime);
        }

        public void StartTime()
        {
            GC.Collect(); // GARBAGE COLLECTION
            // a line of code that tells the program to wait until all the finalizer
            // methods of the objects on the heap have run
            GC.WaitForPendingFinalizers(); // CALLS FINALIZER ON OBJECTS

            startingTime = Process.GetCurrentProcess().Threads[0].UserProcessorTime;
        }
        public TimeSpan Result()
        {
            return duration;
        }
    }
}
