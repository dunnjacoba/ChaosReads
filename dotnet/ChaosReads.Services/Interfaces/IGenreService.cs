using ChaosReads.Models.Domain.Books;
using System.Collections.Generic;

namespace ChaosReads.Services.Interfaces
{
    public interface IGenreService
    {
        List<Genres> GetAllGenres();
    }
}