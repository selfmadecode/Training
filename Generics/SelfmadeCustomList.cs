using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace ALGOnDS.Generics
{
    public class SelfmadeCustomList<T>
    {
        // CREATING A GENERIC CLASS
        ArrayList genericInnerList = new ArrayList();
        
        public void AddToSelfmadeList(T item)
        {
            genericInnerList.Add(item);
        }

        public int CountSelfmadeList()
        {
            return genericInnerList.Count;
        }
    }
}
