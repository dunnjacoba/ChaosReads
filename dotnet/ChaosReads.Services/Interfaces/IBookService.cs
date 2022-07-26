using ChaosReads.Models.Domain.Reviews;
using System.Collections.Generic;

namespace ChaosReads.Services.Interfaces
{
    public interface IBookService
    {
        List<Reviews> GetAllReviews();
    }
}