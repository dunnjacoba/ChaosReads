namespace ChaosReads.Web.Models.Responses
{
    /// <summary>
    /// This is an example of a Generic class that you will gain an understanding of as you progress
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class ItemResponse<T> : SuccessResponse, IItemResponse
    {
        public T Item { get; set; }

        object IItemResponse.Item { get { return this.Item; } }
    }
}