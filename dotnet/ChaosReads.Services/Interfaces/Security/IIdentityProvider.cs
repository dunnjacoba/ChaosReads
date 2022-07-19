namespace ChaosReads.Services
{
    public interface IIdentityProvider<T>
    {
        T GetCurrentUserId();
    }
}