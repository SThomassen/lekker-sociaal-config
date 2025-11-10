import { ChallengeCategory } from "../challenge.types";

export const ModelingChallenges: ChallengeCategory = {
    name: 'Modeling',
    emoji: '🎯',
    weight: 1,
    description: 'Modeling challenges',
    challenges: [
        // 🟢 Makkelijk
        { name: 'Simple cup', description: 'Model a basic cup or mug using primitive shapes.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Low-poly tree', description: 'Create a low-poly tree with a trunk and simple leaves.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Chair', description: 'Model a simple wooden chair with four legs.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Dice', description: 'Model a six-sided die with engraved dots.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Pencil or pen', description: 'Create a simple pencil or pen model with basic materials.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Apple', description: 'Model a basic apple shape with a stem.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Simple house', description: 'Make a low-poly house with a roof, door, and windows.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Game coin', description: 'Create a collectible coin model for a game.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Simple bottle', description: 'Model a plastic or glass bottle with a cap.', difficulty: 'easy', created_by: 'editor' },
        { name: 'Rock or stone', description: 'Sculpt or model a low-poly rock shape with uneven surfaces.', difficulty: 'easy', created_by: 'editor' },
    
        // 🟡 Gemiddeld
        { name: 'Table set', description: 'Model a table with chairs and some small props on top.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Cartoon character', description: 'Model a simple cartoon-style character with exaggerated proportions.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Weapon prop', description: 'Create a sword, axe, or sci-fi gun with clean topology.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Vehicle base', description: 'Model the body of a simple car, bike, or spaceship.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Room interior', description: 'Model a small room including furniture and decor.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Stylized tree pack', description: 'Create 3–5 stylized tree models for a game environment.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Robot head', description: 'Design and model a robot head with mechanical details.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Treasure chest', description: 'Model a detailed chest with hinges and metal accents.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Lantern or lamp', description: 'Model a lantern or lamp with glass and metal materials.', difficulty: 'medium', created_by: 'editor' },
        { name: 'Creature bust', description: 'Sculpt or model the bust of a fantasy creature or alien.', difficulty: 'medium', created_by: 'editor' },
    
        // 🔴 Moeilijk
        { name: 'Full character model', description: 'Model a full humanoid or creature character with clean topology and pose.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Vehicle with details', description: 'Create a detailed car, ship, or aircraft including interior parts.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Environment scene', description: 'Build a small 3D environment such as a village, cave, or sci-fi room.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Hard-surface prop', description: 'Model a complex mechanical object like a drone or robot arm.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Realistic portrait sculpt', description: 'Sculpt a realistic human head with correct proportions and anatomy.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Animated asset', description: 'Model and rig a character or object with simple animation.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Architectural visualization', description: 'Model a realistic building exterior or interior scene with lighting.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Creature full body', description: 'Sculpt a detailed creature including anatomy, claws, and textures.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Game-ready asset', description: 'Create a low-poly asset with baked normal and AO maps.', difficulty: 'hard', created_by: 'editor' },
        { name: 'Cinematic render', description: 'Build, light, and render a cinematic-quality 3D scene.', difficulty: 'hard', created_by: 'editor' }
    ]
}