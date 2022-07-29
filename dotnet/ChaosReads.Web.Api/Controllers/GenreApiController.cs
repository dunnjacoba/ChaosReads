using ChaosReads.Models.Domain.Books;
using ChaosReads.Services.Interfaces;
using ChaosReads.Web.Controllers;
using ChaosReads.Web.Models.Responses;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;

namespace ChaosReads.Web.Api.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenreApiController : BaseApiController
    {
        private IGenreService _service = null;

        public GenreApiController(IGenreService service, ILogger<GenreApiController> logger) : base(logger)
        {
            _service = service;
        }

        [HttpGet]
        [AllowAnonymous]
        public ActionResult<ItemsResponse<Genres>> GetAll()
        {
            ActionResult result = null;
            try
            {
                List<Genres> list = _service.GetAllGenres();
                if(list == null)
                {
                    result = NotFound404(new ErrorResponse("No Records Found"));
                }
                else
                {
                    ItemsResponse<Genres> response = new ItemsResponse<Genres>();
                    response.Items = list;
                    result = Ok200(response);
                }
            }
            catch(Exception ex)
            {
                Logger.LogError(ex.ToString());
                result = StatusCode(500, new ErrorResponse(ex.Message.ToString()));
            }
            return result;
        }
    }
}
