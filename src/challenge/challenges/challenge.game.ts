import { ChallengeCategory } from "../challenge.types";

export const GameChallenges: ChallengeCategory = {
    name: 'Game',
    emoji: '🎮',
    weight: 1,
    description: 'Game challenges',
    challenges: [
        // 🟢 Makkelijk
        { id: '7d510d46-a738-4a72-bda2-75fe61f88a74', name: 'Player movement', description: 'Create basic player movement using keyboard or controller input.', difficulty: 'easy', created_by: 'editor' },
        { id: '83f69fb3-eb8c-490e-ac35-1d785e3721a8', name: 'Collect coins', description: 'Add collectible coins that disappear and increase the score.', difficulty: 'easy', created_by: 'editor' },
        { id: '6be69715-96c6-4944-affb-66867b02355d', name: 'Jump mechanic', description: 'Implement a simple jump for a 2D or 3D character.', difficulty: 'easy', created_by: 'editor' },
        { id: '65345308-98dc-42d1-a7c1-a80d9c836bcd', name: 'Camera follow', description: 'Make the camera follow the player smoothly.', difficulty: 'easy', created_by: 'editor' },
        { id: 'a17caed9-a708-4876-944b-7c843dbde454', name: 'Main menu', description: 'Create a simple main menu with Start and Quit buttons.', difficulty: 'easy', created_by: 'editor' },
        { id: '243cd9f5-fad3-4c75-bfb1-5ad9bd54bfa0', name: 'Health system', description: 'Add a health variable and UI bar that decreases when hit.', difficulty: 'easy', created_by: 'editor' },
        { id: 'cbf7629c-face-49c1-b103-dd1ace6a555f', name: 'Enemy spawn', description: 'Make enemies spawn at intervals or random locations.', difficulty: 'easy', created_by: 'editor' },
        { id: '2e7d5b0e-de46-47ce-8406-5008d0163dd8', name: 'Game over screen', description: 'Display a Game Over message when the player dies.', difficulty: 'easy', created_by: 'editor' },
        { id: 'a1a72657-d79b-4d17-9c11-570c0c8362b4', name: 'Background parallax', description: 'Create a parallax scrolling background for depth.', difficulty: 'easy', created_by: 'editor' },
        { id: 'a3d5af06-d99d-41d3-9345-581f451cc197', name: 'Simple sound effects', description: 'Add basic sound effects for actions like jump, hit, and collect.', difficulty: 'easy', created_by: 'editor' },
    
        // 🟡 Gemiddeld
        { id: '2d03b8b5-3d49-46c6-9be5-3888d717d183', name: 'Enemy AI (patrol)', description: 'Create enemies that patrol between two points and chase the player when nearby.', difficulty: 'medium', created_by: 'editor' },
        { id: '7dca9267-1a0e-4695-9081-fbdfed38cdfc', name: 'Shooting mechanic', description: 'Implement shooting with projectiles and hit detection.', difficulty: 'medium', created_by: 'editor' },
        { id: '64ced935-d8b4-4b0a-8f9c-1ebcd7e90ede', name: 'Inventory system', description: 'Build a small inventory to pick up and equip items.', difficulty: 'medium', created_by: 'editor' },
        { id: '20ed4b79-9aff-4242-8e81-da79b428aa64', name: 'Dialogue system', description: 'Create a dialogue box that displays character conversations.', difficulty: 'medium', created_by: 'editor' },
        { id: '2004f4fa-3e09-461b-bc95-70ffcd04ede6', name: 'Save and load', description: 'Add saving and loading for player progress or settings.', difficulty: 'medium', created_by: 'editor' },
        { id: 'f8daab9d-61a3-4fe8-b885-b5cb8274f2fa', name: 'Pause menu', description: 'Implement a pause system that freezes gameplay and opens a menu.', difficulty: 'medium', created_by: 'editor' },
        { id: 'b93d719c-d329-4bf5-868e-63fb814f0595', name: '2D platformer prototype', description: 'Combine movement, gravity, enemies, and coins into a simple platformer.', difficulty: 'medium', created_by: 'editor' },
        { id: 'ab8842aa-239d-4dac-b75c-1a0a6a2d07ff', name: 'Day-night cycle', description: 'Create a dynamic lighting system that changes over time.', difficulty: 'medium', created_by: 'editor' },
        { id: '317960fb-9540-4c5b-a638-f70ab5131ee4', name: 'Basic level design', description: 'Build a complete playable level with obstacles and pacing.', difficulty: 'medium', created_by: 'editor' },
        { id: 'c49494e6-e1bc-4020-a257-4b96b2d6419c', name: 'Score combo system', description: 'Add a combo multiplier that rewards fast or skillful play.', difficulty: 'medium', created_by: 'editor' },
    
        // 🔴 Moeilijk
        { id: '50ea07a8-2ad8-436e-b099-45c9e5e980d8', name: 'Procedural level generation', description: 'Generate random levels or terrain each playthrough.', difficulty: 'hard', created_by: 'editor' },
        { id: 'a407a2f1-4f5f-41b7-9ddc-6606f62ba2dd', name: 'Finite state machine AI', description: 'Implement AI behavior using a finite state machine.', difficulty: 'hard', created_by: 'editor' },
        { id: '82584fd8-11da-4dda-91f0-7427002cab84', name: 'Multiplayer basics', description: 'Create a simple local or online multiplayer prototype.', difficulty: 'hard', created_by: 'editor' },
        { id: 'ac055ec5-1845-4920-a2dc-d3b58dfc95a1', name: 'Boss fight system', description: 'Design and implement a boss with multiple attack phases.', difficulty: 'hard', created_by: 'editor' },
        { id: 'e835bfa5-ee16-4eaa-90eb-90e1eb3d214b', name: 'Ragdoll physics', description: 'Add physics-based ragdoll reactions to defeated characters.', difficulty: 'hard', created_by: 'editor' },
        { id: 'a33afebc-7867-41b0-bbb9-af50b1c62a7a', name: 'Quest system', description: 'Build a quest system that tracks objectives and rewards.', difficulty: 'hard', created_by: 'editor' },
        { id: 'e56d9cd3-35a9-4789-9803-0b5bb8c18e5e', name: 'Cutscene system', description: 'Create a simple system for scripted camera and dialogue sequences.', difficulty: 'hard', created_by: 'editor' },
        { id: '464f357e-60d1-4810-90a0-9c2f91f8b218', name: 'Advanced shader effect', description: 'Make a unique shader (e.g., hologram, dissolve, or outline).', difficulty: 'hard', created_by: 'editor' },
        { id: 'c01698eb-3a34-448c-9ab8-50aadebbfaa3', name: 'Physics-based puzzle', description: 'Create a puzzle mechanic that relies on real physics simulation.', difficulty: 'hard', created_by: 'editor' },
        { id: 'dbd2bdb1-dc4d-4f5c-a044-c93f63809ac3', name: 'Complete mini-game', description: 'Develop a small, fully playable game loop with start, gameplay, and win/lose conditions.', difficulty: 'hard', created_by: 'editor' }
    ]
}