using ChaosReads.Data;
using ChaosReads.Data.Providers;
using ChaosReads.Models.Domain.Books;
using ChaosReads.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChaosReads.Services.Books
{
    public class GenreService : IGenreService
    {
        private IDataProvider _data = null;

        public GenreService(IDataProvider data)
        {
            _data = data;
        }

        public List<Genres> GetAllGenres()
        {
            string procName = "[dbo].[GetAllGenres]";
            List<Genres> list = null;

            _data.ExecuteCmd(procName, inputParamMapper: null
                , singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    Genres genre = new Genres();

                    MapSingleGenre(reader, genre);

                    if (list == null)
                    {
                        list = new List<Genres>();
                    }
                    list.Add(genre);
                });
            return list;
        }

        private static Genres MapSingleGenre(IDataReader reader, Genres model)
        {
            int startingIndex = 0;

            model.Id = reader.GetSafeInt32(startingIndex++);
            model.Name = reader.GetSafeString(startingIndex++);

            return model;

        }
    }
}
