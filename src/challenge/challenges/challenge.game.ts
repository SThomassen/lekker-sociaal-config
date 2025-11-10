import { ChallengeCategory } from "../challenge.types";

export const GameChallenges: ChallengeCategory = {
    name: 'Game',
    emoji: '🎮',
    weight: 1,
    description: 'Game challenges',
    challenges: [
        // 🟢 Makkelijk
        { name: 'Player movement', description: 'Create basic player movement using keyboard or controller input.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Collect coins', description: 'Add collectible coins that disappear and increase the score.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Jump mechanic', description: 'Implement a simple jump for a 2D or 3D character.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Camera follow', description: 'Make the camera follow the player smoothly.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Main menu', description: 'Create a simple main menu with Start and Quit buttons.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Health system', description: 'Add a health variable and UI bar that decreases when hit.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Enemy spawn', description: 'Make enemies spawn at intervals or random locations.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Game over screen', description: 'Display a Game Over message when the player dies.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Background parallax', description: 'Create a parallax scrolling background for depth.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Simple sound effects', description: 'Add basic sound effects for actions like jump, hit, and collect.', difficulty: 'easy', created_by: 'editor' },
    
        // 🟡 Gemiddeld
        { name: 'Enemy AI (patrol)', description: 'Create enemies that patrol between two points and chase the player when nearby.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Shooting mechanic', description: 'Implement shooting with projectiles and hit detection.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Inventory system', description: 'Build a small inventory to pick up and equip items.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Dialogue system', description: 'Create a dialogue box that displays character conversations.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Save and load', description: 'Add saving and loading for player progress or settings.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Pause menu', description: 'Implement a pause system that freezes gameplay and opens a menu.', difficulty: 'medium', created_by: 'editor' },
        { name: '2D platformer prototype', description: 'Combine movement, gravity, enemies, and coins into a simple platformer.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Day-night cycle', description: 'Create a dynamic lighting system that changes over time.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Basic level design', description: 'Build a complete playable level with obstacles and pacing.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Score combo system', description: 'Add a combo multiplier that rewards fast or skillful play.', difficulty: 'medium', created_by: 'editor' },
    
        // 🔴 Moeilijk
        { name: 'Procedural level generation', description: 'Generate random levels or terrain each playthrough.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Finite state machine AI', description: 'Implement AI behavior using a finite state machine.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Multiplayer basics', description: 'Create a simple local or online multiplayer prototype.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Boss fight system', description: 'Design and implement a boss with multiple attack phases.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Ragdoll physics', description: 'Add physics-based ragdoll reactions to defeated characters.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Quest system', description: 'Build a quest system that tracks objectives and rewards.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Cutscene system', description: 'Create a simple system for scripted camera and dialogue sequences.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Advanced shader effect', description: 'Make a unique shader (e.g., hologram, dissolve, or outline).', difficulty: 'hard', created_by: 'editor' },
        { name: 'Physics-based puzzle', description: 'Create a puzzle mechanic that relies on real physics simulation.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Complete mini-game', description: 'Develop a small, fully playable game loop with start, gameplay, and win/lose conditions.', difficulty: 'hard', created_by: 'editor' }
    ]
}