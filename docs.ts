export enum ApplicationCommandOptionType {
    SubCommand = 1,
    SubCommandGroup = 2,
    String = 3,
    Integer = 4,
    Boolean = 5,
    User = 6,
    Channel = 7,
    Role = 8,
}

export enum InteractionType {
    Ping = 1,
    Applicationcommand = 2,
}

export enum InteractionResponseType {
     /** ACK a `Ping` */
    Pong = 1,
     /** ACK a command without sending a message, eating the user's input */
    Acknowledge = 2,
     /** respond with a message, eating the user's input */
    Channelmessage = 3,
     /** respond with a message, showing the user's input */
    Channelmessagewithsource = 4,
     /** ACK a command without sending a message, showing the user's input */
    Acknowledgewithsource = 5,
}

export enum AuditLogEvents {
    GuildUpdate = 1,
    ChannelCreate = 10,
    ChannelUpdate = 11,
    ChannelDelete = 12,
    ChannelOverwriteCreate = 13,
    ChannelOverwriteUpdate = 14,
    ChannelOverwriteDelete = 15,
    MemberKick = 20,
    MemberPrune = 21,
    MemberBanAdd = 22,
    MemberBanRemove = 23,
    MemberUpdate = 24,
    MemberRoleUpdate = 25,
    MemberMove = 26,
    MemberDisconnect = 27,
    BotAdd = 28,
    RoleCreate = 30,
    RoleUpdate = 31,
    RoleDelete = 32,
    InviteCreate = 40,
    InviteUpdate = 41,
    InviteDelete = 42,
    WebhookCreate = 50,
    WebhookUpdate = 51,
    WebhookDelete = 52,
    EmojiCreate = 60,
    EmojiUpdate = 61,
    EmojiDelete = 62,
    MessageDelete = 72,
    MessageBulkDelete = 73,
    MessagePin = 74,
    MessageUnpin = 75,
    IntegrationCreate = 80,
    IntegrationUpdate = 81,
    IntegrationDelete = 82,
}

export enum ChannelTypes {
     /** a text channel within a server */
    GuildText = 0,
     /** a direct message between users */
    Dm = 1,
     /** a voice channel within a server */
    GuildVoice = 2,
     /** a direct message between multiple users */
    GroupDm = 3,
     /** an [organizational category](https://support.discord.com/hc/en-us/articles/115001580171-Channel-Categories-101) that contains up to 50 channels */
    GuildCategory = 4,
     /** a channel that [users can follow and crosspost into their own server](https://support.discord.com/hc/en-us/articles/360032008192) */
    GuildNews = 5,
     /** a channel in which game developers can [sell their game on Discord](https://discord.com/developers/docs/game-and-server-management/special-channels) */
    GuildStore = 6,
}

/** > warn
> Type `19` and `20` are only in API v8. In v6, they are still type `0`. */
export enum MessageTypes {
    Default = 0,
    RecipientAdd = 1,
    RecipientRemove = 2,
    Call = 3,
    ChannelNameChange = 4,
    ChannelIconChange = 5,
    ChannelPinnedMessage = 6,
    GuildMemberJoin = 7,
    UserPremiumGuildSubscription = 8,
    UserPremiumGuildSubscriptionTier1 = 9,
    UserPremiumGuildSubscriptionTier2 = 10,
    UserPremiumGuildSubscriptionTier3 = 11,
    ChannelFollowAdd = 12,
    GuildDiscoveryDisqualified = 14,
    GuildDiscoveryRequalified = 15,
    Reply = 19,
    ApplicationCommand = 20,
}

export enum MessageActivityTypes {
    Join = 1,
    Spectate = 2,
    Listen = 3,
    JoinRequest = 5,
}

export enum MessageFlags {
     /** this message has been published to subscribed channels (via Channel Following) */
    Crossposted = 1 << 0,
     /** this message originated from a message in another channel (via Channel Following) */
    IsCrosspost = 1 << 1,
     /** do not include any embeds when serializing this message */
    SuppressEmbeds = 1 << 2,
     /** the source message for this crosspost has been deleted (via Channel Following) */
    SourceMessageDeleted = 1 << 3,
     /** this message came from the urgent message system */
    Urgent = 1 << 4,
}

export enum MessageStickerFormatTypes {
    Png = 1,
    Apng = 2,
    Lottie = 3,
}

/** Embed types are "loosely defined" and, for the most part, are not used by our clients for rendering. Embed attributes power what is rendered. Embed types should be considered deprecated and might be removed in a future API version. */
export enum EmbedTypes {
     /** generic embed rendered from embed attributes */
    Rich = "rich",
     /** image embed */
    Image = "image",
     /** video embed */
    Video = "video",
     /** animated gif image embed rendered as a video embed */
    Gifv = "gifv",
     /** article embed */
    Article = "article",
     /** link embed */
    Link = "link",
}

export enum AllowedMentionTypes {
     /** Controls role mentions */
    RoleMentions = "roles",
     /** Controls user mentions */
    UserMentions = "users",
     /** Controls @everyone and @here mentions */
    EveryoneMentions = "everyone",
}

export enum DefaultMessageNotificationLevel {
    AllMessages = 0,
    OnlyMentions = 1,
}

export enum ExplicitContentFilterLevel {
    Disabled = 0,
    MembersWithoutRoles = 1,
    AllMembers = 2,
}

export enum MFALevel {
    None = 0,
    Elevated = 1,
}

export enum VerificationLevel {
     /** unrestricted */
    None = 0,
     /** must have verified email on account */
    Low = 1,
     /** must be registered on Discord for longer than 5 minutes */
    Medium = 2,
     /** must be a member of the server for longer than 10 minutes */
    High = 3,
     /** must have a verified phone number */
    VeryHigh = 4,
}

export enum PremiumTier {
    None = 0,
    Tier1 = 1,
    Tier2 = 2,
    Tier3 = 3,
}

export enum SystemChannelFlags {
     /** Suppress member join notifications */
    SuppressJoinNotifications = 1 << 0,
     /** Suppress server boost notifications */
    SuppressPremiumSubscriptions = 1 << 1,
}

export enum GuildFeatures {
     /** guild has access to set an invite splash background */
    InviteSplash = "INVITE_SPLASH",
     /** guild has access to set 384kbps bitrate in voice (previously VIP voice servers) */
    VipRegions = "VIP_REGIONS",
     /** guild has access to set a vanity URL */
    VanityUrl = "VANITY_URL",
     /** guild is verified */
    Verified = "VERIFIED",
     /** guild is partnered */
    Partnered = "PARTNERED",
     /** guild can enable welcome screen, Membership Screening, and discovery, and receives community updates */
    Community = "COMMUNITY",
     /** guild has access to use commerce features (i.e. create store channels) */
    Commerce = "COMMERCE",
     /** guild has access to create news channels */
    News = "NEWS",
     /** guild is able to be discovered in the directory */
    Discoverable = "DISCOVERABLE",
     /** guild is able to be featured in the directory */
    Featurable = "FEATURABLE",
     /** guild has access to set an animated guild icon */
    AnimatedIcon = "ANIMATED_ICON",
     /** guild has access to set a guild banner image */
    Banner = "BANNER",
     /** guild has enabled the welcome screen */
    WelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED",
     /** guild has enabled [Membership Screening](#DOCS_RESOURCES_GUILD/membership-screening-object) */
    MemberVerificationGateEnabled = "MEMBER_VERIFICATION_GATE_ENABLED",
     /** guild can be previewed before joining via Membership Screening or the directory */
    PreviewEnabled = "PREVIEW_ENABLED",
}

export enum IntegrationExpireBehaviors {
    RemoveRole = 0,
    Kick = 1,
}

export enum MembershipScreeningFieldTypes {
    ServerRules = "TERMS",
}

export enum TargetUserTypes {
    Stream = 1,
}

export enum UserFlags {
    None = 0,
    DiscordEmployee = 1 << 0,
    PartneredServerOwner = 1 << 1,
    HypesquadEvents = 1 << 2,
    BugHunterLevel1 = 1 << 3,
    HouseBravery = 1 << 6,
    HouseBrilliance = 1 << 7,
    HouseBalance = 1 << 8,
    EarlySupporter = 1 << 9,
    TeamUser = 1 << 10,
    System = 1 << 12,
    BugHunterLevel2 = 1 << 14,
    VerifiedBot = 1 << 16,
    EarlyVerifiedBotDeveloper = 1 << 17,
}

/** Premium types denote the level of premium a user has. Visit the [Nitro](https://discord.com/nitro) page to learn more about the premium plans we currently offer. */
export enum PremiumTypes {
    None = 0,
    NitroClassic = 1,
    Nitro = 2,
}

export enum VisibilityTypes {
     /** invisible to everyone except the user themselves */
    None = 0,
     /** visible to everyone */
    Everyone = 1,
}

export enum WebhookTypes {
     /** Incoming Webhooks can post messages to channels with a generated token */
    Incoming = 1,
     /** Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels */
    ChannelFollower = 2,
}

export enum DeviceTypes {
    AudioInput = "audioinput",
    AudioOutput = "audiooutput",
    VideoInput = "videoinput",
}

export enum ActivityFlags {
    Instance = 1 << 0,
    Join = 1 << 1,
    Spectate = 1 << 2,
    JoinRequest = 1 << 3,
    Sync = 1 << 4,
    Play = 1 << 5,
}

/** These are a list of all the OAuth2 scopes that Discord supports. Scopes that are behind a whitelist cannot be requested unless your application is on said whitelist, and may cause undocumented/error behavior in the OAuth2 flow if you request them from a user. */
export enum OAuth2Scopes {
     /** for oauth2 bots, this puts the bot in the user's selected guild by default */
    Bot = "bot",
     /** allows [/users/@me/connections](#DOCS_RESOURCES_USER/get-user-connections) to return linked third-party accounts */
    Connections = "connections",
     /** enables [/users/@me](#DOCS_RESOURCES_USER/get-current-user) to return an `email` */
    Email = "email",
     /** allows [/users/@me](#DOCS_RESOURCES_USER/get-current-user) without `email` */
    Identify = "identify",
     /** allows [/users/@me/guilds](#DOCS_RESOURCES_USER/get-current-user-guilds) to return basic information about all of a user's guilds */
    Guilds = "guilds",
     /** allows [/guilds/{guild.id}/members/{user.id}](#DOCS_RESOURCES_GUILD/add-guild-member) to be used for joining users to a guild */
    GuildsJoin = "guilds.join",
     /** allows your app to [join users to a group dm](#DOCS_RESOURCES_CHANNEL/group-dm-add-recipient) */
    GdmJoin = "gdm.join",
     /** for local rpc server api access, this allows you to read messages from all client channels (otherwise restricted to channels/guilds your app creates) */
    MessagesRead = "messages.read",
     /** for local rpc server access, this allows you to control a user's local Discord client - whitelist only */
    Rpc = "rpc",
     /** for local rpc server api access, this allows you to access the API as the local user - whitelist only */
    RpcApi = "rpc.api",
     /** for local rpc server api access, this allows you to receive notifications pushed out to the user - whitelist only */
    RpcNotificationsRead = "rpc.notifications.read",
     /** this generates a webhook that is returned in the oauth token response for authorization code grants */
    WebhookIncoming = "webhook.incoming",
     /** allows your app to upload/update builds for a user's applications - whitelist only */
    ApplicationsBuildsUpload = "applications.builds.upload",
     /** allows your app to read build data for a user's applications */
    ApplicationsBuildsRead = "applications.builds.read",
     /** allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's applications */
    ApplicationsStoreUpdate = "applications.store.update",
     /** allows your app to read entitlements for a user's applications */
    ApplicationsEntitlements = "applications.entitlements",
     /** allows your app to know a user's friends and implicit relationships - whitelist only */
    RelationshipsRead = "relationships.read",
     /** allows your app to fetch data from a user's "Now Playing/Recently Played" list - whitelist only */
    ActivitiesRead = "activities.read",
     /** allows your app to update a user's activity - whitelist only (NOT REQUIRED FOR [GAMESDK ACTIVITY MANAGER](#DOCS_GAME_SDK_ACTIVITIES/)) */
    ActivitiesWrite = "activities.write",
     /** allows your app to use [Slash Commands](#DOCS_INTERACTIONS_SLASH_COMMANDS/) in a guild */
    ApplicationsCommands = "applications.commands",
     /** allows your app to update [Slash Commands](#DOCS_INTERACTIONS_SLASH_COMMANDS/) via this bearer token */
    ApplicationsCommandsUpdate = "applications.commands.update",
}

export enum KeyTypes {
    KeyboardKey = 0,
    MouseButton = 1,
    KeyboardModifierKey = 2,
    GamepadButton = 3,
}


/** > info
> You can specify a maximum of 10 `choices` per option */
export interface ApplicationCommandOptionPayload {
     /** value of [ApplicationCommandOptionType](#DOCS_INTERACTIONS_SLASH_COMMANDS/applicationcommandoptiontype) */
    type: number;
     /** 1-32 character name matching `^[\w-]{1,32}$` */
    name: string;
     /** 1-100 character description */
    description: string;
     /** if the parameter is required or optional-default `false` */
    required?: boolean;
     /** choices for `string` and `int` types for the user to pick from */
    choices?: ApplicationCommandOptionChoicePayload[];
     /** if the option is a subcommand or subcommand group type, this nested options will be the parameters */
    options?: ApplicationCommandOptionPayload[];
}

/** If you specify `choices` for an option, they are the **only** valid values for a user to pick */
export interface ApplicationCommandOptionChoicePayload {
     /** 1-100 character choice name */
    name: string;
     /** value of the choice */
    value: string | number;
}

/** An interaction is the base "thing" that is sent when a user invokes a command, and is the same for Slash Commands and other future interaction types */
export interface InteractionPayload {
     /** id of the interaction */
    id: string;
     /** the type of interaction */
    type: InteractionType;
     /** the command data payload */
    data?: ApplicationCommandInteractionDataPayload;
     /** the guild it was sent from */
    guild_id: string;
     /** the channel it was sent from */
    channel_id: string;
     /** guild member data for the invoking user, including permissions */
    member: GuildMemberPayload;
     /** a continuation token for responding to the interaction */
    token: string;
     /** read-only property, always `1` */
    version: number;
}

export interface ApplicationCommandInteractionDataPayload {
     /** the ID of the invoked command */
    id: string;
     /** the name of the invoked command */
    name: string;
     /** the params + values from the user */
    options?: ApplicationCommandInteractionDataOptionPayload[];
}

/** All options have names, and an option can either be a parameter and input value--in which case `value` will be set--or it can denote a subcommand or group--in which case it will contain a top-level key and another array of `options`. 
`value` and `options` are mutually exclusive. */
export interface ApplicationCommandInteractionDataOptionPayload {
     /** the name of the parameter */
    name: string;
     /** the value of the pair */
    value?: DeviceTypes;
     /** present if this option is a group or subcommand */
    options?: ApplicationCommandInteractionDataOptionPayload[];
}

/** After receiving an interaction, you must respond to acknowledge it. This may be a `pong` for a `ping`, a message, or simply an acknowledgement that you have received it and will handle the command async.
Interaction responses may choose to "eat" the user's command input if you do not wish to have their slash command show up as message in chat. This may be helpful for slash commands, or commands whose responses are asynchronous or ephemeral messages. */
export interface InteractionResponsePayload {
     /** the type of response */
    type: InteractionResponseType;
     /** an optional response message */
    data?: InteractionApplicationCommandCallbackDataPayload;
}

/** Not all message fields are currently supported. */
export interface InteractionApplicationCommandCallbackDataPayload {
     /** is the response TTS */
    tts?: boolean;
     /** message content */
    content: string;
     /** supports up to 10 embeds */
    embeds?: EmbedPayload[];
     /** [allowed mentions](#DOCS_RESOURCES_CHANNEL/allowed-mentions-object) object */
    allowed_mentions?: AllowedMentionTypes;
}

export interface AuditLogPayload {
     /** list of webhooks found in the audit log */
    webhooks: WebhookPayload[];
     /** list of users found in the audit log */
    users: UserPayload[];
     /** list of audit log entries */
    audit_log_entries: AuditLogEntryPayload[];
     /** list of partial integration objects */
    integrations: IntegrationPayload[];
}

export interface AuditLogPayload {
     /** list of webhooks found in the audit log */
    webhooks: WebhookPayload[];
     /** list of users found in the audit log */
    users: UserPayload[];
     /** list of audit log entries */
    audit_log_entries: AuditLogEntryPayload[];
     /** list of partial integration objects */
    integrations: IntegrationPayload[];
}

export interface AuditLogEntryPayload {
     /** id of the affected entity (webhook, user, role, etc.) */
    target_id: string | null;
     /** changes made to the target_id */
    changes?: AuditLogChangePayload[];
     /** the user who made the changes */
    user_id: string;
     /** id of the entry */
    id: string;
     /** type of action that occurred */
    action_type: AuditLogEvents;
     /** additional info for certain action types */
    options?: OptionalAuditEntryInfoPayload;
     /** the reason for the change (0-512 characters) */
    reason?: string;
}

export interface AuditLogEntryPayload {
     /** id of the affected entity (webhook, user, role, etc.) */
    target_id: string | null;
     /** changes made to the target_id */
    changes?: AuditLogChangePayload[];
     /** the user who made the changes */
    user_id: string;
     /** id of the entry */
    id: string;
     /** type of action that occurred */
    action_type: AuditLogEvents;
     /** additional info for certain action types */
    options?: OptionalAuditEntryInfoPayload;
     /** the reason for the change (0-512 characters) */
    reason?: string;
}

export interface OptionalAuditEntryInfoPayload {
     /** number of days after which inactive members were kicked */
    delete_member_days: string;
     /** number of members removed by the prune */
    members_removed: string;
     /** channel in which the entities were targeted */
    channel_id: string;
     /** id of the message that was targeted */
    message_id: string;
     /** number of entities that were targeted */
    count: string;
     /** id of the overwritten entity */
    id: string;
     /** type of overwritten entity - "0" for "role" or "1" for "member" */
    type: string;
     /** name of the role if type is "0" (not present if type is "1") */
    role_name: string;
}

export interface AuditLogChangePayload {
     /** new value of the key */
    new_value?: any;
     /** old value of the key */
    old_value?: any;
     /** name of audit log [change key](#DOCS_RESOURCES_AUDIT_LOG/audit-log-change-object-audit-log-change-key) */
    key: string;
}

export interface AuditLogChangePayload {
     /** new value of the key */
    new_value?: any;
     /** old value of the key */
    old_value?: any;
     /** name of audit log [change key](#DOCS_RESOURCES_AUDIT_LOG/audit-log-change-object-audit-log-change-key) */
    key: string;
}

/** Represents a guild or DM channel within Discord. */
export interface ChannelPayload {
     /** the id of this channel */
    id: string;
     /** the [type of channel](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types) */
    type: number;
     /** the id of the guild */
    guild_id?: string;
     /** sorting position of the channel */
    position?: number;
     /** explicit permission overwrites for members and roles */
    permission_overwrites?: OverwritePayload[];
     /** the name of the channel (2-100 characters) */
    name?: string;
     /** the channel topic (0-1024 characters) */
    topic?: string | null;
     /** whether the channel is nsfw */
    nsfw?: boolean;
     /** the id of the last message sent in this channel (may not point to an existing or valid message) */
    last_message_id?: string | null;
     /** the bitrate (in bits) of the voice channel */
    bitrate?: number;
     /** the user limit of the voice channel */
    user_limit?: number;
     /** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages` or `manage_channel`, are unaffected */
    rate_limit_per_user?: number;
     /** the recipients of the DM */
    recipients?: UserPayload[];
     /** icon hash */
    icon?: string | null;
     /** id of the DM creator */
    owner_id?: string;
     /** application id of the group DM creator if it is bot-created */
    application_id?: string;
     /** id of the parent category for a channel (each parent category can contain up to 50 channels) */
    parent_id?: string | null;
     /** when the last pinned message was pinned. This may be `null` in events such as `GUILD_CREATE` when a message is not pinned. */
    last_pin_timestamp?: Date | null;
}

export interface ChannelPayload {
     /** the id of this channel */
    id: string;
     /** the [type of channel](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types) */
    type: number;
     /** the id of the guild */
    guild_id?: string;
     /** sorting position of the channel */
    position?: number;
     /** explicit permission overwrites for members and roles */
    permission_overwrites?: OverwritePayload[];
     /** the name of the channel (2-100 characters) */
    name?: string;
     /** the channel topic (0-1024 characters) */
    topic?: string | null;
     /** whether the channel is nsfw */
    nsfw?: boolean;
     /** the id of the last message sent in this channel (may not point to an existing or valid message) */
    last_message_id?: string | null;
     /** the bitrate (in bits) of the voice channel */
    bitrate?: number;
     /** the user limit of the voice channel */
    user_limit?: number;
     /** amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages` or `manage_channel`, are unaffected */
    rate_limit_per_user?: number;
     /** the recipients of the DM */
    recipients?: UserPayload[];
     /** icon hash */
    icon?: string | null;
     /** id of the DM creator */
    owner_id?: string;
     /** application id of the group DM creator if it is bot-created */
    application_id?: string;
     /** id of the parent category for a channel (each parent category can contain up to 50 channels) */
    parent_id?: string | null;
     /** when the last pinned message was pinned. This may be `null` in events such as `GUILD_CREATE` when a message is not pinned. */
    last_pin_timestamp?: Date | null;
}

/** Represents a message sent in a channel within Discord. */
export interface MessagePayload {
     /** id of the message */
    id: string;
     /** id of the channel the message was sent in */
    channel_id: string;
     /** id of the guild the message was sent in */
    guild_id?: string;
     /** the author of this message (not guaranteed to be a valid user, see below) */
    author: UserPayload;
     /** member properties for this message's author */
    member?: GuildMemberPayload;
     /** contents of the message */
    content: string;
     /** when this message was sent */
    timestamp: Date;
     /** when this message was edited (or null if never) */
    edited_timestamp: Date | null;
     /** whether this was a TTS message */
    tts: boolean;
     /** whether this message mentions everyone */
    mention_everyone: boolean;
     /** users specifically mentioned in the message */
    mentions: UserFlags[];
     /** roles specifically mentioned in this message */
    mention_roles: RolePayload[];
     /** channels specifically mentioned in this message */
    mention_channels?: ChannelMentionPayload[];
     /** any attached files */
    attachments: AttachmentPayload[];
     /** any embedded content */
    embeds: EmbedPayload[];
     /** reactions to the message */
    reactions?: ReactionPayload[];
     /** used for validating a message was sent */
    nonce?: number | string;
     /** whether this message is pinned */
    pinned: boolean;
     /** if the message is generated by a webhook, this is the webhook's id */
    webhook_id?: string;
     /** [type of message](#DOCS_RESOURCES_CHANNEL/message-object-message-types) */
    type: number;
     /** sent with Rich Presence-related chat embeds */
    activity?: MessageActivityPayload;
     /** sent with Rich Presence-related chat embeds */
    application?: MessageApplicationPayload;
     /** reference data sent with crossposted messages and replies */
    message_reference?: MessageReferencePayload;
     /** [message flags](#DOCS_RESOURCES_CHANNEL/message-object-message-flags) combined as a [bitfield](https://en.wikipedia.org/wiki/Bit_field) */
    flags?: number;
     /** the stickers sent with the message (bots currently can only receive messages with stickers, not send) */
    stickers?: MessageStickerPayload[];
     /** the message associated with the message_reference */
    referenced_message?: MessagePayload | null;
}

export interface MessagePayload {
     /** id of the message */
    id: string;
     /** id of the channel the message was sent in */
    channel_id: string;
     /** id of the guild the message was sent in */
    guild_id?: string;
     /** the author of this message (not guaranteed to be a valid user, see below) */
    author: UserPayload;
     /** member properties for this message's author */
    member?: GuildMemberPayload;
     /** contents of the message */
    content: string;
     /** when this message was sent */
    timestamp: Date;
     /** when this message was edited (or null if never) */
    edited_timestamp: Date | null;
     /** whether this was a TTS message */
    tts: boolean;
     /** whether this message mentions everyone */
    mention_everyone: boolean;
     /** users specifically mentioned in the message */
    mentions: UserFlags[];
     /** roles specifically mentioned in this message */
    mention_roles: RolePayload[];
     /** channels specifically mentioned in this message */
    mention_channels?: ChannelMentionPayload[];
     /** any attached files */
    attachments: AttachmentPayload[];
     /** any embedded content */
    embeds: EmbedPayload[];
     /** reactions to the message */
    reactions?: ReactionPayload[];
     /** used for validating a message was sent */
    nonce?: number | string;
     /** whether this message is pinned */
    pinned: boolean;
     /** if the message is generated by a webhook, this is the webhook's id */
    webhook_id?: string;
     /** [type of message](#DOCS_RESOURCES_CHANNEL/message-object-message-types) */
    type: number;
     /** sent with Rich Presence-related chat embeds */
    activity?: MessageActivityPayload;
     /** sent with Rich Presence-related chat embeds */
    application?: MessageApplicationPayload;
     /** reference data sent with crossposted messages and replies */
    message_reference?: MessageReferencePayload;
     /** [message flags](#DOCS_RESOURCES_CHANNEL/message-object-message-flags) combined as a [bitfield](https://en.wikipedia.org/wiki/Bit_field) */
    flags?: number;
     /** the stickers sent with the message (bots currently can only receive messages with stickers, not send) */
    stickers?: MessageStickerPayload[];
     /** the message associated with the message_reference */
    referenced_message?: MessagePayload | null;
}

export interface MessageActivityPayload {
     /** [type of message activity](#DOCS_RESOURCES_CHANNEL/message-object-message-activity-types) */
    type: number;
     /** party_id from a [Rich Presence event](#DOCS_RICH_PRESENCE_HOW_TO/updating-presence-update-presence-payload-fields) */
    party_id?: string;
}

export interface MessageApplicationPayload {
     /** id of the application */
    id: string;
     /** id of the embed's image asset */
    cover_image?: string;
     /** application's description */
    description: string;
     /** id of the application's icon */
    icon: string | null;
     /** name of the application */
    name: string;
}

export interface MessageReferencePayload {
     /** id of the originating message */
    message_id?: string;
     /** id of the originating message's channel */
    channel_id?: string;
     /** id of the originating message's guild */
    guild_id?: string;
}

export interface MessageStickerPayload {
     /** id of the sticker */
    id: string;
     /** id of the pack the sticker is from */
    pack_id: string;
     /** name of the sticker */
    name: string;
     /** description of the sticker */
    description: string;
     /** a comma-separated list of tags for the sticker */
    tags?: string;
     /** sticker asset hash */
    asset: string;
     /** sticker preview asset hash */
    preview_asset: string | null;
     /** [type of sticker format](#DOCS_RESOURCES_CHANNEL/message-object-message-sticker-format-types) */
    format_type: number;
}

export interface FollowedChannelPayload {
     /** source channel id */
    channel_id: string;
     /** created target webhook id */
    webhook_id: string;
}

export interface FollowedChannelPayload {
     /** source channel id */
    channel_id: string;
     /** created target webhook id */
    webhook_id: string;
}

export interface ReactionPayload {
     /** times this emoji has been used to react */
    count: number;
     /** whether the current user reacted using this emoji */
    me: boolean;
     /** emoji information */
    emoji: EmojiPayload;
}

export interface ReactionPayload {
     /** times this emoji has been used to react */
    count: number;
     /** whether the current user reacted using this emoji */
    me: boolean;
     /** emoji information */
    emoji: EmojiPayload;
}

/** See [permissions](#DOCS_TOPICS_PERMISSIONS/permissions) for more information about the `allow` and `deny` fields. */
export interface OverwritePayload {
     /** role or user id */
    id: string;
     /** either 0 (role) or 1 (member) */
    type: number;
     /** permission bit set */
    allow: string;
     /** permission bit set */
    deny: string;
}

export interface OverwritePayload {
     /** role or user id */
    id: string;
     /** either 0 (role) or 1 (member) */
    type: number;
     /** permission bit set */
    allow: string;
     /** permission bit set */
    deny: string;
}

export interface EmbedPayload {
     /** title of embed */
    title?: string;
     /** [type of embed](#DOCS_RESOURCES_CHANNEL/embed-object-embed-types) (always "rich" for webhook embeds) */
    type?: string;
     /** description of embed */
    description?: string;
     /** url of embed */
    url?: string;
     /** timestamp of embed content */
    timestamp?: Date;
     /** color code of the embed */
    color?: number;
     /** footer information */
    footer?: EmbedFooterPayload;
     /** image information */
    image?: EmbedImagePayload;
     /** thumbnail information */
    thumbnail?: EmbedThumbnailPayload;
     /** video information */
    video?: EmbedVideoPayload;
     /** provider information */
    provider?: EmbedProviderPayload;
     /** author information */
    author?: EmbedAuthorPayload;
     /** fields information */
    fields?: EmbedFieldPayload[];
}

export interface EmbedPayload {
     /** title of embed */
    title?: string;
     /** [type of embed](#DOCS_RESOURCES_CHANNEL/embed-object-embed-types) (always "rich" for webhook embeds) */
    type?: string;
     /** description of embed */
    description?: string;
     /** url of embed */
    url?: string;
     /** timestamp of embed content */
    timestamp?: Date;
     /** color code of the embed */
    color?: number;
     /** footer information */
    footer?: EmbedFooterPayload;
     /** image information */
    image?: EmbedImagePayload;
     /** thumbnail information */
    thumbnail?: EmbedThumbnailPayload;
     /** video information */
    video?: EmbedVideoPayload;
     /** provider information */
    provider?: EmbedProviderPayload;
     /** author information */
    author?: EmbedAuthorPayload;
     /** fields information */
    fields?: EmbedFieldPayload[];
}

export interface EmbedThumbnailPayload {
     /** source url of thumbnail (only supports http(s) and attachments) */
    url?: string;
     /** a proxied url of the thumbnail */
    proxy_url?: string;
     /** height of thumbnail */
    height?: number;
     /** width of thumbnail */
    width?: number;
}

export interface EmbedVideoPayload {
     /** source url of video */
    url?: string;
     /** a proxied url of the video */
    proxy_url?: string;
     /** height of video */
    height?: number;
     /** width of video */
    width?: number;
}

export interface EmbedImagePayload {
     /** source url of image (only supports http(s) and attachments) */
    url?: string;
     /** a proxied url of the image */
    proxy_url?: string;
     /** height of image */
    height?: number;
     /** width of image */
    width?: number;
}

export interface EmbedProviderPayload {
     /** name of provider */
    name?: string;
     /** url of provider */
    url?: string;
}

export interface EmbedAuthorPayload {
     /** name of author */
    name?: string;
     /** url of author */
    url?: string;
     /** url of author icon (only supports http(s) and attachments) */
    icon_url?: string;
     /** a proxied url of author icon */
    proxy_icon_url?: string;
}

export interface EmbedFooterPayload {
     /** footer text */
    text: string;
     /** url of footer icon (only supports http(s) and attachments) */
    icon_url?: string;
     /** a proxied url of footer icon */
    proxy_icon_url?: string;
}

export interface EmbedFieldPayload {
     /** name of the field */
    name: string;
     /** value of the field */
    value: string;
     /** whether or not this field should display inline */
    inline?: boolean;
}

export interface AttachmentPayload {
     /** attachment id */
    id: string;
     /** name of file attached */
    filename: string;
     /** size of file in bytes */
    size: number;
     /** source url of file */
    url: string;
     /** a proxied url of file */
    proxy_url: string;
     /** height of file (if image) */
    height: number | null;
     /** width of file (if image) */
    width: number | null;
}

export interface AttachmentPayload {
     /** attachment id */
    id: string;
     /** name of file attached */
    filename: string;
     /** size of file in bytes */
    size: number;
     /** source url of file */
    url: string;
     /** a proxied url of file */
    proxy_url: string;
     /** height of file (if image) */
    height: number | null;
     /** width of file (if image) */
    width: number | null;
}

export interface ChannelMentionPayload {
     /** id of the channel */
    id: string;
     /** id of the guild containing the channel */
    guild_id: string;
     /** the [type of channel](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types) */
    type: number;
     /** the name of the channel */
    name: string;
}

export interface ChannelMentionPayload {
     /** id of the channel */
    id: string;
     /** id of the guild containing the channel */
    guild_id: string;
     /** the [type of channel](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types) */
    type: number;
     /** the name of the channel */
    name: string;
}

export interface AllowedMentionsPayload {
     /** An array of [allowed mention types](#DOCS_RESOURCES_CHANNEL/allowed-mentions-object-allowed-mention-types) to parse from the content. */
    parse: AllowedMentionTypes[];
     /** Array of role_ids to mention (Max size of 100) */
    roles: string[];
     /** Array of user_ids to mention (Max size of 100) */
    users: string[];
     /** For replies, whether to mention the author of the message being replied to (default false) */
    replied_user: boolean;
}

export interface EmojiPayload {
     /** [emoji id](#DOCS_REFERENCE/image-formatting) */
    id: string | null;
     /** emoji name */
    name: String | null;
     /** roles this emoji is whitelisted to */
    roles?: RolePayload[];
     /** user that created this emoji */
    user?: UserPayload;
     /** whether this emoji must be wrapped in colons */
    require_colons?: boolean;
     /** whether this emoji is managed */
    managed?: boolean;
     /** whether this emoji is animated */
    animated?: boolean;
     /** whether this emoji can be used, may be false due to loss of Server Boosts */
    available?: boolean;
}

export interface EmojiPayload {
     /** [emoji id](#DOCS_REFERENCE/image-formatting) */
    id: string | null;
     /** emoji name */
    name: String | null;
     /** roles this emoji is whitelisted to */
    roles?: RolePayload[];
     /** user that created this emoji */
    user?: UserPayload;
     /** whether this emoji must be wrapped in colons */
    require_colons?: boolean;
     /** whether this emoji is managed */
    managed?: boolean;
     /** whether this emoji is animated */
    animated?: boolean;
     /** whether this emoji can be used, may be false due to loss of Server Boosts */
    available?: boolean;
}

export interface GuildPayload {
     /** guild id */
    id: string;
     /** guild name (2-100 characters, excluding trailing and leading whitespace) */
    name: string;
     /** [icon hash](#DOCS_REFERENCE/image-formatting) */
    icon: string | null;
     /** [icon hash](#DOCS_REFERENCE/image-formatting), returned when in the template object */
    icon_hash?: string | null;
     /** [splash hash](#DOCS_REFERENCE/image-formatting) */
    splash: string | null;
     /** [discovery splash hash](#DOCS_REFERENCE/image-formatting); only present for guilds with the "DISCOVERABLE" feature */
    discovery_splash: string | null;
     /** true if [the user](#DOCS_RESOURCES_USER/get-current-user-guilds) is the owner of the guild */
    owner?: boolean;
     /** id of owner */
    owner_id: string;
     /** total permissions for [the user](#DOCS_RESOURCES_USER/get-current-user-guilds) in the guild (excludes overrides) */
    permissions?: string;
     /** [voice region](#DOCS_RESOURCES_VOICE/voice-region-object) id for the guild */
    region: string;
     /** id of afk channel */
    afk_channel_id: string | null;
     /** afk timeout in seconds */
    afk_timeout: number;
     /** true if the server widget is enabled */
    widget_enabled?: boolean;
     /** the channel id that the widget will generate an invite to, or `null` if set to no invite */
    widget_channel_id?: string | null;
     /** [verification level](#DOCS_RESOURCES_GUILD/guild-object-verification-level) required for the guild */
    verification_level: number;
     /** default [message notifications level](#DOCS_RESOURCES_GUILD/guild-object-default-message-notification-level) */
    default_message_notifications: number;
     /** [explicit content filter level](#DOCS_RESOURCES_GUILD/guild-object-explicit-content-filter-level) */
    explicit_content_filter: number;
     /** roles in the guild */
    roles: RolePayload[];
     /** custom guild emojis */
    emojis: EmojiPayload[];
     /** enabled guild features */
    features: GuildFeatures[];
     /** required [MFA level](#DOCS_RESOURCES_GUILD/guild-object-mfa-level) for the guild */
    mfa_level: number;
     /** application id of the guild creator if it is bot-created */
    application_id: string | null;
     /** the id of the channel where guild notices such as welcome messages and boost events are posted */
    system_channel_id: string | null;
     /** [system channel flags](#DOCS_RESOURCES_GUILD/guild-object-system-channel-flags) */
    system_channel_flags: number;
     /** the id of the channel where Community guilds can display rules and/or guidelines */
    rules_channel_id: string | null;
     /** when this guild was joined at */
    joined_at?: Date;
     /** true if this is considered a large guild */
    large?: boolean;
     /** true if this guild is unavailable due to an outage */
    unavailable?: boolean;
     /** total number of members in this guild */
    member_count?: number;
     /** states of members currently in voice channels; lacks the `guild_id` key */
    voice_states?: VoiceStatePayload[];
     /** users in the guild */
    members?: GuildMemberPayload[];
     /** channels in the guild */
    channels?: ChannelPayload[];
     /** presences of the members in the guild, will only include non-offline members if the size is greater than `large threshold` */
    presences?: PresenceUpdatePayload[];
     /** the maximum number of presences for the guild (the default value, currently 25000, is in effect when `null` is returned) */
    max_presences?: number | null;
     /** the maximum number of members for the guild */
    max_members?: number;
     /** the vanity url code for the guild */
    vanity_url_code: string | null;
     /** the description for the guild, if the guild is discoverable */
    description: string | null;
     /** [banner hash](#DOCS_REFERENCE/image-formatting) */
    banner: string | null;
     /** [premium tier](#DOCS_RESOURCES_GUILD/guild-object-premium-tier) (Server Boost level) */
    premium_tier: number;
     /** the number of boosts this guild currently has */
    premium_subscription_count?: number;
     /** the preferred locale of a Community guild; used in server discovery and notices from Discord; defaults to "en-US" */
    preferred_locale: string;
     /** the id of the channel where admins and moderators of Community guilds receive notices from Discord */
    public_updates_channel_id: string | null;
     /** the maximum amount of users in a video channel */
    max_video_channel_users?: number;
     /** approximate number of members in this guild, returned from the `GET /guilds/<id>` endpoint when `with_counts` is `true` */
    approximate_member_count?: number;
     /** approximate number of non-offline members in this guild, returned from the `GET /guilds/<id>` endpoint when `with_counts` is `true` */
    approximate_presence_count?: number;
     /** the welcome screen of a Community guild, shown to new members, returned when in the invite object */
    welcome_screen?: WelcomeScreenPayload;
}

export interface GuildPayload {
     /** guild id */
    id: string;
     /** guild name (2-100 characters, excluding trailing and leading whitespace) */
    name: string;
     /** [icon hash](#DOCS_REFERENCE/image-formatting) */
    icon: string | null;
     /** [icon hash](#DOCS_REFERENCE/image-formatting), returned when in the template object */
    icon_hash?: string | null;
     /** [splash hash](#DOCS_REFERENCE/image-formatting) */
    splash: string | null;
     /** [discovery splash hash](#DOCS_REFERENCE/image-formatting); only present for guilds with the "DISCOVERABLE" feature */
    discovery_splash: string | null;
     /** true if [the user](#DOCS_RESOURCES_USER/get-current-user-guilds) is the owner of the guild */
    owner?: boolean;
     /** id of owner */
    owner_id: string;
     /** total permissions for [the user](#DOCS_RESOURCES_USER/get-current-user-guilds) in the guild (excludes overrides) */
    permissions?: string;
     /** [voice region](#DOCS_RESOURCES_VOICE/voice-region-object) id for the guild */
    region: string;
     /** id of afk channel */
    afk_channel_id: string | null;
     /** afk timeout in seconds */
    afk_timeout: number;
     /** true if the server widget is enabled */
    widget_enabled?: boolean;
     /** the channel id that the widget will generate an invite to, or `null` if set to no invite */
    widget_channel_id?: string | null;
     /** [verification level](#DOCS_RESOURCES_GUILD/guild-object-verification-level) required for the guild */
    verification_level: number;
     /** default [message notifications level](#DOCS_RESOURCES_GUILD/guild-object-default-message-notification-level) */
    default_message_notifications: number;
     /** [explicit content filter level](#DOCS_RESOURCES_GUILD/guild-object-explicit-content-filter-level) */
    explicit_content_filter: number;
     /** roles in the guild */
    roles: RolePayload[];
     /** custom guild emojis */
    emojis: EmojiPayload[];
     /** enabled guild features */
    features: GuildFeatures[];
     /** required [MFA level](#DOCS_RESOURCES_GUILD/guild-object-mfa-level) for the guild */
    mfa_level: number;
     /** application id of the guild creator if it is bot-created */
    application_id: string | null;
     /** the id of the channel where guild notices such as welcome messages and boost events are posted */
    system_channel_id: string | null;
     /** [system channel flags](#DOCS_RESOURCES_GUILD/guild-object-system-channel-flags) */
    system_channel_flags: number;
     /** the id of the channel where Community guilds can display rules and/or guidelines */
    rules_channel_id: string | null;
     /** when this guild was joined at */
    joined_at?: Date;
     /** true if this is considered a large guild */
    large?: boolean;
     /** true if this guild is unavailable due to an outage */
    unavailable?: boolean;
     /** total number of members in this guild */
    member_count?: number;
     /** states of members currently in voice channels; lacks the `guild_id` key */
    voice_states?: VoiceStatePayload[];
     /** users in the guild */
    members?: GuildMemberPayload[];
     /** channels in the guild */
    channels?: ChannelPayload[];
     /** presences of the members in the guild, will only include non-offline members if the size is greater than `large threshold` */
    presences?: PresenceUpdatePayload[];
     /** the maximum number of presences for the guild (the default value, currently 25000, is in effect when `null` is returned) */
    max_presences?: number | null;
     /** the maximum number of members for the guild */
    max_members?: number;
     /** the vanity url code for the guild */
    vanity_url_code: string | null;
     /** the description for the guild, if the guild is discoverable */
    description: string | null;
     /** [banner hash](#DOCS_REFERENCE/image-formatting) */
    banner: string | null;
     /** [premium tier](#DOCS_RESOURCES_GUILD/guild-object-premium-tier) (Server Boost level) */
    premium_tier: number;
     /** the number of boosts this guild currently has */
    premium_subscription_count?: number;
     /** the preferred locale of a Community guild; used in server discovery and notices from Discord; defaults to "en-US" */
    preferred_locale: string;
     /** the id of the channel where admins and moderators of Community guilds receive notices from Discord */
    public_updates_channel_id: string | null;
     /** the maximum amount of users in a video channel */
    max_video_channel_users?: number;
     /** approximate number of members in this guild, returned from the `GET /guilds/<id>` endpoint when `with_counts` is `true` */
    approximate_member_count?: number;
     /** approximate number of non-offline members in this guild, returned from the `GET /guilds/<id>` endpoint when `with_counts` is `true` */
    approximate_presence_count?: number;
     /** the welcome screen of a Community guild, shown to new members, returned when in the invite object */
    welcome_screen?: WelcomeScreenPayload;
}

export interface GuildPreviewPayload {
     /** guild id */
    id: string;
     /** guild name (2-100 characters) */
    name: string;
     /** [icon hash](#DOCS_REFERENCE/image-formatting) */
    icon: string | null;
     /** [splash hash](#DOCS_REFERENCE/image-formatting) */
    splash: string | null;
     /** [discovery splash hash](#DOCS_REFERENCE/image-formatting) */
    discovery_splash: string | null;
     /** custom guild emojis */
    emojis: EmojiPayload[];
     /** enabled guild features */
    features: GuildFeatures[];
     /** approximate number of members in this guild */
    approximate_member_count: number;
     /** approximate number of online members in this guild */
    approximate_presence_count: number;
     /** the description for the guild */
    description: string | null;
}

export interface GuildPreviewPayload {
     /** guild id */
    id: string;
     /** guild name (2-100 characters) */
    name: string;
     /** [icon hash](#DOCS_REFERENCE/image-formatting) */
    icon: string | null;
     /** [splash hash](#DOCS_REFERENCE/image-formatting) */
    splash: string | null;
     /** [discovery splash hash](#DOCS_REFERENCE/image-formatting) */
    discovery_splash: string | null;
     /** custom guild emojis */
    emojis: EmojiPayload[];
     /** enabled guild features */
    features: GuildFeatures[];
     /** approximate number of members in this guild */
    approximate_member_count: number;
     /** approximate number of online members in this guild */
    approximate_presence_count: number;
     /** the description for the guild */
    description: string | null;
}

export interface GuildWidgetPayload {
     /** whether the widget is enabled */
    enabled: boolean;
     /** the widget channel id */
    channel_id: string | null;
}

export interface GuildWidgetPayload {
     /** whether the widget is enabled */
    enabled: boolean;
     /** the widget channel id */
    channel_id: string | null;
}

export interface GuildMemberPayload {
     /** the user this guild member represents */
    user?: UserPayload;
     /** this users guild nickname */
    nick?: string | null;
     /** array of [role](#DOCS_TOPICS_PERMISSIONS/role-object) object ids */
    roles: string[];
     /** when the user joined the guild */
    joined_at: Date;
     /** when the user started [boosting](https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-) the guild */
    premium_since?: Date | null;
     /** whether the user is deafened in voice channels */
    deaf: boolean;
     /** whether the user is muted in voice channels */
    mute: boolean;
     /** whether the user has not yet passed the guild's [Membership Screening](#DOCS_RESOURCES_GUILD/membership-screening-object) requirements */
    pending?: boolean;
     /** total permissions of the member in the channel, including overrides, returned when in the interaction object */
    permissions?: string;
}

export interface GuildMemberPayload {
     /** the user this guild member represents */
    user?: UserPayload;
     /** this users guild nickname */
    nick?: string | null;
     /** array of [role](#DOCS_TOPICS_PERMISSIONS/role-object) object ids */
    roles: string[];
     /** when the user joined the guild */
    joined_at: Date;
     /** when the user started [boosting](https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-) the guild */
    premium_since?: Date | null;
     /** whether the user is deafened in voice channels */
    deaf: boolean;
     /** whether the user is muted in voice channels */
    mute: boolean;
     /** whether the user has not yet passed the guild's [Membership Screening](#DOCS_RESOURCES_GUILD/membership-screening-object) requirements */
    pending?: boolean;
     /** total permissions of the member in the channel, including overrides, returned when in the interaction object */
    permissions?: string;
}

export interface IntegrationPayload {
     /** integration id */
    id: string;
     /** integration name */
    name: string;
     /** integration type (twitch, youtube, or discord) */
    type: string;
     /** is this integration enabled */
    enabled: boolean;
     /** is this integration syncing */
    syncing?: boolean;
     /** id that this integration uses for "subscribers" */
    role_id?: string;
     /** whether emoticons should be synced for this integration (twitch only currently) */
    enable_emoticons?: boolean;
     /** the behavior of expiring subscribers */
    expire_behavior?: IntegrationExpireBehaviors;
     /** the grace period (in days) before expiring subscribers */
    expire_grace_period?: number;
     /** user for this integration */
    user?: UserPayload;
     /** integration account information */
    account: IntegrationAccountPayload;
     /** when this integration was last synced */
    synced_at?: Date;
     /** how many subscribers this integration has */
    subscriber_count?: number;
     /** has this integration been revoked */
    revoked?: boolean;
     /** The bot/OAuth2 application for discord integrations */
    application?: ApplicationPayload;
}

export interface IntegrationPayload {
     /** integration id */
    id: string;
     /** integration name */
    name: string;
     /** integration type (twitch, youtube, or discord) */
    type: string;
     /** is this integration enabled */
    enabled: boolean;
     /** is this integration syncing */
    syncing?: boolean;
     /** id that this integration uses for "subscribers" */
    role_id?: string;
     /** whether emoticons should be synced for this integration (twitch only currently) */
    enable_emoticons?: boolean;
     /** the behavior of expiring subscribers */
    expire_behavior?: IntegrationExpireBehaviors;
     /** the grace period (in days) before expiring subscribers */
    expire_grace_period?: number;
     /** user for this integration */
    user?: UserPayload;
     /** integration account information */
    account: IntegrationAccountPayload;
     /** when this integration was last synced */
    synced_at?: Date;
     /** how many subscribers this integration has */
    subscriber_count?: number;
     /** has this integration been revoked */
    revoked?: boolean;
     /** The bot/OAuth2 application for discord integrations */
    application?: ApplicationPayload;
}

export interface IntegrationAccountPayload {
     /** id of the account */
    id: string;
     /** name of the account */
    name: string;
}

export interface IntegrationAccountPayload {
     /** id of the account */
    id: string;
     /** name of the account */
    name: string;
}

export interface IntegrationApplicationPayload {
     /** the id of the app */
    id: string;
     /** the name of the app */
    name: string;
     /** the [icon hash](#DOCS_REFERENCE/image-formatting) of the app */
    icon: string | null;
     /** the description of the app */
    description: string;
     /** the description of the app */
    summary: string;
     /** the bot associated with this application */
    bot?: UserPayload;
}

export interface IntegrationApplicationPayload {
     /** the id of the app */
    id: string;
     /** the name of the app */
    name: string;
     /** the [icon hash](#DOCS_REFERENCE/image-formatting) of the app */
    icon: string | null;
     /** the description of the app */
    description: string;
     /** the description of the app */
    summary: string;
     /** the bot associated with this application */
    bot?: UserPayload;
}

export interface BanPayload {
     /** the reason for the ban */
    reason: string | null;
     /** the banned user */
    user: UserPayload;
}

export interface BanPayload {
     /** the reason for the ban */
    reason: string | null;
     /** the banned user */
    user: UserPayload;
}

export interface WelcomeScreenPayload {
     /** the server description shown in the welcome screen */
    description: string | null;
     /** the channels shown in the welcome screen, up to 5 */
    welcome_channels: WelcomeScreenChannelPayload[];
}

export interface WelcomeScreenPayload {
     /** the server description shown in the welcome screen */
    description: string | null;
     /** the channels shown in the welcome screen, up to 5 */
    welcome_channels: WelcomeScreenChannelPayload[];
}

export interface WelcomeScreenChannelPayload {
     /** the server description shown in the welcome screen */
    channel_id: string;
     /** the description shown for the channel */
    description: string;
     /** the [emoji id](#DOCS_REFERENCE/image-formatting), if the emoji is custom */
    emoji_id: string | null;
     /** the emoji name if custom, the unicode character if standard, or `null` if no emoji is set */
    emoji_name: string | null;
}

export interface MembershipScreeningPayload {
     /** when the fields were last updated */
    version: Date;
     /** the steps in the screening form */
    form_fields: MFALevel[];
     /** the server description shown in the screening form */
    description: string | null;
}

export interface MembershipScreeningFieldPayload {
     /** the type of field (currently "TERMS" is the only type) */
    field_type: EmbedTypes;
     /** the title of the field */
    label: string;
     /** the list of rules */
    values?: string[];
     /** whether the user has to fill out this field */
    required: boolean;
}

/** Represents a code that when used, adds a user to a guild or group DM channel. */
export interface InvitePayload {
     /** the invite code (unique ID) */
    code: string;
     /** the guild this invite is for */
    guild?: GuildPayload;
     /** the channel this invite is for */
    channel: ChannelPayload;
     /** the user who created the invite */
    inviter?: UserPayload;
     /** the target user for this invite */
    target_user?: UserPayload;
     /** the [type of user target](#DOCS_RESOURCES_INVITE/invite-object-target-user-types) for this invite */
    target_user_type?: number;
     /** approximate count of online members (only present when target_user is set) */
    approximate_presence_count?: number;
     /** approximate count of total members */
    approximate_member_count?: number;
}

export interface InvitePayload {
     /** the invite code (unique ID) */
    code: string;
     /** the guild this invite is for */
    guild?: GuildPayload;
     /** the channel this invite is for */
    channel: ChannelPayload;
     /** the user who created the invite */
    inviter?: UserPayload;
     /** the target user for this invite */
    target_user?: UserPayload;
     /** the [type of user target](#DOCS_RESOURCES_INVITE/invite-object-target-user-types) for this invite */
    target_user_type?: number;
     /** approximate count of online members (only present when target_user is set) */
    approximate_presence_count?: number;
     /** approximate count of total members */
    approximate_member_count?: number;
}

/** Extra information about an invite, will extend the [invite](#DOCS_RESOURCES_INVITE/invite-object) object. */
export interface InviteMetadataPayload {
     /** number of times this invite has been used */
    uses: number;
     /** max number of times this invite can be used */
    max_uses: number;
     /** duration (in seconds) after which the invite expires */
    max_age: number;
     /** whether this invite only grants temporary membership */
    temporary: boolean;
     /** when this invite was created */
    created_at: Date;
}

export interface InviteMetadataPayload {
     /** number of times this invite has been used */
    uses: number;
     /** max number of times this invite can be used */
    max_uses: number;
     /** duration (in seconds) after which the invite expires */
    max_age: number;
     /** whether this invite only grants temporary membership */
    temporary: boolean;
     /** when this invite was created */
    created_at: Date;
}

/** Represents a code that when used, creates a guild based on a snapshot of an existing one. */
export interface TemplatePayload {
     /** the template code (unique ID) */
    code: string;
     /** template name */
    name: string;
     /** the description for the template */
    description: string | null;
     /** number of times this template has been used */
    usage_count: number;
     /** the ID of the user who created the template */
    creator_id: string;
     /** the user who created the template */
    creator: UserPayload;
     /** when this template was created */
    created_at: Date;
     /** when this template was last synced to the source guild */
    updated_at: Date;
     /** the ID of the guild this template is based on */
    source_guild_id: string;
     /** the guild snapshot this template contains */
    serialized_source_guild: GuildPayload;
     /** whether the template has unsynced changes */
    is_dirty: boolean | null;
}

export interface TemplatePayload {
     /** the template code (unique ID) */
    code: string;
     /** template name */
    name: string;
     /** the description for the template */
    description: string | null;
     /** number of times this template has been used */
    usage_count: number;
     /** the ID of the user who created the template */
    creator_id: string;
     /** the user who created the template */
    creator: UserPayload;
     /** when this template was created */
    created_at: Date;
     /** when this template was last synced to the source guild */
    updated_at: Date;
     /** the ID of the guild this template is based on */
    source_guild_id: string;
     /** the guild snapshot this template contains */
    serialized_source_guild: GuildPayload;
     /** whether the template has unsynced changes */
    is_dirty: boolean | null;
}

export interface UserPayload {
     /** the user's id */
    id: string;
     /** the user's username, not unique across the platform */
    username: string;
     /** the user's 4-digit discord-tag */
    discriminator: string;
     /** the user's [avatar hash](#DOCS_REFERENCE/image-formatting) */
    avatar: string | null;
     /** whether the user belongs to an OAuth2 application */
    bot?: boolean;
     /** whether the user is an Official Discord System user (part of the urgent message system) */
    system?: boolean;
     /** whether the user has two factor enabled on their account */
    mfa_enabled?: boolean;
     /** the user's chosen language option */
    locale?: string;
     /** whether the email on this account has been verified */
    verified?: boolean;
     /** the user's email */
    email?: string | null;
     /** the [flags](#DOCS_RESOURCES_USER/user-object-user-flags) on a user's account */
    flags?: number;
     /** the [type of Nitro subscription](#DOCS_RESOURCES_USER/user-object-premium-types) on a user's account */
    premium_type?: number;
     /** the public [flags](#DOCS_RESOURCES_USER/user-object-user-flags) on a user's account */
    public_flags?: number;
}

export interface UserPayload {
     /** the user's id */
    id: string;
     /** the user's username, not unique across the platform */
    username: string;
     /** the user's 4-digit discord-tag */
    discriminator: string;
     /** the user's [avatar hash](#DOCS_REFERENCE/image-formatting) */
    avatar: string | null;
     /** whether the user belongs to an OAuth2 application */
    bot?: boolean;
     /** whether the user is an Official Discord System user (part of the urgent message system) */
    system?: boolean;
     /** whether the user has two factor enabled on their account */
    mfa_enabled?: boolean;
     /** the user's chosen language option */
    locale?: string;
     /** whether the email on this account has been verified */
    verified?: boolean;
     /** the user's email */
    email?: string | null;
     /** the [flags](#DOCS_RESOURCES_USER/user-object-user-flags) on a user's account */
    flags?: number;
     /** the [type of Nitro subscription](#DOCS_RESOURCES_USER/user-object-premium-types) on a user's account */
    premium_type?: number;
     /** the public [flags](#DOCS_RESOURCES_USER/user-object-user-flags) on a user's account */
    public_flags?: number;
}

/** The connection object that the user has attached. */
export interface ConnectionPayload {
     /** id of the connection account */
    id: string;
     /** the username of the connection account */
    name: string;
     /** the service of the connection (twitch, youtube) */
    type: string;
     /** whether the connection is revoked */
    revoked?: boolean;
     /** an array of partial [server integrations](#DOCS_RESOURCES_GUILD/integration-object) */
    integrations?: [];
     /** whether the connection is verified */
    verified: boolean;
     /** whether friend sync is enabled for this connection */
    friend_sync: boolean;
     /** whether activities related to this connection will be shown in presence updates */
    show_activity: boolean;
     /** [visibility](#DOCS_RESOURCES_USER/connection-object-visibility-types) of this connection */
    visibility: number;
}

export interface ConnectionPayload {
     /** id of the connection account */
    id: string;
     /** the username of the connection account */
    name: string;
     /** the service of the connection (twitch, youtube) */
    type: string;
     /** whether the connection is revoked */
    revoked?: boolean;
     /** an array of partial [server integrations](#DOCS_RESOURCES_GUILD/integration-object) */
    integrations?: [];
     /** whether the connection is verified */
    verified: boolean;
     /** whether friend sync is enabled for this connection */
    friend_sync: boolean;
     /** whether activities related to this connection will be shown in presence updates */
    show_activity: boolean;
     /** [visibility](#DOCS_RESOURCES_USER/connection-object-visibility-types) of this connection */
    visibility: number;
}

/** Used to represent a user's voice connection status. */
export interface VoiceStatePayload {
     /** the guild id this voice state is for */
    guild_id?: string;
     /** the channel id this user is connected to */
    channel_id: string | null;
     /** the user id this voice state is for */
    user_id: string;
     /** the guild member this voice state is for */
    member?: GuildMemberPayload;
     /** the session id for this voice state */
    session_id: string;
     /** whether this user is deafened by the server */
    deaf: boolean;
     /** whether this user is muted by the server */
    mute: boolean;
     /** whether this user is locally deafened */
    self_deaf: boolean;
     /** whether this user is locally muted */
    self_mute: boolean;
     /** whether this user is streaming using "Go Live" */
    self_stream?: boolean;
     /** whether this user's camera is enabled */
    self_video: boolean;
     /** whether this user is muted by the current user */
    suppress: boolean;
}

export interface VoiceStatePayload {
     /** the guild id this voice state is for */
    guild_id?: string;
     /** the channel id this user is connected to */
    channel_id: string | null;
     /** the user id this voice state is for */
    user_id: string;
     /** the guild member this voice state is for */
    member?: GuildMemberPayload;
     /** the session id for this voice state */
    session_id: string;
     /** whether this user is deafened by the server */
    deaf: boolean;
     /** whether this user is muted by the server */
    mute: boolean;
     /** whether this user is locally deafened */
    self_deaf: boolean;
     /** whether this user is locally muted */
    self_mute: boolean;
     /** whether this user is streaming using "Go Live" */
    self_stream?: boolean;
     /** whether this user's camera is enabled */
    self_video: boolean;
     /** whether this user is muted by the current user */
    suppress: boolean;
}

export interface VoiceRegionPayload {
     /** unique ID for the region */
    id: string;
     /** name of the region */
    name: string;
     /** true if this is a vip-only server */
    vip: boolean;
     /** true for a single server that is closest to the current user's client */
    optimal: boolean;
     /** whether this is a deprecated voice region (avoid switching to these) */
    deprecated: boolean;
     /** whether this is a custom voice region (used for events/etc) */
    custom: boolean;
}

export interface VoiceRegionPayload {
     /** unique ID for the region */
    id: string;
     /** name of the region */
    name: string;
     /** true if this is a vip-only server */
    vip: boolean;
     /** true for a single server that is closest to the current user's client */
    optimal: boolean;
     /** whether this is a deprecated voice region (avoid switching to these) */
    deprecated: boolean;
     /** whether this is a custom voice region (used for events/etc) */
    custom: boolean;
}

/** Used to represent a webhook. */
export interface WebhookPayload {
     /** the id of the webhook */
    id: string;
     /** the [type](#DOCS_RESOURCES_WEBHOOK/webhook-object-webhook-types) of the webhook */
    type: number;
     /** the guild id this webhook is for */
    guild_id?: string;
     /** the channel id this webhook is for */
    channel_id: string;
     /** the user this webhook was created by (not returned when getting a webhook with its token) */
    user?: UserPayload;
     /** the default name of the webhook */
    name: string | null;
     /** the default avatar of the webhook */
    avatar: string | null;
     /** the secure token of the webhook (returned for Incoming Webhooks) */
    token?: string;
     /** the bot/OAuth2 application that created this webhook */
    application_id: string | null;
}

export interface WebhookPayload {
     /** the id of the webhook */
    id: string;
     /** the [type](#DOCS_RESOURCES_WEBHOOK/webhook-object-webhook-types) of the webhook */
    type: number;
     /** the guild id this webhook is for */
    guild_id?: string;
     /** the channel id this webhook is for */
    channel_id: string;
     /** the user this webhook was created by (not returned when getting a webhook with its token) */
    user?: UserPayload;
     /** the default name of the webhook */
    name: string | null;
     /** the default avatar of the webhook */
    avatar: string | null;
     /** the secure token of the webhook (returned for Incoming Webhooks) */
    token?: string;
     /** the bot/OAuth2 application that created this webhook */
    application_id: string | null;
}

export interface DevicePayload {
     /** the type of device */
    type: DeviceTypes;
     /** the device's Windows UUID */
    id: string;
     /** the hardware vendor */
    vendor: VendorPayload;
     /** the model of the product */
    model: ModelPayload;
     /** UUIDs of related devices */
    related: string[];
     /** if the device's native echo cancellation is enabled */
    echo_cancellation?: boolean;
     /** if the device's native noise suppression is enabled */
    noise_suppression?: boolean;
     /** if the device's native automatic gain control is enabled */
    automatic_gain_control?: boolean;
     /** if the device is hardware muted */
    hardware_mute?: boolean;
}

export interface VendorPayload {
     /** name of the vendor */
    name: string;
     /** url for the vendor */
    url: string;
}

export interface ModelPayload {
     /** name of the model */
    name: string;
     /** url for the model */
    url: string;
}

export interface GatewayPayload {
     /** [opcode](#DOCS_TOPICS_OPCODES_AND_STATUS_CODES/gateway-opcodes) for the payload */
    op: number;
     /** event data */
    d: any | null;
     /** sequence number, used for resuming sessions and heartbeats */
    s: number | null;
     /** the event name for this payload */
    t: String | null;
}

export interface IdentifyPayload {
     /** authentication token */
    token: string;
     /** [connection properties](#DOCS_TOPICS_GATEWAY/identify-identify-connection-properties) */
    properties: IdentifyConnectionPropertiesPayload;
     /** whether this connection supports compression of packets */
    compress?: boolean;
     /** value between 50 and 250, total number of members where the gateway will stop sending offline members in the guild member list */
    large_threshold?: number;
     /** used for [Guild Sharding](#DOCS_TOPICS_GATEWAY/sharding) */
    shard?: number[];
     /** presence structure for initial presence information */
    presence?: PresenceUpdatePayload;
     /** enables dispatching of guild subscription events (presence and typing events) */
    guild_subscriptions?: boolean;
     /** the [Gateway Intents](#DOCS_TOPICS_GATEWAY/gateway-intents) you wish to receive */
    intents: number;
}

export interface IdentifyConnectionPropertiesPayload {
     /** your operating system */
    $os: string;
     /** your library name */
    $browser: string;
     /** your library name */
    $device: string;
}

export interface ResumePayload {
     /** session token */
    token: string;
     /** session id */
    session_id: string;
     /** last sequence number received */
    seq: number;
}

export interface GuildRequestMembersPayload {
     /** id of the guild to get members for */
    guild_id: string;
     /** string that username starts with, or an empty string to return all members */
    query?: string;
     /** maximum number of members to send matching the `query`; a limit of `0` can be used with an empty string `query` to return all members */
    limit: number;
     /** used to specify if we want the presences of the matched members */
    presences?: boolean;
     /** used to specify which users you wish to fetch */
    user_ids?: string | string[];
     /** nonce to identify the [Guild Members Chunk](#DOCS_TOPICS_GATEWAY/guild-members-chunk) response */
    nonce?: string;
}

export interface GatewayVoiceStateUpdatePayload {
     /** id of the guild */
    guild_id: string;
     /** id of the voice channel client wants to join (null if disconnecting) */
    channel_id: string | null;
     /** is the client muted */
    self_mute: boolean;
     /** is the client deafened */
    self_deaf: boolean;
}

export interface GatewayStatusUpdatePayload {
     /** unix time (in milliseconds) of when the client went idle, or null if the client is not idle */
    since: number | null;
     /** null, or the user's activities */
    activities: ActivityPayload[] | null;
     /** the user's new [status](#DOCS_TOPICS_GATEWAY/update-status-status-types) */
    status: string;
     /** whether or not the client is afk */
    afk: boolean;
}

export interface HelloPayload {
     /** the interval (in milliseconds) the client should heartbeat with */
    heartbeat_interval: number;
}

export interface ReadyEventFieldsPayload {
     /** [gateway version](#DOCS_TOPICS_GATEWAY/gateways-gateway-versions) */
    v: number;
     /** information about the user including email */
    user: UserPayload;
     /** empty array */
    private_channels: [];
     /** the guilds the user is in */
    guilds: GuildPayload[];
     /** used for resuming connections */
    session_id: string;
     /** the [shard information](#DOCS_TOPICS_GATEWAY/sharding) associated with this session, if sent when identifying */
    shard?: number[];
     /** contains `id` and `flags` */
    application: ApplicationPayload;
}

export interface ChannelPinsUpdateEventFieldsPayload {
     /** the id of the guild */
    guild_id?: string;
     /** the id of the channel */
    channel_id: string;
     /** the time at which the most recent pinned message was pinned */
    last_pin_timestamp?: Date | null;
}

export interface GuildBanAddEventFieldsPayload {
     /** id of the guild */
    guild_id: string;
     /** the banned user */
    user: MFALevel;
}

export interface GuildBanRemoveEventFieldsPayload {
     /** id of the guild */
    guild_id: string;
     /** the unbanned user */
    user: MFALevel;
}

export interface GuildEmojisUpdateEventFieldsPayload {
     /** id of the guild */
    guild_id: string;
     /** array of [emojis](#DOCS_RESOURCES_EMOJI/emoji-object) */
    emojis: [];
}

export interface GuildIntegrationsUpdateEventFieldsPayload {
     /** id of the guild whose integrations were updated */
    guild_id: string;
}

export interface GuildMemberRemoveEventFieldsPayload {
     /** the id of the guild */
    guild_id: string;
     /** the user who was removed */
    user: MFALevel;
}

export interface GuildMemberUpdateEventFieldsPayload {
     /** the id of the guild */
    guild_id: string;
     /** user role ids */
    roles: string[];
     /** the user */
    user: MFALevel;
     /** nickname of the user in the guild */
    nick?: string | null;
     /** when the user joined the guild */
    joined_at: Date;
     /** when the user starting [boosting](https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-) the guild */
    premium_since?: Date | null;
     /** whether the user has not yet passed the guild's [Membership Screening](#DOCS_RESOURCES_GUILD/membership-screening-object) requirements */
    pending?: boolean;
}

export interface GuildMembersChunkEventFieldsPayload {
     /** the id of the guild */
    guild_id: string;
     /** set of guild members */
    members: GuildMemberPayload[];
     /** the chunk index in the expected chunks for this response (0 <= chunk\_index < chunk\_count) */
    chunk_index: number;
     /** the total number of expected chunks for this response */
    chunk_count: number;
     /** if passing an invalid id to `REQUEST_GUILD_MEMBERS`, it will be returned here */
    not_found?: [];
     /** if passing true to `REQUEST_GUILD_MEMBERS`, presences of the returned members will be here */
    presences?: PresenceUpdatePayload[];
     /** the nonce used in the [Guild Members Request](#DOCS_TOPICS_GATEWAY/request-guild-members) */
    nonce?: string;
}

export interface GuildRoleCreateEventFieldsPayload {
     /** the id of the guild */
    guild_id: string;
     /** the role created */
    role: MFALevel;
}

export interface GuildRoleUpdateEventFieldsPayload {
     /** the id of the guild */
    guild_id: string;
     /** the role updated */
    role: MFALevel;
}

export interface GuildRoleDeleteEventFieldsPayload {
     /** id of the guild */
    guild_id: string;
     /** id of the role */
    role_id: string;
}

export interface InviteCreateEventFieldsPayload {
     /** the channel the invite is for */
    channel_id: string;
     /** the unique invite [code](#DOCS_RESOURCES_INVITE/invite-object) */
    code: string;
     /** the time at which the invite was created */
    created_at: Date;
     /** the guild of the invite */
    guild_id?: string;
     /** the user that created the invite */
    inviter?: UserPayload;
     /** how long the invite is valid for (in seconds) */
    max_age: number;
     /** the maximum number of times the invite can be used */
    max_uses: number;
     /** the target user for this invite */
    target_user?: UserPayload;
     /** the [type of user target](#DOCS_RESOURCES_INVITE/invite-object-target-user-types) for this invite */
    target_user_type?: number;
     /** whether or not the invite is temporary (invited users will be kicked on disconnect unless they're assigned a role) */
    temporary: boolean;
     /** how many times the invite has been used (always will be 0) */
    uses: number;
}

export interface InviteDeleteEventFieldsPayload {
     /** the channel of the invite */
    channel_id: string;
     /** the guild of the invite */
    guild_id?: string;
     /** the unique invite [code](#DOCS_RESOURCES_INVITE/invite-object) */
    code: string;
}

export interface MessageDeleteEventFieldsPayload {
     /** the id of the message */
    id: string;
     /** the id of the channel */
    channel_id: string;
     /** the id of the guild */
    guild_id?: string;
}

export interface MessageDeleteBulkEventFieldsPayload {
     /** the ids of the messages */
    ids: string[];
     /** the id of the channel */
    channel_id: string;
     /** the id of the guild */
    guild_id?: string;
}

export interface MessageReactionAddEventFieldsPayload {
     /** the id of the user */
    user_id: string;
     /** the id of the channel */
    channel_id: string;
     /** the id of the message */
    message_id: string;
     /** the id of the guild */
    guild_id?: string;
     /** the member who reacted if this happened in a guild */
    member?: MFALevel;
     /** the emoji used to react - [example](#DOCS_RESOURCES_EMOJI/emoji-object-gateway-reaction-standard-emoji-example) */
    emoji: EmojiPayload;
}

export interface MessageReactionRemoveEventFieldsPayload {
     /** the id of the user */
    user_id: string;
     /** the id of the channel */
    channel_id: string;
     /** the id of the message */
    message_id: string;
     /** the id of the guild */
    guild_id?: string;
     /** the emoji used to react - [example](#DOCS_RESOURCES_EMOJI/emoji-object-gateway-reaction-standard-emoji-example) */
    emoji: EmojiPayload;
}

export interface MessageReactionRemoveAllEventFieldsPayload {
     /** the id of the channel */
    channel_id: string;
     /** the id of the message */
    message_id: string;
     /** the id of the guild */
    guild_id?: string;
}

export interface PresenceUpdatePayload {
     /** the user presence is being updated for */
    user: UserPayload;
     /** id of the guild */
    guild_id: string;
     /** either "idle", "dnd", "online", or "offline" */
    status: string;
     /** user's current activities */
    activities: ActivityPayload[];
     /** user's platform-dependent status */
    client_status: ClientStatusPayload;
}

/** Active sessions are indicated with an "online", "idle", or "dnd" string per platform. If a user is offline or invisible, the corresponding field is not present. */
export interface ClientStatusPayload {
     /** the user's status set for an active desktop (Windows, Linux, Mac) application session */
    desktop?: string;
     /** the user's status set for an active mobile (iOS, Android) application session */
    mobile?: string;
     /** the user's status set for an active web (browser, bot account) application session */
    web?: string;
}

export interface ActivityPayload {
     /** the activity's name */
    name: string;
     /** [activity type](#DOCS_TOPICS_GATEWAY/activity-object-activity-types) */
    type: number;
     /** stream url, is validated when type is 1 */
    url?: string | null;
     /** unix timestamp of when the activity was added to the user's session */
    created_at: number;
     /** unix timestamps for start and/or end of the game */
    timestamps?: Date;
     /** application id for the game */
    application_id?: string;
     /** what the player is currently doing */
    details?: string | null;
     /** the user's current party status */
    state?: string | null;
     /** the emoji used for a custom status */
    emoji?: EmojiPayload | null;
     /** information for the current party of the player */
    party?: ActivityPartyPayload;
     /** images for the presence and their hover texts */
    assets?: MFALevel;
     /** secrets for Rich Presence joining and spectating */
    secrets?: KeyTypes;
     /** whether or not the activity is an instanced game session */
    instance?: boolean;
     /** [activity flags](#DOCS_TOPICS_GATEWAY/activity-object-activity-flags) `OR`d together, describes what the payload includes */
    flags?: number;
}

export interface ActivityPayload {
     /** the activity's name */
    name: string;
     /** [activity type](#DOCS_TOPICS_GATEWAY/activity-object-activity-types) */
    type: number;
     /** stream url, is validated when type is 1 */
    url?: string | null;
     /** unix timestamp of when the activity was added to the user's session */
    created_at: number;
     /** unix timestamps for start and/or end of the game */
    timestamps?: Date;
     /** application id for the game */
    application_id?: string;
     /** what the player is currently doing */
    details?: string | null;
     /** the user's current party status */
    state?: string | null;
     /** the emoji used for a custom status */
    emoji?: EmojiPayload | null;
     /** information for the current party of the player */
    party?: ActivityPartyPayload;
     /** images for the presence and their hover texts */
    assets?: MFALevel;
     /** secrets for Rich Presence joining and spectating */
    secrets?: KeyTypes;
     /** whether or not the activity is an instanced game session */
    instance?: boolean;
     /** [activity flags](#DOCS_TOPICS_GATEWAY/activity-object-activity-flags) `OR`d together, describes what the payload includes */
    flags?: number;
}

export interface ActivityPartyPayload {
     /** the id of the party */
    id?: string;
     /** used to show the party's current and maximum size */
    size?: number[];
}

export interface TypingStartEventFieldsPayload {
     /** id of the channel */
    channel_id: string;
     /** id of the guild */
    guild_id?: string;
     /** id of the user */
    user_id: string;
     /** unix time (in seconds) of when the user started typing */
    timestamp: number;
     /** the member who started typing if this happened in a guild */
    member?: MFALevel;
}

export interface VoiceServerUpdateEventFieldsPayload {
     /** voice connection token */
    token: string;
     /** the guild this voice server update is for */
    guild_id: string;
     /** the voice server host */
    endpoint: string;
}

export interface WebhookUpdateEventFieldsPayload {
     /** id of the guild */
    guild_id: string;
     /** id of the channel */
    channel_id: string;
}

export interface SessionStartLimitPayload {
     /** The total number of session starts the current user is allowed */
    total: number;
     /** The remaining number of session starts the current user is allowed */
    remaining: number;
     /** The number of milliseconds after which the limit resets */
    reset_after: number;
     /** The number of identify requests allowed per 5 seconds */
    max_concurrency: number;
}

export interface SessionStartLimitPayload {
     /** The total number of session starts the current user is allowed */
    total: number;
     /** The remaining number of session starts the current user is allowed */
    remaining: number;
     /** The number of milliseconds after which the limit resets */
    reset_after: number;
     /** The number of identify requests allowed per 5 seconds */
    max_concurrency: number;
}

export interface ApplicationPayload {
     /** the id of the app */
    id: string;
     /** the name of the app */
    name: string;
     /** the icon hash of the app */
    icon: string | null;
     /** the description of the app */
    description: string;
     /** an array of rpc origin urls, if rpc is enabled */
    rpc_origins?: string[];
     /** when false only app owner can join the app's bot to guilds */
    bot_public: boolean;
     /** when true the app's bot will only join upon completion of the full oauth2 code grant flow */
    bot_require_code_grant: boolean;
     /** partial user object containing info on the owner of the application */
    owner: UserPayload;
     /** if this application is a game sold on Discord, this field will be the summary field for the store page of its primary sku */
    summary: string;
     /** the base64 encoded key for the GameSDK's [GetTicket](#DOCS_GAME_SDK_APPLICATIONS/get-ticket) */
    verify_key: string;
     /** if the application belongs to a team, this will be a list of the members of that team */
    team: TeamPayload | null;
     /** if this application is a game sold on Discord, this field will be the guild to which it has been linked */
    guild_id?: string;
     /** if this application is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists */
    primary_sku_id?: string;
     /** if this application is a game sold on Discord, this field will be the URL slug that links to the store page */
    slug?: string;
     /** if this application is a game sold on Discord, this field will be the hash of the image on store embeds */
    cover_image?: string;
     /** the application's public flags */
    flags: number;
}

export interface ResponsePayload {
     /** the current application */
    application: ApplicationPayload;
     /** the scopes the user has authorized the application for */
    scopes: string[];
     /** when the access token expires */
    expires: Date;
     /** the user who has authorized, if the user has authorized with the `identify` scope */
    user?: UserPayload;
}

/** Roles represent a set of permissions attached to a group of users. Roles have unique names, colors, and can be "pinned" to the side bar, causing their members to be listed separately. Roles are unique per guild, and can have separate permission profiles for the global context (guild) and channel context. The `@everyone` role has the same ID as the guild it belongs to. */
export interface RolePayload {
     /** role id */
    id: string;
     /** role name */
    name: string;
     /** integer representation of hexadecimal color code */
    color: number;
     /** if this role is pinned in the user listing */
    hoist: boolean;
     /** position of this role */
    position: number;
     /** permission bit set */
    permissions: string;
     /** whether this role is managed by an integration */
    managed: boolean;
     /** whether this role is mentionable */
    mentionable: boolean;
     /** the tags this role has */
    tags?: RolePayload;
}

export interface RolePayload {
     /** role id */
    id: string;
     /** role name */
    name: string;
     /** integer representation of hexadecimal color code */
    color: number;
     /** if this role is pinned in the user listing */
    hoist: boolean;
     /** position of this role */
    position: number;
     /** permission bit set */
    permissions: string;
     /** whether this role is managed by an integration */
    managed: boolean;
     /** whether this role is mentionable */
    mentionable: boolean;
     /** the tags this role has */
    tags?: RolePayload;
}

export interface RoleTagsPayload {
     /** the id of the bot this role belongs to */
    bot_id?: string;
     /** the id of the integration this role belongs to */
    integration_id?: string;
     /** whether this is the guild's premium subscriber role */
    premium_subscriber?: null;
}

export interface RateLimitResponsePayload {
     /** A message saying you are being rate limited. */
    message: string;
     /** The number of seconds to wait before submitting another request. */
    retry_after: number;
     /** A value indicating if you are being globally rate limited or not */
    global: boolean;
}

export interface AuthorizeArgumentPayload {
     /** scopes to authorize */
    scopes: OAuth2Scopes[];
     /** OAuth2 application id */
    client_id: string;
     /** one-time use RPC token */
    rpc_token: string;
     /** username to create a guest account with if the user does not have Discord */
    username: string;
}

export interface AuthorizeResponsePayload {
     /** OAuth2 authorization code */
    code: string;
}

export interface AuthenticateArgumentPayload {
     /** OAuth2 access token */
    access_token: string;
}

export interface AuthenticateResponsePayload {
     /** the authed user */
    user: UserPayload;
     /** authorized scopes */
    scopes: OAuth2Scopes[];
     /** expiration date of OAuth2 token */
    expires: Date;
     /** application the user authorized */
    application: OAuth2ApplicationPayload;
}

export interface OAuth2ApplicationPayload {
     /** application description */
    description: string;
     /** hash of the icon */
    icon: string;
     /** application client id */
    id: string;
     /** array of rpc origin urls */
    rpc_origins: string[];
     /** application name */
    name: string;
}

export interface GetGuildsResponsePayload {
     /** the guilds the user is in */
    guilds: GuildPayload[];
}

export interface GetGuildArgumentPayload {
     /** id of the guild to get */
    guild_id: string;
     /** asynchronously get guild with time to wait before timing out */
    timeout: number;
}

export interface GetGuildResponsePayload {
     /** guild id */
    id: string;
     /** guild name */
    name: string;
     /** guild icon url */
    icon_url: string;
     /** members of the guild (deprecated; always empty array) */
    members: GuildMemberPayload[];
}

export interface GetChannelArgumentPayload {
     /** id of the channel to get */
    channel_id: string;
}

export interface GetChannelResponsePayload {
     /** channel id */
    id: string;
     /** channel's guild id */
    guild_id: string;
     /** channel name */
    name: string;
     /** channel type (guild text: 0, guild voice: 2, dm: 1, group dm: 3) */
    type: number;
     /** (text) channel topic */
    topic: string;
     /** (voice) bitrate of voice channel */
    bitrate: number;
     /** (voice) user limit of voice channel (0 for none) */
    user_limit: number;
     /** position of channel in channel list */
    position: number;
     /** (voice) channel's voice states */
    voice_states: VoiceStatePayload[];
     /** (text) channel's messages */
    messages: MessagePayload[];
}

export interface GetChannelsArgumentPayload {
     /** id of the guild to get channels for */
    guild_id: string;
}

export interface GetChannelsResponsePayload {
     /** guild channels the user is in */
    channels: ChannelPayload[];
}

export interface SetUserVoiceSettingsArgumentandResponsePayload {
     /** user id */
    user_id: string;
     /** set the pan of the user */
    pan?: PanPayload;
     /** set the volume of user (defaults to 100, min 0, max 200) */
    volume?: number;
     /** set the mute state of the user */
    mute?: boolean;
}

export interface PanPayload {
     /** left pan of user (min: 0.0, max: 1.0) */
    left: number;
     /** right pan of user (min: 0.0, max: 1.0) */
    right: number;
}

export interface SelectVoiceChannelArgumentPayload {
     /** channel id to join (or `null` to leave) */
    channel_id: string;
     /** asynchronously join channel with time to wait before timing out */
    timeout: number;
     /** forces a user to join a voice channel */
    force: boolean;
}

export interface SelectTextChannelArgumentPayload {
     /** channel id to join (or `null` to leave) */
    channel_id: string;
     /** asynchronously join channel with time to wait before timing out */
    timeout: number;
}

export interface GetVoiceSettingsResponsePayload {
     /** input settings */
    input: VoiceSettingsInputPayload;
     /** output settings */
    output: VoiceSettingsOutputPayload;
     /** voice mode settings */
    mode: VoiceSettingsModePayload;
     /** state of automatic gain control */
    automatic_gain_control: boolean;
     /** state of echo cancellation */
    echo_cancellation: boolean;
     /** state of noise suppression */
    noise_suppression: boolean;
     /** state of voice quality of service */
    qos: boolean;
     /** state of silence warning notice */
    silence_warning: boolean;
     /** state of self-deafen */
    deaf: boolean;
     /** state of self-mute */
    mute: boolean;
}

export interface VoiceSettingsInputPayload {
     /** device id */
    device_id: string;
     /** input voice level (min: 0, max: 100) */
    volume: number;
     /** array of _read-only_ device objects containing `id` and `name` string keys */
    available_devices: [];
}

export interface VoiceSettingsOutputPayload {
     /** device id */
    device_id: string;
     /** output voice level (min: 0, max: 200) */
    volume: number;
     /** array of _read-only_ device objects containing `id` and `name` string keys */
    available_devices: [];
}

export interface VoiceSettingsModePayload {
     /** voice setting mode type (can be `PUSH_TO_TALK` or `VOICE_ACTIVITY`) */
    type: string;
     /** voice activity threshold automatically sets its threshold */
    auto_threshold: boolean;
     /** threshold for voice activity (in dB) (min: -100, max: 0) */
    threshold: number;
     /** shortcut key combos for PTT */
    shortcut: ShortcutKeyComboPayload;
     /** the PTT release delay (in ms) (min: 0, max: 2000) */
    delay: number;
}

export interface ShortcutKeyComboPayload {
     /** see [key types](#DOCS_TOPICS_RPC/shortcut-key-combo-object-key-types) */
    type: number;
     /** key code */
    code: number;
     /** key name */
    name: string;
}

export interface SetVoiceSettingsArgumentandResponsePayload {
     /** input settings */
    input: VoiceSettingsInputPayload;
     /** output settings */
    output: VoiceSettingsOutputPayload;
     /** voice mode settings */
    mode: VoiceSettingsModePayload;
     /** state of automatic gain control */
    automatic_gain_control: boolean;
     /** state of echo cancellation */
    echo_cancellation: boolean;
     /** state of noise suppression */
    noise_suppression: boolean;
     /** state of voice quality of service */
    qos: boolean;
     /** state of silence warning notice */
    silence_warning: boolean;
     /** state of self-deafen */
    deaf: boolean;
     /** state of self-mute */
    mute: boolean;
}

export interface SubscribeResponsePayload {
     /** event name now subscribed to */
    evt: string;
}

export interface UnsubscribeResponsePayload {
     /** event name now unsubscribed from */
    evt: string;
}

export interface CaptureShortcutArgumentPayload {
     /** capture action; `START` or `STOP` */
    action: string;
}

export interface CaptureShortcutResponsePayload {
     /** the captured shortcut key combo array */
    shortcut: ShortcutKeyComboPayload;
}

export interface DevicePayload {
     /** the type of device */
    type: DeviceTypes;
     /** the device's Windows UUID */
    id: string;
     /** the hardware vendor */
    vendor: VendorPayload;
     /** the model of the product */
    model: ModelPayload;
     /** UUIDs of related devices */
    related: string[];
     /** if the device's native echo cancellation is enabled */
    echo_cancellation?: boolean;
     /** if the device's native noise suppression is enabled */
    noise_suppression?: boolean;
     /** if the device's native automatic gain control is enabled */
    automatic_gain_control?: boolean;
     /** if the device is hardware muted */
    hardware_mute?: boolean;
}

export interface VendorPayload {
     /** name of the vendor */
    name: string;
     /** url for the vendor */
    url: string;
}

export interface ModelPayload {
     /** name of the model */
    name: string;
     /** url for the model */
    url: string;
}

export interface SetActivityArgumentPayload {
     /** the application's process id */
    pid: number;
     /** the rich presence to assign to the user */
    activity: ActivityPayload;
}

export interface SendActivityJoinInviteArgumentPayload {
     /** the id of the requesting user */
    user_id: string;
}

export interface CloseActivityRequestArgumentPayload {
     /** the id of the requesting user */
    user_id: string;
}

export interface ReadyDispatchDataPayload {
     /** RPC version */
    v: number;
     /** server configuration */
    config: RPCServerConfigurationPayload;
     /** the user to whom you are connected */
    user: UserPayload;
}

export interface RPCServerConfigurationPayload {
     /** server's cdn */
    cdn_host: string;
     /** server's api endpoint */
    api_endpoint: string;
     /** server's environment */
    environment: string;
}

export interface ErrorDataPayload {
     /** RPC Error Code */
    code: number;
     /** Error description */
    message: string;
}

export interface GuildStatusArgumentPayload {
     /** id of guild to listen to updates of */
    guild_id: string;
}

export interface GuildStatusDispatchDataPayload {
     /** guild with requested id */
    guild: GuildPayload;
     /** number of online users in guild (deprecated; always 0) */
    online: number;
}

export interface GuildCreateDispatchDataPayload {
     /** guild id */
    id: string;
     /** name of the guild */
    name: string;
}

export interface ChannelCreateDispatchDataPayload {
     /** channel id */
    id: string;
     /** name of the channel */
    name: string;
     /** channel type (guild text: 0, guild voice: 2, dm: 1, group dm: 3) */
    type: number;
}

export interface VoiceChannelSelectDispatchDataPayload {
     /** id of channel (`null` if none) */
    channel_id: string;
     /** id of guild (`null` if none) */
    guild_id: string;
}

export interface VoiceStateArgumentPayload {
     /** id of channel to listen to updates of */
    channel_id: string;
}

export interface VoiceConnectionStatusDispatchDataPayload {
     /** one of the voice connection states listed below */
    state: string;
     /** hostname of the connected voice server */
    hostname: string;
     /** last 20 pings (in ms) */
    pings: number[];
     /** average ping (in ms) */
    average_ping: number;
     /** last ping (in ms) */
    last_ping: number;
}

export interface MessageArgumentPayload {
     /** id of channel to listen to updates of */
    channel_id: string;
}

export interface SpeakingArgumentPayload {
     /** id of channel to listen to updates of */
    channel_id: string;
}

export interface SpeakingDispatchDataPayload {
     /** id of user who started/stopped speaking */
    user_id: string;
}

export interface NotificationCreateDispatchDataPayload {
     /** id of channel where notification occurred */
    channel_id: string;
     /** message that generated this notification */
    message: MessagePayload;
     /** icon url of the notification */
    icon_url: string;
     /** title of the notification */
    title: string;
     /** body of the notification */
    body: string;
}

export interface CaptureShortcutChangeDispatchDataPayload {
     /** captured shortcut key combos */
    shortcut: ShortcutKeyComboPayload[];
}

export interface ActivityJoinDispatchDataPayload {
     /** the [`join_secret`](#DOCS_RICH_PRESENCE_HOW_TO/updating-presence-update-presence-payload-fields) for the given invite */
    secret: string;
}

export interface ActivitySpectateDispatchDataPayload {
     /** the [`spectate_secret`](#DOCS_RICH_PRESENCE_HOW_TO/updating-presence-update-presence-payload-fields) for the given invite */
    secret: string;
}

export interface ActivityJoinRequestDataPayload {
     /** information about the user requesting to join */
    user: UserPayload;
}

export interface TeamPayload {
     /** a hash of the image of the team's icon */
    icon: string | null;
     /** the unique id of the team */
    id: string;
     /** the members of the team */
    members: TeamMembersPayload[];
     /** the user id of the current team owner */
    owner_user_id: string;
}

export interface TeamMembersPayload {
     /** the user's [membership state](#DOCS_TOPICS_TEAMS/data-models-membership-state-enum) on the team */
    membership_state: number;
     /** will always be `["*"]` */
    permissions: string[];
     /** the id of the parent team of which they are a member */
    team_id: string;
     /** the avatar, discriminator, id, and username of the user */
    user: UserPayload;
}


export const DISCORD_API_VERSION = 8;
export const DISCORD_API_BASE = "https://discord.com/api";

/**
  * Gets entitlements for a given user. You can use this on your game backend to check entitlements of an arbitrary user, or perhaps in an administrative panel for your support team.
  */
export function getEntitlements(applicationId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/applications/${applicationId}/entitlements`
}

/**
  * Fetch an entitlement by its ID. This may be useful in confirming that a user has a given entitlement that another call or the SDK says they do.
  */
export function getEntitlement(applicationId: string, entitlementId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/applications/${applicationId}/entitlements/${entitlementId}`
}

/**
  * Get all SKUs for an application.
  */
export function getSKUs(applicationId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/applications/${applicationId}/skus`
}

/**
  * Marks a given entitlement for the user as consumed, meaning it will no longer be returned in an entitlements check. **Ensure the user was granted whatever items the entitlement was for before consuming it!**
  */
export function consumeSKU(applicationId: string, entitlementId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/applications/${applicationId}/entitlements/${entitlementId}/consume`
}

/**
  * Deletes a test entitlement for an application. You can only delete entitlements that were "purchased" in developer test mode; these are entitlements of `type == TestModePurchase`. You cannot use this route to delete arbitrary entitlements that users actually purchased.
  */
export function deleteTestEntitlement(applicationId: string, entitlementId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/applications/${applicationId}/entitlements/${entitlementId}`
}

/**
  * Creates a discount for the given user on their next purchase of the given SKU. You should call this endpoint from your backend server just before calling [StartPurchase](#DOCS_GAME_SDK_STORE/start-purchase) for the SKU you wish to discount. The user will then see a discounted price for that SKU at time of payment. The discount is automatically consumed after successful purchase or if the TTL expires.
  */
export function createPurchaseDiscount(skuId: string, userId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/store/skus/${skuId}/discounts/${userId}`
}

/**
  * Deletes the currently active discount on the given SKU for the given user. You **do not need** to call this after a user has made a discounted purchase; successful discounted purchases will automatically remove the discount for that user for subsequent purchases.
  */
export function deletePurchaseDiscount(skuId: string, userId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/store/skus/${skuId}/discounts/${userId}`
}

/**
  * Fetch all of the global commands for your application. Returns an array of [ApplicationCommand](#DOCS_INTERACTIONS_SLASH_COMMANDS/applicationcommand) objects.
  */
export function getGlobalApplicationCommands(applicationId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/applications/${applicationId}/commands`
}

export function createGlobalApplicationCommand(applicationId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/applications/${applicationId}/commands`
}

/**
  * Fetch a global command for your application. Returns an [ApplicationCommand](#DOCS_INTERACTIONS_SLASH_COMMANDS/applicationcommand) object.
  */
export function getGlobalApplicationCommand(applicationId: string, commandId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/applications/${applicationId}/commands/${commandId}`
}

export function editGlobalApplicationCommand(applicationId: string, commandId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/applications/${applicationId}/commands/${commandId}`
}

/**
  * Deletes a global command. Returns `204`.
  */
export function deleteGlobalApplicationCommand(applicationId: string, commandId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/applications/${applicationId}/commands/${commandId}`
}

/**
  * Fetch all of the guild commands for your application for a specific guild. Returns an array of [ApplicationCommand](#DOCS_INTERACTIONS_SLASH_COMMANDS/applicationcommand) objects.
  */
export function getGuildApplicationCommands(applicationId: string, guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/applications/${applicationId}/guilds/${guildId}/commands`
}

export function createGuildApplicationCommand(applicationId: string, guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/applications/${applicationId}/guilds/${guildId}/commands`
}

/**
  * Fetch a guild command for your application. Returns an [ApplicationCommand](#DOCS_INTERACTIONS_SLASH_COMMANDS/applicationcommand) object.
  */
export function getGuildApplicationCommand(applicationId: string, guildId: string, commandId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`
}

export function editGuildApplicationCommand(applicationId: string, guildId: string, commandId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`
}

/**
  * Delete a guild command. Returns `204` on success.
  */
export function deleteGuildApplicationCommand(applicationId: string, guildId: string, commandId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`
}

/**
  * Create a response to an Interaction from the gateway. Takes an [Interaction response](#DOCS_INTERACTIONS_SLASH_COMMANDS/interaction-response).
  */
export function createInteractionResponse(interactionId: string, interactionToken: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/interactions/${interactionId}/${interactionToken}/callback`
}

/**
  * Edits the initial Interaction response. Functions the same as [Edit Webhook Message](#DOCS_RESOURCES_WEBHOOK/edit-webhook-message).
  */
export function editOriginalInteractionResponse(applicationId: string, interactionToken: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/webhooks/${applicationId}/${interactionToken}/messages/@original`
}

/**
  * Deletes the initial Interaction response. Returns `204` on success.
  */
export function deleteOriginalInteractionResponse(applicationId: string, interactionToken: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/webhooks/${applicationId}/${interactionToken}/messages/@original`
}

/**
  * Create a followup message for an Interaction. Functions the same as [Execute Webhook](#DOCS_RESOURCES_WEBHOOK/execute-webhook)
  */
export function createFollowupMessage(applicationId: string, interactionToken: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/webhooks/${applicationId}/${interactionToken}`
}

/**
  * Edits a followup message for an Interaction. Functions the same as [Edit Webhook Message](#DOCS_RESOURCES_WEBHOOK/edit-webhook-message).
  */
export function editFollowupMessage(applicationId: string, interactionToken: string, messageId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/webhooks/${applicationId}/${interactionToken}/messages/${messageId}`
}

/**
  * Deletes a followup message for an Interaction. Returns `204` on success.
  */
export function deleteFollowupMessage(applicationId: string, interactionToken: string, messageId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/webhooks/${applicationId}/${interactionToken}/messages/${messageId}`
}

/**
  * Returns an [audit log](#DOCS_RESOURCES_AUDIT_LOG/audit-log-object) object for the guild. Requires the 'VIEW_AUDIT_LOG' permission.
  */
export function getGuildAuditLog(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/audit-logs`
}

/**
  * Get a channel by ID. Returns a [channel](#DOCS_RESOURCES_CHANNEL/channel-object) object.
  */
export function getChannel(channelId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}`
}

/**
  * Update a channel's settings. Requires the `MANAGE_CHANNELS` permission for the guild. Returns a [channel](#DOCS_RESOURCES_CHANNEL/channel-object) on success, and a 400 BAD REQUEST on invalid parameters. Fires a [Channel Update](#DOCS_TOPICS_GATEWAY/channel-update) Gateway event. If modifying a category, individual [Channel Update](#DOCS_TOPICS_GATEWAY/channel-update) events will fire for each child channel that also changes. If modifying permission overwrites, the `MANAGE_ROLES` permission is required. Only permissions your bot has in the guild or channel can be allowed/denied (unless your bot has a `MANAGE_ROLES` overwrite in the channel). All JSON parameters are optional.
  */
export function modifyChannel(channelId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}`
}

/**
  * Delete a channel, or close a private message. Requires the `MANAGE_CHANNELS` permission for the guild. Deleting a category does not delete its child channels; they will have their `parent_id` removed and a [Channel Update](#DOCS_TOPICS_GATEWAY/channel-update) Gateway event will fire for each of them. Returns a [channel](#DOCS_RESOURCES_CHANNEL/channel-object) object on success. Fires a [Channel Delete](#DOCS_TOPICS_GATEWAY/channel-delete) Gateway event.
  */
export function deleteChannel(channelId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}`
}

/**
  * Returns the messages for a channel. If operating on a guild channel, this endpoint requires the `VIEW_CHANNEL` permission to be present on the current user. If the current user is missing the 'READ_MESSAGE_HISTORY' permission in the channel then this will return no messages (since they cannot read the message history). Returns an array of [message](#DOCS_RESOURCES_CHANNEL/message-object) objects on success.
  */
export function getChannelMessages(channelId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/messages`
}

/**
  * Returns a specific message in the channel. If operating on a guild channel, this endpoint requires the 'READ_MESSAGE_HISTORY' permission to be present on the current user. Returns a [message](#DOCS_RESOURCES_CHANNEL/message-object) object on success.
  */
export function getChannelMessage(channelId: string, messageId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/messages/${messageId}`
}

export function createMessage(channelId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/messages`
}

/**
  * Crosspost a message in a News Channel to following channels. This endpoint requires the 'SEND_MESSAGES' permission, if the current user sent the message, or additionally the 'MANAGE_MESSAGES' permission, for all other messages, to be present for the current user.

Returns a [message](#DOCS_RESOURCES_CHANNEL/message-object) object.  */
export function crosspostMessage(channelId: string, messageId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/messages/${messageId}/crosspost`
}

/**
  * Create a reaction for the message. This endpoint requires the 'READ_MESSAGE_HISTORY' permission to be present on the current user. Additionally, if nobody else has reacted to the message using this emoji, this endpoint requires the 'ADD_REACTIONS' permission to be present on the current user. Returns a 204 empty response on success.
The `emoji` must be [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will fail with `10014: Unknown Emoji`.
  */
export function createReaction(channelId: string, messageId: string, emoji: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`
}

/**
  * Delete a reaction the current user has made for the message. Returns a 204 empty response on success.
The `emoji` must be [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will fail with `10014: Unknown Emoji`.
  */
export function deleteOwnReaction(channelId: string, messageId: string, emoji: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`
}

/**
  * Deletes another user's reaction. This endpoint requires the 'MANAGE_MESSAGES' permission to be present on the current user. Returns a 204 empty response on success.
The `emoji` must be [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will fail with `10014: Unknown Emoji`.
  */
export function deleteUserReaction(channelId: string, messageId: string, emoji: string, userId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/messages/${messageId}/reactions/${emoji}/${userId}`
}

/**
  * Get a list of users that reacted with this emoji. Returns an array of [user](#DOCS_RESOURCES_USER/user-object) objects on success.
The `emoji` must be [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will fail with `10014: Unknown Emoji`.
  */
export function getReactions(channelId: string, messageId: string, emoji: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/messages/${messageId}/reactions/${emoji}`
}

/**
  * Deletes all reactions on a message. This endpoint requires the 'MANAGE_MESSAGES' permission to be present on the current user. Fires a [Message Reaction Remove All](#DOCS_TOPICS_GATEWAY/message-reaction-remove-all) Gateway event.
  */
export function deleteAllReactions(channelId: string, messageId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/messages/${messageId}/reactions`
}

/**
  * Deletes all the reactions for a given emoji on a message. This endpoint requires the `MANAGE_MESSAGES` permission to be present on the current user. Fires a [Message Reaction Remove Emoji](#DOCS_TOPICS_GATEWAY/message-reaction-remove-emoji) Gateway event.
The `emoji` must be [URL Encoded](https://en.wikipedia.org/wiki/Percent-encoding) or the request will fail with `10014: Unknown Emoji`.
  */
export function deleteAllReactionsForEmoji(channelId: string, messageId: string, emoji: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/messages/${messageId}/reactions/${emoji}`
}

/**
  * Edit a previously sent message. The fields `content`, `embed`, `allowed_mentions` and `flags` can be edited by the original message author. Other users can only edit `flags` and only if they have the `MANAGE_MESSAGES` permission in the corresponding channel. When specifying flags, ensure to include all previously set flags/bits in addition to ones that you are modifying. Only `flags` documented in the table below may be modified by users (unsupported flag changes are currently ignored without error).

Returns a [message](#DOCS_RESOURCES_CHANNEL/message-object) object. Fires a [Message Update](#DOCS_TOPICS_GATEWAY/message-update) Gateway event.  */
export function editMessage(channelId: string, messageId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/messages/${messageId}`
}

/**
  * Delete a message. If operating on a guild channel and trying to delete a message that was not sent by the current user, this endpoint requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires a [Message Delete](#DOCS_TOPICS_GATEWAY/message-delete) Gateway event.
  */
export function deleteMessage(channelId: string, messageId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/messages/${messageId}`
}

/**
  * Delete multiple messages in a single request. This endpoint can only be used on guild channels and requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires a [Message Delete Bulk](#DOCS_TOPICS_GATEWAY/message-delete-bulk) Gateway event.

Any message IDs given that do not exist or are invalid will count towards the minimum and maximum message count (currently 2 and 100 respectively).  */
export function bulkDeleteMessages(channelId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/messages/bulk-delete`
}

/**
  * Edit the channel permission overwrites for a user or role in a channel. Only usable for guild channels. Requires the `MANAGE_ROLES` permission. Only permissions your bot has in the guild or channel can be allowed/denied (unless your bot has a `MANAGE_ROLES` overwrite in the channel). Returns a 204 empty response on success. For more information about permissions, see [permissions](#DOCS_TOPICS_PERMISSIONS/permissions).
  */
export function editChannelPermissions(channelId: string, overwriteId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/permissions/${overwriteId}`
}

/**
  * Returns a list of [invite](#DOCS_RESOURCES_INVITE/invite-object) objects (with [invite metadata](#DOCS_RESOURCES_INVITE/invite-metadata-object)) for the channel. Only usable for guild channels. Requires the `MANAGE_CHANNELS` permission.
  */
export function getChannelInvites(channelId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/invites`
}

/**
  * Create a new [invite](#DOCS_RESOURCES_INVITE/invite-object) object for the channel. Only usable for guild channels. Requires the `CREATE_INSTANT_INVITE` permission. All JSON parameters for this route are optional, however the request body is not. If you are not sending any fields, you still have to send an empty JSON object (`{}`). Returns an [invite](#DOCS_RESOURCES_INVITE/invite-object) object. Fires an [Invite Create](#DOCS_TOPICS_GATEWAY/invite-create) Gateway event.
  */
export function createChannelInvite(channelId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/invites`
}

/**
  * Delete a channel permission overwrite for a user or role in a channel. Only usable for guild channels. Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. For more information about permissions, see [permissions](#DOCS_TOPICS_PERMISSIONS/permissions)
  */
export function deleteChannelPermission(channelId: string, overwriteId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/permissions/${overwriteId}`
}

/**
  * Follow a News Channel to send messages to a target channel. Requires the `MANAGE_WEBHOOKS` permission in the target channel. Returns a [followed channel](#DOCS_RESOURCES_CHANNEL/followed-channel-object) object.
  */
export function followNewsChannel(channelId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/followers`
}

/**
  * Post a typing indicator for the specified channel. Generally bots should **not** implement this route. However, if a bot is responding to a command and expects the computation to take a few seconds, this endpoint may be called to let the user know that the bot is processing their message. Returns a 204 empty response on success. Fires a [Typing Start](#DOCS_TOPICS_GATEWAY/typing-start) Gateway event.
  */
export function triggerTypingIndicator(channelId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/typing`
}

/**
  * Returns all pinned messages in the channel as an array of [message](#DOCS_RESOURCES_CHANNEL/message-object) objects.
  */
export function getPinnedMessages(channelId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/pins`
}

/**
  * Pin a message in a channel. Requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success.
  */
export function addPinnedChannelMessage(channelId: string, messageId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/pins/${messageId}`
}

/**
  * Delete a pinned message in a channel. Requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success.
  */
export function deletePinnedChannelMessage(channelId: string, messageId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/pins/${messageId}`
}

/**
  * Adds a recipient to a Group DM using their access token
  */
export function groupDMAddRecipient(channelId: string, userId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/recipients/${userId}`
}

/**
  * Removes a recipient from a Group DM
  */
export function groupDMRemoveRecipient(channelId: string, userId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/recipients/${userId}`
}

/**
  * Returns a list of [emoji](#DOCS_RESOURCES_EMOJI/emoji-object) objects for the given guild.
  */
export function listGuildEmojis(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/emojis`
}

/**
  * Returns an [emoji](#DOCS_RESOURCES_EMOJI/emoji-object) object for the given guild and emoji IDs.
  */
export function getGuildEmoji(guildId: string, emojiId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/emojis/${emojiId}`
}

/**
  * Create a new emoji for the guild. Requires the `MANAGE_EMOJIS` permission. Returns the new [emoji](#DOCS_RESOURCES_EMOJI/emoji-object) object on success. Fires a [Guild Emojis Update](#DOCS_TOPICS_GATEWAY/guild-emojis-update) Gateway event.
  */
export function createGuildEmoji(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/emojis`
}

/**
  * Modify the given emoji. Requires the `MANAGE_EMOJIS` permission. Returns the updated [emoji](#DOCS_RESOURCES_EMOJI/emoji-object) object on success. Fires a [Guild Emojis Update](#DOCS_TOPICS_GATEWAY/guild-emojis-update) Gateway event.
  */
export function modifyGuildEmoji(guildId: string, emojiId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/emojis/${emojiId}`
}

/**
  * Delete the given emoji. Requires the `MANAGE_EMOJIS` permission. Returns `204 No Content` on success. Fires a [Guild Emojis Update](#DOCS_TOPICS_GATEWAY/guild-emojis-update) Gateway event.
  */
export function deleteGuildEmoji(guildId: string, emojiId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/emojis/${emojiId}`
}

/**
  * Create a new guild. Returns a [guild](#DOCS_RESOURCES_GUILD/guild-object) object on success. Fires a [Guild Create](#DOCS_TOPICS_GATEWAY/guild-create) Gateway event.
  */
export function createGuild() {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds`
}

/**
  * Returns the [guild](#DOCS_RESOURCES_GUILD/guild-object) object for the given id. If `with_counts` is set to `true`, this endpoint will also return `approximate_member_count` and `approximate_presence_count` for the guild.
  */
export function getGuild(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}`
}

/**
  * Returns the [guild preview](#DOCS_RESOURCES_GUILD/guild-preview-object) object for the given id. If the user is not in the guild, then the guild must be Discoverable.

  */
export function getGuildPreview(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/preview`
}

/**
  * Modify a guild's settings. Requires the `MANAGE_GUILD` permission. Returns the updated [guild](#DOCS_RESOURCES_GUILD/guild-object) object on success. Fires a [Guild Update](#DOCS_TOPICS_GATEWAY/guild-update) Gateway event.
  */
export function modifyGuild(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}`
}

/**
  * Delete a guild permanently. User must be owner. Returns `204 No Content` on success. Fires a [Guild Delete](#DOCS_TOPICS_GATEWAY/guild-delete) Gateway event.
  */
export function deleteGuild(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}`
}

/**
  * Returns a list of guild [channel](#DOCS_RESOURCES_CHANNEL/channel-object) objects.
  */
export function getGuildChannels(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/channels`
}

/**
  * Create a new [channel](#DOCS_RESOURCES_CHANNEL/channel-object) object for the guild. Requires the `MANAGE_CHANNELS` permission. If setting permission overwrites, only permissions your bot has in the guild can be allowed/denied. Setting `MANAGE_ROLES` permission in channels is only possible for guild administrators. Returns the new [channel](#DOCS_RESOURCES_CHANNEL/channel-object) object on success. Fires a [Channel Create](#DOCS_TOPICS_GATEWAY/channel-create) Gateway event.
  */
export function createGuildChannel(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/channels`
}

/**
  * Modify the positions of a set of [channel](#DOCS_RESOURCES_CHANNEL/channel-object) objects for the guild. Requires `MANAGE_CHANNELS` permission. Returns a 204 empty response on success. Fires multiple [Channel Update](#DOCS_TOPICS_GATEWAY/channel-update) Gateway events.
  */
export function modifyGuildChannelPositions(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/channels`
}

/**
  * Returns a [guild member](#DOCS_RESOURCES_GUILD/guild-member-object) object for the specified user.
  */
export function getGuildMember(guildId: string, userId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/members/${userId}`
}

/**
  * Returns a list of [guild member](#DOCS_RESOURCES_GUILD/guild-member-object) objects that are members of the guild.
  */
export function listGuildMembers(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/members`
}

/**
  * Adds a user to the guild, provided you have a valid oauth2 access token for the user with the `guilds.join` scope. Returns a 201 Created with the [guild member](#DOCS_RESOURCES_GUILD/guild-member-object) as the body, or 204 No Content if the user is already a member of the guild. Fires a [Guild Member Add](#DOCS_TOPICS_GATEWAY/guild-member-add) Gateway event.
  */
export function addGuildMember(guildId: string, userId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/members/${userId}`
}

/**
  * Modify attributes of a [guild member](#DOCS_RESOURCES_GUILD/guild-member-object). Returns a 200 OK with the [guild member](#DOCS_RESOURCES_GUILD/guild-member-object) as the body. Fires a [Guild Member Update](#DOCS_TOPICS_GATEWAY/guild-member-update) Gateway event. If the `channel_id` is set to null, this will force the target user to be disconnected from voice.
  */
export function modifyGuildMember(guildId: string, userId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/members/${userId}`
}

/**
  * Modifies the nickname of the current user in a guild. Returns a 200 with the nickname on success. Fires a [Guild Member Update](#DOCS_TOPICS_GATEWAY/guild-member-update) Gateway event.
  */
export function modifyCurrentUserNick(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/members/@me/nick`
}

/**
  * Adds a role to a [guild member](#DOCS_RESOURCES_GUILD/guild-member-object). Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. Fires a [Guild Member Update](#DOCS_TOPICS_GATEWAY/guild-member-update) Gateway event.
  */
export function addGuildMemberRole(guildId: string, userId: string, roleId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/members/${userId}/roles/${roleId}`
}

/**
  * Removes a role from a [guild member](#DOCS_RESOURCES_GUILD/guild-member-object). Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. Fires a [Guild Member Update](#DOCS_TOPICS_GATEWAY/guild-member-update) Gateway event.
  */
export function removeGuildMemberRole(guildId: string, userId: string, roleId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/members/${userId}/roles/${roleId}`
}

/**
  * Remove a member from a guild. Requires `KICK_MEMBERS` permission. Returns a 204 empty response on success. Fires a [Guild Member Remove](#DOCS_TOPICS_GATEWAY/guild-member-remove) Gateway event.
  */
export function removeGuildMember(guildId: string, userId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/members/${userId}`
}

/**
  * Returns a list of [ban](#DOCS_RESOURCES_GUILD/ban-object) objects for the users banned from this guild. Requires the `BAN_MEMBERS` permission.
  */
export function getGuildBans(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/bans`
}

/**
  * Returns a [ban](#DOCS_RESOURCES_GUILD/ban-object) object for the given user or a 404 not found if the ban cannot be found. Requires the `BAN_MEMBERS` permission.
  */
export function getGuildBan(guildId: string, userId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/bans/${userId}`
}

/**
  * Create a guild ban, and optionally delete previous messages sent by the banned user. Requires the `BAN_MEMBERS` permission. Returns a 204 empty response on success. Fires a [Guild Ban Add](#DOCS_TOPICS_GATEWAY/guild-ban-add) Gateway event.
  */
export function createGuildBan(guildId: string, userId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/bans/${userId}`
}

/**
  * Remove the ban for a user. Requires the `BAN_MEMBERS` permissions. Returns a 204 empty response on success. Fires a [Guild Ban Remove](#DOCS_TOPICS_GATEWAY/guild-ban-remove) Gateway event.
  */
export function removeGuildBan(guildId: string, userId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/bans/${userId}`
}

/**
  * Returns a list of [role](#DOCS_TOPICS_PERMISSIONS/role-object) objects for the guild.
  */
export function getGuildRoles(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/roles`
}

/**
  * Create a new [role](#DOCS_TOPICS_PERMISSIONS/role-object) for the guild. Requires the `MANAGE_ROLES` permission. Returns the new [role](#DOCS_TOPICS_PERMISSIONS/role-object) object on success. Fires a [Guild Role Create](#DOCS_TOPICS_GATEWAY/guild-role-create) Gateway event. All JSON params are optional.
  */
export function createGuildRole(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/roles`
}

/**
  * Modify the positions of a set of [role](#DOCS_TOPICS_PERMISSIONS/role-object) objects for the guild. Requires the `MANAGE_ROLES` permission. Returns a list of all of the guild's [role](#DOCS_TOPICS_PERMISSIONS/role-object) objects on success. Fires multiple [Guild Role Update](#DOCS_TOPICS_GATEWAY/guild-role-update) Gateway events.

This endpoint takes a JSON array of parameters in the following format:  */
export function modifyGuildRolePositions(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/roles`
}

/**
  * Modify a guild role. Requires the `MANAGE_ROLES` permission. Returns the updated [role](#DOCS_TOPICS_PERMISSIONS/role-object) on success. Fires a [Guild Role Update](#DOCS_TOPICS_GATEWAY/guild-role-update) Gateway event.
  */
export function modifyGuildRole(guildId: string, roleId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/roles/${roleId}`
}

/**
  * Delete a guild role. Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. Fires a [Guild Role Delete](#DOCS_TOPICS_GATEWAY/guild-role-delete) Gateway event.
  */
export function deleteGuildRole(guildId: string, roleId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/roles/${roleId}`
}

/**
  * Returns an object with one 'pruned' key indicating the number of members that would be removed in a prune operation. Requires the `KICK_MEMBERS` permission.

By default, prune will not remove users with roles. You can optionally include specific roles in your prune by providing the `include_roles` parameter. Any inactive user that has a subset of the provided role(s) will be counted in the prune and users with additional roles will not.  */
export function getGuildPruneCount(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/prune`
}

/**
  * Begin a prune operation. Requires the `KICK_MEMBERS` permission. Returns an object with one 'pruned' key indicating the number of members that were removed in the prune operation. For large guilds it's recommended to set the `compute_prune_count` option to `false`, forcing 'pruned' to `null`. Fires multiple [Guild Member Remove](#DOCS_TOPICS_GATEWAY/guild-member-remove) Gateway events.

By default, prune will not remove users with roles. You can optionally include specific roles in your prune by providing the `include_roles` parameter. Any inactive user that has a subset of the provided role(s) will be included in the prune and users with additional roles will not.  */
export function beginGuildPrune(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/prune`
}

/**
  * Returns a list of [voice region](#DOCS_RESOURCES_VOICE/voice-region-object) objects for the guild. Unlike the similar `/voice` route, this returns VIP servers when the guild is VIP-enabled.
  */
export function getGuildVoiceRegions(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/regions`
}

/**
  * Returns a list of [invite](#DOCS_RESOURCES_INVITE/invite-object) objects (with [invite metadata](#DOCS_RESOURCES_INVITE/invite-metadata-object)) for the guild. Requires the `MANAGE_GUILD` permission.
  */
export function getGuildInvites(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/invites`
}

/**
  * Returns a list of [integration](#DOCS_RESOURCES_GUILD/integration-object) objects for the guild. Requires the `MANAGE_GUILD` permission.
  */
export function getGuildIntegrations(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/integrations`
}

/**
  * Attach an [integration](#DOCS_RESOURCES_GUILD/integration-object) object from the current user to the guild. Requires the `MANAGE_GUILD` permission. Returns a 204 empty response on success. Fires a [Guild Integrations Update](#DOCS_TOPICS_GATEWAY/guild-integrations-update) Gateway event.
  */
export function createGuildIntegration(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/integrations`
}

/**
  * Modify the behavior and settings of an [integration](#DOCS_RESOURCES_GUILD/integration-object) object for the guild. Requires the `MANAGE_GUILD` permission. Returns a 204 empty response on success. Fires a [Guild Integrations Update](#DOCS_TOPICS_GATEWAY/guild-integrations-update) Gateway event.
  */
export function modifyGuildIntegration(guildId: string, integrationId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/integrations/${integrationId}`
}

/**
  * Delete the attached [integration](#DOCS_RESOURCES_GUILD/integration-object) object for the guild. Deletes any associated webhooks and kicks the associated bot if there is one. Requires the `MANAGE_GUILD` permission. Returns a 204 empty response on success. Fires a [Guild Integrations Update](#DOCS_TOPICS_GATEWAY/guild-integrations-update) Gateway event.
  */
export function deleteGuildIntegration(guildId: string, integrationId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/integrations/${integrationId}`
}

/**
  * Sync an integration. Requires the `MANAGE_GUILD` permission. Returns a 204 empty response on success.
  */
export function syncGuildIntegration(guildId: string, integrationId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/integrations/${integrationId}/sync`
}

/**
  * Returns a [guild widget](#DOCS_RESOURCES_GUILD/guild-widget-object) object. Requires the `MANAGE_GUILD` permission.
  */
export function getGuildWidgetSettings(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/widget`
}

/**
  * Modify a [guild widget](#DOCS_RESOURCES_GUILD/guild-widget-object) object for the guild. All attributes may be passed in with JSON and modified. Requires the `MANAGE_GUILD` permission. Returns the updated [guild widget](#DOCS_RESOURCES_GUILD/guild-widget-object) object.
  */
export function modifyGuildWidget(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/widget`
}

/**
  * Returns the widget for the guild.
  */
export function getGuildWidget(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/widget.json`
}

/**
  * Returns a partial [invite](#DOCS_RESOURCES_INVITE/invite-object) object for guilds with that feature enabled. Requires the `MANAGE_GUILD` permission. `code` will be null if a vanity url for the guild is not set.
  */
export function getGuildVanityURL(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/vanity-url`
}

/**
  * Returns a PNG image widget for the guild. Requires no permissions or authentication.
  */
export function getGuildWidgetImage(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/widget.png`
}

/**
  * Returns the [Membership Screening](#DOCS_RESOURCES_GUILD/membership-screening-object) object for the guild.
  */
export function getGuildMembershipScreeningForm(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/member-verification`
}

/**
  * Modify the guild's [Membership Screening](#DOCS_RESOURCES_GUILD/membership-screening-object) form. Requires the `MANAGE_GUILD` permission. Returns the updated [Membership Screening](#DOCS_RESOURCES_GUILD/membership-screening-object) object.
  */
export function modifyGuildMembershipScreeningForm(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/member-verification`
}

/**
  * Returns an [invite](#DOCS_RESOURCES_INVITE/invite-object) object for the given code.
  */
export function getInvite(inviteCode: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/invites/${inviteCode}`
}

/**
  * Delete an invite. Requires the `MANAGE_CHANNELS` permission on the channel this invite belongs to, or `MANAGE_GUILD` to remove any invite across the guild. Returns an [invite](#DOCS_RESOURCES_INVITE/invite-object) object on success. Fires a [Invite Delete](#DOCS_TOPICS_GATEWAY/invite-delete) Gateway event.
  */
export function deleteInvite(inviteCode: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/invites/${inviteCode}`
}

/**
  * Returns a [template](#DOCS_RESOURCES_TEMPLATE/template-object) object for the given code.
  */
export function getTemplate(templateCode: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/templates/${templateCode}`
}

/**
  * Create a new guild based on a template. Returns a [guild](#DOCS_RESOURCES_GUILD/guild-object) object on success. Fires a [Guild Create](#DOCS_TOPICS_GATEWAY/guild-create) Gateway event.
  */
export function createGuildFromTemplate(templateCode: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/templates/${templateCode}`
}

/**
  * Returns an array of [template](#DOCS_RESOURCES_TEMPLATE/template-object) objects. Requires the `MANAGE_GUILD` permission.
  */
export function getGuildTemplates(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/templates`
}

/**
  * Creates a template for the guild. Requires the `MANAGE_GUILD` permission. Returns the created [template](#DOCS_RESOURCES_TEMPLATE/template-object) object on success.
  */
export function createGuildTemplate(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/templates`
}

/**
  * Syncs the template to the guild's current state. Requires the `MANAGE_GUILD` permission. Returns the [template](#DOCS_RESOURCES_TEMPLATE/template-object) object on success.
  */
export function syncGuildTemplate(guildId: string, templateCode: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/templates/${templateCode}`
}

/**
  * Modifies the template's metadata. Requires the `MANAGE_GUILD` permission. Returns the [template](#DOCS_RESOURCES_TEMPLATE/template-object) object on success.
  */
export function modifyGuildTemplate(guildId: string, templateCode: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/templates/${templateCode}`
}

/**
  * Deletes the template. Requires the `MANAGE_GUILD` permission. Returns the deleted [template](#DOCS_RESOURCES_TEMPLATE/template-object) object on success.
  */
export function deleteGuildTemplate(guildId: string, templateCode: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/templates/${templateCode}`
}

/**
  * Returns the [user](#DOCS_RESOURCES_USER/user-object) object of the requester's account. For OAuth2, this requires the `identify` scope, which will return the object _without_ an email, and optionally the `email` scope, which returns the object _with_ an email.
  */
export function getCurrentUser() {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/users/@me`
}

/**
  * Returns a [user](#DOCS_RESOURCES_USER/user-object) object for a given user ID.
  */
export function getUser(userId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/users/${userId}`
}

/**
  * Modify the requester's user account settings. Returns a [user](#DOCS_RESOURCES_USER/user-object) object on success.
  */
export function modifyCurrentUser() {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/users/@me`
}

/**
  * Returns a list of partial [guild](#DOCS_RESOURCES_GUILD/guild-object) objects the current user is a member of. Requires the `guilds` OAuth2 scope.
  */
export function getCurrentUserGuilds() {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/users/@me/guilds`
}

/**
  * Leave a guild. Returns a 204 empty response on success.
  */
export function leaveGuild(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/users/@me/guilds/${guildId}`
}

/**
  * Returns a list of [DM channel](#DOCS_RESOURCES_CHANNEL/channel-object) objects. For bots, this is no longer a supported method of getting recent DMs, and will return an empty array.
  */
export function getUserDMs() {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/users/@me/channels`
}

/**
  * Create a new DM channel with a user. Returns a [DM channel](#DOCS_RESOURCES_CHANNEL/channel-object) object.
  */
export function createDM() {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/users/@me/channels`
}

/**
  * Create a new group DM channel with multiple users. Returns a [DM channel](#DOCS_RESOURCES_CHANNEL/channel-object) object. This endpoint was intended to be used with the now-deprecated GameBridge SDK. DMs created with this endpoint will not be shown in the Discord client
  */
export function createGroupDM() {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/users/@me/channels`
}

/**
  * Returns a list of [connection](#DOCS_RESOURCES_USER/connection-object) objects. Requires the `connections` OAuth2 scope.
  */
export function getUserConnections() {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/users/@me/connections`
}

/**
  * Returns an array of [voice region](#DOCS_RESOURCES_VOICE/voice-region-object) objects that can be used when creating servers.
  */
export function listVoiceRegions() {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/voice/regions`
}

/**
  * Create a new webhook. Requires the `MANAGE_WEBHOOKS` permission. Returns a [webhook](#DOCS_RESOURCES_WEBHOOK/webhook-object) object on success. Webhook names follow our naming restrictions that can be found in our [Usernames and Nicknames](#DOCS_RESOURCES_USER/usernames-and-nicknames) documentation, with the following additional stipulations:

- Webhook names cannot be: 'clyde'  */
export function createWebhook(channelId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/webhooks`
}

/**
  * Returns a list of channel [webhook](#DOCS_RESOURCES_WEBHOOK/webhook-object) objects. Requires the `MANAGE_WEBHOOKS` permission.
  */
export function getChannelWebhooks(channelId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/channels/${channelId}/webhooks`
}

/**
  * Returns a list of guild [webhook](#DOCS_RESOURCES_WEBHOOK/webhook-object) objects. Requires the `MANAGE_WEBHOOKS` permission.
  */
export function getGuildWebhooks(guildId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/guilds/${guildId}/webhooks`
}

/**
  * Returns the new [webhook](#DOCS_RESOURCES_WEBHOOK/webhook-object) object for the given id.
  */
export function getWebhook(webhookId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/webhooks/${webhookId}`
}

/**
  * Same as above, except this call does not require authentication and returns no user in the webhook object.
  */
export function getWebhookWithToken(webhookId: string, webhookToken: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/webhooks/${webhookId}/${webhookToken}`
}

/**
  * Modify a webhook. Requires the `MANAGE_WEBHOOKS` permission. Returns the updated [webhook](#DOCS_RESOURCES_WEBHOOK/webhook-object) object on success.
  */
export function modifyWebhook(webhookId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/webhooks/${webhookId}`
}

/**
  * Same as above, except this call does not require authentication, does not accept a `channel_id` parameter in the body, and does not return a user in the webhook object.
  */
export function modifyWebhookWithToken(webhookId: string, webhookToken: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/webhooks/${webhookId}/${webhookToken}`
}

/**
  * Delete a webhook permanently. Requires the `MANAGE_WEBHOOKS` permission. Returns a 204 NO CONTENT response on success.
  */
export function deleteWebhook(webhookId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/webhooks/${webhookId}`
}

/**
  * Same as above, except this call does not require authentication.
  */
export function deleteWebhookWithToken(webhookId: string, webhookToken: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/webhooks/${webhookId}/${webhookToken}`
}

export function executeWebhook(webhookId: string, webhookToken: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/webhooks/${webhookId}/${webhookToken}`
}

export function executeSlackCompatibleWebhook(webhookId: string, webhookToken: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/webhooks/${webhookId}/${webhookToken}/slack`
}

export function executeGitHubCompatibleWebhook(webhookId: string, webhookToken: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/webhooks/${webhookId}/${webhookToken}/github`
}

/**
  * Edits a previously-sent webhook message from the same token.
  */
export function editWebhookMessage(webhookId: string, webhookToken: string, messageId: string) {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/webhooks/${webhookId}/${webhookToken}/messages/${messageId}`
}

export function getGateway() {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/gateway`
}

export function getGatewayBot() {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/gateway/bot`
}

/**
  * Returns the bot's OAuth2 [application object](#DOCS_TOPICS_OAUTH2/application-object) without `flags`.
  */
export function getCurrentApplicationInformation() {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/oauth2/applications/@me`
}

/**
  * Returns info about the current authorization. Requires authentication with a bearer token.
  */
export function getCurrentAuthorizationInformation() {
    return `${DISCORD_API_BASE}/v${DISCORD_API_VERSION}/oauth2/@me`
}
