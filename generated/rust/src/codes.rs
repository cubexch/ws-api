/// Custom error codes. Sent on a best-effort basis on the WebSocket
/// `CloseFrame`.
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum CloseCode {
    DoNotUse = 0,
    OnWaitlist = 600,
    IncompleteKyc = 601,
    UnapprovedKyc = 602,
    BadMessage = 700,
    NoHeartbeat = 701,
    Unspecified = 999,
}
impl CloseCode {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            CloseCode::DoNotUse => "DO_NOT_USE",
            CloseCode::OnWaitlist => "ON_WAITLIST",
            CloseCode::IncompleteKyc => "INCOMPLETE_KYC",
            CloseCode::UnapprovedKyc => "UNAPPROVED_KYC",
            CloseCode::BadMessage => "BAD_MESSAGE",
            CloseCode::NoHeartbeat => "NO_HEARTBEAT",
            CloseCode::Unspecified => "UNSPECIFIED",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "DO_NOT_USE" => Some(Self::DoNotUse),
            "ON_WAITLIST" => Some(Self::OnWaitlist),
            "INCOMPLETE_KYC" => Some(Self::IncompleteKyc),
            "UNAPPROVED_KYC" => Some(Self::UnapprovedKyc),
            "BAD_MESSAGE" => Some(Self::BadMessage),
            "NO_HEARTBEAT" => Some(Self::NoHeartbeat),
            "UNSPECIFIED" => Some(Self::Unspecified),
            _ => None,
        }
    }
}
