import { ChallengeCategory } from "../challenge.types";

export const ModelingChallenges: ChallengeCategory = {
    name: 'Modeling',
    emoji: '🎯',
    weight: 1,
    description: 'Modeling challenges',
    challenges: [
        // 🟢 Makkelijk
        { id: '4c9cdb3d-c6a7-4910-b7cf-f5de52479620', name: 'Simple cup', description: 'Model a basic cup or mug using primitive shapes.', difficulty: 'easy', created_by: 'editor' },
        { id: '7b823668-9c44-4045-a99f-0c1f7615ed35', name: 'Low-poly tree', description: 'Create a low-poly tree with a trunk and simple leaves.', difficulty: 'easy', created_by: 'editor' },
        { id: '2f70ac3f-f804-46f1-ab33-7d1c73db7521', name: 'Chair', description: 'Model a simple wooden chair with four legs.', difficulty: 'easy', created_by: 'editor' },
        { id: '31141a8c-40de-44cd-b0d2-e4ec25961bee', name: 'Dice', description: 'Model a six-sided die with engraved dots.', difficulty: 'easy', created_by: 'editor' },
        { id: 'a0afdebc-118c-4a70-9c6e-7a7c3505b237', name: 'Pencil or pen', description: 'Create a simple pencil or pen model with basic materials.', difficulty: 'easy', created_by: 'editor' },
        { id: '472f61d9-9001-40e8-8f9e-9cfdb645f7c6', name: 'Apple', description: 'Model a basic apple shape with a stem.', difficulty: 'easy', created_by: 'editor' },
        { id: 'c53dda15-74a7-4068-8936-f55d4983e73c', name: 'Simple house', description: 'Make a low-poly house with a roof, door, and windows.', difficulty: 'easy', created_by: 'editor' },
        { id: 'fc36f1f2-44b3-42fb-99d6-b304e936979a', name: 'Game coin', description: 'Create a collectible coin model for a game.', difficulty: 'easy', created_by: 'editor' },
        { id: 'a292ed4b-6e47-41f8-a5ef-b27e98d901f8', name: 'Simple bottle', description: 'Model a plastic or glass bottle with a cap.', difficulty: 'easy', created_by: 'editor' },
        { id: 'f56f2545-57ab-4762-b6b1-554dff666f45', name: 'Rock or stone', description: 'Sculpt or model a low-poly rock shape with uneven surfaces.', difficulty: 'easy', created_by: 'editor' },
    
        // 🟡 Gemiddeld
        { id: 'c112f2c4-1397-4a64-8eb3-59584606f691', name: 'Table set', description: 'Model a table with chairs and some small props on top.', difficulty: 'medium', created_by: 'editor' },
        { id: 'd2871a14-b30c-4db4-9200-50e0984a6a2b', name: 'Cartoon character', description: 'Model a simple cartoon-style character with exaggerated proportions.', difficulty: 'medium', created_by: 'editor' },
        { id: '2911c637-e893-4c6f-98f8-f06a4ebe17f6', name: 'Weapon prop', description: 'Create a sword, axe, or sci-fi gun with clean topology.', difficulty: 'medium', created_by: 'editor' },
        { id: '7181f8e2-a95e-4e41-8deb-77e9b4c5a6c8', name: 'Vehicle base', description: 'Model the body of a simple car, bike, or spaceship.', difficulty: 'medium', created_by: 'editor' },
        { id: '719c320b-854c-468a-9520-80ce6ed4da00', name: 'Room interior', description: 'Model a small room including furniture and decor.', difficulty: 'medium', created_by: 'editor' },
        { id: 'decf9b2d-5fec-40b3-89b4-c514c3a38c51', name: 'Stylized tree pack', description: 'Create 3–5 stylized tree models for a game environment.', difficulty: 'medium', created_by: 'editor' },
        { id: '15a35a3f-f94d-4ab7-8c9b-c3cdc653d323', name: 'Robot head', description: 'Design and model a robot head with mechanical details.', difficulty: 'medium', created_by: 'editor' },
        { id: 'bee8b41c-8ded-4bbf-ac3a-e9584fb11edd', name: 'Treasure chest', description: 'Model a detailed chest with hinges and metal accents.', difficulty: 'medium', created_by: 'editor' },
        { id: '56c836f1-48e6-4f71-9f9a-a48141a2efd0', name: 'Lantern or lamp', description: 'Model a lantern or lamp with glass and metal materials.', difficulty: 'medium', created_by: 'editor' },
        { id: '7053a170-214c-40df-8061-1c1f7e24cd75', name: 'Creature bust', description: 'Sculpt or model the bust of a fantasy creature or alien.', difficulty: 'medium', created_by: 'editor' },
    
        // 🔴 Moeilijk
        { id: 'a5f03eb6-5b7a-4de3-ada4-8b2823f4b1fd', name: 'Full character model', description: 'Model a full humanoid or creature character with clean topology and pose.', difficulty: 'hard', created_by: 'editor' },
        { id: '44fb0dab-0daf-41ba-bbff-7a3f79e0cd72', name: 'Vehicle with details', description: 'Create a detailed car, ship, or aircraft including interior parts.', difficulty: 'hard', created_by: 'editor' },
        { id: 'f8ac204c-db72-4763-8119-ccdf6fc12f73', name: 'Environment scene', description: 'Build a small 3D environment such as a village, cave, or sci-fi room.', difficulty: 'hard', created_by: 'editor' },
        { id: '492de7ea-eb6d-442e-9ad5-651ab0da0f79', name: 'Hard-surface prop', description: 'Model a complex mechanical object like a drone or robot arm.', difficulty: 'hard', created_by: 'editor' },
        { id: 'c47250cf-1df5-4cf6-92c8-f94d004dc832', name: 'Realistic portrait sculpt', description: 'Sculpt a realistic human head with correct proportions and anatomy.', difficulty: 'hard', created_by: 'editor' },
        { id: '9ab541ea-0c6c-42d8-b6e1-df7dc54b3157', name: 'Animated asset', description: 'Model and rig a character or object with simple animation.', difficulty: 'hard', created_by: 'editor' },
        { id: 'a4ff34f8-ca36-4392-8600-aa0e952e2a42', name: 'Architectural visualization', description: 'Model a realistic building exterior or interior scene with lighting.', difficulty: 'hard', created_by: 'editor' },
        { id: 'd206df9a-05b3-417b-a2a7-e24ea1d87739', name: 'Creature full body', description: 'Sculpt a detailed creature including anatomy, claws, and textures.', difficulty: 'hard', created_by: 'editor' },
        { id: 'bef9d59d-22a2-400d-a476-d3a25331b97c', name: 'Game-ready asset', description: 'Create a low-poly asset with baked normal and AO maps.', difficulty: 'hard', created_by: 'editor' },
        { id: '2fc099de-1713-42fa-9df6-370ec463edf0', name: 'Cinematic render', description: 'Build, light, and render a cinematic-quality 3D scene.', difficulty: 'hard', created_by: 'editor' }
    ]
}