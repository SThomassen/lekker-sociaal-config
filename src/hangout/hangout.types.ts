export interface HangoutConfig {
    roomURL: string;
    channel: string; // The channel to send the hangout message to
    roleAssign: string; // The role to assign to the users who are listening to the hangout
    presenceDynamic: boolean; // If true, the bot will update the presence text based on the hangout activity
    presenceText: string; // The text to display in the presence when presenceDynamic is false
    autoUpdate: boolean; // If true, the bot will automatically update the presence text based on the hangout activity
    autoUpdateInterval: number; // The interval in seconds to update the presence text
    inactiveMessage: string; // The message to display in the channel when the hangout is inactive
    joinMessage: string; // The message to display in the channel when a user joins the hangout
    leaveMessage: string; // The message to display in the channel when a user leaves the hangout
}

export interface HangoutActivity {
    room: string;
    currentSong: string;
    currentDJ: string;
    currentListeners: string[];
    currentPlaylist: string;
    currentPlaylistDuration: number;
    currentPlaylistProgress: number;
}

export interface HangoutActivityMessage {
    message: string;
    showJoinLeave: boolean;
    showCurrentSong: boolean;
    showCurrentDJ: boolean;
    showCurrentListeners: boolean;
    showCurrentPlaylist: boolean;
    showCurrentPlaylistDuration: boolean;
    showCurrentPlaylistProgress: boolean;
}