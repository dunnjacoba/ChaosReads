using ChaosReads.Models.Domain.Reviews;
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
    [Route("api/reviews")]
    [ApiController]
    public class BookReviewApiController : BaseApiController
    {
        private IBookService _service = null;

        public BookReviewApiController(IBookService service, ILogger<BookReviewApiController> logger) : base(logger)
        {
            _service = service;
        }

        [HttpGet]
        [AllowAnonymous]
        public ActionResult<ItemsResponse<Reviews>> Get()
        {
            ActionResult result = null;
            try
            {
                List<Reviews> list = _service.GetAllReviews();
                if(list == null)
                {
                    result = NotFound404(new ErrorResponse("No Records Found"));
                }
                else
                {
                    ItemsResponse<Reviews> response = new ItemsResponse<Reviews>();
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
