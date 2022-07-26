using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChaosReads.Models.Requests.Books
{
    public class UpdateBookRequest : AddBookRequest
    {
        public int Id { get; set; }
    }
}
