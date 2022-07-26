using ChaosReads.Data;
using ChaosReads.Data.Providers;
using ChaosReads.Models.Domain.Books;
using ChaosReads.Models.Domain.Reviews;
using ChaosReads.Services.Interfaces;
using System.Collections.Generic;
using System.Data;

namespace ChaosReads.Services.Books
{
    public class BookService : IBookService
    {
        private IDataProvider _data = null;

        public BookService(IDataProvider data)
        {
            _data = data;
        }

        public List<Reviews> GetAllReviews()
        {
            string procName = "[dbo].[GetReviews]";
            List<Reviews> list = null;

            _data.ExecuteCmd(procName, inputParamMapper: null
                , singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    Reviews review = new Reviews();

                    MapSingleReview(reader, review);

                    if (list == null)
                    {
                        list = new List<Reviews>();
                    }

                    list.Add(review);

                });
            return list;
        }

        private static Reviews MapSingleReview(IDataReader reader, Reviews model)
        {
            int startingIndex = 0;

            model.Id = reader.GetSafeInt32(startingIndex++);
            model.Title = reader.GetSafeString(startingIndex++);
            model.Author = reader.DeserializeObject<List<Authors>>(startingIndex++);
            model.BriefReview = reader.GetSafeString(startingIndex++);
            model.FullReview = reader.GetSafeString(startingIndex++);
            model.Rating = reader.GetSafeInt32(startingIndex++);
            model.Spice = reader.GetSafeInt32(startingIndex++);
            model.BookCover = reader.GetSafeString(startingIndex++);

            return model;
        }
    }
}
