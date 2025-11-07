import { ChallengeData } from "./challenge.type";

export const defaultChallengeData: ChallengeData = {
    'code': {
        name: 'Code',
        emoji: '💻',
        weight: 1,
        description: 'Code challenges',
            challenges: [
            {
                name: 'Make a game mechanic with only one button',
                description: 'Create a game mechanic with only one button',
                time_limit: 10,
                difficulty: 'medium'
            }
        ]
    },
    'draw': {
        name: 'Draw',
        emoji: '🎨',
        weight: 1,
        description: 'Draw challenges',
        challenges: [
            {
                name: 'Draw a pirate with a robot parrot',
                description: 'Draw a pirate with a robot parrot',
            }
        ]
    },
    '3d': {
        name: '3D',
        emoji: '🎯',
        weight: 1,
        description: '3D challenges',
        challenges: [
            {
                name: 'Model a futuristic coffee mug',
                description: 'Model a futuristic coffee mug',
            }
        ]
    },
    'music': {
        name: 'Music',
        emoji: '🎵',
        weight: 1,
        description: 'Music challenges',
        challenges: [
            {
                name: 'Compose a song using only 3 notes',
                description: 'Compose a song using only 3 notes',
            }
        ]
    },
    'writing': {
        name: 'Writing',
        emoji: '✍️',
        weight: 1,
        description: 'Writing challenges',
        challenges: [
            {
                name: 'Write a story where the villain is actually right',
                description: 'Write a story where the villain is actually right',
            }
        ]
    },
    'photo': {
        name: 'Photo',
        emoji: '📸',
        weight: 1,
        description: 'Photo challenges',
        challenges: [
            {
                name: 'Take a photo that tells a story without words',
                description: 'Take a photo that tells a story without words',
            }
        ]
    },
    'design': {
        name: 'Design',
        emoji: '🎨',
        weight: 1,
        description: 'Design challenges',
        challenges: [
            {
                name: 'Design a poster for a movie that doesn\'t exist',
                description: 'Design a poster for a movie that doesn\'t exist',
            }
        ]
    },
    'animation': {
        name: 'Animation',
        emoji: '🎬',
        weight: 1,
        description: 'Animation challenges',
        challenges: [
            {
                name: 'Animate a character blinking',
                description: 'Animate a character blinking',
            }
        ]
    },
    'game': {
        name: 'Game',
        emoji: '🎮',
        weight: 1,
        description: 'Game challenges',
        challenges: [
            {
                name: 'Design a game where you can only move diagonally',
                description: 'Design a game where you can only move diagonally',
            }
        ]
    },
    'craft': {
        name: 'Craft',
        emoji: '🛠️',
        weight: 1,
        description: 'Craft challenges',
        challenges: [
            {
                name: 'Make something useful from cardboard',
                description: 'Make something useful from cardboard',    
            }
        ]
    },  
    'cooking': {
        name: 'Cooking',
        emoji: '👨‍🍳',
        weight: 1,
        description: 'Cooking challenges',
        challenges: [
            {
                name: 'Cook a meal using only 3 ingredients',
                description: 'Cook a meal using only 3 ingredients',
            }
        ]
    }
};

