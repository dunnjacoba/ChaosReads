using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChaosReads.Models.Domain.Books
{
    public class BookBase
    {
        public string Title { get; set; }

        public int PublishingHouseId { get; set; }

        public int CoverId { get; set; }

        public int AlternateCoverId { get; set; }

        public string AlternateTitle { get; set; }
    }
}
