using System.Security.Claims;

namespace ChaosReads.Services.Security
{
    public static class ClaimsIdentityExt
    {
        public static string TENANTID = "ChaosReads.TenantId";

        public static void AddTenantId(this ClaimsIdentity claims, object tenantId)
        {
            claims.AddClaim(new Claim(TENANTID, tenantId?.ToString(), null, "ChaosReads"));
        }

        public static bool IsTenantIdClaim(this ClaimsIdentity claims, string claimName)
        {
            return claimName == TENANTID;
        }
    }
}