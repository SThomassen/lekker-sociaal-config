import { HangoutActivityMessage, HangoutConfig } from "./hangout.types";

export const defaultHangoutConfig: HangoutConfig = {
    roomURL: '',
    channel: 'general',
    roleAssign: '',
    presenceDynamic: true,
    presenceText: 'Listening to Hangout',
    autoUpdate: true,
    autoUpdateInterval: 10,
    inactiveMessage: 'No activity in the hangout',
    joinMessage: '**{user}** joined the hangout',
    leaveMessage: '**{user}** left the hangout'
}

export const defaultHangoutActivityMessage: HangoutActivityMessage = {
    message: 'Listening to Hangout',
    showJoinLeave: true,
    showCurrentSong: true,
    showCurrentDJ: true,
    showCurrentListeners: true,
    showCurrentPlaylist: true,
    showCurrentPlaylistDuration: true,
    showCurrentPlaylistProgress: true
}
