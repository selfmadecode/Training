using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace ALGOnDS.DS
{
    public class CustomCollection : CollectionBase
    {
        // CREATING A CUSTOM CLASS
        public void Add(Object item)
        {
            InnerList.Add(item);
        }

        //so we have to use the new keyword to hide
        //the definition of Count found in CollectionBase
        public new int Count()
        {
            return InnerList.Count;
        }

        public new void Clear()
        {
            InnerList.Clear();
        }

        public bool Contains(Object item)
        {
            return InnerList.Contains(item);
        }

        public void RemoveAt(int position)
        {
            InnerList.RemoveAt(position);
        }
    }    
}
