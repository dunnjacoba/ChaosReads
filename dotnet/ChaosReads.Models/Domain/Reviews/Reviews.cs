using ChaosReads.Models.Domain.Books;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChaosReads.Models.Domain.Reviews
{
    public class Reviews
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string BriefReview { get; set; }

        public string FullReview { get; set; }

        public int Rating { get; set; }

        public int Spice { get; set; } 

        public string BookCover { get; set; }

    }
}
